export interface BlogPost {
  meta: {
    title: string;
    excerpt: string;
    tags: string[];
    seoTitle: string;
    seoDescription: string;
    date: string;
    author: string;
    coverImage: string;
    slug: string;
    relatedPosts: string[];
  };
  content: string;
} 