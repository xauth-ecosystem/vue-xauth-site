import Head from 'next/head';

export default function DownloadPage() {
  return (
    <>
      <Head>
        <title>Downloads | XAuth Ecosystem</title>
      </Head>
      <section className="pt-48 pb-32 text-center border-b border-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 break-all">
            Downloads
          </h1>
          <p className="text-2xl text-slate-400 font-normal">
            Official stable and preview builds of the XAuth Ecosystem.
          </p>
        </div>
      </section>

      <main className="py-32">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {/* XAuth Core */}
          <div className="p-10 bg-slate-900/40 border border-slate-800 rounded flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 bg-blue-600 flex items-center justify-center text-white text-4xl rounded shadow-lg shadow-blue-900/40">
                <i className="fa-solid fa-key"></i>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-3xl font-black text-white uppercase break-words">XAuth Core</h3>
                  <span className="bg-blue-600/20 text-blue-500 text-[10px] font-black px-3 py-1 rounded uppercase tracking-widest">
                    Stable
                  </span>
                </div>
                <p className="text-slate-500 font-bold uppercase text-xs tracking-widest break-words">
                  Latest: v2.4.1 · API 5.0.0
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 w-full md:w-auto">
              <a href="#" className="flex-1 md:flex-none text-center px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-slate-200 transition">
                Poggit
              </a>
              <a href="#" className="flex-1 md:flex-none text-center px-8 py-4 bg-slate-800 text-white font-black uppercase tracking-widest text-sm hover:bg-slate-700 transition">
                GitHub
              </a>
            </div>
          </div>

          {/* XAuthConnect */}
          <div className="p-10 bg-slate-900/40 border border-slate-800 rounded flex flex-col md:flex-row items-center justify-between gap-8 opacity-90">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 bg-slate-800 flex items-center justify-center text-3xl rounded">
                <i className="fa-solid fa-circle-nodes"></i>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-3xl font-black text-white uppercase break-all">XAuthConnect</h3>
                  <span className="bg-slate-800 text-slate-400 text-[10px] font-black px-3 py-1 rounded uppercase tracking-widest break-words">
                    Beta
                  </span>
                </div>
                <p className="text-slate-500 font-bold uppercase text-xs tracking-widest break-words">
                  OAuth2 & OpenID Connect Server
                </p>
              </div>
            </div>

            <a href="#" className="w-full md:w-auto text-center px-8 py-4 border border-slate-700 text-white font-black uppercase tracking-widest text-sm hover:bg-slate-800 transition">
              View Pre-releases
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
