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

namespace sp{typedef struct stNode{
    keytype key;
    stNode *lc,*rc; //左孩子指针和右孩子指针
    stNode():lc(NULL),rc(NULL){
    }
} *splayTree;

splayTree LL(splayTree A){
    splayTree B=A->lc; //找到A的左孩子B
    A->lc=B->rc; //将B的右子树变成A的左子树
    B->rc=A; //将A变成B的右孩子
    return B; //返回旋转后新的根结点B
}

splayTree RR(splayTree A){
    splayTree B=A->rc; //找到A的右孩子B
    A->rc=B->lc; //将B的左子树变成A的右子树
    B->lc=A; //将A变成B的左孩子
    return B; //返回旋转后新的根结点B
}


 //在伸展树t中,对键值k进行自顶向下伸展操作
void splay(splayTree &t,keytype k){
    splayTree header=new stNode,LMax=NULL,RMin=NULL; //HL为header->lc,HR为header->rc
    if(t==NULL){
        delete header;
        return;
    }
    while(1){
        if(t->key>k){ //进入左分支
            if(t->lc==NULL) break; //情形(2.2.1)
            if(t->lc->key>k) t=LL(t);
            if(t->lc==NULL) break; //情形(2.2.2)
            //情形(2.2.4):分裂,情形(2.2.3)直接进行下面的操作
            if(RMin==NULL) header->rc=RMin=t;
            else RMin->lc=t,RMin=t;
            t=t->lc;
        }
        else if(t->key<k){ //进入右分支
            if(t->rc==NULL) break; //情形(2.3.1)
            if(t->rc->key<k) t=RR(t);
            if(t->rc==NULL) break; //情形(2.3.2)
            //情形(2.3.4):分裂,情形(2.3.3)直接进行下面的操作
            if(LMax==NULL) header->lc=LMax=t;
            else LMax->rc=t,LMax=t;
            t=t->rc;
        }
        else
            break; //情形(2.1)
    }
    //第(3)步
    if(LMax==NULL) header->lc=t->lc; //将t的左分支加到HL中
    else LMax->rc=t->lc;
    if(RMin==NULL) header->rc=t->rc; //将t的右分支加到HR中
    else RMin->lc=t->rc;
    t->lc=header->lc; //将t的左分支设置为HL
    t->rc=header->rc; //将t的右分支设置为HR
    delete header;
}


 //在伸展树t中查找键值为k的结点,查找成功,返回该结点;否则返回NULL
splayTree splay_search(splayTree &t,keytype k){
    splay(t,k); //对k进行伸展操作
    if(t!=NULL && t->key==k) return t; //查找成功
    else return NULL; //查找失败
}


 //在伸展树t中插入一个键值为k的结点,插入成功,返回true;否则返回false
bool splay_insert(splayTree &t,keytype k){
    splayTree tmp=new stNode;
    tmp->key=k;
    if(t==NULL) t=tmp; //原树为空树
    else{
        splay(t,k); //对k进行伸展操作
        if(k<t->key){ //k小于t的键值
            tmp->lc=t->lc,tmp->rc=t; //tmp的左孩子设置为t的左孩子,右孩子设置为t
            t->lc=NULL,t=tmp; //t的左子树为空,更新根结点
        }
        else if(k>t->key){ //k大于t的键值
            tmp->rc=t->rc,tmp->lc=t; //tmp的右孩子设置为t的右孩子,左孩子设置为t
            t->rc=NULL,t=tmp; //t的右子树为空,更新根结点
        }
        else{
            delete tmp;
            return false; //插入失败
        }
    }
    return true;
}


 //删除伸展树t中键值为k的结点
bool splay_delete(splayTree &t,keytype k){
    if(t==NULL) return false;
    splay(t,k); //伸展操作
    if(t->key!=k) return false; //删除失败
    if(t->rc==NULL){ //右子树为空,用t的左子树取代t
        splayTree tmp=t;
        t=t->lc;
        delete tmp;
        tmp=NULL;
    }
    else{
        splayTree tmp=t->rc;
        splay(tmp,k); //在t的右子树对k进行伸展操作
        tmp->lc=t->lc; //将tmp的左子树设置为t的左子树
        delete t;
        t=NULL; //删除t
        t=tmp; //更新根结点
    }
    return true;
}
}
namespace bs{typedef struct bstNode {
    keytype key;
    bstNode *lc, *rc;
    bstNode():lc(NULL),rc(NULL) {
    }
} *bstTree;
 //在二叉查找树t中查找键值为k的结点,查找结果作为返回值
bstNode *bst_search(bstTree t,keytype k) {
    if(t==NULL) return NULL;
    if(k < t->key) return bst_search(t->lc,k); //转入左子树查找
    else if(k > t->key) return bst_search(t->rc,k); //转入右子树查找
    else return t; //查找成功
}

 //在二叉查找树t中插入一个键值为k的结点。插入成功,返回true,否则返回false
bool bst_insert(bstTree &t,keytype k) {
    if(t==NULL) {
        //当前结点为空,创建结点,并指定键值为k
        t=new bstNode,t->key=k;
        return true;
    }
    if(k < t->key) return bst_insert(t->lc,k); //插入t的左子树
    else if(k > t->key) return bst_insert(t->rc,k); //插入t的右子树
    //如果t中已存在键值为k的结点,插入失败
    return false;
}
 //删除二叉查找树t中键值为k的结点。删除成功,返回true,否则返回false
bool bst_delete(bstTree &t,keytype k) {
    bstNode *tmp;
    if(t==NULL) return false; //情形(1):不存在键值为k的结点,删除失败
    else if(k < t->key) return bst_delete(t->lc,k); //进入左子树
    else if(k > t->key) return bst_delete(t->rc,k); //进入右子树
    else { //t的键值为k,删除结点t(算法中的(1))
        if(t->lc==NULL && t->rc==NULL) { //情形(2)
            delete t,t=NULL;
        }
        else if(t->rc==NULL) {
            tmp=t; //仅有左孩子，直接以整棵左子树取代当前结点
            t=t->lc;
            delete tmp;
        }
        else {
            tmp=t->rc; //情形(4)
            while(tmp->lc) tmp=tmp->lc;
            //获取t的直接后继tmp(右子树的最左孩子,算法中的(2))
            keytype k1=tmp->key;
            bst_delete(t,k1); //删除tmp
            t->key=k1; //用tmp的键值取代t的键值
        }
        return true;
    }
}}
namespace av{typedef struct avlNode{
    keytype key;
    int h;              //以当前结点为根结点的AVL树的高度
    avlNode *lc, *rc;
    avlNode():h(1),lc(NULL),rc(NULL)
    {
    }
} *avlTree;
//获取子树高度
int avl_height(avlTree avl){
    return avl == NULL ? 0 : avl->h;
}
//AVL树的LL旋转操作,返回旋转后子树的根结点
avlTree LL(avlTree A){
    avlTree B=A->lc;
    A->lc=B->rc,B->rc=A;
    A->h=max(avl_height(A->lc),avl_height(A->rc))+1; //更新结点A的高度
    B->h=max(avl_height(B->lc),avl_height(B->rc))+1; //更新结点B的高度
    return B; //返回旋转后子树的根结点
}
//AVL树的RR旋转操作,返回旋转后子树的根结点
avlTree RR(avlTree A){
    avlTree B=A->rc;
    A->rc=B->lc,B->lc=A;
    A->h=max(avl_height(A->lc),avl_height(A->rc))+1; //更新结点A的高度
    B->h=max(avl_height(B->lc),avl_height(B->rc))+1; //更新结点B的高度
    return B;
}
//AVL树的LR旋转操作,返回旋转后子树的根结点
avlTree LR(avlTree A){
    A->lc=RR(A->lc);     //RR旋转
    return LL(A);        //LL旋转
}
//AVL树的RL旋转操作,返回旋转后子树的根结点
avlTree RL(avlTree A){
    A->rc=LL(A->rc);     //LL旋转
    return RR(A);        //RR旋转
}
//向AVL树t中插入结点,结点的键值为k,插入成功,返回true,否则,返回false(t中已存在键值为k的结点)
bool avl_insert(avlTree &t,keytype k){
    if(t==NULL){
        t=new avlNode,t->key=k;
        return true;
    }
    if(k<t->key){
        if(!avl_insert(t->lc,k)) return false;
        if(avl_height(t->lc)-avl_height(t->rc)>1){
            //不平衡,A为t,B为t->lc,因为此处属于t的左子树回退部分
            if(t->lc->key>k) t=LL(t);
            else t=LR(t);
        }
    }
    else if(k>t->key){
        if(!avl_insert(t->rc,k)) return false;
        if(avl_height(t->rc)-avl_height(t->lc)>1){
            //不平衡,A为t,B为t->rc,因为此处属于t的右子树回退部分
            if(t->rc->key<k) t=RR(t);
            else t=RL(t);
        }
    }
    else
        return false;
    t->h=max(avl_height(t->lc),avl_height(t->rc))+1;
    return true;
}
//删除AVL树t中键值为k的结点,删除成功返回true,否则返回false
bool avl_delete(avlTree &t,keytype k){
    if(t==NULL) return false;
    bool ret=false;
    if(k<t->key){ //删除结点在t的左子树
        ret=avl_delete(t->lc,k);
    }
    else if(k>t->key){ //删除结点在t的右子树
        ret=avl_delete(t->rc,k);
    }
    else{ //结点t的键值等于k,删除结点t
        ret=true;
        if(t->lc==NULL || t->rc==NULL){ //t最多只有一个孩子
            avlTree tmp=t;
            t=(t->lc!=NULL)?t->lc:t->rc;
            delete tmp;
        }
        else{ //t有左右两个孩子
            avlNode *tmp=t->rc;
            while(tmp->lc) tmp=tmp->lc; //寻找t的中根序列的直接后继
            keytype k1=tmp->key;
            t->key=k1; //用后继结点的键值取代t的键值
            avl_delete(t->rc,k1); //删除右子树中的后继结点
        }
    }
    if(!ret) return false;
    if(t==NULL) return true;
    //更新结点t的高度
    t->h=max(avl_height(t->lc),avl_height(t->rc))+1;
    //检查t是否左侧失衡
    if(avl_height(t->lc)-avl_height(t->rc)>1){
        avlTree B=t->lc;
        if(avl_height(B->lc)>=avl_height(B->rc))
            t=LL(t); //LL旋转
        else
            t=LR(t); //LR旋转
    }
    //检查t是否右侧失衡
    else if(avl_height(t->rc)-avl_height(t->lc)>1){
        avlTree B=t->rc;
        if(avl_height(B->rc)>=avl_height(B->lc))
            t=RR(t); //RR旋转
        else
            t=RL(t); //RL旋转
    }
    return true;
}
}
namespace tt{typedef struct node2_3{
    int num; //键值的数量
    keytype key[3]; //键值
    node2_3 *parent; //指向父结点的指针
    node2_3 *child[4]; //指向孩子结点的指针数组
    node2_3():num(0),parent(NULL){
        for(int i=0;i<4;i++) child[i]=NULL;
    }
}*tree2_3;

 //在2-3树中查找键值k,如果存在,返回true,否则返回false
bool search2_3(tree2_3 t,int k){
    int i;
    if(t==NULL) return false; //查找失败
    for(i=0;i<t->num;i++){
        if(t->key[i]>k) break; //键值属于第i个孩子结点
        else if(t->key[i]==k) return true; //查找成功
    }
    return search2_3(t->child[i],k);
}
 //在结点t中插入一个键值k,并返回插入键值的位置,如果键值已存在,则返回-1
int add(tree2_3 &t,int k){
    int i;
    for(i=0;i<t->num;i++) if(t->key[i]==k) return -1;
    for(i=t->num;i>0;i--){
        if(t->key[i-1]>k){ //t中比k大的键值向右移动一位,孩子指针也相应移动
            t->key[i]=t->key[i-1];
            t->child[i+1]=t->child[i];
        }
        else break;
    }
    t->child[i+1]=t->child[i];
    t->key[i]=k,t->num++; //插入键值,结点的键值数加1
    return i;
}

 //分裂结点t,此时t中有3个键值、4个孩子结点,t的父结点为tp
void split(tree2_3 &t,tree2_3 &tp){
    int flag=0;
    if(tp==NULL) flag=1,tp=new node2_3; //t为根结点,需创建一个结点,作为新的根结点
    //增加一个结点,该结点的键值为t中的最大键值,两个孩子结点为t的最右边的两个孩子
    tree2_3 tmp=new node2_3;
    tmp->num=1,tmp->key[0]=t->key[2];
    tmp->child[0]=t->child[2],tmp->child[1]=t->child[3];
    if(t->child[0]!=NULL){ //若t不是叶结点,则重新确定其右边两个结点的父结点
        if(tmp->child[0]) tmp->child[0]->parent=tmp;
        if(tmp->child[1]) tmp->child[1]->parent=tmp;
    }
    t->child[2]=t->child[3]=NULL;
    t->num=1; //t只保留第一个键值
    int k=add(tp,t->key[1]); //将中间键值加入父结点,k为加入的位置
    tp->child[k]=t,tp->child[k+1]=tmp,tmp->parent=tp; //重新设置父子关系
    if(flag) t->parent=tp,t=tp; //根结点发生变化,重设根结点
}

 //向2-3树t中插入一个键值为k的结点
void insert2_3(tree2_3 &t,int k){
    int i;
    if(t==NULL) t=new node2_3;
    if(t->num==0){ //当前结点没有键值,直接在t中加入键值
        add(t,k);
        return;
    }
    for(i=0;i<t->num;i++){ //确定k位于t的哪一棵子树
        if(t->key[i]>k) break; //k位于子树i
        else if(t->key[i]==k) return; //k已存在
    }
    if(t->child[i]){ //t不是叶结点
        insert2_3(t->child[i],k); //进入子树i
        if(t->num==3) split(t,t->parent); //回退时,如果t的键值变为3个,则进行分裂操作
    }
    else{ //到达叶结点
        add(t,k); //将k加入结点t中
        if(t->num==3) split(t,t->parent); //如果t的键值为3,则进行分裂操作
    }
}
void delete2_3_first(tree2_3 &rt,tree2_3 &t){
    if(t==NULL) return;

    tree2_3 removed=t; //t可能引用父结点的孩子槽，移动槽位前保存原指针
    //已有下溢的父结点 num==0 时只调整结构，不再减为 -1
    if(t->num>0){
        for(int i=0;i<t->num-1;i++) t->key[i]=t->key[i+1];
        t->num--;
    }
    if(t->num>0) return; //删除后仍为2-结点,结束

    //以下处理t中没有键值的情形
    if(t==rt){
        //根结点没有键值
        rt=t->child[0];
        if(rt!=NULL) rt->parent=NULL;
        delete removed;
        return;
    }

    tree2_3 tp=t->parent;
    int i=0;
    while(i<=tp->num && tp->child[i]!=t) i++;
    if(i>tp->num) return;

    //情形(2.1):左兄弟为3-结点
    if(i>0 && tp->child[i-1]->num>1){
        tree2_3 tb=tp->child[i-1];

        t->key[0]=tp->key[i-1];
        tp->key[i-1]=tb->key[tb->num-1];

        t->child[1]=t->child[0];
        t->child[0]=tb->child[tb->num];

        if(t->child[0]!=NULL)
            t->child[0]->parent=t;

        tb->child[tb->num]=NULL;
        t->num=1;
        tb->num--;
    }
        //情形(2.1):右兄弟为3-结点
    else if(i<tp->num && tp->child[i+1]->num>1){
        tree2_3 tb=tp->child[i+1];

        t->key[0]=tp->key[i];
        tp->key[i]=tb->key[0];

        t->child[1]=tb->child[0];
        if(t->child[1]!=NULL)
            t->child[1]->parent=t;

        for(int j=0;j<tb->num-1;j++)
            tb->key[j]=tb->key[j+1];

        for(int j=0;j<tb->num;j++)
            tb->child[j]=tb->child[j+1];

        tb->child[tb->num]=NULL;
        t->num=1;
        tb->num--;
    }
        //情形(2.2):父结点为3-结点,与兄弟合并
    else if(tp->num>1){
        if(i>0){
            tree2_3 tb=tp->child[i-1];

            tb->key[1]=tp->key[i-1];
            tb->child[2]=t->child[0];

            if(tb->child[2]!=NULL)
                tb->child[2]->parent=tb;

            tb->num=2;

            for(int j=i-1;j<tp->num-1;j++)
                tp->key[j]=tp->key[j+1];

            for(int j=i;j<tp->num;j++)
                tp->child[j]=tp->child[j+1];

            tp->child[tp->num]=NULL;
            tp->num--;
        }
        else{
            tree2_3 tb=tp->child[1];

            tb->key[1]=tb->key[0];
            tb->key[0]=tp->key[0];

            tb->child[2]=tb->child[1];
            tb->child[1]=tb->child[0];
            tb->child[0]=t->child[0];

            if(tb->child[0]!=NULL)
                tb->child[0]->parent=tb;

            tb->num=2;
            tp->key[0]=tp->key[1];
            tp->child[0]=tb;
            tp->child[1]=tp->child[2];
            tp->child[2]=NULL;
            tp->num--;
        }

        delete removed;
    }
        //情形(2.3):父结点为2-结点,合并后向上调整
    else{
        tree2_3 tb;

        if(i>0){
            //t为右分支,与左兄弟合并
            tb=tp->child[0];

            tb->key[1]=tp->key[0];
            tb->child[2]=t->child[0];

            if(tb->child[2]!=NULL)
                tb->child[2]->parent=tb;

            tb->num=2;
            delete removed;
        }
        else{
            //t为左分支,与右兄弟合并
            tb=tp->child[1];

            tb->key[1]=tb->key[0];
            tb->key[0]=tp->key[0];

            tb->child[2]=tb->child[1];
            tb->child[1]=tb->child[0];
            tb->child[0]=t->child[0];

            if(tb->child[0]!=NULL)
                tb->child[0]->parent=tb;

            tb->num=2;
            delete removed;
        }

        tp->child[0]=tb;
        tp->child[1]=NULL;
        tb->parent=tp;
        tp->num=0;

        //继续检查父结点
        if(tp==rt){
            rt=tb;
            tb->parent=NULL;
            delete tp;
        }
        else{
            delete2_3_first(rt,tp);
        }
    }
}

 //删除2-3树t中键值为key的结点,rt为2-3树的根结点
void delete2_3(tree2_3 &rt,tree2_3 &t,int key){
    int i;
    if(t==NULL) return;

    for(i=0;i<t->num;i++){
        if(t->key[i]>key) break;
        else if(t->key[i]==key){
            //找到key的后继键值所在的叶结点
            if(t->child[0]!=NULL){
                tree2_3 tmp=t->child[i+1];

                while(tmp->child[0]!=NULL)
                    tmp=tmp->child[0];

                //用后继键值取代要删除的键值
                t->key[i]=tmp->key[0];

                //删除后继叶结点的第一个键值
                delete2_3_first(rt,tmp);
                return;
            }

            //t本身为叶结点
            if(i>0){
                //将待删除键值移到第一个位置
                for(int j=i;j>0;j--)
                    t->key[j]=t->key[j-1];
            }

            delete2_3_first(rt,t);
            return;
        }
    }

    //进入相应子树继续查找
    if(t->child[i]!=NULL)
        delete2_3(rt,t->child[i],key);
}
}
namespace ht{const int p[10]={2,3,5,7,11,13,17,19,23,29};

typedef struct htNode{
    int key;
    bool occupied;
    htNode *cn[29];

    htNode():key(0),occupied(false){
        for(int i=0;i<29;i++)
            cn[i]=NULL;
    }
}*hashTree;
int htree_search(hashTree ht,int k,int dep){
    if(ht==NULL) return 0;
    else if(ht->occupied && ht->key==k)
        return 1;
    else{
        if(dep>=10) return 0;
        int c=(k%p[dep]+p[dep])%p[dep];
        return htree_search(ht->cn[c],k,dep+1);
    }
}
//在散列树ht中插入键值k。插入成功,返回true;否则返回false
bool htree_insert(hashTree &ht,int k,int dep=0){
    if(ht==NULL) ht=new htNode;
    if(htree_search(ht,k,dep)) return false; //删除标记下方也可能已有同键
    if(ht->occupied==false){ //结点中的键值已被删除
        ht->key=k,ht->occupied=true;
        return true;
    }
    else if(ht->key==k) //ht中已存在键值为k的结点
        return false;

    if(dep>=10) return false;
    int c=(k%p[dep]+p[dep])%p[dep]; //下一个分支的编号
    if(ht->cn[c]==NULL){ //结点为空,创建新结点
        ht->cn[c]=new htNode;
        ht->cn[c]->key=k; ht->cn[c]->occupied=true; //occupied默认为true
        return true;
    }
    else
        return htree_insert(ht->cn[c],k,dep+1); //进入下一层
}
//删除散列树ht中的键值k。删除成功返回true,否则返回false
bool htree_delete(hashTree ht,int k,int dep=0){
    if(ht==NULL) return false;
    if(ht->occupied && ht->key==k){ //查找到键值k
        ht->occupied=false;
        return true;
    }
    if(dep>=10) return false;
    int c=(k%p[dep]+p[dep])%p[dep];
    return htree_delete(ht->cn[c],k,dep+1);
}}
namespace rb{enum color{RED,BLACK};
typedef struct rbNode{
    keytype key;
    color c; //当前结点的颜色
    rbNode *lc,*rc,*pa; //pa为指向当前结点父结点的指针
    rbNode():c(RED),lc(NULL),rc(NULL),pa(NULL){
    }
} *rbTree;
rbTree LL(rbTree A);
rbTree RR(rbTree A);

//设置颜色,最多可设置三个结点
void set_color(rbTree t1,color c1,rbTree t2=NULL,color c2=RED,rbTree t3=NULL,color c3=RED){
    if(t1) t1->c=c1;
    if(t2) t2->c=c2;
    if(t3) t3->c=c3;
}

//获取结点颜色,空结点视为黑色
color get_color(rbTree t){
    return t?t->c:BLACK;
}

//检查新插入结点C是否符合红黑树条件,不符合则调整结构和颜色
void adjust_color(rbTree &t,rbTree C){
    while(C!=t && get_color(C->pa)==RED){
        rbTree B=C->pa,A=B->pa;
        if(B==A->lc){ //父结点B是祖父结点A的左孩子
            rbTree U=A->rc; //U为叔叔结点
            if(get_color(U)==RED){
                set_color(B,BLACK,U,BLACK,A,RED);
                C=A; //向上继续检查
            }
            else{
                if(C==B->rc){
                    C=B;
                    RR(C); //先左旋,转为LL型
                }
                B=C->pa,A=B->pa;
                set_color(B,BLACK,A,RED);
                rbTree rt=LL(A); //右旋
                if(rt->pa==NULL) t=rt;
            }
        }
        else{ //父结点B是祖父结点A的右孩子
            rbTree U=A->lc;
            if(get_color(U)==RED){
                set_color(B,BLACK,U,BLACK,A,RED);
                C=A;
            }
            else{
                if(C==B->lc){
                    C=B;
                    LL(C); //先右旋,转为RR型
                }
                B=C->pa,A=B->pa;
                set_color(B,BLACK,A,RED);
                rbTree rt=RR(A); //左旋
                if(rt->pa==NULL) t=rt;
            }
        }
    }
    if(t) t->c=BLACK; //根结点始终为黑色
}

//向红黑树t中插入键值为k的结点,成功返回true,否则返回false
bool rbt_insert(rbTree &t,keytype k){
    rbTree C,pa=NULL,t1=t;
    while(t1){
        pa=t1;
        if(k<t1->key) t1=t1->lc;
        else if(k>t1->key) t1=t1->rc;
        else return false; //键值已存在
    }
    C=new rbNode,C->key=k; //新结点默认为红色
    C->pa=pa;
    if(pa==NULL) t=C; //插入根结点
    else if(k<pa->key) pa->lc=C;
    else pa->rc=C;
    adjust_color(t,C); //调整颜色和结构
    return true;
}


//红黑树的LL旋转操作,返回旋转后子树的根结点
rbTree LL(rbTree A){
    rbTree B=A->lc;
    A->lc=B->rc;
    if(A->lc) A->lc->pa=A;
    B->pa=A->pa;
    if(A->pa){
        if(A->pa->lc==A) A->pa->lc=B;
        else A->pa->rc=B;
    }
    B->rc=A,A->pa=B;
    return B;
}

//红黑树的RR旋转操作,返回旋转后子树的根结点
rbTree RR(rbTree A){
    rbTree B=A->rc;
    A->rc=B->lc;
    if(A->rc) A->rc->pa=A;
    B->pa=A->pa;
    if(A->pa){
        if(A->pa->lc==A) A->pa->lc=B;
        else A->pa->rc=B;
    }
    B->lc=A,A->pa=B;
    return B;
}

//红黑树的LR旋转操作,返回旋转后子树的根结点
rbTree LR(rbTree A){
    RR(A->lc); //RR旋转
    return LL(A); //LL旋转
}

//红黑树的RL旋转操作,返回旋转后子树的根结点
rbTree RL(rbTree A){
    LL(A->rc); //LL旋转
    return RR(A); //RR旋转
}

//删除黑结点后,从结点C开始调整红黑树
void check_color(rbTree &t,rbTree C,rbTree pa){
    while(C!=t && get_color(C)==BLACK){
        if(pa==NULL) break;
        if(C==pa->lc){ //C为左孩子
            rbTree S=pa->rc; //S为右兄弟
            if(get_color(S)==RED){
                set_color(S,BLACK,pa,RED);
                rbTree rt=RR(pa);
                if(rt->pa==NULL) t=rt;
                S=pa->rc;
            }
            if(get_color(S?S->lc:NULL)==BLACK && get_color(S?S->rc:NULL)==BLACK){
                set_color(S,RED);
                C=pa,pa=C->pa; //向上继续调整
            }
            else{
                if(get_color(S->rc)==BLACK){
                    set_color(S->lc,BLACK,S,RED);
                    rbTree rt=LL(S);
                    if(rt->pa==NULL) t=rt;
                    S=pa->rc;
                }
                S->c=pa->c;
                set_color(pa,BLACK,S->rc,BLACK);
                rbTree rt=RR(pa);
                if(rt->pa==NULL) t=rt;
                C=t;
                break;
            }
        }
        else{ //C为右孩子
            rbTree S=pa->lc; //S为左兄弟
            if(get_color(S)==RED){
                set_color(S,BLACK,pa,RED);
                rbTree rt=LL(pa);
                if(rt->pa==NULL) t=rt;
                S=pa->lc;
            }
            if(get_color(S?S->lc:NULL)==BLACK && get_color(S?S->rc:NULL)==BLACK){
                set_color(S,RED);
                C=pa,pa=C->pa;
            }
            else{
                if(get_color(S->lc)==BLACK){
                    set_color(S->rc,BLACK,S,RED);
                    rbTree rt=RR(S);
                    if(rt->pa==NULL) t=rt;
                    S=pa->lc;
                }
                S->c=pa->c;
                set_color(pa,BLACK,S->lc,BLACK);
                rbTree rt=LL(pa);
                if(rt->pa==NULL) t=rt;
                C=t;
                break;
            }
        }
    }
    set_color(C,BLACK);
    if(t) t->c=BLACK;
}

//删除红黑树t中键值为k的结点,成功返回true,否则返回false
bool rbt_delete(rbTree &t,keytype k){
    rbTree C=t;
    while(C && C->key!=k){
        if(k<C->key) C=C->lc;
        else C=C->rc;
    }
    if(C==NULL) return false; //未找到待删除结点
    if(C->lc && C->rc){ //有两个孩子
        rbTree tmp=C->rc;
        while(tmp->lc) tmp=tmp->lc; //寻找中序后继
        C->key=tmp->key; //用后继键值替换
        C=tmp; //实际删除后继结点
    }
    rbTree child=C->lc?C->lc:C->rc;
    rbTree pa=C->pa;
    color old=C->c;
    if(child) child->pa=pa;
    if(pa==NULL) t=child; //删除根结点
    else if(pa->lc==C) pa->lc=child;
    else pa->rc=child;
    delete C;
    if(old==BLACK) check_color(t,child,pa); //删除黑结点需要调整
    return true;
}
}
namespace tr{
#define BS 27 /* 字母的长度 */
typedef struct trieNode{
    trieNode *branch[BS];
    int cnt;
    trieNode():cnt(0){
        for(int i=0;i<BS;i++)
            branch[i]=NULL;
    }
}*trieTree;
//查找Trie树t中是否存在键值k。若存在,返回键值的数量,否则返回0
int trie_search(trieTree t,string k){
    if(t==NULL) return 0;
    for(char ch:k) if(ch<'a' || ch>'z') return 0;
    k+='S';
    int i,pos,sz=k.size();
    for(i=0;i<sz;i++){
        pos=k[i]!='S' ? k[i]-'a' : BS-1; //依次检查k的每一个字符
        if(t->branch[pos]==NULL) return 0; //查找失败
        t=t->branch[pos]; //进入下一个分支
    }
    if(t!=NULL) return t->cnt; //到达叶结点
    return 0;
}
//在Trie树t中插入一个键值k
void trie_insert(trieTree &t,string k){
    for(char ch:k) if(ch<'a' || ch>'z') return;
    if(t==NULL) t=new trieNode; //生成根结点
    k+='S';

    int i,pos,sz=k.size();
    trieTree tmp=t;
    for(i=0;i<sz;i++){
        tmp->cnt++; //字符串经过结点tmp,其cnt加1
        pos=k[i]!='S' ? k[i]-'a' : BS-1; //下一个分支的编号
        if(tmp->branch[pos]==NULL) //分支不存在,创建分支
            tmp->branch[pos]=new trieNode;
        tmp=tmp->branch[pos]; //进入下一分支
    }
    tmp->cnt++; //叶结点的cnt加1
}
//删除树t中的键值k。删除成功返回1,否则返回0。dep为当前所处的层数,succ标志是否删除成功
int trie_delete(trieTree &t,string k,int dep,int &succ){
    if(dep==0){
        succ=0;
        for(char ch:k) if(ch<'a' || ch>'z') return 0;
        k+='S';
    }
    if(t==NULL) return 0; //空树或不存在的分支
    int i,pos,ret;
    if(dep==k.size()){
        succ=1; return 1; //找到键值,删除成功
    }

    pos=k[dep]!='S' ? k[dep]-'a' : BS-1; //下一个分支的编号
    if(t->branch[pos]!=NULL){
        trieTree &tmp=t->branch[pos];
        ret=trie_delete(tmp,k,dep+1,succ); //进入下一个分支
        if(succ){
            if(--tmp->cnt==0) //回退时,如果删除成功,则调整结点的cnt
                delete tmp,tmp=NULL;
            if(dep==0 && --t->cnt==0) //根结点特别处理
                delete t,t=NULL;
        }
    }
    else{
        succ=0;
        return 0;
    }
    return ret;
}}

template<typename T> int valid_bst(T t, vector<int>&r,int lo=-1000000,int hi=1000000){if(!t)return 0;assert(t->key>lo&&t->key<hi);int n=valid_bst(t->lc,r,lo,t->key);r.push_back(t->key);return n+1+valid_bst(t->rc,r,t->key,hi);}
int valid_av(av::avlTree t){if(!t)return 0;int a=valid_av(t->lc),b=valid_av(t->rc);assert(abs(a-b)<=1&&t->h==max(a,b)+1);return t->h;}
int valid_rb(rb::rbTree t,rb::rbTree p=NULL){if(!t)return 1;assert(t->pa==p);if(t->c==rb::RED){assert(rb::get_color(t->lc)==rb::BLACK&&rb::get_color(t->rc)==rb::BLACK);}int a=valid_rb(t->lc,t),b=valid_rb(t->rc,t);assert(a==b);return a+(t->c==rb::BLACK);}
int valid_tt(tt::tree2_3 t,vector<int>&r,int dep=0,int lo=-1000000,int hi=1000000){if(!t)return dep;assert(t->num==1||t->num==2);int depth=-1;for(int i=0;i<t->num;i++){assert(t->key[i]>lo&&t->key[i]<hi);if(i)assert(t->key[i-1]<t->key[i]);if(t->child[0]){assert(t->child[i]&&t->child[i]->parent==t);int d=valid_tt(t->child[i],r,dep+1,i?t->key[i-1]:lo,t->key[i]);if(depth<0)depth=d;assert(depth==d);}else assert(!t->child[i]);r.push_back(t->key[i]);}if(t->child[0]){assert(t->child[t->num]&&t->child[t->num]->parent==t);int d=valid_tt(t->child[t->num],r,dep+1,t->key[t->num-1],hi);assert(depth==d);return depth;}assert(!t->child[t->num]);return dep;}
template<typename T>void clean(T t){if(!t)return;clean(t->lc);clean(t->rc);delete t;}
void clean_tt(tt::tree2_3 t){if(!t)return;for(int i=0;i<=t->num;i++)clean_tt(t->child[i]);delete t;}
void clean_ht(ht::hashTree t){if(!t)return;for(auto p:t->cn)clean_ht(p);delete t;}
void clean_tr(tr::trieTree t){if(!t)return;for(auto p:t->branch)clean_tr(p);delete t;}
int main(){mt19937 rng(88219);sp::splayTree a=NULL;bs::bstTree b=NULL;av::avlTree c=NULL;tt::tree2_3 d=NULL;ht::hashTree e=NULL;rb::rbTree f=NULL;set<int>s;
 for(int rep=0;rep<18000;rep++){int k=(int)(rng()%301)-150;int op=rng()%3;bool want;
 if(op==0){want=s.insert(k).second;assert(sp::splay_insert(a,k)==want);assert(bs::bst_insert(b,k)==want);assert(av::avl_insert(c,k)==want);tt::insert2_3(d,k);assert(ht::htree_insert(e,k)==want);assert(rb::rbt_insert(f,k)==want);}
 else if(op==1){want=s.erase(k);assert(sp::splay_delete(a,k)==want);assert(bs::bst_delete(b,k)==want);assert(av::avl_delete(c,k)==want);tt::delete2_3(d,d,k);assert(ht::htree_delete(e,k)==want);assert(rb::rbt_delete(f,k)==want);}
 else{want=s.count(k);assert((sp::splay_search(a,k)!=NULL)==want);assert((bs::bst_search(b,k)!=NULL)==want);assert(tt::search2_3(d,k)==want);assert(ht::htree_search(e,k,0)==want);}
 vector<int>expect(s.begin(),s.end()),r;valid_bst(a,r);assert(r==expect);r.clear();valid_bst(b,r);assert(r==expect);r.clear();valid_bst(c,r);assert(r==expect);valid_av(c);r.clear();valid_tt(d,r);assert(r==expect);if(d)assert(!d->parent);r.clear();valid_bst(f,r);assert(r==expect);if(f)assert(f->c==rb::BLACK);valid_rb(f);
 }
 clean(a);clean(b);clean(c);clean_tt(d);clean_ht(e);clean(f);
 tr::trieTree t=NULL;map<string,int>m;vector<string>keys={"","a","ab","abc","b","baba","zzz"};int succ=1;assert(tr::trie_delete(t,"x",0,succ)==0&&succ==0);assert(tr::trie_search(t,"")==0);
 for(int rep=0;rep<5000;rep++){string k=keys[rng()%keys.size()];if(rng()%2){tr::trie_insert(t,k);m[k]++;}else{bool want=m[k]>0;succ=1;assert(tr::trie_delete(t,k,0,succ)==want);assert(succ==want);if(want)m[k]--;}for(auto k:keys)assert(tr::trie_search(t,k)==m[k]);}clean_tr(t);
 cout<<"18000 randomized mixed operations against set: splay/BST/AVL/2-3/hash/RB; invariants and 5000 duplicate/empty Trie trials passed\n";
}
