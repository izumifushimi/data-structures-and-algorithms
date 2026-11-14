import {defineConfig} from 'vite';
import {fileURLToPath} from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
export default defineConfig({
  root,
  base: './',
  publicDir: false,
  build: {
    outDir: 'bundle',
    emptyOutDir: true,
    lib: {entry: fileURLToPath(new URL('runner-client.js', import.meta.url)), formats: ['es'], fileName: 'oj'},
    minify: true,
  },
  worker: {format: 'es'},
});
