import FooterContactButton from './FooterContactButton'
import FooterLogo from './FooterLogo'

export default function Footer() {
  return (
    <footer className="bg-steelies-navy text-white py-14">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-10">
          <FooterLogo />
          <p className="text-gray-400 text-sm leading-relaxed mt-4">
            Het complete bevestigingsmiddelen assortiment voor de professionele vakhandel.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} A.S.F. Fischer BV — Alle rechten voorbehouden</p>
          <FooterContactButton />
          <p>Steelies® Ultimate is een geregistreerd handelsmerk</p>
        </div>
      </div>
    </footer>
  )
}
