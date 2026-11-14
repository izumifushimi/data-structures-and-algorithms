#include <iostream>
#include <algorithm>
#include <vector>
#include <map>
#include <queue>
#include <stack>
#include <string>
#include <cstring>
#include <cctype>
#include <stdexcept>
#include <cassert>
#include <sstream>
using namespace std;
const int N=10;using datatype=int;
struct paNode{
int pa;	//父结点下标
datatype data;
paNode():pa(-1){}	//根结点的父节点下标为-1
};
struct paTree{
paNode tree[N];
int n;	//树的结点数量
int root; //根结点下标
};
paTree create(datatype data[N],int pa[N],int n){
    paTree t;
    t.n = n;
    t.root=-1;
    for(int i=0;i<n;i++){
        t.tree[i].pa=pa[i],t.tree[i].data=data[i];
        if(pa[i]==-1) t.root=i;
    }
    return t;
}
int lm_child(paTree t,int cur){
    if(cur<0 || cur>=t.n) return -1;
    for(int i=0;i<t.n;i++)
        if(t.tree[i].pa==cur) return i;
    return -1;
}
int r_bro(paTree t,int cur){
    if(cur<0 || cur>=t.n || t.tree[cur].pa==-1) return -1;
    for(int i=cur+1;i<t.n;i++)
        if(t.tree[i].pa==t.tree[cur].pa) return i;
    return -1;
}
int main(){
int d[N]={0,1,2,3,4};int p[N]={-1,0,1,0,1};auto t=create(d,p,5);assert(t.root==0&&lm_child(t,0)==1&&r_bro(t,1)==3&&r_bro(t,3)==-1&&lm_child(t,1)==2&&r_bro(t,2)==4);assert(r_bro(t,4)==-1);

}
