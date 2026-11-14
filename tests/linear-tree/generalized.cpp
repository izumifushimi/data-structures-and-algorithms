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

typedef char datatype;
typedef struct gtNode{
    bool tag;	//标签
    union{		 //表示ele同一块内存同时存放data和link两种数据类型
    datatype data;
    gtNode * link;
    } ele;
gtNode * next;
gtNode():tag(false),next(NULL){} //初始化tag为false即创建的结点默认为原子
} * gTable;
//在结点gt后面插入一个原子，原子的值为x
void gt_insert(gTable &gt,datatype x){
    if(gt==NULL) gt=new gtNode;	
    gTable temp = new gtNode;
    temp->ele.data=x;	//temp->tag默认为false所以不需要写
    temp->next=gt->next;	
    gt->next=temp;
}

//在结点gt的后面插入一个子表gt1
void gt_insert(gTable &gt,gTable gt1){
    if(gt==NULL) gt =new gtNode;
    gTable temp = new gtNode;
    temp->tag=true,temp->ele.link=gt1;
    temp->next=gt->next;	
    gt->next=temp;
}
//遍历广义表,不适合递归广义表因为会出现循环
void gt_traverse(gTable gt){
    if(gt==NULL) return;
    gt=gt->next;  //跳过头结点指向第一个数据结点
    while(gt!=NULL){
        if(gt->tag == false) cout<<gt->ele.data<<' '; //输出原子
        else{
            cout<<endl<<"子表:"; 
            gt_traverse(gt->ele.link);    //遍历子表
            cout<<endl;
        }
        if(gt==NULL) return;
    gt=gt->next;
    }
}
bool gt_equal(gTable gt1,gTable gt2){
    gTable p=gt1==NULL?NULL:gt1->next;
    gTable q=gt2==NULL?NULL:gt2->next;
    while(p!=NULL && q!=NULL){
        if(p->tag!=q->tag) return false;
        if(!p->tag){
            if(p->ele.data!=q->ele.data) return false;
        }else if(!gt_equal(p->ele.link,q->ele.link)){
            return false;
        }
        p=p->next;q=q->next;
    }
    return p==NULL && q==NULL;
}
int main(){
gTable a=nullptr,b=nullptr;gt_insert(a,'a');gt_insert(a,'b');gt_insert(b,'a');gt_insert(b,'b');assert(gt_equal(a,b));gTable x=nullptr,y=nullptr;gt_insert(x,'x');gt_insert(y,'x');gt_insert(a,x);gt_insert(b,y);assert(gt_equal(a,b));gt_insert(a,'z');assert(!gt_equal(a,b));assert(gt_equal(nullptr,nullptr));

}
