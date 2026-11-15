import {problems} from '../src/problems.js';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
const exec=promisify(execFile);
const tmp=await fs.mkdtemp(path.join(os.tmpdir(),'algorithms-test-'));
const headers=['algorithm','array','bitset','cassert','cctype','cerrno','climits','cmath','cstdio','cstdlib','cstring','deque','functional','iomanip','iostream','iterator','limits','list','map','memory','numeric','queue','set','sstream','stack','string','tuple','unordered_map','unordered_set','utility','vector'].map(h=>'#include <'+h+'>').join('\n');
const normalize=s=>String(s).trim().replace(/\s+/g,' ');
const selected=process.env.OJ_PROBLEM_FILTER?problems.filter(p=>process.env.OJ_PROBLEM_FILTER.split(',').some(f=>p.id.includes(f))):problems;
let cursor=0,totalCases=0;const reports=[];
async function runInput(binary,input){
 const once=()=>new Promise((resolve,reject)=>{const child=execFile(binary,[],{encoding:'utf8',timeout:15000,maxBuffer:1024*1024},(error,stdout,stderr)=>error?reject(Object.assign(error,{stdout,stderr})):resolve({stdout,stderr}));child.stdin.end(input);});
 try{return await once()}catch(error){if(error.signal==='SIGKILL'&&process.platform==='darwin')return once();throw error;}
}
async function worker(){while(cursor<selected.length){const p=selected[cursor++];const source=path.join(tmp,p.id+'.cpp'),binary=path.join(tmp,p.id);const report={id:p.id,cases:p.cases.length,errors:[]};await fs.writeFile(source,p.reference.replace('#include <bits/stdc++.h>',headers));
 try{await exec('clang++',['-std=c++17',source,'-o',binary],{maxBuffer:1024*1024});}catch(error){report.errors.push('compile: '+error.stderr);reports.push(report);continue;}
 const tests=[...p.cases,...(p.samples||[]).filter(s=>!p.cases.some(t=>t.stdin===s.stdin&&t.expected===s.expected))];
 for(const [index,test]of tests.entries()){try{const r=await runInput(binary,test.stdin);if(normalize(r.stdout)!==normalize(test.expected))report.errors.push('case '+(index+1)+' expected '+JSON.stringify(test.expected)+' got '+JSON.stringify(r.stdout));else if(index<p.cases.length)totalCases++;}catch(error){report.errors.push('case '+(index+1)+': '+(error.stderr||error.message));}}
 report.status=report.errors.length?'failed':'passed';reports.push(report);if(report.errors.length)console.error(p.id,report.errors.join('\n'));else if(reports.length%25===0)console.log('Verified '+reports.length+'/'+selected.length);
}}
try{await Promise.all(Array.from({length:Math.min(3,selected.length)},worker));}finally{await fs.rm(tmp,{recursive:true,force:true});}
await fs.mkdir('outputs',{recursive:true});await fs.writeFile('outputs/oj-reference-validation.json',JSON.stringify({problems:selected.length,cases:totalCases,results:reports},null,2));
const failed=reports.filter(r=>r.errors.length);console.log(`${failed.length?'FAIL':'PASS'} ${selected.length} reference programs; ${totalCases} passing test cases; ${failed.length} failed programs`);if(failed.length)process.exitCode=1;
