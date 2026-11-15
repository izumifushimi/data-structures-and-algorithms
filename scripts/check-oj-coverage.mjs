import fs from 'node:fs';
import assert from 'node:assert/strict';
import {problems,problemsForLesson} from '../src/problems.js';
const notes=JSON.parse(fs.readFileSync('public/data/notes.json','utf8'));
const coverage=['content/oj-coverage-linear-tree.json','content/oj-coverage-graph-search-sort.json'].flatMap(p=>JSON.parse(fs.readFileSync(p,'utf8')));
const ids=new Set(problems.map(p=>p.id));assert.equal(ids.size,problems.length,'题目ID必须唯一');
const byDoc=new Map(notes.map(d=>[d.id,d]));let cases=0;
for(const p of problems){
 for(const k of ['id','title','category','description','input','output','template','reference'])assert.ok(typeof p[k]==='string'&&p[k].trim(),p.id+': missing '+k);
 assert.ok(Array.isArray(p.constraints)&&p.constraints.length,p.id+': 缺少数据范围');
 assert.ok(p.samples?.length,p.id+': 缺少样例');assert.ok(p.cases?.length>=3,p.id+': 测试少于3组');
 assert.ok(p.sourceRefs?.length,p.id+': 缺少原文关联');assert.ok(p.sourceRefs.some(ref=>byDoc.get(ref.docId)?.book===p.category),p.id+': 分类未关联主文档');
 for(const ref of p.sourceRefs){const d=byDoc.get(ref.docId);assert.ok(d,p.id+': 无效文档');for(const i of ref.blocks||[])assert.ok(Number.isInteger(i)&&d.codes[i],p.id+': 无效代码片段 '+i);for(const i of ref.primaryBlocks||[])assert.ok(ref.blocks.includes(i),p.id+': 主算法片段必须属于参考上下文');}
 for(const t of [...p.samples,...p.cases]){assert.equal(typeof t.stdin,'string',p.id+': 输入格式错误');assert.equal(typeof t.expected,'string',p.id+': 期望输出格式错误');}
 cases+=p.cases.length;
}
const seen=new Set();for(const row of coverage){const d=byDoc.get(row.docId);assert.ok(d?.codes[row.block],JSON.stringify(row)+': 无效覆盖记录');const k=row.docId+':'+row.block;assert.ok(!seen.has(k),'重复覆盖行 '+k);seen.add(k);assert.ok(['problem','support'].includes(row.kind),'未知覆盖类型 '+k);if(row.kind==='support')assert.ok(row.reason?.trim(),'辅助片段必须说明用途 '+k);assert.ok(row.problemIds?.length,'片段必须关联题目 '+k);for(const id of row.problemIds){assert.ok(ids.has(id),'无效题目 '+id);assert.ok(problems.find(p=>p.id===id).sourceRefs.some(ref=>ref.docId===row.docId&&ref.blocks.includes(row.block)),'关联方向不一致 '+k+' '+id);}}
for(const d of notes)for(let i=0;i<d.codes.length;i++)assert.ok(seen.has(d.id+':'+i),'原始片段遗漏 '+d.title+' '+i);
assert.equal(seen.size,224);
const summary=notes.map(d=>({id:d.id,title:d.title,book:d.book,sourceBlocks:d.codes.length,problemCount:problemsForLesson(d.id).length}));
fs.mkdirSync('outputs',{recursive:true});fs.writeFileSync('outputs/oj-coverage-summary.json',JSON.stringify({problems:problems.length,cases,sourceBlocks:seen.size,lessons:summary},null,2));
console.log(`PASS ${problems.length} original-linked problems; ${cases} test cases; all ${seen.size} source blocks classified and linked.`);
