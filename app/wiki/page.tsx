'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import MarkdownIt from 'markdown-it';
import { useWiki, WikiItem } from '@/contexts/WikiContext';

const md = new MarkdownIt();

export default function WikiPage() {
  const router = useRouter();
  const { wikiStructure, loading } = useWiki();
  const [message, setMessage] = useState('Finding the default article to redirect...');

  useEffect(() => {
    if (loading) return; // Wait until the context has loaded the data

    let targetSlug: string | null = null;
    const allItems: WikiItem[] = [];

    for (const section of wikiStructure) {
      for (const item of section.items) {
        allItems.push(item);
        if (item.default) {
          targetSlug = item.slug;
          break;
        }
      }
      if (targetSlug) break;
    }

    // Fallback to the first item if no default is set
    if (!targetSlug && allItems.length > 0) {
      targetSlug = allItems[0].slug;
    }

    if (targetSlug) {
      router.replace(`/wiki/view?slug=${targetSlug}`);
    } else {
      setMessage('Could not find any articles to redirect to. Please check the wiki structure.');
    }
  }, [wikiStructure, loading, router]);

  const markdownContent = `# Welcome to the Wiki!\n\n${message}`;

  return (
    <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: md.render(markdownContent) }}>
    </div>
  );
}

