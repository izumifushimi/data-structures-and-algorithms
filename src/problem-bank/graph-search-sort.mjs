// Generated from preserved Yuque notes and verified C++17 references.
export const problems = [
  {
    "id": "g-matrix-build",
    "title": "邻接矩阵 · 构建并输出",
    "category": "图",
    "sourceRefs": [
      {
        "docId": "uaafc7zhihxseat8",
        "blocks": [
          0,
          1
        ],
        "functions": [
          "create"
        ]
      }
    ],
    "description": "根据无向带权边构造邻接矩阵。矩阵中的 INF 表示没有边（对角线也为 INF，除非存在自环；本题不输入自环）。输出矩阵。",
    "input": "n m\nm 行 u v w；编号为0..n-1。",
    "output": "矩阵每行n项，或邻接点编号序列。",
    "constraints": [
      "1≤n≤60",
      "0≤m≤n(n-1)/2",
      "-1000≤w≤1000；无重边、无自环"
    ],
    "samples": [
      {
        "stdin": "1 0\n\n",
        "expected": "INF",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "3 2\n0 1 5\n1 2 7\n",
        "expected": "INF 5 INF\n5 INF 7\nINF 7 INF",
        "explanation": "边界样例：链式图"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；m 行 u v w；编号为0..n-1。\n// 输出：矩阵每行n项，或邻接点编号序列。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\nstruct adjMatrix{\n        datatype data[vNum];\nint edge[vNum][vNum];\nint v; //vertex\nint e; //edge\n};\nvoid create(adjMatrix &g){\n    int u,v,w;//w指的是边的权值，u为边的起点，v为边的终点\n    cin>>g.v>>g.e;\n    for(int i=0;i<g.v;i++){\n        for(int j=0;j<g.v;j++){\n            g.edge[i][j]=INF; //初始化矩阵\n        }\n    }\n    for(int i=0;i<g.e;i++){\n        cin>>u>>v>>w;\n        g.edge[u][v]=w; //因为这是无向图,u和v之间的边没有方向,所以矩阵中两个位置都要赋值\n        g.edge[v][u]=w;\n    }\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nadjMatrix g;create(g);for(int i=0;i<g.v;i++){for(int j=0;j<g.v;j++){if(g.edge[i][j]==INF)cout<<\"INF \";else cout<<g.edge[i][j]<<\" \";}cout<<\"\\n\";}\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "单顶点",
        "stdin": "1 0\n\n",
        "expected": "INF"
      },
      {
        "name": "链式图",
        "stdin": "3 2\n0 1 5\n1 2 7\n",
        "expected": "INF 5 INF\n5 INF 7\nINF 7 INF"
      },
      {
        "name": "零权和孤立顶点",
        "stdin": "4 2\n0 2 0\n2 3 -2\n",
        "expected": "INF INF 0 INF\nINF INF INF INF\n0 INF INF -2\nINF INF -2 INF"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "g-matrix-neighbors",
    "title": "邻接矩阵 · 输出指定顶点的邻接点",
    "category": "图",
    "sourceRefs": [
      {
        "docId": "uaafc7zhihxseat8",
        "blocks": [
          0,
          1,
          2
        ],
        "functions": [
          "adjVertex"
        ]
      }
    ],
    "description": "根据无向带权边构造邻接矩阵。矩阵中的 INF 表示没有边（对角线也为 INF，除非存在自环；本题不输入自环）。按编号递增输出指定顶点的邻接点；没有邻接点输出 EMPTY。",
    "input": "n m\nm 行 u v w；编号为0..n-1。\n最后一行查询顶点u。",
    "output": "矩阵每行n项，或邻接点编号序列。",
    "constraints": [
      "1≤n≤60",
      "0≤m≤n(n-1)/2",
      "-1000≤w≤1000；无重边、无自环"
    ],
    "samples": [
      {
        "stdin": "1 0\n\n0\n",
        "expected": "EMPTY",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "3 2\n0 1 5\n1 2 7\n1\n",
        "expected": "0 2",
        "explanation": "边界样例：链式图"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；m 行 u v w；编号为0..n-1。；最后一行查询顶点u。\n// 输出：矩阵每行n项，或邻接点编号序列。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\nstruct adjMatrix{\n        datatype data[vNum];\nint edge[vNum][vNum];\nint v; //vertex\nint e; //edge\n};\nvoid create(adjMatrix &g){\n    int u,v,w;//w指的是边的权值，u为边的起点，v为边的终点\n    cin>>g.v>>g.e;\n    for(int i=0;i<g.v;i++){\n        for(int j=0;j<g.v;j++){\n            g.edge[i][j]=INF; //初始化矩阵\n        }\n    }\n    for(int i=0;i<g.e;i++){\n        cin>>u>>v>>w;\n        g.edge[u][v]=w; //因为这是无向图,u和v之间的边没有方向,所以矩阵中两个位置都要赋值\n        g.edge[v][u]=w;\n    }\n}\n//输出无权图g中第u个顶点的所有邻接点\nvoid adjVertex(adjMatrix g,int u){\n    for(int i=0;i<g.v;i++){\n        if(g.edge[u][i]!=INF)\n            cout<<i<<' ';\n}\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nadjMatrix g;create(g);int u;cin>>u;bool any=false;for(int i=0;i<g.v;i++)if(g.edge[u][i]!=INF)any=true;if(!any)cout<<\"EMPTY\";else adjVertex(g,u);\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "单顶点",
        "stdin": "1 0\n\n0\n",
        "expected": "EMPTY"
      },
      {
        "name": "链式图",
        "stdin": "3 2\n0 1 5\n1 2 7\n1\n",
        "expected": "0 2"
      },
      {
        "name": "零权和孤立顶点",
        "stdin": "4 2\n0 2 0\n2 3 -2\n0\n",
        "expected": "2"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "g-linked-adjacency",
    "title": "链式边表 · 构建和邻接点输出",
    "category": "图",
    "sourceRefs": [
      {
        "docId": "hnap2ge6fi24yk7v",
        "blocks": [
          0,
          1
        ],
        "functions": [
          "create",
          "add_edge"
        ]
      }
    ],
    "description": "按原表示法保存无向带权图，并输出每个顶点的边链。采用原码头插法，每个顶点的邻接边按照加入顺序的逆序输出。",
    "input": "n m\nm行 u v w；每条无向边同时加入两个方向。",
    "output": "每个顶点一行：u:，后接若干 v,w（逗号两侧无空格）；无边时只有u:。",
    "constraints": [
      "1≤n≤60",
      "0≤m≤1000",
      "端点均在1..n；简单图不含自环；未特别说明时允许非连通。",
      "-1000≤w≤1000"
    ],
    "samples": [
      {
        "stdin": "1 0\n\n",
        "expected": "1:",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "3 2\n1 2 5\n2 3 7\n",
        "expected": "1: 2,5\n2: 3,7 1,5\n3: 2,7",
        "explanation": "边界样例：链式图"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；m行 u v w；每条无向边同时加入两个方向。\n// 输出：每个顶点一行：u:，后接若干 v,w（逗号两侧无空格）；无边时只有u:。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\nstruct vertex{\t//一个链接表\n    int u; //邻接点的编号\n    int w;\n    vertex *next;\nvertex(int u1=0,int w1=0):u(u1),w(w1),next(NULL){} //初始化直接传参\n};\ntypedef struct llNode{\ndatatype data[vNum]; //顶点数据\nvertex *edges[vNum]; //edges[i]指的是第i个顶点指向那些数据，是指向一条链表的头指针\nint v,e;\nllNode():v(0),e(0){\n    for(int i=0;i<vNum;i++)\n        edges[i]=NULL;\n}\n}*linkList;\n//在图g添加一条边(u,v)，权重为w\nvoid add_edge(linkList &g,int u,int v,int w)\n{\n    vertex * temp = new vertex(v,w);\n    if(g->edges[u]==NULL) g->edges[u]=new vertex; //如果是空的，需要先创建边链表\n    temp->next = g->edges[u]->next;\n    g->edges[u]->next=temp;\n}\n//根据输入的数据，创建图g\nvoid create(linkList &g){\n    int u,v,w;\n    g = new llNode;\n    cin>>g->v>>g->e;\t//输入顶点数和边数\n    for(int i=0;i<g->e;i++){\n        cin>>u>>v>>w; //无权图的w输入1\n        add_edge(g,u,v,w);\n        add_edge(g,v,u,w);\t //有向图不需要反向添加\n    }\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nlinkList g;create(g);for(int i=1;i<=g->v;i++){cout<<i<<\":\";if(g->edges[i])for(vertex*p=g->edges[i]->next;p;p=p->next)cout<<\" \"<<p->u<<\",\"<<p->w;cout<<\"\\n\";}\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "单顶点空边",
        "stdin": "1 0\n\n",
        "expected": "1:"
      },
      {
        "name": "链式图",
        "stdin": "3 2\n1 2 5\n2 3 7\n",
        "expected": "1: 2,5\n2: 3,7 1,5\n3: 2,7"
      },
      {
        "name": "头插顺序与零权",
        "stdin": "4 2\n1 3 0\n1 2 -2\n",
        "expected": "1: 2,-2 3,0\n2: 1,-2\n3: 1,0\n4:"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "g-vector-adjacency",
    "title": "vector 边表 · 构建和邻接点输出",
    "category": "图",
    "sourceRefs": [
      {
        "docId": "hnap2ge6fi24yk7v",
        "blocks": [
          2,
          3
        ],
        "functions": [
          "create"
        ]
      }
    ],
    "description": "按原表示法保存无向带权图，并输出每个顶点的边链。每条边依输入顺序尾插，保持输入顺序。",
    "input": "n m\nm行 u v w；每条无向边同时加入两个方向。",
    "output": "每个顶点一行：u:，后接若干 v,w（逗号两侧无空格）；无边时只有u:。",
    "constraints": [
      "1≤n≤60",
      "0≤m≤1000",
      "端点均在1..n；简单图不含自环；未特别说明时允许非连通。",
      "-1000≤w≤1000"
    ],
    "samples": [
      {
        "stdin": "1 0\n\n",
        "expected": "1:",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "3 2\n1 2 5\n2 3 7\n",
        "expected": "1: 2,5\n2: 1,5 3,7\n3: 2,7",
        "explanation": "边界样例：链式图"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；m行 u v w；每条无向边同时加入两个方向。\n// 输出：每个顶点一行：u:，后接若干 v,w（逗号两侧无空格）；无边时只有u:。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\nstruct edge{\nint v;\nint w;\nedge(int v1,int w1):v(v1),w(w1){}\n};\ntypedef struct vgNode{\nvector<edge> edges[vNum];\t//边表\ndatatype data[vNum];\nint v,e;\n}vecGraph;\nvoid create(vecGraph &g){\n    int i,u,v,w;\n    cin>>g.v>>g.e;\n    for(i=0;i<vNum;i++) g.edges[i].clear();\n    for(i=0;i<g.e;i++){\n        cin>>u>>v>>w;\n        g.edges[u].push_back(edge(v,w)); //将边(u,v)加入图\n        g.edges[v].push_back(edge(u,w)); //将边(v,u)加入图（有向图不需要）\n    }\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nvecGraph g;create(g);for(int i=1;i<=g.v;i++){cout<<i<<\":\";for(auto x:g.edges[i])cout<<\" \"<<x.v<<\",\"<<x.w;cout<<\"\\n\";}\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "单顶点空边",
        "stdin": "1 0\n\n",
        "expected": "1:"
      },
      {
        "name": "链式图",
        "stdin": "3 2\n1 2 5\n2 3 7\n",
        "expected": "1: 2,5\n2: 1,5 3,7\n3: 2,7"
      },
      {
        "name": "头插顺序与零权",
        "stdin": "4 2\n1 3 0\n1 2 -2\n",
        "expected": "1: 3,0 2,-2\n2: 1,-2\n3: 1,0\n4:"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "g-forward-star-adjacency",
    "title": "静态链式前向星 · 构建和邻接点输出",
    "category": "图",
    "sourceRefs": [
      {
        "docId": "hnap2ge6fi24yk7v",
        "blocks": [
          4,
          5
        ],
        "functions": [
          "create",
          "add",
          "traverse"
        ]
      }
    ],
    "description": "按原表示法保存无向带权图，并输出每个顶点的边链。采用原码头插法，每个顶点的邻接边按照加入顺序的逆序输出。",
    "input": "n m\nm行 u v w；每条无向边同时加入两个方向。",
    "output": "每个顶点一行：u:，后接若干 v,w（逗号两侧无空格）；无边时只有u:。",
    "constraints": [
      "1≤n≤60",
      "0≤m≤1000",
      "端点均在1..n；简单图不含自环；未特别说明时允许非连通。",
      "-1000≤w≤1000"
    ],
    "samples": [
      {
        "stdin": "1 0\n\n",
        "expected": "1:",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "3 2\n1 2 5\n2 3 7\n",
        "expected": "1: 2,5\n2: 3,7 1,5\n3: 2,7",
        "explanation": "边界样例：链式图"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；m行 u v w；每条无向边同时加入两个方向。\n// 输出：每个顶点一行：u:，后接若干 v,w（逗号两侧无空格）；无边时只有u:。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\nstruct node{\nint to;\t\t//邻接点\nint w;\nint next;\t//下一个顶点\nnode():next(-1){}\n} edges[eNum<<1];\t//边表大小为2*eNum\nint header[vNum],\t//每一个顶点第一个邻接点的编号，初始值为-1\nv,e,\t\ncnt=0;\t//计数器，表示edges中没有被占用的最小下标\nvoid add(int u,int v,int w){ //添加一条边\nedges[cnt].to=v;\t//将边的信息加入edges\nedges[cnt].w=w;\t\t\nedges[cnt].next=header[u];\t//记录顶点上一条边的位置\nheader[u]=cnt++; ////让新边成为顶点u的第一条边,然后cnt加1\n}\n//更新全局变量\nvoid create(){\n    int i,x,y,w;\n    cin>>v>>e;\n    cnt=0;\n    for(i=0;i<=v;i++){\n        header[i]=-1;\n    }\n    for(i=0;i<e;i++){\n        cin>>x>>y>>w;\n        add(x,y,w);\n        add(y,x,w);\n    }\n}\n//输出每个顶点的邻接点和相应边的权重\nvoid traverse(){\n    for(int i=1;i<=v;i++){\n        cout<<i<<':';\n        for(int j=header[i];j!=-1;j=edges[j].next){\n            cout<<edges[j].to<<' '<<edges[j].w<<',';\n        }\n    }\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\ncreate();for(int i=1;i<=v;i++){cout<<i<<\":\";for(int j=header[i];j!=-1;j=edges[j].next)cout<<\" \"<<edges[j].to<<\",\"<<edges[j].w;cout<<\"\\n\";}\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "单顶点空边",
        "stdin": "1 0\n\n",
        "expected": "1:"
      },
      {
        "name": "链式图",
        "stdin": "3 2\n1 2 5\n2 3 7\n",
        "expected": "1: 2,5\n2: 3,7 1,5\n3: 2,7"
      },
      {
        "name": "头插顺序与零权",
        "stdin": "4 2\n1 3 0\n1 2 -2\n",
        "expected": "1: 2,-2 3,0\n2: 1,-2\n3: 1,0\n4:"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "g-dfs",
    "title": "DFS · 全图深度优先序列",
    "category": "图",
    "sourceRefs": [
      {
        "docId": "hzwyvvq4bbg2x7pc",
        "blocks": [
          0
        ],
        "functions": [
          "dfs",
          "dfs_traverse"
        ]
      }
    ],
    "description": "按输入顺序遍历每个顶点的邻接边。从编号最小的未访问点开始处理各连通部分，输出完整遍历序列。",
    "input": "n m\n接下来 m 行 u v；顶点为 1..n，按输入顺序加入有向边。",
    "output": "一行空格分隔的遍历顶点，或按1..n排列的距离。",
    "constraints": [
      "1≤n≤60",
      "0≤m≤1000",
      "端点均在1..n；简单图不含自环；未特别说明时允许非连通。"
    ],
    "samples": [
      {
        "stdin": "1 0\n\n",
        "expected": "1",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "5 4\n1 2\n1 3\n2 4\n3 4\n",
        "expected": "1 2 4 3 5",
        "explanation": "边界样例：交叉路径"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；接下来 m 行 u v；顶点为 1..n，按输入顺序加入有向边。\n// 输出：一行空格分隔的遍历顶点，或按1..n排列的距离。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\nbool vis[vNum];\t//标记每一个顶点的颜色\nint dfn[vNum],cnt=0; //dfn存放DFS序列，cnt为序列编号\n//对图g的顶点cur所在连通分量做深度优先搜索\nvoid dfs(vector<int>g[vNum],int cur){\n    int i,u;\n    dfn[++cnt] = cur; //第几个访问的是cur\n    vis[cur]=true;\t//当前顶点为黑色\n    for(i=0;i<g[cur].size();i++){\n        u=g[cur][i];  //顶点cur的第i个连接点\n      if(!vis[u]) dfs(g,u); //如果u是白色，就找u的邻接点\n    }\n}\n//对图g深度优先搜索\nvoid dfs_traverse(vector<int>g[vNum],int v){\n    int i;\n    cnt=0;\n    memset(vis,0,sizeof(vis));\t//每个顶点都是白色\n    for(i=1;i<=v;i++){\n        if(!vis[i]) dfs(g,i);//如果i是白色，就找i的邻接点\n    }\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<int>g[vNum];for(int i=0;i<m;i++){int u,v;cin>>u>>v;g[u].push_back(v);}dfs_traverse(g,n);for(int i=1;i<=cnt;i++)cout<<dfn[i]<<\" \";\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "单顶点",
        "stdin": "1 0\n\n",
        "expected": "1"
      },
      {
        "name": "交叉路径",
        "stdin": "5 4\n1 2\n1 3\n2 4\n3 4\n",
        "expected": "1 2 4 3 5"
      },
      {
        "name": "非连通图",
        "stdin": "5 2\n1 2\n3 4\n",
        "expected": "1 2 3 4 5"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "g-bfs",
    "title": "BFS · 全图广度优先序列",
    "category": "图",
    "sourceRefs": [
      {
        "docId": "hzwyvvq4bbg2x7pc",
        "blocks": [
          2
        ],
        "functions": [
          "bfs",
          "bfs_traverse"
        ]
      }
    ],
    "description": "按输入顺序遍历每个顶点的邻接边。从编号最小的未访问点开始处理各连通部分，输出完整遍历序列。",
    "input": "n m\n接下来 m 行 u v；顶点为 1..n，按输入顺序加入有向边。",
    "output": "一行空格分隔的遍历顶点，或按1..n排列的距离。",
    "constraints": [
      "1≤n≤60",
      "0≤m≤1000",
      "端点均在1..n；简单图不含自环；未特别说明时允许非连通。"
    ],
    "samples": [
      {
        "stdin": "1 0\n\n",
        "expected": "1",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "5 4\n1 2\n1 3\n2 4\n3 4\n",
        "expected": "1 2 3 4 5",
        "explanation": "边界样例：交叉路径"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；接下来 m 行 u v；顶点为 1..n，按输入顺序加入有向边。\n// 输出：一行空格分隔的遍历顶点，或按1..n排列的距离。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\nbool vis[vNum];\t\t//标记顶点的颜色\nint bfn[vNum];\nint bfn_cnt=0;\t\t//广度优先序列\n//对图g中cur所在连通分量进行广度优先搜索，出发点为cur\nvoid bfs(vector<int> g[vNum],int cur){\n    int i,u,v;\n    queue<int> q;\n    bfn[++bfn_cnt]=cur,vis[cur]=true;\t //bfn[1]就是cur，访问后涂黑\n    q.push(cur);\t//入队\n    while(!q.empty()){\t\n        u=q.front(),q.pop();\t//取出队头\n        for(i=0;i<g[u].size();i++){\t//检查每一个邻接点\n            v=g[u][i];\n            if(!vis[v]){ //白色\n                bfn[++bfn_cnt]=v;\n                vis[v]=true;\n                q.push(v);\n            }\n        }\n    }\n}\n//对g进行广度优先搜索，v为顶点数量\nvoid bfs_traverse(vector<int> g[vNum],int v){\n    bfn_cnt=0;\n    memset(vis,0,sizeof(vis)); //每个顶点都是白色\n    for(int i=1;i<=v;i++){\n        if(!vis[i])\n            bfs(g,i);\n    }\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<int>g[vNum];for(int i=0;i<m;i++){int u,v;cin>>u>>v;g[u].push_back(v);}bfs_traverse(g,n);for(int i=1;i<=bfn_cnt;i++)cout<<bfn[i]<<\" \";\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "单顶点",
        "stdin": "1 0\n\n",
        "expected": "1"
      },
      {
        "name": "交叉路径",
        "stdin": "5 4\n1 2\n1 3\n2 4\n3 4\n",
        "expected": "1 2 3 4 5"
      },
      {
        "name": "非连通图",
        "stdin": "5 2\n1 2\n3 4\n",
        "expected": "1 2 3 4 5"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "g-distance",
    "title": "BFS · 无权最短距离",
    "category": "图",
    "sourceRefs": [
      {
        "docId": "hzwyvvq4bbg2x7pc",
        "blocks": [
          3
        ],
        "functions": [
          "bfs"
        ]
      }
    ],
    "description": "按输入顺序遍历每个顶点的邻接边。求给定源点到每个顶点经过的最少边数，不可达输出-1。",
    "input": "n m\n接下来 m 行 u v；顶点为 1..n，按输入顺序加入有向边。\n最后一行源点st。",
    "output": "一行空格分隔的遍历顶点，或按1..n排列的距离。",
    "constraints": [
      "1≤n≤60",
      "0≤m≤1000",
      "端点均在1..n；简单图不含自环；未特别说明时允许非连通。"
    ],
    "samples": [
      {
        "stdin": "1 0\n\n1\n",
        "expected": "0",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "5 4\n1 2\n1 3\n2 4\n3 4\n1\n",
        "expected": "0 1 1 2 -1",
        "explanation": "边界样例：交叉路径"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；接下来 m 行 u v；顶点为 1..n，按输入顺序加入有向边。；最后一行源点st。\n// 输出：一行空格分隔的遍历顶点，或按1..n排列的距离。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\nbool vis[vNum];\n//求顶点cur到其他顶点的最短路径长\nvoid bfs(vector<int>g[vNum],int cur,int dis[vNum]){\n    int i,u,v;\n    memset(vis,0,sizeof(vis));\n    fill(dis,dis+vNum,-1);\n    dis[cur]=0;\n    queue<int>q;\n    vis[cur]=true;\n    q.push(cur);\n    while(!q.empty()){\n        u=q.front(),q.pop();\n        for(i=0;i<g[u].size();i++){\n            v=g[u][i];\n            if(!vis[v]){\n                dis[v]=dis[u]+1;\t\n                vis[v]=true,q.push(v);\n            }\n        }\n    }\n}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<int>g[vNum];for(int i=0;i<m;i++){int u,v;cin>>u>>v;g[u].push_back(v);}int st,d[vNum];cin>>st;bfs(g,st,d);for(int i=1;i<=n;i++)cout<<d[i]<<\" \";\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "单顶点",
        "stdin": "1 0\n\n1\n",
        "expected": "0"
      },
      {
        "name": "交叉路径",
        "stdin": "5 4\n1 2\n1 3\n2 4\n3 4\n1\n",
        "expected": "0 1 1 2 -1"
      },
      {
        "name": "非连通图",
        "stdin": "5 2\n1 2\n3 4\n1\n",
        "expected": "0 1 -1 -1 -1"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "g-maze-reachable",
    "title": "迷宫 DFS · 可达性（原例）",
    "category": "图",
    "sourceRefs": [
      {
        "docId": "hzwyvvq4bbg2x7pc",
        "blocks": [
          1
        ],
        "functions": [
          "can",
          "dfs"
        ]
      }
    ],
    "description": "网格0可通行、1为墙。从左上角走到右下角，每次上下左右移动。判断是否存在路径，存在输出1，否则0。",
    "input": "n m\n接下来n行，每行m个0或1。",
    "output": "一个整数。",
    "constraints": [
      "1≤n,m≤60",
      "0表示通行，1表示墙"
    ],
    "samples": [
      {
        "stdin": "1 1\n0\n",
        "expected": "1",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "1 1\n1\n",
        "expected": "0",
        "explanation": "边界样例：墙壁起点"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；接下来n行，每行m个0或1。\n// 输出：一个整数。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n#define N 100\n#define M 100\nbool maze[N][M],vis[N][M];//定义了两个布尔数组来判断访问情况和墙壁情况\nint n,m,dir[4][2]={{1,0},{-1,0},{0,1},{0,-1}};//用来表示上下左右移动\nbool can(int x,int y){//房间(x,y)在迷宫内部，能进入，没被访问过\n    return x>=0 && x<n && y>=0 && y<m && !maze[x][y] && !vis[x][y];\n}\nvoid dfs(int x,int y,int &ret){\n    int i,dx,dy;\n    if(ret) return;\n    if(x==n-1 && y==m-1){ ret=1; return; }\n    vis[x][y]=true; //标记当前房间\n    for(i=0;i<4;i++){ //查看四个相邻的房间\n        dx=x+dir[i][0],dy=y+dir[i][1]; //第一列是x的，第二列是y的\n        if(can(dx,dy)){\n        if(dx==n-1 && dy==m-1){ //因为我们要找的是最右下角的房子，所以是x[n-1]y[n-1]\n            ret=1; //表示成功找到通路\n            return;\n        }\n        dfs(dx,dy,ret);//如果不是终点就继续找\n        }\n    }\n}\nint main(){\n    cin>>n>>m;\n    if(n<=0 || n>N || m<=0 || m>M){ cout<<0<<endl; return 0; }\n    for(int i=0;i<n;i++)\n        for(int j=0;j<m;j++)\n            cin>>maze[i][j];\n    memset(vis,0,sizeof(vis));\n    int ret=0;\n    if(n>0 && n<=N && m>0 && m<=M && can(0,0)) dfs(0,0,ret);\n    cout<<ret<<endl;\n    return 0;\n}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "起终点重合",
        "stdin": "1 1\n0\n",
        "expected": "1"
      },
      {
        "name": "墙壁起点",
        "stdin": "1 1\n1\n",
        "expected": "0"
      },
      {
        "name": "两条通路",
        "stdin": "2 2\n0 0\n0 0\n",
        "expected": "1"
      },
      {
        "name": "无法到达",
        "stdin": "2 2\n0 1\n1 0\n",
        "expected": "0"
      },
      {
        "name": "绕过障碍",
        "stdin": "3 3\n0 0 0\n0 1 0\n0 0 0\n",
        "expected": "1"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "g-maze-paths",
    "title": "迷宫 DFS · 不重复房间的路径计数",
    "category": "图",
    "sourceRefs": [
      {
        "docId": "hzwyvvq4bbg2x7pc",
        "blocks": [
          1
        ],
        "functions": [
          "can",
          "dfs"
        ]
      }
    ],
    "description": "网格0可通行、1为墙。从左上角走到右下角，每次上下左右移动。统计所有不重复经过房间的路径；起点与终点重合且可通行时计1条。",
    "input": "n m\n接下来n行，每行m个0或1。",
    "output": "一个整数。",
    "constraints": [
      "1≤n,m≤5",
      "0表示通行，1表示墙"
    ],
    "samples": [
      {
        "stdin": "1 1\n0\n",
        "expected": "1",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "1 1\n1\n",
        "expected": "0",
        "explanation": "边界样例：墙壁起点"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；接下来n行，每行m个0或1。\n// 输出：一个整数。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\nint n,m,a[6][6];bool seen[6][6];\nlong long count_paths(int x,int y){if(x<0||x>=n||y<0||y>=m||a[x][y]||seen[x][y])return 0;if(x==n-1&&y==m-1)return 1;seen[x][y]=1;long long ret=count_paths(x+1,y)+count_paths(x-1,y)+count_paths(x,y+1)+count_paths(x,y-1);seen[x][y]=0;return ret;}\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\ncin>>n>>m;for(int i=0;i<n;i++)for(int j=0;j<m;j++)cin>>a[i][j];cout<<count_paths(0,0);\nreturn 0;}\n",
    "referenceNote": "扩展练习：原例只求0/1可达性；计数参考由同一DFS扩展为回溯，在返回时撤销访问标记，不声称是原始计数代码。",
    "cases": [
      {
        "name": "起终点重合",
        "stdin": "1 1\n0\n",
        "expected": "1"
      },
      {
        "name": "墙壁起点",
        "stdin": "1 1\n1\n",
        "expected": "0"
      },
      {
        "name": "两条通路",
        "stdin": "2 2\n0 0\n0 0\n",
        "expected": "2"
      },
      {
        "name": "无法到达",
        "stdin": "2 2\n0 1\n1 0\n",
        "expected": "0"
      },
      {
        "name": "绕过障碍",
        "stdin": "3 3\n0 0 0\n0 1 0\n0 0 0\n",
        "expected": "2"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "g-scc-kosaraju",
    "title": "Kosaraju · 强连通分量",
    "category": "图",
    "sourceRefs": [
      {
        "docId": "gm25a9zkibxepn7w",
        "blocks": [
          0
        ],
        "functions": [
          "Kosaraju",
          "dfs",
          "dfst"
        ]
      }
    ],
    "description": "求有向图的强连通分量。为避免内部编号顺序影响判题，每个顶点输出其分量中的最小顶点编号。",
    "input": "n m\n接下来 m 行 u v；顶点为 1..n，按输入顺序加入有向边。",
    "output": "按顶点1..n输出规范化分量标签。",
    "constraints": [
      "1≤n≤60",
      "0≤m≤1000",
      "端点均在1..n；简单图不含自环；未特别说明时允许非连通。"
    ],
    "samples": [
      {
        "stdin": "1 0\n\n",
        "expected": "1",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "5 5\n1 2\n2 1\n2 3\n3 4\n4 3\n",
        "expected": "1 1 3 3 5",
        "explanation": "边界样例：两个强连通块与孤点"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；接下来 m 行 u v；顶点为 1..n，按输入顺序加入有向边。\n// 输出：按顶点1..n输出规范化分量标签。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\nint leave[vNum],belong[vNum],cnt=0,bcnt=0;\nbool vis[vNum];\n// 对原图g进行DFS，得到顶点处理完毕的序列\nvoid dfs(vector<int> g[vNum],int cur){\n    vis[cur]=true;\n    for(int i=0;i<g[cur].size();i++)\n        if(!vis[g[cur][i]]) dfs(g,g[cur][i]);\n    leave[++cnt]=cur;//leave是第一次DFS的完成排序\n}\n\n// 对反图gt进行DFS，记录强连通分量\nvoid dfst(vector<int> gt[vNum],int cur){\n    vis[cur]=true;\n    belong[cur]=cnt;\t//当前顶点的强连通分量编号设置为cnt\n    for(int i=0;i<gt[cur].size();i++)\n        if(!vis[gt[cur][i]]) dfst(gt,gt[cur][i]);\n}\n\n// Kosaraju算法求图g的强连通分量\nint Kosaraju(vector<int> g[vNum],vector<int> gt[vNum],int v){\n    int i;\n    memset(vis,0,sizeof(vis));\n    cnt=0;\n    for(i=1;i<=v;i++)\t//对原图DFS\n        if(!vis[i]) dfs(g,i);\n\n    memset(vis,0,sizeof(vis));\n    cnt=0;\n    for(i=v;i>=1;i--){\t//对反图进行DFS，从leave的最后一个元素所表示的顶点开始\n        if(!vis[leave[i]]){\n            cnt++;\n            dfst(gt,leave[i]);\n        }\n    }\n    for(i=1;i<=v;i++) //全部分量处理完成后再输出\n        (void)i; //OJ驱动统一输出规范化分量标签\n    return cnt;\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<int>g[vNum];for(int i=0;i<m;i++){int u,v;cin>>u>>v;g[u].push_back(v);}vector<int>gt[vNum];for(int u=1;u<=n;u++)for(int v:g[u])gt[v].push_back(u);Kosaraju(g,gt,n);int mn[vNum];fill(mn,mn+vNum,INF);for(int i=1;i<=n;i++)mn[belong[i]]=min(mn[belong[i]],i);for(int i=1;i<=n;i++)cout<<mn[belong[i]]<<\" \";\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "单点",
        "stdin": "1 0\n\n",
        "expected": "1"
      },
      {
        "name": "两个强连通块与孤点",
        "stdin": "5 5\n1 2\n2 1\n2 3\n3 4\n4 3\n",
        "expected": "1 1 3 3 5"
      },
      {
        "name": "带入口的环",
        "stdin": "4 4\n1 2\n2 3\n3 4\n4 2\n",
        "expected": "1 2 2 2"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "g-scc-tarjan",
    "title": "Tarjan · 强连通分量",
    "category": "图",
    "sourceRefs": [
      {
        "docId": "gm25a9zkibxepn7w",
        "blocks": [
          1
        ],
        "functions": [
          "Tarjan",
          "dfs"
        ]
      }
    ],
    "description": "求有向图的强连通分量。为避免内部编号顺序影响判题，每个顶点输出其分量中的最小顶点编号。",
    "input": "n m\n接下来 m 行 u v；顶点为 1..n，按输入顺序加入有向边。",
    "output": "按顶点1..n输出规范化分量标签。",
    "constraints": [
      "1≤n≤60",
      "0≤m≤1000",
      "端点均在1..n；简单图不含自环；未特别说明时允许非连通。"
    ],
    "samples": [
      {
        "stdin": "1 0\n\n",
        "expected": "1",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "5 5\n1 2\n2 1\n2 3\n3 4\n4 3\n",
        "expected": "1 1 3 3 5",
        "explanation": "边界样例：两个强连通块与孤点"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；接下来 m 行 u v；顶点为 1..n，按输入顺序加入有向边。\n// 输出：按顶点1..n输出规范化分量标签。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\nint dfn[vNum]={0},low[vNum],belong[vNum],cnt=0,bcnt=0;\nbool instk[vNum];\nstack<int> stk;\n//从u出发进行dfs\nvoid dfs(vector<int> g[vNum],int u){\n    int i,v;\n    dfn[u]=low[u]=++cnt;\t\t//low和dfs初始化相同\n    stk.push(u),instk[u]=true;\n    for(i=0;i<g[u].size();i++){\n        v=g[u][i];\n        if(!dfn[v]){\n            dfs(g,v);\n            low[u]=min(low[u],low[v]);\t//(u,v)是树边\n        }\n        else if(instk[v])\n            low[u]=min(low[u],dfn[v]); //(u,v)是前向边或反向边\n    }\n    if(dfn[u]==low[u]){ //u是强连通分量的根结点\n        ++bcnt;\n        do{\n            i=stk.top(),stk.pop();\n            belong[i]=bcnt,instk[i]=false;\n        }while(i!=u);\n    }\n}\n//求所有强连通分量\nvoid Tarjan(vector<int> g[vNum],int v){\n    memset(dfn,0,sizeof(dfn));\n    memset(instk,0,sizeof(instk));\n    cnt=bcnt=0;\n    while(!stk.empty()) stk.pop();\n    for(int i=1;i<=v;i++)\n        if(!dfn[i]) dfs(g,i);\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<int>g[vNum];for(int i=0;i<m;i++){int u,v;cin>>u>>v;g[u].push_back(v);}Tarjan(g,n);int mn[vNum];fill(mn,mn+vNum,INF);for(int i=1;i<=n;i++)mn[belong[i]]=min(mn[belong[i]],i);for(int i=1;i<=n;i++)cout<<mn[belong[i]]<<\" \";\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "单点",
        "stdin": "1 0\n\n",
        "expected": "1"
      },
      {
        "name": "两个强连通块与孤点",
        "stdin": "5 5\n1 2\n2 1\n2 3\n3 4\n4 3\n",
        "expected": "1 1 3 3 5"
      },
      {
        "name": "带入口的环",
        "stdin": "4 4\n1 2\n2 3\n3 4\n4 2\n",
        "expected": "1 2 2 2"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "g-cut-vertices",
    "title": "Tarjan · 割点",
    "category": "图",
    "sourceRefs": [
      {
        "docId": "efgybln1u34h4qk2",
        "blocks": [
          0
        ],
        "functions": [
          "tarjan",
          "cut_pbc"
        ]
      }
    ],
    "description": "给定无向简单图。找出删除后使连通分量数增多的顶点。",
    "input": "n m\n接下来 m 行 u v；顶点为 1..n，按输入顺序加入无向边。",
    "output": "第一行数量；第二行递增顶点。",
    "constraints": [
      "1≤n≤60",
      "0≤m≤1000",
      "端点均在1..n；简单图不含自环；未特别说明时允许非连通。"
    ],
    "samples": [
      {
        "stdin": "1 0\n\n",
        "expected": "0\n",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "4 3\n1 2\n2 3\n2 4\n",
        "expected": "1\n2",
        "explanation": "边界样例：分叉树"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；接下来 m 行 u v；顶点为 1..n，按输入顺序加入无向边。\n// 输出：第一行数量；第二行递增顶点。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\nint dfn[vNum],low[vNum],cnt=1,pbc_cnt=0;\nset<int>cut; //存放割点\nset<int>pbc[vNum];\t//pbc[i]存放第i个点双连接分量的顶点\nstack<pair<int,int>>stk;\n//求无向图g中u所在连接分量中割点和点双连接分量，fa为u的父结点\nvoid tarjan(vector<int>g[vNum],int u,int fa){\n    int i,v,u1,v1,child=0;\n    bool skipped_fa=false;\n    dfn[u]=low[u]=cnt++;\n    for(i=0;i<g[u].size();i++){\n        v=g[u][i];\n        if(v==fa && !skipped_fa){ skipped_fa=true; continue; }\t\t//忽略从u到其父结点的边\n        if(!dfn[v]){\t\t\t//(u,v)为树边\n            ++child;\n            stk.push(make_pair(u,v));\n            tarjan(g,v,u);\n            low[u]=min(low[u],low[v]);\n            if(low[v]>=dfn[u]){\n                if(fa!=-1)\t//当u为根结点时，单独判断\n                    cut.insert(u);\t//u为割点\n                pbc[++pbc_cnt].clear();\n                do{\t\t\t//将栈(u,v)上的边的两个端点加到第pbc_cnt个点连通量中\n                    u1=stk.top().first;\n                    v1=stk.top().second;\n                    stk.pop();\n                    pbc[pbc_cnt].insert(u1);\n                    pbc[pbc_cnt].insert(v1);\n                }while(!stk.empty()&&(u1!=u||v1!=v));\n            }\n        }\n        else if(dfn[v]<dfn[u]){\n            stk.push(make_pair(u,v));\n            low[u]=min(low[u],dfn[v]);\n        }\n    }\n    if(fa==-1 && child==0){ pbc[++pbc_cnt].clear(); pbc[pbc_cnt].insert(u); }\n    if(fa==-1&&child>1) cut.insert(u);\t\t//当u为根结点且有多余一个孩子结点时，u为割点\n}\n//求无向图g的割点和点双连通分量，v为顶点数\nvoid cut_pbc(vector<int>g[vNum],int v){\n    memset(dfn,0,sizeof(dfn));\n    cnt=1; pbc_cnt=0; cut.clear();\n    while(!stk.empty()) stk.pop();\n    for(int i=1;i<=v;i++){\n        if(!dfn[i]) tarjan(g,i,-1);\n    }\n}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<int>g[vNum];for(int i=0;i<m;i++){int u,v;cin>>u>>v;g[u].push_back(v);g[v].push_back(u);}cut_pbc(g,n);cout<<cut.size()<<\"\\n\";for(int x:cut)cout<<x<<\" \";\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "孤立顶点",
        "stdin": "1 0\n\n",
        "expected": "0\n"
      },
      {
        "name": "分叉树",
        "stdin": "4 3\n1 2\n2 3\n2 4\n",
        "expected": "1\n2"
      },
      {
        "name": "共享割点的两个环",
        "stdin": "5 6\n1 2\n2 3\n3 1\n3 4\n4 5\n5 3\n",
        "expected": "1\n3"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "g-point-bcc",
    "title": "Tarjan · 点双连通分量",
    "category": "图",
    "sourceRefs": [
      {
        "docId": "efgybln1u34h4qk2",
        "blocks": [
          0
        ],
        "functions": [
          "tarjan",
          "cut_pbc"
        ]
      }
    ],
    "description": "给定无向简单图。输出所有点双连通分量。桥的两端作为一个二顶点分量，孤立顶点单独成分量；割点可属于多个分量。",
    "input": "n m\n接下来 m 行 u v；顶点为 1..n，按输入顺序加入无向边。",
    "output": "第一行数量；之后每行先输出分量大小，再输出递增顶点；各分量按顶点序列字典序排列。",
    "constraints": [
      "1≤n≤60",
      "0≤m≤1000",
      "端点均在1..n；简单图不含自环；未特别说明时允许非连通。"
    ],
    "samples": [
      {
        "stdin": "1 0\n\n",
        "expected": "1\n1 1",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "4 3\n1 2\n2 3\n2 4\n",
        "expected": "3\n2 1 2\n2 2 3\n2 2 4",
        "explanation": "边界样例：分叉树"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；接下来 m 行 u v；顶点为 1..n，按输入顺序加入无向边。\n// 输出：第一行数量；之后每行先输出分量大小，再输出递增顶点；各分量按顶点序列字典序排列。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\nint dfn[vNum],low[vNum],cnt=1,pbc_cnt=0;\nset<int>cut; //存放割点\nset<int>pbc[vNum];\t//pbc[i]存放第i个点双连接分量的顶点\nstack<pair<int,int>>stk;\n//求无向图g中u所在连接分量中割点和点双连接分量，fa为u的父结点\nvoid tarjan(vector<int>g[vNum],int u,int fa){\n    int i,v,u1,v1,child=0;\n    bool skipped_fa=false;\n    dfn[u]=low[u]=cnt++;\n    for(i=0;i<g[u].size();i++){\n        v=g[u][i];\n        if(v==fa && !skipped_fa){ skipped_fa=true; continue; }\t\t//忽略从u到其父结点的边\n        if(!dfn[v]){\t\t\t//(u,v)为树边\n            ++child;\n            stk.push(make_pair(u,v));\n            tarjan(g,v,u);\n            low[u]=min(low[u],low[v]);\n            if(low[v]>=dfn[u]){\n                if(fa!=-1)\t//当u为根结点时，单独判断\n                    cut.insert(u);\t//u为割点\n                pbc[++pbc_cnt].clear();\n                do{\t\t\t//将栈(u,v)上的边的两个端点加到第pbc_cnt个点连通量中\n                    u1=stk.top().first;\n                    v1=stk.top().second;\n                    stk.pop();\n                    pbc[pbc_cnt].insert(u1);\n                    pbc[pbc_cnt].insert(v1);\n                }while(!stk.empty()&&(u1!=u||v1!=v));\n            }\n        }\n        else if(dfn[v]<dfn[u]){\n            stk.push(make_pair(u,v));\n            low[u]=min(low[u],dfn[v]);\n        }\n    }\n    if(fa==-1 && child==0){ pbc[++pbc_cnt].clear(); pbc[pbc_cnt].insert(u); }\n    if(fa==-1&&child>1) cut.insert(u);\t\t//当u为根结点且有多余一个孩子结点时，u为割点\n}\n//求无向图g的割点和点双连通分量，v为顶点数\nvoid cut_pbc(vector<int>g[vNum],int v){\n    memset(dfn,0,sizeof(dfn));\n    cnt=1; pbc_cnt=0; cut.clear();\n    while(!stk.empty()) stk.pop();\n    for(int i=1;i<=v;i++){\n        if(!dfn[i]) tarjan(g,i,-1);\n    }\n}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<int>g[vNum];for(int i=0;i<m;i++){int u,v;cin>>u>>v;g[u].push_back(v);g[v].push_back(u);}cut_pbc(g,n);vector<vector<int>>ans;for(int i=1;i<=pbc_cnt;i++)ans.emplace_back(pbc[i].begin(),pbc[i].end());sort(ans.begin(),ans.end());cout<<ans.size()<<\"\\n\";for(auto &c:ans){cout<<c.size()<<\" \";for(int x:c)cout<<x<<\" \";cout<<\"\\n\";}\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "孤立顶点",
        "stdin": "1 0\n\n",
        "expected": "1\n1 1"
      },
      {
        "name": "分叉树",
        "stdin": "4 3\n1 2\n2 3\n2 4\n",
        "expected": "3\n2 1 2\n2 2 3\n2 2 4"
      },
      {
        "name": "共享割点的两个环",
        "stdin": "5 6\n1 2\n2 3\n3 1\n3 4\n4 5\n5 3\n",
        "expected": "2\n3 1 2 3\n3 3 4 5"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "g-bridges",
    "title": "Tarjan · 桥",
    "category": "图",
    "sourceRefs": [
      {
        "docId": "efgybln1u34h4qk2",
        "blocks": [
          1
        ],
        "functions": [
          "tarjan",
          "dfs",
          "bridge_ebc"
        ]
      }
    ],
    "description": "给定无向简单图。找出删除后使连通分量数增多的边。",
    "input": "n m\n接下来 m 行 u v；顶点为 1..n，按输入顺序加入无向边。",
    "output": "第一行数量；之后每行递增的u v，各边按字典序。",
    "constraints": [
      "1≤n≤60",
      "0≤m≤1000",
      "端点均在1..n；简单图不含自环；未特别说明时允许非连通。"
    ],
    "samples": [
      {
        "stdin": "1 0\n\n",
        "expected": "0\n",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "4 3\n1 2\n2 3\n2 4\n",
        "expected": "3\n1 2\n2 3\n2 4",
        "explanation": "边界样例：分叉树"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；接下来 m 行 u v；顶点为 1..n，按输入顺序加入无向边。\n// 输出：第一行数量；之后每行递增的u v，各边按字典序。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n\nint dfn[vNum],low[vNum],cnt=1,ebc_cnt=-1;\nmap<pair<int,int>,bool>isBridge;\t//当(u,v)为桥时，isBridge[(u,v)]=true\nvector<int>ebc[vNum]; //ebc[i]为第i个边双连通分量中的顶点\n//求图g中u所在的连通分量中的桥，fa为u的父结点\nvoid tarjan(vector<int>g[vNum],int u,int fa){\n    int i,v;\n    bool skipped_fa=false;\n    dfn[u]=low[u]=cnt++;\n    for(i=0;i<g[u].size();i++){\n        v=g[u][i];\n        if(v==fa && !skipped_fa){ skipped_fa=true; continue; }\t//忽略从u到其父结点的边\n        if(!dfn[v]){\n            tarjan(g,v,u);\n            low[u]=min(low[u],low[v]);\n            if(low[v]>dfn[u]){\n                isBridge[make_pair(u,v)]=true;\t//(u,v)为桥\n            }\n        }\n        else if(dfn[v]<dfn[u]){\n            low[u]=min(low[u],dfn[v]);\n        }\n    }\n}\n//求图g中顶点cur所在连通分量中的边双连通分量，当前编号是ebc_cnt\nvoid dfs(vector<int>g[vNum],int cur){\n    dfn[cur]=1;\n    ebc[ebc_cnt].push_back(cur);\t//cur加入当前边双连通分量\n    for(int i=0;i<g[cur].size();i++){\n        int u=g[cur][i];\n        //如果边(cur,u)为桥，则跳过u\n        if(!dfn[u]&&!isBridge[make_pair(cur,u)]&&!isBridge[make_pair(u,cur)]){\n            dfs(g,u);\n        }\n    }\n}\n//去g所有的桥和边连通分量\nvoid bridge_ebc(vector<int>g[vNum],int v){\n    memset(dfn,0,sizeof(dfn));\n    cnt=1; ebc_cnt=-1; isBridge.clear();\n    for(int i=0;i<vNum;i++) ebc[i].clear();\n    for(int i=1;i<=v;i++){\n        if(!dfn[i]) tarjan(g,i,-1);\n    }\n    memset(dfn,0,sizeof(dfn));\n    for(int i=1;i<=v;i++){\n        if(!dfn[i]){\n            ++ebc_cnt;\n            dfs(g,i);\n        }\n    }\n}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<int>g[vNum];for(int i=0;i<m;i++){int u,v;cin>>u>>v;g[u].push_back(v);g[v].push_back(u);}bridge_ebc(g,n);vector<pair<int,int>>ans;for(auto x:isBridge)if(x.second)ans.push_back(minmax(x.first.first,x.first.second));sort(ans.begin(),ans.end());ans.erase(unique(ans.begin(),ans.end()),ans.end());cout<<ans.size()<<\"\\n\";for(auto x:ans)cout<<x.first<<\" \"<<x.second<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "孤立顶点",
        "stdin": "1 0\n\n",
        "expected": "0\n"
      },
      {
        "name": "分叉树",
        "stdin": "4 3\n1 2\n2 3\n2 4\n",
        "expected": "3\n1 2\n2 3\n2 4"
      },
      {
        "name": "共享割点的两个环",
        "stdin": "5 6\n1 2\n2 3\n3 1\n3 4\n4 5\n5 3\n",
        "expected": "0\n"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "g-edge-bcc",
    "title": "Tarjan · 边双连通分量",
    "category": "图",
    "sourceRefs": [
      {
        "docId": "efgybln1u34h4qk2",
        "blocks": [
          1
        ],
        "functions": [
          "tarjan",
          "dfs",
          "bridge_ebc"
        ]
      }
    ],
    "description": "给定无向简单图。删除所有桥后，输出剩余图的连通分量，孤立顶点也输出。",
    "input": "n m\n接下来 m 行 u v；顶点为 1..n，按输入顺序加入无向边。",
    "output": "第一行数量；之后每行先输出分量大小，再输出递增顶点；各分量按顶点序列字典序排列。",
    "constraints": [
      "1≤n≤60",
      "0≤m≤1000",
      "端点均在1..n；简单图不含自环；未特别说明时允许非连通。"
    ],
    "samples": [
      {
        "stdin": "1 0\n\n",
        "expected": "1\n1 1",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "4 3\n1 2\n2 3\n2 4\n",
        "expected": "4\n1 1\n1 2\n1 3\n1 4",
        "explanation": "边界样例：分叉树"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；接下来 m 行 u v；顶点为 1..n，按输入顺序加入无向边。\n// 输出：第一行数量；之后每行先输出分量大小，再输出递增顶点；各分量按顶点序列字典序排列。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n\nint dfn[vNum],low[vNum],cnt=1,ebc_cnt=-1;\nmap<pair<int,int>,bool>isBridge;\t//当(u,v)为桥时，isBridge[(u,v)]=true\nvector<int>ebc[vNum]; //ebc[i]为第i个边双连通分量中的顶点\n//求图g中u所在的连通分量中的桥，fa为u的父结点\nvoid tarjan(vector<int>g[vNum],int u,int fa){\n    int i,v;\n    bool skipped_fa=false;\n    dfn[u]=low[u]=cnt++;\n    for(i=0;i<g[u].size();i++){\n        v=g[u][i];\n        if(v==fa && !skipped_fa){ skipped_fa=true; continue; }\t//忽略从u到其父结点的边\n        if(!dfn[v]){\n            tarjan(g,v,u);\n            low[u]=min(low[u],low[v]);\n            if(low[v]>dfn[u]){\n                isBridge[make_pair(u,v)]=true;\t//(u,v)为桥\n            }\n        }\n        else if(dfn[v]<dfn[u]){\n            low[u]=min(low[u],dfn[v]);\n        }\n    }\n}\n//求图g中顶点cur所在连通分量中的边双连通分量，当前编号是ebc_cnt\nvoid dfs(vector<int>g[vNum],int cur){\n    dfn[cur]=1;\n    ebc[ebc_cnt].push_back(cur);\t//cur加入当前边双连通分量\n    for(int i=0;i<g[cur].size();i++){\n        int u=g[cur][i];\n        //如果边(cur,u)为桥，则跳过u\n        if(!dfn[u]&&!isBridge[make_pair(cur,u)]&&!isBridge[make_pair(u,cur)]){\n            dfs(g,u);\n        }\n    }\n}\n//去g所有的桥和边连通分量\nvoid bridge_ebc(vector<int>g[vNum],int v){\n    memset(dfn,0,sizeof(dfn));\n    cnt=1; ebc_cnt=-1; isBridge.clear();\n    for(int i=0;i<vNum;i++) ebc[i].clear();\n    for(int i=1;i<=v;i++){\n        if(!dfn[i]) tarjan(g,i,-1);\n    }\n    memset(dfn,0,sizeof(dfn));\n    for(int i=1;i<=v;i++){\n        if(!dfn[i]){\n            ++ebc_cnt;\n            dfs(g,i);\n        }\n    }\n}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<int>g[vNum];for(int i=0;i<m;i++){int u,v;cin>>u>>v;g[u].push_back(v);g[v].push_back(u);}bridge_ebc(g,n);vector<vector<int>>ans;for(int i=0;i<=ebc_cnt;i++){sort(ebc[i].begin(),ebc[i].end());ans.push_back(ebc[i]);}sort(ans.begin(),ans.end());cout<<ans.size()<<\"\\n\";for(auto &c:ans){cout<<c.size()<<\" \";for(int x:c)cout<<x<<\" \";cout<<\"\\n\";}\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "孤立顶点",
        "stdin": "1 0\n\n",
        "expected": "1\n1 1"
      },
      {
        "name": "分叉树",
        "stdin": "4 3\n1 2\n2 3\n2 4\n",
        "expected": "4\n1 1\n1 2\n1 3\n1 4"
      },
      {
        "name": "共享割点的两个环",
        "stdin": "5 6\n1 2\n2 3\n3 1\n3 4\n4 5\n5 3\n",
        "expected": "1\n5 1 2 3 4 5"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "g-mst-prim",
    "title": "Prim · 最小生成树",
    "category": "图",
    "sourceRefs": [
      {
        "docId": "gcbkvkk1hbl1a1wu",
        "blocks": [
          0
        ],
        "functions": [
          "prim"
        ]
      }
    ],
    "description": "求无向简单带权图的最小生成树总权值。图不连通时输出 DISCONNECTED；单顶点图的结果为0。",
    "input": "n m\nm行u v w；顶点1..n。",
    "output": "总权值或DISCONNECTED。",
    "constraints": [
      "1≤n≤60",
      "0≤m≤1000",
      "端点均在1..n；简单图不含自环；未特别说明时允许非连通。",
      "-1000≤w≤1000；无重边"
    ],
    "samples": [
      {
        "stdin": "1 0\n\n",
        "expected": "0",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "4 5\n1 2 2\n2 3 -1\n3 4 4\n1 4 9\n1 3 5\n",
        "expected": "5",
        "explanation": "边界样例：负权图"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；m行u v w；顶点1..n。\n// 输出：总权值或DISCONNECTED。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\nstruct edge{int v,w;edge(int a,int b):v(a),w(b){}};\nstruct node{\n    int u,v,w;\n    node(int u1=0,int v1=0,int w1=0):u(u1),v(v1),w(w1){} //w表示边(u,v)的权重,u在U中,v在V-U中\n    bool operator<(node n1) const{\n        return w>n1.w; //为了定义小顶堆\n    }\n};\n\nbool vis[vNum]; //vis[u]=true,u在集合U中;否则u不在集合U中\n\n//求图g的最小生成树,结果保存在参数t中,n为顶点数\nvoid prim(vector<edge>g[vNum],int n,vector<int>t[vNum]){\n    memset(vis,0,sizeof(vis));\n    for(int i=0;i<vNum;i++) t[i].clear();\n    if(n<=0) return;\n    priority_queue<node>pq; //优先队列,小顶堆\n    int i,step=n-1,u,v;\n    for(i=0;i<g[1].size();i++){ //将第1个顶点加入U,并更新其邻接点到U的距离\n        edge tmp=g[1][i];\n        pq.push(node(1,tmp.v,tmp.w));\n    }\n    vis[1]=1;\n    while(step>0 && !pq.empty()){ //每次成功加入一个新顶点\n        node tmp=pq.top();\n        pq.pop(),v=tmp.v;\n        if(vis[v]) continue; //失效边直接丢弃\n        --step;\n        u=tmp.u,vis[tmp.v]=1; //将v加入U\n        t[v].push_back(u),t[u].push_back(v); //将边(u,v)加入树T中\n        for(i=0;i<g[v].size();i++){ //更新v的属于V-U的邻接点到U的距离\n            edge tmp=g[v][i];\n            if(!vis[tmp.v])\n                pq.push(node(v,tmp.v,tmp.w));\n        }\n    }\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<edge>g[vNum];for(int i=0;i<m;i++){int u,v,w;cin>>u>>v>>w;g[u].push_back(edge(v,w));g[v].push_back(edge(u,w));}vector<int>t[vNum];prim(g,n,t);int count=0;long long total=0;for(int i=1;i<=n;i++)for(int j:t[i])if(i<j){count++;for(auto x:g[i])if(x.v==j){total+=x.w;break;}}if(count!=n-1)cout<<\"DISCONNECTED\";else cout<<total;\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "单点",
        "stdin": "1 0\n\n",
        "expected": "0"
      },
      {
        "name": "负权图",
        "stdin": "4 5\n1 2 2\n2 3 -1\n3 4 4\n1 4 9\n1 3 5\n",
        "expected": "5"
      },
      {
        "name": "非连通",
        "stdin": "4 2\n1 2 3\n3 4 2\n",
        "expected": "DISCONNECTED"
      },
      {
        "name": "零权边",
        "stdin": "3 3\n1 2 0\n2 3 0\n1 3 1\n",
        "expected": "0"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "g-mst-kruskal",
    "title": "Kruskal · 最小生成树",
    "category": "图",
    "sourceRefs": [
      {
        "docId": "gcbkvkk1hbl1a1wu",
        "blocks": [
          1
        ],
        "functions": [
          "kruskal"
        ]
      }
    ],
    "description": "求无向简单带权图的最小生成树总权值。图不连通时输出 DISCONNECTED；单顶点图的结果为0。",
    "input": "n m\nm行u v w；顶点1..n。",
    "output": "总权值或DISCONNECTED。",
    "constraints": [
      "1≤n≤60",
      "0≤m≤1000",
      "端点均在1..n；简单图不含自环；未特别说明时允许非连通。",
      "-1000≤w≤1000；无重边"
    ],
    "samples": [
      {
        "stdin": "1 0\n\n",
        "expected": "0",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "4 5\n1 2 2\n2 3 -1\n3 4 4\n1 4 9\n1 3 5\n",
        "expected": "5",
        "explanation": "边界样例：负权图"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；m行u v w；顶点1..n。\n// 输出：总权值或DISCONNECTED。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\nstruct edge{int v,w;edge(int a,int b):v(a),w(b){}};\nstruct node{\n    int u,v,w;\n    node(int u1=0,int v1=0,int w1=0):u(u1),v(v1),w(w1){}\n    bool operator<(node n1) const{\n        return w<n1.w;\n    }\n}edges[eNum];\n\n//求图g的最小生成树,结果保存在参数t中,n为顶点数\nvoid kruskal(vector<edge>g[vNum],int n,vector<int>t[vNum]){\n    int i,j,cnt=0,num=0;\n    int pa[vNum];\n    for(i=0;i<vNum;i++){ pa[i]=i; t[i].clear(); }\n    auto query=[&](int x){\n        int r=x;\n        while(pa[r]!=r) r=pa[r];\n        while(pa[x]!=x){ int y=pa[x]; pa[x]=r; x=y; }\n        return r;\n    };\n    auto merge=[&](int u,int v){ pa[query(u)]=query(v); };\n    //将图g的所有边转存到数组edges中,边的数量为cnt\n    for(i=1;i<=n;i++){\n        for(j=0;j<g[i].size();j++){\n            edge tmp=g[i][j];\n            if(i<tmp.v) //同一条边在g中出现两次,只取其中一条\n                edges[cnt++]=node(i,tmp.v,tmp.w);\n        }\n    }\n    sort(edges,edges+cnt); //对edges按w进行从小到大排序\n    for(i=0;i<cnt;i++){\n        int u=edges[i].u,v=edges[i].v;\n        if(query(u)!=query(v)){ //u,v属于不同的子树\n            merge(u,v); //合并u和v所在的子树\n            t[u].push_back(v),t[v].push_back(u); //将边(u,v)加入MST中\n            if(++num==n-1) //如果MST中已有n-1条边,结束\n                break;\n        }\n    }\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<edge>g[vNum];for(int i=0;i<m;i++){int u,v,w;cin>>u>>v>>w;g[u].push_back(edge(v,w));g[v].push_back(edge(u,w));}vector<int>t[vNum];kruskal(g,n,t);int count=0;long long total=0;for(int i=1;i<=n;i++)for(int j:t[i])if(i<j){count++;for(auto x:g[i])if(x.v==j){total+=x.w;break;}}if(count!=n-1)cout<<\"DISCONNECTED\";else cout<<total;\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "单点",
        "stdin": "1 0\n\n",
        "expected": "0"
      },
      {
        "name": "负权图",
        "stdin": "4 5\n1 2 2\n2 3 -1\n3 4 4\n1 4 9\n1 3 5\n",
        "expected": "5"
      },
      {
        "name": "非连通",
        "stdin": "4 2\n1 2 3\n3 4 2\n",
        "expected": "DISCONNECTED"
      },
      {
        "name": "零权边",
        "stdin": "3 3\n1 2 0\n2 3 0\n1 3 1\n",
        "expected": "0"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "g-topological-fifo",
    "title": "拓扑排序 · Kahn 队列法",
    "category": "图",
    "sourceRefs": [
      {
        "docId": "cupw7m5ihhhargh0",
        "blocks": [
          0
        ],
        "functions": [
          "topological_sort"
        ]
      }
    ],
    "description": "按原码规则拓扑排序：先按编号递增把零入度顶点入普通FIFO队列；出队后按输入边顺序处理邻接点，新变为零入度的点追加到队尾。存在环输出 CYCLE；本题不要求字典序最小。",
    "input": "n m\n接下来 m 行 u v；顶点为 1..n，按输入顺序加入有向边。",
    "output": "一个拓扑顶点序列，或CYCLE。",
    "constraints": [
      "1≤n≤60",
      "0≤m≤1000",
      "端点均在1..n；简单图不含自环；未特别说明时允许非连通。"
    ],
    "samples": [
      {
        "stdin": "1 0\n\n",
        "expected": "1",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "5 3\n1 3\n2 3\n3 4\n",
        "expected": "1 2 5 3 4",
        "explanation": "边界样例：多个初始零入度点"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；接下来 m 行 u v；顶点为 1..n，按输入顺序加入有向边。\n// 输出：一个拓扑顶点序列，或CYCLE。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n//对有向无环图g进行拓扑排序,结果放在tsort中,n为顶点数量。如果图g存在环路,返回0;否则返回1\nint topological_sort(vector<int>g[vNum],int n,int tsort[vNum]){\n    int ind[vNum]={0},i,j,u,cnt=0;\n    for(i=1;i<=n;i++) //统计每个顶点的入度\n        for(j=0;j<g[i].size();j++)\n            ind[g[i][j]]++; //边(i,g[i][j])终点的入度加1\n    queue<int>q;\n    for(i=1;i<=n;i++) //将入度为0的顶点加入队列q\n        if(ind[i]==0) q.push(i);\n    while(!q.empty()){\n        u=q.front(),q.pop();\n        tsort[cnt++]=u; //从队头取出一个元素,并加入拓扑序列\n        for(j=0;j<g[u].size();j++){ //将u的邻接点的入度减1\n            ind[g[u][j]]--;\n            if(ind[g[u][j]]==0) q.push(g[u][j]);\n        }\n    }\n    return cnt==n; //所有顶点都加入拓扑序列,则返回1;否则返回0\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<int>g[vNum];for(int i=0;i<m;i++){int u,v;cin>>u>>v;g[u].push_back(v);}int ts[vNum];if(!topological_sort(g,n,ts))cout<<\"CYCLE\";else for(int i=0;i<n;i++)cout<<ts[i]<<\" \";\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "单点",
        "stdin": "1 0\n\n",
        "expected": "1"
      },
      {
        "name": "多个初始零入度点",
        "stdin": "5 3\n1 3\n2 3\n3 4\n",
        "expected": "1 2 5 3 4"
      },
      {
        "name": "环",
        "stdin": "3 3\n1 2\n2 3\n3 1\n",
        "expected": "CYCLE"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "g-critical-path",
    "title": "AOE 网 · 关键活动",
    "category": "图",
    "sourceRefs": [
      {
        "docId": "cupw7m5ihhhargh0",
        "blocks": [
          0,
          1
        ],
        "functions": [
          "critical_path"
        ]
      }
    ],
    "description": "事件为顶点，持续时间非负的活动为有向边。按整个工程的最大完成时间计算每个活动的最早/最迟开始时间，输出二者相等的关键活动；允许多个源点、汇点。存在环输出 CYCLE。",
    "input": "n m\nm行u v w，顶点1..n。",
    "output": "无环时第一行关键活动数量，之后按(u,v,w)字典序每行输出一条；有环输出CYCLE。",
    "constraints": [
      "1≤n≤60",
      "0≤m≤1000",
      "端点均在1..n；简单图不含自环；未特别说明时允许非连通。",
      "0≤w≤1000"
    ],
    "samples": [
      {
        "stdin": "1 0\n\n",
        "expected": "0\n",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "4 3\n1 2 10\n1 3 1\n3 4 1\n",
        "expected": "1\n1 2 10",
        "explanation": "边界样例：多个汇点"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；m行u v w，顶点1..n。\n// 输出：无环时第一行关键活动数量，之后按(u,v,w)字典序每行输出一条；有环输出CYCLE。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\nstruct edge{int v,w;edge(int a,int b):v(a),w(b){}};\n//对有向无环图g进行拓扑排序,结果放在tsort中,n为顶点数量。如果图g存在环路,返回0;否则返回1\nint topological_sort(vector<int>g[vNum],int n,int tsort[vNum]){\n    int ind[vNum]={0},i,j,u,cnt=0;\n    for(i=1;i<=n;i++) //统计每个顶点的入度\n        for(j=0;j<g[i].size();j++)\n            ind[g[i][j]]++; //边(i,g[i][j])终点的入度加1\n    queue<int>q;\n    for(i=1;i<=n;i++) //将入度为0的顶点加入队列q\n        if(ind[i]==0) q.push(i);\n    while(!q.empty()){\n        u=q.front(),q.pop();\n        tsort[cnt++]=u; //从队头取出一个元素,并加入拓扑序列\n        for(j=0;j<g[u].size();j++){ //将u的邻接点的入度减1\n            ind[g[u][j]]--;\n            if(ind[g[u][j]]==0) q.push(g[u][j]);\n        }\n    }\n    return cnt==n; //所有顶点都加入拓扑序列,则返回1;否则返回0\n}\n//求AOE网g的关键路径,n为事件数,g存在环路,返回0;否则返回源点的下标,关键活动保存在cp中\nint critical_path(vector<edge>g[vNum],int n,vector<edge>cp[vNum]){\n    int i,j,u,v,w,tsort[vNum],ve[vNum]={0},vl[vNum],ae,al;\n    if(n<=0) return 0;\n    vector<int> unweighted[vNum];\n    for(i=1;i<=n;i++){\n        cp[i].clear();\n        for(j=0;j<g[i].size();j++) unweighted[i].push_back(g[i][j].v);\n    }\n    if(!topological_sort(unweighted,n,tsort)){ //如果g存在环路,不能计算事件的拓扑序\n        /* OJ驱动统一输出CYCLE */\n        return 0;\n    }\n    ve[tsort[0]]=0; //源点的最早发生时间为0\n    for(i=0;i<n-1;i++){ //按照事件的拓扑序列依次求每个事件u的所有邻接事件v的\n                         //ve值\n        u=tsort[i];\n        for(j=0;j<g[u].size();j++){\n            v=g[u][j].v,w=g[u][j].w;\n            ve[v]=max(ve[v],ve[u]+w);\n        }\n    }\n    int duration=0;\n    for(i=1;i<=n;i++) duration=max(duration,ve[i]);\n    for(i=1;i<=n;i++) //多个汇点时取最大最早完成时间为总工期\n        vl[i]=duration;\n    for(i=n-2;i>=0;i--){ //按照事件的逆拓扑序依次求每个事件的所有前期事件u的\n                          //vl值\n        u=tsort[i];\n        for(j=0;j<g[u].size();j++){\n            v=g[u][j].v,w=g[u][j].w;\n            vl[u]=min(vl[u],vl[v]-w);\n        }\n    }\n    for(i=1;i<=n;i++){ //计算每一个活动(i,v)的最早发生时间和最迟发生时间\n        for(j=0;j<g[i].size();j++){\n            v=g[i][j].v;\n            ae=ve[i],al=vl[v]-g[i][j].w;\n            if(ae==al) //当活动的最早发生时间等于最迟发生时间时,加入关键路径\n                cp[i].push_back(edge(v,g[i][j].w));\n        }\n    }\n    return tsort[0];\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<edge>g[vNum];for(int i=0;i<m;i++){int u,v,w;cin>>u>>v>>w;g[u].push_back(edge(v,w));}vector<edge>cp[vNum];if(!critical_path(g,n,cp)){cout<<\"CYCLE\";return 0;}vector<tuple<int,int,int>>ans;for(int u=1;u<=n;u++)for(auto e:cp[u])ans.emplace_back(u,e.v,e.w);sort(ans.begin(),ans.end());cout<<ans.size()<<\"\\n\";for(auto[u,v,w]:ans)cout<<u<<\" \"<<v<<\" \"<<w<<\"\\n\";\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "单事件",
        "stdin": "1 0\n\n",
        "expected": "0\n"
      },
      {
        "name": "多个汇点",
        "stdin": "4 3\n1 2 10\n1 3 1\n3 4 1\n",
        "expected": "1\n1 2 10"
      },
      {
        "name": "两条关键路径",
        "stdin": "4 4\n1 2 2\n1 3 2\n2 4 3\n3 4 3\n",
        "expected": "4\n1 2 2\n1 3 2\n2 4 3\n3 4 3"
      },
      {
        "name": "环",
        "stdin": "3 3\n1 2 1\n2 3 1\n3 1 1\n",
        "expected": "CYCLE"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "g-dijkstra-distances",
    "title": "Dijkstra · 单源最短距离",
    "category": "图",
    "sourceRefs": [
      {
        "docId": "nt3aaeukgr2p9zed",
        "blocks": [
          0
        ],
        "functions": [
          "Dijkstra"
        ]
      }
    ],
    "description": "图为有向图。求指定源点的最短距离。不可达的距离输出INF，路径输出UNREACHABLE。",
    "input": "n m\nm行u v w；最后一行st。",
    "output": "按1..n输出距离或路径序列；Floyd距离按矩阵逐行输出。",
    "constraints": [
      "1≤n≤60",
      "0≤m≤1000",
      "端点均在1..n；简单图不含自环；未特别说明时允许非连通。",
      "0≤w≤1000"
    ],
    "samples": [
      {
        "stdin": "1 0\n\n1\n",
        "expected": "0",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "5 4\n1 2 2\n2 3 3\n1 3 8\n3 4 0\n1\n",
        "expected": "0 2 5 5 INF",
        "explanation": "边界样例：唯一最短路径"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；m行u v w；最后一行st。\n// 输出：按1..n输出距离或路径序列；Floyd距离按矩阵逐行输出。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\nstruct edge{int v,w;edge(int a,int b):v(a),w(b){}};\nstruct node{\n    int u; //源点经过U中的顶点到达v的最短路径的离v最近的顶点\n    int v; //V-U中的顶点\n    int d; //源点经过U中的顶点到达v的最短距离\n    node(int u1,int v1,int d1):u(u1),v(v1),d(d1){}\n    bool operator<(node n1)const{ //为了定义小顶堆\n        return d>n1.d;\n    }\n};\n\n//求图g的单源最短距离和路径,n为顶点数,st为源点,d[i]为源点到顶点i的最短距离\nvoid Dijkstra(vector<edge>g[vNum],int n,int st,int d[vNum],int p[vNum]){\n    int i,j,cnt=1,v,vis[vNum]={0}; //vis[k]的值为0或1,分别表示顶点k未加入U或已加入U\n    priority_queue<node>pq;\n    for(i=1;i<=n;i++) d[i]=INF,p[i]=0;\n    d[st]=0;\n    vis[st]=1,p[st]=st; //将源点加入U,源点的p值为它本身\n    for(i=0;i<g[st].size();i++) //将源点的邻接点加入pq\n        pq.push(node(st,g[st][i].v,g[st][i].w));\n    while(!pq.empty()){\n        node tmp=pq.top();\n        pq.pop(),v=tmp.v;\n        if(!vis[v]){ //判断v是否不在U中\n            d[v]=tmp.d,p[v]=tmp.u; //得到源点到v的最短距离和最短路径中离v最近的顶点\n            vis[v]=1,cnt++; //将v加入U中,U中顶点数加1\n            if(cnt==n) return; //所有顶点都加入U,结束\n            for(i=0;i<g[v].size();i++){ //对v及所有不在U中的邻接点所对应的边进行松弛操作\n                if(!vis[g[v][i].v])\n                    pq.push(node(v,g[v][i].v,tmp.d+g[v][i].w));\n            }\n        }\n    }\n}\n//输出顶点v的最短路径\nvoid getPath(int p[vNum],int v){\n    if(v<=0 || v>=vNum || p[v]==0) return;\n    if(p[v]==v){\n        cout<<v<<' ';\n        return;\n    }\n    getPath(p,p[v]);\n    cout<<v<<' ';\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<edge>g[vNum];for(int i=0;i<m;i++){int u,v,w;cin>>u>>v>>w;g[u].push_back(edge(v,w));}int st,tar,d[vNum],p[vNum];cin>>st;Dijkstra(g,n,st,d,p);for(int i=1;i<=n;i++){if(d[i]==INF)cout<<\"INF \";else cout<<d[i]<<\" \";}\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "单点",
        "stdin": "1 0\n\n1\n",
        "expected": "0"
      },
      {
        "name": "唯一最短路径",
        "stdin": "5 4\n1 2 2\n2 3 3\n1 3 8\n3 4 0\n1\n",
        "expected": "0 2 5 5 INF"
      },
      {
        "name": "不可达",
        "stdin": "4 2\n1 2 1\n3 4 2\n1\n",
        "expected": "0 1 INF INF"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "g-dijkstra-path",
    "title": "Dijkstra · 最短路径还原",
    "category": "图",
    "sourceRefs": [
      {
        "docId": "nt3aaeukgr2p9zed",
        "blocks": [
          0
        ],
        "functions": [
          "Dijkstra",
          "getPath"
        ]
      }
    ],
    "description": "图为有向图。输出从源点到目标点的最短路径顶点序列。测试保证可达时最短路径唯一。不可达的距离输出INF，路径输出UNREACHABLE。",
    "input": "n m\nm行u v w；最后一行st target。",
    "output": "按1..n输出距离或路径序列；Floyd距离按矩阵逐行输出。",
    "constraints": [
      "1≤n≤60",
      "0≤m≤1000",
      "端点均在1..n；简单图不含自环；未特别说明时允许非连通。",
      "0≤w≤1000"
    ],
    "samples": [
      {
        "stdin": "1 0\n\n1 1\n",
        "expected": "1",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "5 4\n1 2 2\n2 3 3\n1 3 8\n3 4 0\n1 4\n",
        "expected": "1 2 3 4",
        "explanation": "边界样例：唯一最短路径"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；m行u v w；最后一行st target。\n// 输出：按1..n输出距离或路径序列；Floyd距离按矩阵逐行输出。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\nstruct edge{int v,w;edge(int a,int b):v(a),w(b){}};\nstruct node{\n    int u; //源点经过U中的顶点到达v的最短路径的离v最近的顶点\n    int v; //V-U中的顶点\n    int d; //源点经过U中的顶点到达v的最短距离\n    node(int u1,int v1,int d1):u(u1),v(v1),d(d1){}\n    bool operator<(node n1)const{ //为了定义小顶堆\n        return d>n1.d;\n    }\n};\n\n//求图g的单源最短距离和路径,n为顶点数,st为源点,d[i]为源点到顶点i的最短距离\nvoid Dijkstra(vector<edge>g[vNum],int n,int st,int d[vNum],int p[vNum]){\n    int i,j,cnt=1,v,vis[vNum]={0}; //vis[k]的值为0或1,分别表示顶点k未加入U或已加入U\n    priority_queue<node>pq;\n    for(i=1;i<=n;i++) d[i]=INF,p[i]=0;\n    d[st]=0;\n    vis[st]=1,p[st]=st; //将源点加入U,源点的p值为它本身\n    for(i=0;i<g[st].size();i++) //将源点的邻接点加入pq\n        pq.push(node(st,g[st][i].v,g[st][i].w));\n    while(!pq.empty()){\n        node tmp=pq.top();\n        pq.pop(),v=tmp.v;\n        if(!vis[v]){ //判断v是否不在U中\n            d[v]=tmp.d,p[v]=tmp.u; //得到源点到v的最短距离和最短路径中离v最近的顶点\n            vis[v]=1,cnt++; //将v加入U中,U中顶点数加1\n            if(cnt==n) return; //所有顶点都加入U,结束\n            for(i=0;i<g[v].size();i++){ //对v及所有不在U中的邻接点所对应的边进行松弛操作\n                if(!vis[g[v][i].v])\n                    pq.push(node(v,g[v][i].v,tmp.d+g[v][i].w));\n            }\n        }\n    }\n}\n//输出顶点v的最短路径\nvoid getPath(int p[vNum],int v){\n    if(v<=0 || v>=vNum || p[v]==0) return;\n    if(p[v]==v){\n        cout<<v<<' ';\n        return;\n    }\n    getPath(p,p[v]);\n    cout<<v<<' ';\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<edge>g[vNum];for(int i=0;i<m;i++){int u,v,w;cin>>u>>v>>w;g[u].push_back(edge(v,w));}int st,tar,d[vNum],p[vNum];cin>>st;cin>>tar;Dijkstra(g,n,st,d,p);if(d[tar]==INF)cout<<\"UNREACHABLE\";else getPath(p,tar);\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "单点",
        "stdin": "1 0\n\n1 1\n",
        "expected": "1"
      },
      {
        "name": "唯一最短路径",
        "stdin": "5 4\n1 2 2\n2 3 3\n1 3 8\n3 4 0\n1 4\n",
        "expected": "1 2 3 4"
      },
      {
        "name": "不可达",
        "stdin": "4 2\n1 2 1\n3 4 2\n1 4\n",
        "expected": "UNREACHABLE"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "g-spfa-distances",
    "title": "Spfa · 单源最短距离",
    "category": "图",
    "sourceRefs": [
      {
        "docId": "nt3aaeukgr2p9zed",
        "blocks": [
          1
        ],
        "functions": [
          "spfa"
        ]
      }
    ],
    "description": "图为有向图。求指定源点的最短距离。若源点能到达负权环，输出 NEGATIVE CYCLE。不可达的距离输出INF，路径输出UNREACHABLE。",
    "input": "n m\nm行u v w；最后一行st。",
    "output": "按1..n输出距离或路径序列；Floyd距离按矩阵逐行输出。",
    "constraints": [
      "1≤n≤60",
      "0≤m≤1000",
      "端点均在1..n；简单图不含自环；未特别说明时允许非连通。",
      "-1000≤w≤1000"
    ],
    "samples": [
      {
        "stdin": "1 0\n\n1\n",
        "expected": "0",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "5 4\n1 2 2\n2 3 3\n1 3 8\n3 4 0\n1\n",
        "expected": "0 2 5 5 INF",
        "explanation": "边界样例：唯一最短路径"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；m行u v w；最后一行st。\n// 输出：按1..n输出距离或路径序列；Floyd距离按矩阵逐行输出。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\nstruct edge{int v,w;edge(int a,int b):v(a),w(b){}};\n//利用spfa算法求g的单源最短路径,源点为st,顶点数为n。如果g有负权环,返回值为0;否则返回值为1\nint spfa(vector<edge>g[vNum],int n,int st,int d[vNum],int p[vNum]){\n    int i,u,v,vis[vNum]={0},num[vNum]={0};\n    for(i=1;i<=n;i++)\n        d[i]=INF,p[i]=0; //初始化d和p\n    d[st]=0,p[st]=st; //初始化源点的距离\n    queue<int>q;\n    q.push(st); vis[st]=1;\n    while(!q.empty()){\n        u=q.front(),q.pop(); //取队头元素\n        vis[u]=0; //标识顶点u已不在队列中\n        for(i=0;i<g[u].size();i++){\n            v=g[u][i].v;\n            if(d[v]>d[u]+g[u][i].w){\n                d[v]=d[u]+g[u][i].w; //松弛操作\n                p[v]=u;\n                num[v]=num[u]+1; //当前改进路径的边数\n                if(num[v]>=n) return 0; //只检测源点可达的负环\n                if(!vis[v])\n                    q.push(v),vis[v]=1; //v入队\n            }\n        }\n    }\n    return 1;\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<edge>g[vNum];for(int i=0;i<m;i++){int u,v,w;cin>>u>>v>>w;g[u].push_back(edge(v,w));}int st,tar,d[vNum],p[vNum];cin>>st;if(!spfa(g,n,st,d,p)){cout<<\"NEGATIVE CYCLE\";return 0;}for(int i=1;i<=n;i++){if(d[i]==INF)cout<<\"INF \";else cout<<d[i]<<\" \";}\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "单点",
        "stdin": "1 0\n\n1\n",
        "expected": "0"
      },
      {
        "name": "唯一最短路径",
        "stdin": "5 4\n1 2 2\n2 3 3\n1 3 8\n3 4 0\n1\n",
        "expected": "0 2 5 5 INF"
      },
      {
        "name": "不可达",
        "stdin": "4 2\n1 2 1\n3 4 2\n1\n",
        "expected": "0 1 INF INF"
      },
      {
        "name": "负边无负环",
        "stdin": "4 4\n1 2 4\n1 3 5\n2 3 -2\n3 4 3\n1\n",
        "expected": "0 4 2 5"
      },
      {
        "name": "源点可达负环",
        "stdin": "3 3\n1 2 1\n2 3 -2\n3 2 0\n1\n",
        "expected": "NEGATIVE CYCLE"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "g-spfa-path",
    "title": "Spfa · 最短路径还原",
    "category": "图",
    "sourceRefs": [
      {
        "docId": "nt3aaeukgr2p9zed",
        "blocks": [
          1
        ],
        "functions": [
          "spfa",
          "getPath"
        ]
      },
      {
        "docId": "nt3aaeukgr2p9zed",
        "blocks": [
          0
        ],
        "functions": [
          "getPath"
        ]
      }
    ],
    "description": "图为有向图。输出从源点到目标点的最短路径顶点序列。测试保证可达时最短路径唯一。若源点能到达负权环，输出 NEGATIVE CYCLE。不可达的距离输出INF，路径输出UNREACHABLE。",
    "input": "n m\nm行u v w；最后一行st target。",
    "output": "按1..n输出距离或路径序列；Floyd距离按矩阵逐行输出。",
    "constraints": [
      "1≤n≤60",
      "0≤m≤1000",
      "端点均在1..n；简单图不含自环；未特别说明时允许非连通。",
      "-1000≤w≤1000"
    ],
    "samples": [
      {
        "stdin": "1 0\n\n1 1\n",
        "expected": "1",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "5 4\n1 2 2\n2 3 3\n1 3 8\n3 4 0\n1 4\n",
        "expected": "1 2 3 4",
        "explanation": "边界样例：唯一最短路径"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；m行u v w；最后一行st target。\n// 输出：按1..n输出距离或路径序列；Floyd距离按矩阵逐行输出。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\nstruct edge{int v,w;edge(int a,int b):v(a),w(b){}};\n//利用spfa算法求g的单源最短路径,源点为st,顶点数为n。如果g有负权环,返回值为0;否则返回值为1\nint spfa(vector<edge>g[vNum],int n,int st,int d[vNum],int p[vNum]){\n    int i,u,v,vis[vNum]={0},num[vNum]={0};\n    for(i=1;i<=n;i++)\n        d[i]=INF,p[i]=0; //初始化d和p\n    d[st]=0,p[st]=st; //初始化源点的距离\n    queue<int>q;\n    q.push(st); vis[st]=1;\n    while(!q.empty()){\n        u=q.front(),q.pop(); //取队头元素\n        vis[u]=0; //标识顶点u已不在队列中\n        for(i=0;i<g[u].size();i++){\n            v=g[u][i].v;\n            if(d[v]>d[u]+g[u][i].w){\n                d[v]=d[u]+g[u][i].w; //松弛操作\n                p[v]=u;\n                num[v]=num[u]+1; //当前改进路径的边数\n                if(num[v]>=n) return 0; //只检测源点可达的负环\n                if(!vis[v])\n                    q.push(v),vis[v]=1; //v入队\n            }\n        }\n    }\n    return 1;\n}\nvoid getPath(int p[vNum],int v){if(v<=0||v>=vNum||p[v]==0)return;if(p[v]!=v)getPath(p,p[v]);cout<<v<<\" \";}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<edge>g[vNum];for(int i=0;i<m;i++){int u,v,w;cin>>u>>v>>w;g[u].push_back(edge(v,w));}int st,tar,d[vNum],p[vNum];cin>>st;cin>>tar;if(!spfa(g,n,st,d,p)){cout<<\"NEGATIVE CYCLE\";return 0;}if(d[tar]==INF)cout<<\"UNREACHABLE\";else getPath(p,tar);\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "单点",
        "stdin": "1 0\n\n1 1\n",
        "expected": "1"
      },
      {
        "name": "唯一最短路径",
        "stdin": "5 4\n1 2 2\n2 3 3\n1 3 8\n3 4 0\n1 4\n",
        "expected": "1 2 3 4"
      },
      {
        "name": "不可达",
        "stdin": "4 2\n1 2 1\n3 4 2\n1 4\n",
        "expected": "UNREACHABLE"
      },
      {
        "name": "负边无负环",
        "stdin": "4 4\n1 2 4\n1 3 5\n2 3 -2\n3 4 3\n1 4\n",
        "expected": "1 2 3 4"
      },
      {
        "name": "源点可达负环",
        "stdin": "3 3\n1 2 1\n2 3 -2\n3 2 0\n1 3\n",
        "expected": "NEGATIVE CYCLE"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "g-floyd-distances",
    "title": "Floyd · 所有点对距离",
    "category": "图",
    "sourceRefs": [
      {
        "docId": "nt3aaeukgr2p9zed",
        "blocks": [
          2
        ],
        "functions": [
          "Floyd"
        ]
      }
    ],
    "description": "图为有向图。输出每对顶点的最短距离，空路径距离为0。不可达的距离输出INF，路径输出UNREACHABLE。",
    "input": "n m\nm行u v w；无其他输入。",
    "output": "按1..n输出距离或路径序列；Floyd距离按矩阵逐行输出。",
    "constraints": [
      "1≤n≤60",
      "0≤m≤1000",
      "端点均在1..n；简单图不含自环；未特别说明时允许非连通。",
      "-1000≤w≤1000",
      "不含负环"
    ],
    "samples": [
      {
        "stdin": "1 0\n\n",
        "expected": "0",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "5 4\n1 2 2\n2 3 3\n1 3 8\n3 4 0\n",
        "expected": "0 2 5 5 INF\nINF 0 3 3 INF\nINF INF 0 0 INF\nINF INF INF 0 INF\nINF INF INF INF 0",
        "explanation": "边界样例：唯一最短路径"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；m行u v w；无其他输入。\n// 输出：按1..n输出距离或路径序列；Floyd距离按矩阵逐行输出。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\nstruct edge{int v,w;edge(int a,int b):v(a),w(b){}};\n//求带权图g的每一对顶点之间的最短距离和最短路径,n为顶点数\nvoid Floyd(vector<edge>g[vNum],int n,int d[vNum][vNum],int p[vNum][vNum]){\n    int i,j,k;\n    for(i=1;i<=n;i++) //初始化d和p\n        for(j=1;j<=n;j++){\n            d[i][j]=(i==j)?0:INF;\n            p[i][j]=(i==j)?i:-1;\n        }\n    for(i=1;i<=n;i++) //对有边相连的两个顶点重新初始化d和p\n        for(j=0;j<g[i].size();j++){\n            int v=g[i][j].v;\n            if(g[i][j].w<d[i][v]){\n                d[i][v]=g[i][j].w;\n                p[i][v]=i;\n            }\n        }\n    for(k=1;k<=n;k++) //依次将顶点k加入集合U\n        for(i=1;i<=n;i++)\n            for(j=1;j<=n;j++){\n                if(p[i][k]!=-1 && p[k][j]!=-1 && d[i][j]>d[i][k]+d[k][j]){\n                    d[i][j]=d[i][k]+d[k][j]; //松弛操作\n                    p[i][j]=k;\n                }\n            }\n}\n\n//输出顶点u到v的最短路径(顶点v除外)\nvoid getPath(int p[vNum][vNum],int u,int v){\n    if(p[u][v]==-1 || u==v) return; //u到v不存在路径\n    if(p[u][v]==u){ //p[u][v]为叶结点,u到v的最短路径为\n                      //边(u,v)\n        cout<<u<<' ';\n        return;\n    }\n    getPath(p,u,p[u][v]);\n    getPath(p,p[u][v],v);\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<edge>g[vNum];for(int i=0;i<m;i++){int u,v,w;cin>>u>>v>>w;g[u].push_back(edge(v,w));}int d[vNum][vNum],p[vNum][vNum];Floyd(g,n,d,p);for(int i=1;i<=n;i++){for(int j=1;j<=n;j++){if(d[i][j]==INF)cout<<\"INF \";else cout<<d[i][j]<<\" \";}cout<<\"\\n\";}\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "单点",
        "stdin": "1 0\n\n",
        "expected": "0"
      },
      {
        "name": "唯一最短路径",
        "stdin": "5 4\n1 2 2\n2 3 3\n1 3 8\n3 4 0\n",
        "expected": "0 2 5 5 INF\nINF 0 3 3 INF\nINF INF 0 0 INF\nINF INF INF 0 INF\nINF INF INF INF 0"
      },
      {
        "name": "不可达",
        "stdin": "4 2\n1 2 1\n3 4 2\n",
        "expected": "0 1 INF INF\nINF 0 INF INF\nINF INF 0 2\nINF INF INF 0"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "g-floyd-path",
    "title": "Floyd · 最短路径还原",
    "category": "图",
    "sourceRefs": [
      {
        "docId": "nt3aaeukgr2p9zed",
        "blocks": [
          2
        ],
        "functions": [
          "Floyd",
          "getPath"
        ]
      }
    ],
    "description": "图为有向图。输出从源点到目标点的最短路径顶点序列。测试保证可达时最短路径唯一。不可达的距离输出INF，路径输出UNREACHABLE。",
    "input": "n m\nm行u v w；最后一行st target。",
    "output": "按1..n输出距离或路径序列；Floyd距离按矩阵逐行输出。",
    "constraints": [
      "1≤n≤60",
      "0≤m≤1000",
      "端点均在1..n；简单图不含自环；未特别说明时允许非连通。",
      "-1000≤w≤1000",
      "不含负环"
    ],
    "samples": [
      {
        "stdin": "1 0\n\n1 1\n",
        "expected": "1",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "5 4\n1 2 2\n2 3 3\n1 3 8\n3 4 0\n1 4\n",
        "expected": "1 2 3 4",
        "explanation": "边界样例：唯一最短路径"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；m行u v w；最后一行st target。\n// 输出：按1..n输出距离或路径序列；Floyd距离按矩阵逐行输出。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\nstruct edge{int v,w;edge(int a,int b):v(a),w(b){}};\n//求带权图g的每一对顶点之间的最短距离和最短路径,n为顶点数\nvoid Floyd(vector<edge>g[vNum],int n,int d[vNum][vNum],int p[vNum][vNum]){\n    int i,j,k;\n    for(i=1;i<=n;i++) //初始化d和p\n        for(j=1;j<=n;j++){\n            d[i][j]=(i==j)?0:INF;\n            p[i][j]=(i==j)?i:-1;\n        }\n    for(i=1;i<=n;i++) //对有边相连的两个顶点重新初始化d和p\n        for(j=0;j<g[i].size();j++){\n            int v=g[i][j].v;\n            if(g[i][j].w<d[i][v]){\n                d[i][v]=g[i][j].w;\n                p[i][v]=i;\n            }\n        }\n    for(k=1;k<=n;k++) //依次将顶点k加入集合U\n        for(i=1;i<=n;i++)\n            for(j=1;j<=n;j++){\n                if(p[i][k]!=-1 && p[k][j]!=-1 && d[i][j]>d[i][k]+d[k][j]){\n                    d[i][j]=d[i][k]+d[k][j]; //松弛操作\n                    p[i][j]=k;\n                }\n            }\n}\n\n//输出顶点u到v的最短路径(顶点v除外)\nvoid getPath(int p[vNum][vNum],int u,int v){\n    if(p[u][v]==-1 || u==v) return; //u到v不存在路径\n    if(p[u][v]==u){ //p[u][v]为叶结点,u到v的最短路径为\n                      //边(u,v)\n        cout<<u<<' ';\n        return;\n    }\n    getPath(p,u,p[u][v]);\n    getPath(p,p[u][v],v);\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<edge>g[vNum];for(int i=0;i<m;i++){int u,v,w;cin>>u>>v>>w;g[u].push_back(edge(v,w));}int d[vNum][vNum],p[vNum][vNum];Floyd(g,n,d,p);int st,tar;cin>>st>>tar;if(d[st][tar]==INF)cout<<\"UNREACHABLE\";else{getPath(p,st,tar);cout<<tar;}\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "单点",
        "stdin": "1 0\n\n1 1\n",
        "expected": "1"
      },
      {
        "name": "唯一最短路径",
        "stdin": "5 4\n1 2 2\n2 3 3\n1 3 8\n3 4 0\n1 4\n",
        "expected": "1 2 3 4"
      },
      {
        "name": "不可达",
        "stdin": "4 2\n1 2 1\n3 4 2\n1 4\n",
        "expected": "UNREACHABLE"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "g-transitive-closure",
    "title": "Warshall · 传递闭包",
    "category": "图",
    "sourceRefs": [
      {
        "docId": "nt3aaeukgr2p9zed",
        "blocks": [
          3
        ],
        "functions": [
          "transitive_closure"
        ]
      }
    ],
    "description": "输出至少经过一条边的可达矩阵。u能沿一条或多条边到v则为1，否则为0；不自动把对角线置1，存在回到自身的有向环时对应对角线才为1。",
    "input": "n m\n接下来 m 行 u v；顶点为 1..n，按输入顺序加入有向边。",
    "output": "n行n列的0/1矩阵。",
    "constraints": [
      "1≤n≤60",
      "0≤m≤1000",
      "端点均在1..n；简单图不含自环；未特别说明时允许非连通。"
    ],
    "samples": [
      {
        "stdin": "1 0\n\n",
        "expected": "0",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "3 2\n1 2\n2 3\n",
        "expected": "0 1 1\n0 0 1\n0 0 0",
        "explanation": "边界样例：链"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n m；接下来 m 行 u v；顶点为 1..n，按输入顺序加入有向边。\n// 输出：n行n列的0/1矩阵。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n\nvoid transitive_closure(vector<int>g[vNum],int n,int ts[vNum][vNum]){\n    int i,j,k;\n    for(i=1;i<=n;i++)\n        for(j=1;j<=n;j++)\n            ts[i][j]=0;\n    for(i=1;i<=n;i++)\n        for(j=0;j<g[i].size();j++)\n            ts[i][g[i][j]]=1;\n    for(k=1;k<=n;k++)\n        for(i=1;i<=n;i++)\n            for(j=1;j<=n;j++)\n                if(ts[i][k]&&ts[k][j])\n                    ts[i][j]=1;\n}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,m;cin>>n>>m;vector<int>g[vNum];for(int i=0;i<m;i++){int u,v;cin>>u>>v;g[u].push_back(v);}int ts[vNum][vNum];transitive_closure(g,n,ts);for(int i=1;i<=n;i++){for(int j=1;j<=n;j++)cout<<ts[i][j]<<\" \";cout<<\"\\n\";}\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空边单点",
        "stdin": "1 0\n\n",
        "expected": "0"
      },
      {
        "name": "链",
        "stdin": "3 2\n1 2\n2 3\n",
        "expected": "0 1 1\n0 0 1\n0 0 0"
      },
      {
        "name": "有向环",
        "stdin": "3 2\n1 2\n2 1\n",
        "expected": "1 1 0\n1 1 0\n0 0 0"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "s-recursive-binary",
    "title": "二分查找 · 递归",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "ryfee7q3xhla8ghs",
        "blocks": [
          0
        ],
        "functions": [
          "binary_search(recursive)"
        ]
      }
    ],
    "description": "在递增有序整数数组中查找目标。重复键返回算法首次遇到的下标（不要求最左）；二分中点为l+(r-l)/2，插值按端点比例定位，并按原码处理相等端点。",
    "input": "n target\n接下来n个非递减整数。",
    "output": "找到时输出0起始下标，不存在输出-1。",
    "constraints": [
      "0≤n≤500",
      "-10000≤元素、target≤10000"
    ],
    "samples": [
      {
        "stdin": "0 3\n\n",
        "expected": "-1",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "6 3\n1 3 3 3 7 9\n",
        "expected": "2",
        "explanation": "边界样例：重复键"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n target；接下来n个非递减整数。\n// 输出：找到时输出0起始下标，不存在输出-1。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n//二分查找，查找顺序表sl的下标区间[left,right]中是否存在值为k的元素，若存在则返回元素的下标，否则返回-1\nint binary_search(const vector<keytype>&sl,int left,int right,keytype k){\n    int mid;\n    if(left<0 || right>=(int)sl.size() || left>right) return -1; //查找失败\n    mid=left+(right-left)/2; //下标区间的中间位置\n    if(sl[mid]==k) return mid; //查找成功\n    else if(sl[mid]>k) return binary_search(sl,left,mid-1,k); //转到左半区间查找\n    else return binary_search(sl,mid+1,right,k); //转到右半区间查找\n}\n//二分查找的非递归实现，查找顺序表sl中是否存在元素的值为k，若存在则返回元素的下标，否则返回-1\nint binary_search(const vector<keytype>&sl,keytype k){\n    int left=0,right=(int)sl.size()-1,mid;\n    while(left<=right){\n        mid=left+(right-left)/2;\n        if(sl[mid]==k) return mid; //查找成功\n        else if(sl[mid]>k) right=mid-1; //转到左半区间查找\n        else left=mid+1; //转到右半区间查找\n    }\n    return -1; //查找失败\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,k;cin>>n>>k;vector<int>a(n);for(int&x:a)cin>>x;cout<<binary_search(a,0,n-1,k);\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空表",
        "stdin": "0 3\n\n",
        "expected": "-1"
      },
      {
        "name": "重复键",
        "stdin": "6 3\n1 3 3 3 7 9\n",
        "expected": "2"
      },
      {
        "name": "不存在",
        "stdin": "4 6\n-5 -1 0 8\n",
        "expected": "-1"
      },
      {
        "name": "全相等",
        "stdin": "3 4\n4 4 4\n",
        "expected": "1"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "s-iterative-binary",
    "title": "二分查找 · 非递归",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "ryfee7q3xhla8ghs",
        "blocks": [
          0
        ],
        "functions": [
          "binary_search(iterative)"
        ]
      }
    ],
    "description": "在递增有序整数数组中查找目标。重复键返回算法首次遇到的下标（不要求最左）；二分中点为l+(r-l)/2，插值按端点比例定位，并按原码处理相等端点。",
    "input": "n target\n接下来n个非递减整数。",
    "output": "找到时输出0起始下标，不存在输出-1。",
    "constraints": [
      "0≤n≤500",
      "-10000≤元素、target≤10000"
    ],
    "samples": [
      {
        "stdin": "0 3\n\n",
        "expected": "-1",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "6 3\n1 3 3 3 7 9\n",
        "expected": "2",
        "explanation": "边界样例：重复键"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n target；接下来n个非递减整数。\n// 输出：找到时输出0起始下标，不存在输出-1。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n//二分查找，查找顺序表sl的下标区间[left,right]中是否存在值为k的元素，若存在则返回元素的下标，否则返回-1\nint binary_search(const vector<keytype>&sl,int left,int right,keytype k){\n    int mid;\n    if(left<0 || right>=(int)sl.size() || left>right) return -1; //查找失败\n    mid=left+(right-left)/2; //下标区间的中间位置\n    if(sl[mid]==k) return mid; //查找成功\n    else if(sl[mid]>k) return binary_search(sl,left,mid-1,k); //转到左半区间查找\n    else return binary_search(sl,mid+1,right,k); //转到右半区间查找\n}\n//二分查找的非递归实现，查找顺序表sl中是否存在元素的值为k，若存在则返回元素的下标，否则返回-1\nint binary_search(const vector<keytype>&sl,keytype k){\n    int left=0,right=(int)sl.size()-1,mid;\n    while(left<=right){\n        mid=left+(right-left)/2;\n        if(sl[mid]==k) return mid; //查找成功\n        else if(sl[mid]>k) right=mid-1; //转到左半区间查找\n        else left=mid+1; //转到右半区间查找\n    }\n    return -1; //查找失败\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,k;cin>>n>>k;vector<int>a(n);for(int&x:a)cin>>x;cout<<binary_search(a,k);\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空表",
        "stdin": "0 3\n\n",
        "expected": "-1"
      },
      {
        "name": "重复键",
        "stdin": "6 3\n1 3 3 3 7 9\n",
        "expected": "2"
      },
      {
        "name": "不存在",
        "stdin": "4 6\n-5 -1 0 8\n",
        "expected": "-1"
      },
      {
        "name": "全相等",
        "stdin": "3 4\n4 4 4\n",
        "expected": "1"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "s-interpolation",
    "title": "插值查找",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "ryfee7q3xhla8ghs",
        "blocks": [
          1
        ],
        "functions": [
          "interpolation_search"
        ]
      }
    ],
    "description": "在递增有序整数数组中查找目标。重复键返回算法首次遇到的下标（不要求最左）；二分中点为l+(r-l)/2，插值按端点比例定位，并按原码处理相等端点。",
    "input": "n target\n接下来n个非递减整数。",
    "output": "找到时输出0起始下标，不存在输出-1。",
    "constraints": [
      "0≤n≤500",
      "-10000≤元素、target≤10000"
    ],
    "samples": [
      {
        "stdin": "0 3\n\n",
        "expected": "-1",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "6 3\n1 3 3 3 7 9\n",
        "expected": "1",
        "explanation": "边界样例：重复键"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n target；接下来n个非递减整数。\n// 输出：找到时输出0起始下标，不存在输出-1。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n//插值查找的非递归实现，查找顺序表sl中是否存在元素的值为k\nint interpolation_search(const vector<keytype>&sl,keytype k){\n    int left=0,right=(int)sl.size()-1,mid;\n    while(left<=right){\n        if(k<sl[left] || k>sl[right]) return -1;\n        if(sl[left]==sl[right]) return sl[left]==k ? left : -1;\n        mid=left+(int)(1LL*(right-left)*(1LL*k-sl[left])/(1LL*sl[right]-sl[left]));\n        if(sl[mid]==k) return mid; //查找成功\n        else if(sl[mid]>k) right=mid-1; //转到左半区间查找\n        else left=mid+1; //转到右半区间查找\n    }\n    return -1; //查找失败\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,k;cin>>n>>k;vector<int>a(n);for(int&x:a)cin>>x;cout<<interpolation_search(a,k);\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空表",
        "stdin": "0 3\n\n",
        "expected": "-1"
      },
      {
        "name": "重复键",
        "stdin": "6 3\n1 3 3 3 7 9\n",
        "expected": "1"
      },
      {
        "name": "不存在",
        "stdin": "4 6\n-5 -1 0 8\n",
        "expected": "-1"
      },
      {
        "name": "全相等",
        "stdin": "3 4\n4 4 4\n",
        "expected": "0"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "s-stl-binary-exists",
    "title": "STL 查找 · binary-exists",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "ryfee7q3xhla8ghs",
        "blocks": [
          2
        ],
        "functions": [
          "binary-exists"
        ]
      }
    ],
    "description": "练习原笔记的STL搜索例子：是否存在目标，输出0或1。",
    "input": "n target\nn个非递减整数。",
    "output": "是否存在目标，输出0或1。",
    "constraints": [
      "0≤n≤500",
      "-10000≤元素、target≤10000"
    ],
    "samples": [
      {
        "stdin": "0 3\n\n",
        "expected": "0",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "6 3\n1 3 3 3 7 9\n",
        "expected": "1",
        "explanation": "边界样例：重复键"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n target；n个非递减整数。\n// 输出：是否存在目标，输出0或1。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,k;cin>>n>>k;vector<int>a(n);for(int&x:a)cin>>x;cout<<binary_search(a.begin(),a.end(),k);\nreturn 0;}\n",
    "referenceNote": "由原笔记这一STL调用示例参数化成完整输入输出程序；保留对应标准库操作和边界判断。",
    "cases": [
      {
        "name": "空容器",
        "stdin": "0 3\n\n",
        "expected": "0"
      },
      {
        "name": "重复键",
        "stdin": "6 3\n1 3 3 3 7 9\n",
        "expected": "1"
      },
      {
        "name": "超出或间隙",
        "stdin": "4 6\n-5 -1 0 8\n",
        "expected": "0"
      },
      {
        "name": "全相等",
        "stdin": "3 4\n4 4 4\n",
        "expected": "1"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "s-stl-lower-bound",
    "title": "STL 查找 · lower-bound",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "ryfee7q3xhla8ghs",
        "blocks": [
          2
        ],
        "functions": [
          "lower-bound"
        ]
      }
    ],
    "description": "练习原笔记的STL搜索例子：第一个不小于目标的0起始下标，若都小于目标则输出n。",
    "input": "n target\nn个非递减整数。",
    "output": "第一个不小于目标的0起始下标，若都小于目标则输出n。",
    "constraints": [
      "0≤n≤500",
      "-10000≤元素、target≤10000"
    ],
    "samples": [
      {
        "stdin": "0 3\n\n",
        "expected": "0",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "6 3\n1 3 3 3 7 9\n",
        "expected": "1",
        "explanation": "边界样例：重复键"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n target；n个非递减整数。\n// 输出：第一个不小于目标的0起始下标，若都小于目标则输出n。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,k;cin>>n>>k;vector<int>a(n);for(int&x:a)cin>>x;cout<<lower_bound(a.begin(),a.end(),k)-a.begin();\nreturn 0;}\n",
    "referenceNote": "由原笔记这一STL调用示例参数化成完整输入输出程序；保留对应标准库操作和边界判断。",
    "cases": [
      {
        "name": "空容器",
        "stdin": "0 3\n\n",
        "expected": "0"
      },
      {
        "name": "重复键",
        "stdin": "6 3\n1 3 3 3 7 9\n",
        "expected": "1"
      },
      {
        "name": "超出或间隙",
        "stdin": "4 6\n-5 -1 0 8\n",
        "expected": "3"
      },
      {
        "name": "全相等",
        "stdin": "3 4\n4 4 4\n",
        "expected": "0"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "s-stl-upper-bound",
    "title": "STL 查找 · upper-bound",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "ryfee7q3xhla8ghs",
        "blocks": [
          2
        ],
        "functions": [
          "upper-bound"
        ]
      }
    ],
    "description": "练习原笔记的STL搜索例子：第一个大于目标的0起始下标，若没有则输出n。",
    "input": "n target\nn个非递减整数。",
    "output": "第一个大于目标的0起始下标，若没有则输出n。",
    "constraints": [
      "0≤n≤500",
      "-10000≤元素、target≤10000"
    ],
    "samples": [
      {
        "stdin": "0 3\n\n",
        "expected": "0",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "6 3\n1 3 3 3 7 9\n",
        "expected": "4",
        "explanation": "边界样例：重复键"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n target；n个非递减整数。\n// 输出：第一个大于目标的0起始下标，若没有则输出n。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,k;cin>>n>>k;vector<int>a(n);for(int&x:a)cin>>x;cout<<upper_bound(a.begin(),a.end(),k)-a.begin();\nreturn 0;}\n",
    "referenceNote": "由原笔记这一STL调用示例参数化成完整输入输出程序；保留对应标准库操作和边界判断。",
    "cases": [
      {
        "name": "空容器",
        "stdin": "0 3\n\n",
        "expected": "0"
      },
      {
        "name": "重复键",
        "stdin": "6 3\n1 3 3 3 7 9\n",
        "expected": "4"
      },
      {
        "name": "超出或间隙",
        "stdin": "4 6\n-5 -1 0 8\n",
        "expected": "3"
      },
      {
        "name": "全相等",
        "stdin": "3 4\n4 4 4\n",
        "expected": "3"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "s-stl-equal-range",
    "title": "STL 查找 · equal-range",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "ryfee7q3xhla8ghs",
        "blocks": [
          2
        ],
        "functions": [
          "equal-range"
        ]
      }
    ],
    "description": "练习原笔记的STL搜索例子：匹配目标的左闭右开区间[l,r)，输出l、r和r-l。",
    "input": "n target\nn个非递减整数。",
    "output": "匹配目标的左闭右开区间[l,r)，输出l、r和r-l。",
    "constraints": [
      "0≤n≤500",
      "-10000≤元素、target≤10000"
    ],
    "samples": [
      {
        "stdin": "0 3\n\n",
        "expected": "0 0 0",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "6 3\n1 3 3 3 7 9\n",
        "expected": "1 4 3",
        "explanation": "边界样例：重复键"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n target；n个非递减整数。\n// 输出：匹配目标的左闭右开区间[l,r)，输出l、r和r-l。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,k;cin>>n>>k;vector<int>a(n);for(int&x:a)cin>>x;auto p=equal_range(a.begin(),a.end(),k);cout<<p.first-a.begin()<<\" \"<<p.second-a.begin()<<\" \"<<p.second-p.first;\nreturn 0;}\n",
    "referenceNote": "由原笔记这一STL调用示例参数化成完整输入输出程序；保留对应标准库操作和边界判断。",
    "cases": [
      {
        "name": "空容器",
        "stdin": "0 3\n\n",
        "expected": "0 0 0"
      },
      {
        "name": "重复键",
        "stdin": "6 3\n1 3 3 3 7 9\n",
        "expected": "1 4 3"
      },
      {
        "name": "超出或间隙",
        "stdin": "4 6\n-5 -1 0 8\n",
        "expected": "3 3 0"
      },
      {
        "name": "全相等",
        "stdin": "3 4\n4 4 4\n",
        "expected": "0 3 3"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "s-stl-set-lower-bound",
    "title": "STL 查找 · set-lower-bound",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "ryfee7q3xhla8ghs",
        "blocks": [
          2
        ],
        "functions": [
          "set-lower-bound"
        ]
      }
    ],
    "description": "练习原笔记的STL搜索例子：先构造去重的set，输出第一个不小于目标的值；不存在输出NONE。",
    "input": "n target\nn个非递减整数。",
    "output": "先构造去重的set，输出第一个不小于目标的值；不存在输出NONE。",
    "constraints": [
      "0≤n≤500",
      "-10000≤元素、target≤10000"
    ],
    "samples": [
      {
        "stdin": "0 3\n\n",
        "expected": "NONE",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "6 3\n1 3 3 3 7 9\n",
        "expected": "3",
        "explanation": "边界样例：重复键"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n target；n个非递减整数。\n// 输出：先构造去重的set，输出第一个不小于目标的值；不存在输出NONE。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,k;cin>>n>>k;vector<int>a(n);for(int&x:a)cin>>x;set<int>s(a.begin(),a.end());auto p=s.lower_bound(k);if(p==s.end())cout<<\"NONE\";else cout<<*p;\nreturn 0;}\n",
    "referenceNote": "由原笔记这一STL调用示例参数化成完整输入输出程序；保留对应标准库操作和边界判断。",
    "cases": [
      {
        "name": "空容器",
        "stdin": "0 3\n\n",
        "expected": "NONE"
      },
      {
        "name": "重复键",
        "stdin": "6 3\n1 3 3 3 7 9\n",
        "expected": "3"
      },
      {
        "name": "超出或间隙",
        "stdin": "4 6\n-5 -1 0 8\n",
        "expected": "8"
      },
      {
        "name": "全相等",
        "stdin": "3 4\n4 4 4\n",
        "expected": "4"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "s-block-search",
    "title": "分块查找 · 块内顺序搜索",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "ryfee7q3xhla8ghs",
        "blocks": [
          3,
          4
        ],
        "functions": [
          "get_bitTable",
          "block_search"
        ]
      }
    ],
    "description": "给定若干非空块。块内可以无序，但前一块的所有元素都严格小于后一块的所有元素。构造块最大值索引，用索引定位块后在块内顺序查找。返回展平数组中目标第一次出现的下标。",
    "input": "m target\n接下来m行：len以及该块的len个整数。",
    "output": "0起始下标，不存在输出-1。",
    "constraints": [
      "0≤m≤6",
      "每块1≤len≤50",
      "所有元素及target为1..10000"
    ],
    "samples": [
      {
        "stdin": "3 4\n3 1 3 2\n2 5 4\n3 8 6 7\n",
        "expected": "4",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "3 4\n1 1\n1 2\n1 3\n",
        "expected": "-1",
        "explanation": "边界样例：不存在"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：m target；接下来m行：len以及该块的len个整数。\n// 输出：0起始下标，不存在输出-1。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n#define M 6    /* 分块数的上限 */\nstruct bitNode{    //块索引表的元素的类型定义\n    keytype mkey;    //键值信息\n    int begin,end;    //键值起点下标和终点下一个元素的下标\n    bool operator<(const bitNode bit)const{\n        return mkey<bit.mkey;\n    }\n};\n\nstruct bitTable{    //分块查找表\n    bitNode bit[M];    //块索引表\n    int sz;    //分块的实际数量\n    vector<keytype>sl;    //原始顺序表\n    bitTable():sz(0){\n    }\n};\n//构建原始数据和块索引表b\nvoid get_bitTable(bitTable &b){\n    keytype k,mk;\n    int i,n=0,m;\n    b.sl.clear(); b.sz=0;\n    cout<<\"输入分块数量:\";\n    cin>>m;\n    if(m<0 || m>M) return;\n    b.sz=m;\n    for(i=0;i<m;i++){\n        cout<<\"输入第\"<<i+1<<\"块的键值(当输入0时结束本块输入):\"<<endl; //输入第i+1块的数据\n        b.bit[i].begin=n,mk=-1; //n为当前原始数据的下标\n        while(cin>>k && k>0){ //假设键值都为正\n            b.sl.push_back(k); //将键值依次加入原始顺序表\n            if(mk<k) mk=k; //更新当前块的最大值\n            ++n;\n        }\n        b.bit[i].mkey=mk;\n        b.bit[i].end=n; //第i+1块索引表构建完毕\n    }\n}\n//对分块查找表b进行分块查找，查找的键值为k，查找成功，返回k在原顺序表中的下标，否则返回-1\nint block_search(const bitTable &b,keytype k){\n    bitNode bit1; bit1.mkey=k;\n    int i=lower_bound(b.bit,b.bit+b.sz,bit1)-b.bit; //i为键值k所在的块\n    if(i>=b.sz) return -1; //k比所有键值都大，查找失败\n    bitNode bit=b.bit[i]; //第i个块的块索引表\n    const vector<keytype>&sl=b.sl; //原始顺序表\n    for(int j=bit.begin;j<bit.end;j++) //在第i个块内进行顺序查找\n        if(sl[j]==k) return j; //查找成功\n    return -1;\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint m,k;cin>>m>>k;bitTable b;b.sz=m;for(int i=0;i<m;i++){int len;cin>>len;b.bit[i].begin=b.sl.size();int mx=-1;while(len--){int x;cin>>x;b.sl.push_back(x);mx=max(mx,x);}b.bit[i].end=b.sl.size();b.bit[i].mkey=mx;}cout<<block_search(b,k);\nreturn 0;}\n",
    "referenceNote": "直接使用原block_search；为适配OJ，以明确块长度替代交互提示和0哨兵，仍按原get_bitTable规则构造begin/end/mkey。",
    "cases": [
      {
        "name": "块内无序",
        "stdin": "3 4\n3 1 3 2\n2 5 4\n3 8 6 7\n",
        "expected": "4"
      },
      {
        "name": "不存在",
        "stdin": "3 4\n1 1\n1 2\n1 3\n",
        "expected": "-1"
      },
      {
        "name": "单块",
        "stdin": "1 5\n3 7 5 6\n",
        "expected": "1"
      },
      {
        "name": "空表",
        "stdin": "0 1\n",
        "expected": "-1"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "s-string-bf",
    "title": "BF · 字符串模式匹配",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "ryfee7q3xhla8ghs",
        "blocks": [
          5
        ],
        "functions": [
          "bf"
        ]
      }
    ],
    "description": "主串与模式串分别占一整行，允许空串。返回模式串首次出现的0起始位置；空模式返回0，未出现返回-1。",
    "input": "第一行主串s；第二行模式串t（允许空行）。",
    "output": "一个下标或-1。",
    "constraints": [
      "0≤|s|≤500",
      "0≤|t|≤100",
      "仅含小写英文字母"
    ],
    "samples": [
      {
        "stdin": "\n\n",
        "expected": "0",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "abcabcab\ncab\n",
        "expected": "2",
        "explanation": "边界样例：一般匹配"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：第一行主串s；第二行模式串t（允许空行）。\n// 输出：一个下标或-1。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n//朴素模式匹配算法，判断主串s中是否包含模式串t\nint bf(string s,string t){\n    int i=0,j=0,k=0,sz_s=s.size(),sz_t=t.size();\n    if(sz_t==0) return 0;\n    while(i<sz_s && j<sz_t){\n        if(s[i]==t[j]){\n            ++i,++j; //i,j同步后移\n            if(j==sz_t) return k; //j到达模式串的最后一个字符的下一个位置，匹配成功\n        }else\n            ++k,i=k,j=0; //下一轮匹配主串从下一个字符开始，模式串从头开始\n    }\n    return -1; //匹配不成功\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring s,t;getline(cin,s);getline(cin,t);cout<<bf(s,t);\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "两个空串",
        "stdin": "\n\n",
        "expected": "0"
      },
      {
        "name": "一般匹配",
        "stdin": "abcabcab\ncab\n",
        "expected": "2"
      },
      {
        "name": "不存在",
        "stdin": "aaaaa\naaab\n",
        "expected": "-1"
      },
      {
        "name": "多次回退",
        "stdin": "ababababca\nababca\n",
        "expected": "4"
      },
      {
        "name": "空模式",
        "stdin": "abc\n\n",
        "expected": "0"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "s-string-kmp",
    "title": "KMP · 字符串模式匹配",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "ryfee7q3xhla8ghs",
        "blocks": [
          6
        ],
        "functions": [
          "kmp_next",
          "kmp"
        ]
      }
    ],
    "description": "主串与模式串分别占一整行，允许空串。返回模式串首次出现的0起始位置；空模式返回0，未出现返回-1。",
    "input": "第一行主串s；第二行模式串t（允许空行）。",
    "output": "一个下标或-1。",
    "constraints": [
      "0≤|s|≤500",
      "0≤|t|≤100",
      "仅含小写英文字母"
    ],
    "samples": [
      {
        "stdin": "\n\n",
        "expected": "0",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "abcabcab\ncab\n",
        "expected": "2",
        "explanation": "边界样例：一般匹配"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：第一行主串s；第二行模式串t（允许空行）。\n// 输出：一个下标或-1。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n//求KMP算法中模式串t的next数组\nvoid kmp_next(string t,vector<int>& next){\n    int i=0,j=-1,sz=t.size();\n    next.resize(sz);\n    if(sz==0) return;\n    next[0]=-1;\n    while(i<sz-1){\n        if(j==-1 || t[i]==t[j]){\n            ++i,++j; //i和j同步向后移动\n            if(t[i]==t[j]) next[i]=next[j]; //改进的next\n            else next[i]=j;\n        }\n        else\n            j=next[j];\n    }\n}\n\n//KMP模式匹配算法,判断s中是否包含t,如果包含,则返回t在s中第一次出现的位置,否则返回-1\nint kmp(string s,string t){\n    int i=0,j=0,sz_s=s.size(),sz_t=t.size();\n    if(sz_t==0) return 0; //空模式串\n    vector<int> next(sz_t);\n    kmp_next(t,next); //求t的next数组\n    while(i<sz_s){\n        if(j==-1 || s[i]==t[j]){\n            ++i,++j; //i,j同步后移\n            if(j==sz_t) return i-j; //匹配成功\n        }\n        else\n            j=next[j]; //j向前移动到下一个位置\n    }\n    return -1; //匹配失败\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nstring s,t;getline(cin,s);getline(cin,t);cout<<kmp(s,t);\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "两个空串",
        "stdin": "\n\n",
        "expected": "0"
      },
      {
        "name": "一般匹配",
        "stdin": "abcabcab\ncab\n",
        "expected": "2"
      },
      {
        "name": "不存在",
        "stdin": "aaaaa\naaab\n",
        "expected": "-1"
      },
      {
        "name": "多次回退",
        "stdin": "ababababca\nababca\n",
        "expected": "4"
      },
      {
        "name": "空模式",
        "stdin": "abc\n\n",
        "expected": "0"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "s-skip-search",
    "title": "跳表 · 查找最高层",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "ryfee7q3xhla8ghs",
        "blocks": [
          7,
          8
        ],
        "functions": [
          "skl_search"
        ]
      }
    ],
    "description": "初始跳表由互异升序键和各键的塔高构建。对每个查询返回目标出现的最高层（1起始），不存在返回-1。",
    "input": "n\n接下来n行key height。\nq\nq个待操作的键。",
    "output": "返回值0/1或层数；修改题最后另起一行输出底层键，空时EMPTY；遍历题每行h: 后接该层键，空表EMPTY。",
    "constraints": [
      "0≤n,q≤100",
      "-10000≤key≤10000",
      "初始key严格递增，1≤height≤5"
    ],
    "samples": [
      {
        "stdin": "0\n\n2\n5 5\n",
        "expected": "-1 -1",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "3\n1 1\n3 3\n8 2\n3\n3 8 4\n",
        "expected": "3 2 -1",
        "explanation": "边界样例：分层查询"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；接下来n行key height。；q；q个待操作的键。\n// 输出：返回值0/1或层数；修改题最后另起一行输出底层键，空时EMPTY；遍历题每行h: 后接该层键，空表EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\nconstexpr int ML=[](){\n    int n=N,level=1;\n    while(n>1){ n=n/2+n%2; ++level; }\n    return level;\n}(); /* 跳表的层数的上限 */\n\nstruct sklNode{\n    keytype key; //键值\n    sklNode *next[ML]; //各层的next指针\n    sklNode(){\n        for(int i=0;i<ML;i++) next[i]=NULL;\n    }\n};\n\nstruct skipList{\n    sklNode *head; //跳表的头结点\n    int level; //跳表的层数\n    skipList():level(0){\n        head=new sklNode;\n    }\n};\n//在跳表skl中查找是否存在键值k。如果存在,则返回其出现的最高层次,否则返回-1\nint skl_search(skipList skl,keytype k){\n    int i;\n    sklNode *cur=skl.head;\n    for(i=skl.level-1;i>=0;i--){ //从最高层开始查找\n        while(cur->next[i]!=NULL && cur->next[i]->key<k) //在第i层查找\n            cur=cur->next[i];\n        if(cur->next[i]!=NULL && cur->next[i]->key==k){ //k在第i层出现,返回层数\n            return i+1;\n        }\n    }\n    return -1;\n}\n//通过掷硬币方法确定层数\nint get_random_level(){\n    int ret=1;\n    while(rand()%2 && ret<ML) //从第1层开始,如果rand()为奇数,则层数加1\n        ret++;\n    return ret;\n}\n//在跳表skl中插入结点,其键值为k,插入成功返回true,否则返回false\nbool skl_insert(skipList &skl,keytype k){\n    if(skl_search(skl,k)!=-1) return false; //如果跳表中已存在键值为k的结点,取消插入\n    int i,level=get_random_level(); //获取插入键值k的最高层次\n    if(level>skl.level) skl.level=level; //当插入结点的最大层数大于跳表层数时,更新跳表的层数\n    sklNode *cur=skl.head,*tmp=new sklNode; //cur为当前结点,tmp为新插入的结点\n    tmp->key=k;\n    for(i=level-1;i>=0;i--){ //从所要插入的最高层开始,依次在每一层插入\n        while(cur->next[i]!=NULL && cur->next[i]->key<k)\n            cur=cur->next[i];\n        tmp->next[i]=cur->next[i]; //tmp插入第i层链表中点cur的后面\n        cur->next[i]=tmp;\n    }\n    return true;\n}\n//输出跳表skl各层的键值信息\nvoid skl_print(skipList skl){\n    for(int i=0;i<skl.level;i++){\n        sklNode *cur=skl.head->next[i];\n        cout<<\"第\"<<i+1<<\"层:\";\n        while(cur){\n            cout<<cur->key<<' ';\n            cur=cur->next[i];\n        }\n        cout<<endl;\n    }\n}\n//删除跳表skl中键值为k的结点\nbool skl_delete(skipList &skl,keytype k){\n    int i;\n    sklNode *cur=skl.head,*del=NULL;\n    for(i=skl.level-1;i>=0;i--){ //查找每一层是否存在结点的键值为k\n        while(cur->next[i]!=NULL && cur->next[i]->key<k)\n            cur=cur->next[i];\n        if(cur->next[i]!=NULL && cur->next[i]->key==k){ //该层存在键值为k的结点,其前一结点为cur\n            if(del==NULL) del=cur->next[i]; //记录被删除结点\n            cur->next[i]=del->next[i]; //删除第i层的键值为k的结点\n        }\n    }\n    if(del==NULL) return false; //不存在键值为k的结点\n    delete del; del=NULL; //释放被删除结点所占用的存储空间\n    for(i=skl.level-1;i>=0;i--) //检查各层是否为空链表,如果是则将层数减1\n        if(skl.head->next[i]==NULL) skl.level--;\n        else break;\n    return true;\n}\nvoid load_skip(skipList &s,int n){sklNode*last[ML];for(int i=0;i<ML;i++)last[i]=s.head;for(int i=0;i<n;i++){int key,h;cin>>key>>h;sklNode*p=new sklNode;p->key=key;s.level=max(s.level,h);for(int j=0;j<h;j++){last[j]->next[j]=p;last[j]=p;}}}\nvoid bottom(skipList s){if(!s.head->next[0]){cout<<\"EMPTY\";return;}for(auto p=s.head->next[0];p;p=p->next[0])cout<<p->key<<\" \";}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;skipList s;load_skip(s,n);int q;cin>>q;while(q--){int k;cin>>k;cout<<skl_search(s,k)<<\" \";}\nreturn 0;}\n",
    "referenceNote": "使用笔记原跳表结构和操作；输入塔高仅用于确定性构建初始层。遍历输出格式参数化，不输出平台相关的rand结果。",
    "cases": [
      {
        "name": "空跳表",
        "stdin": "0\n\n2\n5 5\n",
        "expected": "-1 -1"
      },
      {
        "name": "分层查询",
        "stdin": "3\n1 1\n3 3\n8 2\n3\n3 8 4\n",
        "expected": "3 2 -1"
      },
      {
        "name": "重复键操作",
        "stdin": "3\n2 2\n5 1\n9 3\n3\n2 2 9\n",
        "expected": "2 2 3"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "s-skip-insert",
    "title": "跳表 · 插入",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "ryfee7q3xhla8ghs",
        "blocks": [
          7,
          8,
          9,
          10
        ],
        "functions": [
          "skl_insert"
        ]
      }
    ],
    "description": "初始跳表由互异升序键和各键的塔高构建。按原掷硬币方法分配新节点塔高；每次输出是否成功。最后输出底层所有键，随机层高不会影响判题输出。",
    "input": "n\n接下来n行key height。\nq\nq个待操作的键。",
    "output": "返回值0/1或层数；修改题最后另起一行输出底层键，空时EMPTY；遍历题每行h: 后接该层键，空表EMPTY。",
    "constraints": [
      "0≤n,q≤100",
      "-10000≤key≤10000",
      "初始key严格递增，1≤height≤5"
    ],
    "samples": [
      {
        "stdin": "0\n\n2\n5 5\n",
        "expected": "1 0\n5",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "3\n1 1\n3 3\n8 2\n3\n3 8 4\n",
        "expected": "0 0 1\n1 3 4 8",
        "explanation": "边界样例：分层查询"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；接下来n行key height。；q；q个待操作的键。\n// 输出：返回值0/1或层数；修改题最后另起一行输出底层键，空时EMPTY；遍历题每行h: 后接该层键，空表EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\nconstexpr int ML=[](){\n    int n=N,level=1;\n    while(n>1){ n=n/2+n%2; ++level; }\n    return level;\n}(); /* 跳表的层数的上限 */\n\nstruct sklNode{\n    keytype key; //键值\n    sklNode *next[ML]; //各层的next指针\n    sklNode(){\n        for(int i=0;i<ML;i++) next[i]=NULL;\n    }\n};\n\nstruct skipList{\n    sklNode *head; //跳表的头结点\n    int level; //跳表的层数\n    skipList():level(0){\n        head=new sklNode;\n    }\n};\n//在跳表skl中查找是否存在键值k。如果存在,则返回其出现的最高层次,否则返回-1\nint skl_search(skipList skl,keytype k){\n    int i;\n    sklNode *cur=skl.head;\n    for(i=skl.level-1;i>=0;i--){ //从最高层开始查找\n        while(cur->next[i]!=NULL && cur->next[i]->key<k) //在第i层查找\n            cur=cur->next[i];\n        if(cur->next[i]!=NULL && cur->next[i]->key==k){ //k在第i层出现,返回层数\n            return i+1;\n        }\n    }\n    return -1;\n}\n//通过掷硬币方法确定层数\nint get_random_level(){\n    int ret=1;\n    while(rand()%2 && ret<ML) //从第1层开始,如果rand()为奇数,则层数加1\n        ret++;\n    return ret;\n}\n//在跳表skl中插入结点,其键值为k,插入成功返回true,否则返回false\nbool skl_insert(skipList &skl,keytype k){\n    if(skl_search(skl,k)!=-1) return false; //如果跳表中已存在键值为k的结点,取消插入\n    int i,level=get_random_level(); //获取插入键值k的最高层次\n    if(level>skl.level) skl.level=level; //当插入结点的最大层数大于跳表层数时,更新跳表的层数\n    sklNode *cur=skl.head,*tmp=new sklNode; //cur为当前结点,tmp为新插入的结点\n    tmp->key=k;\n    for(i=level-1;i>=0;i--){ //从所要插入的最高层开始,依次在每一层插入\n        while(cur->next[i]!=NULL && cur->next[i]->key<k)\n            cur=cur->next[i];\n        tmp->next[i]=cur->next[i]; //tmp插入第i层链表中点cur的后面\n        cur->next[i]=tmp;\n    }\n    return true;\n}\n//输出跳表skl各层的键值信息\nvoid skl_print(skipList skl){\n    for(int i=0;i<skl.level;i++){\n        sklNode *cur=skl.head->next[i];\n        cout<<\"第\"<<i+1<<\"层:\";\n        while(cur){\n            cout<<cur->key<<' ';\n            cur=cur->next[i];\n        }\n        cout<<endl;\n    }\n}\n//删除跳表skl中键值为k的结点\nbool skl_delete(skipList &skl,keytype k){\n    int i;\n    sklNode *cur=skl.head,*del=NULL;\n    for(i=skl.level-1;i>=0;i--){ //查找每一层是否存在结点的键值为k\n        while(cur->next[i]!=NULL && cur->next[i]->key<k)\n            cur=cur->next[i];\n        if(cur->next[i]!=NULL && cur->next[i]->key==k){ //该层存在键值为k的结点,其前一结点为cur\n            if(del==NULL) del=cur->next[i]; //记录被删除结点\n            cur->next[i]=del->next[i]; //删除第i层的键值为k的结点\n        }\n    }\n    if(del==NULL) return false; //不存在键值为k的结点\n    delete del; del=NULL; //释放被删除结点所占用的存储空间\n    for(i=skl.level-1;i>=0;i--) //检查各层是否为空链表,如果是则将层数减1\n        if(skl.head->next[i]==NULL) skl.level--;\n        else break;\n    return true;\n}\nvoid load_skip(skipList &s,int n){sklNode*last[ML];for(int i=0;i<ML;i++)last[i]=s.head;for(int i=0;i<n;i++){int key,h;cin>>key>>h;sklNode*p=new sklNode;p->key=key;s.level=max(s.level,h);for(int j=0;j<h;j++){last[j]->next[j]=p;last[j]=p;}}}\nvoid bottom(skipList s){if(!s.head->next[0]){cout<<\"EMPTY\";return;}for(auto p=s.head->next[0];p;p=p->next[0])cout<<p->key<<\" \";}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;skipList s;load_skip(s,n);int q;cin>>q;while(q--){int k;cin>>k;cout<<skl_insert(s,k)<<\" \";}cout<<\"\\n\";bottom(s);\nreturn 0;}\n",
    "referenceNote": "使用笔记原跳表结构和操作；输入塔高仅用于确定性构建初始层。遍历输出格式参数化，不输出平台相关的rand结果。",
    "cases": [
      {
        "name": "空跳表",
        "stdin": "0\n\n2\n5 5\n",
        "expected": "1 0\n5"
      },
      {
        "name": "分层查询",
        "stdin": "3\n1 1\n3 3\n8 2\n3\n3 8 4\n",
        "expected": "0 0 1\n1 3 4 8"
      },
      {
        "name": "重复键操作",
        "stdin": "3\n2 2\n5 1\n9 3\n3\n2 2 9\n",
        "expected": "0 0 0\n2 5 9"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "s-skip-delete",
    "title": "跳表 · 删除",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "ryfee7q3xhla8ghs",
        "blocks": [
          7,
          8,
          9,
          10
        ],
        "functions": [
          "skl_delete"
        ]
      }
    ],
    "description": "初始跳表由互异升序键和各键的塔高构建。每次输出是否删除成功；最后输出底层所有键。",
    "input": "n\n接下来n行key height。\nq\nq个待操作的键。",
    "output": "返回值0/1或层数；修改题最后另起一行输出底层键，空时EMPTY；遍历题每行h: 后接该层键，空表EMPTY。",
    "constraints": [
      "0≤n,q≤100",
      "-10000≤key≤10000",
      "初始key严格递增，1≤height≤5"
    ],
    "samples": [
      {
        "stdin": "0\n\n2\n5 5\n",
        "expected": "0 0\nEMPTY",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "3\n1 1\n3 3\n8 2\n3\n3 8 4\n",
        "expected": "1 1 0\n1",
        "explanation": "边界样例：分层查询"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；接下来n行key height。；q；q个待操作的键。\n// 输出：返回值0/1或层数；修改题最后另起一行输出底层键，空时EMPTY；遍历题每行h: 后接该层键，空表EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\nconstexpr int ML=[](){\n    int n=N,level=1;\n    while(n>1){ n=n/2+n%2; ++level; }\n    return level;\n}(); /* 跳表的层数的上限 */\n\nstruct sklNode{\n    keytype key; //键值\n    sklNode *next[ML]; //各层的next指针\n    sklNode(){\n        for(int i=0;i<ML;i++) next[i]=NULL;\n    }\n};\n\nstruct skipList{\n    sklNode *head; //跳表的头结点\n    int level; //跳表的层数\n    skipList():level(0){\n        head=new sklNode;\n    }\n};\n//在跳表skl中查找是否存在键值k。如果存在,则返回其出现的最高层次,否则返回-1\nint skl_search(skipList skl,keytype k){\n    int i;\n    sklNode *cur=skl.head;\n    for(i=skl.level-1;i>=0;i--){ //从最高层开始查找\n        while(cur->next[i]!=NULL && cur->next[i]->key<k) //在第i层查找\n            cur=cur->next[i];\n        if(cur->next[i]!=NULL && cur->next[i]->key==k){ //k在第i层出现,返回层数\n            return i+1;\n        }\n    }\n    return -1;\n}\n//通过掷硬币方法确定层数\nint get_random_level(){\n    int ret=1;\n    while(rand()%2 && ret<ML) //从第1层开始,如果rand()为奇数,则层数加1\n        ret++;\n    return ret;\n}\n//在跳表skl中插入结点,其键值为k,插入成功返回true,否则返回false\nbool skl_insert(skipList &skl,keytype k){\n    if(skl_search(skl,k)!=-1) return false; //如果跳表中已存在键值为k的结点,取消插入\n    int i,level=get_random_level(); //获取插入键值k的最高层次\n    if(level>skl.level) skl.level=level; //当插入结点的最大层数大于跳表层数时,更新跳表的层数\n    sklNode *cur=skl.head,*tmp=new sklNode; //cur为当前结点,tmp为新插入的结点\n    tmp->key=k;\n    for(i=level-1;i>=0;i--){ //从所要插入的最高层开始,依次在每一层插入\n        while(cur->next[i]!=NULL && cur->next[i]->key<k)\n            cur=cur->next[i];\n        tmp->next[i]=cur->next[i]; //tmp插入第i层链表中点cur的后面\n        cur->next[i]=tmp;\n    }\n    return true;\n}\n//输出跳表skl各层的键值信息\nvoid skl_print(skipList skl){\n    for(int i=0;i<skl.level;i++){\n        sklNode *cur=skl.head->next[i];\n        cout<<\"第\"<<i+1<<\"层:\";\n        while(cur){\n            cout<<cur->key<<' ';\n            cur=cur->next[i];\n        }\n        cout<<endl;\n    }\n}\n//删除跳表skl中键值为k的结点\nbool skl_delete(skipList &skl,keytype k){\n    int i;\n    sklNode *cur=skl.head,*del=NULL;\n    for(i=skl.level-1;i>=0;i--){ //查找每一层是否存在结点的键值为k\n        while(cur->next[i]!=NULL && cur->next[i]->key<k)\n            cur=cur->next[i];\n        if(cur->next[i]!=NULL && cur->next[i]->key==k){ //该层存在键值为k的结点,其前一结点为cur\n            if(del==NULL) del=cur->next[i]; //记录被删除结点\n            cur->next[i]=del->next[i]; //删除第i层的键值为k的结点\n        }\n    }\n    if(del==NULL) return false; //不存在键值为k的结点\n    delete del; del=NULL; //释放被删除结点所占用的存储空间\n    for(i=skl.level-1;i>=0;i--) //检查各层是否为空链表,如果是则将层数减1\n        if(skl.head->next[i]==NULL) skl.level--;\n        else break;\n    return true;\n}\nvoid load_skip(skipList &s,int n){sklNode*last[ML];for(int i=0;i<ML;i++)last[i]=s.head;for(int i=0;i<n;i++){int key,h;cin>>key>>h;sklNode*p=new sklNode;p->key=key;s.level=max(s.level,h);for(int j=0;j<h;j++){last[j]->next[j]=p;last[j]=p;}}}\nvoid bottom(skipList s){if(!s.head->next[0]){cout<<\"EMPTY\";return;}for(auto p=s.head->next[0];p;p=p->next[0])cout<<p->key<<\" \";}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;skipList s;load_skip(s,n);int q;cin>>q;while(q--){int k;cin>>k;cout<<skl_delete(s,k)<<\" \";}cout<<\"\\n\";bottom(s);\nreturn 0;}\n",
    "referenceNote": "使用笔记原跳表结构和操作；输入塔高仅用于确定性构建初始层。遍历输出格式参数化，不输出平台相关的rand结果。",
    "cases": [
      {
        "name": "空跳表",
        "stdin": "0\n\n2\n5 5\n",
        "expected": "0 0\nEMPTY"
      },
      {
        "name": "分层查询",
        "stdin": "3\n1 1\n3 3\n8 2\n3\n3 8 4\n",
        "expected": "1 1 0\n1"
      },
      {
        "name": "重复键操作",
        "stdin": "3\n2 2\n5 1\n9 3\n3\n2 2 9\n",
        "expected": "1 0 1\n5"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "s-skip-print",
    "title": "跳表 · 逐层遍历",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "ryfee7q3xhla8ghs",
        "blocks": [
          7,
          9
        ],
        "functions": [
          "skl_print"
        ]
      }
    ],
    "description": "初始跳表由互异升序键和各键的塔高构建。从第1层到最高非空层，分别输出该层的键。",
    "input": "n\n接下来n行key height。",
    "output": "返回值0/1或层数；修改题最后另起一行输出底层键，空时EMPTY；遍历题每行h: 后接该层键，空表EMPTY。",
    "constraints": [
      "0≤n,q≤100",
      "-10000≤key≤10000",
      "初始key严格递增，1≤height≤5"
    ],
    "samples": [
      {
        "stdin": "0\n\n",
        "expected": "EMPTY",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "3\n1 1\n3 3\n8 2\n",
        "expected": "1: 1 3 8\n2: 3 8\n3: 3",
        "explanation": "边界样例：分层查询"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；接下来n行key height。\n// 输出：返回值0/1或层数；修改题最后另起一行输出底层键，空时EMPTY；遍历题每行h: 后接该层键，空表EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\nconstexpr int ML=[](){\n    int n=N,level=1;\n    while(n>1){ n=n/2+n%2; ++level; }\n    return level;\n}(); /* 跳表的层数的上限 */\n\nstruct sklNode{\n    keytype key; //键值\n    sklNode *next[ML]; //各层的next指针\n    sklNode(){\n        for(int i=0;i<ML;i++) next[i]=NULL;\n    }\n};\n\nstruct skipList{\n    sklNode *head; //跳表的头结点\n    int level; //跳表的层数\n    skipList():level(0){\n        head=new sklNode;\n    }\n};\n//在跳表skl中查找是否存在键值k。如果存在,则返回其出现的最高层次,否则返回-1\nint skl_search(skipList skl,keytype k){\n    int i;\n    sklNode *cur=skl.head;\n    for(i=skl.level-1;i>=0;i--){ //从最高层开始查找\n        while(cur->next[i]!=NULL && cur->next[i]->key<k) //在第i层查找\n            cur=cur->next[i];\n        if(cur->next[i]!=NULL && cur->next[i]->key==k){ //k在第i层出现,返回层数\n            return i+1;\n        }\n    }\n    return -1;\n}\n//通过掷硬币方法确定层数\nint get_random_level(){\n    int ret=1;\n    while(rand()%2 && ret<ML) //从第1层开始,如果rand()为奇数,则层数加1\n        ret++;\n    return ret;\n}\n//在跳表skl中插入结点,其键值为k,插入成功返回true,否则返回false\nbool skl_insert(skipList &skl,keytype k){\n    if(skl_search(skl,k)!=-1) return false; //如果跳表中已存在键值为k的结点,取消插入\n    int i,level=get_random_level(); //获取插入键值k的最高层次\n    if(level>skl.level) skl.level=level; //当插入结点的最大层数大于跳表层数时,更新跳表的层数\n    sklNode *cur=skl.head,*tmp=new sklNode; //cur为当前结点,tmp为新插入的结点\n    tmp->key=k;\n    for(i=level-1;i>=0;i--){ //从所要插入的最高层开始,依次在每一层插入\n        while(cur->next[i]!=NULL && cur->next[i]->key<k)\n            cur=cur->next[i];\n        tmp->next[i]=cur->next[i]; //tmp插入第i层链表中点cur的后面\n        cur->next[i]=tmp;\n    }\n    return true;\n}\n//输出跳表skl各层的键值信息\nvoid skl_print(skipList skl){\n    for(int i=0;i<skl.level;i++){\n        sklNode *cur=skl.head->next[i];\n        cout<<\"第\"<<i+1<<\"层:\";\n        while(cur){\n            cout<<cur->key<<' ';\n            cur=cur->next[i];\n        }\n        cout<<endl;\n    }\n}\n//删除跳表skl中键值为k的结点\nbool skl_delete(skipList &skl,keytype k){\n    int i;\n    sklNode *cur=skl.head,*del=NULL;\n    for(i=skl.level-1;i>=0;i--){ //查找每一层是否存在结点的键值为k\n        while(cur->next[i]!=NULL && cur->next[i]->key<k)\n            cur=cur->next[i];\n        if(cur->next[i]!=NULL && cur->next[i]->key==k){ //该层存在键值为k的结点,其前一结点为cur\n            if(del==NULL) del=cur->next[i]; //记录被删除结点\n            cur->next[i]=del->next[i]; //删除第i层的键值为k的结点\n        }\n    }\n    if(del==NULL) return false; //不存在键值为k的结点\n    delete del; del=NULL; //释放被删除结点所占用的存储空间\n    for(i=skl.level-1;i>=0;i--) //检查各层是否为空链表,如果是则将层数减1\n        if(skl.head->next[i]==NULL) skl.level--;\n        else break;\n    return true;\n}\nvoid load_skip(skipList &s,int n){sklNode*last[ML];for(int i=0;i<ML;i++)last[i]=s.head;for(int i=0;i<n;i++){int key,h;cin>>key>>h;sklNode*p=new sklNode;p->key=key;s.level=max(s.level,h);for(int j=0;j<h;j++){last[j]->next[j]=p;last[j]=p;}}}\nvoid bottom(skipList s){if(!s.head->next[0]){cout<<\"EMPTY\";return;}for(auto p=s.head->next[0];p;p=p->next[0])cout<<p->key<<\" \";}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;skipList s;load_skip(s,n);if(s.level==0)cout<<\"EMPTY\";else for(int h=1;h<=s.level;h++){cout<<h<<\":\";for(auto p=s.head->next[h-1];p;p=p->next[h-1])cout<<\" \"<<p->key;cout<<\"\\n\";}\nreturn 0;}\n",
    "referenceNote": "使用笔记原跳表结构和操作；输入塔高仅用于确定性构建初始层。遍历输出格式参数化，不输出平台相关的rand结果。",
    "cases": [
      {
        "name": "空跳表",
        "stdin": "0\n\n",
        "expected": "EMPTY"
      },
      {
        "name": "分层查询",
        "stdin": "3\n1 1\n3 3\n8 2\n",
        "expected": "1: 1 3 8\n2: 3 8\n3: 3"
      },
      {
        "name": "重复键操作",
        "stdin": "3\n2 2\n5 1\n9 3\n",
        "expected": "1: 2 5 9\n2: 2 9\n3: 9"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "s-bst-search",
    "title": "BST · 查找",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "qsmaorshgyypzl6s",
        "blocks": [
          0,
          1,
          2,
          3
        ],
        "functions": [
          "bst_search"
        ]
      }
    ],
    "description": "用初始键按输入顺序建BST树，重复键不建立新节点。逐个查询是否存在。修改题用先序序列和空指针#保留形状；AVL还输出每个节点高度，不能只用有序集合替代。",
    "input": "n\nn个初始键\nq\nq个待操作键。",
    "output": "第一行q个0/1。",
    "constraints": [
      "0≤n,q≤100",
      "-10000≤key≤10000"
    ],
    "samples": [
      {
        "stdin": "0\n\n3\n5 5 2\n",
        "expected": "0 0 0",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "7\n4 2 6 1 3 5 7\n3\n4 9 2\n",
        "expected": "1 0 1",
        "explanation": "边界样例：一般平衡树"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个初始键；q；q个待操作键。\n// 输出：第一行q个0/1。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\ntypedef struct bstNode {\n    keytype key;\n    bstNode *lc, *rc;\n    bstNode():lc(NULL),rc(NULL) {\n    }\n} *bstTree;\n //在二叉查找树t中查找键值为k的结点,查找结果作为返回值\nbstNode *bst_search(bstTree t,keytype k) {\n    if(t==NULL) return NULL;\n    if(k < t->key) return bst_search(t->lc,k); //转入左子树查找\n    else if(k > t->key) return bst_search(t->rc,k); //转入右子树查找\n    else return t; //查找成功\n}\n\n //在二叉查找树t中插入一个键值为k的结点。插入成功,返回true,否则返回false\nbool bst_insert(bstTree &t,keytype k) {\n    if(t==NULL) {\n        //当前结点为空,创建结点,并指定键值为k\n        t=new bstNode,t->key=k;\n        return true;\n    }\n    if(k < t->key) return bst_insert(t->lc,k); //插入t的左子树\n    else if(k > t->key) return bst_insert(t->rc,k); //插入t的右子树\n    //如果t中已存在键值为k的结点,插入失败\n    return false;\n}\n //删除二叉查找树t中键值为k的结点。删除成功,返回true,否则返回false\nbool bst_delete(bstTree &t,keytype k) {\n    bstNode *tmp;\n    if(t==NULL) return false; //情形(1):不存在键值为k的结点,删除失败\n    else if(k < t->key) return bst_delete(t->lc,k); //进入左子树\n    else if(k > t->key) return bst_delete(t->rc,k); //进入右子树\n    else { //t的键值为k,删除结点t(算法中的(1))\n        if(t->lc==NULL && t->rc==NULL) { //情形(2)\n            delete t,t=NULL;\n        }\n        else if(t->rc==NULL) {\n            tmp=t; //仅有左孩子，直接以整棵左子树取代当前结点\n            t=t->lc;\n            delete tmp;\n        }\n        else {\n            tmp=t->rc; //情形(4)\n            while(tmp->lc) tmp=tmp->lc;\n            //获取t的直接后继tmp(右子树的最左孩子,算法中的(2))\n            keytype k1=tmp->key;\n            bst_delete(t,k1); //删除tmp\n            t->key=k1; //用tmp的键值取代t的键值\n        }\n        return true;\n    }\n}\nvoid show(bstTree t){if(!t){cout<<\"# \";return;}cout<<t->key<<\" \";show(t->lc);show(t->rc);}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;bstTree t=NULL;for(int i=0;i<n;i++){int k;cin>>k;bst_insert(t,k);}int q;cin>>q;while(q--){int k;cin>>k;cout<<(bst_search(t,k)!=NULL)<<\" \";}\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空树与重复键",
        "stdin": "0\n\n3\n5 5 2\n",
        "expected": "0 0 0"
      },
      {
        "name": "一般平衡树",
        "stdin": "7\n4 2 6 1 3 5 7\n3\n4 9 2\n",
        "expected": "1 0 1"
      },
      {
        "name": "仅左孩子含右分支",
        "stdin": "3\n10 5 7\n3\n10 7 20\n",
        "expected": "1 1 0"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "s-bst-insert",
    "title": "BST · 插入与结构",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "qsmaorshgyypzl6s",
        "blocks": [
          0,
          1,
          2,
          3
        ],
        "functions": [
          "bst_insert"
        ]
      }
    ],
    "description": "用初始键按输入顺序建BST树，重复键不建立新节点。依次执行插入，输出成功标记，最后输出实际树结构。修改题用先序序列和空指针#保留形状；AVL还输出每个节点高度，不能只用有序集合替代。",
    "input": "n\nn个初始键\nq\nq个待操作键。",
    "output": "第一行q个0/1。第二行先序结构；节点为key，空指针为#。",
    "constraints": [
      "0≤n,q≤100",
      "-10000≤key≤10000"
    ],
    "samples": [
      {
        "stdin": "0\n\n3\n5 5 2\n",
        "expected": "1 0 1\n5 2 # # #",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "7\n4 2 6 1 3 5 7\n3\n4 9 2\n",
        "expected": "0 1 0\n4 2 1 # # 3 # # 6 5 # # 7 # 9 # #",
        "explanation": "边界样例：一般平衡树"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个初始键；q；q个待操作键。\n// 输出：第一行q个0/1。第二行先序结构；节点为key，空指针为#。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\ntypedef struct bstNode {\n    keytype key;\n    bstNode *lc, *rc;\n    bstNode():lc(NULL),rc(NULL) {\n    }\n} *bstTree;\n //在二叉查找树t中查找键值为k的结点,查找结果作为返回值\nbstNode *bst_search(bstTree t,keytype k) {\n    if(t==NULL) return NULL;\n    if(k < t->key) return bst_search(t->lc,k); //转入左子树查找\n    else if(k > t->key) return bst_search(t->rc,k); //转入右子树查找\n    else return t; //查找成功\n}\n\n //在二叉查找树t中插入一个键值为k的结点。插入成功,返回true,否则返回false\nbool bst_insert(bstTree &t,keytype k) {\n    if(t==NULL) {\n        //当前结点为空,创建结点,并指定键值为k\n        t=new bstNode,t->key=k;\n        return true;\n    }\n    if(k < t->key) return bst_insert(t->lc,k); //插入t的左子树\n    else if(k > t->key) return bst_insert(t->rc,k); //插入t的右子树\n    //如果t中已存在键值为k的结点,插入失败\n    return false;\n}\n //删除二叉查找树t中键值为k的结点。删除成功,返回true,否则返回false\nbool bst_delete(bstTree &t,keytype k) {\n    bstNode *tmp;\n    if(t==NULL) return false; //情形(1):不存在键值为k的结点,删除失败\n    else if(k < t->key) return bst_delete(t->lc,k); //进入左子树\n    else if(k > t->key) return bst_delete(t->rc,k); //进入右子树\n    else { //t的键值为k,删除结点t(算法中的(1))\n        if(t->lc==NULL && t->rc==NULL) { //情形(2)\n            delete t,t=NULL;\n        }\n        else if(t->rc==NULL) {\n            tmp=t; //仅有左孩子，直接以整棵左子树取代当前结点\n            t=t->lc;\n            delete tmp;\n        }\n        else {\n            tmp=t->rc; //情形(4)\n            while(tmp->lc) tmp=tmp->lc;\n            //获取t的直接后继tmp(右子树的最左孩子,算法中的(2))\n            keytype k1=tmp->key;\n            bst_delete(t,k1); //删除tmp\n            t->key=k1; //用tmp的键值取代t的键值\n        }\n        return true;\n    }\n}\nvoid show(bstTree t){if(!t){cout<<\"# \";return;}cout<<t->key<<\" \";show(t->lc);show(t->rc);}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;bstTree t=NULL;for(int i=0;i<n;i++){int k;cin>>k;bst_insert(t,k);}int q;cin>>q;while(q--){int k;cin>>k;cout<<bst_insert(t,k)<<\" \";}cout<<\"\\n\";show(t);\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空树与重复键",
        "stdin": "0\n\n3\n5 5 2\n",
        "expected": "1 0 1\n5 2 # # #"
      },
      {
        "name": "一般平衡树",
        "stdin": "7\n4 2 6 1 3 5 7\n3\n4 9 2\n",
        "expected": "0 1 0\n4 2 1 # # 3 # # 6 5 # # 7 # 9 # #"
      },
      {
        "name": "仅左孩子含右分支",
        "stdin": "3\n10 5 7\n3\n10 7 20\n",
        "expected": "0 0 1\n10 5 # 7 # # 20 # #"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "s-bst-delete",
    "title": "BST · 删除与结构",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "qsmaorshgyypzl6s",
        "blocks": [
          0,
          1,
          2,
          3
        ],
        "functions": [
          "bst_delete"
        ]
      }
    ],
    "description": "用初始键按输入顺序建BST树，重复键不建立新节点。依次执行删除，输出成功标记，最后输出实际树结构。修改题用先序序列和空指针#保留形状；AVL还输出每个节点高度，不能只用有序集合替代。",
    "input": "n\nn个初始键\nq\nq个待操作键。",
    "output": "第一行q个0/1。第二行先序结构；节点为key，空指针为#。",
    "constraints": [
      "0≤n,q≤100",
      "-10000≤key≤10000"
    ],
    "samples": [
      {
        "stdin": "0\n\n3\n5 5 2\n",
        "expected": "0 0 0\n#",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "7\n4 2 6 1 3 5 7\n3\n4 9 2\n",
        "expected": "1 0 1\n5 3 1 # # # 6 # 7 # #",
        "explanation": "边界样例：一般平衡树"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个初始键；q；q个待操作键。\n// 输出：第一行q个0/1。第二行先序结构；节点为key，空指针为#。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\ntypedef struct bstNode {\n    keytype key;\n    bstNode *lc, *rc;\n    bstNode():lc(NULL),rc(NULL) {\n    }\n} *bstTree;\n //在二叉查找树t中查找键值为k的结点,查找结果作为返回值\nbstNode *bst_search(bstTree t,keytype k) {\n    if(t==NULL) return NULL;\n    if(k < t->key) return bst_search(t->lc,k); //转入左子树查找\n    else if(k > t->key) return bst_search(t->rc,k); //转入右子树查找\n    else return t; //查找成功\n}\n\n //在二叉查找树t中插入一个键值为k的结点。插入成功,返回true,否则返回false\nbool bst_insert(bstTree &t,keytype k) {\n    if(t==NULL) {\n        //当前结点为空,创建结点,并指定键值为k\n        t=new bstNode,t->key=k;\n        return true;\n    }\n    if(k < t->key) return bst_insert(t->lc,k); //插入t的左子树\n    else if(k > t->key) return bst_insert(t->rc,k); //插入t的右子树\n    //如果t中已存在键值为k的结点,插入失败\n    return false;\n}\n //删除二叉查找树t中键值为k的结点。删除成功,返回true,否则返回false\nbool bst_delete(bstTree &t,keytype k) {\n    bstNode *tmp;\n    if(t==NULL) return false; //情形(1):不存在键值为k的结点,删除失败\n    else if(k < t->key) return bst_delete(t->lc,k); //进入左子树\n    else if(k > t->key) return bst_delete(t->rc,k); //进入右子树\n    else { //t的键值为k,删除结点t(算法中的(1))\n        if(t->lc==NULL && t->rc==NULL) { //情形(2)\n            delete t,t=NULL;\n        }\n        else if(t->rc==NULL) {\n            tmp=t; //仅有左孩子，直接以整棵左子树取代当前结点\n            t=t->lc;\n            delete tmp;\n        }\n        else {\n            tmp=t->rc; //情形(4)\n            while(tmp->lc) tmp=tmp->lc;\n            //获取t的直接后继tmp(右子树的最左孩子,算法中的(2))\n            keytype k1=tmp->key;\n            bst_delete(t,k1); //删除tmp\n            t->key=k1; //用tmp的键值取代t的键值\n        }\n        return true;\n    }\n}\nvoid show(bstTree t){if(!t){cout<<\"# \";return;}cout<<t->key<<\" \";show(t->lc);show(t->rc);}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;bstTree t=NULL;for(int i=0;i<n;i++){int k;cin>>k;bst_insert(t,k);}int q;cin>>q;while(q--){int k;cin>>k;cout<<bst_delete(t,k)<<\" \";}cout<<\"\\n\";show(t);\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空树与重复键",
        "stdin": "0\n\n3\n5 5 2\n",
        "expected": "0 0 0\n#"
      },
      {
        "name": "一般平衡树",
        "stdin": "7\n4 2 6 1 3 5 7\n3\n4 9 2\n",
        "expected": "1 0 1\n5 3 1 # # # 6 # 7 # #"
      },
      {
        "name": "仅左孩子含右分支",
        "stdin": "3\n10 5 7\n3\n10 7 20\n",
        "expected": "1 1 0\n5 # #"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "s-avl-insert",
    "title": "AVL · 插入与结构",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "qsmaorshgyypzl6s",
        "blocks": [
          4,
          5,
          6,
          7,
          8,
          9,
          10
        ],
        "functions": [
          "avl_insert"
        ]
      }
    ],
    "description": "用初始键按输入顺序建AVL树，重复键不建立新节点。依次执行插入，输出成功标记，最后输出实际树结构。修改题用先序序列和空指针#保留形状；AVL还输出每个节点高度，不能只用有序集合替代。",
    "input": "n\nn个初始键\nq\nq个待操作键。",
    "output": "第一行q个0/1。第二行先序结构；节点为key:height，空指针为#。",
    "constraints": [
      "0≤n,q≤100",
      "-10000≤key≤10000"
    ],
    "samples": [
      {
        "stdin": "0\n\n3\n5 5 2\n",
        "expected": "1 0 1\n5:2 2:1 # # #",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "7\n4 2 6 1 3 5 7\n3\n4 9 2\n",
        "expected": "0 1 0\n4:4 2:2 1:1 # # 3:1 # # 6:3 5:1 # # 7:2 # 9:1 # #",
        "explanation": "边界样例：一般平衡树"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个初始键；q；q个待操作键。\n// 输出：第一行q个0/1。第二行先序结构；节点为key:height，空指针为#。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\ntypedef struct avlNode{\n    keytype key;\n    int h;              //以当前结点为根结点的AVL树的高度\n    avlNode *lc, *rc;\n    avlNode():h(1),lc(NULL),rc(NULL)\n    {\n    }\n} *avlTree;\n//获取子树高度\nint avl_height(avlTree avl){\n    return avl == NULL ? 0 : avl->h;\n}\n//AVL树的LL旋转操作,返回旋转后子树的根结点\navlTree LL(avlTree A){\n    avlTree B=A->lc;\n    A->lc=B->rc,B->rc=A;\n    A->h=max(avl_height(A->lc),avl_height(A->rc))+1; //更新结点A的高度\n    B->h=max(avl_height(B->lc),avl_height(B->rc))+1; //更新结点B的高度\n    return B; //返回旋转后子树的根结点\n}\n//AVL树的RR旋转操作,返回旋转后子树的根结点\navlTree RR(avlTree A){\n    avlTree B=A->rc;\n    A->rc=B->lc,B->lc=A;\n    A->h=max(avl_height(A->lc),avl_height(A->rc))+1; //更新结点A的高度\n    B->h=max(avl_height(B->lc),avl_height(B->rc))+1; //更新结点B的高度\n    return B;\n}\n//AVL树的LR旋转操作,返回旋转后子树的根结点\navlTree LR(avlTree A){\n    A->lc=RR(A->lc);     //RR旋转\n    return LL(A);        //LL旋转\n}\n//AVL树的RL旋转操作,返回旋转后子树的根结点\navlTree RL(avlTree A){\n    A->rc=LL(A->rc);     //LL旋转\n    return RR(A);        //RR旋转\n}\n//向AVL树t中插入结点,结点的键值为k,插入成功,返回true,否则,返回false(t中已存在键值为k的结点)\nbool avl_insert(avlTree &t,keytype k){\n    if(t==NULL){\n        t=new avlNode,t->key=k;\n        return true;\n    }\n    if(k<t->key){\n        if(!avl_insert(t->lc,k)) return false;\n        if(avl_height(t->lc)-avl_height(t->rc)>1){\n            //不平衡,A为t,B为t->lc,因为此处属于t的左子树回退部分\n            if(t->lc->key>k) t=LL(t);\n            else t=LR(t);\n        }\n    }\n    else if(k>t->key){\n        if(!avl_insert(t->rc,k)) return false;\n        if(avl_height(t->rc)-avl_height(t->lc)>1){\n            //不平衡,A为t,B为t->rc,因为此处属于t的右子树回退部分\n            if(t->rc->key<k) t=RR(t);\n            else t=RL(t);\n        }\n    }\n    else\n        return false;\n    t->h=max(avl_height(t->lc),avl_height(t->rc))+1;\n    return true;\n}\n//删除AVL树t中键值为k的结点,删除成功返回true,否则返回false\nbool avl_delete(avlTree &t,keytype k){\n    if(t==NULL) return false;\n    bool ret=false;\n    if(k<t->key){ //删除结点在t的左子树\n        ret=avl_delete(t->lc,k);\n    }\n    else if(k>t->key){ //删除结点在t的右子树\n        ret=avl_delete(t->rc,k);\n    }\n    else{ //结点t的键值等于k,删除结点t\n        ret=true;\n        if(t->lc==NULL || t->rc==NULL){ //t最多只有一个孩子\n            avlTree tmp=t;\n            t=(t->lc!=NULL)?t->lc:t->rc;\n            delete tmp;\n        }\n        else{ //t有左右两个孩子\n            avlNode *tmp=t->rc;\n            while(tmp->lc) tmp=tmp->lc; //寻找t的中根序列的直接后继\n            keytype k1=tmp->key;\n            t->key=k1; //用后继结点的键值取代t的键值\n            avl_delete(t->rc,k1); //删除右子树中的后继结点\n        }\n    }\n    if(!ret) return false;\n    if(t==NULL) return true;\n    //更新结点t的高度\n    t->h=max(avl_height(t->lc),avl_height(t->rc))+1;\n    //检查t是否左侧失衡\n    if(avl_height(t->lc)-avl_height(t->rc)>1){\n        avlTree B=t->lc;\n        if(avl_height(B->lc)>=avl_height(B->rc))\n            t=LL(t); //LL旋转\n        else\n            t=LR(t); //LR旋转\n    }\n    //检查t是否右侧失衡\n    else if(avl_height(t->rc)-avl_height(t->lc)>1){\n        avlTree B=t->rc;\n        if(avl_height(B->rc)>=avl_height(B->lc))\n            t=RR(t); //RR旋转\n        else\n            t=RL(t); //RL旋转\n    }\n    return true;\n}\n\nvoid show(avlTree t){if(!t){cout<<\"# \";return;}cout<<t->key<<\":\"<<t->h<<\" \";show(t->lc);show(t->rc);}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;avlTree t=NULL;for(int i=0;i<n;i++){int k;cin>>k;avl_insert(t,k);}int q;cin>>q;while(q--){int k;cin>>k;cout<<avl_insert(t,k)<<\" \";}cout<<\"\\n\";show(t);\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空树与重复键",
        "stdin": "0\n\n3\n5 5 2\n",
        "expected": "1 0 1\n5:2 2:1 # # #"
      },
      {
        "name": "一般平衡树",
        "stdin": "7\n4 2 6 1 3 5 7\n3\n4 9 2\n",
        "expected": "0 1 0\n4:4 2:2 1:1 # # 3:1 # # 6:3 5:1 # # 7:2 # 9:1 # #"
      },
      {
        "name": "仅左孩子含右分支",
        "stdin": "3\n10 5 7\n3\n10 7 20\n",
        "expected": "0 0 1\n7:3 5:1 # # 10:2 # 20:1 # #"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "s-avl-delete",
    "title": "AVL · 删除与结构",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "qsmaorshgyypzl6s",
        "blocks": [
          4,
          5,
          6,
          7,
          8,
          9,
          10
        ],
        "functions": [
          "avl_delete"
        ]
      }
    ],
    "description": "用初始键按输入顺序建AVL树，重复键不建立新节点。依次执行删除，输出成功标记，最后输出实际树结构。修改题用先序序列和空指针#保留形状；AVL还输出每个节点高度，不能只用有序集合替代。",
    "input": "n\nn个初始键\nq\nq个待操作键。",
    "output": "第一行q个0/1。第二行先序结构；节点为key:height，空指针为#。",
    "constraints": [
      "0≤n,q≤100",
      "-10000≤key≤10000"
    ],
    "samples": [
      {
        "stdin": "0\n\n3\n5 5 2\n",
        "expected": "0 0 0\n#",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "7\n4 2 6 1 3 5 7\n3\n4 9 2\n",
        "expected": "1 0 1\n5:3 3:2 1:1 # # # 6:2 # 7:1 # #",
        "explanation": "边界样例：一般平衡树"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个初始键；q；q个待操作键。\n// 输出：第一行q个0/1。第二行先序结构；节点为key:height，空指针为#。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\ntypedef struct avlNode{\n    keytype key;\n    int h;              //以当前结点为根结点的AVL树的高度\n    avlNode *lc, *rc;\n    avlNode():h(1),lc(NULL),rc(NULL)\n    {\n    }\n} *avlTree;\n//获取子树高度\nint avl_height(avlTree avl){\n    return avl == NULL ? 0 : avl->h;\n}\n//AVL树的LL旋转操作,返回旋转后子树的根结点\navlTree LL(avlTree A){\n    avlTree B=A->lc;\n    A->lc=B->rc,B->rc=A;\n    A->h=max(avl_height(A->lc),avl_height(A->rc))+1; //更新结点A的高度\n    B->h=max(avl_height(B->lc),avl_height(B->rc))+1; //更新结点B的高度\n    return B; //返回旋转后子树的根结点\n}\n//AVL树的RR旋转操作,返回旋转后子树的根结点\navlTree RR(avlTree A){\n    avlTree B=A->rc;\n    A->rc=B->lc,B->lc=A;\n    A->h=max(avl_height(A->lc),avl_height(A->rc))+1; //更新结点A的高度\n    B->h=max(avl_height(B->lc),avl_height(B->rc))+1; //更新结点B的高度\n    return B;\n}\n//AVL树的LR旋转操作,返回旋转后子树的根结点\navlTree LR(avlTree A){\n    A->lc=RR(A->lc);     //RR旋转\n    return LL(A);        //LL旋转\n}\n//AVL树的RL旋转操作,返回旋转后子树的根结点\navlTree RL(avlTree A){\n    A->rc=LL(A->rc);     //LL旋转\n    return RR(A);        //RR旋转\n}\n//向AVL树t中插入结点,结点的键值为k,插入成功,返回true,否则,返回false(t中已存在键值为k的结点)\nbool avl_insert(avlTree &t,keytype k){\n    if(t==NULL){\n        t=new avlNode,t->key=k;\n        return true;\n    }\n    if(k<t->key){\n        if(!avl_insert(t->lc,k)) return false;\n        if(avl_height(t->lc)-avl_height(t->rc)>1){\n            //不平衡,A为t,B为t->lc,因为此处属于t的左子树回退部分\n            if(t->lc->key>k) t=LL(t);\n            else t=LR(t);\n        }\n    }\n    else if(k>t->key){\n        if(!avl_insert(t->rc,k)) return false;\n        if(avl_height(t->rc)-avl_height(t->lc)>1){\n            //不平衡,A为t,B为t->rc,因为此处属于t的右子树回退部分\n            if(t->rc->key<k) t=RR(t);\n            else t=RL(t);\n        }\n    }\n    else\n        return false;\n    t->h=max(avl_height(t->lc),avl_height(t->rc))+1;\n    return true;\n}\n//删除AVL树t中键值为k的结点,删除成功返回true,否则返回false\nbool avl_delete(avlTree &t,keytype k){\n    if(t==NULL) return false;\n    bool ret=false;\n    if(k<t->key){ //删除结点在t的左子树\n        ret=avl_delete(t->lc,k);\n    }\n    else if(k>t->key){ //删除结点在t的右子树\n        ret=avl_delete(t->rc,k);\n    }\n    else{ //结点t的键值等于k,删除结点t\n        ret=true;\n        if(t->lc==NULL || t->rc==NULL){ //t最多只有一个孩子\n            avlTree tmp=t;\n            t=(t->lc!=NULL)?t->lc:t->rc;\n            delete tmp;\n        }\n        else{ //t有左右两个孩子\n            avlNode *tmp=t->rc;\n            while(tmp->lc) tmp=tmp->lc; //寻找t的中根序列的直接后继\n            keytype k1=tmp->key;\n            t->key=k1; //用后继结点的键值取代t的键值\n            avl_delete(t->rc,k1); //删除右子树中的后继结点\n        }\n    }\n    if(!ret) return false;\n    if(t==NULL) return true;\n    //更新结点t的高度\n    t->h=max(avl_height(t->lc),avl_height(t->rc))+1;\n    //检查t是否左侧失衡\n    if(avl_height(t->lc)-avl_height(t->rc)>1){\n        avlTree B=t->lc;\n        if(avl_height(B->lc)>=avl_height(B->rc))\n            t=LL(t); //LL旋转\n        else\n            t=LR(t); //LR旋转\n    }\n    //检查t是否右侧失衡\n    else if(avl_height(t->rc)-avl_height(t->lc)>1){\n        avlTree B=t->rc;\n        if(avl_height(B->rc)>=avl_height(B->lc))\n            t=RR(t); //RR旋转\n        else\n            t=RL(t); //RL旋转\n    }\n    return true;\n}\n\nvoid show(avlTree t){if(!t){cout<<\"# \";return;}cout<<t->key<<\":\"<<t->h<<\" \";show(t->lc);show(t->rc);}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;avlTree t=NULL;for(int i=0;i<n;i++){int k;cin>>k;avl_insert(t,k);}int q;cin>>q;while(q--){int k;cin>>k;cout<<avl_delete(t,k)<<\" \";}cout<<\"\\n\";show(t);\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空树与重复键",
        "stdin": "0\n\n3\n5 5 2\n",
        "expected": "0 0 0\n#"
      },
      {
        "name": "一般平衡树",
        "stdin": "7\n4 2 6 1 3 5 7\n3\n4 9 2\n",
        "expected": "1 0 1\n5:3 3:2 1:1 # # # 6:2 # 7:1 # #"
      },
      {
        "name": "仅左孩子含右分支",
        "stdin": "3\n10 5 7\n3\n10 7 20\n",
        "expected": "1 1 0\n5:1 # #"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "s-avl-rotate-ll",
    "title": "AVL · LL 旋转",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "qsmaorshgyypzl6s",
        "blocks": [
          4,
          5,
          6,
          7,
          8
        ],
        "functions": [
          "LL"
        ]
      }
    ],
    "description": "先按普通BST插入顺序构造子树（此阶段不自动平衡），保证根具有LL型旋转所需孩子。仅对根执行一次LL旋转，重新计算受影响节点高度并输出完整结构。",
    "input": "n\nn个互异键。",
    "output": "先序节点key:height，空指针#。",
    "constraints": [
      "3≤n≤30",
      "-10000≤key≤10000",
      "输入保证相应旋转需要的孩子存在"
    ],
    "samples": [
      {
        "stdin": "3\n3 2 1\n",
        "expected": "2:2 1:1 # # 3:1 # #",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "4\n5 3 2 4\n",
        "expected": "3:3 2:1 # # 5:2 4:1 # # #",
        "explanation": "边界样例：保留中间子树"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个互异键。\n// 输出：先序节点key:height，空指针#。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\ntypedef struct avlNode{\n    keytype key;\n    int h;              //以当前结点为根结点的AVL树的高度\n    avlNode *lc, *rc;\n    avlNode():h(1),lc(NULL),rc(NULL)\n    {\n    }\n} *avlTree;\n//获取子树高度\nint avl_height(avlTree avl){\n    return avl == NULL ? 0 : avl->h;\n}\n//AVL树的LL旋转操作,返回旋转后子树的根结点\navlTree LL(avlTree A){\n    avlTree B=A->lc;\n    A->lc=B->rc,B->rc=A;\n    A->h=max(avl_height(A->lc),avl_height(A->rc))+1; //更新结点A的高度\n    B->h=max(avl_height(B->lc),avl_height(B->rc))+1; //更新结点B的高度\n    return B; //返回旋转后子树的根结点\n}\n//AVL树的RR旋转操作,返回旋转后子树的根结点\navlTree RR(avlTree A){\n    avlTree B=A->rc;\n    A->rc=B->lc,B->lc=A;\n    A->h=max(avl_height(A->lc),avl_height(A->rc))+1; //更新结点A的高度\n    B->h=max(avl_height(B->lc),avl_height(B->rc))+1; //更新结点B的高度\n    return B;\n}\n//AVL树的LR旋转操作,返回旋转后子树的根结点\navlTree LR(avlTree A){\n    A->lc=RR(A->lc);     //RR旋转\n    return LL(A);        //LL旋转\n}\n//AVL树的RL旋转操作,返回旋转后子树的根结点\navlTree RL(avlTree A){\n    A->rc=LL(A->rc);     //LL旋转\n    return RR(A);        //RR旋转\n}\nvoid show(avlTree t){if(!t){cout<<\"# \";return;}cout<<t->key<<\":\"<<t->h<<\" \";show(t->lc);show(t->rc);}\nvoid raw_insert(avlTree&t,int k){if(!t){t=new avlNode;t->key=k;return;}if(k<t->key)raw_insert(t->lc,k);else raw_insert(t->rc,k);t->h=max(avl_height(t->lc),avl_height(t->rc))+1;}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;avlTree t=NULL;while(n--){int k;cin>>k;raw_insert(t,k);}t=LL(t);show(t);\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "最小三节点",
        "stdin": "3\n3 2 1\n",
        "expected": "2:2 1:1 # # 3:1 # #"
      },
      {
        "name": "保留中间子树",
        "stdin": "4\n5 3 2 4\n",
        "expected": "3:3 2:1 # # 5:2 4:1 # # #"
      },
      {
        "name": "保留两侧子树",
        "stdin": "5\n8 5 3 6 10\n",
        "expected": "5:3 3:1 # # 8:2 6:1 # # 10:1 # #"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "s-avl-rotate-rr",
    "title": "AVL · RR 旋转",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "qsmaorshgyypzl6s",
        "blocks": [
          4,
          5,
          6,
          7,
          8
        ],
        "functions": [
          "RR"
        ]
      }
    ],
    "description": "先按普通BST插入顺序构造子树（此阶段不自动平衡），保证根具有RR型旋转所需孩子。仅对根执行一次RR旋转，重新计算受影响节点高度并输出完整结构。",
    "input": "n\nn个互异键。",
    "output": "先序节点key:height，空指针#。",
    "constraints": [
      "3≤n≤30",
      "-10000≤key≤10000",
      "输入保证相应旋转需要的孩子存在"
    ],
    "samples": [
      {
        "stdin": "3\n1 2 3\n",
        "expected": "2:2 1:1 # # 3:1 # #",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "5\n2 1 4 3 5\n",
        "expected": "4:3 2:2 1:1 # # 3:1 # # 5:1 # #",
        "explanation": "边界样例：保留中间子树"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个互异键。\n// 输出：先序节点key:height，空指针#。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\ntypedef struct avlNode{\n    keytype key;\n    int h;              //以当前结点为根结点的AVL树的高度\n    avlNode *lc, *rc;\n    avlNode():h(1),lc(NULL),rc(NULL)\n    {\n    }\n} *avlTree;\n//获取子树高度\nint avl_height(avlTree avl){\n    return avl == NULL ? 0 : avl->h;\n}\n//AVL树的LL旋转操作,返回旋转后子树的根结点\navlTree LL(avlTree A){\n    avlTree B=A->lc;\n    A->lc=B->rc,B->rc=A;\n    A->h=max(avl_height(A->lc),avl_height(A->rc))+1; //更新结点A的高度\n    B->h=max(avl_height(B->lc),avl_height(B->rc))+1; //更新结点B的高度\n    return B; //返回旋转后子树的根结点\n}\n//AVL树的RR旋转操作,返回旋转后子树的根结点\navlTree RR(avlTree A){\n    avlTree B=A->rc;\n    A->rc=B->lc,B->lc=A;\n    A->h=max(avl_height(A->lc),avl_height(A->rc))+1; //更新结点A的高度\n    B->h=max(avl_height(B->lc),avl_height(B->rc))+1; //更新结点B的高度\n    return B;\n}\n//AVL树的LR旋转操作,返回旋转后子树的根结点\navlTree LR(avlTree A){\n    A->lc=RR(A->lc);     //RR旋转\n    return LL(A);        //LL旋转\n}\n//AVL树的RL旋转操作,返回旋转后子树的根结点\navlTree RL(avlTree A){\n    A->rc=LL(A->rc);     //LL旋转\n    return RR(A);        //RR旋转\n}\nvoid show(avlTree t){if(!t){cout<<\"# \";return;}cout<<t->key<<\":\"<<t->h<<\" \";show(t->lc);show(t->rc);}\nvoid raw_insert(avlTree&t,int k){if(!t){t=new avlNode;t->key=k;return;}if(k<t->key)raw_insert(t->lc,k);else raw_insert(t->rc,k);t->h=max(avl_height(t->lc),avl_height(t->rc))+1;}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;avlTree t=NULL;while(n--){int k;cin>>k;raw_insert(t,k);}t=RR(t);show(t);\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "最小三节点",
        "stdin": "3\n1 2 3\n",
        "expected": "2:2 1:1 # # 3:1 # #"
      },
      {
        "name": "保留中间子树",
        "stdin": "5\n2 1 4 3 5\n",
        "expected": "4:3 2:2 1:1 # # 3:1 # # 5:1 # #"
      },
      {
        "name": "保留两侧子树",
        "stdin": "5\n3 1 6 5 8\n",
        "expected": "6:3 3:2 1:1 # # 5:1 # # 8:1 # #"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "s-avl-rotate-lr",
    "title": "AVL · LR 旋转",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "qsmaorshgyypzl6s",
        "blocks": [
          4,
          5,
          6,
          7,
          8
        ],
        "functions": [
          "LR"
        ]
      }
    ],
    "description": "先按普通BST插入顺序构造子树（此阶段不自动平衡），保证根具有LR型旋转所需孩子。仅对根执行一次LR旋转，重新计算受影响节点高度并输出完整结构。",
    "input": "n\nn个互异键。",
    "output": "先序节点key:height，空指针#。",
    "constraints": [
      "3≤n≤30",
      "-10000≤key≤10000",
      "输入保证相应旋转需要的孩子存在"
    ],
    "samples": [
      {
        "stdin": "3\n3 1 2\n",
        "expected": "2:2 1:1 # # 3:1 # #",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "7\n6 2 8 1 4 3 5\n",
        "expected": "4:3 2:2 1:1 # # 3:1 # # 6:2 5:1 # # 8:1 # #",
        "explanation": "边界样例：保留中间子树"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个互异键。\n// 输出：先序节点key:height，空指针#。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\ntypedef struct avlNode{\n    keytype key;\n    int h;              //以当前结点为根结点的AVL树的高度\n    avlNode *lc, *rc;\n    avlNode():h(1),lc(NULL),rc(NULL)\n    {\n    }\n} *avlTree;\n//获取子树高度\nint avl_height(avlTree avl){\n    return avl == NULL ? 0 : avl->h;\n}\n//AVL树的LL旋转操作,返回旋转后子树的根结点\navlTree LL(avlTree A){\n    avlTree B=A->lc;\n    A->lc=B->rc,B->rc=A;\n    A->h=max(avl_height(A->lc),avl_height(A->rc))+1; //更新结点A的高度\n    B->h=max(avl_height(B->lc),avl_height(B->rc))+1; //更新结点B的高度\n    return B; //返回旋转后子树的根结点\n}\n//AVL树的RR旋转操作,返回旋转后子树的根结点\navlTree RR(avlTree A){\n    avlTree B=A->rc;\n    A->rc=B->lc,B->lc=A;\n    A->h=max(avl_height(A->lc),avl_height(A->rc))+1; //更新结点A的高度\n    B->h=max(avl_height(B->lc),avl_height(B->rc))+1; //更新结点B的高度\n    return B;\n}\n//AVL树的LR旋转操作,返回旋转后子树的根结点\navlTree LR(avlTree A){\n    A->lc=RR(A->lc);     //RR旋转\n    return LL(A);        //LL旋转\n}\n//AVL树的RL旋转操作,返回旋转后子树的根结点\navlTree RL(avlTree A){\n    A->rc=LL(A->rc);     //LL旋转\n    return RR(A);        //RR旋转\n}\nvoid show(avlTree t){if(!t){cout<<\"# \";return;}cout<<t->key<<\":\"<<t->h<<\" \";show(t->lc);show(t->rc);}\nvoid raw_insert(avlTree&t,int k){if(!t){t=new avlNode;t->key=k;return;}if(k<t->key)raw_insert(t->lc,k);else raw_insert(t->rc,k);t->h=max(avl_height(t->lc),avl_height(t->rc))+1;}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;avlTree t=NULL;while(n--){int k;cin>>k;raw_insert(t,k);}t=LR(t);show(t);\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "最小三节点",
        "stdin": "3\n3 1 2\n",
        "expected": "2:2 1:1 # # 3:1 # #"
      },
      {
        "name": "保留中间子树",
        "stdin": "7\n6 2 8 1 4 3 5\n",
        "expected": "4:3 2:2 1:1 # # 3:1 # # 6:2 5:1 # # 8:1 # #"
      },
      {
        "name": "保留两侧子树",
        "stdin": "7\n8 3 10 1 6 4 7\n",
        "expected": "6:3 3:2 1:1 # # 4:1 # # 8:2 7:1 # # 10:1 # #"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "s-avl-rotate-rl",
    "title": "AVL · RL 旋转",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "qsmaorshgyypzl6s",
        "blocks": [
          4,
          5,
          6,
          7,
          8
        ],
        "functions": [
          "RL"
        ]
      }
    ],
    "description": "先按普通BST插入顺序构造子树（此阶段不自动平衡），保证根具有RL型旋转所需孩子。仅对根执行一次RL旋转，重新计算受影响节点高度并输出完整结构。",
    "input": "n\nn个互异键。",
    "output": "先序节点key:height，空指针#。",
    "constraints": [
      "3≤n≤30",
      "-10000≤key≤10000",
      "输入保证相应旋转需要的孩子存在"
    ],
    "samples": [
      {
        "stdin": "3\n1 3 2\n",
        "expected": "2:2 1:1 # # 3:1 # #",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "7\n3 1 7 5 8 4 6\n",
        "expected": "5:3 3:2 1:1 # # 4:1 # # 7:2 6:1 # # 8:1 # #",
        "explanation": "边界样例：保留中间子树"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个互异键。\n// 输出：先序节点key:height，空指针#。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\ntypedef struct avlNode{\n    keytype key;\n    int h;              //以当前结点为根结点的AVL树的高度\n    avlNode *lc, *rc;\n    avlNode():h(1),lc(NULL),rc(NULL)\n    {\n    }\n} *avlTree;\n//获取子树高度\nint avl_height(avlTree avl){\n    return avl == NULL ? 0 : avl->h;\n}\n//AVL树的LL旋转操作,返回旋转后子树的根结点\navlTree LL(avlTree A){\n    avlTree B=A->lc;\n    A->lc=B->rc,B->rc=A;\n    A->h=max(avl_height(A->lc),avl_height(A->rc))+1; //更新结点A的高度\n    B->h=max(avl_height(B->lc),avl_height(B->rc))+1; //更新结点B的高度\n    return B; //返回旋转后子树的根结点\n}\n//AVL树的RR旋转操作,返回旋转后子树的根结点\navlTree RR(avlTree A){\n    avlTree B=A->rc;\n    A->rc=B->lc,B->lc=A;\n    A->h=max(avl_height(A->lc),avl_height(A->rc))+1; //更新结点A的高度\n    B->h=max(avl_height(B->lc),avl_height(B->rc))+1; //更新结点B的高度\n    return B;\n}\n//AVL树的LR旋转操作,返回旋转后子树的根结点\navlTree LR(avlTree A){\n    A->lc=RR(A->lc);     //RR旋转\n    return LL(A);        //LL旋转\n}\n//AVL树的RL旋转操作,返回旋转后子树的根结点\navlTree RL(avlTree A){\n    A->rc=LL(A->rc);     //LL旋转\n    return RR(A);        //RR旋转\n}\nvoid show(avlTree t){if(!t){cout<<\"# \";return;}cout<<t->key<<\":\"<<t->h<<\" \";show(t->lc);show(t->rc);}\nvoid raw_insert(avlTree&t,int k){if(!t){t=new avlNode;t->key=k;return;}if(k<t->key)raw_insert(t->lc,k);else raw_insert(t->rc,k);t->h=max(avl_height(t->lc),avl_height(t->rc))+1;}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;avlTree t=NULL;while(n--){int k;cin>>k;raw_insert(t,k);}t=RL(t);show(t);\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "最小三节点",
        "stdin": "3\n1 3 2\n",
        "expected": "2:2 1:1 # # 3:1 # #"
      },
      {
        "name": "保留中间子树",
        "stdin": "7\n3 1 7 5 8 4 6\n",
        "expected": "5:3 3:2 1:1 # # 4:1 # # 7:2 6:1 # # 8:1 # #"
      },
      {
        "name": "保留两侧子树",
        "stdin": "7\n4 2 9 7 10 6 8\n",
        "expected": "7:3 4:2 2:1 # # 6:1 # # 9:2 8:1 # # 10:1 # #"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "s-splay-stretch",
    "title": "Splay · 自顶向下伸展",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "it1niv51webln15h",
        "blocks": [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        "functions": [
          "splay"
        ]
      }
    ],
    "description": "按输入顺序使用伸展树插入初始键，随后执行指定操作。每次访问或操作后都观察根：即使目标不存在，原码仍会伸展最后访问的附近节点。",
    "input": "n\nn个初始键\nq\nq个操作键。",
    "output": "每次一行：调整后的根（空树EMPTY）。最后一行输出先序key/#结构。",
    "constraints": [
      "0≤n,q≤100",
      "-10000≤key≤10000"
    ],
    "samples": [
      {
        "stdin": "0\n\n3\n5 5 2\n",
        "expected": "EMPTY\nEMPTY\nEMPTY\n#",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "7\n4 2 6 1 3 5 7\n3\n4 9 2\n",
        "expected": "4\n7\n2\n2 1 # # 6 3 # 4 # 5 # # 7 # #",
        "explanation": "边界样例：成功和失败访问"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个初始键；q；q个操作键。\n// 输出：每次一行：调整后的根（空树EMPTY）。最后一行输出先序key/#结构。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\ntypedef struct stNode{\n    keytype key;\n    stNode *lc,*rc; //左孩子指针和右孩子指针\n    stNode():lc(NULL),rc(NULL){\n    }\n} *splayTree;\n\nsplayTree LL(splayTree A){\n    splayTree B=A->lc; //找到A的左孩子B\n    A->lc=B->rc; //将B的右子树变成A的左子树\n    B->rc=A; //将A变成B的右孩子\n    return B; //返回旋转后新的根结点B\n}\n\nsplayTree RR(splayTree A){\n    splayTree B=A->rc; //找到A的右孩子B\n    A->rc=B->lc; //将B的左子树变成A的右子树\n    B->lc=A; //将A变成B的左孩子\n    return B; //返回旋转后新的根结点B\n}\n\n\n //在伸展树t中,对键值k进行自顶向下伸展操作\nvoid splay(splayTree &t,keytype k){\n    splayTree header=new stNode,LMax=NULL,RMin=NULL; //HL为header->lc,HR为header->rc\n    if(t==NULL){\n        delete header;\n        return;\n    }\n    while(1){\n        if(t->key>k){ //进入左分支\n            if(t->lc==NULL) break; //情形(2.2.1)\n            if(t->lc->key>k) t=LL(t);\n            if(t->lc==NULL) break; //情形(2.2.2)\n            //情形(2.2.4):分裂,情形(2.2.3)直接进行下面的操作\n            if(RMin==NULL) header->rc=RMin=t;\n            else RMin->lc=t,RMin=t;\n            t=t->lc;\n        }\n        else if(t->key<k){ //进入右分支\n            if(t->rc==NULL) break; //情形(2.3.1)\n            if(t->rc->key<k) t=RR(t);\n            if(t->rc==NULL) break; //情形(2.3.2)\n            //情形(2.3.4):分裂,情形(2.3.3)直接进行下面的操作\n            if(LMax==NULL) header->lc=LMax=t;\n            else LMax->rc=t,LMax=t;\n            t=t->rc;\n        }\n        else\n            break; //情形(2.1)\n    }\n    //第(3)步\n    if(LMax==NULL) header->lc=t->lc; //将t的左分支加到HL中\n    else LMax->rc=t->lc;\n    if(RMin==NULL) header->rc=t->rc; //将t的右分支加到HR中\n    else RMin->lc=t->rc;\n    t->lc=header->lc; //将t的左分支设置为HL\n    t->rc=header->rc; //将t的右分支设置为HR\n    delete header;\n}\n\n\n //在伸展树t中查找键值为k的结点,查找成功,返回该结点;否则返回NULL\nsplayTree splay_search(splayTree &t,keytype k){\n    splay(t,k); //对k进行伸展操作\n    if(t!=NULL && t->key==k) return t; //查找成功\n    else return NULL; //查找失败\n}\n\n\n //在伸展树t中插入一个键值为k的结点,插入成功,返回true;否则返回false\nbool splay_insert(splayTree &t,keytype k){\n    splayTree tmp=new stNode;\n    tmp->key=k;\n    if(t==NULL) t=tmp; //原树为空树\n    else{\n        splay(t,k); //对k进行伸展操作\n        if(k<t->key){ //k小于t的键值\n            tmp->lc=t->lc,tmp->rc=t; //tmp的左孩子设置为t的左孩子,右孩子设置为t\n            t->lc=NULL,t=tmp; //t的左子树为空,更新根结点\n        }\n        else if(k>t->key){ //k大于t的键值\n            tmp->rc=t->rc,tmp->lc=t; //tmp的右孩子设置为t的右孩子,左孩子设置为t\n            t->rc=NULL,t=tmp; //t的右子树为空,更新根结点\n        }\n        else{\n            delete tmp;\n            return false; //插入失败\n        }\n    }\n    return true;\n}\n\n\n //删除伸展树t中键值为k的结点\nbool splay_delete(splayTree &t,keytype k){\n    if(t==NULL) return false;\n    splay(t,k); //伸展操作\n    if(t->key!=k) return false; //删除失败\n    if(t->rc==NULL){ //右子树为空,用t的左子树取代t\n        splayTree tmp=t;\n        t=t->lc;\n        delete tmp;\n        tmp=NULL;\n    }\n    else{\n        splayTree tmp=t->rc;\n        splay(tmp,k); //在t的右子树对k进行伸展操作\n        tmp->lc=t->lc; //将tmp的左子树设置为t的左子树\n        delete t;\n        t=NULL; //删除t\n        t=tmp; //更新根结点\n    }\n    return true;\n}\n\nvoid show(splayTree t){if(!t){cout<<\"# \";return;}cout<<t->key<<\" \";show(t->lc);show(t->rc);}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;splayTree t=NULL;while(n--){int k;cin>>k;splay_insert(t,k);}int q;cin>>q;while(q--){int k;cin>>k;splay(t,k);if(t)cout<<t->key;else cout<<\"EMPTY\";cout<<\"\\n\";}show(t);\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空树边界",
        "stdin": "0\n\n3\n5 5 2\n",
        "expected": "EMPTY\nEMPTY\nEMPTY\n#"
      },
      {
        "name": "成功和失败访问",
        "stdin": "7\n4 2 6 1 3 5 7\n3\n4 9 2\n",
        "expected": "4\n7\n2\n2 1 # # 6 3 # 4 # 5 # # 7 # #"
      },
      {
        "name": "连续调整",
        "stdin": "3\n10 5 7\n3\n10 7 20\n",
        "expected": "10\n7\n10\n10 7 5 # # # #"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "s-splay-search",
    "title": "Splay · 查找并伸展",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "it1niv51webln15h",
        "blocks": [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        "functions": [
          "splay_search"
        ]
      }
    ],
    "description": "按输入顺序使用伸展树插入初始键，随后执行指定操作。每次访问或操作后都观察根：即使目标不存在，原码仍会伸展最后访问的附近节点。",
    "input": "n\nn个初始键\nq\nq个操作键。",
    "output": "每次一行：成功标记0/1和调整后的根（空树EMPTY）。最后一行输出先序key/#结构。",
    "constraints": [
      "0≤n,q≤100",
      "-10000≤key≤10000"
    ],
    "samples": [
      {
        "stdin": "0\n\n3\n5 5 2\n",
        "expected": "0 EMPTY\n0 EMPTY\n0 EMPTY\n#",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "7\n4 2 6 1 3 5 7\n3\n4 9 2\n",
        "expected": "1 4\n0 7\n1 2\n2 1 # # 6 3 # 4 # 5 # # 7 # #",
        "explanation": "边界样例：成功和失败访问"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个初始键；q；q个操作键。\n// 输出：每次一行：成功标记0/1和调整后的根（空树EMPTY）。最后一行输出先序key/#结构。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\ntypedef struct stNode{\n    keytype key;\n    stNode *lc,*rc; //左孩子指针和右孩子指针\n    stNode():lc(NULL),rc(NULL){\n    }\n} *splayTree;\n\nsplayTree LL(splayTree A){\n    splayTree B=A->lc; //找到A的左孩子B\n    A->lc=B->rc; //将B的右子树变成A的左子树\n    B->rc=A; //将A变成B的右孩子\n    return B; //返回旋转后新的根结点B\n}\n\nsplayTree RR(splayTree A){\n    splayTree B=A->rc; //找到A的右孩子B\n    A->rc=B->lc; //将B的左子树变成A的右子树\n    B->lc=A; //将A变成B的左孩子\n    return B; //返回旋转后新的根结点B\n}\n\n\n //在伸展树t中,对键值k进行自顶向下伸展操作\nvoid splay(splayTree &t,keytype k){\n    splayTree header=new stNode,LMax=NULL,RMin=NULL; //HL为header->lc,HR为header->rc\n    if(t==NULL){\n        delete header;\n        return;\n    }\n    while(1){\n        if(t->key>k){ //进入左分支\n            if(t->lc==NULL) break; //情形(2.2.1)\n            if(t->lc->key>k) t=LL(t);\n            if(t->lc==NULL) break; //情形(2.2.2)\n            //情形(2.2.4):分裂,情形(2.2.3)直接进行下面的操作\n            if(RMin==NULL) header->rc=RMin=t;\n            else RMin->lc=t,RMin=t;\n            t=t->lc;\n        }\n        else if(t->key<k){ //进入右分支\n            if(t->rc==NULL) break; //情形(2.3.1)\n            if(t->rc->key<k) t=RR(t);\n            if(t->rc==NULL) break; //情形(2.3.2)\n            //情形(2.3.4):分裂,情形(2.3.3)直接进行下面的操作\n            if(LMax==NULL) header->lc=LMax=t;\n            else LMax->rc=t,LMax=t;\n            t=t->rc;\n        }\n        else\n            break; //情形(2.1)\n    }\n    //第(3)步\n    if(LMax==NULL) header->lc=t->lc; //将t的左分支加到HL中\n    else LMax->rc=t->lc;\n    if(RMin==NULL) header->rc=t->rc; //将t的右分支加到HR中\n    else RMin->lc=t->rc;\n    t->lc=header->lc; //将t的左分支设置为HL\n    t->rc=header->rc; //将t的右分支设置为HR\n    delete header;\n}\n\n\n //在伸展树t中查找键值为k的结点,查找成功,返回该结点;否则返回NULL\nsplayTree splay_search(splayTree &t,keytype k){\n    splay(t,k); //对k进行伸展操作\n    if(t!=NULL && t->key==k) return t; //查找成功\n    else return NULL; //查找失败\n}\n\n\n //在伸展树t中插入一个键值为k的结点,插入成功,返回true;否则返回false\nbool splay_insert(splayTree &t,keytype k){\n    splayTree tmp=new stNode;\n    tmp->key=k;\n    if(t==NULL) t=tmp; //原树为空树\n    else{\n        splay(t,k); //对k进行伸展操作\n        if(k<t->key){ //k小于t的键值\n            tmp->lc=t->lc,tmp->rc=t; //tmp的左孩子设置为t的左孩子,右孩子设置为t\n            t->lc=NULL,t=tmp; //t的左子树为空,更新根结点\n        }\n        else if(k>t->key){ //k大于t的键值\n            tmp->rc=t->rc,tmp->lc=t; //tmp的右孩子设置为t的右孩子,左孩子设置为t\n            t->rc=NULL,t=tmp; //t的右子树为空,更新根结点\n        }\n        else{\n            delete tmp;\n            return false; //插入失败\n        }\n    }\n    return true;\n}\n\n\n //删除伸展树t中键值为k的结点\nbool splay_delete(splayTree &t,keytype k){\n    if(t==NULL) return false;\n    splay(t,k); //伸展操作\n    if(t->key!=k) return false; //删除失败\n    if(t->rc==NULL){ //右子树为空,用t的左子树取代t\n        splayTree tmp=t;\n        t=t->lc;\n        delete tmp;\n        tmp=NULL;\n    }\n    else{\n        splayTree tmp=t->rc;\n        splay(tmp,k); //在t的右子树对k进行伸展操作\n        tmp->lc=t->lc; //将tmp的左子树设置为t的左子树\n        delete t;\n        t=NULL; //删除t\n        t=tmp; //更新根结点\n    }\n    return true;\n}\n\nvoid show(splayTree t){if(!t){cout<<\"# \";return;}cout<<t->key<<\" \";show(t->lc);show(t->rc);}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;splayTree t=NULL;while(n--){int k;cin>>k;splay_insert(t,k);}int q;cin>>q;while(q--){int k;cin>>k;cout<<(splay_search(t,k)!=NULL)<<\" \";if(t)cout<<t->key;else cout<<\"EMPTY\";cout<<\"\\n\";}show(t);\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空树边界",
        "stdin": "0\n\n3\n5 5 2\n",
        "expected": "0 EMPTY\n0 EMPTY\n0 EMPTY\n#"
      },
      {
        "name": "成功和失败访问",
        "stdin": "7\n4 2 6 1 3 5 7\n3\n4 9 2\n",
        "expected": "1 4\n0 7\n1 2\n2 1 # # 6 3 # 4 # 5 # # 7 # #"
      },
      {
        "name": "连续调整",
        "stdin": "3\n10 5 7\n3\n10 7 20\n",
        "expected": "1 10\n1 7\n0 10\n10 7 5 # # # #"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "s-splay-insert",
    "title": "Splay · 插入",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "it1niv51webln15h",
        "blocks": [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        "functions": [
          "splay_insert"
        ]
      }
    ],
    "description": "按输入顺序使用伸展树插入初始键，随后执行指定操作。每次访问或操作后都观察根：即使目标不存在，原码仍会伸展最后访问的附近节点。",
    "input": "n\nn个初始键\nq\nq个操作键。",
    "output": "每次一行：成功标记0/1和调整后的根（空树EMPTY）。最后一行输出先序key/#结构。",
    "constraints": [
      "0≤n,q≤100",
      "-10000≤key≤10000"
    ],
    "samples": [
      {
        "stdin": "0\n\n3\n5 5 2\n",
        "expected": "1 5\n0 5\n1 2\n2 # 5 # #",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "7\n4 2 6 1 3 5 7\n3\n4 9 2\n",
        "expected": "0 4\n1 9\n0 2\n2 1 # # 7 4 3 # # 6 5 # # # 9 # #",
        "explanation": "边界样例：成功和失败访问"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个初始键；q；q个操作键。\n// 输出：每次一行：成功标记0/1和调整后的根（空树EMPTY）。最后一行输出先序key/#结构。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\ntypedef struct stNode{\n    keytype key;\n    stNode *lc,*rc; //左孩子指针和右孩子指针\n    stNode():lc(NULL),rc(NULL){\n    }\n} *splayTree;\n\nsplayTree LL(splayTree A){\n    splayTree B=A->lc; //找到A的左孩子B\n    A->lc=B->rc; //将B的右子树变成A的左子树\n    B->rc=A; //将A变成B的右孩子\n    return B; //返回旋转后新的根结点B\n}\n\nsplayTree RR(splayTree A){\n    splayTree B=A->rc; //找到A的右孩子B\n    A->rc=B->lc; //将B的左子树变成A的右子树\n    B->lc=A; //将A变成B的左孩子\n    return B; //返回旋转后新的根结点B\n}\n\n\n //在伸展树t中,对键值k进行自顶向下伸展操作\nvoid splay(splayTree &t,keytype k){\n    splayTree header=new stNode,LMax=NULL,RMin=NULL; //HL为header->lc,HR为header->rc\n    if(t==NULL){\n        delete header;\n        return;\n    }\n    while(1){\n        if(t->key>k){ //进入左分支\n            if(t->lc==NULL) break; //情形(2.2.1)\n            if(t->lc->key>k) t=LL(t);\n            if(t->lc==NULL) break; //情形(2.2.2)\n            //情形(2.2.4):分裂,情形(2.2.3)直接进行下面的操作\n            if(RMin==NULL) header->rc=RMin=t;\n            else RMin->lc=t,RMin=t;\n            t=t->lc;\n        }\n        else if(t->key<k){ //进入右分支\n            if(t->rc==NULL) break; //情形(2.3.1)\n            if(t->rc->key<k) t=RR(t);\n            if(t->rc==NULL) break; //情形(2.3.2)\n            //情形(2.3.4):分裂,情形(2.3.3)直接进行下面的操作\n            if(LMax==NULL) header->lc=LMax=t;\n            else LMax->rc=t,LMax=t;\n            t=t->rc;\n        }\n        else\n            break; //情形(2.1)\n    }\n    //第(3)步\n    if(LMax==NULL) header->lc=t->lc; //将t的左分支加到HL中\n    else LMax->rc=t->lc;\n    if(RMin==NULL) header->rc=t->rc; //将t的右分支加到HR中\n    else RMin->lc=t->rc;\n    t->lc=header->lc; //将t的左分支设置为HL\n    t->rc=header->rc; //将t的右分支设置为HR\n    delete header;\n}\n\n\n //在伸展树t中查找键值为k的结点,查找成功,返回该结点;否则返回NULL\nsplayTree splay_search(splayTree &t,keytype k){\n    splay(t,k); //对k进行伸展操作\n    if(t!=NULL && t->key==k) return t; //查找成功\n    else return NULL; //查找失败\n}\n\n\n //在伸展树t中插入一个键值为k的结点,插入成功,返回true;否则返回false\nbool splay_insert(splayTree &t,keytype k){\n    splayTree tmp=new stNode;\n    tmp->key=k;\n    if(t==NULL) t=tmp; //原树为空树\n    else{\n        splay(t,k); //对k进行伸展操作\n        if(k<t->key){ //k小于t的键值\n            tmp->lc=t->lc,tmp->rc=t; //tmp的左孩子设置为t的左孩子,右孩子设置为t\n            t->lc=NULL,t=tmp; //t的左子树为空,更新根结点\n        }\n        else if(k>t->key){ //k大于t的键值\n            tmp->rc=t->rc,tmp->lc=t; //tmp的右孩子设置为t的右孩子,左孩子设置为t\n            t->rc=NULL,t=tmp; //t的右子树为空,更新根结点\n        }\n        else{\n            delete tmp;\n            return false; //插入失败\n        }\n    }\n    return true;\n}\n\n\n //删除伸展树t中键值为k的结点\nbool splay_delete(splayTree &t,keytype k){\n    if(t==NULL) return false;\n    splay(t,k); //伸展操作\n    if(t->key!=k) return false; //删除失败\n    if(t->rc==NULL){ //右子树为空,用t的左子树取代t\n        splayTree tmp=t;\n        t=t->lc;\n        delete tmp;\n        tmp=NULL;\n    }\n    else{\n        splayTree tmp=t->rc;\n        splay(tmp,k); //在t的右子树对k进行伸展操作\n        tmp->lc=t->lc; //将tmp的左子树设置为t的左子树\n        delete t;\n        t=NULL; //删除t\n        t=tmp; //更新根结点\n    }\n    return true;\n}\n\nvoid show(splayTree t){if(!t){cout<<\"# \";return;}cout<<t->key<<\" \";show(t->lc);show(t->rc);}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;splayTree t=NULL;while(n--){int k;cin>>k;splay_insert(t,k);}int q;cin>>q;while(q--){int k;cin>>k;cout<<splay_insert(t,k)<<\" \";if(t)cout<<t->key;else cout<<\"EMPTY\";cout<<\"\\n\";}show(t);\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空树边界",
        "stdin": "0\n\n3\n5 5 2\n",
        "expected": "1 5\n0 5\n1 2\n2 # 5 # #"
      },
      {
        "name": "成功和失败访问",
        "stdin": "7\n4 2 6 1 3 5 7\n3\n4 9 2\n",
        "expected": "0 4\n1 9\n0 2\n2 1 # # 7 4 3 # # 6 5 # # # 9 # #"
      },
      {
        "name": "连续调整",
        "stdin": "3\n10 5 7\n3\n10 7 20\n",
        "expected": "0 10\n0 7\n1 20\n20 10 7 5 # # # # #"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "s-splay-delete",
    "title": "Splay · 删除",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "it1niv51webln15h",
        "blocks": [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        "functions": [
          "splay_delete"
        ]
      }
    ],
    "description": "按输入顺序使用伸展树插入初始键，随后执行指定操作。每次访问或操作后都观察根：即使目标不存在，原码仍会伸展最后访问的附近节点。",
    "input": "n\nn个初始键\nq\nq个操作键。",
    "output": "每次一行：成功标记0/1和调整后的根（空树EMPTY）。最后一行输出先序key/#结构。",
    "constraints": [
      "0≤n,q≤100",
      "-10000≤key≤10000"
    ],
    "samples": [
      {
        "stdin": "0\n\n3\n5 5 2\n",
        "expected": "0 EMPTY\n0 EMPTY\n0 EMPTY\n#",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "7\n4 2 6 1 3 5 7\n3\n4 9 2\n",
        "expected": "1 5\n0 7\n1 3\n3 1 # # 6 5 # # 7 # #",
        "explanation": "边界样例：成功和失败访问"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个初始键；q；q个操作键。\n// 输出：每次一行：成功标记0/1和调整后的根（空树EMPTY）。最后一行输出先序key/#结构。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\ntypedef struct stNode{\n    keytype key;\n    stNode *lc,*rc; //左孩子指针和右孩子指针\n    stNode():lc(NULL),rc(NULL){\n    }\n} *splayTree;\n\nsplayTree LL(splayTree A){\n    splayTree B=A->lc; //找到A的左孩子B\n    A->lc=B->rc; //将B的右子树变成A的左子树\n    B->rc=A; //将A变成B的右孩子\n    return B; //返回旋转后新的根结点B\n}\n\nsplayTree RR(splayTree A){\n    splayTree B=A->rc; //找到A的右孩子B\n    A->rc=B->lc; //将B的左子树变成A的右子树\n    B->lc=A; //将A变成B的左孩子\n    return B; //返回旋转后新的根结点B\n}\n\n\n //在伸展树t中,对键值k进行自顶向下伸展操作\nvoid splay(splayTree &t,keytype k){\n    splayTree header=new stNode,LMax=NULL,RMin=NULL; //HL为header->lc,HR为header->rc\n    if(t==NULL){\n        delete header;\n        return;\n    }\n    while(1){\n        if(t->key>k){ //进入左分支\n            if(t->lc==NULL) break; //情形(2.2.1)\n            if(t->lc->key>k) t=LL(t);\n            if(t->lc==NULL) break; //情形(2.2.2)\n            //情形(2.2.4):分裂,情形(2.2.3)直接进行下面的操作\n            if(RMin==NULL) header->rc=RMin=t;\n            else RMin->lc=t,RMin=t;\n            t=t->lc;\n        }\n        else if(t->key<k){ //进入右分支\n            if(t->rc==NULL) break; //情形(2.3.1)\n            if(t->rc->key<k) t=RR(t);\n            if(t->rc==NULL) break; //情形(2.3.2)\n            //情形(2.3.4):分裂,情形(2.3.3)直接进行下面的操作\n            if(LMax==NULL) header->lc=LMax=t;\n            else LMax->rc=t,LMax=t;\n            t=t->rc;\n        }\n        else\n            break; //情形(2.1)\n    }\n    //第(3)步\n    if(LMax==NULL) header->lc=t->lc; //将t的左分支加到HL中\n    else LMax->rc=t->lc;\n    if(RMin==NULL) header->rc=t->rc; //将t的右分支加到HR中\n    else RMin->lc=t->rc;\n    t->lc=header->lc; //将t的左分支设置为HL\n    t->rc=header->rc; //将t的右分支设置为HR\n    delete header;\n}\n\n\n //在伸展树t中查找键值为k的结点,查找成功,返回该结点;否则返回NULL\nsplayTree splay_search(splayTree &t,keytype k){\n    splay(t,k); //对k进行伸展操作\n    if(t!=NULL && t->key==k) return t; //查找成功\n    else return NULL; //查找失败\n}\n\n\n //在伸展树t中插入一个键值为k的结点,插入成功,返回true;否则返回false\nbool splay_insert(splayTree &t,keytype k){\n    splayTree tmp=new stNode;\n    tmp->key=k;\n    if(t==NULL) t=tmp; //原树为空树\n    else{\n        splay(t,k); //对k进行伸展操作\n        if(k<t->key){ //k小于t的键值\n            tmp->lc=t->lc,tmp->rc=t; //tmp的左孩子设置为t的左孩子,右孩子设置为t\n            t->lc=NULL,t=tmp; //t的左子树为空,更新根结点\n        }\n        else if(k>t->key){ //k大于t的键值\n            tmp->rc=t->rc,tmp->lc=t; //tmp的右孩子设置为t的右孩子,左孩子设置为t\n            t->rc=NULL,t=tmp; //t的右子树为空,更新根结点\n        }\n        else{\n            delete tmp;\n            return false; //插入失败\n        }\n    }\n    return true;\n}\n\n\n //删除伸展树t中键值为k的结点\nbool splay_delete(splayTree &t,keytype k){\n    if(t==NULL) return false;\n    splay(t,k); //伸展操作\n    if(t->key!=k) return false; //删除失败\n    if(t->rc==NULL){ //右子树为空,用t的左子树取代t\n        splayTree tmp=t;\n        t=t->lc;\n        delete tmp;\n        tmp=NULL;\n    }\n    else{\n        splayTree tmp=t->rc;\n        splay(tmp,k); //在t的右子树对k进行伸展操作\n        tmp->lc=t->lc; //将tmp的左子树设置为t的左子树\n        delete t;\n        t=NULL; //删除t\n        t=tmp; //更新根结点\n    }\n    return true;\n}\n\nvoid show(splayTree t){if(!t){cout<<\"# \";return;}cout<<t->key<<\" \";show(t->lc);show(t->rc);}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;splayTree t=NULL;while(n--){int k;cin>>k;splay_insert(t,k);}int q;cin>>q;while(q--){int k;cin>>k;cout<<splay_delete(t,k)<<\" \";if(t)cout<<t->key;else cout<<\"EMPTY\";cout<<\"\\n\";}show(t);\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空树边界",
        "stdin": "0\n\n3\n5 5 2\n",
        "expected": "0 EMPTY\n0 EMPTY\n0 EMPTY\n#"
      },
      {
        "name": "成功和失败访问",
        "stdin": "7\n4 2 6 1 3 5 7\n3\n4 9 2\n",
        "expected": "1 5\n0 7\n1 3\n3 1 # # 6 5 # # 7 # #"
      },
      {
        "name": "连续调整",
        "stdin": "3\n10 5 7\n3\n10 7 20\n",
        "expected": "1 7\n1 5\n0 5\n5 # #"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "s-rb-insert",
    "title": "红黑树 · 插入与结构",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "sn9gtyf4m8hli693",
        "blocks": [
          0,
          1,
          2,
          3
        ],
        "functions": [
          "rbt_insert"
        ]
      }
    ],
    "description": "依输入顺序建立原笔记的红黑树，重复键不插入。逐个执行插入，输出是否成功。最后输出实际结构，必须维护平衡关系；不能仅输出排序后的集合。",
    "input": "n\nn个初始键\nq\nq个操作键。",
    "output": "第一行q个0/1。第二行先序结构：key:R或key:B；空指针#。",
    "constraints": [
      "0≤n,q≤100",
      "-10000≤key≤10000"
    ],
    "samples": [
      {
        "stdin": "0\n\n1\n5\n",
        "expected": "1\n5:B # #",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "3\n2 1 3\n2\n1 4\n",
        "expected": "0 1\n2:B 1:B # # 3:B # 4:R # #",
        "explanation": "边界样例：分裂/旋转/删除"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个初始键；q；q个操作键。\n// 输出：第一行q个0/1。第二行先序结构：key:R或key:B；空指针#。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\nenum color{RED,BLACK};\ntypedef struct rbNode{\n    keytype key;\n    color c; //当前结点的颜色\n    rbNode *lc,*rc,*pa; //pa为指向当前结点父结点的指针\n    rbNode():c(RED),lc(NULL),rc(NULL),pa(NULL){\n    }\n} *rbTree;\nrbTree LL(rbTree A);\nrbTree RR(rbTree A);\n\n//设置颜色,最多可设置三个结点\nvoid set_color(rbTree t1,color c1,rbTree t2=NULL,color c2=RED,rbTree t3=NULL,color c3=RED){\n    if(t1) t1->c=c1;\n    if(t2) t2->c=c2;\n    if(t3) t3->c=c3;\n}\n\n//获取结点颜色,空结点视为黑色\ncolor get_color(rbTree t){\n    return t?t->c:BLACK;\n}\n\n//检查新插入结点C是否符合红黑树条件,不符合则调整结构和颜色\nvoid adjust_color(rbTree &t,rbTree C){\n    while(C!=t && get_color(C->pa)==RED){\n        rbTree B=C->pa,A=B->pa;\n        if(B==A->lc){ //父结点B是祖父结点A的左孩子\n            rbTree U=A->rc; //U为叔叔结点\n            if(get_color(U)==RED){\n                set_color(B,BLACK,U,BLACK,A,RED);\n                C=A; //向上继续检查\n            }\n            else{\n                if(C==B->rc){\n                    C=B;\n                    RR(C); //先左旋,转为LL型\n                }\n                B=C->pa,A=B->pa;\n                set_color(B,BLACK,A,RED);\n                rbTree rt=LL(A); //右旋\n                if(rt->pa==NULL) t=rt;\n            }\n        }\n        else{ //父结点B是祖父结点A的右孩子\n            rbTree U=A->lc;\n            if(get_color(U)==RED){\n                set_color(B,BLACK,U,BLACK,A,RED);\n                C=A;\n            }\n            else{\n                if(C==B->lc){\n                    C=B;\n                    LL(C); //先右旋,转为RR型\n                }\n                B=C->pa,A=B->pa;\n                set_color(B,BLACK,A,RED);\n                rbTree rt=RR(A); //左旋\n                if(rt->pa==NULL) t=rt;\n            }\n        }\n    }\n    if(t) t->c=BLACK; //根结点始终为黑色\n}\n\n//向红黑树t中插入键值为k的结点,成功返回true,否则返回false\nbool rbt_insert(rbTree &t,keytype k){\n    rbTree C,pa=NULL,t1=t;\n    while(t1){\n        pa=t1;\n        if(k<t1->key) t1=t1->lc;\n        else if(k>t1->key) t1=t1->rc;\n        else return false; //键值已存在\n    }\n    C=new rbNode,C->key=k; //新结点默认为红色\n    C->pa=pa;\n    if(pa==NULL) t=C; //插入根结点\n    else if(k<pa->key) pa->lc=C;\n    else pa->rc=C;\n    adjust_color(t,C); //调整颜色和结构\n    return true;\n}\n\n\n//红黑树的LL旋转操作,返回旋转后子树的根结点\nrbTree LL(rbTree A){\n    rbTree B=A->lc;\n    A->lc=B->rc;\n    if(A->lc) A->lc->pa=A;\n    B->pa=A->pa;\n    if(A->pa){\n        if(A->pa->lc==A) A->pa->lc=B;\n        else A->pa->rc=B;\n    }\n    B->rc=A,A->pa=B;\n    return B;\n}\n\n//红黑树的RR旋转操作,返回旋转后子树的根结点\nrbTree RR(rbTree A){\n    rbTree B=A->rc;\n    A->rc=B->lc;\n    if(A->rc) A->rc->pa=A;\n    B->pa=A->pa;\n    if(A->pa){\n        if(A->pa->lc==A) A->pa->lc=B;\n        else A->pa->rc=B;\n    }\n    B->lc=A,A->pa=B;\n    return B;\n}\n\n//红黑树的LR旋转操作,返回旋转后子树的根结点\nrbTree LR(rbTree A){\n    RR(A->lc); //RR旋转\n    return LL(A); //LL旋转\n}\n\n//红黑树的RL旋转操作,返回旋转后子树的根结点\nrbTree RL(rbTree A){\n    LL(A->rc); //LL旋转\n    return RR(A); //RR旋转\n}\n\n//删除黑结点后,从结点C开始调整红黑树\nvoid check_color(rbTree &t,rbTree C,rbTree pa){\n    while(C!=t && get_color(C)==BLACK){\n        if(pa==NULL) break;\n        if(C==pa->lc){ //C为左孩子\n            rbTree S=pa->rc; //S为右兄弟\n            if(get_color(S)==RED){\n                set_color(S,BLACK,pa,RED);\n                rbTree rt=RR(pa);\n                if(rt->pa==NULL) t=rt;\n                S=pa->rc;\n            }\n            if(get_color(S?S->lc:NULL)==BLACK && get_color(S?S->rc:NULL)==BLACK){\n                set_color(S,RED);\n                C=pa,pa=C->pa; //向上继续调整\n            }\n            else{\n                if(get_color(S->rc)==BLACK){\n                    set_color(S->lc,BLACK,S,RED);\n                    rbTree rt=LL(S);\n                    if(rt->pa==NULL) t=rt;\n                    S=pa->rc;\n                }\n                S->c=pa->c;\n                set_color(pa,BLACK,S->rc,BLACK);\n                rbTree rt=RR(pa);\n                if(rt->pa==NULL) t=rt;\n                C=t;\n                break;\n            }\n        }\n        else{ //C为右孩子\n            rbTree S=pa->lc; //S为左兄弟\n            if(get_color(S)==RED){\n                set_color(S,BLACK,pa,RED);\n                rbTree rt=LL(pa);\n                if(rt->pa==NULL) t=rt;\n                S=pa->lc;\n            }\n            if(get_color(S?S->lc:NULL)==BLACK && get_color(S?S->rc:NULL)==BLACK){\n                set_color(S,RED);\n                C=pa,pa=C->pa;\n            }\n            else{\n                if(get_color(S->lc)==BLACK){\n                    set_color(S->rc,BLACK,S,RED);\n                    rbTree rt=RR(S);\n                    if(rt->pa==NULL) t=rt;\n                    S=pa->lc;\n                }\n                S->c=pa->c;\n                set_color(pa,BLACK,S->lc,BLACK);\n                rbTree rt=LL(pa);\n                if(rt->pa==NULL) t=rt;\n                C=t;\n                break;\n            }\n        }\n    }\n    set_color(C,BLACK);\n    if(t) t->c=BLACK;\n}\n\n//删除红黑树t中键值为k的结点,成功返回true,否则返回false\nbool rbt_delete(rbTree &t,keytype k){\n    rbTree C=t;\n    while(C && C->key!=k){\n        if(k<C->key) C=C->lc;\n        else C=C->rc;\n    }\n    if(C==NULL) return false; //未找到待删除结点\n    if(C->lc && C->rc){ //有两个孩子\n        rbTree tmp=C->rc;\n        while(tmp->lc) tmp=tmp->lc; //寻找中序后继\n        C->key=tmp->key; //用后继键值替换\n        C=tmp; //实际删除后继结点\n    }\n    rbTree child=C->lc?C->lc:C->rc;\n    rbTree pa=C->pa;\n    color old=C->c;\n    if(child) child->pa=pa;\n    if(pa==NULL) t=child; //删除根结点\n    else if(pa->lc==C) pa->lc=child;\n    else pa->rc=child;\n    delete C;\n    if(old==BLACK) check_color(t,child,pa); //删除黑结点需要调整\n    return true;\n}\n\nvoid show(rbTree t){if(!t){cout<<\"# \";return;}cout<<t->key<<\":\"<<(t->c==RED?\"R\":\"B\")<<\" \";show(t->lc);show(t->rc);}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;rbTree t=NULL;while(n--){int k;cin>>k;rbt_insert(t,k);}int q;cin>>q;while(q--){int k;cin>>k;cout<<rbt_insert(t,k)<<\" \";}cout<<\"\\n\";show(t);\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空树",
        "stdin": "0\n\n1\n5\n",
        "expected": "1\n5:B # #"
      },
      {
        "name": "分裂/旋转/删除",
        "stdin": "3\n2 1 3\n2\n1 4\n",
        "expected": "0 1\n2:B 1:B # # 3:B # 4:R # #"
      },
      {
        "name": "重复与根变化",
        "stdin": "0\n\n3\n3 2 1\n",
        "expected": "1 1 1\n2:B 1:R # # 3:R # #"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "s-rb-delete",
    "title": "红黑树 · 删除与结构",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "sn9gtyf4m8hli693",
        "blocks": [
          0,
          1,
          2,
          3
        ],
        "functions": [
          "rbt_delete"
        ]
      }
    ],
    "description": "依输入顺序建立原笔记的红黑树，重复键不插入。逐个执行删除，输出是否成功。最后输出实际结构，必须维护平衡关系；不能仅输出排序后的集合。",
    "input": "n\nn个初始键\nq\nq个操作键。",
    "output": "第一行q个0/1。第二行先序结构：key:R或key:B；空指针#。",
    "constraints": [
      "0≤n,q≤100",
      "-10000≤key≤10000"
    ],
    "samples": [
      {
        "stdin": "0\n\n1\n5\n",
        "expected": "0\n#",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "3\n2 1 3\n1\n1\n",
        "expected": "1\n2:B # 3:R # #",
        "explanation": "边界样例：分裂/旋转/删除"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个初始键；q；q个操作键。\n// 输出：第一行q个0/1。第二行先序结构：key:R或key:B；空指针#。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\nenum color{RED,BLACK};\ntypedef struct rbNode{\n    keytype key;\n    color c; //当前结点的颜色\n    rbNode *lc,*rc,*pa; //pa为指向当前结点父结点的指针\n    rbNode():c(RED),lc(NULL),rc(NULL),pa(NULL){\n    }\n} *rbTree;\nrbTree LL(rbTree A);\nrbTree RR(rbTree A);\n\n//设置颜色,最多可设置三个结点\nvoid set_color(rbTree t1,color c1,rbTree t2=NULL,color c2=RED,rbTree t3=NULL,color c3=RED){\n    if(t1) t1->c=c1;\n    if(t2) t2->c=c2;\n    if(t3) t3->c=c3;\n}\n\n//获取结点颜色,空结点视为黑色\ncolor get_color(rbTree t){\n    return t?t->c:BLACK;\n}\n\n//检查新插入结点C是否符合红黑树条件,不符合则调整结构和颜色\nvoid adjust_color(rbTree &t,rbTree C){\n    while(C!=t && get_color(C->pa)==RED){\n        rbTree B=C->pa,A=B->pa;\n        if(B==A->lc){ //父结点B是祖父结点A的左孩子\n            rbTree U=A->rc; //U为叔叔结点\n            if(get_color(U)==RED){\n                set_color(B,BLACK,U,BLACK,A,RED);\n                C=A; //向上继续检查\n            }\n            else{\n                if(C==B->rc){\n                    C=B;\n                    RR(C); //先左旋,转为LL型\n                }\n                B=C->pa,A=B->pa;\n                set_color(B,BLACK,A,RED);\n                rbTree rt=LL(A); //右旋\n                if(rt->pa==NULL) t=rt;\n            }\n        }\n        else{ //父结点B是祖父结点A的右孩子\n            rbTree U=A->lc;\n            if(get_color(U)==RED){\n                set_color(B,BLACK,U,BLACK,A,RED);\n                C=A;\n            }\n            else{\n                if(C==B->lc){\n                    C=B;\n                    LL(C); //先右旋,转为RR型\n                }\n                B=C->pa,A=B->pa;\n                set_color(B,BLACK,A,RED);\n                rbTree rt=RR(A); //左旋\n                if(rt->pa==NULL) t=rt;\n            }\n        }\n    }\n    if(t) t->c=BLACK; //根结点始终为黑色\n}\n\n//向红黑树t中插入键值为k的结点,成功返回true,否则返回false\nbool rbt_insert(rbTree &t,keytype k){\n    rbTree C,pa=NULL,t1=t;\n    while(t1){\n        pa=t1;\n        if(k<t1->key) t1=t1->lc;\n        else if(k>t1->key) t1=t1->rc;\n        else return false; //键值已存在\n    }\n    C=new rbNode,C->key=k; //新结点默认为红色\n    C->pa=pa;\n    if(pa==NULL) t=C; //插入根结点\n    else if(k<pa->key) pa->lc=C;\n    else pa->rc=C;\n    adjust_color(t,C); //调整颜色和结构\n    return true;\n}\n\n\n//红黑树的LL旋转操作,返回旋转后子树的根结点\nrbTree LL(rbTree A){\n    rbTree B=A->lc;\n    A->lc=B->rc;\n    if(A->lc) A->lc->pa=A;\n    B->pa=A->pa;\n    if(A->pa){\n        if(A->pa->lc==A) A->pa->lc=B;\n        else A->pa->rc=B;\n    }\n    B->rc=A,A->pa=B;\n    return B;\n}\n\n//红黑树的RR旋转操作,返回旋转后子树的根结点\nrbTree RR(rbTree A){\n    rbTree B=A->rc;\n    A->rc=B->lc;\n    if(A->rc) A->rc->pa=A;\n    B->pa=A->pa;\n    if(A->pa){\n        if(A->pa->lc==A) A->pa->lc=B;\n        else A->pa->rc=B;\n    }\n    B->lc=A,A->pa=B;\n    return B;\n}\n\n//红黑树的LR旋转操作,返回旋转后子树的根结点\nrbTree LR(rbTree A){\n    RR(A->lc); //RR旋转\n    return LL(A); //LL旋转\n}\n\n//红黑树的RL旋转操作,返回旋转后子树的根结点\nrbTree RL(rbTree A){\n    LL(A->rc); //LL旋转\n    return RR(A); //RR旋转\n}\n\n//删除黑结点后,从结点C开始调整红黑树\nvoid check_color(rbTree &t,rbTree C,rbTree pa){\n    while(C!=t && get_color(C)==BLACK){\n        if(pa==NULL) break;\n        if(C==pa->lc){ //C为左孩子\n            rbTree S=pa->rc; //S为右兄弟\n            if(get_color(S)==RED){\n                set_color(S,BLACK,pa,RED);\n                rbTree rt=RR(pa);\n                if(rt->pa==NULL) t=rt;\n                S=pa->rc;\n            }\n            if(get_color(S?S->lc:NULL)==BLACK && get_color(S?S->rc:NULL)==BLACK){\n                set_color(S,RED);\n                C=pa,pa=C->pa; //向上继续调整\n            }\n            else{\n                if(get_color(S->rc)==BLACK){\n                    set_color(S->lc,BLACK,S,RED);\n                    rbTree rt=LL(S);\n                    if(rt->pa==NULL) t=rt;\n                    S=pa->rc;\n                }\n                S->c=pa->c;\n                set_color(pa,BLACK,S->rc,BLACK);\n                rbTree rt=RR(pa);\n                if(rt->pa==NULL) t=rt;\n                C=t;\n                break;\n            }\n        }\n        else{ //C为右孩子\n            rbTree S=pa->lc; //S为左兄弟\n            if(get_color(S)==RED){\n                set_color(S,BLACK,pa,RED);\n                rbTree rt=LL(pa);\n                if(rt->pa==NULL) t=rt;\n                S=pa->lc;\n            }\n            if(get_color(S?S->lc:NULL)==BLACK && get_color(S?S->rc:NULL)==BLACK){\n                set_color(S,RED);\n                C=pa,pa=C->pa;\n            }\n            else{\n                if(get_color(S->lc)==BLACK){\n                    set_color(S->rc,BLACK,S,RED);\n                    rbTree rt=RR(S);\n                    if(rt->pa==NULL) t=rt;\n                    S=pa->lc;\n                }\n                S->c=pa->c;\n                set_color(pa,BLACK,S->lc,BLACK);\n                rbTree rt=LL(pa);\n                if(rt->pa==NULL) t=rt;\n                C=t;\n                break;\n            }\n        }\n    }\n    set_color(C,BLACK);\n    if(t) t->c=BLACK;\n}\n\n//删除红黑树t中键值为k的结点,成功返回true,否则返回false\nbool rbt_delete(rbTree &t,keytype k){\n    rbTree C=t;\n    while(C && C->key!=k){\n        if(k<C->key) C=C->lc;\n        else C=C->rc;\n    }\n    if(C==NULL) return false; //未找到待删除结点\n    if(C->lc && C->rc){ //有两个孩子\n        rbTree tmp=C->rc;\n        while(tmp->lc) tmp=tmp->lc; //寻找中序后继\n        C->key=tmp->key; //用后继键值替换\n        C=tmp; //实际删除后继结点\n    }\n    rbTree child=C->lc?C->lc:C->rc;\n    rbTree pa=C->pa;\n    color old=C->c;\n    if(child) child->pa=pa;\n    if(pa==NULL) t=child; //删除根结点\n    else if(pa->lc==C) pa->lc=child;\n    else pa->rc=child;\n    delete C;\n    if(old==BLACK) check_color(t,child,pa); //删除黑结点需要调整\n    return true;\n}\n\nvoid show(rbTree t){if(!t){cout<<\"# \";return;}cout<<t->key<<\":\"<<(t->c==RED?\"R\":\"B\")<<\" \";show(t->lc);show(t->rc);}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;rbTree t=NULL;while(n--){int k;cin>>k;rbt_insert(t,k);}int q;cin>>q;while(q--){int k;cin>>k;cout<<rbt_delete(t,k)<<\" \";}cout<<\"\\n\";show(t);\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空树",
        "stdin": "0\n\n1\n5\n",
        "expected": "0\n#"
      },
      {
        "name": "分裂/旋转/删除",
        "stdin": "3\n2 1 3\n1\n1\n",
        "expected": "1\n2:B # 3:R # #"
      },
      {
        "name": "重复与根变化",
        "stdin": "1\n5\n2\n5 5\n",
        "expected": "1 0\n#"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "s-tt-search",
    "title": "2-3树 · 查找",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "pxmrn0a4cfzsfyab",
        "blocks": [
          0,
          1,
          2,
          3,
          4,
          5,
          6
        ],
        "functions": [
          "search2_3"
        ]
      }
    ],
    "description": "依输入顺序建立原笔记的2-3树，重复键不插入。逐个执行查找，输出是否成功。",
    "input": "n\nn个初始键\nq\nq个操作键。",
    "output": "第一行q个0/1。",
    "constraints": [
      "0≤n,q≤100",
      "-10000≤key≤10000"
    ],
    "samples": [
      {
        "stdin": "0\n\n2\n1 2\n",
        "expected": "0 0",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "3\n2 1 3\n4\n1 2 3 4\n",
        "expected": "1 1 1 0",
        "explanation": "边界样例：分裂/旋转/删除"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个初始键；q；q个操作键。\n// 输出：第一行q个0/1。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\ntypedef struct node2_3{\n    int num; //键值的数量\n    keytype key[3]; //键值\n    node2_3 *parent; //指向父结点的指针\n    node2_3 *child[4]; //指向孩子结点的指针数组\n    node2_3():num(0),parent(NULL){\n        for(int i=0;i<4;i++) child[i]=NULL;\n    }\n}*tree2_3;\n\n //在2-3树中查找键值k,如果存在,返回true,否则返回false\nbool search2_3(tree2_3 t,int k){\n    int i;\n    if(t==NULL) return false; //查找失败\n    for(i=0;i<t->num;i++){\n        if(t->key[i]>k) break; //键值属于第i个孩子结点\n        else if(t->key[i]==k) return true; //查找成功\n    }\n    return search2_3(t->child[i],k);\n}\n //在结点t中插入一个键值k,并返回插入键值的位置,如果键值已存在,则返回-1\nint add(tree2_3 &t,int k){\n    int i;\n    for(i=0;i<t->num;i++) if(t->key[i]==k) return -1;\n    for(i=t->num;i>0;i--){\n        if(t->key[i-1]>k){ //t中比k大的键值向右移动一位,孩子指针也相应移动\n            t->key[i]=t->key[i-1];\n            t->child[i+1]=t->child[i];\n        }\n        else break;\n    }\n    t->child[i+1]=t->child[i];\n    t->key[i]=k,t->num++; //插入键值,结点的键值数加1\n    return i;\n}\n\n //分裂结点t,此时t中有3个键值、4个孩子结点,t的父结点为tp\nvoid split(tree2_3 &t,tree2_3 &tp){\n    int flag=0;\n    if(tp==NULL) flag=1,tp=new node2_3; //t为根结点,需创建一个结点,作为新的根结点\n    //增加一个结点,该结点的键值为t中的最大键值,两个孩子结点为t的最右边的两个孩子\n    tree2_3 tmp=new node2_3;\n    tmp->num=1,tmp->key[0]=t->key[2];\n    tmp->child[0]=t->child[2],tmp->child[1]=t->child[3];\n    if(t->child[0]!=NULL){ //若t不是叶结点,则重新确定其右边两个结点的父结点\n        if(tmp->child[0]) tmp->child[0]->parent=tmp;\n        if(tmp->child[1]) tmp->child[1]->parent=tmp;\n    }\n    t->child[2]=t->child[3]=NULL;\n    t->num=1; //t只保留第一个键值\n    int k=add(tp,t->key[1]); //将中间键值加入父结点,k为加入的位置\n    tp->child[k]=t,tp->child[k+1]=tmp,tmp->parent=tp; //重新设置父子关系\n    if(flag) t->parent=tp,t=tp; //根结点发生变化,重设根结点\n}\n\n //向2-3树t中插入一个键值为k的结点\nvoid insert2_3(tree2_3 &t,int k){\n    int i;\n    if(t==NULL) t=new node2_3;\n    if(t->num==0){ //当前结点没有键值,直接在t中加入键值\n        add(t,k);\n        return;\n    }\n    for(i=0;i<t->num;i++){ //确定k位于t的哪一棵子树\n        if(t->key[i]>k) break; //k位于子树i\n        else if(t->key[i]==k) return; //k已存在\n    }\n    if(t->child[i]){ //t不是叶结点\n        insert2_3(t->child[i],k); //进入子树i\n        if(t->num==3) split(t,t->parent); //回退时,如果t的键值变为3个,则进行分裂操作\n    }\n    else{ //到达叶结点\n        add(t,k); //将k加入结点t中\n        if(t->num==3) split(t,t->parent); //如果t的键值为3,则进行分裂操作\n    }\n}\nvoid delete2_3_first(tree2_3 &rt,tree2_3 &t){\n    if(t==NULL) return;\n\n    tree2_3 removed=t; //t可能引用父结点的孩子槽，移动槽位前保存原指针\n    //已有下溢的父结点 num==0 时只调整结构，不再减为 -1\n    if(t->num>0){\n        for(int i=0;i<t->num-1;i++) t->key[i]=t->key[i+1];\n        t->num--;\n    }\n    if(t->num>0) return; //删除后仍为2-结点,结束\n\n    //以下处理t中没有键值的情形\n    if(t==rt){\n        //根结点没有键值\n        rt=t->child[0];\n        if(rt!=NULL) rt->parent=NULL;\n        delete removed;\n        return;\n    }\n\n    tree2_3 tp=t->parent;\n    int i=0;\n    while(i<=tp->num && tp->child[i]!=t) i++;\n    if(i>tp->num) return;\n\n    //情形(2.1):左兄弟为3-结点\n    if(i>0 && tp->child[i-1]->num>1){\n        tree2_3 tb=tp->child[i-1];\n\n        t->key[0]=tp->key[i-1];\n        tp->key[i-1]=tb->key[tb->num-1];\n\n        t->child[1]=t->child[0];\n        t->child[0]=tb->child[tb->num];\n\n        if(t->child[0]!=NULL)\n            t->child[0]->parent=t;\n\n        tb->child[tb->num]=NULL;\n        t->num=1;\n        tb->num--;\n    }\n        //情形(2.1):右兄弟为3-结点\n    else if(i<tp->num && tp->child[i+1]->num>1){\n        tree2_3 tb=tp->child[i+1];\n\n        t->key[0]=tp->key[i];\n        tp->key[i]=tb->key[0];\n\n        t->child[1]=tb->child[0];\n        if(t->child[1]!=NULL)\n            t->child[1]->parent=t;\n\n        for(int j=0;j<tb->num-1;j++)\n            tb->key[j]=tb->key[j+1];\n\n        for(int j=0;j<tb->num;j++)\n            tb->child[j]=tb->child[j+1];\n\n        tb->child[tb->num]=NULL;\n        t->num=1;\n        tb->num--;\n    }\n        //情形(2.2):父结点为3-结点,与兄弟合并\n    else if(tp->num>1){\n        if(i>0){\n            tree2_3 tb=tp->child[i-1];\n\n            tb->key[1]=tp->key[i-1];\n            tb->child[2]=t->child[0];\n\n            if(tb->child[2]!=NULL)\n                tb->child[2]->parent=tb;\n\n            tb->num=2;\n\n            for(int j=i-1;j<tp->num-1;j++)\n                tp->key[j]=tp->key[j+1];\n\n            for(int j=i;j<tp->num;j++)\n                tp->child[j]=tp->child[j+1];\n\n            tp->child[tp->num]=NULL;\n            tp->num--;\n        }\n        else{\n            tree2_3 tb=tp->child[1];\n\n            tb->key[1]=tb->key[0];\n            tb->key[0]=tp->key[0];\n\n            tb->child[2]=tb->child[1];\n            tb->child[1]=tb->child[0];\n            tb->child[0]=t->child[0];\n\n            if(tb->child[0]!=NULL)\n                tb->child[0]->parent=tb;\n\n            tb->num=2;\n            tp->key[0]=tp->key[1];\n            tp->child[0]=tb;\n            tp->child[1]=tp->child[2];\n            tp->child[2]=NULL;\n            tp->num--;\n        }\n\n        delete removed;\n    }\n        //情形(2.3):父结点为2-结点,合并后向上调整\n    else{\n        tree2_3 tb;\n\n        if(i>0){\n            //t为右分支,与左兄弟合并\n            tb=tp->child[0];\n\n            tb->key[1]=tp->key[0];\n            tb->child[2]=t->child[0];\n\n            if(tb->child[2]!=NULL)\n                tb->child[2]->parent=tb;\n\n            tb->num=2;\n            delete removed;\n        }\n        else{\n            //t为左分支,与右兄弟合并\n            tb=tp->child[1];\n\n            tb->key[1]=tb->key[0];\n            tb->key[0]=tp->key[0];\n\n            tb->child[2]=tb->child[1];\n            tb->child[1]=tb->child[0];\n            tb->child[0]=t->child[0];\n\n            if(tb->child[0]!=NULL)\n                tb->child[0]->parent=tb;\n\n            tb->num=2;\n            delete removed;\n        }\n\n        tp->child[0]=tb;\n        tp->child[1]=NULL;\n        tb->parent=tp;\n        tp->num=0;\n\n        //继续检查父结点\n        if(tp==rt){\n            rt=tb;\n            tb->parent=NULL;\n            delete tp;\n        }\n        else{\n            delete2_3_first(rt,tp);\n        }\n    }\n}\n\n //删除2-3树t中键值为key的结点,rt为2-3树的根结点\nvoid delete2_3(tree2_3 &rt,tree2_3 &t,int key){\n    int i;\n    if(t==NULL) return;\n\n    for(i=0;i<t->num;i++){\n        if(t->key[i]>key) break;\n        else if(t->key[i]==key){\n            //找到key的后继键值所在的叶结点\n            if(t->child[0]!=NULL){\n                tree2_3 tmp=t->child[i+1];\n\n                while(tmp->child[0]!=NULL)\n                    tmp=tmp->child[0];\n\n                //用后继键值取代要删除的键值\n                t->key[i]=tmp->key[0];\n\n                //删除后继叶结点的第一个键值\n                delete2_3_first(rt,tmp);\n                return;\n            }\n\n            //t本身为叶结点\n            if(i>0){\n                //将待删除键值移到第一个位置\n                for(int j=i;j>0;j--)\n                    t->key[j]=t->key[j-1];\n            }\n\n            delete2_3_first(rt,t);\n            return;\n        }\n    }\n\n    //进入相应子树继续查找\n    if(t->child[i]!=NULL)\n        delete2_3(rt,t->child[i],key);\n}\n\nvoid show(tree2_3 t){if(!t){cout<<\"# \";return;}cout<<\"[\";for(int i=0;i<t->num;i++){if(i)cout<<\",\";cout<<t->key[i];}cout<<\"] \";for(int i=0;i<=t->num;i++)show(t->child[i]);}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;tree2_3 t=NULL;while(n--){int k;cin>>k;insert2_3(t,k);}int q;cin>>q;while(q--){int k;cin>>k;cout<<search2_3(t,k)<<\" \";}\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空树",
        "stdin": "0\n\n2\n1 2\n",
        "expected": "0 0"
      },
      {
        "name": "分裂/旋转/删除",
        "stdin": "3\n2 1 3\n4\n1 2 3 4\n",
        "expected": "1 1 1 0"
      },
      {
        "name": "重复与根变化",
        "stdin": "2\n5 5\n2\n5 0\n",
        "expected": "1 0"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "s-tt-insert",
    "title": "2-3树 · 插入与结构",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "pxmrn0a4cfzsfyab",
        "blocks": [
          0,
          1,
          2,
          3,
          4,
          5,
          6
        ],
        "functions": [
          "insert2_3"
        ]
      }
    ],
    "description": "依输入顺序建立原笔记的2-3树，重复键不插入。逐个执行插入，输出是否成功。最后输出实际结构，必须维护平衡关系；不能仅输出排序后的集合。",
    "input": "n\nn个初始键\nq\nq个操作键。",
    "output": "第一行q个0/1。第二行先序结构：每节点为[k1]或[k1,k2]，接着递归输出num+1个孩子；空指针#。",
    "constraints": [
      "0≤n,q≤100",
      "-10000≤key≤10000"
    ],
    "samples": [
      {
        "stdin": "0\n\n1\n5\n",
        "expected": "1\n[5] # #",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "2\n2 1\n3\n3 3 4\n",
        "expected": "1 0 1\n[2] [1] # # [3,4] # # #",
        "explanation": "边界样例：分裂/旋转/删除"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个初始键；q；q个操作键。\n// 输出：第一行q个0/1。第二行先序结构：每节点为[k1]或[k1,k2]，接着递归输出num+1个孩子；空指针#。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\ntypedef struct node2_3{\n    int num; //键值的数量\n    keytype key[3]; //键值\n    node2_3 *parent; //指向父结点的指针\n    node2_3 *child[4]; //指向孩子结点的指针数组\n    node2_3():num(0),parent(NULL){\n        for(int i=0;i<4;i++) child[i]=NULL;\n    }\n}*tree2_3;\n\n //在2-3树中查找键值k,如果存在,返回true,否则返回false\nbool search2_3(tree2_3 t,int k){\n    int i;\n    if(t==NULL) return false; //查找失败\n    for(i=0;i<t->num;i++){\n        if(t->key[i]>k) break; //键值属于第i个孩子结点\n        else if(t->key[i]==k) return true; //查找成功\n    }\n    return search2_3(t->child[i],k);\n}\n //在结点t中插入一个键值k,并返回插入键值的位置,如果键值已存在,则返回-1\nint add(tree2_3 &t,int k){\n    int i;\n    for(i=0;i<t->num;i++) if(t->key[i]==k) return -1;\n    for(i=t->num;i>0;i--){\n        if(t->key[i-1]>k){ //t中比k大的键值向右移动一位,孩子指针也相应移动\n            t->key[i]=t->key[i-1];\n            t->child[i+1]=t->child[i];\n        }\n        else break;\n    }\n    t->child[i+1]=t->child[i];\n    t->key[i]=k,t->num++; //插入键值,结点的键值数加1\n    return i;\n}\n\n //分裂结点t,此时t中有3个键值、4个孩子结点,t的父结点为tp\nvoid split(tree2_3 &t,tree2_3 &tp){\n    int flag=0;\n    if(tp==NULL) flag=1,tp=new node2_3; //t为根结点,需创建一个结点,作为新的根结点\n    //增加一个结点,该结点的键值为t中的最大键值,两个孩子结点为t的最右边的两个孩子\n    tree2_3 tmp=new node2_3;\n    tmp->num=1,tmp->key[0]=t->key[2];\n    tmp->child[0]=t->child[2],tmp->child[1]=t->child[3];\n    if(t->child[0]!=NULL){ //若t不是叶结点,则重新确定其右边两个结点的父结点\n        if(tmp->child[0]) tmp->child[0]->parent=tmp;\n        if(tmp->child[1]) tmp->child[1]->parent=tmp;\n    }\n    t->child[2]=t->child[3]=NULL;\n    t->num=1; //t只保留第一个键值\n    int k=add(tp,t->key[1]); //将中间键值加入父结点,k为加入的位置\n    tp->child[k]=t,tp->child[k+1]=tmp,tmp->parent=tp; //重新设置父子关系\n    if(flag) t->parent=tp,t=tp; //根结点发生变化,重设根结点\n}\n\n //向2-3树t中插入一个键值为k的结点\nvoid insert2_3(tree2_3 &t,int k){\n    int i;\n    if(t==NULL) t=new node2_3;\n    if(t->num==0){ //当前结点没有键值,直接在t中加入键值\n        add(t,k);\n        return;\n    }\n    for(i=0;i<t->num;i++){ //确定k位于t的哪一棵子树\n        if(t->key[i]>k) break; //k位于子树i\n        else if(t->key[i]==k) return; //k已存在\n    }\n    if(t->child[i]){ //t不是叶结点\n        insert2_3(t->child[i],k); //进入子树i\n        if(t->num==3) split(t,t->parent); //回退时,如果t的键值变为3个,则进行分裂操作\n    }\n    else{ //到达叶结点\n        add(t,k); //将k加入结点t中\n        if(t->num==3) split(t,t->parent); //如果t的键值为3,则进行分裂操作\n    }\n}\nvoid delete2_3_first(tree2_3 &rt,tree2_3 &t){\n    if(t==NULL) return;\n\n    tree2_3 removed=t; //t可能引用父结点的孩子槽，移动槽位前保存原指针\n    //已有下溢的父结点 num==0 时只调整结构，不再减为 -1\n    if(t->num>0){\n        for(int i=0;i<t->num-1;i++) t->key[i]=t->key[i+1];\n        t->num--;\n    }\n    if(t->num>0) return; //删除后仍为2-结点,结束\n\n    //以下处理t中没有键值的情形\n    if(t==rt){\n        //根结点没有键值\n        rt=t->child[0];\n        if(rt!=NULL) rt->parent=NULL;\n        delete removed;\n        return;\n    }\n\n    tree2_3 tp=t->parent;\n    int i=0;\n    while(i<=tp->num && tp->child[i]!=t) i++;\n    if(i>tp->num) return;\n\n    //情形(2.1):左兄弟为3-结点\n    if(i>0 && tp->child[i-1]->num>1){\n        tree2_3 tb=tp->child[i-1];\n\n        t->key[0]=tp->key[i-1];\n        tp->key[i-1]=tb->key[tb->num-1];\n\n        t->child[1]=t->child[0];\n        t->child[0]=tb->child[tb->num];\n\n        if(t->child[0]!=NULL)\n            t->child[0]->parent=t;\n\n        tb->child[tb->num]=NULL;\n        t->num=1;\n        tb->num--;\n    }\n        //情形(2.1):右兄弟为3-结点\n    else if(i<tp->num && tp->child[i+1]->num>1){\n        tree2_3 tb=tp->child[i+1];\n\n        t->key[0]=tp->key[i];\n        tp->key[i]=tb->key[0];\n\n        t->child[1]=tb->child[0];\n        if(t->child[1]!=NULL)\n            t->child[1]->parent=t;\n\n        for(int j=0;j<tb->num-1;j++)\n            tb->key[j]=tb->key[j+1];\n\n        for(int j=0;j<tb->num;j++)\n            tb->child[j]=tb->child[j+1];\n\n        tb->child[tb->num]=NULL;\n        t->num=1;\n        tb->num--;\n    }\n        //情形(2.2):父结点为3-结点,与兄弟合并\n    else if(tp->num>1){\n        if(i>0){\n            tree2_3 tb=tp->child[i-1];\n\n            tb->key[1]=tp->key[i-1];\n            tb->child[2]=t->child[0];\n\n            if(tb->child[2]!=NULL)\n                tb->child[2]->parent=tb;\n\n            tb->num=2;\n\n            for(int j=i-1;j<tp->num-1;j++)\n                tp->key[j]=tp->key[j+1];\n\n            for(int j=i;j<tp->num;j++)\n                tp->child[j]=tp->child[j+1];\n\n            tp->child[tp->num]=NULL;\n            tp->num--;\n        }\n        else{\n            tree2_3 tb=tp->child[1];\n\n            tb->key[1]=tb->key[0];\n            tb->key[0]=tp->key[0];\n\n            tb->child[2]=tb->child[1];\n            tb->child[1]=tb->child[0];\n            tb->child[0]=t->child[0];\n\n            if(tb->child[0]!=NULL)\n                tb->child[0]->parent=tb;\n\n            tb->num=2;\n            tp->key[0]=tp->key[1];\n            tp->child[0]=tb;\n            tp->child[1]=tp->child[2];\n            tp->child[2]=NULL;\n            tp->num--;\n        }\n\n        delete removed;\n    }\n        //情形(2.3):父结点为2-结点,合并后向上调整\n    else{\n        tree2_3 tb;\n\n        if(i>0){\n            //t为右分支,与左兄弟合并\n            tb=tp->child[0];\n\n            tb->key[1]=tp->key[0];\n            tb->child[2]=t->child[0];\n\n            if(tb->child[2]!=NULL)\n                tb->child[2]->parent=tb;\n\n            tb->num=2;\n            delete removed;\n        }\n        else{\n            //t为左分支,与右兄弟合并\n            tb=tp->child[1];\n\n            tb->key[1]=tb->key[0];\n            tb->key[0]=tp->key[0];\n\n            tb->child[2]=tb->child[1];\n            tb->child[1]=tb->child[0];\n            tb->child[0]=t->child[0];\n\n            if(tb->child[0]!=NULL)\n                tb->child[0]->parent=tb;\n\n            tb->num=2;\n            delete removed;\n        }\n\n        tp->child[0]=tb;\n        tp->child[1]=NULL;\n        tb->parent=tp;\n        tp->num=0;\n\n        //继续检查父结点\n        if(tp==rt){\n            rt=tb;\n            tb->parent=NULL;\n            delete tp;\n        }\n        else{\n            delete2_3_first(rt,tp);\n        }\n    }\n}\n\n //删除2-3树t中键值为key的结点,rt为2-3树的根结点\nvoid delete2_3(tree2_3 &rt,tree2_3 &t,int key){\n    int i;\n    if(t==NULL) return;\n\n    for(i=0;i<t->num;i++){\n        if(t->key[i]>key) break;\n        else if(t->key[i]==key){\n            //找到key的后继键值所在的叶结点\n            if(t->child[0]!=NULL){\n                tree2_3 tmp=t->child[i+1];\n\n                while(tmp->child[0]!=NULL)\n                    tmp=tmp->child[0];\n\n                //用后继键值取代要删除的键值\n                t->key[i]=tmp->key[0];\n\n                //删除后继叶结点的第一个键值\n                delete2_3_first(rt,tmp);\n                return;\n            }\n\n            //t本身为叶结点\n            if(i>0){\n                //将待删除键值移到第一个位置\n                for(int j=i;j>0;j--)\n                    t->key[j]=t->key[j-1];\n            }\n\n            delete2_3_first(rt,t);\n            return;\n        }\n    }\n\n    //进入相应子树继续查找\n    if(t->child[i]!=NULL)\n        delete2_3(rt,t->child[i],key);\n}\n\nvoid show(tree2_3 t){if(!t){cout<<\"# \";return;}cout<<\"[\";for(int i=0;i<t->num;i++){if(i)cout<<\",\";cout<<t->key[i];}cout<<\"] \";for(int i=0;i<=t->num;i++)show(t->child[i]);}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;tree2_3 t=NULL;while(n--){int k;cin>>k;insert2_3(t,k);}int q;cin>>q;while(q--){int k;cin>>k;bool existed=search2_3(t,k);insert2_3(t,k);cout<<!existed<<\" \";}cout<<\"\\n\";show(t);\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空树",
        "stdin": "0\n\n1\n5\n",
        "expected": "1\n[5] # #"
      },
      {
        "name": "分裂/旋转/删除",
        "stdin": "2\n2 1\n3\n3 3 4\n",
        "expected": "1 0 1\n[2] [1] # # [3,4] # # #"
      },
      {
        "name": "重复与根变化",
        "stdin": "3\n2 1 3\n2\n0 5\n",
        "expected": "1 1\n[2] [0,1] # # # [3,5] # # #"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "s-tt-delete",
    "title": "2-3树 · 删除与结构",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "pxmrn0a4cfzsfyab",
        "blocks": [
          0,
          1,
          2,
          3,
          4,
          5,
          6
        ],
        "functions": [
          "delete2_3",
          "delete2_3_first"
        ]
      }
    ],
    "description": "依输入顺序建立原笔记的2-3树，重复键不插入。逐个执行删除，输出是否成功。最后输出实际结构，必须维护平衡关系；不能仅输出排序后的集合。",
    "input": "n\nn个初始键\nq\nq个操作键。",
    "output": "第一行q个0/1。第二行先序结构：每节点为[k1]或[k1,k2]，接着递归输出num+1个孩子；空指针#。",
    "constraints": [
      "0≤n,q≤100",
      "-10000≤key≤10000"
    ],
    "samples": [
      {
        "stdin": "0\n\n2\n1 2\n",
        "expected": "0 0\n#",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "1\n5\n2\n5 5\n",
        "expected": "1 0\n#",
        "explanation": "边界样例：分裂/旋转/删除"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个初始键；q；q个操作键。\n// 输出：第一行q个0/1。第二行先序结构：每节点为[k1]或[k1,k2]，接着递归输出num+1个孩子；空指针#。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\ntypedef struct node2_3{\n    int num; //键值的数量\n    keytype key[3]; //键值\n    node2_3 *parent; //指向父结点的指针\n    node2_3 *child[4]; //指向孩子结点的指针数组\n    node2_3():num(0),parent(NULL){\n        for(int i=0;i<4;i++) child[i]=NULL;\n    }\n}*tree2_3;\n\n //在2-3树中查找键值k,如果存在,返回true,否则返回false\nbool search2_3(tree2_3 t,int k){\n    int i;\n    if(t==NULL) return false; //查找失败\n    for(i=0;i<t->num;i++){\n        if(t->key[i]>k) break; //键值属于第i个孩子结点\n        else if(t->key[i]==k) return true; //查找成功\n    }\n    return search2_3(t->child[i],k);\n}\n //在结点t中插入一个键值k,并返回插入键值的位置,如果键值已存在,则返回-1\nint add(tree2_3 &t,int k){\n    int i;\n    for(i=0;i<t->num;i++) if(t->key[i]==k) return -1;\n    for(i=t->num;i>0;i--){\n        if(t->key[i-1]>k){ //t中比k大的键值向右移动一位,孩子指针也相应移动\n            t->key[i]=t->key[i-1];\n            t->child[i+1]=t->child[i];\n        }\n        else break;\n    }\n    t->child[i+1]=t->child[i];\n    t->key[i]=k,t->num++; //插入键值,结点的键值数加1\n    return i;\n}\n\n //分裂结点t,此时t中有3个键值、4个孩子结点,t的父结点为tp\nvoid split(tree2_3 &t,tree2_3 &tp){\n    int flag=0;\n    if(tp==NULL) flag=1,tp=new node2_3; //t为根结点,需创建一个结点,作为新的根结点\n    //增加一个结点,该结点的键值为t中的最大键值,两个孩子结点为t的最右边的两个孩子\n    tree2_3 tmp=new node2_3;\n    tmp->num=1,tmp->key[0]=t->key[2];\n    tmp->child[0]=t->child[2],tmp->child[1]=t->child[3];\n    if(t->child[0]!=NULL){ //若t不是叶结点,则重新确定其右边两个结点的父结点\n        if(tmp->child[0]) tmp->child[0]->parent=tmp;\n        if(tmp->child[1]) tmp->child[1]->parent=tmp;\n    }\n    t->child[2]=t->child[3]=NULL;\n    t->num=1; //t只保留第一个键值\n    int k=add(tp,t->key[1]); //将中间键值加入父结点,k为加入的位置\n    tp->child[k]=t,tp->child[k+1]=tmp,tmp->parent=tp; //重新设置父子关系\n    if(flag) t->parent=tp,t=tp; //根结点发生变化,重设根结点\n}\n\n //向2-3树t中插入一个键值为k的结点\nvoid insert2_3(tree2_3 &t,int k){\n    int i;\n    if(t==NULL) t=new node2_3;\n    if(t->num==0){ //当前结点没有键值,直接在t中加入键值\n        add(t,k);\n        return;\n    }\n    for(i=0;i<t->num;i++){ //确定k位于t的哪一棵子树\n        if(t->key[i]>k) break; //k位于子树i\n        else if(t->key[i]==k) return; //k已存在\n    }\n    if(t->child[i]){ //t不是叶结点\n        insert2_3(t->child[i],k); //进入子树i\n        if(t->num==3) split(t,t->parent); //回退时,如果t的键值变为3个,则进行分裂操作\n    }\n    else{ //到达叶结点\n        add(t,k); //将k加入结点t中\n        if(t->num==3) split(t,t->parent); //如果t的键值为3,则进行分裂操作\n    }\n}\nvoid delete2_3_first(tree2_3 &rt,tree2_3 &t){\n    if(t==NULL) return;\n\n    tree2_3 removed=t; //t可能引用父结点的孩子槽，移动槽位前保存原指针\n    //已有下溢的父结点 num==0 时只调整结构，不再减为 -1\n    if(t->num>0){\n        for(int i=0;i<t->num-1;i++) t->key[i]=t->key[i+1];\n        t->num--;\n    }\n    if(t->num>0) return; //删除后仍为2-结点,结束\n\n    //以下处理t中没有键值的情形\n    if(t==rt){\n        //根结点没有键值\n        rt=t->child[0];\n        if(rt!=NULL) rt->parent=NULL;\n        delete removed;\n        return;\n    }\n\n    tree2_3 tp=t->parent;\n    int i=0;\n    while(i<=tp->num && tp->child[i]!=t) i++;\n    if(i>tp->num) return;\n\n    //情形(2.1):左兄弟为3-结点\n    if(i>0 && tp->child[i-1]->num>1){\n        tree2_3 tb=tp->child[i-1];\n\n        t->key[0]=tp->key[i-1];\n        tp->key[i-1]=tb->key[tb->num-1];\n\n        t->child[1]=t->child[0];\n        t->child[0]=tb->child[tb->num];\n\n        if(t->child[0]!=NULL)\n            t->child[0]->parent=t;\n\n        tb->child[tb->num]=NULL;\n        t->num=1;\n        tb->num--;\n    }\n        //情形(2.1):右兄弟为3-结点\n    else if(i<tp->num && tp->child[i+1]->num>1){\n        tree2_3 tb=tp->child[i+1];\n\n        t->key[0]=tp->key[i];\n        tp->key[i]=tb->key[0];\n\n        t->child[1]=tb->child[0];\n        if(t->child[1]!=NULL)\n            t->child[1]->parent=t;\n\n        for(int j=0;j<tb->num-1;j++)\n            tb->key[j]=tb->key[j+1];\n\n        for(int j=0;j<tb->num;j++)\n            tb->child[j]=tb->child[j+1];\n\n        tb->child[tb->num]=NULL;\n        t->num=1;\n        tb->num--;\n    }\n        //情形(2.2):父结点为3-结点,与兄弟合并\n    else if(tp->num>1){\n        if(i>0){\n            tree2_3 tb=tp->child[i-1];\n\n            tb->key[1]=tp->key[i-1];\n            tb->child[2]=t->child[0];\n\n            if(tb->child[2]!=NULL)\n                tb->child[2]->parent=tb;\n\n            tb->num=2;\n\n            for(int j=i-1;j<tp->num-1;j++)\n                tp->key[j]=tp->key[j+1];\n\n            for(int j=i;j<tp->num;j++)\n                tp->child[j]=tp->child[j+1];\n\n            tp->child[tp->num]=NULL;\n            tp->num--;\n        }\n        else{\n            tree2_3 tb=tp->child[1];\n\n            tb->key[1]=tb->key[0];\n            tb->key[0]=tp->key[0];\n\n            tb->child[2]=tb->child[1];\n            tb->child[1]=tb->child[0];\n            tb->child[0]=t->child[0];\n\n            if(tb->child[0]!=NULL)\n                tb->child[0]->parent=tb;\n\n            tb->num=2;\n            tp->key[0]=tp->key[1];\n            tp->child[0]=tb;\n            tp->child[1]=tp->child[2];\n            tp->child[2]=NULL;\n            tp->num--;\n        }\n\n        delete removed;\n    }\n        //情形(2.3):父结点为2-结点,合并后向上调整\n    else{\n        tree2_3 tb;\n\n        if(i>0){\n            //t为右分支,与左兄弟合并\n            tb=tp->child[0];\n\n            tb->key[1]=tp->key[0];\n            tb->child[2]=t->child[0];\n\n            if(tb->child[2]!=NULL)\n                tb->child[2]->parent=tb;\n\n            tb->num=2;\n            delete removed;\n        }\n        else{\n            //t为左分支,与右兄弟合并\n            tb=tp->child[1];\n\n            tb->key[1]=tb->key[0];\n            tb->key[0]=tp->key[0];\n\n            tb->child[2]=tb->child[1];\n            tb->child[1]=tb->child[0];\n            tb->child[0]=t->child[0];\n\n            if(tb->child[0]!=NULL)\n                tb->child[0]->parent=tb;\n\n            tb->num=2;\n            delete removed;\n        }\n\n        tp->child[0]=tb;\n        tp->child[1]=NULL;\n        tb->parent=tp;\n        tp->num=0;\n\n        //继续检查父结点\n        if(tp==rt){\n            rt=tb;\n            tb->parent=NULL;\n            delete tp;\n        }\n        else{\n            delete2_3_first(rt,tp);\n        }\n    }\n}\n\n //删除2-3树t中键值为key的结点,rt为2-3树的根结点\nvoid delete2_3(tree2_3 &rt,tree2_3 &t,int key){\n    int i;\n    if(t==NULL) return;\n\n    for(i=0;i<t->num;i++){\n        if(t->key[i]>key) break;\n        else if(t->key[i]==key){\n            //找到key的后继键值所在的叶结点\n            if(t->child[0]!=NULL){\n                tree2_3 tmp=t->child[i+1];\n\n                while(tmp->child[0]!=NULL)\n                    tmp=tmp->child[0];\n\n                //用后继键值取代要删除的键值\n                t->key[i]=tmp->key[0];\n\n                //删除后继叶结点的第一个键值\n                delete2_3_first(rt,tmp);\n                return;\n            }\n\n            //t本身为叶结点\n            if(i>0){\n                //将待删除键值移到第一个位置\n                for(int j=i;j>0;j--)\n                    t->key[j]=t->key[j-1];\n            }\n\n            delete2_3_first(rt,t);\n            return;\n        }\n    }\n\n    //进入相应子树继续查找\n    if(t->child[i]!=NULL)\n        delete2_3(rt,t->child[i],key);\n}\n\nvoid show(tree2_3 t){if(!t){cout<<\"# \";return;}cout<<\"[\";for(int i=0;i<t->num;i++){if(i)cout<<\",\";cout<<t->key[i];}cout<<\"] \";for(int i=0;i<=t->num;i++)show(t->child[i]);}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;tree2_3 t=NULL;while(n--){int k;cin>>k;insert2_3(t,k);}int q;cin>>q;while(q--){int k;cin>>k;bool existed=search2_3(t,k);delete2_3(t,t,k);cout<<existed<<\" \";}cout<<\"\\n\";show(t);\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空树",
        "stdin": "0\n\n2\n1 2\n",
        "expected": "0 0\n#"
      },
      {
        "name": "分裂/旋转/删除",
        "stdin": "1\n5\n2\n5 5\n",
        "expected": "1 0\n#"
      },
      {
        "name": "重复与根变化",
        "stdin": "3\n2 1 3\n1\n1\n",
        "expected": "1\n[2,3] # # #"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "s-trie-search",
    "title": "Trie · 查找",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "yrvn9hbmegw2rrux",
        "blocks": [
          0,
          1,
          2,
          3
        ],
        "functions": [
          "trie_search"
        ]
      }
    ],
    "description": "按顺序插入初始键，然后逐个操作。输出键的完整单词出现次数，不能把仅有共同前缀当作匹配。参考使用笔记实际节点和26字母分支及结束标记。",
    "input": "n\nn个初始键\nq\nq个操作键。",
    "output": "每次操作一行，格式见题面。",
    "constraints": [
      "0≤n,q≤100",
      "每个单词为1..30个小写英文字母"
    ],
    "samples": [
      {
        "stdin": "0\n\n3\napple apple z\n",
        "expected": "0\n0\n0",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "3\napp apple app\n3\napp apple a\n",
        "expected": "2\n1\n0",
        "explanation": "边界样例：前缀/负数区分"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个初始键；q；q个操作键。\n// 输出：每次操作一行，格式见题面。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n#define BS 27 /* 字母的长度 */\ntypedef struct trieNode{\n    trieNode *branch[BS];\n    int cnt;\n    trieNode():cnt(0){\n        for(int i=0;i<BS;i++)\n            branch[i]=NULL;\n    }\n}*trieTree;\n//查找Trie树t中是否存在键值k。若存在,返回键值的数量,否则返回0\nint trie_search(trieTree t,string k){\n    if(t==NULL) return 0;\n    for(char ch:k) if(ch<'a' || ch>'z') return 0;\n    k+='S';\n    int i,pos,sz=k.size();\n    for(i=0;i<sz;i++){\n        pos=k[i]!='S' ? k[i]-'a' : BS-1; //依次检查k的每一个字符\n        if(t->branch[pos]==NULL) return 0; //查找失败\n        t=t->branch[pos]; //进入下一个分支\n    }\n    if(t!=NULL) return t->cnt; //到达叶结点\n    return 0;\n}\n//在Trie树t中插入一个键值k\nvoid trie_insert(trieTree &t,string k){\n    for(char ch:k) if(ch<'a' || ch>'z') return;\n    if(t==NULL) t=new trieNode; //生成根结点\n    k+='S';\n\n    int i,pos,sz=k.size();\n    trieTree tmp=t;\n    for(i=0;i<sz;i++){\n        tmp->cnt++; //字符串经过结点tmp,其cnt加1\n        pos=k[i]!='S' ? k[i]-'a' : BS-1; //下一个分支的编号\n        if(tmp->branch[pos]==NULL) //分支不存在,创建分支\n            tmp->branch[pos]=new trieNode;\n        tmp=tmp->branch[pos]; //进入下一分支\n    }\n    tmp->cnt++; //叶结点的cnt加1\n}\n//删除树t中的键值k。删除成功返回1,否则返回0。dep为当前所处的层数,succ标志是否删除成功\nint trie_delete(trieTree &t,string k,int dep,int &succ){\n    if(dep==0){\n        succ=0;\n        for(char ch:k) if(ch<'a' || ch>'z') return 0;\n        k+='S';\n    }\n    if(t==NULL) return 0; //空树或不存在的分支\n    int i,pos,ret;\n    if(dep==k.size()){\n        succ=1; return 1; //找到键值,删除成功\n    }\n\n    pos=k[dep]!='S' ? k[dep]-'a' : BS-1; //下一个分支的编号\n    if(t->branch[pos]!=NULL){\n        trieTree &tmp=t->branch[pos];\n        ret=trie_delete(tmp,k,dep+1,succ); //进入下一个分支\n        if(succ){\n            if(--tmp->cnt==0) //回退时,如果删除成功,则调整结点的cnt\n                delete tmp,tmp=NULL;\n            if(dep==0 && --t->cnt==0) //根结点特别处理\n                delete t,t=NULL;\n        }\n    }\n    else{\n        succ=0;\n        return 0;\n    }\n    return ret;\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;trieTree t=NULL;while(n--){string k;cin>>k;trie_insert(t,k);}int q;cin>>q;while(q--){string k;cin>>k;cout<<trie_search(t,k);cout<<\"\\n\";}\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空结构和重复键",
        "stdin": "0\n\n3\napple apple z\n",
        "expected": "0\n0\n0"
      },
      {
        "name": "前缀/负数区分",
        "stdin": "3\napp apple app\n3\napp apple a\n",
        "expected": "2\n1\n0"
      },
      {
        "name": "重复删除",
        "stdin": "2\na b\n3\na a b\n",
        "expected": "1\n1\n1"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "s-trie-insert",
    "title": "Trie · 插入",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "yrvn9hbmegw2rrux",
        "blocks": [
          0,
          1,
          2,
          3
        ],
        "functions": [
          "trie_insert"
        ]
      }
    ],
    "description": "按顺序插入初始键，然后逐个操作。每次插入一份单词，输出插入后该完整单词的数量。参考使用笔记实际节点和26字母分支及结束标记。",
    "input": "n\nn个初始键\nq\nq个操作键。",
    "output": "每次操作一行，格式见题面。",
    "constraints": [
      "0≤n,q≤100",
      "每个单词为1..30个小写英文字母"
    ],
    "samples": [
      {
        "stdin": "0\n\n3\napple apple z\n",
        "expected": "1\n2\n1",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "3\napp apple app\n3\napp apple a\n",
        "expected": "3\n2\n1",
        "explanation": "边界样例：前缀/负数区分"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个初始键；q；q个操作键。\n// 输出：每次操作一行，格式见题面。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n#define BS 27 /* 字母的长度 */\ntypedef struct trieNode{\n    trieNode *branch[BS];\n    int cnt;\n    trieNode():cnt(0){\n        for(int i=0;i<BS;i++)\n            branch[i]=NULL;\n    }\n}*trieTree;\n//查找Trie树t中是否存在键值k。若存在,返回键值的数量,否则返回0\nint trie_search(trieTree t,string k){\n    if(t==NULL) return 0;\n    for(char ch:k) if(ch<'a' || ch>'z') return 0;\n    k+='S';\n    int i,pos,sz=k.size();\n    for(i=0;i<sz;i++){\n        pos=k[i]!='S' ? k[i]-'a' : BS-1; //依次检查k的每一个字符\n        if(t->branch[pos]==NULL) return 0; //查找失败\n        t=t->branch[pos]; //进入下一个分支\n    }\n    if(t!=NULL) return t->cnt; //到达叶结点\n    return 0;\n}\n//在Trie树t中插入一个键值k\nvoid trie_insert(trieTree &t,string k){\n    for(char ch:k) if(ch<'a' || ch>'z') return;\n    if(t==NULL) t=new trieNode; //生成根结点\n    k+='S';\n\n    int i,pos,sz=k.size();\n    trieTree tmp=t;\n    for(i=0;i<sz;i++){\n        tmp->cnt++; //字符串经过结点tmp,其cnt加1\n        pos=k[i]!='S' ? k[i]-'a' : BS-1; //下一个分支的编号\n        if(tmp->branch[pos]==NULL) //分支不存在,创建分支\n            tmp->branch[pos]=new trieNode;\n        tmp=tmp->branch[pos]; //进入下一分支\n    }\n    tmp->cnt++; //叶结点的cnt加1\n}\n//删除树t中的键值k。删除成功返回1,否则返回0。dep为当前所处的层数,succ标志是否删除成功\nint trie_delete(trieTree &t,string k,int dep,int &succ){\n    if(dep==0){\n        succ=0;\n        for(char ch:k) if(ch<'a' || ch>'z') return 0;\n        k+='S';\n    }\n    if(t==NULL) return 0; //空树或不存在的分支\n    int i,pos,ret;\n    if(dep==k.size()){\n        succ=1; return 1; //找到键值,删除成功\n    }\n\n    pos=k[dep]!='S' ? k[dep]-'a' : BS-1; //下一个分支的编号\n    if(t->branch[pos]!=NULL){\n        trieTree &tmp=t->branch[pos];\n        ret=trie_delete(tmp,k,dep+1,succ); //进入下一个分支\n        if(succ){\n            if(--tmp->cnt==0) //回退时,如果删除成功,则调整结点的cnt\n                delete tmp,tmp=NULL;\n            if(dep==0 && --t->cnt==0) //根结点特别处理\n                delete t,t=NULL;\n        }\n    }\n    else{\n        succ=0;\n        return 0;\n    }\n    return ret;\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;trieTree t=NULL;while(n--){string k;cin>>k;trie_insert(t,k);}int q;cin>>q;while(q--){string k;cin>>k;trie_insert(t,k);cout<<trie_search(t,k);cout<<\"\\n\";}\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空结构和重复键",
        "stdin": "0\n\n3\napple apple z\n",
        "expected": "1\n2\n1"
      },
      {
        "name": "前缀/负数区分",
        "stdin": "3\napp apple app\n3\napp apple a\n",
        "expected": "3\n2\n1"
      },
      {
        "name": "重复删除",
        "stdin": "2\na b\n3\na a b\n",
        "expected": "2\n3\n2"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "s-trie-delete",
    "title": "Trie · 删除",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "yrvn9hbmegw2rrux",
        "blocks": [
          0,
          1,
          2,
          3
        ],
        "functions": [
          "trie_delete"
        ]
      }
    ],
    "description": "按顺序插入初始键，然后逐个操作。每次只删除一份；输出是否成功及删除后的单词数量。参考使用笔记实际节点和26字母分支及结束标记。",
    "input": "n\nn个初始键\nq\nq个操作键。",
    "output": "每次操作一行，格式见题面。",
    "constraints": [
      "0≤n,q≤100",
      "每个单词为1..30个小写英文字母"
    ],
    "samples": [
      {
        "stdin": "0\n\n3\napple apple z\n",
        "expected": "0 0\n0 0\n0 0",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "3\napp apple app\n3\napp apple a\n",
        "expected": "1 1\n1 0\n0 0",
        "explanation": "边界样例：前缀/负数区分"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个初始键；q；q个操作键。\n// 输出：每次操作一行，格式见题面。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n#define BS 27 /* 字母的长度 */\ntypedef struct trieNode{\n    trieNode *branch[BS];\n    int cnt;\n    trieNode():cnt(0){\n        for(int i=0;i<BS;i++)\n            branch[i]=NULL;\n    }\n}*trieTree;\n//查找Trie树t中是否存在键值k。若存在,返回键值的数量,否则返回0\nint trie_search(trieTree t,string k){\n    if(t==NULL) return 0;\n    for(char ch:k) if(ch<'a' || ch>'z') return 0;\n    k+='S';\n    int i,pos,sz=k.size();\n    for(i=0;i<sz;i++){\n        pos=k[i]!='S' ? k[i]-'a' : BS-1; //依次检查k的每一个字符\n        if(t->branch[pos]==NULL) return 0; //查找失败\n        t=t->branch[pos]; //进入下一个分支\n    }\n    if(t!=NULL) return t->cnt; //到达叶结点\n    return 0;\n}\n//在Trie树t中插入一个键值k\nvoid trie_insert(trieTree &t,string k){\n    for(char ch:k) if(ch<'a' || ch>'z') return;\n    if(t==NULL) t=new trieNode; //生成根结点\n    k+='S';\n\n    int i,pos,sz=k.size();\n    trieTree tmp=t;\n    for(i=0;i<sz;i++){\n        tmp->cnt++; //字符串经过结点tmp,其cnt加1\n        pos=k[i]!='S' ? k[i]-'a' : BS-1; //下一个分支的编号\n        if(tmp->branch[pos]==NULL) //分支不存在,创建分支\n            tmp->branch[pos]=new trieNode;\n        tmp=tmp->branch[pos]; //进入下一分支\n    }\n    tmp->cnt++; //叶结点的cnt加1\n}\n//删除树t中的键值k。删除成功返回1,否则返回0。dep为当前所处的层数,succ标志是否删除成功\nint trie_delete(trieTree &t,string k,int dep,int &succ){\n    if(dep==0){\n        succ=0;\n        for(char ch:k) if(ch<'a' || ch>'z') return 0;\n        k+='S';\n    }\n    if(t==NULL) return 0; //空树或不存在的分支\n    int i,pos,ret;\n    if(dep==k.size()){\n        succ=1; return 1; //找到键值,删除成功\n    }\n\n    pos=k[dep]!='S' ? k[dep]-'a' : BS-1; //下一个分支的编号\n    if(t->branch[pos]!=NULL){\n        trieTree &tmp=t->branch[pos];\n        ret=trie_delete(tmp,k,dep+1,succ); //进入下一个分支\n        if(succ){\n            if(--tmp->cnt==0) //回退时,如果删除成功,则调整结点的cnt\n                delete tmp,tmp=NULL;\n            if(dep==0 && --t->cnt==0) //根结点特别处理\n                delete t,t=NULL;\n        }\n    }\n    else{\n        succ=0;\n        return 0;\n    }\n    return ret;\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;trieTree t=NULL;while(n--){string k;cin>>k;trie_insert(t,k);}int q;cin>>q;while(q--){string k;cin>>k;int succ=0;trie_delete(t,k,0,succ);cout<<succ<<\" \"<<trie_search(t,k);cout<<\"\\n\";}\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空结构和重复键",
        "stdin": "0\n\n3\napple apple z\n",
        "expected": "0 0\n0 0\n0 0"
      },
      {
        "name": "前缀/负数区分",
        "stdin": "3\napp apple app\n3\napp apple a\n",
        "expected": "1 1\n1 0\n0 0"
      },
      {
        "name": "重复删除",
        "stdin": "2\na b\n3\na a b\n",
        "expected": "1 0\n0 0\n1 0"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "s-hash-search",
    "title": "散列树 · 查找",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "ocd9lro158k0h9og",
        "blocks": [
          0,
          1,
          2,
          3
        ],
        "functions": [
          "htree_search"
        ]
      }
    ],
    "description": "按顺序插入初始键，然后逐个操作。查找完整整数键，存在输出1，不存在0。参考使用笔记实际节点和逐层质数取模分支，不用set替换。",
    "input": "n\nn个初始键\nq\nq个操作键。",
    "output": "每次操作一行，格式见题面。",
    "constraints": [
      "0≤n,q≤100",
      "-10000≤键≤10000"
    ],
    "samples": [
      {
        "stdin": "0\n\n3\n-3 -3 4\n",
        "expected": "0\n0\n0",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "3\n-3 5 9\n3\n-3 9 8\n",
        "expected": "1\n1\n0",
        "explanation": "边界样例：前缀/负数区分"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个初始键；q；q个操作键。\n// 输出：每次操作一行，格式见题面。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\nconst int p[10]={2,3,5,7,11,13,17,19,23,29};\n\ntypedef struct htNode{\n    int key;\n    bool occupied;\n    htNode *cn[29];\n\n    htNode():key(0),occupied(false){\n        for(int i=0;i<29;i++)\n            cn[i]=NULL;\n    }\n}*hashTree;\nint htree_search(hashTree ht,int k,int dep){\n    if(ht==NULL) return 0;\n    else if(ht->occupied && ht->key==k)\n        return 1;\n    else{\n        if(dep>=10) return 0;\n        int c=(k%p[dep]+p[dep])%p[dep];\n        return htree_search(ht->cn[c],k,dep+1);\n    }\n}\n//在散列树ht中插入键值k。插入成功,返回true;否则返回false\nbool htree_insert(hashTree &ht,int k,int dep=0){\n    if(ht==NULL) ht=new htNode;\n    if(htree_search(ht,k,dep)) return false; //删除标记下方也可能已有同键\n    if(ht->occupied==false){ //结点中的键值已被删除\n        ht->key=k,ht->occupied=true;\n        return true;\n    }\n    else if(ht->key==k) //ht中已存在键值为k的结点\n        return false;\n\n    if(dep>=10) return false;\n    int c=(k%p[dep]+p[dep])%p[dep]; //下一个分支的编号\n    if(ht->cn[c]==NULL){ //结点为空,创建新结点\n        ht->cn[c]=new htNode;\n        ht->cn[c]->key=k; ht->cn[c]->occupied=true; //occupied默认为true\n        return true;\n    }\n    else\n        return htree_insert(ht->cn[c],k,dep+1); //进入下一层\n}\n//删除散列树ht中的键值k。删除成功返回true,否则返回false\nbool htree_delete(hashTree ht,int k,int dep=0){\n    if(ht==NULL) return false;\n    if(ht->occupied && ht->key==k){ //查找到键值k\n        ht->occupied=false;\n        return true;\n    }\n    if(dep>=10) return false;\n    int c=(k%p[dep]+p[dep])%p[dep];\n    return htree_delete(ht->cn[c],k,dep+1);\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;hashTree t=NULL;while(n--){int k;cin>>k;htree_insert(t,k);}int q;cin>>q;while(q--){int k;cin>>k;cout<<htree_search(t,k,0)<<\"\\n\";}\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空结构和重复键",
        "stdin": "0\n\n3\n-3 -3 4\n",
        "expected": "0\n0\n0"
      },
      {
        "name": "前缀/负数区分",
        "stdin": "3\n-3 5 9\n3\n-3 9 8\n",
        "expected": "1\n1\n0"
      },
      {
        "name": "重复删除",
        "stdin": "2\n2 3\n3\n2 2 3\n",
        "expected": "1\n1\n1"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "s-hash-insert",
    "title": "散列树 · 插入",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "ocd9lro158k0h9og",
        "blocks": [
          0,
          1,
          2,
          3
        ],
        "functions": [
          "htree_insert"
        ]
      }
    ],
    "description": "按顺序插入初始键，然后逐个操作。只允许互异键；新插入输出1，重复键输出0。参考使用笔记实际节点和逐层质数取模分支，不用set替换。",
    "input": "n\nn个初始键\nq\nq个操作键。",
    "output": "每次操作一行，格式见题面。",
    "constraints": [
      "0≤n,q≤100",
      "-10000≤键≤10000"
    ],
    "samples": [
      {
        "stdin": "0\n\n3\n-3 -3 4\n",
        "expected": "1\n0\n1",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "3\n-3 5 9\n3\n-3 9 8\n",
        "expected": "0\n0\n1",
        "explanation": "边界样例：前缀/负数区分"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个初始键；q；q个操作键。\n// 输出：每次操作一行，格式见题面。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\nconst int p[10]={2,3,5,7,11,13,17,19,23,29};\n\ntypedef struct htNode{\n    int key;\n    bool occupied;\n    htNode *cn[29];\n\n    htNode():key(0),occupied(false){\n        for(int i=0;i<29;i++)\n            cn[i]=NULL;\n    }\n}*hashTree;\nint htree_search(hashTree ht,int k,int dep){\n    if(ht==NULL) return 0;\n    else if(ht->occupied && ht->key==k)\n        return 1;\n    else{\n        if(dep>=10) return 0;\n        int c=(k%p[dep]+p[dep])%p[dep];\n        return htree_search(ht->cn[c],k,dep+1);\n    }\n}\n//在散列树ht中插入键值k。插入成功,返回true;否则返回false\nbool htree_insert(hashTree &ht,int k,int dep=0){\n    if(ht==NULL) ht=new htNode;\n    if(htree_search(ht,k,dep)) return false; //删除标记下方也可能已有同键\n    if(ht->occupied==false){ //结点中的键值已被删除\n        ht->key=k,ht->occupied=true;\n        return true;\n    }\n    else if(ht->key==k) //ht中已存在键值为k的结点\n        return false;\n\n    if(dep>=10) return false;\n    int c=(k%p[dep]+p[dep])%p[dep]; //下一个分支的编号\n    if(ht->cn[c]==NULL){ //结点为空,创建新结点\n        ht->cn[c]=new htNode;\n        ht->cn[c]->key=k; ht->cn[c]->occupied=true; //occupied默认为true\n        return true;\n    }\n    else\n        return htree_insert(ht->cn[c],k,dep+1); //进入下一层\n}\n//删除散列树ht中的键值k。删除成功返回true,否则返回false\nbool htree_delete(hashTree ht,int k,int dep=0){\n    if(ht==NULL) return false;\n    if(ht->occupied && ht->key==k){ //查找到键值k\n        ht->occupied=false;\n        return true;\n    }\n    if(dep>=10) return false;\n    int c=(k%p[dep]+p[dep])%p[dep];\n    return htree_delete(ht->cn[c],k,dep+1);\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;hashTree t=NULL;while(n--){int k;cin>>k;htree_insert(t,k);}int q;cin>>q;while(q--){int k;cin>>k;cout<<htree_insert(t,k)<<\"\\n\";}\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空结构和重复键",
        "stdin": "0\n\n3\n-3 -3 4\n",
        "expected": "1\n0\n1"
      },
      {
        "name": "前缀/负数区分",
        "stdin": "3\n-3 5 9\n3\n-3 9 8\n",
        "expected": "0\n0\n1"
      },
      {
        "name": "重复删除",
        "stdin": "2\n2 3\n3\n2 2 3\n",
        "expected": "0\n0\n0"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "s-hash-delete",
    "title": "散列树 · 删除",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "ocd9lro158k0h9og",
        "blocks": [
          0,
          1,
          2,
          3
        ],
        "functions": [
          "htree_delete"
        ]
      }
    ],
    "description": "按顺序插入初始键，然后逐个操作。存在时逻辑删除并输出1，不存在或已删输出0。参考使用笔记实际节点和逐层质数取模分支，不用set替换。",
    "input": "n\nn个初始键\nq\nq个操作键。",
    "output": "每次操作一行，格式见题面。",
    "constraints": [
      "0≤n,q≤100",
      "-10000≤键≤10000"
    ],
    "samples": [
      {
        "stdin": "0\n\n3\n-3 -3 4\n",
        "expected": "0\n0\n0",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "3\n-3 5 9\n3\n-3 9 8\n",
        "expected": "1\n1\n0",
        "explanation": "边界样例：前缀/负数区分"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n；n个初始键；q；q个操作键。\n// 输出：每次操作一行，格式见题面。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\nconst int p[10]={2,3,5,7,11,13,17,19,23,29};\n\ntypedef struct htNode{\n    int key;\n    bool occupied;\n    htNode *cn[29];\n\n    htNode():key(0),occupied(false){\n        for(int i=0;i<29;i++)\n            cn[i]=NULL;\n    }\n}*hashTree;\nint htree_search(hashTree ht,int k,int dep){\n    if(ht==NULL) return 0;\n    else if(ht->occupied && ht->key==k)\n        return 1;\n    else{\n        if(dep>=10) return 0;\n        int c=(k%p[dep]+p[dep])%p[dep];\n        return htree_search(ht->cn[c],k,dep+1);\n    }\n}\n//在散列树ht中插入键值k。插入成功,返回true;否则返回false\nbool htree_insert(hashTree &ht,int k,int dep=0){\n    if(ht==NULL) ht=new htNode;\n    if(htree_search(ht,k,dep)) return false; //删除标记下方也可能已有同键\n    if(ht->occupied==false){ //结点中的键值已被删除\n        ht->key=k,ht->occupied=true;\n        return true;\n    }\n    else if(ht->key==k) //ht中已存在键值为k的结点\n        return false;\n\n    if(dep>=10) return false;\n    int c=(k%p[dep]+p[dep])%p[dep]; //下一个分支的编号\n    if(ht->cn[c]==NULL){ //结点为空,创建新结点\n        ht->cn[c]=new htNode;\n        ht->cn[c]->key=k; ht->cn[c]->occupied=true; //occupied默认为true\n        return true;\n    }\n    else\n        return htree_insert(ht->cn[c],k,dep+1); //进入下一层\n}\n//删除散列树ht中的键值k。删除成功返回true,否则返回false\nbool htree_delete(hashTree ht,int k,int dep=0){\n    if(ht==NULL) return false;\n    if(ht->occupied && ht->key==k){ //查找到键值k\n        ht->occupied=false;\n        return true;\n    }\n    if(dep>=10) return false;\n    int c=(k%p[dep]+p[dep])%p[dep];\n    return htree_delete(ht->cn[c],k,dep+1);\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;hashTree t=NULL;while(n--){int k;cin>>k;htree_insert(t,k);}int q;cin>>q;while(q--){int k;cin>>k;cout<<htree_delete(t,k)<<\"\\n\";}\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空结构和重复键",
        "stdin": "0\n\n3\n-3 -3 4\n",
        "expected": "0\n0\n0"
      },
      {
        "name": "前缀/负数区分",
        "stdin": "3\n-3 5 9\n3\n-3 9 8\n",
        "expected": "1\n1\n0"
      },
      {
        "name": "重复删除",
        "stdin": "2\n2 3\n3\n2 2 3\n",
        "expected": "1\n0\n1"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "s-stl-map",
    "title": "STL map · 原例操作练习",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "wxd6uls7v918plpt",
        "blocks": [
          0
        ],
        "functions": [
          "map::insert",
          "map::erase",
          "map::find",
          "map::lower_bound",
          "map::clear"
        ]
      }
    ],
    "description": "容器初始为空，每行命令执行后输出一行。INSERT k v插入且不覆盖，输出是否新键；PUT k v覆盖/新增并输出值；GET k输出值或NONE；ERASE k输出删掉的元素数；SIZE输出数量；CLEAR清空后输出0；LOWER/UPPER k分别找不小于/大于k的首键，输出key:value，无结果NONE；PRINT按键序输出全部key:value，空容器EMPTY。",
    "input": "q\n接下来q行命令，格式见题面。",
    "output": "每条命令一行结果。",
    "constraints": [
      "1≤q≤100",
      "键为1..20个小写英文字母",
      "-10000≤value≤10000"
    ],
    "samples": [
      {
        "stdin": "6\nGET a\nLOWER a\nUPPER a\nSIZE\nCLEAR\nPRINT\n",
        "expected": "NONE\nNONE\nNONE\n0\n0\nEMPTY",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "10\nINSERT nanjing 1\nINSERT beijing 2\nINSERT nanjing 9\nPUT nanjing 7\nGET nanjing\nLOWER hangzhou\nUPPER nanjing\nPRINT\nERASE beijing\nSIZE\n",
        "expected": "1\n1\n0\n7\n7\nnanjing:7\nNONE\nbeijing:2 nanjing:7\n1\n1",
        "explanation": "边界样例：插入重复与有序查询"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：q；接下来q行命令，格式见题面。\n// 输出：每条命令一行结果。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint q;cin>>q;map<string,int>a;while(q--){string op,k;int v;cin>>op;if(op==\"INSERT\"){cin>>k>>v;cout<<a.insert({k,v}).second;}else if(op==\"PUT\"){cin>>k>>v;a[k]=v;cout<<a[k];}else if(op==\"GET\"){cin>>k;auto it=a.find(k);if(it==a.end())cout<<\"NONE\";else cout<<it->second;}else if(op==\"ERASE\"){cin>>k;cout<<a.erase(k);}else if(op==\"SIZE\")cout<<a.size();else if(op==\"CLEAR\"){a.clear();cout<<0;}else if(op==\"PRINT\"){if(a.empty())cout<<\"EMPTY\";else for(auto x:a)cout<<x.first<<\":\"<<x.second<<\" \";}else{cin>>k;auto it=op==\"LOWER\"?a.lower_bound(k):a.upper_bound(k);if(it==a.end())cout<<\"NONE\";else cout<<it->first<<\":\"<<it->second;}cout<<\"\\n\";}\nreturn 0;}\n",
    "referenceNote": "将原map/set示例参数化；保留实际标准容器操作。max_size取决于平台和分配器，不作为跨平台固定答案判题。",
    "cases": [
      {
        "name": "空容器与边界",
        "stdin": "6\nGET a\nLOWER a\nUPPER a\nSIZE\nCLEAR\nPRINT\n",
        "expected": "NONE\nNONE\nNONE\n0\n0\nEMPTY"
      },
      {
        "name": "插入重复与有序查询",
        "stdin": "10\nINSERT nanjing 1\nINSERT beijing 2\nINSERT nanjing 9\nPUT nanjing 7\nGET nanjing\nLOWER hangzhou\nUPPER nanjing\nPRINT\nERASE beijing\nSIZE\n",
        "expected": "1\n1\n0\n7\n7\nnanjing:7\nNONE\nbeijing:2 nanjing:7\n1\n1"
      },
      {
        "name": "清空和删除不存在",
        "stdin": "7\nPUT a -2\nPUT b 5\nUPPER a\nLOWER z\nERASE x\nCLEAR\nPRINT\n",
        "expected": "-2\n5\nb:5\nNONE\n0\n0\nEMPTY"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "s-stl-set",
    "title": "STL set · 原例操作练习",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "wxd6uls7v918plpt",
        "blocks": [
          1
        ],
        "functions": [
          "set::insert",
          "set::erase",
          "set::find",
          "set::lower_bound",
          "set::clear"
        ]
      }
    ],
    "description": "容器初始为空，每行命令执行后输出一行。INSERT k输出是否新键；HAS k输出0/1；ERASE k输出删掉的元素数；SIZE输出数量；CLEAR清空后输出0；LOWER/UPPER k分别找不小于/大于k的首键，输出key，无结果NONE；PRINT按键序输出全部key，空容器EMPTY。",
    "input": "q\n接下来q行命令，格式见题面。",
    "output": "每条命令一行结果。",
    "constraints": [
      "1≤q≤100",
      "键为1..20个小写英文字母",
      "-10000≤value≤10000"
    ],
    "samples": [
      {
        "stdin": "6\nHAS a\nLOWER a\nUPPER a\nSIZE\nCLEAR\nPRINT\n",
        "expected": "0\nNONE\nNONE\n0\n0\nEMPTY",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "9\nINSERT nanjing\nINSERT beijing\nINSERT nanjing\nHAS nanjing\nLOWER hangzhou\nUPPER nanjing\nPRINT\nERASE beijing\nSIZE\n",
        "expected": "1\n1\n0\n1\nnanjing\nNONE\nbeijing nanjing\n1\n1",
        "explanation": "边界样例：插入重复与有序查询"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：q；接下来q行命令，格式见题面。\n// 输出：每条命令一行结果。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint q;cin>>q;set<string>a;while(q--){string op,k;cin>>op;if(op==\"INSERT\"){cin>>k;cout<<a.insert(k).second;}else if(op==\"HAS\"){cin>>k;cout<<(a.find(k)!=a.end());}else if(op==\"ERASE\"){cin>>k;cout<<a.erase(k);}else if(op==\"SIZE\")cout<<a.size();else if(op==\"CLEAR\"){a.clear();cout<<0;}else if(op==\"PRINT\"){if(a.empty())cout<<\"EMPTY\";else for(auto x:a)cout<<x<<\" \";}else{cin>>k;auto it=op==\"LOWER\"?a.lower_bound(k):a.upper_bound(k);if(it==a.end())cout<<\"NONE\";else cout<<*it;}cout<<\"\\n\";}\nreturn 0;}\n",
    "referenceNote": "将原map/set示例参数化；保留实际标准容器操作。max_size取决于平台和分配器，不作为跨平台固定答案判题。",
    "cases": [
      {
        "name": "空容器与边界",
        "stdin": "6\nHAS a\nLOWER a\nUPPER a\nSIZE\nCLEAR\nPRINT\n",
        "expected": "0\nNONE\nNONE\n0\n0\nEMPTY"
      },
      {
        "name": "插入重复与有序查询",
        "stdin": "9\nINSERT nanjing\nINSERT beijing\nINSERT nanjing\nHAS nanjing\nLOWER hangzhou\nUPPER nanjing\nPRINT\nERASE beijing\nSIZE\n",
        "expected": "1\n1\n0\n1\nnanjing\nNONE\nbeijing nanjing\n1\n1"
      },
      {
        "name": "清空和删除不存在",
        "stdin": "7\nINSERT a\nINSERT b\nUPPER a\nLOWER z\nERASE x\nCLEAR\nPRINT\n",
        "expected": "1\n1\nb\nNONE\n0\n0\nEMPTY"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "s-btree-search",
    "title": "B 树概念 · 多键节点查找",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "ynt5rq1p87sknvbv",
        "blocks": [],
        "functions": [
          "多路节点查找（概念扩展）"
        ]
      }
    ],
    "description": "输入一棵已经构造好的有效B树，根编号1，0表示空孩子。每个节点的键递增，c个键对应c+1个孩子；所有数据键互异。查询完整键是否存在。此题练习多键节点的分支选择，不要求实现原笔记未提供的B树插入/删除。",
    "input": "节点数r\nr行：c，c个键，c+1个孩子编号\nq\nq个查询键。",
    "output": "按查询顺序输出0/1。",
    "constraints": [
      "1≤r≤30",
      "每节点1≤c≤4",
      "-10000≤key≤10000",
      "1≤q≤100；输入保证是有效B树"
    ],
    "samples": [
      {
        "stdin": "1\n1 5 0 0\n3\n5 4 6\n",
        "expected": "1 0 0",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "3\n1 4 2 3\n2 1 2 0 0 0\n2 6 8 0 0 0\n4\n1 4 8 3\n",
        "expected": "1 1 1 0",
        "explanation": "边界样例：多路分支"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：节点数r；r行：c，c个键，c+1个孩子编号；q；q个查询键。\n// 输出：按查询顺序输出0/1。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\nstruct Page{vector<int>key,child;};\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint r;cin>>r;vector<Page>t(r+1);for(int i=1;i<=r;i++){int c;cin>>c;t[i].key.resize(c);t[i].child.resize(c+1);for(int&k:t[i].key)cin>>k;for(int&v:t[i].child)cin>>v;}int q;cin>>q;while(q--){int k,u=1;cin>>k;bool found=false;while(u){auto &p=t[u];int i=lower_bound(p.key.begin(),p.key.end(),k)-p.key.begin();if(i<(int)p.key.size()&&p.key[i]==k){found=true;break;}u=p.child[i];}cout<<found<<\" \";}\nreturn 0;}\n",
    "referenceNote": "原笔记只有B树概念，没有B树实现；这里明确补充一个对已构造多路树的搜索练习。",
    "cases": [
      {
        "name": "单节点",
        "stdin": "1\n1 5 0 0\n3\n5 4 6\n",
        "expected": "1 0 0"
      },
      {
        "name": "多路分支",
        "stdin": "3\n1 4 2 3\n2 1 2 0 0 0\n2 6 8 0 0 0\n4\n1 4 8 3\n",
        "expected": "1 1 1 0"
      },
      {
        "name": "负数与未找到",
        "stdin": "1\n2 -2 7 0 0 0\n4\n-2 7 0 9\n",
        "expected": "1 1 0 0"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "s-bplus-range",
    "title": "B+ 树概念 · 叶链范围检索",
    "category": "查找",
    "sourceRefs": [
      {
        "docId": "ynt5rq1p87sknvbv",
        "blocks": [],
        "functions": [
          "叶链范围检索（概念扩展）"
        ]
      }
    ],
    "description": "模拟一个两层B+树索引：输入全部叶页，叶页依编号链接，根索引保存每页最大键。先用索引定位第一个可能含有不小于l记录的叶页，再沿叶链输出闭区间[l,r]的全部记录，保留重复值。此题不包含原笔记未提供的B+树动态维护。",
    "input": "叶页数L\nL行：len以及该叶页的len个非递减键\nq\nq行l r。",
    "output": "每个查询一行，按顺序输出范围内记录；没有记录EMPTY。",
    "constraints": [
      "1≤L≤30",
      "每页1..20个记录，总记录≤500",
      "-10000≤记录,l,r≤10000，l≤r",
      "跨页也非递减"
    ],
    "samples": [
      {
        "stdin": "3\n2 1 2\n2 4 5\n2 7 9\n3\n2 7\n3 3\n0 10\n",
        "expected": "2 4 5 7\nEMPTY\n1 2 4 5 7 9",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "1\n3 -2 0 0\n3\n0 0\n-9 -3\n1 8\n",
        "expected": "0 0\nEMPTY\nEMPTY",
        "explanation": "边界样例：重复记录"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：叶页数L；L行：len以及该叶页的len个非递减键；q；q行l r。\n// 输出：每个查询一行，按顺序输出范围内记录；没有记录EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint L;cin>>L;vector<vector<int>>leaf(L);vector<int>mx(L);for(int i=0;i<L;i++){int n;cin>>n;leaf[i].resize(n);for(int&x:leaf[i])cin>>x;mx[i]=leaf[i].back();}int q;cin>>q;while(q--){int l,r;cin>>l>>r;int p=lower_bound(mx.begin(),mx.end(),l)-mx.begin();bool any=false,done=false;for(;p<L&&!done;p++)for(int x:leaf[p]){if(x>r){done=true;break;}if(x>=l){cout<<x<<\" \";any=true;}}if(!any)cout<<\"EMPTY\";cout<<\"\\n\";}\nreturn 0;}\n",
    "referenceNote": "原笔记只有B+树概念；这是明确标注的两层索引与叶链模拟练习，不是完整动态B+树代码。",
    "cases": [
      {
        "name": "跨叶范围",
        "stdin": "3\n2 1 2\n2 4 5\n2 7 9\n3\n2 7\n3 3\n0 10\n",
        "expected": "2 4 5 7\nEMPTY\n1 2 4 5 7 9"
      },
      {
        "name": "重复记录",
        "stdin": "1\n3 -2 0 0\n3\n0 0\n-9 -3\n1 8\n",
        "expected": "0 0\nEMPTY\nEMPTY"
      },
      {
        "name": "边界叶定位",
        "stdin": "3\n1 1\n1 3\n1 5\n3\n4 8\n1 1\n2 4\n",
        "expected": "5\n1\n3"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "o-sort-insertion",
    "title": "直接插入排序 · 半开区间排序",
    "category": "排序",
    "sourceRefs": [
      {
        "docId": "fgbhvgrm2q318cw0",
        "blocks": [
          0
        ],
        "functions": [
          "insert_sort"
        ]
      }
    ],
    "description": "仅对数组下标[left,right)中的元素按升序排序，区间外元素保持不变。请使用本题指定的直接插入排序；参考实现对应笔记原算法，OJ按最终输出判断。",
    "input": "n left right\n接下来n个整数。",
    "output": "输出整个数组；n=0输出EMPTY。",
    "constraints": [
      "0≤n≤300",
      "0≤left≤right≤n",
      "-10000≤元素≤10000"
    ],
    "samples": [
      {
        "stdin": "0 0 0\n\n",
        "expected": "EMPTY",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "5 0 5\n5 -2 5 0 -9\n",
        "expected": "-9 -2 0 5 5",
        "explanation": "边界样例：负数重复"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n left right；接下来n个整数。\n// 输出：输出整个数组；n=0输出EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n\n //直接插入排序：对数组a的下标位于[left,right)中的元素进行排序\nvoid insert_sort(keytype a[],int left,int right){\n    int i,j;\n    for(i=left+1; i<right; i++){\n        keytype tmp=a[i];\n        for(j=i-1; j>=left; j--)\n            if(a[j]>tmp) a[j+1]=a[j];  //移动\n            else break;\n        a[j+1]=tmp;                    //取代\n    }\n}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,l,r;cin>>n>>l>>r;vector<int>a(n);for(int&x:a)cin>>x;insert_sort(a.data(),l,r);if(a.empty())cout<<\"EMPTY\";else for(int x:a)cout<<x<<\" \";\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空区间",
        "stdin": "0 0 0\n\n",
        "expected": "EMPTY"
      },
      {
        "name": "负数重复",
        "stdin": "5 0 5\n5 -2 5 0 -9\n",
        "expected": "-9 -2 0 5 5"
      },
      {
        "name": "只排序中间",
        "stdin": "5 1 4\n8 7 3 1 9\n",
        "expected": "8 1 3 7 9"
      },
      {
        "name": "全相等",
        "stdin": "3 0 3\n4 4 4\n",
        "expected": "4 4 4"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "o-sort-shell",
    "title": "希尔排序 · 半开区间排序",
    "category": "排序",
    "sourceRefs": [
      {
        "docId": "fgbhvgrm2q318cw0",
        "blocks": [
          1
        ],
        "functions": [
          "shell_sort"
        ]
      }
    ],
    "description": "仅对数组下标[left,right)中的元素按升序排序，区间外元素保持不变。请使用本题指定的希尔排序；参考实现对应笔记原算法，OJ按最终输出判断。",
    "input": "n left right\n接下来n个整数。",
    "output": "输出整个数组；n=0输出EMPTY。",
    "constraints": [
      "0≤n≤300",
      "0≤left≤right≤n",
      "-10000≤元素≤10000"
    ],
    "samples": [
      {
        "stdin": "0 0 0\n\n",
        "expected": "EMPTY",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "5 0 5\n5 -2 5 0 -9\n",
        "expected": "-9 -2 0 5 5",
        "explanation": "边界样例：负数重复"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n left right；接下来n个整数。\n// 输出：输出整个数组；n=0输出EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n//希尔排序:对数组a的下标位于[left,right)中的元素进行排序\nvoid shell_sort(keytype a[], int left, int right) {\n    int i, j, gap = (right - left) >> 1;\n\n    for (; gap > 0; gap >>= 1) {  //当前gap为前一个gap的一半\n        for (i = left + gap; i < right; i++) {  //对每个分组进行直接插入排序\n            keytype tmp = a[i];\n            for (j = i - gap; j >= left; j -= gap) {  //将a[i]插入i所在分组的前面元素中\n                if (a[j] > tmp)\n                    a[j + gap] = a[j];\n                else break;\n            }\n            a[j + gap] = tmp;\n        }\n    }\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,l,r;cin>>n>>l>>r;vector<int>a(n);for(int&x:a)cin>>x;shell_sort(a.data(),l,r);if(a.empty())cout<<\"EMPTY\";else for(int x:a)cout<<x<<\" \";\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空区间",
        "stdin": "0 0 0\n\n",
        "expected": "EMPTY"
      },
      {
        "name": "负数重复",
        "stdin": "5 0 5\n5 -2 5 0 -9\n",
        "expected": "-9 -2 0 5 5"
      },
      {
        "name": "只排序中间",
        "stdin": "5 1 4\n8 7 3 1 9\n",
        "expected": "8 1 3 7 9"
      },
      {
        "name": "全相等",
        "stdin": "3 0 3\n4 4 4\n",
        "expected": "4 4 4"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "o-sort-bubble",
    "title": "冒泡排序 · 半开区间排序",
    "category": "排序",
    "sourceRefs": [
      {
        "docId": "zragm35cyd391far",
        "blocks": [
          0
        ],
        "functions": [
          "bubble_sort"
        ]
      }
    ],
    "description": "仅对数组下标[left,right)中的元素按升序排序，区间外元素保持不变。请使用本题指定的冒泡排序；参考实现对应笔记原算法，OJ按最终输出判断。",
    "input": "n left right\n接下来n个整数。",
    "output": "输出整个数组；n=0输出EMPTY。",
    "constraints": [
      "0≤n≤300",
      "0≤left≤right≤n",
      "-10000≤元素≤10000"
    ],
    "samples": [
      {
        "stdin": "0 0 0\n\n",
        "expected": "EMPTY",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "5 0 5\n5 -2 5 0 -9\n",
        "expected": "-9 -2 0 5 5",
        "explanation": "边界样例：负数重复"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n left right；接下来n个整数。\n// 输出：输出整个数组；n=0输出EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n//将给定键值序列a的下标在区间[left,right)中的键值进行排序\nvoid bubble_sort(keytype a[], int left, int right) {\n    int i, j;\n    for (i = right - 1; i > left; i--) {  //依次考虑区间[left,i]\n        for (j = left; j < i; j++) {  //将[left,i]中的最大键值通过冒泡的方式转移到a[i]\n            if (a[j] > a[j + 1])  //当相邻两个键值逆序时,交换它们的键值\n                swap(a[j], a[j + 1]);\n        }\n    }\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,l,r;cin>>n>>l>>r;vector<int>a(n);for(int&x:a)cin>>x;bubble_sort(a.data(),l,r);if(a.empty())cout<<\"EMPTY\";else for(int x:a)cout<<x<<\" \";\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空区间",
        "stdin": "0 0 0\n\n",
        "expected": "EMPTY"
      },
      {
        "name": "负数重复",
        "stdin": "5 0 5\n5 -2 5 0 -9\n",
        "expected": "-9 -2 0 5 5"
      },
      {
        "name": "只排序中间",
        "stdin": "5 1 4\n8 7 3 1 9\n",
        "expected": "8 1 3 7 9"
      },
      {
        "name": "全相等",
        "stdin": "3 0 3\n4 4 4\n",
        "expected": "4 4 4"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "o-sort-quick",
    "title": "随机枢轴快速排序 · 半开区间排序",
    "category": "排序",
    "sourceRefs": [
      {
        "docId": "zragm35cyd391far",
        "blocks": [
          1
        ],
        "functions": [
          "quick_sort"
        ]
      }
    ],
    "description": "仅对数组下标[left,right)中的元素按升序排序，区间外元素保持不变。请使用本题指定的随机枢轴快速排序；参考实现对应笔记原算法，OJ按最终输出判断。",
    "input": "n left right\n接下来n个整数。",
    "output": "输出整个数组；n=0输出EMPTY。",
    "constraints": [
      "0≤n≤300",
      "0≤left≤right≤n",
      "-10000≤元素≤10000"
    ],
    "samples": [
      {
        "stdin": "0 0 0\n\n",
        "expected": "EMPTY",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "5 0 5\n5 -2 5 0 -9\n",
        "expected": "-9 -2 0 5 5",
        "explanation": "边界样例：负数重复"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n left right；接下来n个整数。\n// 输出：输出整个数组；n=0输出EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n//快速排序:对键值序列a的下标在区间[left,right)中的键值进行排序\nvoid quick_sort(keytype a[], int left, int right) {\n    if (right <= left + 1) return;  //下标区间内不超过1个元素时,结束\n\n    int i = left + 1, j = right - 1, k;\n    k = rand() % (right - left) + left;  //获取随机下标\n    swap(a[left], a[k]);  //将随机选取的元素设置为第一个元素\n\n    while (i <= j) {\n        while (i < right && a[i] <= a[left]) i++;  //获取左端第一个比a[left]大的元素的下标\n        while (a[j] > a[left]) j--;  //获取右端第一个不大于a[left]的元素的下标\n        if (i < j) swap(a[i], a[j]);  //交换\n    }\n\n    swap(a[left], a[j]);  //分界值与a[j]交换,注意此时a[j]<=a[left]\n\n    //一轮结束,以j为分界点,将序列分为两部分,对两部分用同样的方法进行处理\n    quick_sort(a, left, j);  //左半部分,注意:区间为左闭右开区间\n    quick_sort(a, j + 1, right);  //右半部分\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,l,r;cin>>n>>l>>r;vector<int>a(n);for(int&x:a)cin>>x;quick_sort(a.data(),l,r);if(a.empty())cout<<\"EMPTY\";else for(int x:a)cout<<x<<\" \";\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空区间",
        "stdin": "0 0 0\n\n",
        "expected": "EMPTY"
      },
      {
        "name": "负数重复",
        "stdin": "5 0 5\n5 -2 5 0 -9\n",
        "expected": "-9 -2 0 5 5"
      },
      {
        "name": "只排序中间",
        "stdin": "5 1 4\n8 7 3 1 9\n",
        "expected": "8 1 3 7 9"
      },
      {
        "name": "全相等",
        "stdin": "3 0 3\n4 4 4\n",
        "expected": "4 4 4"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "o-sort-selection",
    "title": "简单选择排序 · 半开区间排序",
    "category": "排序",
    "sourceRefs": [
      {
        "docId": "hcmvl0efcx70k45g",
        "blocks": [
          0
        ],
        "functions": [
          "select_sort"
        ]
      }
    ],
    "description": "仅对数组下标[left,right)中的元素按升序排序，区间外元素保持不变。请使用本题指定的简单选择排序；参考实现对应笔记原算法，OJ按最终输出判断。",
    "input": "n left right\n接下来n个整数。",
    "output": "输出整个数组；n=0输出EMPTY。",
    "constraints": [
      "0≤n≤300",
      "0≤left≤right≤n",
      "-10000≤元素≤10000"
    ],
    "samples": [
      {
        "stdin": "0 0 0\n\n",
        "expected": "EMPTY",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "5 0 5\n5 -2 5 0 -9\n",
        "expected": "-9 -2 0 5 5",
        "explanation": "边界样例：负数重复"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n left right；接下来n个整数。\n// 输出：输出整个数组；n=0输出EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n//选择排序:将给定键值序列a的下标在区间[left,right)中的键值进行排序\nvoid select_sort(keytype a[], int left, int right) {\n    int i, j, k;\n    for (i = left; i < right - 1; i++) {\n        k = i;\n        for (j = i + 1; j < right; j++)  //在i的右端寻找最小元素的下标\n            if (a[j] < a[k]) k = j;\n        swap(a[k], a[i]);  //将最小元素与a[i]交换\n    }\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,l,r;cin>>n>>l>>r;vector<int>a(n);for(int&x:a)cin>>x;select_sort(a.data(),l,r);if(a.empty())cout<<\"EMPTY\";else for(int x:a)cout<<x<<\" \";\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空区间",
        "stdin": "0 0 0\n\n",
        "expected": "EMPTY"
      },
      {
        "name": "负数重复",
        "stdin": "5 0 5\n5 -2 5 0 -9\n",
        "expected": "-9 -2 0 5 5"
      },
      {
        "name": "只排序中间",
        "stdin": "5 1 4\n8 7 3 1 9\n",
        "expected": "8 1 3 7 9"
      },
      {
        "name": "全相等",
        "stdin": "3 0 3\n4 4 4\n",
        "expected": "4 4 4"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "o-sort-heap",
    "title": "堆排序 · 半开区间排序",
    "category": "排序",
    "sourceRefs": [
      {
        "docId": "hcmvl0efcx70k45g",
        "blocks": [
          1
        ],
        "functions": [
          "heap_sort"
        ]
      },
      {
        "docId": "ebic8kgy45ilbbyn",
        "blocks": [
          0
        ],
        "functions": [
          "heap_adjust"
        ]
      }
    ],
    "description": "仅对数组下标[left,right)中的元素按升序排序，区间外元素保持不变。请使用本题指定的堆排序；参考实现对应笔记原算法，OJ按最终输出判断。",
    "input": "n left right\n接下来n个整数。",
    "output": "输出整个数组；n=0输出EMPTY。",
    "constraints": [
      "0≤n≤300",
      "0≤left≤right≤n",
      "-10000≤元素≤10000"
    ],
    "samples": [
      {
        "stdin": "0 0 0\n\n",
        "expected": "EMPTY",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "5 0 5\n5 -2 5 0 -9\n",
        "expected": "-9 -2 0 5 5",
        "explanation": "边界样例：负数重复"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n left right；接下来n个整数。\n// 输出：输出整个数组；n=0输出EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n//完全二叉树转化为大顶堆\nvoid heap_adjust(datatype heap[],int n,int cur){\n    if(n<=0 || cur<0 || cur>=n) return;\n    int i;\n    datatype temp=heap[cur];\n    while(i=2*cur+1,i<n){ //确保i是cur的左孩子\n        if(i+1<n && heap[i+1]>heap[i]) i++; //保证heap[i]是较大的子结点\n        if(heap[i]<=temp) break; //父节点大于所有子结点\n        heap[cur] = heap[i]; //结点i的值更新父节点\n        cur = i; //更新cur，接着向下比较\n    }\n    heap[cur] = temp; \n}\n\nvoid heap_make(datatype heap[],int n){\n    for(int i=n/2-1;i>=0;i--) //结点编号从0开始\n        heap_adjust(heap,n,i);\n}\n//堆排序:将给定键值序列a的下标在区间[left,right)中的键值进行排序\nvoid heap_sort(keytype a[], int left, int right) {\n    int i, len = right - left;\n\n    for (i = len / 2 - 1; i >= 0; i--)  //从最后一个非叶结点开始,将完全二叉树转化为大顶堆\n        heap_adjust(a + left, len, i);\n\n    for (i = right - 1; i > left; i--) {  //利用大顶堆实现排序\n        swap(a[i], a[left]);  //将堆顶元素a[left]与当前最后一个结点交换\n        heap_adjust(a + left, i - left, 0);  //将剩下的结点从根结点出发调整为大顶堆\n    }\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,l,r;cin>>n>>l>>r;vector<int>a(n);for(int&x:a)cin>>x;heap_sort(a.data(),l,r);if(a.empty())cout<<\"EMPTY\";else for(int x:a)cout<<x<<\" \";\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空区间",
        "stdin": "0 0 0\n\n",
        "expected": "EMPTY"
      },
      {
        "name": "负数重复",
        "stdin": "5 0 5\n5 -2 5 0 -9\n",
        "expected": "-9 -2 0 5 5"
      },
      {
        "name": "只排序中间",
        "stdin": "5 1 4\n8 7 3 1 9\n",
        "expected": "8 1 3 7 9"
      },
      {
        "name": "全相等",
        "stdin": "3 0 3\n4 4 4\n",
        "expected": "4 4 4"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "o-sort-merge",
    "title": "归并排序 · 半开区间排序",
    "category": "排序",
    "sourceRefs": [
      {
        "docId": "gnsddlavq1f6mrdp",
        "blocks": [
          0
        ],
        "functions": [
          "merge_sort"
        ]
      }
    ],
    "description": "仅对数组下标[left,right)中的元素按升序排序，区间外元素保持不变。请使用本题指定的归并排序；参考实现对应笔记原算法，OJ按最终输出判断。",
    "input": "n left right\n接下来n个整数。",
    "output": "输出整个数组；n=0输出EMPTY。",
    "constraints": [
      "0≤n≤300",
      "0≤left≤right≤n",
      "-10000≤元素≤10000"
    ],
    "samples": [
      {
        "stdin": "0 0 0\n\n",
        "expected": "EMPTY",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "5 0 5\n5 -2 5 0 -9\n",
        "expected": "-9 -2 0 5 5",
        "explanation": "边界样例：负数重复"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n left right；接下来n个整数。\n// 输出：输出整个数组；n=0输出EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n//归并排序:将给定数组a的下标在区间[left,right)中的键值进行排序\nvoid merge_sort(int a[], int left, int right) {\n    int i, j, mid, cnt = 0;\n    if (left >= right - 1) return;  //区间元素的个数不多于1时,划分结束\n    mid = (right + left - 1) / 2;\n    merge_sort(a, left, mid + 1);  //对左半区排序\n    merge_sort(a, mid + 1, right);  //对右半区排序\n    //左半区和右半区都有序,将它们归并,归并结果存放到辅助数组tmp中\n    i = left, j = mid + 1;\n    int *tmp = new int[right - left];\n    while (i <= mid || j < right) {\n        //当j超出范围时,将左半区剩余元素加入tmp中,下同\n        if (j >= right || (i <= mid && a[i] <= a[j]))\n            tmp[cnt++] = a[i++];\n        else\n            tmp[cnt++] = a[j++];\n    }\n    for (i = 0; i < cnt; i++)\n        a[i + left] = tmp[i];  //将tmp中的元素转存到a的对应位置\n    delete []tmp;\n}\n\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,l,r;cin>>n>>l>>r;vector<int>a(n);for(int&x:a)cin>>x;merge_sort(a.data(),l,r);if(a.empty())cout<<\"EMPTY\";else for(int x:a)cout<<x<<\" \";\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空区间",
        "stdin": "0 0 0\n\n",
        "expected": "EMPTY"
      },
      {
        "name": "负数重复",
        "stdin": "5 0 5\n5 -2 5 0 -9\n",
        "expected": "-9 -2 0 5 5"
      },
      {
        "name": "只排序中间",
        "stdin": "5 1 4\n8 7 3 1 9\n",
        "expected": "8 1 3 7 9"
      },
      {
        "name": "全相等",
        "stdin": "3 0 3\n4 4 4\n",
        "expected": "4 4 4"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "o-sort-counting",
    "title": "计数排序 · 半开区间排序",
    "category": "排序",
    "sourceRefs": [
      {
        "docId": "sms4ub2q4at6o0an",
        "blocks": [
          0
        ],
        "functions": [
          "count_sort"
        ]
      }
    ],
    "description": "仅对数组下标[left,right)中的元素按升序排序，区间外元素保持不变。请使用本题指定的计数排序；参考实现对应笔记原算法，OJ按最终输出判断。",
    "input": "n left right\n接下来n个整数。",
    "output": "输出整个数组；n=0输出EMPTY。",
    "constraints": [
      "0≤n≤300",
      "0≤left≤right≤n",
      "-10000≤元素≤10000"
    ],
    "samples": [
      {
        "stdin": "0 0 0\n\n",
        "expected": "EMPTY",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "5 0 5\n5 -2 5 0 -9\n",
        "expected": "-9 -2 0 5 5",
        "explanation": "边界样例：负数重复"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n left right；接下来n个整数。\n// 输出：输出整个数组；n=0输出EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n//计数排序:将给定数组a的下标在区间[left,right)中的键值进行排序\nvoid count_sort(int a[], int left, int right) {\n    if(left>=right) return;\n\n    int i, mx=a[left], mn=a[left];\n\n    //求最小键值mn和最大键值mx\n    for(i=left; i<right; i++) {\n        if(mx<a[i]) mx=a[i];\n        if(mn>a[i]) mn=a[i];\n    }\n\n    long long range=1LL*mx-mn+1;\n    if(range>10000000){\n        stable_sort(a+left,a+right); //值域过大时回退，仍保证完成排序\n        return;\n    }\n\n    int len=(int)range;\n    int *tmp=new int[right-left];\n    int *countTable=new int[len]{0}; //分配操作\n\n    //统计每个键值出现的次数\n    for(i=left; i<right; i++)\n        countTable[a[i]-mn]++;\n\n    //求前缀和\n    for(i=1; i<len; i++)\n        countTable[i]+=countTable[i-1];\n\n    //收集操作\n    for(i=right-1; i>=left; i--) {\n        tmp[countTable[a[i]-mn]-1]=a[i];\n        countTable[a[i]-mn]--;\n    }\n\n    //将排序结果保存到a中\n    for(i=left; i<right; i++)\n        a[i]=tmp[i-left];\n\n    delete []tmp;\n    delete []countTable;\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,l,r;cin>>n>>l>>r;vector<int>a(n);for(int&x:a)cin>>x;count_sort(a.data(),l,r);if(a.empty())cout<<\"EMPTY\";else for(int x:a)cout<<x<<\" \";\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空区间",
        "stdin": "0 0 0\n\n",
        "expected": "EMPTY"
      },
      {
        "name": "负数重复",
        "stdin": "5 0 5\n5 -2 5 0 -9\n",
        "expected": "-9 -2 0 5 5"
      },
      {
        "name": "只排序中间",
        "stdin": "5 1 4\n8 7 3 1 9\n",
        "expected": "8 1 3 7 9"
      },
      {
        "name": "全相等",
        "stdin": "3 0 3\n4 4 4\n",
        "expected": "4 4 4"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "o-sort-bucket",
    "title": "桶排序 · 半开区间排序",
    "category": "排序",
    "sourceRefs": [
      {
        "docId": "sms4ub2q4at6o0an",
        "blocks": [
          1
        ],
        "functions": [
          "bucket_sort"
        ]
      }
    ],
    "description": "仅对数组下标[left,right)中的元素按升序排序，区间外元素保持不变。请使用本题指定的桶排序；参考实现对应笔记原算法，OJ按最终输出判断。",
    "input": "n left right\n接下来n个整数。",
    "output": "输出整个数组；n=0输出EMPTY。",
    "constraints": [
      "0≤n≤300",
      "0≤left≤right≤n",
      "-10000≤元素≤10000"
    ],
    "samples": [
      {
        "stdin": "0 0 0\n\n",
        "expected": "EMPTY",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "5 0 5\n5 -2 5 0 -9\n",
        "expected": "-9 -2 0 5 5",
        "explanation": "边界样例：负数重复"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n left right；接下来n个整数。\n// 输出：输出整个数组；n=0输出EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n//桶排序:将给定数组a的下标在区间[left,right)中的键值进行排序\nvoid bucket_sort(int a[], int left, int right) {\n    if(left>=right) return;\n\n    int i, j, m=4, mx=a[left], mn=a[left];\n    vector<int> bucket[4]; //定义桶,桶的数量为m\n\n    //求最小键值mn和最大键值mx\n    for(i=left; i<right; i++) {\n        if(mx<a[i]) mx=a[i];\n        if(mn>a[i]) mn=a[i];\n    }\n\n    long long len=1LL*mx-mn+1;\n\n    //将每一个键值加入相应的桶中\n    for(i=left; i<right; i++)\n        bucket[(int)((1LL*a[i]-mn)*m/len)].push_back(a[i]);\n\n    //对每一个桶进行排序\n    for(i=0; i<m; i++)\n        sort(bucket[i].begin(), bucket[i].end());\n\n    int cur=left;\n\n    //将桶中的键值依次转存到a中\n    for(i=0; i<m; i++)\n        for(j=0; j<(int)bucket[i].size(); j++)\n            a[cur++]=bucket[i][j];\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,l,r;cin>>n>>l>>r;vector<int>a(n);for(int&x:a)cin>>x;bucket_sort(a.data(),l,r);if(a.empty())cout<<\"EMPTY\";else for(int x:a)cout<<x<<\" \";\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空区间",
        "stdin": "0 0 0\n\n",
        "expected": "EMPTY"
      },
      {
        "name": "负数重复",
        "stdin": "5 0 5\n5 -2 5 0 -9\n",
        "expected": "-9 -2 0 5 5"
      },
      {
        "name": "只排序中间",
        "stdin": "5 1 4\n8 7 3 1 9\n",
        "expected": "8 1 3 7 9"
      },
      {
        "name": "全相等",
        "stdin": "3 0 3\n4 4 4\n",
        "expected": "4 4 4"
      }
    ],
    "difficulty": "基础"
  },
  {
    "id": "o-sort-radix",
    "title": "基数排序 · 半开区间排序",
    "category": "排序",
    "sourceRefs": [
      {
        "docId": "sms4ub2q4at6o0an",
        "blocks": [
          2
        ],
        "functions": [
          "radix_sort"
        ]
      }
    ],
    "description": "仅对数组下标[left,right)中的元素按升序排序，区间外元素保持不变。请使用本题指定的基数排序；参考实现对应笔记原算法，OJ按最终输出判断。",
    "input": "n left right base\n接下来n个整数。",
    "output": "输出整个数组；n=0输出EMPTY。",
    "constraints": [
      "0≤n≤300",
      "0≤left≤right≤n",
      "-10000≤元素≤10000",
      "2≤base≤16"
    ],
    "samples": [
      {
        "stdin": "0 0 0 10\n\n",
        "expected": "EMPTY",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "5 0 5 10\n5 -2 5 0 -9\n",
        "expected": "-9 -2 0 5 5",
        "explanation": "边界样例：负数重复"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n left right base；接下来n个整数。\n// 输出：输出整个数组；n=0输出EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n//基数排序:将给定数组a的下标在区间[left,right)中的键值进行排序\nvoid radix_sort(int a[], int left, int right, int base=10) {\n    if(left>=right || base<2) return;\n\n    int i, k, mx=a[left], mn=a[left];\n    long long radix=1;\n\n    //获取最大键值和最小键值\n    for(i=left; i<right; i++) {\n        if(mx<a[i]) mx=a[i];\n        if(mn>a[i]) mn=a[i];\n    }\n\n    long long maxValue=1LL*mx-mn; //考虑存在负数情况\n    int *countTable=new int[base];\n    int *tmp=new int[right-left];\n\n    //从最低位开始,依次对每一位进行排序\n    while(maxValue/radix>0) {\n        memset(countTable, 0, sizeof(int)*base);\n\n        //以下采用计数排序算法,将键值按其当前位进行排序\n        for(i=left; i<right; i++) {\n            k=(int)(((1LL*a[i]-mn)/radix)%base); //a[i]当前位的值\n            countTable[k]++;\n        }\n\n        //求前缀和\n        for(i=1; i<base; i++)\n            countTable[i]+=countTable[i-1];\n\n        for(i=right-1; i>=left; i--) {\n            k=(int)(((1LL*a[i]-mn)/radix)%base);\n            tmp[countTable[k]-1]=a[i];\n            countTable[k]--;\n        }\n\n        for(i=left; i<right; i++)\n            a[i]=tmp[i-left];\n\n        if(radix>maxValue/base) break;\n        radix*=base;\n    }\n\n    delete []tmp;\n    delete []countTable;\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,l,r;cin>>n>>l>>r;int base;cin>>base;vector<int>a(n);for(int&x:a)cin>>x;radix_sort(a.data(),l,r,base);if(a.empty())cout<<\"EMPTY\";else for(int x:a)cout<<x<<\" \";\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空区间",
        "stdin": "0 0 0 10\n\n",
        "expected": "EMPTY"
      },
      {
        "name": "负数重复",
        "stdin": "5 0 5 10\n5 -2 5 0 -9\n",
        "expected": "-9 -2 0 5 5"
      },
      {
        "name": "只排序中间",
        "stdin": "5 1 4 10\n8 7 3 1 9\n",
        "expected": "8 1 3 7 9"
      },
      {
        "name": "全相等",
        "stdin": "3 0 3 10\n4 4 4\n",
        "expected": "4 4 4"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "o-bfprt-kth",
    "title": "BFPRT · 线性时间选择",
    "category": "排序",
    "sourceRefs": [
      {
        "docId": "zragm35cyd391far",
        "blocks": [
          0,
          2
        ],
        "functions": [
          "bfprt",
          "bubble_sort"
        ]
      }
    ],
    "description": "求半开区间[left,right)中第k小的值，k从1开始，重复元素分别占据名次。若k不合法输出INVALID。使用5个一组的中位数枢轴，并通过三路划分处理重复键。",
    "input": "n left right k\nn个整数。",
    "output": "第k小的值或INVALID。",
    "constraints": [
      "0≤n≤300",
      "0≤left≤right≤n",
      "0≤k≤right-left+1",
      "-10000≤元素≤10000"
    ],
    "samples": [
      {
        "stdin": "0 0 0 1\n\n",
        "expected": "INVALID",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "5 0 5 3\n9 1 5 5 3\n",
        "expected": "5",
        "explanation": "边界样例：重复枢轴"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n left right k；n个整数。\n// 输出：第k小的值或INVALID。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n//将给定键值序列a的下标在区间[left,right)中的键值进行排序\nvoid bubble_sort(keytype a[], int left, int right) {\n    int i, j;\n    for (i = right - 1; i > left; i--) {  //依次考虑区间[left,i]\n        for (j = left; j < i; j++) {  //将[left,i]中的最大键值通过冒泡的方式转移到a[i]\n            if (a[j] > a[j + 1])  //当相邻两个键值逆序时,交换它们的键值\n                swap(a[j], a[j + 1]);\n        }\n    }\n}\n//线性时间选择:给定键值序列a的下标在区间[left,right)中的第k小键值,返回值为第k小键值的下标\nint bfprt(keytype a[], int left, int right, int k) {\n    int i, j, d;\n    if(k<1 || k>right-left) return -1;\n\n    if (right - left <= 75) {  //当元素个数小于75时,直接用冒泡排序\n        bubble_sort(a, left, right);\n        return left + k - 1;\n    }\n\n    for (i = j = left; i < right; i += 5, j++) {  //按每组5个元素进行分组\n        int r = i + 5 > right ? right : i + 5;  //每个分组的右端点,注意:最后一组可能不足5个元素\n        bubble_sort(a, i, r);\n        swap(a[(i + r - 1) / 2], a[j]);  //将找到的中位数交换到数组的前端j处\n    }\n\n    //所有分组的中位数在a的下标区间[left,j)处,求该区间的中位数,中位数为第(j-left)/2+1个元素\n    d = bfprt(a, left, j, (j - 1 - left) / 2 + 1);\n    swap(a[left], a[d]);  //将求得的中位数交换到数组的第一个元素上\n\n    keytype pivot=a[left];\n    int lt=left, cur=left, gt=right;\n    while(cur<gt){\n        if(a[cur]<pivot) swap(a[lt++],a[cur++]);\n        else if(a[cur]>pivot) swap(a[cur],a[--gt]);\n        else ++cur;\n    }\n    //三段分别为小于、等于、大于 pivot，重复值不会造成逐个剥离\n    int target=left+k-1;\n    if(target<lt) return bfprt(a,left,lt,k);\n    if(target<gt) return target;\n    return bfprt(a,gt,right,k-(gt-left));\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,l,r,k;cin>>n>>l>>r>>k;vector<int>a(n);for(int&x:a)cin>>x;int p=bfprt(a.data(),l,r,k);if(p<0)cout<<\"INVALID\";else cout<<a[p];\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空范围",
        "stdin": "0 0 0 1\n\n",
        "expected": "INVALID"
      },
      {
        "name": "重复枢轴",
        "stdin": "5 0 5 3\n9 1 5 5 3\n",
        "expected": "5"
      },
      {
        "name": "偏移子区间",
        "stdin": "5 1 4 2\n100 8 3 6 200\n",
        "expected": "6"
      },
      {
        "name": "大规模相等键",
        "stdin": "100 0 100 50\n7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7\n",
        "expected": "7"
      },
      {
        "name": "非法k",
        "stdin": "2 0 2 0\n2 1\n",
        "expected": "INVALID"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "o-loser-tree-merge",
    "title": "败者树 · K 路归并",
    "category": "排序",
    "sourceRefs": [
      {
        "docId": "fnhvweguk0m162gc",
        "blocks": [
          0
        ],
        "functions": [
          "ini",
          "adjust",
          "multi_merge"
        ]
      }
    ],
    "description": "输入k个已升序排列的顺串，使用原败者树逐次选出最小键，输出全体归并结果。IO驱动将每个顺串未使用的定长槽填INF；INF不是有效数据。",
    "input": "k\n接下来k行：len以及该顺串的len个非递减整数。",
    "output": "升序结果；没有数据时EMPTY。",
    "constraints": [
      "0≤k≤8",
      "0≤len≤10",
      "-10000≤有效键≤10000"
    ],
    "samples": [
      {
        "stdin": "0\n",
        "expected": "EMPTY",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "3\n3 1 4 7\n3 2 3 8\n3 0 5 9\n",
        "expected": "0 1 2 3 4 5 7 8 9",
        "explanation": "边界样例：交错顺串"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：k；接下来k行：len以及该顺串的len个非递减整数。\n// 输出：升序结果；没有数据时EMPTY。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n#define K 8   //顺串个数的上限,K-路归并\n#define M 10  //每个顺串中元素个数的上限\n\nkeytype leaf[K + 1];   //叶结点的值,为每一个顺串的最小值\nint loser[K << 1];     //败者树\nint idx[K];            //每个顺串当前元素的下标\n\nvoid ini(keytype a[][M], int k) {\n    int i;\n    leaf[k] = -INF;    //leaf添加一个元素,其值为-INF\n    for(i = 0; i < k; i++) loser[i] = k; //初始化非叶结点,值为leaf的下标\n    for(i = k; i < 2 * k; i++) loser[i] = i - k; //叶结点初始化,值为leaf的下标\n    for(i = 0; i < k; i++) leaf[i] = a[i][0], idx[i] = 0; //初始化leaf,初始为每一个顺串的第一个元素\n}\n\n//更新操作:对败者树的编号为cur的结点进行更新\nvoid adjust(int cur) {\n    int tmp = loser[cur];\n    while((cur = cur >> 1) > 0) { //从当前结点的父结点开始更新\n        if(leaf[loser[cur]] < leaf[tmp])\n            swap(loser[cur], tmp); //利用新的tmp继续向上更新\n    }\n    loser[0] = tmp; //最终0-结点为最小值的下标\n}\n\n//对顺串a[0],a[1],...,a[k-1]进行归并,归并结果放到ret中\nvoid multi_merge(keytype a[][M], int k, vector<keytype>& ret) {\n    int i, j;\n    if(k<=0 || k>K) return;\n    ini(a, k); //初始化全局数组\n    for(i = 2 * k - 1; i >= k; i--) adjust(i); //从后向前考虑每一个叶结点,初始化败者树\n    while(1) { //更新败者树\n        j = loser[0]; //j为最小值的顺串的下标\n        if(leaf[j] == INF) break; //归并结束\n        ret.push_back(leaf[j]); //将当前最小值加入结果中\n        /*\n        if(ret.size() >= block_size) {\n            //将结果存入磁盘\n            ret.clear();\n        }\n        */\n        idx[j]++; //考虑顺串j的下一个元素\n        /*\n        if(a[j][idx[j]] == INF) { //第j个顺串处理完\n            //根据需要从磁盘读取数据填充该顺串\n            idx[j] = 0; //重新加载顺串的第一个元素开始\n        }\n        */\n        leaf[j] = (idx[j] < M) ? a[j][idx[j]] : INF; //更新叶结点的值,防止数组越界\n        adjust(j + k); //第j个顺串所对应的败者树中叶结点的编号为j+k\n    }\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint k;cin>>k;int a[K][M];for(int i=0;i<K;i++)for(int j=0;j<M;j++)a[i][j]=INF;for(int i=0;i<k;i++){int n;cin>>n;for(int j=0;j<n;j++)cin>>a[i][j];}vector<int>r;multi_merge(a,k,r);if(r.empty())cout<<\"EMPTY\";else for(int x:r)cout<<x<<\" \";\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "没有顺串",
        "stdin": "0\n",
        "expected": "EMPTY"
      },
      {
        "name": "交错顺串",
        "stdin": "3\n3 1 4 7\n3 2 3 8\n3 0 5 9\n",
        "expected": "0 1 2 3 4 5 7 8 9"
      },
      {
        "name": "空顺串和负数",
        "stdin": "3\n0 \n2 -3 -1\n2 -3 2\n",
        "expected": "-3 -3 -1 2"
      },
      {
        "name": "重复键",
        "stdin": "2\n2 4 4\n1 4\n",
        "expected": "4 4 4"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "o-replacement-selection",
    "title": "败者树 · 置换选择生成顺串",
    "category": "排序",
    "sourceRefs": [
      {
        "docId": "fnhvweguk0m162gc",
        "blocks": [
          1,
          2
        ],
        "functions": [
          "ini",
          "adjust",
          "rss_sort"
        ]
      }
    ],
    "description": "用容量c的败者树从输入流生成尽可能长的升序顺串。输出当前最小键后读入下一个键；若新键小于刚输出的键，则冻结到下一顺串。比较先按顺串编号，再按键值。测试输出每个实际顺串，而不是把所有数据直接排序。",
    "input": "n c\nn个原始整数。",
    "output": "第一行顺串数量；之后每行先输出该顺串长度，再输出其中的升序键。",
    "constraints": [
      "0≤n≤100",
      "1≤c≤7；n<c时只装入n个键",
      "-10000≤元素≤10000"
    ],
    "samples": [
      {
        "stdin": "0 3\n\n",
        "expected": "0\n",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "8 3\n7 2 6 1 5 3 4 0\n",
        "expected": "3\n3 2 6 7\n4 1 3 4 5\n1 0\n",
        "explanation": "边界样例：输入流冻结规则"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：n c；n个原始整数。\n// 输出：第一行顺串数量；之后每行先输出该顺串长度，再输出其中的升序键。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n#define C 7             //败者树叶结点的数量上限\n#define M 8             //顺串的数量上限\n#define N 100           //键值的总数上限\n\nkeytype leaf[C + 1],       //叶结点的值，为每一个顺串的最小值\n        a[N];          //原键值序列\n\nvector<keytype> runs[N]; //最多 N 个顺串，避免超过原固定 8 个顺串容量\n\nstruct rss_node {\n    int idx;           //属于叶结点的编号\n    int run_idx;       //顺串编号\n\n    bool operator<(rss_node rn) {\n        //排序第一关键字为顺串编号，第二关键字为键值\n        if (run_idx == rn.run_idx)\n            return leaf[idx] < leaf[rn.idx];\n        return run_idx < rn.run_idx;\n    }\n};\n\nrss_node loser[C << 1]; //败者树\n\nvoid ini(int c) {\n    int i;\n    for (i = 0; i < c; i++)\n        loser[i].idx = c, loser[i].run_idx = 0; //非叶结点\n\n    for (i = c; i < 2 * c; i++)\n        loser[i].idx = i - c, loser[i].run_idx = 0; //叶结点\n\n    for (i = 0; i < c; i++)\n        leaf[i] = a[i];\n\n    leaf[c] = -INF; //为了操作的一致性\n}\n\n//更新败者树的第cur个结点\nvoid adjust(int cur) {\n    int pa = cur >> 1;\n    rss_node tmp = loser[cur];\n\n    while (pa > 0) {\n        if (loser[pa] < tmp)\n            swap(loser[pa], tmp);\n        pa >>= 1;\n    }\n\n    loser[0] = tmp;\n}\n\n//基于败者树的置换-选择排序，n为键值的总数，c为败者树叶结点的数量\nvoid rss_sort(int n, int c) {\n    int i, j, run_j = 0;\n    for(i=0;i<N;i++) runs[i].clear();\n    if(n<=0 || n>N || c<=0 || c>C) return;\n    c=min(c,n);\n    ini(c);\n\n    for (i = 2 * c - 1; i >= c; i--)\n        adjust(i);\n\n    i = c;\n\n    while (1) {\n        j = loser[0].idx;           //最小键值的下标\n        run_j = loser[0].run_idx;   //一个顺串结束，考虑下一个顺串\n\n        if (leaf[j] == INF)\n            break;                 //所有键值都加入顺串，结束\n\n        runs[run_j].push_back(leaf[j]); //将最小值加入当前顺串中\n\n        /*\n        if (runs[run_j].size() >= block_size) {\n            //将结果存入磁盘\n            runs[run_j].clear();\n        }\n        */\n\n        int mi = leaf[j];\n        rss_node tmp;\n        tmp.idx = j;\n\n        if (i >= n) {\n            /* a中的键值处理完毕，从磁盘中加载其他未处理的键值，\n               如果已全部加载，执行下面的操作 */\n            leaf[j] = INF;       //如果键值全部加载进败者树，则添加一个INF\n            tmp.run_idx = N + 1; //结点的顺串编号设置一个比所有顺串编号都大的值\n        }\n        else {\n            leaf[j] = a[i++];    //更新叶结点的值\n            tmp.run_idx = run_j;\n        }\n\n        if (leaf[j] < mi)\n            tmp.run_idx++;      //新的键值<上一次所选取的键值，则属于下一个顺串\n\n        loser[j + c] = tmp;      //更新叶结点\n        adjust(j + c);          //更新败者树\n    }\n}\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n,c;cin>>n>>c;for(int i=0;i<n;i++)cin>>a[i];rss_sort(n,c);int count=0;for(int i=0;i<N;i++)if(!runs[i].empty())count++;cout<<count<<\"\\n\";for(int i=0;i<N;i++)if(!runs[i].empty()){cout<<runs[i].size()<<\" \";for(int x:runs[i])cout<<x<<\" \";cout<<\"\\n\";}\nreturn 0;}\n",
    "referenceNote": "参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。",
    "cases": [
      {
        "name": "空输入",
        "stdin": "0 3\n\n",
        "expected": "0\n"
      },
      {
        "name": "输入流冻结规则",
        "stdin": "8 3\n7 2 6 1 5 3 4 0\n",
        "expected": "3\n3 2 6 7\n4 1 3 4 5\n1 0\n"
      },
      {
        "name": "顺串超过原8个上限",
        "stdin": "12 1\n12 11 10 9 8 7 6 5 4 3 2 1\n",
        "expected": "12\n1 12\n1 11\n1 10\n1 9\n1 8\n1 7\n1 6\n1 5\n1 4\n1 3\n1 2\n1 1\n"
      },
      {
        "name": "n小于内存容量",
        "stdin": "3 7\n4 4 3\n",
        "expected": "1\n3 3 4 4\n"
      }
    ],
    "difficulty": "进阶"
  },
  {
    "id": "o-decision-tree-bound",
    "title": "比较判定树 · 排序的比较次数下界",
    "category": "排序",
    "sourceRefs": [
      {
        "docId": "wuuipggr3p41zhil",
        "blocks": [],
        "functions": [
          "比较判定树（概念扩展）"
        ]
      }
    ],
    "description": "n个互异元素共有n!种相对排列。一次二元比较最多产生两个分支，因此任何比较排序的最坏比较次数至少为满足2^h≥n!的最小整数h。求这个理论下界；不声称每个n都存在恰好达到下界的排序算法。",
    "input": "一个整数n。",
    "output": "最小非负整数h，使2^h≥n!。",
    "constraints": [
      "0≤n≤20；约定0!=1"
    ],
    "samples": [
      {
        "stdin": "0\n",
        "expected": "0",
        "explanation": "按照题面规定的操作和输出顺序处理。"
      },
      {
        "stdin": "1\n",
        "expected": "0",
        "explanation": "边界样例：n=1"
      }
    ],
    "template": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <iterator>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// 输入：一个整数n。\n// 输出：最小非负整数h，使2^h≥n!。\nvoid solve(istream& in, ostream& out) {\n    // TODO: 按题面读取输入，独立实现本题算法。\n    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）\n    // 完成后用 out << ... 输出结果。\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    solve(cin, cout);\n    return 0;\n}\n",
    "reference": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <cstring>\n#include <cmath>\n#include <cstdlib>\n#include <functional>\n#include <numeric>\n#include <climits>\n#include <utility>\nusing namespace std;\nusing keytype=int; using datatype=int;\nconst int N=1024, vNum=128, eNum=4096, INF=1000000000;\n\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\nint n;cin>>n;unsigned long long f=1;for(int i=2;i<=n;i++)f*=i;unsigned long long x=f-1;int h=0;while(x){h++;x>>=1;}cout<<h;\nreturn 0;}\n",
    "referenceNote": "原笔记只有判定树概念，没有原始算法代码；本题明确补充其比较排序下界应用。",
    "cases": [
      {
        "name": "n=0",
        "stdin": "0\n",
        "expected": "0"
      },
      {
        "name": "n=1",
        "stdin": "1\n",
        "expected": "0"
      },
      {
        "name": "n=3",
        "stdin": "3\n",
        "expected": "3"
      },
      {
        "name": "n=5",
        "stdin": "5\n",
        "expected": "7"
      },
      {
        "name": "n=10",
        "stdin": "10\n",
        "expected": "22"
      },
      {
        "name": "n=20",
        "stdin": "20\n",
        "expected": "62"
      }
    ],
    "difficulty": "进阶"
  }
];
