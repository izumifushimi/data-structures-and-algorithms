import pathlib, json, html, re, hashlib, urllib.request
from html.parser import HTMLParser

ROOT = pathlib.Path(__file__).resolve().parents[1]
CONTENT = ROOT / 'content'
SOURCE = CONTENT / 'source-notes.json'
BOOKS = {'vgpomu': '绪论', 'yvdimz': '线性结构', 'oq1p5u': '树', 'gexcec': '图', 'eutko3': '查找', 'ah9xl7': '排序'}
ORDER = {
'绪论': ['前言', '数据结构', '算法', 'STL'],
'线性结构': ['线性表','顺序表','vector','链表','LIST','栈','STACK','栈的应用','单调栈','队列','STL队列','队列的应用','单调队列','矩阵','串','广义表','课后习题','练习'],
'树': ['二叉树','完全二叉树','堆','STL的堆','线索二叉树','哈夫曼树和哈夫曼编码','表达式树和逆波兰表达式','树和森林','并查集','树状数组','线段树'],
'图': ['图的邻接矩阵表示','图的边表表示','图的搜索','图的连通性','无向图的割点和桥','最小生成树','有向无环图','图的顶点之间最短距离和最短路径'],
'查找': ['线性表查找','二叉树查找树','伸展树','红黑树','多路查找树','B-树和B+树','Trie树','散列法','STL中的map和set'],
'排序': ['插入排序','交换排序','选择排序','归并排序','分配类排序','外部排序','判定树']}

class NoteParser(HTMLParser):
    allowed = set('div p span strong b i em u s ol ul li h1 h2 h3 h4 h5 h6 blockquote a img table thead tbody tr td th br hr sup sub details summary del mark'.split())
    void = {'img','br','hr'}
    def __init__(self):
        super().__init__(convert_charrefs=True); self.out=[]; self.codes=[]; self.code=None; self.skip=0; self.images=[]
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if tag=='pre': self.code=''; return
        if self.code is not None: return
        if tag in ['script','style','iframe','object']: self.skip+=1; return
        if self.skip or tag not in self.allowed: return
        out=[]
        for k in ['colspan','rowspan']:
            if a.get(k,'').isdigit():out.append(f'{k}="{a[k]}"')
        if tag=='a' and a.get('href','').startswith(('https://','http://')):out += ['href="'+html.escape(a['href'],quote=True)+'"','target="_blank"','rel="noopener noreferrer"']
        if tag=='img' and a.get('src','').startswith('https://'):
            url=a['src']; name=hashlib.sha256(url.encode()).hexdigest()[:18]+'.png'; dest=ROOT/'public/images'/name
            if not dest.exists():
                try: urllib.request.urlretrieve(url,dest)
                except Exception as e: print('IMAGE ERROR',url,str(e))
            self.images.append(url);out+=['src="/images/'+name+'"','alt="笔记原图"','loading="lazy"']
        self.out.append('<'+tag+(' '+' '.join(out) if out else '')+'>')
    def handle_endtag(self,tag):
        if tag=='pre' and self.code is not None:
            self.codes.append(self.code);self.out.append(f'<div class="source-code-slot" data-code="{len(self.codes)-1}"></div>');self.code=None;return
        if self.code is not None:return
        if tag in ['script','style','iframe','object'] and self.skip:self.skip-=1;return
        if not self.skip and tag in self.allowed and tag not in self.void:self.out.append('</'+tag+'>')
    def handle_data(self,data):
        if self.code is not None:self.code+=data
        elif not self.skip:self.out.append(html.escape(data))

corrections={}
for name in ['review-linear-tree.json','review-graph-search-sort.json','review-intro.json']:
    p=CONTENT/name
    if p.exists():corrections.update(json.loads(p.read_text()))
enrich_path=CONTENT/'lesson-enrichment.json'
enrich=json.loads(enrich_path.read_text()) if enrich_path.exists() else {}
docs=[]
for row in json.loads(SOURCE.read_text(encoding='utf-8')):
    d=row['doc'];base=row['sourceBase'];book=row['book']
    parser=NoteParser();parser.feed(d['body']); slug=d['slug'];fix=corrections.get(slug,{})
    codes=[]
    for i,code in enumerate(parser.codes):
        f=fix.get('blocks',{}).get(str(i),{})
        codes.append({'original':code,'corrected':f.get('code',code),'notes':f.get('notes',[]),'sha256':hashlib.sha256(code.encode()).hexdigest(),**({'label':f['label']} if f.get('label') else {})})
    docs.append({'id':slug,'title':d['title'],'book':book,'sourceURL':base+'/'+slug,'sourceUpdatedAt':d.get('content_updated_at'),'originalHtml':''.join(parser.out),'codes':codes,'notes':fix.get('notes',[]),'enrichment':enrich.get(slug,{}),'sourceHash':hashlib.sha256(d['body'].encode()).hexdigest()})
docs.sort(key=lambda d:(list(BOOKS.values()).index(d['book']),ORDER[d['book']].index(d['title']) if d['title'] in ORDER[d['book']] else 999))
target=ROOT/'public/data/notes.json';target.write_text(json.dumps(docs,ensure_ascii=False,separators=(',',':')))
manifest={'importedAt':'2026-11-14','books':{b:sum(d['book']==b for d in docs) for b in BOOKS.values()},'documents':len(docs),'codeBlocks':sum(len(d['codes']) for d in docs),'correctedBlocks':sum(c['original']!=c['corrected'] for d in docs for c in d['codes']),'hashes':{d['id']:d['sourceHash'] for d in docs}}
(ROOT/'public/data/source-manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2))
print(json.dumps({k:v for k,v in manifest.items() if k!='hashes'},ensure_ascii=False))
