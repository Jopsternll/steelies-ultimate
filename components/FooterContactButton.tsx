'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function FooterContactButton() {
  const pathname = usePathname()
  if (pathname === '/contact') return null

  return (
    <Link
      href="/contact"
      className="px-5 py-2 bg-[#00C8E8] text-steelies-navy font-bold rounded-full hover:bg-[#00aecb] transition-colors text-xs whitespace-nowrap"
    >
      Neem contact op
    </Link>
  )
}
