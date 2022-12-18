import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import font from '../styles/font';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>루나&정규 청첩장</title>
        <meta name="description" content="Runa & Jeongkyu, Wedding Invitation Card" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${font.variable} font-sans snap-y bg-amber-50 text-stone-700`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
