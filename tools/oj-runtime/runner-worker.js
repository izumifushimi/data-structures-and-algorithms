import {judgeCpp} from './runner-core.js';
self.onmessage = async ({data}) => {
  try {self.postMessage({type:'result', result:await judgeCpp(data, progress => self.postMessage({type:'progress', progress}))});}
  catch(error) {self.postMessage({type:'error', error:{message:error?.message ?? String(error), code:error?.code ?? 'RE'}});}
};
