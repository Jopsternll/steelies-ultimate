import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Steelies Ultimate | Sterk in Verbinden',
  description:
    'Het complete assortiment bevestigingsmiddelen van Steelies Ultimate. Vijf overzichtelijke segmenten voor de professionele vakhandel, door A.S.F. Fischer BV.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
