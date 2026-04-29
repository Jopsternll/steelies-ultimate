import type { Metadata } from 'next'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Schappenplan',
  description:
    'Standaard en maatwerk schappenplannen van Steelies Ultimate. Verbeter de productpresentatie in jouw winkel — op maat voor elektricien, timmerman of loodgieter.',
  openGraph: {
    title: 'Schappenplan | Steelies Ultimate',
    description:
      'Steelies Ultimate levert standaard en maatwerk schappenplannen voor de vakhandel. Van 0,5 tot 5 meter breed.',
  },
}

export default function SchappenplanPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-steelies-navy py-16 px-6 text-center">
        <p className="text-[#00C8E8] font-semibold uppercase tracking-widest text-sm mb-3">
          A.S.F. Fischer BV
        </p>
        <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-wide mb-4">
          Schappenplan
        </h1>
        <div className="h-1 w-16 bg-[#00C8E8] mx-auto mb-6" />
        <p className="text-gray-300 max-w-xl mx-auto text-lg">
          Een gestructureerd schap stuurt de klant naar de juiste artikelen.
        </p>
      </section>

      {/* Main content */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-14 items-center">

            {/* Image */}
            <div className="w-full lg:w-2/5 flex justify-center shrink-0">
              <div className="relative w-72 h-[480px] sm:w-80 sm:h-[520px]">
                <Image
                  src="/stelling.png"
                  alt="Steelies schappenstelling"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Text */}
            <div className="w-full lg:w-3/5 border-l-4 border-[#00C8E8] pl-8">
              <span className="inline-block bg-steelies-navy text-[#00C8E8] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
                Productpresentatie
              </span>

              <h2 className="text-2xl sm:text-3xl font-black text-steelies-dark uppercase tracking-wide mb-6">
                Standaard & Maatwerk
              </h2>

              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Verbeter de productpresentatie in jouw winkel. Wij bieden schappenplannen voor
                  diverse doelgroepen. Je bestelt een standaardplan en past dit direct toe.
                </p>

                <p>
                  Wij ontwerpen ook schappenplannen op maat. Jij geeft de doelgroep en de breedte
                  door. Wij leveren een plan voor jouw situatie. De afmetingen lopen van{' '}
                  <strong className="text-steelies-dark">0,5 meter tot 5 meter</strong> — denk
                  aan de elektricien, timmerman of loodgieter. Jij kent jouw klantenkring het
                  beste en wij leveren het aangepaste schappenplan.
                </p>

                <div className="bg-steelies-light rounded-xl p-5 border border-gray-100">
                  <p className="font-semibold text-steelies-dark text-base">
                    &ldquo;Een gestructureerd schap stuurt de klant naar de juiste artikelen.&rdquo;
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#aanvragen"
                  className="px-8 py-3 bg-[#00C8E8] text-steelies-navy font-bold rounded-lg hover:bg-[#00aecb] transition-colors duration-200 text-center"
                >
                  Vraag een schappenplan aan
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-steelies-light py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-steelies-dark uppercase tracking-wide text-center mb-12">
            Hoe werkt het?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Kies je doelgroep',
                body: 'Geef aan voor wie het schap bedoeld is — elektricien, timmerman, loodgieter of een andere vakman.',
              },
              {
                step: '02',
                title: 'Geef de breedte door',
                body: 'Van 0,5 tot 5 meter. Wij passen het plan aan op de beschikbare schapruimte in jouw winkel.',
              },
              {
                step: '03',
                title: 'Ontvang je plan',
                body: 'Wij leveren een kant-en-klaar schappenplan dat je direct kunt toepassen. Standaard of volledig op maat.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-4xl font-black text-[#00C8E8] mb-3">{item.step}</div>
                <h3 className="font-black text-steelies-dark text-lg uppercase tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contactformulier */}
      <section id="aanvragen" className="bg-gray-50 py-16 px-6 scroll-mt-28">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="text-[#00C8E8] font-semibold uppercase tracking-widest text-sm mb-3">
            Direct aanvragen
          </p>
          <h2 className="text-3xl font-black text-steelies-dark uppercase tracking-wide mb-4">
            Vraag een schappenplan aan
          </h2>
          <div className="h-1 w-16 bg-[#00C8E8] mx-auto mb-4" />
          <p className="text-gray-500">
            Vul het formulier in en ons team neemt zo spoedig mogelijk contact met u op
            met een passend schappenplan.
          </p>
        </div>
        <ContactForm />
      </section>
    </main>
  )
}
