import type { Metadata } from 'next'
import { Suspense } from 'react'
import ContactFormWrapper from './ContactFormWrapper'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Neem contact op met A.S.F. Fischer BV voor vragen over het Steelies Ultimate assortiment, schappenplannen of maatwerk.',
  openGraph: {
    title: 'Contact | Steelies Ultimate',
    description:
      'Bereik ons team via telefoon, e-mail of het contactformulier. Wij streven naar een reactie binnen één werkdag.',
  },
}

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-steelies-navy py-16 px-6 text-center">
        <p className="text-[#00C8E8] font-semibold uppercase tracking-widest text-sm mb-3">
          A.S.F. Fischer BV
        </p>
        <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-wide mb-4">
          Contact
        </h1>
        <div className="h-1 w-16 bg-[#00C8E8] mx-auto mb-6" />
        <p className="text-gray-300 max-w-xl mx-auto text-lg">
          Vragen over het assortiment, een schappenplan aanvragen of iets anders?
          Ons team staat voor u klaar.
        </p>
      </section>

      {/* Formulier */}
      <section className="bg-white py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
            <h2 className="text-lg font-black text-steelies-dark uppercase tracking-wide mb-6">
              Stuur een bericht
            </h2>
            <Suspense
              fallback={
                <div className="h-64 rounded-xl bg-gray-100 animate-pulse" />
              }
            >
              <ContactFormWrapper />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  )
}
