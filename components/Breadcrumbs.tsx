'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'

const labelMap: Record<string, string> = {
  segmenten: 'Segmenten',
  assortiment: 'Assortiment',
  schappenplan: 'Schappenplan',
  'over-ons': 'Over ons',
}

export default function Breadcrumbs() {
  const pathname = usePathname()
  if (pathname === '/') return null

  const segments = pathname.split('/').filter(Boolean)
  const crumbs = [
    { label: 'Home', href: '/' },
    ...segments.map((seg, i) => ({
      label: labelMap[seg] ?? seg,
      href: '/' + segments.slice(0, i + 1).join('/'),
    })),
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: `https://steelies-ultimate.nl${c.href}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100 px-4 sm:px-6 py-2.5">
        <ol className="max-w-5xl mx-auto flex items-center gap-1.5 text-sm text-gray-500 flex-wrap">
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1
            return (
              <li key={crumb.href} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-gray-300 shrink-0" />}
                {isLast ? (
                  <span className="text-steelies-dark font-medium" aria-current="page">
                    {crumb.label}
                  </span>
                ) : i === 0 ? (
                  <Link href="/" className="hover:text-[#00C8E8] transition-colors" aria-label="Home">
                    <Home className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <Link href={crumb.href} className="hover:text-[#00C8E8] transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
