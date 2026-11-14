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

namespace ls{
//二分查找，查找顺序表sl的下标区间[left,right]中是否存在值为k的元素，若存在则返回元素的下标，否则返回-1
int binary_search(const vector<keytype>&sl,int left,int right,keytype k){
    int mid;
    if(left<0 || right>=(int)sl.size() || left>right) return -1; //查找失败
    mid=left+(right-left)/2; //下标区间的中间位置
    if(sl[mid]==k) return mid; //查找成功
    else if(sl[mid]>k) return binary_search(sl,left,mid-1,k); //转到左半区间查找
    else return binary_search(sl,mid+1,right,k); //转到右半区间查找
}
//二分查找的非递归实现，查找顺序表sl中是否存在元素的值为k，若存在则返回元素的下标，否则返回-1
int binary_search(const vector<keytype>&sl,keytype k){
    int left=0,right=(int)sl.size()-1,mid;
    while(left<=right){
        mid=left+(right-left)/2;
        if(sl[mid]==k) return mid; //查找成功
        else if(sl[mid]>k) right=mid-1; //转到左半区间查找
        else left=mid+1; //转到右半区间查找
    }
    return -1; //查找失败
}
//插值查找的非递归实现，查找顺序表sl中是否存在元素的值为k
int interpolation_search(const vector<keytype>&sl,keytype k){
    int left=0,right=(int)sl.size()-1,mid;
    while(left<=right){
        if(k<sl[left] || k>sl[right]) return -1;
        if(sl[left]==sl[right]) return sl[left]==k ? left : -1;
        mid=left+(int)(1LL*(right-left)*(1LL*k-sl[left])/(1LL*sl[right]-sl[left]));
        if(sl[mid]==k) return mid; //查找成功
        else if(sl[mid]>k) right=mid-1; //转到左半区间查找
        else left=mid+1; //转到右半区间查找
    }
    return -1; //查找失败
}
#define M 6    /* 分块数的上限 */
struct bitNode{    //块索引表的元素的类型定义
    keytype mkey;    //键值信息
    int begin,end;    //键值起点下标和终点下一个元素的下标
    bool operator<(const bitNode bit)const{
        return mkey<bit.mkey;
    }
};

struct bitTable{    //分块查找表
    bitNode bit[M];    //块索引表
    int sz;    //分块的实际数量
    vector<keytype>sl;    //原始顺序表
    bitTable():sz(0){
    }
};
//构建原始数据和块索引表b
void get_bitTable(bitTable &b){
    keytype k,mk;
    int i,n=0,m;
    b.sl.clear(); b.sz=0;
    cout<<"输入分块数量:";
    cin>>m;
    if(m<0 || m>M) return;
    b.sz=m;
    for(i=0;i<m;i++){
        cout<<"输入第"<<i+1<<"块的键值(当输入0时结束本块输入):"<<endl; //输入第i+1块的数据
        b.bit[i].begin=n,mk=-1; //n为当前原始数据的下标
        while(cin>>k && k>0){ //假设键值都为正
            b.sl.push_back(k); //将键值依次加入原始顺序表
            if(mk<k) mk=k; //更新当前块的最大值
            ++n;
        }
        b.bit[i].mkey=mk;
        b.bit[i].end=n; //第i+1块索引表构建完毕
    }
}
//对分块查找表b进行分块查找，查找的键值为k，查找成功，返回k在原顺序表中的下标，否则返回-1
int block_search(const bitTable &b,keytype k){
    bitNode bit1; bit1.mkey=k;
    int i=lower_bound(b.bit,b.bit+b.sz,bit1)-b.bit; //i为键值k所在的块
    if(i>=b.sz) return -1; //k比所有键值都大，查找失败
    bitNode bit=b.bit[i]; //第i个块的块索引表
    const vector<keytype>&sl=b.sl; //原始顺序表
    for(int j=bit.begin;j<bit.end;j++) //在第i个块内进行顺序查找
        if(sl[j]==k) return j; //查找成功
    return -1;
}
//朴素模式匹配算法，判断主串s中是否包含模式串t
int bf(string s,string t){
    int i=0,j=0,k=0,sz_s=s.size(),sz_t=t.size();
    if(sz_t==0) return 0;
    while(i<sz_s && j<sz_t){
        if(s[i]==t[j]){
            ++i,++j; //i,j同步后移
            if(j==sz_t) return k; //j到达模式串的最后一个字符的下一个位置，匹配成功
        }else
            ++k,i=k,j=0; //下一轮匹配主串从下一个字符开始，模式串从头开始
    }
    return -1; //匹配不成功
}
//求KMP算法中模式串t的next数组
void kmp_next(string t,vector<int>& next){
    int i=0,j=-1,sz=t.size();
    next.resize(sz);
    if(sz==0) return;
    next[0]=-1;
    while(i<sz-1){
        if(j==-1 || t[i]==t[j]){
            ++i,++j; //i和j同步向后移动
            if(t[i]==t[j]) next[i]=next[j]; //改进的next
            else next[i]=j;
        }
        else
            j=next[j];
    }
}

//KMP模式匹配算法,判断s中是否包含t,如果包含,则返回t在s中第一次出现的位置,否则返回-1
int kmp(string s,string t){
    int i=0,j=0,sz_s=s.size(),sz_t=t.size();
    if(sz_t==0) return 0; //空模式串
    vector<int> next(sz_t);
    kmp_next(t,next); //求t的next数组
    while(i<sz_s){
        if(j==-1 || s[i]==t[j]){
            ++i,++j; //i,j同步后移
            if(j==sz_t) return i-j; //匹配成功
        }
        else
            j=next[j]; //j向前移动到下一个位置
    }
    return -1; //匹配失败
}
constexpr int ML=[](){
    int n=N,level=1;
    while(n>1){ n=n/2+n%2; ++level; }
    return level;
}(); /* 跳表的层数的上限 */

struct sklNode{
    keytype key; //键值
    sklNode *next[ML]; //各层的next指针
    sklNode(){
        for(int i=0;i<ML;i++) next[i]=NULL;
    }
};

struct skipList{
    sklNode *head; //跳表的头结点
    int level; //跳表的层数
    skipList():level(0){
        head=new sklNode;
    }
};
//在跳表skl中查找是否存在键值k。如果存在,则返回其出现的最高层次,否则返回-1
int skl_search(skipList skl,keytype k){
    int i;
    sklNode *cur=skl.head;
    for(i=skl.level-1;i>=0;i--){ //从最高层开始查找
        while(cur->next[i]!=NULL && cur->next[i]->key<k) //在第i层查找
            cur=cur->next[i];
        if(cur->next[i]!=NULL && cur->next[i]->key==k){ //k在第i层出现,返回层数
            return i+1;
        }
    }
    return -1;
}
//通过掷硬币方法确定层数
int get_random_level(){
    int ret=1;
    while(rand()%2 && ret<ML) //从第1层开始,如果rand()为奇数,则层数加1
        ret++;
    return ret;
}
//在跳表skl中插入结点,其键值为k,插入成功返回true,否则返回false
bool skl_insert(skipList &skl,keytype k){
    if(skl_search(skl,k)!=-1) return false; //如果跳表中已存在键值为k的结点,取消插入
    int i,level=get_random_level(); //获取插入键值k的最高层次
    if(level>skl.level) skl.level=level; //当插入结点的最大层数大于跳表层数时,更新跳表的层数
    sklNode *cur=skl.head,*tmp=new sklNode; //cur为当前结点,tmp为新插入的结点
    tmp->key=k;
    for(i=level-1;i>=0;i--){ //从所要插入的最高层开始,依次在每一层插入
        while(cur->next[i]!=NULL && cur->next[i]->key<k)
            cur=cur->next[i];
        tmp->next[i]=cur->next[i]; //tmp插入第i层链表中点cur的后面
        cur->next[i]=tmp;
    }
    return true;
}
//输出跳表skl各层的键值信息
void skl_print(skipList skl){
    for(int i=0;i<skl.level;i++){
        sklNode *cur=skl.head->next[i];
        cout<<"第"<<i+1<<"层:";
        while(cur){
            cout<<cur->key<<' ';
            cur=cur->next[i];
        }
        cout<<endl;
    }
}
//删除跳表skl中键值为k的结点
bool skl_delete(skipList &skl,keytype k){
    int i;
    sklNode *cur=skl.head,*del=NULL;
    for(i=skl.level-1;i>=0;i--){ //查找每一层是否存在结点的键值为k
        while(cur->next[i]!=NULL && cur->next[i]->key<k)
            cur=cur->next[i];
        if(cur->next[i]!=NULL && cur->next[i]->key==k){ //该层存在键值为k的结点,其前一结点为cur
            if(del==NULL) del=cur->next[i]; //记录被删除结点
            cur->next[i]=del->next[i]; //删除第i层的键值为k的结点
        }
    }
    if(del==NULL) return false; //不存在键值为k的结点
    delete del; del=NULL; //释放被删除结点所占用的存储空间
    for(i=skl.level-1;i>=0;i--) //检查各层是否为空链表,如果是则将层数减1
        if(skl.head->next[i]==NULL) skl.level--;
        else break;
    return true;
}}

int main(){mt19937 rng(5201);for(int rep=0;rep<5000;rep++){int n=rng()%80;vector<int>a(n);for(int&i:a)i=(int)(rng()%100)-50;sort(a.begin(),a.end());int k=(int)(rng()%120)-60;int i=ls::binary_search(a,k),j=ls::interpolation_search(a,k);assert((i!=-1)==std::binary_search(a.begin(),a.end(),k));assert((j!=-1)==std::binary_search(a.begin(),a.end(),k));if(i!=-1)assert(a[i]==k);if(j!=-1)assert(a[j]==k);string s,t;for(int j=0;j<n;j++)s+='a'+rng()%3;for(int j=rng()%25;j;j--)t+='a'+rng()%3;int want=s.find(t)==string::npos?-1:(int)s.find(t);assert(ls::bf(s,t)==want);assert(ls::kmp(s,t)==want);}
 ls::skipList skl;set<int>s;for(int rep=0;rep<5000;rep++){int k=(int)(rng()%101)-50;if(rng()%2){bool want=s.insert(k).second;assert(ls::skl_insert(skl,k)==want);}else{bool want=s.erase(k);assert(ls::skl_delete(skl,k)==want);}for(int k=-50;k<=50;k++)assert((ls::skl_search(skl,k)!=-1)==(s.count(k)!=0));}auto p=skl.head;while(p){auto q=p->next[0];delete p;p=q;}
 cout<<"5000 sorted search/BF/KMP cases including empty strings; 5000 skip-list mixed operations passed\n";
}
