// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Domínio atual (Vercel). Quando houver domínio final, defina SITE_URL na Vercel
  // (ou troque aqui): canonical, og:url/og:image, sitemap e robots dependem dele.
  site: process.env.SITE_URL || 'https://royal-english-lp.vercel.app',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
