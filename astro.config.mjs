// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Domínio final: defina SITE_URL (ex.: https://exemplo.pt) no build/hospedagem.
  // Sem ele, canonical, og:url/og:image, sitemap e Sitemap do robots.txt ficam de fora.
  site: process.env.SITE_URL || undefined,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
