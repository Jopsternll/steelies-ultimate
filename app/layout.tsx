import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/ui/header-2'
import Breadcrumbs from '@/components/Breadcrumbs'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://steelies-ultimate.nl'),
  title: {
    default: 'Steelies Ultimate | Sterk in Verbinden',
    template: '%s | Steelies Ultimate',
  },
  description:
    'Het complete assortiment bevestigingsmiddelen van Steelies Ultimate. Vijf overzichtelijke segmenten voor de professionele vakhandel, door A.S.F. Fischer BV.',
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://steelies-ultimate.nl',
    siteName: 'Steelies Ultimate',
    title: 'Steelies Ultimate | Sterk in Verbinden',
    description:
      'Het complete assortiment bevestigingsmiddelen van Steelies Ultimate. Vijf overzichtelijke segmenten voor de professionele vakhandel.',
    images: [{ url: '/Steelies_logo_pantone.png', width: 1200, height: 630, alt: 'Steelies Ultimate' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Steelies Ultimate | Sterk in Verbinden',
    description:
      'Het complete assortiment bevestigingsmiddelen van Steelies Ultimate. Vijf overzichtelijke segmenten voor de professionele vakhandel.',
    images: ['/Steelies_logo_pantone.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'A.S.F. Fischer BV — Steelies Ultimate',
                url: 'https://steelies-ultimate.nl',
                logo: 'https://steelies-ultimate.nl/Steelies_logo_pantone.png',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Zilverstraat 1',
                  addressLocality: 'Lelystad',
                  postalCode: '8211 AN',
                  addressCountry: 'NL',
                },
                telephone: '+31320285610',
                email: 'info@asf-fischer.nl',
                sameAs: ['https://www.asf-fischer.nl'],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'LocalBusiness',
                name: 'A.S.F. Fischer BV — Steelies Ultimate',
                description: 'Groothandel in bevestigingsmiddelen voor de professionele vakhandel. Vijf kleurgecodeerde segmenten: verankeringen, parkers, houtdraad, metrisch schroefdraad en nagels.',
                url: 'https://steelies-ultimate.nl',
                logo: 'https://steelies-ultimate.nl/Steelies_logo_pantone.png',
                image: 'https://steelies-ultimate.nl/Steelies_logo_pantone.png',
                telephone: '+31320285610',
                email: 'info@asf-fischer.nl',
                foundingDate: '1945',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Zilverstraat 1',
                  addressLocality: 'Lelystad',
                  postalCode: '8211 AN',
                  addressCountry: 'NL',
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: 52.5185,
                  longitude: 5.4813,
                },
                areaServed: {
                  '@type': 'Country',
                  name: 'Nederland',
                },
                priceRange: '€€',
                openingHoursSpecification: [
                  {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                    opens: '08:00',
                    closes: '17:00',
                  },
                ],
                sameAs: ['https://www.asf-fischer.nl'],
              },
            ]),
          }}
        />
        <Header />
        <Breadcrumbs />
        {children}
        <Footer />
      </body>
    </html>
  )
}
