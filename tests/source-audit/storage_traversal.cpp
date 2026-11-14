#include <iostream>
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
#include <cassert>
#include <random>
#include <climits>
#include <functional>
using namespace std;
using keytype=int; using datatype=int;
const int N=1024, vNum=128,eNum=5000, INF=1000000000;
struct edge{int v,w;edge(int v1,int w1):v(v1),w(w1){}};
#include <sstream>
namespace ll{
struct vertex{	//一个链接表
    int u; //邻接点的编号
    int w;
    vertex *next;
vertex(int u1=0,int w1=0):u(u1),w(w1),next(NULL){} //初始化直接传参
};
typedef struct llNode{
datatype data[vNum]; //顶点数据
vertex *edges[vNum]; //edges[i]指的是第i个顶点指向那些数据，是指向一条链表的头指针
int v,e;
llNode():v(0),e(0){
    for(int i=0;i<vNum;i++)
        edges[i]=NULL;
}
}*linkList;
//在图g添加一条边(u,v)，权重为w
void add_edge(linkList &g,int u,int v,int w)
{
    vertex * temp = new vertex(v,w);
    if(g->edges[u]==NULL) g->edges[u]=new vertex; //如果是空的，需要先创建边链表
    temp->next = g->edges[u]->next;
    g->edges[u]->next=temp;
}
//根据输入的数据，创建图g
void create(linkList &g){
    int u,v,w;
    g = new llNode;
    cin>>g->v>>g->e;	//输入顶点数和边数
    for(int i=0;i<g->e;i++){
        cin>>u>>v>>w; //无权图的w输入1
        add_edge(g,u,v,w);
        add_edge(g,v,u,w);	 //有向图不需要反向添加
    }
}}
namespace ve{
struct edge{
int v;
int w;
edge(int v1,int w1):v(v1),w(w1){}
};
typedef struct vgNode{
vector<edge> edges[vNum];	//边表
datatype data[vNum];
int v,e;
}vecGraph;
void create(vecGraph &g){
    int i,u,v,w;
    cin>>g.v>>g.e;
    for(i=0;i<vNum;i++) g.edges[i].clear();
    for(i=0;i<g.e;i++){
        cin>>u>>v>>w;
        g.edges[u].push_back(edge(v,w)); //将边(u,v)加入图
        g.edges[v].push_back(edge(u,w)); //将边(v,u)加入图（有向图不需要）
    }
}}
namespace sf{
struct node{
int to;		//邻接点
int w;
int next;	//下一个顶点
node():next(-1){}
} edges[eNum<<1];	//边表大小为2*eNum
int header[vNum],	//每一个顶点第一个邻接点的编号，初始值为-1
v,e,	
cnt=0;	//计数器，表示edges中没有被占用的最小下标
void add(int u,int v,int w){ //添加一条边
edges[cnt].to=v;	//将边的信息加入edges
edges[cnt].w=w;		
edges[cnt].next=header[u];	//记录顶点上一条边的位置
header[u]=cnt++; ////让新边成为顶点u的第一条边,然后cnt加1
}
//更新全局变量
void create(){
    int i,x,y,w;
    cin>>v>>e;
    cnt=0;
    for(i=0;i<=v;i++){
        header[i]=-1;
    }
    for(i=0;i<e;i++){
        cin>>x>>y>>w;
        add(x,y,w);
        add(y,x,w);
    }
}
//输出每个顶点的邻接点和相应边的权重
void traverse(){
    for(int i=1;i<=v;i++){
        cout<<i<<':';
        for(int j=header[i];j!=-1;j=edges[j].next){
            cout<<edges[j].to<<' '<<edges[j].w<<',';
        }
    }
}}
namespace am{
struct adjMatrix{
        datatype data[vNum];
int edge[vNum][vNum];
int v; //vertex
int e; //edge
};
void create(adjMatrix &g){
    int u,v,w;//w指的是边的权值，u为边的起点，v为边的终点
    cin>>g.v>>g.e;
    for(int i=0;i<g.v;i++){
        for(int j=0;j<g.v;j++){
            g.edge[i][j]=INF; //初始化矩阵
        }
    }
    for(int i=0;i<g.e;i++){
        cin>>u>>v>>w;
        g.edge[u][v]=w; //因为这是无向图,u和v之间的边没有方向,所以矩阵中两个位置都要赋值
        g.edge[v][u]=w;
    }
}
//输出无权图g中第u个顶点的所有邻接点
void adjVertex(adjMatrix g,int u){
    for(int i=0;i<g.v;i++){
        if(g.edge[u][i]!=INF)
            cout<<i<<' ';
}
}}
namespace dd{
bool vis[vNum];	//标记每一个顶点的颜色
int dfn[vNum],cnt=0; //dfn存放DFS序列，cnt为序列编号
//对图g的顶点cur所在连通分量做深度优先搜索
void dfs(vector<int>g[vNum],int cur){
    int i,u;
    dfn[++cnt] = cur; //第几个访问的是cur
    vis[cur]=true;	//当前顶点为黑色
    for(i=0;i<g[cur].size();i++){
        u=g[cur][i];  //顶点cur的第i个连接点
      if(!vis[u]) dfs(g,u); //如果u是白色，就找u的邻接点
    }
}
//对图g深度优先搜索
void dfs_traverse(vector<int>g[vNum],int v){
    int i;
    cnt=0;
    memset(vis,0,sizeof(vis));	//每个顶点都是白色
    for(i=1;i<=v;i++){
        if(!vis[i]) dfs(g,i);//如果i是白色，就找i的邻接点
    }
}}
namespace bb{
bool vis[vNum];		//标记顶点的颜色
int bfn[vNum];
int bfn_cnt=0;		//广度优先序列
//对图g中cur所在连通分量进行广度优先搜索，出发点为cur
void bfs(vector<int> g[vNum],int cur){
    int i,u,v;
    queue<int> q;
    bfn[++bfn_cnt]=cur,vis[cur]=true;	 //bfn[1]就是cur，访问后涂黑
    q.push(cur);	//入队
    while(!q.empty()){	
        u=q.front(),q.pop();	//取出队头
        for(i=0;i<g[u].size();i++){	//检查每一个邻接点
            v=g[u][i];
            if(!vis[v]){ //白色
                bfn[++bfn_cnt]=v;
                vis[v]=true;
                q.push(v);
            }
        }
    }
}
//对g进行广度优先搜索，v为顶点数量
void bfs_traverse(vector<int> g[vNum],int v){
    bfn_cnt=0;
    memset(vis,0,sizeof(vis)); //每个顶点都是白色
    for(int i=1;i<=v;i++){
        if(!vis[i])
            bfs(g,i);
    }
}}
namespace mz{
#define N 100
#define M 100
bool maze[N][M],vis[N][M];//定义了两个布尔数组来判断访问情况和墙壁情况
int n,m,dir[4][2]={{1,0},{-1,0},{0,1},{0,-1}};//用来表示上下左右移动
bool can(int x,int y){//房间(x,y)在迷宫内部，能进入，没被访问过
    return x>=0 && x<n && y>=0 && y<m && !maze[x][y] && !vis[x][y];
}
void dfs(int x,int y,int &ret){
    int i,dx,dy;
    if(ret) return;
    if(x==n-1 && y==m-1){ ret=1; return; }
    vis[x][y]=true; //标记当前房间
    for(i=0;i<4;i++){ //查看四个相邻的房间
        dx=x+dir[i][0],dy=y+dir[i][1]; //第一列是x的，第二列是y的
        if(can(dx,dy)){
        if(dx==n-1 && dy==m-1){ //因为我们要找的是最右下角的房子，所以是x[n-1]y[n-1]
            ret=1; //表示成功找到通路
            return;
        }
        dfs(dx,dy,ret);//如果不是终点就继续找
        }
    }
}
int main(){
    cin>>n>>m;
    if(n<=0 || n>N || m<=0 || m>M){ cout<<0<<endl; return 0; }
    for(int i=0;i<n;i++)
        for(int j=0;j<m;j++)
            cin>>maze[i][j];
    memset(vis,0,sizeof(vis));
    int ret=0;
    if(n>0 && n<=N && m>0 && m<=M && can(0,0)) dfs(0,0,ret);
    cout<<ret<<endl;
    return 0;
}}

int main(){
 auto oldin=cin.rdbuf();auto oldout=cout.rdbuf();ostringstream sink;cout.rdbuf(sink.rdbuf());
 {istringstream in("3 2 1 2 5 2 3 7");cin.rdbuf(in.rdbuf());ll::linkList g;ll::create(g);assert(g->edges[1]->next->u==2);assert(g->edges[2]->next->u==3);for(auto p:g->edges){while(p){auto q=p->next;delete p;p=q;}}delete g;}
 {istringstream in("3 2 1 2 5 2 3 7");cin.rdbuf(in.rdbuf());ve::vecGraph g;ve::create(g);assert(g.edges[1].size()==1&&g.edges[2].size()==2&&g.edges[2][0].w==5);istringstream in2("3 1 1 3 2");cin.rdbuf(in2.rdbuf());ve::create(g);assert(g.edges[2].empty()&&g.edges[1][0].v==3);}
 {istringstream in("3 2 1 2 5 2 3 7");cin.rdbuf(in.rdbuf());sf::create();assert(sf::cnt==4);sf::traverse();istringstream in2("3 0");cin.rdbuf(in2.rdbuf());sf::create();assert(sf::cnt==0);}
 {istringstream in("3 2 0 1 5 1 2 7");cin.rdbuf(in.rdbuf());am::adjMatrix g;am::create(g);assert(g.edge[0][1]==5&&g.edge[1][0]==5&&g.edge[1][2]==7);sink.str("");am::adjVertex(g,1);assert(sink.str()=="0 2 ");}
 vector<int>g[vNum];g[1]={2};g[2]={1};g[3]={4};g[4]={3};dd::dfs_traverse(g,4);assert(dd::cnt==4);dd::dfs_traverse(g,4);assert(dd::cnt==4);bb::bfs_traverse(g,4);assert(bb::bfn_cnt==4);set<int>s;for(int i=1;i<=4;i++)s.insert(bb::bfn[i]);assert(s.size()==4);
 for(auto input:{"1 1 0","1 1 1","2 2 1 0 0 0","2 2 0 1 1 0","2 2 0 0 1 0"}){istringstream in(input);cin.rdbuf(in.rdbuf());sink.str("");mz::main();string v(input);bool want=(v=="1 1 0"||v=="2 2 0 0 1 0");assert(sink.str()==(want?"1\n":"0\n"));}
 cin.rdbuf(oldin);cout.rdbuf(oldout);cout<<"graph storage, repeated creation, disconnected DFS/BFS sequences and 5 maze edge cases passed\n";
}
