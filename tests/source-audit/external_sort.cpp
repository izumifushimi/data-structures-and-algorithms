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
namespace mm{
#define K 8   //顺串个数的上限,K-路归并
#define M 10  //每个顺串中元素个数的上限

keytype leaf[K + 1];   //叶结点的值,为每一个顺串的最小值
int loser[K << 1];     //败者树
int idx[K];            //每个顺串当前元素的下标

void ini(keytype a[][M], int k) {
    int i;
    leaf[k] = -INF;    //leaf添加一个元素,其值为-INF
    for(i = 0; i < k; i++) loser[i] = k; //初始化非叶结点,值为leaf的下标
    for(i = k; i < 2 * k; i++) loser[i] = i - k; //叶结点初始化,值为leaf的下标
    for(i = 0; i < k; i++) leaf[i] = a[i][0], idx[i] = 0; //初始化leaf,初始为每一个顺串的第一个元素
}

//更新操作:对败者树的编号为cur的结点进行更新
void adjust(int cur) {
    int tmp = loser[cur];
    while((cur = cur >> 1) > 0) { //从当前结点的父结点开始更新
        if(leaf[loser[cur]] < leaf[tmp])
            swap(loser[cur], tmp); //利用新的tmp继续向上更新
    }
    loser[0] = tmp; //最终0-结点为最小值的下标
}

//对顺串a[0],a[1],...,a[k-1]进行归并,归并结果放到ret中
void multi_merge(keytype a[][M], int k, vector<keytype>& ret) {
    int i, j;
    if(k<=0 || k>K) return;
    ini(a, k); //初始化全局数组
    for(i = 2 * k - 1; i >= k; i--) adjust(i); //从后向前考虑每一个叶结点,初始化败者树
    while(1) { //更新败者树
        j = loser[0]; //j为最小值的顺串的下标
        if(leaf[j] == INF) break; //归并结束
        ret.push_back(leaf[j]); //将当前最小值加入结果中
        /*
        if(ret.size() >= block_size) {
            //将结果存入磁盘
            ret.clear();
        }
        */
        idx[j]++; //考虑顺串j的下一个元素
        /*
        if(a[j][idx[j]] == INF) { //第j个顺串处理完
            //根据需要从磁盘读取数据填充该顺串
            idx[j] = 0; //重新加载顺串的第一个元素开始
        }
        */
        leaf[j] = (idx[j] < M) ? a[j][idx[j]] : INF; //更新叶结点的值,防止数组越界
        adjust(j + k); //第j个顺串所对应的败者树中叶结点的编号为j+k
    }
}}
#undef K
#undef M
namespace rs{
#define C 7             //败者树叶结点的数量上限
#define M 8             //顺串的数量上限
#define N 100           //键值的总数上限

keytype leaf[C + 1],       //叶结点的值，为每一个顺串的最小值
        a[N];          //原键值序列

vector<keytype> runs[N]; //最多 N 个顺串，避免超过原固定 8 个顺串容量

struct rss_node {
    int idx;           //属于叶结点的编号
    int run_idx;       //顺串编号

    bool operator<(rss_node rn) {
        //排序第一关键字为顺串编号，第二关键字为键值
        if (run_idx == rn.run_idx)
            return leaf[idx] < leaf[rn.idx];
        return run_idx < rn.run_idx;
    }
};

rss_node loser[C << 1]; //败者树

void ini(int c) {
    int i;
    for (i = 0; i < c; i++)
        loser[i].idx = c, loser[i].run_idx = 0; //非叶结点

    for (i = c; i < 2 * c; i++)
        loser[i].idx = i - c, loser[i].run_idx = 0; //叶结点

    for (i = 0; i < c; i++)
        leaf[i] = a[i];

    leaf[c] = -INF; //为了操作的一致性
}

//更新败者树的第cur个结点
void adjust(int cur) {
    int pa = cur >> 1;
    rss_node tmp = loser[cur];

    while (pa > 0) {
        if (loser[pa] < tmp)
            swap(loser[pa], tmp);
        pa >>= 1;
    }

    loser[0] = tmp;
}

//基于败者树的置换-选择排序，n为键值的总数，c为败者树叶结点的数量
void rss_sort(int n, int c) {
    int i, j, run_j = 0;
    for(i=0;i<N;i++) runs[i].clear();
    if(n<=0 || n>N || c<=0 || c>C) return;
    c=min(c,n);
    ini(c);

    for (i = 2 * c - 1; i >= c; i--)
        adjust(i);

    i = c;

    while (1) {
        j = loser[0].idx;           //最小键值的下标
        run_j = loser[0].run_idx;   //一个顺串结束，考虑下一个顺串

        if (leaf[j] == INF)
            break;                 //所有键值都加入顺串，结束

        runs[run_j].push_back(leaf[j]); //将最小值加入当前顺串中

        /*
        if (runs[run_j].size() >= block_size) {
            //将结果存入磁盘
            runs[run_j].clear();
        }
        */

        int mi = leaf[j];
        rss_node tmp;
        tmp.idx = j;

        if (i >= n) {
            /* a中的键值处理完毕，从磁盘中加载其他未处理的键值，
               如果已全部加载，执行下面的操作 */
            leaf[j] = INF;       //如果键值全部加载进败者树，则添加一个INF
            tmp.run_idx = N + 1; //结点的顺串编号设置一个比所有顺串编号都大的值
        }
        else {
            leaf[j] = a[i++];    //更新叶结点的值
            tmp.run_idx = run_j;
        }

        if (leaf[j] < mi)
            tmp.run_idx++;      //新的键值<上一次所选取的键值，则属于下一个顺串

        loser[j + c] = tmp;      //更新叶结点
        adjust(j + c);          //更新败者树
    }
}}

int main(){mt19937 rng(922);for(int rep=0;rep<1000;rep++){int k=rng()%8+1;int a[8][10];vector<int>w;for(int i=0;i<k;i++){int n=rng()%10;vector<int>x;for(int j=0;j<n;j++)x.push_back((int)(rng()%101)-50);sort(x.begin(),x.end());for(int j=0;j<10;j++)a[i][j]=j<n?x[j]:INF;w.insert(w.end(),x.begin(),x.end());}sort(w.begin(),w.end());vector<int>r;mm::multi_merge(a,k,r);assert(r==w);}
 for(int rep=0;rep<1500;rep++){int n=rng()%100,c=rng()%7+1;vector<int>w;for(int i=0;i<n;i++){rs::a[i]=(int)(rng()%101)-50;w.push_back(rs::a[i]);}rs::rss_sort(n,c);vector<int>r;for(auto&v:rs::runs){assert(is_sorted(v.begin(),v.end()));r.insert(r.end(),v.begin(),v.end());}sort(r.begin(),r.end());sort(w.begin(),w.end());assert(r==w);}
 cout<<"1000 multiway merge cases; 1500 replacement-selection cases incl n<c, n=0, repeated calls passed\n";
}
