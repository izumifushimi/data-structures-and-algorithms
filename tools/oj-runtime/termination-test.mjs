import {Worker as NodeWorker} from 'node:worker_threads';
import assert from 'node:assert/strict';
import {createCppJudge} from '../../public/oj/oj.js';
class WorkerShim {
  constructor(url) {
    this.worker = new NodeWorker(new URL('./node-worker-adapter.mjs',import.meta.url), {workerData:{entry:url.href}});
    this.ready = false; this.queue = [];
    this.worker.on('message', data => {
      if (data.type==='ready') {this.ready = true; this.queue.forEach(x=>this.worker.postMessage(x));this.queue=[];return;}
      this.onmessage?.({data});
    });
    this.worker.on('error', error => this.onerror?.({message:error.message}));
  }
  postMessage(data) {if(this.ready)this.worker.postMessage(data);else this.queue.push(data);}
  terminate() {this.worker.terminate();}
}
globalThis.Worker = WorkerShim;
const judge = createCppJudge({runTimeout:100,onProgress:p=>console.log(p.stage)});
try {
  await judge.run({code:'int main(){volatile int x=0;while(true){x++;}}',cases:[{stdin:'',expected:''}]});
  assert.fail('infinite loop was not killed');
} catch(error) {assert.equal(error.code,'TLE');console.log('PASS: infinite loop terminated with TLE');}
const again = await judge.run({code:'#include <cstdio>\nint main(){printf("ok");}',cases:[{stdin:'',expected:'ok'}]});
assert.equal(again.status,'AC');console.log('PASS: new submission after timeout succeeds');
const output = await judge.run({code:'#include <cstdio>\nint main(){for(int i=0;i<70000;i++)putchar(65);}',cases:[{stdin:'',expected:''}]}).catch(e=>e);
assert.equal(output.code,'OLE');console.log('PASS: large output stopped with OLE');
const cancel = judge.run({code:'int main(){return 0;}',cases:[]}).catch(e=>e);
judge.cancel();assert.equal((await cancel).code,'CANCELLED');console.log('PASS: cancel terminates pending worker');
