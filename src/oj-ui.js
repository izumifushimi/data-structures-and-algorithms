import {EditorView,basicSetup} from 'codemirror';
import {cpp} from '@codemirror/lang-cpp';
import {oneDark} from '@codemirror/theme-one-dark';
import {diffLines} from 'diff';
import hljs from 'highlight.js/lib/core';
import cppHighlight from 'highlight.js/lib/languages/cpp';
import {assetPath} from './assets.js';
import {problems,problemsForLesson} from './problems.js';
import './oj.css';

hljs.registerLanguage('cpp',cppHighlight);
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const highlighted=s=>hljs.highlight(s||'',{language:'cpp'}).value;
const categories=['绪论','线性结构','树','图','查找','排序'];
const labels={AC:'通过',WA:'答案错误',CE:'编译错误',RE:'运行错误',TLE:'运行超时',OLE:'输出超限',CANCELLED:'已停止',RUNTIME_UNAVAILABLE:'编译器加载失败',NO_TESTS:'缺少测试用例'};
const key=id=>'algorithms:oj-history:'+id;
const read=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}};
const write=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v));return true}catch{return false}};
const histories=id=>read(key(id),[]);
const accepted=id=>read('algorithms:oj-passed',[]).includes(id)||histories(id).some(s=>s.status==='AC');
const code=p=>'DS'+String(1001+problems.indexOf(p));
function saveFile(text,name){const u=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),1000)}
function sourceTitle(p,docs){const ref=p.sourceRefs?.[0];return docs.find(d=>d.id===ref?.docId)?.title||p.category}
function samplesOf(p){return p.samples?.length?p.samples:p.cases.slice(0,2)}
function sourceBlocks(p,docs){return (p.sourceRefs||[]).flatMap(ref=>{const d=docs.find(d=>d.id===ref.docId);if(!d)return [];return (ref.blocks||[]).filter(i=>d.codes[i]).map(i=>({doc:d,index:i,code:d.codes[i],target:ref.primaryBlocks?ref.primaryBlocks.includes(i):(ref.functions||[]).some(fn=>new RegExp('\\b'+fn.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\s*\\([^;]*?\\)\\s*(?:const\\s*)?\\{').test(d.codes[i].corrected))})).sort((a,b)=>Number(b.target)-Number(a.target))})}

export function mountPracticeCatalog(host,{docs}){
 let category='全部',status='全部',query='';
 host.classList.add('practice-content');
 const completed=problems.filter(p=>accepted(p.id)).length;
 host.innerHTML=`<div class="oj-breadcrumb">练习题库 / 原文逐项练习</div><div class="oj-library-heading"><div><h1>算法练习题库</h1><p>按原笔记的算法、例题和课后题编排，选择一道题开始写代码。</p></div><div class="oj-progress"><b>${completed}<small> / ${problems.length}</small></b><span>已通过题目</span></div></div><div class="oj-category-filters" role="group" aria-label="题目章节">${['全部',...categories.filter(c=>problems.some(p=>p.category===c))].map(c=>`<button data-category="${c}" class="${c==='全部'?'selected':''}">${c}<span>${c==='全部'?problems.length:problems.filter(p=>p.category===c).length}</span></button>`).join('')}</div><div class="oj-library-tools"><input id="problem-search" aria-label="搜索题目" placeholder="搜索题目、算法或原笔记名称"><select id="problem-status" aria-label="完成状态"><option>全部</option><option>未通过</option><option>已通过</option></select><span id="problem-count"></span><button id="export-drafts">导出代码草稿</button></div><div class="oj-problem-table" id="problem-table"></div><p class="oj-small-note">题目与原始笔记一一关联；同一篇中的不同算法操作分别列题。原文类型定义和内部辅助函数归入相应题目的参考上下文。</p>`;
 function render(){const q=query.toLowerCase();const list=problems.filter(p=>(category==='全部'||p.category===category)&&(status==='全部'||accepted(p.id)===(status==='已通过'))&&(!q||(p.title+' '+p.category+' '+sourceTitle(p,docs)+' '+code(p)).toLowerCase().includes(q)));host.querySelector('#problem-count').textContent=`共 ${list.length} 道题`;
 host.querySelector('#problem-table').innerHTML=`<div class="oj-table-head"><span>状态</span><span>题目</span><span>对应原文</span><span>难度</span></div>${list.length?list.map(p=>`<a class="oj-problem-row" href="#/practice/${encodeURIComponent(p.id)}"><span class="oj-row-status ${accepted(p.id)?'passed':''}">${accepted(p.id)?'✓':'—'}</span><span class="oj-problem-name"><small>${code(p)}</small><strong>${escape(p.title)}</strong><em>${p.category}</em></span><span class="oj-source-cell">${escape(sourceTitle(p,docs))}</span><span class="oj-difficulty">${escape(p.difficulty||'基础')}</span></a>`).join(''):'<div class="oj-empty">没有匹配的题目，换一个关键词试试。</div>'}`;}
 host.querySelectorAll('[data-category]').forEach(b=>b.onclick=()=>{category=b.dataset.category;host.querySelectorAll('[data-category]').forEach(x=>x.classList.toggle('selected',x===b));render()});
 host.querySelector('#problem-search').oninput=e=>{query=e.target.value.trim();render()};host.querySelector('#problem-status').onchange=e=>{status=e.target.value;render()};
 host.querySelector('#export-drafts').onclick=()=>{const all={};for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k?.startsWith('algorithms:draft:'))all[k.slice('algorithms:draft:'.length)]=read(k,'')}saveFile(JSON.stringify(all,null,2),'算法代码草稿.json')};render();
 return ()=>host.classList.remove('practice-content');
}

export function mountLessonPractice(host,doc,{docs}){
 const list=problemsForLesson(doc.id);
 host.innerHTML=`<div class="section-head"><h2>本节算法与习题</h2><span class="tag">${list.length} 道原文关联题</span></div>${list.length?`<div class="oj-lesson-problems">${list.map(p=>`<a href="#/practice/${encodeURIComponent(p.id)}"><span class="${accepted(p.id)?'passed':''}">${accepted(p.id)?'✓':code(p)}</span><strong>${escape(p.title)}</strong><small>编写代码 →</small></a>`).join('')}</div><p class="oj-small-note">每道题都有独立的题面、输入输出、样例和评测；点击题目进入做题页，原始代码在参考页中可逐段对照。</p>`:'<p class="muted">本节为学习方法或概念介绍，没有独立的编程题。后续算法和课后习题均可在对应章节练习。</p>'}`;
 return ()=>{};
}

export function mountProblem(host,p,{docs}){
 host.classList.add('practice-content','oj-solving');
 const refs=sourceBlocks(p,docs),mainDoc=refs[0]?.doc;
 let editor,judge,disposed=false,busy=false,latestResult=null,activePane='statement',referenceKind='corrected',referenceIndex=0;
 const draftKey='algorithms:draft:'+p.id;
 host.innerHTML=`<div class="oj-solving-header"><a href="#/practice">← 返回题库</a><span>${code(p)} / ${escape(p.category)}</span>${mainDoc?`<a class="oj-return-note" href="#/lesson/${mainDoc.id}">对应笔记：${escape(mainDoc.title)} ↗</a>`:''}</div><div class="oj-workspace"><section class="oj-question-pane"><nav class="oj-pane-tabs" aria-label="题目内容"><button data-pane="statement" class="selected">题目</button><button data-pane="reference">原文参考</button><button data-pane="comparison">代码对照</button><button data-pane="history">提交记录</button></nav><div class="oj-question-body" id="oj-question-body"></div></section><section class="oj-code-pane"><div class="oj-editor-toolbar"><span><b>C++17</b> · 完整程序</span><span class="oj-draft-state" id="draft-state">草稿自动保存</span><button id="reset-template" title="可使用撤销键恢复">重置模板</button><button id="save-source">下载代码</button></div><div id="oj-code-editor" class="oj-code-editor"></div><div class="oj-submit-toolbar"><span class="oj-runtime-meta">2.5 秒 / 用例 · 64 MiB</span><button id="run-samples">▷ 运行样例</button><button id="submit-solution" class="primary">提交评测</button><button id="stop-execution" disabled>停止</button></div><div class="oj-console"><div class="oj-console-tabs"><button data-console="results" class="selected">测试结果</button><button data-console="custom">自定义运行</button><span id="oj-run-status">待运行</span></div><div id="oj-results" aria-live="polite"><div class="oj-empty"><b>写好代码后，先运行样例</b><p>提交评测会运行本题全部评测用例。编译错误和错误答案会在这里显示具体原因。</p></div></div><div id="oj-custom" hidden><label for="custom-input">标准输入</label><textarea id="custom-input" aria-label="自定义标准输入" spellcheck="false" placeholder="在这里输入自测数据，不需要自己填写期望输出"></textarea><button id="run-custom">运行此输入</button><div id="custom-output"></div></div></div></section></div>`;
 const q=s=>host.querySelector(s);
 function toast(text){q('#draft-state').textContent=text;}
 editor=new EditorView({doc:read(draftKey,p.template),extensions:[basicSetup,cpp(),oneDark,EditorView.updateListener.of(update=>{if(update.docChanged){toast(write(draftKey,update.state.doc.toString())?'已保存到当前浏览器':'浏览器存储已满，请下载代码');}})],parent:q('#oj-code-editor')});
 function referenceText(){if(referenceKind==='complete'||!refs.length)return p.reference;const r=refs[referenceIndex]||refs[0];return r.code[referenceKind==='original'?'original':'corrected'];}
 function referenceControls(){return `<div class="oj-reference-controls"><div role="group" aria-label="参考版本">${[['corrected',refs[referenceIndex]?.code.label||'最小修正版'],['original','原始笔记'],['complete','完整参考程序']].map(([v,t])=>`<button data-reference="${v}" class="${v===referenceKind?'selected':''}">${t}</button>`).join('')}</div>${refs.length>1?`<label>原文片段<select id="reference-block" aria-label="原文片段">${refs.map((r,i)=>`<option value="${i}" ${i===referenceIndex?'selected':''}>${escape(r.doc.title)} · 片段 ${r.index+1}</option>`).join('')}</select></label>`:''}</div>`;}
 function bindReference(){host.querySelectorAll('[data-reference]').forEach(b=>b.onclick=()=>{referenceKind=b.dataset.reference;renderPane()});if(q('#reference-block'))q('#reference-block').onchange=e=>{referenceIndex=+e.target.value;renderPane()};}
 function renderPane(){const body=q('#oj-question-body');if(activePane==='statement'){
  const samples=samplesOf(p);
  body.innerHTML=`<div class="oj-question-title"><span>${code(p)} <em>${escape(p.difficulty||'基础')}</em></span><h1>${escape(p.title)}</h1></div><p class="oj-description">${escape(p.description)}</p><h3>输入格式</h3><div class="oj-format">${escape(p.input)}</div><h3>输出格式</h3><div class="oj-format">${escape(p.output)}</div><h3>数据范围</h3><ul>${(p.constraints||['输入满足上述格式；提交完整 C++17 程序。']).map(s=>`<li>${escape(s)}</li>`).join('')}</ul>${samples.map((s,i)=>`<section class="oj-sample"><h3>样例 ${i+1}</h3><div class="oj-sample-columns"><div><header>输入 <button data-copy-input="${i}">复制</button></header><pre>${escape(s.stdin||'(空输入)')}</pre></div><div><header>输出</header><pre>${escape(s.expected===''?'(空输出)':s.expected)}</pre></div></div>${s.explanation?`<p>${escape(s.explanation)}</p>`:''}</section>`).join('')}<div class="oj-question-origin"><b>原文关联</b>${(p.sourceRefs||[]).map(ref=>{const d=docs.find(d=>d.id===ref.docId);return d?`<a href="#/lesson/${d.id}">${escape(d.book)} / ${escape(d.title)} · ${ref.blocks.map(i=>'片段 '+(i+1)).join('、')} ↗</a>`:''}).join('')}</div>`;
  body.querySelectorAll('[data-copy-input]').forEach(b=>b.onclick=async()=>{try{await navigator.clipboard.writeText(samples[+b.dataset.copyInput].stdin);b.textContent='已复制'}catch{b.textContent='请手动复制'}});
 }else if(activePane==='reference'){
  body.innerHTML=`<h2>原文与修正对照</h2><p class="oj-small-note">笔记原码完整保留。函数片段依赖同章的类型定义；“完整参考程序”额外补充了本题输入输出驱动。</p>${referenceControls()}<pre class="oj-reference-code"><code>${highlighted(referenceText())}</code></pre><p class="oj-small-note">${escape(p.referenceNote||'参考程序按照本题输入输出约定补充。')}</p>${referenceKind!=='complete'&&refs[referenceIndex]?.code.notes.length?`<div class="fixnote">${refs[referenceIndex].code.notes.map(escape).join('<br>')}</div>`:''}`;bindReference();
 }else if(activePane==='comparison'){
  const diff=diffLines(referenceText(),editor.state.doc.toString());
  body.innerHTML=`<h2>与原码对照</h2><p class="oj-small-note">红色是参考中被删去的内容，绿色是你的新增。代码差异只帮助阅读，不参与评测。</p>${referenceControls()}<button id="refresh-comparison">按当前代码重新对照</button><div class="oj-source-diff">${diff.map(part=>`<pre class="${part.added?'added':part.removed?'removed':''}">${escape(part.value)}</pre>`).join('')}</div>`;bindReference();q('#refresh-comparison').onclick=renderPane;
 }else{
  const history=histories(p.id);body.innerHTML=`<h2>本题提交记录</h2><p class="oj-small-note">记录保存在当前浏览器。运行样例和自定义输入不计为正式提交。</p>${history.length?history.map((s,i)=>`<div class="oj-submission-item"><span class="oj-verdict ${s.status==='AC'?'accepted':'failed'}">${escape(labels[s.status]||s.status)}</span><time>${escape(new Date(s.at).toLocaleString())}</time><span>${s.passed} / ${s.total} 用例</span><button data-load-submission="${i}">恢复此代码</button></div>`).join(''):'<div class="oj-empty">还没有提交记录。</div>'}`;
  body.querySelectorAll('[data-load-submission]').forEach(b=>b.onclick=()=>{const record=history[+b.dataset.loadSubmission];editor.dispatch({changes:{from:0,to:editor.state.doc.length,insert:record.code}});toast('已恢复历史代码，可撤销');});
 }}
 host.querySelectorAll('[data-pane]').forEach(b=>b.onclick=()=>{activePane=b.dataset.pane;host.querySelectorAll('[data-pane]').forEach(x=>x.classList.toggle('selected',x===b));renderPane()});
 host.querySelectorAll('[data-console]').forEach(b=>b.onclick=()=>{const custom=b.dataset.console==='custom';q('#oj-results').hidden=custom;q('#oj-custom').hidden=!custom;host.querySelectorAll('[data-console]').forEach(x=>x.classList.toggle('selected',x===b));});
 q('#reset-template').onclick=()=>{editor.dispatch({changes:{from:0,to:editor.state.doc.length,insert:p.template}});toast('已恢复模板，可用撤销键找回代码')};q('#save-source').onclick=()=>saveFile(editor.state.doc.toString(),p.id+'.cpp');
 const setBusy=on=>{busy=on;q('#run-samples').disabled=on;q('#submit-solution').disabled=on;q('#run-custom').disabled=on;q('#stop-execution').disabled=!on;};
 function progress(event){if(disposed)return;const names={download:'首次准备编译环境（约 19 MB）',compile:'编译 C++17',link:'链接程序',run:'运行测试',case:'测试完成'};const text=event.stage==='run'?`正在运行第 ${event.index+1} 组测试`:(names[event.stage]||'正在处理');q('#oj-run-status').textContent=text;q('#oj-run-status').className='running';if(event.stage!=='case')q('#oj-results').innerHTML=`<div class="oj-running"><span class="oj-spinner"></span><b>${escape(text)}</b><p>首次运行需要加载编译器，后续资源由浏览器缓存。</p></div>`;}
 function displayResult(result,mode){latestResult=result;const cases=result.cases||[],passed=cases.filter(t=>t.status==='AC').length,status=result.status,ok=status==='AC';q('#oj-run-status').textContent=mode==='submit'?'评测完成':'样例运行完成';q('#oj-run-status').className='';q('#oj-results').innerHTML=`<div class="oj-result-heading ${ok?'accepted':'failed'}"><span>${ok?'✓':'×'}</span><div><b>${escape(labels[status]||status)}</b><small>${mode==='submit'?'提交评测':'样例测试'}${cases.length?' · '+passed+' / '+cases.length+' 通过':''}</small></div></div>${result.message?`<pre class="oj-diagnostic">${escape(result.message)}</pre>`:''}${cases.length?`<div class="oj-test-cases">${cases.map((t,i)=>`<details class="${t.status==='AC'?'passed':'failed'}"><summary><span>${t.status==='AC'?'✓':'×'} 测试 ${i+1}</span><b>${escape(labels[t.status]||t.status)}</b><time>${Math.round(t.duration||0)} ms</time></summary><div class="oj-case-detail"><b>期望输出</b><pre>${escape(t.expected===''?'(空输出)':t.expected)}</pre><b>实际输出</b><pre>${escape(t.stdout===''?'(空输出)':t.stdout)}</pre>${t.stderr?`<b>错误输出</b><pre>${escape(t.stderr)}</pre>`:''}</div></details>`).join('')}</div>`:''}`;}
 async function execute(mode){if(busy)return;const source=editor.state.doc.toString();if(!source.trim()){q('#oj-results').innerHTML='<div class="oj-empty">请先填写代码。</div>';return;}setBusy(true);if(mode!=='custom'){q('#oj-results').hidden=false;q('#oj-custom').hidden=true;host.querySelectorAll('[data-console]').forEach(b=>b.classList.toggle('selected',b.dataset.console==='results'));}
 let result;
 try{if(!judge){if(!window.createCppJudge)throw Object.assign(new Error('编译器接口尚未加载，请刷新页面重试。'),{code:'RUNTIME_UNAVAILABLE'});judge=window.createCppJudge({onProgress:progress});}const cases=mode==='custom'?[{name:'自定义输入',stdin:q('#custom-input').value,expected:''}]:mode==='samples'?samplesOf(p):p.cases;result=await judge.run({code:source,baseURL:assetPath('oj/cpp/'),cases});if(disposed)return;
 if(mode==='custom'){const crashed=['CE','RE','NO_TESTS'].includes(result.status);q('#custom-output').innerHTML=`<h4>${crashed?(labels[result.status]||result.status):'程序输出'}</h4><pre>${escape(crashed?result.message||result.cases?.[0]?.stderr||'运行失败':result.cases?.[0]?.stdout||'(空输出)')}</pre>`;q('#oj-run-status').textContent=crashed?'运行失败':'自定义运行完成';}else displayResult(result,mode);
 }catch(error){if(disposed)return;result={status:error.code||'RE',message:error.message,cases:[]};if(mode==='custom')q('#custom-output').innerHTML=`<h4>${escape(labels[result.status]||result.status)}</h4><pre>${escape(result.message)}</pre>`;else displayResult(result,mode);
 }finally{if(!disposed){setBusy(false);if(mode==='submit'&&result&&result.status!=='CANCELLED'){const cases=result.cases||[];const history=histories(p.id);history.unshift({at:Date.now(),status:result.status,passed:cases.filter(t=>t.status==='AC').length,total:p.cases.length,code:source});write(key(p.id),history.slice(0,10));if(result.status==='AC')write('algorithms:oj-passed',[...new Set([...read('algorithms:oj-passed',[]),p.id])]);if(activePane==='history')renderPane();}}}
 }
 q('#run-samples').onclick=()=>execute('samples');q('#submit-solution').onclick=()=>execute('submit');q('#run-custom').onclick=()=>execute('custom');q('#stop-execution').onclick=()=>judge?.cancel();renderPane();
 return ()=>{disposed=true;judge?.cancel();editor.destroy();host.classList.remove('practice-content','oj-solving');};
}
