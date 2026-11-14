import {defineConfig} from 'vite';
export default defineConfig({build:{rollupOptions:{output:{manualChunks(id){if(id.includes('node_modules')){if(id.includes('highlight.js'))return 'highlight';if(/codemirror|lezer|style-mod|crelt|w3c-keyname/.test(id))return 'editor';return 'vendor';}}}}}});
