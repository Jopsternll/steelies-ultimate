import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Segmenten',
  description:
    'Ontdek de 5 kleurgecodeerde productcategorieën van Steelies Ultimate: verankeringen, parkers, houtdraad, metrisch schroefdraad en nagels & klein ijzerwaren.',
  openGraph: {
    title: 'Segmenten | Steelies Ultimate',
    description:
      'Ontdek de 5 kleurgecodeerde productcategorieën van Steelies Ultimate voor de professionele vakhandel.',
  },
}

const segments = [
  {
    id: 'verankeringen',
    title: 'Verankeringen',
    colorLabel: 'PAARS',
    description:
      'Van eenvoudige nylon plug tot zware slagplug voor beton — het verankeringssegment biedt voor elke ondergrond en belasting de juiste bevestigingsoplossing. Geschikt voor gebruik in beton, baksteen, gips en hout.',
    products: [
      'Nylon pluggen',
      'Slagpluggen & spanhulzen',
      'Messing spreidpluggen',
      'Plafondverankeringen',
      'Betonkozijnschroeven',
    ],
    image: '/doos paars.png',
    bg: 'bg-purple-700',
    lightBg: 'bg-purple-50',
    border: 'border-l-4 border-purple-700',
    text: 'text-purple-700',
    badgeBg: 'bg-purple-700',
    dot: 'bg-purple-700',
    navBg: 'bg-purple-700 hover:bg-purple-800',
  },
  {
    id: 'parkers',
    title: 'Parkers & Gipsplaatschroeven',
    colorLabel: 'BLAUW',
    description:
      'Zelftappers, parkers en gipsplaatschroeven voor de lichte en zware constructiebouw. Zowel los als op band leverbaar. Ideaal voor hout-op-staal, stalen onderconstructies en het monteren van gipsplaat.',
    products: [
      'Zelftappers & parkers',
      'Zelfborende plaatschroeven',
      'Vleugeltekschroeven',
      'Dak- & gevelschroeven (BZ)',
      'Gipsplaatschroeven op band',
    ],
    image: '/doos blauw.png',
    bg: 'bg-blue-600',
    lightBg: 'bg-blue-50',
    border: 'border-l-4 border-blue-600',
    text: 'text-blue-600',
    badgeBg: 'bg-blue-600',
    dot: 'bg-blue-600',
    navBg: 'bg-blue-600 hover:bg-blue-700',
  },
  {
    id: 'houtdraad',
    title: 'Houtdraad',
    colorLabel: 'GEEL',
    description:
      'Alles voor bevestigingen in hout en houten onderconstructies. Van de klassieke spaanplaatschroef tot houtdraadbouten en kozijnschroeven. Geschikt voor gebruik met of zonder plug.',
    products: [
      'Spaanplaatschroeven',
      'Houtdraadbouten',
      'Inbusbouten houtdraad',
      'Zelftappende houtschroeven',
      'Kozijnschroeven hout',
    ],
    image: '/doos geel.png',
    bg: 'bg-amber-500',
    lightBg: 'bg-amber-50',
    border: 'border-l-4 border-amber-500',
    text: 'text-amber-600',
    badgeBg: 'bg-amber-500',
    dot: 'bg-amber-500',
    navBg: 'bg-amber-500 hover:bg-amber-600',
  },
  {
    id: 'metrisch',
    title: 'Metrisch Schroefdraad',
    colorLabel: 'ROOD',
    description:
      'Het complete aanbod metrische verbindingsmiddelen volgens DIN-norm. De standaard voor staal-op-staal verbindingen in de industrie, installatie en machinebouw. Verkrijgbaar in diverse sterktes en uitvoeringen.',
    products: [
      'Bouten (DIN-norm)',
      'Moeren & sluitringen',
      'Metaalschroeven',
      'Inbusbouten metrisch',
      'Borgmoeren & veerringen',
    ],
    image: '/doos rood.png',
    bg: 'bg-red-600',
    lightBg: 'bg-red-50',
    border: 'border-l-4 border-red-600',
    text: 'text-red-600',
    badgeBg: 'bg-red-600',
    dot: 'bg-red-600',
    navBg: 'bg-red-600 hover:bg-red-700',
  },
  {
    id: 'nagels',
    title: 'Nagels & Klein Ijzerwaren',
    colorLabel: 'ORANJE',
    description:
      'Klein ijzerwaren en nagels voor dagelijks gebruik in de bouw en doe-het-zelf sector. Alles wat niet in de andere segmenten past maar toch onmisbaar is op de werkplek of in het schap.',
    products: [
      'Nagels (diverse soorten)',
      'Schroefogen & schroefduimen',
      'S-haken',
      'Muurhaken',
      'Beugels & klemmen',
    ],
    image: '/oranje.png',
    bg: 'bg-orange-500',
    lightBg: 'bg-orange-50',
    border: 'border-l-4 border-orange-500',
    text: 'text-orange-500',
    badgeBg: 'bg-orange-500',
    dot: 'bg-orange-500',
    navBg: 'bg-orange-500 hover:bg-orange-600',
  },
]

export default function SegmentenPage() {
  return (
    <main>
      <h1 className="sr-only">Steelies Ultimate Segmenten</h1>
      {/* Quick nav */}
      <section className="sticky top-14 z-40 bg-white border-b border-gray-100 py-4 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-3">
          {segments.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`${s.navBg} px-5 py-2 rounded-full text-white text-sm font-bold uppercase tracking-wide transition-colors duration-200`}
            >
              {s.title}
            </a>
          ))}
        </div>
      </section>

      {/* Segment sections */}
      {segments.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-16 px-6 scroll-mt-20 ${i % 2 === 0 ? 'bg-white' : s.lightBg}`}
        >
          <div className="max-w-5xl mx-auto">
            <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center`}>

              {/* Image */}
              <div className="w-full lg:w-2/5 flex justify-center">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`w-full lg:w-3/5 ${s.border} pl-6`}>
                <span
                  className={`inline-block ${s.badgeBg} text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4`}
                >
                  {s.colorLabel}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-steelies-dark uppercase tracking-wide mb-4">
                  {s.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {s.description}
                </p>
                <ul className="space-y-2">
                  {s.products.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-gray-700">
                      <span className={`size-2 shrink-0 rounded-full ${s.dot}`} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA onderaan */}
      <section className="bg-steelies-navy py-14 px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wide mb-4">
          Klaar om te bestellen?
        </h2>
        <p className="text-gray-300 mb-8 max-w-md mx-auto">
          Neem contact op met ons team voor meer informatie over het assortiment.
        </p>
        <a
          href="/#contact"
          className="inline-block px-8 py-3 bg-[#00C8E8] text-steelies-navy font-bold rounded-lg hover:bg-[#00aecb] transition-colors duration-200"
        >
          Neem contact op
        </a>
      </section>
    </main>
  )
}
