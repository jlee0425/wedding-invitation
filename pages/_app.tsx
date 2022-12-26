import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import dokdo from '../styles/fonts/eastSeaDokdo';
import sans from '../styles/fonts/notoSansKr';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>루나&정규 청첩장</title>
        <meta name="description" content="Runa & Jeongkyu, Wedding Invitation Card" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={`${dokdo.variable} ${sans.variable} h-screen w-screen font-sans bg-amber-50 text-stone-700`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
