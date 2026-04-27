'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const timeline = [
  {
    year: '1945',
    title: 'Oprichting',
    description:
      'A.S.F. Fischer BV wordt opgericht. De basis wordt gelegd voor wat uitgroeit tot een toonaangevende leverancier van bevestigingsmiddelen.',
    image: null,
  },
  {
    year: '1970',
    title: 'Verhuizing naar Lelystad',
    description:
      'Het bedrijf verhuist naar Lelystad, waar het verder kan groeien en uitbreiden. Een nieuwe fase breekt aan.',
    image: null,
  },
  {
    year: '1976',
    title: 'Uitbreiding gebouwen',
    description:
      'De groeiende vraag vraagt om meer ruimte. De bedrijfsgebouwen in Lelystad worden uitgebreid om aan de toenemende vraag te voldoen.',
    image: null,
  },
  {
    year: 'Heden',
    title: 'Rebranding: FIS wordt Steelies',
    description:
      'Na jarenlange ervaring onder de naam FIS introduceert A.S.F. Fischer BV het merk Steelies Ultimate — een frisse, herkenbare identiteit voor het volledige bevestigingsmiddelenassortiment.',
    image: null,
  },
]

export default function OverOnsPage() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const [dotProgress, setDotProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return
      const rect = timelineRef.current.getBoundingClientRect()
      const height = timelineRef.current.offsetHeight
      const scrolled = -rect.top + window.innerHeight * 0.5
      setDotProgress(Math.max(0, Math.min(1, scrolled / height)))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main>
      {/* Hero */}
      <section className="bg-steelies-navy py-16 px-6 text-center">
        <p className="text-[#00C8E8] font-semibold uppercase tracking-widest text-sm mb-3">
          A.S.F. Fischer BV
        </p>
        <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-wide mb-4">
          Over Ons
        </h1>
        <div className="h-1 w-16 bg-[#00C8E8] mx-auto mb-6" />
        <p className="text-gray-300 max-w-xl mx-auto text-lg">
          Al tientallen jaren verbinden wij professionals met de juiste
          bevestigingsmiddelen. Ons verhaal begint in 1945.
        </p>
      </section>

      {/* Timeline */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Desktop timeline */}
          <div ref={timelineRef} className="relative hidden md:block">

            {/* Gray background line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gray-200" />

            {/* Animated cyan dot */}
            <div
              className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#00C8E8] z-20 shadow-lg ring-4 ring-[#00C8E8]/20 transition-[top] duration-100"
              style={{ top: `calc(${dotProgress * 100}% - 10px)` }}
            />

            {/* Entries */}
            {timeline.map((item, i) => (
              <div key={item.year} className="relative flex items-start mb-20 last:mb-0">

                {/* Left side */}
                <div className="w-1/2 pr-14">
                  {i % 2 === 0 && <Card item={item} />}
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 top-8 -translate-x-1/2 w-3 h-3 rounded-full bg-white border-2 border-gray-300 z-10" />

                {/* Right side */}
                <div className="w-1/2 pl-14">
                  {i % 2 !== 0 && <Card item={item} />}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile timeline */}
          <div className="md:hidden relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200" />
            <div className="space-y-10">
              {timeline.map((item) => (
                <div key={item.year} className="relative">
                  <div className="absolute -left-5 top-8 w-3 h-3 rounded-full bg-[#00C8E8] border-2 border-white shadow" />
                  <Card item={item} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-steelies-navy py-14 px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wide mb-4">
          Werken met Steelies?
        </h2>
        <p className="text-gray-300 mb-8 max-w-md mx-auto">
          Bekijk ons volledige assortiment of neem contact op met ons team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/segmenten"
            className="px-8 py-3 bg-[#00C8E8] text-steelies-navy font-bold rounded-lg hover:bg-[#00aecb] transition-colors duration-200"
          >
            Bekijk Segmenten
          </a>
          <a
            href="https://webshop.asf-fischer.com/nl/merk/steelies_ultimate"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-[#00C8E8] text-[#00C8E8] font-semibold rounded-lg hover:bg-[#00C8E8] hover:text-steelies-navy transition-colors duration-200"
          >
            Naar de Webshop
          </a>
        </div>
      </section>
    </main>
  )
}

function Card({ item }: { item: typeof timeline[number] }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* Image area */}
      <div className="relative h-44 bg-steelies-light flex items-center justify-center">
        {item.image ? (
          <Image src={item.image} alt={item.title} fill className="object-cover" />
        ) : (
          <div className="flex flex-col items-center gap-2 text-gray-300">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs">Afbeelding volgt</span>
          </div>
        )}
        <div className="absolute top-3 left-3 bg-steelies-navy text-[#00C8E8] font-black text-base px-3 py-1 rounded-lg">
          {item.year}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-black text-steelies-dark text-lg uppercase tracking-wide mb-2">
          {item.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  )
}
