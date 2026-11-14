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

 //直接插入排序：对数组a的下标位于[left,right)中的元素进行排序
void insert_sort(keytype a[],int left,int right){
    int i,j;
    for(i=left+1; i<right; i++){
        keytype tmp=a[i];
        for(j=i-1; j>=left; j--)
            if(a[j]>tmp) a[j+1]=a[j];  //移动
            else break;
        a[j+1]=tmp;                    //取代
    }
}

//希尔排序:对数组a的下标位于[left,right)中的元素进行排序
void shell_sort(keytype a[], int left, int right) {
    int i, j, gap = (right - left) >> 1;

    for (; gap > 0; gap >>= 1) {  //当前gap为前一个gap的一半
        for (i = left + gap; i < right; i++) {  //对每个分组进行直接插入排序
            keytype tmp = a[i];
            for (j = i - gap; j >= left; j -= gap) {  //将a[i]插入i所在分组的前面元素中
                if (a[j] > tmp)
                    a[j + gap] = a[j];
                else break;
            }
            a[j + gap] = tmp;
        }
    }
}//归并排序:将给定数组a的下标在区间[left,right)中的键值进行排序
void merge_sort(int a[], int left, int right) {
    int i, j, mid, cnt = 0;
    if (left >= right - 1) return;  //区间元素的个数不多于1时,划分结束
    mid = (right + left - 1) / 2;
    merge_sort(a, left, mid + 1);  //对左半区排序
    merge_sort(a, mid + 1, right);  //对右半区排序
    //左半区和右半区都有序,将它们归并,归并结果存放到辅助数组tmp中
    i = left, j = mid + 1;
    int *tmp = new int[right - left];
    while (i <= mid || j < right) {
        //当j超出范围时,将左半区剩余元素加入tmp中,下同
        if (j >= right || (i <= mid && a[i] <= a[j]))
            tmp[cnt++] = a[i++];
        else
            tmp[cnt++] = a[j++];
    }
    for (i = 0; i < cnt; i++)
        a[i + left] = tmp[i];  //将tmp中的元素转存到a的对应位置
    delete []tmp;
}
//选择排序:将给定键值序列a的下标在区间[left,right)中的键值进行排序
void select_sort(keytype a[], int left, int right) {
    int i, j, k;
    for (i = left; i < right - 1; i++) {
        k = i;
        for (j = i + 1; j < right; j++)  //在i的右端寻找最小元素的下标
            if (a[j] < a[k]) k = j;
        swap(a[k], a[i]);  //将最小元素与a[i]交换
    }
}//计数排序:将给定数组a的下标在区间[left,right)中的键值进行排序
void count_sort(int a[], int left, int right) {
    if(left>=right) return;

    int i, mx=a[left], mn=a[left];

    //求最小键值mn和最大键值mx
    for(i=left; i<right; i++) {
        if(mx<a[i]) mx=a[i];
        if(mn>a[i]) mn=a[i];
    }

    long long range=1LL*mx-mn+1;
    if(range>10000000){
        stable_sort(a+left,a+right); //值域过大时回退，仍保证完成排序
        return;
    }

    int len=(int)range;
    int *tmp=new int[right-left];
    int *countTable=new int[len]{0}; //分配操作

    //统计每个键值出现的次数
    for(i=left; i<right; i++)
        countTable[a[i]-mn]++;

    //求前缀和
    for(i=1; i<len; i++)
        countTable[i]+=countTable[i-1];

    //收集操作
    for(i=right-1; i>=left; i--) {
        tmp[countTable[a[i]-mn]-1]=a[i];
        countTable[a[i]-mn]--;
    }

    //将排序结果保存到a中
    for(i=left; i<right; i++)
        a[i]=tmp[i-left];

    delete []tmp;
    delete []countTable;
}
//桶排序:将给定数组a的下标在区间[left,right)中的键值进行排序
void bucket_sort(int a[], int left, int right) {
    if(left>=right) return;

    int i, j, m=4, mx=a[left], mn=a[left];
    vector<int> bucket[4]; //定义桶,桶的数量为m

    //求最小键值mn和最大键值mx
    for(i=left; i<right; i++) {
        if(mx<a[i]) mx=a[i];
        if(mn>a[i]) mn=a[i];
    }

    long long len=1LL*mx-mn+1;

    //将每一个键值加入相应的桶中
    for(i=left; i<right; i++)
        bucket[(int)((1LL*a[i]-mn)*m/len)].push_back(a[i]);

    //对每一个桶进行排序
    for(i=0; i<m; i++)
        sort(bucket[i].begin(), bucket[i].end());

    int cur=left;

    //将桶中的键值依次转存到a中
    for(i=0; i<m; i++)
        for(j=0; j<(int)bucket[i].size(); j++)
            a[cur++]=bucket[i][j];
}
//基数排序:将给定数组a的下标在区间[left,right)中的键值进行排序
void radix_sort(int a[], int left, int right, int base=10) {
    if(left>=right || base<2) return;

    int i, k, mx=a[left], mn=a[left];
    long long radix=1;

    //获取最大键值和最小键值
    for(i=left; i<right; i++) {
        if(mx<a[i]) mx=a[i];
        if(mn>a[i]) mn=a[i];
    }

    long long maxValue=1LL*mx-mn; //考虑存在负数情况
    int *countTable=new int[base];
    int *tmp=new int[right-left];

    //从最低位开始,依次对每一位进行排序
    while(maxValue/radix>0) {
        memset(countTable, 0, sizeof(int)*base);

        //以下采用计数排序算法,将键值按其当前位进行排序
        for(i=left; i<right; i++) {
            k=(int)(((1LL*a[i]-mn)/radix)%base); //a[i]当前位的值
            countTable[k]++;
        }

        //求前缀和
        for(i=1; i<base; i++)
            countTable[i]+=countTable[i-1];

        for(i=right-1; i>=left; i--) {
            k=(int)(((1LL*a[i]-mn)/radix)%base);
            tmp[countTable[k]-1]=a[i];
            countTable[k]--;
        }

        for(i=left; i<right; i++)
            a[i]=tmp[i-left];

        if(radix>maxValue/base) break;
        radix*=base;
    }

    delete []tmp;
    delete []countTable;
}//将给定键值序列a的下标在区间[left,right)中的键值进行排序
void bubble_sort(keytype a[], int left, int right) {
    int i, j;
    for (i = right - 1; i > left; i--) {  //依次考虑区间[left,i]
        for (j = left; j < i; j++) {  //将[left,i]中的最大键值通过冒泡的方式转移到a[i]
            if (a[j] > a[j + 1])  //当相邻两个键值逆序时,交换它们的键值
                swap(a[j], a[j + 1]);
        }
    }
}
//快速排序:对键值序列a的下标在区间[left,right)中的键值进行排序
void quick_sort(keytype a[], int left, int right) {
    if (right <= left + 1) return;  //下标区间内不超过1个元素时,结束

    int i = left + 1, j = right - 1, k;
    k = rand() % (right - left) + left;  //获取随机下标
    swap(a[left], a[k]);  //将随机选取的元素设置为第一个元素

    while (i <= j) {
        while (i < right && a[i] <= a[left]) i++;  //获取左端第一个比a[left]大的元素的下标
        while (a[j] > a[left]) j--;  //获取右端第一个不大于a[left]的元素的下标
        if (i < j) swap(a[i], a[j]);  //交换
    }

    swap(a[left], a[j]);  //分界值与a[j]交换,注意此时a[j]<=a[left]

    //一轮结束,以j为分界点,将序列分为两部分,对两部分用同样的方法进行处理
    quick_sort(a, left, j);  //左半部分,注意:区间为左闭右开区间
    quick_sort(a, j + 1, right);  //右半部分
}
//线性时间选择:给定键值序列a的下标在区间[left,right)中的第k小键值,返回值为第k小键值的下标
int bfprt(keytype a[], int left, int right, int k) {
    int i, j, d;
    if(k<1 || k>right-left) return -1;

    if (right - left <= 75) {  //当元素个数小于75时,直接用冒泡排序
        bubble_sort(a, left, right);
        return left + k - 1;
    }

    for (i = j = left; i < right; i += 5, j++) {  //按每组5个元素进行分组
        int r = i + 5 > right ? right : i + 5;  //每个分组的右端点,注意:最后一组可能不足5个元素
        bubble_sort(a, i, r);
        swap(a[(i + r - 1) / 2], a[j]);  //将找到的中位数交换到数组的前端j处
    }

    //所有分组的中位数在a的下标区间[left,j)处,求该区间的中位数,中位数为第(j-left)/2+1个元素
    d = bfprt(a, left, j, (j - 1 - left) / 2 + 1);
    swap(a[left], a[d]);  //将求得的中位数交换到数组的第一个元素上

    keytype pivot=a[left];
    int lt=left, cur=left, gt=right;
    while(cur<gt){
        if(a[cur]<pivot) swap(a[lt++],a[cur++]);
        else if(a[cur]>pivot) swap(a[cur],a[--gt]);
        else ++cur;
    }
    //三段分别为小于、等于、大于 pivot，重复值不会造成逐个剥离
    int target=left+k-1;
    if(target<lt) return bfprt(a,left,lt,k);
    if(target<gt) return target;
    return bfprt(a,gt,right,k-(gt-left));
}
int main(){
 mt19937 rng(123456);vector<void(*)(int*,int,int)>fs={insert_sort,shell_sort,merge_sort,select_sort,count_sort,bucket_sort,bubble_sort,quick_sort};
 for(int rep=0;rep<1500;rep++){
  int n=rng()%160;vector<int>v(n+4);for(int&i:v)i=(int)(rng()%61)-30;
  vector<int>w=v;sort(w.begin()+2,w.end()-2);
  for(auto f:fs){auto a=v;f(a.data(),2,n+2);assert(a==w);}
  auto a=v;radix_sort(a.data(),2,n+2);assert(a==w);
  if(n){for(int z=0;z<4;z++){a=v;int k=rng()%n+1;int j=bfprt(a.data(),2,n+2,k);assert(a[j]==w[k+1]);}}
 }
 vector<int>v={INT_MAX,0,INT_MIN,-3,INT_MAX};auto w=v;sort(w.begin(),w.end());count_sort(v.data(),0,v.size());assert(v==w);
 vector<int>a(1500,7);assert(a[bfprt(a.data(),0,a.size(),500)]==7);assert(bfprt(a.data(),0,0,1)==-1);
 cout<<"1500 random sorting/subrange trials; 6000 kth checks; integer extrema fallback and duplicate BFPRT passed\n";
}
