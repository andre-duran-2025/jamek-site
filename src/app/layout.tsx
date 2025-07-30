import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import CookieBanner from '@/components/cookies/CookieBanner'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import ReCaptcha from '@/components/security/ReCaptcha'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Jamek - Automação Industrial | Soluções Completas para Indústria',
    template: '%s | Jamek Automação Industrial'
  },
  description: 'Especialistas em automação industrial com mais de 15 anos de experiência. Oferecemos painéis elétricos, programação CLP, retrofit, células robóticas e software de monitoramento. Aumente sua produtividade em até 40% e reduza custos operacionais.',
  keywords: [
    'automação industrial',
    'painéis elétricos',
    'programação CLP',
    'retrofit industrial',
    'células robóticas',
    'software monitoramento',
    'indústria 4.0',
    'eficiência operacional',
    'redução custos industriais'
  ],
  authors: [{ name: 'Jamek Automação Industrial' }],
  creator: 'Jamek Automação Industrial',
  publisher: 'Jamek Automação Industrial',
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
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://jamek.com.br',
    siteName: 'Jamek Automação Industrial',
    title: 'Jamek - Automação Industrial | Soluções Completas para Indústria',
    description: 'Especialistas em automação industrial com mais de 15 anos de experiência. Aumente sua produtividade em até 40% e reduza custos operacionais.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jamek Automação Industrial - Soluções Completas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jamek - Automação Industrial | Soluções Completas para Indústria',
    description: 'Especialistas em automação industrial com mais de 15 anos de experiência. Aumente sua produtividade em até 40% e reduza custos operacionais.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://jamek.com.br',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <SchemaMarkup />
        <GoogleAnalytics />
        <ReCaptcha />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}