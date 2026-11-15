# coding: utf-8
import json,pathlib,re,subprocess,concurrent.futures,time,math,heapq,collections,random
ROOT=pathlib.Path(__file__).resolve().parents[2]
D={d['id']:d for d in json.loads((ROOT/'public/data/notes.json').read_text())}
P=[]; DIRECT=collections.defaultdict(list); USED=collections.defaultdict(list)
H='''#include <iostream>
#include <vector>
#include <list>
#include <deque>
#include <queue>
#include <stack>
#include <map>
#include <string>
#include <algorithm>
#include <cstring>
#include <cctype>
#include <stdexcept>
#include <iomanip>
#include <sstream>
using namespace std;
void printv(const vector<int>&v){if(v.empty()){cout<<"EMPTY\\n";return;}for(int x:v)cout<<x<<' ';cout<<'\\n';}
'''
ARR='int n;cin>>n;vector<int>a(n);for(int &x:a)cin>>x;'
def b(d,i):return D[d]['codes'][i].get('corrected') or D[d]['codes'][i]['original']
def blocks(d,ids):return '\n'.join(b(d,i) for i in ids)
def inp(a,tail=''):return str(len(a))+'\n'+' '.join(map(str,a))+'\n'+tail
def exp(a):return ' '.join(map(str,a))+'\n' if a else 'EMPTY\n'
def add(id,title,d,ids,funcs,desc,inf,outf,cases,prefix='',alg='',read=ARR,run='',targets=None,limits=None,difficulty='基础',note=''):
 refs=[{'docId':d,'blocks':list(ids),'functions':funcs}]
 reference=H+prefix+'\n'+alg+'\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\n'+read+'\n'+run+'\nreturn 0;}\n'
 template=H+'\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\n'+read+'\n// TODO: '+title+'，按题面完成算法并输出结果。\nreturn 0;}\n'
 cs=[{'name':f'测试 {i+1}','stdin':c[0],'expected':c[1]} for i,c in enumerate(cases)]
 P.append(dict(id='lt-'+id,title=title,category=D[d]['book'],sourceRefs=refs,description=desc,input=inf,output=outf,constraints=limits or ['0 ≤ n ≤ 30','输入元素均为 [-100,100] 内的整数；除题面明确允许外，下标须有效。'],samples=[dict(cs[0],explanation='按照题面规则依次处理，输出最终结果。')],template=template,reference=reference,referenceNote=note or '算法主体来自本节原码的最小修正版；仅补充标准头文件、输入输出驱动和必要的类型上下文。空结果用 EMPTY 表示。',cases=cs,difficulty=difficulty))
 for i in ids:USED[d,i].append('lt-'+id)
 for i in (ids if targets is None else targets):DIRECT[d,i].append('lt-'+id)
def save():
 path=ROOT/'src/problem-bank/linear-tree.mjs';path.write_text('/* Generated educational problem content; references validated with clang++. */\nexport const problems = '+json.dumps(P,ensure_ascii=False,indent=2)+';\n')
 cov=[]
 for d in D.values():
  if d['book'] not in ['绪论','线性结构','树']:continue
  for i in range(len(d['codes'])):
   ids=DIRECT[d['id'],i]; used=USED[d['id'],i]
   cov.append({'docId':d['id'],'block':i,'kind':'problem' if ids else 'support','problemIds':list(dict.fromkeys(ids or used)),**({} if ids else {'reason':'本块为类型、构造、头文件或依赖辅助声明；在关联题中提供对应实现的必要上下文。'})})
 (ROOT/'content/oj-coverage-linear-tree.json').write_text(json.dumps(cov,ensure_ascii=False,indent=2))
# seq list five independent operations
s='rs4udzq4ez5ieiek'; pre='const int N=100;using datatype=int;'; alg=blocks(s,range(6)); rd=ARR+'\nseqList sl;for(int x:a)sl.data[sl.len++]=x;'
for id,title,target,fn,tail,run,oracle,desc in [
 ('seq-insert','顺序表：指定位置插入',1,'sl_insert','int p,x;cin>>p>>x;','sl_insert(sl,p,x);',lambda a,p,x:a[:max(0,min(p,len(a)))]+[x]+a[max(0,min(p,len(a))):],'把 x 插入下标 p 前。p<0 按表头，p≥n 按表尾处理。'),
 ('seq-pushback','顺序表：尾插',2,'sl_pushback','int x;cin>>x;','sl_pushback(sl,x);',lambda a,x:a+[x],'把一个元素 x 追加到顺序表末尾。'),
 ('seq-delete','顺序表：按下标删除',4,'sl_delete','int p;cin>>p;','sl_delete(sl,p);',lambda a,p:a[:p]+a[p+1:],'删除下标 p 的元素，之后的元素依次左移。'),
 ('seq-erase','顺序表：删除首个指定值',5,'sl_erase','int x;cin>>x;','sl_erase(sl,x);',lambda a,x:a[:a.index(x)]+a[a.index(x)+1:] if x in a else a[:],'删除第一个等于 x 的元素；未找到时保持原表。')]:
 variants= [([3,-1,3],(1,8)),([],(0,-2)),([2],(-3,7))] if target==1 else [([3,-1,3],(8,)),([],(0,)),([2],(-4,))] if target==2 else [([3,-1,3],(1,)),([2],(0,)),([1,1,2],(2,))] if target==4 else [([3,-1,3],(3,)),([],(0,)),([2],(7,))]
 cases=[(inp(a,' '.join(map(str,t))+'\n'),exp(oracle(a,*t))) for a,t in variants]
 add(id,title,s,range(6),[fn],desc,'第一行 n，第二行 n 个整数；随后 '+('p x。' if target==1 else 'p。' if target==4 else 'x。'),'一行输出操作后的元素；空表输出 EMPTY。',cases,pre,alg,rd+tail,run+'printv(vector<int>(sl.data,sl.data+sl.len));',[target])
add('seq-search','顺序表：从指定下标查找',s,[0,3],['sl_search'],'从 max(0,p) 开始查找第一个等于 x 的元素，返回下标。','n；n 个整数；p x。','找到输出从 0 开始的下标，否则输出 -1。',[(inp([2,3,2],'1 2\n'),'2\n'),(inp([],'0 1\n'),'-1\n'),(inp([-1,-1],'-2 -1\n'),'0\n')],pre,blocks(s,[0,3]),rd+'int p,x;cin>>p>>x;','cout<<sl_search(sl,p,x)<<"\\n";',[3])
# linked single / double / circular
s='up0t23dy1c8i7wna';pre='using datatype=int;'; base=blocks(s,[0,1,2,3,5,6]); creator=b(s,4).split('int a[]')[0]; mk='chainList h=new clNode;chainList tail=h;for(int x:a){tail->next=new clNode;tail=tail->next;tail->data=x;}'
show='vector<int>v;for(auto p=h==nullptr?nullptr:h->next;p;p=p->next)v.push_back(p->data);printv(v);'
for id,title,idx,fn,tail,action,variants,oracle,desc in [
 ('cl-traverse','单链表：遍历',1,'cl_traverse','','',[(a,()) for a in [[2,-1,2],[],[7]]],lambda a:a,'输出带头结点单链表中全部数据结点，跳过头结点。'),
 ('cl-insert','单链表：在结点后插入',3,'cl_insert','int p,x;cin>>p>>x;','chainList q=h;for(int i=0;i<p;i++)q=q->next;cl_insert(q,x);',[([1,2],(1,9)),([],(0,-3)),([2,2],(2,7))],lambda a,p,x:a[:p]+[x]+a[p:],'p=0 表示头结点，p≥1 表示第 p 个数据结点。在该结点后插入 x。'),
 ('cl-delete-next','单链表：删除直接后继',5,'cl_delete','int p;cin>>p;','chainList q=h;for(int i=0;i<p;i++)q=q->next;cl_delete(q);',[([1,2,3],(1,)),([],(0,)),([4],(0,))],lambda a,p:a[:p]+a[p+1:],'p=0 表示头结点。删除该结点的直接后继；没有后继时不变。'),
 ('cl-destroy','单链表：销毁',6,'cl_destroy','','cl_destroy(h);',[(a,()) for a in [[1,2],[],[-4]]],lambda a:[],'逐个释放数据结点和头结点，最终使头指针为空。')]:
 cs=[(inp(a,' '.join(map(str,t))+'\n'),exp(oracle(a,*t))) for a,t in variants]
 add(id,title,s,[0,1,2,3,5,6],[fn],desc,'n；n 个整数；'+('p x（0≤p≤n）。' if idx==3 else 'p（0≤p≤n）。' if idx==5 else '无其他输入。'),'输出操作后从首数据结点到尾的数据；空表输出 EMPTY。',cs,pre,base,ARR+mk+tail,action+show,[idx])
add('cl-create','单链表：头插法保持数组顺序建表',s,[0,3,4],['cl_creator'],'按原笔记从数组末尾向前头插，建立带头结点的单链表，结果顺序应与输入一致。','n；n 个整数。','输出新表数据；空表输出 EMPTY。',[(inp(a),exp(a)) for a in [[3,-1,3],[],[9]]],pre,blocks(s,[0,3])+creator,ARR,'chainList h=nullptr;cl_creator(h,a.data(),n);'+show,[4])
add('cl-search','单链表：按值查找',s,[0,2],['cl_search'],'查找首个值为 x 的结点，返回它在数据结点中的位置。','n；n 个整数；x。','位置从 1 开始；不存在输出 -1。',[(inp([4,2,4],'4\n'),'1\n'),(inp([],'2\n'),'-1\n'),(inp([-1,2],'2\n'),'2\n')],pre,blocks(s,[0,2]),ARR+mk+'int x;cin>>x;','auto found=cl_search(h,x);int pos=1;auto p=h->next;while(p&&p!=found){p=p->next;pos++;}cout<<(found?pos:-1)<<"\\n";',[2])
# double no header
base=blocks(s,[7,8,9,10,11]);mkd='dchainList h=nullptr;dcl_create(h,a.data(),n);';showd='vector<int>v;for(auto p=h;p;p=p->next)v.push_back(p->data);printv(v);'
for id,title,idx,fn,tail,act,variants,oracle,desc in [
 ('dcl-create','双向链表：无头结点建表',10,'dcl_create','','',[(a,()) for a in [[],[1],[2,-3,2]]],lambda a:a,'建立没有额外头结点的双向链表，确保 next/pre 相互对应。'),
 ('dcl-insert-post','双向链表：结点后插入',8,'dcl_insert_post','int p,x;cin>>p>>x;','auto q=h;for(int i=0;i<p;i++)q=q->next;dcl_insert_post(q,x);',[([1,3],(0,2)),([4],(0,-2)),([2,2],(1,5))],lambda a,p,x:a[:p+1]+[x]+a[p+1:],'在下标 p 的结点之后插入 x，并维护双向指针。'),
 ('dcl-insert-pre','双向链表：结点前插入',9,'dcl_insert_pre','int p,x;cin>>p>>x;','auto q=h;for(int i=0;i<p;i++)q=q->next;bool first=q==h;dcl_insert_pre(q,x);if(first)h=q;',[([1,3],(0,2)),([4],(0,-2)),([2,2],(1,5))],lambda a,p,x:a[:p]+[x]+a[p:],'在下标 p 的结点之前插入 x，若插在首结点前，更新首指针。'),
 ('dcl-delete','双向链表：删除首个给定值',11,'dcl_delete','int x;cin>>x;','dcl_delete(h,x);',[([1,2,1],(1,)),([],(4,)),([2],(9,))],lambda a,x:a[:a.index(x)]+a[a.index(x)+1:] if x in a else a,'删除首个数据为 x 的结点；不存在则不变。')]:
 add(id,title,s,[7,8,9,10,11],[fn],desc,'n；n 个整数；'+('p x，0≤p<n 且 n≥1。' if idx in [8,9] else 'x。' if idx==11 else '无其他输入。'),'先从头到尾输出值，空表输出 EMPTY。',[(inp(a,' '.join(map(str,t))+'\n'),exp(oracle(a,*t))) for a,t in variants],pre,base,ARR+mkd+tail,act+showd,[idx])
# circular pointer h as tail, driver output from h.next
base=blocks(s,[0,3,12,13,14,15,16]);mkr='chainList h=nullptr;rcl_creater(h,a.data(),n);';showr='vector<int>v;if(h){auto p=h->next;do{v.push_back(p->data);p=p->next;}while(p!=h->next);}printv(v);'
for id,title,idx,fn,tail,act,variants,oracle,desc in [
 ('rcl-create','循环链表：按数组建环',14,'rcl_creater','','',[(a,()) for a in [[],[3],[-1,2,-1]]],lambda a:a,'建立无头结点循环单链表，h 指向尾结点，h->next 为首元素。'),
 ('rcl-insert','循环链表：在尾锚点后插入',13,'rcl_insert','int x;cin>>x;','rcl_insert(h,x);',[([1,2],(9,)),([],(3,)),([4],(-2,))],lambda a,x:[x]+a,'在尾锚点 h 后插入 x；非空表中 x 成为按 h->next 观察的首元素，空表时自成环。'),
 ('rcl-delete','循环链表：删除锚点后继',15,'rcl_delete','','rcl_delete(h);',[(a,()) for a in [[1,2,3],[],[5]]],lambda a:a[1:],'删除尾锚点 h 的直接后继，即首元素；唯一结点被删除后 h 为空。'),
 ('rcl-destroy','循环链表：逐结点销毁',16,'rcl_destroy','','rcl_destroy(h);',[(a,()) for a in [[1,2,3],[],[5]]],lambda a:[],'反复删除后继，最终释放环中所有结点并让 h 为空。')]:
 add(id,title,s,[0,3,12,13,14,15,16],[fn],desc,'n；n 个整数；'+('x。' if idx==13 else '无其他输入。'),'从 h->next 开始绕环一周输出值；空环输出 EMPTY。',[(inp(a,' '.join(map(str,t))+'\n'),exp(oracle(a,*t))) for a,t in variants],pre,base,ARR+mkr+tail,act+showr,[idx])
add('rcl-search','循环链表：一圈内查找',s,[0,3,12,13,14],['cl_search'],'从 h->next 开始绕环查找首个等于 x 的数据结点，不重复遍历第二圈。','n；n 个整数；x。','位置按 h->next 起从 1 计数；不存在输出 -1。',[(inp([2,3,2],'2\n'),'1\n'),(inp([],'2\n'),'-1\n'),(inp([1,2,3],'3\n'),'3\n')],pre,blocks(s,[0,3,12,13,14]),ARR+mkr+'int x;cin>>x;','auto q=cl_search(h,x);if(!q)cout<<-1;else{int pos=1;auto p=h->next;while(p!=q){p=p->next;pos++;}cout<<pos;}cout<<"\\n";',[12])
save();print('first saved',len(P))
# vector / list operation assets
s='mtgwclgx66dch1gd'
for id,title,idx,read,run,cs,desc in [
 ('vec-fill','vector：按数量与初值构造',1,'int n,x;cin>>n>>x;','vector<int>v(n,x);printv(v);',[(f'{n} {x}\n',exp([x]*n)) for n,x in [(0,7),(1,-2),(4,3)]],'建立 n 个初值均为 x 的元素。'),
 ('vec-record','vector：结构体元素初始化',2,'int n,x,y;cin>>n>>x>>y;','struct vecNode{int x,y;};vecNode a{x,y};vector<vecNode>v(n,a);if(!n)cout<<"EMPTY\\n";for(auto p:v)cout<<p.x<<" "<<p.y<<"\\n";',[(f'{n} {x} {y}\n',(''.join(f'{x} {y}\n' for _ in range(n)) if n else 'EMPTY\n')) for n,x,y in [(0,1,2),(1,-1,4),(3,5,-2)]],'创建 n 个记录，每个记录含整数 x、y，保持两个数据项。'),
 ('vec-access','vector：下标与首尾访问',3,ARR+'int p;cin>>p;','cout<<a[p]<<" "<<a.at(p)<<" "<<a.front()<<" "<<a.back()<<"\\n";',[(inp(a,str(p)+'\n'),f'{a[p]} {a[p]} {a[0]} {a[-1]}\n') for a,p in [([1],0),([2,-3,2],1),([-1,5],1)]],'对同一位置分别使用下标和 at，再读取首元素与末元素。'),
 ('vec-insert','vector：按位置插入多个相同元素',4,ARR+'int p,k,x;cin>>p>>k>>x;','a.insert(a.begin()+p,k,x);printv(a);',[(inp(a,f'{p} {k} {x}\n'),exp(a[:p]+[x]*k+a[p:])) for a,p,k,x in [([],0,2,-1),([1,3],1,1,2),([2,2],2,0,4)]],'在位置 p 之前插入 k 个值 x；p=n 表示末尾。'),
 ('vec-erase','vector：删除半开区间',5,ARR+'int l,r;cin>>l>>r;','a.erase(a.begin()+l,a.begin()+r);printv(a);',[(inp(a,f'{l} {r}\n'),exp(a[:l]+a[r:])) for a,l,r in [([],0,0),([1,2,3],1,3),([2,2],0,0)]],'删除区间 [l,r) 内的元素，r 本身不被删除；允许空区间。'),
 ('vec-assign','vector：重新赋值',6,ARR+'int k,x;cin>>k>>x;','a.assign(k,x);printv(a);',[(inp(a,f'{k} {x}\n'),exp([x]*k)) for a,k,x in [([1,2],0,7),([],3,-1),([2],1,8)]],'清除旧元素，把 vector 重置为 k 个 x。')]:
 add(id,title,s,[0,idx],['vector'],desc, '输入 n 和原数组（构造题不输入原数组），随后提供 '+('n x。' if idx==1 else 'n x y。' if idx==2 else 'p，0≤p<n。' if idx==3 else 'p k x，0≤p≤n、0≤k≤30。' if idx==4 else 'l r，0≤l≤r≤n。' if idx==5 else 'k x，0≤k≤30。'), '访问题输出“下标值 at值 首值 尾值”；记录题每行 x y；其余输出结果序列，空结果 EMPTY。',cs,'','',read,run,[idx],note='依据原笔记的 STL 操作，固定示例常量改为题面输入；不改变接口语义。访问题要求 n≥1 且 p 有效。')
s='fdg8dyzhbd1z3521';pred=b(s,2)
for op,title,tail,run,variants,oracle in [
 ('push-front','表头插入','int x;cin>>x;','li.push_front(x);',[([1,2],(9,)),([],(3,)),([2],(-2,))],lambda a,x:[x]+a),
 ('pop-front','删除首元素','','if(!li.empty())li.pop_front();',[(a,()) for a in [[1,2],[],[3]]],lambda a:a[1:]),
 ('unique','相邻去重','','li.unique();',[(a,()) for a in [[1,1,2,1],[],[-2,-2,-2]]],lambda a:[x for i,x in enumerate(a) if i==0 or x!=a[i-1]]),
 ('reverse','反转','','li.reverse();',[(a,()) for a in [[1,2,3],[],[-1,2,-1]]],lambda a:a[::-1]),
 ('remove','删除所有指定值','int x;cin>>x;','li.remove(x);',[([1,2,1],(1,)),([],(3,)),([-2,3],(8,))],lambda a,x:[v for v in a if v!=x]),
 ('remove-even','删除偶数','','li.remove_if(isEven);',[(a,()) for a in [[-2,-1,0,3,4],[],[2,2]]],lambda a:[x for x in a if x%2]),
 ('remove-odd','删除奇数','','li.remove_if(isOdd);',[(a,()) for a in [[-2,-1,0,3,4],[],[1,1]]],lambda a:[x for x in a if x%2==0])]:
 add('list-'+op,'STL list：'+title,s,[0,1,2],['list::'+op],f'使用 list 完成“{title}”。unique 只删除相邻重复值；不相邻的相同值保留。','n；n 个整数；'+('x。' if tail else '无其他输入。'),'输出操作后的序列；空表输出 EMPTY。',[(inp(a,' '.join(map(str,t))+'\n'),exp(oracle(a,*t))) for a,t in variants],'',pred,ARR+'list<int>li(a.begin(),a.end());'+tail,run+'printv(vector<int>(li.begin(),li.end()));',[1]+([2] if op in ['remove-even','remove-odd'] else []),note='直接使用原笔记 STL list 操作；示例常量改为输入，空表 pop_front 由驱动先检查。')
for descsort,reverse in [('升序',False),('降序',True)]:
 variants=[([1,3],[2,3]),([],[-2]),([2,2],[])]
 add('list-merge-'+('desc' if reverse else 'asc'),'STL list：'+descsort+'有序归并',s,[0,1],['list::merge'],'把两个已经按'+descsort+'排列的链表归并，合并结果保存在第一个表中，第二个表应为空。','n m；随后第一表 n 个整数，第二表 m 个整数。两个表均按'+descsort+'排列。','首行输出归并序列，空为 EMPTY；第二行输出第二个表剩余元素数（应为 0）。',[(f'{len(a)} {len(c)}\n'+exp(sorted(a,reverse=reverse)).replace('EMPTY','')+exp(sorted(c,reverse=reverse)).replace('EMPTY',''),exp(sorted(a+c,reverse=reverse))+'0\n') for a,c in variants],'','','int n,m;cin>>n>>m;list<int>li,li1;for(int i=0,x;i<n;i++){cin>>x;li.push_back(x);}for(int i=0,x;i<m;i++){cin>>x;li1.push_back(x);}',('li.merge(li1,greater<int>());' if reverse else 'li.merge(li1);')+'printv(vector<int>(li.begin(),li.end()));cout<<li1.size()<<"\\n";',[1])
add('list-traverse','STL list：迭代器遍历',s,[0,3],['traverse'],'用迭代器从 begin 走到 end 输出所有元素。','n；n 个整数。','一行序列；空为 EMPTY。',[(inp(a),exp(a)) for a in [[],[1],[3,-2,3]]],'',b(s,3).replace('<<""',"<<' '"),ARR+'list<int>li(a.begin(),a.end());','if(li.empty())cout<<"EMPTY\\n";else traverse(li);',[3],note='保留原迭代器遍历，只在输出值之间增加空格。')
# Stack operation families
s='owuypwz940xxzpvr'
for kind,ids,decl,make,show,indices in [
 ('seq',[0,1,2,3,4],'const int N=100;using datatype=int;','seqStack st;for(int x:a)push(st,x);','vector<int>v;for(int i=st.top;i>=0;i--)v.push_back(st.data[i]);printv(v);',{'empty':1,'push':1,'top':2,'pop':3,'traverse':4}),
 ('chain',[6,7,8,9,10,11],'','chainStack st=new csNode;for(int x:a)push(st,x);','vector<int>v;for(auto q=st->next;q;q=q->next)v.push_back(q->data);printv(v);',{'empty':7,'push':8,'top':9,'pop':10,'traverse':11})]:
 alg=blocks(s,ids).replace('<<""',"<<' '")
 for op in ['empty','push','top','pop','traverse']:
  arrs=[[],[2],[-2,1,-2]];cs=[]
  for a in arrs:
   tail='7\n' if op=='push' else ''
   expected=('1\n' if not a else '0\n') if op=='empty' else ('EMPTY\n' if not a else f'{a[-1]}\n') if op=='top' else exp(([7]+a[::-1]) if op=='push' else a[-2::-1] if op=='pop' and a else [] if op=='pop' else a[::-1])
   cs.append((inp(a,tail),expected))
  act='cout<<empty(st)<<"\\n";' if op=='empty' else 'if(empty(st))cout<<"EMPTY\\n";else cout<<top(st)<<"\\n";' if op=='top' else 'push(st,x);'+show if op=='push' else 'if(!empty(st))pop(st);'+show if op=='pop' else 'if(empty(st))cout<<"EMPTY\\n";else traverse(st);'
  add(kind+'-stack-'+op,('顺序栈' if kind=='seq' else '链栈')+'：'+{'empty':'判空','push':'入栈','top':'读取栈顶','pop':'出栈','traverse':'遍历'}[op],s,ids,[op], '先按输入次序入栈，再完成指定操作。输出序列按栈顶到栈底排列；空栈出栈不改变状态。','n；n 个整数（从底到顶）；'+('待入栈的 x。' if op=='push' else '无其他输入。'),'判空输出 1/0；读顶输出值或 EMPTY；其他操作输出顶到底序列，空为 EMPTY。',cs,decl,alg,ARR+make+('int x;cin>>x;' if op=='push' else ''),act,[indices[op]],note='保留本节顺序栈/链栈函数主体；空操作由题面规定，驱动在调用前检查；遍历输出增加空格。')
add('array-stack-basic','数组栈：下标维护与出栈',s,[5],['array-stack'],'把 n 个输入值依次入数组栈，然后至多出栈一次，输出剩余栈顶。top 初始为 -1。','n；n 个整数。','有剩余元素输出栈顶；否则输出 EMPTY。',[(inp(a),f'{a[-2]}\n' if len(a)>=2 else 'EMPTY\n') for a in [[],[2],[1,-3,4]]],'','',ARR,'int stackData[100],topIndex=-1;for(int x:a)stackData[++topIndex]=x;if(topIndex>=0)--topIndex;if(topIndex>=0)cout<<stackData[topIndex]<<"\\n";else cout<<"EMPTY\\n";',[5])
s='naes6mh6d27dh4fg'
for op,act,expected in [('size','cout<<st.size()<<"\\n";',lambda a:f'{len(a)}\n'),('pop','if(!st.empty())st.pop();vector<int>v;while(!st.empty()){v.push_back(st.top());st.pop();}printv(v);',lambda a:exp(a[-2::-1] if a else [])),('traverse','vector<int>v;while(!st.empty()){v.push_back(st.top());st.pop();}printv(v);',lambda a:exp(a[::-1]))]:
 add('stl-stack-'+op,'STL stack：'+{'size':'入栈并求大小','pop':'删除栈顶','traverse':'遍历并清空'}[op],s,[0,1],['stack::'+op],'按数组顺序 push 到以 vector 为底层容器的 stack，再执行本题操作。','n；n 个整数。','大小题输出元素数量；其余按顶到底输出，空为 EMPTY。',[(inp(a),expected(a)) for a in [[],[2],[-1,2,-1]]],'','',ARR+'stack<int,vector<int>>st;for(int x:a)st.push(x);',act,[1])
# applications and monotonic stack
s='bza8d7o3twyr1qqc'
add('brackets','括号匹配：栈应用',s,[0],['check_brackets'],'忽略其他字符，判断 () 和 [] 是否正确嵌套；空串合法。','一整行字符串，可含空格和字母。','合法输出 YES，否则 NO。',[('a[(b)]\n','YES\n'),('\n','YES\n'),('([)]\n','NO\n')],'',b(s,0),'string s;getline(cin,s);','cout<<(check_brackets(s)?"YES":"NO")<<"\\n";',[0],['字符串长度 0..100','仅 ()[] 被视作括号，其他字符忽略。'])
add('calculate','双栈：整数四则表达式求值',s,[1],['calculate','cal'],'对合法表达式求值，支持非负整数字面量、二元 + - * / 和圆括号；除法按实数计算，遵循优先级及左结合。','一整行合法表达式。','输出结果，固定保留 6 位小数。',[(t+'\n',f'{v:.6f}\n') for t,v in [('0',0),('12+3*(4-2)',18),('8/4/2',1)]],'',b(s,1),'string s;getline(cin,s);','cout<<fixed<<setprecision(6)<<calculate(s)<<"\\n";',[1],['表达式长度 1..100；整数 0..1000','中间值绝对值≤1000000；除数非零；不含一元正负号。'])
s='uqmmo4zf165fax00'
for i,fn,desc,oracle in [(0,'left_smaller','对每个数，找到它左边最近的严格小于它的数；不存在输出 not find。',lambda a:[next((str(a[j]) for j in range(i-1,-1,-1) if a[j]<x),'not find') for i,x in enumerate(a)]),(1,'left_bigger','对每个数，统计紧邻其左侧、连续且严格大于它的元素数量；遇到第一个不大于它的数就停止。',lambda a:[next((i-j-1 for j in range(i-1,-1,-1) if a[j]<=x),i) for i,x in enumerate(a)])]:
  cs=[(inp(a),(' '.join(map(str,oracle(a)))+'\n') if a else 'EMPTY\n') for a in [[],[2,2,1,3],[-2,-3,4]]]
  add('monostack-'+fn,'单调栈：'+('左侧最近较小值' if i==0 else '左侧连续较大元素数'),s,[i],[fn],desc,'n；n 个整数。','按输入顺序输出每个元素的答案；空数组输出 EMPTY。',cs,'',b(s,i),ARR,'if(!n)cout<<"EMPTY\\n";else '+fn+'(a.data(),n);',[i])
# queues
s='xhmfwclpu62ys3yo'
for kind,ids,pre,make,indices in [('chain',[0,1],'using datatype=int;','chainQueue q;for(int x:a)push(q,x);',{'empty':1,'push':1,'front':1,'pop':1,'traverse':1}),('ring',[2,3],'','seqQueue q;for(int x:a)push(q,x);',{'empty':3,'push':3,'front':3,'pop':3,'traverse':3,'full':3})]:
 alg=blocks(s,ids).replace('<<""',"<<' '")
 for op in indices:
  arrays=[[],[2],[-2,1,-2]] if op!='full' else [[],list(range(98)),list(range(99))]
  cs=[]
  for a in arrays:
   e=('1\n' if not a else '0\n') if op=='empty' else ('1\n' if len(a)==99 else '0\n') if op=='full' else f'{a[0]}\n' if op=='front' and a else 'EMPTY\n' if op=='front' else exp(a+[7] if op=='push' else a[1:] if op=='pop' else a)
   cs.append((inp(a,'7\n' if op=='push' else ''),e))
  seqshow='vector<int>v;while(!empty(q)){v.push_back(front(q));pop(q);}printv(v);'
  act='cout<<empty(q)<<"\\n";' if op=='empty' else 'cout<<full(q)<<"\\n";' if op=='full' else 'if(empty(q))cout<<"EMPTY\\n";else cout<<front(q)<<"\\n";' if op=='front' else ('push(q,x);' if op=='push' else 'if(!empty(q))pop(q);' if op=='pop' else '')+seqshow
  if op=='traverse':act='if(empty(q))cout<<"EMPTY\\n";else '+('traserve(q);' if kind=='chain' else 'traverse(q);')
  add(kind+'-queue-'+op,('链队列' if kind=='chain' else '循环队列')+'：'+{'empty':'判空','full':'判满','push':'入队','front':'读取队头','pop':'出队','traverse':'遍历并清空'}[op],s,ids,[{'traverse':'traserve' if kind=='chain' else 'traverse'}.get(op,op)],'先按输入顺序入队，执行本题指定操作。循环数组 N=100，保留一个空位，最大有效容量 99。','n；n 个整数；'+('待入队 x。' if op=='push' else '无其他输入。'),'判空/满输出 1 或 0；读队头输出值或 EMPTY；其余按队头到队尾输出，空为 EMPTY。',cs,pre,alg,ARR+make+('int x;cin>>x;' if op=='push' else ''),act,[indices[op]],['0≤n≤99；入队题 n≤98','元素在 [-100,100]；空队列出队保持为空。'])
s='vn1vtgg058gsyr91'
for op,act,oracle in [('push','int x;cin>>x;q.push(x);',lambda a:a+[7]),('back','if(q.empty())cout<<"EMPTY\\n";else cout<<q.back()<<"\\n";',lambda a:f'{a[-1]}\n' if a else 'EMPTY\n'),('pop','if(!q.empty())q.pop();',lambda a:a[1:]),('size','cout<<q.size()<<"\\n";',lambda a:f'{len(a)}\n'),('traverse','',lambda a:a)]:
 show='vector<int>v;while(!q.empty()){v.push_back(q.front());q.pop();}printv(v);'
 add('stl-queue-'+op,'STL queue：'+{'push':'入队','back':'读取队尾','pop':'出队','size':'元素数量','traverse':'遍历'}[op],s,[0,1],['queue::'+op],'按输入顺序入标准队列，然后完成指定操作。','n；n 个整数；'+('x。' if op=='push' else '无其他输入。'),'标量题输出值或 EMPTY；序列题输出队头到队尾，空为 EMPTY。',[(inp(a,'7\n' if op=='push' else ''),oracle(a) if isinstance(oracle(a),str) else exp(oracle(a))) for a in [[],[1],[-2,3,-2]]],'','',ARR+'queue<int>q;for(int x:a)q.push(x);',act+('' if op in ['back','size'] else show),[1])
for op,act,oracle in [('slice','int l,r;cin>>l>>r;deque<int>q(a.begin()+l,a.begin()+r);',lambda a:a[0:len(a)]),('push-front','deque<int>q(a.begin(),a.end());int x;cin>>x;q.push_front(x);',lambda a:[7]+a),('pop-front','deque<int>q(a.begin(),a.end());if(!q.empty())q.pop_front();',lambda a:a[1:])]:
 add('deque-'+op,'STL deque：'+{'slice':'区间构造','push-front':'表头入队','pop-front':'表头出队'}[op],s,[0,2],['deque::'+op],'对双端队列执行'+{'slice':'从数组半开区间 [l,r) 初始化','push-front':'把 x 放在队头','pop-front':'删除队头，空队列不变'}[op]+'。','n；n 个整数；'+('l r，本题 0≤l≤r≤n。' if op=='slice' else 'x。' if op=='push-front' else '无其他输入。'),'从前到后输出；空为 EMPTY。',[(inp(a,(f'0 {len(a)}\n' if op=='slice' else '7\n' if op=='push-front' else '')),exp(oracle(a))) for a in [[],[2],[-1,2,-1]]],'','',ARR,act+'printv(vector<int>(q.begin(),q.end()));',[2])
s='hhq73pa711g46fxo'
add('yanghui','队列应用：杨辉三角',s,[0],['yanghuiTriangle'],'输出杨辉三角前 n 行；每行首尾为 1，其余数为上一行相邻两数之和。忽略对齐空格差异。','一个整数 n。','每行输出一行三角形；n=0 输出 EMPTY。',[(str(n)+'\n',(''.join(' '.join(str(math.comb(i,j)) for j in range(i+1))+'\n' for i in range(n)) if n else 'EMPTY\n')) for n in [0,1,5]],'',b(s,0),'int n;cin>>n;','if(!n)cout<<"EMPTY\\n";else yanghuiTriangle(n);',[0],['0≤n≤15'])
s='dzb4ust6p1tn1p4i'
add('sliding-max','单调队列：滑动窗口最大值',s,[0],['rangeMax'],'窗口从左到右每次移动一格，输出每个长度 m 的窗口内最大值。','n m；随后 n 个整数。','按窗口起点顺序输出最大值。',[(f'{len(a)} {m}\n'+ ' '.join(map(str,a))+'\n',exp([max(a[i:i+m]) for i in range(len(a)-m+1)])) for a,m in [([3],1),([2,2,-1,4],2),([-3,-2,-5],3)]],'',b(s,0),'int n,m;cin>>n>>m;vector<int>a(n);for(int &x:a)cin>>x;','rangeMax(a,m);',[0],['1≤m≤n≤30','元素 [-100,100]'])
save();print('second saved',len(P))
# matrices
s='tha5paui8hzzxa5c';alg=blocks(s,range(6))+'''\nvoid pm(matrix m){cout<<m.row<<' '<<m.col<<'\\n';for(int i=0;i<m.row;i++){for(int j=0;j<m.col;j++)cout<<m.a[i][j]<<' ';cout<<'\\n';}}\n'''
def matinput(a):return f'{len(a)} {len(a[0]) if a else 0}\n'+''.join(' '.join(map(str,r))+'\n' for r in a)
def matexp(a):return matinput(a)
readmat='int r,c;cin>>r>>c;matrix a(r,c);for(int i=0;i<r;i++)for(int j=0;j<c;j++)cin>>a.a[i][j];'
variants=[([[2]],[[3]]),([[1,-1],[2,0]],[[2],[3]]),([[0,0]],[[1,2],[3,4]])]
add('matrix-multiply','矩阵：乘法',s,range(6),['mat_mul'],'计算 A×B，使用行列内积：结果(i,j)是 A 第 i 行与 B 第 j 列的乘积之和。','先输入 A 的行列数和元素，再输入 B 的行列数和元素。','先输出结果行列数，再逐行输出元素。',[(matinput(a)+matinput(c),matexp([[sum(a[i][k]*c[k][j] for k in range(len(c))) for j in range(len(c[0]))] for i in range(len(a))])) for a,c in variants],'',alg,readmat+'int r2,c2;cin>>r2>>c2;matrix z(r2,c2);for(int i=0;i<r2;i++)for(int j=0;j<c2;j++)cin>>z.a[i][j];','pm(mat_mul(a,z));',[1],['各维度 1..8，A列数=B行数','元素 [-20,20]'])
sym=[[[2]],[[1,-2],[-2,3]],[]]
add('symmetric-compress','对称矩阵：下三角压缩',s,range(6),['convert(matrix)'],'把对称方阵的下三角（含主对角线）按行存成一维序列。','r c（r=c）；随后矩阵元素。允许 r=c=0。','输出压缩序列；空矩阵输出 EMPTY。',[(matinput(a),exp([a[i][j] for i in range(len(a)) for j in range(i+1)])) for a in sym],'',alg,readmat,'printv(convert(a));',[2],['0≤r=c≤8','保证矩阵对称；元素 [-100,100]'])
add('symmetric-restore','对称矩阵：压缩序列还原',s,range(6),['convert(vector<int>)'],'把按行存储的下三角序列恢复成对称矩阵。长度必须是三角数；非法长度返回空矩阵。','n；n 个压缩值。','先输出行列数，再输出还原矩阵；非法长度或空序列输出 0 0。',[(inp(v),matexp(a)) for v,a in [([],[]),([1,-2,3],[[1,-2],[-2,3]]),([1,2],[])]],'',alg,ARR,'pm(convert(a));',[2],['0≤n≤36','元素 [-100,100]'])
smats=[[[0]],[[1,0],[0,-2]],[[0,3,0],[4,0,5]]]
add('sparse-compress','稀疏矩阵：三元组压缩',s,range(6),['sm_convert(matrix)'],'按先行后列的次序记录全部非零元，每个三元组为行号、列号和值。','矩阵行列数；随后元素。','第一行非零元数量，随后每行 r c value，下标从 0 开始。',[(matinput(a),str(sum(x!=0 for r in a for x in r))+'\n'+''.join(f'{i} {j} {x}\n' for i,r in enumerate(a) for j,x in enumerate(r) if x)) for a in smats],'',alg,readmat,'auto z=sm_convert(a);cout<<z.n<<"\\n";for(int i=0;i<z.n;i++)cout<<z.nz[i].r<<" "<<z.nz[i].c<<" "<<z.nz[i].data<<"\\n";',[4],['1≤行列数≤8','非零元≤64，元素 [-100,100]'])
triples=[(1,1,[]),(2,2,[(0,0,1),(1,1,-2)]),(2,3,[(0,1,3),(1,0,4),(1,2,5)])]
rdsm='int r,c,k;cin>>r>>c>>k;sMatrix z;z.row=r;z.col=c;z.n=k;for(int i=0;i<k;i++)cin>>z.nz[i].r>>z.nz[i].c>>z.nz[i].data;'
for transpose in [False,True]:
 cs=[]
 for r,c,ts in triples:
  a=[[0]*c for _ in range(r)]
  for i,j,v in ts:a[i][j]=v
  if transpose:a=[list(row) for row in zip(*a)]
  cs.append((f'{r} {c} {len(ts)}\n'+''.join(f'{i} {j} {v}\n' for i,j,v in ts),matexp(a)))
 add('sparse-'+('transpose' if transpose else 'restore'),'稀疏矩阵：'+('三元组转置' if transpose else '三元组还原'),s,range(6),['sm_tr' if transpose else 'sm_convert(sMatrix)'],'根据三元组'+('交换行列并按行列排序，再还原转置矩阵。' if transpose else '恢复所有元素，未出现的位置为 0。'),'r c k；随后 k 行：0-based 行号 列号 非零值。位置互异。','先输出结果行列数，再逐行输出元素。',cs,'',alg,rdsm,'pm(sm_convert('+('sm_tr(z)' if transpose else 'z')+'));',[5 if transpose else 4],['1≤r,c≤8；0≤k≤r*c','坐标有效、互不重复；值为 [-100,100] 中非零数。'])
# chain strings
s='xwlnuwghb5uqp1sc';alg=blocks(s,range(4));show='if(!cs)cout<<"EMPTY\\n";else cs_traverse(cs);'
for id,title,funcs,target,read,run,cs,desc in [
 ('chainstr-assign','链串：分块创建',['cs_assign'],1,'string text;getline(cin,text);','chainString cs=cs_assign(text.c_str());'+show,[(v+'\n',v+'\n' if v else 'EMPTY\n') for v in ['', 'abcde','abcdefghijk']],'每个结点最多存 5 个字符，把字符串建成无头双向循环链串，按原顺序输出。'),
 ('chainstr-traverse','链串：绕环遍历',['cs_traverse'],1,'string text;getline(cin,text);','chainString cs=cs_assign(text.c_str());'+show,[(v+'\n',v+'\n' if v else 'EMPTY\n') for v in ['', 'x','abcdefghij']],'从链串首结点开始输出各块有效字符，绕回首结点后停止。'),
 ('chainstr-insert','链串：在首块后插入新块',['cs_insert_post'],1,'string text,chunk;getline(cin,text);getline(cin,chunk);','chainString cs=cs_assign(text.c_str());chainString q=new csNode;strcpy(q->data,chunk.c_str());cs_insert_post(cs,q);'+show,[(v+'\n'+w+'\n',(v[:5]+w+v[5:] if v else w)+'\n') for v,w in [('', 'xy'),('abcde','Z'),('abcdefghij','12')]],'新块含 1..5 个字符。在当前首块之后插入它；原链串为空时新块自成环。'),
 ('chainstr-delete','链串：删除指定下标字符',['cs_delete'],2,'string text;getline(cin,text);int p;cin>>p;','chainString cs=cs_assign(text.c_str());bool ok=cs_delete(cs,p);cout<<ok<<"\\n";'+show,[(v+'\n'+str(p)+'\n',str(int(0<=p<len(v)))+'\n'+((v[:p]+v[p+1:] if 0<=p<len(v) else v) or 'EMPTY')+'\n') for v,p in [('',0),('a',0),('abcdefghij',5),('abc',7)]],'删除从 0 开始的下标 p。越界或负下标返回失败且原串不变；删除唯一字符后为空。'),
 ('chainstr-compare','链串：字典序比较',['cs_compare'],3,'string x,y;getline(cin,x);getline(cin,y);','cout<<cs_compare(cs_assign(x.c_str()),cs_assign(y.c_str()))<<"\\n";',[(x+'\n'+y+'\n',str((x>y)-(x<y))+'\n') for x,y in [('', ''),('abcdefghij','abcdefghik'),('abc','ab')]],'按字典序比较两个链串：首个不同字符决定大小；一串为另一串前缀时短串小。')]:
 add(id,title,s,range(4),funcs,desc,('两行字符串。' if id.endswith('compare') else '第一行原字符串；第二行新块。' if id.endswith('insert') else '第一行原字符串；第二行整数 p。' if id.endswith('delete') else '一行原字符串，允许空行。'),'删除题先输出成功标志 1/0 再输出结果；比较题输出 -1/0/1；其余输出拼接字符串，空串 EMPTY。',cs,'',alg,read,run,[target],['字符串由英文字母或数字构成，长度 0..30','插入新块长度 1..5；删除下标范围 -1..35'])
# generalized tables parser/formatter are IO helpers
s='hrhvgg9q5xwn4zwn';alg=blocks(s,range(3))+'''
gTable parsegt(const string&s,int &i){gTable h=new gtNode;vector<pair<char,gTable>>v;++i;while(i<(int)s.size()&&s[i]!=')'){if(s[i]==','){++i;continue;}if(s[i]=='(')v.push_back({0,parsegt(s,i)});else v.push_back({s[i++],nullptr});}++i;for(int k=(int)v.size()-1;k>=0;--k){if(v[k].second)gt_insert(h,v[k].second);else gt_insert(h,v[k].first);}return h;}
string fmtgt(gTable h){string r="(";bool first=true;for(auto p=h?h->next:nullptr;p;p=p->next){if(!first)r+=',';first=false;r+=p->tag?fmtgt(p->ele.link):string(1,p->ele.data);}return r+")";}
'''
for sub in [False,True]:
 cs=[('(a,b)\n'+('(x,y)' if sub else 'x')+'\n',('((x,y),a,b)' if sub else '(x,a,b)')+'\n'),('()\n'+('()' if sub else 'a')+'\n',('(())' if sub else '(a)')+'\n'),('((a),b)\n'+('(b)' if sub else 'b')+'\n',('((b),(a),b)' if sub else '(b,(a),b)')+'\n')]
 rd='string s,t;cin>>s>>t;int i=0;gTable h=parsegt(s,i);'
 run=('i=0;gt_insert(h,parsegt(t,i));' if sub else 'gt_insert(h,t[0]);')+'cout<<fmtgt(h)<<"\\n";'
 add('gt-insert-'+('subtable' if sub else 'atom'),'广义表：插入'+('子表' if sub else '原子'),s,range(3),['gt_insert(gTable)' if sub else 'gt_insert(char)'],'在带头结点广义表的最前面插入'+('一个子表，子表仍作为单个元素。' if sub else '一个字符原子。'),'两行：原广义表；'+('新子表。' if sub else '单个原子字符。')+' 使用如 (a,(b,c)) 的括号语法，无空格。','输出新的规范括号表示。',cs,'',alg,rd,run,[1],['每表最多 20 个原子/子表，嵌套深度≤5','原子为小写英文字母；无循环引用。'])
add('gt-equal','广义表：结构与内容相等',s,range(3),['gt_equal'],'同时比较每层元素顺序、原子值和子表结构；仅原子序列相同但分组不同不算相等。','两行合法广义表括号表示，无空格。','相等 YES，否则 NO。',[(x+'\n'+y+'\n',ans+'\n') for x,y,ans in [('()','()','YES'),('(a,(b,c))','(a,(b,c))','YES'),('(a,(b))','((a),b)','NO'),('((a),b)','((a),c)','NO')]],'',alg,'string x,y;cin>>x>>y;int i=0,j=0;auto a=parsegt(x,i),z=parsegt(y,j);','cout<<(gt_equal(a,z)?"YES":"NO")<<"\\n";',[2],['每表最多 20 个元素，深度≤5；原子为小写字母；无循环引用。'])
add('gt-traverse','广义表：递归遍历子表',s,range(3),['gt_traverse'],'按原笔记的递归遍历输出：原子直接输出；遇到子表，输出“子表:”再递归访问。换行与连续空格不影响判题。','一行合法广义表括号表示，无空格。','原子之间以空格分隔，进入子表前显示 子表:；空根表输出 EMPTY。',[('()\n','EMPTY\n'),('(a,b)\n','a b\n'),('(a,(b,c))\n','a\n子表:b c\n')],'',alg,'string s;cin>>s;int i=0;auto h=parsegt(s,i);','if(!h->next)cout<<"EMPTY\\n";else gt_traverse(h);',[1],['元素数≤20，深度≤5；原子为小写字母；无循环引用。'])
# fifteen individual textbook exercise blocks
s='xg722hby8yvyr2i0';pre='''const int N=100;using datatype=int;struct SeqList{int data[N];int len=0;};struct clNode{clNode *pre=nullptr,*next=nullptr;int data=0;};using ChainList=clNode*;using dChainList=ChainList;
ChainList mk(const vector<int>&a){auto h=new clNode;auto p=h;for(int x:a){p->next=new clNode;p->next->pre=p;p=p->next;p->data=x;}return h;}
void pl(ChainList h){vector<int>v;for(auto p=h?h->next:nullptr;p;p=p->next)v.push_back(p->data);printv(v);}
''';alg=blocks(s,range(15));rds=ARR+'SeqList sl;for(int x:a)sl.data[sl.len++]=x;'
add('ex-range-search','课后 01：顺序表区间查找',s,[0],['sl_research'],'只在左闭右开区间 [l,r) 查找首个 x。非法边界或没有匹配返回 -1。','n；n 个整数；l r x。','输出匹配下标或 -1。',[(inp(a,f'{l} {r} {x}\n'),str(next((i for i in range(l,r) if a[i]==x),-1) if 0<=l<=r<=len(a) else -1)+'\n') for a,l,r,x in [([1,2,1],1,3,1),([],0,0,1),([2],-1,1,2)]],pre,b(s,0),rds+'int l,r,x;cin>>l>>r>>x;','cout<<sl_research(sl,l,r,x)<<"\\n";',[0])
add('ex-range-delete','课后 02：顺序表区间删除',s,[1],['sl_delete'],'删除 [l,r)；非法区间返回 -1 且不修改。合法空区间也返回 1。','n；n 个整数；l r。','第一行成功 1 或失败 -1；第二行结果序列，空为 EMPTY。',[(inp(a,f'{l} {r}\n'),str(1 if 0<=l<=r<=len(a) else -1)+'\n'+exp(a[:l]+a[r:] if 0<=l<=r<=len(a) else a)) for a,l,r in [([1,2,3],1,3),([],0,0),([2],0,2)]],pre,b(s,1),rds+'int l,r;cin>>l>>r;','cout<<sl_delete(sl,l,r)<<"\\n";printv(vector<int>(sl.data,sl.data+sl.len));',[1])
add('ex-list-search','课后 03：链表查找与序号',s,[2],['cl_search'],'在带头结点双向链表查找首个 x，输出数据结点位置，从 1 开始。','n；n 个整数；x。','找到输出位置，否则 -1。',[(inp([2,3,2],'2\n'),'1\n'),(inp([],'3\n'),'-1\n'),(inp([-1,3],'3\n'),'2\n')],pre,b(s,2),ARR+'auto h=mk(a);int x;cin>>x;','int ord;auto q=cl_search(h,x,ord);cout<<(q?ord:-1)<<"\\n";',[2])
for id,idx,fn,title,tail,act,variants,oracle,desc in [
 ('insert',3,'cl_insert','找到值后插入','int x,y;cin>>x>>y;','cl_insert(h,x,y);',[([1,2,1],(1,7)),([],(3,4)),([1],(9,-2))],lambda a,x,y:a[:(a.index(x)+1 if x in a else len(a))]+[y]+a[(a.index(x)+1 if x in a else len(a)):],'在首个 x 后插入 y；x 不存在则尾插。'),
 ('delete-all',4,'cl_delete','删除所有指定值','int x;cin>>x;','cl_delete(h,x);',[([1,2,1],(1,)),([],(2,)),([2,3],(8,))],lambda a,x:[v for v in a if v!=x],'删除链表中所有等于 x 的结点，维护 next/pre。'),
 ('unique',7,'cl_unique','相邻重复结点去重','','cl_unique(h);',[(a,()) for a in [[],[1,1,2,1],[-2,-2]]],lambda a:[x for i,x in enumerate(a) if i==0 or x!=a[i-1]],'连续相等结点仅保留一个，不相邻的重复值保留。')]:
 add('ex-list-'+id,f'课后 {idx+1:02d}：'+title,s,[idx],[fn],desc,'n；n 个整数；'+('x y。' if idx==3 else 'x。' if idx==4 else '无其他输入。'),'输出结果序列；空为 EMPTY。',[(inp(a,' '.join(map(str,t))+'\n'),exp(oracle(a,*t))) for a,t in variants],pre,b(s,idx),ARR+'auto h=mk(a);'+tail,act+'pl(h);',[idx])
for idx,ordered in [(5,True),(6,False)]:
 variants=[([1,3],[2,3]),([],[-2]),([2,2],[])]
 add('ex-merge-'+('sorted' if ordered else 'linked'),'课后 '+str(idx+1).zfill(2)+'：'+('有序顺序表归并' if ordered else '双向链表顺次拼接'),s,[idx],['merge'],'把两表'+('按非降序合并，重复元素全部保留。' if ordered else '依次复制到新链表，先第一表再第二表，不作排序。'),'n m；第一表 n 个数；第二表 m 个数。'+('两表均非降序。' if ordered else ''),'输出新表元素；空为 EMPTY。',[(f'{len(a)} {len(z)}\n'+' '.join(map(str,a))+'\n'+' '.join(map(str,z))+'\n',exp(sorted(a+z) if ordered else a+z)) for a,z in variants],pre,b(s,idx),'int n,m;cin>>n>>m;vector<int>a(n),z(m);for(int&x:a)cin>>x;for(int&x:z)cin>>x;',('SeqList x,y,r;for(int v:a)x.data[x.len++]=v;for(int v:z)y.data[y.len++]=v;merge(x,y,r);printv(vector<int>(r.data,r.data+r.len));' if ordered else 'ChainList r=nullptr;merge(mk(a),mk(z),r);pl(r);'),[idx],['0≤n,m≤30；n+m≤60；值 [-100,100]'])
add('ex-ring-split','课后 09：循环双向表按奇偶位置拆分',s,[8],['rcl_split'],'输入结点位置从 1 开始。奇数位置进入 h1，偶数位置进入 h2。保留原题头插策略，因此各输出表内顺序逆转。','n；n 个整数。','两行，分别是奇数位置组和偶数位置组；空组 EMPTY。',[(inp(a),exp(a[::2][::-1])+exp(a[1::2][::-1])) for a in [[],[1],[1,2,3,4,5]]],pre,b(s,8),ARR+'auto h=mk(a);auto t=h;while(t->next)t=t->next;t->next=h;h->pre=t;','ChainList x,y;rcl_split(h,x,y);for(auto q:{x,y}){vector<int>v;for(auto p=q->next;p!=q;p=p->next)v.push_back(p->data);printv(v);}',[8])
add('ex-adjacent-swap','课后 10：与直接前驱交换',s,[9],['dcl_swap'],'查找首个 x，把该数据结点与前一数据结点交换。若不存在或已经是首数据结点，交换失败。','n；n 个整数；x。','先输出成功 1 或失败 0，再输出结果序列，空为 EMPTY。',[(inp(a,f'{x}\n'),str(int(x in a and a.index(x)>0))+'\n'+exp((lambda z,i:z[:i-1]+[z[i],z[i-1]]+z[i+1:])(a,a.index(x)) if x in a and a.index(x)>0 else a)) for a,x in [([1,2,3],3),([],2),([2,2],2)]],pre,b(s,9),ARR+'auto h=mk(a);int x;cin>>x;','cout<<dcl_swap(h,x)<<"\\n";pl(h);',[9])
add('ex-ring-delete-pre','课后 11：删除循环表锚点的前驱',s,[10],['rcl_delete_pre'],'无头双向循环表中，p 指向首元素。删除 p 的直接前驱，即原尾元素；唯一元素时删除自身，空表不变。','n；n 个整数。','从原首锚点开始输出剩余环；空为 EMPTY。',[(inp(a),exp(a[:-1])) for a in [[],[2],[1,2,3]]],pre,b(s,10),ARR+'auto head=mk(a);auto p=head->next;if(p){auto t=p;while(t->next)t=t->next;t->next=p;p->pre=t;}','rcl_delete_pre(p);vector<int>v;if(p){auto q=p;do{v.push_back(q->data);q=q->next;}while(q!=p);}printv(v);',[10])
for idx,fn,title,cs,read,run,desc in [
 (11,'pal','栈判断回文',[(s+'\n',('YES' if s==s[::-1] else 'NO')+'\n') for s in ['', 'abca','abccba']],'string s;getline(cin,s);','cout<<(pal(s)?"YES":"NO")<<"\\n";','按字符严格比较，区分大小写，空串为回文。'),
 (12,'check','三类括号合法性',[('\n','YES\n'),('a{[()]}\n','YES\n'),('([)]\n','NO\n')],'string s;getline(cin,s);','cout<<(check(s)?"YES":"NO")<<"\\n";','检查 ()、[]、{} 的嵌套与配对，忽略其他字符。'),
 (13,'convert','整数进制转换',[('0 2\n','0\n'),('-2147483648 16\n','-80000000\n'),('35 36\n','Z\n'),('3 1\n','INVALID\n')],'int x,k;cin>>x>>k;','string s=convert(x,k);cout<<(s.empty()?"INVALID":s)<<"\\n";','把十进制有符号整数转换为 2..36 进制，字母使用 A..Z；非法进制输出 INVALID。')]:
 add('ex-'+fn,f'课后 {idx+1:02d}：'+title,s,[idx],[fn],desc,'一整行字符串，允许空行。' if idx in [11,12] else '整数 x 和进制 k。','输出题面指定结果。',cs,pre,b(s,idx),read,run,[idx],['字符串长度≤100' if idx!=13 else '-2147483648≤x≤2147483647；0≤k≤40'])
add('ex-building-span','课后 15：连续较矮建筑数量',s,[14],['f'],'对每栋建筑，统计紧邻它左侧且连续严格更矮的建筑数量。相同高度阻断区间。','n；n 个高度。','按原顺序输出数量；n=0 输出 EMPTY。',[(inp(a),exp([next((i-j-1 for j in range(i-1,-1,-1) if a[j]>=x),i) for i,x in enumerate(a)])) for a in [[],[2,2,3],[3,1,2,4]]],pre,b(s,14),ARR,'vector<int>h(n+1),v(n+1);for(int i=1;i<=n;i++)h[i]=a[i-1];f(h.data(),v.data(),n);printv(vector<int>(v.begin()+1,v.end()));',[14])
# seven algorithms in the full exercise program
s='xfaary207gmrfvvu';alg=b(s,0).split('int main()')[0]+'''
DList mkd(const vector<int>&a){auto h=new clNode,p=h;for(int x:a){p->next=new clNode;p->next->pre=p;p=p->next;p->data=x;}return h;}
ChainList mks(const vector<int>&a){auto h=new cNode,p=h;for(int x:a){p->next=new cNode;p=p->next;p->data=x;}return h;}
void pd(DList h){vector<int>v;for(auto p=h->next;p;p=p->next)v.push_back(p->data);printv(v);}
void ps(ChainList h){vector<int>v;for(auto p=h->next;p;p=p->next)v.push_back(p->data);printv(v);}
'''
for fn,title in [('sl_merge','顺序表复制拼接'),('cl_merge','双向链表复制拼接')]:
 variants=[([1,2],[3]),([],[-2]),([2,2],[])]
 run='SeqList x,y;for(int v:a)x.data[x.len++]=v;for(int v:z)y.data[y.len++]=v;auto t=sl_merge(x,y);printv(vector<int>(t.data,t.data+t.len));' if fn=='sl_merge' else 'auto x=mkd(a),y=mkd(z);pd(cl_merge(x,y));'
 add('practice-'+fn,'练习程序：'+title,s,[0],[fn],'复制拼接两个输入表，保持各自顺序，不排序，也不改变原表。','n m；第一表 n 个数；第二表 m 个数。','输出新表，空为 EMPTY。',[(f'{len(a)} {len(z)}\n'+' '.join(map(str,a))+'\n'+' '.join(map(str,z))+'\n',exp(a+z)) for a,z in variants],'',alg,'int n,m;cin>>n>>m;vector<int>a(n),z(m);for(int&x:a)cin>>x;for(int&x:z)cin>>x;',run,[0],['0≤n,m≤25，n+m≤50；值 [-100,100]'])
add('practice-copy','练习程序：单链表深复制',s,[0],['cl_copy'],'分配全新的数据结点复制链表。复制后把原表第一个值改成 999，复制表仍应保留原值。','n；n 个整数。','输出复制表原有内容，空为 EMPTY。',[(inp(a),exp(a)) for a in [[],[1],[-2,3,-2]]],'',alg,ARR+'auto h=mks(a);','auto c=cl_copy(h);if(h->next)h->next->data=999;ps(c);',[0])
add('practice-delete','练习程序：单链表按值删除并返回位置',s,[0],['Delete'],'删除第一个等于 x 的结点，并返回它原本从 1 开始的位置；找不到返回 -1。','n；n 个整数；x。','先输出位置，再输出剩余表，空为 EMPTY。',[(inp(a,str(x)+'\n'),str(a.index(x)+1 if x in a else -1)+'\n'+exp(a[:a.index(x)]+a[a.index(x)+1:] if x in a else a)) for a,x in [([],2),([2,3,2],2),([1,2],8)]],'',alg,ARR+'auto h=mks(a);int x;cin>>x;','cout<<Delete(h,x)<<"\\n";ps(h);',[0])
add('practice-swap','练习程序：双向链表相邻交换',s,[0],['swap'],'找到首个 x，将它与前一数据结点交换。找到且已是首元素时返回 1、表不变；未找到返回 0。','n；n 个整数；x。','先输出返回标志，再输出链表；空为 EMPTY。',[(inp(a,str(x)+'\n'),str(int(x in a))+'\n'+exp((lambda z,i:z[:i-1]+[z[i],z[i-1]]+z[i+1:])(a,a.index(x)) if x in a and a.index(x)>0 else a)) for a,x in [([],2),([1,2,3],3),([2,2],2)]],'',alg,ARR+'auto h=mkd(a);int x;cin>>x;','cout<<swap(x,h)<<"\\n";pd(h);',[0])
for fn,mul in [('Add',False),('Mul',True)]:
 ts=[([(2,2),(1,0)],[(3,1),(-1,0)]),([],[]),([(1,1)],[( -1,1)])];cs=[]
 for a,z in ts:
  c=collections.Counter()
  if mul:
   for x,i in a:
    for y,j in z:c[i+j]+=x*y
  else:
   for x,i in a+z:c[i]+=x
  v=[(coef,i) for i,coef in sorted(c.items(),reverse=True) if coef]
  cs.append((f'{len(a)} {len(z)}\n'+''.join(f'{x} {i}\n' for x,i in a+z),str(len(v))+'\n'+''.join(f'{x} {i}\n' for x,i in v)))
 read='int n,m;cin>>n>>m;Poly a=new pNode,z=new pNode;auto p=a;for(int i=0;i<n;i++){p->next=new pNode;p=p->next;cin>>p->coef>>p->exp;}p=z;for(int i=0;i<m;i++){p->next=new pNode;p=p->next;cin>>p->coef>>p->exp;}'
 add('practice-poly-'+fn.lower(),'练习程序：多项式'+('乘法' if mul else '加法'),s,[0],[fn],'两个多项式按指数降序存储，'+('逐项相乘并合并相同指数。' if mul else '归并相同指数并相加系数。')+'系数为 0 的结果项不输出。','n m；随后 A 的 n 项和 B 的 m 项，每项输入“系数 指数”。','首行非零项数量；随后按指数降序输出“系数 指数”。零多项式仅输出 0。',cs,'',alg,read,'auto c='+fn+'(a,z);int k=0;for(auto p=c->next;p;p=p->next)k++;cout<<k<<"\\n";for(auto p=c->next;p;p=p->next)cout<<p->coef<<" "<<p->exp<<"\\n";',[0],['0≤n,m≤8；单个多项式指数严格降序且互异','系数为 [-10,10] 非零整数；指数 0..10'])
save();print('third saved',len(P))
# binary trees
s='nkgizgxflk13u2gn';pre='const int N=100;';base=blocks(s,[0,1,2,3,6,7,8,9,10,11])
TREES=['#','A##','BA##C##','AA###']
def parsepre(t):
 it=iter(t)
 def f():
  x=next(it)
  return None if x=='#' else (x,f(),f())
 return f()
def order(t,mode):
 if not t:return ''
 x,l,r=t
 return (x if mode=='pre' else '')+order(l,mode)+(x if mode=='mid' else '')+order(r,mode)+(x if mode=='post' else '')
def bracket(t):return '('+bracket(t[1])+t[0]+bracket(t[2])+')' if t else ''
rdtree='string text;cin>>text;int idx=0;auto rt=create_lrpTree(text,idx);'
for id,title,fn,extra,mode,target in [('binary-pre-rec','递归先序遍历','preOrder',4,'pre',4),('binary-pre-stack','栈实现先序遍历','preOrder',5,'pre',5),('binary-mid','递归中序遍历','midOrder',None,'mid',7),('binary-post','递归后序遍历','postOrder',None,'post',10)]:
 alg=base+('\n'+b(s,extra) if extra is not None else '')
 add(id,'二叉树：'+title,s,[0,6,target],[fn],'二叉树用先序字符序列输入，# 表示空子树。按'+{'pre':'根、左、右','mid':'左、根、右','post':'左、右、根'}[mode]+'次序访问每个数据结点一次。','一个不含空格的合法先序串，例如 BA##C##。','输出访问字符序列；空树输出 EMPTY。',[(t+'\n',(order(parsepre(t),mode) or 'EMPTY')+'\n') for t in TREES],pre,alg,rdtree,'if(!rt)cout<<"EMPTY\\n";else '+fn+'(rt);',[target],['结点数 0..30；标签 A..Z，可重复','先序串必须为完整合法编码。'])
add('binary-create-pointer','二叉树：用左右子树创建根结点',s,[0,1,6,8],['create_lrpTree(char,lrpTree,lrpTree)'],'给定根字符和两棵子树的先序编码，构建根结点并连接左右子树。','根字符；左子树编码；右子树编码。# 代表空树。','输出 (左子树 根字符 右子树) 括号表示。',[(f'{x} {l} {r}\n',f'({bracket(parsepre(l))}{x}{bracket(parsepre(r))})\n') for x,l,r in [('A','#','#'),('B','A##','C##'),('A','A##','#')]],pre,base,'char x;string l,r;cin>>x>>l>>r;int i=0,j=0;auto lc=create_lrpTree(l,i),rc=create_lrpTree(r,j);','cout<<convertToBracket(create_lrpTree(x,lc,rc))<<"\\n";',[1],['根标签 A..Z；总节点数≤30；子树编码合法。'])
add('binary-create-array','二叉树：数组结点创建',s,[2,3],['create_lraTree'],'从 idx=0 起依次建立数组结点，保存标签和左右孩子下标。每次创建返回当前下标后使 idx 增加 1。','n；随后 n 行：标签 左孩子下标 右孩子下标，空孩子为 -1。','每个结点一行：创建下标 标签 左下标 右下标；n=0 输出 EMPTY。',[('0\n','EMPTY\n'),('1\nA -1 -1\n','0 A -1 -1\n'),('3\nB 1 2\nA -1 -1\nC -1 -1\n','0 B 1 2\n1 A -1 -1\n2 C -1 -1\n')],pre,blocks(s,[2,3]),'int n;cin>>n;vector<char>d(n);vector<int>l(n),r(n);for(int i=0;i<n;i++)cin>>d[i]>>l[i]>>r[i];','lraTree t;int idx=0;if(!n)cout<<"EMPTY\\n";for(int i=0;i<n;i++){int p=create_lraTree(t,d[i],idx,l[i],r[i]);cout<<p<<" "<<t[p].data<<" "<<t[p].lc<<" "<<t[p].rc<<"\\n";}',[3],['0≤n≤30；标签 A..Z；孩子下标为 -1 或 0..n-1；不构成环。'])
for id,title,target,fn,mode in [('binary-create-pre','由先序空标记序列建树',6,'create_lrpTree(string,int&)','encode'),('binary-to-bracket','转换为中序括号形式',8,'convertToBracket','encode'),('binary-from-bracket','从中序括号形式恢复',9,'convertToTree','decode'),('binary-bracket-post','直接从括号串求后序',11,'postOrder(string)','post')]:
 cs=[]
 for t in TREES:
  bt=bracket(parsepre(t));cs.append(((bt or '()')+'\n' if mode in ['decode','post'] else t+'\n',((order(parsepre(t),'post') if mode=='post' else bt) or 'EMPTY')+'\n'))
 read='string text;cin>>text;'
 run=('auto rt=convertToTree(text);string out=convertToBracket(rt);cout<<(out.empty()?"EMPTY":out)<<"\\n";' if mode=='decode' else 'string out=postOrder(text);cout<<(out.empty()?"EMPTY":out)<<"\\n";' if mode=='post' else 'int i=0;auto rt=create_lrpTree(text,i);string out=convertToBracket(rt);cout<<(out.empty()?"EMPTY":out)<<"\\n";')
 add(id,'二叉树：'+title,s,[0,6,8,9,11],[fn],'采用原笔记 (左子树 根字符 右子树) 格式，空子树不占字符。例如 ((A)B(C)) 的根是 B。'+('输入先序 # 编码，将其构建后转换为括号表示。' if mode=='encode' else '解析给定括号表示并输出规范结果。' if mode=='decode' else '按左右根次序输出字符，无需构建结点。'),'一个合法'+('先序 # 编码串。' if mode=='encode' else '括号串；空树用 () 输入。'),'转换题输出规范括号串；后序题输出字符序列；空树为 EMPTY。',cs,pre,base,read,run,[target],['节点数 0..30；标签为 A..Z 单字符；输入保证语法合法。'])
add('complete-tree-index','完全二叉树：数组父子下标','errmguf6z99r6eqp',[],[],'完全二叉树按层序从 0 编号。给定结点 p，求父结点和左右孩子下标，越界关系输出 -1。','n p。','输出 parent left right；空树时三个值均为 -1。',[('0 0\n','-1 -1 -1\n'),('1 0\n','-1 -1 -1\n'),('6 2\n','0 5 -1\n')],'','','int n,p;cin>>n>>p;','if(n==0)cout<<"-1 -1 -1\\n";else cout<<(p?((p-1)/2):-1)<<" "<<(2*p+1<n?2*p+1:-1)<<" "<<(2*p+2<n?2*p+2:-1)<<"\\n";',[],['0≤n≤1000；n>0 时 0≤p<n；n=0 时 p=0'],note='本节无原始代码；此题为补充练习，验证完全二叉树与数组下标关系。')
# heap
s='ebic8kgy45ilbbyn';alg=blocks(s,range(3));pre='using datatype=int;'
def adjust(a,cur):
 a=a[:];n=len(a)
 if n==0:return a
 x=a[cur]
 while 2*cur+1<n:
  i=2*cur+1
  if i+1<n and a[i+1]>a[i]:i+=1
  if a[i]<=x:break
  a[cur]=a[i];cur=i
 a[cur]=x;return a
def makeheap(a):
 a=a[:]
 for i in range(len(a)//2-1,-1,-1):a=adjust(a,i)
 return a
for op,idx,fn,title,variants,oracle,run,desc in [
 ('adjust',0,'heap_adjust','向下调整',[[],[2],[1,5,4]],lambda a:adjust(a,0),'heap_adjust(a.data(),n,0);','除根外的左右子树已是大顶堆，只对根执行一次向下筛选。'),
 ('build',0,'heap_make','自底向上建大顶堆',[[],[2],[3,1,8,9,2]],makeheap,'heap_make(a.data(),n);','按 n/2-1 到 0 顺序对非叶结点执行向下调整。'),
 ('push',1,'heap_push','插入并向上调整',[[],[2],[3,1,8,9,2]],lambda a:makeheap(a+[7]),'heap_make(a.data(),n);int x;cin>>x;heap_push(a.data(),n,x);','先对原数组建大顶堆，再插入 x，并沿父指针向上调整。'),
 ('pop',2,'heap_pop','删除堆顶',[[],[2],[3,1,8,9,2]],lambda a:adjust([makeheap(a)[-1]]+makeheap(a)[1:-1],0) if len(a)>1 else [],'heap_make(a.data(),n);heap_pop(a.data(),n);','先建大顶堆，用末元素替换堆顶并向下调整；空堆不变。')]:
 cs=[]
 for a in variants:
  e=oracle(a)
  if op=='push':
   e=makeheap(a);e.append(7);i=len(e)-1
   while i and e[(i-1)//2]<e[i]:j=(i-1)//2;e[i],e[j]=e[j],e[i];i=j
  cs.append((inp(a,'7\n' if op=='push' else ''),exp(e)))
 add('heap-'+op,'数组堆：'+title,s,range(3),[fn],desc+'较大孩子相等时选左孩子，孩子不大于当前值时停止。','n；n 个元素；'+('随后 x。' if op=='push' else '无其他输入。'),'输出操作后的层序数组，空为 EMPTY。',cs,pre,alg,ARR+'a.resize(100);',run+'printv(vector<int>(a.begin(),a.begin()+n));',[idx],['0≤n≤30，值 [-100,100]','调整题左右子树已各自满足大顶堆性质。'])
s='ov6067m2ggauqgm5'
for op in ['max','min','custom','top','push','pop']:
 cs=[]
 for a in [[],[2],[-2,3,3]]:
  e=('EMPTY\n' if not a else str(max(a))+'\n') if op=='top' else exp(sorted(a+[7] if op=='push' else sorted(a,reverse=True)[1:] if op=='pop' else a,reverse=op not in ['min','custom']))
  cs.append((inp(a,'7\n' if op=='push' else ''),e))
 decl='priority_queue<int,vector<int>,greater<int>>q;' if op in ['min','custom'] else 'priority_queue<int>q;'
 if op=='custom':decl='priority_queue<node,vector<node>,greater<node>>q;'
 init='for(int x:a)q.push({x});' if op=='custom' else 'for(int x:a)q.push(x);'
 run='if(q.empty())cout<<"EMPTY\\n";else cout<<q.top()<<"\\n";' if op=='top' else ('int x;cin>>x;q.push(x);' if op=='push' else 'if(!q.empty())q.pop();' if op=='pop' else '')+'vector<int>v;while(!q.empty()){v.push_back('+('q.top().key' if op=='custom' else 'q.top()')+');q.pop();}printv(v);'
 add('priority-'+op,'STL 堆：'+{'max':'大顶堆优先弹出','min':'小顶堆优先弹出','custom':'自定义结点比较','top':'读取最大值','push':'插入元素','pop':'删除最大值'}[op],s,[0,1,2],['priority_queue::'+op],'按输入次序入优先队列，执行题目操作。'+('自定义 node 的 key 越小优先级越高。' if op=='custom' else ''),'n；n 个整数；'+('x。' if op=='push' else '无其他输入。'),'读取题输出最大值或 EMPTY；其余按弹出次序输出，空为 EMPTY。',cs,'',b(s,1) if op=='custom' else '',ARR+decl+init,run,[1 if op=='custom' else 0 if op in ['max','min'] else 2],note='使用本节原始 priority_queue 声明、比较器与操作；输入代替固定常量。')
# threaded tree variants
s='bfazopa9871m0v0n';alg='using datatype=char;'+blocks(s,range(4))+'''
thTree readth(const string&s,int &i){if(i>=(int)s.size()||s[i]=='#'){++i;return nullptr;}auto t=new thNode;t->data=s[i++];t->lc=readth(s,i);t->rc=readth(s,i);return t;}
'''
for op,target,func in [('create',1,'thTree_create'),('next',2,'midNext'),('pre',2,'midpre'),('traverse',3,'thTree_midOrder')]:
 cs=[]
 for t in ['#','A##','BA##C##']:
  tree=parsepre(t);seq=order(tree,'mid');suffix='0\n' if op in ['next','pre'] else '';e='EMPTY\n'
  if op in ['next','pre']:
   e=('HEADER' if not seq or op=='pre' or len(seq)==1 else seq[1])+'\n'
  elif op=='traverse':e=(seq or 'EMPTY')+'\n'
  elif tree:
   def tags(q):
    if not q:return []
    return tags(q[1])+[(q[0],int(q[1] is None),int(q[2] is None))]+tags(q[2])
   e=''.join(f'{x} {l} {r}\n' for x,l,r in tags(tree))
  cs.append((t+'\n'+suffix,e))
 read='string s;cin>>s;int i=0;auto t=readth(s,i);thTree h;thTree_create(h,t);'
 if op in ['next','pre']:read+='int k;cin>>k;'
 run='if(h->ltag)cout<<"EMPTY\\n";else for(auto p=midNext(h);p!=h;p=midNext(p))cout<<p->data<<" "<<p->ltag<<" "<<p->rtag<<"\\n";' if op=='create' else 'if(h->ltag)cout<<"EMPTY\\n";else thTree_midOrder(h);' if op=='traverse' else 'auto p=midNext(h);for(int j=0;j<k&&p!=h;j++)p=midNext(p);auto q='+('midNext' if op=='next' else 'midpre')+'(p);if(q==h)cout<<"HEADER\\n";else cout<<q->data<<"\\n";'
 add('threaded-'+op,'线索二叉树：'+{'create':'中序线索化','next':'寻找直接后继','pre':'寻找直接前驱','traverse':'中序遍历'}[op],s,range(4),[func],'把普通二叉树转成带头结点的中序线索树。'+('按中序输出每个结点的左右线索标志，1 是线索，0 是孩子。' if op=='create' else '从第 k 个中序结点查找相邻结点；边界或空树返回 HEADER。' if op in ['next','pre'] else '仅沿后继访问，直到回到头结点。'),'先序 # 编码；'+('随后 k（从 0 开始）。' if op in ['next','pre'] else '无其他输入。'),'线索化题每行 标签 ltag rtag，空为 EMPTY；前驱/后继题输出标签或 HEADER；遍历题输出字符序列，空为 EMPTY。',cs,'',alg,read,run,[target],['0≤节点数≤30；标签 A..Z','非空树 0≤k<结点数；空树 k=0。'])
# Huffman
s='ysfglgiveivmrnif';alg=blocks(s,range(4));rdhu='int m;cin>>m;char d[M];int w[M];for(int i=0;i<m;i++)cin>>d[i]>>w[i];huTree t;huTree_create(t,d,w,m);'
def hcodes(pairs):
 heap=[(w,idx,c) for idx,(c,w) in enumerate(pairs)];heapq.heapify(heap);k=len(heap)
 while len(heap)>1:
  a=heapq.heappop(heap);z=heapq.heappop(heap);heapq.heappush(heap,(a[0]+z[0],k,(a[2],z[2])));k+=1
 out={}
 def rec(t,code):
  if isinstance(t,str):out[t]=code or '0'
  else:rec(t[0],code+'0');rec(t[1],code+'1')
 rec(heap[0][2],'');return out
hsets=[[('A',1)],[('A',1),('B',3)],[('A',1),('B',2),('C',5)]]
for op in ['build','codes']:
 cs=[]
 for z in hsets:
  code=hcodes(z);e=str(sum(w*(len(code[c]) if len(z)>1 else 0) for c,w in z))+'\n' if op=='build' else ''.join(c+' '+code[c]+'\n' for c in sorted(code))
  cs.append((str(len(z))+'\n'+''.join(f'{c} {w}\n' for c,w in z),e))
 run='map<char,string>code;huTree_coding(t,0,code);'+('int cost=0;for(int i=0;i<m;i++)cost+=w[i]*(m==1?0:(int)code[d[i]].size());cout<<cost<<"\\n";' if op=='build' else 'for(auto p:code)cout<<p.first<<" "<<p.second<<"\\n";')
 add('huffman-'+op,'哈夫曼树：'+('构建并求带权路径长度' if op=='build' else '按左右分支生成编码表'),s,range(4),['huTree_create' if op=='build' else 'huTree_coding'],'每次合并权重最小的两棵树，较小者作为左孩子。'+('计算各叶权重×深度之和；单个叶结点深度为 0。' if op=='build' else '左边记 0，右边记 1，输出每个字符的路径；单字符约定为 0。'),'m；随后 m 行“字符 权重”。','输出带权路径长度。' if op=='build' else '按字符升序，每行输出“字符 编码”。',cs,'',alg,rdhu,run,[1 if op=='build' else 2],['1≤m≤20；字符为互异 A..Z；权重 1..1000','编码表题保证每轮最小和次小权重均唯一，避免并列导致多解。'])
cs=[]
for text in ['', 'aaaa','aaabb','aaaaaaabbc']:
 if not text:e='EMPTY'
 else:
  codes=hcodes(sorted(collections.Counter(text).items()));e=''.join(codes[x] for x in text)
 cs.append((text+'\n',e+'\n'))
add('huffman-encode','哈夫曼编码：按文本频率压缩',s,range(4),['coding'],'统计文本字符频率，建立哈夫曼树并串接每个字符的编码。单字符用 0，空文本输出 EMPTY。','一行只含小写字母的文本，允许空行。','输出二进制编码串；空文本 EMPTY。',cs,'',alg,'string s;getline(cin,s);huTree t;','string v=coding(t,s);cout<<(v.empty()?"EMPTY":v)<<"\\n";',[2],['长度 0..100；不同字符≤20','非单字符时每轮最小和次小权重均唯一。'])
add('huffman-decode','哈夫曼解码：沿二叉树还原字符',s,range(4),['huTree_decoding'],'按权重重建同一棵哈夫曼树。从根按 0/1 走左右边，到叶输出字符并回到根；非法位或结束在非叶处输出 INVALID。','m；m 行“字符 权重”；最后一行待解码非空比特串。','输出原文，非法串输出 INVALID。',[('1\nA 1\n000\n','AAA\n'),('1\nA 1\n1\n','INVALID\n'),('3\nA 1\nB 2\nC 5\n00011\n','ABC\n'),('3\nA 1\nB 2\nC 5\n0\n','INVALID\n')],'',alg,rdhu+'string code;cin>>code;','try{cout<<huTree_decoding(t,code)<<"\\n";}catch(const exception&){cout<<"INVALID\\n";}',[3],['1≤m≤20；权重 1..1000，每轮两最小权重唯一','编码长度 1..200，只含数字 0/1（允许截断）。'])
s='xcwkgfs7vbb92p2k'
add('rpn-convert','逆波兰表达式：调度场转换',s,[0,1],['shuntingYard'],'把合法中缀整数四则表达式转为后缀表达式，运算符左结合，数字保持完整。','一行合法表达式，支持空格、非负整数及二元 +-*/、圆括号。','操作数和操作符以空格分开。',[('0\n','0\n'),('12+3*(4-2)\n','12 3 4 2 - * +\n'),('8/4/2\n','8 4 / 2 /\n')],'const int N=200;',blocks(s,[0,1]),'string text;getline(cin,text);rpn p;int n;','shuntingYard(text,p,n);for(int i=0;i<n;i++){if(p[i].tag)cout<<p[i].data.v;else cout<<p[i].data.op;cout<<" ";}cout<<"\\n";',[1],['长度 1..100；整数字面量 0..1000；语法合法且无一元运算符。'])
save();print('fourth saved',len(P))
# Tree/forest operations: each public algorithm has its own exercise.
s='vgyr818zdigzrma9'
TREES=[([],[]),(['A'],[-1]),(list('ABCDE'),[-1,0,0,1,1]),(list('ABCD'),[2,2,-1,0])]
def treeinput(labels,pa):return str(len(pa))+'\n'+''.join(f'{c} {p}\n'for c,p in zip(labels,pa))
def children(pa,x):return [i for i,p in enumerate(pa)if p==x]
def sibling(pa,x):
 if x<0 or pa[x]<0:return -1
 return next((i for i in range(x+1,len(pa))if pa[i]==pa[x]),-1)
def forestorder(labels,pa,mode):
 root=pa.index(-1)if pa else -1
 def walk(u):
  if u<0:return ''
  cs=children(pa,u)
  if mode=='pre':return labels[u]+''.join(walk(c)for c in cs)
  if mode=='post':return ''.join(walk(c)for c in cs)+labels[u]
  return (walk(cs[0])if cs else '')+labels[u]+''.join(walk(c)for c in cs[1:])
 return walk(root)or'EMPTY'
readtree='int n;cin>>n;char data[N];int pa[N];for(int i=0;i<n;i++)cin>>data[i]>>pa[i];auto t=create(data,pa,n);'
for model,inds in [('parent',[0,1,2]),('lrb',[3,4])]:
 for op in ['create','child','sibling']:
  cs=[]
  for labels,pa in TREES:
   if op=='create':
    expected=str(pa.index(-1)if pa else -1)+'\n'
    expected+=''.join((f'{i} {labels[i]} {p}\n'if model=='parent'else f'{i} {labels[i]} {p} {(children(pa,i)or[-1])[0]} {sibling(pa,i)}\n')for i,p in enumerate(pa))
    tail=''
   else:
    queries=list(range(len(pa)))+[-1,len(pa)]
    expected=' '.join(str((children(pa,i)or[-1])[0]if op=='child'and 0<=i<len(pa)else sibling(pa,i)if op=='sibling'and 0<=i<len(pa)else -1)for i in queries)+'\n'
    tail=str(len(queries))+'\n'+' '.join(map(str,queries))+'\n'
   cs.append((treeinput(labels,pa)+tail,expected))
  if op=='create':
   run='cout<<t.root<<"\\n";for(int i=0;i<n;i++)cout<<i<<" "<<t.tree[i].data<<" "<<t.tree[i].pa'+(''if model=='parent'else'<<" "<<t.tree[i].lmc<<" "<<t.tree[i].rb')+'<<"\\n";'
  else:run='int q;cin>>q;while(q--){int x;cin>>x;cout<<'+('lm_child'if op=='child'else'r_bro')+'(t,x)<<" ";}'
  add('forest-'+model+'-'+op,('父节点表示法'if model=='parent'else'孩子兄弟表示法')+'：'+{'create':'构建树','child':'寻找最左孩子','sibling':'寻找右兄弟'}[op],s,inds,[{'create':'create','child':'lm_child','sibling':'r_bro'}[op]],'节点编号为0..n-1。子节点和兄弟均按原节点编号升序排列。'+('构建树并输出根编号和存储结构。'if op=='create'else'对每个查询节点，返回最左孩子编号。'if op=='child'else'对每个查询节点，返回同一父节点下右侧最近兄弟编号。')+'空树根、非法节点或不存在的相邻节点记为-1。','n；接下来n行：单字符标签 parent；根的parent=-1。'+(''if op=='create'else'随后q和q个查询节点编号。'),'构建题第一行根编号，之后每行“编号 标签 parent'+('”'if model=='parent'else' 最左孩子 右兄弟”')+'；查询题按顺序输出编号。',cs,'const int N=100;using datatype=char;',blocks(s,inds),readtree,run,[1 if model=='parent'and op=='create'else 2 if model=='parent'else 4],['0≤n≤26；标签为互异A..Z','非空输入保证是单棵有效有根树；0≤q≤100；查询编号-1..n'])
for mode,fn in [('pre','preOrder'),('mid','midOrder'),('post','postOrder')]:
 cs=[(treeinput(labels,pa),forestorder(labels,pa,mode)+'\n')for labels,pa in TREES]
 add('forest-'+mode,'树和森林：'+{'pre':'先根遍历','mid':'中根遍历','post':'后根遍历'}[mode],s,[3,4,5],[fn],'使用孩子兄弟表示法构建树，孩子按原节点编号升序访问。'+{'pre':'先访问根，再遍历各孩子。','mid':'先遍历最左孩子，再访问根，最后依次遍历其余孩子。','post':'先遍历各孩子，最后访问根。'}[mode],'n；随后n行：字符标签 parent，根的parent=-1。','连写遍历得到的字符序列；空树EMPTY。',cs,'const int N=100;using datatype=char;',blocks(s,[3,4,5]),readtree,'if(!n)cout<<"EMPTY";else '+fn+'(t,t.root);',[5],['0≤n≤26；标签为互异A..Z','输入保证是单棵有效有根树。'])
for op,fn in [('child','lm_child'),('sibling','r_bro')]:
 cs=[]
 for text,qs in [('A',[0,-1,1]),('A(B,C(D,E))',[0,2,4,6,8]),('R(X(Y),Z)',[0,2,4,7])]:
  def bracketchild(cur):return cur+2 if 0<=cur and cur+2<len(text)and text[cur+1]=='('and text[cur+2]!=')'else -1
  def bracketsibling(cur):
   if cur<0 or cur>=len(text)or text[cur]in'()':return -1
   cnt=0
   for i in range(cur+1,len(text)):
    if text[i]=='(':cnt+=1
    elif text[i]==')':cnt-=1
    elif text[i]==','and cnt==0:return i+1
    if cnt<0:break
   return -1
  expected=' '.join(str((bracketchild if op=='child'else bracketsibling)(q))for q in qs)+'\n'
  cs.append((text+'\n'+str(len(qs))+'\n'+' '.join(map(str,qs))+'\n',expected))
 add('forest-bracket-'+op,'树的括号表示：'+('寻找最左孩子'if op=='child'else'寻找右兄弟'),s,[6],[fn],'树表示如A(B,C(D,E))，每个节点标签恰为一个大写字母，字符下标从0开始。查询'+('最左孩子'if op=='child'else'直接右兄弟')+'标签所在的字符下标，不存在或输入下标越界输出-1。','括号表示字符串；q；q个查询下标。','按查询顺序输出字符下标。',cs,'',b(s,6),'string text;cin>>text;int q;cin>>q;','while(q--){int cur;cin>>cur;cout<<'+fn+'(text,cur)<<" ";}',[6],['1≤字符串长度≤100；1≤q≤100','有效下标保证指向字母节点；另允许-1或字符串长度表示越界。'])
# DSU: path compression and oriented merge retain original root semantics.
s='efgmxpodr4s61iwh'
DSUS=[(1,[],[0]),(5,[(0,1),(1,2),(3,4)],[0,1,2,3,4]),(4,[(0,1),(2,3),(1,3),(0,2)],[0,2,3])]
for mode in ['query','merge']:
 cs=[]
 for n,edges,qs in DSUS:
  pa=list(range(n))
  def find(x):
   while pa[x]!=x:x=pa[x]
   return x
  lines=[]
  for x,y in edges:
   pa[find(x)]=find(y)
   if mode=='merge':lines.append(' '.join(str(find(i))for i in range(n)))
  expected=('\n'.join(lines)or'EMPTY')if mode=='merge'else' '.join(str(find(x))for x in qs)
  cs.append((f'{n} {len(edges)}\n'+''.join(f'{x} {y}\n'for x,y in edges)+(''if mode=='merge'else str(len(qs))+'\n'+' '.join(map(str,qs))+'\n'),expected+'\n'))
 run='int m;cin>>m;while(m--){int x,y;cin>>x>>y;merge(x,y);'+('for(int i=0;i<n;i++)cout<<query(i)<<" ";cout<<"\\n";'if mode=='merge'else'')+'}'+('if(!had)cout<<"EMPTY";'if mode=='merge'else'int q;cin>>q;while(q--){int x;cin>>x;cout<<query(x)<<" ";}')
 run=run.replace('int m;cin>>m;','int m;cin>>m;bool had=m>0;')
 add('dsu-'+mode,'并查集：'+('路径压缩查找'if mode=='query'else'合并两个集合'),s,[0,1,2],[mode],'初始每个元素独立成集合。merge(x,y)把x所在集合的根连接到y所在集合的根，已经同根则不变。'+('依次查询代表根。'if mode=='query'else'每次合并后输出全部元素的代表根，体现原函数的连接方向。'),'n m；m行x y；'+('q；q个查询元素。'if mode=='query'else'无其他输入。'),'查询题输出各代表根；合并题每次输出n个代表根，没有合并输出EMPTY。',cs,'const int N=100;using datatype=int;',blocks(s,[0,1,2]),'int n;cin>>n;',run,[1 if mode=='query'else 2],['1≤n≤50；0≤m≤100','元素编号0..n-1；1≤q≤100'])
# Fenwick
s='gme34aw4kzzy04fl'
add('fenwick-lowbit','树状数组：lowbit最低有效位',s,[0],['lowbit'],'对每个正整数x求其二进制最低有效1所代表的数值，即x&(-x)。','q；q个正整数。','按顺序输出lowbit(x)。',[('3\n1 2 3\n','1 2 1\n'),('3\n8 12 16\n','8 4 16\n'),('3\n7 31 64\n','1 1 64\n')],'',b(s,0),'int q;cin>>q;','while(q--){int x;cin>>x;cout<<lowbit(x)<<" ";}',[0],['1≤q≤100；1≤x≤1000000'])
for mode in ['prefix','update']:
 cs=[]
 for a,updates,qs in [([0],[(1,3)],[0,1]),([2,-1,5,3],[(2,4),(4,-3)],[0,2,4]),([7,7,7],[(1,-7),(1,2)],[1,2,3])]:
  arr=a[:]
  if mode=='update':
   for x,inc in updates:arr[x-1]+=inc
  expected=' '.join(str(sum(arr[:x]))for x in qs)+'\n'
  cs.append((inp(a)+(str(len(updates))+'\n'+''.join(f'{x} {inc}\n'for x,inc in updates)if mode=='update'else'')+str(len(qs))+'\n'+' '.join(map(str,qs))+'\n',expected))
 alg='int n,bit[101];\n'+blocks(s,[0,1,2]);read='cin>>n;for(int i=1;i<=n;i++){int x;cin>>x;update(i,x);}'
 run=('int m;cin>>m;while(m--){int x,inc;cin>>x>>inc;update(x,inc);}'if mode=='update'else'')+'int q;cin>>q;while(q--){int x;cin>>x;cout<<prefixSum(x)<<" ";}'
 add('fenwick-'+mode,'树状数组：'+('前缀和查询'if mode=='prefix'else'单点增量更新'),s,[0,1,2],['prefixSum'if mode=='prefix'else'update'],'数组使用1..n编号。'+('用树状数组求a[1]+...+a[x]，x=0返回0。'if mode=='prefix'else'逐次将a[x]增加inc，全部更新完成后查询各前缀和。'),'n；n个元素；'+('m；m行x inc；'if mode=='update'else'')+'q；q个前缀终点x。','按查询顺序输出前缀和。',cs,'',alg,read,run,[1 if mode=='prefix'else 2],['1≤n≤50；0≤m≤100；1≤q≤100','初值和inc均[-100,100]；更新1≤x≤n；查询0≤x≤n'])
# Segment tree: build, point update, lazy interval update, interval query independently.
s='wzfhk2wlng7igkb7';alg=blocks(s,range(5))
for mode in ['build','point','range','query']:
 cs=[]
 for a in [[0],[2,-1,5,3],[7,7,7]]:
  n=len(a);arr=a[:];tail=''
  if mode=='point':
   updates=[(1,3),(n,-2)];tail=str(len(updates))+'\n'+''.join(f'{p} {x}\n'for p,x in updates)
   for p,x in updates:arr[p-1]+=x
  if mode=='range':
   updates=[(1,n,3),(n,n,-2)];tail=str(len(updates))+'\n'+''.join(f'{l} {r} {x}\n'for l,r,x in updates)
   for l,r,x in updates:
    for i in range(l-1,r):arr[i]+=x
  if mode=='build':
   lines=[]
   def walk(l,r):
    lines.append(f'{l} {r} {sum(a[l-1:r])}')
    if l<r:m=(l+r)//2;walk(l,m);walk(m+1,r)
   walk(1,n);expected='\n'.join(lines)+'\n'
  else:
   qs=[(1,n),(1,1),(n,n)];tail+=str(len(qs))+'\n'+''.join(f'{l} {r}\n'for l,r in qs);expected=' '.join(str(sum(arr[l-1:r]))for l,r in qs)+'\n'
  cs.append((inp(a,tail),expected))
 read='int n;cin>>n;int a[N];for(int i=1;i<=n;i++)cin>>a[i];build(a,1,1,n);'
 run='dump(1,1,n);'if mode=='build'else('int m;cin>>m;while(m--){int p,inc;cin>>p>>inc;update(1,1,n,p,inc);}'if mode=='point'else'int m;cin>>m;while(m--){int l,r,inc;cin>>l>>r>>inc;update(1,1,n,l,r,inc);}'if mode=='range'else'')+'int q;cin>>q;while(q--){int l,r;cin>>l>>r;cout<<query(1,1,n,l,r)<<" ";}'
 dump='\nvoid dump(int rt,int l,int r){cout<<l<<" "<<r<<" "<<sum[rt]<<"\\n";if(l<r){int m=(l+r)/2;dump(rt*2,l,m);dump(rt*2+1,m+1,r);}}\n'if mode=='build'else''
 add('segment-'+mode,'线段树：'+{'build':'构建区间和树','point':'单点增量更新','range':'懒标记区间增量更新','query':'区间和查询'}[mode],s,range(5),[{'build':'build','point':'update','range':'update','query':'query'}[mode]],'数组使用1..n编号，区间均为闭区间[l,r]。'+{'build':'递归按mid=(l+r)/2切分，输出每个节点的区间及区间和。','point':'每次将指定位置的值增加inc，全部更新后查询区间和。','range':'每次将整个指定区间内的值增加inc，用懒标记延迟传递，全部更新后查询区间和。','query':'构建后查询多个区间的元素总和。'}[mode],'n；n个整数；'+('m；m行pos inc；'if mode=='point'else'm；m行l r inc；'if mode=='range'else'')+('无其他输入。'if mode=='build'else'q；q行l r。'),'构建题按根、左、右先序输出，每行“l r 区间和”；其余按查询顺序输出区间和。',cs,'',alg+dump,read,run,[{'build':1,'point':2,'range':3,'query':4}[mode]],['1≤n≤50；0≤m≤100；1≤q≤100','初值和inc均[-100,100]；1≤l≤r≤n；1≤pos≤n'])
# Remaining public STL operations from the original examples.
s='';s=next(d['id']for d in D.values()if d['title']=='vector')
for op,target,fn,title,desc in [('copy',1,'vector::vector','复制构造','将输入序列复制到新vector，清空原容器，输出新容器证明独立复制。'),('range',1,'vector::vector','区间构造','用原序列的半开区间[l,r)构造新vector。'),('push',4,'vector::push_back','尾部插入','将x添加到vector末尾。'),('pop',5,'vector::pop_back','尾部删除','非空时删除末元素；空容器保持空。'),('erase-one',5,'vector::erase','删除指定位置','删除0起始下标p的单个元素；空容器时不操作。'),('modify',6,'vector::at','修改指定元素','将0起始下标p的元素修改为x。'),('assign-values',6,'vector::assign','用新序列重新赋值','读取新序列，用assign将旧元素整体替换。')]:
 cs=[]
 for a in [[],[2],[-3,5,5]]:
  tail='';expected=a[:]
  if op=='range':l=0;r=max(0,len(a)-1);tail=f'{l} {r}\n';expected=a[l:r]
  elif op=='push':tail='7\n';expected.append(7)
  elif op=='pop':expected=a[:-1]
  elif op=='erase-one':tail='0\n';expected=a[1:]
  elif op=='modify':
   if not a:continue
   tail='0 9\n';expected[0]=9
  elif op=='assign-values':tail='2\n8 -2\n';expected=[8,-2]
  cs.append((inp(a,tail),exp(expected)))
 if op=='modify':cs.append((inp([1,2,3],'2 -4\n'),'1 2 -4\n'))
 run={'copy':'vector<int>v(a);a.clear();printv(v);','range':'int l,r;cin>>l>>r;vector<int>v(a.begin()+l,a.begin()+r);printv(v);','push':'int x;cin>>x;a.push_back(x);printv(a);','pop':'if(!a.empty())a.pop_back();printv(a);','erase-one':'int p;cin>>p;if(!a.empty())a.erase(a.begin()+p);printv(a);','modify':'int p,x;cin>>p>>x;a.at(p)=x;printv(a);','assign-values':'int m;cin>>m;vector<int>v(m);for(int&x:v)cin>>x;a.assign(v.begin(),v.end());printv(a);'}[op]
 tailfmt={'range':'随后l r。','push':'随后x。','erase-one':'随后p。','modify':'随后p x。','assign-values':'随后m和m个新元素。'}.get(op,'无其他输入。')
 add('vec-'+op,'vector：'+title,s,[target],[fn],desc,'n；n个整数；'+tailfmt,'输出操作结果，空序列EMPTY。',cs,'','',ARR,run,[target],['0≤n,m≤30；元素[-100,100]；修改题n≥1','区间0≤l≤r≤n；非空时0≤p<n；空表删除p=0。'],note='将原笔记中实际vector API示例参数化，采用同一标准容器操作。')
s=next(d['id']for d in D.values()if d['title']=='STACK')
for op in ['top','empty']:
 cs=[(inp(a),('1'if not a else'0')+'\n'if op=='empty'else(str(a[-1])if a else'EMPTY')+'\n')for a in [[],[3],[-2,5,8]]]
 add('stl-stack-'+op,'STL stack：'+('读取栈顶'if op=='top'else'判空'),s,[0,1],['stack::'+op],'按输入次序入栈，然后'+('输出栈顶；空栈输出EMPTY。'if op=='top'else'判断是否为空，空输出1，否则0。'),'n；n个整数。','栈顶值或EMPTY。'if op=='top'else'空栈1，非空0。',cs,'','',ARR+'stack<int>q;for(int x:a)q.push(x);','if(q.empty())cout<<"EMPTY";else cout<<q.top();'if op=='top'else'cout<<q.empty();',[1],note='参数化原STL栈API，空容器先判空避免未定义行为。')
s=next(d['id']for d in D.values()if d['title']=='STL队列')
for op in ['front','empty']:
 cs=[(inp(a),('1'if not a else'0')+'\n'if op=='empty'else(str(a[0])if a else'EMPTY')+'\n')for a in [[],[3],[-2,5,8]]]
 add('stl-queue-'+op,'STL queue：'+('读取队头'if op=='front'else'判空'),s,[0,1],['queue::'+op],'按输入次序入队，然后'+('输出队头；空队列输出EMPTY。'if op=='front'else'判断是否为空，空输出1，否则0。'),'n；n个整数。','队头值或EMPTY。'if op=='front'else'空队列1，非空0。',cs,'','',ARR+'queue<int>q;for(int x:a)q.push(x);','if(q.empty())cout<<"EMPTY";else cout<<q.front();'if op=='front'else'cout<<q.empty();',[1],note='参数化原STL队列API，空容器先判空避免未定义行为。')

# Clang/WASI has no C++ exception unwinder. Adapt runnable references only.
for p in P:
 if 'throw std::' in p['reference']:
  p['reference']='#include <cstdlib>\n'+re.sub(r'throw std::(?:invalid_argument|length_error)\([^;]*\);','std::abort();',p['reference'])
  p['referenceNote']+=' 浏览器工具链不支持C++异常；完整参考仅将超界异常改为终止保护，题目约束内不会触发。笔记原码与最小修正版均保持不变。'
  if p['id']=='lt-huffman-decode':
   old='try{cout<<huTree_decoding(t,code)<<"\\n";}catch(const exception&){cout<<"INVALID\\n";}'
   new='''bool valid=true;int cur=0;
for(char bit:code){
 if(bit!='0'&&bit!='1'){valid=false;break;}
 if(t[0].lc==-1){if(bit!='0'){valid=false;break;}}
 else{cur=bit=='0'?t[cur].lc:t[cur].rc;if(t[cur].lc==-1)cur=0;}
}
if(cur!=0)valid=false;
if(!valid)cout<<"INVALID\\n";else cout<<huTree_decoding(t,code)<<"\\n";'''
   assert old in p['reference'];p['reference']=p['reference'].replace(old,new)
   p['referenceNote']+=' 非法或截断编码由输入驱动先检查，再调用原解码函数。'
# Every starter is a compilable empty IO scaffold; original types and answers stay in reference tabs.
for p in P:
 p['template']='''#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

// 输入：'''+p['input'].replace('\n','；')+'''
// 输出：'''+p['output'].replace('\n','；')+'''
void solve(istream& in, ostream& out) {
    // TODO: 读取输入，独立实现本题算法并输出结果。
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    solve(cin, cout);
    return 0;
}
'''
save();print('FINAL LINEAR/TREE',len(P),'problems',sum(len(p['cases'])for p in P),'cases')
