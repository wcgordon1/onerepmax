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

export async function getBlogPosts(lang: string): Promise<BlogPost[]> {
  const postsDir = join(process.cwd(), 'src/data/blog/posts');
  
  try {
    const postFolders = await readdir(postsDir);
    console.log('Found post folders:', postFolders);
    
    const posts = await Promise.all(
      postFolders.map(async folder => {
        try {
          return await getBlogPost(lang, folder);
        } catch (error) {
          console.error(`Failed to load post from folder ${folder}:`, error);
          return null;
        }
      })
    );
    
    // Filter out any null posts and sort by date
    const validPosts = posts.filter((post): post is BlogPost => post !== null)
      .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
    
    console.log(`Loaded ${validPosts.length} posts for language ${lang}`);
    return validPosts;
  } catch (error) {
    console.error('Failed to read posts directory:', error);
    return [];
  }
} 