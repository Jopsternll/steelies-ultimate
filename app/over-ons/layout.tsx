import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Over Ons',
  description:
    'Lees over de geschiedenis van A.S.F. Fischer BV en het merk Steelies Ultimate — van oprichting in 1945 tot heden.',
  openGraph: {
    title: 'Over Ons | Steelies Ultimate',
    description:
      'A.S.F. Fischer BV levert bevestigingsmiddelen sinds 1945. Lees ons verhaal en de lancering van het merk Steelies Ultimate.',
  },
}

export default function OverOnsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
