import type { Metadata } from 'next'
import Script from 'next/script'
import Head from 'next/head'
import { Jost, Nunito, Bubblegum_Sans } from 'next/font/google'
import './globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Toaster } from 'react-hot-toast'
import './styles/animate.css'
import './styles/output.css'
import '../../build.css'

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
          src="/assets/swiper/swiper-bundle.min.js"
          defer
        ></Script>
        <Script
          type="text/javascript"
          src="/assets/js/animate.js"
          defer
        ></Script>
        <Script
          type="text/javascript"
          src="/assets/js/wow.min.js"
          defer
        ></Script>
        <Script type="text/javascript" src="/assets/js/main.js" defer></Script>
        {children}
      </body>
    </html>
  )
}
