import type { Metadata } from 'next'
import Script from 'next/script'
import Head from 'next/head'
import { Providers } from './providers'
import { Jost, Nunito, Bubblegum_Sans } from 'next/font/google'
import './globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Toaster } from 'react-hot-toast'
import './styles/animate.css'
import './styles/output.css'

// const jost = Jost({
//   subsets: ['latin'],
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
//   style: ['normal', 'italic'],
//   variable: '--font-jost',
// })

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  style: ['normal', 'italic'],
  variable: '--font-nunito',
})

// const bubblegum_sans = Bubblegum_Sans({
//   subsets: ['latin'],
//   variable: '--font-bubblegum-sans',
//   display: 'swap',
//   weight: ['400'],
// })

export const metadata: Metadata = {
  title: 'Find tute',
  description:
    'only platform find teachers onsite or online for learning online or onsite',
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Toaster position="top-right" />
        <Script
          type="text/javascript"
          src="/assets/swiper/swiper-bundle.min.js"
          strategy="lazyOnload"
        ></Script>
        <Script
          type="text/javascript"
          src="/assets/js/animate.js"
          strategy="lazyOnload"
        ></Script>
        <Script
          type="text/javascript"
          src="/assets/js/wow.min.js"
          strategy="lazyOnload"
        ></Script>
        <Script
          type="text/javascript"
          src="/assets/js/main.js"
          strategy="lazyOnload"
        ></Script>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
