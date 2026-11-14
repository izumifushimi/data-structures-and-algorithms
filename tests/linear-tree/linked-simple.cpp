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
typedef struct clNode{
datatype data;
clNode * next;
clNode(): next(NULL){}

}*chainList; //chainlist指向头链表标志第一个结点位置
void cl_traverse(chainList h){
    if(h==NULL) return;
    h = h->next;	//初始让h指向链表的第一个结点，h指向的是头结点，头结点通常不存放有效数据
    while(h!=NULL){
        cout<<h->data<<"";
        h=h->next; //h指向下一个结点
    }
    cout<<endl;
    
}
chainList cl_search(chainList h,datatype x){
    if(h==NULL) return NULL;
    h=h->next;//初始化h
    while(h!=NULL){
        if(h->data==x) return h; //找到结点
        h = h->next;
    }
    return NULL; //循环结束还没找到就返回NUll
} 
//在p后面插入数据域为x的结点
void cl_insert(chainList p,datatype x){
    if(p==NULL) return;
    chainList q = new clNode;
    if(q == NULL){
        cout<<"插入失败"<<endl;
        return;
    }
    q->data=x;
    q->next=p->next; //定义q的后继
    p->next=q;//确保q是p的后继
}
//删除结点p的直接后继
void cl_delete(chainList p){
    if(p==NULL) return; //如果p本身就不存在
    chainList q = p->next;//q是p的直接后继
    if(q==NULL) return; //p是表尾
    p->next = q->next;
    delete q;q=NULL; 
}
void cl_destroy(chainList &h){
    if(h==NULL) return;
    while(h->next!=NULL){
        cl_delete(h);
    }
    delete h;h=NULL;//删除头结点自身
}
//在结点p的后面插入一个值为x的结点

void rcl_insert(chainList &p, datatype x)
{
    chainList q = new clNode;        //创建新结点

    if(q == NULL)
    {
        cout<<"结点失败!"<<endl;
        return;
    }

    q->data = x;

    if(p == NULL)
    {
        q->next = q;                 //当前链表为空

        p = q;
    }
    else
    {
        q->next = p->next;
        p->next = q;                 //重新定义x和p的链接
    }
}
//创建循环链表h，共有n个结点，每一个结点的数据域存放在数组a中
void rcl_creater(chainList &h, datatype a[], int n)
{
    h=NULL;
    if(n<=0) return;
    rcl_insert(h, a[n-1]);             
    //先构建最后一个结点

    for(int i = n-2; i >= 0; i--)
    {
        cl_insert(h, a[i]);
    }
    //将数组a的元素从后向前依次插入链表中
}
//删除循环链表中p的直接后继
void rcl_delete(chainList &p)
{
    if(p == NULL) return;

    chainList q = p->next;

    if(p == q)
    {
        delete p;
        p = NULL;
        return;
    }
    //只有一个结点时，删除后变为空链表


    p->next = q->next;
    //重新定义p的链域

    delete q;
    q = NULL;
    //释放q所占用的存储空间
}
//删除循环链表h中的所有结点
void rcl_destroy(chainList &h)
{
    while(h != NULL)
    {
        rcl_delete(h);
    }
}
int main(){
chainList h=nullptr;int a[]={1,2,3};rcl_creater(h,a,3);assert(h->data==3&&h->next->data==1&&h->next->next->data==2);rcl_destroy(h);assert(h==nullptr);cl_destroy(h);rcl_creater(h,a,0);assert(h==nullptr);

}
