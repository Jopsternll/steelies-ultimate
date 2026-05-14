import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-steelies-navy text-white py-14">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          {/* Logo + tagline */}
          <div className="flex flex-col items-start gap-4">
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
            <p className="text-gray-400 text-sm leading-relaxed">
              Het complete bevestigingsmiddelen assortiment voor de professionele vakhandel.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm text-[#00C8E8] mb-4">
              Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="https://www.asf-fischer.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  www.asf-fischer.nl
                </a>
              </li>
              <li>
                <a href="#segmenten" className="hover:text-white transition-colors">
                  Onze segmenten
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} A.S.F. Fischer BV — Alle rechten voorbehouden</p>
          <p>Steelies® Ultimate is een geregistreerd handelsmerk</p>
        </div>
      </div>
    </footer>
  )
}
