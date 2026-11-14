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
const int N=10;using datatype=int;
typedef struct slNode{ //取别名,slNode叫做seqList
    datatype data[N]; //顺序表，N为顺序表的元素数量上限
    int len;		
    slNode():len(0){	//构造函数，初始化len。len=0的操作不如len(0)
    }
}seqList;
void sl_insert(seqList &sl,int p,datatype x){
    if(sl.len>=N){
        cout<<"表满插入失败"<<endl;
        return;
    }
    if(p>=sl.len){
        sl.data[sl.len]=x;
    }else{
        if(p<0) p=0;
        for(int i=sl.len;i>p;i--)
            sl.data[i]=sl.data[i-1];
        sl.data[p]=x;
    }
    sl.len++;
}
void sl_pushback(seqList &sl,datatype x){
    if(sl.len>=N) return;
    sl.data[sl.len]=x;
    sl.len++;
}
int sl_search(seqList sl,int p,datatype x){
    if(p>=sl.len) return -1;
    for(int i=max(0,p);i<sl.len;i++){
        if(sl.data[i]==x) return i;
    }
    return -1;
}
void sl_delete(seqList &sl,int p){
    if(p>=sl.len || p<0 || sl.len==0){ //排除p的无效位置
        cout<<"删除失败！"<<endl;
        return;
    }
    for(int i=p;i<sl.len-1;i++){
        sl.data[i]=sl.data[i+1];
    }
    sl.len--;
}
void sl_erase(seqList &sl,datatype x){
    for(int i=0;i<sl.len;i++){
        if(sl.data[i]==x){
    for(int j=i;j<sl.len-1;j++){ //删除sl中位置为i的元素
        sl.data[j]=sl.data[j+1];
    }
             sl.len--;
    return ;
        }
    }
}
int main(){
seqList s;sl_insert(s,0,4);sl_insert(s,0,1);sl_insert(s,1,2);sl_pushback(s,5);assert(s.len==4);assert(s.data[0]==1&&s.data[1]==2&&s.data[2]==4&&s.data[3]==5);assert(sl_search(s,0,4)==2);assert(sl_search(s,0,8)==-1);sl_delete(s,1);assert(s.len==3&&s.data[1]==4);sl_erase(s,4);assert(s.len==2&&s.data[1]==5);while(s.len<N)sl_pushback(s,9);sl_pushback(s,10);assert(s.len==N);sl_delete(s,N-1);assert(s.len==N-1);

}
