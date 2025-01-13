import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { BlogPost } from '../types/blog';

export async function getBlogPost(lang: string, slug: string): Promise<BlogPost> {
  const postPath = join(process.cwd(), 'src/data/blog/posts', slug, `${lang}.json`);
  const metaPath = join(process.cwd(), 'src/data/blog/posts', slug, 'meta.json');
  
  try {
    console.log(`Loading blog post: ${slug} (${lang})`);
    console.log(`Post path: ${postPath}`);
    console.log(`Meta path: ${metaPath}`);

    const [postContent, metaContent] = await Promise.all([
      readFile(postPath, 'utf-8'),
      readFile(metaPath, 'utf-8')
    ]);
    
    const post = JSON.parse(postContent);
    const meta = JSON.parse(metaContent);
    
    // Ensure all required fields are present
    if (!post.meta || !post.content) {
      throw new Error(`Invalid post structure for ${slug}`);
    }

    if (!meta.slug || !meta.date) {
      throw new Error(`Missing required meta fields for ${slug}`);
    }

    const blogPost: BlogPost = {
      meta: {
        ...post.meta,
        slug: meta.slug,
        date: meta.date,
        author: meta.author || 'AI Writer',
        coverImage: meta.coverImage || '/images/blog/placeholder.png',
        tags: Array.isArray(meta.tags) ? meta.tags : [],
        relatedPosts: Array.isArray(meta.relatedPosts) ? meta.relatedPosts : []
      },
      content: post.content
    };

    console.log(`Successfully loaded post: ${slug}`);
    return blogPost;
  } catch (error) {
    console.error(`Error loading blog post ${slug} (${lang}):`, error);
    // Fallback to English if translation doesn't exist
    if (lang !== 'en') {
      console.log(`Falling back to English for ${slug}`);
      return getBlogPost('en', slug);
    }
    throw error;
  }
}

export async function getBlogPosts(lang: string, limit?: number): Promise<BlogPost[]> {
  const postsDir = join(process.cwd(), 'src/data/blog/posts');
  
  try {
    // Read directory and get meta files first
    const postFolders = await readdir(postsDir);
    console.log('Found post folders:', postFolders);
    
    // Get meta info for all posts to sort by date
    const metaPromises = postFolders.map(async folder => {
      try {
        const metaPath = join(postsDir, folder, 'meta.json');
        const metaContent = await readFile(metaPath, 'utf-8');
        return { folder, meta: JSON.parse(metaContent) };
      } catch (error) {
        console.error(`Failed to read meta for folder ${folder}:`, error);
        return null;
      }
    });

    const metaResults = await Promise.all(metaPromises);
    
    // Sort by date and take only the needed posts
    const sortedFolders = metaResults
      .filter((result): result is { folder: string; meta: any } => result !== null)
      .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime())
      .slice(0, limit)
      .map(result => result.folder);

    // Now load only the needed posts
    const posts = await Promise.all(
      sortedFolders.map(async folder => {
        try {
          return await getBlogPost(lang, folder);
        } catch (error) {
          console.error(`Failed to load post from folder ${folder}:`, error);
          return null;
        }
      })
    );
    
    // Filter out any null posts
    const validPosts = posts.filter((post): post is BlogPost => post !== null);
    
    console.log(`Loaded ${validPosts.length} posts for language ${lang}`);
    return validPosts;
  } catch (error) {
    console.error('Failed to read posts directory:', error);
    return [];
  }
} 