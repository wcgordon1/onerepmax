import type { APIRoute } from 'astro';

const pages = ['', '/deadlift', '/bench', '/squat', '/about'];
const languages = ['en', 'zh', 'es', 'fr', 'ar', 'bn', 'pt', 'ru', 'ur', 'hi', 'ta'];
const baseUrl = 'https://onerepmaxcalculator.com';

export const GET: APIRoute = async () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="http://www.w3.org/1999/xhtml">
      ${pages.map(page => languages.map(lang => `
        <url>
          <loc>${baseUrl}/${lang}${page}</loc>
          ${languages.map(alternateLang => `
            <xhtml:link 
              rel="alternate" 
              hreflang="${alternateLang}" 
              href="${baseUrl}/${alternateLang}${page}"
            />`).join('')}
          <xhtml:link 
            rel="alternate" 
            hreflang="x-default" 
            href="${baseUrl}/en${page}"
          />
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>${page === '' ? '1.0' : '0.8'}</priority>
        </url>
      `).join('')).join('')}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}; 