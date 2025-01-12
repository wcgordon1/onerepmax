import type { APIRoute } from 'astro';

const languages = [
  'en', 'zh', 'es', 'fr', 
  'de', 'ja', 'pa', 'jv', 
  'ko', 'vi', 'tr', 'sw', 
  'it', 'fa', 'ar', 'bn', 
  'pt', 'ru', 'ur', 'hi', 
  'ta', 'pl'
];

const pages = [
  '',
  '/bench',
  '/squat',
  '/deadlift',
  '/barbell-plate-calculator',
  '/about'
];

export const GET: APIRoute = async () => {
  const site = 'https://onerepmaxcalculator.com';
  
  const urls = languages.flatMap(lang => 
    pages.map(page => ({
      url: `${site}/${lang}${page}`,
      lastmod: new Date().toISOString().split('T')[0]
    }))
  );

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.map(({ url, lastmod }) => `
        <url>
          <loc>${url}</loc>
          <lastmod>${lastmod}</lastmod>
          <changefreq>weekly</changefreq>
        </url>
      `).join('')}
    </urlset>`.trim(),
    {
      headers: {
        'Content-Type': 'application/xml'
      }
    }
  );
}; 