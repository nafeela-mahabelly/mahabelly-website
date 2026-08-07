import type { Metadata } from 'next'
import Script from 'next/script'
import { Playfair_Display, Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/layout/FloatingButtons'
import MobileActionBar from '@/components/layout/MobileActionBar'
import { ReserveProvider } from '@/components/reserve/ReserveModal'
import JsonLd from '@/components/ui/JsonLd'
import { organizationLd, websiteLd } from '@/lib/seo'
import { SITE } from '@/lib/site'

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
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Mahabelly | Kerala Cuisine Restaurants in Delhi NCR',
    template: '%s | Mahabelly',
  },
  description:
    'Discover Mahabelly’s Kerala cuisine — from appam and stew to Malabar biryani, seafood, Kerala Meals and festive Sadhyas across Delhi NCR.',
  applicationName: 'Mahabelly',
  authors: [{ name: 'Mahabelly' }],
  creator: 'Mahabelly',
  publisher: SITE.legalName,
  keywords: [
    'Kerala restaurant Delhi', 'authentic Kerala food Delhi', 'best Kerala restaurant Delhi',
    'Onam Sadhya Delhi NCR', 'Kerala catering Delhi', 'appam and stew Delhi',
    'Malabar biryani Delhi', 'Kerala seafood restaurant', 'Mahabelly', 'Mahabelly Canteen',
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  // Favicons resolved via app/icon.png, app/favicon.ico & app/apple-icon.png (file convention)
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Mahabelly',
    url: SITE.url,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Mahabelly — Kerala, Served With Soul' }],
  },
}

// Google Tag Manager container. GA4 (G-9SHEZ1WMMR) and the Meta Pixel are both
// managed inside GTM, so this container is the only tag the site loads directly.
const GTM_ID = 'GTM-5M2XKM9B'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable} ${inter.variable}`}>
      <body className="bg-cream text-charcoal font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-ink focus:text-cream focus:px-4 focus:py-2 focus:text-sm"
        >
          Skip to content
        </a>
        <JsonLd data={organizationLd} />
        <JsonLd data={websiteLd} />
        <ReserveProvider>
          <Navbar />
          <main id="main" className="overflow-x-hidden pb-[52px] xl:pb-0">
            {children}
          </main>
          <Footer />
          <FloatingButtons />
          <MobileActionBar />
        </ReserveProvider>
      </body>
    </html>
  )
}
