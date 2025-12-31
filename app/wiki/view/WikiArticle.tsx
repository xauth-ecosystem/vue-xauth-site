'use client';

import { useState, useEffect } from 'react';
import MarkdownIt from 'markdown-it';
import { useSearchParams } from 'next/navigation';

const md = new MarkdownIt();

const DOCS_REPO_RAW_BASE_URL = 'https://raw.githubusercontent.com/xauth-ecosystem/xauth-docs/main';

export default function WikiArticle() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');
  
  const [markdownText, setMarkdownText] = useState('');
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      setMarkdownText('# Please select an article from the sidebar.');
      setTitle('Wiki');
      document.title = 'Wiki | XAuth Ecosystem';
      return;
    }

    const fetchMarkdownContent = async () => {
      setLoading(true);
      setError(null);

      try {
        const encodedSlug = encodeURIComponent(slug);
        const response = await fetch(`${DOCS_REPO_RAW_BASE_URL}/articles/${encodedSlug}.md`);

        if (!response.ok) {
          if (response.status === 404) {
            const notFoundMessage = `# Article Not Found\n\nThe article with slug \`${slug}\` could not be found.`;
            setMarkdownText(notFoundMessage);
            setTitle('Not Found');
            document.title = 'Not Found | Wiki | XAuth Ecosystem';
            return;
          }
          throw new Error(`Error loading content: ${response.statusText}`);
        }

        const text = await response.text();
        setMarkdownText(text);

        const firstLine = text.split('\n')[0];
        let pageTitle = '';
        if (firstLine && firstLine.startsWith('#')) {
          pageTitle = firstLine.replace(/^#\s*/, '').trim();
        } else {
          pageTitle = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        }
        setTitle(pageTitle);
        document.title = `${pageTitle} | Wiki | XAuth Ecosystem`;

      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMarkdownContent();
  }, [slug]);

  if (loading) {
    return <div>Loading article...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  
  const renderedMarkdown = md.render(markdownText);

  return (
    <div className="prose prose-invert max-w-none">
      <div dangerouslySetInnerHTML={{ __html: renderedMarkdown }}></div>
    </div>
  );
}
