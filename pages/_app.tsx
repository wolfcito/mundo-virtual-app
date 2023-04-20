import type { AppProps } from 'next/app'

import { Nunito } from '@next/font/google'

import '~/styles/globals.css'

const nunito = Nunito({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={nunito.className}>
      <Component {...pageProps} />
    </main>
  )
}
