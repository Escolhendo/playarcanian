import { defineConfig } from 'vite';

export default defineConfig({
  // Funciona em GitHub Pages e em domínio personalizado.
  base: './',

  // Evita que o Vite carregue um .postcssrc.json global do Windows.
  css: {
    postcss: {
      plugins: []
    }
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});
