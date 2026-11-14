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
const int N=100;
using datatype=int;
struct SeqList{int data[N];int len=0;};
struct clNode{clNode *pre=nullptr,*next=nullptr;int data=0;};
using ChainList=clNode*;
using dChainList=ChainList;
int sl_research(SeqList sl,int left,int right,datatype x){
    if(left<0 || right>sl.len || left>right) return -1;
    for(int i=left;i<right;i++){
        if(sl.data[i]==x) return i;
    }
    return -1;
}
int sl_delete(SeqList &sl,int left,int right){
    if(left<0 || right>sl.len || left>right) return -1;
    int len = right-left;
    for(int i=right;i<sl.len;i++){
        sl.data[i-len]=sl.data[i];
    }
    sl.len-=len;
    return 1;
}
ChainList cl_search(ChainList h,datatype x,int &ord){
    ord=1;
    if(h==NULL) return NULL;
    while(h->next!=NULL && h->next->data!=x){
        h=h->next;
        ord++;
    }
    if(h->next!=NULL&&h->next->data==x){
        return h->next;
    }
    return NULL;
}
void cl_insert(ChainList h,datatype x1,datatype x2){
    if(h==NULL) return;
    while(h->next!=NULL&&h->next->data!=x1){
        h=h->next;
    }
    if(h->next!=NULL){
        ChainList p = new clNode;
        p->data = x2;
        p->next = h->next->next;
        p->pre = h->next;
        if(p->next!=NULL) p->next->pre=p;
        h->next->next = p;
    }
    else{
        ChainList p = new clNode;
        p->data = x2;
        p->next = NULL;
        h->next = p;
        p->pre = h;
    }
}
void cl_delete(ChainList h, datatype x){
    if(h==NULL) return;
    h = h->next;
    while(h != NULL){
        if(h->data == x){
            ChainList p = h;
            if(h==NULL) return;
    h = h->next;
            p->pre->next = p->next;
            if(p->next != NULL){
                p->next->pre = p->pre;
            }
            delete p;
        }
        else{
            if(h==NULL) return;
    h = h->next;
        }
    }
}
void merge(SeqList sl1,SeqList sl2,SeqList &sl){
    if(sl1.len+sl2.len>N) return;
    int i = 0, j = 0, k = 0;
    while (i < sl1.len && j < sl2.len) {
        if (sl1.data[i] <= sl2.data[j])
            sl.data[k++] = sl1.data[i++];
        else
            sl.data[k++] = sl2.data[j++];
    }
    while (i < sl1.len) sl.data[k++] = sl1.data[i++];
    while (j < sl2.len) sl.data[k++] = sl2.data[j++];
    sl.len = k;
}
//把两个带头结点的双向链表依次复制到新表 cl
void merge(ChainList cl1,ChainList cl2,ChainList &cl){
    cl=new clNode;
    ChainList tail=cl;
    ChainList lists[2]={cl1,cl2};
    for(int i=0;i<2;i++){
        ChainList p=lists[i]==NULL?NULL:lists[i]->next;
        while(p!=NULL){
            tail->next=new clNode;
            tail->next->data=p->data;
            tail->next->pre=tail;
            tail=tail->next;
            p=p->next;
        }
    }
}
void cl_unique(ChainList h){
    if(h==NULL) return;
    ChainList p = h->next;
    while(p!=NULL&&p->next!=NULL){
        if(p->next->data==p->data){
           ChainList q = p->next;
            p->next = q->next;
            if(q->next!=NULL)
            q->next->pre = p;
            delete q;q=NULL;
        }
        else{
            p=p->next;
        }
    }
}
//带头结点的循环双向链表，按原位置奇偶拆成两个循环双向链表
void rcl_split(ChainList h, ChainList &h1, ChainList &h2){
    h1=new clNode;
    h2=new clNode;
    h1->next=h1;h1->pre=h1;
    h2->next=h2;h2->pre=h2;
    if(h==NULL) return;
    int pos=1;
    while(h->next!=h){
        ChainList q=h->next;
        h->next=q->next;
        q->next->pre=h;
        ChainList dst=(pos%2==1)?h1:h2;
        q->next=dst->next;
        q->pre=dst;
        dst->next->pre=q;
        dst->next=q;
        pos++;
    }
    h->pre=h;
}
bool dcl_swap(dChainList &h,datatype x){
    if(h==NULL) return false;
    dChainList p=h->next;
    while(p!=NULL && p->data!=x) p=p->next;
    if(p==NULL || p->pre==h) return false;
    dChainList pre=p->pre;
    pre->pre->next=p;
    pre->next=p->next;
    if(p->next!=NULL) p->next->pre=pre;
    p->pre=pre->pre;
    p->next=pre;
    pre->pre=p;
    return true;
}
void rcl_delete_pre(ChainList &p){
    if(p==NULL || p->next==NULL) return;
    else if(p->next==p){
        delete p;p=NULL;
        return;
    }
    else if(p->next->next==p){
        ChainList q = p->pre;
        p->pre=p;
        p->next=p;
        delete q;q=NULL;
        return;
    }
    else{
        ChainList q = p->pre;
        q->pre->next=p;
        p->pre=q->pre;
        delete q;q=NULL;
        return;
    }
}
bool pal(string str){
    stack<char> ss;
    for(int i=0;i<(int)str.size();i++) ss.push(str[i]);
    for(int j=0;j<(int)str.size();j++){
        if(str[j]!=ss.top()) return false;
        ss.pop();
    }
    return true;
}
bool check(string exp){
    stack<char> ss;
    for(int i=0;i<exp.size();i++){
        if(exp[i]=='('||exp[i]=='['||exp[i]=='{') ss.push(exp[i]);
        else{
            if(exp[i]!=')'&&exp[i]!=']'&&exp[i]!='}') continue;
            if(ss.empty()) return false;
            char ch = ss.top();
            if(exp[i]==')'&&ch!='(' || exp[i]==']'&&ch!='[' || exp[i]=='}'&&ch!='{') return false;
            ss.pop();
        }
    }
    if(!ss.empty()) return false;
    return true;
    
}
string convert(int num,int k){
    if(k<2 || k>36) return "";
    if(num==0) return "0";
    stack<char> ss;
    long long value=num;
    bool negative=value<0;
    if(negative) value=-value;
    while(value!=0){
        int r=value%k;
        char ch=(r<10)?'0'+r:'A'+r-10;
        ss.push(ch);
        value/=k;
    }
    string res=negative?"-":"";
    while(!ss.empty()){
        res+=ss.top();
        ss.pop();
    }
    return res;
}
void f(int h[],int s[],int n){
stack<int> st;
for (int i = 1; i <= n; i++) {
        while (!st.empty() && h[st.top()] < h[i]) {
            st.pop();
        }

        if (st.empty()) {
            s[i] = i - 1;
        } else {
            int j = st.top();
            s[i] = i - j - 1;
        }

        st.push(i);
    }
}
int main(){
SeqList s;s.len=5;for(int i=0;i<5;i++)s.data[i]=i;assert(sl_research(s,0,5,4)==4);assert(sl_research(s,-1,5,1)==-1);assert(sl_research(s,0,5,8)==-1);assert(sl_delete(s,1,3)==1&&s.len==3&&s.data[1]==3);
ChainList h=new clNode;cl_insert(h,0,1);cl_insert(h,1,3);cl_insert(h,1,2);assert(h->next->data==1&&h->next->next->data==2&&h->next->next->next->data==3);assert(h->next->next->next->pre==h->next->next);assert(dcl_swap(h,3));assert(h->next->next->data==3&&h->next->next->next->data==2);assert(!dcl_swap(h,8));cl_insert(h,2,2);cl_unique(h);assert(h->next->next->next->next==nullptr);cl_delete(h,3);assert(h->next->next->data==2);assert(cl_search(nullptr,0,s.len)==nullptr);
ChainList c=nullptr;merge(h,h,c);assert(c->next->data==1&&c->next->next->data==2&&c->next->next->next->data==1);
ChainList ring=new clNode;ring->next=ring;ring->pre=ring;for(int i=4;i>=1;i--){auto q=new clNode;q->data=i;q->next=ring->next;q->pre=ring;ring->next->pre=q;ring->next=q;}ChainList h1,h2;rcl_split(ring,h1,h2);assert(ring->next==ring&&ring->pre==ring);assert(h1->next->data==3&&h1->next->next->data==1&&h1->pre->data==1);assert(h2->next->data==4&&h2->next->next->data==2);
assert(pal("")&&pal("aba")&&!pal("ab"));assert(check("a[(x)]")&&!check("([)]")&&!check("("));assert(convert(0,2)=="0"&&convert(35,36)=="Z"&&convert(-16,16)=="-10"&&convert(-2147483648,10)=="-2147483648"&&convert(1,1).empty());int a[5]={0,3,1,2,4},v[5];f(a,v,4);assert(v[1]==0&&v[2]==0&&v[3]==1&&v[4]==3);

}
