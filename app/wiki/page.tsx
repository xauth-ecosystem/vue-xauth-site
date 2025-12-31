'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

// This component now handles client-side redirection for static export environments

const DOCS_REPO_RAW_BASE_URL = 'https://raw.githubusercontent.com/xauth-ecosystem/xauth-docs/main';

interface WikiItem {
  slug: string;
  label: string;
  default?: boolean;
}

interface WikiSection {
  title: string;
  slug?: string;
  items: WikiItem[];
}

async function getWikiStructure(): Promise<WikiSection[]> {
  try {
    const response = await fetch(`${DOCS_REPO_RAW_BASE_URL}/_wiki_structure.json`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      return [];
    }

    return response.json();
  } catch (error) {
    return [];
  }
}

export default function WikiPage() {
  const router = useRouter();
  const [message, setMessage] = useState('Finding the default article to redirect...');

  useEffect(() => {
    const findAndRedirect = async () => {
      const structure = await getWikiStructure();
      
      let targetSlug: string | null = null;
      const allItems: WikiItem[] = [];

      for (const section of structure) {
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
    };

    findAndRedirect();
  }, [router]);

  const markdownContent = `# Welcome to the Wiki!\n\n${message}`;

  return (
    <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: md.render(markdownContent) }}>
    </div>
  );
}
