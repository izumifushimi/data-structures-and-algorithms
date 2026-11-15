import json,pathlib,re,subprocess,hashlib,random,collections,itertools,heapq,concurrent.futures,time
ROOT=pathlib.Path(__file__).resolve().parents[2]
NOTES={x['id']:x for x in json.loads((ROOT/'public/data/notes.json').read_text())}
P=[]
D={'matrix':'uaafc7zhihxseat8','edge':'hnap2ge6fi24yk7v','traverse':'hzwyvvq4bbg2x7pc','scc':'gm25a9zkibxepn7w','cut':'efgybln1u34h4qk2','mst':'gcbkvkk1hbl1a1wu','dag':'cupw7m5ihhhargh0','short':'nt3aaeukgr2p9zed','linear':'ryfee7q3xhla8ghs','bst':'qsmaorshgyypzl6s','splay':'it1niv51webln15h','rb':'sn9gtyf4m8hli693','tt':'pxmrn0a4cfzsfyab','trie':'yrvn9hbmegw2rrux','hash':'ocd9lro158k0h9og','stl':'wxd6uls7v918plpt','btree':'ynt5rq1p87sknvbv','insert':'fgbhvgrm2q318cw0','exchange':'zragm35cyd391far','select':'hcmvl0efcx70k45g','merge':'gnsddlavq1f6mrdp','distribute':'sms4ub2q4at6o0an','external':'fnhvweguk0m162gc','decision':'wuuipggr3p41zhil'}
HEADER='''#include <iostream>
#include <vector>
#include <queue>
#include <stack>
#include <set>
#include <map>
#include <algorithm>
#include <string>
#include <cstring>
#include <cmath>
#include <cstdlib>
#include <functional>
#include <numeric>
#include <climits>
#include <utility>
using namespace std;
using keytype=int; using datatype=int;
const int N=1024, vNum=128, eNum=4096, INF=1000000000;
'''
EDGE='struct edge{int v,w;edge(int a,int b):v(a),w(b){}};\n'
def code(doc,inds=None):
 d=NOTES[D.get(doc,doc)];inds=range(len(d['codes'])) if inds is None else inds
 return '\n'.join(d['codes'][i]['corrected'] for i in inds)+'\n'
def wrap(body,defs=''):return HEADER+defs+'\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\n'+body+'\nreturn 0;}\n'
def ref(doc,blocks,funcs):return {'docId':D.get(doc,doc),'blocks':blocks,'functions':funcs}
def case(name,stdin,expected):return {'name':name,'stdin':stdin,'expected':str(expected)}
def save():
 (ROOT/'src/problem-bank/graph-search-sort.mjs').write_text('// Generated from preserved Yuque notes and verified C++17 references.\nexport const problems = '+json.dumps(P,ensure_ascii=False,indent=2)+';\n')
def add(id,title,doc,refs,desc,inp,outp,constraints,cases,reference,template=None,difficulty='基础',note=None):
 assert len(cases)>=3 and id not in {p['id'] for p in P}
 P.append({'id':id,'title':title,'category':NOTES[D.get(doc,doc)]['book'],'sourceRefs':refs,'description':desc,'input':inp,'output':outp,'constraints':constraints,'samples':[dict(stdin=c['stdin'],expected=c['expected'],explanation=('边界样例：'+c['name'] if j else '按照题面规定的操作和输出顺序处理。')) for j,c in enumerate(cases[:2])],'template':template or wrap('// TODO: 读取题目规定的输入，独立实现'+title+'，按要求输出。\n'),'reference':reference,'referenceNote':note or '参考直接采用本页原始代码的最小修正版，补充完整头文件、输入输出驱动与题目约定的序列化；原码仍可对照。','cases':cases,'difficulty':difficulty})
 save()
def rows(xs):return '\n'.join(' '.join(map(str,r)) for r in xs)
def graphin(n,es,extra=''):return f'{n} {len(es)}\n'+rows(es)+'\n'+extra
GRAPHS=[(1,[]),(5,[(1,2),(1,3),(2,4),(3,4)]),(5,[(1,2),(3,4)])]
GIN='n m\n接下来 m 行 u v；顶点为 1..n，按输入顺序加入有向边。'
GBOUNDS=['1≤n≤60','0≤m≤1000','端点均在1..n；简单图不含自环；未特别说明时允许非连通。']
GREAD='int n,m;cin>>n>>m;vector<int>g[vNum];for(int i=0;i<m;i++){int u,v;cin>>u>>v;g[u].push_back(v);}'
WREAD='int n,m;cin>>n>>m;vector<edge>g[vNum];for(int i=0;i<m;i++){int u,v,w;cin>>u>>v>>w;g[u].push_back(edge(v,w));}'
# Graph storage: matrix is 0-based as in original note.
for mode in ['build','neighbors']:
 cs=[]
 for n,es,q in [(1,[],0),(3,[(0,1,5),(1,2,7)],1),(4,[(0,2,0),(2,3,-2)],0)]:
  mat=[['INF']*n for _ in range(n)]
  for a,b,w in es:mat[a][b]=mat[b][a]=str(w)
  ans='\n'.join(' '.join(r) for r in mat) if mode=='build' else (' '.join(str(i) for i in range(n) if mat[q][i]!='INF') or 'EMPTY')
  cs.append(case('单顶点/一般边/零权负权'[0:0] or ['单顶点','链式图','零权和孤立顶点'][len(cs)],graphin(n,es,str(q)+'\n' if mode=='neighbors' else ''),ans))
 body='adjMatrix g;create(g);'
 if mode=='build':body+='for(int i=0;i<g.v;i++){for(int j=0;j<g.v;j++){if(g.edge[i][j]==INF)cout<<"INF ";else cout<<g.edge[i][j]<<" ";}cout<<"\\n";}'
 else:body+='int u;cin>>u;bool any=false;for(int i=0;i<g.v;i++)if(g.edge[u][i]!=INF)any=true;if(!any)cout<<"EMPTY";else adjVertex(g,u);'
 add('g-matrix-'+mode,'邻接矩阵 · '+('构建并输出' if mode=='build' else '输出指定顶点的邻接点'),'matrix',[ref('matrix',[0,1] if mode=='build' else [0,1,2],['create'] if mode=='build' else ['adjVertex'])],'根据无向带权边构造邻接矩阵。矩阵中的 INF 表示没有边（对角线也为 INF，除非存在自环；本题不输入自环）。'+('输出矩阵。' if mode=='build' else '按编号递增输出指定顶点的邻接点；没有邻接点输出 EMPTY。'),'n m\nm 行 u v w；编号为0..n-1。'+('\n最后一行查询顶点u。' if mode=='neighbors' else ''),'矩阵每行n项，或邻接点编号序列。',['1≤n≤60','0≤m≤n(n-1)/2','-1000≤w≤1000；无重边、无自环'],cs,wrap(body,code('matrix',[0,1] if mode=='build' else [0,1,2])))
for mode,inds in [('linked',[0,1]),('vector',[2,3]),('forward-star',[4,5])]:
 cs=[]
 for n,es in [(1,[]),(3,[(1,2,5),(2,3,7)]),(4,[(1,3,0),(1,2,-2)])]:
  adj=[[] for _ in range(n+1)]
  for a,b,w in es:adj[a].append((b,w));adj[b].append((a,w))
  if mode!='vector':adj=[list(reversed(v)) for v in adj]
  ans='\n'.join(str(i)+':'+''.join(f' {v},{w}' for v,w in adj[i]) for i in range(1,n+1))
  cs.append(case(['单顶点空边','链式图','头插顺序与零权'][len(cs)],graphin(n,es),ans))
 if mode=='linked':body='linkList g;create(g);for(int i=1;i<=g->v;i++){cout<<i<<":";if(g->edges[i])for(vertex*p=g->edges[i]->next;p;p=p->next)cout<<" "<<p->u<<","<<p->w;cout<<"\\n";}'
 elif mode=='vector':body='vecGraph g;create(g);for(int i=1;i<=g.v;i++){cout<<i<<":";for(auto x:g.edges[i])cout<<" "<<x.v<<","<<x.w;cout<<"\\n";}'
 else:body='create();for(int i=1;i<=v;i++){cout<<i<<":";for(int j=header[i];j!=-1;j=edges[j].next)cout<<" "<<edges[j].to<<","<<edges[j].w;cout<<"\\n";}'
 add('g-'+mode+'-adjacency',{'linked':'链式边表','vector':'vector 边表','forward-star':'静态链式前向星'}[mode]+' · 构建和邻接点输出','edge',[ref('edge',inds,['create','add_edge'] if mode=='linked' else ['create'] if mode=='vector' else ['create','add','traverse'])],'按原表示法保存无向带权图，并输出每个顶点的边链。'+('每条边依输入顺序尾插，保持输入顺序。' if mode=='vector' else '采用原码头插法，每个顶点的邻接边按照加入顺序的逆序输出。'),'n m\nm行 u v w；每条无向边同时加入两个方向。','每个顶点一行：u:，后接若干 v,w（逗号两侧无空格）；无边时只有u:。',GBOUNDS+['-1000≤w≤1000'],cs,wrap(body,code('edge',inds)))
# DFS/BFS full traversal and unweighted distances
for alg,b in [('dfs',0),('bfs',2),('distance',3)]:
 cs=[]
 for n,es in GRAPHS:
  adj=[[] for _ in range(n+1)]
  for u,v in es:adj[u].append(v)
  vis=set();order=[]
  def dfs(u):
   vis.add(u);order.append(u)
   for v in adj[u]:
    if v not in vis:dfs(v)
  if alg=='dfs':
   for u in range(1,n+1):
    if u not in vis:dfs(u)
   ans=' '.join(map(str,order));extra=''
  elif alg=='bfs':
   for st in range(1,n+1):
    if st in vis:continue
    q=collections.deque([st]);vis.add(st)
    while q:
     u=q.popleft();order.append(u)
     for v in adj[u]:
      if v not in vis:vis.add(v);q.append(v)
   ans=' '.join(map(str,order));extra=''
  else:
   dist=[-1]*(n+1);dist[1]=0;q=collections.deque([1])
   while q:
    u=q.popleft()
    for v in adj[u]:
     if dist[v]<0:dist[v]=dist[u]+1;q.append(v)
   ans=' '.join(map(str,dist[1:]));extra='1\n'
  cs.append(case(['单顶点','交叉路径','非连通图'][len(cs)],graphin(n,es,extra),ans))
 body=GREAD+({'dfs':'dfs_traverse(g,n);for(int i=1;i<=cnt;i++)cout<<dfn[i]<<" ";','bfs':'bfs_traverse(g,n);for(int i=1;i<=bfn_cnt;i++)cout<<bfn[i]<<" ";','distance':'int st,d[vNum];cin>>st;bfs(g,st,d);for(int i=1;i<=n;i++)cout<<d[i]<<" ";'}[alg])
 add('g-'+alg,{'dfs':'DFS · 全图深度优先序列','bfs':'BFS · 全图广度优先序列','distance':'BFS · 无权最短距离'}[alg],'traverse',[ref('traverse',[b],['dfs','dfs_traverse'] if alg=='dfs' else ['bfs','bfs_traverse'] if alg=='bfs' else ['bfs'])],'按输入顺序遍历每个顶点的邻接边。'+('从编号最小的未访问点开始处理各连通部分，输出完整遍历序列。' if alg!='distance' else '求给定源点到每个顶点经过的最少边数，不可达输出-1。'),GIN+('\n最后一行源点st。' if alg=='distance' else ''),'一行空格分隔的遍历顶点，或按1..n排列的距离。',GBOUNDS,cs,wrap(body,('bool vis[vNum];\n' if alg=='distance' else '')+code('traverse',[b])))
# Maze original reachability and explicit path-count extension.
mazeCases=[[[0]],[[1]],[[0,0],[0,0]],[[0,1],[1,0]],[[0,0,0],[0,1,0],[0,0,0]]]
for mode in ['reachable','paths']:
 cs=[]
 for a in mazeCases:
  n=len(a);m=len(a[0]);seen=set()
  def count(x,y):
   if not(0<=x<n and 0<=y<m) or a[x][y] or (x,y) in seen:return 0
   if (x,y)==(n-1,m-1):return 1
   seen.add((x,y));r=sum(count(x+dx,y+dy) for dx,dy in [(1,0),(-1,0),(0,1),(0,-1)]);seen.remove((x,y));return r
  z=count(0,0);cs.append(case(['起终点重合','墙壁起点','两条通路','无法到达','绕过障碍'][len(cs)],f'{n} {m}\n'+rows(a)+'\n',int(z>0) if mode=='reachable' else z))
 if mode=='reachable':reference=HEADER+code('traverse',[1])
 else:reference=wrap('cin>>n>>m;for(int i=0;i<n;i++)for(int j=0;j<m;j++)cin>>a[i][j];cout<<count_paths(0,0);','int n,m,a[6][6];bool seen[6][6];\nlong long count_paths(int x,int y){if(x<0||x>=n||y<0||y>=m||a[x][y]||seen[x][y])return 0;if(x==n-1&&y==m-1)return 1;seen[x][y]=1;long long ret=count_paths(x+1,y)+count_paths(x-1,y)+count_paths(x,y+1)+count_paths(x,y-1);seen[x][y]=0;return ret;}')
 add('g-maze-'+mode,'迷宫 DFS · '+('可达性（原例）' if mode=='reachable' else '不重复房间的路径计数'),'traverse',[ref('traverse',[1],['can','dfs'])],'网格0可通行、1为墙。从左上角走到右下角，每次上下左右移动。'+('判断是否存在路径，存在输出1，否则0。' if mode=='reachable' else '统计所有不重复经过房间的路径；起点与终点重合且可通行时计1条。'),'n m\n接下来n行，每行m个0或1。','一个整数。',['1≤n,m≤'+('60' if mode=='reachable' else '5'),'0表示通行，1表示墙'],cs,reference,difficulty='基础' if mode=='reachable' else '进阶',note=None if mode=='reachable' else '扩展练习：原例只求0/1可达性；计数参考由同一DFS扩展为回溯，在返回时撤销访问标记，不声称是原始计数代码。')
# SCC normalized by minimum vertex; each actual algorithm remains separate.
SCCCASES=[(1,[]),(5,[(1,2),(2,1),(2,3),(3,4),(4,3)]),(4,[(1,2),(2,3),(3,4),(4,2)])]
for alg,b in [('kosaraju',0),('tarjan',1)]:
 cs=[]
 for n,es in SCCCASES:
  reach=[[i==j for j in range(n)] for i in range(n)]
  for u,v in es:reach[u-1][v-1]=True
  for k in range(n):
   for i in range(n):
    for j in range(n):reach[i][j]|=reach[i][k] and reach[k][j]
  lab=[min(j+1 for j in range(n) if reach[i][j] and reach[j][i]) for i in range(n)]
  cs.append(case(['单点','两个强连通块与孤点','带入口的环'][len(cs)],graphin(n,es),' '.join(map(str,lab))))
 defs=code('scc',[b]);body=GREAD
 if alg=='kosaraju':
  # Original function prints raw internal labels; redirect only those lines so canonical OJ output is well-defined.
  defs=defs.replace("        cout<<i<<' '<<belong[i]<<endl;",'        (void)i; //OJ驱动统一输出规范化分量标签')
  body+='vector<int>gt[vNum];for(int u=1;u<=n;u++)for(int v:g[u])gt[v].push_back(u);Kosaraju(g,gt,n);'
 else:body+='Tarjan(g,n);'
 body+='int mn[vNum];fill(mn,mn+vNum,INF);for(int i=1;i<=n;i++)mn[belong[i]]=min(mn[belong[i]],i);for(int i=1;i<=n;i++)cout<<mn[belong[i]]<<" ";'
 add('g-scc-'+alg,alg.title()+' · 强连通分量','scc',[ref('scc',[b],['Kosaraju','dfs','dfst'] if b==0 else ['Tarjan','dfs'])],'求有向图的强连通分量。为避免内部编号顺序影响判题，每个顶点输出其分量中的最小顶点编号。',GIN,'按顶点1..n输出规范化分量标签。',GBOUNDS,cs,wrap(body,defs),difficulty='进阶')
# Cuts and biconnected components, undirected simple inputs, including isolated vertices.
CUTCASES=[(1,[]),(4,[(1,2),(2,3),(2,4)]),(5,[(1,2),(2,3),(3,1),(3,4),(4,5),(5,3)])]
def components(n,es,skipv=None,skipe=None):
 adj=[[]for _ in range(n+1)]
 for j,(u,v) in enumerate(es):
  if j==skipe or u==skipv or v==skipv:continue
  adj[u].append(v);adj[v].append(u)
 seen=set();out=[]
 for s in range(1,n+1):
  if s==skipv or s in seen:continue
  st=[s];seen.add(s);comp=[]
  while st:
   u=st.pop();comp.append(u)
   for v in adj[u]:
    if v not in seen:seen.add(v);st.append(v)
  out.append(sorted(comp))
 return sorted(out)
def point_bcc(n,es):
 adj=[[]for _ in range(n+1)]
 for u,v in es:adj[u].append(v);adj[v].append(u)
 dfn=[0]*(n+1);low=[0]*(n+1);stk=[];out=[];tick=0
 def dfs(u,p):
  nonlocal tick
  tick+=1;dfn[u]=low[u]=tick
  for v in adj[u]:
   if v==p:continue
   if not dfn[v]:
    stk.append((u,v));dfs(v,u);low[u]=min(low[u],low[v])
    if low[v]>=dfn[u]:
     comp=set()
     while True:
      x,y=stk.pop();comp|={x,y}
      if(x,y)==(u,v):break
     out.append(sorted(comp))
   elif dfn[v]<dfn[u]:stk.append((u,v));low[u]=min(low[u],dfn[v])
 for i in range(1,n+1):
  if not dfn[i]:
   if not adj[i]:out.append([i])
   dfs(i,-1)
 return sorted(out)
for mode in ['cut-vertices','point-bcc','bridges','edge-bcc']:
 cs=[]
 for n,es in CUTCASES:
  base=len(components(n,es));bridges=[(i,e) for i,e in enumerate(es) if len(components(n,es,skipe=i))>base]
  if mode=='cut-vertices':v=[i for i in range(1,n+1) if len(components(n,es,skipv=i))>base];ans=str(len(v))+'\n'+' '.join(map(str,v))
  elif mode=='bridges':v=sorted(tuple(sorted(e)) for _,e in bridges);ans=str(len(v))+'\n'+rows(v)
  else:
   comps=point_bcc(n,es) if mode=='point-bcc' else components(n,[e for i,e in enumerate(es) if i not in {j for j,_ in bridges}]);ans=str(len(comps))+'\n'+'\n'.join(str(len(c))+' '+' '.join(map(str,c)) for c in comps)
  cs.append(case(['孤立顶点','分叉树','共享割点的两个环'][len(cs)],graphin(n,es),ans))
 b=0 if mode in ['cut-vertices','point-bcc'] else 1
 body=GREAD.replace('g[u].push_back(v);','g[u].push_back(v);g[v].push_back(u);')+('cut_pbc(g,n);' if b==0 else 'bridge_ebc(g,n);')
 if mode=='cut-vertices':body+='cout<<cut.size()<<"\\n";for(int x:cut)cout<<x<<" ";'
 elif mode=='bridges':body+='vector<pair<int,int>>ans;for(auto x:isBridge)if(x.second)ans.push_back(minmax(x.first.first,x.first.second));sort(ans.begin(),ans.end());ans.erase(unique(ans.begin(),ans.end()),ans.end());cout<<ans.size()<<"\\n";for(auto x:ans)cout<<x.first<<" "<<x.second<<"\\n";'
 else:
  body+='vector<vector<int>>ans;'
  if b==0:body+='for(int i=1;i<=pbc_cnt;i++)ans.emplace_back(pbc[i].begin(),pbc[i].end());'
  else:body+='for(int i=0;i<=ebc_cnt;i++){sort(ebc[i].begin(),ebc[i].end());ans.push_back(ebc[i]);}'
  body+='sort(ans.begin(),ans.end());cout<<ans.size()<<"\\n";for(auto &c:ans){cout<<c.size()<<" ";for(int x:c)cout<<x<<" ";cout<<"\\n";}'
 title={'cut-vertices':'Tarjan · 割点','point-bcc':'Tarjan · 点双连通分量','bridges':'Tarjan · 桥','edge-bcc':'Tarjan · 边双连通分量'}[mode]
 add('g-'+mode,title,'cut',[ref('cut',[b],['tarjan','cut_pbc'] if b==0 else ['tarjan','dfs','bridge_ebc'])],'给定无向简单图。'+{'cut-vertices':'找出删除后使连通分量数增多的顶点。','point-bcc':'输出所有点双连通分量。桥的两端作为一个二顶点分量，孤立顶点单独成分量；割点可属于多个分量。','bridges':'找出删除后使连通分量数增多的边。','edge-bcc':'删除所有桥后，输出剩余图的连通分量，孤立顶点也输出。'}[mode],GIN.replace('有向边','无向边'),'第一行数量；'+('第二行递增顶点。' if mode=='cut-vertices' else '之后每行递增的u v，各边按字典序。' if mode=='bridges' else '之后每行先输出分量大小，再输出递增顶点；各分量按顶点序列字典序排列。'),GBOUNDS,cs,wrap(body,code('cut',[b])),difficulty='进阶')
# MST variants
MSTCASES=[(1,[]),(4,[(1,2,2),(2,3,-1),(3,4,4),(1,4,9),(1,3,5)]),(4,[(1,2,3),(3,4,2)]),(3,[(1,2,0),(2,3,0),(1,3,1)])]
for alg,b in [('prim',0),('kruskal',1)]:
 cs=[]
 for n,es in MSTCASES:
  p=list(range(n+1))
  def find(x):
   while p[x]!=x:x=p[x]
   return x
  val=cnt=0
  for u,v,w in sorted(es,key=lambda x:x[2]):
   a,c=find(u),find(v)
   if a!=c:p[a]=c;val+=w;cnt+=1
  cs.append(case(['单点','负权图','非连通','零权边'][len(cs)],graphin(n,es),val if cnt==n-1 else 'DISCONNECTED'))
 body=WREAD.replace('g[u].push_back(edge(v,w));','g[u].push_back(edge(v,w));g[v].push_back(edge(u,w));')+'vector<int>t[vNum];'+alg+'(g,n,t);int count=0;long long total=0;for(int i=1;i<=n;i++)for(int j:t[i])if(i<j){count++;for(auto x:g[i])if(x.v==j){total+=x.w;break;}}if(count!=n-1)cout<<"DISCONNECTED";else cout<<total;'
 add('g-mst-'+alg,alg.title()+' · 最小生成树','mst',[ref('mst',[b],[alg])],'求无向简单带权图的最小生成树总权值。图不连通时输出 DISCONNECTED；单顶点图的结果为0。','n m\nm行u v w；顶点1..n。','总权值或DISCONNECTED。',GBOUNDS+['-1000≤w≤1000；无重边'],cs,wrap(body,EDGE+code('mst',[b])),difficulty='进阶')
# DAG topological order uses original FIFO rule.
DAGCASES=[(1,[]),(5,[(1,3),(2,3),(3,4)]),(3,[(1,2),(2,3),(3,1)])]
cs=[]
for n,es in DAGCASES:
 adj=[[]for _ in range(n+1)];deg=[0]*(n+1)
 for u,v in es:adj[u].append(v);deg[v]+=1
 q=collections.deque(i for i in range(1,n+1) if deg[i]==0);order=[]
 while q:
  u=q.popleft();order.append(u)
  for v in adj[u]:
   deg[v]-=1
   if not deg[v]:q.append(v)
 cs.append(case(['单点','多个初始零入度点','环'][len(cs)],graphin(n,es),' '.join(map(str,order)) if len(order)==n else 'CYCLE'))
add('g-topological-fifo','拓扑排序 · Kahn 队列法','dag',[ref('dag',[0],['topological_sort'])],'按原码规则拓扑排序：先按编号递增把零入度顶点入普通FIFO队列；出队后按输入边顺序处理邻接点，新变为零入度的点追加到队尾。存在环输出 CYCLE；本题不要求字典序最小。',GIN,'一个拓扑顶点序列，或CYCLE。',GBOUNDS,cs,wrap(GREAD+'int ts[vNum];if(!topological_sort(g,n,ts))cout<<"CYCLE";else for(int i=0;i<n;i++)cout<<ts[i]<<" ";',code('dag',[0])))
cs=[]
for n,es in [(1,[]),(4,[(1,2,10),(1,3,1),(3,4,1)]),(4,[(1,2,2),(1,3,2),(2,4,3),(3,4,3)]),(3,[(1,2,1),(2,3,1),(3,1,1)])]:
 adj=[[]for _ in range(n+1)];deg=[0]*(n+1)
 for u,v,w in es:adj[u].append((v,w));deg[v]+=1
 q=collections.deque(i for i in range(1,n+1) if deg[i]==0);order=[];ve=[0]*(n+1)
 while q:
  u=q.popleft();order.append(u)
  for v,w in adj[u]:
   ve[v]=max(ve[v],ve[u]+w);deg[v]-=1
   if not deg[v]:q.append(v)
 if len(order)<n:ans='CYCLE'
 else:
  vl=[max(ve)]*(n+1)
  for u in reversed(order):
   for v,w in adj[u]:vl[u]=min(vl[u],vl[v]-w)
  critical=sorted((u,v,w)for u,v,w in es if ve[u]==vl[v]-w);ans=str(len(critical))+'\n'+rows(critical)
 cs.append(case(['单事件','多个汇点','两条关键路径','环'][len(cs)],graphin(n,es),ans))
body=WREAD+'vector<edge>cp[vNum];if(!critical_path(g,n,cp)){cout<<"CYCLE";return 0;}vector<tuple<int,int,int>>ans;for(int u=1;u<=n;u++)for(auto e:cp[u])ans.emplace_back(u,e.v,e.w);sort(ans.begin(),ans.end());cout<<ans.size()<<"\\n";for(auto[u,v,w]:ans)cout<<u<<" "<<v<<" "<<w<<"\\n";'
add('g-critical-path','AOE 网 · 关键活动','dag',[ref('dag',[0,1],['critical_path'])],'事件为顶点，持续时间非负的活动为有向边。按整个工程的最大完成时间计算每个活动的最早/最迟开始时间，输出二者相等的关键活动；允许多个源点、汇点。存在环输出 CYCLE。','n m\nm行u v w，顶点1..n。','无环时第一行关键活动数量，之后按(u,v,w)字典序每行输出一条；有环输出CYCLE。',GBOUNDS+['0≤w≤1000'],cs,wrap(body,EDGE+code('dag').replace('cout<<"图g存在环路!"<<endl;','/* OJ驱动统一输出CYCLE */')),difficulty='进阶')
# shortest distances and route restoration; path inputs form unique shortest paths.
SHORTCASES=[(1,[],1,1),(5,[(1,2,2),(2,3,3),(1,3,8),(3,4,0)],1,4),(4,[(1,2,1),(3,4,2)],1,4)]
def shortest(n,es,st):
 d=[10**15]*(n+1);p=[0]*(n+1);d[st]=0;p[st]=st
 for _ in range(n):
  changed=False
  for u,v,w in es:
   if d[u]<10**15 and d[v]>d[u]+w:d[v]=d[u]+w;p[v]=u;changed=True
  if not changed:return d,p,False
 return d,p,True
for alg,b in [('dijkstra',0),('spfa',1),('floyd',2)]:
 for mode in ['distances','path']:
  cs=[];gcases=SHORTCASES[:]
  if alg=='spfa':gcases.append((4,[(1,2,4),(1,3,5),(2,3,-2),(3,4,3)],1,4))
  for n,es,st,tar in gcases:
   if mode=='distances' and alg=='floyd':
    dist=[]
    for i in range(1,n+1):
     ds,_,_=shortest(n,es,i);dist.append(' '.join('INF' if x>=10**15 else str(x) for x in ds[1:]))
    ans='\n'.join(dist);extra=''
   else:
    ds,pa,neg=shortest(n,es,st)
    if mode=='distances':ans=' '.join('INF' if x>=10**15 else str(x)for x in ds[1:]);extra=str(st)+'\n'
    elif ds[tar]>=10**15:ans='UNREACHABLE';extra=f'{st} {tar}\n'
    else:
     route=[];u=tar
     while u!=st:route.append(u);u=pa[u]
     route.append(st);ans=' '.join(map(str,reversed(route)));extra=f'{st} {tar}\n'
   cs.append(case(['单点','唯一最短路径','不可达','负边无负环'][len(cs)],graphin(n,es,extra),ans))
  if alg=='spfa':
   n=3;es=[(1,2,1),(2,3,-2),(3,2,0)];cs.append(case('源点可达负环',graphin(n,es,'1 3\n' if mode=='path' else '1\n'),'NEGATIVE CYCLE'))
  defs=EDGE+code('short',[b]);body=WREAD
  if alg=='floyd':
   body+='int d[vNum][vNum],p[vNum][vNum];Floyd(g,n,d,p);'
   if mode=='distances':body+='for(int i=1;i<=n;i++){for(int j=1;j<=n;j++){if(d[i][j]==INF)cout<<"INF ";else cout<<d[i][j]<<" ";}cout<<"\\n";}'
   else:body+='int st,tar;cin>>st>>tar;if(d[st][tar]==INF)cout<<"UNREACHABLE";else{getPath(p,st,tar);cout<<tar;}'
  else:
   body+='int st,tar,d[vNum],p[vNum];cin>>st;'+('cin>>tar;' if mode=='path' else '')
   if alg=='dijkstra':body+='Dijkstra(g,n,st,d,p);'
   else:
    body+='if(!spfa(g,n,st,d,p)){cout<<"NEGATIVE CYCLE";return 0;}'
    if mode=='path':defs+='void getPath(int p[vNum],int v){if(v<=0||v>=vNum||p[v]==0)return;if(p[v]!=v)getPath(p,p[v]);cout<<v<<" ";}\n'
   body+=('for(int i=1;i<=n;i++){if(d[i]==INF)cout<<"INF ";else cout<<d[i]<<" ";}' if mode=='distances' else 'if(d[tar]==INF)cout<<"UNREACHABLE";else getPath(p,tar);')
  title=alg.title()+' · '+('所有点对距离' if alg=='floyd' and mode=='distances' else '单源最短距离' if mode=='distances' else '最短路径还原')
  refs=[ref('short',[b],['Dijkstra'] if alg=='dijkstra' and mode=='distances' else ['spfa'] if alg=='spfa' and mode=='distances' else ['Floyd'] if mode=='distances' else [alg.title() if alg!='spfa' else 'spfa','getPath'])]
  if alg=='spfa' and mode=='path':refs.append(ref('short',[0],['getPath']))
  add('g-'+alg+'-'+mode,title,'short',refs,'图为有向图。'+('输出每对顶点的最短距离，空路径距离为0。' if alg=='floyd' and mode=='distances' else '求指定源点的最短距离。' if mode=='distances' else '输出从源点到目标点的最短路径顶点序列。测试保证可达时最短路径唯一。')+('若源点能到达负权环，输出 NEGATIVE CYCLE。' if alg=='spfa' else '')+'不可达的距离输出INF，路径输出UNREACHABLE。','n m\nm行u v w；'+('无其他输入。' if alg=='floyd' and mode=='distances' else '最后一行st。' if mode=='distances' else '最后一行st target。'),'按1..n输出距离或路径序列；Floyd距离按矩阵逐行输出。',GBOUNDS+(['0≤w≤1000'] if alg=='dijkstra' else ['-1000≤w≤1000'] )+(['不含负环'] if alg=='floyd' else []),cs,wrap(body,defs),difficulty='进阶')
cs=[]
for n,es in [(1,[]),(3,[(1,2),(2,3)]),(3,[(1,2),(2,1)])]:
 reach=[[0]*n for _ in range(n)]
 for u,v in es:reach[u-1][v-1]=1
 for k in range(n):
  for i in range(n):
   for j in range(n):reach[i][j]|=reach[i][k]&reach[k][j]
 cs.append(case(['空边单点','链','有向环'][len(cs)],graphin(n,es),rows(reach)))
add('g-transitive-closure','Warshall · 传递闭包','short',[ref('short',[3],['transitive_closure'])],'输出至少经过一条边的可达矩阵。u能沿一条或多条边到v则为1，否则为0；不自动把对角线置1，存在回到自身的有向环时对应对角线才为1。',GIN,'n行n列的0/1矩阵。',GBOUNDS,cs,wrap(GREAD+'int ts[vNum][vNum];transitive_closure(g,n,ts);for(int i=1;i<=n;i++){for(int j=1;j<=n;j++)cout<<ts[i][j]<<" ";cout<<"\\n";}',code('short',[3])))
print('GRAPH PART SAVED',len(P))
# Linear-table searching and every concrete STL search example.
SEARCHCS=[([],3),([1,3,3,3,7,9],3),([-5,-1,0,8],6),([4,4,4],4)]
def search_index(a,k):
 l=0;r=len(a)-1
 while l<=r:
  m=l+(r-l)//2
  if a[m]==k:return m
  if a[m]>k:r=m-1
  else:l=m+1
 return -1
for alg in ['recursive-binary','iterative-binary','interpolation']:
 cs=[]
 for a,k in SEARCHCS:
  if alg!='interpolation':ans=search_index(a,k)
  else:
   l=0;r=len(a)-1;ans=-1
   while l<=r:
    if k<a[l] or k>a[r]:break
    if a[l]==a[r]:ans=l if a[l]==k else -1;break
    mid=l+(r-l)*(k-a[l])//(a[r]-a[l])
    if a[mid]==k:ans=mid;break
    if a[mid]>k:r=mid-1
    else:l=mid+1
  cs.append(case(['空表','重复键','不存在','全相等'][len(cs)],f'{len(a)} {k}\n'+' '.join(map(str,a))+'\n',ans))
 b=1 if alg=='interpolation' else 0
 call='interpolation_search(a,k)' if b else 'binary_search(a,0,n-1,k)' if alg.startswith('recursive') else 'binary_search(a,k)'
 title={'recursive-binary':'二分查找 · 递归','iterative-binary':'二分查找 · 非递归','interpolation':'插值查找'}[alg]
 add('s-'+alg,title,'linear',[ref('linear',[b],['interpolation_search'] if b else ['binary_search(recursive)' if alg.startswith('recursive') else 'binary_search(iterative)'])],'在递增有序整数数组中查找目标。重复键返回算法首次遇到的下标（不要求最左）；二分中点为l+(r-l)/2，插值按端点比例定位，并按原码处理相等端点。','n target\n接下来n个非递减整数。','找到时输出0起始下标，不存在输出-1。',['0≤n≤500','-10000≤元素、target≤10000'],cs,wrap('int n,k;cin>>n>>k;vector<int>a(n);for(int&x:a)cin>>x;cout<<'+call+';',code('linear',[b])))
for mode in ['binary-exists','lower-bound','upper-bound','equal-range','set-lower-bound']:
 cs=[]
 for a,k in SEARCHCS:
  import bisect
  aa=sorted(set(a)) if mode=='set-lower-bound' else a
  l=bisect.bisect_left(aa,k);r=bisect.bisect_right(aa,k)
  ans=int(l<len(aa) and aa[l]==k) if mode=='binary-exists' else l if mode=='lower-bound' else r if mode=='upper-bound' else f'{l} {r} {r-l}' if mode=='equal-range' else str(aa[l]) if l<len(aa) else 'NONE'
  cs.append(case(['空容器','重复键','超出或间隙','全相等'][len(cs)],f'{len(a)} {k}\n'+' '.join(map(str,a))+'\n',ans))
 body='int n,k;cin>>n>>k;vector<int>a(n);for(int&x:a)cin>>x;'
 body+= {'binary-exists':'cout<<binary_search(a.begin(),a.end(),k);','lower-bound':'cout<<lower_bound(a.begin(),a.end(),k)-a.begin();','upper-bound':'cout<<upper_bound(a.begin(),a.end(),k)-a.begin();','equal-range':'auto p=equal_range(a.begin(),a.end(),k);cout<<p.first-a.begin()<<" "<<p.second-a.begin()<<" "<<p.second-p.first;','set-lower-bound':'set<int>s(a.begin(),a.end());auto p=s.lower_bound(k);if(p==s.end())cout<<"NONE";else cout<<*p;'}[mode]
 meaning={'binary-exists':'是否存在目标，输出0或1。','lower-bound':'第一个不小于目标的0起始下标，若都小于目标则输出n。','upper-bound':'第一个大于目标的0起始下标，若没有则输出n。','equal-range':'匹配目标的左闭右开区间[l,r)，输出l、r和r-l。','set-lower-bound':'先构造去重的set，输出第一个不小于目标的值；不存在输出NONE。'}[mode]
 add('s-stl-'+mode,'STL 查找 · '+mode,'linear',[ref('linear',[2],[mode])],'练习原笔记的STL搜索例子：'+meaning,'n target\nn个非递减整数。',meaning,['0≤n≤500','-10000≤元素、target≤10000'],cs,wrap(body),note='由原笔记这一STL调用示例参数化成完整输入输出程序；保留对应标准库操作和边界判断。')
# Block indexing: caller supplies nonempty ordered blocks without prompting strings.
cs=[]
for blocks_,k in [([[1,3,2],[5,4],[8,6,7]],4),([[1],[2],[3]],4),([[7,5,6]],5),([],1)]:
 arr=list(itertools.chain.from_iterable(blocks_));ans=arr.index(k)if k in arr else -1
 cs.append(case(['块内无序','不存在','单块','空表'][len(cs)],f'{len(blocks_)} {k}\n'+''.join(str(len(a))+' '+' '.join(map(str,a))+'\n'for a in blocks_),ans))
body='int m,k;cin>>m>>k;bitTable b;b.sz=m;for(int i=0;i<m;i++){int len;cin>>len;b.bit[i].begin=b.sl.size();int mx=-1;while(len--){int x;cin>>x;b.sl.push_back(x);mx=max(mx,x);}b.bit[i].end=b.sl.size();b.bit[i].mkey=mx;}cout<<block_search(b,k);'
add('s-block-search','分块查找 · 块内顺序搜索','linear',[ref('linear',[3,4],['get_bitTable','block_search'])],'给定若干非空块。块内可以无序，但前一块的所有元素都严格小于后一块的所有元素。构造块最大值索引，用索引定位块后在块内顺序查找。返回展平数组中目标第一次出现的下标。','m target\n接下来m行：len以及该块的len个整数。','0起始下标，不存在输出-1。',['0≤m≤6','每块1≤len≤50','所有元素及target为1..10000'],cs,wrap(body,code('linear',[3,4])),note='直接使用原block_search；为适配OJ，以明确块长度替代交互提示和0哨兵，仍按原get_bitTable规则构造begin/end/mkey。')
for alg,b in [('bf',5),('kmp',6)]:
 cs=[]
 for a,t in [('',''),('abcabcab','cab'),('aaaaa','aaab'),('ababababca','ababca'),('abc','')]:cs.append(case(['两个空串','一般匹配','不存在','多次回退','空模式'][len(cs)],a+'\n'+t+'\n',a.find(t)))
 add('s-string-'+alg,alg.upper()+' · 字符串模式匹配','linear',[ref('linear',[b],['bf'] if b==5 else ['kmp_next','kmp'])],'主串与模式串分别占一整行，允许空串。返回模式串首次出现的0起始位置；空模式返回0，未出现返回-1。','第一行主串s；第二行模式串t（允许空行）。','一个下标或-1。',['0≤|s|≤500','0≤|t|≤100','仅含小写英文字母'],cs,wrap('string s,t;getline(cin,s);getline(cin,t);cout<<'+alg+'(s,t);',code('linear',[b])))
# Skip list: deterministic initial tower heights, actual randomized insertion is retained.
SKIPINIT=[[],[(1,1),(3,3),(8,2)],[(2,2),(5,1),(9,3)]]
SKIPDEF=code('linear',[7,8,9,10])+'''void load_skip(skipList &s,int n){sklNode*last[ML];for(int i=0;i<ML;i++)last[i]=s.head;for(int i=0;i<n;i++){int key,h;cin>>key>>h;sklNode*p=new sklNode;p->key=key;s.level=max(s.level,h);for(int j=0;j<h;j++){last[j]->next[j]=p;last[j]=p;}}}
void bottom(skipList s){if(!s.head->next[0]){cout<<"EMPTY";return;}for(auto p=s.head->next[0];p;p=p->next[0])cout<<p->key<<" ";}
'''
for mode in ['search','insert','delete','print']:
 cs=[]
 for j,init in enumerate(SKIPINIT):
  keys=dict(init);qs=[3,8,4] if j==1 else [2,2,9]if j==2 else [5,5]
  inp=str(len(init))+'\n'+rows(init)+'\n'
  if mode=='print':
   if not init:ans='EMPTY'
   else:ans='\n'.join(str(h)+': '+' '.join(str(k)for k,height in init if height>=h)for h in range(1,max(keys.values())+1))
  else:
   inp+=str(len(qs))+'\n'+' '.join(map(str,qs))+'\n';vals=[]
   for k in qs:
    if mode=='search':vals.append(keys.get(k,-1))
    elif mode=='insert':vals.append(int(k not in keys));keys[k]=keys.get(k,1)
    else:vals.append(int(k in keys));keys.pop(k,None)
   ans=' '.join(map(str,vals))
   if mode!='search':ans+='\n'+(' '.join(map(str,sorted(keys)))or'EMPTY')
  cs.append(case(['空跳表','分层查询','重复键操作'][j],inp,ans))
 body='int n;cin>>n;skipList s;load_skip(s,n);'
 if mode=='print':body+='if(s.level==0)cout<<"EMPTY";else for(int h=1;h<=s.level;h++){cout<<h<<":";for(auto p=s.head->next[h-1];p;p=p->next[h-1])cout<<" "<<p->key;cout<<"\\n";}'
 else:
  call={'search':'skl_search(s,k)','insert':'skl_insert(s,k)','delete':'skl_delete(s,k)'}[mode]
  body+='int q;cin>>q;while(q--){int k;cin>>k;cout<<'+call+'<<" ";}'+('cout<<"\\n";bottom(s);'if mode!='search'else'')
 add('s-skip-'+mode,'跳表 · '+{'search':'查找最高层','insert':'插入','delete':'删除','print':'逐层遍历'}[mode],'linear',[ref('linear',[7,8,9,10]if mode in ['insert','delete'] else [7,8]if mode=='search'else[7,9],['skl_'+mode] if mode!='print' else ['skl_print'])],'初始跳表由互异升序键和各键的塔高构建。'+{'search':'对每个查询返回目标出现的最高层（1起始），不存在返回-1。','insert':'按原掷硬币方法分配新节点塔高；每次输出是否成功。最后输出底层所有键，随机层高不会影响判题输出。','delete':'每次输出是否删除成功；最后输出底层所有键。','print':'从第1层到最高非空层，分别输出该层的键。'}[mode],'n\n接下来n行key height。'+(''if mode=='print'else'\nq\nq个待操作的键。'),'返回值0/1或层数；修改题最后另起一行输出底层键，空时EMPTY；遍历题每行h: 后接该层键，空表EMPTY。',['0≤n,q≤100','-10000≤key≤10000','初始key严格递增，1≤height≤5'],cs,wrap(body,SKIPDEF),difficulty='进阶',note='使用笔记原跳表结构和操作；输入塔高仅用于确定性构建初始层。遍历输出格式参数化，不输出平台相关的rand结果。')
# Shared exact node serializers; # denotes a null pointer.
BSTPRINT='void show(bstTree t){if(!t){cout<<"# ";return;}cout<<t->key<<" ";show(t->lc);show(t->rc);}\n'
AVLPRINT='void show(avlTree t){if(!t){cout<<"# ";return;}cout<<t->key<<":"<<t->h<<" ";show(t->lc);show(t->rc);}\n'
SPPRINT='void show(splayTree t){if(!t){cout<<"# ";return;}cout<<t->key<<" ";show(t->lc);show(t->rc);}\n'
RBPRINT='void show(rbTree t){if(!t){cout<<"# ";return;}cout<<t->key<<":"<<(t->c==RED?"R":"B")<<" ";show(t->lc);show(t->rc);}\n'
TTPRINT='void show(tree2_3 t){if(!t){cout<<"# ";return;}cout<<"[";for(int i=0;i<t->num;i++){if(i)cout<<",";cout<<t->key[i];}cout<<"] ";for(int i=0;i<=t->num;i++)show(t->child[i]);}\n'
def py_bst_insert(t,k):
 if t is None:return [k,None,None],True
 if k==t[0]:return t,False
 side=1 if k<t[0]else 2;t[side],ok=py_bst_insert(t[side],k);return t,ok
def py_bst_delete(t,k):
 if t is None:return t,False
 if k<t[0]:t[1],ok=py_bst_delete(t[1],k)
 elif k>t[0]:t[2],ok=py_bst_delete(t[2],k)
 else:
  if t[1]is None:return t[2],True
  if t[2]is None:return t[1],True
  a=t[2]
  while a[1]:a=a[1]
  t[0]=a[0];t[2],_=py_bst_delete(t[2],a[0]);ok=True
 return t,ok
def height(t):return 0 if t is None else max(height(t[1]),height(t[2]))+1
def ser(t,style='key'):
 if t is None:return '#'
 value=str(t[0])+(':'+str(height(t))if style=='avl'else'')
 return value+' '+ser(t[1],style)+' '+ser(t[2],style)
def rot(t,side):
 i=1 if side=='LL'else 2;j=3-i;b=t[i];t[i]=b[j];b[j]=t;return b
def av_balance(t):
 if t is None:return None
 if height(t[1])-height(t[2])>1:
  if height(t[1][1])<height(t[1][2]):t[1]=rot(t[1],'RR')
  return rot(t,'LL')
 if height(t[2])-height(t[1])>1:
  if height(t[2][2])<height(t[2][1]):t[2]=rot(t[2],'LL')
  return rot(t,'RR')
 return t
def py_av_insert(t,k):
 if t is None:return [k,None,None],True
 if t[0]==k:return t,False
 i=1 if k<t[0]else 2;t[i],ok=py_av_insert(t[i],k);return av_balance(t),ok
def py_av_delete(t,k):
 if t is None:return None,False
 if k<t[0]:t[1],ok=py_av_delete(t[1],k)
 elif k>t[0]:t[2],ok=py_av_delete(t[2],k)
 else:
  if not t[1]:return t[2],True
  if not t[2]:return t[1],True
  q=t[2]
  while q[1]:q=q[1]
  t[0]=q[0];t[2],_=py_av_delete(t[2],q[0]);ok=True
 return av_balance(t),ok
TREECASES=[([], [5,5,2]),([4,2,6,1,3,5,7],[4,9,2]),([10,5,7],[10,7,20])]
for family in ['bst','avl']:
 for mode in ['search','insert','delete']if family=='bst'else['insert','delete']:
  cs=[]
  for init,qs in TREECASES:
   t=None;insert=py_bst_insert if family=='bst'else py_av_insert
   for k in init:t,_=insert(t,k)
   ans=[]
   for k in qs:
    if mode=='search':
     a=t
     while a and a[0]!=k:a=a[1]if k<a[0]else a[2]
     ans.append(int(a is not None))
    elif mode=='insert':t,ok=insert(t,k);ans.append(int(ok))
    else:t,ok=(py_bst_delete if family=='bst'else py_av_delete)(t,k);ans.append(int(ok))
   expected=' '.join(map(str,ans))+(''if mode=='search'else'\n'+ser(t,'avl'if family=='avl'else'key'))
   cs.append(case(['空树与重复键','一般平衡树','仅左孩子含右分支'][len(cs)],f'{len(init)}\n'+' '.join(map(str,init))+f'\n{len(qs)}\n'+' '.join(map(str,qs))+'\n',expected))
  typ='bstTree'if family=='bst'else'avlTree';func=family+'_'+mode
  body='int n;cin>>n;'+typ+' t=NULL;for(int i=0;i<n;i++){int k;cin>>k;'+family+'_insert(t,k);}int q;cin>>q;while(q--){int k;cin>>k;cout<<'+(func+'(t,k)!=NULL)'if mode=='search'else func+'(t,k)')+'<<" ";}'+(''if mode=='search'else'cout<<"\\n";show(t);')
  if mode=='search':body=body.replace('cout<<bst_search(t,k)!=NULL)','cout<<(bst_search(t,k)!=NULL)')
  inds=[0,1,2,3]if family=='bst'else list(range(4,11));defs=code('bst',inds)+(BSTPRINT if family=='bst'else AVLPRINT)
  add('s-'+family+'-'+mode,family.upper()+' · '+{'search':'查找','insert':'插入与结构','delete':'删除与结构'}[mode],'bst',[ref('bst',inds,[func])],'用初始键按输入顺序建'+family.upper()+'树，重复键不建立新节点。'+('逐个查询是否存在。'if mode=='search'else'依次执行'+('插入'if mode=='insert'else'删除')+'，输出成功标记，最后输出实际树结构。')+'修改题用先序序列和空指针#保留形状；AVL还输出每个节点高度，不能只用有序集合替代。','n\nn个初始键\nq\nq个待操作键。','第一行q个0/1。'+(''if mode=='search'else'第二行先序结构；节点为key'+(':height'if family=='avl'else'')+'，空指针为#。'),['0≤n,q≤100','-10000≤key≤10000'],cs,wrap(body,defs),difficulty='进阶')
# Individual AVL rotations, with nontrivial child attachments.
ROTCASES={'LL':[[3,2,1],[5,3,2,4],[8,5,3,6,10]],'RR':[[1,2,3],[2,1,4,3,5],[3,1,6,5,8]],'LR':[[3,1,2],[6,2,8,1,4,3,5],[8,3,10,1,6,4,7]],'RL':[[1,3,2],[3,1,7,5,8,4,6],[4,2,9,7,10,6,8]]}
for j,kind in enumerate(['LL','RR','LR','RL']):
 cs=[]
 for a in ROTCASES[kind]:
  t=None
  for k in a:t,_=py_bst_insert(t,k)
  if kind=='LR':t[1]=rot(t[1],'RR');t=rot(t,'LL')
  elif kind=='RL':t[2]=rot(t[2],'LL');t=rot(t,'RR')
  else:t=rot(t,kind)
  cs.append(case(['最小三节点','保留中间子树','保留两侧子树'][len(cs)],str(len(a))+'\n'+' '.join(map(str,a))+'\n',ser(t,'avl')))
 defs=code('bst',range(4,9))+AVLPRINT+'void raw_insert(avlTree&t,int k){if(!t){t=new avlNode;t->key=k;return;}if(k<t->key)raw_insert(t->lc,k);else raw_insert(t->rc,k);t->h=max(avl_height(t->lc),avl_height(t->rc))+1;}\n'
 add('s-avl-rotate-'+kind.lower(),'AVL · '+kind+' 旋转','bst',[ref('bst',[4,5,6,7,8],[kind])],'先按普通BST插入顺序构造子树（此阶段不自动平衡），保证根具有'+kind+'型旋转所需孩子。仅对根执行一次'+kind+'旋转，重新计算受影响节点高度并输出完整结构。','n\nn个互异键。','先序节点key:height，空指针#。',['3≤n≤30','-10000≤key≤10000','输入保证相应旋转需要的孩子存在'],cs,wrap('int n;cin>>n;avlTree t=NULL;while(n--){int k;cin>>k;raw_insert(t,k);}t='+kind+'(t);show(t);',defs),difficulty='进阶')
# Splay model (top-down); query failures still move the last-accessed root.
def py_splay(t,k):
 if t is None:return None
 header=[None,None,None];l=r=header
 while True:
  if k<t[0]:
   if t[1]is None:break
   if k<t[1][0]:t=rot(t,'LL')
   if t[1]is None:break
   r[1]=t;r=t;t=t[1]
  elif k>t[0]:
   if t[2]is None:break
   if k>t[2][0]:t=rot(t,'RR')
   if t[2]is None:break
   l[2]=t;l=t;t=t[2]
  else:break
 l[2]=t[1];r[1]=t[2];t[1]=header[2];t[2]=header[1];return t
def py_spinsert(t,k):
 if t is None:return[k,None,None],True
 t=py_splay(t,k)
 if k==t[0]:return t,False
 if k<t[0]:a=[k,t[1],t];t[1]=None
 else:a=[k,t,t[2]];t[2]=None
 return a,True
def py_spdelete(t,k):
 if t is None:return None,False
 t=py_splay(t,k)
 if t[0]!=k:return t,False
 if t[2]is None:return t[1],True
 a=py_splay(t[2],k);a[1]=t[1];return a,True
for mode in ['stretch','search','insert','delete']:
 cs=[]
 for init,qs in TREECASES:
  t=None
  for k in init:t,_=py_spinsert(t,k)
  ans=[]
  for k in qs:
   if mode in ['search','stretch']:t=py_splay(t,k);ok=t is not None and t[0]==k
   elif mode=='insert':t,ok=py_spinsert(t,k)
   else:t,ok=py_spdelete(t,k)
   ans.append((''if mode=='stretch'else str(int(ok))+' ')+(str(t[0])if t else'EMPTY'))
  cs.append(case(['空树边界','成功和失败访问','连续调整'][len(cs)],f'{len(init)}\n'+' '.join(map(str,init))+f'\n{len(qs)}\n'+' '.join(map(str,qs))+'\n','\n'.join(ans)+'\n'+ser(t)))
 body='int n;cin>>n;splayTree t=NULL;while(n--){int k;cin>>k;splay_insert(t,k);}int q;cin>>q;while(q--){int k;cin>>k;'
 body+=('splay(t,k);'if mode=='stretch'else'cout<<'+('(splay_search(t,k)!=NULL)'if mode=='search'else'splay_'+mode+'(t,k)')+'<<" ";')+'if(t)cout<<t->key;else cout<<"EMPTY";cout<<"\\n";}show(t);'
 add('s-splay-'+mode,'Splay · '+{'stretch':'自顶向下伸展','search':'查找并伸展','insert':'插入','delete':'删除'}[mode],'splay',[ref('splay',list(range(6)),['splay']if mode=='stretch'else['splay_'+mode])],'按输入顺序使用伸展树插入初始键，随后执行指定操作。每次访问或操作后都观察根：即使目标不存在，原码仍会伸展最后访问的附近节点。','n\nn个初始键\nq\nq个操作键。',('每次一行：调整后的根（空树EMPTY）。'if mode=='stretch'else'每次一行：成功标记0/1和调整后的根（空树EMPTY）。')+'最后一行输出先序key/#结构。',['0≤n,q≤100','-10000≤key≤10000'],cs,wrap(body,code('splay')+SPPRINT),difficulty='进阶')
# RB and 2-3 examples have hand-checked structure oracles; native tests also exercise the full original implementations.
for family in ['rb','tt']:
 modes=['insert','delete']if family=='rb'else['search','insert','delete']
 for mode in modes:
  if family=='rb'and mode=='insert':items=[([], [5],'1\n5:B # #'),([2,1,3],[1,4],'0 1\n2:B 1:B # # 3:B # 4:R # #'),([],[3,2,1],'1 1 1\n2:B 1:R # # 3:R # #')]
  elif family=='rb':items=[([],[5],'0\n#'),([2,1,3],[1],'1\n2:B # 3:R # #'),([5],[5,5],'1 0\n#')]
  elif mode=='search':items=[([],[1,2],'0 0'),([2,1,3],[1,2,3,4],'1 1 1 0'),([5,5],[5,0],'1 0')]
  elif mode=='insert':items=[([],[5],'1\n[5] # #'),([2,1],[3,3,4],'1 0 1\n[2] [1] # # [3,4] # # #'),([2,1,3],[0,5],'1 1\n[2] [0,1] # # # [3,5] # # #')]
  else:items=[([],[1,2],'0 0\n#'),([5],[5,5],'1 0\n#'),([2,1,3],[1],'1\n[2,3] # # #')]
  cs=[case(['空树','分裂/旋转/删除','重复与根变化'][i],f'{len(a)}\n'+' '.join(map(str,a))+f'\n{len(qs)}\n'+' '.join(map(str,qs))+'\n',expect)for i,(a,qs,expect)in enumerate(items)]
  typ='rbTree'if family=='rb'else'tree2_3';ins='rbt_insert'if family=='rb'else'insert2_3';defs=code(family)+(RBPRINT if family=='rb'else TTPRINT)
  body='int n;cin>>n;'+typ+' t=NULL;while(n--){int k;cin>>k;'+ins+'(t,k);}int q;cin>>q;while(q--){int k;cin>>k;'
  if family=='rb':body+='cout<<rbt_'+mode+'(t,k)<<" ";'
  elif mode=='search':body+='cout<<search2_3(t,k)<<" ";'
  elif mode=='insert':body+='bool existed=search2_3(t,k);insert2_3(t,k);cout<<!existed<<" ";'
  else:body+='bool existed=search2_3(t,k);delete2_3(t,t,k);cout<<existed<<" ";'
  body+='}'+('cout<<"\\n";show(t);'if mode!='search'else'')
  add('s-'+family+'-'+mode,('红黑树'if family=='rb'else'2-3树')+' · '+{'search':'查找','insert':'插入与结构','delete':'删除与结构'}[mode],family,[ref(family,list(range(len(NOTES[D[family]]['codes']))),['rbt_'+mode]if family=='rb'else['search2_3'if mode=='search'else'insert2_3'if mode=='insert'else'delete2_3','delete2_3_first']if mode=='delete'else['insert2_3'if mode=='insert'else'search2_3'])],'依输入顺序建立原笔记的'+('红黑树'if family=='rb'else'2-3树')+'，重复键不插入。逐个执行'+{'search':'查找','insert':'插入','delete':'删除'}[mode]+'，输出是否成功。'+(''if mode=='search'else'最后输出实际结构，必须维护平衡关系；不能仅输出排序后的集合。'),'n\nn个初始键\nq\nq个操作键。','第一行q个0/1。'+(''if mode=='search'else'第二行先序结构：'+('key:R或key:B；空指针#。'if family=='rb'else'每节点为[k1]或[k1,k2]，接着递归输出num+1个孩子；空指针#。')),['0≤n,q≤100','-10000≤key≤10000'],cs,wrap(body,defs),difficulty='进阶')
# Exact-key Trie multiplicities and prime-mod hash tree operations.
for family in ['trie','hash']:
 for mode in ['search','insert','delete']:
  initsets=[([],['apple','apple','z']) if family=='trie'else([],[-3,-3,4]),(['app','apple','app'],['app','apple','a'])if family=='trie'else([-3,5,9],[-3,9,8]),(['a','b'],['a','a','b'])if family=='trie'else([2,3],[2,2,3])]
  cs=[]
  for init,qs in initsets:
   counts=collections.Counter(init);vals=[]
   for k in qs:
    if mode=='search':vals.append(str(counts[k]if family=='trie'else int(counts[k]>0)))
    elif mode=='insert':
     if family=='trie':counts[k]+=1;vals.append(str(counts[k]))
     else:vals.append(str(int(counts[k]==0)));counts[k]=1
    else:
     success=counts[k]>0
     if success:counts[k]-=1
     vals.append((str(int(success))+' '+str(counts[k]))if family=='trie'else str(int(success)))
   cs.append(case(['空结构和重复键','前缀/负数区分','重复删除'][len(cs)],str(len(init))+'\n'+' '.join(map(str,init))+'\n'+str(len(qs))+'\n'+' '.join(map(str,qs))+'\n','\n'.join(vals)))
  if family=='trie':
   body='int n;cin>>n;trieTree t=NULL;while(n--){string k;cin>>k;trie_insert(t,k);}int q;cin>>q;while(q--){string k;cin>>k;'+('cout<<trie_search(t,k);'if mode=='search'else'trie_insert(t,k);cout<<trie_search(t,k);'if mode=='insert'else'int succ=0;trie_delete(t,k,0,succ);cout<<succ<<" "<<trie_search(t,k);')+'cout<<"\\n";}'
   meaning={'search':'输出键的完整单词出现次数，不能把仅有共同前缀当作匹配。','insert':'每次插入一份单词，输出插入后该完整单词的数量。','delete':'每次只删除一份；输出是否成功及删除后的单词数量。'}[mode]
  else:
   body='int n;cin>>n;hashTree t=NULL;while(n--){int k;cin>>k;htree_insert(t,k);}int q;cin>>q;while(q--){int k;cin>>k;cout<<'+('htree_search(t,k,0)'if mode=='search'else'htree_'+mode+'(t,k)')+'<<"\\n";}'
   meaning={'search':'查找完整整数键，存在输出1，不存在0。','insert':'只允许互异键；新插入输出1，重复键输出0。','delete':'存在时逻辑删除并输出1，不存在或已删输出0。'}[mode]
  add('s-'+family+'-'+mode,('Trie'if family=='trie'else'散列树')+' · '+{'search':'查找','insert':'插入','delete':'删除'}[mode],family,[ref(family,[0,1,2,3],[('trie_'if family=='trie'else'htree_')+mode])],'按顺序插入初始键，然后逐个操作。'+meaning+'参考使用笔记实际节点和'+('26字母分支及结束标记。'if family=='trie'else'逐层质数取模分支，不用set替换。'),'n\nn个初始键\nq\nq个操作键。','每次操作一行，格式见题面。',['0≤n,q≤100']+(['每个单词为1..30个小写英文字母']if family=='trie'else['-10000≤键≤10000']),cs,wrap(body,code(family)),difficulty='进阶')
print('SEARCH CORE SAVED',len(P))
# Parameterized map/set examples; max_size is intentionally not an output target because it is platform-dependent.
for family in ['map','set']:
 if family=='map':scenarios=[['GET a','LOWER a','UPPER a','SIZE','CLEAR','PRINT'],['INSERT nanjing 1','INSERT beijing 2','INSERT nanjing 9','PUT nanjing 7','GET nanjing','LOWER hangzhou','UPPER nanjing','PRINT','ERASE beijing','SIZE'],['PUT a -2','PUT b 5','UPPER a','LOWER z','ERASE x','CLEAR','PRINT']]
 else:scenarios=[['HAS a','LOWER a','UPPER a','SIZE','CLEAR','PRINT'],['INSERT nanjing','INSERT beijing','INSERT nanjing','HAS nanjing','LOWER hangzhou','UPPER nanjing','PRINT','ERASE beijing','SIZE'],['INSERT a','INSERT b','UPPER a','LOWER z','ERASE x','CLEAR','PRINT']]
 cs=[]
 for ops in scenarios:
  data={};out=[]
  for line in ops:
   tok=line.split();op=tok[0];key=tok[1]if len(tok)>1 else''
   if op=='INSERT':out.append(str(int(key not in data)));data.setdefault(key,int(tok[2])if family=='map'else 1)
   elif op=='PUT':data[key]=int(tok[2]);out.append(str(data[key]))
   elif op=='GET':out.append(str(data[key])if key in data else'NONE')
   elif op=='HAS':out.append(str(int(key in data)))
   elif op=='ERASE':out.append(str(int(key in data)));data.pop(key,None)
   elif op=='SIZE':out.append(str(len(data)))
   elif op=='CLEAR':data.clear();out.append('0')
   elif op=='PRINT':out.append(' '.join(k+':'+str(data[k])if family=='map'else k for k in sorted(data))or'EMPTY')
   else:
    keys=[k for k in sorted(data)if k>=key]if op=='LOWER'else[k for k in sorted(data)if k>key]
    out.append((keys[0]+':'+str(data[keys[0]])if family=='map'else keys[0])if keys else'NONE')
  cs.append(case(['空容器与边界','插入重复与有序查询','清空和删除不存在'][len(cs)],str(len(ops))+'\n'+'\n'.join(ops)+'\n','\n'.join(out)))
 if family=='map':body='''int q;cin>>q;map<string,int>a;while(q--){string op,k;int v;cin>>op;if(op=="INSERT"){cin>>k>>v;cout<<a.insert({k,v}).second;}else if(op=="PUT"){cin>>k>>v;a[k]=v;cout<<a[k];}else if(op=="GET"){cin>>k;auto it=a.find(k);if(it==a.end())cout<<"NONE";else cout<<it->second;}else if(op=="ERASE"){cin>>k;cout<<a.erase(k);}else if(op=="SIZE")cout<<a.size();else if(op=="CLEAR"){a.clear();cout<<0;}else if(op=="PRINT"){if(a.empty())cout<<"EMPTY";else for(auto x:a)cout<<x.first<<":"<<x.second<<" ";}else{cin>>k;auto it=op=="LOWER"?a.lower_bound(k):a.upper_bound(k);if(it==a.end())cout<<"NONE";else cout<<it->first<<":"<<it->second;}cout<<"\\n";}'''
 else:body='''int q;cin>>q;set<string>a;while(q--){string op,k;cin>>op;if(op=="INSERT"){cin>>k;cout<<a.insert(k).second;}else if(op=="HAS"){cin>>k;cout<<(a.find(k)!=a.end());}else if(op=="ERASE"){cin>>k;cout<<a.erase(k);}else if(op=="SIZE")cout<<a.size();else if(op=="CLEAR"){a.clear();cout<<0;}else if(op=="PRINT"){if(a.empty())cout<<"EMPTY";else for(auto x:a)cout<<x<<" ";}else{cin>>k;auto it=op=="LOWER"?a.lower_bound(k):a.upper_bound(k);if(it==a.end())cout<<"NONE";else cout<<*it;}cout<<"\\n";}'''
 desc=('INSERT k v插入且不覆盖，输出是否新键；PUT k v覆盖/新增并输出值；GET k输出值或NONE；'if family=='map'else'INSERT k输出是否新键；HAS k输出0/1；')+'ERASE k输出删掉的元素数；SIZE输出数量；CLEAR清空后输出0；LOWER/UPPER k分别找不小于/大于k的首键，输出'+('key:value'if family=='map'else'key')+'，无结果NONE；PRINT按键序输出全部'+('key:value'if family=='map'else'key')+'，空容器EMPTY。'
 add('s-stl-'+family,'STL '+family+' · 原例操作练习','stl',[ref('stl',[0 if family=='map'else 1],[family+'::insert',family+'::erase',family+'::find',family+'::lower_bound',family+'::clear'])],'容器初始为空，每行命令执行后输出一行。'+desc,'q\n接下来q行命令，格式见题面。','每条命令一行结果。',['1≤q≤100','键为1..20个小写英文字母','-10000≤value≤10000'],cs,wrap(body),note='将原map/set示例参数化；保留实际标准容器操作。max_size取决于平台和分配器，不作为跨平台固定答案判题。')
# Concept-only notes: explicitly labeled extensions, not fabricated original implementations.
BTCASES=[('1\n1 5 0 0\n3\n5 4 6\n','1 0 0'),('3\n1 4 2 3\n2 1 2 0 0 0\n2 6 8 0 0 0\n4\n1 4 8 3\n','1 1 1 0'),('1\n2 -2 7 0 0 0\n4\n-2 7 0 9\n','1 1 0 0')]
add('s-btree-search','B 树概念 · 多键节点查找','btree',[ref('btree',[],['多路节点查找（概念扩展）'])],'输入一棵已经构造好的有效B树，根编号1，0表示空孩子。每个节点的键递增，c个键对应c+1个孩子；所有数据键互异。查询完整键是否存在。此题练习多键节点的分支选择，不要求实现原笔记未提供的B树插入/删除。','节点数r\nr行：c，c个键，c+1个孩子编号\nq\nq个查询键。','按查询顺序输出0/1。',['1≤r≤30','每节点1≤c≤4','-10000≤key≤10000','1≤q≤100；输入保证是有效B树'],[case(['单节点','多路分支','负数与未找到'][i],a,b)for i,(a,b)in enumerate(BTCASES)],wrap('int r;cin>>r;vector<Page>t(r+1);for(int i=1;i<=r;i++){int c;cin>>c;t[i].key.resize(c);t[i].child.resize(c+1);for(int&k:t[i].key)cin>>k;for(int&v:t[i].child)cin>>v;}int q;cin>>q;while(q--){int k,u=1;cin>>k;bool found=false;while(u){auto &p=t[u];int i=lower_bound(p.key.begin(),p.key.end(),k)-p.key.begin();if(i<(int)p.key.size()&&p.key[i]==k){found=true;break;}u=p.child[i];}cout<<found<<" ";}','struct Page{vector<int>key,child;};'),difficulty='进阶',note='原笔记只有B树概念，没有B树实现；这里明确补充一个对已构造多路树的搜索练习。')
BPLUS=[([[1,2],[4,5],[7,9]],[(2,7),(3,3),(0,10)]),([[-2,0,0]],[(0,0),(-9,-3),(1,8)]),([[1],[3],[5]],[(4,8),(1,1),(2,4)])]
cs=[]
for leaves,qs in BPLUS:
 a=list(itertools.chain.from_iterable(leaves));cs.append(case(['跨叶范围','重复记录','边界叶定位'][len(cs)],str(len(leaves))+'\n'+''.join(str(len(v))+' '+' '.join(map(str,v))+'\n'for v in leaves)+str(len(qs))+'\n'+rows(qs)+'\n','\n'.join(' '.join(str(x)for x in a if l<=x<=r)or'EMPTY'for l,r in qs)))
add('s-bplus-range','B+ 树概念 · 叶链范围检索','btree',[ref('btree',[],['叶链范围检索（概念扩展）'])],'模拟一个两层B+树索引：输入全部叶页，叶页依编号链接，根索引保存每页最大键。先用索引定位第一个可能含有不小于l记录的叶页，再沿叶链输出闭区间[l,r]的全部记录，保留重复值。此题不包含原笔记未提供的B+树动态维护。','叶页数L\nL行：len以及该叶页的len个非递减键\nq\nq行l r。','每个查询一行，按顺序输出范围内记录；没有记录EMPTY。',['1≤L≤30','每页1..20个记录，总记录≤500','-10000≤记录,l,r≤10000，l≤r','跨页也非递减'],cs,wrap('int L;cin>>L;vector<vector<int>>leaf(L);vector<int>mx(L);for(int i=0;i<L;i++){int n;cin>>n;leaf[i].resize(n);for(int&x:leaf[i])cin>>x;mx[i]=leaf[i].back();}int q;cin>>q;while(q--){int l,r;cin>>l>>r;int p=lower_bound(mx.begin(),mx.end(),l)-mx.begin();bool any=false,done=false;for(;p<L&&!done;p++)for(int x:leaf[p]){if(x>r){done=true;break;}if(x>=l){cout<<x<<" ";any=true;}}if(!any)cout<<"EMPTY";cout<<"\\n";}'),difficulty='进阶',note='原笔记只有B+树概念；这是明确标注的两层索引与叶链模拟练习，不是完整动态B+树代码。')
# All internal sorting algorithms, preserving the original half-open subrange contract.
SORTS=[('insertion','直接插入排序','insert',0,'insert_sort'),('shell','希尔排序','insert',1,'shell_sort'),('bubble','冒泡排序','exchange',0,'bubble_sort'),('quick','随机枢轴快速排序','exchange',1,'quick_sort'),('selection','简单选择排序','select',0,'select_sort'),('heap','堆排序','select',1,'heap_sort'),('merge','归并排序','merge',0,'merge_sort'),('counting','计数排序','distribute',0,'count_sort'),('bucket','桶排序','distribute',1,'bucket_sort'),('radix','基数排序','distribute',2,'radix_sort')]
ARRCASES=[([],0,0),([5,-2,5,0,-9],0,5),([8,7,3,1,9],1,4),([4,4,4],0,3)]
for name,title,doc,b,func in SORTS:
 cs=[]
 for a,l,r in ARRCASES:
  expected=a[:];expected[l:r]=sorted(expected[l:r]);inp=f'{len(a)} {l} {r}'+(' 10'if name=='radix'else'')+'\n'+' '.join(map(str,a))+'\n';cs.append(case(['空区间','负数重复','只排序中间','全相等'][len(cs)],inp,' '.join(map(str,expected))or'EMPTY'))
 defs=code(doc,[b]);refs=[ref(doc,[b],[func])]
 if name=='heap':defs=code('ebic8kgy45ilbbyn',[0])+defs;refs.append(ref('ebic8kgy45ilbbyn',[0],['heap_adjust']))
 body='int n,l,r;cin>>n>>l>>r;'+('int base;cin>>base;'if name=='radix'else'')+'vector<int>a(n);for(int&x:a)cin>>x;'+func+'(a.data(),l,r'+(',base'if name=='radix'else'')+');if(a.empty())cout<<"EMPTY";else for(int x:a)cout<<x<<" ";'
 add('o-sort-'+name,title+' · 半开区间排序',doc,refs,'仅对数组下标[left,right)中的元素按升序排序，区间外元素保持不变。请使用本题指定的'+title+'；参考实现对应笔记原算法，OJ按最终输出判断。','n left right'+(' base'if name=='radix'else'')+'\n接下来n个整数。','输出整个数组；n=0输出EMPTY。',['0≤n≤300','0≤left≤right≤n','-10000≤元素≤10000']+(['2≤base≤16']if name=='radix'else[]),cs,wrap(body,defs),difficulty='进阶'if name in ['heap','quick','merge','radix']else'基础')
# BFPRT / median of medians, with repeated values and invalid ranks.
cs=[]
for a,l,r,k in [([],0,0,1),([9,1,5,5,3],0,5,3),([100,8,3,6,200],1,4,2),([7]*100,0,100,50),([2,1],0,2,0)]:
 ans=sorted(a[l:r])[k-1]if 1<=k<=r-l else'INVALID';cs.append(case(['空范围','重复枢轴','偏移子区间','大规模相等键','非法k'][len(cs)],f'{len(a)} {l} {r} {k}\n'+' '.join(map(str,a))+'\n',ans))
add('o-bfprt-kth','BFPRT · 线性时间选择','exchange',[ref('exchange',[0,2],['bfprt','bubble_sort'])],'求半开区间[left,right)中第k小的值，k从1开始，重复元素分别占据名次。若k不合法输出INVALID。使用5个一组的中位数枢轴，并通过三路划分处理重复键。','n left right k\nn个整数。','第k小的值或INVALID。',['0≤n≤300','0≤left≤right≤n','0≤k≤right-left+1','-10000≤元素≤10000'],cs,wrap('int n,l,r,k;cin>>n>>l>>r>>k;vector<int>a(n);for(int&x:a)cin>>x;int p=bfprt(a.data(),l,r,k);if(p<0)cout<<"INVALID";else cout<<a[p];',code('exchange',[0,2])),difficulty='进阶')
# Loser-tree k-way merge: input run lengths replace padding sentinels, while the original algorithm receives INF-filled buffers.
cs=[]
for runs in [[],[[1,4,7],[2,3,8],[0,5,9]],[[],[-3,-1],[-3,2]],[[4,4],[4]]]:
 merged=sorted(itertools.chain.from_iterable(runs));cs.append(case(['没有顺串','交错顺串','空顺串和负数','重复键'][len(cs)],str(len(runs))+'\n'+''.join(str(len(a))+' '+' '.join(map(str,a))+'\n'for a in runs),' '.join(map(str,merged))or'EMPTY'))
add('o-loser-tree-merge','败者树 · K 路归并','external',[ref('external',[0],['ini','adjust','multi_merge'])],'输入k个已升序排列的顺串，使用原败者树逐次选出最小键，输出全体归并结果。IO驱动将每个顺串未使用的定长槽填INF；INF不是有效数据。','k\n接下来k行：len以及该顺串的len个非递减整数。','升序结果；没有数据时EMPTY。',['0≤k≤8','0≤len≤10','-10000≤有效键≤10000'],cs,wrap('int k;cin>>k;int a[K][M];for(int i=0;i<K;i++)for(int j=0;j<M;j++)a[i][j]=INF;for(int i=0;i<k;i++){int n;cin>>n;for(int j=0;j<n;j++)cin>>a[i][j];}vector<int>r;multi_merge(a,k,r);if(r.empty())cout<<"EMPTY";else for(int x:r)cout<<x<<" ";',code('external',[0])),difficulty='进阶')
cs=[]
for a,c in [([],3),([7,2,6,1,5,3,4,0],3),(list(range(12,0,-1)),1),([4,4,3],7)]:
 heap=[(0,x,i)for i,x in enumerate(a[:c])];heapq.heapify(heap);nextidx=min(c,len(a));runs=[]
 while heap:
  r,x,i=heapq.heappop(heap)
  while len(runs)<=r:runs.append([])
  runs[r].append(x)
  if nextidx<len(a):y=a[nextidx];nextidx+=1;heapq.heappush(heap,(r+int(y<x),y,i))
 ans=str(len(runs))+'\n'+''.join(str(len(r))+' '+' '.join(map(str,r))+'\n'for r in runs)
 cs.append(case(['空输入','输入流冻结规则','顺串超过原8个上限','n小于内存容量'][len(cs)],f'{len(a)} {c}\n'+' '.join(map(str,a))+'\n',ans))
add('o-replacement-selection','败者树 · 置换选择生成顺串','external',[ref('external',[1,2],['ini','adjust','rss_sort'])],'用容量c的败者树从输入流生成尽可能长的升序顺串。输出当前最小键后读入下一个键；若新键小于刚输出的键，则冻结到下一顺串。比较先按顺串编号，再按键值。测试输出每个实际顺串，而不是把所有数据直接排序。','n c\nn个原始整数。','第一行顺串数量；之后每行先输出该顺串长度，再输出其中的升序键。',['0≤n≤100','1≤c≤7；n<c时只装入n个键','-10000≤元素≤10000'],cs,wrap('int n,c;cin>>n>>c;for(int i=0;i<n;i++)cin>>a[i];rss_sort(n,c);int count=0;for(int i=0;i<N;i++)if(!runs[i].empty())count++;cout<<count<<"\\n";for(int i=0;i<N;i++)if(!runs[i].empty()){cout<<runs[i].size()<<" ";for(int x:runs[i])cout<<x<<" ";cout<<"\\n";}',code('external',[1,2])),difficulty='进阶')
cs=[]
for n in [0,1,3,5,10,20]:
 import math
 perms=math.factorial(n);cs.append(case('n='+str(n),str(n)+'\n',(perms-1).bit_length()))
add('o-decision-tree-bound','比较判定树 · 排序的比较次数下界','decision',[ref('decision',[],['比较判定树（概念扩展）'])],'n个互异元素共有n!种相对排列。一次二元比较最多产生两个分支，因此任何比较排序的最坏比较次数至少为满足2^h≥n!的最小整数h。求这个理论下界；不声称每个n都存在恰好达到下界的排序算法。','一个整数n。','最小非负整数h，使2^h≥n!。',['0≤n≤20；约定0!=1'],cs,wrap('int n;cin>>n;unsigned long long f=1;for(int i=2;i<=n;i++)f*=i;unsigned long long x=f-1;int h=0;while(x){h++;x>>=1;}cout<<h;'),difficulty='进阶',note='原笔记只有判定树概念，没有原始算法代码；本题明确补充其比较排序下界应用。')
# Replace generic template with a complete stream-based IO scaffold. No algorithm answer or reference functions are included.
for p in P:
 p['template']='''#include <iostream>
#include <sstream>
#include <string>
#include <iterator>
#include <vector>
#include <algorithm>
using namespace std;

// 输入：'''+p['input'].replace('\n','；')+'''
// 输出：'''+p['output'].replace('\n','；')+'''
void solve(istream& in, ostream& out) {
    // TODO: 按题面读取输入，独立实现本题算法。
    // 示例读取格式：int n; in >> n;（请按本题实际格式修改）
    // 完成后用 out << ... 输出结果。
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    solve(cin, cout);
    return 0;
}
'''
save()
# Exactly one coverage record for each of the 88 source code blocks in these three books.
SUPPORT={('matrix',0):'邻接矩阵类型与容量定义；由构建/邻点题复用。',('edge',0):'链式边表节点和图类型；由链式构建题复用。',('edge',2):'vector边表类型和edge构造；由vector构建题复用。',('edge',4):'静态前向星节点、头数组和计数器；由构建题复用。',('linear',3):'分块索引类型；由分块查找题复用。',('linear',7):'跳表编译期层数与节点类型；由跳表各题复用。',('bst',0):'BST节点类型；由BST查找/插入/删除题复用。',('bst',4):'AVL节点类型和高度辅助函数；由AVL旋转/插删题复用。',('splay',0):'伸展树节点类型；由伸展/查找/插删题复用。',('splay',1):'伸展树单旋辅助；由伸展和各公开操作题复用。',('rb',0):'红黑颜色与节点类型；由红黑插删题复用。',('rb',2):'维护父指针的旋转辅助；由红黑插删调整过程复用。',('tt',0):'2-3树节点类型；由查找/插删题复用。',('tt',2):'在多键节点内移动并加入键的辅助；由2-3树插入题复用。',('tt',3):'满节点分裂辅助；由2-3树插入题复用。',('tt',5):'删除首键及下溢修复辅助；由2-3树删除题复用。',('trie',0):'Trie分支数、节点与计数类型；由Trie各操作题复用。',('hash',0):'逐层质数表和散列树节点；由散列树各题复用。',('external',1):'置换选择的叶数组、顺串和比较节点定义；由置换选择题复用。'}
coverage=[]
for key,docid in D.items():
 d=NOTES[docid]
 for i,c in enumerate(d['codes']):
  ids=[p['id']for p in P for r in p['sourceRefs']if r['docId']==docid and i in r['blocks']]
  ids=list(dict.fromkeys(ids));assert ids,(d['title'],i)
  support=(key,i)in SUPPORT
  coverage.append({'docId':docid,'block':i,'kind':'support'if support else'problem','problemIds':ids,'reason':SUPPORT.get((key,i),'此块含可执行主算法/操作，关联题提供完整题面、参考程序与测试。')})
assert len(coverage)==88,len(coverage)
(ROOT/'content/oj-coverage-graph-search-sort.json').write_text(json.dumps(coverage,ensure_ascii=False,indent=2))
print('FINAL BANK',len(P),'problems',sum(len(p['cases'])for p in P),'cases; COVERAGE',len(coverage),'blocks')
