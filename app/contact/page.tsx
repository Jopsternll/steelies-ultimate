import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Suspense } from 'react'
import ContactFormWrapper from './ContactFormWrapper'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Neem contact op met A.S.F. Fischer BV voor vragen over het Steelies Ultimate assortiment, schappenplannen of maatwerk.',
  openGraph: {
    title: 'Contact | Steelies Ultimate',
    description:
      'Bereik ons team via telefoon, e-mail of het contactformulier. Wij streven naar een reactie binnen één werkdag.',
  },
}

const contactItems = [
  {
    icon: Phone,
    label: 'Telefoon',
    value: '032 028 5610',
    href: 'tel:+31320285610',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'info@asf-fischer.nl',
    href: 'mailto:info@asf-fischer.nl',
  },
  {
    icon: MapPin,
    label: 'Adres',
    value: 'Zilverstraat 1, 8211 AN Lelystad',
    href: 'https://maps.google.com/?q=Zilverstraat+1,+8211+AN+Lelystad',
  },
  {
    icon: Clock,
    label: 'Openingstijden',
    value: 'Maandag – vrijdag: 08:00 – 17:00',
    href: null,
  },
] as const

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-steelies-navy py-16 px-6 text-center">
        <p className="text-[#00C8E8] font-semibold uppercase tracking-widest text-sm mb-3">
          A.S.F. Fischer BV
        </p>
        <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-wide mb-4">
          Contact
        </h1>
        <div className="h-1 w-16 bg-[#00C8E8] mx-auto mb-6" />
        <p className="text-gray-300 max-w-xl mx-auto text-lg">
          Vragen over het assortiment, een schappenplan aanvragen of iets anders?
          Ons team staat voor u klaar.
        </p>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Linkerkolom: contactgegevens */}
            <div>
              <span className="inline-block bg-steelies-navy text-[#00C8E8] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
                Gegevens
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-steelies-dark uppercase tracking-wide mb-4 border-l-4 border-[#00C8E8] pl-5">
                Neem contact op
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed pl-5">
                Bereik ons via telefoon, e-mail of vul het formulier in.
                Wij streven ernaar u binnen één werkdag te antwoorden.
              </p>

              <ul className="space-y-6">
                {contactItems.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 bg-[#00C8E8]/10 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#00C8E8]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-steelies-dark font-semibold hover:text-[#00C8E8] transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-steelies-dark font-semibold">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rechterkolom: formulier */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
              <h3 className="text-lg font-black text-steelies-dark uppercase tracking-wide mb-6">
                Stuur een bericht
              </h3>
              <Suspense
                fallback={
                  <div className="h-64 rounded-xl bg-gray-100 animate-pulse" />
                }
              >
                <ContactFormWrapper />
              </Suspense>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
