# 补充讲解校对依据

57 篇内容依据 source-exports 中原始导出正文逐篇补充；不替换原文。通俗例子和讲解为新编写内容。

- C++ 标准草案 list 操作规范，校对 merge 的有序前提、unique 只处理相邻重复项、remove_if 的谓词要求：[list.ops](https://eel.is/c++draft/list.ops)。
- C++ 标准草案适配器规范，校对 priority_queue 默认 vector、随机访问要求和 queue/stack 的底层接口约束：[container.adaptors](https://eel.is/c++draft/container.adaptors)。
- Sleator 与 Tarjan 原论文摘要，校对伸展树的均摊 O(log n)，而非每次最坏 O(log n)：[Self-Adjusting Binary Search Trees](https://www.cs.cmu.edu/~sleator/papers/Self-Adjusting.htm)。
- Open Data Structures 教材，校对多路 B 树的键/孩子顺序、同层叶子和外存块访问复杂度：[B-Trees](https://opendatastructures.org/ods-cpp/14_2_B_Trees.html)。
- MIT 6.006 Lecture 8，校对完全二叉树、每个父子的堆性质、线性自底向上建堆与原地堆排序：[Binary Heaps](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/40d4851e550507ca14dc778b9b2266cc_MIT6_006S20_lec8.pdf)。

lesson-enrichment.json 的 summary 均不超过150字，points 三条，pitfalls 两条。动画 catalog 的 docs 为原始笔记标题；纯概念“前言”不强行关联动画。
