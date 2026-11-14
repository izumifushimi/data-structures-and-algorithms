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
void heap_adjust(int heap[],int n,int cur){int temp=heap[cur];for(int i=2*cur+1;i<n;i=2*cur+1){if(i+1<n&&heap[i+1]>heap[i])i++;if(heap[i]<=temp)break;heap[cur]=heap[i];cur=i;}heap[cur]=temp;}
//堆排序:将给定键值序列a的下标在区间[left,right)中的键值进行排序
void heap_sort(keytype a[], int left, int right) {
    int i, len = right - left;

    for (i = len / 2 - 1; i >= 0; i--)  //从最后一个非叶结点开始,将完全二叉树转化为大顶堆
        heap_adjust(a + left, len, i);

    for (i = right - 1; i > left; i--) {  //利用大顶堆实现排序
        swap(a[i], a[left]);  //将堆顶元素a[left]与当前最后一个结点交换
        heap_adjust(a + left, i - left, 0);  //将剩下的结点从根结点出发调整为大顶堆
    }
}
int main(){mt19937 rng(876);for(int rep=0;rep<1000;rep++){vector<int>a(rng()%120+4);for(auto&i:a)i=(int)rng()%100;auto w=a;sort(w.begin()+2,w.end()-2);heap_sort(a.data(),2,a.size()-2);assert(a==w);}cout<<"1000 heap-sort offset subranges passed\n";}
