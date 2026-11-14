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

namespace dg{
//对有向无环图g进行拓扑排序,结果放在tsort中,n为顶点数量。如果图g存在环路,返回0;否则返回1
int topological_sort(vector<int>g[vNum],int n,int tsort[vNum]){
    int ind[vNum]={0},i,j,u,cnt=0;
    for(i=1;i<=n;i++) //统计每个顶点的入度
        for(j=0;j<g[i].size();j++)
            ind[g[i][j]]++; //边(i,g[i][j])终点的入度加1
    queue<int>q;
    for(i=1;i<=n;i++) //将入度为0的顶点加入队列q
        if(ind[i]==0) q.push(i);
    while(!q.empty()){
        u=q.front(),q.pop();
        tsort[cnt++]=u; //从队头取出一个元素,并加入拓扑序列
        for(j=0;j<g[u].size();j++){ //将u的邻接点的入度减1
            ind[g[u][j]]--;
            if(ind[g[u][j]]==0) q.push(g[u][j]);
        }
    }
    return cnt==n; //所有顶点都加入拓扑序列,则返回1;否则返回0
}
//求AOE网g的关键路径,n为事件数,g存在环路,返回0;否则返回源点的下标,关键活动保存在cp中
int critical_path(vector<edge>g[vNum],int n,vector<edge>cp[vNum]){
    int i,j,u,v,w,tsort[vNum],ve[vNum]={0},vl[vNum],ae,al;
    if(n<=0) return 0;
    vector<int> unweighted[vNum];
    for(i=1;i<=n;i++){
        cp[i].clear();
        for(j=0;j<g[i].size();j++) unweighted[i].push_back(g[i][j].v);
    }
    if(!topological_sort(unweighted,n,tsort)){ //如果g存在环路,不能计算事件的拓扑序
        cout<<"图g存在环路!"<<endl;
        return 0;
    }
    ve[tsort[0]]=0; //源点的最早发生时间为0
    for(i=0;i<n-1;i++){ //按照事件的拓扑序列依次求每个事件u的所有邻接事件v的
                         //ve值
        u=tsort[i];
        for(j=0;j<g[u].size();j++){
            v=g[u][j].v,w=g[u][j].w;
            ve[v]=max(ve[v],ve[u]+w);
        }
    }
    int duration=0;
    for(i=1;i<=n;i++) duration=max(duration,ve[i]);
    for(i=1;i<=n;i++) //多个汇点时取最大最早完成时间为总工期
        vl[i]=duration;
    for(i=n-2;i>=0;i--){ //按照事件的逆拓扑序依次求每个事件的所有前期事件u的
                          //vl值
        u=tsort[i];
        for(j=0;j<g[u].size();j++){
            v=g[u][j].v,w=g[u][j].w;
            vl[u]=min(vl[u],vl[v]-w);
        }
    }
    for(i=1;i<=n;i++){ //计算每一个活动(i,v)的最早发生时间和最迟发生时间
        for(j=0;j<g[i].size();j++){
            v=g[i][j].v;
            ae=ve[i],al=vl[v]-g[i][j].w;
            if(ae==al) //当活动的最早发生时间等于最迟发生时间时,加入关键路径
                cp[i].push_back(edge(v,g[i][j].w));
        }
    }
    return tsort[0];
}}
namespace pr{
struct node{
    int u,v,w;
    node(int u1=0,int v1=0,int w1=0):u(u1),v(v1),w(w1){} //w表示边(u,v)的权重,u在U中,v在V-U中
    bool operator<(node n1) const{
        return w>n1.w; //为了定义小顶堆
    }
};

bool vis[vNum]; //vis[u]=true,u在集合U中;否则u不在集合U中

//求图g的最小生成树,结果保存在参数t中,n为顶点数
void prim(vector<edge>g[vNum],int n,vector<int>t[vNum]){
    memset(vis,0,sizeof(vis));
    for(int i=0;i<vNum;i++) t[i].clear();
    if(n<=0) return;
    priority_queue<node>pq; //优先队列,小顶堆
    int i,step=n-1,u,v;
    for(i=0;i<g[1].size();i++){ //将第1个顶点加入U,并更新其邻接点到U的距离
        edge tmp=g[1][i];
        pq.push(node(1,tmp.v,tmp.w));
    }
    vis[1]=1;
    while(step>0 && !pq.empty()){ //每次成功加入一个新顶点
        node tmp=pq.top();
        pq.pop(),v=tmp.v;
        if(vis[v]) continue; //失效边直接丢弃
        --step;
        u=tmp.u,vis[tmp.v]=1; //将v加入U
        t[v].push_back(u),t[u].push_back(v); //将边(u,v)加入树T中
        for(i=0;i<g[v].size();i++){ //更新v的属于V-U的邻接点到U的距离
            edge tmp=g[v][i];
            if(!vis[tmp.v])
                pq.push(node(v,tmp.v,tmp.w));
        }
    }
}}
namespace kr{
struct node{
    int u,v,w;
    node(int u1=0,int v1=0,int w1=0):u(u1),v(v1),w(w1){}
    bool operator<(node n1) const{
        return w<n1.w;
    }
}edges[eNum];

//求图g的最小生成树,结果保存在参数t中,n为顶点数
void kruskal(vector<edge>g[vNum],int n,vector<int>t[vNum]){
    int i,j,cnt=0,num=0;
    int pa[vNum];
    for(i=0;i<vNum;i++){ pa[i]=i; t[i].clear(); }
    auto query=[&](int x){
        int r=x;
        while(pa[r]!=r) r=pa[r];
        while(pa[x]!=x){ int y=pa[x]; pa[x]=r; x=y; }
        return r;
    };
    auto merge=[&](int u,int v){ pa[query(u)]=query(v); };
    //将图g的所有边转存到数组edges中,边的数量为cnt
    for(i=1;i<=n;i++){
        for(j=0;j<g[i].size();j++){
            edge tmp=g[i][j];
            if(i<tmp.v) //同一条边在g中出现两次,只取其中一条
                edges[cnt++]=node(i,tmp.v,tmp.w);
        }
    }
    sort(edges,edges+cnt); //对edges按w进行从小到大排序
    for(i=0;i<cnt;i++){
        int u=edges[i].u,v=edges[i].v;
        if(query(u)!=query(v)){ //u,v属于不同的子树
            merge(u,v); //合并u和v所在的子树
            t[u].push_back(v),t[v].push_back(u); //将边(u,v)加入MST中
            if(++num==n-1) //如果MST中已有n-1条边,结束
                break;
        }
    }
}}
namespace sh{
struct node{
    int u; //源点经过U中的顶点到达v的最短路径的离v最近的顶点
    int v; //V-U中的顶点
    int d; //源点经过U中的顶点到达v的最短距离
    node(int u1,int v1,int d1):u(u1),v(v1),d(d1){}
    bool operator<(node n1)const{ //为了定义小顶堆
        return d>n1.d;
    }
};

//求图g的单源最短距离和路径,n为顶点数,st为源点,d[i]为源点到顶点i的最短距离
void Dijkstra(vector<edge>g[vNum],int n,int st,int d[vNum],int p[vNum]){
    int i,j,cnt=1,v,vis[vNum]={0}; //vis[k]的值为0或1,分别表示顶点k未加入U或已加入U
    priority_queue<node>pq;
    for(i=1;i<=n;i++) d[i]=INF,p[i]=0;
    d[st]=0;
    vis[st]=1,p[st]=st; //将源点加入U,源点的p值为它本身
    for(i=0;i<g[st].size();i++) //将源点的邻接点加入pq
        pq.push(node(st,g[st][i].v,g[st][i].w));
    while(!pq.empty()){
        node tmp=pq.top();
        pq.pop(),v=tmp.v;
        if(!vis[v]){ //判断v是否不在U中
            d[v]=tmp.d,p[v]=tmp.u; //得到源点到v的最短距离和最短路径中离v最近的顶点
            vis[v]=1,cnt++; //将v加入U中,U中顶点数加1
            if(cnt==n) return; //所有顶点都加入U,结束
            for(i=0;i<g[v].size();i++){ //对v及所有不在U中的邻接点所对应的边进行松弛操作
                if(!vis[g[v][i].v])
                    pq.push(node(v,g[v][i].v,tmp.d+g[v][i].w));
            }
        }
    }
}
//输出顶点v的最短路径
void getPath(int p[vNum],int v){
    if(v<=0 || v>=vNum || p[v]==0) return;
    if(p[v]==v){
        cout<<v<<' ';
        return;
    }
    getPath(p,p[v]);
    cout<<v<<' ';
}
//利用spfa算法求g的单源最短路径,源点为st,顶点数为n。如果g有负权环,返回值为0;否则返回值为1
int spfa(vector<edge>g[vNum],int n,int st,int d[vNum],int p[vNum]){
    int i,u,v,vis[vNum]={0},num[vNum]={0};
    for(i=1;i<=n;i++)
        d[i]=INF,p[i]=0; //初始化d和p
    d[st]=0,p[st]=st; //初始化源点的距离
    queue<int>q;
    q.push(st); vis[st]=1;
    while(!q.empty()){
        u=q.front(),q.pop(); //取队头元素
        vis[u]=0; //标识顶点u已不在队列中
        for(i=0;i<g[u].size();i++){
            v=g[u][i].v;
            if(d[v]>d[u]+g[u][i].w){
                d[v]=d[u]+g[u][i].w; //松弛操作
                p[v]=u;
                num[v]=num[u]+1; //当前改进路径的边数
                if(num[v]>=n) return 0; //只检测源点可达的负环
                if(!vis[v])
                    q.push(v),vis[v]=1; //v入队
            }
        }
    }
    return 1;
}
//求带权图g的每一对顶点之间的最短距离和最短路径,n为顶点数
void Floyd(vector<edge>g[vNum],int n,int d[vNum][vNum],int p[vNum][vNum]){
    int i,j,k;
    for(i=1;i<=n;i++) //初始化d和p
        for(j=1;j<=n;j++){
            d[i][j]=(i==j)?0:INF;
            p[i][j]=(i==j)?i:-1;
        }
    for(i=1;i<=n;i++) //对有边相连的两个顶点重新初始化d和p
        for(j=0;j<g[i].size();j++){
            int v=g[i][j].v;
            if(g[i][j].w<d[i][v]){
                d[i][v]=g[i][j].w;
                p[i][v]=i;
            }
        }
    for(k=1;k<=n;k++) //依次将顶点k加入集合U
        for(i=1;i<=n;i++)
            for(j=1;j<=n;j++){
                if(p[i][k]!=-1 && p[k][j]!=-1 && d[i][j]>d[i][k]+d[k][j]){
                    d[i][j]=d[i][k]+d[k][j]; //松弛操作
                    p[i][j]=k;
                }
            }
}

//输出顶点u到v的最短路径(顶点v除外)
void getPath(int p[vNum][vNum],int u,int v){
    if(p[u][v]==-1 || u==v) return; //u到v不存在路径
    if(p[u][v]==u){ //p[u][v]为叶结点,u到v的最短路径为
                      //边(u,v)
        cout<<u<<' ';
        return;
    }
    getPath(p,u,p[u][v]);
    getPath(p,p[u][v],v);
}

void transitive_closure(vector<int>g[vNum],int n,int ts[vNum][vNum]){
    int i,j,k;
    for(i=1;i<=n;i++)
        for(j=1;j<=n;j++)
            ts[i][j]=0;
    for(i=1;i<=n;i++)
        for(j=0;j<g[i].size();j++)
            ts[i][g[i][j]]=1;
    for(k=1;k<=n;k++)
        for(i=1;i<=n;i++)
            for(j=1;j<=n;j++)
                if(ts[i][k]&&ts[k][j])
                    ts[i][j]=1;
}
}
namespace bg{bool vis[vNum];
//求顶点cur到其他顶点的最短路径长
void bfs(vector<int>g[vNum],int cur,int dis[vNum]){
    int i,u,v;
    memset(vis,0,sizeof(vis));
    fill(dis,dis+vNum,-1);
    dis[cur]=0;
    queue<int>q;
    vis[cur]=true;
    q.push(cur);
    while(!q.empty()){
        u=q.front(),q.pop();
        for(i=0;i<g[u].size();i++){
            v=g[u][i];
            if(!vis[v]){
                dis[v]=dis[u]+1;	
                vis[v]=true,q.push(v);
            }
        }
    }
}
}
namespace ko{
int leave[vNum],belong[vNum],cnt=0,bcnt=0;
bool vis[vNum];
// 对原图g进行DFS，得到顶点处理完毕的序列
void dfs(vector<int> g[vNum],int cur){
    vis[cur]=true;
    for(int i=0;i<g[cur].size();i++)
        if(!vis[g[cur][i]]) dfs(g,g[cur][i]);
    leave[++cnt]=cur;//leave是第一次DFS的完成排序
}

// 对反图gt进行DFS，记录强连通分量
void dfst(vector<int> gt[vNum],int cur){
    vis[cur]=true;
    belong[cur]=cnt;	//当前顶点的强连通分量编号设置为cnt
    for(int i=0;i<gt[cur].size();i++)
        if(!vis[gt[cur][i]]) dfst(gt,gt[cur][i]);
}

// Kosaraju算法求图g的强连通分量
int Kosaraju(vector<int> g[vNum],vector<int> gt[vNum],int v){
    int i;
    memset(vis,0,sizeof(vis));
    cnt=0;
    for(i=1;i<=v;i++)	//对原图DFS
        if(!vis[i]) dfs(g,i);

    memset(vis,0,sizeof(vis));
    cnt=0;
    for(i=v;i>=1;i--){	//对反图进行DFS，从leave的最后一个元素所表示的顶点开始
        if(!vis[leave[i]]){
            cnt++;
            dfst(gt,leave[i]);
        }
    }
    for(i=1;i<=v;i++) //全部分量处理完成后再输出
        cout<<i<<' '<<belong[i]<<endl;
    return cnt;
}}
namespace ta{
int dfn[vNum]={0},low[vNum],belong[vNum],cnt=0,bcnt=0;
bool instk[vNum];
stack<int> stk;
//从u出发进行dfs
void dfs(vector<int> g[vNum],int u){
    int i,v;
    dfn[u]=low[u]=++cnt;		//low和dfs初始化相同
    stk.push(u),instk[u]=true;
    for(i=0;i<g[u].size();i++){
        v=g[u][i];
        if(!dfn[v]){
            dfs(g,v);
            low[u]=min(low[u],low[v]);	//(u,v)是树边
        }
        else if(instk[v])
            low[u]=min(low[u],dfn[v]); //(u,v)是前向边或反向边
    }
    if(dfn[u]==low[u]){ //u是强连通分量的根结点
        ++bcnt;
        do{
            i=stk.top(),stk.pop();
            belong[i]=bcnt,instk[i]=false;
        }while(i!=u);
    }
}
//求所有强连通分量
void Tarjan(vector<int> g[vNum],int v){
    memset(dfn,0,sizeof(dfn));
    memset(instk,0,sizeof(instk));
    cnt=bcnt=0;
    while(!stk.empty()) stk.pop();
    for(int i=1;i<=v;i++)
        if(!dfn[i]) dfs(g,i);
}}
namespace cu{
int dfn[vNum],low[vNum],cnt=1,pbc_cnt=0;
set<int>cut; //存放割点
set<int>pbc[vNum];	//pbc[i]存放第i个点双连接分量的顶点
stack<pair<int,int>>stk;
//求无向图g中u所在连接分量中割点和点双连接分量，fa为u的父结点
void tarjan(vector<int>g[vNum],int u,int fa){
    int i,v,u1,v1,child=0;
    bool skipped_fa=false;
    dfn[u]=low[u]=cnt++;
    for(i=0;i<g[u].size();i++){
        v=g[u][i];
        if(v==fa && !skipped_fa){ skipped_fa=true; continue; }		//忽略从u到其父结点的边
        if(!dfn[v]){			//(u,v)为树边
            ++child;
            stk.push(make_pair(u,v));
            tarjan(g,v,u);
            low[u]=min(low[u],low[v]);
            if(low[v]>=dfn[u]){
                if(fa!=-1)	//当u为根结点时，单独判断
                    cut.insert(u);	//u为割点
                pbc[++pbc_cnt].clear();
                do{			//将栈(u,v)上的边的两个端点加到第pbc_cnt个点连通量中
                    u1=stk.top().first;
                    v1=stk.top().second;
                    stk.pop();
                    pbc[pbc_cnt].insert(u1);
                    pbc[pbc_cnt].insert(v1);
                }while(!stk.empty()&&(u1!=u||v1!=v));
            }
        }
        else if(dfn[v]<dfn[u]){
            stk.push(make_pair(u,v));
            low[u]=min(low[u],dfn[v]);
        }
    }
    if(fa==-1 && child==0){ pbc[++pbc_cnt].clear(); pbc[pbc_cnt].insert(u); }
    if(fa==-1&&child>1) cut.insert(u);		//当u为根结点且有多余一个孩子结点时，u为割点
}
//求无向图g的割点和点双连通分量，v为顶点数
void cut_pbc(vector<int>g[vNum],int v){
    memset(dfn,0,sizeof(dfn));
    cnt=1; pbc_cnt=0; cut.clear();
    while(!stk.empty()) stk.pop();
    for(int i=1;i<=v;i++){
        if(!dfn[i]) tarjan(g,i,-1);
    }
}
}
namespace br{

int dfn[vNum],low[vNum],cnt=1,ebc_cnt=-1;
map<pair<int,int>,bool>isBridge;	//当(u,v)为桥时，isBridge[(u,v)]=true
vector<int>ebc[vNum]; //ebc[i]为第i个边双连通分量中的顶点
//求图g中u所在的连通分量中的桥，fa为u的父结点
void tarjan(vector<int>g[vNum],int u,int fa){
    int i,v;
    bool skipped_fa=false;
    dfn[u]=low[u]=cnt++;
    for(i=0;i<g[u].size();i++){
        v=g[u][i];
        if(v==fa && !skipped_fa){ skipped_fa=true; continue; }	//忽略从u到其父结点的边
        if(!dfn[v]){
            tarjan(g,v,u);
            low[u]=min(low[u],low[v]);
            if(low[v]>dfn[u]){
                isBridge[make_pair(u,v)]=true;	//(u,v)为桥
            }
        }
        else if(dfn[v]<dfn[u]){
            low[u]=min(low[u],dfn[v]);
        }
    }
}
//求图g中顶点cur所在连通分量中的边双连通分量，当前编号是ebc_cnt
void dfs(vector<int>g[vNum],int cur){
    dfn[cur]=1;
    ebc[ebc_cnt].push_back(cur);	//cur加入当前边双连通分量
    for(int i=0;i<g[cur].size();i++){
        int u=g[cur][i];
        //如果边(cur,u)为桥，则跳过u
        if(!dfn[u]&&!isBridge[make_pair(cur,u)]&&!isBridge[make_pair(u,cur)]){
            dfs(g,u);
        }
    }
}
//去g所有的桥和边连通分量
void bridge_ebc(vector<int>g[vNum],int v){
    memset(dfn,0,sizeof(dfn));
    cnt=1; ebc_cnt=-1; isBridge.clear();
    for(int i=0;i<vNum;i++) ebc[i].clear();
    for(int i=1;i<=v;i++){
        if(!dfn[i]) tarjan(g,i,-1);
    }
    memset(dfn,0,sizeof(dfn));
    for(int i=1;i<=v;i++){
        if(!dfn[i]){
            ++ebc_cnt;
            dfs(g,i);
        }
    }
}
}

int weight(vector<int>t[],vector<edge>g[],int n){int s=0,c=0;for(int i=1;i<=n;i++)for(int j:t[i])if(i<j){int w=INF;for(auto e:g[i])if(e.v==j)w=min(w,e.w);assert(w<INF);s+=w;c++;}assert(c==n-1);return s;}
int components(int n,vector<pair<int,int>>&es,int skipv=-1,int skipe=-1){vector<int>g[vNum];for(int i=0;i<(int)es.size();i++)if(i!=skipe){auto [u,v]=es[i];if(u==skipv||v==skipv)continue;g[u].push_back(v);g[v].push_back(u);}bool vis[vNum]={};int cnt=0;function<void(int)>dfs=[&](int u){vis[u]=1;for(int v:g[u])if(!vis[v])dfs(v);};for(int i=1;i<=n;i++)if(i!=skipv&&!vis[i]){cnt++;dfs(i);}return cnt;}
int main(){mt19937 rng(51722);ostringstream sink;auto old=cout.rdbuf(sink.rdbuf());
 for(int rep=0;rep<600;rep++){
 int n=rng()%18+1;vector<edge>g[vNum];for(int i=1;i<n;i++){int w=(int)(rng()%31)-10;g[i].push_back(edge(i+1,w));g[i+1].push_back(edge(i,w));}
 for(int i=1;i<=n;i++)for(int j=i+2;j<=n;j++)if(rng()%4==0){int w=(int)(rng()%31)-10;g[i].push_back(edge(j,w));g[j].push_back(edge(i,w));}
 vector<int>a[vNum],b[vNum];pr::prim(g,n,a);kr::kruskal(g,n,b);assert(weight(a,g,n)==weight(b,g,n));
 }
 {vector<edge>g[vNum];g[1].push_back(edge(2,3));g[2].push_back(edge(1,3));vector<int>t[vNum];pr::prim(g,3,t);assert(t[1].size()==1&&t[3].empty());}
 for(int rep=0;rep<450;rep++){
 int n=rng()%14+2;vector<edge>g[vNum];vector<int>ug[vNum];for(int i=1;i<=n;i++)for(int j=1;j<=n;j++)if(i!=j&&rng()%5==0){int w=rng()%25;g[i].push_back(edge(j,w));ug[i].push_back(j);if(rng()%3==0)g[i].push_back(edge(j,w+5));}
 int all[vNum][vNum],pall[vNum][vNum];sh::Floyd(g,n,all,pall);
 for(int st=1;st<=n;st++){int d[vNum],p[vNum],s[vNum],ps[vNum],dist[vNum];sh::Dijkstra(g,n,st,d,p);assert(sh::spfa(g,n,st,s,ps)==1);bg::bfs(ug,st,dist);for(int i=1;i<=n;i++){assert(d[i]==all[st][i]);assert(s[i]==all[st][i]);assert((d[i]==INF)==(dist[i]==-1));}}
 vector<int>gt[vNum];for(int i=1;i<=n;i++)for(int j:ug[i])gt[j].push_back(i);
 ko::Kosaraju(ug,gt,n);ta::Tarjan(ug,n);int reach[vNum][vNum];sh::transitive_closure(ug,n,reach);
 for(int i=1;i<=n;i++)for(int j=1;j<=n;j++){bool same=i==j||(reach[i][j]&&reach[j][i]);assert((ko::belong[i]==ko::belong[j])==same);assert((ta::belong[i]==ta::belong[j])==same);}
 }
 for(int rep=0;rep<250;rep++){int n=rng()%14+2;vector<edge>g[vNum];for(int i=1;i<n;i++)for(int j=i+1;j<=n;j++)if(rng()%3==0)g[i].push_back(edge(j,(int)(rng()%31)-15));int all[vNum][vNum],pall[vNum][vNum];sh::Floyd(g,n,all,pall);for(int st=1;st<=n;st++){int d[vNum],p[vNum];assert(sh::spfa(g,n,st,d,p));for(int j=1;j<=n;j++)assert(d[j]==all[st][j]);}}
 {vector<edge>g[vNum];g[1].push_back(edge(2,1));g[2].push_back(edge(3,-3));g[3].push_back(edge(2,1));int d[vNum],p[vNum];assert(sh::spfa(g,4,1,d,p)==0);assert(sh::spfa(g,4,4,d,p)==1);}
 {vector<edge>g[vNum],cp[vNum];g[1].push_back(edge(2,10));g[1].push_back(edge(3,1));g[3].push_back(edge(4,1));assert(dg::critical_path(g,4,cp));assert(cp[1].size()==1&&cp[1][0].v==2);g[4].push_back(edge(1,1));assert(!dg::critical_path(g,4,cp));}
 for(int rep=0;rep<500;rep++){int n=rng()%14+1;vector<pair<int,int>>es;vector<int>g[vNum];for(int i=1;i<=n;i++)for(int j=i+1;j<=n;j++)if(rng()%6==0){es.push_back({i,j});g[i].push_back(j);g[j].push_back(i);if(rng()%4==0){es.push_back({i,j});g[i].push_back(j);g[j].push_back(i);}}int c=components(n,es);cu::cut_pbc(g,n);br::bridge_ebc(g,n);for(int i=1;i<=n;i++)assert(cu::cut.count(i)==(components(n,es,i)>c));for(int i=0;i<(int)es.size();i++){auto [u,v]=es[i];assert((br::isBridge[{u,v}]||br::isBridge[{v,u}])==(components(n,es,-1,i)>c));}}
 cout.rdbuf(old);cout<<"600 MST differential graphs; 450 all-source shortest/SCC graphs; 250 negative DAGs; 500 cut/bridge multigraphs; negative-cycle and critical-path edge cases passed\n";
}
