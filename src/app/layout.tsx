import './globals.css'
import './styles/style.css'
import './styles/output.css'
import './styles/animate.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  style: ['normal', 'italic'],
  variable: '--font-nunito',
})

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
    <html lang="en" className="light">
      <body className={nunito.className}>
        <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
        {children}
      </body>
    </html>
  )
}
