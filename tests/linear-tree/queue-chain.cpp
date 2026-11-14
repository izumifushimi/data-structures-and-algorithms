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
} * cqNode;
struct chainQueue{
cqNode front;
cqNode rear;
chainQueue():front(NULL),rear(NULL){}
};
//判断是否为空
bool empty(chainQueue cq){
    return cq.front==NULL;
}
//入队
void push(chainQueue &cq,datatype x){
    cqNode temp=new clNode;
    temp->data=x;
    temp->next=NULL;
    if(empty(cq)){ //如果是空的
        cq.front=new clNode; //创建头结点
        cq.front->next=temp; 
    }
    else{
        cq.rear->next=temp; //放在当前队尾后面
            }
    cq.rear=temp; //队尾变成新的结点
}
//获取队头x的值
datatype front(chainQueue cq){
    if(empty(cq)){
        cout<<"空的"<<endl;
        return -1;
    }
    else{
        return cq.front->next->data;
    }
}

//出队,删除队头
void pop(chainQueue &cq){
    if(empty(cq)){
        cout<<"空的"<<endl;
        return;
    }
    cqNode temp=cq.front->next;//定义队头结点
    cq.front->next=temp->next;
    delete temp;temp=NULL;
    if(cq.front->next==NULL){//如果空了
        delete cq.front;cq.front=NULL;//删掉队头
        cq.rear=NULL;//删掉队尾
    }
}
//遍历,同时清空链队列
void traserve(chainQueue &cq){
    while(!empty(cq)){
        cout<<front(cq)<<"";
        pop(cq);
    }
    cout<<endl;
}
int main(){
chainQueue q;assert(empty(q));push(q,1);push(q,2);assert(front(q)==1);pop(q);assert(front(q)==2);pop(q);assert(empty(q)&&q.rear==nullptr);push(q,3);assert(front(q)==3);

}
