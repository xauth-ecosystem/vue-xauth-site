import Link from 'next/link';
import Head from 'next/head';

export default function WikiPage() {
  return (
    <>
      <Head>
        <title>Wiki | XAuth Ecosystem</title>
      </Head>
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col md:flex-row gap-16">
        <aside className="w-full md:w-80 shrink-0">
          <nav className="md:sticky md:top-32 space-y-12">
            <div>
              <h5 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8">Wiki Articles</h5>
              <ul className="space-y-6 border-l border-slate-800 ml-1">
                <li className="pl-6 border-l-2 border-blue-600 -ml-px text-white font-bold">
                  <Link href="/wiki/introduction">Introduction</Link>
                </li>
                <li className="pl-6 text-slate-500 hover:text-white transition cursor-pointer font-bold uppercase text-xs tracking-widest">
                  <Link href="/wiki/getting-started">Getting Started</Link>
                </li>
                <li className="pl-6 text-slate-500 hover:text-white transition cursor-pointer font-bold uppercase text-xs tracking-widest">
                  <Link href="/wiki/faq">FAQ</Link>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        <main className="flex-1">
          <h1 className="text-4xl font-bold text-white mb-6">Welcome to the Wiki!</h1>
          <p className="text-slate-400 leading-relaxed mb-8">
            Будь ласка, виберіть статтю з меню зліва, щоб переглянути вміст.
          </p>
          <div className="prose prose-invert max-w-none">
            <p>Ця сторінка буде служити індексом або списком доступних статей.</p>
            <p>Приклад статей, які ви можете створити у вашому репозиторії <code>xauth-ecosystem/xauth-docs</code>:</p>
            <ul>
              <li><code>introduction.md</code></li>
              <li><code>getting-started.md</code></li>
              <li><code>faq.md</code></li>
            </ul>
            <p>Щоб переглянути статтю, перейдіть за посиланням у бічній панелі або введіть <code>/wiki/назва-статті</code> у адресний рядок.</p>
          </div>
        </main>
      </div>
    </>
  );
}
