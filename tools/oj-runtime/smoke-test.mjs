import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import {judgeCpp} from './runner-core.js';
globalThis.location = {href:'http://localhost/'};
globalThis.fetch = async url => {
  const name = path.basename(String(url));
  const bytes = await fs.readFile(new URL(`../../public/oj/cpp/${name}`,import.meta.url));
  return new Response(bytes);
};
const code = `#include <bits/stdc++.h>
using namespace std;
int main(){int n; cin>>n; vector<int> a(n);for(auto &x:a)cin>>x;sort(a.begin(),a.end());for(auto x:a)cout<<x<<" ";}`;
const cases = [{stdin:'5\n3 1 4 1 5\n',expected:'1 1 3 4 5'}, {stdin:'0\n',expected:''}, {stdin:'4\n-2 0 -2 8\n',expected:'-2 -2 0 8'}];
const result = await judgeCpp({code,cases},p=>console.log(p.stage,p.text??p.result?.status));
console.log(JSON.stringify(result,null,2));
assert.equal(result.status,'AC');
const bad = await judgeCpp({code:'int main( {',cases},()=>{});
console.log('Syntax error:',bad.status,bad.message.slice(0,150));assert.equal(bad.status,'CE');
const wrong = await judgeCpp({code:'int main(){return 0;}',cases:[{stdin:'',expected:'123'}]},()=>{});
console.log('Wrong answer:',wrong.status);assert.equal(wrong.status,'WA');
console.log('PASS: real C++ compile/link, STL sort/vector, multiple stdin, CE and WA.');
