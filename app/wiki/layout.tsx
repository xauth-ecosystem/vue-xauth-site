import Head from 'next/head';
import { Suspense } from 'react';
import WikiSidebar from "@/components/WikiSidebar";
import { WikiProvider } from '@/contexts/WikiContext';

export default function WikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarFallback = (
    <aside className="w-full md:w-80 shrink-0">
      <nav className="md:sticky md:top-32 space-y-12">
        <div><h5 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8 break-words">Loading Wiki...</h5></div>
      </nav>
    </aside>
  );

  return (
    <>
      <Head>
        <title>Wiki | XAuth Ecosystem</title> {/* Default title for wiki section */}
      </Head>
      <WikiProvider>
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col md:flex-row gap-16">
            <Suspense fallback={sidebarFallback}>
              <WikiSidebar />
            </Suspense>

            <main className="flex-1">
              {children}
            </main>
        </div>
      </WikiProvider>
    </>
  );
}
