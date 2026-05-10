import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Veelgestelde vragen over Steelies Ultimate en A.S.F. Fischer BV. Antwoorden over het assortiment, segmenten, locatie en schappenplan.',
  openGraph: {
    title: 'FAQ | Steelies Ultimate',
    description: 'Veelgestelde vragen over Steelies Ultimate bevestigingsmiddelen van A.S.F. Fischer BV.',
  },
}

const faqs = [
  {
    q: 'Wat is het verschil tussen grove en fijne draad bij een gipsplaatschroef?',
    a: 'Gipsplaatschroeven zijn er in twee draadvormen: grove draad en fijne draad. Grove draad heeft wijdere windingen en is bedoeld voor montage op houten constructies. Fijne draad heeft nauwere windingen en is speciaal ontwikkeld voor metal studs (dunwandige stalen profielen). De fijne draad snijd nauwkeurig door het staal zonder de studs te vervormen. Gebruik altijd de juiste variant: grove draad in hout, fijne draad in metal stud.',
  },
  {
    q: 'Wanneer heb je een boorpunt nodig?',
    a: 'Werk je met dikkere metalstud profielen van 0,9 mm of meer? Kies dan voor een gipsplaatschroef met boorpunt. De boorpunt snijdt moeiteloos door de stud.',
  },
  {
    q: 'Welke segmenten zijn er?',
    a: '5 kleurgecodeerde segmenten: Verankeringen (paars), Parkers & Gipsplaatschroeven (blauw), Houtdraad (geel), Metrisch Schroefdraad (rood) en Nagels & Klein Ijzerwaren (oranje).',
  },
  {
    q: 'Hoe lang bestaat A.S.F. Fischer BV al?',
    a: 'Opgericht in 1945 — meer dan 80 jaar ervaring in bevestigingsmiddelen voor de professionele vakhandel.',
  },
  {
    q: 'Waar is A.S.F. Fischer BV gevestigd?',
    a: 'Zilverstraat 1, 8211 AN Lelystad. Bereikbaar via +31 (0)320 285 610 of info@asf-fischer.nl.',
  },
  {
    q: 'Hoe vraag ik een schappenplan aan?',
    a: 'Via de pagina Schappenplan op deze website. Vul het formulier in en wij nemen contact op.',
  },
  {
    q: 'Is het assortiment online doorzoekbaar?',
    a: 'Ja, alle 8.043 artikelen zijn doorzoekbaar op artikelnummer en omschrijving, met filter op segment.',
  },
]

export default function FaqPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-steelies-navy py-16 px-6 text-center">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Wat is het verschil tussen grove en fijne draad bij een gipsplaatschroef?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Gipsplaatschroeven zijn er in twee draadvormen: grove draad en fijne draad. Grove draad heeft wijdere windingen en is bedoeld voor montage op houten constructies. Fijne draad heeft nauwere windingen en is speciaal ontwikkeld voor metal studs (dunwandige stalen profielen). Gebruik grove draad in hout en fijne draad in metal stud.' },
                },
                {
                  '@type': 'Question',
                  name: 'Hoeveel producten heeft Steelies Ultimate?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Het Steelies Ultimate assortiment bestaat uit 8.043 artikelen, verdeeld over 5 kleurgecodeerde segmenten: Metrisch Schroefdraad (5.875), Houtdraad (1.337), Parkers & Gipsplaatschroeven (346), Nagels & Klein Ijzerwaren (314) en Verankeringen (171).' },
                },
                {
                  '@type': 'Question',
                  name: 'Welke segmenten biedt Steelies Ultimate aan?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Steelies Ultimate heeft 5 kleurgecodeerde segmenten: Verankeringen (paars), Parkers & Gipsplaatschroeven (blauw), Houtdraad (geel), Metrisch Schroefdraad (rood) en Nagels & Klein Ijzerwaren (oranje).' },
                },
                {
                  '@type': 'Question',
                  name: 'Hoe lang bestaat A.S.F. Fischer BV al?',
                  acceptedAnswer: { '@type': 'Answer', text: 'A.S.F. Fischer BV is opgericht in 1945 en heeft daarmee meer dan 80 jaar ervaring in de levering van bevestigingsmiddelen aan de professionele vakhandel.' },
                },
                {
                  '@type': 'Question',
                  name: 'Waar is A.S.F. Fischer BV gevestigd?',
                  acceptedAnswer: { '@type': 'Answer', text: 'A.S.F. Fischer BV is gevestigd aan de Zilverstraat 1, 8211 AN Lelystad. U kunt ons bereiken via +31 (0)320 285 610 of info@asf-fischer.nl.' },
                },
                {
                  '@type': 'Question',
                  name: 'Hoe vraag ik een schappenplan aan?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Een schappenplan kunt u aanvragen via de pagina Schappenplan op onze website. Vul het contactformulier in met uw bedrijfsgegevens en wij nemen contact met u op.' },
                },
                {
                  '@type': 'Question',
                  name: 'Is het assortiment online doorzoekbaar?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Ja, het volledige Steelies Ultimate assortiment van 8.043 artikelen is online doorzoekbaar via de assortimentspagina. U kunt filteren op segment en zoeken op artikelnummer of omschrijving.' },
                },
              ],
            }),
          }}
        />
        <p className="text-[#00C8E8] font-semibold uppercase tracking-widest text-sm mb-3">
          A.S.F. Fischer BV
        </p>
        <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-wide mb-4">
          Veelgestelde Vragen
        </h1>
        <div className="h-1 w-16 bg-[#00C8E8] mx-auto mb-6" />
        <p className="text-gray-300 max-w-xl mx-auto text-lg">
          Antwoorden op de meest gestelde vragen over Steelies Ultimate en A.S.F. Fischer BV.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-steelies-light py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map(({ q, a }) => (
            <details key={q} className="bg-white rounded-xl shadow-sm border border-gray-100 group">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-steelies-dark list-none">
                {q}
                <span className="ml-4 shrink-0 text-[#00C8E8] text-xl font-light group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>
              <p className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-steelies-navy py-14 px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wide mb-4">
          Meer weten?
        </h2>
        <p className="text-gray-300 mb-8 max-w-md mx-auto">
          Bekijk ons assortiment of neem direct contact op met ons team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/assortiment"
            className="px-8 py-3 bg-[#00C8E8] text-steelies-navy font-bold rounded-lg hover:bg-[#00aecb] transition-colors duration-200"
          >
            Bekijk Assortiment
          </Link>
          <Link
            href="/#contact"
            className="px-8 py-3 border border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors duration-200"
          >
            Neem Contact Op
          </Link>
        </div>
      </section>
    </main>
  )
}
