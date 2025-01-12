import type { APIRoute } from 'astro';

const pages = ['', '/deadlift', '/bench', '/squat', '/about'];
const languages = ['en', 'zh', 'es', 'fr', 'ar', 'bn', 'pt', 'ru', 'ur', 'hi', 'ta'];
const baseUrl = 'https://onerepmaxcalculator.com';

export const GET: APIRoute = async () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${pages.map(page => languages.map(lang => `<url>
  <loc>${baseUrl}/${lang}${page}</loc>
  <changefreq>weekly</changefreq>
  <priority>${page === '' ? '1.0' : '0.8'}</priority>
</url>`).join('\n')).join('\n')}
</urlset>`;

  return new Response(sitemap.trim(), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}; 