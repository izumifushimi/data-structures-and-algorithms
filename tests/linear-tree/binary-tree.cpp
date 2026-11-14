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
typedef char datatype;
typedef struct lrpNode{
datatype data;
lrpNode *lc,*rc;
lrpNode():lc(NULL),rc(NULL){}
} * lrpTree;
//创建二叉树
lrpTree create_lrpTree(datatype data,lrpTree lc,lrpTree rc){
    lrpTree temp = new lrpNode;
    temp->data = data;
    temp->lc = lc;
    temp->rc = rc;
    return temp;
}
typedef char datatype;
typedef struct lraNode{
datatype data;
int lc,rc;
} lraTree[N];
int create_lraTree(lraTree t,datatype data,int &idx,int lc=-1,int rc=-1){
    t[idx].data = data;
    t[idx].lc = lc;
    t[idx].rc = rc;
    return idx++;
}
void preOrder(lrpTree t){
    if(t==NULL) return;
    cout<<t->data;
    preOrder(t->lc);
    preOrder(t->rc);
}
lrpTree create_lrpTree(string str,int &idx){
    lrpTree ret;
    if(idx<0 || idx>=(int)str.size()) return NULL;
    if(str[idx]=='#'){ 
        idx++;
        return NULL;
    }
    ret = new lrpNode;
    ret->data = str[idx++];
    ret->lc = create_lrpTree(str,idx);
    ret->rc = create_lrpTree(str,idx);
    return ret;
}
void midOrder(lrpTree rt){
    if(rt==NULL) return;
    midOrder(rt->lc);
    cout<<rt->data;
    midOrder(rt->rc);
}
string convertToBracket(lrpTree t){
    if(t==NULL) return "";
    return "("+convertToBracket(t->lc)+t->data+convertToBracket(t->rc)+")";
}
lrpTree convertToTree(string b){
    lrpTree rt,lc,rc;
    if(b.size()<=2) return NULL; //因为一个完整的树必定至少一个结点和左右括号
    stack<lrpTree>stk;
    for(int i=0;i<b.size();i++){
        if(b[i]=='(') continue; //跳过左括号
        else if(b[i] == ')'){
            rc=stk.top();stk.pop();
            rt=stk.top();stk.pop();
            lc=stk.top();stk.pop();
            rt->lc=lc,rt->rc=rc;
            stk.push(rt);  //新的子树入队
        }
        else{
            if(b[i-1] =='(') stk.push(NULL);
            rt = new lrpNode;
            rt->data = b[i],stk.push(rt);
            if(b[i+1]==')') stk.push(NULL);
        }
    }
    return stk.top();
}
void postOrder(lrpTree rt){
    if(rt==NULL) return;
    postOrder(rt->lc);
    postOrder(rt->rc);
    cout<<rt->data;
}
string postOrder(string b){
    string ret;
    stack<char>stk;
    for(int i = 0; i < b.size(); i++){
        if(b[i] != ')'){
            stk.push(b[i]);
        }
        else{
            while(!stk.empty() && stk.top() != '('){
                ret += stk.top();
                stk.pop();
            }
            if(!stk.empty())
                stk.pop(); 
        }
    }
    return ret;
}
int main(){
int i=0;auto t=create_lrpTree("BA##C##",i);assert(t->data=='B'&&t->lc->data=='A'&&t->rc->data=='C');string s=convertToBracket(t);assert(s=="((A)B(C))");auto t1=convertToTree(s);assert(convertToBracket(t1)==s);assert(postOrder(s)=="ACB");

}
