import Link from 'next/link';
import Head from 'next/head';

export default function SupportPage() {
  return (
    <>
      <Head>
        <title>Support | XAuth Ecosystem</title>
      </Head>
      <main className="pt-48 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8">Get Support</h1>
            <p className="text-2xl text-slate-400 max-w-2xl mx-auto font-normal">Need help with installation or found a bug? Choose the best channel to reach us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-12 bg-slate-900/40 border border-slate-800 rounded text-center">
              <i className="fa-brands fa-github text-5xl text-white mb-8"></i>
              <h3 className="text-2xl font-black text-white uppercase mb-4">GitHub Issues</h3>
              <p className="text-slate-500 text-sm leading-loose uppercase font-bold tracking-widest mb-10 break-words">Best for bug reports and technical feature requests.</p>
              <a href="https://github.com/xauth-ecosystem" className="block w-full py-4 border border-slate-700 text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition">Open Issue</a>
            </div>

            <div className="p-12 bg-blue-600 rounded text-center shadow-2xl shadow-blue-900/20">
              <i className="fa-brands fa-telegram text-5xl text-white mb-8"></i>
              <h3 className="text-2xl font-black text-white uppercase mb-4">Telegram</h3>
              <p className="text-blue-100 text-sm leading-loose uppercase font-bold tracking-widest mb-10 break-words">Real-time community support and announcements.</p>
              <a href="https://t.me/xauth_ecosystem" className="block w-full py-4 bg-white text-blue-600 font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition">Join Channel</a>
            </div>

            <div className="p-12 bg-slate-900/40 border border-slate-800 rounded text-center">
              <i className="fa-solid fa-book text-5xl text-blue-500 mb-8"></i>
              <h3 className="text-2xl font-black text-white uppercase mb-4">Self-Help</h3>
              <p className="text-slate-500 text-sm leading-loose uppercase font-bold tracking-widest mb-10 break-words">Detailed guides covering every aspect of the ecosystem.</p>
              <Link href="/wiki" className="block w-full py-4 border border-slate-700 text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition">Read Wiki</Link>
            </div>
          </div>

          <div className="mt-32 max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-white uppercase mb-12 text-center underline decoration-blue-500 decoration-4 underline-offset-8">Frequent Questions</h2>
            <div className="space-y-8">
              <div className="border-b border-slate-900 pb-8">
                <h4 className="text-white font-black uppercase text-sm mb-3">Does XAuth support MySQL?</h4>
                <p className="text-slate-500 leading-relaxed">Yes, XAuth Core supports SQLite, MySQL, and MariaDB. You can switch the provider in the main configuration file.</p>
              </div>
              <div className="border-b border-slate-900 pb-8">
                <h4 className="text-white font-black uppercase text-sm mb-3">How to link Discord?</h4>
                <p className="text-slate-500 leading-relaxed">You need to deploy XAuthConnect and use our Discord Role Bot integration. Detailed guide is available in the Wiki.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
