// Vite replaces BASE_URL for root hosting and GitHub Pages project paths.
export function assetPath(path) {
  return import.meta.env.BASE_URL + path.replace(/^\/+/, '');
}
