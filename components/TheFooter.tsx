import Link from 'next/link';

export default function TheFooter() {
  return (
    <footer className="py-20 bg-[#020617] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <div className="font-black text-white text-2xl tracking-tighter mb-6 underline decoration-blue-500 decoration-4">XAUTH ECOSYSTEM</div>
          <p className="max-w-sm text-slate-500 leading-loose uppercase text-xs font-bold tracking-widest break-words">
            Building secure, connected experiences for Minecraft: Bedrock Edition servers since 2021.
          </p>
        </div>
        <div>
          <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-500 break-words">
            <li><Link href="/wiki" className="hover:text-blue-500 transition">Documentation</Link></li>
            <li><Link href="/download" className="hover:text-blue-500 transition">Downloads</Link></li>
            <li><Link href="/support" className="hover:text-blue-500 transition">Support</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-6 break-words">Connect</h4>
          <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-500 break-words">
            <li><a href="https://github.com/xauth-ecosystem" className="hover:text-white transition">GitHub</a></li>
            <li><a href="https://t.me/xauth_ecosystem" className="hover:text-white transition">Telegram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
