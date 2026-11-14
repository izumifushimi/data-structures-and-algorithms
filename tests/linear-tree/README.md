# 线性结构与树验证源码

这里保留为笔记最小修正版补齐类型和头文件的 C++ 验证程序，以及完整「练习」程序。审阅范围见 [验证记录](../../docs/linear-tree-validation.md)。没有收录可执行文件或调试符号。

单独编译运行，例如：

```sh
clang++ -std=c++17 seq-list.cpp -o /tmp/algorithms-seq-list
/tmp/algorithms-seq-list
```

各文件为独立程序，不应直接合并。部分源码使用 `bits/stdc++.h`，在缺少该便捷头的编译器环境中需要换成对应标准头。
