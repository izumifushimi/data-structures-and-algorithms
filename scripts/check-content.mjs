import fs from 'node:fs';import crypto from 'node:crypto';
const docs=JSON.parse(fs.readFileSync('public/data/notes.json'));const m=JSON.parse(fs.readFileSync('public/data/source-manifest.json'));
if(docs.length!==57||m.codeBlocks!==224)throw Error('导入数量不符');
for(const d of docs){if(!d.enrichment.summary)throw Error('缺少讲解 '+d.title);for(const c of d.codes)if(crypto.createHash('sha256').update(c.original).digest('hex')!==c.sha256)throw Error('原码哈希不符 '+d.title);}
console.log(`PASS: ${docs.length} documents; ${m.codeBlocks} original blocks; source hashes and lesson summaries`);
