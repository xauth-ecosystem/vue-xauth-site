import Link from 'next/link';
import Head from 'next/head';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | XAuth Ecosystem</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen-minus-nav-footer py-20 px-4 text-center">
        <h1 className="text-9xl font-black text-white mb-4">404</h1>
        <h2 className="text-3xl font-bold text-slate-300 mb-8">Page Not Found</h2>
        <p className="text-lg text-slate-400 max-w-md mb-8">
          Sorry, we could not find the page you are looking for. It might have been moved or deleted.
        </p>
        <Link href="/" className="px-8 py-4 bg-blue-600 text-white font-black rounded uppercase tracking-wider hover:bg-blue-700 transition">
          Return to Homepage
        </Link>
      </div>
    </>
  );
}
