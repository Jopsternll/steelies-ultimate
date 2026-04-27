import Image from 'next/image'

const features = [
  {
    icon: null,
    image: '/moeren en ringen.png',
    title: 'Compleet assortiment',
    description: 'Van nylon plug tot ankerbout — alles voor iedere verbindingstaak in één herkenbaar schap.',
  },
  {
    icon: null,
    image: '/zoek in amsterdam.png',
    title: 'Kleurgecodeerde segmenten',
    description: 'Vijf segmenten elk met een eigen kleur. Snel het juiste product vinden in de vakwinkel.',
  },
  {
    icon: null,
    image: '/staalbalk.png',
    title: 'Professionele kwaliteit',
    description: 'Ontwikkeld voor de professionele gebruiker. Betrouwbare kwaliteit voor zware en lichte toepassingen.',
  },
  {
    icon: null,
    image: '/texschroeven.png',
    title: 'Gemak',
    description: 'Speciaal ontworpen schapopstelling voor de vakhandel. Overzichtelijk, efficiënt en altijd op voorraad.',
  },
]

export default function AboutSection() {
  return (
    <section className="bg-steelies-light py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-steelies-blue font-semibold uppercase tracking-widest text-sm mb-2">
            Over Steelies Ultimate
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-steelies-dark uppercase tracking-wide mb-4">
            Kwaliteit die verbindt
          </h2>
          <div className="h-1 w-16 bg-steelies-blue mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Steelies Ultimate is het bevestigingsmiddelen merk van{' '}
            <strong>A.S.F. Fischer BV</strong> uit Lelystad. Met een volledig,
            kleurgecodeerd assortiment biedt Steelies Ultimate voor elke
            verbindingstaak de juiste oplossing — snel te vinden, betrouwbaar
            in gebruik.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            f.image ? (
              <div
                key={f.title}
                className="relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 min-h-[200px]"
              >
                <Image
                  src={f.image}
                  alt={f.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-steelies-navy/70" />
                <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                  <h3 className="font-bold text-white text-lg mb-2">{f.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{f.description}</p>
                </div>
              </div>
            ) : (
              <div
                key={f.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-4xl mb-4" aria-hidden="true">{f.icon}</div>
                <h3 className="font-bold text-steelies-dark text-lg mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  )
}
