import { Suspense } from 'react';
import WikiArticle from './WikiArticle';

export default function WikiArticlePage() {
  const articleFallback = (
    <div className="prose prose-invert max-w-none">
      Loading article...
    </div>
  );

  return (
    <Suspense fallback={articleFallback}>
      <WikiArticle />
    </Suspense>
  );
}

