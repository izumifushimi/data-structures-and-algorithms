/** Real local C++ OJ: WebAssembly in a terminable Web Worker; no uploaded source. */
export function createCppJudge({onProgress = () => {}, downloadTimeout = 120000, compileTimeout = 45000, runTimeout = 2500} = {}) {
  let worker, timer, pendingReject;
  function stop() {clearTimeout(timer); worker?.terminate(); worker = undefined;}
  return {
    run(input) {
      if (worker) {stop(); pendingReject?.(Object.assign(new Error('已取消'), {code:'CANCELLED'}));}
      return new Promise((resolve, reject) => {
        pendingReject = reject;
        worker = new Worker(new URL('./runner-worker.js', import.meta.url), {type:'module'});
        const arm = (milliseconds, code, message) => {
          clearTimeout(timer);
          timer = setTimeout(() => {stop(); reject(Object.assign(new Error(message), {code}));}, milliseconds);
        };
        arm(downloadTimeout, 'RUNTIME_UNAVAILABLE', 'C++ 运行时加载超时，请检查网络后重试');
        worker.onmessage = ({data}) => {
          if (data.type === 'progress') {
            const p = data.progress;
            if (p.stage==='compile'||p.stage==='link') arm(compileTimeout,'CE','编译超过时间限制');
            if (p.stage==='run') arm(runTimeout,'TLE',`测试 ${p.index+1} 运行超时`);
            if (p.stage==='case') clearTimeout(timer);
            onProgress(p);
          } else if (data.type === 'result') {stop(); resolve(data.result);}
          else if (data.type === 'error') {stop(); reject(Object.assign(new Error(data.error.message), {code:data.error.code}));}
        };
        worker.onerror = event => {stop(); reject(Object.assign(new Error(event.message || 'C++ 运行时异常'), {code:'RE'}));};
        worker.postMessage(input);
      });
    },
    cancel() {stop(); pendingReject?.(Object.assign(new Error('已取消'),{code:'CANCELLED'}));}
  };
}
