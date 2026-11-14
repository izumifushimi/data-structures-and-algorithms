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
map<char,int>pri; //存放优先级
typedef struct rpnNode{
bool tag;//true表示操作数，false表示运算符
union{ //共用一块内存的集合体
int v;//操作数
char op;//运算符
}data;//这个集合体叫data，也就是表达式
} rpn[N]; //数组
//pri 在上一代码块中声明；仅处理合法二元 + - * / 与圆括号
void shuntingYard(string infix,rpn &postfix,int &n){
    pri['+']=pri['-']=1;
    pri['*']=pri['/']=2;
    n=0;
    stack<char> stk;
    for(int i=0;i<(int)infix.length();i++){
        if(isspace(static_cast<unsigned char>(infix[i]))) continue;
        if(isdigit(static_cast<unsigned char>(infix[i]))){
            int num=0;
            while(i<(int)infix.length() && isdigit(static_cast<unsigned char>(infix[i])))
                num=num*10+infix[i++]-'0';
            if(n>=N) throw std::length_error("逆波兰数组容量不足");
            postfix[n].tag=true;
            postfix[n++].data.v=num;
            --i;
        }else if(infix[i]=='('){
            stk.push('(');
        }else{
            char op=infix[i];
            if(op!=')' && op!='+' && op!='-' && op!='*' && op!='/')
                throw std::invalid_argument("不支持的运算符");
            while(!stk.empty() && stk.top()!='(' &&
                  (op==')' || pri[stk.top()]>=pri[op])){
                if(n>=N) throw std::length_error("逆波兰数组容量不足");
                postfix[n].tag=false;
                postfix[n++].data.op=stk.top();
                stk.pop();
            }
            if(op==')'){
                if(stk.empty()) throw std::invalid_argument("括号不匹配");
                stk.pop();
            }else stk.push(op);
        }
    }
    while(!stk.empty()){
        if(stk.top()=='(') throw std::invalid_argument("括号不匹配");
        if(n>=N) throw std::length_error("逆波兰数组容量不足");
        postfix[n].tag=false;
        postfix[n++].data.op=stk.top();
        stk.pop();
    }
}
int main(){
rpn p;int n;shuntingYard("12 + 3 * (4-2)",p,n);assert(n==7);string s;for(int i=0;i<n;i++)s+=p[i].tag?to_string(p[i].data.v)+" ":string(1,p[i].data.op)+" ";assert(s=="12 3 4 2 - * + ");shuntingYard("8/4/2",p,n);assert(n==5&&p[2].data.op=='/'&&p[4].data.op=='/');

}
