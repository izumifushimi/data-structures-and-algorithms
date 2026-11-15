// Validate every published reference against the browser's actual Clang/WASI toolchain.
import {Worker,isMainThread,parentPort} from 'node:worker_threads';
import fs from 'node:fs/promises';
import path from 'node:path';
if(!isMainThread){
 globalThis.location={href:'http://localhost/'};
 globalThis.fetch=async url=>new Response(await fs.readFile(new URL('../../public/oj/cpp/'+path.basename(String(url)),import.meta.url)));
 const {judgeCpp}=await import('./runner-core.js');
 parentPort.on('message',async p=>{try{const result=await judgeCpp({code:p.reference,cases:p.cases},progress=>parentPort.postMessage({type:'progress',stage:progress.stage,index:progress.index}));parentPort.postMessage({type:'result',result});}catch(e){parentPort.postMessage({type:'result',result:{status:e.code||'RE',message:e.message,cases:[]}})}});
}else{
 const {problems}=await import('../../src/problems.js');
 const selected=process.env.OJ_PROBLEM_FILTER?problems.filter(p=>process.env.OJ_PROBLEM_FILTER.split(',').some(f=>p.id.includes(f))):problems;
 const results=[];let cursor=0;
 async function lane(){let worker;function reset(){worker?.terminate();worker=new Worker(new URL(import.meta.url));}reset();
  try{while(cursor<selected.length){const p=selected[cursor++];const result=await new Promise(resolve=>{let timer;const finish=result=>{clearTimeout(timer);worker.removeListener('message',onMessage);worker.removeListener('error',onError);resolve(result)};const arm=(ms,status)=>{clearTimeout(timer);timer=setTimeout(()=>{finish({status,message:'Toolchain execution timed out',cases:[]});reset()},ms)};function onError(e){finish({status:'RE',message:e.message,cases:[]});reset()}function onMessage(m){if(m.type==='result')finish(m.result);else if(m.stage==='compile'||m.stage==='link')arm(45000,'CE');else if(m.stage==='run')arm(2500,'TLE');else if(m.stage==='case')clearTimeout(timer)}worker.on('message',onMessage);worker.once('error',onError);arm(120000,'RUNTIME_UNAVAILABLE');worker.postMessage(p);});const failures=(result.cases||[]).filter(t=>t.status!=='AC');results.push({id:p.id,status:result.status,passed:(result.cases||[]).filter(t=>t.status==='AC').length,total:p.cases.length,...(result.status==='AC'?{}:{message:result.message,failures})});if(result.status!=='AC')console.error('FAIL',p.id,result.status,result.message,JSON.stringify(failures));else if(results.length%20===0)console.log('WASM verified '+results.length+'/'+selected.length);
  }}finally{await worker.terminate()}}
 await Promise.all(Array.from({length:2},lane));
 await fs.mkdir('outputs',{recursive:true});await fs.writeFile('outputs/oj-wasm-bank-validation.json',JSON.stringify({problems:selected.length,passedCases:results.reduce((a,r)=>a+r.passed,0),results},null,2));
 const failed=results.filter(r=>r.status!=='AC');console.log(`${failed.length?'FAIL':'PASS'} WASM ${selected.length} programs, ${results.reduce((a,r)=>a+r.passed,0)} passing cases, ${failed.length} failed programs`);if(failed.length)process.exitCode=1;
}
