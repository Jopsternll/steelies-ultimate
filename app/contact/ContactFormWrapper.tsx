'use client'

import { useSearchParams } from 'next/navigation'
import ContactForm from '@/components/ContactForm'

export default function ContactFormWrapper() {
  const params = useSearchParams()
  const isSchappenplan = params.get('onderwerp') === 'schappenplan'

  return (
    <ContactForm
      defaultOpmerking={
        isSchappenplan
          ? 'Ik wil graag een schappenplan aanvragen.\n\nDoelgroep: ...\nBreedte van het schap: ...'
          : ''
      }
    />
  )
}
