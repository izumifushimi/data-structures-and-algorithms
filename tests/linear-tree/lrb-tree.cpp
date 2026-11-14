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
struct lrbNode{
datatype data;
int pa;
int lmc;
int rb;
lrbNode():lmc(-1),rb(-1){}
};
struct lrbTree{
lrbNode tree[N];
int n;
int root;
};
lrbTree create(datatype data[],int pa[],int n){
    lrbTree t;
    t.n=n;t.root=-1;
    int last[N];
    for(int i=0;i<n;i++) last[i]=-1;
    for(int i=0;i<n;i++){
        t.tree[i].data=data[i];
        t.tree[i].pa=pa[i];
        if(pa[i]==-1) t.root=i;
        else{
            if(t.tree[pa[i]].lmc==-1) t.tree[pa[i]].lmc=i;
            else t.tree[last[pa[i]]].rb=i;
            last[pa[i]]=i;
        }
    }
    return t;
}
int lm_child(lrbTree t,int cur){
    if(cur<0 || cur>=t.n) return -1;
    return t.tree[cur].lmc;
}
int r_bro(lrbTree t,int cur){
    if(cur<0 || cur>=t.n) return -1;
    return t.tree[cur].rb;
}
//先根遍历，rt为根结点
void preOrder(lrbTree t,int rt){
    if(rt==-1) return;  //空树
    cout<<t.tree[rt].data;
    int cur = lm_child(t,rt);
    while(cur!=-1){
        preOrder(t,cur);
        cur = r_bro(t,cur);
    }
}

//中根遍历
void midOrder(lrbTree t,int rt){
    if(rt==-1) return;
    int cur = lm_child(t,rt);
    midOrder(t,cur);
    cout<<t.tree[rt].data;
    while(cur!=-1){
        cur = r_bro(t,cur);
        midOrder(t,cur);
    }
}

//后根遍历
void postOrder(lrbTree t,int rt){
    if(rt==-1) return;
    int cur = lm_child(t,rt);
    while(cur!=-1){
        postOrder(t,cur);
        cur = r_bro(t,cur);
    }
    cout<<t.tree[rt].data;
}
//求树的括号表示btree中，cur的最左孩子结点
int lm_child(string btree,int cur){
    if(cur>=0 && cur+2<(int)btree.size() && btree[cur+1]=='(' && btree[cur+2]!=')') 
        return cur+2;
    return -1;
}
//求树的括号表示btree中，结点cur的右兄弟结点，结果作为返回值
int r_bro(string btree,int cur){
    if(cur<0 || cur>=(int)btree.size()) return -1;
    if(btree[cur]=='(' || btree[cur]==')'){
        return -1;
    }
    int cnt=0;
    for(int i=cur+1;i<btree.size();i++){//cnt是一个计数器
        if(btree[i]=='(') cnt++;
        else if(btree[i]==')') cnt--;
        else if(btree[i]==',' && cnt==0)
            return i+1;
        if(cnt<0) break;
    }
    return -1;
}
int main(){
int d[N]={0,1,2,3,4};int p[N]={-1,0,1,0,1};auto t=create(d,p,5);assert(t.root==0&&lm_child(t,0)==1&&r_bro(t,1)==3&&r_bro(t,3)==-1&&lm_child(t,1)==2&&r_bro(t,2)==4);assert(r_bro(t,4)==-1);assert(lm_child(string("A(B,C)"),0)==2);assert(lm_child(string("A"),0)==-1);

}
