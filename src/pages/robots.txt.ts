import type { APIRoute } from "astro";

// Dinâmico para que a linha Sitemap use o domínio (Astro `site`) quando existir.
export const GET: APIRoute = ({ site }) =>
  new Response(
    `# Site público de uma página: tudo pode ser indexado.
# Crawlers de busca e de IA (GEO) são bem-vindos: o objetivo é ser citado.

User-agent: *
Allow: /
Disallow: /404

User-agent: GPTBot
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: ClaudeBot
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: PerplexityBot
User-agent: Perplexity-User
User-agent: Google-Extended
User-agent: Applebot-Extended
User-agent: Bingbot
User-agent: Googlebot
Allow: /
${site ? `\nSitemap: ${new URL("sitemap-index.xml", site).href}\n` : ""}`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } }
  );
