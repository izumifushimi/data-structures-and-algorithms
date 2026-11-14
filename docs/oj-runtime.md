# 浏览器 C++17 OJ 运行时

## 源码与构建

- `tools/oj-runtime/runner-core.js`：虚拟 WASI 文件系统、编译、链接和每用例执行。
- `tools/oj-runtime/runner-worker.js`：独立 Worker 入口。
- `tools/oj-runtime/runner-client.js`：主线程进度、取消、输出与时间限制。
- `tools/oj-runtime/vite.config.js`：将运行时及 Worker 打包。
- `scripts/sync-oj-runtime.mjs`：同步生成的 JS 到 `public/oj/`，保留工具链、许可证和 `boot.js`。

```sh
npm ci
npm run build:oj
npm run check:oj
```

压缩工具链由仓库内的 `public/oj/cpp/` 提供，重建不依赖相邻工作目录或下载凭据。

## 工作方式

真实使用 Clang 8 WebAssembly 编译 C++17，再用 wasm-ld 链接；程序在 Worker 的虚拟 WASI 文件系统运行。程序不接触主机文件系统，也没有网络接口。

预设标准输入由同步回调提供，因此不使用 `SharedArrayBuffer`，不要求 COOP/COEP 响应头。压缩资源根据实际 gzip 文件头决定是否解压，兼容静态主机已经透明解压的响应。

`runner-client.js` 的主线程超时器可通过 `worker.terminate()` 停止死循环。默认每用例 2.5 秒；编译和链接各 45 秒；首次加载 120 秒。程序内存限 64 MiB、栈 1 MiB、输出 64 KiB、源码 100 KB。

支持标准 C++ 容器、算法及输入输出；显式提供 `bits/stdc++.h` 兼容头。任意第三方 C++ 库、OS 接口、多线程与网络不在支持范围。函数片段需自行补充匹配的类型定义、头文件和 `main`。

## 结果

输出按空白 token 比较，忽略末尾换行和空白数量。结果包括 AC、WA、CE、RE；无效用例为 NO_TESTS；超时、取消、输出超限和运行时下载错误会产生对应错误状态。不会按源码相似度判定正确性。

## 验证

- `smoke-test.mjs`：真实编译 STL `vector` / `sort`，一般、空数组、负数重复值输入，以及 CE 和 WA。
- `termination-test.mjs`：使用实际部署的打包 Worker，验证死循环 TLE、超时后再次提交 AC、输出超限 OLE 与取消。
- `node-worker-adapter.mjs`：只用于 Node 测试，将 Worker 消息接口适配到 `worker_threads`，资源仍读取仓库内的工具链。

工具链来自 [Runno 官方 langs 目录](https://github.com/taybenlor/runno/tree/main/langs)。链接参数补入 `libclang_rt.builtins-wasm32.a`，支持 STL 浮点相关辅助函数。
