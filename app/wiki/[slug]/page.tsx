'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import MarkdownIt from 'markdown-it';
import Head from 'next/head';

const md = new MarkdownIt();

export default function WikiArticlePage() {
  const { slug } = useParams(); // Get slug from route parameters
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [renderedMarkdown, setRenderedMarkdown] = useState('');
  const [title, setTitle] = useState('');

  // Define the base URL for your documentation repository's raw content
  const DOCS_REPO_RAW_BASE_URL = 'https://raw.githubusercontent.com/xauth-ecosystem/xauth-docs/main';

  useEffect(() => {
    const fetchAndRenderMarkdown = async () => {
      if (!slug) {
        setError(new Error('Slug is missing.'));
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);
      setRenderedMarkdown('');
      setTitle('');

      try {
        const response = await fetch(`${DOCS_REPO_RAW_BASE_URL}/${slug}.md`);

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Статтю не знайдено');
          }
          throw new Error(`Помилка завантаження: ${response.statusText}`);
        }

        const markdownText = await response.text();

        // Extract title from the first line if it starts with #
        const firstLine = markdownText.split('\n')[0];
        if (firstLine && firstLine.startsWith('#')) {
          setTitle(firstLine.replace(/^#\s*/, '').trim());
        } else {
          setTitle(String(slug).split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')); // Basic title from slug
        }

        setRenderedMarkdown(md.render(markdownText));
      } catch (err) {
        setError(err as Error);
        console.error('Failed to fetch or render markdown:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAndRenderMarkdown();
  }, [slug]); // Re-run effect when slug changes

  return (
    <>
      <Head>
        <title>{title ? `${title} | Wiki` : 'Wiki'} | XAuth Ecosystem</title>
      </Head>
      <div className="wiki-article py-20 px-4 max-w-4xl mx-auto">
        <div className="pt-32" v-if={loading}>
          <div className="text-center text-slate-300">
            Завантаження...
          </div>
        </div>
        <div className="pt-32" v-else-if={error}>
          <div className="text-center text-red-500">
            Статтю не знайдено або сталася помилка: {error.message}
          </div>
        </div>
        <div v-else className="pt-32">
          <h1 className="text-4xl font-bold text-white mb-6">{title}</h1>
          <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: renderedMarkdown }}></div>
        </div>
      </div>
    </>
  );
}
