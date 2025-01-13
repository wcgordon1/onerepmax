import { useTranslation } from 'react-i18next';
import type { BlogPost } from '../types/blog';

interface RelatedBlogsProps {
  currentSlug: string;
  relatedPosts: BlogPost[];
}

export const RelatedBlogs = ({ currentSlug, relatedPosts }: RelatedBlogsProps) => {
  console.log('🔵 RelatedBlogs Component Initializing');
  console.log('🔵 Current Slug:', currentSlug);
  console.log('🔵 Related Posts:', relatedPosts);

  const { i18n } = useTranslation();

  if (!relatedPosts.length) {
    console.log('🔴 No Posts, Returning Null');
    return null;
  }

  console.log('🟢 Rendering Component with Posts');
  return (
    <div className="mt-12 mb-8 border-t border-gray-800 pt-12">
      <h2 className="text-2xl font-bold mb-6">More Articles</h2>
      <div className="grid gap-4">
        {relatedPosts.map((post) => {
          console.log('🟢 Rendering Post:', post.meta.title);
          return (
            <a
              key={post.meta.slug}
              href={`/${i18n.language}/blog/${post.meta.slug}`}
              className="
                group
                bg-dark-lighter
                hover:bg-gray-800
                border
                border-gray-700
                hover:border-primary
                rounded-lg
                p-6
                transition-all
                duration-200
                flex
                items-center
                gap-6
                shadow-md
                hover:shadow-lg
                hover:-translate-y-0.5
              "
            >
              <div className="
                w-24
                h-24
                flex-shrink-0
                rounded-lg
                overflow-hidden
                group-hover:scale-105
                transition-transform
                duration-200
              ">
                <img 
                  src={post.meta.coverImage} 
                  alt={post.meta.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
                  {post.meta.title}
                </h3>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}; 