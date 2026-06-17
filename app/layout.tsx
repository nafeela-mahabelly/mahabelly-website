import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mahabelly — Kerala, Served With Soul',
  description:
    'Authentic Malayali cuisine inspired by the kitchens, coastlines, and toddy shops of Kerala. Experience the finest Kerala food at Mahabelly restaurants in Delhi and Gurgaon.',
  keywords: [
    'Mahabelly', 'Kerala restaurant', 'Malayali cuisine', 'Kerala food Delhi',
    'appam stew', 'Kerala seafood', 'Malabar biryani', 'toddy shop', 'Kerala thali',
    'best Kerala restaurant Delhi', 'authentic Kerala food',
  ],
  authors: [{ name: 'Mahabelly' }],
  creator: 'Mahabelly',
  publisher: 'Mahabelly',
  metadataBase: new URL('https://mahabelly.com'),
  openGraph: {
    title: 'Mahabelly — Kerala, Served With Soul',
    description:
      'Authentic Malayali cuisine inspired by the kitchens, coastlines, and toddy shops of Kerala.',
    url: 'https://mahabelly.com',
    siteName: 'Mahabelly',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mahabelly — Kerala, Served With Soul',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahabelly — Kerala, Served With Soul',
    description: 'Authentic Malayali cuisine from Kerala\'s kitchens, coastlines, and toddy shops.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable} ${inter.variable}`}>
      <body className="bg-kerala-cream text-kerala-charcoal font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
