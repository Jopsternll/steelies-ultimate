import Image from 'next/image'

export default function Footer() {
  return (
    <footer id="contact" className="bg-steelies-navy text-white py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
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

          {/* Contact */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm text-[#00C8E8] mb-4">
              Contact
            </h4>
            <address className="not-italic space-y-2 text-gray-300 text-sm">
              <p>A.S.F. Fischer BV</p>
              <p>Zilverstraat 1</p>
              <p>8211 AN Lelystad, Nederland</p>
              <p className="pt-2">
                <a
                  href="tel:+31320285610"
                  className="hover:text-white transition-colors"
                  aria-label="Bel ons"
                >
                  +31 (0)320 28 56 10
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@asf-fischer.nl"
                  className="hover:text-white transition-colors"
                >
                  info@asf-fischer.nl
                </a>
              </p>
            </address>
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
                <a
                  href="https://webshop.asf-fischer.com/nl/merk/steelies_ultimate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  webshop.asf-fischer.com
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
