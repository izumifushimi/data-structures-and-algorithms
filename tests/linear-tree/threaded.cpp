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
using datatype=int;
typedef struct thNode{
datatype data;
thNode *lc,*rc;
bool ltag,rtag;
thNode():lc(NULL),rc(NULL),ltag(false),rtag(false){}
} * thTree;
//将左右链指针表示的二叉树t线索化，pre为树t根结点的中根序的直接前驱
void convert_to_thTree(thTree t,thTree &pre){
        if(t==NULL) return;
    convert_to_thTree(t->lc,pre);   //进入左子树
    if(t->lc!=NULL)		//t的左指针域是孩子结点
        t->ltag=false;
    else
        t->lc=pre,t->ltag=true;  //左指针就是线索
    if(pre->rc!=NULL)
        pre->rtag=false; 
    else
        pre->rtag=true,pre->rc=t;
    pre=t;		 //t的右子树中根序的第一个结点的直接前驱是t
    convert_to_thTree(t->rc,pre);
}
//将左右链表示的二叉树转化为带头结点的线索二叉树
void thTree_create(thTree &header,thTree t){
    thTree pre;
    header=new thNode;
    header->lc=header;
    header->rc=header;
    if(t==NULL){
        header->ltag=true;	//没有左孩子，所以只能设置为true
        return;
    }
    header->lc=t,header->ltag=false;
    header->rc=header,header->rtag=false;
    pre=header;  //原二叉树的中根序第一个结点的直接前驱为header
    convert_to_thTree(t,pre);
    pre->rtag=true,pre->rc=header;	//pre为中根序列的最后一个结点
}

thTree midNext(thTree t){
    thTree ret=t->rc;   //ret是t的右孩子
    if(t->rtag==false){ //不是线索
        while(ret->ltag==false)//查找t右子树的最左孩子结点
            ret=ret->lc; 
    }
    return ret;
}
thTree midpre(thTree t){
    thTree ret=t->lc;
    if(t->ltag==false){
    while(ret->rtag==false)
        ret=ret->rc;
}
    return ret;
}
void thTree_midOrder(thTree header){
    if(header==NULL || header->ltag==true) return;
    thTree t=header;
    do{
        t=midNext(t);
        if(t!=header) cout<<t->data;
    }while(t!=header);
    cout<<endl;
}
int main(){
thTree t=new thNode;t->data=2;t->lc=new thNode;t->lc->data=1;t->rc=new thNode;t->rc->data=3;thTree h;thTree_create(h,t);thTree p=midNext(h);assert(p->data==1);p=midNext(p);assert(p->data==2);p=midNext(p);assert(p->data==3);assert(midNext(p)==h);thTree empty;thTree_create(empty,nullptr);assert(empty->ltag&&empty->lc==empty&&empty->rc==empty);thTree_midOrder(empty);

}
