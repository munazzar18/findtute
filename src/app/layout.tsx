import type { Metadata } from 'next'
import Script from 'next/script'
import Head from 'next/head'
import { Jost, Nunito, Bubblegum_Sans } from 'next/font/google'
import './globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Toaster } from 'react-hot-toast'
import '../../public/assets/css/animate.css'
import '../../public/assets/css/output.css'

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
  title: 'teachU',
  description: 'only platform find teachers onsite or online',
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
          src="/public/assets/cdn.jsdelivr.net/npm/swiper%4011/swiper-bundle.min.js"
          strategy="lazyOnload"
        ></Script>
        <Script
          type="text/javascript"
          src="/public/assets/js/animate.js"
          strategy="lazyOnload"
        ></Script>
        <Script
          type="text/javascript"
          src="/public/assets/js/wow.min.js"
          strategy="lazyOnload"
        ></Script>
        <Script
          type="text/javascript"
          src="/public/assets/js/main.js"
          strategy="lazyOnload"
        ></Script>
        {children}
      </body>
    </html>
  )
}
