import { WASI } from '@runno/wasi';

const encoder = new TextEncoder();
const decoder = new TextDecoder();
const MAX_OUTPUT = 64 * 1024;
let assetPromise;

/** Each guest sees only this in-memory WASI filesystem; no real files or network. */
export function parseTar(buffer) {
  const bytes = new Uint8Array(buffer);
  const fs = {};
  for (let offset = 0; offset + 512 <= bytes.length;) {
    const h = bytes.subarray(offset, offset + 512);
    let name = decoder.decode(h.subarray(0, 100)).split('\0')[0];
    if (!name) break;
    const prefix = decoder.decode(h.subarray(345, 500)).split('\0')[0];
    if (prefix) name = `${prefix}/${name}`;
    const size = parseInt(decoder.decode(h.subarray(124, 136)).replace(/\0/g, '').trim() || '0', 8);
    const kind = h[156];
    if (kind === 0 || kind === 48) {
      const path = '/' + name.replace(/^\.\//, '').replace(/^\/+/, '');
      fs[path] = { path, mode: 'binary', content: bytes.slice(offset + 512, offset + 512 + size), timestamps: timestamps() };
    }
    offset += 512 + Math.ceil(size / 512) * 512;
  }
  return fs;
}

function timestamps() {
  return { access: new Date(), change: new Date(), modification: new Date() };
}
function stringFile(path, content) {
  return {path, content, mode: 'string', timestamps: timestamps()};
}
async function fetchAsset(name, baseURL) {
  const url = new URL(name, new URL(baseURL, location.href));
  let response;
  try { response = await fetch(url); }
  catch (error) { throw new Error(`运行时资源无法加载：${url.href}（${error?.message ?? error}）`); }
  if (!response.ok) throw new Error(`运行时资源下载失败：${url.href}，HTTP ${response.status}`);
  const buffer = await response.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  // Vite and some hosts transparently decompress .gz using Content-Encoding.
  // Decompress only when the actual response bytes still carry the gzip magic.
  if (bytes[0] === 0x1f && bytes[1] === 0x8b) {
    return new Response(new Blob([buffer]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer();
  }
  return buffer;
}

export async function loadToolchain(baseURL = '/cpp/', onProgress = () => {}) {
  assetPromise ??= (async () => {
    onProgress({stage:'download', text:'首次加载 C++ 编译器（约 19 MB），以后由浏览器缓存'});
    const [compilerBytes, linkerBytes, fsBytes] = await Promise.all([
      fetchAsset('clang.wasm.gz', baseURL),
      fetchAsset('wasm-ld.wasm.gz', baseURL),
      fetchAsset('clang-fs.tar.gz', baseURL)
    ]);
    const [compiler, linker] = await Promise.all([WebAssembly.compile(compilerBytes), WebAssembly.compile(linkerBytes)]);
    return {compiler, linker, fs: parseTar(fsBytes)};
  })();
  try {return await assetPromise;} catch (e) {assetPromise = undefined; throw e;}
}

async function execute(module, args, fs, stdin = '') {
  let stdout = '', stderr = '', cursor = 0;
  const take = (text, target) => {
    if (encoder.encode(stdout + stderr + text).length > MAX_OUTPUT) {
      const error = new Error('输出超过 64 KiB 限制'); error.code = 'OLE'; throw error;
    }
    if (target === 'stdout') stdout += text; else stderr += text;
  };
  const wasi = new WASI({ args, env:{}, fs,
    stdin: (maxBytes) => {
      if (cursor >= stdin.length) return null;
      // Do not split a UTF-16 surrogate pair or consume bytes beyond the WASI request.
      let text = '', byteCount = 0;
      for (const char of stdin.slice(cursor)) {
        const count = encoder.encode(char).length;
        if (byteCount + count > maxBytes) break;
        text += char; byteCount += count; cursor += char.length;
      }
      return text || null;
    },
    stdout: out => take(out, 'stdout'), stderr: out => take(out, 'stderr')
  });
  const instance = await WebAssembly.instantiate(module, wasi.getImportObject());
  const result = wasi.start({ module, instance });
  return {...result, stdout, stderr};
}

const compilerArgs = ['clang', '-cc1', '-emit-obj', '-disable-free', '-isysroot', '/sys',
 '-internal-isystem', '/sys/include/c++/v1', '-internal-isystem', '/sys/include',
 '-internal-isystem','/sys/lib/clang/8.0.1/include', '-ferror-limit','6',
 '-fmessage-length','100','-std=c++17','-O1','-o','/program.o','-x','c++','/program.cpp'];
const linkerArgs = ['wasm-ld', '--no-threads', '--export-dynamic', '-z', 'stack-size=1048576',
 '--max-memory=67108864','-L/sys/lib/wasm32-wasi','/sys/lib/wasm32-wasi/crt1.o','/program.o',
 '-lc','-lc++','-lc++abi','/sys/lib/clang/8.0.1/lib/wasi/libclang_rt.builtins-wasm32.a','-o','/program.wasm'];

/** Compile once, then run a fresh WASI instance for each test case. */
export async function judgeCpp({code, cases = [], baseURL = '/cpp/'}, onProgress = () => {}) {
  if (!cases.length || cases.some(test => typeof test.expected !== 'string')) return {status:'NO_TESTS', message:'未配置有效测试用例，无法判定是否通过', cases:[]};
  if (encoder.encode(code).length > 100000) return {status:'CE', message:'代码超过 100 KB 限制', cases:[]};
  const assets = await loadToolchain(baseURL, onProgress);
  let fs = {...assets.fs, '/program.cpp': stringFile('/program.cpp', code)};
  // GCC convenience header, absent in libc++, is supplied as an explicit compatibility header.
  fs['/sys/include/c++/v1/bits/stdc++.h'] = stringFile('/sys/include/c++/v1/bits/stdc++.h',
    ['algorithm','array','bitset','cassert','cctype','cerrno','climits','cmath','cstdio','cstdlib','cstring','deque','functional','iomanip','iostream','iterator','limits','list','map','memory','numeric','queue','set','sstream','stack','string','tuple','unordered_map','unordered_set','utility','vector'].map(h=>`#include <${h}>`).join('\n'));
  onProgress({stage:'compile', text:'正在编译 C++17'});
  const compilation = await execute(assets.compiler, compilerArgs, fs);
  if (compilation.exitCode !== 0) return {status:'CE', message:compilation.stderr || compilation.stdout, cases:[]};
  onProgress({stage:'link', text:'正在链接程序'});
  const linked = await execute(assets.linker, linkerArgs, compilation.fs);
  if (linked.exitCode !== 0) return {status:'CE', message:linked.stderr || linked.stdout, cases:[]};
  const program = await WebAssembly.compile(linked.fs['/program.wasm'].content);
  const results = [];
  for (const [index, test] of cases.entries()) {
    onProgress({stage:'run', index, text:`正在运行测试 ${index+1}/${cases.length}`});
    const started = performance.now();
    // Each test starts with a clean virtual filesystem and no compiler files.
    const result = await execute(program, ['program'], {}, test.stdin ?? '');
    const duration = performance.now() - started;
    const actual = normalizeOutput(result.stdout);
    const expected = normalizeOutput(test.expected ?? '');
    const status = result.exitCode !== 0 ? 'RE' : actual === expected ? 'AC' : 'WA';
    results.push({index, name:test.name ?? `测试 ${index+1}`, status, stdout:result.stdout,
      stderr:result.stderr, expected:test.expected, exitCode:result.exitCode, duration});
    onProgress({stage:'case', index, result:results.at(-1)});
  }
  return {status:results.every(x=>x.status==='AC')?'AC':results.find(x=>x.status!=='AC')?.status ?? 'RE',
    cases:results, message:compilation.stderr};
}
export function normalizeOutput(value) { return String(value).trim().replace(/\s+/g, ' '); }
