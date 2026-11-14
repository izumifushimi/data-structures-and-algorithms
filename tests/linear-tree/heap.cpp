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
//完全二叉树转化为大顶堆
void heap_adjust(datatype heap[],int n,int cur){
    if(n<=0 || cur<0 || cur>=n) return;
    int i;
    datatype temp=heap[cur];
    while(i=2*cur+1,i<n){ //确保i是cur的左孩子
        if(i+1<n && heap[i+1]>heap[i]) i++; //保证heap[i]是较大的子结点
        if(heap[i]<=temp) break; //父节点大于所有子结点
        heap[cur] = heap[i]; //结点i的值更新父节点
        cur = i; //更新cur，接着向下比较
    }
    heap[cur] = temp; 
}

void heap_make(datatype heap[],int n){
    for(int i=n/2-1;i>=0;i--) //结点编号从0开始
        heap_adjust(heap,n,i);
}
void heap_push(datatype heap[],int &n,datatype k){
    int cur,pa;
    cur=n,n++; //cur指向新增加的结点，元素数+1
    while(cur>0){
        pa=(cur-1)/2; //父节点
        if(heap[pa]>=k) break; 
        heap[cur]=heap[pa]; //父节点小就下沉
        cur=pa; //当前结点指向父节点
    }
    heap[cur] = k; //最后赋值
}
void heap_pop(datatype heap[],int &n){
    if(n<=0) return;
    heap[0]=heap[n-1],n--;//用最后一个结点取代根结点
    if(n>0) heap_adjust(heap,n,0);
}
int main(){
int a[30]={3,1,8,9,2};int n=5;heap_make(a,n);assert(a[0]==9);heap_push(a,n,10);assert(a[0]==10);int old=100;while(n){assert(a[0]<=old);old=a[0];heap_pop(a,n);}heap_pop(a,n);assert(n==0);

}
