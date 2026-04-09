import type { Metadata } from 'next'
import { DM_Sans, Syne } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600', '700']
})

const syne = Syne({ 
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'Data Scout KE | Data Engineering & AI Systems | Nairobi, Kenya',
  description: 'Data Scout KE builds production-grade data engineering, AI systems, and governance analytics for NGOs, financial institutions, and enterprises in Kenya and Africa.',
  keywords: ['data engineering Kenya', 'AI systems Nairobi', 'ETL pipeline Kenya', 'data analytics Africa', 'NGO data', 'compliance analytics'],
  authors: [{ name: 'Data Scout KE' }],
  openGraph: {
    title: 'Data Scout KE | Data Engineering & AI Systems',
    description: 'Production-grade data engineering and AI systems for African enterprises.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
