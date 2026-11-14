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

#define M 20
typedef char datatype;
typedef struct hutNode{
datatype data;
int w,idx;//w是当前结点的权重，idx表示当前结点在树中的下标
int lc,rc;
bool operator<(const hutNode &hn)const{
return w>hn.w;  //为了使huTree类型的优先队列中权重小的优先级高
}
}huTree[M<<1]; //由m个叶结点构造的哈夫曼树有2m-1个结点
//m是叶结点数量，data是叶结点的数据信息，w是权重
void huTree_create(huTree &t,const datatype data[],int w[],int m){
    if(m<=0 || m>M) throw std::invalid_argument("叶结点数量越界");
    int i;
    hutNode hn1,hn2,hn3;
    priority_queue<hutNode>f; //用优先队列存放结点集合
    for(i=1;i<=m;i++){ 	//初始化m个叶结点
        t[i].data=data[i-1],t[i].w=w[i-1],t[i].idx=i;//因为t数组规定从1开始，data数组是0开始
        t[i].lc=-1,t[i].rc=-1;
        f.push(t[i]);
            }
    while(f.size()>1){
        hn1=f.top(),f.pop();
        hn2=f.top(),f.pop();
        hn3.w=hn1.w+hn2.w,hn3.idx=i;
        hn3.lc=hn1.idx,hn3.rc=hn2.idx;
        f.push(hn3);
        t[i++]=hn3;
    }
    t[0]=f.top(),t[0].idx=0;
}
//利用哈夫曼树t对每个叶结点编码，编码存放在参数code中
void huTree_coding(huTree t,int cur,map<char,string>&code){//map是一种映射，每一个char存储对应一个字符串
    static string temp;
    if(cur==0) temp.clear();
    if(t[cur].lc==-1){			//到达叶结点，保存编码
        code[t[cur].data]=temp.empty()?"0":temp; 	
        return;
    }
    temp+='0';	//左分支路径标注为0
    huTree_coding(t,t[cur].lc,code);
    temp.erase(temp.length()-1);//删掉添加的一步
    temp+='1'; 	//右分支路径标注为1
    huTree_coding(t,t[cur].rc,code);
    temp.erase(temp.length()-1);
}
string coding(huTree &t,string txt){
    if(txt.empty()) return "";
    int w[M],m=0,len=txt.length(),i;        //m为txt中不同字符的数量
    char data[M];                           //txt中出现的字符
    map<char,int> freq;                        //字符出现的次数
    //统计每个字符出现的次数
    for(i=0;i<len;i++) freq[txt[i]]++;
    if(freq.size()>M) throw std::length_error("不同字符数量超过 M");
    for(map<char,int>::iterator it=freq.begin();it!=freq.end();it++)
        data[m]=it->first,w[m]=it->second,++m; //转存
    huTree_create(t,data,w,m);               //创建哈夫曼树
    map<char,string>code;
    huTree_coding(t,0,code);                 //获得每个字符的编码
    string ret;                              //存放编码结果
    for(i=0;i<len;i++)                       //求txt的编码
        ret+=code[txt[i]];
    return ret;
}
string huTree_decoding(huTree t,string code){
    string ret;
    if(t[0].lc==-1){ //单字符字母表，约定每个字符编码为 0
        for(char bit:code){
            if(bit!='0') throw std::invalid_argument("非法哈夫曼编码");
            ret+=t[0].data;
        }
        return ret;
    }
    hutNode cur=t[0];
    for(int i=0;i<(int)code.length();i++){
        if(code[i]!='0' && code[i]!='1')
            throw std::invalid_argument("编码必须为 0 或 1");
        cur=t[code[i]=='0'?cur.lc:cur.rc];
        if(cur.lc==-1){
            ret+=cur.data;
            cur=t[0];
        }
    }
    if(cur.idx!=0) throw std::invalid_argument("编码在非叶结点处截断");
    return ret;
}
int main(){
for(string txt:{"a","aaaaa","ab","abracadabra","hello world","abcdefghijklmnopqrst"}){huTree t;string c=coding(t,txt);assert(!c.empty());assert(huTree_decoding(t,c)==txt);}huTree t;assert(coding(t,"").empty());

}
