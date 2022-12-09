import '../styles/globals.css'
import type { AppProps } from 'next/app'
import font from '../styles/font';

export default function App({ Component, pageProps }: AppProps) { 
  return (
  <main className={`${font.variable} font-sans`}>
    <Component {...pageProps} />
    </main>
    )
}
