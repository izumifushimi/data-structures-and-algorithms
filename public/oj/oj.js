function f({ onProgress: g = () => {
}, downloadTimeout: u = 12e4, compileTimeout: m = 45e3, runTimeout: p = 2500 } = {}) {
  let s, n, i;
  function o() {
    clearTimeout(n), s?.terminate(), s = void 0;
  }
  return {
    run(l) {
      return s && (o(), i?.(Object.assign(new Error("已取消"), { code: "CANCELLED" }))), new Promise((E, t) => {
        i = t, s = new Worker(new URL(
          /* @vite-ignore */
          "" + new URL("assets/runner-worker-rWHtgDV5.js", import.meta.url).href,
          import.meta.url
        ), { type: "module" });
        const c = (e, r, a) => {
          clearTimeout(n), n = setTimeout(() => {
            o(), t(Object.assign(new Error(a), { code: r }));
          }, e);
        };
        c(u, "RUNTIME_UNAVAILABLE", "C++ 运行时加载超时，请检查网络后重试"), s.onmessage = ({ data: e }) => {
          if (e.type === "progress") {
            const r = e.progress;
            (r.stage === "compile" || r.stage === "link") && c(m, "CE", "编译超过时间限制"), r.stage === "run" && c(p, "TLE", `测试 ${r.index + 1} 运行超时`), r.stage === "case" && clearTimeout(n), g(r);
          } else e.type === "result" ? (o(), E(e.result)) : e.type === "error" && (o(), t(Object.assign(new Error(e.error.message), { code: e.error.code })));
        }, s.onerror = (e) => {
          o(), t(Object.assign(new Error(e.message || "C++ 运行时异常"), { code: "RE" }));
        }, s.postMessage(l);
      });
    },
    cancel() {
      o(), i?.(Object.assign(new Error("已取消"), { code: "CANCELLED" }));
    }
  };
}
export {
  f as createCppJudge
};
