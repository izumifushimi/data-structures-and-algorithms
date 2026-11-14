# 数据结构与算法

以个人语雀笔记为基础的算法学习网站：阅读讲解、查看原码、单步播放动画，再编写 C++ 代码验证理解。

[打开网站](https://izumifushimi.github.io/data-structures-and-algorithms/) · [GitHub 仓库](https://github.com/izumifushimi/data-structures-and-algorithms)

## 内容与功能

- **6 个章节、57 篇笔记**：绪论、线性结构、树、图、查找、排序。
- **224 段原始代码**完整保存；127 段提供独立的最小修正版及修改说明，可切换对照、复制和下载。
- **77 个分步动画**：播放、暂停、回退、进度控制，以及数组输入调整。复杂树、图和字符串中的固定示例会明确标注。
- **浏览器 C++17 OJ**：28 道预设练习、自定义输入与期望输出、源码差异查看，以及代码草稿自动保存。
- 全部笔记保留语雀来源链接、原文摘要校验值和代码 SHA-256。

## 快速开始

需要 Node.js **22.12 或更新版本**。重建笔记时另外需要 Python **3.9 或更新版本**；运行原生 C++ 测试需要 `clang++`。

```sh
npm ci
npm run dev
```

打开终端显示的本机地址。

```sh
npm run build
```

生产文件输出到 `dist/`。部署至 GitHub Pages 子路径时使用 `npm run build -- --base /data-structures-and-algorithms/`。笔记、配图、OJ 与前端资源均跟随构建基础路径。

## 项目结构

```text
src/                      页面、动画与练习题
public/data/              生成后的笔记与来源清单
public/images/            笔记配图
public/oj/                浏览器判题运行时、压缩工具链及许可证
content/                  原始笔记正文、代码修正与补充讲解
scripts/                  导入、检查和 OJ 构建同步脚本
tools/oj-runtime/         OJ 运行时源码及测试
tests/                    原笔记代码的 C++ 验证源码和报告
docs/                     审阅范围与运行时说明
.github/workflows/        自动检查
```

## 维护笔记

`content/source-notes.json` 保留用于重建的原始正文及必要的来源字段。代码修正独立保存在 `content/review-*.json`，补充讲解位于 `content/lesson-enrichment.json`；原码不会被修正版覆盖。

```sh
npm run import:notes
npm run check
```

导入脚本只依赖仓库内文件和 Python 标准库。已有配图随仓库保存；只有缺少配图时才会尝试从原链接下载。生成结果为 `public/data/notes.json` 和 `public/data/source-manifest.json`。

原码中有 API 示例和依赖章节类型的函数片段。部分同名函数是替代实现，不能不加区分地拼接成一个程序。完整练习参考程序和笔记函数片段的验证范围不同，见 [线性结构与树审阅记录](docs/linear-tree-validation.md) 及 [图、查找、排序验证报告](tests/source-audit/validation.json)。

## OJ 运行与重建

OJ 使用 Clang / C++17 WebAssembly 工具链，在独立、可终止的 Web Worker 内编译、链接并运行。用户源码不上传至第三方编译服务。首次使用需下载同站点约 **19 MB** 工具链；需要支持 Worker、WebAssembly 和 `DecompressionStream` 的现代浏览器。

每个测试单独运行，默认限制为 **2.5 秒、64 MiB 内存、64 KiB 输出、100 KB 源码**；编译和链接各限 45 秒。输出按空白分隔后的 token 比较，源码差异功能只帮助学习。预设测试公开，主要用于个人练习。

仓库已包含可直接运行的浏览器资产。修改 `tools/oj-runtime/` 后重建：

```sh
npm run build:oj
npm run check:oj
npm run build
```

更多说明见 [OJ 运行时文档](docs/oj-runtime.md)。学习进度和草稿保存于当前浏览器的 `localStorage`，没有云端同步。

## 检查

```sh
npm run check             # 笔记数量、原始代码 SHA-256 与讲解完整性
npm run check:animations  # 77 个动画的快照、输入不变与排序末态
npm run check:problems    # clang++ 编译 28 份参考程序并运行 169 组测试
npm run check:oj          # 真实 WebAssembly 编译运行、错误、超时与取消
npm run build            # 生产构建
```

推送到 `main` 后，GitHub Actions 会检查笔记、动画、参考程序和 OJ，并自动部署到 GitHub Pages。仓库 Settings → Pages 的发布来源为 GitHub Actions。更深入的原笔记 C++ 随机测试保留在 `tests/source-audit/`，见其 [运行说明](tests/source-audit/README.md)。

## 来源与许可证

原始学习笔记于 **2026-11-14** 从语雀导入。补充讲解的校对来源见 [来源记录](content/lesson-enrichment-sources.md)。

第三方运行时和编译器的许可证保留在 [`public/oj/licenses/`](public/oj/licenses/)，详见 [第三方声明](THIRD_PARTY_NOTICES.md)。本仓库未为个人笔记和新增代码指定统一的开源许可证。
