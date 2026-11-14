#define N 50
#include<iostream>
using namespace std;
typedef int datatype;
typedef int elementtype;
typedef struct slNode{
    datatype data[N];
    int len;
    slNode():len(0){}
} SeqList;
typedef struct clNode{
    clNode * pre;
    clNode * next;
    datatype data;
    clNode():pre(NULL),next(NULL){}
} * DList;
typedef struct cNode{
    cNode * next;
    datatype data;
    cNode():next(NULL){}
}*ChainList;
//把顺序表sl2合并到sl1后面 
SeqList sl_merge(SeqList &sl1,SeqList &sl2){
    SeqList C;
    if(sl1.len + sl2.len > N)
        return C;
    for(int i=0;i<sl1.len;i++){
        C.data[i]=sl1.data[i];
    }    
    C.len+=sl1.len;
    for(int j=0;j<sl2.len;j++){
        C.data[sl1.len+j]=sl2.data[j];
    }
    C.len+=sl2.len;
    return C;
}
//把链表sl2合并到sl1后面
DList cl_merge(DList &cl1, DList &cl2){
    DList C = new clNode; 
    clNode *p = C;
    clNode *q = cl1->next;
    while(q != NULL){
        p->next = new clNode;
        p->next->data = q->data;
        p->next->pre = p;
        p = p->next;
        q = q->next;
    }
    q = cl2->next;
    while(q != NULL){
        p->next = new clNode;
        p->next->data = q->data;
        p->next->pre = p;
        p = p->next;
        q = q->next;
    }
    return C;
}


ChainList cl_copy(ChainList cl1){
    ChainList cl2 = new cNode;
    cNode *p=cl2;
    cNode *q=cl1->next;
    while(q!=NULL){
        p->next = new cNode;
        p->next->data=q->data;
        p=p->next;
        q=q->next;
    }
    return cl2;
}

int Delete(ChainList &cl1,int x){
    if(cl1==NULL) return -1;
    ChainList h = cl1;
    int pos = 1;
    while(h->next!=NULL && h->next->data!=x){
        h=h->next;
        pos ++;
    }
    if(h->next==NULL){
        return -1;
    }
    ChainList q = h->next;
    h->next = q->next;
    delete q;
    return pos;
}

typedef struct pNode{
    int coef;
    int exp;
    pNode * next;
    pNode():next(NULL){}
}*Poly;

Poly Add(Poly A,Poly B){
    Poly C=new pNode,r=C;
    Poly p=A->next,q=B->next;
    while(p!=NULL&&q!=NULL){
        Poly s=new pNode;
        if(p->exp>q->exp){
            s->coef=p->coef;
            s->exp=p->exp;
            p=p->next;
        }
        else if(p->exp<q->exp){
            s->coef=q->coef;
            s->exp=q->exp;
            q=q->next;
        }
        else{
            s->coef=p->coef+q->coef;
            s->exp=p->exp;
            p=p->next;
            q=q->next;
            if(s->coef==0){
            delete s;continue;
        }
        }
        r->next=s;r=s;
    }
    while(p!=NULL){
        r->next=new pNode;
        r=r->next;
        r->coef=p->coef;
        r->exp=p->exp;
        p=p->next;
    }
    while(q!=NULL){
        r->next=new pNode;
        r=r->next;
        r->coef=q->coef;
        r->exp=q->exp;
        q=q->next;
    }
    return C;
}
Poly Mul(Poly A,Poly B){
    Poly C=new pNode;
    Poly p=A->next;
    while(p!=NULL){
        Poly q=B->next;
        while(q!=NULL){
            int coef=p->coef*q->coef,exp=p->exp+q->exp;
            Poly r=C;
            while(r->next!=NULL&&r->next->exp>exp) r=r->next;
            if(r->next!=NULL&&r->next->exp==exp){
                r->next->coef+=coef;
                if(r->next->coef==0){
                    Poly s=r->next;
                    r->next=s->next;
                    delete s;
                }
            }
            else{
                Poly s=new pNode;
                s->coef=coef;s->exp=exp;
                s->next=r->next;r->next=s;
            }
            q=q->next;
        }
        p=p->next;
    }
    return C;
}

int swap(elementtype x,DList &h){
    if(h==NULL) return 0;
    DList p=h;
    while(p->next!=NULL && p->next->data!=x){
        p=p->next;
    }
    if(p->next==NULL) return 0;
    else{
        if(p==h) return 1;
        else{
            DList q = p->next;
            p->next = q->next;
            if(q->next!=NULL) q->next->pre=p;
            q->next = p;
            q->pre = p->pre;
            q->pre->next = q;
            p->pre=q;
            return 1;
        }
    }
}
int main(){
    //1.测试顺序表合并
    SeqList sl1,sl2;
    sl1.data[0]=1;sl1.data[1]=2;sl1.data[2]=3;sl1.len=3;
    sl2.data[0]=4;sl2.data[1]=5;sl2.len=2;
    SeqList sl3=sl_merge(sl1,sl2);
    cout<<"sl_merge: ";
    for(int i=0;i<sl3.len;i++) cout<<sl3.data[i]<<" ";
    cout<<endl;

    //2.测试双向链表合并
    DList dl1=new clNode,dl2=new clNode;
    DList p=dl1;
    for(int i=1;i<=3;i++){
        p->next=new clNode;
        p->next->data=i;
        p->next->pre=p;
        p=p->next;
    }
    p=dl2;
    for(int i=4;i<=6;i++){
        p->next=new clNode;
        p->next->data=i;
        p->next->pre=p;
        p=p->next;
    }
    DList dl3=cl_merge(dl1,dl2);
    cout<<"cl_merge: ";
    p=dl3->next;
    while(p!=NULL){
        cout<<p->data<<" ";
        p=p->next;
    }
    cout<<endl;

    //3.测试单链表复制
    ChainList cl1=new cNode;
    ChainList q=cl1;
    for(int i=1;i<=5;i++){
        q->next=new cNode;
        q=q->next;
        q->data=i;
    }
    ChainList cl2=cl_copy(cl1);
    cout<<"cl_copy: ";
    q=cl2->next;
    while(q!=NULL){
        cout<<q->data<<" ";
        q=q->next;
    }
    cout<<endl;

    //4.测试删除
    cout<<"Delete位置: "<<Delete(cl1,3)<<endl;
    cout<<"Delete后: ";
    q=cl1->next;
    while(q!=NULL){
        cout<<q->data<<" ";
        q=q->next;
    }
    cout<<endl;

    //5.测试多项式相加和相乘
    Poly A=new pNode,B=new pNode;
    Poly r=A;
    r->next=new pNode;r=r->next;r->coef=3;r->exp=2;
    r->next=new pNode;r=r->next;r->coef=2;r->exp=1;
    r->next=new pNode;r=r->next;r->coef=1;r->exp=0;
    r=B;
    r->next=new pNode;r=r->next;r->coef=2;r->exp=2;
    r->next=new pNode;r=r->next;r->coef=4;r->exp=1;
    r->next=new pNode;r=r->next;r->coef=5;r->exp=0;

    Poly C=Add(A,B);
    cout<<"Add: ";
    r=C->next;
    while(r!=NULL){
        cout<<r->coef<<"x^"<<r->exp<<" ";
        r=r->next;
    }
    cout<<endl;

    Poly D=Mul(A,B);
    cout<<"Mul: ";
    r=D->next;
    while(r!=NULL){
        cout<<r->coef<<"x^"<<r->exp<<" ";
        r=r->next;
    }
    cout<<endl;

    //6.测试swap
    DList h=new clNode;
    p=h;
    for(int i=1;i<=5;i++){
        p->next=new clNode;
        p->next->data=i;
        p->next->pre=p;
        p=p->next;
    }
    cout<<"swap返回值: "<<swap(3,h)<<endl;
    cout<<"swap后: ";
    p=h->next;
    while(p!=NULL){
        cout<<p->data<<" ";
        p=p->next;
    }
    cout<<endl;

    return 0;
}

