# Graph/search/sort source audit

Reviewed 24 Yuque documents and 88 source code blocks. Corrections: 47 blocks; exact original blocks are retained separately. `validation.json` records scope and limits.

The `.cpp` files are self-contained verification harnesses generated from the corrected source snippets. Run a harness with:

```sh
clang++ -std=c++17 -O1 -g -fsanitize=address,undefined -fno-omit-frame-pointer sorting.cpp -o /tmp/algo-audit-sorting
/tmp/algo-audit-sorting
```

Other harnesses: search_trees.cpp, graphs.cpp, linear_search.cpp, external_sort.cpp, storage_traversal.cpp, stl_map_set.cpp and heap_sort.cpp.

No claims are made about malformed input outside each snippet's stated preconditions. These are learning snippets, not complete production libraries.
