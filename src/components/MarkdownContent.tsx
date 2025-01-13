import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export const MarkdownContent = ({ content, className = '' }: MarkdownContentProps) => {
  const htmlContent = DOMPurify.sanitize(marked(content));
  
  return (
    <div 
      className={`prose prose-invert max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: htmlContent }} 
    />
  );
}; 