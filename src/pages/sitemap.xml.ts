import type { APIRoute } from 'astro';
import { readdir, access } from 'node:fs/promises';
import { join } from 'node:path';

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
  '/about',
  '/blog'
];

// Helper function to check if a file exists
async function fileExists(path: string): Promise<boolean> {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

export const GET: APIRoute = async () => {
  const site = 'https://onerepmaxcalculator.com';
  
  // Get all blog posts
  const postsDir = join(process.cwd(), 'src/data/blog/posts');
  const blogPosts = await readdir(postsDir);

  // Generate URLs for regular pages
  const pageUrls = languages.flatMap(lang => 
    pages.map(page => ({
      url: `${site}/${lang}${page}`,
      lastmod: new Date().toISOString().split('T')[0]
    }))
  );

  // Generate URLs for blog posts, checking language versions
  const blogUrls = [];
  for (const post of blogPosts) {
    for (const lang of languages) {
      // Check if the language version exists
      const langFile = join(postsDir, post, `${lang}.json`);
      if (await fileExists(langFile)) {
        blogUrls.push({
          url: `${site}/${lang}/blog/${post}`,
          lastmod: new Date().toISOString().split('T')[0]
        });
      }
    }
  }

  // Combine all URLs
  const allUrls = [...pageUrls, ...blogUrls];

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allUrls.map(({ url, lastmod }) => `
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