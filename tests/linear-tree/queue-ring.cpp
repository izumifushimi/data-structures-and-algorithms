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

typedef int datatype;
#define N 100
typedef struct sqNode{
datatype data [N];
int front;
int rear;
sqNode():front(0),rear(-1){}
}seqQueue;
#define next(x) ((x)==N-1?0:(x)+1)  
//判断是否是空的
bool empty(seqQueue sq){
    return next(sq.rear)==sq.front;
}
//判断是否满了
bool full(seqQueue sq){
    return next(next(sq.rear))==sq.front;//最后一个位置永远空着不给放
}
//入队
void push(seqQueue &sq,datatype x){
    if(full(sq)){
        return;
    }
    sq.rear=next(sq.rear);
    sq.data[sq.rear]=x;
}
//获取队头
datatype front(seqQueue sq){
    if(empty(sq)){
        return -1;
    }
    return sq.data[sq.front];
}
//出队，删掉队头
void pop(seqQueue &sq){
    if(empty(sq)){
        return;
    }
    sq.front=next(sq.front); 
}
//遍历并清空
void traverse(seqQueue &sq){
    while(!empty(sq)){
        cout<<front(sq)<<' ';
        pop(sq);       
    }
        cout<<endl;  
}
int main(){
seqQueue q;assert(empty(q));for(int i=0;i<N-1;i++)push(q,i);assert(full(q));push(q,999);for(int i=0;i<N-1;i++){assert(front(q)==i);pop(q);}assert(empty(q));for(int i=0;i<3;i++)push(q,i);ostringstream buf;auto *old=cout.rdbuf(buf.rdbuf());traverse(q);cout.rdbuf(old);assert(empty(q)&&buf.str()=="0 1 2 \n");

}
