/* Generated educational problem content; references validated with clang++. */
export const problems = [
  {
    "id": "lt-seq-insert",
    "title": "顺序表：指定位置插入",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "rs4udzq4ez5ieiek",
        "blocks": [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        "functions": [
          "sl_insert"
        ]
      }
    ],
    "description": "把 x 插入下标 p 前。p<0 按表头，p≥n 按表尾处理。",
    "input": "第一行 n，第二行 n 个整数；随后 p x。",
    "output": "一行输出操作后的元素；空表输出 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "3\n3 -1 3\n1 8\n",
        "expected": "3 8 -1 3\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：第一行 n，第二行 n 个整数；随后 p x。\n// 输出：一行输出操作后的元素；空表输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=int;\ntypedef struct slNode{ //取别名,slNode叫做seqList\n    datatype data[N]; //顺序表，N为顺序表的元素数量上限\n    int len;\t\t\n    slNode():len(0){\t//构造函数，初始化len。len=0的操作不如len(0)\n    }\n}seqList;\nvoid sl_insert(seqList &sl,int p,datatype x){\n    if(sl.len>=N){\n        cout<<\"表满插入失败\"<<endl;\n        return;\n    }\n    if(p>=sl.len){\n        sl.data[sl.len]=x;\n    }else{\n        if(p<0) p=0;\n        for(int i=sl.len;i>p;i--)\n            sl.data[i]=sl.data[i-1];\n        sl.data[p]=x;\n    }\n    sl.len++;\n}\nvoid sl_pushback(seqList &sl,datatype x){\n    if(sl.len>=N) return;\n    sl.data[sl.len]=x;\n    sl.len++;\n}\nint sl_search(seqList sl,int p,datatype x){\n    if(p>=sl.len) return -1;\n    for(int i=max(0,p);i<sl.len;i++){\n        if(sl.data[i]==x) return i;\n    }\n    return -1;\n}\nvoid sl_delete(seqList &sl,int p){\n    if(p>=sl.len || p<0 || sl.len==0){ //排除p的无效位置\n        cout<<\"删除失败！\"<<endl;\n        return;\n    }\n    for(int i=p;i<sl.len-1;i++){\n        sl.data[i]=sl.data[i+1];\n    }\n    sl.len--;\n}\nvoid sl_erase(seqList &sl,datatype x){\n    for(int i=0;i<sl.len;i++){\n        if(sl.data[i]==x){\n    for(int j=i;j<sl.len-1;j++){ //删除sl中位置为i的元素\n        sl.data[j]=sl.data[j+1];\n    }\n             sl.len--;\n    return ;\n        }\n    }\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;\nseqList sl;for(int x:a)sl.data[sl.len++]=x;int p,x;cin>>p>>x;\nsl_insert(sl,p,x);printv(vector<int>(sl.data,sl.data+sl.len));\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "3\n3 -1 3\n1 8\n",
        "expected": "3 8 -1 3\n"
      },
      {
        "name": "测试 2",
        "stdin": "0\n\n0 -2\n",
        "expected": "-2\n"
      },
      {
        "name": "测试 3",
        "stdin": "1\n2\n-3 7\n",
        "expected": "7 2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-seq-pushback",
    "title": "顺序表：尾插",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "rs4udzq4ez5ieiek",
        "blocks": [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        "functions": [
          "sl_pushback"
        ]
      }
    ],
    "description": "把一个元素 x 追加到顺序表末尾。",
    "input": "第一行 n，第二行 n 个整数；随后 x。",
    "output": "一行输出操作后的元素；空表输出 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "3\n3 -1 3\n8\n",
        "expected": "3 -1 3 8\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：第一行 n，第二行 n 个整数；随后 x。\n// 输出：一行输出操作后的元素；空表输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=int;\ntypedef struct slNode{ //取别名,slNode叫做seqList\n    datatype data[N]; //顺序表，N为顺序表的元素数量上限\n    int len;\t\t\n    slNode():len(0){\t//构造函数，初始化len。len=0的操作不如len(0)\n    }\n}seqList;\nvoid sl_insert(seqList &sl,int p,datatype x){\n    if(sl.len>=N){\n        cout<<\"表满插入失败\"<<endl;\n        return;\n    }\n    if(p>=sl.len){\n        sl.data[sl.len]=x;\n    }else{\n        if(p<0) p=0;\n        for(int i=sl.len;i>p;i--)\n            sl.data[i]=sl.data[i-1];\n        sl.data[p]=x;\n    }\n    sl.len++;\n}\nvoid sl_pushback(seqList &sl,datatype x){\n    if(sl.len>=N) return;\n    sl.data[sl.len]=x;\n    sl.len++;\n}\nint sl_search(seqList sl,int p,datatype x){\n    if(p>=sl.len) return -1;\n    for(int i=max(0,p);i<sl.len;i++){\n        if(sl.data[i]==x) return i;\n    }\n    return -1;\n}\nvoid sl_delete(seqList &sl,int p){\n    if(p>=sl.len || p<0 || sl.len==0){ //排除p的无效位置\n        cout<<\"删除失败！\"<<endl;\n        return;\n    }\n    for(int i=p;i<sl.len-1;i++){\n        sl.data[i]=sl.data[i+1];\n    }\n    sl.len--;\n}\nvoid sl_erase(seqList &sl,datatype x){\n    for(int i=0;i<sl.len;i++){\n        if(sl.data[i]==x){\n    for(int j=i;j<sl.len-1;j++){ //删除sl中位置为i的元素\n        sl.data[j]=sl.data[j+1];\n    }\n             sl.len--;\n    return ;\n        }\n    }\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;\nseqList sl;for(int x:a)sl.data[sl.len++]=x;int x;cin>>x;\nsl_pushback(sl,x);printv(vector<int>(sl.data,sl.data+sl.len));\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "3\n3 -1 3\n8\n",
        "expected": "3 -1 3 8\n"
      },
      {
        "name": "测试 2",
        "stdin": "0\n\n0\n",
        "expected": "0\n"
      },
      {
        "name": "测试 3",
        "stdin": "1\n2\n-4\n",
        "expected": "2 -4\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-seq-delete",
    "title": "顺序表：按下标删除",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "rs4udzq4ez5ieiek",
        "blocks": [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        "functions": [
          "sl_delete"
        ]
      }
    ],
    "description": "删除下标 p 的元素，之后的元素依次左移。",
    "input": "第一行 n，第二行 n 个整数；随后 p。",
    "output": "一行输出操作后的元素；空表输出 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "3\n3 -1 3\n1\n",
        "expected": "3 3\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：第一行 n，第二行 n 个整数；随后 p。\n// 输出：一行输出操作后的元素；空表输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=int;\ntypedef struct slNode{ //取别名,slNode叫做seqList\n    datatype data[N]; //顺序表，N为顺序表的元素数量上限\n    int len;\t\t\n    slNode():len(0){\t//构造函数，初始化len。len=0的操作不如len(0)\n    }\n}seqList;\nvoid sl_insert(seqList &sl,int p,datatype x){\n    if(sl.len>=N){\n        cout<<\"表满插入失败\"<<endl;\n        return;\n    }\n    if(p>=sl.len){\n        sl.data[sl.len]=x;\n    }else{\n        if(p<0) p=0;\n        for(int i=sl.len;i>p;i--)\n            sl.data[i]=sl.data[i-1];\n        sl.data[p]=x;\n    }\n    sl.len++;\n}\nvoid sl_pushback(seqList &sl,datatype x){\n    if(sl.len>=N) return;\n    sl.data[sl.len]=x;\n    sl.len++;\n}\nint sl_search(seqList sl,int p,datatype x){\n    if(p>=sl.len) return -1;\n    for(int i=max(0,p);i<sl.len;i++){\n        if(sl.data[i]==x) return i;\n    }\n    return -1;\n}\nvoid sl_delete(seqList &sl,int p){\n    if(p>=sl.len || p<0 || sl.len==0){ //排除p的无效位置\n        cout<<\"删除失败！\"<<endl;\n        return;\n    }\n    for(int i=p;i<sl.len-1;i++){\n        sl.data[i]=sl.data[i+1];\n    }\n    sl.len--;\n}\nvoid sl_erase(seqList &sl,datatype x){\n    for(int i=0;i<sl.len;i++){\n        if(sl.data[i]==x){\n    for(int j=i;j<sl.len-1;j++){ //删除sl中位置为i的元素\n        sl.data[j]=sl.data[j+1];\n    }\n             sl.len--;\n    return ;\n        }\n    }\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;\nseqList sl;for(int x:a)sl.data[sl.len++]=x;int p;cin>>p;\nsl_delete(sl,p);printv(vector<int>(sl.data,sl.data+sl.len));\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "3\n3 -1 3\n1\n",
        "expected": "3 3\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n0\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n1 1 2\n2\n",
        "expected": "1 1\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-seq-erase",
    "title": "顺序表：删除首个指定值",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "rs4udzq4ez5ieiek",
        "blocks": [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        "functions": [
          "sl_erase"
        ]
      }
    ],
    "description": "删除第一个等于 x 的元素；未找到时保持原表。",
    "input": "第一行 n，第二行 n 个整数；随后 x。",
    "output": "一行输出操作后的元素；空表输出 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "3\n3 -1 3\n3\n",
        "expected": "-1 3\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：第一行 n，第二行 n 个整数；随后 x。\n// 输出：一行输出操作后的元素；空表输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=int;\ntypedef struct slNode{ //取别名,slNode叫做seqList\n    datatype data[N]; //顺序表，N为顺序表的元素数量上限\n    int len;\t\t\n    slNode():len(0){\t//构造函数，初始化len。len=0的操作不如len(0)\n    }\n}seqList;\nvoid sl_insert(seqList &sl,int p,datatype x){\n    if(sl.len>=N){\n        cout<<\"表满插入失败\"<<endl;\n        return;\n    }\n    if(p>=sl.len){\n        sl.data[sl.len]=x;\n    }else{\n        if(p<0) p=0;\n        for(int i=sl.len;i>p;i--)\n            sl.data[i]=sl.data[i-1];\n        sl.data[p]=x;\n    }\n    sl.len++;\n}\nvoid sl_pushback(seqList &sl,datatype x){\n    if(sl.len>=N) return;\n    sl.data[sl.len]=x;\n    sl.len++;\n}\nint sl_search(seqList sl,int p,datatype x){\n    if(p>=sl.len) return -1;\n    for(int i=max(0,p);i<sl.len;i++){\n        if(sl.data[i]==x) return i;\n    }\n    return -1;\n}\nvoid sl_delete(seqList &sl,int p){\n    if(p>=sl.len || p<0 || sl.len==0){ //排除p的无效位置\n        cout<<\"删除失败！\"<<endl;\n        return;\n    }\n    for(int i=p;i<sl.len-1;i++){\n        sl.data[i]=sl.data[i+1];\n    }\n    sl.len--;\n}\nvoid sl_erase(seqList &sl,datatype x){\n    for(int i=0;i<sl.len;i++){\n        if(sl.data[i]==x){\n    for(int j=i;j<sl.len-1;j++){ //删除sl中位置为i的元素\n        sl.data[j]=sl.data[j+1];\n    }\n             sl.len--;\n    return ;\n        }\n    }\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;\nseqList sl;for(int x:a)sl.data[sl.len++]=x;int x;cin>>x;\nsl_erase(sl,x);printv(vector<int>(sl.data,sl.data+sl.len));\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "3\n3 -1 3\n3\n",
        "expected": "-1 3\n"
      },
      {
        "name": "测试 2",
        "stdin": "0\n\n0\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "1\n2\n7\n",
        "expected": "2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-seq-search",
    "title": "顺序表：从指定下标查找",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "rs4udzq4ez5ieiek",
        "blocks": [
          0,
          3
        ],
        "functions": [
          "sl_search"
        ]
      }
    ],
    "description": "从 max(0,p) 开始查找第一个等于 x 的元素，返回下标。",
    "input": "n；n 个整数；p x。",
    "output": "找到输出从 0 开始的下标，否则输出 -1。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "3\n2 3 2\n1 2\n",
        "expected": "2\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；p x。\n// 输出：找到输出从 0 开始的下标，否则输出 -1。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=int;\ntypedef struct slNode{ //取别名,slNode叫做seqList\n    datatype data[N]; //顺序表，N为顺序表的元素数量上限\n    int len;\t\t\n    slNode():len(0){\t//构造函数，初始化len。len=0的操作不如len(0)\n    }\n}seqList;\nint sl_search(seqList sl,int p,datatype x){\n    if(p>=sl.len) return -1;\n    for(int i=max(0,p);i<sl.len;i++){\n        if(sl.data[i]==x) return i;\n    }\n    return -1;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;\nseqList sl;for(int x:a)sl.data[sl.len++]=x;int p,x;cin>>p>>x;\ncout<<sl_search(sl,p,x)<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "3\n2 3 2\n1 2\n",
        "expected": "2\n"
      },
      {
        "name": "测试 2",
        "stdin": "0\n\n0 1\n",
        "expected": "-1\n"
      },
      {
        "name": "测试 3",
        "stdin": "2\n-1 -1\n-2 -1\n",
        "expected": "0\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-cl-traverse",
    "title": "单链表：遍历",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "up0t23dy1c8i7wna",
        "blocks": [
          0,
          1,
          2,
          3,
          5,
          6
        ],
        "functions": [
          "cl_traverse"
        ]
      }
    ],
    "description": "输出带头结点单链表中全部数据结点，跳过头结点。",
    "input": "n；n 个整数；无其他输入。",
    "output": "输出操作后从首数据结点到尾的数据；空表输出 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "3\n2 -1 2\n\n",
        "expected": "2 -1 2\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；无其他输入。\n// 输出：输出操作后从首数据结点到尾的数据；空表输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nusing datatype=int;\ntypedef struct clNode{\ndatatype data;\nclNode * next;\nclNode(): next(NULL){}\n\n}*chainList; //chainlist指向头链表标志第一个结点位置\nvoid cl_traverse(chainList h){\n    if(h==NULL) return;\n    h = h->next;\t//初始让h指向链表的第一个结点，h指向的是头结点，头结点通常不存放有效数据\n    while(h!=NULL){\n        cout<<h->data<<\"\";\n        h=h->next; //h指向下一个结点\n    }\n    cout<<endl;\n    \n}\nchainList cl_search(chainList h,datatype x){\n    if(h==NULL) return NULL;\n    h=h->next;//初始化h\n    while(h!=NULL){\n        if(h->data==x) return h; //找到结点\n        h = h->next;\n    }\n    return NULL; //循环结束还没找到就返回NUll\n} \n//在p后面插入数据域为x的结点\nvoid cl_insert(chainList p,datatype x){\n    if(p==NULL) return;\n    chainList q = new clNode;\n    if(q == NULL){\n        cout<<\"插入失败\"<<endl;\n        return;\n    }\n    q->data=x;\n    q->next=p->next; //定义q的后继\n    p->next=q;//确保q是p的后继\n}\n//删除结点p的直接后继\nvoid cl_delete(chainList p){\n    if(p==NULL) return; //如果p本身就不存在\n    chainList q = p->next;//q是p的直接后继\n    if(q==NULL) return; //p是表尾\n    p->next = q->next;\n    delete q;q=NULL; \n}\nvoid cl_destroy(chainList &h){\n    if(h==NULL) return;\n    while(h->next!=NULL){\n        cl_delete(h);\n    }\n    delete h;h=NULL;//删除头结点自身\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;chainList h=new clNode;chainList tail=h;for(int x:a){tail->next=new clNode;tail=tail->next;tail->data=x;}\nvector<int>v;for(auto p=h==nullptr?nullptr:h->next;p;p=p->next)v.push_back(p->data);printv(v);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "3\n2 -1 2\n\n",
        "expected": "2 -1 2\n"
      },
      {
        "name": "测试 2",
        "stdin": "0\n\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "1\n7\n\n",
        "expected": "7\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-cl-insert",
    "title": "单链表：在结点后插入",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "up0t23dy1c8i7wna",
        "blocks": [
          0,
          1,
          2,
          3,
          5,
          6
        ],
        "functions": [
          "cl_insert"
        ]
      }
    ],
    "description": "p=0 表示头结点，p≥1 表示第 p 个数据结点。在该结点后插入 x。",
    "input": "n；n 个整数；p x（0≤p≤n）。",
    "output": "输出操作后从首数据结点到尾的数据；空表输出 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "2\n1 2\n1 9\n",
        "expected": "1 9 2\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；p x（0≤p≤n）。\n// 输出：输出操作后从首数据结点到尾的数据；空表输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nusing datatype=int;\ntypedef struct clNode{\ndatatype data;\nclNode * next;\nclNode(): next(NULL){}\n\n}*chainList; //chainlist指向头链表标志第一个结点位置\nvoid cl_traverse(chainList h){\n    if(h==NULL) return;\n    h = h->next;\t//初始让h指向链表的第一个结点，h指向的是头结点，头结点通常不存放有效数据\n    while(h!=NULL){\n        cout<<h->data<<\"\";\n        h=h->next; //h指向下一个结点\n    }\n    cout<<endl;\n    \n}\nchainList cl_search(chainList h,datatype x){\n    if(h==NULL) return NULL;\n    h=h->next;//初始化h\n    while(h!=NULL){\n        if(h->data==x) return h; //找到结点\n        h = h->next;\n    }\n    return NULL; //循环结束还没找到就返回NUll\n} \n//在p后面插入数据域为x的结点\nvoid cl_insert(chainList p,datatype x){\n    if(p==NULL) return;\n    chainList q = new clNode;\n    if(q == NULL){\n        cout<<\"插入失败\"<<endl;\n        return;\n    }\n    q->data=x;\n    q->next=p->next; //定义q的后继\n    p->next=q;//确保q是p的后继\n}\n//删除结点p的直接后继\nvoid cl_delete(chainList p){\n    if(p==NULL) return; //如果p本身就不存在\n    chainList q = p->next;//q是p的直接后继\n    if(q==NULL) return; //p是表尾\n    p->next = q->next;\n    delete q;q=NULL; \n}\nvoid cl_destroy(chainList &h){\n    if(h==NULL) return;\n    while(h->next!=NULL){\n        cl_delete(h);\n    }\n    delete h;h=NULL;//删除头结点自身\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;chainList h=new clNode;chainList tail=h;for(int x:a){tail->next=new clNode;tail=tail->next;tail->data=x;}int p,x;cin>>p>>x;\nchainList q=h;for(int i=0;i<p;i++)q=q->next;cl_insert(q,x);vector<int>v;for(auto p=h==nullptr?nullptr:h->next;p;p=p->next)v.push_back(p->data);printv(v);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "2\n1 2\n1 9\n",
        "expected": "1 9 2\n"
      },
      {
        "name": "测试 2",
        "stdin": "0\n\n0 -3\n",
        "expected": "-3\n"
      },
      {
        "name": "测试 3",
        "stdin": "2\n2 2\n2 7\n",
        "expected": "2 2 7\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-cl-delete-next",
    "title": "单链表：删除直接后继",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "up0t23dy1c8i7wna",
        "blocks": [
          0,
          1,
          2,
          3,
          5,
          6
        ],
        "functions": [
          "cl_delete"
        ]
      }
    ],
    "description": "p=0 表示头结点。删除该结点的直接后继；没有后继时不变。",
    "input": "n；n 个整数；p（0≤p≤n）。",
    "output": "输出操作后从首数据结点到尾的数据；空表输出 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "3\n1 2 3\n1\n",
        "expected": "1 3\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；p（0≤p≤n）。\n// 输出：输出操作后从首数据结点到尾的数据；空表输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nusing datatype=int;\ntypedef struct clNode{\ndatatype data;\nclNode * next;\nclNode(): next(NULL){}\n\n}*chainList; //chainlist指向头链表标志第一个结点位置\nvoid cl_traverse(chainList h){\n    if(h==NULL) return;\n    h = h->next;\t//初始让h指向链表的第一个结点，h指向的是头结点，头结点通常不存放有效数据\n    while(h!=NULL){\n        cout<<h->data<<\"\";\n        h=h->next; //h指向下一个结点\n    }\n    cout<<endl;\n    \n}\nchainList cl_search(chainList h,datatype x){\n    if(h==NULL) return NULL;\n    h=h->next;//初始化h\n    while(h!=NULL){\n        if(h->data==x) return h; //找到结点\n        h = h->next;\n    }\n    return NULL; //循环结束还没找到就返回NUll\n} \n//在p后面插入数据域为x的结点\nvoid cl_insert(chainList p,datatype x){\n    if(p==NULL) return;\n    chainList q = new clNode;\n    if(q == NULL){\n        cout<<\"插入失败\"<<endl;\n        return;\n    }\n    q->data=x;\n    q->next=p->next; //定义q的后继\n    p->next=q;//确保q是p的后继\n}\n//删除结点p的直接后继\nvoid cl_delete(chainList p){\n    if(p==NULL) return; //如果p本身就不存在\n    chainList q = p->next;//q是p的直接后继\n    if(q==NULL) return; //p是表尾\n    p->next = q->next;\n    delete q;q=NULL; \n}\nvoid cl_destroy(chainList &h){\n    if(h==NULL) return;\n    while(h->next!=NULL){\n        cl_delete(h);\n    }\n    delete h;h=NULL;//删除头结点自身\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;chainList h=new clNode;chainList tail=h;for(int x:a){tail->next=new clNode;tail=tail->next;tail->data=x;}int p;cin>>p;\nchainList q=h;for(int i=0;i<p;i++)q=q->next;cl_delete(q);vector<int>v;for(auto p=h==nullptr?nullptr:h->next;p;p=p->next)v.push_back(p->data);printv(v);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "3\n1 2 3\n1\n",
        "expected": "1 3\n"
      },
      {
        "name": "测试 2",
        "stdin": "0\n\n0\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "1\n4\n0\n",
        "expected": "EMPTY\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-cl-destroy",
    "title": "单链表：销毁",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "up0t23dy1c8i7wna",
        "blocks": [
          0,
          1,
          2,
          3,
          5,
          6
        ],
        "functions": [
          "cl_destroy"
        ]
      }
    ],
    "description": "逐个释放数据结点和头结点，最终使头指针为空。",
    "input": "n；n 个整数；无其他输入。",
    "output": "输出操作后从首数据结点到尾的数据；空表输出 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "2\n1 2\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；无其他输入。\n// 输出：输出操作后从首数据结点到尾的数据；空表输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nusing datatype=int;\ntypedef struct clNode{\ndatatype data;\nclNode * next;\nclNode(): next(NULL){}\n\n}*chainList; //chainlist指向头链表标志第一个结点位置\nvoid cl_traverse(chainList h){\n    if(h==NULL) return;\n    h = h->next;\t//初始让h指向链表的第一个结点，h指向的是头结点，头结点通常不存放有效数据\n    while(h!=NULL){\n        cout<<h->data<<\"\";\n        h=h->next; //h指向下一个结点\n    }\n    cout<<endl;\n    \n}\nchainList cl_search(chainList h,datatype x){\n    if(h==NULL) return NULL;\n    h=h->next;//初始化h\n    while(h!=NULL){\n        if(h->data==x) return h; //找到结点\n        h = h->next;\n    }\n    return NULL; //循环结束还没找到就返回NUll\n} \n//在p后面插入数据域为x的结点\nvoid cl_insert(chainList p,datatype x){\n    if(p==NULL) return;\n    chainList q = new clNode;\n    if(q == NULL){\n        cout<<\"插入失败\"<<endl;\n        return;\n    }\n    q->data=x;\n    q->next=p->next; //定义q的后继\n    p->next=q;//确保q是p的后继\n}\n//删除结点p的直接后继\nvoid cl_delete(chainList p){\n    if(p==NULL) return; //如果p本身就不存在\n    chainList q = p->next;//q是p的直接后继\n    if(q==NULL) return; //p是表尾\n    p->next = q->next;\n    delete q;q=NULL; \n}\nvoid cl_destroy(chainList &h){\n    if(h==NULL) return;\n    while(h->next!=NULL){\n        cl_delete(h);\n    }\n    delete h;h=NULL;//删除头结点自身\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;chainList h=new clNode;chainList tail=h;for(int x:a){tail->next=new clNode;tail=tail->next;tail->data=x;}\ncl_destroy(h);vector<int>v;for(auto p=h==nullptr?nullptr:h->next;p;p=p->next)v.push_back(p->data);printv(v);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "2\n1 2\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "0\n\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "1\n-4\n\n",
        "expected": "EMPTY\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-cl-create",
    "title": "单链表：头插法保持数组顺序建表",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "up0t23dy1c8i7wna",
        "blocks": [
          0,
          3,
          4
        ],
        "functions": [
          "cl_creator"
        ]
      }
    ],
    "description": "按原笔记从数组末尾向前头插，建立带头结点的单链表，结果顺序应与输入一致。",
    "input": "n；n 个整数。",
    "output": "输出新表数据；空表输出 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "3\n3 -1 3\n",
        "expected": "3 -1 3\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数。\n// 输出：输出新表数据；空表输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nusing datatype=int;\ntypedef struct clNode{\ndatatype data;\nclNode * next;\nclNode(): next(NULL){}\n\n}*chainList; //chainlist指向头链表标志第一个结点位置\n//在p后面插入数据域为x的结点\nvoid cl_insert(chainList p,datatype x){\n    if(p==NULL) return;\n    chainList q = new clNode;\n    if(q == NULL){\n        cout<<\"插入失败\"<<endl;\n        return;\n    }\n    q->data=x;\n    q->next=p->next; //定义q的后继\n    p->next=q;//确保q是p的后继\n}void cl_creator(chainList &h,datatype a[],int n){\n    if(h==NULL) h=new clNode;//如果表头是空指针则为表头动态分配存储空间\n    for(int i=n-1;i>=0;i--){\n        cl_insert(h,a[i]);\n    }\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;\nchainList h=nullptr;cl_creator(h,a.data(),n);vector<int>v;for(auto p=h==nullptr?nullptr:h->next;p;p=p->next)v.push_back(p->data);printv(v);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "3\n3 -1 3\n",
        "expected": "3 -1 3\n"
      },
      {
        "name": "测试 2",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "1\n9\n",
        "expected": "9\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-cl-search",
    "title": "单链表：按值查找",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "up0t23dy1c8i7wna",
        "blocks": [
          0,
          2
        ],
        "functions": [
          "cl_search"
        ]
      }
    ],
    "description": "查找首个值为 x 的结点，返回它在数据结点中的位置。",
    "input": "n；n 个整数；x。",
    "output": "位置从 1 开始；不存在输出 -1。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "3\n4 2 4\n4\n",
        "expected": "1\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；x。\n// 输出：位置从 1 开始；不存在输出 -1。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nusing datatype=int;\ntypedef struct clNode{\ndatatype data;\nclNode * next;\nclNode(): next(NULL){}\n\n}*chainList; //chainlist指向头链表标志第一个结点位置\nchainList cl_search(chainList h,datatype x){\n    if(h==NULL) return NULL;\n    h=h->next;//初始化h\n    while(h!=NULL){\n        if(h->data==x) return h; //找到结点\n        h = h->next;\n    }\n    return NULL; //循环结束还没找到就返回NUll\n} \nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;chainList h=new clNode;chainList tail=h;for(int x:a){tail->next=new clNode;tail=tail->next;tail->data=x;}int x;cin>>x;\nauto found=cl_search(h,x);int pos=1;auto p=h->next;while(p&&p!=found){p=p->next;pos++;}cout<<(found?pos:-1)<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "3\n4 2 4\n4\n",
        "expected": "1\n"
      },
      {
        "name": "测试 2",
        "stdin": "0\n\n2\n",
        "expected": "-1\n"
      },
      {
        "name": "测试 3",
        "stdin": "2\n-1 2\n2\n",
        "expected": "2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-dcl-create",
    "title": "双向链表：无头结点建表",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "up0t23dy1c8i7wna",
        "blocks": [
          7,
          8,
          9,
          10,
          11
        ],
        "functions": [
          "dcl_create"
        ]
      }
    ],
    "description": "建立没有额外头结点的双向链表，确保 next/pre 相互对应。",
    "input": "n；n 个整数；无其他输入。",
    "output": "先从头到尾输出值，空表输出 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；无其他输入。\n// 输出：先从头到尾输出值，空表输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nusing datatype=int;\ntypedef struct dclNode{\ndatatype data;\ndclNode * pre;\ndclNode * next;\ndclNode():pre(NULL),next(NULL){}\n}* dchainList;\nvoid dcl_insert_post(dchainList &p,datatype x){\n    if(p==NULL) return;\n    dchainList q=new dclNode,nxt=p->next;\n    q->data=x;\n    q->next=nxt;\n    if(nxt!=NULL) nxt->pre=q;\n    p->next=q;\n    q->pre=p;\n}\nvoid dcl_insert_pre(dchainList &p, datatype x)\n{\n    if(p==NULL) return;\n    dchainList q = new dclNode;\n    dchainList pre = p->pre;\n\n    q->data = x;\n    q->next = p;\n    q->pre = pre;\n    p->pre = q;\n\n    if(pre != NULL)\n        pre->next = q;\n    else\n        p = q;\n}\n//创建双向链表，包含n个结点，结点数据存放在数组a中\nvoid dcl_create(dchainList &h, datatype a[], int n)\n{\n    h=NULL;\n    if(n<=0) return;\n    h = new dclNode;     //构造第一个结点\n\n    h->data = a[0];\n\n    for(int i = n-1; i >= 1; i--)\n    {\n        dcl_insert_post(h, a[i]);\n    }\n}\n//删除双向链表h中第一个值为x的结点\nvoid dcl_delete(dchainList &h, datatype x)\n{\n    dchainList dcl = h;   \n    //遍历双向链表，寻找第一个值为x的结点\n\n    while(dcl != NULL)\n    {\n        if(dcl->data == x) break;\n        dcl = dcl->next;\n    }\n\n    if(dcl == NULL) return;  \n    //h中不存在值为x的结点\n\n    dchainList pre = dcl->pre, nxt = dcl->next;\n    //pre和nxt分别为被删除结点的直接前驱和直接后继\n\n    if(pre != NULL)\n        pre->next = nxt;\n    //pre的后继改为nxt\n\n    if(nxt != NULL)\n        nxt->pre = pre;\n    //nxt的前驱改为pre\n\n    if(dcl == h)\n        h = nxt;\n    //如果删除的是第一个结点，则用其直接后继表示的双向链表\n\n    delete dcl;dcl = NULL;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;dchainList h=nullptr;dcl_create(h,a.data(),n);\nvector<int>v;for(auto p=h;p;p=p->next)v.push_back(p->data);printv(v);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n1\n\n",
        "expected": "1\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n2 -3 2\n\n",
        "expected": "2 -3 2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-dcl-insert-post",
    "title": "双向链表：结点后插入",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "up0t23dy1c8i7wna",
        "blocks": [
          7,
          8,
          9,
          10,
          11
        ],
        "functions": [
          "dcl_insert_post"
        ]
      }
    ],
    "description": "在下标 p 的结点之后插入 x，并维护双向指针。",
    "input": "n；n 个整数；p x，0≤p<n 且 n≥1。",
    "output": "先从头到尾输出值，空表输出 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "2\n1 3\n0 2\n",
        "expected": "1 2 3\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；p x，0≤p<n 且 n≥1。\n// 输出：先从头到尾输出值，空表输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nusing datatype=int;\ntypedef struct dclNode{\ndatatype data;\ndclNode * pre;\ndclNode * next;\ndclNode():pre(NULL),next(NULL){}\n}* dchainList;\nvoid dcl_insert_post(dchainList &p,datatype x){\n    if(p==NULL) return;\n    dchainList q=new dclNode,nxt=p->next;\n    q->data=x;\n    q->next=nxt;\n    if(nxt!=NULL) nxt->pre=q;\n    p->next=q;\n    q->pre=p;\n}\nvoid dcl_insert_pre(dchainList &p, datatype x)\n{\n    if(p==NULL) return;\n    dchainList q = new dclNode;\n    dchainList pre = p->pre;\n\n    q->data = x;\n    q->next = p;\n    q->pre = pre;\n    p->pre = q;\n\n    if(pre != NULL)\n        pre->next = q;\n    else\n        p = q;\n}\n//创建双向链表，包含n个结点，结点数据存放在数组a中\nvoid dcl_create(dchainList &h, datatype a[], int n)\n{\n    h=NULL;\n    if(n<=0) return;\n    h = new dclNode;     //构造第一个结点\n\n    h->data = a[0];\n\n    for(int i = n-1; i >= 1; i--)\n    {\n        dcl_insert_post(h, a[i]);\n    }\n}\n//删除双向链表h中第一个值为x的结点\nvoid dcl_delete(dchainList &h, datatype x)\n{\n    dchainList dcl = h;   \n    //遍历双向链表，寻找第一个值为x的结点\n\n    while(dcl != NULL)\n    {\n        if(dcl->data == x) break;\n        dcl = dcl->next;\n    }\n\n    if(dcl == NULL) return;  \n    //h中不存在值为x的结点\n\n    dchainList pre = dcl->pre, nxt = dcl->next;\n    //pre和nxt分别为被删除结点的直接前驱和直接后继\n\n    if(pre != NULL)\n        pre->next = nxt;\n    //pre的后继改为nxt\n\n    if(nxt != NULL)\n        nxt->pre = pre;\n    //nxt的前驱改为pre\n\n    if(dcl == h)\n        h = nxt;\n    //如果删除的是第一个结点，则用其直接后继表示的双向链表\n\n    delete dcl;dcl = NULL;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;dchainList h=nullptr;dcl_create(h,a.data(),n);int p,x;cin>>p>>x;\nauto q=h;for(int i=0;i<p;i++)q=q->next;dcl_insert_post(q,x);vector<int>v;for(auto p=h;p;p=p->next)v.push_back(p->data);printv(v);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "2\n1 3\n0 2\n",
        "expected": "1 2 3\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n4\n0 -2\n",
        "expected": "4 -2\n"
      },
      {
        "name": "测试 3",
        "stdin": "2\n2 2\n1 5\n",
        "expected": "2 2 5\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-dcl-insert-pre",
    "title": "双向链表：结点前插入",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "up0t23dy1c8i7wna",
        "blocks": [
          7,
          8,
          9,
          10,
          11
        ],
        "functions": [
          "dcl_insert_pre"
        ]
      }
    ],
    "description": "在下标 p 的结点之前插入 x，若插在首结点前，更新首指针。",
    "input": "n；n 个整数；p x，0≤p<n 且 n≥1。",
    "output": "先从头到尾输出值，空表输出 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "2\n1 3\n0 2\n",
        "expected": "2 1 3\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；p x，0≤p<n 且 n≥1。\n// 输出：先从头到尾输出值，空表输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nusing datatype=int;\ntypedef struct dclNode{\ndatatype data;\ndclNode * pre;\ndclNode * next;\ndclNode():pre(NULL),next(NULL){}\n}* dchainList;\nvoid dcl_insert_post(dchainList &p,datatype x){\n    if(p==NULL) return;\n    dchainList q=new dclNode,nxt=p->next;\n    q->data=x;\n    q->next=nxt;\n    if(nxt!=NULL) nxt->pre=q;\n    p->next=q;\n    q->pre=p;\n}\nvoid dcl_insert_pre(dchainList &p, datatype x)\n{\n    if(p==NULL) return;\n    dchainList q = new dclNode;\n    dchainList pre = p->pre;\n\n    q->data = x;\n    q->next = p;\n    q->pre = pre;\n    p->pre = q;\n\n    if(pre != NULL)\n        pre->next = q;\n    else\n        p = q;\n}\n//创建双向链表，包含n个结点，结点数据存放在数组a中\nvoid dcl_create(dchainList &h, datatype a[], int n)\n{\n    h=NULL;\n    if(n<=0) return;\n    h = new dclNode;     //构造第一个结点\n\n    h->data = a[0];\n\n    for(int i = n-1; i >= 1; i--)\n    {\n        dcl_insert_post(h, a[i]);\n    }\n}\n//删除双向链表h中第一个值为x的结点\nvoid dcl_delete(dchainList &h, datatype x)\n{\n    dchainList dcl = h;   \n    //遍历双向链表，寻找第一个值为x的结点\n\n    while(dcl != NULL)\n    {\n        if(dcl->data == x) break;\n        dcl = dcl->next;\n    }\n\n    if(dcl == NULL) return;  \n    //h中不存在值为x的结点\n\n    dchainList pre = dcl->pre, nxt = dcl->next;\n    //pre和nxt分别为被删除结点的直接前驱和直接后继\n\n    if(pre != NULL)\n        pre->next = nxt;\n    //pre的后继改为nxt\n\n    if(nxt != NULL)\n        nxt->pre = pre;\n    //nxt的前驱改为pre\n\n    if(dcl == h)\n        h = nxt;\n    //如果删除的是第一个结点，则用其直接后继表示的双向链表\n\n    delete dcl;dcl = NULL;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;dchainList h=nullptr;dcl_create(h,a.data(),n);int p,x;cin>>p>>x;\nauto q=h;for(int i=0;i<p;i++)q=q->next;bool first=q==h;dcl_insert_pre(q,x);if(first)h=q;vector<int>v;for(auto p=h;p;p=p->next)v.push_back(p->data);printv(v);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "2\n1 3\n0 2\n",
        "expected": "2 1 3\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n4\n0 -2\n",
        "expected": "-2 4\n"
      },
      {
        "name": "测试 3",
        "stdin": "2\n2 2\n1 5\n",
        "expected": "2 5 2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-dcl-delete",
    "title": "双向链表：删除首个给定值",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "up0t23dy1c8i7wna",
        "blocks": [
          7,
          8,
          9,
          10,
          11
        ],
        "functions": [
          "dcl_delete"
        ]
      }
    ],
    "description": "删除首个数据为 x 的结点；不存在则不变。",
    "input": "n；n 个整数；x。",
    "output": "先从头到尾输出值，空表输出 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "3\n1 2 1\n1\n",
        "expected": "2 1\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；x。\n// 输出：先从头到尾输出值，空表输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nusing datatype=int;\ntypedef struct dclNode{\ndatatype data;\ndclNode * pre;\ndclNode * next;\ndclNode():pre(NULL),next(NULL){}\n}* dchainList;\nvoid dcl_insert_post(dchainList &p,datatype x){\n    if(p==NULL) return;\n    dchainList q=new dclNode,nxt=p->next;\n    q->data=x;\n    q->next=nxt;\n    if(nxt!=NULL) nxt->pre=q;\n    p->next=q;\n    q->pre=p;\n}\nvoid dcl_insert_pre(dchainList &p, datatype x)\n{\n    if(p==NULL) return;\n    dchainList q = new dclNode;\n    dchainList pre = p->pre;\n\n    q->data = x;\n    q->next = p;\n    q->pre = pre;\n    p->pre = q;\n\n    if(pre != NULL)\n        pre->next = q;\n    else\n        p = q;\n}\n//创建双向链表，包含n个结点，结点数据存放在数组a中\nvoid dcl_create(dchainList &h, datatype a[], int n)\n{\n    h=NULL;\n    if(n<=0) return;\n    h = new dclNode;     //构造第一个结点\n\n    h->data = a[0];\n\n    for(int i = n-1; i >= 1; i--)\n    {\n        dcl_insert_post(h, a[i]);\n    }\n}\n//删除双向链表h中第一个值为x的结点\nvoid dcl_delete(dchainList &h, datatype x)\n{\n    dchainList dcl = h;   \n    //遍历双向链表，寻找第一个值为x的结点\n\n    while(dcl != NULL)\n    {\n        if(dcl->data == x) break;\n        dcl = dcl->next;\n    }\n\n    if(dcl == NULL) return;  \n    //h中不存在值为x的结点\n\n    dchainList pre = dcl->pre, nxt = dcl->next;\n    //pre和nxt分别为被删除结点的直接前驱和直接后继\n\n    if(pre != NULL)\n        pre->next = nxt;\n    //pre的后继改为nxt\n\n    if(nxt != NULL)\n        nxt->pre = pre;\n    //nxt的前驱改为pre\n\n    if(dcl == h)\n        h = nxt;\n    //如果删除的是第一个结点，则用其直接后继表示的双向链表\n\n    delete dcl;dcl = NULL;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;dchainList h=nullptr;dcl_create(h,a.data(),n);int x;cin>>x;\ndcl_delete(h,x);vector<int>v;for(auto p=h;p;p=p->next)v.push_back(p->data);printv(v);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "3\n1 2 1\n1\n",
        "expected": "2 1\n"
      },
      {
        "name": "测试 2",
        "stdin": "0\n\n4\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "1\n2\n9\n",
        "expected": "2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-rcl-create",
    "title": "循环链表：按数组建环",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "up0t23dy1c8i7wna",
        "blocks": [
          0,
          3,
          12,
          13,
          14,
          15,
          16
        ],
        "functions": [
          "rcl_creater"
        ]
      }
    ],
    "description": "建立无头结点循环单链表，h 指向尾结点，h->next 为首元素。",
    "input": "n；n 个整数；无其他输入。",
    "output": "从 h->next 开始绕环一周输出值；空环输出 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；无其他输入。\n// 输出：从 h->next 开始绕环一周输出值；空环输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nusing datatype=int;\ntypedef struct clNode{\ndatatype data;\nclNode * next;\nclNode(): next(NULL){}\n\n}*chainList; //chainlist指向头链表标志第一个结点位置\n//在p后面插入数据域为x的结点\nvoid cl_insert(chainList p,datatype x){\n    if(p==NULL) return;\n    chainList q = new clNode;\n    if(q == NULL){\n        cout<<\"插入失败\"<<endl;\n        return;\n    }\n    q->data=x;\n    q->next=p->next; //定义q的后继\n    p->next=q;//确保q是p的后继\n}\n//查询循环链表h中是否存在值为x的结点，如果存在，返回值为x的第一个结点的位置（指针），否则返回空指针\n\nchainList cl_search(chainList h, datatype x) //需要提前做链表结点定义\n{\n    if(h == NULL)\n        return NULL;\n\n    chainList h1 = h;\n\n    do\n    {\n        h1 = h1->next;\n\n        if(h1->data == x)\n            return h1;\n\n    }while(h1 != h);\n\n    return NULL;    //没找到结点\n}\n//在结点p的后面插入一个值为x的结点\n\nvoid rcl_insert(chainList &p, datatype x)\n{\n    chainList q = new clNode;        //创建新结点\n\n    if(q == NULL)\n    {\n        cout<<\"结点失败!\"<<endl;\n        return;\n    }\n\n    q->data = x;\n\n    if(p == NULL)\n    {\n        q->next = q;                 //当前链表为空\n\n        p = q;\n    }\n    else\n    {\n        q->next = p->next;\n        p->next = q;                 //重新定义x和p的链接\n    }\n}\n//创建循环链表h，共有n个结点，每一个结点的数据域存放在数组a中\nvoid rcl_creater(chainList &h, datatype a[], int n)\n{\n    h=NULL;\n    if(n<=0) return;\n    rcl_insert(h, a[n-1]);             \n    //先构建最后一个结点\n\n    for(int i = n-2; i >= 0; i--)\n    {\n        cl_insert(h, a[i]);\n    }\n    //将数组a的元素从后向前依次插入链表中\n}\n//删除循环链表中p的直接后继\nvoid rcl_delete(chainList &p)\n{\n    if(p == NULL) return;\n\n    chainList q = p->next;\n\n    if(p == q)\n    {\n        delete p;\n        p = NULL;\n        return;\n    }\n    //只有一个结点时，删除后变为空链表\n\n\n    p->next = q->next;\n    //重新定义p的链域\n\n    delete q;\n    q = NULL;\n    //释放q所占用的存储空间\n}\n//删除循环链表h中的所有结点\nvoid rcl_destroy(chainList &h)\n{\n    while(h != NULL)\n    {\n        rcl_delete(h);\n    }\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;chainList h=nullptr;rcl_creater(h,a.data(),n);\nvector<int>v;if(h){auto p=h->next;do{v.push_back(p->data);p=p->next;}while(p!=h->next);}printv(v);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n3\n\n",
        "expected": "3\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-1 2 -1\n\n",
        "expected": "-1 2 -1\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-rcl-insert",
    "title": "循环链表：在尾锚点后插入",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "up0t23dy1c8i7wna",
        "blocks": [
          0,
          3,
          12,
          13,
          14,
          15,
          16
        ],
        "functions": [
          "rcl_insert"
        ]
      }
    ],
    "description": "在尾锚点 h 后插入 x；非空表中 x 成为按 h->next 观察的首元素，空表时自成环。",
    "input": "n；n 个整数；x。",
    "output": "从 h->next 开始绕环一周输出值；空环输出 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "2\n1 2\n9\n",
        "expected": "9 1 2\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；x。\n// 输出：从 h->next 开始绕环一周输出值；空环输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nusing datatype=int;\ntypedef struct clNode{\ndatatype data;\nclNode * next;\nclNode(): next(NULL){}\n\n}*chainList; //chainlist指向头链表标志第一个结点位置\n//在p后面插入数据域为x的结点\nvoid cl_insert(chainList p,datatype x){\n    if(p==NULL) return;\n    chainList q = new clNode;\n    if(q == NULL){\n        cout<<\"插入失败\"<<endl;\n        return;\n    }\n    q->data=x;\n    q->next=p->next; //定义q的后继\n    p->next=q;//确保q是p的后继\n}\n//查询循环链表h中是否存在值为x的结点，如果存在，返回值为x的第一个结点的位置（指针），否则返回空指针\n\nchainList cl_search(chainList h, datatype x) //需要提前做链表结点定义\n{\n    if(h == NULL)\n        return NULL;\n\n    chainList h1 = h;\n\n    do\n    {\n        h1 = h1->next;\n\n        if(h1->data == x)\n            return h1;\n\n    }while(h1 != h);\n\n    return NULL;    //没找到结点\n}\n//在结点p的后面插入一个值为x的结点\n\nvoid rcl_insert(chainList &p, datatype x)\n{\n    chainList q = new clNode;        //创建新结点\n\n    if(q == NULL)\n    {\n        cout<<\"结点失败!\"<<endl;\n        return;\n    }\n\n    q->data = x;\n\n    if(p == NULL)\n    {\n        q->next = q;                 //当前链表为空\n\n        p = q;\n    }\n    else\n    {\n        q->next = p->next;\n        p->next = q;                 //重新定义x和p的链接\n    }\n}\n//创建循环链表h，共有n个结点，每一个结点的数据域存放在数组a中\nvoid rcl_creater(chainList &h, datatype a[], int n)\n{\n    h=NULL;\n    if(n<=0) return;\n    rcl_insert(h, a[n-1]);             \n    //先构建最后一个结点\n\n    for(int i = n-2; i >= 0; i--)\n    {\n        cl_insert(h, a[i]);\n    }\n    //将数组a的元素从后向前依次插入链表中\n}\n//删除循环链表中p的直接后继\nvoid rcl_delete(chainList &p)\n{\n    if(p == NULL) return;\n\n    chainList q = p->next;\n\n    if(p == q)\n    {\n        delete p;\n        p = NULL;\n        return;\n    }\n    //只有一个结点时，删除后变为空链表\n\n\n    p->next = q->next;\n    //重新定义p的链域\n\n    delete q;\n    q = NULL;\n    //释放q所占用的存储空间\n}\n//删除循环链表h中的所有结点\nvoid rcl_destroy(chainList &h)\n{\n    while(h != NULL)\n    {\n        rcl_delete(h);\n    }\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;chainList h=nullptr;rcl_creater(h,a.data(),n);int x;cin>>x;\nrcl_insert(h,x);vector<int>v;if(h){auto p=h->next;do{v.push_back(p->data);p=p->next;}while(p!=h->next);}printv(v);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "2\n1 2\n9\n",
        "expected": "9 1 2\n"
      },
      {
        "name": "测试 2",
        "stdin": "0\n\n3\n",
        "expected": "3\n"
      },
      {
        "name": "测试 3",
        "stdin": "1\n4\n-2\n",
        "expected": "-2 4\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-rcl-delete",
    "title": "循环链表：删除锚点后继",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "up0t23dy1c8i7wna",
        "blocks": [
          0,
          3,
          12,
          13,
          14,
          15,
          16
        ],
        "functions": [
          "rcl_delete"
        ]
      }
    ],
    "description": "删除尾锚点 h 的直接后继，即首元素；唯一结点被删除后 h 为空。",
    "input": "n；n 个整数；无其他输入。",
    "output": "从 h->next 开始绕环一周输出值；空环输出 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "3\n1 2 3\n\n",
        "expected": "2 3\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；无其他输入。\n// 输出：从 h->next 开始绕环一周输出值；空环输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nusing datatype=int;\ntypedef struct clNode{\ndatatype data;\nclNode * next;\nclNode(): next(NULL){}\n\n}*chainList; //chainlist指向头链表标志第一个结点位置\n//在p后面插入数据域为x的结点\nvoid cl_insert(chainList p,datatype x){\n    if(p==NULL) return;\n    chainList q = new clNode;\n    if(q == NULL){\n        cout<<\"插入失败\"<<endl;\n        return;\n    }\n    q->data=x;\n    q->next=p->next; //定义q的后继\n    p->next=q;//确保q是p的后继\n}\n//查询循环链表h中是否存在值为x的结点，如果存在，返回值为x的第一个结点的位置（指针），否则返回空指针\n\nchainList cl_search(chainList h, datatype x) //需要提前做链表结点定义\n{\n    if(h == NULL)\n        return NULL;\n\n    chainList h1 = h;\n\n    do\n    {\n        h1 = h1->next;\n\n        if(h1->data == x)\n            return h1;\n\n    }while(h1 != h);\n\n    return NULL;    //没找到结点\n}\n//在结点p的后面插入一个值为x的结点\n\nvoid rcl_insert(chainList &p, datatype x)\n{\n    chainList q = new clNode;        //创建新结点\n\n    if(q == NULL)\n    {\n        cout<<\"结点失败!\"<<endl;\n        return;\n    }\n\n    q->data = x;\n\n    if(p == NULL)\n    {\n        q->next = q;                 //当前链表为空\n\n        p = q;\n    }\n    else\n    {\n        q->next = p->next;\n        p->next = q;                 //重新定义x和p的链接\n    }\n}\n//创建循环链表h，共有n个结点，每一个结点的数据域存放在数组a中\nvoid rcl_creater(chainList &h, datatype a[], int n)\n{\n    h=NULL;\n    if(n<=0) return;\n    rcl_insert(h, a[n-1]);             \n    //先构建最后一个结点\n\n    for(int i = n-2; i >= 0; i--)\n    {\n        cl_insert(h, a[i]);\n    }\n    //将数组a的元素从后向前依次插入链表中\n}\n//删除循环链表中p的直接后继\nvoid rcl_delete(chainList &p)\n{\n    if(p == NULL) return;\n\n    chainList q = p->next;\n\n    if(p == q)\n    {\n        delete p;\n        p = NULL;\n        return;\n    }\n    //只有一个结点时，删除后变为空链表\n\n\n    p->next = q->next;\n    //重新定义p的链域\n\n    delete q;\n    q = NULL;\n    //释放q所占用的存储空间\n}\n//删除循环链表h中的所有结点\nvoid rcl_destroy(chainList &h)\n{\n    while(h != NULL)\n    {\n        rcl_delete(h);\n    }\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;chainList h=nullptr;rcl_creater(h,a.data(),n);\nrcl_delete(h);vector<int>v;if(h){auto p=h->next;do{v.push_back(p->data);p=p->next;}while(p!=h->next);}printv(v);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "3\n1 2 3\n\n",
        "expected": "2 3\n"
      },
      {
        "name": "测试 2",
        "stdin": "0\n\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "1\n5\n\n",
        "expected": "EMPTY\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-rcl-destroy",
    "title": "循环链表：逐结点销毁",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "up0t23dy1c8i7wna",
        "blocks": [
          0,
          3,
          12,
          13,
          14,
          15,
          16
        ],
        "functions": [
          "rcl_destroy"
        ]
      }
    ],
    "description": "反复删除后继，最终释放环中所有结点并让 h 为空。",
    "input": "n；n 个整数；无其他输入。",
    "output": "从 h->next 开始绕环一周输出值；空环输出 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "3\n1 2 3\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；无其他输入。\n// 输出：从 h->next 开始绕环一周输出值；空环输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nusing datatype=int;\ntypedef struct clNode{\ndatatype data;\nclNode * next;\nclNode(): next(NULL){}\n\n}*chainList; //chainlist指向头链表标志第一个结点位置\n//在p后面插入数据域为x的结点\nvoid cl_insert(chainList p,datatype x){\n    if(p==NULL) return;\n    chainList q = new clNode;\n    if(q == NULL){\n        cout<<\"插入失败\"<<endl;\n        return;\n    }\n    q->data=x;\n    q->next=p->next; //定义q的后继\n    p->next=q;//确保q是p的后继\n}\n//查询循环链表h中是否存在值为x的结点，如果存在，返回值为x的第一个结点的位置（指针），否则返回空指针\n\nchainList cl_search(chainList h, datatype x) //需要提前做链表结点定义\n{\n    if(h == NULL)\n        return NULL;\n\n    chainList h1 = h;\n\n    do\n    {\n        h1 = h1->next;\n\n        if(h1->data == x)\n            return h1;\n\n    }while(h1 != h);\n\n    return NULL;    //没找到结点\n}\n//在结点p的后面插入一个值为x的结点\n\nvoid rcl_insert(chainList &p, datatype x)\n{\n    chainList q = new clNode;        //创建新结点\n\n    if(q == NULL)\n    {\n        cout<<\"结点失败!\"<<endl;\n        return;\n    }\n\n    q->data = x;\n\n    if(p == NULL)\n    {\n        q->next = q;                 //当前链表为空\n\n        p = q;\n    }\n    else\n    {\n        q->next = p->next;\n        p->next = q;                 //重新定义x和p的链接\n    }\n}\n//创建循环链表h，共有n个结点，每一个结点的数据域存放在数组a中\nvoid rcl_creater(chainList &h, datatype a[], int n)\n{\n    h=NULL;\n    if(n<=0) return;\n    rcl_insert(h, a[n-1]);             \n    //先构建最后一个结点\n\n    for(int i = n-2; i >= 0; i--)\n    {\n        cl_insert(h, a[i]);\n    }\n    //将数组a的元素从后向前依次插入链表中\n}\n//删除循环链表中p的直接后继\nvoid rcl_delete(chainList &p)\n{\n    if(p == NULL) return;\n\n    chainList q = p->next;\n\n    if(p == q)\n    {\n        delete p;\n        p = NULL;\n        return;\n    }\n    //只有一个结点时，删除后变为空链表\n\n\n    p->next = q->next;\n    //重新定义p的链域\n\n    delete q;\n    q = NULL;\n    //释放q所占用的存储空间\n}\n//删除循环链表h中的所有结点\nvoid rcl_destroy(chainList &h)\n{\n    while(h != NULL)\n    {\n        rcl_delete(h);\n    }\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;chainList h=nullptr;rcl_creater(h,a.data(),n);\nrcl_destroy(h);vector<int>v;if(h){auto p=h->next;do{v.push_back(p->data);p=p->next;}while(p!=h->next);}printv(v);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "3\n1 2 3\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "0\n\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "1\n5\n\n",
        "expected": "EMPTY\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-rcl-search",
    "title": "循环链表：一圈内查找",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "up0t23dy1c8i7wna",
        "blocks": [
          0,
          3,
          12,
          13,
          14
        ],
        "functions": [
          "cl_search"
        ]
      }
    ],
    "description": "从 h->next 开始绕环查找首个等于 x 的数据结点，不重复遍历第二圈。",
    "input": "n；n 个整数；x。",
    "output": "位置按 h->next 起从 1 计数；不存在输出 -1。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "3\n2 3 2\n2\n",
        "expected": "1\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；x。\n// 输出：位置按 h->next 起从 1 计数；不存在输出 -1。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nusing datatype=int;\ntypedef struct clNode{\ndatatype data;\nclNode * next;\nclNode(): next(NULL){}\n\n}*chainList; //chainlist指向头链表标志第一个结点位置\n//在p后面插入数据域为x的结点\nvoid cl_insert(chainList p,datatype x){\n    if(p==NULL) return;\n    chainList q = new clNode;\n    if(q == NULL){\n        cout<<\"插入失败\"<<endl;\n        return;\n    }\n    q->data=x;\n    q->next=p->next; //定义q的后继\n    p->next=q;//确保q是p的后继\n}\n//查询循环链表h中是否存在值为x的结点，如果存在，返回值为x的第一个结点的位置（指针），否则返回空指针\n\nchainList cl_search(chainList h, datatype x) //需要提前做链表结点定义\n{\n    if(h == NULL)\n        return NULL;\n\n    chainList h1 = h;\n\n    do\n    {\n        h1 = h1->next;\n\n        if(h1->data == x)\n            return h1;\n\n    }while(h1 != h);\n\n    return NULL;    //没找到结点\n}\n//在结点p的后面插入一个值为x的结点\n\nvoid rcl_insert(chainList &p, datatype x)\n{\n    chainList q = new clNode;        //创建新结点\n\n    if(q == NULL)\n    {\n        cout<<\"结点失败!\"<<endl;\n        return;\n    }\n\n    q->data = x;\n\n    if(p == NULL)\n    {\n        q->next = q;                 //当前链表为空\n\n        p = q;\n    }\n    else\n    {\n        q->next = p->next;\n        p->next = q;                 //重新定义x和p的链接\n    }\n}\n//创建循环链表h，共有n个结点，每一个结点的数据域存放在数组a中\nvoid rcl_creater(chainList &h, datatype a[], int n)\n{\n    h=NULL;\n    if(n<=0) return;\n    rcl_insert(h, a[n-1]);             \n    //先构建最后一个结点\n\n    for(int i = n-2; i >= 0; i--)\n    {\n        cl_insert(h, a[i]);\n    }\n    //将数组a的元素从后向前依次插入链表中\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;chainList h=nullptr;rcl_creater(h,a.data(),n);int x;cin>>x;\nauto q=cl_search(h,x);if(!q)cout<<-1;else{int pos=1;auto p=h->next;while(p!=q){p=p->next;pos++;}cout<<pos;}cout<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "3\n2 3 2\n2\n",
        "expected": "1\n"
      },
      {
        "name": "测试 2",
        "stdin": "0\n\n2\n",
        "expected": "-1\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n1 2 3\n3\n",
        "expected": "3\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-vec-fill",
    "title": "vector：按数量与初值构造",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "mtgwclgx66dch1gd",
        "blocks": [
          0,
          1
        ],
        "functions": [
          "vector"
        ]
      }
    ],
    "description": "建立 n 个初值均为 x 的元素。",
    "input": "输入 n 和原数组（构造题不输入原数组），随后提供 n x。",
    "output": "访问题输出“下标值 at值 首值 尾值”；记录题每行 x y；其余输出结果序列，空结果 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0 7\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：输入 n 和原数组（构造题不输入原数组），随后提供 n x。\n// 输出：访问题输出“下标值 at值 首值 尾值”；记录题每行 x y；其余输出结果序列，空结果 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,x;cin>>n>>x;\nvector<int>v(n,x);printv(v);\nreturn 0;}\n",
    "referenceNote": "依据原笔记的 STL 操作，固定示例常量改为题面输入；不改变接口语义。访问题要求 n≥1 且 p 有效。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0 7\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1 -2\n",
        "expected": "-2\n"
      },
      {
        "name": "测试 3",
        "stdin": "4 3\n",
        "expected": "3 3 3 3\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-vec-record",
    "title": "vector：结构体元素初始化",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "mtgwclgx66dch1gd",
        "blocks": [
          0,
          2
        ],
        "functions": [
          "vector"
        ]
      }
    ],
    "description": "创建 n 个记录，每个记录含整数 x、y，保持两个数据项。",
    "input": "输入 n 和原数组（构造题不输入原数组），随后提供 n x y。",
    "output": "访问题输出“下标值 at值 首值 尾值”；记录题每行 x y；其余输出结果序列，空结果 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0 1 2\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：输入 n 和原数组（构造题不输入原数组），随后提供 n x y。\n// 输出：访问题输出“下标值 at值 首值 尾值”；记录题每行 x y；其余输出结果序列，空结果 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,x,y;cin>>n>>x>>y;\nstruct vecNode{int x,y;};vecNode a{x,y};vector<vecNode>v(n,a);if(!n)cout<<\"EMPTY\\n\";for(auto p:v)cout<<p.x<<\" \"<<p.y<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "依据原笔记的 STL 操作，固定示例常量改为题面输入；不改变接口语义。访问题要求 n≥1 且 p 有效。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0 1 2\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1 -1 4\n",
        "expected": "-1 4\n"
      },
      {
        "name": "测试 3",
        "stdin": "3 5 -2\n",
        "expected": "5 -2\n5 -2\n5 -2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-vec-access",
    "title": "vector：下标与首尾访问",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "mtgwclgx66dch1gd",
        "blocks": [
          0,
          3
        ],
        "functions": [
          "vector"
        ]
      }
    ],
    "description": "对同一位置分别使用下标和 at，再读取首元素与末元素。",
    "input": "输入 n 和原数组（构造题不输入原数组），随后提供 p，0≤p<n。",
    "output": "访问题输出“下标值 at值 首值 尾值”；记录题每行 x y；其余输出结果序列，空结果 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "1\n1\n0\n",
        "expected": "1 1 1 1\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：输入 n 和原数组（构造题不输入原数组），随后提供 p，0≤p<n。\n// 输出：访问题输出“下标值 at值 首值 尾值”；记录题每行 x y；其余输出结果序列，空结果 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;int p;cin>>p;\ncout<<a[p]<<\" \"<<a.at(p)<<\" \"<<a.front()<<\" \"<<a.back()<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "依据原笔记的 STL 操作，固定示例常量改为题面输入；不改变接口语义。访问题要求 n≥1 且 p 有效。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "1\n1\n0\n",
        "expected": "1 1 1 1\n"
      },
      {
        "name": "测试 2",
        "stdin": "3\n2 -3 2\n1\n",
        "expected": "-3 -3 2 2\n"
      },
      {
        "name": "测试 3",
        "stdin": "2\n-1 5\n1\n",
        "expected": "5 5 -1 5\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-vec-insert",
    "title": "vector：按位置插入多个相同元素",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "mtgwclgx66dch1gd",
        "blocks": [
          0,
          4
        ],
        "functions": [
          "vector"
        ]
      }
    ],
    "description": "在位置 p 之前插入 k 个值 x；p=n 表示末尾。",
    "input": "输入 n 和原数组（构造题不输入原数组），随后提供 p k x，0≤p≤n、0≤k≤30。",
    "output": "访问题输出“下标值 at值 首值 尾值”；记录题每行 x y；其余输出结果序列，空结果 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n0 2 -1\n",
        "expected": "-1 -1\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：输入 n 和原数组（构造题不输入原数组），随后提供 p k x，0≤p≤n、0≤k≤30。\n// 输出：访问题输出“下标值 at值 首值 尾值”；记录题每行 x y；其余输出结果序列，空结果 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;int p,k,x;cin>>p>>k>>x;\na.insert(a.begin()+p,k,x);printv(a);\nreturn 0;}\n",
    "referenceNote": "依据原笔记的 STL 操作，固定示例常量改为题面输入；不改变接口语义。访问题要求 n≥1 且 p 有效。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n0 2 -1\n",
        "expected": "-1 -1\n"
      },
      {
        "name": "测试 2",
        "stdin": "2\n1 3\n1 1 2\n",
        "expected": "1 2 3\n"
      },
      {
        "name": "测试 3",
        "stdin": "2\n2 2\n2 0 4\n",
        "expected": "2 2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-vec-erase",
    "title": "vector：删除半开区间",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "mtgwclgx66dch1gd",
        "blocks": [
          0,
          5
        ],
        "functions": [
          "vector"
        ]
      }
    ],
    "description": "删除区间 [l,r) 内的元素，r 本身不被删除；允许空区间。",
    "input": "输入 n 和原数组（构造题不输入原数组），随后提供 l r，0≤l≤r≤n。",
    "output": "访问题输出“下标值 at值 首值 尾值”；记录题每行 x y；其余输出结果序列，空结果 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n0 0\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：输入 n 和原数组（构造题不输入原数组），随后提供 l r，0≤l≤r≤n。\n// 输出：访问题输出“下标值 at值 首值 尾值”；记录题每行 x y；其余输出结果序列，空结果 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;int l,r;cin>>l>>r;\na.erase(a.begin()+l,a.begin()+r);printv(a);\nreturn 0;}\n",
    "referenceNote": "依据原笔记的 STL 操作，固定示例常量改为题面输入；不改变接口语义。访问题要求 n≥1 且 p 有效。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n0 0\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "3\n1 2 3\n1 3\n",
        "expected": "1\n"
      },
      {
        "name": "测试 3",
        "stdin": "2\n2 2\n0 0\n",
        "expected": "2 2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-vec-assign",
    "title": "vector：重新赋值",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "mtgwclgx66dch1gd",
        "blocks": [
          0,
          6
        ],
        "functions": [
          "vector"
        ]
      }
    ],
    "description": "清除旧元素，把 vector 重置为 k 个 x。",
    "input": "输入 n 和原数组（构造题不输入原数组），随后提供 k x，0≤k≤30。",
    "output": "访问题输出“下标值 at值 首值 尾值”；记录题每行 x y；其余输出结果序列，空结果 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "2\n1 2\n0 7\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：输入 n 和原数组（构造题不输入原数组），随后提供 k x，0≤k≤30。\n// 输出：访问题输出“下标值 at值 首值 尾值”；记录题每行 x y；其余输出结果序列，空结果 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;int k,x;cin>>k>>x;\na.assign(k,x);printv(a);\nreturn 0;}\n",
    "referenceNote": "依据原笔记的 STL 操作，固定示例常量改为题面输入；不改变接口语义。访问题要求 n≥1 且 p 有效。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "2\n1 2\n0 7\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "0\n\n3 -1\n",
        "expected": "-1 -1 -1\n"
      },
      {
        "name": "测试 3",
        "stdin": "1\n2\n1 8\n",
        "expected": "8\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-list-push-front",
    "title": "STL list：表头插入",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "fdg8dyzhbd1z3521",
        "blocks": [
          0,
          1,
          2
        ],
        "functions": [
          "list::push-front"
        ]
      }
    ],
    "description": "使用 list 完成“表头插入”。unique 只删除相邻重复值；不相邻的相同值保留。",
    "input": "n；n 个整数；x。",
    "output": "输出操作后的序列；空表输出 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "2\n1 2\n9\n",
        "expected": "9 1 2\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；x。\n// 输出：输出操作后的序列；空表输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\nbool isEven(int n){\n    return !(n&1);\n}\nbool isOdd(int x)\n{\n    return x % 2 != 0;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;list<int>li(a.begin(),a.end());int x;cin>>x;\nli.push_front(x);printv(vector<int>(li.begin(),li.end()));\nreturn 0;}\n",
    "referenceNote": "直接使用原笔记 STL list 操作；示例常量改为输入，空表 pop_front 由驱动先检查。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "2\n1 2\n9\n",
        "expected": "9 1 2\n"
      },
      {
        "name": "测试 2",
        "stdin": "0\n\n3\n",
        "expected": "3\n"
      },
      {
        "name": "测试 3",
        "stdin": "1\n2\n-2\n",
        "expected": "-2 2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-list-pop-front",
    "title": "STL list：删除首元素",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "fdg8dyzhbd1z3521",
        "blocks": [
          0,
          1,
          2
        ],
        "functions": [
          "list::pop-front"
        ]
      }
    ],
    "description": "使用 list 完成“删除首元素”。unique 只删除相邻重复值；不相邻的相同值保留。",
    "input": "n；n 个整数；无其他输入。",
    "output": "输出操作后的序列；空表输出 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "2\n1 2\n\n",
        "expected": "2\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；无其他输入。\n// 输出：输出操作后的序列；空表输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\nbool isEven(int n){\n    return !(n&1);\n}\nbool isOdd(int x)\n{\n    return x % 2 != 0;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;list<int>li(a.begin(),a.end());\nif(!li.empty())li.pop_front();printv(vector<int>(li.begin(),li.end()));\nreturn 0;}\n",
    "referenceNote": "直接使用原笔记 STL list 操作；示例常量改为输入，空表 pop_front 由驱动先检查。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "2\n1 2\n\n",
        "expected": "2\n"
      },
      {
        "name": "测试 2",
        "stdin": "0\n\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "1\n3\n\n",
        "expected": "EMPTY\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-list-unique",
    "title": "STL list：相邻去重",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "fdg8dyzhbd1z3521",
        "blocks": [
          0,
          1,
          2
        ],
        "functions": [
          "list::unique"
        ]
      }
    ],
    "description": "使用 list 完成“相邻去重”。unique 只删除相邻重复值；不相邻的相同值保留。",
    "input": "n；n 个整数；无其他输入。",
    "output": "输出操作后的序列；空表输出 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "4\n1 1 2 1\n\n",
        "expected": "1 2 1\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；无其他输入。\n// 输出：输出操作后的序列；空表输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\nbool isEven(int n){\n    return !(n&1);\n}\nbool isOdd(int x)\n{\n    return x % 2 != 0;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;list<int>li(a.begin(),a.end());\nli.unique();printv(vector<int>(li.begin(),li.end()));\nreturn 0;}\n",
    "referenceNote": "直接使用原笔记 STL list 操作；示例常量改为输入，空表 pop_front 由驱动先检查。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "4\n1 1 2 1\n\n",
        "expected": "1 2 1\n"
      },
      {
        "name": "测试 2",
        "stdin": "0\n\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 -2 -2\n\n",
        "expected": "-2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-list-reverse",
    "title": "STL list：反转",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "fdg8dyzhbd1z3521",
        "blocks": [
          0,
          1,
          2
        ],
        "functions": [
          "list::reverse"
        ]
      }
    ],
    "description": "使用 list 完成“反转”。unique 只删除相邻重复值；不相邻的相同值保留。",
    "input": "n；n 个整数；无其他输入。",
    "output": "输出操作后的序列；空表输出 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "3\n1 2 3\n\n",
        "expected": "3 2 1\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；无其他输入。\n// 输出：输出操作后的序列；空表输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\nbool isEven(int n){\n    return !(n&1);\n}\nbool isOdd(int x)\n{\n    return x % 2 != 0;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;list<int>li(a.begin(),a.end());\nli.reverse();printv(vector<int>(li.begin(),li.end()));\nreturn 0;}\n",
    "referenceNote": "直接使用原笔记 STL list 操作；示例常量改为输入，空表 pop_front 由驱动先检查。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "3\n1 2 3\n\n",
        "expected": "3 2 1\n"
      },
      {
        "name": "测试 2",
        "stdin": "0\n\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-1 2 -1\n\n",
        "expected": "-1 2 -1\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-list-remove",
    "title": "STL list：删除所有指定值",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "fdg8dyzhbd1z3521",
        "blocks": [
          0,
          1,
          2
        ],
        "functions": [
          "list::remove"
        ]
      }
    ],
    "description": "使用 list 完成“删除所有指定值”。unique 只删除相邻重复值；不相邻的相同值保留。",
    "input": "n；n 个整数；x。",
    "output": "输出操作后的序列；空表输出 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "3\n1 2 1\n1\n",
        "expected": "2\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；x。\n// 输出：输出操作后的序列；空表输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\nbool isEven(int n){\n    return !(n&1);\n}\nbool isOdd(int x)\n{\n    return x % 2 != 0;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;list<int>li(a.begin(),a.end());int x;cin>>x;\nli.remove(x);printv(vector<int>(li.begin(),li.end()));\nreturn 0;}\n",
    "referenceNote": "直接使用原笔记 STL list 操作；示例常量改为输入，空表 pop_front 由驱动先检查。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "3\n1 2 1\n1\n",
        "expected": "2\n"
      },
      {
        "name": "测试 2",
        "stdin": "0\n\n3\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "2\n-2 3\n8\n",
        "expected": "-2 3\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-list-remove-even",
    "title": "STL list：删除偶数",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "fdg8dyzhbd1z3521",
        "blocks": [
          0,
          1,
          2
        ],
        "functions": [
          "list::remove-even"
        ]
      }
    ],
    "description": "使用 list 完成“删除偶数”。unique 只删除相邻重复值；不相邻的相同值保留。",
    "input": "n；n 个整数；无其他输入。",
    "output": "输出操作后的序列；空表输出 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "5\n-2 -1 0 3 4\n\n",
        "expected": "-1 3\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；无其他输入。\n// 输出：输出操作后的序列；空表输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\nbool isEven(int n){\n    return !(n&1);\n}\nbool isOdd(int x)\n{\n    return x % 2 != 0;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;list<int>li(a.begin(),a.end());\nli.remove_if(isEven);printv(vector<int>(li.begin(),li.end()));\nreturn 0;}\n",
    "referenceNote": "直接使用原笔记 STL list 操作；示例常量改为输入，空表 pop_front 由驱动先检查。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "5\n-2 -1 0 3 4\n\n",
        "expected": "-1 3\n"
      },
      {
        "name": "测试 2",
        "stdin": "0\n\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "2\n2 2\n\n",
        "expected": "EMPTY\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-list-remove-odd",
    "title": "STL list：删除奇数",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "fdg8dyzhbd1z3521",
        "blocks": [
          0,
          1,
          2
        ],
        "functions": [
          "list::remove-odd"
        ]
      }
    ],
    "description": "使用 list 完成“删除奇数”。unique 只删除相邻重复值；不相邻的相同值保留。",
    "input": "n；n 个整数；无其他输入。",
    "output": "输出操作后的序列；空表输出 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "5\n-2 -1 0 3 4\n\n",
        "expected": "-2 0 4\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；无其他输入。\n// 输出：输出操作后的序列；空表输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\nbool isEven(int n){\n    return !(n&1);\n}\nbool isOdd(int x)\n{\n    return x % 2 != 0;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;list<int>li(a.begin(),a.end());\nli.remove_if(isOdd);printv(vector<int>(li.begin(),li.end()));\nreturn 0;}\n",
    "referenceNote": "直接使用原笔记 STL list 操作；示例常量改为输入，空表 pop_front 由驱动先检查。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "5\n-2 -1 0 3 4\n\n",
        "expected": "-2 0 4\n"
      },
      {
        "name": "测试 2",
        "stdin": "0\n\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "2\n1 1\n\n",
        "expected": "EMPTY\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-list-merge-asc",
    "title": "STL list：升序有序归并",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "fdg8dyzhbd1z3521",
        "blocks": [
          0,
          1
        ],
        "functions": [
          "list::merge"
        ]
      }
    ],
    "description": "把两个已经按升序排列的链表归并，合并结果保存在第一个表中，第二个表应为空。",
    "input": "n m；随后第一表 n 个整数，第二表 m 个整数。两个表均按升序排列。",
    "output": "首行输出归并序列，空为 EMPTY；第二行输出第二个表剩余元素数（应为 0）。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "2 2\n1 3\n2 3\n",
        "expected": "1 2 3 3\n0\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；随后第一表 n 个整数，第二表 m 个整数。两个表均按升序排列。\n// 输出：首行输出归并序列，空为 EMPTY；第二行输出第二个表剩余元素数（应为 0）。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;list<int>li,li1;for(int i=0,x;i<n;i++){cin>>x;li.push_back(x);}for(int i=0,x;i<m;i++){cin>>x;li1.push_back(x);}\nli.merge(li1);printv(vector<int>(li.begin(),li.end()));cout<<li1.size()<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "2 2\n1 3\n2 3\n",
        "expected": "1 2 3 3\n0\n"
      },
      {
        "name": "测试 2",
        "stdin": "0 1\n\n-2\n",
        "expected": "-2\n0\n"
      },
      {
        "name": "测试 3",
        "stdin": "2 0\n2 2\n\n",
        "expected": "2 2\n0\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-list-merge-desc",
    "title": "STL list：降序有序归并",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "fdg8dyzhbd1z3521",
        "blocks": [
          0,
          1
        ],
        "functions": [
          "list::merge"
        ]
      }
    ],
    "description": "把两个已经按降序排列的链表归并，合并结果保存在第一个表中，第二个表应为空。",
    "input": "n m；随后第一表 n 个整数，第二表 m 个整数。两个表均按降序排列。",
    "output": "首行输出归并序列，空为 EMPTY；第二行输出第二个表剩余元素数（应为 0）。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "2 2\n3 1\n3 2\n",
        "expected": "3 3 2 1\n0\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；随后第一表 n 个整数，第二表 m 个整数。两个表均按降序排列。\n// 输出：首行输出归并序列，空为 EMPTY；第二行输出第二个表剩余元素数（应为 0）。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;list<int>li,li1;for(int i=0,x;i<n;i++){cin>>x;li.push_back(x);}for(int i=0,x;i<m;i++){cin>>x;li1.push_back(x);}\nli.merge(li1,greater<int>());printv(vector<int>(li.begin(),li.end()));cout<<li1.size()<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "2 2\n3 1\n3 2\n",
        "expected": "3 3 2 1\n0\n"
      },
      {
        "name": "测试 2",
        "stdin": "0 1\n\n-2\n",
        "expected": "-2\n0\n"
      },
      {
        "name": "测试 3",
        "stdin": "2 0\n2 2\n\n",
        "expected": "2 2\n0\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-list-traverse",
    "title": "STL list：迭代器遍历",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "fdg8dyzhbd1z3521",
        "blocks": [
          0,
          3
        ],
        "functions": [
          "traverse"
        ]
      }
    ],
    "description": "用迭代器从 begin 走到 end 输出所有元素。",
    "input": "n；n 个整数。",
    "output": "一行序列；空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数。\n// 输出：一行序列；空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\nvoid traverse(list<int>li){\n    for(list<int>::iterator it=li.begin();it!=li.end();it++){\n        cout<<*it<<' ';\n    }\n    cout<<endl;\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;list<int>li(a.begin(),a.end());\nif(li.empty())cout<<\"EMPTY\\n\";else traverse(li);\nreturn 0;}\n",
    "referenceNote": "保留原迭代器遍历，只在输出值之间增加空格。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n1\n",
        "expected": "1\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n3 -2 3\n",
        "expected": "3 -2 3\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-seq-stack-empty",
    "title": "顺序栈：判空",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "owuypwz940xxzpvr",
        "blocks": [
          0,
          1,
          2,
          3,
          4
        ],
        "functions": [
          "empty"
        ]
      }
    ],
    "description": "先按输入次序入栈，再完成指定操作。输出序列按栈顶到栈底排列；空栈出栈不改变状态。",
    "input": "n；n 个整数（从底到顶）；无其他输入。",
    "output": "判空输出 1/0；读顶输出值或 EMPTY；其他操作输出顶到底序列，空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "1\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数（从底到顶）；无其他输入。\n// 输出：判空输出 1/0；读顶输出值或 EMPTY；其他操作输出顶到底序列，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=int;\ntypedef struct ssNode{\ndatatype data[N]; \nint top;\nssNode():top(-1){} \t//top初始值为-1\n}seqStack;\n//判断栈ss是否是空栈，是返回true否则返回false \nbool empty(seqStack ss){\n    if(ss.top==-1) return true;\n    if(ss.top!=-1) return false;\n        }\n//向栈ss中压入一个值为x的元素\nvoid push(seqStack &ss,datatype x){\n    if(ss.top==N-1){\n        cout<<\"栈满了\"<<endl;\n        return;\n    }\n    ss.data[++ss.top]=x;\n}\n//获取栈顶元素\ndatatype top(seqStack ss){\n    if(empty(ss)){\n        cout<<\"栈是空的\"<<endl;\n        return 0; //因为函数类型不是void所以要有返回值\n    }\n    return ss.data[ss.top];\n}\n//出栈\nvoid pop(seqStack &ss){\n    if(empty(ss)){\n        cout<<\"empty!\"<<endl;\n        return;\n    }\n    --ss.top;\t//直接将top下移一位\n}\n//遍历\nvoid traverse(seqStack ss){\n    while(!empty(ss)){\n        cout<<top(ss)<<' ';\n        pop(ss);\n    }\n        cout<<endl;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;seqStack st;for(int x:a)push(st,x);\ncout<<empty(st)<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "保留本节顺序栈/链栈函数主体；空操作由题面规定，驱动在调用前检查；遍历输出增加空格。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "1\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n",
        "expected": "0\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 1 -2\n",
        "expected": "0\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-seq-stack-push",
    "title": "顺序栈：入栈",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "owuypwz940xxzpvr",
        "blocks": [
          0,
          1,
          2,
          3,
          4
        ],
        "functions": [
          "push"
        ]
      }
    ],
    "description": "先按输入次序入栈，再完成指定操作。输出序列按栈顶到栈底排列；空栈出栈不改变状态。",
    "input": "n；n 个整数（从底到顶）；待入栈的 x。",
    "output": "判空输出 1/0；读顶输出值或 EMPTY；其他操作输出顶到底序列，空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n7\n",
        "expected": "7\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数（从底到顶）；待入栈的 x。\n// 输出：判空输出 1/0；读顶输出值或 EMPTY；其他操作输出顶到底序列，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=int;\ntypedef struct ssNode{\ndatatype data[N]; \nint top;\nssNode():top(-1){} \t//top初始值为-1\n}seqStack;\n//判断栈ss是否是空栈，是返回true否则返回false \nbool empty(seqStack ss){\n    if(ss.top==-1) return true;\n    if(ss.top!=-1) return false;\n        }\n//向栈ss中压入一个值为x的元素\nvoid push(seqStack &ss,datatype x){\n    if(ss.top==N-1){\n        cout<<\"栈满了\"<<endl;\n        return;\n    }\n    ss.data[++ss.top]=x;\n}\n//获取栈顶元素\ndatatype top(seqStack ss){\n    if(empty(ss)){\n        cout<<\"栈是空的\"<<endl;\n        return 0; //因为函数类型不是void所以要有返回值\n    }\n    return ss.data[ss.top];\n}\n//出栈\nvoid pop(seqStack &ss){\n    if(empty(ss)){\n        cout<<\"empty!\"<<endl;\n        return;\n    }\n    --ss.top;\t//直接将top下移一位\n}\n//遍历\nvoid traverse(seqStack ss){\n    while(!empty(ss)){\n        cout<<top(ss)<<' ';\n        pop(ss);\n    }\n        cout<<endl;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;seqStack st;for(int x:a)push(st,x);int x;cin>>x;\npush(st,x);vector<int>v;for(int i=st.top;i>=0;i--)v.push_back(st.data[i]);printv(v);\nreturn 0;}\n",
    "referenceNote": "保留本节顺序栈/链栈函数主体；空操作由题面规定，驱动在调用前检查；遍历输出增加空格。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n7\n",
        "expected": "7\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n7\n",
        "expected": "7 2\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 1 -2\n7\n",
        "expected": "7 -2 1 -2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-seq-stack-top",
    "title": "顺序栈：读取栈顶",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "owuypwz940xxzpvr",
        "blocks": [
          0,
          1,
          2,
          3,
          4
        ],
        "functions": [
          "top"
        ]
      }
    ],
    "description": "先按输入次序入栈，再完成指定操作。输出序列按栈顶到栈底排列；空栈出栈不改变状态。",
    "input": "n；n 个整数（从底到顶）；无其他输入。",
    "output": "判空输出 1/0；读顶输出值或 EMPTY；其他操作输出顶到底序列，空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数（从底到顶）；无其他输入。\n// 输出：判空输出 1/0；读顶输出值或 EMPTY；其他操作输出顶到底序列，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=int;\ntypedef struct ssNode{\ndatatype data[N]; \nint top;\nssNode():top(-1){} \t//top初始值为-1\n}seqStack;\n//判断栈ss是否是空栈，是返回true否则返回false \nbool empty(seqStack ss){\n    if(ss.top==-1) return true;\n    if(ss.top!=-1) return false;\n        }\n//向栈ss中压入一个值为x的元素\nvoid push(seqStack &ss,datatype x){\n    if(ss.top==N-1){\n        cout<<\"栈满了\"<<endl;\n        return;\n    }\n    ss.data[++ss.top]=x;\n}\n//获取栈顶元素\ndatatype top(seqStack ss){\n    if(empty(ss)){\n        cout<<\"栈是空的\"<<endl;\n        return 0; //因为函数类型不是void所以要有返回值\n    }\n    return ss.data[ss.top];\n}\n//出栈\nvoid pop(seqStack &ss){\n    if(empty(ss)){\n        cout<<\"empty!\"<<endl;\n        return;\n    }\n    --ss.top;\t//直接将top下移一位\n}\n//遍历\nvoid traverse(seqStack ss){\n    while(!empty(ss)){\n        cout<<top(ss)<<' ';\n        pop(ss);\n    }\n        cout<<endl;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;seqStack st;for(int x:a)push(st,x);\nif(empty(st))cout<<\"EMPTY\\n\";else cout<<top(st)<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "保留本节顺序栈/链栈函数主体；空操作由题面规定，驱动在调用前检查；遍历输出增加空格。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n",
        "expected": "2\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 1 -2\n",
        "expected": "-2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-seq-stack-pop",
    "title": "顺序栈：出栈",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "owuypwz940xxzpvr",
        "blocks": [
          0,
          1,
          2,
          3,
          4
        ],
        "functions": [
          "pop"
        ]
      }
    ],
    "description": "先按输入次序入栈，再完成指定操作。输出序列按栈顶到栈底排列；空栈出栈不改变状态。",
    "input": "n；n 个整数（从底到顶）；无其他输入。",
    "output": "判空输出 1/0；读顶输出值或 EMPTY；其他操作输出顶到底序列，空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数（从底到顶）；无其他输入。\n// 输出：判空输出 1/0；读顶输出值或 EMPTY；其他操作输出顶到底序列，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=int;\ntypedef struct ssNode{\ndatatype data[N]; \nint top;\nssNode():top(-1){} \t//top初始值为-1\n}seqStack;\n//判断栈ss是否是空栈，是返回true否则返回false \nbool empty(seqStack ss){\n    if(ss.top==-1) return true;\n    if(ss.top!=-1) return false;\n        }\n//向栈ss中压入一个值为x的元素\nvoid push(seqStack &ss,datatype x){\n    if(ss.top==N-1){\n        cout<<\"栈满了\"<<endl;\n        return;\n    }\n    ss.data[++ss.top]=x;\n}\n//获取栈顶元素\ndatatype top(seqStack ss){\n    if(empty(ss)){\n        cout<<\"栈是空的\"<<endl;\n        return 0; //因为函数类型不是void所以要有返回值\n    }\n    return ss.data[ss.top];\n}\n//出栈\nvoid pop(seqStack &ss){\n    if(empty(ss)){\n        cout<<\"empty!\"<<endl;\n        return;\n    }\n    --ss.top;\t//直接将top下移一位\n}\n//遍历\nvoid traverse(seqStack ss){\n    while(!empty(ss)){\n        cout<<top(ss)<<' ';\n        pop(ss);\n    }\n        cout<<endl;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;seqStack st;for(int x:a)push(st,x);\nif(!empty(st))pop(st);vector<int>v;for(int i=st.top;i>=0;i--)v.push_back(st.data[i]);printv(v);\nreturn 0;}\n",
    "referenceNote": "保留本节顺序栈/链栈函数主体；空操作由题面规定，驱动在调用前检查；遍历输出增加空格。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 1 -2\n",
        "expected": "1 -2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-seq-stack-traverse",
    "title": "顺序栈：遍历",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "owuypwz940xxzpvr",
        "blocks": [
          0,
          1,
          2,
          3,
          4
        ],
        "functions": [
          "traverse"
        ]
      }
    ],
    "description": "先按输入次序入栈，再完成指定操作。输出序列按栈顶到栈底排列；空栈出栈不改变状态。",
    "input": "n；n 个整数（从底到顶）；无其他输入。",
    "output": "判空输出 1/0；读顶输出值或 EMPTY；其他操作输出顶到底序列，空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数（从底到顶）；无其他输入。\n// 输出：判空输出 1/0；读顶输出值或 EMPTY；其他操作输出顶到底序列，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=int;\ntypedef struct ssNode{\ndatatype data[N]; \nint top;\nssNode():top(-1){} \t//top初始值为-1\n}seqStack;\n//判断栈ss是否是空栈，是返回true否则返回false \nbool empty(seqStack ss){\n    if(ss.top==-1) return true;\n    if(ss.top!=-1) return false;\n        }\n//向栈ss中压入一个值为x的元素\nvoid push(seqStack &ss,datatype x){\n    if(ss.top==N-1){\n        cout<<\"栈满了\"<<endl;\n        return;\n    }\n    ss.data[++ss.top]=x;\n}\n//获取栈顶元素\ndatatype top(seqStack ss){\n    if(empty(ss)){\n        cout<<\"栈是空的\"<<endl;\n        return 0; //因为函数类型不是void所以要有返回值\n    }\n    return ss.data[ss.top];\n}\n//出栈\nvoid pop(seqStack &ss){\n    if(empty(ss)){\n        cout<<\"empty!\"<<endl;\n        return;\n    }\n    --ss.top;\t//直接将top下移一位\n}\n//遍历\nvoid traverse(seqStack ss){\n    while(!empty(ss)){\n        cout<<top(ss)<<' ';\n        pop(ss);\n    }\n        cout<<endl;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;seqStack st;for(int x:a)push(st,x);\nif(empty(st))cout<<\"EMPTY\\n\";else traverse(st);\nreturn 0;}\n",
    "referenceNote": "保留本节顺序栈/链栈函数主体；空操作由题面规定，驱动在调用前检查；遍历输出增加空格。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n",
        "expected": "2\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 1 -2\n",
        "expected": "-2 1 -2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-chain-stack-empty",
    "title": "链栈：判空",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "owuypwz940xxzpvr",
        "blocks": [
          6,
          7,
          8,
          9,
          10,
          11
        ],
        "functions": [
          "empty"
        ]
      }
    ],
    "description": "先按输入次序入栈，再完成指定操作。输出序列按栈顶到栈底排列；空栈出栈不改变状态。",
    "input": "n；n 个整数（从底到顶）；无其他输入。",
    "output": "判空输出 1/0；读顶输出值或 EMPTY；其他操作输出顶到底序列，空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "1\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数（从底到顶）；无其他输入。\n// 输出：判空输出 1/0；读顶输出值或 EMPTY；其他操作输出顶到底序列，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\ntypedef int datatype;\ntypedef struct csNode{\n    datatype data;\n    csNode * next;\n    csNode():next(NULL){} //新创建的结点先不指向任何结点\n} * chainStack;\n//判断栈ss是否是空栈，是返回true否则返回false \nbool empty(chainStack cs){\n    return cs==NULL || cs->next==NULL;\n}\n//向cs中压入一个值为x的结点\nvoid push(chainStack cs,datatype x){\n    if(cs==NULL) return;\n    chainStack q=new csNode;\n    if(q==NULL) return;\n    q->data=x;\n    q->next=cs->next;\n    cs->next=q;\n}\n//获取cs的栈顶元素\ndatatype top(chainStack cs){\n    if(empty(cs)){\n        return 0;\n    }\n    return cs->next->data; //cs永远指向栈顶\n}\n//出栈\nvoid pop(chainStack cs){\n    if(empty(cs)){\n        return;\n    }\n    chainStack q = cs->next;\n    cs->next = q->next;\n    delete q;q = NULL;\n}\n//遍历，不破坏原链栈\nvoid traverse(chainStack cs){\n    if(cs==NULL) return;\n    for(chainStack p=cs->next;p!=NULL;p=p->next)\n        cout<<p->data<<' ';\n    cout<<endl;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;chainStack st=new csNode;for(int x:a)push(st,x);\ncout<<empty(st)<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "保留本节顺序栈/链栈函数主体；空操作由题面规定，驱动在调用前检查；遍历输出增加空格。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "1\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n",
        "expected": "0\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 1 -2\n",
        "expected": "0\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-chain-stack-push",
    "title": "链栈：入栈",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "owuypwz940xxzpvr",
        "blocks": [
          6,
          7,
          8,
          9,
          10,
          11
        ],
        "functions": [
          "push"
        ]
      }
    ],
    "description": "先按输入次序入栈，再完成指定操作。输出序列按栈顶到栈底排列；空栈出栈不改变状态。",
    "input": "n；n 个整数（从底到顶）；待入栈的 x。",
    "output": "判空输出 1/0；读顶输出值或 EMPTY；其他操作输出顶到底序列，空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n7\n",
        "expected": "7\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数（从底到顶）；待入栈的 x。\n// 输出：判空输出 1/0；读顶输出值或 EMPTY；其他操作输出顶到底序列，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\ntypedef int datatype;\ntypedef struct csNode{\n    datatype data;\n    csNode * next;\n    csNode():next(NULL){} //新创建的结点先不指向任何结点\n} * chainStack;\n//判断栈ss是否是空栈，是返回true否则返回false \nbool empty(chainStack cs){\n    return cs==NULL || cs->next==NULL;\n}\n//向cs中压入一个值为x的结点\nvoid push(chainStack cs,datatype x){\n    if(cs==NULL) return;\n    chainStack q=new csNode;\n    if(q==NULL) return;\n    q->data=x;\n    q->next=cs->next;\n    cs->next=q;\n}\n//获取cs的栈顶元素\ndatatype top(chainStack cs){\n    if(empty(cs)){\n        return 0;\n    }\n    return cs->next->data; //cs永远指向栈顶\n}\n//出栈\nvoid pop(chainStack cs){\n    if(empty(cs)){\n        return;\n    }\n    chainStack q = cs->next;\n    cs->next = q->next;\n    delete q;q = NULL;\n}\n//遍历，不破坏原链栈\nvoid traverse(chainStack cs){\n    if(cs==NULL) return;\n    for(chainStack p=cs->next;p!=NULL;p=p->next)\n        cout<<p->data<<' ';\n    cout<<endl;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;chainStack st=new csNode;for(int x:a)push(st,x);int x;cin>>x;\npush(st,x);vector<int>v;for(auto q=st->next;q;q=q->next)v.push_back(q->data);printv(v);\nreturn 0;}\n",
    "referenceNote": "保留本节顺序栈/链栈函数主体；空操作由题面规定，驱动在调用前检查；遍历输出增加空格。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n7\n",
        "expected": "7\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n7\n",
        "expected": "7 2\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 1 -2\n7\n",
        "expected": "7 -2 1 -2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-chain-stack-top",
    "title": "链栈：读取栈顶",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "owuypwz940xxzpvr",
        "blocks": [
          6,
          7,
          8,
          9,
          10,
          11
        ],
        "functions": [
          "top"
        ]
      }
    ],
    "description": "先按输入次序入栈，再完成指定操作。输出序列按栈顶到栈底排列；空栈出栈不改变状态。",
    "input": "n；n 个整数（从底到顶）；无其他输入。",
    "output": "判空输出 1/0；读顶输出值或 EMPTY；其他操作输出顶到底序列，空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数（从底到顶）；无其他输入。\n// 输出：判空输出 1/0；读顶输出值或 EMPTY；其他操作输出顶到底序列，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\ntypedef int datatype;\ntypedef struct csNode{\n    datatype data;\n    csNode * next;\n    csNode():next(NULL){} //新创建的结点先不指向任何结点\n} * chainStack;\n//判断栈ss是否是空栈，是返回true否则返回false \nbool empty(chainStack cs){\n    return cs==NULL || cs->next==NULL;\n}\n//向cs中压入一个值为x的结点\nvoid push(chainStack cs,datatype x){\n    if(cs==NULL) return;\n    chainStack q=new csNode;\n    if(q==NULL) return;\n    q->data=x;\n    q->next=cs->next;\n    cs->next=q;\n}\n//获取cs的栈顶元素\ndatatype top(chainStack cs){\n    if(empty(cs)){\n        return 0;\n    }\n    return cs->next->data; //cs永远指向栈顶\n}\n//出栈\nvoid pop(chainStack cs){\n    if(empty(cs)){\n        return;\n    }\n    chainStack q = cs->next;\n    cs->next = q->next;\n    delete q;q = NULL;\n}\n//遍历，不破坏原链栈\nvoid traverse(chainStack cs){\n    if(cs==NULL) return;\n    for(chainStack p=cs->next;p!=NULL;p=p->next)\n        cout<<p->data<<' ';\n    cout<<endl;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;chainStack st=new csNode;for(int x:a)push(st,x);\nif(empty(st))cout<<\"EMPTY\\n\";else cout<<top(st)<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "保留本节顺序栈/链栈函数主体；空操作由题面规定，驱动在调用前检查；遍历输出增加空格。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n",
        "expected": "2\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 1 -2\n",
        "expected": "-2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-chain-stack-pop",
    "title": "链栈：出栈",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "owuypwz940xxzpvr",
        "blocks": [
          6,
          7,
          8,
          9,
          10,
          11
        ],
        "functions": [
          "pop"
        ]
      }
    ],
    "description": "先按输入次序入栈，再完成指定操作。输出序列按栈顶到栈底排列；空栈出栈不改变状态。",
    "input": "n；n 个整数（从底到顶）；无其他输入。",
    "output": "判空输出 1/0；读顶输出值或 EMPTY；其他操作输出顶到底序列，空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数（从底到顶）；无其他输入。\n// 输出：判空输出 1/0；读顶输出值或 EMPTY；其他操作输出顶到底序列，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\ntypedef int datatype;\ntypedef struct csNode{\n    datatype data;\n    csNode * next;\n    csNode():next(NULL){} //新创建的结点先不指向任何结点\n} * chainStack;\n//判断栈ss是否是空栈，是返回true否则返回false \nbool empty(chainStack cs){\n    return cs==NULL || cs->next==NULL;\n}\n//向cs中压入一个值为x的结点\nvoid push(chainStack cs,datatype x){\n    if(cs==NULL) return;\n    chainStack q=new csNode;\n    if(q==NULL) return;\n    q->data=x;\n    q->next=cs->next;\n    cs->next=q;\n}\n//获取cs的栈顶元素\ndatatype top(chainStack cs){\n    if(empty(cs)){\n        return 0;\n    }\n    return cs->next->data; //cs永远指向栈顶\n}\n//出栈\nvoid pop(chainStack cs){\n    if(empty(cs)){\n        return;\n    }\n    chainStack q = cs->next;\n    cs->next = q->next;\n    delete q;q = NULL;\n}\n//遍历，不破坏原链栈\nvoid traverse(chainStack cs){\n    if(cs==NULL) return;\n    for(chainStack p=cs->next;p!=NULL;p=p->next)\n        cout<<p->data<<' ';\n    cout<<endl;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;chainStack st=new csNode;for(int x:a)push(st,x);\nif(!empty(st))pop(st);vector<int>v;for(auto q=st->next;q;q=q->next)v.push_back(q->data);printv(v);\nreturn 0;}\n",
    "referenceNote": "保留本节顺序栈/链栈函数主体；空操作由题面规定，驱动在调用前检查；遍历输出增加空格。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 1 -2\n",
        "expected": "1 -2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-chain-stack-traverse",
    "title": "链栈：遍历",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "owuypwz940xxzpvr",
        "blocks": [
          6,
          7,
          8,
          9,
          10,
          11
        ],
        "functions": [
          "traverse"
        ]
      }
    ],
    "description": "先按输入次序入栈，再完成指定操作。输出序列按栈顶到栈底排列；空栈出栈不改变状态。",
    "input": "n；n 个整数（从底到顶）；无其他输入。",
    "output": "判空输出 1/0；读顶输出值或 EMPTY；其他操作输出顶到底序列，空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数（从底到顶）；无其他输入。\n// 输出：判空输出 1/0；读顶输出值或 EMPTY；其他操作输出顶到底序列，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\ntypedef int datatype;\ntypedef struct csNode{\n    datatype data;\n    csNode * next;\n    csNode():next(NULL){} //新创建的结点先不指向任何结点\n} * chainStack;\n//判断栈ss是否是空栈，是返回true否则返回false \nbool empty(chainStack cs){\n    return cs==NULL || cs->next==NULL;\n}\n//向cs中压入一个值为x的结点\nvoid push(chainStack cs,datatype x){\n    if(cs==NULL) return;\n    chainStack q=new csNode;\n    if(q==NULL) return;\n    q->data=x;\n    q->next=cs->next;\n    cs->next=q;\n}\n//获取cs的栈顶元素\ndatatype top(chainStack cs){\n    if(empty(cs)){\n        return 0;\n    }\n    return cs->next->data; //cs永远指向栈顶\n}\n//出栈\nvoid pop(chainStack cs){\n    if(empty(cs)){\n        return;\n    }\n    chainStack q = cs->next;\n    cs->next = q->next;\n    delete q;q = NULL;\n}\n//遍历，不破坏原链栈\nvoid traverse(chainStack cs){\n    if(cs==NULL) return;\n    for(chainStack p=cs->next;p!=NULL;p=p->next)\n        cout<<p->data<<' ';\n    cout<<endl;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;chainStack st=new csNode;for(int x:a)push(st,x);\nif(empty(st))cout<<\"EMPTY\\n\";else traverse(st);\nreturn 0;}\n",
    "referenceNote": "保留本节顺序栈/链栈函数主体；空操作由题面规定，驱动在调用前检查；遍历输出增加空格。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n",
        "expected": "2\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 1 -2\n",
        "expected": "-2 1 -2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-array-stack-basic",
    "title": "数组栈：下标维护与出栈",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "owuypwz940xxzpvr",
        "blocks": [
          5
        ],
        "functions": [
          "array-stack"
        ]
      }
    ],
    "description": "把 n 个输入值依次入数组栈，然后至多出栈一次，输出剩余栈顶。top 初始为 -1。",
    "input": "n；n 个整数。",
    "output": "有剩余元素输出栈顶；否则输出 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数。\n// 输出：有剩余元素输出栈顶；否则输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;\nint stackData[100],topIndex=-1;for(int x:a)stackData[++topIndex]=x;if(topIndex>=0)--topIndex;if(topIndex>=0)cout<<stackData[topIndex]<<\"\\n\";else cout<<\"EMPTY\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n1 -3 4\n",
        "expected": "-3\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-stl-stack-size",
    "title": "STL stack：入栈并求大小",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "naes6mh6d27dh4fg",
        "blocks": [
          0,
          1
        ],
        "functions": [
          "stack::size"
        ]
      }
    ],
    "description": "按数组顺序 push 到以 vector 为底层容器的 stack，再执行本题操作。",
    "input": "n；n 个整数。",
    "output": "大小题输出元素数量；其余按顶到底输出，空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "0\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数。\n// 输出：大小题输出元素数量；其余按顶到底输出，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;stack<int,vector<int>>st;for(int x:a)st.push(x);\ncout<<st.size()<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "0\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n",
        "expected": "1\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-1 2 -1\n",
        "expected": "3\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-stl-stack-pop",
    "title": "STL stack：删除栈顶",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "naes6mh6d27dh4fg",
        "blocks": [
          0,
          1
        ],
        "functions": [
          "stack::pop"
        ]
      }
    ],
    "description": "按数组顺序 push 到以 vector 为底层容器的 stack，再执行本题操作。",
    "input": "n；n 个整数。",
    "output": "大小题输出元素数量；其余按顶到底输出，空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数。\n// 输出：大小题输出元素数量；其余按顶到底输出，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;stack<int,vector<int>>st;for(int x:a)st.push(x);\nif(!st.empty())st.pop();vector<int>v;while(!st.empty()){v.push_back(st.top());st.pop();}printv(v);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-1 2 -1\n",
        "expected": "2 -1\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-stl-stack-traverse",
    "title": "STL stack：遍历并清空",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "naes6mh6d27dh4fg",
        "blocks": [
          0,
          1
        ],
        "functions": [
          "stack::traverse"
        ]
      }
    ],
    "description": "按数组顺序 push 到以 vector 为底层容器的 stack，再执行本题操作。",
    "input": "n；n 个整数。",
    "output": "大小题输出元素数量；其余按顶到底输出，空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数。\n// 输出：大小题输出元素数量；其余按顶到底输出，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;stack<int,vector<int>>st;for(int x:a)st.push(x);\nvector<int>v;while(!st.empty()){v.push_back(st.top());st.pop();}printv(v);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n",
        "expected": "2\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-1 2 -1\n",
        "expected": "-1 2 -1\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-brackets",
    "title": "括号匹配：栈应用",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "bza8d7o3twyr1qqc",
        "blocks": [
          0
        ],
        "functions": [
          "check_brackets"
        ]
      }
    ],
    "description": "忽略其他字符，判断 () 和 [] 是否正确嵌套；空串合法。",
    "input": "一整行字符串，可含空格和字母。",
    "output": "合法输出 YES，否则 NO。",
    "constraints": [
      "字符串长度 0..100",
      "仅 ()[] 被视作括号，其他字符忽略。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "a[(b)]\n",
        "expected": "YES\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：一整行字符串，可含空格和字母。\n// 输出：合法输出 YES，否则 NO。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n//检查字符串中的括号('(',')','[',']')是否合法,合法,返回true;否则返回false\nbool check_brackets( string str ){\n    int i,sz=str.size();\n\n    stack<char>stk;\n\n    for(i=0; i<sz; i++){\n        if(str[i]=='(' || str[i]=='[') stk.push(str[i]);          //左括号入栈\n        else{\n            if(str[i]!=')' && str[i]!=']') continue;              //跳过非括号字符\n            if(stk.empty()) return false;                          //栈为空,不合法\n            char ch=stk.top();                                    //获取栈顶元素\n            if(str[i]==')' && ch!='(' || str[i]==']' && ch!='[')  //栈顶元素与当前括\n                                                                  //号不匹配,不合法\n                return false;\n            stk.pop();                                            //出栈\n        }\n    }\n    if(! stk.empty()) return false;                               //栈非空,不合法\n    return true;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring s;getline(cin,s);\ncout<<(check_brackets(s)?\"YES\":\"NO\")<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "a[(b)]\n",
        "expected": "YES\n"
      },
      {
        "name": "测试 2",
        "stdin": "\n",
        "expected": "YES\n"
      },
      {
        "name": "测试 3",
        "stdin": "([)]\n",
        "expected": "NO\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-calculate",
    "title": "双栈：整数四则表达式求值",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "bza8d7o3twyr1qqc",
        "blocks": [
          1
        ],
        "functions": [
          "calculate",
          "cal"
        ]
      }
    ],
    "description": "对合法表达式求值，支持非负整数字面量、二元 + - * / 和圆括号；除法按实数计算，遵循优先级及左结合。",
    "input": "一整行合法表达式。",
    "output": "输出结果，固定保留 6 位小数。",
    "constraints": [
      "表达式长度 1..100；整数 0..1000",
      "中间值绝对值≤1000000；除数非零；不含一元正负号。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n",
        "expected": "0.000000\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：一整行合法表达式。\n// 输出：输出结果，固定保留 6 位小数。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n//处理ops栈顶op的运算结果：从栈opers中取两个数据v1,v，计算v op v1的结果并返回\nvoid cal(stack<double>&opers,stack<char>&ops){\n    double v,v1,ret;\n    v1=opers.top(),opers.pop();             //右操作数\n    v=opers.top(),opers.pop();              //左操作数\n    char op=ops.top();ops.pop();            //运算符\n    switch(op){\n        case '+':ret=v+v1;break;\n        case '-':ret=v-v1;break;\n        case '*':ret=v*v1;break;\n        case '/':\n            if(v1==0) exit(0);              //分母为0\n            ret=v/v1;break;\n    }\n    opers.push(ret);                        //计算结果入栈\n}\n\n//算术表达式求值\ndouble calculate(string exp){\n    stack<double>opers;\n    stack<char>ops;\n    int i,sz=exp.size(),v;\n    for(i=0;i<sz;i++){\n        if(isdigit(exp[i])){                //exp[i]为数字，将其后连续数字组装为一个\n                                            //整数\n            v=exp[i]-'0';\n            while(++i<sz&&isdigit(exp[i]))\n                v=v*10+exp[i]-'0';\n            opers.push(v);                  //将组装的整数入栈\n            --i;\n        }\n        else if(exp[i]=='(') ops.push(exp[i]);//exp[i]为左括号，直接加入ops\n        else if(exp[i]=='*'||exp[i]=='/'){  //exp[i]为乘号或除号，消除ops栈顶的'*'和'/'\n            while(!ops.empty()&&(ops.top()=='*'||ops.top()=='/'))\n                cal(opers,ops);\n            ops.push(exp[i]);\n        }\n        else if(exp[i]=='+'||exp[i]=='-'||exp[i]==')'){//exp[i]为加号、减号或右括\n                                                       //号，消除栈顶的'+'、'-'、'*'、'/'\n            while(!ops.empty()&&ops.top()!='(')\n                cal(opers,ops);\n            if(exp[i]==')') ops.pop();\n            else ops.push(exp[i]);\n        }\n    }\n    while(!ops.empty())\n        cal(opers,ops);\n    return opers.top();\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring s;getline(cin,s);\ncout<<fixed<<setprecision(6)<<calculate(s)<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n",
        "expected": "0.000000\n"
      },
      {
        "name": "测试 2",
        "stdin": "12+3*(4-2)\n",
        "expected": "18.000000\n"
      },
      {
        "name": "测试 3",
        "stdin": "8/4/2\n",
        "expected": "1.000000\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-monostack-left_smaller",
    "title": "单调栈：左侧最近较小值",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "uqmmo4zf165fax00",
        "blocks": [
          0
        ],
        "functions": [
          "left_smaller"
        ]
      }
    ],
    "description": "对每个数，找到它左边最近的严格小于它的数；不存在输出 not find。",
    "input": "n；n 个整数。",
    "output": "按输入顺序输出每个元素的答案；空数组输出 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数。\n// 输出：按输入顺序输出每个元素的答案；空数组输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n//输出数组a的每一个元素左端第一个比他小的值\nvoid left_smaller(int a[],int n){\n    stack<int>stk;\n    for(int i=0;i<n;i++){\n        while(!stk.empty()&&a[i]<=stk.top()) //a[i]不大于栈顶元素出栈\n            stk.pop();\n    if(stk.empty()){\n        cout<<\"not find\"<<' ';\n    }\n    else{\n        cout<<stk.top()<<' ';\n    }\n    stk.push(a[i]);//a[i]入栈,当前查询结束后，再让它成为后面元素的候选值\n}\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;\nif(!n)cout<<\"EMPTY\\n\";else left_smaller(a.data(),n);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "4\n2 2 1 3\n",
        "expected": "not find not find not find 1\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 -3 4\n",
        "expected": "not find not find -3\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-monostack-left_bigger",
    "title": "单调栈：左侧连续较大元素数",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "uqmmo4zf165fax00",
        "blocks": [
          1
        ],
        "functions": [
          "left_bigger"
        ]
      }
    ],
    "description": "对每个数，统计紧邻其左侧、连续且严格大于它的元素数量；遇到第一个不大于它的数就停止。",
    "input": "n；n 个整数。",
    "output": "按输入顺序输出每个元素的答案；空数组输出 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数。\n// 输出：按输入顺序输出每个元素的答案；空数组输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n//输出每个元素左侧连续且严格大于它的元素个数\nvoid left_bigger(int a[],int n){\n    stack<int>stk;\n    for(int i=0;i<n;i++){\n        while(!stk.empty()&&a[i]<a[stk.top()]) stk.pop();\n        if(stk.empty()) cout<<i<<' ';\n        else cout<<i-stk.top()-1<<' ';\n        stk.push(i);//下标入栈\n    }\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;\nif(!n)cout<<\"EMPTY\\n\";else left_bigger(a.data(),n);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "4\n2 2 1 3\n",
        "expected": "0 0 2 0\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 -3 4\n",
        "expected": "0 1 0\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-chain-queue-empty",
    "title": "链队列：判空",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xhmfwclpu62ys3yo",
        "blocks": [
          0,
          1
        ],
        "functions": [
          "empty"
        ]
      }
    ],
    "description": "先按输入顺序入队，执行本题指定操作。循环数组 N=100，保留一个空位，最大有效容量 99。",
    "input": "n；n 个整数；无其他输入。",
    "output": "判空/满输出 1 或 0；读队头输出值或 EMPTY；其余按队头到队尾输出，空为 EMPTY。",
    "constraints": [
      "0≤n≤99；入队题 n≤98",
      "元素在 [-100,100]；空队列出队保持为空。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "1\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；无其他输入。\n// 输出：判空/满输出 1 或 0；读队头输出值或 EMPTY；其余按队头到队尾输出，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nusing datatype=int;\ntypedef struct clNode{\ndatatype data;\nclNode * next;\n} * cqNode;\nstruct chainQueue{\ncqNode front;\ncqNode rear;\nchainQueue():front(NULL),rear(NULL){}\n};\n//判断是否为空\nbool empty(chainQueue cq){\n    return cq.front==NULL;\n}\n//入队\nvoid push(chainQueue &cq,datatype x){\n    cqNode temp=new clNode;\n    temp->data=x;\n    temp->next=NULL;\n    if(empty(cq)){ //如果是空的\n        cq.front=new clNode; //创建头结点\n        cq.front->next=temp; \n    }\n    else{\n        cq.rear->next=temp; //放在当前队尾后面\n            }\n    cq.rear=temp; //队尾变成新的结点\n}\n//获取队头x的值\ndatatype front(chainQueue cq){\n    if(empty(cq)){\n        cout<<\"空的\"<<endl;\n        return -1;\n    }\n    else{\n        return cq.front->next->data;\n    }\n}\n\n//出队,删除队头\nvoid pop(chainQueue &cq){\n    if(empty(cq)){\n        cout<<\"空的\"<<endl;\n        return;\n    }\n    cqNode temp=cq.front->next;//定义队头结点\n    cq.front->next=temp->next;\n    delete temp;temp=NULL;\n    if(cq.front->next==NULL){//如果空了\n        delete cq.front;cq.front=NULL;//删掉队头\n        cq.rear=NULL;//删掉队尾\n    }\n}\n//遍历,同时清空链队列\nvoid traserve(chainQueue &cq){\n    while(!empty(cq)){\n        cout<<front(cq)<<' ';\n        pop(cq);\n    }\n    cout<<endl;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;chainQueue q;for(int x:a)push(q,x);\ncout<<empty(q)<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "1\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n",
        "expected": "0\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 1 -2\n",
        "expected": "0\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-chain-queue-push",
    "title": "链队列：入队",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xhmfwclpu62ys3yo",
        "blocks": [
          0,
          1
        ],
        "functions": [
          "push"
        ]
      }
    ],
    "description": "先按输入顺序入队，执行本题指定操作。循环数组 N=100，保留一个空位，最大有效容量 99。",
    "input": "n；n 个整数；待入队 x。",
    "output": "判空/满输出 1 或 0；读队头输出值或 EMPTY；其余按队头到队尾输出，空为 EMPTY。",
    "constraints": [
      "0≤n≤99；入队题 n≤98",
      "元素在 [-100,100]；空队列出队保持为空。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n7\n",
        "expected": "7\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；待入队 x。\n// 输出：判空/满输出 1 或 0；读队头输出值或 EMPTY；其余按队头到队尾输出，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nusing datatype=int;\ntypedef struct clNode{\ndatatype data;\nclNode * next;\n} * cqNode;\nstruct chainQueue{\ncqNode front;\ncqNode rear;\nchainQueue():front(NULL),rear(NULL){}\n};\n//判断是否为空\nbool empty(chainQueue cq){\n    return cq.front==NULL;\n}\n//入队\nvoid push(chainQueue &cq,datatype x){\n    cqNode temp=new clNode;\n    temp->data=x;\n    temp->next=NULL;\n    if(empty(cq)){ //如果是空的\n        cq.front=new clNode; //创建头结点\n        cq.front->next=temp; \n    }\n    else{\n        cq.rear->next=temp; //放在当前队尾后面\n            }\n    cq.rear=temp; //队尾变成新的结点\n}\n//获取队头x的值\ndatatype front(chainQueue cq){\n    if(empty(cq)){\n        cout<<\"空的\"<<endl;\n        return -1;\n    }\n    else{\n        return cq.front->next->data;\n    }\n}\n\n//出队,删除队头\nvoid pop(chainQueue &cq){\n    if(empty(cq)){\n        cout<<\"空的\"<<endl;\n        return;\n    }\n    cqNode temp=cq.front->next;//定义队头结点\n    cq.front->next=temp->next;\n    delete temp;temp=NULL;\n    if(cq.front->next==NULL){//如果空了\n        delete cq.front;cq.front=NULL;//删掉队头\n        cq.rear=NULL;//删掉队尾\n    }\n}\n//遍历,同时清空链队列\nvoid traserve(chainQueue &cq){\n    while(!empty(cq)){\n        cout<<front(cq)<<' ';\n        pop(cq);\n    }\n    cout<<endl;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;chainQueue q;for(int x:a)push(q,x);int x;cin>>x;\npush(q,x);vector<int>v;while(!empty(q)){v.push_back(front(q));pop(q);}printv(v);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n7\n",
        "expected": "7\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n7\n",
        "expected": "2 7\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 1 -2\n7\n",
        "expected": "-2 1 -2 7\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-chain-queue-front",
    "title": "链队列：读取队头",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xhmfwclpu62ys3yo",
        "blocks": [
          0,
          1
        ],
        "functions": [
          "front"
        ]
      }
    ],
    "description": "先按输入顺序入队，执行本题指定操作。循环数组 N=100，保留一个空位，最大有效容量 99。",
    "input": "n；n 个整数；无其他输入。",
    "output": "判空/满输出 1 或 0；读队头输出值或 EMPTY；其余按队头到队尾输出，空为 EMPTY。",
    "constraints": [
      "0≤n≤99；入队题 n≤98",
      "元素在 [-100,100]；空队列出队保持为空。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；无其他输入。\n// 输出：判空/满输出 1 或 0；读队头输出值或 EMPTY；其余按队头到队尾输出，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nusing datatype=int;\ntypedef struct clNode{\ndatatype data;\nclNode * next;\n} * cqNode;\nstruct chainQueue{\ncqNode front;\ncqNode rear;\nchainQueue():front(NULL),rear(NULL){}\n};\n//判断是否为空\nbool empty(chainQueue cq){\n    return cq.front==NULL;\n}\n//入队\nvoid push(chainQueue &cq,datatype x){\n    cqNode temp=new clNode;\n    temp->data=x;\n    temp->next=NULL;\n    if(empty(cq)){ //如果是空的\n        cq.front=new clNode; //创建头结点\n        cq.front->next=temp; \n    }\n    else{\n        cq.rear->next=temp; //放在当前队尾后面\n            }\n    cq.rear=temp; //队尾变成新的结点\n}\n//获取队头x的值\ndatatype front(chainQueue cq){\n    if(empty(cq)){\n        cout<<\"空的\"<<endl;\n        return -1;\n    }\n    else{\n        return cq.front->next->data;\n    }\n}\n\n//出队,删除队头\nvoid pop(chainQueue &cq){\n    if(empty(cq)){\n        cout<<\"空的\"<<endl;\n        return;\n    }\n    cqNode temp=cq.front->next;//定义队头结点\n    cq.front->next=temp->next;\n    delete temp;temp=NULL;\n    if(cq.front->next==NULL){//如果空了\n        delete cq.front;cq.front=NULL;//删掉队头\n        cq.rear=NULL;//删掉队尾\n    }\n}\n//遍历,同时清空链队列\nvoid traserve(chainQueue &cq){\n    while(!empty(cq)){\n        cout<<front(cq)<<' ';\n        pop(cq);\n    }\n    cout<<endl;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;chainQueue q;for(int x:a)push(q,x);\nif(empty(q))cout<<\"EMPTY\\n\";else cout<<front(q)<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n",
        "expected": "2\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 1 -2\n",
        "expected": "-2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-chain-queue-pop",
    "title": "链队列：出队",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xhmfwclpu62ys3yo",
        "blocks": [
          0,
          1
        ],
        "functions": [
          "pop"
        ]
      }
    ],
    "description": "先按输入顺序入队，执行本题指定操作。循环数组 N=100，保留一个空位，最大有效容量 99。",
    "input": "n；n 个整数；无其他输入。",
    "output": "判空/满输出 1 或 0；读队头输出值或 EMPTY；其余按队头到队尾输出，空为 EMPTY。",
    "constraints": [
      "0≤n≤99；入队题 n≤98",
      "元素在 [-100,100]；空队列出队保持为空。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；无其他输入。\n// 输出：判空/满输出 1 或 0；读队头输出值或 EMPTY；其余按队头到队尾输出，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nusing datatype=int;\ntypedef struct clNode{\ndatatype data;\nclNode * next;\n} * cqNode;\nstruct chainQueue{\ncqNode front;\ncqNode rear;\nchainQueue():front(NULL),rear(NULL){}\n};\n//判断是否为空\nbool empty(chainQueue cq){\n    return cq.front==NULL;\n}\n//入队\nvoid push(chainQueue &cq,datatype x){\n    cqNode temp=new clNode;\n    temp->data=x;\n    temp->next=NULL;\n    if(empty(cq)){ //如果是空的\n        cq.front=new clNode; //创建头结点\n        cq.front->next=temp; \n    }\n    else{\n        cq.rear->next=temp; //放在当前队尾后面\n            }\n    cq.rear=temp; //队尾变成新的结点\n}\n//获取队头x的值\ndatatype front(chainQueue cq){\n    if(empty(cq)){\n        cout<<\"空的\"<<endl;\n        return -1;\n    }\n    else{\n        return cq.front->next->data;\n    }\n}\n\n//出队,删除队头\nvoid pop(chainQueue &cq){\n    if(empty(cq)){\n        cout<<\"空的\"<<endl;\n        return;\n    }\n    cqNode temp=cq.front->next;//定义队头结点\n    cq.front->next=temp->next;\n    delete temp;temp=NULL;\n    if(cq.front->next==NULL){//如果空了\n        delete cq.front;cq.front=NULL;//删掉队头\n        cq.rear=NULL;//删掉队尾\n    }\n}\n//遍历,同时清空链队列\nvoid traserve(chainQueue &cq){\n    while(!empty(cq)){\n        cout<<front(cq)<<' ';\n        pop(cq);\n    }\n    cout<<endl;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;chainQueue q;for(int x:a)push(q,x);\nif(!empty(q))pop(q);vector<int>v;while(!empty(q)){v.push_back(front(q));pop(q);}printv(v);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 1 -2\n",
        "expected": "1 -2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-chain-queue-traverse",
    "title": "链队列：遍历并清空",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xhmfwclpu62ys3yo",
        "blocks": [
          0,
          1
        ],
        "functions": [
          "traserve"
        ]
      }
    ],
    "description": "先按输入顺序入队，执行本题指定操作。循环数组 N=100，保留一个空位，最大有效容量 99。",
    "input": "n；n 个整数；无其他输入。",
    "output": "判空/满输出 1 或 0；读队头输出值或 EMPTY；其余按队头到队尾输出，空为 EMPTY。",
    "constraints": [
      "0≤n≤99；入队题 n≤98",
      "元素在 [-100,100]；空队列出队保持为空。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；无其他输入。\n// 输出：判空/满输出 1 或 0；读队头输出值或 EMPTY；其余按队头到队尾输出，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nusing datatype=int;\ntypedef struct clNode{\ndatatype data;\nclNode * next;\n} * cqNode;\nstruct chainQueue{\ncqNode front;\ncqNode rear;\nchainQueue():front(NULL),rear(NULL){}\n};\n//判断是否为空\nbool empty(chainQueue cq){\n    return cq.front==NULL;\n}\n//入队\nvoid push(chainQueue &cq,datatype x){\n    cqNode temp=new clNode;\n    temp->data=x;\n    temp->next=NULL;\n    if(empty(cq)){ //如果是空的\n        cq.front=new clNode; //创建头结点\n        cq.front->next=temp; \n    }\n    else{\n        cq.rear->next=temp; //放在当前队尾后面\n            }\n    cq.rear=temp; //队尾变成新的结点\n}\n//获取队头x的值\ndatatype front(chainQueue cq){\n    if(empty(cq)){\n        cout<<\"空的\"<<endl;\n        return -1;\n    }\n    else{\n        return cq.front->next->data;\n    }\n}\n\n//出队,删除队头\nvoid pop(chainQueue &cq){\n    if(empty(cq)){\n        cout<<\"空的\"<<endl;\n        return;\n    }\n    cqNode temp=cq.front->next;//定义队头结点\n    cq.front->next=temp->next;\n    delete temp;temp=NULL;\n    if(cq.front->next==NULL){//如果空了\n        delete cq.front;cq.front=NULL;//删掉队头\n        cq.rear=NULL;//删掉队尾\n    }\n}\n//遍历,同时清空链队列\nvoid traserve(chainQueue &cq){\n    while(!empty(cq)){\n        cout<<front(cq)<<' ';\n        pop(cq);\n    }\n    cout<<endl;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;chainQueue q;for(int x:a)push(q,x);\nif(empty(q))cout<<\"EMPTY\\n\";else traserve(q);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n",
        "expected": "2\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 1 -2\n",
        "expected": "-2 1 -2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-ring-queue-empty",
    "title": "循环队列：判空",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xhmfwclpu62ys3yo",
        "blocks": [
          2,
          3
        ],
        "functions": [
          "empty"
        ]
      }
    ],
    "description": "先按输入顺序入队，执行本题指定操作。循环数组 N=100，保留一个空位，最大有效容量 99。",
    "input": "n；n 个整数；无其他输入。",
    "output": "判空/满输出 1 或 0；读队头输出值或 EMPTY；其余按队头到队尾输出，空为 EMPTY。",
    "constraints": [
      "0≤n≤99；入队题 n≤98",
      "元素在 [-100,100]；空队列出队保持为空。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "1\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；无其他输入。\n// 输出：判空/满输出 1 或 0；读队头输出值或 EMPTY；其余按队头到队尾输出，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\ntypedef int datatype;\n#define N 100\ntypedef struct sqNode{\ndatatype data [N];\nint front;\nint rear;\nsqNode():front(0),rear(-1){}\n}seqQueue;\n#define next(x) ((x)==N-1?0:(x)+1)  \n//判断是否是空的\nbool empty(seqQueue sq){\n    return next(sq.rear)==sq.front;\n}\n//判断是否满了\nbool full(seqQueue sq){\n    return next(next(sq.rear))==sq.front;//最后一个位置永远空着不给放\n}\n//入队\nvoid push(seqQueue &sq,datatype x){\n    if(full(sq)){\n        return;\n    }\n    sq.rear=next(sq.rear);\n    sq.data[sq.rear]=x;\n}\n//获取队头\ndatatype front(seqQueue sq){\n    if(empty(sq)){\n        return -1;\n    }\n    return sq.data[sq.front];\n}\n//出队，删掉队头\nvoid pop(seqQueue &sq){\n    if(empty(sq)){\n        return;\n    }\n    sq.front=next(sq.front); \n}\n//遍历并清空\nvoid traverse(seqQueue &sq){\n    while(!empty(sq)){\n        cout<<front(sq)<<' ';\n        pop(sq);       \n    }\n        cout<<endl;  \n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;seqQueue q;for(int x:a)push(q,x);\ncout<<empty(q)<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "1\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n",
        "expected": "0\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 1 -2\n",
        "expected": "0\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-ring-queue-push",
    "title": "循环队列：入队",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xhmfwclpu62ys3yo",
        "blocks": [
          2,
          3
        ],
        "functions": [
          "push"
        ]
      }
    ],
    "description": "先按输入顺序入队，执行本题指定操作。循环数组 N=100，保留一个空位，最大有效容量 99。",
    "input": "n；n 个整数；待入队 x。",
    "output": "判空/满输出 1 或 0；读队头输出值或 EMPTY；其余按队头到队尾输出，空为 EMPTY。",
    "constraints": [
      "0≤n≤99；入队题 n≤98",
      "元素在 [-100,100]；空队列出队保持为空。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n7\n",
        "expected": "7\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；待入队 x。\n// 输出：判空/满输出 1 或 0；读队头输出值或 EMPTY；其余按队头到队尾输出，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\ntypedef int datatype;\n#define N 100\ntypedef struct sqNode{\ndatatype data [N];\nint front;\nint rear;\nsqNode():front(0),rear(-1){}\n}seqQueue;\n#define next(x) ((x)==N-1?0:(x)+1)  \n//判断是否是空的\nbool empty(seqQueue sq){\n    return next(sq.rear)==sq.front;\n}\n//判断是否满了\nbool full(seqQueue sq){\n    return next(next(sq.rear))==sq.front;//最后一个位置永远空着不给放\n}\n//入队\nvoid push(seqQueue &sq,datatype x){\n    if(full(sq)){\n        return;\n    }\n    sq.rear=next(sq.rear);\n    sq.data[sq.rear]=x;\n}\n//获取队头\ndatatype front(seqQueue sq){\n    if(empty(sq)){\n        return -1;\n    }\n    return sq.data[sq.front];\n}\n//出队，删掉队头\nvoid pop(seqQueue &sq){\n    if(empty(sq)){\n        return;\n    }\n    sq.front=next(sq.front); \n}\n//遍历并清空\nvoid traverse(seqQueue &sq){\n    while(!empty(sq)){\n        cout<<front(sq)<<' ';\n        pop(sq);       \n    }\n        cout<<endl;  \n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;seqQueue q;for(int x:a)push(q,x);int x;cin>>x;\npush(q,x);vector<int>v;while(!empty(q)){v.push_back(front(q));pop(q);}printv(v);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n7\n",
        "expected": "7\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n7\n",
        "expected": "2 7\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 1 -2\n7\n",
        "expected": "-2 1 -2 7\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-ring-queue-front",
    "title": "循环队列：读取队头",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xhmfwclpu62ys3yo",
        "blocks": [
          2,
          3
        ],
        "functions": [
          "front"
        ]
      }
    ],
    "description": "先按输入顺序入队，执行本题指定操作。循环数组 N=100，保留一个空位，最大有效容量 99。",
    "input": "n；n 个整数；无其他输入。",
    "output": "判空/满输出 1 或 0；读队头输出值或 EMPTY；其余按队头到队尾输出，空为 EMPTY。",
    "constraints": [
      "0≤n≤99；入队题 n≤98",
      "元素在 [-100,100]；空队列出队保持为空。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；无其他输入。\n// 输出：判空/满输出 1 或 0；读队头输出值或 EMPTY；其余按队头到队尾输出，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\ntypedef int datatype;\n#define N 100\ntypedef struct sqNode{\ndatatype data [N];\nint front;\nint rear;\nsqNode():front(0),rear(-1){}\n}seqQueue;\n#define next(x) ((x)==N-1?0:(x)+1)  \n//判断是否是空的\nbool empty(seqQueue sq){\n    return next(sq.rear)==sq.front;\n}\n//判断是否满了\nbool full(seqQueue sq){\n    return next(next(sq.rear))==sq.front;//最后一个位置永远空着不给放\n}\n//入队\nvoid push(seqQueue &sq,datatype x){\n    if(full(sq)){\n        return;\n    }\n    sq.rear=next(sq.rear);\n    sq.data[sq.rear]=x;\n}\n//获取队头\ndatatype front(seqQueue sq){\n    if(empty(sq)){\n        return -1;\n    }\n    return sq.data[sq.front];\n}\n//出队，删掉队头\nvoid pop(seqQueue &sq){\n    if(empty(sq)){\n        return;\n    }\n    sq.front=next(sq.front); \n}\n//遍历并清空\nvoid traverse(seqQueue &sq){\n    while(!empty(sq)){\n        cout<<front(sq)<<' ';\n        pop(sq);       \n    }\n        cout<<endl;  \n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;seqQueue q;for(int x:a)push(q,x);\nif(empty(q))cout<<\"EMPTY\\n\";else cout<<front(q)<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n",
        "expected": "2\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 1 -2\n",
        "expected": "-2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-ring-queue-pop",
    "title": "循环队列：出队",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xhmfwclpu62ys3yo",
        "blocks": [
          2,
          3
        ],
        "functions": [
          "pop"
        ]
      }
    ],
    "description": "先按输入顺序入队，执行本题指定操作。循环数组 N=100，保留一个空位，最大有效容量 99。",
    "input": "n；n 个整数；无其他输入。",
    "output": "判空/满输出 1 或 0；读队头输出值或 EMPTY；其余按队头到队尾输出，空为 EMPTY。",
    "constraints": [
      "0≤n≤99；入队题 n≤98",
      "元素在 [-100,100]；空队列出队保持为空。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；无其他输入。\n// 输出：判空/满输出 1 或 0；读队头输出值或 EMPTY；其余按队头到队尾输出，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\ntypedef int datatype;\n#define N 100\ntypedef struct sqNode{\ndatatype data [N];\nint front;\nint rear;\nsqNode():front(0),rear(-1){}\n}seqQueue;\n#define next(x) ((x)==N-1?0:(x)+1)  \n//判断是否是空的\nbool empty(seqQueue sq){\n    return next(sq.rear)==sq.front;\n}\n//判断是否满了\nbool full(seqQueue sq){\n    return next(next(sq.rear))==sq.front;//最后一个位置永远空着不给放\n}\n//入队\nvoid push(seqQueue &sq,datatype x){\n    if(full(sq)){\n        return;\n    }\n    sq.rear=next(sq.rear);\n    sq.data[sq.rear]=x;\n}\n//获取队头\ndatatype front(seqQueue sq){\n    if(empty(sq)){\n        return -1;\n    }\n    return sq.data[sq.front];\n}\n//出队，删掉队头\nvoid pop(seqQueue &sq){\n    if(empty(sq)){\n        return;\n    }\n    sq.front=next(sq.front); \n}\n//遍历并清空\nvoid traverse(seqQueue &sq){\n    while(!empty(sq)){\n        cout<<front(sq)<<' ';\n        pop(sq);       \n    }\n        cout<<endl;  \n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;seqQueue q;for(int x:a)push(q,x);\nif(!empty(q))pop(q);vector<int>v;while(!empty(q)){v.push_back(front(q));pop(q);}printv(v);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 1 -2\n",
        "expected": "1 -2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-ring-queue-traverse",
    "title": "循环队列：遍历并清空",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xhmfwclpu62ys3yo",
        "blocks": [
          2,
          3
        ],
        "functions": [
          "traverse"
        ]
      }
    ],
    "description": "先按输入顺序入队，执行本题指定操作。循环数组 N=100，保留一个空位，最大有效容量 99。",
    "input": "n；n 个整数；无其他输入。",
    "output": "判空/满输出 1 或 0；读队头输出值或 EMPTY；其余按队头到队尾输出，空为 EMPTY。",
    "constraints": [
      "0≤n≤99；入队题 n≤98",
      "元素在 [-100,100]；空队列出队保持为空。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；无其他输入。\n// 输出：判空/满输出 1 或 0；读队头输出值或 EMPTY；其余按队头到队尾输出，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\ntypedef int datatype;\n#define N 100\ntypedef struct sqNode{\ndatatype data [N];\nint front;\nint rear;\nsqNode():front(0),rear(-1){}\n}seqQueue;\n#define next(x) ((x)==N-1?0:(x)+1)  \n//判断是否是空的\nbool empty(seqQueue sq){\n    return next(sq.rear)==sq.front;\n}\n//判断是否满了\nbool full(seqQueue sq){\n    return next(next(sq.rear))==sq.front;//最后一个位置永远空着不给放\n}\n//入队\nvoid push(seqQueue &sq,datatype x){\n    if(full(sq)){\n        return;\n    }\n    sq.rear=next(sq.rear);\n    sq.data[sq.rear]=x;\n}\n//获取队头\ndatatype front(seqQueue sq){\n    if(empty(sq)){\n        return -1;\n    }\n    return sq.data[sq.front];\n}\n//出队，删掉队头\nvoid pop(seqQueue &sq){\n    if(empty(sq)){\n        return;\n    }\n    sq.front=next(sq.front); \n}\n//遍历并清空\nvoid traverse(seqQueue &sq){\n    while(!empty(sq)){\n        cout<<front(sq)<<' ';\n        pop(sq);       \n    }\n        cout<<endl;  \n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;seqQueue q;for(int x:a)push(q,x);\nif(empty(q))cout<<\"EMPTY\\n\";else traverse(q);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n",
        "expected": "2\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 1 -2\n",
        "expected": "-2 1 -2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-ring-queue-full",
    "title": "循环队列：判满",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xhmfwclpu62ys3yo",
        "blocks": [
          2,
          3
        ],
        "functions": [
          "full"
        ]
      }
    ],
    "description": "先按输入顺序入队，执行本题指定操作。循环数组 N=100，保留一个空位，最大有效容量 99。",
    "input": "n；n 个整数；无其他输入。",
    "output": "判空/满输出 1 或 0；读队头输出值或 EMPTY；其余按队头到队尾输出，空为 EMPTY。",
    "constraints": [
      "0≤n≤99；入队题 n≤98",
      "元素在 [-100,100]；空队列出队保持为空。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "0\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；无其他输入。\n// 输出：判空/满输出 1 或 0；读队头输出值或 EMPTY；其余按队头到队尾输出，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\ntypedef int datatype;\n#define N 100\ntypedef struct sqNode{\ndatatype data [N];\nint front;\nint rear;\nsqNode():front(0),rear(-1){}\n}seqQueue;\n#define next(x) ((x)==N-1?0:(x)+1)  \n//判断是否是空的\nbool empty(seqQueue sq){\n    return next(sq.rear)==sq.front;\n}\n//判断是否满了\nbool full(seqQueue sq){\n    return next(next(sq.rear))==sq.front;//最后一个位置永远空着不给放\n}\n//入队\nvoid push(seqQueue &sq,datatype x){\n    if(full(sq)){\n        return;\n    }\n    sq.rear=next(sq.rear);\n    sq.data[sq.rear]=x;\n}\n//获取队头\ndatatype front(seqQueue sq){\n    if(empty(sq)){\n        return -1;\n    }\n    return sq.data[sq.front];\n}\n//出队，删掉队头\nvoid pop(seqQueue &sq){\n    if(empty(sq)){\n        return;\n    }\n    sq.front=next(sq.front); \n}\n//遍历并清空\nvoid traverse(seqQueue &sq){\n    while(!empty(sq)){\n        cout<<front(sq)<<' ';\n        pop(sq);       \n    }\n        cout<<endl;  \n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;seqQueue q;for(int x:a)push(q,x);\ncout<<full(q)<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "0\n"
      },
      {
        "name": "测试 2",
        "stdin": "98\n0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97\n",
        "expected": "0\n"
      },
      {
        "name": "测试 3",
        "stdin": "99\n0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98\n",
        "expected": "1\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-stl-queue-push",
    "title": "STL queue：入队",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "vn1vtgg058gsyr91",
        "blocks": [
          0,
          1
        ],
        "functions": [
          "queue::push"
        ]
      }
    ],
    "description": "按输入顺序入标准队列，然后完成指定操作。",
    "input": "n；n 个整数；x。",
    "output": "标量题输出值或 EMPTY；序列题输出队头到队尾，空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n7\n",
        "expected": "7\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；x。\n// 输出：标量题输出值或 EMPTY；序列题输出队头到队尾，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;queue<int>q;for(int x:a)q.push(x);\nint x;cin>>x;q.push(x);vector<int>v;while(!q.empty()){v.push_back(q.front());q.pop();}printv(v);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n7\n",
        "expected": "7\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n1\n7\n",
        "expected": "1 7\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 3 -2\n7\n",
        "expected": "-2 3 -2 7\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-stl-queue-back",
    "title": "STL queue：读取队尾",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "vn1vtgg058gsyr91",
        "blocks": [
          0,
          1
        ],
        "functions": [
          "queue::back"
        ]
      }
    ],
    "description": "按输入顺序入标准队列，然后完成指定操作。",
    "input": "n；n 个整数；无其他输入。",
    "output": "标量题输出值或 EMPTY；序列题输出队头到队尾，空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；无其他输入。\n// 输出：标量题输出值或 EMPTY；序列题输出队头到队尾，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;queue<int>q;for(int x:a)q.push(x);\nif(q.empty())cout<<\"EMPTY\\n\";else cout<<q.back()<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n1\n",
        "expected": "1\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 3 -2\n",
        "expected": "-2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-stl-queue-pop",
    "title": "STL queue：出队",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "vn1vtgg058gsyr91",
        "blocks": [
          0,
          1
        ],
        "functions": [
          "queue::pop"
        ]
      }
    ],
    "description": "按输入顺序入标准队列，然后完成指定操作。",
    "input": "n；n 个整数；无其他输入。",
    "output": "标量题输出值或 EMPTY；序列题输出队头到队尾，空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；无其他输入。\n// 输出：标量题输出值或 EMPTY；序列题输出队头到队尾，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;queue<int>q;for(int x:a)q.push(x);\nif(!q.empty())q.pop();vector<int>v;while(!q.empty()){v.push_back(q.front());q.pop();}printv(v);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n1\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 3 -2\n",
        "expected": "3 -2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-stl-queue-size",
    "title": "STL queue：元素数量",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "vn1vtgg058gsyr91",
        "blocks": [
          0,
          1
        ],
        "functions": [
          "queue::size"
        ]
      }
    ],
    "description": "按输入顺序入标准队列，然后完成指定操作。",
    "input": "n；n 个整数；无其他输入。",
    "output": "标量题输出值或 EMPTY；序列题输出队头到队尾，空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "0\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；无其他输入。\n// 输出：标量题输出值或 EMPTY；序列题输出队头到队尾，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;queue<int>q;for(int x:a)q.push(x);\ncout<<q.size()<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "0\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n1\n",
        "expected": "1\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 3 -2\n",
        "expected": "3\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-stl-queue-traverse",
    "title": "STL queue：遍历",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "vn1vtgg058gsyr91",
        "blocks": [
          0,
          1
        ],
        "functions": [
          "queue::traverse"
        ]
      }
    ],
    "description": "按输入顺序入标准队列，然后完成指定操作。",
    "input": "n；n 个整数；无其他输入。",
    "output": "标量题输出值或 EMPTY；序列题输出队头到队尾，空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；无其他输入。\n// 输出：标量题输出值或 EMPTY；序列题输出队头到队尾，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;queue<int>q;for(int x:a)q.push(x);\nvector<int>v;while(!q.empty()){v.push_back(q.front());q.pop();}printv(v);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n1\n",
        "expected": "1\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 3 -2\n",
        "expected": "-2 3 -2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-deque-slice",
    "title": "STL deque：区间构造",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "vn1vtgg058gsyr91",
        "blocks": [
          0,
          2
        ],
        "functions": [
          "deque::slice"
        ]
      }
    ],
    "description": "对双端队列执行从数组半开区间 [l,r) 初始化。",
    "input": "n；n 个整数；l r，本题 0≤l≤r≤n。",
    "output": "从前到后输出；空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n0 0\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；l r，本题 0≤l≤r≤n。\n// 输出：从前到后输出；空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;\nint l,r;cin>>l>>r;deque<int>q(a.begin()+l,a.begin()+r);printv(vector<int>(q.begin(),q.end()));\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n0 0\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n0 1\n",
        "expected": "2\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-1 2 -1\n0 3\n",
        "expected": "-1 2 -1\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-deque-push-front",
    "title": "STL deque：表头入队",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "vn1vtgg058gsyr91",
        "blocks": [
          0,
          2
        ],
        "functions": [
          "deque::push-front"
        ]
      }
    ],
    "description": "对双端队列执行把 x 放在队头。",
    "input": "n；n 个整数；x。",
    "output": "从前到后输出；空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n7\n",
        "expected": "7\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；x。\n// 输出：从前到后输出；空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;\ndeque<int>q(a.begin(),a.end());int x;cin>>x;q.push_front(x);printv(vector<int>(q.begin(),q.end()));\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n7\n",
        "expected": "7\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n7\n",
        "expected": "7 2\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-1 2 -1\n7\n",
        "expected": "7 -1 2 -1\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-deque-pop-front",
    "title": "STL deque：表头出队",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "vn1vtgg058gsyr91",
        "blocks": [
          0,
          2
        ],
        "functions": [
          "deque::pop-front"
        ]
      }
    ],
    "description": "对双端队列执行删除队头，空队列不变。",
    "input": "n；n 个整数；无其他输入。",
    "output": "从前到后输出；空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；无其他输入。\n// 输出：从前到后输出；空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;\ndeque<int>q(a.begin(),a.end());if(!q.empty())q.pop_front();printv(vector<int>(q.begin(),q.end()));\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-1 2 -1\n",
        "expected": "2 -1\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-yanghui",
    "title": "队列应用：杨辉三角",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "hhq73pa711g46fxo",
        "blocks": [
          0
        ],
        "functions": [
          "yanghuiTriangle"
        ]
      }
    ],
    "description": "输出杨辉三角前 n 行；每行首尾为 1，其余数为上一行相邻两数之和。忽略对齐空格差异。",
    "input": "一个整数 n。",
    "output": "每行输出一行三角形；n=0 输出 EMPTY。",
    "constraints": [
      "0≤n≤15"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：一个整数 n。\n// 输出：每行输出一行三角形；n=0 输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n//输出杨辉三角的前n行\nvoid yanghuiTriangle(int n){\n    if(n<=0) return;\n    int f1,f2,flag,w=4; //w是字符宽度，为了保证输出杨辉三角的形状。flag判断当前行是否已经输出第一个数字\n    queue<int>qu;\n    qu.push(0),qu.push(1); //初始化队列\n    while(n--){ //循环n次\n        qu.push(0); \n        flag=0;//flag等于0表示这一行还没有输出过第一个数字\n        do{\n            f1=qu.front();qu.pop();\n            f2=qu.front();\n            if(f2){\n                if(!flag){\n                    flag=1;\n                    cout<<setw(w*n+1)<<f2;//setw表示设置文本输出宽度w\n                }\n                else{\n                    cout<<setw(2*w)<<f2;\n                }\n            }\n            else{\n                cout<<endl;\n            }\n            qu.push(f1+f2);\n        }while(f2!=0);     \n    }\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;\nif(!n)cout<<\"EMPTY\\n\";else yanghuiTriangle(n);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n",
        "expected": "1\n"
      },
      {
        "name": "测试 3",
        "stdin": "5\n",
        "expected": "1\n1 1\n1 2 1\n1 3 3 1\n1 4 6 4 1\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-sliding-max",
    "title": "单调队列：滑动窗口最大值",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "dzb4ust6p1tn1p4i",
        "blocks": [
          0
        ],
        "functions": [
          "rangeMax"
        ]
      }
    ],
    "description": "窗口从左到右每次移动一格，输出每个长度 m 的窗口内最大值。",
    "input": "n m；随后 n 个整数。",
    "output": "按窗口起点顺序输出最大值。",
    "constraints": [
      "1≤m≤n≤30",
      "元素 [-100,100]"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "1 1\n3\n",
        "expected": "3\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；随后 n 个整数。\n// 输出：按窗口起点顺序输出最大值。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n//求ve中所有区间长度为m的每一个区间中元素的最大值\nvoid rangeMax(vector<int>ve,int m){\n    if(m<=0 || m>(int)ve.size()) return;\n    deque<int>dq;\n    for(int i=0;i<ve.size();i++){\n        while(!dq.empty()&&ve[dq.back()]<ve[i])//去尾\n            dq.pop_back();\n        dq.push_back(i);\n        if(i>=m-1){\n            if(!dq.empty()&&i-dq.front()>=m)\n                dq.pop_front();\n            cout<<ve[dq.front()]<<' ';\n        }\n    }\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<int>a(n);for(int &x:a)cin>>x;\nrangeMax(a,m);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "1 1\n3\n",
        "expected": "3\n"
      },
      {
        "name": "测试 2",
        "stdin": "4 2\n2 2 -1 4\n",
        "expected": "2 2 4\n"
      },
      {
        "name": "测试 3",
        "stdin": "3 3\n-3 -2 -5\n",
        "expected": "-2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-matrix-multiply",
    "title": "矩阵：乘法",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "tha5paui8hzzxa5c",
        "blocks": [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        "functions": [
          "mat_mul"
        ]
      }
    ],
    "description": "计算 A×B，使用行列内积：结果(i,j)是 A 第 i 行与 B 第 j 列的乘积之和。",
    "input": "先输入 A 的行列数和元素，再输入 B 的行列数和元素。",
    "output": "先输出结果行列数，再逐行输出元素。",
    "constraints": [
      "各维度 1..8，A列数=B行数",
      "元素 [-20,20]"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "1 1\n2\n1 1\n3\n",
        "expected": "1 1\n6\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：先输入 A 的行列数和元素，再输入 B 的行列数和元素。\n// 输出：先输出结果行列数，再逐行输出元素。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <cstdlib>\n#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n#define M 100                         \n#define N 100                         \n\ntypedef int datatype;\n\nstruct matrix {\n    datatype a[M][N];\n    int row;                          // 矩阵的行数\n    int col;                          // 矩阵的列数\n\n    matrix(int r = 0, int c = 0) : row(r), col(c) {\n        memset(a, 0, sizeof(a));      // 初始化行数和列数，所有元素初始化为0\n    }//memset是标准函数,格式为（地址，值，字节数）\n\n    matrix(datatype b[M][N], int r, int c) : row(r), col(c) {\n        for (int i = 0; i < r; i++)\n            for (int j = 0; j < c; j++)\n                a[i][j] = b[i][j];    // 用数组b初始化当前矩阵\n    }\n};\n// 两个矩阵相乘：mat1×mat2，相乘结果作为返回值\nmatrix mat_mul(matrix mat1, matrix mat2) {\n    if (mat1.col != mat2.row) {\n        cout << \"矩阵不能相乘!\" << endl;\n        return matrix();\n    }\n\n    matrix mat(mat1.row, mat2.col); \n\n    for (int i = 0; i < mat1.row; i++)\n        for (int j = 0; j < mat2.col; j++) {\n            mat.a[i][j] = 0;\n            for (int k = 0; k < mat1.col; k++)  \n                mat.a[i][j] += mat1.a[i][k] * mat2.a[k][j];\n        }\n\n    return mat;\n}\n// 将方阵下三角按行压缩；调用前须确保矩阵对称\nvector<int> convert(matrix mat) {\n    vector<int> ret;\n    if(mat.row!=mat.col) return ret;\n    for(int i=0;i<mat.row;i++)\n        for(int j=0;j<=i;j++)\n            ret.push_back(mat.a[i][j]);\n    return ret;\n}\n// 还原对称矩阵；非法压缩长度返回空矩阵\nmatrix convert(vector<int> ve) {\n    matrix mat;\n    int n=0;\n    while(n<min(M,N) && n*(n+1)/2<(int)ve.size()) ++n;\n    if(n*(n+1)/2!=(int)ve.size()) return mat;\n    int i=0;\n    for(int k=0;k<(int)ve.size();k++){\n        if(k>=(i+1)*(i+2)/2) ++i;\n        int j=k-i*(i+1)/2;\n        mat.a[i][j]=mat.a[j][i]=ve[k];\n    }\n    mat.row=mat.col=n;\n    return mat;\n}\nstruct smMode {\n    int r, c;                         // 非零元素所在的行号和列号\n    datatype data;                    // 非零元素的值\n\n    bool operator<(smMode sm) const { // 重载<,若行号相同就比较列号，让次序前的数保存时依旧在前面\n        if (r == sm.r)\n            return c < sm.c;\n\n        return r < sm.r;\n    }\n};\n\nstruct sMatrix {\n    smMode nz[N];                     // 存放所有非零元素\n    int n, row, col;                  // n：非零元素数量\n\n    sMatrix() : n(0), row(0), col(0) {\n    }\n};\n// 将稀疏矩阵mat压缩存储，结果作为返回值\nsMatrix sm_convert(matrix mat) {\n    sMatrix sm;\n\n    sm.row = mat.row;\n    sm.col = mat.col;                 // 设置行数和列数\n\n    for (int i = 0; i < mat.row; i++)\n        for (int j = 0; j < mat.col; j++) {\n            if (mat.a[i][j] != 0) {   // 非零元素加入结果\n                if(sm.n>=N) std::abort();\n                int &idx = sm.n;//用idx引用表示sm中非零元素排序的下标\n                sm.nz[idx++] = {i,j,mat.a[i][j]};\n            }\n        }\n\n    return sm;\n}\n// 将压缩存储的稀疏矩阵sm还原为原矩阵\nmatrix sm_convert(sMatrix sm) {\n    matrix mat(sm.row,sm.col);\n\n    for (int i = 0; i < sm.n; i++) {\n        smMode tmp = sm.nz[i];        // 第i个非零元素\n        mat.a[tmp.r][tmp.c] = tmp.data;\n    }\n\n    return mat;\n}\n//求压缩稀疏矩阵的转置\nsMatrix sm_tr(sMatrix sm){\n    sMatrix ret;\n    ret.row=sm.col,ret.col=sm.row,ret.n=sm.n; //定义矩阵大小\n    for(int i=0;i<sm.n;i++){\n        smMode temp = sm.nz[i];\n        ret.nz[i]={temp.c,temp.r,temp.data}; //列在前（因为列数据是行）\n    }\n    sort(ret.nz,ret.nz+ret.n);//sort(开始位置，结束位置，排序规则(默认升序))\n    return ret;\n}\nvoid pm(matrix m){cout<<m.row<<' '<<m.col<<'\\n';for(int i=0;i<m.row;i++){for(int j=0;j<m.col;j++)cout<<m.a[i][j]<<' ';cout<<'\\n';}}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint r,c;cin>>r>>c;matrix a(r,c);for(int i=0;i<r;i++)for(int j=0;j<c;j++)cin>>a.a[i][j];int r2,c2;cin>>r2>>c2;matrix z(r2,c2);for(int i=0;i<r2;i++)for(int j=0;j<c2;j++)cin>>z.a[i][j];\npm(mat_mul(a,z));\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。 浏览器工具链不支持C++异常；完整参考仅将超界异常改为终止保护，题目约束内不会触发。笔记原码与最小修正版均保持不变。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "1 1\n2\n1 1\n3\n",
        "expected": "1 1\n6\n"
      },
      {
        "name": "测试 2",
        "stdin": "2 2\n1 -1\n2 0\n2 1\n2\n3\n",
        "expected": "2 1\n-1\n4\n"
      },
      {
        "name": "测试 3",
        "stdin": "1 2\n0 0\n2 2\n1 2\n3 4\n",
        "expected": "1 2\n0 0\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-symmetric-compress",
    "title": "对称矩阵：下三角压缩",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "tha5paui8hzzxa5c",
        "blocks": [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        "functions": [
          "convert(matrix)"
        ]
      }
    ],
    "description": "把对称方阵的下三角（含主对角线）按行存成一维序列。",
    "input": "r c（r=c）；随后矩阵元素。允许 r=c=0。",
    "output": "输出压缩序列；空矩阵输出 EMPTY。",
    "constraints": [
      "0≤r=c≤8",
      "保证矩阵对称；元素 [-100,100]"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "1 1\n2\n",
        "expected": "2\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：r c（r=c）；随后矩阵元素。允许 r=c=0。\n// 输出：输出压缩序列；空矩阵输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <cstdlib>\n#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n#define M 100                         \n#define N 100                         \n\ntypedef int datatype;\n\nstruct matrix {\n    datatype a[M][N];\n    int row;                          // 矩阵的行数\n    int col;                          // 矩阵的列数\n\n    matrix(int r = 0, int c = 0) : row(r), col(c) {\n        memset(a, 0, sizeof(a));      // 初始化行数和列数，所有元素初始化为0\n    }//memset是标准函数,格式为（地址，值，字节数）\n\n    matrix(datatype b[M][N], int r, int c) : row(r), col(c) {\n        for (int i = 0; i < r; i++)\n            for (int j = 0; j < c; j++)\n                a[i][j] = b[i][j];    // 用数组b初始化当前矩阵\n    }\n};\n// 两个矩阵相乘：mat1×mat2，相乘结果作为返回值\nmatrix mat_mul(matrix mat1, matrix mat2) {\n    if (mat1.col != mat2.row) {\n        cout << \"矩阵不能相乘!\" << endl;\n        return matrix();\n    }\n\n    matrix mat(mat1.row, mat2.col); \n\n    for (int i = 0; i < mat1.row; i++)\n        for (int j = 0; j < mat2.col; j++) {\n            mat.a[i][j] = 0;\n            for (int k = 0; k < mat1.col; k++)  \n                mat.a[i][j] += mat1.a[i][k] * mat2.a[k][j];\n        }\n\n    return mat;\n}\n// 将方阵下三角按行压缩；调用前须确保矩阵对称\nvector<int> convert(matrix mat) {\n    vector<int> ret;\n    if(mat.row!=mat.col) return ret;\n    for(int i=0;i<mat.row;i++)\n        for(int j=0;j<=i;j++)\n            ret.push_back(mat.a[i][j]);\n    return ret;\n}\n// 还原对称矩阵；非法压缩长度返回空矩阵\nmatrix convert(vector<int> ve) {\n    matrix mat;\n    int n=0;\n    while(n<min(M,N) && n*(n+1)/2<(int)ve.size()) ++n;\n    if(n*(n+1)/2!=(int)ve.size()) return mat;\n    int i=0;\n    for(int k=0;k<(int)ve.size();k++){\n        if(k>=(i+1)*(i+2)/2) ++i;\n        int j=k-i*(i+1)/2;\n        mat.a[i][j]=mat.a[j][i]=ve[k];\n    }\n    mat.row=mat.col=n;\n    return mat;\n}\nstruct smMode {\n    int r, c;                         // 非零元素所在的行号和列号\n    datatype data;                    // 非零元素的值\n\n    bool operator<(smMode sm) const { // 重载<,若行号相同就比较列号，让次序前的数保存时依旧在前面\n        if (r == sm.r)\n            return c < sm.c;\n\n        return r < sm.r;\n    }\n};\n\nstruct sMatrix {\n    smMode nz[N];                     // 存放所有非零元素\n    int n, row, col;                  // n：非零元素数量\n\n    sMatrix() : n(0), row(0), col(0) {\n    }\n};\n// 将稀疏矩阵mat压缩存储，结果作为返回值\nsMatrix sm_convert(matrix mat) {\n    sMatrix sm;\n\n    sm.row = mat.row;\n    sm.col = mat.col;                 // 设置行数和列数\n\n    for (int i = 0; i < mat.row; i++)\n        for (int j = 0; j < mat.col; j++) {\n            if (mat.a[i][j] != 0) {   // 非零元素加入结果\n                if(sm.n>=N) std::abort();\n                int &idx = sm.n;//用idx引用表示sm中非零元素排序的下标\n                sm.nz[idx++] = {i,j,mat.a[i][j]};\n            }\n        }\n\n    return sm;\n}\n// 将压缩存储的稀疏矩阵sm还原为原矩阵\nmatrix sm_convert(sMatrix sm) {\n    matrix mat(sm.row,sm.col);\n\n    for (int i = 0; i < sm.n; i++) {\n        smMode tmp = sm.nz[i];        // 第i个非零元素\n        mat.a[tmp.r][tmp.c] = tmp.data;\n    }\n\n    return mat;\n}\n//求压缩稀疏矩阵的转置\nsMatrix sm_tr(sMatrix sm){\n    sMatrix ret;\n    ret.row=sm.col,ret.col=sm.row,ret.n=sm.n; //定义矩阵大小\n    for(int i=0;i<sm.n;i++){\n        smMode temp = sm.nz[i];\n        ret.nz[i]={temp.c,temp.r,temp.data}; //列在前（因为列数据是行）\n    }\n    sort(ret.nz,ret.nz+ret.n);//sort(开始位置，结束位置，排序规则(默认升序))\n    return ret;\n}\nvoid pm(matrix m){cout<<m.row<<' '<<m.col<<'\\n';for(int i=0;i<m.row;i++){for(int j=0;j<m.col;j++)cout<<m.a[i][j]<<' ';cout<<'\\n';}}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint r,c;cin>>r>>c;matrix a(r,c);for(int i=0;i<r;i++)for(int j=0;j<c;j++)cin>>a.a[i][j];\nprintv(convert(a));\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。 浏览器工具链不支持C++异常；完整参考仅将超界异常改为终止保护，题目约束内不会触发。笔记原码与最小修正版均保持不变。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "1 1\n2\n",
        "expected": "2\n"
      },
      {
        "name": "测试 2",
        "stdin": "2 2\n1 -2\n-2 3\n",
        "expected": "1 -2 3\n"
      },
      {
        "name": "测试 3",
        "stdin": "0 0\n",
        "expected": "EMPTY\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-symmetric-restore",
    "title": "对称矩阵：压缩序列还原",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "tha5paui8hzzxa5c",
        "blocks": [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        "functions": [
          "convert(vector<int>)"
        ]
      }
    ],
    "description": "把按行存储的下三角序列恢复成对称矩阵。长度必须是三角数；非法长度返回空矩阵。",
    "input": "n；n 个压缩值。",
    "output": "先输出行列数，再输出还原矩阵；非法长度或空序列输出 0 0。",
    "constraints": [
      "0≤n≤36",
      "元素 [-100,100]"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "0 0\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个压缩值。\n// 输出：先输出行列数，再输出还原矩阵；非法长度或空序列输出 0 0。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <cstdlib>\n#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n#define M 100                         \n#define N 100                         \n\ntypedef int datatype;\n\nstruct matrix {\n    datatype a[M][N];\n    int row;                          // 矩阵的行数\n    int col;                          // 矩阵的列数\n\n    matrix(int r = 0, int c = 0) : row(r), col(c) {\n        memset(a, 0, sizeof(a));      // 初始化行数和列数，所有元素初始化为0\n    }//memset是标准函数,格式为（地址，值，字节数）\n\n    matrix(datatype b[M][N], int r, int c) : row(r), col(c) {\n        for (int i = 0; i < r; i++)\n            for (int j = 0; j < c; j++)\n                a[i][j] = b[i][j];    // 用数组b初始化当前矩阵\n    }\n};\n// 两个矩阵相乘：mat1×mat2，相乘结果作为返回值\nmatrix mat_mul(matrix mat1, matrix mat2) {\n    if (mat1.col != mat2.row) {\n        cout << \"矩阵不能相乘!\" << endl;\n        return matrix();\n    }\n\n    matrix mat(mat1.row, mat2.col); \n\n    for (int i = 0; i < mat1.row; i++)\n        for (int j = 0; j < mat2.col; j++) {\n            mat.a[i][j] = 0;\n            for (int k = 0; k < mat1.col; k++)  \n                mat.a[i][j] += mat1.a[i][k] * mat2.a[k][j];\n        }\n\n    return mat;\n}\n// 将方阵下三角按行压缩；调用前须确保矩阵对称\nvector<int> convert(matrix mat) {\n    vector<int> ret;\n    if(mat.row!=mat.col) return ret;\n    for(int i=0;i<mat.row;i++)\n        for(int j=0;j<=i;j++)\n            ret.push_back(mat.a[i][j]);\n    return ret;\n}\n// 还原对称矩阵；非法压缩长度返回空矩阵\nmatrix convert(vector<int> ve) {\n    matrix mat;\n    int n=0;\n    while(n<min(M,N) && n*(n+1)/2<(int)ve.size()) ++n;\n    if(n*(n+1)/2!=(int)ve.size()) return mat;\n    int i=0;\n    for(int k=0;k<(int)ve.size();k++){\n        if(k>=(i+1)*(i+2)/2) ++i;\n        int j=k-i*(i+1)/2;\n        mat.a[i][j]=mat.a[j][i]=ve[k];\n    }\n    mat.row=mat.col=n;\n    return mat;\n}\nstruct smMode {\n    int r, c;                         // 非零元素所在的行号和列号\n    datatype data;                    // 非零元素的值\n\n    bool operator<(smMode sm) const { // 重载<,若行号相同就比较列号，让次序前的数保存时依旧在前面\n        if (r == sm.r)\n            return c < sm.c;\n\n        return r < sm.r;\n    }\n};\n\nstruct sMatrix {\n    smMode nz[N];                     // 存放所有非零元素\n    int n, row, col;                  // n：非零元素数量\n\n    sMatrix() : n(0), row(0), col(0) {\n    }\n};\n// 将稀疏矩阵mat压缩存储，结果作为返回值\nsMatrix sm_convert(matrix mat) {\n    sMatrix sm;\n\n    sm.row = mat.row;\n    sm.col = mat.col;                 // 设置行数和列数\n\n    for (int i = 0; i < mat.row; i++)\n        for (int j = 0; j < mat.col; j++) {\n            if (mat.a[i][j] != 0) {   // 非零元素加入结果\n                if(sm.n>=N) std::abort();\n                int &idx = sm.n;//用idx引用表示sm中非零元素排序的下标\n                sm.nz[idx++] = {i,j,mat.a[i][j]};\n            }\n        }\n\n    return sm;\n}\n// 将压缩存储的稀疏矩阵sm还原为原矩阵\nmatrix sm_convert(sMatrix sm) {\n    matrix mat(sm.row,sm.col);\n\n    for (int i = 0; i < sm.n; i++) {\n        smMode tmp = sm.nz[i];        // 第i个非零元素\n        mat.a[tmp.r][tmp.c] = tmp.data;\n    }\n\n    return mat;\n}\n//求压缩稀疏矩阵的转置\nsMatrix sm_tr(sMatrix sm){\n    sMatrix ret;\n    ret.row=sm.col,ret.col=sm.row,ret.n=sm.n; //定义矩阵大小\n    for(int i=0;i<sm.n;i++){\n        smMode temp = sm.nz[i];\n        ret.nz[i]={temp.c,temp.r,temp.data}; //列在前（因为列数据是行）\n    }\n    sort(ret.nz,ret.nz+ret.n);//sort(开始位置，结束位置，排序规则(默认升序))\n    return ret;\n}\nvoid pm(matrix m){cout<<m.row<<' '<<m.col<<'\\n';for(int i=0;i<m.row;i++){for(int j=0;j<m.col;j++)cout<<m.a[i][j]<<' ';cout<<'\\n';}}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;\npm(convert(a));\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。 浏览器工具链不支持C++异常；完整参考仅将超界异常改为终止保护，题目约束内不会触发。笔记原码与最小修正版均保持不变。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "0 0\n"
      },
      {
        "name": "测试 2",
        "stdin": "3\n1 -2 3\n",
        "expected": "2 2\n1 -2\n-2 3\n"
      },
      {
        "name": "测试 3",
        "stdin": "2\n1 2\n",
        "expected": "0 0\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-sparse-compress",
    "title": "稀疏矩阵：三元组压缩",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "tha5paui8hzzxa5c",
        "blocks": [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        "functions": [
          "sm_convert(matrix)"
        ]
      }
    ],
    "description": "按先行后列的次序记录全部非零元，每个三元组为行号、列号和值。",
    "input": "矩阵行列数；随后元素。",
    "output": "第一行非零元数量，随后每行 r c value，下标从 0 开始。",
    "constraints": [
      "1≤行列数≤8",
      "非零元≤64，元素 [-100,100]"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "1 1\n0\n",
        "expected": "0\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：矩阵行列数；随后元素。\n// 输出：第一行非零元数量，随后每行 r c value，下标从 0 开始。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <cstdlib>\n#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n#define M 100                         \n#define N 100                         \n\ntypedef int datatype;\n\nstruct matrix {\n    datatype a[M][N];\n    int row;                          // 矩阵的行数\n    int col;                          // 矩阵的列数\n\n    matrix(int r = 0, int c = 0) : row(r), col(c) {\n        memset(a, 0, sizeof(a));      // 初始化行数和列数，所有元素初始化为0\n    }//memset是标准函数,格式为（地址，值，字节数）\n\n    matrix(datatype b[M][N], int r, int c) : row(r), col(c) {\n        for (int i = 0; i < r; i++)\n            for (int j = 0; j < c; j++)\n                a[i][j] = b[i][j];    // 用数组b初始化当前矩阵\n    }\n};\n// 两个矩阵相乘：mat1×mat2，相乘结果作为返回值\nmatrix mat_mul(matrix mat1, matrix mat2) {\n    if (mat1.col != mat2.row) {\n        cout << \"矩阵不能相乘!\" << endl;\n        return matrix();\n    }\n\n    matrix mat(mat1.row, mat2.col); \n\n    for (int i = 0; i < mat1.row; i++)\n        for (int j = 0; j < mat2.col; j++) {\n            mat.a[i][j] = 0;\n            for (int k = 0; k < mat1.col; k++)  \n                mat.a[i][j] += mat1.a[i][k] * mat2.a[k][j];\n        }\n\n    return mat;\n}\n// 将方阵下三角按行压缩；调用前须确保矩阵对称\nvector<int> convert(matrix mat) {\n    vector<int> ret;\n    if(mat.row!=mat.col) return ret;\n    for(int i=0;i<mat.row;i++)\n        for(int j=0;j<=i;j++)\n            ret.push_back(mat.a[i][j]);\n    return ret;\n}\n// 还原对称矩阵；非法压缩长度返回空矩阵\nmatrix convert(vector<int> ve) {\n    matrix mat;\n    int n=0;\n    while(n<min(M,N) && n*(n+1)/2<(int)ve.size()) ++n;\n    if(n*(n+1)/2!=(int)ve.size()) return mat;\n    int i=0;\n    for(int k=0;k<(int)ve.size();k++){\n        if(k>=(i+1)*(i+2)/2) ++i;\n        int j=k-i*(i+1)/2;\n        mat.a[i][j]=mat.a[j][i]=ve[k];\n    }\n    mat.row=mat.col=n;\n    return mat;\n}\nstruct smMode {\n    int r, c;                         // 非零元素所在的行号和列号\n    datatype data;                    // 非零元素的值\n\n    bool operator<(smMode sm) const { // 重载<,若行号相同就比较列号，让次序前的数保存时依旧在前面\n        if (r == sm.r)\n            return c < sm.c;\n\n        return r < sm.r;\n    }\n};\n\nstruct sMatrix {\n    smMode nz[N];                     // 存放所有非零元素\n    int n, row, col;                  // n：非零元素数量\n\n    sMatrix() : n(0), row(0), col(0) {\n    }\n};\n// 将稀疏矩阵mat压缩存储，结果作为返回值\nsMatrix sm_convert(matrix mat) {\n    sMatrix sm;\n\n    sm.row = mat.row;\n    sm.col = mat.col;                 // 设置行数和列数\n\n    for (int i = 0; i < mat.row; i++)\n        for (int j = 0; j < mat.col; j++) {\n            if (mat.a[i][j] != 0) {   // 非零元素加入结果\n                if(sm.n>=N) std::abort();\n                int &idx = sm.n;//用idx引用表示sm中非零元素排序的下标\n                sm.nz[idx++] = {i,j,mat.a[i][j]};\n            }\n        }\n\n    return sm;\n}\n// 将压缩存储的稀疏矩阵sm还原为原矩阵\nmatrix sm_convert(sMatrix sm) {\n    matrix mat(sm.row,sm.col);\n\n    for (int i = 0; i < sm.n; i++) {\n        smMode tmp = sm.nz[i];        // 第i个非零元素\n        mat.a[tmp.r][tmp.c] = tmp.data;\n    }\n\n    return mat;\n}\n//求压缩稀疏矩阵的转置\nsMatrix sm_tr(sMatrix sm){\n    sMatrix ret;\n    ret.row=sm.col,ret.col=sm.row,ret.n=sm.n; //定义矩阵大小\n    for(int i=0;i<sm.n;i++){\n        smMode temp = sm.nz[i];\n        ret.nz[i]={temp.c,temp.r,temp.data}; //列在前（因为列数据是行）\n    }\n    sort(ret.nz,ret.nz+ret.n);//sort(开始位置，结束位置，排序规则(默认升序))\n    return ret;\n}\nvoid pm(matrix m){cout<<m.row<<' '<<m.col<<'\\n';for(int i=0;i<m.row;i++){for(int j=0;j<m.col;j++)cout<<m.a[i][j]<<' ';cout<<'\\n';}}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint r,c;cin>>r>>c;matrix a(r,c);for(int i=0;i<r;i++)for(int j=0;j<c;j++)cin>>a.a[i][j];\nauto z=sm_convert(a);cout<<z.n<<\"\\n\";for(int i=0;i<z.n;i++)cout<<z.nz[i].r<<\" \"<<z.nz[i].c<<\" \"<<z.nz[i].data<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。 浏览器工具链不支持C++异常；完整参考仅将超界异常改为终止保护，题目约束内不会触发。笔记原码与最小修正版均保持不变。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "1 1\n0\n",
        "expected": "0\n"
      },
      {
        "name": "测试 2",
        "stdin": "2 2\n1 0\n0 -2\n",
        "expected": "2\n0 0 1\n1 1 -2\n"
      },
      {
        "name": "测试 3",
        "stdin": "2 3\n0 3 0\n4 0 5\n",
        "expected": "3\n0 1 3\n1 0 4\n1 2 5\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-sparse-restore",
    "title": "稀疏矩阵：三元组还原",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "tha5paui8hzzxa5c",
        "blocks": [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        "functions": [
          "sm_convert(sMatrix)"
        ]
      }
    ],
    "description": "根据三元组恢复所有元素，未出现的位置为 0。",
    "input": "r c k；随后 k 行：0-based 行号 列号 非零值。位置互异。",
    "output": "先输出结果行列数，再逐行输出元素。",
    "constraints": [
      "1≤r,c≤8；0≤k≤r*c",
      "坐标有效、互不重复；值为 [-100,100] 中非零数。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "1 1 0\n",
        "expected": "1 1\n0\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：r c k；随后 k 行：0-based 行号 列号 非零值。位置互异。\n// 输出：先输出结果行列数，再逐行输出元素。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <cstdlib>\n#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n#define M 100                         \n#define N 100                         \n\ntypedef int datatype;\n\nstruct matrix {\n    datatype a[M][N];\n    int row;                          // 矩阵的行数\n    int col;                          // 矩阵的列数\n\n    matrix(int r = 0, int c = 0) : row(r), col(c) {\n        memset(a, 0, sizeof(a));      // 初始化行数和列数，所有元素初始化为0\n    }//memset是标准函数,格式为（地址，值，字节数）\n\n    matrix(datatype b[M][N], int r, int c) : row(r), col(c) {\n        for (int i = 0; i < r; i++)\n            for (int j = 0; j < c; j++)\n                a[i][j] = b[i][j];    // 用数组b初始化当前矩阵\n    }\n};\n// 两个矩阵相乘：mat1×mat2，相乘结果作为返回值\nmatrix mat_mul(matrix mat1, matrix mat2) {\n    if (mat1.col != mat2.row) {\n        cout << \"矩阵不能相乘!\" << endl;\n        return matrix();\n    }\n\n    matrix mat(mat1.row, mat2.col); \n\n    for (int i = 0; i < mat1.row; i++)\n        for (int j = 0; j < mat2.col; j++) {\n            mat.a[i][j] = 0;\n            for (int k = 0; k < mat1.col; k++)  \n                mat.a[i][j] += mat1.a[i][k] * mat2.a[k][j];\n        }\n\n    return mat;\n}\n// 将方阵下三角按行压缩；调用前须确保矩阵对称\nvector<int> convert(matrix mat) {\n    vector<int> ret;\n    if(mat.row!=mat.col) return ret;\n    for(int i=0;i<mat.row;i++)\n        for(int j=0;j<=i;j++)\n            ret.push_back(mat.a[i][j]);\n    return ret;\n}\n// 还原对称矩阵；非法压缩长度返回空矩阵\nmatrix convert(vector<int> ve) {\n    matrix mat;\n    int n=0;\n    while(n<min(M,N) && n*(n+1)/2<(int)ve.size()) ++n;\n    if(n*(n+1)/2!=(int)ve.size()) return mat;\n    int i=0;\n    for(int k=0;k<(int)ve.size();k++){\n        if(k>=(i+1)*(i+2)/2) ++i;\n        int j=k-i*(i+1)/2;\n        mat.a[i][j]=mat.a[j][i]=ve[k];\n    }\n    mat.row=mat.col=n;\n    return mat;\n}\nstruct smMode {\n    int r, c;                         // 非零元素所在的行号和列号\n    datatype data;                    // 非零元素的值\n\n    bool operator<(smMode sm) const { // 重载<,若行号相同就比较列号，让次序前的数保存时依旧在前面\n        if (r == sm.r)\n            return c < sm.c;\n\n        return r < sm.r;\n    }\n};\n\nstruct sMatrix {\n    smMode nz[N];                     // 存放所有非零元素\n    int n, row, col;                  // n：非零元素数量\n\n    sMatrix() : n(0), row(0), col(0) {\n    }\n};\n// 将稀疏矩阵mat压缩存储，结果作为返回值\nsMatrix sm_convert(matrix mat) {\n    sMatrix sm;\n\n    sm.row = mat.row;\n    sm.col = mat.col;                 // 设置行数和列数\n\n    for (int i = 0; i < mat.row; i++)\n        for (int j = 0; j < mat.col; j++) {\n            if (mat.a[i][j] != 0) {   // 非零元素加入结果\n                if(sm.n>=N) std::abort();\n                int &idx = sm.n;//用idx引用表示sm中非零元素排序的下标\n                sm.nz[idx++] = {i,j,mat.a[i][j]};\n            }\n        }\n\n    return sm;\n}\n// 将压缩存储的稀疏矩阵sm还原为原矩阵\nmatrix sm_convert(sMatrix sm) {\n    matrix mat(sm.row,sm.col);\n\n    for (int i = 0; i < sm.n; i++) {\n        smMode tmp = sm.nz[i];        // 第i个非零元素\n        mat.a[tmp.r][tmp.c] = tmp.data;\n    }\n\n    return mat;\n}\n//求压缩稀疏矩阵的转置\nsMatrix sm_tr(sMatrix sm){\n    sMatrix ret;\n    ret.row=sm.col,ret.col=sm.row,ret.n=sm.n; //定义矩阵大小\n    for(int i=0;i<sm.n;i++){\n        smMode temp = sm.nz[i];\n        ret.nz[i]={temp.c,temp.r,temp.data}; //列在前（因为列数据是行）\n    }\n    sort(ret.nz,ret.nz+ret.n);//sort(开始位置，结束位置，排序规则(默认升序))\n    return ret;\n}\nvoid pm(matrix m){cout<<m.row<<' '<<m.col<<'\\n';for(int i=0;i<m.row;i++){for(int j=0;j<m.col;j++)cout<<m.a[i][j]<<' ';cout<<'\\n';}}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint r,c,k;cin>>r>>c>>k;sMatrix z;z.row=r;z.col=c;z.n=k;for(int i=0;i<k;i++)cin>>z.nz[i].r>>z.nz[i].c>>z.nz[i].data;\npm(sm_convert(z));\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。 浏览器工具链不支持C++异常；完整参考仅将超界异常改为终止保护，题目约束内不会触发。笔记原码与最小修正版均保持不变。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "1 1 0\n",
        "expected": "1 1\n0\n"
      },
      {
        "name": "测试 2",
        "stdin": "2 2 2\n0 0 1\n1 1 -2\n",
        "expected": "2 2\n1 0\n0 -2\n"
      },
      {
        "name": "测试 3",
        "stdin": "2 3 3\n0 1 3\n1 0 4\n1 2 5\n",
        "expected": "2 3\n0 3 0\n4 0 5\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-sparse-transpose",
    "title": "稀疏矩阵：三元组转置",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "tha5paui8hzzxa5c",
        "blocks": [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        "functions": [
          "sm_tr"
        ]
      }
    ],
    "description": "根据三元组交换行列并按行列排序，再还原转置矩阵。",
    "input": "r c k；随后 k 行：0-based 行号 列号 非零值。位置互异。",
    "output": "先输出结果行列数，再逐行输出元素。",
    "constraints": [
      "1≤r,c≤8；0≤k≤r*c",
      "坐标有效、互不重复；值为 [-100,100] 中非零数。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "1 1 0\n",
        "expected": "1 1\n0\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：r c k；随后 k 行：0-based 行号 列号 非零值。位置互异。\n// 输出：先输出结果行列数，再逐行输出元素。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <cstdlib>\n#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n#define M 100                         \n#define N 100                         \n\ntypedef int datatype;\n\nstruct matrix {\n    datatype a[M][N];\n    int row;                          // 矩阵的行数\n    int col;                          // 矩阵的列数\n\n    matrix(int r = 0, int c = 0) : row(r), col(c) {\n        memset(a, 0, sizeof(a));      // 初始化行数和列数，所有元素初始化为0\n    }//memset是标准函数,格式为（地址，值，字节数）\n\n    matrix(datatype b[M][N], int r, int c) : row(r), col(c) {\n        for (int i = 0; i < r; i++)\n            for (int j = 0; j < c; j++)\n                a[i][j] = b[i][j];    // 用数组b初始化当前矩阵\n    }\n};\n// 两个矩阵相乘：mat1×mat2，相乘结果作为返回值\nmatrix mat_mul(matrix mat1, matrix mat2) {\n    if (mat1.col != mat2.row) {\n        cout << \"矩阵不能相乘!\" << endl;\n        return matrix();\n    }\n\n    matrix mat(mat1.row, mat2.col); \n\n    for (int i = 0; i < mat1.row; i++)\n        for (int j = 0; j < mat2.col; j++) {\n            mat.a[i][j] = 0;\n            for (int k = 0; k < mat1.col; k++)  \n                mat.a[i][j] += mat1.a[i][k] * mat2.a[k][j];\n        }\n\n    return mat;\n}\n// 将方阵下三角按行压缩；调用前须确保矩阵对称\nvector<int> convert(matrix mat) {\n    vector<int> ret;\n    if(mat.row!=mat.col) return ret;\n    for(int i=0;i<mat.row;i++)\n        for(int j=0;j<=i;j++)\n            ret.push_back(mat.a[i][j]);\n    return ret;\n}\n// 还原对称矩阵；非法压缩长度返回空矩阵\nmatrix convert(vector<int> ve) {\n    matrix mat;\n    int n=0;\n    while(n<min(M,N) && n*(n+1)/2<(int)ve.size()) ++n;\n    if(n*(n+1)/2!=(int)ve.size()) return mat;\n    int i=0;\n    for(int k=0;k<(int)ve.size();k++){\n        if(k>=(i+1)*(i+2)/2) ++i;\n        int j=k-i*(i+1)/2;\n        mat.a[i][j]=mat.a[j][i]=ve[k];\n    }\n    mat.row=mat.col=n;\n    return mat;\n}\nstruct smMode {\n    int r, c;                         // 非零元素所在的行号和列号\n    datatype data;                    // 非零元素的值\n\n    bool operator<(smMode sm) const { // 重载<,若行号相同就比较列号，让次序前的数保存时依旧在前面\n        if (r == sm.r)\n            return c < sm.c;\n\n        return r < sm.r;\n    }\n};\n\nstruct sMatrix {\n    smMode nz[N];                     // 存放所有非零元素\n    int n, row, col;                  // n：非零元素数量\n\n    sMatrix() : n(0), row(0), col(0) {\n    }\n};\n// 将稀疏矩阵mat压缩存储，结果作为返回值\nsMatrix sm_convert(matrix mat) {\n    sMatrix sm;\n\n    sm.row = mat.row;\n    sm.col = mat.col;                 // 设置行数和列数\n\n    for (int i = 0; i < mat.row; i++)\n        for (int j = 0; j < mat.col; j++) {\n            if (mat.a[i][j] != 0) {   // 非零元素加入结果\n                if(sm.n>=N) std::abort();\n                int &idx = sm.n;//用idx引用表示sm中非零元素排序的下标\n                sm.nz[idx++] = {i,j,mat.a[i][j]};\n            }\n        }\n\n    return sm;\n}\n// 将压缩存储的稀疏矩阵sm还原为原矩阵\nmatrix sm_convert(sMatrix sm) {\n    matrix mat(sm.row,sm.col);\n\n    for (int i = 0; i < sm.n; i++) {\n        smMode tmp = sm.nz[i];        // 第i个非零元素\n        mat.a[tmp.r][tmp.c] = tmp.data;\n    }\n\n    return mat;\n}\n//求压缩稀疏矩阵的转置\nsMatrix sm_tr(sMatrix sm){\n    sMatrix ret;\n    ret.row=sm.col,ret.col=sm.row,ret.n=sm.n; //定义矩阵大小\n    for(int i=0;i<sm.n;i++){\n        smMode temp = sm.nz[i];\n        ret.nz[i]={temp.c,temp.r,temp.data}; //列在前（因为列数据是行）\n    }\n    sort(ret.nz,ret.nz+ret.n);//sort(开始位置，结束位置，排序规则(默认升序))\n    return ret;\n}\nvoid pm(matrix m){cout<<m.row<<' '<<m.col<<'\\n';for(int i=0;i<m.row;i++){for(int j=0;j<m.col;j++)cout<<m.a[i][j]<<' ';cout<<'\\n';}}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint r,c,k;cin>>r>>c>>k;sMatrix z;z.row=r;z.col=c;z.n=k;for(int i=0;i<k;i++)cin>>z.nz[i].r>>z.nz[i].c>>z.nz[i].data;\npm(sm_convert(sm_tr(z)));\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。 浏览器工具链不支持C++异常；完整参考仅将超界异常改为终止保护，题目约束内不会触发。笔记原码与最小修正版均保持不变。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "1 1 0\n",
        "expected": "1 1\n0\n"
      },
      {
        "name": "测试 2",
        "stdin": "2 2 2\n0 0 1\n1 1 -2\n",
        "expected": "2 2\n1 0\n0 -2\n"
      },
      {
        "name": "测试 3",
        "stdin": "2 3 3\n0 1 3\n1 0 4\n1 2 5\n",
        "expected": "3 2\n0 4\n3 0\n0 5\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-chainstr-assign",
    "title": "链串：分块创建",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xwlnuwghb5uqp1sc",
        "blocks": [
          0,
          1,
          2,
          3
        ],
        "functions": [
          "cs_assign"
        ]
      }
    ],
    "description": "每个结点最多存 5 个字符，把字符串建成无头双向循环链串，按原顺序输出。",
    "input": "一行原字符串，允许空行。",
    "output": "删除题先输出成功标志 1/0 再输出结果；比较题输出 -1/0/1；其余输出拼接字符串，空串 EMPTY。",
    "constraints": [
      "字符串由英文字母或数字构成，长度 0..30",
      "插入新块长度 1..5；删除下标范围 -1..35"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：一行原字符串，允许空行。\n// 输出：删除题先输出成功标志 1/0 再输出结果；比较题输出 -1/0/1；其余输出拼接字符串，空串 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n#define M 5\ntypedef struct csNode{\nchar data[M+1]; //串里面定义为字符类型，元素数设置为M+1保证最后一个元素始终为\\0\ncsNode * pre;\ncsNode * next;\ncsNode():pre(NULL),next(NULL){\n    for(int i=0;i<=M;i++) data[i]='\\0';//data元素初始化为\\0\n}\n} * chainString;\n//在结点cs后面插入结点cs1\nvoid cs_insert_post(chainString &cs,chainString cs1){\n    if(cs1==NULL) return;\n    if(cs==NULL){\t\t//如果cs为空则cs1覆盖cs\n    cs=cs1;\n    cs->next=cs,cs->pre=cs; //next和pre都指向自己满足循环\n    return;\n}\n    chainString nxt=cs->next;\n    cs1->next=nxt,nxt->pre=cs1;\n    cs->next=cs1,cs1->pre=cs;\n    return;\n}\n//将字符串str放入链串，结果作为返回值\nchainString cs_assign(const char *str){\n        if(str==NULL || *str=='\\0') return NULL;\n        chainString ret=NULL,temp =new csNode;\n        if(temp==NULL) return NULL;\n        int sz=strlen(str),i,j,k=(sz-1)/M*M; //k表示能够装满完整链串结点的字符总数\n        for(i=0;i<min(sz,M);i++){ //构建第一个结点\n            temp->data[i]=str[i]; \n        }\n        cs_insert_post(ret,temp); //把temp插到ret\n    for(j=k;j>=M;j-=M){   //从后往前构建结点并插入第一个结点后面\n        temp=new csNode; \n        for(i=j;i<min(j+M,sz);i++){\n            temp->data[i-j]=str[i];\n        }\n        cs_insert_post(ret,temp);\n    }\n    return ret;\n    }\n\n//遍历链串cs，输出cs所表示的字符串\nvoid cs_traverse(chainString cs){\n    if(cs==NULL) return;\n    chainString cs1=cs;     //定义1个移动指针，从头指针开始\n    do{\t\t\t\t\t\t// do...while，它不是先判断条件，而是：先执行一次循环体，再判断条件。\n        cout<<cs1->data;\n        cs1=cs1->next;\n    }while(cs1!=cs); //因为是循环链表，当cs1重新回到头指针时，不在循环\n    cout<<endl;\n}\n//删除循环链串 cs 中下标为 idx 的字符（从 0 开始）\nbool cs_delete(chainString &cs,int idx){\n    if(cs==NULL || idx<0) return false;\n    int i=0,j,len;\n    chainString cs1=cs;\n    do{\n        len=strlen(cs1->data);\n        if(i+len<=idx){\n            i+=len;\n            cs1=cs1->next;\n        }else{\n            for(j=idx-i;j<len;j++)\n                cs1->data[j]=cs1->data[j+1]; //包括结尾的 '\\0'\n            if(len==1){\n                if(cs1->next==cs1){\n                    delete cs1;\n                    cs=NULL;\n                }else{\n                    chainString pre=cs1->pre,nxt=cs1->next;\n                    pre->next=nxt;\n                    nxt->pre=pre;\n                    if(cs1==cs) cs=nxt;\n                    delete cs1;\n                }\n            }\n            return true;\n        }\n    }while(cs1!=cs);\n    return false;\n}\nint cs_compare(chainString cs1,chainString cs2){\n    int i=0,j=0;\n    chainString h1=cs1,h2=cs2;\n    while(true){\n        while(cs1!=NULL && cs1->data[i]=='\\0'){\n            cs1=cs1->next;\n            i=0;\n            if(cs1==h1) cs1=NULL;\n        }\n        while(cs2!=NULL && cs2->data[j]=='\\0'){\n            cs2=cs2->next;\n            j=0;\n            if(cs2==h2) cs2=NULL;\n        }\n        if(cs1==NULL && cs2==NULL) return 0;\n        if(cs1==NULL) return -1;\n        if(cs2==NULL) return 1;\n        unsigned char a=cs1->data[i],b=cs2->data[j];\n        if(a>b) return 1;\n        if(a<b) return -1;\n        ++i;++j;\n    }\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring text;getline(cin,text);\nchainString cs=cs_assign(text.c_str());if(!cs)cout<<\"EMPTY\\n\";else cs_traverse(cs);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "abcde\n",
        "expected": "abcde\n"
      },
      {
        "name": "测试 3",
        "stdin": "abcdefghijk\n",
        "expected": "abcdefghijk\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-chainstr-traverse",
    "title": "链串：绕环遍历",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xwlnuwghb5uqp1sc",
        "blocks": [
          0,
          1,
          2,
          3
        ],
        "functions": [
          "cs_traverse"
        ]
      }
    ],
    "description": "从链串首结点开始输出各块有效字符，绕回首结点后停止。",
    "input": "一行原字符串，允许空行。",
    "output": "删除题先输出成功标志 1/0 再输出结果；比较题输出 -1/0/1；其余输出拼接字符串，空串 EMPTY。",
    "constraints": [
      "字符串由英文字母或数字构成，长度 0..30",
      "插入新块长度 1..5；删除下标范围 -1..35"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：一行原字符串，允许空行。\n// 输出：删除题先输出成功标志 1/0 再输出结果；比较题输出 -1/0/1；其余输出拼接字符串，空串 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n#define M 5\ntypedef struct csNode{\nchar data[M+1]; //串里面定义为字符类型，元素数设置为M+1保证最后一个元素始终为\\0\ncsNode * pre;\ncsNode * next;\ncsNode():pre(NULL),next(NULL){\n    for(int i=0;i<=M;i++) data[i]='\\0';//data元素初始化为\\0\n}\n} * chainString;\n//在结点cs后面插入结点cs1\nvoid cs_insert_post(chainString &cs,chainString cs1){\n    if(cs1==NULL) return;\n    if(cs==NULL){\t\t//如果cs为空则cs1覆盖cs\n    cs=cs1;\n    cs->next=cs,cs->pre=cs; //next和pre都指向自己满足循环\n    return;\n}\n    chainString nxt=cs->next;\n    cs1->next=nxt,nxt->pre=cs1;\n    cs->next=cs1,cs1->pre=cs;\n    return;\n}\n//将字符串str放入链串，结果作为返回值\nchainString cs_assign(const char *str){\n        if(str==NULL || *str=='\\0') return NULL;\n        chainString ret=NULL,temp =new csNode;\n        if(temp==NULL) return NULL;\n        int sz=strlen(str),i,j,k=(sz-1)/M*M; //k表示能够装满完整链串结点的字符总数\n        for(i=0;i<min(sz,M);i++){ //构建第一个结点\n            temp->data[i]=str[i]; \n        }\n        cs_insert_post(ret,temp); //把temp插到ret\n    for(j=k;j>=M;j-=M){   //从后往前构建结点并插入第一个结点后面\n        temp=new csNode; \n        for(i=j;i<min(j+M,sz);i++){\n            temp->data[i-j]=str[i];\n        }\n        cs_insert_post(ret,temp);\n    }\n    return ret;\n    }\n\n//遍历链串cs，输出cs所表示的字符串\nvoid cs_traverse(chainString cs){\n    if(cs==NULL) return;\n    chainString cs1=cs;     //定义1个移动指针，从头指针开始\n    do{\t\t\t\t\t\t// do...while，它不是先判断条件，而是：先执行一次循环体，再判断条件。\n        cout<<cs1->data;\n        cs1=cs1->next;\n    }while(cs1!=cs); //因为是循环链表，当cs1重新回到头指针时，不在循环\n    cout<<endl;\n}\n//删除循环链串 cs 中下标为 idx 的字符（从 0 开始）\nbool cs_delete(chainString &cs,int idx){\n    if(cs==NULL || idx<0) return false;\n    int i=0,j,len;\n    chainString cs1=cs;\n    do{\n        len=strlen(cs1->data);\n        if(i+len<=idx){\n            i+=len;\n            cs1=cs1->next;\n        }else{\n            for(j=idx-i;j<len;j++)\n                cs1->data[j]=cs1->data[j+1]; //包括结尾的 '\\0'\n            if(len==1){\n                if(cs1->next==cs1){\n                    delete cs1;\n                    cs=NULL;\n                }else{\n                    chainString pre=cs1->pre,nxt=cs1->next;\n                    pre->next=nxt;\n                    nxt->pre=pre;\n                    if(cs1==cs) cs=nxt;\n                    delete cs1;\n                }\n            }\n            return true;\n        }\n    }while(cs1!=cs);\n    return false;\n}\nint cs_compare(chainString cs1,chainString cs2){\n    int i=0,j=0;\n    chainString h1=cs1,h2=cs2;\n    while(true){\n        while(cs1!=NULL && cs1->data[i]=='\\0'){\n            cs1=cs1->next;\n            i=0;\n            if(cs1==h1) cs1=NULL;\n        }\n        while(cs2!=NULL && cs2->data[j]=='\\0'){\n            cs2=cs2->next;\n            j=0;\n            if(cs2==h2) cs2=NULL;\n        }\n        if(cs1==NULL && cs2==NULL) return 0;\n        if(cs1==NULL) return -1;\n        if(cs2==NULL) return 1;\n        unsigned char a=cs1->data[i],b=cs2->data[j];\n        if(a>b) return 1;\n        if(a<b) return -1;\n        ++i;++j;\n    }\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring text;getline(cin,text);\nchainString cs=cs_assign(text.c_str());if(!cs)cout<<\"EMPTY\\n\";else cs_traverse(cs);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "x\n",
        "expected": "x\n"
      },
      {
        "name": "测试 3",
        "stdin": "abcdefghij\n",
        "expected": "abcdefghij\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-chainstr-insert",
    "title": "链串：在首块后插入新块",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xwlnuwghb5uqp1sc",
        "blocks": [
          0,
          1,
          2,
          3
        ],
        "functions": [
          "cs_insert_post"
        ]
      }
    ],
    "description": "新块含 1..5 个字符。在当前首块之后插入它；原链串为空时新块自成环。",
    "input": "第一行原字符串；第二行新块。",
    "output": "删除题先输出成功标志 1/0 再输出结果；比较题输出 -1/0/1；其余输出拼接字符串，空串 EMPTY。",
    "constraints": [
      "字符串由英文字母或数字构成，长度 0..30",
      "插入新块长度 1..5；删除下标范围 -1..35"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "\nxy\n",
        "expected": "xy\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：第一行原字符串；第二行新块。\n// 输出：删除题先输出成功标志 1/0 再输出结果；比较题输出 -1/0/1；其余输出拼接字符串，空串 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n#define M 5\ntypedef struct csNode{\nchar data[M+1]; //串里面定义为字符类型，元素数设置为M+1保证最后一个元素始终为\\0\ncsNode * pre;\ncsNode * next;\ncsNode():pre(NULL),next(NULL){\n    for(int i=0;i<=M;i++) data[i]='\\0';//data元素初始化为\\0\n}\n} * chainString;\n//在结点cs后面插入结点cs1\nvoid cs_insert_post(chainString &cs,chainString cs1){\n    if(cs1==NULL) return;\n    if(cs==NULL){\t\t//如果cs为空则cs1覆盖cs\n    cs=cs1;\n    cs->next=cs,cs->pre=cs; //next和pre都指向自己满足循环\n    return;\n}\n    chainString nxt=cs->next;\n    cs1->next=nxt,nxt->pre=cs1;\n    cs->next=cs1,cs1->pre=cs;\n    return;\n}\n//将字符串str放入链串，结果作为返回值\nchainString cs_assign(const char *str){\n        if(str==NULL || *str=='\\0') return NULL;\n        chainString ret=NULL,temp =new csNode;\n        if(temp==NULL) return NULL;\n        int sz=strlen(str),i,j,k=(sz-1)/M*M; //k表示能够装满完整链串结点的字符总数\n        for(i=0;i<min(sz,M);i++){ //构建第一个结点\n            temp->data[i]=str[i]; \n        }\n        cs_insert_post(ret,temp); //把temp插到ret\n    for(j=k;j>=M;j-=M){   //从后往前构建结点并插入第一个结点后面\n        temp=new csNode; \n        for(i=j;i<min(j+M,sz);i++){\n            temp->data[i-j]=str[i];\n        }\n        cs_insert_post(ret,temp);\n    }\n    return ret;\n    }\n\n//遍历链串cs，输出cs所表示的字符串\nvoid cs_traverse(chainString cs){\n    if(cs==NULL) return;\n    chainString cs1=cs;     //定义1个移动指针，从头指针开始\n    do{\t\t\t\t\t\t// do...while，它不是先判断条件，而是：先执行一次循环体，再判断条件。\n        cout<<cs1->data;\n        cs1=cs1->next;\n    }while(cs1!=cs); //因为是循环链表，当cs1重新回到头指针时，不在循环\n    cout<<endl;\n}\n//删除循环链串 cs 中下标为 idx 的字符（从 0 开始）\nbool cs_delete(chainString &cs,int idx){\n    if(cs==NULL || idx<0) return false;\n    int i=0,j,len;\n    chainString cs1=cs;\n    do{\n        len=strlen(cs1->data);\n        if(i+len<=idx){\n            i+=len;\n            cs1=cs1->next;\n        }else{\n            for(j=idx-i;j<len;j++)\n                cs1->data[j]=cs1->data[j+1]; //包括结尾的 '\\0'\n            if(len==1){\n                if(cs1->next==cs1){\n                    delete cs1;\n                    cs=NULL;\n                }else{\n                    chainString pre=cs1->pre,nxt=cs1->next;\n                    pre->next=nxt;\n                    nxt->pre=pre;\n                    if(cs1==cs) cs=nxt;\n                    delete cs1;\n                }\n            }\n            return true;\n        }\n    }while(cs1!=cs);\n    return false;\n}\nint cs_compare(chainString cs1,chainString cs2){\n    int i=0,j=0;\n    chainString h1=cs1,h2=cs2;\n    while(true){\n        while(cs1!=NULL && cs1->data[i]=='\\0'){\n            cs1=cs1->next;\n            i=0;\n            if(cs1==h1) cs1=NULL;\n        }\n        while(cs2!=NULL && cs2->data[j]=='\\0'){\n            cs2=cs2->next;\n            j=0;\n            if(cs2==h2) cs2=NULL;\n        }\n        if(cs1==NULL && cs2==NULL) return 0;\n        if(cs1==NULL) return -1;\n        if(cs2==NULL) return 1;\n        unsigned char a=cs1->data[i],b=cs2->data[j];\n        if(a>b) return 1;\n        if(a<b) return -1;\n        ++i;++j;\n    }\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring text,chunk;getline(cin,text);getline(cin,chunk);\nchainString cs=cs_assign(text.c_str());chainString q=new csNode;strcpy(q->data,chunk.c_str());cs_insert_post(cs,q);if(!cs)cout<<\"EMPTY\\n\";else cs_traverse(cs);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "\nxy\n",
        "expected": "xy\n"
      },
      {
        "name": "测试 2",
        "stdin": "abcde\nZ\n",
        "expected": "abcdeZ\n"
      },
      {
        "name": "测试 3",
        "stdin": "abcdefghij\n12\n",
        "expected": "abcde12fghij\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-chainstr-delete",
    "title": "链串：删除指定下标字符",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xwlnuwghb5uqp1sc",
        "blocks": [
          0,
          1,
          2,
          3
        ],
        "functions": [
          "cs_delete"
        ]
      }
    ],
    "description": "删除从 0 开始的下标 p。越界或负下标返回失败且原串不变；删除唯一字符后为空。",
    "input": "第一行原字符串；第二行整数 p。",
    "output": "删除题先输出成功标志 1/0 再输出结果；比较题输出 -1/0/1；其余输出拼接字符串，空串 EMPTY。",
    "constraints": [
      "字符串由英文字母或数字构成，长度 0..30",
      "插入新块长度 1..5；删除下标范围 -1..35"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "\n0\n",
        "expected": "0\nEMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：第一行原字符串；第二行整数 p。\n// 输出：删除题先输出成功标志 1/0 再输出结果；比较题输出 -1/0/1；其余输出拼接字符串，空串 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n#define M 5\ntypedef struct csNode{\nchar data[M+1]; //串里面定义为字符类型，元素数设置为M+1保证最后一个元素始终为\\0\ncsNode * pre;\ncsNode * next;\ncsNode():pre(NULL),next(NULL){\n    for(int i=0;i<=M;i++) data[i]='\\0';//data元素初始化为\\0\n}\n} * chainString;\n//在结点cs后面插入结点cs1\nvoid cs_insert_post(chainString &cs,chainString cs1){\n    if(cs1==NULL) return;\n    if(cs==NULL){\t\t//如果cs为空则cs1覆盖cs\n    cs=cs1;\n    cs->next=cs,cs->pre=cs; //next和pre都指向自己满足循环\n    return;\n}\n    chainString nxt=cs->next;\n    cs1->next=nxt,nxt->pre=cs1;\n    cs->next=cs1,cs1->pre=cs;\n    return;\n}\n//将字符串str放入链串，结果作为返回值\nchainString cs_assign(const char *str){\n        if(str==NULL || *str=='\\0') return NULL;\n        chainString ret=NULL,temp =new csNode;\n        if(temp==NULL) return NULL;\n        int sz=strlen(str),i,j,k=(sz-1)/M*M; //k表示能够装满完整链串结点的字符总数\n        for(i=0;i<min(sz,M);i++){ //构建第一个结点\n            temp->data[i]=str[i]; \n        }\n        cs_insert_post(ret,temp); //把temp插到ret\n    for(j=k;j>=M;j-=M){   //从后往前构建结点并插入第一个结点后面\n        temp=new csNode; \n        for(i=j;i<min(j+M,sz);i++){\n            temp->data[i-j]=str[i];\n        }\n        cs_insert_post(ret,temp);\n    }\n    return ret;\n    }\n\n//遍历链串cs，输出cs所表示的字符串\nvoid cs_traverse(chainString cs){\n    if(cs==NULL) return;\n    chainString cs1=cs;     //定义1个移动指针，从头指针开始\n    do{\t\t\t\t\t\t// do...while，它不是先判断条件，而是：先执行一次循环体，再判断条件。\n        cout<<cs1->data;\n        cs1=cs1->next;\n    }while(cs1!=cs); //因为是循环链表，当cs1重新回到头指针时，不在循环\n    cout<<endl;\n}\n//删除循环链串 cs 中下标为 idx 的字符（从 0 开始）\nbool cs_delete(chainString &cs,int idx){\n    if(cs==NULL || idx<0) return false;\n    int i=0,j,len;\n    chainString cs1=cs;\n    do{\n        len=strlen(cs1->data);\n        if(i+len<=idx){\n            i+=len;\n            cs1=cs1->next;\n        }else{\n            for(j=idx-i;j<len;j++)\n                cs1->data[j]=cs1->data[j+1]; //包括结尾的 '\\0'\n            if(len==1){\n                if(cs1->next==cs1){\n                    delete cs1;\n                    cs=NULL;\n                }else{\n                    chainString pre=cs1->pre,nxt=cs1->next;\n                    pre->next=nxt;\n                    nxt->pre=pre;\n                    if(cs1==cs) cs=nxt;\n                    delete cs1;\n                }\n            }\n            return true;\n        }\n    }while(cs1!=cs);\n    return false;\n}\nint cs_compare(chainString cs1,chainString cs2){\n    int i=0,j=0;\n    chainString h1=cs1,h2=cs2;\n    while(true){\n        while(cs1!=NULL && cs1->data[i]=='\\0'){\n            cs1=cs1->next;\n            i=0;\n            if(cs1==h1) cs1=NULL;\n        }\n        while(cs2!=NULL && cs2->data[j]=='\\0'){\n            cs2=cs2->next;\n            j=0;\n            if(cs2==h2) cs2=NULL;\n        }\n        if(cs1==NULL && cs2==NULL) return 0;\n        if(cs1==NULL) return -1;\n        if(cs2==NULL) return 1;\n        unsigned char a=cs1->data[i],b=cs2->data[j];\n        if(a>b) return 1;\n        if(a<b) return -1;\n        ++i;++j;\n    }\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring text;getline(cin,text);int p;cin>>p;\nchainString cs=cs_assign(text.c_str());bool ok=cs_delete(cs,p);cout<<ok<<\"\\n\";if(!cs)cout<<\"EMPTY\\n\";else cs_traverse(cs);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "\n0\n",
        "expected": "0\nEMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "a\n0\n",
        "expected": "1\nEMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "abcdefghij\n5\n",
        "expected": "1\nabcdeghij\n"
      },
      {
        "name": "测试 4",
        "stdin": "abc\n7\n",
        "expected": "0\nabc\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-chainstr-compare",
    "title": "链串：字典序比较",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xwlnuwghb5uqp1sc",
        "blocks": [
          0,
          1,
          2,
          3
        ],
        "functions": [
          "cs_compare"
        ]
      }
    ],
    "description": "按字典序比较两个链串：首个不同字符决定大小；一串为另一串前缀时短串小。",
    "input": "两行字符串。",
    "output": "删除题先输出成功标志 1/0 再输出结果；比较题输出 -1/0/1；其余输出拼接字符串，空串 EMPTY。",
    "constraints": [
      "字符串由英文字母或数字构成，长度 0..30",
      "插入新块长度 1..5；删除下标范围 -1..35"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "\n\n",
        "expected": "0\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：两行字符串。\n// 输出：删除题先输出成功标志 1/0 再输出结果；比较题输出 -1/0/1；其余输出拼接字符串，空串 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n#define M 5\ntypedef struct csNode{\nchar data[M+1]; //串里面定义为字符类型，元素数设置为M+1保证最后一个元素始终为\\0\ncsNode * pre;\ncsNode * next;\ncsNode():pre(NULL),next(NULL){\n    for(int i=0;i<=M;i++) data[i]='\\0';//data元素初始化为\\0\n}\n} * chainString;\n//在结点cs后面插入结点cs1\nvoid cs_insert_post(chainString &cs,chainString cs1){\n    if(cs1==NULL) return;\n    if(cs==NULL){\t\t//如果cs为空则cs1覆盖cs\n    cs=cs1;\n    cs->next=cs,cs->pre=cs; //next和pre都指向自己满足循环\n    return;\n}\n    chainString nxt=cs->next;\n    cs1->next=nxt,nxt->pre=cs1;\n    cs->next=cs1,cs1->pre=cs;\n    return;\n}\n//将字符串str放入链串，结果作为返回值\nchainString cs_assign(const char *str){\n        if(str==NULL || *str=='\\0') return NULL;\n        chainString ret=NULL,temp =new csNode;\n        if(temp==NULL) return NULL;\n        int sz=strlen(str),i,j,k=(sz-1)/M*M; //k表示能够装满完整链串结点的字符总数\n        for(i=0;i<min(sz,M);i++){ //构建第一个结点\n            temp->data[i]=str[i]; \n        }\n        cs_insert_post(ret,temp); //把temp插到ret\n    for(j=k;j>=M;j-=M){   //从后往前构建结点并插入第一个结点后面\n        temp=new csNode; \n        for(i=j;i<min(j+M,sz);i++){\n            temp->data[i-j]=str[i];\n        }\n        cs_insert_post(ret,temp);\n    }\n    return ret;\n    }\n\n//遍历链串cs，输出cs所表示的字符串\nvoid cs_traverse(chainString cs){\n    if(cs==NULL) return;\n    chainString cs1=cs;     //定义1个移动指针，从头指针开始\n    do{\t\t\t\t\t\t// do...while，它不是先判断条件，而是：先执行一次循环体，再判断条件。\n        cout<<cs1->data;\n        cs1=cs1->next;\n    }while(cs1!=cs); //因为是循环链表，当cs1重新回到头指针时，不在循环\n    cout<<endl;\n}\n//删除循环链串 cs 中下标为 idx 的字符（从 0 开始）\nbool cs_delete(chainString &cs,int idx){\n    if(cs==NULL || idx<0) return false;\n    int i=0,j,len;\n    chainString cs1=cs;\n    do{\n        len=strlen(cs1->data);\n        if(i+len<=idx){\n            i+=len;\n            cs1=cs1->next;\n        }else{\n            for(j=idx-i;j<len;j++)\n                cs1->data[j]=cs1->data[j+1]; //包括结尾的 '\\0'\n            if(len==1){\n                if(cs1->next==cs1){\n                    delete cs1;\n                    cs=NULL;\n                }else{\n                    chainString pre=cs1->pre,nxt=cs1->next;\n                    pre->next=nxt;\n                    nxt->pre=pre;\n                    if(cs1==cs) cs=nxt;\n                    delete cs1;\n                }\n            }\n            return true;\n        }\n    }while(cs1!=cs);\n    return false;\n}\nint cs_compare(chainString cs1,chainString cs2){\n    int i=0,j=0;\n    chainString h1=cs1,h2=cs2;\n    while(true){\n        while(cs1!=NULL && cs1->data[i]=='\\0'){\n            cs1=cs1->next;\n            i=0;\n            if(cs1==h1) cs1=NULL;\n        }\n        while(cs2!=NULL && cs2->data[j]=='\\0'){\n            cs2=cs2->next;\n            j=0;\n            if(cs2==h2) cs2=NULL;\n        }\n        if(cs1==NULL && cs2==NULL) return 0;\n        if(cs1==NULL) return -1;\n        if(cs2==NULL) return 1;\n        unsigned char a=cs1->data[i],b=cs2->data[j];\n        if(a>b) return 1;\n        if(a<b) return -1;\n        ++i;++j;\n    }\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring x,y;getline(cin,x);getline(cin,y);\ncout<<cs_compare(cs_assign(x.c_str()),cs_assign(y.c_str()))<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "\n\n",
        "expected": "0\n"
      },
      {
        "name": "测试 2",
        "stdin": "abcdefghij\nabcdefghik\n",
        "expected": "-1\n"
      },
      {
        "name": "测试 3",
        "stdin": "abc\nab\n",
        "expected": "1\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-gt-insert-atom",
    "title": "广义表：插入原子",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "hrhvgg9q5xwn4zwn",
        "blocks": [
          0,
          1,
          2
        ],
        "functions": [
          "gt_insert(char)"
        ]
      }
    ],
    "description": "在带头结点广义表的最前面插入一个字符原子。",
    "input": "两行：原广义表；单个原子字符。 使用如 (a,(b,c)) 的括号语法，无空格。",
    "output": "输出新的规范括号表示。",
    "constraints": [
      "每表最多 20 个原子/子表，嵌套深度≤5",
      "原子为小写英文字母；无循环引用。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "(a,b)\nx\n",
        "expected": "(x,a,b)\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：两行：原广义表；单个原子字符。 使用如 (a,(b,c)) 的括号语法，无空格。\n// 输出：输出新的规范括号表示。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\ntypedef char datatype;\ntypedef struct gtNode{\n    bool tag;\t//标签\n    union{\t\t //表示ele同一块内存同时存放data和link两种数据类型\n    datatype data;\n    gtNode * link;\n    } ele;\ngtNode * next;\ngtNode():tag(false),next(NULL){} //初始化tag为false即创建的结点默认为原子\n} * gTable;\n//在结点gt后面插入一个原子，原子的值为x\nvoid gt_insert(gTable &gt,datatype x){\n    if(gt==NULL) gt=new gtNode;\t\n    gTable temp = new gtNode;\n    temp->ele.data=x;\t//temp->tag默认为false所以不需要写\n    temp->next=gt->next;\t\n    gt->next=temp;\n}\n\n//在结点gt的后面插入一个子表gt1\nvoid gt_insert(gTable &gt,gTable gt1){\n    if(gt==NULL) gt =new gtNode;\n    gTable temp = new gtNode;\n    temp->tag=true,temp->ele.link=gt1;\n    temp->next=gt->next;\t\n    gt->next=temp;\n}\n//遍历广义表,不适合递归广义表因为会出现循环\nvoid gt_traverse(gTable gt){\n    if(gt==NULL) return;\n    gt=gt->next;  //跳过头结点指向第一个数据结点\n    while(gt!=NULL){\n        if(gt->tag == false) cout<<gt->ele.data<<' '; //输出原子\n        else{\n            cout<<endl<<\"子表:\"; \n            gt_traverse(gt->ele.link);    //遍历子表\n            cout<<endl;\n        }\n        if(gt==NULL) return;\n    gt=gt->next;\n    }\n}\nbool gt_equal(gTable gt1,gTable gt2){\n    gTable p=gt1==NULL?NULL:gt1->next;\n    gTable q=gt2==NULL?NULL:gt2->next;\n    while(p!=NULL && q!=NULL){\n        if(p->tag!=q->tag) return false;\n        if(!p->tag){\n            if(p->ele.data!=q->ele.data) return false;\n        }else if(!gt_equal(p->ele.link,q->ele.link)){\n            return false;\n        }\n        p=p->next;q=q->next;\n    }\n    return p==NULL && q==NULL;\n}\ngTable parsegt(const string&s,int &i){gTable h=new gtNode;vector<pair<char,gTable>>v;++i;while(i<(int)s.size()&&s[i]!=')'){if(s[i]==','){++i;continue;}if(s[i]=='(')v.push_back({0,parsegt(s,i)});else v.push_back({s[i++],nullptr});}++i;for(int k=(int)v.size()-1;k>=0;--k){if(v[k].second)gt_insert(h,v[k].second);else gt_insert(h,v[k].first);}return h;}\nstring fmtgt(gTable h){string r=\"(\";bool first=true;for(auto p=h?h->next:nullptr;p;p=p->next){if(!first)r+=',';first=false;r+=p->tag?fmtgt(p->ele.link):string(1,p->ele.data);}return r+\")\";}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring s,t;cin>>s>>t;int i=0;gTable h=parsegt(s,i);\ngt_insert(h,t[0]);cout<<fmtgt(h)<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "(a,b)\nx\n",
        "expected": "(x,a,b)\n"
      },
      {
        "name": "测试 2",
        "stdin": "()\na\n",
        "expected": "(a)\n"
      },
      {
        "name": "测试 3",
        "stdin": "((a),b)\nb\n",
        "expected": "(b,(a),b)\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-gt-insert-subtable",
    "title": "广义表：插入子表",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "hrhvgg9q5xwn4zwn",
        "blocks": [
          0,
          1,
          2
        ],
        "functions": [
          "gt_insert(gTable)"
        ]
      }
    ],
    "description": "在带头结点广义表的最前面插入一个子表，子表仍作为单个元素。",
    "input": "两行：原广义表；新子表。 使用如 (a,(b,c)) 的括号语法，无空格。",
    "output": "输出新的规范括号表示。",
    "constraints": [
      "每表最多 20 个原子/子表，嵌套深度≤5",
      "原子为小写英文字母；无循环引用。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "(a,b)\n(x,y)\n",
        "expected": "((x,y),a,b)\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：两行：原广义表；新子表。 使用如 (a,(b,c)) 的括号语法，无空格。\n// 输出：输出新的规范括号表示。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\ntypedef char datatype;\ntypedef struct gtNode{\n    bool tag;\t//标签\n    union{\t\t //表示ele同一块内存同时存放data和link两种数据类型\n    datatype data;\n    gtNode * link;\n    } ele;\ngtNode * next;\ngtNode():tag(false),next(NULL){} //初始化tag为false即创建的结点默认为原子\n} * gTable;\n//在结点gt后面插入一个原子，原子的值为x\nvoid gt_insert(gTable &gt,datatype x){\n    if(gt==NULL) gt=new gtNode;\t\n    gTable temp = new gtNode;\n    temp->ele.data=x;\t//temp->tag默认为false所以不需要写\n    temp->next=gt->next;\t\n    gt->next=temp;\n}\n\n//在结点gt的后面插入一个子表gt1\nvoid gt_insert(gTable &gt,gTable gt1){\n    if(gt==NULL) gt =new gtNode;\n    gTable temp = new gtNode;\n    temp->tag=true,temp->ele.link=gt1;\n    temp->next=gt->next;\t\n    gt->next=temp;\n}\n//遍历广义表,不适合递归广义表因为会出现循环\nvoid gt_traverse(gTable gt){\n    if(gt==NULL) return;\n    gt=gt->next;  //跳过头结点指向第一个数据结点\n    while(gt!=NULL){\n        if(gt->tag == false) cout<<gt->ele.data<<' '; //输出原子\n        else{\n            cout<<endl<<\"子表:\"; \n            gt_traverse(gt->ele.link);    //遍历子表\n            cout<<endl;\n        }\n        if(gt==NULL) return;\n    gt=gt->next;\n    }\n}\nbool gt_equal(gTable gt1,gTable gt2){\n    gTable p=gt1==NULL?NULL:gt1->next;\n    gTable q=gt2==NULL?NULL:gt2->next;\n    while(p!=NULL && q!=NULL){\n        if(p->tag!=q->tag) return false;\n        if(!p->tag){\n            if(p->ele.data!=q->ele.data) return false;\n        }else if(!gt_equal(p->ele.link,q->ele.link)){\n            return false;\n        }\n        p=p->next;q=q->next;\n    }\n    return p==NULL && q==NULL;\n}\ngTable parsegt(const string&s,int &i){gTable h=new gtNode;vector<pair<char,gTable>>v;++i;while(i<(int)s.size()&&s[i]!=')'){if(s[i]==','){++i;continue;}if(s[i]=='(')v.push_back({0,parsegt(s,i)});else v.push_back({s[i++],nullptr});}++i;for(int k=(int)v.size()-1;k>=0;--k){if(v[k].second)gt_insert(h,v[k].second);else gt_insert(h,v[k].first);}return h;}\nstring fmtgt(gTable h){string r=\"(\";bool first=true;for(auto p=h?h->next:nullptr;p;p=p->next){if(!first)r+=',';first=false;r+=p->tag?fmtgt(p->ele.link):string(1,p->ele.data);}return r+\")\";}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring s,t;cin>>s>>t;int i=0;gTable h=parsegt(s,i);\ni=0;gt_insert(h,parsegt(t,i));cout<<fmtgt(h)<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "(a,b)\n(x,y)\n",
        "expected": "((x,y),a,b)\n"
      },
      {
        "name": "测试 2",
        "stdin": "()\n()\n",
        "expected": "(())\n"
      },
      {
        "name": "测试 3",
        "stdin": "((a),b)\n(b)\n",
        "expected": "((b),(a),b)\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-gt-equal",
    "title": "广义表：结构与内容相等",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "hrhvgg9q5xwn4zwn",
        "blocks": [
          0,
          1,
          2
        ],
        "functions": [
          "gt_equal"
        ]
      }
    ],
    "description": "同时比较每层元素顺序、原子值和子表结构；仅原子序列相同但分组不同不算相等。",
    "input": "两行合法广义表括号表示，无空格。",
    "output": "相等 YES，否则 NO。",
    "constraints": [
      "每表最多 20 个元素，深度≤5；原子为小写字母；无循环引用。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "()\n()\n",
        "expected": "YES\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：两行合法广义表括号表示，无空格。\n// 输出：相等 YES，否则 NO。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\ntypedef char datatype;\ntypedef struct gtNode{\n    bool tag;\t//标签\n    union{\t\t //表示ele同一块内存同时存放data和link两种数据类型\n    datatype data;\n    gtNode * link;\n    } ele;\ngtNode * next;\ngtNode():tag(false),next(NULL){} //初始化tag为false即创建的结点默认为原子\n} * gTable;\n//在结点gt后面插入一个原子，原子的值为x\nvoid gt_insert(gTable &gt,datatype x){\n    if(gt==NULL) gt=new gtNode;\t\n    gTable temp = new gtNode;\n    temp->ele.data=x;\t//temp->tag默认为false所以不需要写\n    temp->next=gt->next;\t\n    gt->next=temp;\n}\n\n//在结点gt的后面插入一个子表gt1\nvoid gt_insert(gTable &gt,gTable gt1){\n    if(gt==NULL) gt =new gtNode;\n    gTable temp = new gtNode;\n    temp->tag=true,temp->ele.link=gt1;\n    temp->next=gt->next;\t\n    gt->next=temp;\n}\n//遍历广义表,不适合递归广义表因为会出现循环\nvoid gt_traverse(gTable gt){\n    if(gt==NULL) return;\n    gt=gt->next;  //跳过头结点指向第一个数据结点\n    while(gt!=NULL){\n        if(gt->tag == false) cout<<gt->ele.data<<' '; //输出原子\n        else{\n            cout<<endl<<\"子表:\"; \n            gt_traverse(gt->ele.link);    //遍历子表\n            cout<<endl;\n        }\n        if(gt==NULL) return;\n    gt=gt->next;\n    }\n}\nbool gt_equal(gTable gt1,gTable gt2){\n    gTable p=gt1==NULL?NULL:gt1->next;\n    gTable q=gt2==NULL?NULL:gt2->next;\n    while(p!=NULL && q!=NULL){\n        if(p->tag!=q->tag) return false;\n        if(!p->tag){\n            if(p->ele.data!=q->ele.data) return false;\n        }else if(!gt_equal(p->ele.link,q->ele.link)){\n            return false;\n        }\n        p=p->next;q=q->next;\n    }\n    return p==NULL && q==NULL;\n}\ngTable parsegt(const string&s,int &i){gTable h=new gtNode;vector<pair<char,gTable>>v;++i;while(i<(int)s.size()&&s[i]!=')'){if(s[i]==','){++i;continue;}if(s[i]=='(')v.push_back({0,parsegt(s,i)});else v.push_back({s[i++],nullptr});}++i;for(int k=(int)v.size()-1;k>=0;--k){if(v[k].second)gt_insert(h,v[k].second);else gt_insert(h,v[k].first);}return h;}\nstring fmtgt(gTable h){string r=\"(\";bool first=true;for(auto p=h?h->next:nullptr;p;p=p->next){if(!first)r+=',';first=false;r+=p->tag?fmtgt(p->ele.link):string(1,p->ele.data);}return r+\")\";}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring x,y;cin>>x>>y;int i=0,j=0;auto a=parsegt(x,i),z=parsegt(y,j);\ncout<<(gt_equal(a,z)?\"YES\":\"NO\")<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "()\n()\n",
        "expected": "YES\n"
      },
      {
        "name": "测试 2",
        "stdin": "(a,(b,c))\n(a,(b,c))\n",
        "expected": "YES\n"
      },
      {
        "name": "测试 3",
        "stdin": "(a,(b))\n((a),b)\n",
        "expected": "NO\n"
      },
      {
        "name": "测试 4",
        "stdin": "((a),b)\n((a),c)\n",
        "expected": "NO\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-gt-traverse",
    "title": "广义表：递归遍历子表",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "hrhvgg9q5xwn4zwn",
        "blocks": [
          0,
          1,
          2
        ],
        "functions": [
          "gt_traverse"
        ]
      }
    ],
    "description": "按原笔记的递归遍历输出：原子直接输出；遇到子表，输出“子表:”再递归访问。换行与连续空格不影响判题。",
    "input": "一行合法广义表括号表示，无空格。",
    "output": "原子之间以空格分隔，进入子表前显示 子表:；空根表输出 EMPTY。",
    "constraints": [
      "元素数≤20，深度≤5；原子为小写字母；无循环引用。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "()\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：一行合法广义表括号表示，无空格。\n// 输出：原子之间以空格分隔，进入子表前显示 子表:；空根表输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\ntypedef char datatype;\ntypedef struct gtNode{\n    bool tag;\t//标签\n    union{\t\t //表示ele同一块内存同时存放data和link两种数据类型\n    datatype data;\n    gtNode * link;\n    } ele;\ngtNode * next;\ngtNode():tag(false),next(NULL){} //初始化tag为false即创建的结点默认为原子\n} * gTable;\n//在结点gt后面插入一个原子，原子的值为x\nvoid gt_insert(gTable &gt,datatype x){\n    if(gt==NULL) gt=new gtNode;\t\n    gTable temp = new gtNode;\n    temp->ele.data=x;\t//temp->tag默认为false所以不需要写\n    temp->next=gt->next;\t\n    gt->next=temp;\n}\n\n//在结点gt的后面插入一个子表gt1\nvoid gt_insert(gTable &gt,gTable gt1){\n    if(gt==NULL) gt =new gtNode;\n    gTable temp = new gtNode;\n    temp->tag=true,temp->ele.link=gt1;\n    temp->next=gt->next;\t\n    gt->next=temp;\n}\n//遍历广义表,不适合递归广义表因为会出现循环\nvoid gt_traverse(gTable gt){\n    if(gt==NULL) return;\n    gt=gt->next;  //跳过头结点指向第一个数据结点\n    while(gt!=NULL){\n        if(gt->tag == false) cout<<gt->ele.data<<' '; //输出原子\n        else{\n            cout<<endl<<\"子表:\"; \n            gt_traverse(gt->ele.link);    //遍历子表\n            cout<<endl;\n        }\n        if(gt==NULL) return;\n    gt=gt->next;\n    }\n}\nbool gt_equal(gTable gt1,gTable gt2){\n    gTable p=gt1==NULL?NULL:gt1->next;\n    gTable q=gt2==NULL?NULL:gt2->next;\n    while(p!=NULL && q!=NULL){\n        if(p->tag!=q->tag) return false;\n        if(!p->tag){\n            if(p->ele.data!=q->ele.data) return false;\n        }else if(!gt_equal(p->ele.link,q->ele.link)){\n            return false;\n        }\n        p=p->next;q=q->next;\n    }\n    return p==NULL && q==NULL;\n}\ngTable parsegt(const string&s,int &i){gTable h=new gtNode;vector<pair<char,gTable>>v;++i;while(i<(int)s.size()&&s[i]!=')'){if(s[i]==','){++i;continue;}if(s[i]=='(')v.push_back({0,parsegt(s,i)});else v.push_back({s[i++],nullptr});}++i;for(int k=(int)v.size()-1;k>=0;--k){if(v[k].second)gt_insert(h,v[k].second);else gt_insert(h,v[k].first);}return h;}\nstring fmtgt(gTable h){string r=\"(\";bool first=true;for(auto p=h?h->next:nullptr;p;p=p->next){if(!first)r+=',';first=false;r+=p->tag?fmtgt(p->ele.link):string(1,p->ele.data);}return r+\")\";}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring s;cin>>s;int i=0;auto h=parsegt(s,i);\nif(!h->next)cout<<\"EMPTY\\n\";else gt_traverse(h);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "()\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "(a,b)\n",
        "expected": "a b\n"
      },
      {
        "name": "测试 3",
        "stdin": "(a,(b,c))\n",
        "expected": "a\n子表:b c\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-ex-range-search",
    "title": "课后 01：顺序表区间查找",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xg722hby8yvyr2i0",
        "blocks": [
          0
        ],
        "functions": [
          "sl_research"
        ]
      }
    ],
    "description": "只在左闭右开区间 [l,r) 查找首个 x。非法边界或没有匹配返回 -1。",
    "input": "n；n 个整数；l r x。",
    "output": "输出匹配下标或 -1。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "3\n1 2 1\n1 3 1\n",
        "expected": "2\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；l r x。\n// 输出：输出匹配下标或 -1。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=int;struct SeqList{int data[N];int len=0;};struct clNode{clNode *pre=nullptr,*next=nullptr;int data=0;};using ChainList=clNode*;using dChainList=ChainList;\nChainList mk(const vector<int>&a){auto h=new clNode;auto p=h;for(int x:a){p->next=new clNode;p->next->pre=p;p=p->next;p->data=x;}return h;}\nvoid pl(ChainList h){vector<int>v;for(auto p=h?h->next:nullptr;p;p=p->next)v.push_back(p->data);printv(v);}\n\nint sl_research(SeqList sl,int left,int right,datatype x){\n    if(left<0 || right>sl.len || left>right) return -1;\n    for(int i=left;i<right;i++){\n        if(sl.data[i]==x) return i;\n    }\n    return -1;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;SeqList sl;for(int x:a)sl.data[sl.len++]=x;int l,r,x;cin>>l>>r>>x;\ncout<<sl_research(sl,l,r,x)<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "3\n1 2 1\n1 3 1\n",
        "expected": "2\n"
      },
      {
        "name": "测试 2",
        "stdin": "0\n\n0 0 1\n",
        "expected": "-1\n"
      },
      {
        "name": "测试 3",
        "stdin": "1\n2\n-1 1 2\n",
        "expected": "-1\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-ex-range-delete",
    "title": "课后 02：顺序表区间删除",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xg722hby8yvyr2i0",
        "blocks": [
          1
        ],
        "functions": [
          "sl_delete"
        ]
      }
    ],
    "description": "删除 [l,r)；非法区间返回 -1 且不修改。合法空区间也返回 1。",
    "input": "n；n 个整数；l r。",
    "output": "第一行成功 1 或失败 -1；第二行结果序列，空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "3\n1 2 3\n1 3\n",
        "expected": "1\n1\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；l r。\n// 输出：第一行成功 1 或失败 -1；第二行结果序列，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=int;struct SeqList{int data[N];int len=0;};struct clNode{clNode *pre=nullptr,*next=nullptr;int data=0;};using ChainList=clNode*;using dChainList=ChainList;\nChainList mk(const vector<int>&a){auto h=new clNode;auto p=h;for(int x:a){p->next=new clNode;p->next->pre=p;p=p->next;p->data=x;}return h;}\nvoid pl(ChainList h){vector<int>v;for(auto p=h?h->next:nullptr;p;p=p->next)v.push_back(p->data);printv(v);}\n\nint sl_delete(SeqList &sl,int left,int right){\n    if(left<0 || right>sl.len || left>right) return -1;\n    int len = right-left;\n    for(int i=right;i<sl.len;i++){\n        sl.data[i-len]=sl.data[i];\n    }\n    sl.len-=len;\n    return 1;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;SeqList sl;for(int x:a)sl.data[sl.len++]=x;int l,r;cin>>l>>r;\ncout<<sl_delete(sl,l,r)<<\"\\n\";printv(vector<int>(sl.data,sl.data+sl.len));\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "3\n1 2 3\n1 3\n",
        "expected": "1\n1\n"
      },
      {
        "name": "测试 2",
        "stdin": "0\n\n0 0\n",
        "expected": "1\nEMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "1\n2\n0 2\n",
        "expected": "-1\n2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-ex-list-search",
    "title": "课后 03：链表查找与序号",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xg722hby8yvyr2i0",
        "blocks": [
          2
        ],
        "functions": [
          "cl_search"
        ]
      }
    ],
    "description": "在带头结点双向链表查找首个 x，输出数据结点位置，从 1 开始。",
    "input": "n；n 个整数；x。",
    "output": "找到输出位置，否则 -1。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "3\n2 3 2\n2\n",
        "expected": "1\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；x。\n// 输出：找到输出位置，否则 -1。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=int;struct SeqList{int data[N];int len=0;};struct clNode{clNode *pre=nullptr,*next=nullptr;int data=0;};using ChainList=clNode*;using dChainList=ChainList;\nChainList mk(const vector<int>&a){auto h=new clNode;auto p=h;for(int x:a){p->next=new clNode;p->next->pre=p;p=p->next;p->data=x;}return h;}\nvoid pl(ChainList h){vector<int>v;for(auto p=h?h->next:nullptr;p;p=p->next)v.push_back(p->data);printv(v);}\n\nChainList cl_search(ChainList h,datatype x,int &ord){\n    ord=1;\n    if(h==NULL) return NULL;\n    while(h->next!=NULL && h->next->data!=x){\n        h=h->next;\n        ord++;\n    }\n    if(h->next!=NULL&&h->next->data==x){\n        return h->next;\n    }\n    return NULL;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;auto h=mk(a);int x;cin>>x;\nint ord;auto q=cl_search(h,x,ord);cout<<(q?ord:-1)<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "3\n2 3 2\n2\n",
        "expected": "1\n"
      },
      {
        "name": "测试 2",
        "stdin": "0\n\n3\n",
        "expected": "-1\n"
      },
      {
        "name": "测试 3",
        "stdin": "2\n-1 3\n3\n",
        "expected": "2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-ex-list-insert",
    "title": "课后 04：找到值后插入",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xg722hby8yvyr2i0",
        "blocks": [
          3
        ],
        "functions": [
          "cl_insert"
        ]
      }
    ],
    "description": "在首个 x 后插入 y；x 不存在则尾插。",
    "input": "n；n 个整数；x y。",
    "output": "输出结果序列；空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "3\n1 2 1\n1 7\n",
        "expected": "1 7 2 1\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；x y。\n// 输出：输出结果序列；空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=int;struct SeqList{int data[N];int len=0;};struct clNode{clNode *pre=nullptr,*next=nullptr;int data=0;};using ChainList=clNode*;using dChainList=ChainList;\nChainList mk(const vector<int>&a){auto h=new clNode;auto p=h;for(int x:a){p->next=new clNode;p->next->pre=p;p=p->next;p->data=x;}return h;}\nvoid pl(ChainList h){vector<int>v;for(auto p=h?h->next:nullptr;p;p=p->next)v.push_back(p->data);printv(v);}\n\nvoid cl_insert(ChainList h,datatype x1,datatype x2){\n    if(h==NULL) return;\n    while(h->next!=NULL&&h->next->data!=x1){\n        h=h->next;\n    }\n    if(h->next!=NULL){\n        ChainList p = new clNode;\n        p->data = x2;\n        p->next = h->next->next;\n        p->pre = h->next;\n        if(p->next!=NULL) p->next->pre=p;\n        h->next->next = p;\n    }\n    else{\n        ChainList p = new clNode;\n        p->data = x2;\n        p->next = NULL;\n        h->next = p;\n        p->pre = h;\n    }\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;auto h=mk(a);int x,y;cin>>x>>y;\ncl_insert(h,x,y);pl(h);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "3\n1 2 1\n1 7\n",
        "expected": "1 7 2 1\n"
      },
      {
        "name": "测试 2",
        "stdin": "0\n\n3 4\n",
        "expected": "4\n"
      },
      {
        "name": "测试 3",
        "stdin": "1\n1\n9 -2\n",
        "expected": "1 -2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-ex-list-delete-all",
    "title": "课后 05：删除所有指定值",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xg722hby8yvyr2i0",
        "blocks": [
          4
        ],
        "functions": [
          "cl_delete"
        ]
      }
    ],
    "description": "删除链表中所有等于 x 的结点，维护 next/pre。",
    "input": "n；n 个整数；x。",
    "output": "输出结果序列；空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "3\n1 2 1\n1\n",
        "expected": "2\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；x。\n// 输出：输出结果序列；空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=int;struct SeqList{int data[N];int len=0;};struct clNode{clNode *pre=nullptr,*next=nullptr;int data=0;};using ChainList=clNode*;using dChainList=ChainList;\nChainList mk(const vector<int>&a){auto h=new clNode;auto p=h;for(int x:a){p->next=new clNode;p->next->pre=p;p=p->next;p->data=x;}return h;}\nvoid pl(ChainList h){vector<int>v;for(auto p=h?h->next:nullptr;p;p=p->next)v.push_back(p->data);printv(v);}\n\nvoid cl_delete(ChainList h, datatype x){\n    if(h==NULL) return;\n    h = h->next;\n    while(h != NULL){\n        if(h->data == x){\n            ChainList p = h;\n            if(h==NULL) return;\n    h = h->next;\n            p->pre->next = p->next;\n            if(p->next != NULL){\n                p->next->pre = p->pre;\n            }\n            delete p;\n        }\n        else{\n            if(h==NULL) return;\n    h = h->next;\n        }\n    }\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;auto h=mk(a);int x;cin>>x;\ncl_delete(h,x);pl(h);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "3\n1 2 1\n1\n",
        "expected": "2\n"
      },
      {
        "name": "测试 2",
        "stdin": "0\n\n2\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "2\n2 3\n8\n",
        "expected": "2 3\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-ex-list-unique",
    "title": "课后 08：相邻重复结点去重",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xg722hby8yvyr2i0",
        "blocks": [
          7
        ],
        "functions": [
          "cl_unique"
        ]
      }
    ],
    "description": "连续相等结点仅保留一个，不相邻的重复值保留。",
    "input": "n；n 个整数；无其他输入。",
    "output": "输出结果序列；空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；无其他输入。\n// 输出：输出结果序列；空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=int;struct SeqList{int data[N];int len=0;};struct clNode{clNode *pre=nullptr,*next=nullptr;int data=0;};using ChainList=clNode*;using dChainList=ChainList;\nChainList mk(const vector<int>&a){auto h=new clNode;auto p=h;for(int x:a){p->next=new clNode;p->next->pre=p;p=p->next;p->data=x;}return h;}\nvoid pl(ChainList h){vector<int>v;for(auto p=h?h->next:nullptr;p;p=p->next)v.push_back(p->data);printv(v);}\n\nvoid cl_unique(ChainList h){\n    if(h==NULL) return;\n    ChainList p = h->next;\n    while(p!=NULL&&p->next!=NULL){\n        if(p->next->data==p->data){\n           ChainList q = p->next;\n            p->next = q->next;\n            if(q->next!=NULL)\n            q->next->pre = p;\n            delete q;q=NULL;\n        }\n        else{\n            p=p->next;\n        }\n    }\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;auto h=mk(a);\ncl_unique(h);pl(h);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "4\n1 1 2 1\n\n",
        "expected": "1 2 1\n"
      },
      {
        "name": "测试 3",
        "stdin": "2\n-2 -2\n\n",
        "expected": "-2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-ex-merge-sorted",
    "title": "课后 06：有序顺序表归并",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xg722hby8yvyr2i0",
        "blocks": [
          5
        ],
        "functions": [
          "merge"
        ]
      }
    ],
    "description": "把两表按非降序合并，重复元素全部保留。",
    "input": "n m；第一表 n 个数；第二表 m 个数。两表均非降序。",
    "output": "输出新表元素；空为 EMPTY。",
    "constraints": [
      "0≤n,m≤30；n+m≤60；值 [-100,100]"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "2 2\n1 3\n2 3\n",
        "expected": "1 2 3 3\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；第一表 n 个数；第二表 m 个数。两表均非降序。\n// 输出：输出新表元素；空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=int;struct SeqList{int data[N];int len=0;};struct clNode{clNode *pre=nullptr,*next=nullptr;int data=0;};using ChainList=clNode*;using dChainList=ChainList;\nChainList mk(const vector<int>&a){auto h=new clNode;auto p=h;for(int x:a){p->next=new clNode;p->next->pre=p;p=p->next;p->data=x;}return h;}\nvoid pl(ChainList h){vector<int>v;for(auto p=h?h->next:nullptr;p;p=p->next)v.push_back(p->data);printv(v);}\n\nvoid merge(SeqList sl1,SeqList sl2,SeqList &sl){\n    if(sl1.len+sl2.len>N) return;\n    int i = 0, j = 0, k = 0;\n    while (i < sl1.len && j < sl2.len) {\n        if (sl1.data[i] <= sl2.data[j])\n            sl.data[k++] = sl1.data[i++];\n        else\n            sl.data[k++] = sl2.data[j++];\n    }\n    while (i < sl1.len) sl.data[k++] = sl1.data[i++];\n    while (j < sl2.len) sl.data[k++] = sl2.data[j++];\n    sl.len = k;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<int>a(n),z(m);for(int&x:a)cin>>x;for(int&x:z)cin>>x;\nSeqList x,y,r;for(int v:a)x.data[x.len++]=v;for(int v:z)y.data[y.len++]=v;merge(x,y,r);printv(vector<int>(r.data,r.data+r.len));\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "2 2\n1 3\n2 3\n",
        "expected": "1 2 3 3\n"
      },
      {
        "name": "测试 2",
        "stdin": "0 1\n\n-2\n",
        "expected": "-2\n"
      },
      {
        "name": "测试 3",
        "stdin": "2 0\n2 2\n\n",
        "expected": "2 2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-ex-merge-linked",
    "title": "课后 07：双向链表顺次拼接",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xg722hby8yvyr2i0",
        "blocks": [
          6
        ],
        "functions": [
          "merge"
        ]
      }
    ],
    "description": "把两表依次复制到新链表，先第一表再第二表，不作排序。",
    "input": "n m；第一表 n 个数；第二表 m 个数。",
    "output": "输出新表元素；空为 EMPTY。",
    "constraints": [
      "0≤n,m≤30；n+m≤60；值 [-100,100]"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "2 2\n1 3\n2 3\n",
        "expected": "1 3 2 3\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；第一表 n 个数；第二表 m 个数。\n// 输出：输出新表元素；空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=int;struct SeqList{int data[N];int len=0;};struct clNode{clNode *pre=nullptr,*next=nullptr;int data=0;};using ChainList=clNode*;using dChainList=ChainList;\nChainList mk(const vector<int>&a){auto h=new clNode;auto p=h;for(int x:a){p->next=new clNode;p->next->pre=p;p=p->next;p->data=x;}return h;}\nvoid pl(ChainList h){vector<int>v;for(auto p=h?h->next:nullptr;p;p=p->next)v.push_back(p->data);printv(v);}\n\n//把两个带头结点的双向链表依次复制到新表 cl\nvoid merge(ChainList cl1,ChainList cl2,ChainList &cl){\n    cl=new clNode;\n    ChainList tail=cl;\n    ChainList lists[2]={cl1,cl2};\n    for(int i=0;i<2;i++){\n        ChainList p=lists[i]==NULL?NULL:lists[i]->next;\n        while(p!=NULL){\n            tail->next=new clNode;\n            tail->next->data=p->data;\n            tail->next->pre=tail;\n            tail=tail->next;\n            p=p->next;\n        }\n    }\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<int>a(n),z(m);for(int&x:a)cin>>x;for(int&x:z)cin>>x;\nChainList r=nullptr;merge(mk(a),mk(z),r);pl(r);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "2 2\n1 3\n2 3\n",
        "expected": "1 3 2 3\n"
      },
      {
        "name": "测试 2",
        "stdin": "0 1\n\n-2\n",
        "expected": "-2\n"
      },
      {
        "name": "测试 3",
        "stdin": "2 0\n2 2\n\n",
        "expected": "2 2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-ex-ring-split",
    "title": "课后 09：循环双向表按奇偶位置拆分",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xg722hby8yvyr2i0",
        "blocks": [
          8
        ],
        "functions": [
          "rcl_split"
        ]
      }
    ],
    "description": "输入结点位置从 1 开始。奇数位置进入 h1，偶数位置进入 h2。保留原题头插策略，因此各输出表内顺序逆转。",
    "input": "n；n 个整数。",
    "output": "两行，分别是奇数位置组和偶数位置组；空组 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\nEMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数。\n// 输出：两行，分别是奇数位置组和偶数位置组；空组 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=int;struct SeqList{int data[N];int len=0;};struct clNode{clNode *pre=nullptr,*next=nullptr;int data=0;};using ChainList=clNode*;using dChainList=ChainList;\nChainList mk(const vector<int>&a){auto h=new clNode;auto p=h;for(int x:a){p->next=new clNode;p->next->pre=p;p=p->next;p->data=x;}return h;}\nvoid pl(ChainList h){vector<int>v;for(auto p=h?h->next:nullptr;p;p=p->next)v.push_back(p->data);printv(v);}\n\n//带头结点的循环双向链表，按原位置奇偶拆成两个循环双向链表\nvoid rcl_split(ChainList h, ChainList &h1, ChainList &h2){\n    h1=new clNode;\n    h2=new clNode;\n    h1->next=h1;h1->pre=h1;\n    h2->next=h2;h2->pre=h2;\n    if(h==NULL) return;\n    int pos=1;\n    while(h->next!=h){\n        ChainList q=h->next;\n        h->next=q->next;\n        q->next->pre=h;\n        ChainList dst=(pos%2==1)?h1:h2;\n        q->next=dst->next;\n        q->pre=dst;\n        dst->next->pre=q;\n        dst->next=q;\n        pos++;\n    }\n    h->pre=h;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;auto h=mk(a);auto t=h;while(t->next)t=t->next;t->next=h;h->pre=t;\nChainList x,y;rcl_split(h,x,y);for(auto q:{x,y}){vector<int>v;for(auto p=q->next;p!=q;p=p->next)v.push_back(p->data);printv(v);}\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\nEMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n1\n",
        "expected": "1\nEMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "5\n1 2 3 4 5\n",
        "expected": "5 3 1\n4 2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-ex-adjacent-swap",
    "title": "课后 10：与直接前驱交换",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xg722hby8yvyr2i0",
        "blocks": [
          9
        ],
        "functions": [
          "dcl_swap"
        ]
      }
    ],
    "description": "查找首个 x，把该数据结点与前一数据结点交换。若不存在或已经是首数据结点，交换失败。",
    "input": "n；n 个整数；x。",
    "output": "先输出成功 1 或失败 0，再输出结果序列，空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "3\n1 2 3\n3\n",
        "expected": "1\n1 3 2\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；x。\n// 输出：先输出成功 1 或失败 0，再输出结果序列，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=int;struct SeqList{int data[N];int len=0;};struct clNode{clNode *pre=nullptr,*next=nullptr;int data=0;};using ChainList=clNode*;using dChainList=ChainList;\nChainList mk(const vector<int>&a){auto h=new clNode;auto p=h;for(int x:a){p->next=new clNode;p->next->pre=p;p=p->next;p->data=x;}return h;}\nvoid pl(ChainList h){vector<int>v;for(auto p=h?h->next:nullptr;p;p=p->next)v.push_back(p->data);printv(v);}\n\nbool dcl_swap(dChainList &h,datatype x){\n    if(h==NULL) return false;\n    dChainList p=h->next;\n    while(p!=NULL && p->data!=x) p=p->next;\n    if(p==NULL || p->pre==h) return false;\n    dChainList pre=p->pre;\n    pre->pre->next=p;\n    pre->next=p->next;\n    if(p->next!=NULL) p->next->pre=pre;\n    p->pre=pre->pre;\n    p->next=pre;\n    pre->pre=p;\n    return true;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;auto h=mk(a);int x;cin>>x;\ncout<<dcl_swap(h,x)<<\"\\n\";pl(h);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "3\n1 2 3\n3\n",
        "expected": "1\n1 3 2\n"
      },
      {
        "name": "测试 2",
        "stdin": "0\n\n2\n",
        "expected": "0\nEMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "2\n2 2\n2\n",
        "expected": "0\n2 2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-ex-ring-delete-pre",
    "title": "课后 11：删除循环表锚点的前驱",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xg722hby8yvyr2i0",
        "blocks": [
          10
        ],
        "functions": [
          "rcl_delete_pre"
        ]
      }
    ],
    "description": "无头双向循环表中，p 指向首元素。删除 p 的直接前驱，即原尾元素；唯一元素时删除自身，空表不变。",
    "input": "n；n 个整数。",
    "output": "从原首锚点开始输出剩余环；空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数。\n// 输出：从原首锚点开始输出剩余环；空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=int;struct SeqList{int data[N];int len=0;};struct clNode{clNode *pre=nullptr,*next=nullptr;int data=0;};using ChainList=clNode*;using dChainList=ChainList;\nChainList mk(const vector<int>&a){auto h=new clNode;auto p=h;for(int x:a){p->next=new clNode;p->next->pre=p;p=p->next;p->data=x;}return h;}\nvoid pl(ChainList h){vector<int>v;for(auto p=h?h->next:nullptr;p;p=p->next)v.push_back(p->data);printv(v);}\n\nvoid rcl_delete_pre(ChainList &p){\n    if(p==NULL || p->next==NULL) return;\n    else if(p->next==p){\n        delete p;p=NULL;\n        return;\n    }\n    else if(p->next->next==p){\n        ChainList q = p->pre;\n        p->pre=p;\n        p->next=p;\n        delete q;q=NULL;\n        return;\n    }\n    else{\n        ChainList q = p->pre;\n        q->pre->next=p;\n        p->pre=q->pre;\n        delete q;q=NULL;\n        return;\n    }\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;auto head=mk(a);auto p=head->next;if(p){auto t=p;while(t->next)t=t->next;t->next=p;p->pre=t;}\nrcl_delete_pre(p);vector<int>v;if(p){auto q=p;do{v.push_back(q->data);q=q->next;}while(q!=p);}printv(v);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n1 2 3\n",
        "expected": "1 2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-ex-pal",
    "title": "课后 12：栈判断回文",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xg722hby8yvyr2i0",
        "blocks": [
          11
        ],
        "functions": [
          "pal"
        ]
      }
    ],
    "description": "按字符严格比较，区分大小写，空串为回文。",
    "input": "一整行字符串，允许空行。",
    "output": "输出题面指定结果。",
    "constraints": [
      "字符串长度≤100"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "\n",
        "expected": "YES\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：一整行字符串，允许空行。\n// 输出：输出题面指定结果。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=int;struct SeqList{int data[N];int len=0;};struct clNode{clNode *pre=nullptr,*next=nullptr;int data=0;};using ChainList=clNode*;using dChainList=ChainList;\nChainList mk(const vector<int>&a){auto h=new clNode;auto p=h;for(int x:a){p->next=new clNode;p->next->pre=p;p=p->next;p->data=x;}return h;}\nvoid pl(ChainList h){vector<int>v;for(auto p=h?h->next:nullptr;p;p=p->next)v.push_back(p->data);printv(v);}\n\nbool pal(string str){\n    stack<char> ss;\n    for(int i=0;i<(int)str.size();i++) ss.push(str[i]);\n    for(int j=0;j<(int)str.size();j++){\n        if(str[j]!=ss.top()) return false;\n        ss.pop();\n    }\n    return true;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring s;getline(cin,s);\ncout<<(pal(s)?\"YES\":\"NO\")<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "\n",
        "expected": "YES\n"
      },
      {
        "name": "测试 2",
        "stdin": "abca\n",
        "expected": "NO\n"
      },
      {
        "name": "测试 3",
        "stdin": "abccba\n",
        "expected": "YES\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-ex-check",
    "title": "课后 13：三类括号合法性",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xg722hby8yvyr2i0",
        "blocks": [
          12
        ],
        "functions": [
          "check"
        ]
      }
    ],
    "description": "检查 ()、[]、{} 的嵌套与配对，忽略其他字符。",
    "input": "一整行字符串，允许空行。",
    "output": "输出题面指定结果。",
    "constraints": [
      "字符串长度≤100"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "\n",
        "expected": "YES\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：一整行字符串，允许空行。\n// 输出：输出题面指定结果。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=int;struct SeqList{int data[N];int len=0;};struct clNode{clNode *pre=nullptr,*next=nullptr;int data=0;};using ChainList=clNode*;using dChainList=ChainList;\nChainList mk(const vector<int>&a){auto h=new clNode;auto p=h;for(int x:a){p->next=new clNode;p->next->pre=p;p=p->next;p->data=x;}return h;}\nvoid pl(ChainList h){vector<int>v;for(auto p=h?h->next:nullptr;p;p=p->next)v.push_back(p->data);printv(v);}\n\nbool check(string exp){\n    stack<char> ss;\n    for(int i=0;i<exp.size();i++){\n        if(exp[i]=='('||exp[i]=='['||exp[i]=='{') ss.push(exp[i]);\n        else{\n            if(exp[i]!=')'&&exp[i]!=']'&&exp[i]!='}') continue;\n            if(ss.empty()) return false;\n            char ch = ss.top();\n            if(exp[i]==')'&&ch!='(' || exp[i]==']'&&ch!='[' || exp[i]=='}'&&ch!='{') return false;\n            ss.pop();\n        }\n    }\n    if(!ss.empty()) return false;\n    return true;\n    \n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring s;getline(cin,s);\ncout<<(check(s)?\"YES\":\"NO\")<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "\n",
        "expected": "YES\n"
      },
      {
        "name": "测试 2",
        "stdin": "a{[()]}\n",
        "expected": "YES\n"
      },
      {
        "name": "测试 3",
        "stdin": "([)]\n",
        "expected": "NO\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-ex-convert",
    "title": "课后 14：整数进制转换",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xg722hby8yvyr2i0",
        "blocks": [
          13
        ],
        "functions": [
          "convert"
        ]
      }
    ],
    "description": "把十进制有符号整数转换为 2..36 进制，字母使用 A..Z；非法进制输出 INVALID。",
    "input": "整数 x 和进制 k。",
    "output": "输出题面指定结果。",
    "constraints": [
      "-2147483648≤x≤2147483647；0≤k≤40"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0 2\n",
        "expected": "0\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：整数 x 和进制 k。\n// 输出：输出题面指定结果。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=int;struct SeqList{int data[N];int len=0;};struct clNode{clNode *pre=nullptr,*next=nullptr;int data=0;};using ChainList=clNode*;using dChainList=ChainList;\nChainList mk(const vector<int>&a){auto h=new clNode;auto p=h;for(int x:a){p->next=new clNode;p->next->pre=p;p=p->next;p->data=x;}return h;}\nvoid pl(ChainList h){vector<int>v;for(auto p=h?h->next:nullptr;p;p=p->next)v.push_back(p->data);printv(v);}\n\nstring convert(int num,int k){\n    if(k<2 || k>36) return \"\";\n    if(num==0) return \"0\";\n    stack<char> ss;\n    long long value=num;\n    bool negative=value<0;\n    if(negative) value=-value;\n    while(value!=0){\n        int r=value%k;\n        char ch=(r<10)?'0'+r:'A'+r-10;\n        ss.push(ch);\n        value/=k;\n    }\n    string res=negative?\"-\":\"\";\n    while(!ss.empty()){\n        res+=ss.top();\n        ss.pop();\n    }\n    return res;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint x,k;cin>>x>>k;\nstring s=convert(x,k);cout<<(s.empty()?\"INVALID\":s)<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0 2\n",
        "expected": "0\n"
      },
      {
        "name": "测试 2",
        "stdin": "-2147483648 16\n",
        "expected": "-80000000\n"
      },
      {
        "name": "测试 3",
        "stdin": "35 36\n",
        "expected": "Z\n"
      },
      {
        "name": "测试 4",
        "stdin": "3 1\n",
        "expected": "INVALID\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-ex-building-span",
    "title": "课后 15：连续较矮建筑数量",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xg722hby8yvyr2i0",
        "blocks": [
          14
        ],
        "functions": [
          "f"
        ]
      }
    ],
    "description": "对每栋建筑，统计紧邻它左侧且连续严格更矮的建筑数量。相同高度阻断区间。",
    "input": "n；n 个高度。",
    "output": "按原顺序输出数量；n=0 输出 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个高度。\n// 输出：按原顺序输出数量；n=0 输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=int;struct SeqList{int data[N];int len=0;};struct clNode{clNode *pre=nullptr,*next=nullptr;int data=0;};using ChainList=clNode*;using dChainList=ChainList;\nChainList mk(const vector<int>&a){auto h=new clNode;auto p=h;for(int x:a){p->next=new clNode;p->next->pre=p;p=p->next;p->data=x;}return h;}\nvoid pl(ChainList h){vector<int>v;for(auto p=h?h->next:nullptr;p;p=p->next)v.push_back(p->data);printv(v);}\n\nvoid f(int h[],int s[],int n){\nstack<int> st;\nfor (int i = 1; i <= n; i++) {\n        while (!st.empty() && h[st.top()] < h[i]) {\n            st.pop();\n        }\n\n        if (st.empty()) {\n            s[i] = i - 1;\n        } else {\n            int j = st.top();\n            s[i] = i - j - 1;\n        }\n\n        st.push(i);\n    }\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;\nvector<int>h(n+1),v(n+1);for(int i=1;i<=n;i++)h[i]=a[i-1];f(h.data(),v.data(),n);printv(vector<int>(v.begin()+1,v.end()));\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "3\n2 2 3\n",
        "expected": "0 0 2\n"
      },
      {
        "name": "测试 3",
        "stdin": "4\n3 1 2 4\n",
        "expected": "0 0 1 3\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-practice-sl_merge",
    "title": "练习程序：顺序表复制拼接",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xfaary207gmrfvvu",
        "blocks": [
          0
        ],
        "functions": [
          "sl_merge"
        ]
      }
    ],
    "description": "复制拼接两个输入表，保持各自顺序，不排序，也不改变原表。",
    "input": "n m；第一表 n 个数；第二表 m 个数。",
    "output": "输出新表，空为 EMPTY。",
    "constraints": [
      "0≤n,m≤25，n+m≤50；值 [-100,100]"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "2 1\n1 2\n3\n",
        "expected": "1 2 3\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；第一表 n 个数；第二表 m 个数。\n// 输出：输出新表，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n#define N 50\n#include<iostream>\nusing namespace std;\ntypedef int datatype;\ntypedef int elementtype;\ntypedef struct slNode{\n    datatype data[N];\n    int len;\n    slNode():len(0){}\n} SeqList;\ntypedef struct clNode{\n    clNode * pre;\n    clNode * next;\n    datatype data;\n    clNode():pre(NULL),next(NULL){}\n} * DList;\ntypedef struct cNode{\n    cNode * next;\n    datatype data;\n    cNode():next(NULL){}\n}*ChainList;\n//把顺序表sl2合并到sl1后面 \nSeqList sl_merge(SeqList &sl1,SeqList &sl2){\n    SeqList C;\n    if(sl1.len + sl2.len > N)\n        return C;\n    for(int i=0;i<sl1.len;i++){\n        C.data[i]=sl1.data[i];\n    }    \n    C.len+=sl1.len;\n    for(int j=0;j<sl2.len;j++){\n        C.data[sl1.len+j]=sl2.data[j];\n    }\n    C.len+=sl2.len;\n    return C;\n}\n//把链表sl2合并到sl1后面\nDList cl_merge(DList &cl1, DList &cl2){\n    DList C = new clNode; \n    clNode *p = C;\n    clNode *q = cl1->next;\n    while(q != NULL){\n        p->next = new clNode;\n        p->next->data = q->data;\n        p->next->pre = p;\n        p = p->next;\n        q = q->next;\n    }\n    q = cl2->next;\n    while(q != NULL){\n        p->next = new clNode;\n        p->next->data = q->data;\n        p->next->pre = p;\n        p = p->next;\n        q = q->next;\n    }\n    return C;\n}\n\n\nChainList cl_copy(ChainList cl1){\n    ChainList cl2 = new cNode;\n    cNode *p=cl2;\n    cNode *q=cl1->next;\n    while(q!=NULL){\n        p->next = new cNode;\n        p->next->data=q->data;\n        p=p->next;\n        q=q->next;\n    }\n    return cl2;\n}\n\nint Delete(ChainList &cl1,int x){\n    if(cl1==NULL) return -1;\n    ChainList h = cl1;\n    int pos = 1;\n    while(h->next!=NULL && h->next->data!=x){\n        h=h->next;\n        pos ++;\n    }\n    if(h->next==NULL){\n        return -1;\n    }\n    ChainList q = h->next;\n    h->next = q->next;\n    delete q;\n    return pos;\n}\n\ntypedef struct pNode{\n    int coef;\n    int exp;\n    pNode * next;\n    pNode():next(NULL){}\n}*Poly;\n\nPoly Add(Poly A,Poly B){\n    Poly C=new pNode,r=C;\n    Poly p=A->next,q=B->next;\n    while(p!=NULL&&q!=NULL){\n        Poly s=new pNode;\n        if(p->exp>q->exp){\n            s->coef=p->coef;\n            s->exp=p->exp;\n            p=p->next;\n        }\n        else if(p->exp<q->exp){\n            s->coef=q->coef;\n            s->exp=q->exp;\n            q=q->next;\n        }\n        else{\n            s->coef=p->coef+q->coef;\n            s->exp=p->exp;\n            p=p->next;\n            q=q->next;\n            if(s->coef==0){\n            delete s;continue;\n        }\n        }\n        r->next=s;r=s;\n    }\n    while(p!=NULL){\n        r->next=new pNode;\n        r=r->next;\n        r->coef=p->coef;\n        r->exp=p->exp;\n        p=p->next;\n    }\n    while(q!=NULL){\n        r->next=new pNode;\n        r=r->next;\n        r->coef=q->coef;\n        r->exp=q->exp;\n        q=q->next;\n    }\n    return C;\n}\nPoly Mul(Poly A,Poly B){\n    Poly C=new pNode;\n    Poly p=A->next;\n    while(p!=NULL){\n        Poly q=B->next;\n        while(q!=NULL){\n            int coef=p->coef*q->coef,exp=p->exp+q->exp;\n            Poly r=C;\n            while(r->next!=NULL&&r->next->exp>exp) r=r->next;\n            if(r->next!=NULL&&r->next->exp==exp){\n                r->next->coef+=coef;\n                if(r->next->coef==0){\n                    Poly s=r->next;\n                    r->next=s->next;\n                    delete s;\n                }\n            }\n            else{\n                Poly s=new pNode;\n                s->coef=coef;s->exp=exp;\n                s->next=r->next;r->next=s;\n            }\n            q=q->next;\n        }\n        p=p->next;\n    }\n    return C;\n}\n\nint swap(elementtype x,DList &h){\n    if(h==NULL) return 0;\n    DList p=h;\n    while(p->next!=NULL && p->next->data!=x){\n        p=p->next;\n    }\n    if(p->next==NULL) return 0;\n    else{\n        if(p==h) return 1;\n        else{\n            DList q = p->next;\n            p->next = q->next;\n            if(q->next!=NULL) q->next->pre=p;\n            q->next = p;\n            q->pre = p->pre;\n            q->pre->next = q;\n            p->pre=q;\n            return 1;\n        }\n    }\n}\n\nDList mkd(const vector<int>&a){auto h=new clNode,p=h;for(int x:a){p->next=new clNode;p->next->pre=p;p=p->next;p->data=x;}return h;}\nChainList mks(const vector<int>&a){auto h=new cNode,p=h;for(int x:a){p->next=new cNode;p=p->next;p->data=x;}return h;}\nvoid pd(DList h){vector<int>v;for(auto p=h->next;p;p=p->next)v.push_back(p->data);printv(v);}\nvoid ps(ChainList h){vector<int>v;for(auto p=h->next;p;p=p->next)v.push_back(p->data);printv(v);}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<int>a(n),z(m);for(int&x:a)cin>>x;for(int&x:z)cin>>x;\nSeqList x,y;for(int v:a)x.data[x.len++]=v;for(int v:z)y.data[y.len++]=v;auto t=sl_merge(x,y);printv(vector<int>(t.data,t.data+t.len));\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "2 1\n1 2\n3\n",
        "expected": "1 2 3\n"
      },
      {
        "name": "测试 2",
        "stdin": "0 1\n\n-2\n",
        "expected": "-2\n"
      },
      {
        "name": "测试 3",
        "stdin": "2 0\n2 2\n\n",
        "expected": "2 2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-practice-cl_merge",
    "title": "练习程序：双向链表复制拼接",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xfaary207gmrfvvu",
        "blocks": [
          0
        ],
        "functions": [
          "cl_merge"
        ]
      }
    ],
    "description": "复制拼接两个输入表，保持各自顺序，不排序，也不改变原表。",
    "input": "n m；第一表 n 个数；第二表 m 个数。",
    "output": "输出新表，空为 EMPTY。",
    "constraints": [
      "0≤n,m≤25，n+m≤50；值 [-100,100]"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "2 1\n1 2\n3\n",
        "expected": "1 2 3\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；第一表 n 个数；第二表 m 个数。\n// 输出：输出新表，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n#define N 50\n#include<iostream>\nusing namespace std;\ntypedef int datatype;\ntypedef int elementtype;\ntypedef struct slNode{\n    datatype data[N];\n    int len;\n    slNode():len(0){}\n} SeqList;\ntypedef struct clNode{\n    clNode * pre;\n    clNode * next;\n    datatype data;\n    clNode():pre(NULL),next(NULL){}\n} * DList;\ntypedef struct cNode{\n    cNode * next;\n    datatype data;\n    cNode():next(NULL){}\n}*ChainList;\n//把顺序表sl2合并到sl1后面 \nSeqList sl_merge(SeqList &sl1,SeqList &sl2){\n    SeqList C;\n    if(sl1.len + sl2.len > N)\n        return C;\n    for(int i=0;i<sl1.len;i++){\n        C.data[i]=sl1.data[i];\n    }    \n    C.len+=sl1.len;\n    for(int j=0;j<sl2.len;j++){\n        C.data[sl1.len+j]=sl2.data[j];\n    }\n    C.len+=sl2.len;\n    return C;\n}\n//把链表sl2合并到sl1后面\nDList cl_merge(DList &cl1, DList &cl2){\n    DList C = new clNode; \n    clNode *p = C;\n    clNode *q = cl1->next;\n    while(q != NULL){\n        p->next = new clNode;\n        p->next->data = q->data;\n        p->next->pre = p;\n        p = p->next;\n        q = q->next;\n    }\n    q = cl2->next;\n    while(q != NULL){\n        p->next = new clNode;\n        p->next->data = q->data;\n        p->next->pre = p;\n        p = p->next;\n        q = q->next;\n    }\n    return C;\n}\n\n\nChainList cl_copy(ChainList cl1){\n    ChainList cl2 = new cNode;\n    cNode *p=cl2;\n    cNode *q=cl1->next;\n    while(q!=NULL){\n        p->next = new cNode;\n        p->next->data=q->data;\n        p=p->next;\n        q=q->next;\n    }\n    return cl2;\n}\n\nint Delete(ChainList &cl1,int x){\n    if(cl1==NULL) return -1;\n    ChainList h = cl1;\n    int pos = 1;\n    while(h->next!=NULL && h->next->data!=x){\n        h=h->next;\n        pos ++;\n    }\n    if(h->next==NULL){\n        return -1;\n    }\n    ChainList q = h->next;\n    h->next = q->next;\n    delete q;\n    return pos;\n}\n\ntypedef struct pNode{\n    int coef;\n    int exp;\n    pNode * next;\n    pNode():next(NULL){}\n}*Poly;\n\nPoly Add(Poly A,Poly B){\n    Poly C=new pNode,r=C;\n    Poly p=A->next,q=B->next;\n    while(p!=NULL&&q!=NULL){\n        Poly s=new pNode;\n        if(p->exp>q->exp){\n            s->coef=p->coef;\n            s->exp=p->exp;\n            p=p->next;\n        }\n        else if(p->exp<q->exp){\n            s->coef=q->coef;\n            s->exp=q->exp;\n            q=q->next;\n        }\n        else{\n            s->coef=p->coef+q->coef;\n            s->exp=p->exp;\n            p=p->next;\n            q=q->next;\n            if(s->coef==0){\n            delete s;continue;\n        }\n        }\n        r->next=s;r=s;\n    }\n    while(p!=NULL){\n        r->next=new pNode;\n        r=r->next;\n        r->coef=p->coef;\n        r->exp=p->exp;\n        p=p->next;\n    }\n    while(q!=NULL){\n        r->next=new pNode;\n        r=r->next;\n        r->coef=q->coef;\n        r->exp=q->exp;\n        q=q->next;\n    }\n    return C;\n}\nPoly Mul(Poly A,Poly B){\n    Poly C=new pNode;\n    Poly p=A->next;\n    while(p!=NULL){\n        Poly q=B->next;\n        while(q!=NULL){\n            int coef=p->coef*q->coef,exp=p->exp+q->exp;\n            Poly r=C;\n            while(r->next!=NULL&&r->next->exp>exp) r=r->next;\n            if(r->next!=NULL&&r->next->exp==exp){\n                r->next->coef+=coef;\n                if(r->next->coef==0){\n                    Poly s=r->next;\n                    r->next=s->next;\n                    delete s;\n                }\n            }\n            else{\n                Poly s=new pNode;\n                s->coef=coef;s->exp=exp;\n                s->next=r->next;r->next=s;\n            }\n            q=q->next;\n        }\n        p=p->next;\n    }\n    return C;\n}\n\nint swap(elementtype x,DList &h){\n    if(h==NULL) return 0;\n    DList p=h;\n    while(p->next!=NULL && p->next->data!=x){\n        p=p->next;\n    }\n    if(p->next==NULL) return 0;\n    else{\n        if(p==h) return 1;\n        else{\n            DList q = p->next;\n            p->next = q->next;\n            if(q->next!=NULL) q->next->pre=p;\n            q->next = p;\n            q->pre = p->pre;\n            q->pre->next = q;\n            p->pre=q;\n            return 1;\n        }\n    }\n}\n\nDList mkd(const vector<int>&a){auto h=new clNode,p=h;for(int x:a){p->next=new clNode;p->next->pre=p;p=p->next;p->data=x;}return h;}\nChainList mks(const vector<int>&a){auto h=new cNode,p=h;for(int x:a){p->next=new cNode;p=p->next;p->data=x;}return h;}\nvoid pd(DList h){vector<int>v;for(auto p=h->next;p;p=p->next)v.push_back(p->data);printv(v);}\nvoid ps(ChainList h){vector<int>v;for(auto p=h->next;p;p=p->next)v.push_back(p->data);printv(v);}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<int>a(n),z(m);for(int&x:a)cin>>x;for(int&x:z)cin>>x;\nauto x=mkd(a),y=mkd(z);pd(cl_merge(x,y));\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "2 1\n1 2\n3\n",
        "expected": "1 2 3\n"
      },
      {
        "name": "测试 2",
        "stdin": "0 1\n\n-2\n",
        "expected": "-2\n"
      },
      {
        "name": "测试 3",
        "stdin": "2 0\n2 2\n\n",
        "expected": "2 2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-practice-copy",
    "title": "练习程序：单链表深复制",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xfaary207gmrfvvu",
        "blocks": [
          0
        ],
        "functions": [
          "cl_copy"
        ]
      }
    ],
    "description": "分配全新的数据结点复制链表。复制后把原表第一个值改成 999，复制表仍应保留原值。",
    "input": "n；n 个整数。",
    "output": "输出复制表原有内容，空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数。\n// 输出：输出复制表原有内容，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n#define N 50\n#include<iostream>\nusing namespace std;\ntypedef int datatype;\ntypedef int elementtype;\ntypedef struct slNode{\n    datatype data[N];\n    int len;\n    slNode():len(0){}\n} SeqList;\ntypedef struct clNode{\n    clNode * pre;\n    clNode * next;\n    datatype data;\n    clNode():pre(NULL),next(NULL){}\n} * DList;\ntypedef struct cNode{\n    cNode * next;\n    datatype data;\n    cNode():next(NULL){}\n}*ChainList;\n//把顺序表sl2合并到sl1后面 \nSeqList sl_merge(SeqList &sl1,SeqList &sl2){\n    SeqList C;\n    if(sl1.len + sl2.len > N)\n        return C;\n    for(int i=0;i<sl1.len;i++){\n        C.data[i]=sl1.data[i];\n    }    \n    C.len+=sl1.len;\n    for(int j=0;j<sl2.len;j++){\n        C.data[sl1.len+j]=sl2.data[j];\n    }\n    C.len+=sl2.len;\n    return C;\n}\n//把链表sl2合并到sl1后面\nDList cl_merge(DList &cl1, DList &cl2){\n    DList C = new clNode; \n    clNode *p = C;\n    clNode *q = cl1->next;\n    while(q != NULL){\n        p->next = new clNode;\n        p->next->data = q->data;\n        p->next->pre = p;\n        p = p->next;\n        q = q->next;\n    }\n    q = cl2->next;\n    while(q != NULL){\n        p->next = new clNode;\n        p->next->data = q->data;\n        p->next->pre = p;\n        p = p->next;\n        q = q->next;\n    }\n    return C;\n}\n\n\nChainList cl_copy(ChainList cl1){\n    ChainList cl2 = new cNode;\n    cNode *p=cl2;\n    cNode *q=cl1->next;\n    while(q!=NULL){\n        p->next = new cNode;\n        p->next->data=q->data;\n        p=p->next;\n        q=q->next;\n    }\n    return cl2;\n}\n\nint Delete(ChainList &cl1,int x){\n    if(cl1==NULL) return -1;\n    ChainList h = cl1;\n    int pos = 1;\n    while(h->next!=NULL && h->next->data!=x){\n        h=h->next;\n        pos ++;\n    }\n    if(h->next==NULL){\n        return -1;\n    }\n    ChainList q = h->next;\n    h->next = q->next;\n    delete q;\n    return pos;\n}\n\ntypedef struct pNode{\n    int coef;\n    int exp;\n    pNode * next;\n    pNode():next(NULL){}\n}*Poly;\n\nPoly Add(Poly A,Poly B){\n    Poly C=new pNode,r=C;\n    Poly p=A->next,q=B->next;\n    while(p!=NULL&&q!=NULL){\n        Poly s=new pNode;\n        if(p->exp>q->exp){\n            s->coef=p->coef;\n            s->exp=p->exp;\n            p=p->next;\n        }\n        else if(p->exp<q->exp){\n            s->coef=q->coef;\n            s->exp=q->exp;\n            q=q->next;\n        }\n        else{\n            s->coef=p->coef+q->coef;\n            s->exp=p->exp;\n            p=p->next;\n            q=q->next;\n            if(s->coef==0){\n            delete s;continue;\n        }\n        }\n        r->next=s;r=s;\n    }\n    while(p!=NULL){\n        r->next=new pNode;\n        r=r->next;\n        r->coef=p->coef;\n        r->exp=p->exp;\n        p=p->next;\n    }\n    while(q!=NULL){\n        r->next=new pNode;\n        r=r->next;\n        r->coef=q->coef;\n        r->exp=q->exp;\n        q=q->next;\n    }\n    return C;\n}\nPoly Mul(Poly A,Poly B){\n    Poly C=new pNode;\n    Poly p=A->next;\n    while(p!=NULL){\n        Poly q=B->next;\n        while(q!=NULL){\n            int coef=p->coef*q->coef,exp=p->exp+q->exp;\n            Poly r=C;\n            while(r->next!=NULL&&r->next->exp>exp) r=r->next;\n            if(r->next!=NULL&&r->next->exp==exp){\n                r->next->coef+=coef;\n                if(r->next->coef==0){\n                    Poly s=r->next;\n                    r->next=s->next;\n                    delete s;\n                }\n            }\n            else{\n                Poly s=new pNode;\n                s->coef=coef;s->exp=exp;\n                s->next=r->next;r->next=s;\n            }\n            q=q->next;\n        }\n        p=p->next;\n    }\n    return C;\n}\n\nint swap(elementtype x,DList &h){\n    if(h==NULL) return 0;\n    DList p=h;\n    while(p->next!=NULL && p->next->data!=x){\n        p=p->next;\n    }\n    if(p->next==NULL) return 0;\n    else{\n        if(p==h) return 1;\n        else{\n            DList q = p->next;\n            p->next = q->next;\n            if(q->next!=NULL) q->next->pre=p;\n            q->next = p;\n            q->pre = p->pre;\n            q->pre->next = q;\n            p->pre=q;\n            return 1;\n        }\n    }\n}\n\nDList mkd(const vector<int>&a){auto h=new clNode,p=h;for(int x:a){p->next=new clNode;p->next->pre=p;p=p->next;p->data=x;}return h;}\nChainList mks(const vector<int>&a){auto h=new cNode,p=h;for(int x:a){p->next=new cNode;p=p->next;p->data=x;}return h;}\nvoid pd(DList h){vector<int>v;for(auto p=h->next;p;p=p->next)v.push_back(p->data);printv(v);}\nvoid ps(ChainList h){vector<int>v;for(auto p=h->next;p;p=p->next)v.push_back(p->data);printv(v);}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;auto h=mks(a);\nauto c=cl_copy(h);if(h->next)h->next->data=999;ps(c);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n1\n",
        "expected": "1\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 3 -2\n",
        "expected": "-2 3 -2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-practice-delete",
    "title": "练习程序：单链表按值删除并返回位置",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xfaary207gmrfvvu",
        "blocks": [
          0
        ],
        "functions": [
          "Delete"
        ]
      }
    ],
    "description": "删除第一个等于 x 的结点，并返回它原本从 1 开始的位置；找不到返回 -1。",
    "input": "n；n 个整数；x。",
    "output": "先输出位置，再输出剩余表，空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n2\n",
        "expected": "-1\nEMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；x。\n// 输出：先输出位置，再输出剩余表，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n#define N 50\n#include<iostream>\nusing namespace std;\ntypedef int datatype;\ntypedef int elementtype;\ntypedef struct slNode{\n    datatype data[N];\n    int len;\n    slNode():len(0){}\n} SeqList;\ntypedef struct clNode{\n    clNode * pre;\n    clNode * next;\n    datatype data;\n    clNode():pre(NULL),next(NULL){}\n} * DList;\ntypedef struct cNode{\n    cNode * next;\n    datatype data;\n    cNode():next(NULL){}\n}*ChainList;\n//把顺序表sl2合并到sl1后面 \nSeqList sl_merge(SeqList &sl1,SeqList &sl2){\n    SeqList C;\n    if(sl1.len + sl2.len > N)\n        return C;\n    for(int i=0;i<sl1.len;i++){\n        C.data[i]=sl1.data[i];\n    }    \n    C.len+=sl1.len;\n    for(int j=0;j<sl2.len;j++){\n        C.data[sl1.len+j]=sl2.data[j];\n    }\n    C.len+=sl2.len;\n    return C;\n}\n//把链表sl2合并到sl1后面\nDList cl_merge(DList &cl1, DList &cl2){\n    DList C = new clNode; \n    clNode *p = C;\n    clNode *q = cl1->next;\n    while(q != NULL){\n        p->next = new clNode;\n        p->next->data = q->data;\n        p->next->pre = p;\n        p = p->next;\n        q = q->next;\n    }\n    q = cl2->next;\n    while(q != NULL){\n        p->next = new clNode;\n        p->next->data = q->data;\n        p->next->pre = p;\n        p = p->next;\n        q = q->next;\n    }\n    return C;\n}\n\n\nChainList cl_copy(ChainList cl1){\n    ChainList cl2 = new cNode;\n    cNode *p=cl2;\n    cNode *q=cl1->next;\n    while(q!=NULL){\n        p->next = new cNode;\n        p->next->data=q->data;\n        p=p->next;\n        q=q->next;\n    }\n    return cl2;\n}\n\nint Delete(ChainList &cl1,int x){\n    if(cl1==NULL) return -1;\n    ChainList h = cl1;\n    int pos = 1;\n    while(h->next!=NULL && h->next->data!=x){\n        h=h->next;\n        pos ++;\n    }\n    if(h->next==NULL){\n        return -1;\n    }\n    ChainList q = h->next;\n    h->next = q->next;\n    delete q;\n    return pos;\n}\n\ntypedef struct pNode{\n    int coef;\n    int exp;\n    pNode * next;\n    pNode():next(NULL){}\n}*Poly;\n\nPoly Add(Poly A,Poly B){\n    Poly C=new pNode,r=C;\n    Poly p=A->next,q=B->next;\n    while(p!=NULL&&q!=NULL){\n        Poly s=new pNode;\n        if(p->exp>q->exp){\n            s->coef=p->coef;\n            s->exp=p->exp;\n            p=p->next;\n        }\n        else if(p->exp<q->exp){\n            s->coef=q->coef;\n            s->exp=q->exp;\n            q=q->next;\n        }\n        else{\n            s->coef=p->coef+q->coef;\n            s->exp=p->exp;\n            p=p->next;\n            q=q->next;\n            if(s->coef==0){\n            delete s;continue;\n        }\n        }\n        r->next=s;r=s;\n    }\n    while(p!=NULL){\n        r->next=new pNode;\n        r=r->next;\n        r->coef=p->coef;\n        r->exp=p->exp;\n        p=p->next;\n    }\n    while(q!=NULL){\n        r->next=new pNode;\n        r=r->next;\n        r->coef=q->coef;\n        r->exp=q->exp;\n        q=q->next;\n    }\n    return C;\n}\nPoly Mul(Poly A,Poly B){\n    Poly C=new pNode;\n    Poly p=A->next;\n    while(p!=NULL){\n        Poly q=B->next;\n        while(q!=NULL){\n            int coef=p->coef*q->coef,exp=p->exp+q->exp;\n            Poly r=C;\n            while(r->next!=NULL&&r->next->exp>exp) r=r->next;\n            if(r->next!=NULL&&r->next->exp==exp){\n                r->next->coef+=coef;\n                if(r->next->coef==0){\n                    Poly s=r->next;\n                    r->next=s->next;\n                    delete s;\n                }\n            }\n            else{\n                Poly s=new pNode;\n                s->coef=coef;s->exp=exp;\n                s->next=r->next;r->next=s;\n            }\n            q=q->next;\n        }\n        p=p->next;\n    }\n    return C;\n}\n\nint swap(elementtype x,DList &h){\n    if(h==NULL) return 0;\n    DList p=h;\n    while(p->next!=NULL && p->next->data!=x){\n        p=p->next;\n    }\n    if(p->next==NULL) return 0;\n    else{\n        if(p==h) return 1;\n        else{\n            DList q = p->next;\n            p->next = q->next;\n            if(q->next!=NULL) q->next->pre=p;\n            q->next = p;\n            q->pre = p->pre;\n            q->pre->next = q;\n            p->pre=q;\n            return 1;\n        }\n    }\n}\n\nDList mkd(const vector<int>&a){auto h=new clNode,p=h;for(int x:a){p->next=new clNode;p->next->pre=p;p=p->next;p->data=x;}return h;}\nChainList mks(const vector<int>&a){auto h=new cNode,p=h;for(int x:a){p->next=new cNode;p=p->next;p->data=x;}return h;}\nvoid pd(DList h){vector<int>v;for(auto p=h->next;p;p=p->next)v.push_back(p->data);printv(v);}\nvoid ps(ChainList h){vector<int>v;for(auto p=h->next;p;p=p->next)v.push_back(p->data);printv(v);}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;auto h=mks(a);int x;cin>>x;\ncout<<Delete(h,x)<<\"\\n\";ps(h);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n2\n",
        "expected": "-1\nEMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "3\n2 3 2\n2\n",
        "expected": "1\n3 2\n"
      },
      {
        "name": "测试 3",
        "stdin": "2\n1 2\n8\n",
        "expected": "-1\n1 2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-practice-swap",
    "title": "练习程序：双向链表相邻交换",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xfaary207gmrfvvu",
        "blocks": [
          0
        ],
        "functions": [
          "swap"
        ]
      }
    ],
    "description": "找到首个 x，将它与前一数据结点交换。找到且已是首元素时返回 1、表不变；未找到返回 0。",
    "input": "n；n 个整数；x。",
    "output": "先输出返回标志，再输出链表；空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n2\n",
        "expected": "0\nEMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；x。\n// 输出：先输出返回标志，再输出链表；空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n#define N 50\n#include<iostream>\nusing namespace std;\ntypedef int datatype;\ntypedef int elementtype;\ntypedef struct slNode{\n    datatype data[N];\n    int len;\n    slNode():len(0){}\n} SeqList;\ntypedef struct clNode{\n    clNode * pre;\n    clNode * next;\n    datatype data;\n    clNode():pre(NULL),next(NULL){}\n} * DList;\ntypedef struct cNode{\n    cNode * next;\n    datatype data;\n    cNode():next(NULL){}\n}*ChainList;\n//把顺序表sl2合并到sl1后面 \nSeqList sl_merge(SeqList &sl1,SeqList &sl2){\n    SeqList C;\n    if(sl1.len + sl2.len > N)\n        return C;\n    for(int i=0;i<sl1.len;i++){\n        C.data[i]=sl1.data[i];\n    }    \n    C.len+=sl1.len;\n    for(int j=0;j<sl2.len;j++){\n        C.data[sl1.len+j]=sl2.data[j];\n    }\n    C.len+=sl2.len;\n    return C;\n}\n//把链表sl2合并到sl1后面\nDList cl_merge(DList &cl1, DList &cl2){\n    DList C = new clNode; \n    clNode *p = C;\n    clNode *q = cl1->next;\n    while(q != NULL){\n        p->next = new clNode;\n        p->next->data = q->data;\n        p->next->pre = p;\n        p = p->next;\n        q = q->next;\n    }\n    q = cl2->next;\n    while(q != NULL){\n        p->next = new clNode;\n        p->next->data = q->data;\n        p->next->pre = p;\n        p = p->next;\n        q = q->next;\n    }\n    return C;\n}\n\n\nChainList cl_copy(ChainList cl1){\n    ChainList cl2 = new cNode;\n    cNode *p=cl2;\n    cNode *q=cl1->next;\n    while(q!=NULL){\n        p->next = new cNode;\n        p->next->data=q->data;\n        p=p->next;\n        q=q->next;\n    }\n    return cl2;\n}\n\nint Delete(ChainList &cl1,int x){\n    if(cl1==NULL) return -1;\n    ChainList h = cl1;\n    int pos = 1;\n    while(h->next!=NULL && h->next->data!=x){\n        h=h->next;\n        pos ++;\n    }\n    if(h->next==NULL){\n        return -1;\n    }\n    ChainList q = h->next;\n    h->next = q->next;\n    delete q;\n    return pos;\n}\n\ntypedef struct pNode{\n    int coef;\n    int exp;\n    pNode * next;\n    pNode():next(NULL){}\n}*Poly;\n\nPoly Add(Poly A,Poly B){\n    Poly C=new pNode,r=C;\n    Poly p=A->next,q=B->next;\n    while(p!=NULL&&q!=NULL){\n        Poly s=new pNode;\n        if(p->exp>q->exp){\n            s->coef=p->coef;\n            s->exp=p->exp;\n            p=p->next;\n        }\n        else if(p->exp<q->exp){\n            s->coef=q->coef;\n            s->exp=q->exp;\n            q=q->next;\n        }\n        else{\n            s->coef=p->coef+q->coef;\n            s->exp=p->exp;\n            p=p->next;\n            q=q->next;\n            if(s->coef==0){\n            delete s;continue;\n        }\n        }\n        r->next=s;r=s;\n    }\n    while(p!=NULL){\n        r->next=new pNode;\n        r=r->next;\n        r->coef=p->coef;\n        r->exp=p->exp;\n        p=p->next;\n    }\n    while(q!=NULL){\n        r->next=new pNode;\n        r=r->next;\n        r->coef=q->coef;\n        r->exp=q->exp;\n        q=q->next;\n    }\n    return C;\n}\nPoly Mul(Poly A,Poly B){\n    Poly C=new pNode;\n    Poly p=A->next;\n    while(p!=NULL){\n        Poly q=B->next;\n        while(q!=NULL){\n            int coef=p->coef*q->coef,exp=p->exp+q->exp;\n            Poly r=C;\n            while(r->next!=NULL&&r->next->exp>exp) r=r->next;\n            if(r->next!=NULL&&r->next->exp==exp){\n                r->next->coef+=coef;\n                if(r->next->coef==0){\n                    Poly s=r->next;\n                    r->next=s->next;\n                    delete s;\n                }\n            }\n            else{\n                Poly s=new pNode;\n                s->coef=coef;s->exp=exp;\n                s->next=r->next;r->next=s;\n            }\n            q=q->next;\n        }\n        p=p->next;\n    }\n    return C;\n}\n\nint swap(elementtype x,DList &h){\n    if(h==NULL) return 0;\n    DList p=h;\n    while(p->next!=NULL && p->next->data!=x){\n        p=p->next;\n    }\n    if(p->next==NULL) return 0;\n    else{\n        if(p==h) return 1;\n        else{\n            DList q = p->next;\n            p->next = q->next;\n            if(q->next!=NULL) q->next->pre=p;\n            q->next = p;\n            q->pre = p->pre;\n            q->pre->next = q;\n            p->pre=q;\n            return 1;\n        }\n    }\n}\n\nDList mkd(const vector<int>&a){auto h=new clNode,p=h;for(int x:a){p->next=new clNode;p->next->pre=p;p=p->next;p->data=x;}return h;}\nChainList mks(const vector<int>&a){auto h=new cNode,p=h;for(int x:a){p->next=new cNode;p=p->next;p->data=x;}return h;}\nvoid pd(DList h){vector<int>v;for(auto p=h->next;p;p=p->next)v.push_back(p->data);printv(v);}\nvoid ps(ChainList h){vector<int>v;for(auto p=h->next;p;p=p->next)v.push_back(p->data);printv(v);}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;auto h=mkd(a);int x;cin>>x;\ncout<<swap(x,h)<<\"\\n\";pd(h);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n2\n",
        "expected": "0\nEMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "3\n1 2 3\n3\n",
        "expected": "1\n1 3 2\n"
      },
      {
        "name": "测试 3",
        "stdin": "2\n2 2\n2\n",
        "expected": "1\n2 2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-practice-poly-add",
    "title": "练习程序：多项式加法",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xfaary207gmrfvvu",
        "blocks": [
          0
        ],
        "functions": [
          "Add"
        ]
      }
    ],
    "description": "两个多项式按指数降序存储，归并相同指数并相加系数。系数为 0 的结果项不输出。",
    "input": "n m；随后 A 的 n 项和 B 的 m 项，每项输入“系数 指数”。",
    "output": "首行非零项数量；随后按指数降序输出“系数 指数”。零多项式仅输出 0。",
    "constraints": [
      "0≤n,m≤8；单个多项式指数严格降序且互异",
      "系数为 [-10,10] 非零整数；指数 0..10"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "2 2\n2 2\n1 0\n3 1\n-1 0\n",
        "expected": "2\n2 2\n3 1\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；随后 A 的 n 项和 B 的 m 项，每项输入“系数 指数”。\n// 输出：首行非零项数量；随后按指数降序输出“系数 指数”。零多项式仅输出 0。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n#define N 50\n#include<iostream>\nusing namespace std;\ntypedef int datatype;\ntypedef int elementtype;\ntypedef struct slNode{\n    datatype data[N];\n    int len;\n    slNode():len(0){}\n} SeqList;\ntypedef struct clNode{\n    clNode * pre;\n    clNode * next;\n    datatype data;\n    clNode():pre(NULL),next(NULL){}\n} * DList;\ntypedef struct cNode{\n    cNode * next;\n    datatype data;\n    cNode():next(NULL){}\n}*ChainList;\n//把顺序表sl2合并到sl1后面 \nSeqList sl_merge(SeqList &sl1,SeqList &sl2){\n    SeqList C;\n    if(sl1.len + sl2.len > N)\n        return C;\n    for(int i=0;i<sl1.len;i++){\n        C.data[i]=sl1.data[i];\n    }    \n    C.len+=sl1.len;\n    for(int j=0;j<sl2.len;j++){\n        C.data[sl1.len+j]=sl2.data[j];\n    }\n    C.len+=sl2.len;\n    return C;\n}\n//把链表sl2合并到sl1后面\nDList cl_merge(DList &cl1, DList &cl2){\n    DList C = new clNode; \n    clNode *p = C;\n    clNode *q = cl1->next;\n    while(q != NULL){\n        p->next = new clNode;\n        p->next->data = q->data;\n        p->next->pre = p;\n        p = p->next;\n        q = q->next;\n    }\n    q = cl2->next;\n    while(q != NULL){\n        p->next = new clNode;\n        p->next->data = q->data;\n        p->next->pre = p;\n        p = p->next;\n        q = q->next;\n    }\n    return C;\n}\n\n\nChainList cl_copy(ChainList cl1){\n    ChainList cl2 = new cNode;\n    cNode *p=cl2;\n    cNode *q=cl1->next;\n    while(q!=NULL){\n        p->next = new cNode;\n        p->next->data=q->data;\n        p=p->next;\n        q=q->next;\n    }\n    return cl2;\n}\n\nint Delete(ChainList &cl1,int x){\n    if(cl1==NULL) return -1;\n    ChainList h = cl1;\n    int pos = 1;\n    while(h->next!=NULL && h->next->data!=x){\n        h=h->next;\n        pos ++;\n    }\n    if(h->next==NULL){\n        return -1;\n    }\n    ChainList q = h->next;\n    h->next = q->next;\n    delete q;\n    return pos;\n}\n\ntypedef struct pNode{\n    int coef;\n    int exp;\n    pNode * next;\n    pNode():next(NULL){}\n}*Poly;\n\nPoly Add(Poly A,Poly B){\n    Poly C=new pNode,r=C;\n    Poly p=A->next,q=B->next;\n    while(p!=NULL&&q!=NULL){\n        Poly s=new pNode;\n        if(p->exp>q->exp){\n            s->coef=p->coef;\n            s->exp=p->exp;\n            p=p->next;\n        }\n        else if(p->exp<q->exp){\n            s->coef=q->coef;\n            s->exp=q->exp;\n            q=q->next;\n        }\n        else{\n            s->coef=p->coef+q->coef;\n            s->exp=p->exp;\n            p=p->next;\n            q=q->next;\n            if(s->coef==0){\n            delete s;continue;\n        }\n        }\n        r->next=s;r=s;\n    }\n    while(p!=NULL){\n        r->next=new pNode;\n        r=r->next;\n        r->coef=p->coef;\n        r->exp=p->exp;\n        p=p->next;\n    }\n    while(q!=NULL){\n        r->next=new pNode;\n        r=r->next;\n        r->coef=q->coef;\n        r->exp=q->exp;\n        q=q->next;\n    }\n    return C;\n}\nPoly Mul(Poly A,Poly B){\n    Poly C=new pNode;\n    Poly p=A->next;\n    while(p!=NULL){\n        Poly q=B->next;\n        while(q!=NULL){\n            int coef=p->coef*q->coef,exp=p->exp+q->exp;\n            Poly r=C;\n            while(r->next!=NULL&&r->next->exp>exp) r=r->next;\n            if(r->next!=NULL&&r->next->exp==exp){\n                r->next->coef+=coef;\n                if(r->next->coef==0){\n                    Poly s=r->next;\n                    r->next=s->next;\n                    delete s;\n                }\n            }\n            else{\n                Poly s=new pNode;\n                s->coef=coef;s->exp=exp;\n                s->next=r->next;r->next=s;\n            }\n            q=q->next;\n        }\n        p=p->next;\n    }\n    return C;\n}\n\nint swap(elementtype x,DList &h){\n    if(h==NULL) return 0;\n    DList p=h;\n    while(p->next!=NULL && p->next->data!=x){\n        p=p->next;\n    }\n    if(p->next==NULL) return 0;\n    else{\n        if(p==h) return 1;\n        else{\n            DList q = p->next;\n            p->next = q->next;\n            if(q->next!=NULL) q->next->pre=p;\n            q->next = p;\n            q->pre = p->pre;\n            q->pre->next = q;\n            p->pre=q;\n            return 1;\n        }\n    }\n}\n\nDList mkd(const vector<int>&a){auto h=new clNode,p=h;for(int x:a){p->next=new clNode;p->next->pre=p;p=p->next;p->data=x;}return h;}\nChainList mks(const vector<int>&a){auto h=new cNode,p=h;for(int x:a){p->next=new cNode;p=p->next;p->data=x;}return h;}\nvoid pd(DList h){vector<int>v;for(auto p=h->next;p;p=p->next)v.push_back(p->data);printv(v);}\nvoid ps(ChainList h){vector<int>v;for(auto p=h->next;p;p=p->next)v.push_back(p->data);printv(v);}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;Poly a=new pNode,z=new pNode;auto p=a;for(int i=0;i<n;i++){p->next=new pNode;p=p->next;cin>>p->coef>>p->exp;}p=z;for(int i=0;i<m;i++){p->next=new pNode;p=p->next;cin>>p->coef>>p->exp;}\nauto c=Add(a,z);int k=0;for(auto p=c->next;p;p=p->next)k++;cout<<k<<\"\\n\";for(auto p=c->next;p;p=p->next)cout<<p->coef<<\" \"<<p->exp<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "2 2\n2 2\n1 0\n3 1\n-1 0\n",
        "expected": "2\n2 2\n3 1\n"
      },
      {
        "name": "测试 2",
        "stdin": "0 0\n",
        "expected": "0\n"
      },
      {
        "name": "测试 3",
        "stdin": "1 1\n1 1\n-1 1\n",
        "expected": "0\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-practice-poly-mul",
    "title": "练习程序：多项式乘法",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "xfaary207gmrfvvu",
        "blocks": [
          0
        ],
        "functions": [
          "Mul"
        ]
      }
    ],
    "description": "两个多项式按指数降序存储，逐项相乘并合并相同指数。系数为 0 的结果项不输出。",
    "input": "n m；随后 A 的 n 项和 B 的 m 项，每项输入“系数 指数”。",
    "output": "首行非零项数量；随后按指数降序输出“系数 指数”。零多项式仅输出 0。",
    "constraints": [
      "0≤n,m≤8；单个多项式指数严格降序且互异",
      "系数为 [-10,10] 非零整数；指数 0..10"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "2 2\n2 2\n1 0\n3 1\n-1 0\n",
        "expected": "4\n6 3\n-2 2\n3 1\n-1 0\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；随后 A 的 n 项和 B 的 m 项，每项输入“系数 指数”。\n// 输出：首行非零项数量；随后按指数降序输出“系数 指数”。零多项式仅输出 0。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n#define N 50\n#include<iostream>\nusing namespace std;\ntypedef int datatype;\ntypedef int elementtype;\ntypedef struct slNode{\n    datatype data[N];\n    int len;\n    slNode():len(0){}\n} SeqList;\ntypedef struct clNode{\n    clNode * pre;\n    clNode * next;\n    datatype data;\n    clNode():pre(NULL),next(NULL){}\n} * DList;\ntypedef struct cNode{\n    cNode * next;\n    datatype data;\n    cNode():next(NULL){}\n}*ChainList;\n//把顺序表sl2合并到sl1后面 \nSeqList sl_merge(SeqList &sl1,SeqList &sl2){\n    SeqList C;\n    if(sl1.len + sl2.len > N)\n        return C;\n    for(int i=0;i<sl1.len;i++){\n        C.data[i]=sl1.data[i];\n    }    \n    C.len+=sl1.len;\n    for(int j=0;j<sl2.len;j++){\n        C.data[sl1.len+j]=sl2.data[j];\n    }\n    C.len+=sl2.len;\n    return C;\n}\n//把链表sl2合并到sl1后面\nDList cl_merge(DList &cl1, DList &cl2){\n    DList C = new clNode; \n    clNode *p = C;\n    clNode *q = cl1->next;\n    while(q != NULL){\n        p->next = new clNode;\n        p->next->data = q->data;\n        p->next->pre = p;\n        p = p->next;\n        q = q->next;\n    }\n    q = cl2->next;\n    while(q != NULL){\n        p->next = new clNode;\n        p->next->data = q->data;\n        p->next->pre = p;\n        p = p->next;\n        q = q->next;\n    }\n    return C;\n}\n\n\nChainList cl_copy(ChainList cl1){\n    ChainList cl2 = new cNode;\n    cNode *p=cl2;\n    cNode *q=cl1->next;\n    while(q!=NULL){\n        p->next = new cNode;\n        p->next->data=q->data;\n        p=p->next;\n        q=q->next;\n    }\n    return cl2;\n}\n\nint Delete(ChainList &cl1,int x){\n    if(cl1==NULL) return -1;\n    ChainList h = cl1;\n    int pos = 1;\n    while(h->next!=NULL && h->next->data!=x){\n        h=h->next;\n        pos ++;\n    }\n    if(h->next==NULL){\n        return -1;\n    }\n    ChainList q = h->next;\n    h->next = q->next;\n    delete q;\n    return pos;\n}\n\ntypedef struct pNode{\n    int coef;\n    int exp;\n    pNode * next;\n    pNode():next(NULL){}\n}*Poly;\n\nPoly Add(Poly A,Poly B){\n    Poly C=new pNode,r=C;\n    Poly p=A->next,q=B->next;\n    while(p!=NULL&&q!=NULL){\n        Poly s=new pNode;\n        if(p->exp>q->exp){\n            s->coef=p->coef;\n            s->exp=p->exp;\n            p=p->next;\n        }\n        else if(p->exp<q->exp){\n            s->coef=q->coef;\n            s->exp=q->exp;\n            q=q->next;\n        }\n        else{\n            s->coef=p->coef+q->coef;\n            s->exp=p->exp;\n            p=p->next;\n            q=q->next;\n            if(s->coef==0){\n            delete s;continue;\n        }\n        }\n        r->next=s;r=s;\n    }\n    while(p!=NULL){\n        r->next=new pNode;\n        r=r->next;\n        r->coef=p->coef;\n        r->exp=p->exp;\n        p=p->next;\n    }\n    while(q!=NULL){\n        r->next=new pNode;\n        r=r->next;\n        r->coef=q->coef;\n        r->exp=q->exp;\n        q=q->next;\n    }\n    return C;\n}\nPoly Mul(Poly A,Poly B){\n    Poly C=new pNode;\n    Poly p=A->next;\n    while(p!=NULL){\n        Poly q=B->next;\n        while(q!=NULL){\n            int coef=p->coef*q->coef,exp=p->exp+q->exp;\n            Poly r=C;\n            while(r->next!=NULL&&r->next->exp>exp) r=r->next;\n            if(r->next!=NULL&&r->next->exp==exp){\n                r->next->coef+=coef;\n                if(r->next->coef==0){\n                    Poly s=r->next;\n                    r->next=s->next;\n                    delete s;\n                }\n            }\n            else{\n                Poly s=new pNode;\n                s->coef=coef;s->exp=exp;\n                s->next=r->next;r->next=s;\n            }\n            q=q->next;\n        }\n        p=p->next;\n    }\n    return C;\n}\n\nint swap(elementtype x,DList &h){\n    if(h==NULL) return 0;\n    DList p=h;\n    while(p->next!=NULL && p->next->data!=x){\n        p=p->next;\n    }\n    if(p->next==NULL) return 0;\n    else{\n        if(p==h) return 1;\n        else{\n            DList q = p->next;\n            p->next = q->next;\n            if(q->next!=NULL) q->next->pre=p;\n            q->next = p;\n            q->pre = p->pre;\n            q->pre->next = q;\n            p->pre=q;\n            return 1;\n        }\n    }\n}\n\nDList mkd(const vector<int>&a){auto h=new clNode,p=h;for(int x:a){p->next=new clNode;p->next->pre=p;p=p->next;p->data=x;}return h;}\nChainList mks(const vector<int>&a){auto h=new cNode,p=h;for(int x:a){p->next=new cNode;p=p->next;p->data=x;}return h;}\nvoid pd(DList h){vector<int>v;for(auto p=h->next;p;p=p->next)v.push_back(p->data);printv(v);}\nvoid ps(ChainList h){vector<int>v;for(auto p=h->next;p;p=p->next)v.push_back(p->data);printv(v);}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;Poly a=new pNode,z=new pNode;auto p=a;for(int i=0;i<n;i++){p->next=new pNode;p=p->next;cin>>p->coef>>p->exp;}p=z;for(int i=0;i<m;i++){p->next=new pNode;p=p->next;cin>>p->coef>>p->exp;}\nauto c=Mul(a,z);int k=0;for(auto p=c->next;p;p=p->next)k++;cout<<k<<\"\\n\";for(auto p=c->next;p;p=p->next)cout<<p->coef<<\" \"<<p->exp<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "2 2\n2 2\n1 0\n3 1\n-1 0\n",
        "expected": "4\n6 3\n-2 2\n3 1\n-1 0\n"
      },
      {
        "name": "测试 2",
        "stdin": "0 0\n",
        "expected": "0\n"
      },
      {
        "name": "测试 3",
        "stdin": "1 1\n1 1\n-1 1\n",
        "expected": "1\n-1 2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-binary-pre-rec",
    "title": "二叉树：递归先序遍历",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "nkgizgxflk13u2gn",
        "blocks": [
          0,
          6,
          4
        ],
        "functions": [
          "preOrder"
        ]
      }
    ],
    "description": "二叉树用先序字符序列输入，# 表示空子树。按根、左、右次序访问每个数据结点一次。",
    "input": "一个不含空格的合法先序串，例如 BA##C##。",
    "output": "输出访问字符序列；空树输出 EMPTY。",
    "constraints": [
      "结点数 0..30；标签 A..Z，可重复",
      "先序串必须为完整合法编码。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "#\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：一个不含空格的合法先序串，例如 BA##C##。\n// 输出：输出访问字符序列；空树输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;\ntypedef char datatype;\ntypedef struct lrpNode{\ndatatype data;\nlrpNode *lc,*rc;\nlrpNode():lc(NULL),rc(NULL){}\n} * lrpTree;\n//创建二叉树\nlrpTree create_lrpTree(datatype data,lrpTree lc,lrpTree rc){\n    lrpTree temp = new lrpNode;\n    temp->data = data;\n    temp->lc = lc;\n    temp->rc = rc;\n    return temp;\n}\ntypedef char datatype;\ntypedef struct lraNode{\ndatatype data;\nint lc,rc;\n} lraTree[N];\nint create_lraTree(lraTree t,datatype data,int &idx,int lc=-1,int rc=-1){\n    t[idx].data = data;\n    t[idx].lc = lc;\n    t[idx].rc = rc;\n    return idx++;\n}\nlrpTree create_lrpTree(string str,int &idx){\n    lrpTree ret;\n    if(idx<0 || idx>=(int)str.size()) return NULL;\n    if(str[idx]=='#'){ \n        idx++;\n        return NULL;\n    }\n    ret = new lrpNode;\n    ret->data = str[idx++];\n    ret->lc = create_lrpTree(str,idx);\n    ret->rc = create_lrpTree(str,idx);\n    return ret;\n}\nvoid midOrder(lrpTree rt){\n    if(rt==NULL) return;\n    midOrder(rt->lc);\n    cout<<rt->data;\n    midOrder(rt->rc);\n}\nstring convertToBracket(lrpTree t){\n    if(t==NULL) return \"\";\n    return \"(\"+convertToBracket(t->lc)+t->data+convertToBracket(t->rc)+\")\";\n}\nlrpTree convertToTree(string b){\n    lrpTree rt,lc,rc;\n    if(b.size()<=2) return NULL; //因为一个完整的树必定至少一个结点和左右括号\n    stack<lrpTree>stk;\n    for(int i=0;i<b.size();i++){\n        if(b[i]=='(') continue; //跳过左括号\n        else if(b[i] == ')'){\n            rc=stk.top();stk.pop();\n            rt=stk.top();stk.pop();\n            lc=stk.top();stk.pop();\n            rt->lc=lc,rt->rc=rc;\n            stk.push(rt);  //新的子树入队\n        }\n        else{\n            if(b[i-1] =='(') stk.push(NULL);\n            rt = new lrpNode;\n            rt->data = b[i],stk.push(rt);\n            if(b[i+1]==')') stk.push(NULL);\n        }\n    }\n    return stk.top();\n}\nvoid postOrder(lrpTree rt){\n    if(rt==NULL) return;\n    postOrder(rt->lc);\n    postOrder(rt->rc);\n    cout<<rt->data;\n}\nstring postOrder(string b){\n    string ret;\n    stack<char>stk;\n    for(int i = 0; i < b.size(); i++){\n        if(b[i] != ')'){\n            stk.push(b[i]);\n        }\n        else{\n            while(!stk.empty() && stk.top() != '('){\n                ret += stk.top();\n                stk.pop();\n            }\n            if(!stk.empty())\n                stk.pop(); \n        }\n    }\n    return ret;\n}\nvoid preOrder(lrpTree t){\n    if(t==NULL) return;\n    cout<<t->data;\n    preOrder(t->lc);\n    preOrder(t->rc);\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring text;cin>>text;int idx=0;auto rt=create_lrpTree(text,idx);\nif(!rt)cout<<\"EMPTY\\n\";else preOrder(rt);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "#\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "A##\n",
        "expected": "A\n"
      },
      {
        "name": "测试 3",
        "stdin": "BA##C##\n",
        "expected": "BAC\n"
      },
      {
        "name": "测试 4",
        "stdin": "AA###\n",
        "expected": "AA\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-binary-pre-stack",
    "title": "二叉树：栈实现先序遍历",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "nkgizgxflk13u2gn",
        "blocks": [
          0,
          6,
          5
        ],
        "functions": [
          "preOrder"
        ]
      }
    ],
    "description": "二叉树用先序字符序列输入，# 表示空子树。按根、左、右次序访问每个数据结点一次。",
    "input": "一个不含空格的合法先序串，例如 BA##C##。",
    "output": "输出访问字符序列；空树输出 EMPTY。",
    "constraints": [
      "结点数 0..30；标签 A..Z，可重复",
      "先序串必须为完整合法编码。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "#\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：一个不含空格的合法先序串，例如 BA##C##。\n// 输出：输出访问字符序列；空树输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;\ntypedef char datatype;\ntypedef struct lrpNode{\ndatatype data;\nlrpNode *lc,*rc;\nlrpNode():lc(NULL),rc(NULL){}\n} * lrpTree;\n//创建二叉树\nlrpTree create_lrpTree(datatype data,lrpTree lc,lrpTree rc){\n    lrpTree temp = new lrpNode;\n    temp->data = data;\n    temp->lc = lc;\n    temp->rc = rc;\n    return temp;\n}\ntypedef char datatype;\ntypedef struct lraNode{\ndatatype data;\nint lc,rc;\n} lraTree[N];\nint create_lraTree(lraTree t,datatype data,int &idx,int lc=-1,int rc=-1){\n    t[idx].data = data;\n    t[idx].lc = lc;\n    t[idx].rc = rc;\n    return idx++;\n}\nlrpTree create_lrpTree(string str,int &idx){\n    lrpTree ret;\n    if(idx<0 || idx>=(int)str.size()) return NULL;\n    if(str[idx]=='#'){ \n        idx++;\n        return NULL;\n    }\n    ret = new lrpNode;\n    ret->data = str[idx++];\n    ret->lc = create_lrpTree(str,idx);\n    ret->rc = create_lrpTree(str,idx);\n    return ret;\n}\nvoid midOrder(lrpTree rt){\n    if(rt==NULL) return;\n    midOrder(rt->lc);\n    cout<<rt->data;\n    midOrder(rt->rc);\n}\nstring convertToBracket(lrpTree t){\n    if(t==NULL) return \"\";\n    return \"(\"+convertToBracket(t->lc)+t->data+convertToBracket(t->rc)+\")\";\n}\nlrpTree convertToTree(string b){\n    lrpTree rt,lc,rc;\n    if(b.size()<=2) return NULL; //因为一个完整的树必定至少一个结点和左右括号\n    stack<lrpTree>stk;\n    for(int i=0;i<b.size();i++){\n        if(b[i]=='(') continue; //跳过左括号\n        else if(b[i] == ')'){\n            rc=stk.top();stk.pop();\n            rt=stk.top();stk.pop();\n            lc=stk.top();stk.pop();\n            rt->lc=lc,rt->rc=rc;\n            stk.push(rt);  //新的子树入队\n        }\n        else{\n            if(b[i-1] =='(') stk.push(NULL);\n            rt = new lrpNode;\n            rt->data = b[i],stk.push(rt);\n            if(b[i+1]==')') stk.push(NULL);\n        }\n    }\n    return stk.top();\n}\nvoid postOrder(lrpTree rt){\n    if(rt==NULL) return;\n    postOrder(rt->lc);\n    postOrder(rt->rc);\n    cout<<rt->data;\n}\nstring postOrder(string b){\n    string ret;\n    stack<char>stk;\n    for(int i = 0; i < b.size(); i++){\n        if(b[i] != ')'){\n            stk.push(b[i]);\n        }\n        else{\n            while(!stk.empty() && stk.top() != '('){\n                ret += stk.top();\n                stk.pop();\n            }\n            if(!stk.empty())\n                stk.pop(); \n        }\n    }\n    return ret;\n}\nvoid preOrder(lrpTree rt){\nstack<lrpTree>stk;\n    lrpTree t=rt;\n    while(t||!stk.empty()){\n        while(t){\n            cout<<t->data;\n            stk.push(t);\n            t=t->lc;\n        }\n        t=stk.top();\n        stk.pop();\n        t=t->rc;\n    }    \n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring text;cin>>text;int idx=0;auto rt=create_lrpTree(text,idx);\nif(!rt)cout<<\"EMPTY\\n\";else preOrder(rt);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "#\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "A##\n",
        "expected": "A\n"
      },
      {
        "name": "测试 3",
        "stdin": "BA##C##\n",
        "expected": "BAC\n"
      },
      {
        "name": "测试 4",
        "stdin": "AA###\n",
        "expected": "AA\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-binary-mid",
    "title": "二叉树：递归中序遍历",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "nkgizgxflk13u2gn",
        "blocks": [
          0,
          6,
          7
        ],
        "functions": [
          "midOrder"
        ]
      }
    ],
    "description": "二叉树用先序字符序列输入，# 表示空子树。按左、根、右次序访问每个数据结点一次。",
    "input": "一个不含空格的合法先序串，例如 BA##C##。",
    "output": "输出访问字符序列；空树输出 EMPTY。",
    "constraints": [
      "结点数 0..30；标签 A..Z，可重复",
      "先序串必须为完整合法编码。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "#\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：一个不含空格的合法先序串，例如 BA##C##。\n// 输出：输出访问字符序列；空树输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;\ntypedef char datatype;\ntypedef struct lrpNode{\ndatatype data;\nlrpNode *lc,*rc;\nlrpNode():lc(NULL),rc(NULL){}\n} * lrpTree;\n//创建二叉树\nlrpTree create_lrpTree(datatype data,lrpTree lc,lrpTree rc){\n    lrpTree temp = new lrpNode;\n    temp->data = data;\n    temp->lc = lc;\n    temp->rc = rc;\n    return temp;\n}\ntypedef char datatype;\ntypedef struct lraNode{\ndatatype data;\nint lc,rc;\n} lraTree[N];\nint create_lraTree(lraTree t,datatype data,int &idx,int lc=-1,int rc=-1){\n    t[idx].data = data;\n    t[idx].lc = lc;\n    t[idx].rc = rc;\n    return idx++;\n}\nlrpTree create_lrpTree(string str,int &idx){\n    lrpTree ret;\n    if(idx<0 || idx>=(int)str.size()) return NULL;\n    if(str[idx]=='#'){ \n        idx++;\n        return NULL;\n    }\n    ret = new lrpNode;\n    ret->data = str[idx++];\n    ret->lc = create_lrpTree(str,idx);\n    ret->rc = create_lrpTree(str,idx);\n    return ret;\n}\nvoid midOrder(lrpTree rt){\n    if(rt==NULL) return;\n    midOrder(rt->lc);\n    cout<<rt->data;\n    midOrder(rt->rc);\n}\nstring convertToBracket(lrpTree t){\n    if(t==NULL) return \"\";\n    return \"(\"+convertToBracket(t->lc)+t->data+convertToBracket(t->rc)+\")\";\n}\nlrpTree convertToTree(string b){\n    lrpTree rt,lc,rc;\n    if(b.size()<=2) return NULL; //因为一个完整的树必定至少一个结点和左右括号\n    stack<lrpTree>stk;\n    for(int i=0;i<b.size();i++){\n        if(b[i]=='(') continue; //跳过左括号\n        else if(b[i] == ')'){\n            rc=stk.top();stk.pop();\n            rt=stk.top();stk.pop();\n            lc=stk.top();stk.pop();\n            rt->lc=lc,rt->rc=rc;\n            stk.push(rt);  //新的子树入队\n        }\n        else{\n            if(b[i-1] =='(') stk.push(NULL);\n            rt = new lrpNode;\n            rt->data = b[i],stk.push(rt);\n            if(b[i+1]==')') stk.push(NULL);\n        }\n    }\n    return stk.top();\n}\nvoid postOrder(lrpTree rt){\n    if(rt==NULL) return;\n    postOrder(rt->lc);\n    postOrder(rt->rc);\n    cout<<rt->data;\n}\nstring postOrder(string b){\n    string ret;\n    stack<char>stk;\n    for(int i = 0; i < b.size(); i++){\n        if(b[i] != ')'){\n            stk.push(b[i]);\n        }\n        else{\n            while(!stk.empty() && stk.top() != '('){\n                ret += stk.top();\n                stk.pop();\n            }\n            if(!stk.empty())\n                stk.pop(); \n        }\n    }\n    return ret;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring text;cin>>text;int idx=0;auto rt=create_lrpTree(text,idx);\nif(!rt)cout<<\"EMPTY\\n\";else midOrder(rt);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "#\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "A##\n",
        "expected": "A\n"
      },
      {
        "name": "测试 3",
        "stdin": "BA##C##\n",
        "expected": "ABC\n"
      },
      {
        "name": "测试 4",
        "stdin": "AA###\n",
        "expected": "AA\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-binary-post",
    "title": "二叉树：递归后序遍历",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "nkgizgxflk13u2gn",
        "blocks": [
          0,
          6,
          10
        ],
        "functions": [
          "postOrder"
        ]
      }
    ],
    "description": "二叉树用先序字符序列输入，# 表示空子树。按左、右、根次序访问每个数据结点一次。",
    "input": "一个不含空格的合法先序串，例如 BA##C##。",
    "output": "输出访问字符序列；空树输出 EMPTY。",
    "constraints": [
      "结点数 0..30；标签 A..Z，可重复",
      "先序串必须为完整合法编码。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "#\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：一个不含空格的合法先序串，例如 BA##C##。\n// 输出：输出访问字符序列；空树输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;\ntypedef char datatype;\ntypedef struct lrpNode{\ndatatype data;\nlrpNode *lc,*rc;\nlrpNode():lc(NULL),rc(NULL){}\n} * lrpTree;\n//创建二叉树\nlrpTree create_lrpTree(datatype data,lrpTree lc,lrpTree rc){\n    lrpTree temp = new lrpNode;\n    temp->data = data;\n    temp->lc = lc;\n    temp->rc = rc;\n    return temp;\n}\ntypedef char datatype;\ntypedef struct lraNode{\ndatatype data;\nint lc,rc;\n} lraTree[N];\nint create_lraTree(lraTree t,datatype data,int &idx,int lc=-1,int rc=-1){\n    t[idx].data = data;\n    t[idx].lc = lc;\n    t[idx].rc = rc;\n    return idx++;\n}\nlrpTree create_lrpTree(string str,int &idx){\n    lrpTree ret;\n    if(idx<0 || idx>=(int)str.size()) return NULL;\n    if(str[idx]=='#'){ \n        idx++;\n        return NULL;\n    }\n    ret = new lrpNode;\n    ret->data = str[idx++];\n    ret->lc = create_lrpTree(str,idx);\n    ret->rc = create_lrpTree(str,idx);\n    return ret;\n}\nvoid midOrder(lrpTree rt){\n    if(rt==NULL) return;\n    midOrder(rt->lc);\n    cout<<rt->data;\n    midOrder(rt->rc);\n}\nstring convertToBracket(lrpTree t){\n    if(t==NULL) return \"\";\n    return \"(\"+convertToBracket(t->lc)+t->data+convertToBracket(t->rc)+\")\";\n}\nlrpTree convertToTree(string b){\n    lrpTree rt,lc,rc;\n    if(b.size()<=2) return NULL; //因为一个完整的树必定至少一个结点和左右括号\n    stack<lrpTree>stk;\n    for(int i=0;i<b.size();i++){\n        if(b[i]=='(') continue; //跳过左括号\n        else if(b[i] == ')'){\n            rc=stk.top();stk.pop();\n            rt=stk.top();stk.pop();\n            lc=stk.top();stk.pop();\n            rt->lc=lc,rt->rc=rc;\n            stk.push(rt);  //新的子树入队\n        }\n        else{\n            if(b[i-1] =='(') stk.push(NULL);\n            rt = new lrpNode;\n            rt->data = b[i],stk.push(rt);\n            if(b[i+1]==')') stk.push(NULL);\n        }\n    }\n    return stk.top();\n}\nvoid postOrder(lrpTree rt){\n    if(rt==NULL) return;\n    postOrder(rt->lc);\n    postOrder(rt->rc);\n    cout<<rt->data;\n}\nstring postOrder(string b){\n    string ret;\n    stack<char>stk;\n    for(int i = 0; i < b.size(); i++){\n        if(b[i] != ')'){\n            stk.push(b[i]);\n        }\n        else{\n            while(!stk.empty() && stk.top() != '('){\n                ret += stk.top();\n                stk.pop();\n            }\n            if(!stk.empty())\n                stk.pop(); \n        }\n    }\n    return ret;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring text;cin>>text;int idx=0;auto rt=create_lrpTree(text,idx);\nif(!rt)cout<<\"EMPTY\\n\";else postOrder(rt);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "#\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "A##\n",
        "expected": "A\n"
      },
      {
        "name": "测试 3",
        "stdin": "BA##C##\n",
        "expected": "ACB\n"
      },
      {
        "name": "测试 4",
        "stdin": "AA###\n",
        "expected": "AA\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-binary-create-pointer",
    "title": "二叉树：用左右子树创建根结点",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "nkgizgxflk13u2gn",
        "blocks": [
          0,
          1,
          6,
          8
        ],
        "functions": [
          "create_lrpTree(char,lrpTree,lrpTree)"
        ]
      }
    ],
    "description": "给定根字符和两棵子树的先序编码，构建根结点并连接左右子树。",
    "input": "根字符；左子树编码；右子树编码。# 代表空树。",
    "output": "输出 (左子树 根字符 右子树) 括号表示。",
    "constraints": [
      "根标签 A..Z；总节点数≤30；子树编码合法。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "A # #\n",
        "expected": "(A)\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：根字符；左子树编码；右子树编码。# 代表空树。\n// 输出：输出 (左子树 根字符 右子树) 括号表示。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;\ntypedef char datatype;\ntypedef struct lrpNode{\ndatatype data;\nlrpNode *lc,*rc;\nlrpNode():lc(NULL),rc(NULL){}\n} * lrpTree;\n//创建二叉树\nlrpTree create_lrpTree(datatype data,lrpTree lc,lrpTree rc){\n    lrpTree temp = new lrpNode;\n    temp->data = data;\n    temp->lc = lc;\n    temp->rc = rc;\n    return temp;\n}\ntypedef char datatype;\ntypedef struct lraNode{\ndatatype data;\nint lc,rc;\n} lraTree[N];\nint create_lraTree(lraTree t,datatype data,int &idx,int lc=-1,int rc=-1){\n    t[idx].data = data;\n    t[idx].lc = lc;\n    t[idx].rc = rc;\n    return idx++;\n}\nlrpTree create_lrpTree(string str,int &idx){\n    lrpTree ret;\n    if(idx<0 || idx>=(int)str.size()) return NULL;\n    if(str[idx]=='#'){ \n        idx++;\n        return NULL;\n    }\n    ret = new lrpNode;\n    ret->data = str[idx++];\n    ret->lc = create_lrpTree(str,idx);\n    ret->rc = create_lrpTree(str,idx);\n    return ret;\n}\nvoid midOrder(lrpTree rt){\n    if(rt==NULL) return;\n    midOrder(rt->lc);\n    cout<<rt->data;\n    midOrder(rt->rc);\n}\nstring convertToBracket(lrpTree t){\n    if(t==NULL) return \"\";\n    return \"(\"+convertToBracket(t->lc)+t->data+convertToBracket(t->rc)+\")\";\n}\nlrpTree convertToTree(string b){\n    lrpTree rt,lc,rc;\n    if(b.size()<=2) return NULL; //因为一个完整的树必定至少一个结点和左右括号\n    stack<lrpTree>stk;\n    for(int i=0;i<b.size();i++){\n        if(b[i]=='(') continue; //跳过左括号\n        else if(b[i] == ')'){\n            rc=stk.top();stk.pop();\n            rt=stk.top();stk.pop();\n            lc=stk.top();stk.pop();\n            rt->lc=lc,rt->rc=rc;\n            stk.push(rt);  //新的子树入队\n        }\n        else{\n            if(b[i-1] =='(') stk.push(NULL);\n            rt = new lrpNode;\n            rt->data = b[i],stk.push(rt);\n            if(b[i+1]==')') stk.push(NULL);\n        }\n    }\n    return stk.top();\n}\nvoid postOrder(lrpTree rt){\n    if(rt==NULL) return;\n    postOrder(rt->lc);\n    postOrder(rt->rc);\n    cout<<rt->data;\n}\nstring postOrder(string b){\n    string ret;\n    stack<char>stk;\n    for(int i = 0; i < b.size(); i++){\n        if(b[i] != ')'){\n            stk.push(b[i]);\n        }\n        else{\n            while(!stk.empty() && stk.top() != '('){\n                ret += stk.top();\n                stk.pop();\n            }\n            if(!stk.empty())\n                stk.pop(); \n        }\n    }\n    return ret;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nchar x;string l,r;cin>>x>>l>>r;int i=0,j=0;auto lc=create_lrpTree(l,i),rc=create_lrpTree(r,j);\ncout<<convertToBracket(create_lrpTree(x,lc,rc))<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "A # #\n",
        "expected": "(A)\n"
      },
      {
        "name": "测试 2",
        "stdin": "B A## C##\n",
        "expected": "((A)B(C))\n"
      },
      {
        "name": "测试 3",
        "stdin": "A A## #\n",
        "expected": "((A)A)\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-binary-create-array",
    "title": "二叉树：数组结点创建",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "nkgizgxflk13u2gn",
        "blocks": [
          2,
          3
        ],
        "functions": [
          "create_lraTree"
        ]
      }
    ],
    "description": "从 idx=0 起依次建立数组结点，保存标签和左右孩子下标。每次创建返回当前下标后使 idx 增加 1。",
    "input": "n；随后 n 行：标签 左孩子下标 右孩子下标，空孩子为 -1。",
    "output": "每个结点一行：创建下标 标签 左下标 右下标；n=0 输出 EMPTY。",
    "constraints": [
      "0≤n≤30；标签 A..Z；孩子下标为 -1 或 0..n-1；不构成环。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；随后 n 行：标签 左孩子下标 右孩子下标，空孩子为 -1。\n// 输出：每个结点一行：创建下标 标签 左下标 右下标；n=0 输出 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;\ntypedef char datatype;\ntypedef struct lraNode{\ndatatype data;\nint lc,rc;\n} lraTree[N];\nint create_lraTree(lraTree t,datatype data,int &idx,int lc=-1,int rc=-1){\n    t[idx].data = data;\n    t[idx].lc = lc;\n    t[idx].rc = rc;\n    return idx++;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<char>d(n);vector<int>l(n),r(n);for(int i=0;i<n;i++)cin>>d[i]>>l[i]>>r[i];\nlraTree t;int idx=0;if(!n)cout<<\"EMPTY\\n\";for(int i=0;i<n;i++){int p=create_lraTree(t,d[i],idx,l[i],r[i]);cout<<p<<\" \"<<t[p].data<<\" \"<<t[p].lc<<\" \"<<t[p].rc<<\"\\n\";}\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\nA -1 -1\n",
        "expected": "0 A -1 -1\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\nB 1 2\nA -1 -1\nC -1 -1\n",
        "expected": "0 B 1 2\n1 A -1 -1\n2 C -1 -1\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-binary-create-pre",
    "title": "二叉树：由先序空标记序列建树",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "nkgizgxflk13u2gn",
        "blocks": [
          0,
          6,
          8,
          9,
          11
        ],
        "functions": [
          "create_lrpTree(string,int&)"
        ]
      }
    ],
    "description": "采用原笔记 (左子树 根字符 右子树) 格式，空子树不占字符。例如 ((A)B(C)) 的根是 B。输入先序 # 编码，将其构建后转换为括号表示。",
    "input": "一个合法先序 # 编码串。",
    "output": "转换题输出规范括号串；后序题输出字符序列；空树为 EMPTY。",
    "constraints": [
      "节点数 0..30；标签为 A..Z 单字符；输入保证语法合法。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "#\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：一个合法先序 # 编码串。\n// 输出：转换题输出规范括号串；后序题输出字符序列；空树为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;\ntypedef char datatype;\ntypedef struct lrpNode{\ndatatype data;\nlrpNode *lc,*rc;\nlrpNode():lc(NULL),rc(NULL){}\n} * lrpTree;\n//创建二叉树\nlrpTree create_lrpTree(datatype data,lrpTree lc,lrpTree rc){\n    lrpTree temp = new lrpNode;\n    temp->data = data;\n    temp->lc = lc;\n    temp->rc = rc;\n    return temp;\n}\ntypedef char datatype;\ntypedef struct lraNode{\ndatatype data;\nint lc,rc;\n} lraTree[N];\nint create_lraTree(lraTree t,datatype data,int &idx,int lc=-1,int rc=-1){\n    t[idx].data = data;\n    t[idx].lc = lc;\n    t[idx].rc = rc;\n    return idx++;\n}\nlrpTree create_lrpTree(string str,int &idx){\n    lrpTree ret;\n    if(idx<0 || idx>=(int)str.size()) return NULL;\n    if(str[idx]=='#'){ \n        idx++;\n        return NULL;\n    }\n    ret = new lrpNode;\n    ret->data = str[idx++];\n    ret->lc = create_lrpTree(str,idx);\n    ret->rc = create_lrpTree(str,idx);\n    return ret;\n}\nvoid midOrder(lrpTree rt){\n    if(rt==NULL) return;\n    midOrder(rt->lc);\n    cout<<rt->data;\n    midOrder(rt->rc);\n}\nstring convertToBracket(lrpTree t){\n    if(t==NULL) return \"\";\n    return \"(\"+convertToBracket(t->lc)+t->data+convertToBracket(t->rc)+\")\";\n}\nlrpTree convertToTree(string b){\n    lrpTree rt,lc,rc;\n    if(b.size()<=2) return NULL; //因为一个完整的树必定至少一个结点和左右括号\n    stack<lrpTree>stk;\n    for(int i=0;i<b.size();i++){\n        if(b[i]=='(') continue; //跳过左括号\n        else if(b[i] == ')'){\n            rc=stk.top();stk.pop();\n            rt=stk.top();stk.pop();\n            lc=stk.top();stk.pop();\n            rt->lc=lc,rt->rc=rc;\n            stk.push(rt);  //新的子树入队\n        }\n        else{\n            if(b[i-1] =='(') stk.push(NULL);\n            rt = new lrpNode;\n            rt->data = b[i],stk.push(rt);\n            if(b[i+1]==')') stk.push(NULL);\n        }\n    }\n    return stk.top();\n}\nvoid postOrder(lrpTree rt){\n    if(rt==NULL) return;\n    postOrder(rt->lc);\n    postOrder(rt->rc);\n    cout<<rt->data;\n}\nstring postOrder(string b){\n    string ret;\n    stack<char>stk;\n    for(int i = 0; i < b.size(); i++){\n        if(b[i] != ')'){\n            stk.push(b[i]);\n        }\n        else{\n            while(!stk.empty() && stk.top() != '('){\n                ret += stk.top();\n                stk.pop();\n            }\n            if(!stk.empty())\n                stk.pop(); \n        }\n    }\n    return ret;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring text;cin>>text;\nint i=0;auto rt=create_lrpTree(text,i);string out=convertToBracket(rt);cout<<(out.empty()?\"EMPTY\":out)<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "#\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "A##\n",
        "expected": "(A)\n"
      },
      {
        "name": "测试 3",
        "stdin": "BA##C##\n",
        "expected": "((A)B(C))\n"
      },
      {
        "name": "测试 4",
        "stdin": "AA###\n",
        "expected": "((A)A)\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-binary-to-bracket",
    "title": "二叉树：转换为中序括号形式",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "nkgizgxflk13u2gn",
        "blocks": [
          0,
          6,
          8,
          9,
          11
        ],
        "functions": [
          "convertToBracket"
        ]
      }
    ],
    "description": "采用原笔记 (左子树 根字符 右子树) 格式，空子树不占字符。例如 ((A)B(C)) 的根是 B。输入先序 # 编码，将其构建后转换为括号表示。",
    "input": "一个合法先序 # 编码串。",
    "output": "转换题输出规范括号串；后序题输出字符序列；空树为 EMPTY。",
    "constraints": [
      "节点数 0..30；标签为 A..Z 单字符；输入保证语法合法。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "#\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：一个合法先序 # 编码串。\n// 输出：转换题输出规范括号串；后序题输出字符序列；空树为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;\ntypedef char datatype;\ntypedef struct lrpNode{\ndatatype data;\nlrpNode *lc,*rc;\nlrpNode():lc(NULL),rc(NULL){}\n} * lrpTree;\n//创建二叉树\nlrpTree create_lrpTree(datatype data,lrpTree lc,lrpTree rc){\n    lrpTree temp = new lrpNode;\n    temp->data = data;\n    temp->lc = lc;\n    temp->rc = rc;\n    return temp;\n}\ntypedef char datatype;\ntypedef struct lraNode{\ndatatype data;\nint lc,rc;\n} lraTree[N];\nint create_lraTree(lraTree t,datatype data,int &idx,int lc=-1,int rc=-1){\n    t[idx].data = data;\n    t[idx].lc = lc;\n    t[idx].rc = rc;\n    return idx++;\n}\nlrpTree create_lrpTree(string str,int &idx){\n    lrpTree ret;\n    if(idx<0 || idx>=(int)str.size()) return NULL;\n    if(str[idx]=='#'){ \n        idx++;\n        return NULL;\n    }\n    ret = new lrpNode;\n    ret->data = str[idx++];\n    ret->lc = create_lrpTree(str,idx);\n    ret->rc = create_lrpTree(str,idx);\n    return ret;\n}\nvoid midOrder(lrpTree rt){\n    if(rt==NULL) return;\n    midOrder(rt->lc);\n    cout<<rt->data;\n    midOrder(rt->rc);\n}\nstring convertToBracket(lrpTree t){\n    if(t==NULL) return \"\";\n    return \"(\"+convertToBracket(t->lc)+t->data+convertToBracket(t->rc)+\")\";\n}\nlrpTree convertToTree(string b){\n    lrpTree rt,lc,rc;\n    if(b.size()<=2) return NULL; //因为一个完整的树必定至少一个结点和左右括号\n    stack<lrpTree>stk;\n    for(int i=0;i<b.size();i++){\n        if(b[i]=='(') continue; //跳过左括号\n        else if(b[i] == ')'){\n            rc=stk.top();stk.pop();\n            rt=stk.top();stk.pop();\n            lc=stk.top();stk.pop();\n            rt->lc=lc,rt->rc=rc;\n            stk.push(rt);  //新的子树入队\n        }\n        else{\n            if(b[i-1] =='(') stk.push(NULL);\n            rt = new lrpNode;\n            rt->data = b[i],stk.push(rt);\n            if(b[i+1]==')') stk.push(NULL);\n        }\n    }\n    return stk.top();\n}\nvoid postOrder(lrpTree rt){\n    if(rt==NULL) return;\n    postOrder(rt->lc);\n    postOrder(rt->rc);\n    cout<<rt->data;\n}\nstring postOrder(string b){\n    string ret;\n    stack<char>stk;\n    for(int i = 0; i < b.size(); i++){\n        if(b[i] != ')'){\n            stk.push(b[i]);\n        }\n        else{\n            while(!stk.empty() && stk.top() != '('){\n                ret += stk.top();\n                stk.pop();\n            }\n            if(!stk.empty())\n                stk.pop(); \n        }\n    }\n    return ret;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring text;cin>>text;\nint i=0;auto rt=create_lrpTree(text,i);string out=convertToBracket(rt);cout<<(out.empty()?\"EMPTY\":out)<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "#\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "A##\n",
        "expected": "(A)\n"
      },
      {
        "name": "测试 3",
        "stdin": "BA##C##\n",
        "expected": "((A)B(C))\n"
      },
      {
        "name": "测试 4",
        "stdin": "AA###\n",
        "expected": "((A)A)\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-binary-from-bracket",
    "title": "二叉树：从中序括号形式恢复",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "nkgizgxflk13u2gn",
        "blocks": [
          0,
          6,
          8,
          9,
          11
        ],
        "functions": [
          "convertToTree"
        ]
      }
    ],
    "description": "采用原笔记 (左子树 根字符 右子树) 格式，空子树不占字符。例如 ((A)B(C)) 的根是 B。解析给定括号表示并输出规范结果。",
    "input": "一个合法括号串；空树用 () 输入。",
    "output": "转换题输出规范括号串；后序题输出字符序列；空树为 EMPTY。",
    "constraints": [
      "节点数 0..30；标签为 A..Z 单字符；输入保证语法合法。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "()\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：一个合法括号串；空树用 () 输入。\n// 输出：转换题输出规范括号串；后序题输出字符序列；空树为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;\ntypedef char datatype;\ntypedef struct lrpNode{\ndatatype data;\nlrpNode *lc,*rc;\nlrpNode():lc(NULL),rc(NULL){}\n} * lrpTree;\n//创建二叉树\nlrpTree create_lrpTree(datatype data,lrpTree lc,lrpTree rc){\n    lrpTree temp = new lrpNode;\n    temp->data = data;\n    temp->lc = lc;\n    temp->rc = rc;\n    return temp;\n}\ntypedef char datatype;\ntypedef struct lraNode{\ndatatype data;\nint lc,rc;\n} lraTree[N];\nint create_lraTree(lraTree t,datatype data,int &idx,int lc=-1,int rc=-1){\n    t[idx].data = data;\n    t[idx].lc = lc;\n    t[idx].rc = rc;\n    return idx++;\n}\nlrpTree create_lrpTree(string str,int &idx){\n    lrpTree ret;\n    if(idx<0 || idx>=(int)str.size()) return NULL;\n    if(str[idx]=='#'){ \n        idx++;\n        return NULL;\n    }\n    ret = new lrpNode;\n    ret->data = str[idx++];\n    ret->lc = create_lrpTree(str,idx);\n    ret->rc = create_lrpTree(str,idx);\n    return ret;\n}\nvoid midOrder(lrpTree rt){\n    if(rt==NULL) return;\n    midOrder(rt->lc);\n    cout<<rt->data;\n    midOrder(rt->rc);\n}\nstring convertToBracket(lrpTree t){\n    if(t==NULL) return \"\";\n    return \"(\"+convertToBracket(t->lc)+t->data+convertToBracket(t->rc)+\")\";\n}\nlrpTree convertToTree(string b){\n    lrpTree rt,lc,rc;\n    if(b.size()<=2) return NULL; //因为一个完整的树必定至少一个结点和左右括号\n    stack<lrpTree>stk;\n    for(int i=0;i<b.size();i++){\n        if(b[i]=='(') continue; //跳过左括号\n        else if(b[i] == ')'){\n            rc=stk.top();stk.pop();\n            rt=stk.top();stk.pop();\n            lc=stk.top();stk.pop();\n            rt->lc=lc,rt->rc=rc;\n            stk.push(rt);  //新的子树入队\n        }\n        else{\n            if(b[i-1] =='(') stk.push(NULL);\n            rt = new lrpNode;\n            rt->data = b[i],stk.push(rt);\n            if(b[i+1]==')') stk.push(NULL);\n        }\n    }\n    return stk.top();\n}\nvoid postOrder(lrpTree rt){\n    if(rt==NULL) return;\n    postOrder(rt->lc);\n    postOrder(rt->rc);\n    cout<<rt->data;\n}\nstring postOrder(string b){\n    string ret;\n    stack<char>stk;\n    for(int i = 0; i < b.size(); i++){\n        if(b[i] != ')'){\n            stk.push(b[i]);\n        }\n        else{\n            while(!stk.empty() && stk.top() != '('){\n                ret += stk.top();\n                stk.pop();\n            }\n            if(!stk.empty())\n                stk.pop(); \n        }\n    }\n    return ret;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring text;cin>>text;\nauto rt=convertToTree(text);string out=convertToBracket(rt);cout<<(out.empty()?\"EMPTY\":out)<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "()\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "(A)\n",
        "expected": "(A)\n"
      },
      {
        "name": "测试 3",
        "stdin": "((A)B(C))\n",
        "expected": "((A)B(C))\n"
      },
      {
        "name": "测试 4",
        "stdin": "((A)A)\n",
        "expected": "((A)A)\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-binary-bracket-post",
    "title": "二叉树：直接从括号串求后序",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "nkgizgxflk13u2gn",
        "blocks": [
          0,
          6,
          8,
          9,
          11
        ],
        "functions": [
          "postOrder(string)"
        ]
      }
    ],
    "description": "采用原笔记 (左子树 根字符 右子树) 格式，空子树不占字符。例如 ((A)B(C)) 的根是 B。按左右根次序输出字符，无需构建结点。",
    "input": "一个合法括号串；空树用 () 输入。",
    "output": "转换题输出规范括号串；后序题输出字符序列；空树为 EMPTY。",
    "constraints": [
      "节点数 0..30；标签为 A..Z 单字符；输入保证语法合法。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "()\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：一个合法括号串；空树用 () 输入。\n// 输出：转换题输出规范括号串；后序题输出字符序列；空树为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;\ntypedef char datatype;\ntypedef struct lrpNode{\ndatatype data;\nlrpNode *lc,*rc;\nlrpNode():lc(NULL),rc(NULL){}\n} * lrpTree;\n//创建二叉树\nlrpTree create_lrpTree(datatype data,lrpTree lc,lrpTree rc){\n    lrpTree temp = new lrpNode;\n    temp->data = data;\n    temp->lc = lc;\n    temp->rc = rc;\n    return temp;\n}\ntypedef char datatype;\ntypedef struct lraNode{\ndatatype data;\nint lc,rc;\n} lraTree[N];\nint create_lraTree(lraTree t,datatype data,int &idx,int lc=-1,int rc=-1){\n    t[idx].data = data;\n    t[idx].lc = lc;\n    t[idx].rc = rc;\n    return idx++;\n}\nlrpTree create_lrpTree(string str,int &idx){\n    lrpTree ret;\n    if(idx<0 || idx>=(int)str.size()) return NULL;\n    if(str[idx]=='#'){ \n        idx++;\n        return NULL;\n    }\n    ret = new lrpNode;\n    ret->data = str[idx++];\n    ret->lc = create_lrpTree(str,idx);\n    ret->rc = create_lrpTree(str,idx);\n    return ret;\n}\nvoid midOrder(lrpTree rt){\n    if(rt==NULL) return;\n    midOrder(rt->lc);\n    cout<<rt->data;\n    midOrder(rt->rc);\n}\nstring convertToBracket(lrpTree t){\n    if(t==NULL) return \"\";\n    return \"(\"+convertToBracket(t->lc)+t->data+convertToBracket(t->rc)+\")\";\n}\nlrpTree convertToTree(string b){\n    lrpTree rt,lc,rc;\n    if(b.size()<=2) return NULL; //因为一个完整的树必定至少一个结点和左右括号\n    stack<lrpTree>stk;\n    for(int i=0;i<b.size();i++){\n        if(b[i]=='(') continue; //跳过左括号\n        else if(b[i] == ')'){\n            rc=stk.top();stk.pop();\n            rt=stk.top();stk.pop();\n            lc=stk.top();stk.pop();\n            rt->lc=lc,rt->rc=rc;\n            stk.push(rt);  //新的子树入队\n        }\n        else{\n            if(b[i-1] =='(') stk.push(NULL);\n            rt = new lrpNode;\n            rt->data = b[i],stk.push(rt);\n            if(b[i+1]==')') stk.push(NULL);\n        }\n    }\n    return stk.top();\n}\nvoid postOrder(lrpTree rt){\n    if(rt==NULL) return;\n    postOrder(rt->lc);\n    postOrder(rt->rc);\n    cout<<rt->data;\n}\nstring postOrder(string b){\n    string ret;\n    stack<char>stk;\n    for(int i = 0; i < b.size(); i++){\n        if(b[i] != ')'){\n            stk.push(b[i]);\n        }\n        else{\n            while(!stk.empty() && stk.top() != '('){\n                ret += stk.top();\n                stk.pop();\n            }\n            if(!stk.empty())\n                stk.pop(); \n        }\n    }\n    return ret;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring text;cin>>text;\nstring out=postOrder(text);cout<<(out.empty()?\"EMPTY\":out)<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "()\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "(A)\n",
        "expected": "A\n"
      },
      {
        "name": "测试 3",
        "stdin": "((A)B(C))\n",
        "expected": "ACB\n"
      },
      {
        "name": "测试 4",
        "stdin": "((A)A)\n",
        "expected": "AA\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-complete-tree-index",
    "title": "完全二叉树：数组父子下标",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "errmguf6z99r6eqp",
        "blocks": [],
        "functions": []
      }
    ],
    "description": "完全二叉树按层序从 0 编号。给定结点 p，求父结点和左右孩子下标，越界关系输出 -1。",
    "input": "n p。",
    "output": "输出 parent left right；空树时三个值均为 -1。",
    "constraints": [
      "0≤n≤1000；n>0 时 0≤p<n；n=0 时 p=0"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0 0\n",
        "expected": "-1 -1 -1\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n p。\n// 输出：输出 parent left right；空树时三个值均为 -1。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,p;cin>>n>>p;\nif(n==0)cout<<\"-1 -1 -1\\n\";else cout<<(p?((p-1)/2):-1)<<\" \"<<(2*p+1<n?2*p+1:-1)<<\" \"<<(2*p+2<n?2*p+2:-1)<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "本节无原始代码；此题为补充练习，验证完全二叉树与数组下标关系。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0 0\n",
        "expected": "-1 -1 -1\n"
      },
      {
        "name": "测试 2",
        "stdin": "1 0\n",
        "expected": "-1 -1 -1\n"
      },
      {
        "name": "测试 3",
        "stdin": "6 2\n",
        "expected": "0 5 -1\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-heap-adjust",
    "title": "数组堆：向下调整",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "ebic8kgy45ilbbyn",
        "blocks": [
          0,
          1,
          2
        ],
        "functions": [
          "heap_adjust"
        ]
      }
    ],
    "description": "除根外的左右子树已是大顶堆，只对根执行一次向下筛选。较大孩子相等时选左孩子，孩子不大于当前值时停止。",
    "input": "n；n 个元素；无其他输入。",
    "output": "输出操作后的层序数组，空为 EMPTY。",
    "constraints": [
      "0≤n≤30，值 [-100,100]",
      "调整题左右子树已各自满足大顶堆性质。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个元素；无其他输入。\n// 输出：输出操作后的层序数组，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nusing datatype=int;\n//完全二叉树转化为大顶堆\nvoid heap_adjust(datatype heap[],int n,int cur){\n    if(n<=0 || cur<0 || cur>=n) return;\n    int i;\n    datatype temp=heap[cur];\n    while(i=2*cur+1,i<n){ //确保i是cur的左孩子\n        if(i+1<n && heap[i+1]>heap[i]) i++; //保证heap[i]是较大的子结点\n        if(heap[i]<=temp) break; //父节点大于所有子结点\n        heap[cur] = heap[i]; //结点i的值更新父节点\n        cur = i; //更新cur，接着向下比较\n    }\n    heap[cur] = temp; \n}\n\nvoid heap_make(datatype heap[],int n){\n    for(int i=n/2-1;i>=0;i--) //结点编号从0开始\n        heap_adjust(heap,n,i);\n}\nvoid heap_push(datatype heap[],int &n,datatype k){\n    int cur,pa;\n    cur=n,n++; //cur指向新增加的结点，元素数+1\n    while(cur>0){\n        pa=(cur-1)/2; //父节点\n        if(heap[pa]>=k) break; \n        heap[cur]=heap[pa]; //父节点小就下沉\n        cur=pa; //当前结点指向父节点\n    }\n    heap[cur] = k; //最后赋值\n}\nvoid heap_pop(datatype heap[],int &n){\n    if(n<=0) return;\n    heap[0]=heap[n-1],n--;//用最后一个结点取代根结点\n    if(n>0) heap_adjust(heap,n,0);\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;a.resize(100);\nheap_adjust(a.data(),n,0);printv(vector<int>(a.begin(),a.begin()+n));\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n",
        "expected": "2\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n1 5 4\n",
        "expected": "5 1 4\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-heap-build",
    "title": "数组堆：自底向上建大顶堆",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "ebic8kgy45ilbbyn",
        "blocks": [
          0,
          1,
          2
        ],
        "functions": [
          "heap_make"
        ]
      }
    ],
    "description": "按 n/2-1 到 0 顺序对非叶结点执行向下调整。较大孩子相等时选左孩子，孩子不大于当前值时停止。",
    "input": "n；n 个元素；无其他输入。",
    "output": "输出操作后的层序数组，空为 EMPTY。",
    "constraints": [
      "0≤n≤30，值 [-100,100]",
      "调整题左右子树已各自满足大顶堆性质。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个元素；无其他输入。\n// 输出：输出操作后的层序数组，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nusing datatype=int;\n//完全二叉树转化为大顶堆\nvoid heap_adjust(datatype heap[],int n,int cur){\n    if(n<=0 || cur<0 || cur>=n) return;\n    int i;\n    datatype temp=heap[cur];\n    while(i=2*cur+1,i<n){ //确保i是cur的左孩子\n        if(i+1<n && heap[i+1]>heap[i]) i++; //保证heap[i]是较大的子结点\n        if(heap[i]<=temp) break; //父节点大于所有子结点\n        heap[cur] = heap[i]; //结点i的值更新父节点\n        cur = i; //更新cur，接着向下比较\n    }\n    heap[cur] = temp; \n}\n\nvoid heap_make(datatype heap[],int n){\n    for(int i=n/2-1;i>=0;i--) //结点编号从0开始\n        heap_adjust(heap,n,i);\n}\nvoid heap_push(datatype heap[],int &n,datatype k){\n    int cur,pa;\n    cur=n,n++; //cur指向新增加的结点，元素数+1\n    while(cur>0){\n        pa=(cur-1)/2; //父节点\n        if(heap[pa]>=k) break; \n        heap[cur]=heap[pa]; //父节点小就下沉\n        cur=pa; //当前结点指向父节点\n    }\n    heap[cur] = k; //最后赋值\n}\nvoid heap_pop(datatype heap[],int &n){\n    if(n<=0) return;\n    heap[0]=heap[n-1],n--;//用最后一个结点取代根结点\n    if(n>0) heap_adjust(heap,n,0);\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;a.resize(100);\nheap_make(a.data(),n);printv(vector<int>(a.begin(),a.begin()+n));\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n",
        "expected": "2\n"
      },
      {
        "name": "测试 3",
        "stdin": "5\n3 1 8 9 2\n",
        "expected": "9 3 8 1 2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-heap-push",
    "title": "数组堆：插入并向上调整",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "ebic8kgy45ilbbyn",
        "blocks": [
          0,
          1,
          2
        ],
        "functions": [
          "heap_push"
        ]
      }
    ],
    "description": "先对原数组建大顶堆，再插入 x，并沿父指针向上调整。较大孩子相等时选左孩子，孩子不大于当前值时停止。",
    "input": "n；n 个元素；随后 x。",
    "output": "输出操作后的层序数组，空为 EMPTY。",
    "constraints": [
      "0≤n≤30，值 [-100,100]",
      "调整题左右子树已各自满足大顶堆性质。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n7\n",
        "expected": "7\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个元素；随后 x。\n// 输出：输出操作后的层序数组，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nusing datatype=int;\n//完全二叉树转化为大顶堆\nvoid heap_adjust(datatype heap[],int n,int cur){\n    if(n<=0 || cur<0 || cur>=n) return;\n    int i;\n    datatype temp=heap[cur];\n    while(i=2*cur+1,i<n){ //确保i是cur的左孩子\n        if(i+1<n && heap[i+1]>heap[i]) i++; //保证heap[i]是较大的子结点\n        if(heap[i]<=temp) break; //父节点大于所有子结点\n        heap[cur] = heap[i]; //结点i的值更新父节点\n        cur = i; //更新cur，接着向下比较\n    }\n    heap[cur] = temp; \n}\n\nvoid heap_make(datatype heap[],int n){\n    for(int i=n/2-1;i>=0;i--) //结点编号从0开始\n        heap_adjust(heap,n,i);\n}\nvoid heap_push(datatype heap[],int &n,datatype k){\n    int cur,pa;\n    cur=n,n++; //cur指向新增加的结点，元素数+1\n    while(cur>0){\n        pa=(cur-1)/2; //父节点\n        if(heap[pa]>=k) break; \n        heap[cur]=heap[pa]; //父节点小就下沉\n        cur=pa; //当前结点指向父节点\n    }\n    heap[cur] = k; //最后赋值\n}\nvoid heap_pop(datatype heap[],int &n){\n    if(n<=0) return;\n    heap[0]=heap[n-1],n--;//用最后一个结点取代根结点\n    if(n>0) heap_adjust(heap,n,0);\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;a.resize(100);\nheap_make(a.data(),n);int x;cin>>x;heap_push(a.data(),n,x);printv(vector<int>(a.begin(),a.begin()+n));\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n7\n",
        "expected": "7\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n7\n",
        "expected": "7 2\n"
      },
      {
        "name": "测试 3",
        "stdin": "5\n3 1 8 9 2\n7\n",
        "expected": "9 3 8 1 2 7\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-heap-pop",
    "title": "数组堆：删除堆顶",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "ebic8kgy45ilbbyn",
        "blocks": [
          0,
          1,
          2
        ],
        "functions": [
          "heap_pop"
        ]
      }
    ],
    "description": "先建大顶堆，用末元素替换堆顶并向下调整；空堆不变。较大孩子相等时选左孩子，孩子不大于当前值时停止。",
    "input": "n；n 个元素；无其他输入。",
    "output": "输出操作后的层序数组，空为 EMPTY。",
    "constraints": [
      "0≤n≤30，值 [-100,100]",
      "调整题左右子树已各自满足大顶堆性质。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个元素；无其他输入。\n// 输出：输出操作后的层序数组，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nusing datatype=int;\n//完全二叉树转化为大顶堆\nvoid heap_adjust(datatype heap[],int n,int cur){\n    if(n<=0 || cur<0 || cur>=n) return;\n    int i;\n    datatype temp=heap[cur];\n    while(i=2*cur+1,i<n){ //确保i是cur的左孩子\n        if(i+1<n && heap[i+1]>heap[i]) i++; //保证heap[i]是较大的子结点\n        if(heap[i]<=temp) break; //父节点大于所有子结点\n        heap[cur] = heap[i]; //结点i的值更新父节点\n        cur = i; //更新cur，接着向下比较\n    }\n    heap[cur] = temp; \n}\n\nvoid heap_make(datatype heap[],int n){\n    for(int i=n/2-1;i>=0;i--) //结点编号从0开始\n        heap_adjust(heap,n,i);\n}\nvoid heap_push(datatype heap[],int &n,datatype k){\n    int cur,pa;\n    cur=n,n++; //cur指向新增加的结点，元素数+1\n    while(cur>0){\n        pa=(cur-1)/2; //父节点\n        if(heap[pa]>=k) break; \n        heap[cur]=heap[pa]; //父节点小就下沉\n        cur=pa; //当前结点指向父节点\n    }\n    heap[cur] = k; //最后赋值\n}\nvoid heap_pop(datatype heap[],int &n){\n    if(n<=0) return;\n    heap[0]=heap[n-1],n--;//用最后一个结点取代根结点\n    if(n>0) heap_adjust(heap,n,0);\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;a.resize(100);\nheap_make(a.data(),n);heap_pop(a.data(),n);printv(vector<int>(a.begin(),a.begin()+n));\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "5\n3 1 8 9 2\n",
        "expected": "8 3 2 1\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-priority-max",
    "title": "STL 堆：大顶堆优先弹出",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "ov6067m2ggauqgm5",
        "blocks": [
          0,
          1,
          2
        ],
        "functions": [
          "priority_queue::max"
        ]
      }
    ],
    "description": "按输入次序入优先队列，执行题目操作。",
    "input": "n；n 个整数；无其他输入。",
    "output": "读取题输出最大值或 EMPTY；其余按弹出次序输出，空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；无其他输入。\n// 输出：读取题输出最大值或 EMPTY；其余按弹出次序输出，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;priority_queue<int>q;for(int x:a)q.push(x);\nvector<int>v;while(!q.empty()){v.push_back(q.top());q.pop();}printv(v);\nreturn 0;}\n",
    "referenceNote": "使用本节原始 priority_queue 声明、比较器与操作；输入代替固定常量。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n",
        "expected": "2\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 3 3\n",
        "expected": "3 3 -2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-priority-min",
    "title": "STL 堆：小顶堆优先弹出",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "ov6067m2ggauqgm5",
        "blocks": [
          0,
          1,
          2
        ],
        "functions": [
          "priority_queue::min"
        ]
      }
    ],
    "description": "按输入次序入优先队列，执行题目操作。",
    "input": "n；n 个整数；无其他输入。",
    "output": "读取题输出最大值或 EMPTY；其余按弹出次序输出，空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；无其他输入。\n// 输出：读取题输出最大值或 EMPTY；其余按弹出次序输出，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;priority_queue<int,vector<int>,greater<int>>q;for(int x:a)q.push(x);\nvector<int>v;while(!q.empty()){v.push_back(q.top());q.pop();}printv(v);\nreturn 0;}\n",
    "referenceNote": "使用本节原始 priority_queue 声明、比较器与操作；输入代替固定常量。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n",
        "expected": "2\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 3 3\n",
        "expected": "-2 3 3\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-priority-custom",
    "title": "STL 堆：自定义结点比较",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "ov6067m2ggauqgm5",
        "blocks": [
          0,
          1,
          2
        ],
        "functions": [
          "priority_queue::custom"
        ]
      }
    ],
    "description": "按输入次序入优先队列，执行题目操作。自定义 node 的 key 越小优先级越高。",
    "input": "n；n 个整数；无其他输入。",
    "output": "读取题输出最大值或 EMPTY；其余按弹出次序输出，空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；无其他输入。\n// 输出：读取题输出最大值或 EMPTY；其余按弹出次序输出，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n//同一类型同时提供两个比较运算；按需要选择 less/greater\nstruct node{\n    int key;\n    bool operator>(const node &n1)const{ return key>n1.key; }\n    bool operator<(const node &n1)const{ return key<n1.key; }\n};\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;priority_queue<node,vector<node>,greater<node>>q;for(int x:a)q.push({x});\nvector<int>v;while(!q.empty()){v.push_back(q.top().key);q.pop();}printv(v);\nreturn 0;}\n",
    "referenceNote": "使用本节原始 priority_queue 声明、比较器与操作；输入代替固定常量。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n",
        "expected": "2\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 3 3\n",
        "expected": "-2 3 3\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-priority-top",
    "title": "STL 堆：读取最大值",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "ov6067m2ggauqgm5",
        "blocks": [
          0,
          1,
          2
        ],
        "functions": [
          "priority_queue::top"
        ]
      }
    ],
    "description": "按输入次序入优先队列，执行题目操作。",
    "input": "n；n 个整数；无其他输入。",
    "output": "读取题输出最大值或 EMPTY；其余按弹出次序输出，空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；无其他输入。\n// 输出：读取题输出最大值或 EMPTY；其余按弹出次序输出，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;priority_queue<int>q;for(int x:a)q.push(x);\nif(q.empty())cout<<\"EMPTY\\n\";else cout<<q.top()<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "使用本节原始 priority_queue 声明、比较器与操作；输入代替固定常量。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n",
        "expected": "2\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 3 3\n",
        "expected": "3\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-priority-push",
    "title": "STL 堆：插入元素",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "ov6067m2ggauqgm5",
        "blocks": [
          0,
          1,
          2
        ],
        "functions": [
          "priority_queue::push"
        ]
      }
    ],
    "description": "按输入次序入优先队列，执行题目操作。",
    "input": "n；n 个整数；x。",
    "output": "读取题输出最大值或 EMPTY；其余按弹出次序输出，空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n7\n",
        "expected": "7\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；x。\n// 输出：读取题输出最大值或 EMPTY；其余按弹出次序输出，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;priority_queue<int>q;for(int x:a)q.push(x);\nint x;cin>>x;q.push(x);vector<int>v;while(!q.empty()){v.push_back(q.top());q.pop();}printv(v);\nreturn 0;}\n",
    "referenceNote": "使用本节原始 priority_queue 声明、比较器与操作；输入代替固定常量。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n7\n",
        "expected": "7\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n7\n",
        "expected": "7 2\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 3 3\n7\n",
        "expected": "7 3 3 -2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-priority-pop",
    "title": "STL 堆：删除最大值",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "ov6067m2ggauqgm5",
        "blocks": [
          0,
          1,
          2
        ],
        "functions": [
          "priority_queue::pop"
        ]
      }
    ],
    "description": "按输入次序入优先队列，执行题目操作。",
    "input": "n；n 个整数；无其他输入。",
    "output": "读取题输出最大值或 EMPTY；其余按弹出次序输出，空为 EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n 个整数；无其他输入。\n// 输出：读取题输出最大值或 EMPTY；其余按弹出次序输出，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;priority_queue<int>q;for(int x:a)q.push(x);\nif(!q.empty())q.pop();vector<int>v;while(!q.empty()){v.push_back(q.top());q.pop();}printv(v);\nreturn 0;}\n",
    "referenceNote": "使用本节原始 priority_queue 声明、比较器与操作；输入代替固定常量。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 3 3\n",
        "expected": "3 -2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-threaded-create",
    "title": "线索二叉树：中序线索化",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "bfazopa9871m0v0n",
        "blocks": [
          0,
          1,
          2,
          3
        ],
        "functions": [
          "thTree_create"
        ]
      }
    ],
    "description": "把普通二叉树转成带头结点的中序线索树。按中序输出每个结点的左右线索标志，1 是线索，0 是孩子。",
    "input": "先序 # 编码；无其他输入。",
    "output": "线索化题每行 标签 ltag rtag，空为 EMPTY；前驱/后继题输出标签或 HEADER；遍历题输出字符序列，空为 EMPTY。",
    "constraints": [
      "0≤节点数≤30；标签 A..Z",
      "非空树 0≤k<结点数；空树 k=0。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "#\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：先序 # 编码；无其他输入。\n// 输出：线索化题每行 标签 ltag rtag，空为 EMPTY；前驱/后继题输出标签或 HEADER；遍历题输出字符序列，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\nusing datatype=char;typedef struct thNode{\ndatatype data;\nthNode *lc,*rc;\nbool ltag,rtag;\nthNode():lc(NULL),rc(NULL),ltag(false),rtag(false){}\n} * thTree;\n//将左右链指针表示的二叉树t线索化，pre为树t根结点的中根序的直接前驱\nvoid convert_to_thTree(thTree t,thTree &pre){\n        if(t==NULL) return;\n    convert_to_thTree(t->lc,pre);   //进入左子树\n    if(t->lc!=NULL)\t\t//t的左指针域是孩子结点\n        t->ltag=false;\n    else\n        t->lc=pre,t->ltag=true;  //左指针就是线索\n    if(pre->rc!=NULL)\n        pre->rtag=false; \n    else\n        pre->rtag=true,pre->rc=t;\n    pre=t;\t\t //t的右子树中根序的第一个结点的直接前驱是t\n    convert_to_thTree(t->rc,pre);\n}\n//将左右链表示的二叉树转化为带头结点的线索二叉树\nvoid thTree_create(thTree &header,thTree t){\n    thTree pre;\n    header=new thNode;\n    header->lc=header;\n    header->rc=header;\n    if(t==NULL){\n        header->ltag=true;\t//没有左孩子，所以只能设置为true\n        return;\n    }\n    header->lc=t,header->ltag=false;\n    header->rc=header,header->rtag=false;\n    pre=header;  //原二叉树的中根序第一个结点的直接前驱为header\n    convert_to_thTree(t,pre);\n    pre->rtag=true,pre->rc=header;\t//pre为中根序列的最后一个结点\n}\n\nthTree midNext(thTree t){\n    thTree ret=t->rc;   //ret是t的右孩子\n    if(t->rtag==false){ //不是线索\n        while(ret->ltag==false)//查找t右子树的最左孩子结点\n            ret=ret->lc; \n    }\n    return ret;\n}\nthTree midpre(thTree t){\n    thTree ret=t->lc;\n    if(t->ltag==false){\n    while(ret->rtag==false)\n        ret=ret->rc;\n}\n    return ret;\n}\nvoid thTree_midOrder(thTree header){\n    if(header==NULL || header->ltag==true) return;\n    thTree t=header;\n    do{\n        t=midNext(t);\n        if(t!=header) cout<<t->data;\n    }while(t!=header);\n    cout<<endl;\n}\nthTree readth(const string&s,int &i){if(i>=(int)s.size()||s[i]=='#'){++i;return nullptr;}auto t=new thNode;t->data=s[i++];t->lc=readth(s,i);t->rc=readth(s,i);return t;}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring s;cin>>s;int i=0;auto t=readth(s,i);thTree h;thTree_create(h,t);\nif(h->ltag)cout<<\"EMPTY\\n\";else for(auto p=midNext(h);p!=h;p=midNext(p))cout<<p->data<<\" \"<<p->ltag<<\" \"<<p->rtag<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "#\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "A##\n",
        "expected": "A 1 1\n"
      },
      {
        "name": "测试 3",
        "stdin": "BA##C##\n",
        "expected": "A 1 1\nB 0 0\nC 1 1\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-threaded-next",
    "title": "线索二叉树：寻找直接后继",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "bfazopa9871m0v0n",
        "blocks": [
          0,
          1,
          2,
          3
        ],
        "functions": [
          "midNext"
        ]
      }
    ],
    "description": "把普通二叉树转成带头结点的中序线索树。从第 k 个中序结点查找相邻结点；边界或空树返回 HEADER。",
    "input": "先序 # 编码；随后 k（从 0 开始）。",
    "output": "线索化题每行 标签 ltag rtag，空为 EMPTY；前驱/后继题输出标签或 HEADER；遍历题输出字符序列，空为 EMPTY。",
    "constraints": [
      "0≤节点数≤30；标签 A..Z",
      "非空树 0≤k<结点数；空树 k=0。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "#\n0\n",
        "expected": "HEADER\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：先序 # 编码；随后 k（从 0 开始）。\n// 输出：线索化题每行 标签 ltag rtag，空为 EMPTY；前驱/后继题输出标签或 HEADER；遍历题输出字符序列，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\nusing datatype=char;typedef struct thNode{\ndatatype data;\nthNode *lc,*rc;\nbool ltag,rtag;\nthNode():lc(NULL),rc(NULL),ltag(false),rtag(false){}\n} * thTree;\n//将左右链指针表示的二叉树t线索化，pre为树t根结点的中根序的直接前驱\nvoid convert_to_thTree(thTree t,thTree &pre){\n        if(t==NULL) return;\n    convert_to_thTree(t->lc,pre);   //进入左子树\n    if(t->lc!=NULL)\t\t//t的左指针域是孩子结点\n        t->ltag=false;\n    else\n        t->lc=pre,t->ltag=true;  //左指针就是线索\n    if(pre->rc!=NULL)\n        pre->rtag=false; \n    else\n        pre->rtag=true,pre->rc=t;\n    pre=t;\t\t //t的右子树中根序的第一个结点的直接前驱是t\n    convert_to_thTree(t->rc,pre);\n}\n//将左右链表示的二叉树转化为带头结点的线索二叉树\nvoid thTree_create(thTree &header,thTree t){\n    thTree pre;\n    header=new thNode;\n    header->lc=header;\n    header->rc=header;\n    if(t==NULL){\n        header->ltag=true;\t//没有左孩子，所以只能设置为true\n        return;\n    }\n    header->lc=t,header->ltag=false;\n    header->rc=header,header->rtag=false;\n    pre=header;  //原二叉树的中根序第一个结点的直接前驱为header\n    convert_to_thTree(t,pre);\n    pre->rtag=true,pre->rc=header;\t//pre为中根序列的最后一个结点\n}\n\nthTree midNext(thTree t){\n    thTree ret=t->rc;   //ret是t的右孩子\n    if(t->rtag==false){ //不是线索\n        while(ret->ltag==false)//查找t右子树的最左孩子结点\n            ret=ret->lc; \n    }\n    return ret;\n}\nthTree midpre(thTree t){\n    thTree ret=t->lc;\n    if(t->ltag==false){\n    while(ret->rtag==false)\n        ret=ret->rc;\n}\n    return ret;\n}\nvoid thTree_midOrder(thTree header){\n    if(header==NULL || header->ltag==true) return;\n    thTree t=header;\n    do{\n        t=midNext(t);\n        if(t!=header) cout<<t->data;\n    }while(t!=header);\n    cout<<endl;\n}\nthTree readth(const string&s,int &i){if(i>=(int)s.size()||s[i]=='#'){++i;return nullptr;}auto t=new thNode;t->data=s[i++];t->lc=readth(s,i);t->rc=readth(s,i);return t;}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring s;cin>>s;int i=0;auto t=readth(s,i);thTree h;thTree_create(h,t);int k;cin>>k;\nauto p=midNext(h);for(int j=0;j<k&&p!=h;j++)p=midNext(p);auto q=midNext(p);if(q==h)cout<<\"HEADER\\n\";else cout<<q->data<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "#\n0\n",
        "expected": "HEADER\n"
      },
      {
        "name": "测试 2",
        "stdin": "A##\n0\n",
        "expected": "HEADER\n"
      },
      {
        "name": "测试 3",
        "stdin": "BA##C##\n0\n",
        "expected": "B\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-threaded-pre",
    "title": "线索二叉树：寻找直接前驱",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "bfazopa9871m0v0n",
        "blocks": [
          0,
          1,
          2,
          3
        ],
        "functions": [
          "midpre"
        ]
      }
    ],
    "description": "把普通二叉树转成带头结点的中序线索树。从第 k 个中序结点查找相邻结点；边界或空树返回 HEADER。",
    "input": "先序 # 编码；随后 k（从 0 开始）。",
    "output": "线索化题每行 标签 ltag rtag，空为 EMPTY；前驱/后继题输出标签或 HEADER；遍历题输出字符序列，空为 EMPTY。",
    "constraints": [
      "0≤节点数≤30；标签 A..Z",
      "非空树 0≤k<结点数；空树 k=0。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "#\n0\n",
        "expected": "HEADER\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：先序 # 编码；随后 k（从 0 开始）。\n// 输出：线索化题每行 标签 ltag rtag，空为 EMPTY；前驱/后继题输出标签或 HEADER；遍历题输出字符序列，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\nusing datatype=char;typedef struct thNode{\ndatatype data;\nthNode *lc,*rc;\nbool ltag,rtag;\nthNode():lc(NULL),rc(NULL),ltag(false),rtag(false){}\n} * thTree;\n//将左右链指针表示的二叉树t线索化，pre为树t根结点的中根序的直接前驱\nvoid convert_to_thTree(thTree t,thTree &pre){\n        if(t==NULL) return;\n    convert_to_thTree(t->lc,pre);   //进入左子树\n    if(t->lc!=NULL)\t\t//t的左指针域是孩子结点\n        t->ltag=false;\n    else\n        t->lc=pre,t->ltag=true;  //左指针就是线索\n    if(pre->rc!=NULL)\n        pre->rtag=false; \n    else\n        pre->rtag=true,pre->rc=t;\n    pre=t;\t\t //t的右子树中根序的第一个结点的直接前驱是t\n    convert_to_thTree(t->rc,pre);\n}\n//将左右链表示的二叉树转化为带头结点的线索二叉树\nvoid thTree_create(thTree &header,thTree t){\n    thTree pre;\n    header=new thNode;\n    header->lc=header;\n    header->rc=header;\n    if(t==NULL){\n        header->ltag=true;\t//没有左孩子，所以只能设置为true\n        return;\n    }\n    header->lc=t,header->ltag=false;\n    header->rc=header,header->rtag=false;\n    pre=header;  //原二叉树的中根序第一个结点的直接前驱为header\n    convert_to_thTree(t,pre);\n    pre->rtag=true,pre->rc=header;\t//pre为中根序列的最后一个结点\n}\n\nthTree midNext(thTree t){\n    thTree ret=t->rc;   //ret是t的右孩子\n    if(t->rtag==false){ //不是线索\n        while(ret->ltag==false)//查找t右子树的最左孩子结点\n            ret=ret->lc; \n    }\n    return ret;\n}\nthTree midpre(thTree t){\n    thTree ret=t->lc;\n    if(t->ltag==false){\n    while(ret->rtag==false)\n        ret=ret->rc;\n}\n    return ret;\n}\nvoid thTree_midOrder(thTree header){\n    if(header==NULL || header->ltag==true) return;\n    thTree t=header;\n    do{\n        t=midNext(t);\n        if(t!=header) cout<<t->data;\n    }while(t!=header);\n    cout<<endl;\n}\nthTree readth(const string&s,int &i){if(i>=(int)s.size()||s[i]=='#'){++i;return nullptr;}auto t=new thNode;t->data=s[i++];t->lc=readth(s,i);t->rc=readth(s,i);return t;}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring s;cin>>s;int i=0;auto t=readth(s,i);thTree h;thTree_create(h,t);int k;cin>>k;\nauto p=midNext(h);for(int j=0;j<k&&p!=h;j++)p=midNext(p);auto q=midpre(p);if(q==h)cout<<\"HEADER\\n\";else cout<<q->data<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "#\n0\n",
        "expected": "HEADER\n"
      },
      {
        "name": "测试 2",
        "stdin": "A##\n0\n",
        "expected": "HEADER\n"
      },
      {
        "name": "测试 3",
        "stdin": "BA##C##\n0\n",
        "expected": "HEADER\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-threaded-traverse",
    "title": "线索二叉树：中序遍历",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "bfazopa9871m0v0n",
        "blocks": [
          0,
          1,
          2,
          3
        ],
        "functions": [
          "thTree_midOrder"
        ]
      }
    ],
    "description": "把普通二叉树转成带头结点的中序线索树。仅沿后继访问，直到回到头结点。",
    "input": "先序 # 编码；无其他输入。",
    "output": "线索化题每行 标签 ltag rtag，空为 EMPTY；前驱/后继题输出标签或 HEADER；遍历题输出字符序列，空为 EMPTY。",
    "constraints": [
      "0≤节点数≤30；标签 A..Z",
      "非空树 0≤k<结点数；空树 k=0。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "#\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：先序 # 编码；无其他输入。\n// 输出：线索化题每行 标签 ltag rtag，空为 EMPTY；前驱/后继题输出标签或 HEADER；遍历题输出字符序列，空为 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\nusing datatype=char;typedef struct thNode{\ndatatype data;\nthNode *lc,*rc;\nbool ltag,rtag;\nthNode():lc(NULL),rc(NULL),ltag(false),rtag(false){}\n} * thTree;\n//将左右链指针表示的二叉树t线索化，pre为树t根结点的中根序的直接前驱\nvoid convert_to_thTree(thTree t,thTree &pre){\n        if(t==NULL) return;\n    convert_to_thTree(t->lc,pre);   //进入左子树\n    if(t->lc!=NULL)\t\t//t的左指针域是孩子结点\n        t->ltag=false;\n    else\n        t->lc=pre,t->ltag=true;  //左指针就是线索\n    if(pre->rc!=NULL)\n        pre->rtag=false; \n    else\n        pre->rtag=true,pre->rc=t;\n    pre=t;\t\t //t的右子树中根序的第一个结点的直接前驱是t\n    convert_to_thTree(t->rc,pre);\n}\n//将左右链表示的二叉树转化为带头结点的线索二叉树\nvoid thTree_create(thTree &header,thTree t){\n    thTree pre;\n    header=new thNode;\n    header->lc=header;\n    header->rc=header;\n    if(t==NULL){\n        header->ltag=true;\t//没有左孩子，所以只能设置为true\n        return;\n    }\n    header->lc=t,header->ltag=false;\n    header->rc=header,header->rtag=false;\n    pre=header;  //原二叉树的中根序第一个结点的直接前驱为header\n    convert_to_thTree(t,pre);\n    pre->rtag=true,pre->rc=header;\t//pre为中根序列的最后一个结点\n}\n\nthTree midNext(thTree t){\n    thTree ret=t->rc;   //ret是t的右孩子\n    if(t->rtag==false){ //不是线索\n        while(ret->ltag==false)//查找t右子树的最左孩子结点\n            ret=ret->lc; \n    }\n    return ret;\n}\nthTree midpre(thTree t){\n    thTree ret=t->lc;\n    if(t->ltag==false){\n    while(ret->rtag==false)\n        ret=ret->rc;\n}\n    return ret;\n}\nvoid thTree_midOrder(thTree header){\n    if(header==NULL || header->ltag==true) return;\n    thTree t=header;\n    do{\n        t=midNext(t);\n        if(t!=header) cout<<t->data;\n    }while(t!=header);\n    cout<<endl;\n}\nthTree readth(const string&s,int &i){if(i>=(int)s.size()||s[i]=='#'){++i;return nullptr;}auto t=new thNode;t->data=s[i++];t->lc=readth(s,i);t->rc=readth(s,i);return t;}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring s;cin>>s;int i=0;auto t=readth(s,i);thTree h;thTree_create(h,t);\nif(h->ltag)cout<<\"EMPTY\\n\";else thTree_midOrder(h);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "#\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "A##\n",
        "expected": "A\n"
      },
      {
        "name": "测试 3",
        "stdin": "BA##C##\n",
        "expected": "ABC\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-huffman-build",
    "title": "哈夫曼树：构建并求带权路径长度",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "ysfglgiveivmrnif",
        "blocks": [
          0,
          1,
          2,
          3
        ],
        "functions": [
          "huTree_create"
        ]
      }
    ],
    "description": "每次合并权重最小的两棵树，较小者作为左孩子。计算各叶权重×深度之和；单个叶结点深度为 0。",
    "input": "m；随后 m 行“字符 权重”。",
    "output": "输出带权路径长度。",
    "constraints": [
      "1≤m≤20；字符为互异 A..Z；权重 1..1000",
      "编码表题保证每轮最小和次小权重均唯一，避免并列导致多解。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "1\nA 1\n",
        "expected": "0\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：m；随后 m 行“字符 权重”。\n// 输出：输出带权路径长度。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <cstdlib>\n#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n#define M 20\ntypedef char datatype;\ntypedef struct hutNode{\ndatatype data;\nint w,idx;//w是当前结点的权重，idx表示当前结点在树中的下标\nint lc,rc;\nbool operator<(const hutNode &hn)const{\nreturn w>hn.w;  //为了使huTree类型的优先队列中权重小的优先级高\n}\n}huTree[M<<1]; //由m个叶结点构造的哈夫曼树有2m-1个结点\n//m是叶结点数量，data是叶结点的数据信息，w是权重\nvoid huTree_create(huTree &t,const datatype data[],int w[],int m){\n    if(m<=0 || m>M) std::abort();\n    int i;\n    hutNode hn1,hn2,hn3;\n    priority_queue<hutNode>f; //用优先队列存放结点集合\n    for(i=1;i<=m;i++){ \t//初始化m个叶结点\n        t[i].data=data[i-1],t[i].w=w[i-1],t[i].idx=i;//因为t数组规定从1开始，data数组是0开始\n        t[i].lc=-1,t[i].rc=-1;\n        f.push(t[i]);\n            }\n    while(f.size()>1){\n        hn1=f.top(),f.pop();\n        hn2=f.top(),f.pop();\n        hn3.w=hn1.w+hn2.w,hn3.idx=i;\n        hn3.lc=hn1.idx,hn3.rc=hn2.idx;\n        f.push(hn3);\n        t[i++]=hn3;\n    }\n    t[0]=f.top(),t[0].idx=0;\n}\n//利用哈夫曼树t对每个叶结点编码，编码存放在参数code中\nvoid huTree_coding(huTree t,int cur,map<char,string>&code){//map是一种映射，每一个char存储对应一个字符串\n    static string temp;\n    if(cur==0) temp.clear();\n    if(t[cur].lc==-1){\t\t\t//到达叶结点，保存编码\n        code[t[cur].data]=temp.empty()?\"0\":temp; \t\n        return;\n    }\n    temp+='0';\t//左分支路径标注为0\n    huTree_coding(t,t[cur].lc,code);\n    temp.erase(temp.length()-1);//删掉添加的一步\n    temp+='1'; \t//右分支路径标注为1\n    huTree_coding(t,t[cur].rc,code);\n    temp.erase(temp.length()-1);\n}\nstring coding(huTree &t,string txt){\n    if(txt.empty()) return \"\";\n    int w[M],m=0,len=txt.length(),i;        //m为txt中不同字符的数量\n    char data[M];                           //txt中出现的字符\n    map<char,int> freq;                        //字符出现的次数\n    //统计每个字符出现的次数\n    for(i=0;i<len;i++) freq[txt[i]]++;\n    if(freq.size()>M) std::abort();\n    for(map<char,int>::iterator it=freq.begin();it!=freq.end();it++)\n        data[m]=it->first,w[m]=it->second,++m; //转存\n    huTree_create(t,data,w,m);               //创建哈夫曼树\n    map<char,string>code;\n    huTree_coding(t,0,code);                 //获得每个字符的编码\n    string ret;                              //存放编码结果\n    for(i=0;i<len;i++)                       //求txt的编码\n        ret+=code[txt[i]];\n    return ret;\n}\nstring huTree_decoding(huTree t,string code){\n    string ret;\n    if(t[0].lc==-1){ //单字符字母表，约定每个字符编码为 0\n        for(char bit:code){\n            if(bit!='0') std::abort();\n            ret+=t[0].data;\n        }\n        return ret;\n    }\n    hutNode cur=t[0];\n    for(int i=0;i<(int)code.length();i++){\n        if(code[i]!='0' && code[i]!='1')\n            std::abort();\n        cur=t[code[i]=='0'?cur.lc:cur.rc];\n        if(cur.lc==-1){\n            ret+=cur.data;\n            cur=t[0];\n        }\n    }\n    if(cur.idx!=0) std::abort();\n    return ret;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint m;cin>>m;char d[M];int w[M];for(int i=0;i<m;i++)cin>>d[i]>>w[i];huTree t;huTree_create(t,d,w,m);\nmap<char,string>code;huTree_coding(t,0,code);int cost=0;for(int i=0;i<m;i++)cost+=w[i]*(m==1?0:(int)code[d[i]].size());cout<<cost<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。 浏览器工具链不支持C++异常；完整参考仅将超界异常改为终止保护，题目约束内不会触发。笔记原码与最小修正版均保持不变。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "1\nA 1\n",
        "expected": "0\n"
      },
      {
        "name": "测试 2",
        "stdin": "2\nA 1\nB 3\n",
        "expected": "4\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\nA 1\nB 2\nC 5\n",
        "expected": "11\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-huffman-codes",
    "title": "哈夫曼树：按左右分支生成编码表",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "ysfglgiveivmrnif",
        "blocks": [
          0,
          1,
          2,
          3
        ],
        "functions": [
          "huTree_coding"
        ]
      }
    ],
    "description": "每次合并权重最小的两棵树，较小者作为左孩子。左边记 0，右边记 1，输出每个字符的路径；单字符约定为 0。",
    "input": "m；随后 m 行“字符 权重”。",
    "output": "按字符升序，每行输出“字符 编码”。",
    "constraints": [
      "1≤m≤20；字符为互异 A..Z；权重 1..1000",
      "编码表题保证每轮最小和次小权重均唯一，避免并列导致多解。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "1\nA 1\n",
        "expected": "A 0\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：m；随后 m 行“字符 权重”。\n// 输出：按字符升序，每行输出“字符 编码”。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <cstdlib>\n#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n#define M 20\ntypedef char datatype;\ntypedef struct hutNode{\ndatatype data;\nint w,idx;//w是当前结点的权重，idx表示当前结点在树中的下标\nint lc,rc;\nbool operator<(const hutNode &hn)const{\nreturn w>hn.w;  //为了使huTree类型的优先队列中权重小的优先级高\n}\n}huTree[M<<1]; //由m个叶结点构造的哈夫曼树有2m-1个结点\n//m是叶结点数量，data是叶结点的数据信息，w是权重\nvoid huTree_create(huTree &t,const datatype data[],int w[],int m){\n    if(m<=0 || m>M) std::abort();\n    int i;\n    hutNode hn1,hn2,hn3;\n    priority_queue<hutNode>f; //用优先队列存放结点集合\n    for(i=1;i<=m;i++){ \t//初始化m个叶结点\n        t[i].data=data[i-1],t[i].w=w[i-1],t[i].idx=i;//因为t数组规定从1开始，data数组是0开始\n        t[i].lc=-1,t[i].rc=-1;\n        f.push(t[i]);\n            }\n    while(f.size()>1){\n        hn1=f.top(),f.pop();\n        hn2=f.top(),f.pop();\n        hn3.w=hn1.w+hn2.w,hn3.idx=i;\n        hn3.lc=hn1.idx,hn3.rc=hn2.idx;\n        f.push(hn3);\n        t[i++]=hn3;\n    }\n    t[0]=f.top(),t[0].idx=0;\n}\n//利用哈夫曼树t对每个叶结点编码，编码存放在参数code中\nvoid huTree_coding(huTree t,int cur,map<char,string>&code){//map是一种映射，每一个char存储对应一个字符串\n    static string temp;\n    if(cur==0) temp.clear();\n    if(t[cur].lc==-1){\t\t\t//到达叶结点，保存编码\n        code[t[cur].data]=temp.empty()?\"0\":temp; \t\n        return;\n    }\n    temp+='0';\t//左分支路径标注为0\n    huTree_coding(t,t[cur].lc,code);\n    temp.erase(temp.length()-1);//删掉添加的一步\n    temp+='1'; \t//右分支路径标注为1\n    huTree_coding(t,t[cur].rc,code);\n    temp.erase(temp.length()-1);\n}\nstring coding(huTree &t,string txt){\n    if(txt.empty()) return \"\";\n    int w[M],m=0,len=txt.length(),i;        //m为txt中不同字符的数量\n    char data[M];                           //txt中出现的字符\n    map<char,int> freq;                        //字符出现的次数\n    //统计每个字符出现的次数\n    for(i=0;i<len;i++) freq[txt[i]]++;\n    if(freq.size()>M) std::abort();\n    for(map<char,int>::iterator it=freq.begin();it!=freq.end();it++)\n        data[m]=it->first,w[m]=it->second,++m; //转存\n    huTree_create(t,data,w,m);               //创建哈夫曼树\n    map<char,string>code;\n    huTree_coding(t,0,code);                 //获得每个字符的编码\n    string ret;                              //存放编码结果\n    for(i=0;i<len;i++)                       //求txt的编码\n        ret+=code[txt[i]];\n    return ret;\n}\nstring huTree_decoding(huTree t,string code){\n    string ret;\n    if(t[0].lc==-1){ //单字符字母表，约定每个字符编码为 0\n        for(char bit:code){\n            if(bit!='0') std::abort();\n            ret+=t[0].data;\n        }\n        return ret;\n    }\n    hutNode cur=t[0];\n    for(int i=0;i<(int)code.length();i++){\n        if(code[i]!='0' && code[i]!='1')\n            std::abort();\n        cur=t[code[i]=='0'?cur.lc:cur.rc];\n        if(cur.lc==-1){\n            ret+=cur.data;\n            cur=t[0];\n        }\n    }\n    if(cur.idx!=0) std::abort();\n    return ret;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint m;cin>>m;char d[M];int w[M];for(int i=0;i<m;i++)cin>>d[i]>>w[i];huTree t;huTree_create(t,d,w,m);\nmap<char,string>code;huTree_coding(t,0,code);for(auto p:code)cout<<p.first<<\" \"<<p.second<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。 浏览器工具链不支持C++异常；完整参考仅将超界异常改为终止保护，题目约束内不会触发。笔记原码与最小修正版均保持不变。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "1\nA 1\n",
        "expected": "A 0\n"
      },
      {
        "name": "测试 2",
        "stdin": "2\nA 1\nB 3\n",
        "expected": "A 0\nB 1\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\nA 1\nB 2\nC 5\n",
        "expected": "A 00\nB 01\nC 1\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-huffman-encode",
    "title": "哈夫曼编码：按文本频率压缩",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "ysfglgiveivmrnif",
        "blocks": [
          0,
          1,
          2,
          3
        ],
        "functions": [
          "coding"
        ]
      }
    ],
    "description": "统计文本字符频率，建立哈夫曼树并串接每个字符的编码。单字符用 0，空文本输出 EMPTY。",
    "input": "一行只含小写字母的文本，允许空行。",
    "output": "输出二进制编码串；空文本 EMPTY。",
    "constraints": [
      "长度 0..100；不同字符≤20",
      "非单字符时每轮最小和次小权重均唯一。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：一行只含小写字母的文本，允许空行。\n// 输出：输出二进制编码串；空文本 EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <cstdlib>\n#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n#define M 20\ntypedef char datatype;\ntypedef struct hutNode{\ndatatype data;\nint w,idx;//w是当前结点的权重，idx表示当前结点在树中的下标\nint lc,rc;\nbool operator<(const hutNode &hn)const{\nreturn w>hn.w;  //为了使huTree类型的优先队列中权重小的优先级高\n}\n}huTree[M<<1]; //由m个叶结点构造的哈夫曼树有2m-1个结点\n//m是叶结点数量，data是叶结点的数据信息，w是权重\nvoid huTree_create(huTree &t,const datatype data[],int w[],int m){\n    if(m<=0 || m>M) std::abort();\n    int i;\n    hutNode hn1,hn2,hn3;\n    priority_queue<hutNode>f; //用优先队列存放结点集合\n    for(i=1;i<=m;i++){ \t//初始化m个叶结点\n        t[i].data=data[i-1],t[i].w=w[i-1],t[i].idx=i;//因为t数组规定从1开始，data数组是0开始\n        t[i].lc=-1,t[i].rc=-1;\n        f.push(t[i]);\n            }\n    while(f.size()>1){\n        hn1=f.top(),f.pop();\n        hn2=f.top(),f.pop();\n        hn3.w=hn1.w+hn2.w,hn3.idx=i;\n        hn3.lc=hn1.idx,hn3.rc=hn2.idx;\n        f.push(hn3);\n        t[i++]=hn3;\n    }\n    t[0]=f.top(),t[0].idx=0;\n}\n//利用哈夫曼树t对每个叶结点编码，编码存放在参数code中\nvoid huTree_coding(huTree t,int cur,map<char,string>&code){//map是一种映射，每一个char存储对应一个字符串\n    static string temp;\n    if(cur==0) temp.clear();\n    if(t[cur].lc==-1){\t\t\t//到达叶结点，保存编码\n        code[t[cur].data]=temp.empty()?\"0\":temp; \t\n        return;\n    }\n    temp+='0';\t//左分支路径标注为0\n    huTree_coding(t,t[cur].lc,code);\n    temp.erase(temp.length()-1);//删掉添加的一步\n    temp+='1'; \t//右分支路径标注为1\n    huTree_coding(t,t[cur].rc,code);\n    temp.erase(temp.length()-1);\n}\nstring coding(huTree &t,string txt){\n    if(txt.empty()) return \"\";\n    int w[M],m=0,len=txt.length(),i;        //m为txt中不同字符的数量\n    char data[M];                           //txt中出现的字符\n    map<char,int> freq;                        //字符出现的次数\n    //统计每个字符出现的次数\n    for(i=0;i<len;i++) freq[txt[i]]++;\n    if(freq.size()>M) std::abort();\n    for(map<char,int>::iterator it=freq.begin();it!=freq.end();it++)\n        data[m]=it->first,w[m]=it->second,++m; //转存\n    huTree_create(t,data,w,m);               //创建哈夫曼树\n    map<char,string>code;\n    huTree_coding(t,0,code);                 //获得每个字符的编码\n    string ret;                              //存放编码结果\n    for(i=0;i<len;i++)                       //求txt的编码\n        ret+=code[txt[i]];\n    return ret;\n}\nstring huTree_decoding(huTree t,string code){\n    string ret;\n    if(t[0].lc==-1){ //单字符字母表，约定每个字符编码为 0\n        for(char bit:code){\n            if(bit!='0') std::abort();\n            ret+=t[0].data;\n        }\n        return ret;\n    }\n    hutNode cur=t[0];\n    for(int i=0;i<(int)code.length();i++){\n        if(code[i]!='0' && code[i]!='1')\n            std::abort();\n        cur=t[code[i]=='0'?cur.lc:cur.rc];\n        if(cur.lc==-1){\n            ret+=cur.data;\n            cur=t[0];\n        }\n    }\n    if(cur.idx!=0) std::abort();\n    return ret;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring s;getline(cin,s);huTree t;\nstring v=coding(t,s);cout<<(v.empty()?\"EMPTY\":v)<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。 浏览器工具链不支持C++异常；完整参考仅将超界异常改为终止保护，题目约束内不会触发。笔记原码与最小修正版均保持不变。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "aaaa\n",
        "expected": "0000\n"
      },
      {
        "name": "测试 3",
        "stdin": "aaabb\n",
        "expected": "11100\n"
      },
      {
        "name": "测试 4",
        "stdin": "aaaaaaabbc\n",
        "expected": "1111111010100\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-huffman-decode",
    "title": "哈夫曼解码：沿二叉树还原字符",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "ysfglgiveivmrnif",
        "blocks": [
          0,
          1,
          2,
          3
        ],
        "functions": [
          "huTree_decoding"
        ]
      }
    ],
    "description": "按权重重建同一棵哈夫曼树。从根按 0/1 走左右边，到叶输出字符并回到根；非法位或结束在非叶处输出 INVALID。",
    "input": "m；m 行“字符 权重”；最后一行待解码非空比特串。",
    "output": "输出原文，非法串输出 INVALID。",
    "constraints": [
      "1≤m≤20；权重 1..1000，每轮两最小权重唯一",
      "编码长度 1..200，只含数字 0/1（允许截断）。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "1\nA 1\n000\n",
        "expected": "AAA\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：m；m 行“字符 权重”；最后一行待解码非空比特串。\n// 输出：输出原文，非法串输出 INVALID。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <cstdlib>\n#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n#define M 20\ntypedef char datatype;\ntypedef struct hutNode{\ndatatype data;\nint w,idx;//w是当前结点的权重，idx表示当前结点在树中的下标\nint lc,rc;\nbool operator<(const hutNode &hn)const{\nreturn w>hn.w;  //为了使huTree类型的优先队列中权重小的优先级高\n}\n}huTree[M<<1]; //由m个叶结点构造的哈夫曼树有2m-1个结点\n//m是叶结点数量，data是叶结点的数据信息，w是权重\nvoid huTree_create(huTree &t,const datatype data[],int w[],int m){\n    if(m<=0 || m>M) std::abort();\n    int i;\n    hutNode hn1,hn2,hn3;\n    priority_queue<hutNode>f; //用优先队列存放结点集合\n    for(i=1;i<=m;i++){ \t//初始化m个叶结点\n        t[i].data=data[i-1],t[i].w=w[i-1],t[i].idx=i;//因为t数组规定从1开始，data数组是0开始\n        t[i].lc=-1,t[i].rc=-1;\n        f.push(t[i]);\n            }\n    while(f.size()>1){\n        hn1=f.top(),f.pop();\n        hn2=f.top(),f.pop();\n        hn3.w=hn1.w+hn2.w,hn3.idx=i;\n        hn3.lc=hn1.idx,hn3.rc=hn2.idx;\n        f.push(hn3);\n        t[i++]=hn3;\n    }\n    t[0]=f.top(),t[0].idx=0;\n}\n//利用哈夫曼树t对每个叶结点编码，编码存放在参数code中\nvoid huTree_coding(huTree t,int cur,map<char,string>&code){//map是一种映射，每一个char存储对应一个字符串\n    static string temp;\n    if(cur==0) temp.clear();\n    if(t[cur].lc==-1){\t\t\t//到达叶结点，保存编码\n        code[t[cur].data]=temp.empty()?\"0\":temp; \t\n        return;\n    }\n    temp+='0';\t//左分支路径标注为0\n    huTree_coding(t,t[cur].lc,code);\n    temp.erase(temp.length()-1);//删掉添加的一步\n    temp+='1'; \t//右分支路径标注为1\n    huTree_coding(t,t[cur].rc,code);\n    temp.erase(temp.length()-1);\n}\nstring coding(huTree &t,string txt){\n    if(txt.empty()) return \"\";\n    int w[M],m=0,len=txt.length(),i;        //m为txt中不同字符的数量\n    char data[M];                           //txt中出现的字符\n    map<char,int> freq;                        //字符出现的次数\n    //统计每个字符出现的次数\n    for(i=0;i<len;i++) freq[txt[i]]++;\n    if(freq.size()>M) std::abort();\n    for(map<char,int>::iterator it=freq.begin();it!=freq.end();it++)\n        data[m]=it->first,w[m]=it->second,++m; //转存\n    huTree_create(t,data,w,m);               //创建哈夫曼树\n    map<char,string>code;\n    huTree_coding(t,0,code);                 //获得每个字符的编码\n    string ret;                              //存放编码结果\n    for(i=0;i<len;i++)                       //求txt的编码\n        ret+=code[txt[i]];\n    return ret;\n}\nstring huTree_decoding(huTree t,string code){\n    string ret;\n    if(t[0].lc==-1){ //单字符字母表，约定每个字符编码为 0\n        for(char bit:code){\n            if(bit!='0') std::abort();\n            ret+=t[0].data;\n        }\n        return ret;\n    }\n    hutNode cur=t[0];\n    for(int i=0;i<(int)code.length();i++){\n        if(code[i]!='0' && code[i]!='1')\n            std::abort();\n        cur=t[code[i]=='0'?cur.lc:cur.rc];\n        if(cur.lc==-1){\n            ret+=cur.data;\n            cur=t[0];\n        }\n    }\n    if(cur.idx!=0) std::abort();\n    return ret;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint m;cin>>m;char d[M];int w[M];for(int i=0;i<m;i++)cin>>d[i]>>w[i];huTree t;huTree_create(t,d,w,m);string code;cin>>code;\nbool valid=true;int cur=0;\nfor(char bit:code){\n if(bit!='0'&&bit!='1'){valid=false;break;}\n if(t[0].lc==-1){if(bit!='0'){valid=false;break;}}\n else{cur=bit=='0'?t[cur].lc:t[cur].rc;if(t[cur].lc==-1)cur=0;}\n}\nif(cur!=0)valid=false;\nif(!valid)cout<<\"INVALID\\n\";else cout<<huTree_decoding(t,code)<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。 浏览器工具链不支持C++异常；完整参考仅将超界异常改为终止保护，题目约束内不会触发。笔记原码与最小修正版均保持不变。 非法或截断编码由输入驱动先检查，再调用原解码函数。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "1\nA 1\n000\n",
        "expected": "AAA\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\nA 1\n1\n",
        "expected": "INVALID\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\nA 1\nB 2\nC 5\n00011\n",
        "expected": "ABC\n"
      },
      {
        "name": "测试 4",
        "stdin": "3\nA 1\nB 2\nC 5\n0\n",
        "expected": "INVALID\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-rpn-convert",
    "title": "逆波兰表达式：调度场转换",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "xcwkgfs7vbb92p2k",
        "blocks": [
          0,
          1
        ],
        "functions": [
          "shuntingYard"
        ]
      }
    ],
    "description": "把合法中缀整数四则表达式转为后缀表达式，运算符左结合，数字保持完整。",
    "input": "一行合法表达式，支持空格、非负整数及二元 +-*/、圆括号。",
    "output": "操作数和操作符以空格分开。",
    "constraints": [
      "长度 1..100；整数字面量 0..1000；语法合法且无一元运算符。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n",
        "expected": "0\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：一行合法表达式，支持空格、非负整数及二元 +-*/、圆括号。\n// 输出：操作数和操作符以空格分开。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <cstdlib>\n#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=200;\nmap<char,int>pri; //存放优先级\ntypedef struct rpnNode{\nbool tag;//true表示操作数，false表示运算符\nunion{ //共用一块内存的集合体\nint v;//操作数\nchar op;//运算符\n}data;//这个集合体叫data，也就是表达式\n} rpn[N]; //数组\n//pri 在上一代码块中声明；仅处理合法二元 + - * / 与圆括号\nvoid shuntingYard(string infix,rpn &postfix,int &n){\n    pri['+']=pri['-']=1;\n    pri['*']=pri['/']=2;\n    n=0;\n    stack<char> stk;\n    for(int i=0;i<(int)infix.length();i++){\n        if(isspace(static_cast<unsigned char>(infix[i]))) continue;\n        if(isdigit(static_cast<unsigned char>(infix[i]))){\n            int num=0;\n            while(i<(int)infix.length() && isdigit(static_cast<unsigned char>(infix[i])))\n                num=num*10+infix[i++]-'0';\n            if(n>=N) std::abort();\n            postfix[n].tag=true;\n            postfix[n++].data.v=num;\n            --i;\n        }else if(infix[i]=='('){\n            stk.push('(');\n        }else{\n            char op=infix[i];\n            if(op!=')' && op!='+' && op!='-' && op!='*' && op!='/')\n                std::abort();\n            while(!stk.empty() && stk.top()!='(' &&\n                  (op==')' || pri[stk.top()]>=pri[op])){\n                if(n>=N) std::abort();\n                postfix[n].tag=false;\n                postfix[n++].data.op=stk.top();\n                stk.pop();\n            }\n            if(op==')'){\n                if(stk.empty()) std::abort();\n                stk.pop();\n            }else stk.push(op);\n        }\n    }\n    while(!stk.empty()){\n        if(stk.top()=='(') std::abort();\n        if(n>=N) std::abort();\n        postfix[n].tag=false;\n        postfix[n++].data.op=stk.top();\n        stk.pop();\n    }\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring text;getline(cin,text);rpn p;int n;\nshuntingYard(text,p,n);for(int i=0;i<n;i++){if(p[i].tag)cout<<p[i].data.v;else cout<<p[i].data.op;cout<<\" \";}cout<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。 浏览器工具链不支持C++异常；完整参考仅将超界异常改为终止保护，题目约束内不会触发。笔记原码与最小修正版均保持不变。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n",
        "expected": "0\n"
      },
      {
        "name": "测试 2",
        "stdin": "12+3*(4-2)\n",
        "expected": "12 3 4 2 - * +\n"
      },
      {
        "name": "测试 3",
        "stdin": "8/4/2\n",
        "expected": "8 4 / 2 /\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-forest-parent-create",
    "title": "父节点表示法：构建树",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "vgyr818zdigzrma9",
        "blocks": [
          0,
          1,
          2
        ],
        "functions": [
          "create"
        ]
      }
    ],
    "description": "节点编号为0..n-1。子节点和兄弟均按原节点编号升序排列。构建树并输出根编号和存储结构。空树根、非法节点或不存在的相邻节点记为-1。",
    "input": "n；接下来n行：单字符标签 parent；根的parent=-1。",
    "output": "构建题第一行根编号，之后每行“编号 标签 parent”；查询题按顺序输出编号。",
    "constraints": [
      "0≤n≤26；标签为互异A..Z",
      "非空输入保证是单棵有效有根树；0≤q≤100；查询编号-1..n"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n",
        "expected": "-1\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；接下来n行：单字符标签 parent；根的parent=-1。\n// 输出：构建题第一行根编号，之后每行“编号 标签 parent”；查询题按顺序输出编号。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=char;\nstruct paNode{\nint pa;\t//父结点下标\ndatatype data;\npaNode():pa(-1){}\t//根结点的父节点下标为-1\n};\nstruct paTree{\npaNode tree[N];\nint n;\t//树的结点数量\nint root; //根结点下标\n};\npaTree create(datatype data[N],int pa[N],int n){\n    paTree t;\n    t.n = n;\n    t.root=-1;\n    for(int i=0;i<n;i++){\n        t.tree[i].pa=pa[i],t.tree[i].data=data[i];\n        if(pa[i]==-1) t.root=i;\n    }\n    return t;\n}\nint lm_child(paTree t,int cur){\n    if(cur<0 || cur>=t.n) return -1;\n    for(int i=0;i<t.n;i++)\n        if(t.tree[i].pa==cur) return i;\n    return -1;\n}\nint r_bro(paTree t,int cur){\n    if(cur<0 || cur>=t.n || t.tree[cur].pa==-1) return -1;\n    for(int i=cur+1;i<t.n;i++)\n        if(t.tree[i].pa==t.tree[cur].pa) return i;\n    return -1;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;char data[N];int pa[N];for(int i=0;i<n;i++)cin>>data[i]>>pa[i];auto t=create(data,pa,n);\ncout<<t.root<<\"\\n\";for(int i=0;i<n;i++)cout<<i<<\" \"<<t.tree[i].data<<\" \"<<t.tree[i].pa<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n",
        "expected": "-1\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\nA -1\n",
        "expected": "0\n0 A -1\n"
      },
      {
        "name": "测试 3",
        "stdin": "5\nA -1\nB 0\nC 0\nD 1\nE 1\n",
        "expected": "0\n0 A -1\n1 B 0\n2 C 0\n3 D 1\n4 E 1\n"
      },
      {
        "name": "测试 4",
        "stdin": "4\nA 2\nB 2\nC -1\nD 0\n",
        "expected": "2\n0 A 2\n1 B 2\n2 C -1\n3 D 0\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-forest-parent-child",
    "title": "父节点表示法：寻找最左孩子",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "vgyr818zdigzrma9",
        "blocks": [
          0,
          1,
          2
        ],
        "functions": [
          "lm_child"
        ]
      }
    ],
    "description": "节点编号为0..n-1。子节点和兄弟均按原节点编号升序排列。对每个查询节点，返回最左孩子编号。空树根、非法节点或不存在的相邻节点记为-1。",
    "input": "n；接下来n行：单字符标签 parent；根的parent=-1。随后q和q个查询节点编号。",
    "output": "构建题第一行根编号，之后每行“编号 标签 parent”；查询题按顺序输出编号。",
    "constraints": [
      "0≤n≤26；标签为互异A..Z",
      "非空输入保证是单棵有效有根树；0≤q≤100；查询编号-1..n"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n2\n-1 0\n",
        "expected": "-1 -1\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；接下来n行：单字符标签 parent；根的parent=-1。随后q和q个查询节点编号。\n// 输出：构建题第一行根编号，之后每行“编号 标签 parent”；查询题按顺序输出编号。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=char;\nstruct paNode{\nint pa;\t//父结点下标\ndatatype data;\npaNode():pa(-1){}\t//根结点的父节点下标为-1\n};\nstruct paTree{\npaNode tree[N];\nint n;\t//树的结点数量\nint root; //根结点下标\n};\npaTree create(datatype data[N],int pa[N],int n){\n    paTree t;\n    t.n = n;\n    t.root=-1;\n    for(int i=0;i<n;i++){\n        t.tree[i].pa=pa[i],t.tree[i].data=data[i];\n        if(pa[i]==-1) t.root=i;\n    }\n    return t;\n}\nint lm_child(paTree t,int cur){\n    if(cur<0 || cur>=t.n) return -1;\n    for(int i=0;i<t.n;i++)\n        if(t.tree[i].pa==cur) return i;\n    return -1;\n}\nint r_bro(paTree t,int cur){\n    if(cur<0 || cur>=t.n || t.tree[cur].pa==-1) return -1;\n    for(int i=cur+1;i<t.n;i++)\n        if(t.tree[i].pa==t.tree[cur].pa) return i;\n    return -1;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;char data[N];int pa[N];for(int i=0;i<n;i++)cin>>data[i]>>pa[i];auto t=create(data,pa,n);\nint q;cin>>q;while(q--){int x;cin>>x;cout<<lm_child(t,x)<<\" \";}\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n2\n-1 0\n",
        "expected": "-1 -1\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\nA -1\n3\n0 -1 1\n",
        "expected": "-1 -1 -1\n"
      },
      {
        "name": "测试 3",
        "stdin": "5\nA -1\nB 0\nC 0\nD 1\nE 1\n7\n0 1 2 3 4 -1 5\n",
        "expected": "1 3 -1 -1 -1 -1 -1\n"
      },
      {
        "name": "测试 4",
        "stdin": "4\nA 2\nB 2\nC -1\nD 0\n6\n0 1 2 3 -1 4\n",
        "expected": "3 -1 0 -1 -1 -1\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-forest-parent-sibling",
    "title": "父节点表示法：寻找右兄弟",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "vgyr818zdigzrma9",
        "blocks": [
          0,
          1,
          2
        ],
        "functions": [
          "r_bro"
        ]
      }
    ],
    "description": "节点编号为0..n-1。子节点和兄弟均按原节点编号升序排列。对每个查询节点，返回同一父节点下右侧最近兄弟编号。空树根、非法节点或不存在的相邻节点记为-1。",
    "input": "n；接下来n行：单字符标签 parent；根的parent=-1。随后q和q个查询节点编号。",
    "output": "构建题第一行根编号，之后每行“编号 标签 parent”；查询题按顺序输出编号。",
    "constraints": [
      "0≤n≤26；标签为互异A..Z",
      "非空输入保证是单棵有效有根树；0≤q≤100；查询编号-1..n"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n2\n-1 0\n",
        "expected": "-1 -1\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；接下来n行：单字符标签 parent；根的parent=-1。随后q和q个查询节点编号。\n// 输出：构建题第一行根编号，之后每行“编号 标签 parent”；查询题按顺序输出编号。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=char;\nstruct paNode{\nint pa;\t//父结点下标\ndatatype data;\npaNode():pa(-1){}\t//根结点的父节点下标为-1\n};\nstruct paTree{\npaNode tree[N];\nint n;\t//树的结点数量\nint root; //根结点下标\n};\npaTree create(datatype data[N],int pa[N],int n){\n    paTree t;\n    t.n = n;\n    t.root=-1;\n    for(int i=0;i<n;i++){\n        t.tree[i].pa=pa[i],t.tree[i].data=data[i];\n        if(pa[i]==-1) t.root=i;\n    }\n    return t;\n}\nint lm_child(paTree t,int cur){\n    if(cur<0 || cur>=t.n) return -1;\n    for(int i=0;i<t.n;i++)\n        if(t.tree[i].pa==cur) return i;\n    return -1;\n}\nint r_bro(paTree t,int cur){\n    if(cur<0 || cur>=t.n || t.tree[cur].pa==-1) return -1;\n    for(int i=cur+1;i<t.n;i++)\n        if(t.tree[i].pa==t.tree[cur].pa) return i;\n    return -1;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;char data[N];int pa[N];for(int i=0;i<n;i++)cin>>data[i]>>pa[i];auto t=create(data,pa,n);\nint q;cin>>q;while(q--){int x;cin>>x;cout<<r_bro(t,x)<<\" \";}\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n2\n-1 0\n",
        "expected": "-1 -1\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\nA -1\n3\n0 -1 1\n",
        "expected": "-1 -1 -1\n"
      },
      {
        "name": "测试 3",
        "stdin": "5\nA -1\nB 0\nC 0\nD 1\nE 1\n7\n0 1 2 3 4 -1 5\n",
        "expected": "-1 2 -1 4 -1 -1 -1\n"
      },
      {
        "name": "测试 4",
        "stdin": "4\nA 2\nB 2\nC -1\nD 0\n6\n0 1 2 3 -1 4\n",
        "expected": "1 -1 -1 -1 -1 -1\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-forest-lrb-create",
    "title": "孩子兄弟表示法：构建树",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "vgyr818zdigzrma9",
        "blocks": [
          3,
          4
        ],
        "functions": [
          "create"
        ]
      }
    ],
    "description": "节点编号为0..n-1。子节点和兄弟均按原节点编号升序排列。构建树并输出根编号和存储结构。空树根、非法节点或不存在的相邻节点记为-1。",
    "input": "n；接下来n行：单字符标签 parent；根的parent=-1。",
    "output": "构建题第一行根编号，之后每行“编号 标签 parent 最左孩子 右兄弟”；查询题按顺序输出编号。",
    "constraints": [
      "0≤n≤26；标签为互异A..Z",
      "非空输入保证是单棵有效有根树；0≤q≤100；查询编号-1..n"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n",
        "expected": "-1\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；接下来n行：单字符标签 parent；根的parent=-1。\n// 输出：构建题第一行根编号，之后每行“编号 标签 parent 最左孩子 右兄弟”；查询题按顺序输出编号。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=char;\nstruct lrbNode{\ndatatype data;\nint pa;\nint lmc;\nint rb;\nlrbNode():lmc(-1),rb(-1){}\n};\nstruct lrbTree{\nlrbNode tree[N];\nint n;\nint root;\n};\nlrbTree create(datatype data[],int pa[],int n){\n    lrbTree t;\n    t.n=n;t.root=-1;\n    int last[N];\n    for(int i=0;i<n;i++) last[i]=-1;\n    for(int i=0;i<n;i++){\n        t.tree[i].data=data[i];\n        t.tree[i].pa=pa[i];\n        if(pa[i]==-1) t.root=i;\n        else{\n            if(t.tree[pa[i]].lmc==-1) t.tree[pa[i]].lmc=i;\n            else t.tree[last[pa[i]]].rb=i;\n            last[pa[i]]=i;\n        }\n    }\n    return t;\n}\nint lm_child(lrbTree t,int cur){\n    if(cur<0 || cur>=t.n) return -1;\n    return t.tree[cur].lmc;\n}\nint r_bro(lrbTree t,int cur){\n    if(cur<0 || cur>=t.n) return -1;\n    return t.tree[cur].rb;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;char data[N];int pa[N];for(int i=0;i<n;i++)cin>>data[i]>>pa[i];auto t=create(data,pa,n);\ncout<<t.root<<\"\\n\";for(int i=0;i<n;i++)cout<<i<<\" \"<<t.tree[i].data<<\" \"<<t.tree[i].pa<<\" \"<<t.tree[i].lmc<<\" \"<<t.tree[i].rb<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n",
        "expected": "-1\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\nA -1\n",
        "expected": "0\n0 A -1 -1 -1\n"
      },
      {
        "name": "测试 3",
        "stdin": "5\nA -1\nB 0\nC 0\nD 1\nE 1\n",
        "expected": "0\n0 A -1 1 -1\n1 B 0 3 2\n2 C 0 -1 -1\n3 D 1 -1 4\n4 E 1 -1 -1\n"
      },
      {
        "name": "测试 4",
        "stdin": "4\nA 2\nB 2\nC -1\nD 0\n",
        "expected": "2\n0 A 2 3 1\n1 B 2 -1 -1\n2 C -1 0 -1\n3 D 0 -1 -1\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-forest-lrb-child",
    "title": "孩子兄弟表示法：寻找最左孩子",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "vgyr818zdigzrma9",
        "blocks": [
          3,
          4
        ],
        "functions": [
          "lm_child"
        ]
      }
    ],
    "description": "节点编号为0..n-1。子节点和兄弟均按原节点编号升序排列。对每个查询节点，返回最左孩子编号。空树根、非法节点或不存在的相邻节点记为-1。",
    "input": "n；接下来n行：单字符标签 parent；根的parent=-1。随后q和q个查询节点编号。",
    "output": "构建题第一行根编号，之后每行“编号 标签 parent 最左孩子 右兄弟”；查询题按顺序输出编号。",
    "constraints": [
      "0≤n≤26；标签为互异A..Z",
      "非空输入保证是单棵有效有根树；0≤q≤100；查询编号-1..n"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n2\n-1 0\n",
        "expected": "-1 -1\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；接下来n行：单字符标签 parent；根的parent=-1。随后q和q个查询节点编号。\n// 输出：构建题第一行根编号，之后每行“编号 标签 parent 最左孩子 右兄弟”；查询题按顺序输出编号。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=char;\nstruct lrbNode{\ndatatype data;\nint pa;\nint lmc;\nint rb;\nlrbNode():lmc(-1),rb(-1){}\n};\nstruct lrbTree{\nlrbNode tree[N];\nint n;\nint root;\n};\nlrbTree create(datatype data[],int pa[],int n){\n    lrbTree t;\n    t.n=n;t.root=-1;\n    int last[N];\n    for(int i=0;i<n;i++) last[i]=-1;\n    for(int i=0;i<n;i++){\n        t.tree[i].data=data[i];\n        t.tree[i].pa=pa[i];\n        if(pa[i]==-1) t.root=i;\n        else{\n            if(t.tree[pa[i]].lmc==-1) t.tree[pa[i]].lmc=i;\n            else t.tree[last[pa[i]]].rb=i;\n            last[pa[i]]=i;\n        }\n    }\n    return t;\n}\nint lm_child(lrbTree t,int cur){\n    if(cur<0 || cur>=t.n) return -1;\n    return t.tree[cur].lmc;\n}\nint r_bro(lrbTree t,int cur){\n    if(cur<0 || cur>=t.n) return -1;\n    return t.tree[cur].rb;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;char data[N];int pa[N];for(int i=0;i<n;i++)cin>>data[i]>>pa[i];auto t=create(data,pa,n);\nint q;cin>>q;while(q--){int x;cin>>x;cout<<lm_child(t,x)<<\" \";}\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n2\n-1 0\n",
        "expected": "-1 -1\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\nA -1\n3\n0 -1 1\n",
        "expected": "-1 -1 -1\n"
      },
      {
        "name": "测试 3",
        "stdin": "5\nA -1\nB 0\nC 0\nD 1\nE 1\n7\n0 1 2 3 4 -1 5\n",
        "expected": "1 3 -1 -1 -1 -1 -1\n"
      },
      {
        "name": "测试 4",
        "stdin": "4\nA 2\nB 2\nC -1\nD 0\n6\n0 1 2 3 -1 4\n",
        "expected": "3 -1 0 -1 -1 -1\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-forest-lrb-sibling",
    "title": "孩子兄弟表示法：寻找右兄弟",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "vgyr818zdigzrma9",
        "blocks": [
          3,
          4
        ],
        "functions": [
          "r_bro"
        ]
      }
    ],
    "description": "节点编号为0..n-1。子节点和兄弟均按原节点编号升序排列。对每个查询节点，返回同一父节点下右侧最近兄弟编号。空树根、非法节点或不存在的相邻节点记为-1。",
    "input": "n；接下来n行：单字符标签 parent；根的parent=-1。随后q和q个查询节点编号。",
    "output": "构建题第一行根编号，之后每行“编号 标签 parent 最左孩子 右兄弟”；查询题按顺序输出编号。",
    "constraints": [
      "0≤n≤26；标签为互异A..Z",
      "非空输入保证是单棵有效有根树；0≤q≤100；查询编号-1..n"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n2\n-1 0\n",
        "expected": "-1 -1\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；接下来n行：单字符标签 parent；根的parent=-1。随后q和q个查询节点编号。\n// 输出：构建题第一行根编号，之后每行“编号 标签 parent 最左孩子 右兄弟”；查询题按顺序输出编号。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=char;\nstruct lrbNode{\ndatatype data;\nint pa;\nint lmc;\nint rb;\nlrbNode():lmc(-1),rb(-1){}\n};\nstruct lrbTree{\nlrbNode tree[N];\nint n;\nint root;\n};\nlrbTree create(datatype data[],int pa[],int n){\n    lrbTree t;\n    t.n=n;t.root=-1;\n    int last[N];\n    for(int i=0;i<n;i++) last[i]=-1;\n    for(int i=0;i<n;i++){\n        t.tree[i].data=data[i];\n        t.tree[i].pa=pa[i];\n        if(pa[i]==-1) t.root=i;\n        else{\n            if(t.tree[pa[i]].lmc==-1) t.tree[pa[i]].lmc=i;\n            else t.tree[last[pa[i]]].rb=i;\n            last[pa[i]]=i;\n        }\n    }\n    return t;\n}\nint lm_child(lrbTree t,int cur){\n    if(cur<0 || cur>=t.n) return -1;\n    return t.tree[cur].lmc;\n}\nint r_bro(lrbTree t,int cur){\n    if(cur<0 || cur>=t.n) return -1;\n    return t.tree[cur].rb;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;char data[N];int pa[N];for(int i=0;i<n;i++)cin>>data[i]>>pa[i];auto t=create(data,pa,n);\nint q;cin>>q;while(q--){int x;cin>>x;cout<<r_bro(t,x)<<\" \";}\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n2\n-1 0\n",
        "expected": "-1 -1\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\nA -1\n3\n0 -1 1\n",
        "expected": "-1 -1 -1\n"
      },
      {
        "name": "测试 3",
        "stdin": "5\nA -1\nB 0\nC 0\nD 1\nE 1\n7\n0 1 2 3 4 -1 5\n",
        "expected": "-1 2 -1 4 -1 -1 -1\n"
      },
      {
        "name": "测试 4",
        "stdin": "4\nA 2\nB 2\nC -1\nD 0\n6\n0 1 2 3 -1 4\n",
        "expected": "1 -1 -1 -1 -1 -1\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-forest-pre",
    "title": "树和森林：先根遍历",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "vgyr818zdigzrma9",
        "blocks": [
          3,
          4,
          5
        ],
        "functions": [
          "preOrder"
        ]
      }
    ],
    "description": "使用孩子兄弟表示法构建树，孩子按原节点编号升序访问。先访问根，再遍历各孩子。",
    "input": "n；随后n行：字符标签 parent，根的parent=-1。",
    "output": "连写遍历得到的字符序列；空树EMPTY。",
    "constraints": [
      "0≤n≤26；标签为互异A..Z",
      "输入保证是单棵有效有根树。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；随后n行：字符标签 parent，根的parent=-1。\n// 输出：连写遍历得到的字符序列；空树EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=char;\nstruct lrbNode{\ndatatype data;\nint pa;\nint lmc;\nint rb;\nlrbNode():lmc(-1),rb(-1){}\n};\nstruct lrbTree{\nlrbNode tree[N];\nint n;\nint root;\n};\nlrbTree create(datatype data[],int pa[],int n){\n    lrbTree t;\n    t.n=n;t.root=-1;\n    int last[N];\n    for(int i=0;i<n;i++) last[i]=-1;\n    for(int i=0;i<n;i++){\n        t.tree[i].data=data[i];\n        t.tree[i].pa=pa[i];\n        if(pa[i]==-1) t.root=i;\n        else{\n            if(t.tree[pa[i]].lmc==-1) t.tree[pa[i]].lmc=i;\n            else t.tree[last[pa[i]]].rb=i;\n            last[pa[i]]=i;\n        }\n    }\n    return t;\n}\nint lm_child(lrbTree t,int cur){\n    if(cur<0 || cur>=t.n) return -1;\n    return t.tree[cur].lmc;\n}\nint r_bro(lrbTree t,int cur){\n    if(cur<0 || cur>=t.n) return -1;\n    return t.tree[cur].rb;\n}\n//先根遍历，rt为根结点\nvoid preOrder(lrbTree t,int rt){\n    if(rt==-1) return;  //空树\n    cout<<t.tree[rt].data;\n    int cur = lm_child(t,rt);\n    while(cur!=-1){\n        preOrder(t,cur);\n        cur = r_bro(t,cur);\n    }\n}\n\n//中根遍历\nvoid midOrder(lrbTree t,int rt){\n    if(rt==-1) return;\n    int cur = lm_child(t,rt);\n    midOrder(t,cur);\n    cout<<t.tree[rt].data;\n    while(cur!=-1){\n        cur = r_bro(t,cur);\n        midOrder(t,cur);\n    }\n}\n\n//后根遍历\nvoid postOrder(lrbTree t,int rt){\n    if(rt==-1) return;\n    int cur = lm_child(t,rt);\n    while(cur!=-1){\n        postOrder(t,cur);\n        cur = r_bro(t,cur);\n    }\n    cout<<t.tree[rt].data;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;char data[N];int pa[N];for(int i=0;i<n;i++)cin>>data[i]>>pa[i];auto t=create(data,pa,n);\nif(!n)cout<<\"EMPTY\";else preOrder(t,t.root);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\nA -1\n",
        "expected": "A\n"
      },
      {
        "name": "测试 3",
        "stdin": "5\nA -1\nB 0\nC 0\nD 1\nE 1\n",
        "expected": "ABDEC\n"
      },
      {
        "name": "测试 4",
        "stdin": "4\nA 2\nB 2\nC -1\nD 0\n",
        "expected": "CADB\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-forest-mid",
    "title": "树和森林：中根遍历",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "vgyr818zdigzrma9",
        "blocks": [
          3,
          4,
          5
        ],
        "functions": [
          "midOrder"
        ]
      }
    ],
    "description": "使用孩子兄弟表示法构建树，孩子按原节点编号升序访问。先遍历最左孩子，再访问根，最后依次遍历其余孩子。",
    "input": "n；随后n行：字符标签 parent，根的parent=-1。",
    "output": "连写遍历得到的字符序列；空树EMPTY。",
    "constraints": [
      "0≤n≤26；标签为互异A..Z",
      "输入保证是单棵有效有根树。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；随后n行：字符标签 parent，根的parent=-1。\n// 输出：连写遍历得到的字符序列；空树EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=char;\nstruct lrbNode{\ndatatype data;\nint pa;\nint lmc;\nint rb;\nlrbNode():lmc(-1),rb(-1){}\n};\nstruct lrbTree{\nlrbNode tree[N];\nint n;\nint root;\n};\nlrbTree create(datatype data[],int pa[],int n){\n    lrbTree t;\n    t.n=n;t.root=-1;\n    int last[N];\n    for(int i=0;i<n;i++) last[i]=-1;\n    for(int i=0;i<n;i++){\n        t.tree[i].data=data[i];\n        t.tree[i].pa=pa[i];\n        if(pa[i]==-1) t.root=i;\n        else{\n            if(t.tree[pa[i]].lmc==-1) t.tree[pa[i]].lmc=i;\n            else t.tree[last[pa[i]]].rb=i;\n            last[pa[i]]=i;\n        }\n    }\n    return t;\n}\nint lm_child(lrbTree t,int cur){\n    if(cur<0 || cur>=t.n) return -1;\n    return t.tree[cur].lmc;\n}\nint r_bro(lrbTree t,int cur){\n    if(cur<0 || cur>=t.n) return -1;\n    return t.tree[cur].rb;\n}\n//先根遍历，rt为根结点\nvoid preOrder(lrbTree t,int rt){\n    if(rt==-1) return;  //空树\n    cout<<t.tree[rt].data;\n    int cur = lm_child(t,rt);\n    while(cur!=-1){\n        preOrder(t,cur);\n        cur = r_bro(t,cur);\n    }\n}\n\n//中根遍历\nvoid midOrder(lrbTree t,int rt){\n    if(rt==-1) return;\n    int cur = lm_child(t,rt);\n    midOrder(t,cur);\n    cout<<t.tree[rt].data;\n    while(cur!=-1){\n        cur = r_bro(t,cur);\n        midOrder(t,cur);\n    }\n}\n\n//后根遍历\nvoid postOrder(lrbTree t,int rt){\n    if(rt==-1) return;\n    int cur = lm_child(t,rt);\n    while(cur!=-1){\n        postOrder(t,cur);\n        cur = r_bro(t,cur);\n    }\n    cout<<t.tree[rt].data;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;char data[N];int pa[N];for(int i=0;i<n;i++)cin>>data[i]>>pa[i];auto t=create(data,pa,n);\nif(!n)cout<<\"EMPTY\";else midOrder(t,t.root);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\nA -1\n",
        "expected": "A\n"
      },
      {
        "name": "测试 3",
        "stdin": "5\nA -1\nB 0\nC 0\nD 1\nE 1\n",
        "expected": "DBEAC\n"
      },
      {
        "name": "测试 4",
        "stdin": "4\nA 2\nB 2\nC -1\nD 0\n",
        "expected": "DACB\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-forest-post",
    "title": "树和森林：后根遍历",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "vgyr818zdigzrma9",
        "blocks": [
          3,
          4,
          5
        ],
        "functions": [
          "postOrder"
        ]
      }
    ],
    "description": "使用孩子兄弟表示法构建树，孩子按原节点编号升序访问。先遍历各孩子，最后访问根。",
    "input": "n；随后n行：字符标签 parent，根的parent=-1。",
    "output": "连写遍历得到的字符序列；空树EMPTY。",
    "constraints": [
      "0≤n≤26；标签为互异A..Z",
      "输入保证是单棵有效有根树。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；随后n行：字符标签 parent，根的parent=-1。\n// 输出：连写遍历得到的字符序列；空树EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=char;\nstruct lrbNode{\ndatatype data;\nint pa;\nint lmc;\nint rb;\nlrbNode():lmc(-1),rb(-1){}\n};\nstruct lrbTree{\nlrbNode tree[N];\nint n;\nint root;\n};\nlrbTree create(datatype data[],int pa[],int n){\n    lrbTree t;\n    t.n=n;t.root=-1;\n    int last[N];\n    for(int i=0;i<n;i++) last[i]=-1;\n    for(int i=0;i<n;i++){\n        t.tree[i].data=data[i];\n        t.tree[i].pa=pa[i];\n        if(pa[i]==-1) t.root=i;\n        else{\n            if(t.tree[pa[i]].lmc==-1) t.tree[pa[i]].lmc=i;\n            else t.tree[last[pa[i]]].rb=i;\n            last[pa[i]]=i;\n        }\n    }\n    return t;\n}\nint lm_child(lrbTree t,int cur){\n    if(cur<0 || cur>=t.n) return -1;\n    return t.tree[cur].lmc;\n}\nint r_bro(lrbTree t,int cur){\n    if(cur<0 || cur>=t.n) return -1;\n    return t.tree[cur].rb;\n}\n//先根遍历，rt为根结点\nvoid preOrder(lrbTree t,int rt){\n    if(rt==-1) return;  //空树\n    cout<<t.tree[rt].data;\n    int cur = lm_child(t,rt);\n    while(cur!=-1){\n        preOrder(t,cur);\n        cur = r_bro(t,cur);\n    }\n}\n\n//中根遍历\nvoid midOrder(lrbTree t,int rt){\n    if(rt==-1) return;\n    int cur = lm_child(t,rt);\n    midOrder(t,cur);\n    cout<<t.tree[rt].data;\n    while(cur!=-1){\n        cur = r_bro(t,cur);\n        midOrder(t,cur);\n    }\n}\n\n//后根遍历\nvoid postOrder(lrbTree t,int rt){\n    if(rt==-1) return;\n    int cur = lm_child(t,rt);\n    while(cur!=-1){\n        postOrder(t,cur);\n        cur = r_bro(t,cur);\n    }\n    cout<<t.tree[rt].data;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;char data[N];int pa[N];for(int i=0;i<n;i++)cin>>data[i]>>pa[i];auto t=create(data,pa,n);\nif(!n)cout<<\"EMPTY\";else postOrder(t,t.root);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\nA -1\n",
        "expected": "A\n"
      },
      {
        "name": "测试 3",
        "stdin": "5\nA -1\nB 0\nC 0\nD 1\nE 1\n",
        "expected": "DEBCA\n"
      },
      {
        "name": "测试 4",
        "stdin": "4\nA 2\nB 2\nC -1\nD 0\n",
        "expected": "DABC\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-forest-bracket-child",
    "title": "树的括号表示：寻找最左孩子",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "vgyr818zdigzrma9",
        "blocks": [
          6
        ],
        "functions": [
          "lm_child"
        ]
      }
    ],
    "description": "树表示如A(B,C(D,E))，每个节点标签恰为一个大写字母，字符下标从0开始。查询最左孩子标签所在的字符下标，不存在或输入下标越界输出-1。",
    "input": "括号表示字符串；q；q个查询下标。",
    "output": "按查询顺序输出字符下标。",
    "constraints": [
      "1≤字符串长度≤100；1≤q≤100",
      "有效下标保证指向字母节点；另允许-1或字符串长度表示越界。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "A\n3\n0 -1 1\n",
        "expected": "-1 -1 -1\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：括号表示字符串；q；q个查询下标。\n// 输出：按查询顺序输出字符下标。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n//求树的括号表示btree中，cur的最左孩子结点\nint lm_child(string btree,int cur){\n    if(cur>=0 && cur+2<(int)btree.size() && btree[cur+1]=='(' && btree[cur+2]!=')') \n        return cur+2;\n    return -1;\n}\n//求树的括号表示btree中，结点cur的右兄弟结点，结果作为返回值\nint r_bro(string btree,int cur){\n    if(cur<0 || cur>=(int)btree.size()) return -1;\n    if(btree[cur]=='(' || btree[cur]==')'){\n        return -1;\n    }\n    int cnt=0;\n    for(int i=cur+1;i<btree.size();i++){//cnt是一个计数器\n        if(btree[i]=='(') cnt++;\n        else if(btree[i]==')') cnt--;\n        else if(btree[i]==',' && cnt==0)\n            return i+1;\n        if(cnt<0) break;\n    }\n    return -1;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring text;cin>>text;int q;cin>>q;\nwhile(q--){int cur;cin>>cur;cout<<lm_child(text,cur)<<\" \";}\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "A\n3\n0 -1 1\n",
        "expected": "-1 -1 -1\n"
      },
      {
        "name": "测试 2",
        "stdin": "A(B,C(D,E))\n5\n0 2 4 6 8\n",
        "expected": "2 -1 6 -1 -1\n"
      },
      {
        "name": "测试 3",
        "stdin": "R(X(Y),Z)\n4\n0 2 4 7\n",
        "expected": "2 4 -1 -1\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-forest-bracket-sibling",
    "title": "树的括号表示：寻找右兄弟",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "vgyr818zdigzrma9",
        "blocks": [
          6
        ],
        "functions": [
          "r_bro"
        ]
      }
    ],
    "description": "树表示如A(B,C(D,E))，每个节点标签恰为一个大写字母，字符下标从0开始。查询直接右兄弟标签所在的字符下标，不存在或输入下标越界输出-1。",
    "input": "括号表示字符串；q；q个查询下标。",
    "output": "按查询顺序输出字符下标。",
    "constraints": [
      "1≤字符串长度≤100；1≤q≤100",
      "有效下标保证指向字母节点；另允许-1或字符串长度表示越界。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "A\n3\n0 -1 1\n",
        "expected": "-1 -1 -1\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：括号表示字符串；q；q个查询下标。\n// 输出：按查询顺序输出字符下标。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n//求树的括号表示btree中，cur的最左孩子结点\nint lm_child(string btree,int cur){\n    if(cur>=0 && cur+2<(int)btree.size() && btree[cur+1]=='(' && btree[cur+2]!=')') \n        return cur+2;\n    return -1;\n}\n//求树的括号表示btree中，结点cur的右兄弟结点，结果作为返回值\nint r_bro(string btree,int cur){\n    if(cur<0 || cur>=(int)btree.size()) return -1;\n    if(btree[cur]=='(' || btree[cur]==')'){\n        return -1;\n    }\n    int cnt=0;\n    for(int i=cur+1;i<btree.size();i++){//cnt是一个计数器\n        if(btree[i]=='(') cnt++;\n        else if(btree[i]==')') cnt--;\n        else if(btree[i]==',' && cnt==0)\n            return i+1;\n        if(cnt<0) break;\n    }\n    return -1;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring text;cin>>text;int q;cin>>q;\nwhile(q--){int cur;cin>>cur;cout<<r_bro(text,cur)<<\" \";}\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "A\n3\n0 -1 1\n",
        "expected": "-1 -1 -1\n"
      },
      {
        "name": "测试 2",
        "stdin": "A(B,C(D,E))\n5\n0 2 4 6 8\n",
        "expected": "-1 4 -1 8 -1\n"
      },
      {
        "name": "测试 3",
        "stdin": "R(X(Y),Z)\n4\n0 2 4 7\n",
        "expected": "-1 7 -1 -1\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-dsu-query",
    "title": "并查集：路径压缩查找",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "efgmxpodr4s61iwh",
        "blocks": [
          0,
          1,
          2
        ],
        "functions": [
          "query"
        ]
      }
    ],
    "description": "初始每个元素独立成集合。merge(x,y)把x所在集合的根连接到y所在集合的根，已经同根则不变。依次查询代表根。",
    "input": "n m；m行x y；q；q个查询元素。",
    "output": "查询题输出各代表根；合并题每次输出n个代表根，没有合并输出EMPTY。",
    "constraints": [
      "1≤n≤50；0≤m≤100",
      "元素编号0..n-1；1≤q≤100"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "1 0\n1\n0\n",
        "expected": "0\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；m行x y；q；q个查询元素。\n// 输出：查询题输出各代表根；合并题每次输出n个代表根，没有合并输出EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=int;\nstruct mqNode{\nint pa;\ndatatype data;\nmqNode():pa(-1){}\n}mq[N];\nint query(int x){\n    if(mq[x].pa==-1) return x; //根结点\n    mq[x].pa=query(mq[x].pa); //路径压缩\n    return mq[x].pa;\n}\nvoid merge(int x,int y){\n    x=query(x),y=query(y);\n    if(x!=y) mq[x].pa=y;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;\nint m;cin>>m;bool had=m>0;while(m--){int x,y;cin>>x>>y;merge(x,y);}int q;cin>>q;while(q--){int x;cin>>x;cout<<query(x)<<\" \";}\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "1 0\n1\n0\n",
        "expected": "0\n"
      },
      {
        "name": "测试 2",
        "stdin": "5 3\n0 1\n1 2\n3 4\n5\n0 1 2 3 4\n",
        "expected": "2 2 2 4 4\n"
      },
      {
        "name": "测试 3",
        "stdin": "4 4\n0 1\n2 3\n1 3\n0 2\n3\n0 2 3\n",
        "expected": "3 3 3\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-dsu-merge",
    "title": "并查集：合并两个集合",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "efgmxpodr4s61iwh",
        "blocks": [
          0,
          1,
          2
        ],
        "functions": [
          "merge"
        ]
      }
    ],
    "description": "初始每个元素独立成集合。merge(x,y)把x所在集合的根连接到y所在集合的根，已经同根则不变。每次合并后输出全部元素的代表根，体现原函数的连接方向。",
    "input": "n m；m行x y；无其他输入。",
    "output": "查询题输出各代表根；合并题每次输出n个代表根，没有合并输出EMPTY。",
    "constraints": [
      "1≤n≤50；0≤m≤100",
      "元素编号0..n-1；1≤q≤100"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "1 0\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；m行x y；无其他输入。\n// 输出：查询题输出各代表根；合并题每次输出n个代表根，没有合并输出EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\nconst int N=100;using datatype=int;\nstruct mqNode{\nint pa;\ndatatype data;\nmqNode():pa(-1){}\n}mq[N];\nint query(int x){\n    if(mq[x].pa==-1) return x; //根结点\n    mq[x].pa=query(mq[x].pa); //路径压缩\n    return mq[x].pa;\n}\nvoid merge(int x,int y){\n    x=query(x),y=query(y);\n    if(x!=y) mq[x].pa=y;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;\nint m;cin>>m;bool had=m>0;while(m--){int x,y;cin>>x>>y;merge(x,y);for(int i=0;i<n;i++)cout<<query(i)<<\" \";cout<<\"\\n\";}if(!had)cout<<\"EMPTY\";\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "1 0\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "5 3\n0 1\n1 2\n3 4\n",
        "expected": "1 1 2 3 4\n2 2 2 3 4\n2 2 2 4 4\n"
      },
      {
        "name": "测试 3",
        "stdin": "4 4\n0 1\n2 3\n1 3\n0 2\n",
        "expected": "1 1 2 3\n1 1 3 3\n3 3 3 3\n3 3 3 3\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-fenwick-lowbit",
    "title": "树状数组：lowbit最低有效位",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "gme34aw4kzzy04fl",
        "blocks": [
          0
        ],
        "functions": [
          "lowbit"
        ]
      }
    ],
    "description": "对每个正整数x求其二进制最低有效1所代表的数值，即x&(-x)。",
    "input": "q；q个正整数。",
    "output": "按顺序输出lowbit(x)。",
    "constraints": [
      "1≤q≤100；1≤x≤1000000"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "3\n1 2 3\n",
        "expected": "1 2 1\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：q；q个正整数。\n// 输出：按顺序输出lowbit(x)。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\nint lowbit(int i){\n    return i&(-i); //i和他的负数的补码的按位与\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint q;cin>>q;\nwhile(q--){int x;cin>>x;cout<<lowbit(x)<<\" \";}\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "3\n1 2 3\n",
        "expected": "1 2 1\n"
      },
      {
        "name": "测试 2",
        "stdin": "3\n8 12 16\n",
        "expected": "8 4 16\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n7 31 64\n",
        "expected": "1 1 64\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-fenwick-prefix",
    "title": "树状数组：前缀和查询",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "gme34aw4kzzy04fl",
        "blocks": [
          0,
          1,
          2
        ],
        "functions": [
          "prefixSum"
        ]
      }
    ],
    "description": "数组使用1..n编号。用树状数组求a[1]+...+a[x]，x=0返回0。",
    "input": "n；n个元素；q；q个前缀终点x。",
    "output": "按查询顺序输出前缀和。",
    "constraints": [
      "1≤n≤50；0≤m≤100；1≤q≤100",
      "初值和inc均[-100,100]；更新1≤x≤n；查询0≤x≤n"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "1\n0\n2\n0 1\n",
        "expected": "0 0\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个元素；q；q个前缀终点x。\n// 输出：按查询顺序输出前缀和。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\nint n,bit[101];\nint lowbit(int i){\n    return i&(-i); //i和他的负数的补码的按位与\n}\nint prefixSum(int x){\n    int sum=0;\n    while(x>0){\n        sum+=bit[x];\n        x-=lowbit(x);\n    }\n    return sum;\n}\n//将第x个元素增加inc\nvoid update(int x,int inc){\n    if(x<=0) return;\n    while(x<=n){\n        bit[x]+=inc;\n        x+=lowbit(x);//x更新为x的父结点\n    } \n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\ncin>>n;for(int i=1;i<=n;i++){int x;cin>>x;update(i,x);}\nint q;cin>>q;while(q--){int x;cin>>x;cout<<prefixSum(x)<<\" \";}\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "1\n0\n2\n0 1\n",
        "expected": "0 0\n"
      },
      {
        "name": "测试 2",
        "stdin": "4\n2 -1 5 3\n3\n0 2 4\n",
        "expected": "0 1 9\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n7 7 7\n3\n1 2 3\n",
        "expected": "7 14 21\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-fenwick-update",
    "title": "树状数组：单点增量更新",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "gme34aw4kzzy04fl",
        "blocks": [
          0,
          1,
          2
        ],
        "functions": [
          "update"
        ]
      }
    ],
    "description": "数组使用1..n编号。逐次将a[x]增加inc，全部更新完成后查询各前缀和。",
    "input": "n；n个元素；m；m行x inc；q；q个前缀终点x。",
    "output": "按查询顺序输出前缀和。",
    "constraints": [
      "1≤n≤50；0≤m≤100；1≤q≤100",
      "初值和inc均[-100,100]；更新1≤x≤n；查询0≤x≤n"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "1\n0\n1\n1 3\n2\n0 1\n",
        "expected": "0 3\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个元素；m；m行x inc；q；q个前缀终点x。\n// 输出：按查询顺序输出前缀和。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\nint n,bit[101];\nint lowbit(int i){\n    return i&(-i); //i和他的负数的补码的按位与\n}\nint prefixSum(int x){\n    int sum=0;\n    while(x>0){\n        sum+=bit[x];\n        x-=lowbit(x);\n    }\n    return sum;\n}\n//将第x个元素增加inc\nvoid update(int x,int inc){\n    if(x<=0) return;\n    while(x<=n){\n        bit[x]+=inc;\n        x+=lowbit(x);//x更新为x的父结点\n    } \n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\ncin>>n;for(int i=1;i<=n;i++){int x;cin>>x;update(i,x);}\nint m;cin>>m;while(m--){int x,inc;cin>>x>>inc;update(x,inc);}int q;cin>>q;while(q--){int x;cin>>x;cout<<prefixSum(x)<<\" \";}\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "1\n0\n1\n1 3\n2\n0 1\n",
        "expected": "0 3\n"
      },
      {
        "name": "测试 2",
        "stdin": "4\n2 -1 5 3\n2\n2 4\n4 -3\n3\n0 2 4\n",
        "expected": "0 5 10\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n7 7 7\n2\n1 -7\n1 2\n3\n1 2 3\n",
        "expected": "2 9 16\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-segment-build",
    "title": "线段树：构建区间和树",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "wzfhk2wlng7igkb7",
        "blocks": [
          0,
          1,
          2,
          3,
          4
        ],
        "functions": [
          "build"
        ]
      }
    ],
    "description": "数组使用1..n编号，区间均为闭区间[l,r]。递归按mid=(l+r)/2切分，输出每个节点的区间及区间和。",
    "input": "n；n个整数；无其他输入。",
    "output": "构建题按根、左、右先序输出，每行“l r 区间和”；其余按查询顺序输出区间和。",
    "constraints": [
      "1≤n≤50；0≤m≤100；1≤q≤100",
      "初值和inc均[-100,100]；1≤l≤r≤n；1≤pos≤n"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "1\n0\n",
        "expected": "1 1 0\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个整数；无其他输入。\n// 输出：构建题按根、左、右先序输出，每行“l r 区间和”；其余按查询顺序输出区间和。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n#define N 1000\nint sum[N<<2],lazy[N<<2]; //<<2相当于*4\n//sum是结点i所对应区间中元素之和，初始为0；lazy是结点的懒惰标记值\n//向上更新函数，当一个结点的孩子结点更新完毕时，需要更新当前结点的信息\nvoid pushup(int rt){\n    sum[rt] = sum[rt<<1]+sum[rt<<1|1]; //左孩子和右孩子\n}\n//根据数组a构建表示区间和线段树，rt表示当前结点编号，l、r表示当前结点区间\nvoid build(int a[N],int rt,int l,int r){\n    if(l>r) return;\n    lazy[rt]=0;\n    if(l==r){\n        sum[rt]=a[l]; //到达叶结点\n        return;\n    }\n    int mid = (l+r)>>1;\n    build(a,rt<<1,l,mid);\t//\t构建左子树\n    build(a,(rt<<1|1),mid+1,r);\t//构建右子树\n    pushup(rt);\n}\nvoid pushdown(int rt,int ln,int rn); //定义在下一块\n//将a[pos]的值增加inc\nvoid update(int rt,int l,int r,int pos,int inc){\n    if(pos<l || pos>r || l>r) return;\n    if(l==r){\t//l=r=pos\n        sum[rt]+=inc;\t\n        return;\n    }\n    int mid = (l+r)>>1;\n    pushdown(rt,mid-l+1,r-mid);\n    if(pos<=mid) update(rt<<1,l,mid,pos,inc); //pos在左子树\n    else update((rt<<1)|1,mid+1,r,pos,inc);\t//pos在右子树\n    pushup(rt);//更新当前结点到根结点的所有节点\n}\n//将结点rt的延时更新值向下传递 参数ln，rn分别为结点rt的左子树和右子树对应区间的长度\nvoid pushdown(int rt,int ln,int rn){\n    if(lazy[rt]){\n        lazy[rt<<1]+=lazy[rt];\t//当前结点延时更新值传递给左孩子\n        lazy[(rt<<1)|1]+=lazy[rt]; //当前结点延时更新值传递给右孩子\n        //利用当前结点rt的延时更新值修改rt的孩子结点的sum\n        sum[rt<<1] += lazy[rt]*ln;\n        sum[rt<<1|1]+=lazy[rt]*rn;\n        lazy[rt] = 0;\t\t//清除本结点的延时更新值\n    }\n}\n//区间更新，将a[L,R]中的元素值都增加inc\nvoid update(int rt,int l,int r,int L,int R,int inc){\n    if(l>r || L>R || R<l || r<L) return;\n    if(L<=l && r<=R){\t\t//结点[l,r]是中止结点\n        sum[rt]+=inc*(r-l+1);//更新当前区间的和\n        lazy[rt]+=inc;\t//更新当前的延时更新值\n        return;\n    }\n    int mid=(l+r)>>1;\n    pushdown(rt,mid-l+1,r-mid);\t//更新当前结点的sum，并将延时更新值向孩子结点传递\n    //判断左右子树与[L,R]有没有交集，如果有，继续向下搜索\n    if(L<=mid) update(rt<<1,l,mid,L,R,inc);\n    if(R>mid) update((rt<<1)|1,mid+1,r,L,R,inc);\n    pushup(rt);\t\t//更新当前结点到根结点的所有节点\n}\nint query(int rt,int l,int r,int L,int R){\n    if(l>r || L>R || R<l || r<L) return 0;\n    if(L<=l && r<=R){\t//是中止结点\n        return sum[rt];\n    }\n    int mid = (l+r)>>1;\n    pushdown(rt,mid-l+1,r-mid);//更新当前结点的sum，并将延时更新值向孩子结点传递\n    int ret = 0;\t//最后结果为[L,R]在左右区间的sum之和\n    if(L<=mid) ret+=query(rt<<1,l,mid,L,R);\n    if(R>mid) ret+=query((rt<<1)|1,mid+1,r,L,R);\n    return ret;\n}\nvoid dump(int rt,int l,int r){cout<<l<<\" \"<<r<<\" \"<<sum[rt]<<\"\\n\";if(l<r){int m=(l+r)/2;dump(rt*2,l,m);dump(rt*2+1,m+1,r);}}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;int a[N];for(int i=1;i<=n;i++)cin>>a[i];build(a,1,1,n);\ndump(1,1,n);\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "1\n0\n",
        "expected": "1 1 0\n"
      },
      {
        "name": "测试 2",
        "stdin": "4\n2 -1 5 3\n",
        "expected": "1 4 9\n1 2 1\n1 1 2\n2 2 -1\n3 4 8\n3 3 5\n4 4 3\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n7 7 7\n",
        "expected": "1 3 21\n1 2 14\n1 1 7\n2 2 7\n3 3 7\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-segment-point",
    "title": "线段树：单点增量更新",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "wzfhk2wlng7igkb7",
        "blocks": [
          0,
          1,
          2,
          3,
          4
        ],
        "functions": [
          "update"
        ]
      }
    ],
    "description": "数组使用1..n编号，区间均为闭区间[l,r]。每次将指定位置的值增加inc，全部更新后查询区间和。",
    "input": "n；n个整数；m；m行pos inc；q；q行l r。",
    "output": "构建题按根、左、右先序输出，每行“l r 区间和”；其余按查询顺序输出区间和。",
    "constraints": [
      "1≤n≤50；0≤m≤100；1≤q≤100",
      "初值和inc均[-100,100]；1≤l≤r≤n；1≤pos≤n"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "1\n0\n2\n1 3\n1 -2\n3\n1 1\n1 1\n1 1\n",
        "expected": "1 1 1\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个整数；m；m行pos inc；q；q行l r。\n// 输出：构建题按根、左、右先序输出，每行“l r 区间和”；其余按查询顺序输出区间和。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n#define N 1000\nint sum[N<<2],lazy[N<<2]; //<<2相当于*4\n//sum是结点i所对应区间中元素之和，初始为0；lazy是结点的懒惰标记值\n//向上更新函数，当一个结点的孩子结点更新完毕时，需要更新当前结点的信息\nvoid pushup(int rt){\n    sum[rt] = sum[rt<<1]+sum[rt<<1|1]; //左孩子和右孩子\n}\n//根据数组a构建表示区间和线段树，rt表示当前结点编号，l、r表示当前结点区间\nvoid build(int a[N],int rt,int l,int r){\n    if(l>r) return;\n    lazy[rt]=0;\n    if(l==r){\n        sum[rt]=a[l]; //到达叶结点\n        return;\n    }\n    int mid = (l+r)>>1;\n    build(a,rt<<1,l,mid);\t//\t构建左子树\n    build(a,(rt<<1|1),mid+1,r);\t//构建右子树\n    pushup(rt);\n}\nvoid pushdown(int rt,int ln,int rn); //定义在下一块\n//将a[pos]的值增加inc\nvoid update(int rt,int l,int r,int pos,int inc){\n    if(pos<l || pos>r || l>r) return;\n    if(l==r){\t//l=r=pos\n        sum[rt]+=inc;\t\n        return;\n    }\n    int mid = (l+r)>>1;\n    pushdown(rt,mid-l+1,r-mid);\n    if(pos<=mid) update(rt<<1,l,mid,pos,inc); //pos在左子树\n    else update((rt<<1)|1,mid+1,r,pos,inc);\t//pos在右子树\n    pushup(rt);//更新当前结点到根结点的所有节点\n}\n//将结点rt的延时更新值向下传递 参数ln，rn分别为结点rt的左子树和右子树对应区间的长度\nvoid pushdown(int rt,int ln,int rn){\n    if(lazy[rt]){\n        lazy[rt<<1]+=lazy[rt];\t//当前结点延时更新值传递给左孩子\n        lazy[(rt<<1)|1]+=lazy[rt]; //当前结点延时更新值传递给右孩子\n        //利用当前结点rt的延时更新值修改rt的孩子结点的sum\n        sum[rt<<1] += lazy[rt]*ln;\n        sum[rt<<1|1]+=lazy[rt]*rn;\n        lazy[rt] = 0;\t\t//清除本结点的延时更新值\n    }\n}\n//区间更新，将a[L,R]中的元素值都增加inc\nvoid update(int rt,int l,int r,int L,int R,int inc){\n    if(l>r || L>R || R<l || r<L) return;\n    if(L<=l && r<=R){\t\t//结点[l,r]是中止结点\n        sum[rt]+=inc*(r-l+1);//更新当前区间的和\n        lazy[rt]+=inc;\t//更新当前的延时更新值\n        return;\n    }\n    int mid=(l+r)>>1;\n    pushdown(rt,mid-l+1,r-mid);\t//更新当前结点的sum，并将延时更新值向孩子结点传递\n    //判断左右子树与[L,R]有没有交集，如果有，继续向下搜索\n    if(L<=mid) update(rt<<1,l,mid,L,R,inc);\n    if(R>mid) update((rt<<1)|1,mid+1,r,L,R,inc);\n    pushup(rt);\t\t//更新当前结点到根结点的所有节点\n}\nint query(int rt,int l,int r,int L,int R){\n    if(l>r || L>R || R<l || r<L) return 0;\n    if(L<=l && r<=R){\t//是中止结点\n        return sum[rt];\n    }\n    int mid = (l+r)>>1;\n    pushdown(rt,mid-l+1,r-mid);//更新当前结点的sum，并将延时更新值向孩子结点传递\n    int ret = 0;\t//最后结果为[L,R]在左右区间的sum之和\n    if(L<=mid) ret+=query(rt<<1,l,mid,L,R);\n    if(R>mid) ret+=query((rt<<1)|1,mid+1,r,L,R);\n    return ret;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;int a[N];for(int i=1;i<=n;i++)cin>>a[i];build(a,1,1,n);\nint m;cin>>m;while(m--){int p,inc;cin>>p>>inc;update(1,1,n,p,inc);}int q;cin>>q;while(q--){int l,r;cin>>l>>r;cout<<query(1,1,n,l,r)<<\" \";}\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "1\n0\n2\n1 3\n1 -2\n3\n1 1\n1 1\n1 1\n",
        "expected": "1 1 1\n"
      },
      {
        "name": "测试 2",
        "stdin": "4\n2 -1 5 3\n2\n1 3\n4 -2\n3\n1 4\n1 1\n4 4\n",
        "expected": "10 5 1\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n7 7 7\n2\n1 3\n3 -2\n3\n1 3\n1 1\n3 3\n",
        "expected": "22 10 5\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-segment-range",
    "title": "线段树：懒标记区间增量更新",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "wzfhk2wlng7igkb7",
        "blocks": [
          0,
          1,
          2,
          3,
          4
        ],
        "functions": [
          "update"
        ]
      }
    ],
    "description": "数组使用1..n编号，区间均为闭区间[l,r]。每次将整个指定区间内的值增加inc，用懒标记延迟传递，全部更新后查询区间和。",
    "input": "n；n个整数；m；m行l r inc；q；q行l r。",
    "output": "构建题按根、左、右先序输出，每行“l r 区间和”；其余按查询顺序输出区间和。",
    "constraints": [
      "1≤n≤50；0≤m≤100；1≤q≤100",
      "初值和inc均[-100,100]；1≤l≤r≤n；1≤pos≤n"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "1\n0\n2\n1 1 3\n1 1 -2\n3\n1 1\n1 1\n1 1\n",
        "expected": "1 1 1\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个整数；m；m行l r inc；q；q行l r。\n// 输出：构建题按根、左、右先序输出，每行“l r 区间和”；其余按查询顺序输出区间和。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n#define N 1000\nint sum[N<<2],lazy[N<<2]; //<<2相当于*4\n//sum是结点i所对应区间中元素之和，初始为0；lazy是结点的懒惰标记值\n//向上更新函数，当一个结点的孩子结点更新完毕时，需要更新当前结点的信息\nvoid pushup(int rt){\n    sum[rt] = sum[rt<<1]+sum[rt<<1|1]; //左孩子和右孩子\n}\n//根据数组a构建表示区间和线段树，rt表示当前结点编号，l、r表示当前结点区间\nvoid build(int a[N],int rt,int l,int r){\n    if(l>r) return;\n    lazy[rt]=0;\n    if(l==r){\n        sum[rt]=a[l]; //到达叶结点\n        return;\n    }\n    int mid = (l+r)>>1;\n    build(a,rt<<1,l,mid);\t//\t构建左子树\n    build(a,(rt<<1|1),mid+1,r);\t//构建右子树\n    pushup(rt);\n}\nvoid pushdown(int rt,int ln,int rn); //定义在下一块\n//将a[pos]的值增加inc\nvoid update(int rt,int l,int r,int pos,int inc){\n    if(pos<l || pos>r || l>r) return;\n    if(l==r){\t//l=r=pos\n        sum[rt]+=inc;\t\n        return;\n    }\n    int mid = (l+r)>>1;\n    pushdown(rt,mid-l+1,r-mid);\n    if(pos<=mid) update(rt<<1,l,mid,pos,inc); //pos在左子树\n    else update((rt<<1)|1,mid+1,r,pos,inc);\t//pos在右子树\n    pushup(rt);//更新当前结点到根结点的所有节点\n}\n//将结点rt的延时更新值向下传递 参数ln，rn分别为结点rt的左子树和右子树对应区间的长度\nvoid pushdown(int rt,int ln,int rn){\n    if(lazy[rt]){\n        lazy[rt<<1]+=lazy[rt];\t//当前结点延时更新值传递给左孩子\n        lazy[(rt<<1)|1]+=lazy[rt]; //当前结点延时更新值传递给右孩子\n        //利用当前结点rt的延时更新值修改rt的孩子结点的sum\n        sum[rt<<1] += lazy[rt]*ln;\n        sum[rt<<1|1]+=lazy[rt]*rn;\n        lazy[rt] = 0;\t\t//清除本结点的延时更新值\n    }\n}\n//区间更新，将a[L,R]中的元素值都增加inc\nvoid update(int rt,int l,int r,int L,int R,int inc){\n    if(l>r || L>R || R<l || r<L) return;\n    if(L<=l && r<=R){\t\t//结点[l,r]是中止结点\n        sum[rt]+=inc*(r-l+1);//更新当前区间的和\n        lazy[rt]+=inc;\t//更新当前的延时更新值\n        return;\n    }\n    int mid=(l+r)>>1;\n    pushdown(rt,mid-l+1,r-mid);\t//更新当前结点的sum，并将延时更新值向孩子结点传递\n    //判断左右子树与[L,R]有没有交集，如果有，继续向下搜索\n    if(L<=mid) update(rt<<1,l,mid,L,R,inc);\n    if(R>mid) update((rt<<1)|1,mid+1,r,L,R,inc);\n    pushup(rt);\t\t//更新当前结点到根结点的所有节点\n}\nint query(int rt,int l,int r,int L,int R){\n    if(l>r || L>R || R<l || r<L) return 0;\n    if(L<=l && r<=R){\t//是中止结点\n        return sum[rt];\n    }\n    int mid = (l+r)>>1;\n    pushdown(rt,mid-l+1,r-mid);//更新当前结点的sum，并将延时更新值向孩子结点传递\n    int ret = 0;\t//最后结果为[L,R]在左右区间的sum之和\n    if(L<=mid) ret+=query(rt<<1,l,mid,L,R);\n    if(R>mid) ret+=query((rt<<1)|1,mid+1,r,L,R);\n    return ret;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;int a[N];for(int i=1;i<=n;i++)cin>>a[i];build(a,1,1,n);\nint m;cin>>m;while(m--){int l,r,inc;cin>>l>>r>>inc;update(1,1,n,l,r,inc);}int q;cin>>q;while(q--){int l,r;cin>>l>>r;cout<<query(1,1,n,l,r)<<\" \";}\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "1\n0\n2\n1 1 3\n1 1 -2\n3\n1 1\n1 1\n1 1\n",
        "expected": "1 1 1\n"
      },
      {
        "name": "测试 2",
        "stdin": "4\n2 -1 5 3\n2\n1 4 3\n4 4 -2\n3\n1 4\n1 1\n4 4\n",
        "expected": "19 5 4\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n7 7 7\n2\n1 3 3\n3 3 -2\n3\n1 3\n1 1\n3 3\n",
        "expected": "28 10 8\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-segment-query",
    "title": "线段树：区间和查询",
    "category": "树",
    "sourceRefs": [
      {
        "docId": "wzfhk2wlng7igkb7",
        "blocks": [
          0,
          1,
          2,
          3,
          4
        ],
        "functions": [
          "query"
        ]
      }
    ],
    "description": "数组使用1..n编号，区间均为闭区间[l,r]。构建后查询多个区间的元素总和。",
    "input": "n；n个整数；q；q行l r。",
    "output": "构建题按根、左、右先序输出，每行“l r 区间和”；其余按查询顺序输出区间和。",
    "constraints": [
      "1≤n≤50；0≤m≤100；1≤q≤100",
      "初值和inc均[-100,100]；1≤l≤r≤n；1≤pos≤n"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "1\n0\n3\n1 1\n1 1\n1 1\n",
        "expected": "0 0 0\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个整数；q；q行l r。\n// 输出：构建题按根、左、右先序输出，每行“l r 区间和”；其余按查询顺序输出区间和。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n#define N 1000\nint sum[N<<2],lazy[N<<2]; //<<2相当于*4\n//sum是结点i所对应区间中元素之和，初始为0；lazy是结点的懒惰标记值\n//向上更新函数，当一个结点的孩子结点更新完毕时，需要更新当前结点的信息\nvoid pushup(int rt){\n    sum[rt] = sum[rt<<1]+sum[rt<<1|1]; //左孩子和右孩子\n}\n//根据数组a构建表示区间和线段树，rt表示当前结点编号，l、r表示当前结点区间\nvoid build(int a[N],int rt,int l,int r){\n    if(l>r) return;\n    lazy[rt]=0;\n    if(l==r){\n        sum[rt]=a[l]; //到达叶结点\n        return;\n    }\n    int mid = (l+r)>>1;\n    build(a,rt<<1,l,mid);\t//\t构建左子树\n    build(a,(rt<<1|1),mid+1,r);\t//构建右子树\n    pushup(rt);\n}\nvoid pushdown(int rt,int ln,int rn); //定义在下一块\n//将a[pos]的值增加inc\nvoid update(int rt,int l,int r,int pos,int inc){\n    if(pos<l || pos>r || l>r) return;\n    if(l==r){\t//l=r=pos\n        sum[rt]+=inc;\t\n        return;\n    }\n    int mid = (l+r)>>1;\n    pushdown(rt,mid-l+1,r-mid);\n    if(pos<=mid) update(rt<<1,l,mid,pos,inc); //pos在左子树\n    else update((rt<<1)|1,mid+1,r,pos,inc);\t//pos在右子树\n    pushup(rt);//更新当前结点到根结点的所有节点\n}\n//将结点rt的延时更新值向下传递 参数ln，rn分别为结点rt的左子树和右子树对应区间的长度\nvoid pushdown(int rt,int ln,int rn){\n    if(lazy[rt]){\n        lazy[rt<<1]+=lazy[rt];\t//当前结点延时更新值传递给左孩子\n        lazy[(rt<<1)|1]+=lazy[rt]; //当前结点延时更新值传递给右孩子\n        //利用当前结点rt的延时更新值修改rt的孩子结点的sum\n        sum[rt<<1] += lazy[rt]*ln;\n        sum[rt<<1|1]+=lazy[rt]*rn;\n        lazy[rt] = 0;\t\t//清除本结点的延时更新值\n    }\n}\n//区间更新，将a[L,R]中的元素值都增加inc\nvoid update(int rt,int l,int r,int L,int R,int inc){\n    if(l>r || L>R || R<l || r<L) return;\n    if(L<=l && r<=R){\t\t//结点[l,r]是中止结点\n        sum[rt]+=inc*(r-l+1);//更新当前区间的和\n        lazy[rt]+=inc;\t//更新当前的延时更新值\n        return;\n    }\n    int mid=(l+r)>>1;\n    pushdown(rt,mid-l+1,r-mid);\t//更新当前结点的sum，并将延时更新值向孩子结点传递\n    //判断左右子树与[L,R]有没有交集，如果有，继续向下搜索\n    if(L<=mid) update(rt<<1,l,mid,L,R,inc);\n    if(R>mid) update((rt<<1)|1,mid+1,r,L,R,inc);\n    pushup(rt);\t\t//更新当前结点到根结点的所有节点\n}\nint query(int rt,int l,int r,int L,int R){\n    if(l>r || L>R || R<l || r<L) return 0;\n    if(L<=l && r<=R){\t//是中止结点\n        return sum[rt];\n    }\n    int mid = (l+r)>>1;\n    pushdown(rt,mid-l+1,r-mid);//更新当前结点的sum，并将延时更新值向孩子结点传递\n    int ret = 0;\t//最后结果为[L,R]在左右区间的sum之和\n    if(L<=mid) ret+=query(rt<<1,l,mid,L,R);\n    if(R>mid) ret+=query((rt<<1)|1,mid+1,r,L,R);\n    return ret;\n}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;int a[N];for(int i=1;i<=n;i++)cin>>a[i];build(a,1,1,n);\nint q;cin>>q;while(q--){int l,r;cin>>l>>r;cout<<query(1,1,n,l,r)<<\" \";}\nreturn 0;}\n",
    "referenceNote": "算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "1\n0\n3\n1 1\n1 1\n1 1\n",
        "expected": "0 0 0\n"
      },
      {
        "name": "测试 2",
        "stdin": "4\n2 -1 5 3\n3\n1 4\n1 1\n4 4\n",
        "expected": "9 2 3\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n7 7 7\n3\n1 3\n1 1\n3 3\n",
        "expected": "21 7 7\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-vec-copy",
    "title": "vector：复制构造",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "mtgwclgx66dch1gd",
        "blocks": [
          1
        ],
        "functions": [
          "vector::vector"
        ]
      }
    ],
    "description": "将输入序列复制到新vector，清空原容器，输出新容器证明独立复制。",
    "input": "n；n个整数；无其他输入。",
    "output": "输出操作结果，空序列EMPTY。",
    "constraints": [
      "0≤n,m≤30；元素[-100,100]；修改题n≥1",
      "区间0≤l≤r≤n；非空时0≤p<n；空表删除p=0。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个整数；无其他输入。\n// 输出：输出操作结果，空序列EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;\nvector<int>v(a);a.clear();printv(v);\nreturn 0;}\n",
    "referenceNote": "将原笔记中实际vector API示例参数化，采用同一标准容器操作。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n",
        "expected": "2\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-3 5 5\n",
        "expected": "-3 5 5\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-vec-range",
    "title": "vector：区间构造",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "mtgwclgx66dch1gd",
        "blocks": [
          1
        ],
        "functions": [
          "vector::vector"
        ]
      }
    ],
    "description": "用原序列的半开区间[l,r)构造新vector。",
    "input": "n；n个整数；随后l r。",
    "output": "输出操作结果，空序列EMPTY。",
    "constraints": [
      "0≤n,m≤30；元素[-100,100]；修改题n≥1",
      "区间0≤l≤r≤n；非空时0≤p<n；空表删除p=0。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n0 0\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个整数；随后l r。\n// 输出：输出操作结果，空序列EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;\nint l,r;cin>>l>>r;vector<int>v(a.begin()+l,a.begin()+r);printv(v);\nreturn 0;}\n",
    "referenceNote": "将原笔记中实际vector API示例参数化，采用同一标准容器操作。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n0 0\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n0 0\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-3 5 5\n0 2\n",
        "expected": "-3 5\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-vec-push",
    "title": "vector：尾部插入",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "mtgwclgx66dch1gd",
        "blocks": [
          4
        ],
        "functions": [
          "vector::push_back"
        ]
      }
    ],
    "description": "将x添加到vector末尾。",
    "input": "n；n个整数；随后x。",
    "output": "输出操作结果，空序列EMPTY。",
    "constraints": [
      "0≤n,m≤30；元素[-100,100]；修改题n≥1",
      "区间0≤l≤r≤n；非空时0≤p<n；空表删除p=0。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n7\n",
        "expected": "7\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个整数；随后x。\n// 输出：输出操作结果，空序列EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;\nint x;cin>>x;a.push_back(x);printv(a);\nreturn 0;}\n",
    "referenceNote": "将原笔记中实际vector API示例参数化，采用同一标准容器操作。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n7\n",
        "expected": "7\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n7\n",
        "expected": "2 7\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-3 5 5\n7\n",
        "expected": "-3 5 5 7\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-vec-pop",
    "title": "vector：尾部删除",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "mtgwclgx66dch1gd",
        "blocks": [
          5
        ],
        "functions": [
          "vector::pop_back"
        ]
      }
    ],
    "description": "非空时删除末元素；空容器保持空。",
    "input": "n；n个整数；无其他输入。",
    "output": "输出操作结果，空序列EMPTY。",
    "constraints": [
      "0≤n,m≤30；元素[-100,100]；修改题n≥1",
      "区间0≤l≤r≤n；非空时0≤p<n；空表删除p=0。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个整数；无其他输入。\n// 输出：输出操作结果，空序列EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;\nif(!a.empty())a.pop_back();printv(a);\nreturn 0;}\n",
    "referenceNote": "将原笔记中实际vector API示例参数化，采用同一标准容器操作。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-3 5 5\n",
        "expected": "-3 5\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-vec-erase-one",
    "title": "vector：删除指定位置",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "mtgwclgx66dch1gd",
        "blocks": [
          5
        ],
        "functions": [
          "vector::erase"
        ]
      }
    ],
    "description": "删除0起始下标p的单个元素；空容器时不操作。",
    "input": "n；n个整数；随后p。",
    "output": "输出操作结果，空序列EMPTY。",
    "constraints": [
      "0≤n,m≤30；元素[-100,100]；修改题n≥1",
      "区间0≤l≤r≤n；非空时0≤p<n；空表删除p=0。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n0\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个整数；随后p。\n// 输出：输出操作结果，空序列EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;\nint p;cin>>p;if(!a.empty())a.erase(a.begin()+p);printv(a);\nreturn 0;}\n",
    "referenceNote": "将原笔记中实际vector API示例参数化，采用同一标准容器操作。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n0\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n0\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-3 5 5\n0\n",
        "expected": "5 5\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-vec-modify",
    "title": "vector：修改指定元素",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "mtgwclgx66dch1gd",
        "blocks": [
          6
        ],
        "functions": [
          "vector::at"
        ]
      }
    ],
    "description": "将0起始下标p的元素修改为x。",
    "input": "n；n个整数；随后p x。",
    "output": "输出操作结果，空序列EMPTY。",
    "constraints": [
      "0≤n,m≤30；元素[-100,100]；修改题n≥1",
      "区间0≤l≤r≤n；非空时0≤p<n；空表删除p=0。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "1\n2\n0 9\n",
        "expected": "9\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个整数；随后p x。\n// 输出：输出操作结果，空序列EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;\nint p,x;cin>>p>>x;a.at(p)=x;printv(a);\nreturn 0;}\n",
    "referenceNote": "将原笔记中实际vector API示例参数化，采用同一标准容器操作。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "1\n2\n0 9\n",
        "expected": "9\n"
      },
      {
        "name": "测试 2",
        "stdin": "3\n-3 5 5\n0 9\n",
        "expected": "9 5 5\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n1 2 3\n2 -4\n",
        "expected": "1 2 -4\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-vec-assign-values",
    "title": "vector：用新序列重新赋值",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "mtgwclgx66dch1gd",
        "blocks": [
          6
        ],
        "functions": [
          "vector::assign"
        ]
      }
    ],
    "description": "读取新序列，用assign将旧元素整体替换。",
    "input": "n；n个整数；随后m和m个新元素。",
    "output": "输出操作结果，空序列EMPTY。",
    "constraints": [
      "0≤n,m≤30；元素[-100,100]；修改题n≥1",
      "区间0≤l≤r≤n；非空时0≤p<n；空表删除p=0。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n2\n8 -2\n",
        "expected": "8 -2\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个整数；随后m和m个新元素。\n// 输出：输出操作结果，空序列EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;\nint m;cin>>m;vector<int>v(m);for(int&x:v)cin>>x;a.assign(v.begin(),v.end());printv(a);\nreturn 0;}\n",
    "referenceNote": "将原笔记中实际vector API示例参数化，采用同一标准容器操作。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n2\n8 -2\n",
        "expected": "8 -2\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n2\n2\n8 -2\n",
        "expected": "8 -2\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-3 5 5\n2\n8 -2\n",
        "expected": "8 -2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-stl-stack-top",
    "title": "STL stack：读取栈顶",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "naes6mh6d27dh4fg",
        "blocks": [
          0,
          1
        ],
        "functions": [
          "stack::top"
        ]
      }
    ],
    "description": "按输入次序入栈，然后输出栈顶；空栈输出EMPTY。",
    "input": "n；n个整数。",
    "output": "栈顶值或EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个整数。\n// 输出：栈顶值或EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;stack<int>q;for(int x:a)q.push(x);\nif(q.empty())cout<<\"EMPTY\";else cout<<q.top();\nreturn 0;}\n",
    "referenceNote": "参数化原STL栈API，空容器先判空避免未定义行为。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n3\n",
        "expected": "3\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 5 8\n",
        "expected": "8\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-stl-stack-empty",
    "title": "STL stack：判空",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "naes6mh6d27dh4fg",
        "blocks": [
          0,
          1
        ],
        "functions": [
          "stack::empty"
        ]
      }
    ],
    "description": "按输入次序入栈，然后判断是否为空，空输出1，否则0。",
    "input": "n；n个整数。",
    "output": "空栈1，非空0。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "1\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个整数。\n// 输出：空栈1，非空0。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;stack<int>q;for(int x:a)q.push(x);\ncout<<q.empty();\nreturn 0;}\n",
    "referenceNote": "参数化原STL栈API，空容器先判空避免未定义行为。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "1\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n3\n",
        "expected": "0\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 5 8\n",
        "expected": "0\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-stl-queue-front",
    "title": "STL queue：读取队头",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "vn1vtgg058gsyr91",
        "blocks": [
          0,
          1
        ],
        "functions": [
          "queue::front"
        ]
      }
    ],
    "description": "按输入次序入队，然后输出队头；空队列输出EMPTY。",
    "input": "n；n个整数。",
    "output": "队头值或EMPTY。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个整数。\n// 输出：队头值或EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;queue<int>q;for(int x:a)q.push(x);\nif(q.empty())cout<<\"EMPTY\";else cout<<q.front();\nreturn 0;}\n",
    "referenceNote": "参数化原STL队列API，空容器先判空避免未定义行为。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "EMPTY\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n3\n",
        "expected": "3\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 5 8\n",
        "expected": "-2\n"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "lt-stl-queue-empty",
    "title": "STL queue：判空",
    "category": "线性结构",
    "sourceRefs": [
      {
        "docId": "vn1vtgg058gsyr91",
        "blocks": [
          0,
          1
        ],
        "functions": [
          "queue::empty"
        ]
      }
    ],
    "description": "按输入次序入队，然后判断是否为空，空输出1，否则0。",
    "input": "n；n个整数。",
    "output": "空队列1，非空0。",
    "constraints": [
      "0 ≤ n ≤ 30",
      "输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。"
    ],
    "samples": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "1\n",
        "explanation": "按照题面规则依次处理，输出最终结果。"
      }
    ],
    "template": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个整数。\n// 输出：空队列1，非空0。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 读取输入，独立实现本题算法并输出结果。\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <queue>\n#include <stack>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cstring>\n#include <cctype>\n#include <stdexcept>\n#include <iomanip>\n#include <sstream>\nusing namespace std;\nvoid printv(const vector<int>&v){if(v.empty()){cout<<\"EMPTY\\n\";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;queue<int>q;for(int x:a)q.push(x);\ncout<<q.empty();\nreturn 0;}\n",
    "referenceNote": "参数化原STL队列API，空容器先判空避免未定义行为。",
    "cases": [
      {
        "name": "测试 1",
        "stdin": "0\n\n",
        "expected": "1\n"
      },
      {
        "name": "测试 2",
        "stdin": "1\n3\n",
        "expected": "0\n"
      },
      {
        "name": "测试 3",
        "stdin": "3\n-2 5 8\n",
        "expected": "0\n"
      }
    ],
    "difficulty": "基础"
  }
];
