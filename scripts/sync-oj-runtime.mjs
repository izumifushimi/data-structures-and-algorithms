import fs from 'node:fs/promises';

const from = new URL('../tools/oj-runtime/bundle/', import.meta.url);
const to = new URL('../public/oj/', import.meta.url);
// Keep toolchain archives, licenses and boot.js. Replace only generated JS.
await fs.rm(new URL('assets/', to), {recursive: true, force: true});
await fs.cp(new URL('assets/', from), new URL('assets/', to), {recursive: true});
await fs.copyFile(new URL('oj.js', from), new URL('oj.js', to));
console.log('Updated public/oj browser runtime from tools/oj-runtime.');
