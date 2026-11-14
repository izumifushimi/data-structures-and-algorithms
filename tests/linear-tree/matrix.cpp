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

#define M 100                         
#define N 100                         

typedef int datatype;

struct matrix {
    datatype a[M][N];
    int row;                          // 矩阵的行数
    int col;                          // 矩阵的列数

    matrix(int r = 0, int c = 0) : row(r), col(c) {
        memset(a, 0, sizeof(a));      // 初始化行数和列数，所有元素初始化为0
    }//memset是标准函数,格式为（地址，值，字节数）

    matrix(datatype b[M][N], int r, int c) : row(r), col(c) {
        for (int i = 0; i < r; i++)
            for (int j = 0; j < c; j++)
                a[i][j] = b[i][j];    // 用数组b初始化当前矩阵
    }
};
// 两个矩阵相乘：mat1×mat2，相乘结果作为返回值
matrix mat_mul(matrix mat1, matrix mat2) {
    if (mat1.col != mat2.row) {
        cout << "矩阵不能相乘!" << endl;
        return matrix();
    }

    matrix mat(mat1.row, mat2.col); 

    for (int i = 0; i < mat1.row; i++)
        for (int j = 0; j < mat2.col; j++) {
            mat.a[i][j] = 0;
            for (int k = 0; k < mat1.col; k++)  
                mat.a[i][j] += mat1.a[i][k] * mat2.a[k][j];
        }

    return mat;
}
// 将方阵下三角按行压缩；调用前须确保矩阵对称
vector<int> convert(matrix mat) {
    vector<int> ret;
    if(mat.row!=mat.col) return ret;
    for(int i=0;i<mat.row;i++)
        for(int j=0;j<=i;j++)
            ret.push_back(mat.a[i][j]);
    return ret;
}
// 还原对称矩阵；非法压缩长度返回空矩阵
matrix convert(vector<int> ve) {
    matrix mat;
    int n=0;
    while(n<min(M,N) && n*(n+1)/2<(int)ve.size()) ++n;
    if(n*(n+1)/2!=(int)ve.size()) return mat;
    int i=0;
    for(int k=0;k<(int)ve.size();k++){
        if(k>=(i+1)*(i+2)/2) ++i;
        int j=k-i*(i+1)/2;
        mat.a[i][j]=mat.a[j][i]=ve[k];
    }
    mat.row=mat.col=n;
    return mat;
}
struct smMode {
    int r, c;                         // 非零元素所在的行号和列号
    datatype data;                    // 非零元素的值

    bool operator<(smMode sm) const { // 重载<,若行号相同就比较列号，让次序前的数保存时依旧在前面
        if (r == sm.r)
            return c < sm.c;

        return r < sm.r;
    }
};

struct sMatrix {
    smMode nz[N];                     // 存放所有非零元素
    int n, row, col;                  // n：非零元素数量

    sMatrix() : n(0), row(0), col(0) {
    }
};
// 将稀疏矩阵mat压缩存储，结果作为返回值
sMatrix sm_convert(matrix mat) {
    sMatrix sm;

    sm.row = mat.row;
    sm.col = mat.col;                 // 设置行数和列数

    for (int i = 0; i < mat.row; i++)
        for (int j = 0; j < mat.col; j++) {
            if (mat.a[i][j] != 0) {   // 非零元素加入结果
                if(sm.n>=N) throw std::length_error("稀疏矩阵容量不足");
                int &idx = sm.n;//用idx引用表示sm中非零元素排序的下标
                sm.nz[idx++] = {i,j,mat.a[i][j]};
            }
        }

    return sm;
}
// 将压缩存储的稀疏矩阵sm还原为原矩阵
matrix sm_convert(sMatrix sm) {
    matrix mat(sm.row,sm.col);

    for (int i = 0; i < sm.n; i++) {
        smMode tmp = sm.nz[i];        // 第i个非零元素
        mat.a[tmp.r][tmp.c] = tmp.data;
    }

    return mat;
}
//求压缩稀疏矩阵的转置
sMatrix sm_tr(sMatrix sm){
    sMatrix ret;
    ret.row=sm.col,ret.col=sm.row,ret.n=sm.n; //定义矩阵大小
    for(int i=0;i<sm.n;i++){
        smMode temp = sm.nz[i];
        ret.nz[i]={temp.c,temp.r,temp.data}; //列在前（因为列数据是行）
    }
    sort(ret.nz,ret.nz+ret.n);//sort(开始位置，结束位置，排序规则(默认升序))
    return ret;
}
int main(){
matrix a(2,2);a.a[0][0]=1;a.a[0][1]=a.a[1][0]=2;a.a[1][1]=3;auto b=convert(convert(a));assert(b.row==2&&b.col==2&&b.a[0][1]==2&&b.a[1][1]==3);auto c=mat_mul(a,a);assert(c.a[0][0]==5&&c.a[1][1]==13);auto s=sm_convert(a);auto tr=sm_tr(s);auto d=sm_convert(tr);assert(d.a[0][1]==2);assert(convert(vector<int>{1,2}).row==0);

}
