// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Troque pela URL final do seu site (usada em SEO e sitemap)
export default defineConfig({
  site: 'https://seu-dominio.dev',
  vite: {
    plugins: [tailwindcss()],
  },
});
