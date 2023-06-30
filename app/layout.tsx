import '~/global.css'

import { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { Analytics } from '~/app/components/analytics'

export const metadata: Metadata = {
  title: {
    default: 'mundovirtual.solutions',
    template: '%s | mundovirtual.solutions',
  },
  description:
    'MundoVirtual ayuda a convertir ideas en realidades a través de asesorías, prototipos y desarrollo de MVP.',
  openGraph: {
    title: 'mundovirtual.solutions',
    description:
      'MundoVirtual ayuda a convertir ideas en realidades a través de asesorías, prototipos y desarrollo de MVP.',
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
  icons: {
    shortcut: '/favicon.png',
  },
}
const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={nunito.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Analytics />
      </head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === 'development' ? 'debug-screens' : undefined
        }`}
      >
        {children}
        <footer className="text-center text-sm text-white">
          MundoVirtual Solutions 2023
        </footer>
      </body>
    </html>
  )
}

interface RootLayoutProps {
  children: React.ReactNode
}
