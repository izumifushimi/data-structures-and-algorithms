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

#define M 5
typedef struct csNode{
char data[M+1]; //串里面定义为字符类型，元素数设置为M+1保证最后一个元素始终为\0
csNode * pre;
csNode * next;
csNode():pre(NULL),next(NULL){
    for(int i=0;i<=M;i++) data[i]='\0';//data元素初始化为\0
}
} * chainString;
//在结点cs后面插入结点cs1
void cs_insert_post(chainString &cs,chainString cs1){
    if(cs1==NULL) return;
    if(cs==NULL){		//如果cs为空则cs1覆盖cs
    cs=cs1;
    cs->next=cs,cs->pre=cs; //next和pre都指向自己满足循环
    return;
}
    chainString nxt=cs->next;
    cs1->next=nxt,nxt->pre=cs1;
    cs->next=cs1,cs1->pre=cs;
    return;
}
//将字符串str放入链串，结果作为返回值
chainString cs_assign(const char *str){
        if(str==NULL || *str=='\0') return NULL;
        chainString ret=NULL,temp =new csNode;
        if(temp==NULL) return NULL;
        int sz=strlen(str),i,j,k=(sz-1)/M*M; //k表示能够装满完整链串结点的字符总数
        for(i=0;i<min(sz,M);i++){ //构建第一个结点
            temp->data[i]=str[i]; 
        }
        cs_insert_post(ret,temp); //把temp插到ret
    for(j=k;j>=M;j-=M){   //从后往前构建结点并插入第一个结点后面
        temp=new csNode; 
        for(i=j;i<min(j+M,sz);i++){
            temp->data[i-j]=str[i];
        }
        cs_insert_post(ret,temp);
    }
    return ret;
    }

//遍历链串cs，输出cs所表示的字符串
void cs_traverse(chainString cs){
    if(cs==NULL) return;
    chainString cs1=cs;     //定义1个移动指针，从头指针开始
    do{						// do...while，它不是先判断条件，而是：先执行一次循环体，再判断条件。
        cout<<cs1->data;
        cs1=cs1->next;
    }while(cs1!=cs); //因为是循环链表，当cs1重新回到头指针时，不在循环
    cout<<endl;
}
//删除循环链串 cs 中下标为 idx 的字符（从 0 开始）
bool cs_delete(chainString &cs,int idx){
    if(cs==NULL || idx<0) return false;
    int i=0,j,len;
    chainString cs1=cs;
    do{
        len=strlen(cs1->data);
        if(i+len<=idx){
            i+=len;
            cs1=cs1->next;
        }else{
            for(j=idx-i;j<len;j++)
                cs1->data[j]=cs1->data[j+1]; //包括结尾的 '\0'
            if(len==1){
                if(cs1->next==cs1){
                    delete cs1;
                    cs=NULL;
                }else{
                    chainString pre=cs1->pre,nxt=cs1->next;
                    pre->next=nxt;
                    nxt->pre=pre;
                    if(cs1==cs) cs=nxt;
                    delete cs1;
                }
            }
            return true;
        }
    }while(cs1!=cs);
    return false;
}
int cs_compare(chainString cs1,chainString cs2){
    int i=0,j=0;
    chainString h1=cs1,h2=cs2;
    while(true){
        while(cs1!=NULL && cs1->data[i]=='\0'){
            cs1=cs1->next;
            i=0;
            if(cs1==h1) cs1=NULL;
        }
        while(cs2!=NULL && cs2->data[j]=='\0'){
            cs2=cs2->next;
            j=0;
            if(cs2==h2) cs2=NULL;
        }
        if(cs1==NULL && cs2==NULL) return 0;
        if(cs1==NULL) return -1;
        if(cs2==NULL) return 1;
        unsigned char a=cs1->data[i],b=cs2->data[j];
        if(a>b) return 1;
        if(a<b) return -1;
        ++i;++j;
    }
}
int main(){
vector<string> texts={"","a","abcde","abcdef","abcdefghij","abcdefghijk","abc","abd"};
for(auto a:texts)for(auto b:texts){auto x=cs_assign(a.c_str()),y=cs_assign(b.c_str());int got=cs_compare(x,y),exp=(a>b)-(a<b);assert(got==exp);}
for(auto a:texts){auto x=cs_assign(a.c_str());assert(!cs_delete(x,-1));assert(!cs_delete(x,(int)a.size()));while(!a.empty()){int i=(int)a.size()/2;assert(cs_delete(x,i));a.erase(i,1);auto y=cs_assign(a.c_str());assert(cs_compare(x,y)==0);}assert(x==nullptr);}

}
