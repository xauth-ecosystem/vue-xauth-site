import { Suspense } from 'react';
import WikiArticle from './WikiArticle';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

export default function WikiArticlePage() {
  const articleFallback = (
    <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: md.render('# Loading article...') }}>
    </div>
  );

  return (
    <Suspense fallback={articleFallback}>
      <WikiArticle />
    </Suspense>
  );
}

