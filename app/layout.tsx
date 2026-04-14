import type { Metadata } from 'next'
import { DM_Sans, Syne } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsapp'
import Script from 'next/script'

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
  title: 'Data Scout KE | Data Engineering & AI Systems in Nairobi',
  description: 'Production-grade data engineering, AI systems, and governance analytics for NGOs, financial institutions, and enterprises in Africa.',
  keywords: [
    'data engineering Kenya',
    'AI systems Nairobi',
    'ETL pipeline Kenya',
    'data analytics Africa',
    'NGO data',
    'compliance analytics'
  ],
  authors: [{ name: 'Data Scout KE' }],
  openGraph: {
    title: 'Data Scout KE | Data Engineering & AI Systems',
    description: 'Production-grade data engineering and AI systems for African enterprises.',
    type: 'website',
    images: [
      {
        url: 'https://datascoutke.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
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

        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Data Scout KE",
              "url": "https://datascoutke.com",
              "logo": "https://datascoutke.com/logo.png",
              "description": "Production-grade data engineering and AI systems with governance-first approach.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nairobi",
                "addressCountry": "KE"
              },
              "founder": {
                "@type": "Person",
                "name": "Rose Wabere"
              },
              "sameAs": [
                "https://linkedin.com/in/rosewabere",
                "https://github.com/Rozieroz"
              ],
              "serviceType": "Data Engineering and AI Systems",
              "areaServed": "Global",
              "knowsAbout": [
                "Data Engineering",
                "AI Systems",
                "ETL Pipelines",
                "Compliance Analytics",
                "RAG",
                "LangChain",
                "PostgreSQL",
                "dbt",
                "Apache Airflow"
              ]
            })
          }}
        />

        <Navigation />
        <main>{children}</main>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  )
}