#include <iostream>
#include <vector>
#include <queue>
#include <stack>
#include <set>
#include <map>
#include <algorithm>
#include <string>
#include <cstring>
#include <cmath>
#include <cstdlib>
#include <cassert>
#include <random>
#include <climits>
#include <functional>
using namespace std;
using keytype=int; using datatype=int;
const int N=1024, vNum=128,eNum=5000, INF=1000000000;
struct edge{int v,w;edge(int v1,int w1):v(v1),w(w1){}};
#include <sstream>
int main(){

map<string,int> ma; //定义一个map类型的变量,key的类型为string,value的类型为int
ma.insert(make_pair("Nanjing",10001)); //插入元素方法1
ma.insert(pair<string,int>("Beijing",10002)); //插入元素方法2
ma.insert(map<string,int>::value_type("Hangzhou",10003)); //插入元素方法3
ma["Shanghai"]=10004; //如果key存在,通过key改变value;否则添加一个元素
cout<<ma.size()<<' '<<ma.max_size()<<endl; //输出元素个数和最多可存储元素个数

cout<<ma["Nanjing"]<<endl; //通过key直接访问value
//遍历所有元素,按key的值由小到大逐个遍历
for(map<string,int>::iterator it=ma.begin();it!=ma.end();it++)
    cout<<it->first<<' '<<it->second<<endl;

cout<<ma.erase("Hangzhou")<<endl; //删除一个元素,存在返回1,否则返回0
map<string,int>::iterator it=ma.find("Shanghai"); //按键值查找一个元素
ma.erase(it); //删除迭代器所指向的元素
auto lo=ma.lower_bound("Nanjing");
if(lo!=ma.end()) cout<<lo->second<<endl;
auto hi=ma.upper_bound("Nanjing");
if(hi!=ma.end()) cout<<hi->second<<endl; //可能为 end，不能直接解引用
ma.clear(); //清空


set<string> se;
se.insert("Nanjing");
se.insert("Beijing");
se.insert("Shanghai");
cout<<se.size()<<' '<<se.max_size()<<endl;

//遍历所有元素,按key的值由小到大逐个遍历
for(set<string>::iterator it=se.begin();it!=se.end();it++)
    cout<<*it<<endl;

set<string>::iterator it3=se.find("Beijing");
se.erase(it3); //删除迭代器所指向的元素
se.erase("Shanghai"); //删除一个元素
it3=se.lower_bound("Nanjing"); //得到se中第一个不小于"Nanjing"的字符串的迭代器
if(it3!=se.end()) cout<<*it3<<endl;
se.clear(); //清空

}
