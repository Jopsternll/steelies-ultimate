'use client'

import Image from 'next/image'

export default function FooterLogo() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll naar boven"
      className="flex flex-col items-start gap-1 text-left"
    >
      <div className="relative w-48 h-20">
        <Image
          src="/Steelies_logo_pantone.png"
          alt="Steelies Ultimate"
          fill
          className="object-contain brightness-0 invert"
        />
      </div>
      <p className="text-steelies-light font-semibold tracking-widest text-sm uppercase">
        Sterk in <span className="text-[#00C8E8]">Verbinden</span>
      </p>
    </button>
  )
}
