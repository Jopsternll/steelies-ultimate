import type { Metadata } from 'next'
import Link from 'next/link'
import AssortimentTable from '@/components/AssortimentTable'
import ContactForm from '@/components/ContactForm'
import type { Product } from '@/types/assortiment'
import productsData from '@/data/assortiment.json'

export const metadata: Metadata = {
  title: 'Assortiment',
  description:
    'Het complete Steelies Ultimate assortiment: 8.000+ bevestigingsmiddelen verdeeld over 5 segmenten. Doorzoekbaar op artikelnummer en omschrijving.',
  openGraph: {
    title: 'Assortiment | Steelies Ultimate',
    description:
      'Doorzoek het volledige Steelies Ultimate assortiment van A.S.F. Fischer BV — parkers, metrisch, houtdraad, verankeringen en nagels.',
  },
}

export default function AssortimentPage() {
  const products = productsData as Product[]

  return (
    <main>
      {/* Hero */}
      <section className="bg-steelies-navy py-16 px-6 text-center">
        <p className="text-[#00C8E8] font-semibold uppercase tracking-widest text-sm mb-3">
          A.S.F. Fischer BV
        </p>
        <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-wide mb-4">
          Assortiment
        </h1>
        <div className="h-1 w-16 bg-[#00C8E8] mx-auto mb-6" />
        <p className="text-gray-300 max-w-xl mx-auto text-lg">
          {products.length.toLocaleString('nl-NL')} artikelen verdeeld over 5 segmenten.
          Zoek op artikelnummer of omschrijving en filter per segment.
        </p>
      </section>

      {/* Table */}
      <AssortimentTable products={products} />

      {/* Contact formulier */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="text-[#00C8E8] font-semibold uppercase tracking-widest text-sm mb-3">
            Direct contact
          </p>
          <h2 className="text-3xl font-black text-steelies-dark uppercase tracking-wide mb-4">
            Neem contact op
          </h2>
          <div className="h-1 w-16 bg-[#00C8E8] mx-auto mb-4" />
          <p className="text-gray-500">
            Vragen over het assortiment of interesse in een offerte?
            Vul het formulier in en ons team neemt zo spoedig mogelijk contact met u op.
          </p>
        </div>
        <ContactForm />
      </section>
    </main>
  )
}
