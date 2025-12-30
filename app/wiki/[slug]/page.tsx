import MarkdownIt from 'markdown-it';
import Head from 'next/head';

const md = new MarkdownIt();

interface WikiArticlePageProps {
  params: { slug: string };
}

// Implement generateStaticParams to tell Next.js which pages to pre-render
export async function generateStaticParams() {
  const slugs = ['introduction', 'getting-started', 'faq']; // Hardcoded example slugs

  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Data fetching at build time for SSG
async function getMarkdownContent(slug: string) {
  const DOCS_REPO_RAW_BASE_URL = 'https://raw.githubusercontent.com/xauth-ecosystem/xauth-docs/main';
  const response = await fetch(`${DOCS_REPO_RAW_BASE_URL}/${slug}.md`);

  if (!response.ok) {
    if (response.status === 404) {
      return { markdownText: null, error: 'Article not found' };
    }
    return { markdownText: null, error: `Error loading content: ${response.statusText}` };
  }

  const markdownText = await response.text();
  return { markdownText, error: null };
}

export default async function WikiArticlePage({ params }: WikiArticlePageProps) {
  const { slug } = await params;
  const { markdownText, error: fetchError } = await getMarkdownContent(slug);

  let renderedMarkdown = '';
  let title = '';
  let errorToDisplay: string | null = null;

  if (fetchError) {
    errorToDisplay = fetchError;
  } else if (!markdownText) {
    errorToDisplay = 'Стаття не знайдена'; // Should be caught by fetchError, but as a fallback
  } else {
    // Extract title from the first line if it starts with #
    const firstLine = markdownText.split('\n')[0];
    if (firstLine && firstLine.startsWith('#')) {
      title = firstLine.replace(/^#\s*/, '').trim();
    } else {
      title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); // Basic title from slug
    }
    renderedMarkdown = md.render(markdownText);
  }

  return (
    <>
      <Head>
        <title>{title ? `${title} | Wiki` : 'Wiki'} | XAuth Ecosystem</title>
      </Head>
      <div className="wiki-article py-20 px-4 max-w-4xl mx-auto">
        {errorToDisplay ? (
          <div className="pt-32">
            <div className="text-center text-red-500">
              {errorToDisplay}
            </div>
          </div>
        ) : (
          <div className="pt-32">
            <h1 className="text-4xl font-bold text-white mb-6">{title}</h1>
            <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: renderedMarkdown }}></div>
          </div>
        )}
      </div>
    </>
  );
}
