import {problems as linearTree} from './problem-bank/linear-tree.mjs';
import {problems as graphSearchSort} from './problem-bank/graph-search-sort.mjs';

export const problems=[...linearTree,...graphSearchSort];
const byId=new Map(problems.map(p=>[p.id,p]));
if(byId.size!==problems.length)throw new Error('题库存在重复ID');
export function getProblem(id){return byId.get(id)}
export function problemsForLesson(docId){return problems.filter(p=>p.sourceRefs?.some(ref=>ref.docId===docId))}
