import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react'
import FooterContactButton from './FooterContactButton'
import FooterLogo from './FooterLogo'

const navLinks = [
  { label: 'Segmenten',   href: '/segmenten' },
  { label: 'Over ons',    href: '/over-ons' },
  { label: 'Assortiment', href: '/assortiment' },
  { label: 'FAQ',         href: '/faq' },
  { label: 'Schappenplan',href: '/schappenplan' },
  { label: 'Contact',     href: '/contact' },
]

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook,  href: '#', label: 'Facebook' },
  { icon: Linkedin,  href: '#', label: 'LinkedIn' },
  { icon: Twitter,   href: '#', label: 'X (Twitter)' },
]

export default function Footer() {
  return (
    <footer className="bg-steelies-navy text-white">
      <div className="max-w-5xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Vragen? */}
          <div>
            <FooterLogo />
            <h3 className="text-xl font-black uppercase tracking-wide mt-6 mb-2">
              Vragen?
            </h3>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">
              Neem contact op via ons formulier. Wij streven ernaar u binnen één werkdag te antwoorden.
            </p>
            <FooterContactButton />
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm text-[#00C8E8] mb-4">
              Links
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Volg ons */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm text-[#00C8E8] mb-4">
              Volg ons
            </h4>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00C8E8] hover:text-steelies-navy transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
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
