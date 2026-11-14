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

#define N 1000
int sum[N<<2],lazy[N<<2]; //<<2相当于*4
//sum是结点i所对应区间中元素之和，初始为0；lazy是结点的懒惰标记值
//向上更新函数，当一个结点的孩子结点更新完毕时，需要更新当前结点的信息
void pushup(int rt){
    sum[rt] = sum[rt<<1]+sum[rt<<1|1]; //左孩子和右孩子
}
//根据数组a构建表示区间和线段树，rt表示当前结点编号，l、r表示当前结点区间
void build(int a[N],int rt,int l,int r){
    if(l>r) return;
    lazy[rt]=0;
    if(l==r){
        sum[rt]=a[l]; //到达叶结点
        return;
    }
    int mid = (l+r)>>1;
    build(a,rt<<1,l,mid);	//	构建左子树
    build(a,(rt<<1|1),mid+1,r);	//构建右子树
    pushup(rt);
}
void pushdown(int rt,int ln,int rn); //定义在下一块
//将a[pos]的值增加inc
void update(int rt,int l,int r,int pos,int inc){
    if(pos<l || pos>r || l>r) return;
    if(l==r){	//l=r=pos
        sum[rt]+=inc;	
        return;
    }
    int mid = (l+r)>>1;
    pushdown(rt,mid-l+1,r-mid);
    if(pos<=mid) update(rt<<1,l,mid,pos,inc); //pos在左子树
    else update((rt<<1)|1,mid+1,r,pos,inc);	//pos在右子树
    pushup(rt);//更新当前结点到根结点的所有节点
}
//将结点rt的延时更新值向下传递 参数ln，rn分别为结点rt的左子树和右子树对应区间的长度
void pushdown(int rt,int ln,int rn){
    if(lazy[rt]){
        lazy[rt<<1]+=lazy[rt];	//当前结点延时更新值传递给左孩子
        lazy[(rt<<1)|1]+=lazy[rt]; //当前结点延时更新值传递给右孩子
        //利用当前结点rt的延时更新值修改rt的孩子结点的sum
        sum[rt<<1] += lazy[rt]*ln;
        sum[rt<<1|1]+=lazy[rt]*rn;
        lazy[rt] = 0;		//清除本结点的延时更新值
    }
}
//区间更新，将a[L,R]中的元素值都增加inc
void update(int rt,int l,int r,int L,int R,int inc){
    if(l>r || L>R || R<l || r<L) return;
    if(L<=l && r<=R){		//结点[l,r]是中止结点
        sum[rt]+=inc*(r-l+1);//更新当前区间的和
        lazy[rt]+=inc;	//更新当前的延时更新值
        return;
    }
    int mid=(l+r)>>1;
    pushdown(rt,mid-l+1,r-mid);	//更新当前结点的sum，并将延时更新值向孩子结点传递
    //判断左右子树与[L,R]有没有交集，如果有，继续向下搜索
    if(L<=mid) update(rt<<1,l,mid,L,R,inc);
    if(R>mid) update((rt<<1)|1,mid+1,r,L,R,inc);
    pushup(rt);		//更新当前结点到根结点的所有节点
}
int query(int rt,int l,int r,int L,int R){
    if(l>r || L>R || R<l || r<L) return 0;
    if(L<=l && r<=R){	//是中止结点
        return sum[rt];
    }
    int mid = (l+r)>>1;
    pushdown(rt,mid-l+1,r-mid);//更新当前结点的sum，并将延时更新值向孩子结点传递
    int ret = 0;	//最后结果为[L,R]在左右区间的sum之和
    if(L<=mid) ret+=query(rt<<1,l,mid,L,R);
    if(R>mid) ret+=query((rt<<1)|1,mid+1,r,L,R);
    return ret;
}
int main(){
int a[N];for(int i=0;i<10;i++)a[i]=i;build(a,1,0,9);assert(query(1,0,9,2,5)==14);update(1,0,9,0,9,3);for(int i=0;i<10;i++)a[i]+=3;update(1,0,9,4,7);a[4]+=7;for(int l=0;l<10;l++)for(int r=l;r<10;r++){int s=0;for(int i=l;i<=r;i++)s+=a[i];assert(query(1,0,9,l,r)==s);}build(a,1,0,9);assert(query(1,0,9,3,3)==a[3]);assert(query(1,0,9,20,30)==0);

}
