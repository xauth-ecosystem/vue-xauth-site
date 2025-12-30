import Link from 'next/link';
import Head from 'next/head';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Сторінка не знайдена | XAuth Ecosystem</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen-minus-nav-footer py-20 px-4 text-center">
        <h1 className="text-9xl font-black text-white mb-4">404</h1>
        <h2 className="text-3xl font-bold text-slate-300 mb-8">Сторінка не знайдена</h2>
        <p className="text-lg text-slate-400 max-w-md mb-8">
          Вибачте, ми не змогли знайти сторінку, яку ви шукаєте. Можливо, вона була переміщена або видалена.
        </p>
        <Link href="/" className="px-8 py-4 bg-blue-600 text-white font-black rounded uppercase tracking-wider hover:bg-blue-700 transition">
          Повернутися на головну
        </Link>
      </div>
    </>
  );
}
