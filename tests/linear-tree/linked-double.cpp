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
typedef struct dclNode{
datatype data;
dclNode * pre;
dclNode * next;
dclNode():pre(NULL),next(NULL){}
}* dchainList;
void dcl_insert_post(dchainList &p,datatype x){
    if(p==NULL) return;
    dchainList q=new dclNode,nxt=p->next;
    q->data=x;
    q->next=nxt;
    if(nxt!=NULL) nxt->pre=q;
    p->next=q;
    q->pre=p;
}
void dcl_insert_pre(dchainList &p, datatype x)
{
    if(p==NULL) return;
    dchainList q = new dclNode;
    dchainList pre = p->pre;

    q->data = x;
    q->next = p;
    q->pre = pre;
    p->pre = q;

    if(pre != NULL)
        pre->next = q;
    else
        p = q;
}
//创建双向链表，包含n个结点，结点数据存放在数组a中
void dcl_create(dchainList &h, datatype a[], int n)
{
    h=NULL;
    if(n<=0) return;
    h = new dclNode;     //构造第一个结点

    h->data = a[0];

    for(int i = n-1; i >= 1; i--)
    {
        dcl_insert_post(h, a[i]);
    }
}
//删除双向链表h中第一个值为x的结点
void dcl_delete(dchainList &h, datatype x)
{
    dchainList dcl = h;   
    //遍历双向链表，寻找第一个值为x的结点

    while(dcl != NULL)
    {
        if(dcl->data == x) break;
        dcl = dcl->next;
    }

    if(dcl == NULL) return;  
    //h中不存在值为x的结点

    dchainList pre = dcl->pre, nxt = dcl->next;
    //pre和nxt分别为被删除结点的直接前驱和直接后继

    if(pre != NULL)
        pre->next = nxt;
    //pre的后继改为nxt

    if(nxt != NULL)
        nxt->pre = pre;
    //nxt的前驱改为pre

    if(dcl == h)
        h = nxt;
    //如果删除的是第一个结点，则用其直接后继表示的双向链表

    delete dcl;dcl = NULL;
}
int main(){
dchainList h;int a[]={1,2,3};dcl_create(h,a,3);assert(h->data==1&&h->next->data==2&&h->next->next->data==3&&h->next->next->next==nullptr);dcl_delete(h,1);assert(h->data==2&&h->pre==nullptr);dcl_insert_pre(h,9);assert(h->data==9&&h->next->data==2);dchainList tail=h;while(tail->next)tail=tail->next;dcl_insert_post(tail,4);assert(tail->next->data==4);dcl_create(h,a,0);assert(h==nullptr);

}
