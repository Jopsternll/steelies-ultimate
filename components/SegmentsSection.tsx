import SegmentCard from './SegmentCard'

const segments = [
  {
    colorLabel: 'PAARS',
    name: 'Verankeringen',
    description:
      'Heb je een doorsteekanker of slagplug nodig? Hier vind je alle lichte en zware verankeringen voor elke ondergrond.',
    products: [
      'Nylon pluggen',
      'Slagpluggen & spanhulzen',
      'Messing spreidpluggen',
      'Plafondverankeringen',
      'Betonkozijnschroeven',
    ],
    headerBg: 'bg-purple-700',
    badgeBg: 'bg-purple-200',
    badgeText: 'text-purple-900',
    borderColor: 'border-purple-700',
  },
  {
    colorLabel: 'BLAUW',
    name: 'Parkers & Gipsplaatschroeven',
    description:
      'Parkers, zelftappers en gipsplaatschroeven — zowel los als op band — voor hout-op-staal en stalen onderconstructies.',
    products: [
      'Zelftappers & parkers',
      'Zelfborende plaatschroeven',
      'Vleugelteksschroeven',
      'Dak- & gevelschroeven (BZ)',
      'Gipsplaatschroeven op band',
    ],
    headerBg: 'bg-blue-600',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-900',
    borderColor: 'border-blue-600',
  },
  {
    colorLabel: 'GEEL',
    name: 'Houtdraad',
    description:
      'Alles voor toepassingen in houten onderconstructies of in combinatie met een plug. Van spaanplaatschroef tot houtdraadbout.',
    products: [
      'Spaanplaatschroeven',
      'Houtdraadbouten',
      'Inbusbouten houtdraad',
      'Zelftappende houtschroeven',
      'Kozijnschroeven hout',
    ],
    headerBg: 'bg-amber-500',
    badgeBg: 'bg-amber-100',
    badgeText: 'text-amber-900',
    borderColor: 'border-amber-500',
  },
  {
    colorLabel: 'ROOD',
    name: 'Metrisch Schroefdraad',
    description:
      'Alle producten volgens DIN met metrisch schroefdraad. De standaard voor staal-op-staal verbindingen.',
    products: [
      'Bouten (DIN-norm)',
      'Moeren & sluitringen',
      'Metaalschroeven',
      'Inbusbouten metrisch',
      'Borgmoeren & veerringen',
    ],
    headerBg: 'bg-red-600',
    badgeBg: 'bg-red-100',
    badgeText: 'text-red-900',
    borderColor: 'border-red-600',
  },
  {
    colorLabel: 'ORANJE',
    name: 'Nagels & Klein Ijzerwaren',
    description:
      'Klein ijzerwaren en nagels voor dagelijks gebruik. Alles wat niet in de andere segmenten past maar onmisbaar is.',
    products: [
      'Nagels (diverse soorten)',
      'Schroefogen & schroefduimen',
      'S-haken',
      'Muurhaken',
      'Beugels & klemmen',
    ],
    headerBg: 'bg-orange-500',
    badgeBg: 'bg-orange-100',
    badgeText: 'text-orange-900',
    borderColor: 'border-orange-500',
  },
]

export default function SegmentsSection() {
  return (
    <section id="segmenten" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-steelies-blue font-semibold uppercase tracking-widest text-sm mb-2">
            Productassortiment
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-steelies-dark uppercase tracking-wide mb-4">
            Onze 5 segmenten
          </h2>
          <div className="h-1 w-16 bg-steelies-blue mx-auto mb-6" />
          <p className="text-gray-500 max-w-xl mx-auto">
            Elk segment heeft een eigen kleurcode zodat u in de vakwinkel direct weet
            waar u moet zijn.
          </p>
        </div>

        {/* 5-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {segments.map((seg) => (
            <SegmentCard key={seg.colorLabel} {...seg} />
          ))}
        </div>
      </div>
    </section>
  )
}
