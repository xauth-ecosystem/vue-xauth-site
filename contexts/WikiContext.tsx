'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { DOCS_REPO_RAW_BASE_URL } from '@/lib/constants';

// --- Types ---
export interface WikiItem {
  slug: string;
  label: string;
  default?: boolean;
}

export interface WikiSection {
  title: string;
  slug?: string;
  items: WikiItem[];
}

interface WikiContextType {
  wikiStructure: WikiSection[];
  loading: boolean;
}

// --- Context Definition ---
const WikiContext = createContext<WikiContextType | undefined>(undefined);

// --- Provider Component ---
interface WikiProviderProps {
  children: ReactNode;
}

export function WikiProvider({ children }: WikiProviderProps) {
  const [wikiStructure, setWikiStructure] = useState<WikiSection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWikiStructure = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${DOCS_REPO_RAW_BASE_URL}/_wiki_structure.json`, {
          cache: 'no-store', // Ensure we always get the latest structure on client load
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch wiki structure: ${response.statusText}`);
        }
        
        const data = await response.json();
        setWikiStructure(data);

      } catch (error) {
        console.error(error);
        setWikiStructure([]); // Set empty structure on error
      } finally {
        setLoading(false);
      }
    };

    fetchWikiStructure();
  }, []); // Empty dependency array ensures this runs only once

  const value = { wikiStructure, loading };

  return <WikiContext.Provider value={value}>{children}</WikiContext.Provider>;
}

// --- Custom Hook for easy consumption ---
export function useWiki() {
  const context = useContext(WikiContext);
  if (context === undefined) {
    throw new Error('useWiki must be used within a WikiProvider');
  }
  return context;
}
