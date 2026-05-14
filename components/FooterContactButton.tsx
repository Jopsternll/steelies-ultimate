'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'

export default function FooterContactButton() {
  const pathname = usePathname()
  if (pathname === '/contact') return null

  return (
    <Link
      href="/contact"
      className="inline-flex items-center gap-2 px-5 py-3 bg-[#00C8E8] text-steelies-navy font-bold rounded-full hover:bg-[#00aecb] transition-colors text-sm"
    >
      Ga naar het contactformulier
      <ChevronRight className="w-4 h-4" />
    </Link>
  )
}
