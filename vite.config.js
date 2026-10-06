import { defineConfig } from 'vite';
import { resolve } from 'node:path';

// BASE_PATH is set by the GitHub Pages workflow ("/two-roots-coffee/"); Vercel serves from "/".
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        product: resolve(__dirname, 'product.html'),
      },
    },
  },
});
