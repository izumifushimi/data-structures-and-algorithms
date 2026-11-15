import pathlib,json,subprocess,tempfile,concurrent.futures,time,datetime
ROOT=pathlib.Path(__file__).resolve().parents[2]
raw=(ROOT/'src/problem-bank/graph-search-sort.mjs').read_text();ps=json.loads(raw.split('export const problems = ',1)[1].rsplit(';',1)[0]);OUT=ROOT/'outputs/graph-search-sort-oj-validation.json'
def check(p):
 with tempfile.TemporaryDirectory(prefix='oj-gss-') as td:
  base=pathlib.Path(td);(base/'main.cpp').write_text(p['reference']);start=time.monotonic()
  comp=subprocess.run(['clang++','-std=c++17','-O1',str(base/'main.cpp'),'-o',str(base/'main')],capture_output=True,text=True,timeout=60)
  r={'id':p['id'],'title':p['title'],'compiled':comp.returncode==0,'cases':[]}
  if comp.returncode:r['compileError']=comp.stderr;return r
  for c in p['cases']:
   try:
    run=subprocess.run([str(base/'main')],input=c['stdin'],capture_output=True,text=True,timeout=10)
    x={'name':c['name'],'passed':run.returncode==0 and run.stdout.split()==c['expected'].split(),'exitCode':run.returncode}
    if not x['passed']:x.update(expected=c['expected'],actual=run.stdout,stderr=run.stderr)
   except subprocess.TimeoutExpired:x={'name':c['name'],'passed':False,'error':'timeout'}
   r['cases'].append(x)
  r['seconds']=round(time.monotonic()-start,3);return r
results=[]
with concurrent.futures.ThreadPoolExecutor(max_workers=3) as ex:
 for r in ex.map(check,ps):
  results.append(r);ok=r['compiled'] and all(c['passed'] for c in r['cases']);print(('PASS ' if ok else 'FAIL ')+r['id'],flush=True)
  report={'generatedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'compiler':'clang++ -std=c++17 -O1','problemCount':len(ps),'completedProblems':len(results),'caseCount':sum(len(p['cases']) for p in ps),'passedCases':sum(c['passed']for z in results for c in z['cases']),'allPassed':len(results)==len(ps) and all(z['compiled'] and all(c['passed']for c in z['cases'])for z in results),'results':results}
  OUT.write_text(json.dumps(report,ensure_ascii=False,indent=2))
print('REPORT',OUT,'problems',len(ps),'cases',report['caseCount'],'allPassed',report['allPassed'])
