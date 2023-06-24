import '../global.css'
import { Inter } from 'next/font/google'
import LocalFont from 'next/font/local'
import { Metadata } from 'next'
import { Analytics } from './components/analytics'
import Head from 'next/head'

export const metadata: Metadata = {
  title: {
    default: 'mundovirtual.solutions',
    template: '%s | mundovirtual.solutions',
  },
  description: 'Software engineer at mundovirtual.solutions',
  openGraph: {
    title: 'mundovirtual.solutions',
    description: 'Software engineer at mundovirtual.solutions',
    url: 'https://mundovirtual.solutions',
    siteName: 'mundovirtual.solutions',
    images: [
      {
        url: 'https://mundovirtual.solutions/og.png',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Chronark',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.png',
  },
}
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const calSans = LocalFont({
  src: '../public/fonts/CalSans-SemiBold.ttf',
  variable: '--font-calsans',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(' ')}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === 'development' ? 'debug-screens' : undefined
        }`}
      >
        {children}
      </body>
    </html>
  )
}
