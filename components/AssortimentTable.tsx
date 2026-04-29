'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import { Search, ChevronUp, ChevronDown, ChevronsUpDown, FileDown, TableIcon, Star, Trash2, Download } from 'lucide-react'
import type { Product, Segment } from '@/types/assortiment'

const PAGE_SIZE = 50

const segments: { id: Segment; label: string; active: string; inactive: string; dot: string }[] = [
  { id: 'parkers',       label: 'Parkers & Gipsplaatschroeven', active: 'bg-blue-600 text-white',    inactive: 'bg-blue-50 text-blue-600 hover:bg-blue-100',      dot: 'bg-blue-600' },
  { id: 'metrisch',      label: 'Metrisch Schroefdraad',        active: 'bg-red-600 text-white',     inactive: 'bg-red-50 text-red-600 hover:bg-red-100',         dot: 'bg-red-600' },
  { id: 'houtdraad',     label: 'Houtdraad',                    active: 'bg-amber-500 text-white',   inactive: 'bg-amber-50 text-amber-600 hover:bg-amber-100',   dot: 'bg-amber-500' },
  { id: 'verankeringen', label: 'Verankeringen',                 active: 'bg-purple-700 text-white',  inactive: 'bg-purple-50 text-purple-700 hover:bg-purple-100', dot: 'bg-purple-700' },
  { id: 'nagels',        label: 'Nagels & Klein Ijzerwaren',    active: 'bg-orange-500 text-white',  inactive: 'bg-orange-50 text-orange-500 hover:bg-orange-100', dot: 'bg-orange-500' },
]

const segmentMeta = Object.fromEntries(segments.map(s => [s.id, s]))

type SortCol = 'artikelnummer' | 'segment' | 'omschrijving'
type SortDir = 'asc' | 'desc'

async function getLogoBase64(): Promise<string> {
  const res = await fetch('/Steelies_logo_pantone.png')
  const blob = await res.blob()
  const blobUrl = URL.createObjectURL(blob)
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')!
      ctx.drawImage(img, 0, 0)
      // Replace all non-transparent pixels with white
      ctx.globalCompositeOperation = 'source-in'
      ctx.fillStyle = 'white'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      URL.revokeObjectURL(blobUrl)
      resolve(canvas.toDataURL('image/png'))
    }
    img.onerror = reject
    img.src = blobUrl
  })
}

async function buildPDF(
  rows: Product[],
  showVerpakking: boolean,
  showOvv: boolean,
  showEAN: boolean,
  label: string,
) {
  const { default: jsPDF } = await import('jspdf')
  const { default: autoTable } = await import('jspdf-autotable')
  const logoBase64 = await getLogoBase64()

  const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' })

  // Header bar
  doc.setFillColor(13, 27, 62)
  doc.rect(0, 0, 297, 22, 'F')

  // Logo (white version via CSS filter impossible in PDF — use as-is, adjust width)
  doc.addImage(logoBase64, 'PNG', 8, 3, 40, 16)

  // Title text
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(11)
  doc.text(`Steelies Ultimate — ${label}`, 55, 10)
  doc.setFontSize(7.5)
  doc.setTextColor(0, 200, 232) // cyan
  doc.text(
    `Geëxporteerd op: ${new Date().toLocaleDateString('nl-NL')}  ·  ${rows.length} artikelen`,
    55, 17,
  )

  const cols: string[] = ['', 'Artikelnummer', 'Omschrijving']
  if (showVerpakking) cols.push('Verpakking')
  if (showOvv) cols.push('Overdoos')
  if (showEAN) cols.push('EAN')

  autoTable(doc, {
    startY: 26,
    head: [cols],
    body: rows.map(p => {
      const row = ['', p.artikelnummer, p.omschrijving]
      if (showVerpakking) row.push(String(p.verpakking > 0 ? p.verpakking : ''))
      if (showOvv) row.push(String(p.oververpakking > 0 ? p.oververpakking : ''))
      if (showEAN) row.push(p.ean)
      return row
    }),
    headStyles: { fillColor: [13, 27, 62], textColor: [255, 255, 255], fontSize: 7 },
    bodyStyles: { fontSize: 6.5 },
    columnStyles: {
      0: { cellWidth: 6 },   // segment dot placeholder
      2: { cellWidth: 110 }, // omschrijving
    },
    alternateRowStyles: { fillColor: [248, 250, 252] },
    // Draw segment colour dot in column 0
    didDrawCell(data) {
      if (data.section === 'body' && data.column.index === 0) {
        const p = rows[data.row.index]
        if (!p) return
        const meta = segmentMeta[p.segment]
        if (!meta) return
        const colorMap: Record<string, [number, number, number]> = {
          'bg-blue-600':   [37, 99, 235],
          'bg-red-600':    [220, 38, 38],
          'bg-amber-500':  [245, 158, 11],
          'bg-purple-700': [109, 40, 217],
          'bg-orange-500': [249, 115, 22],
        }
        const rgb = colorMap[meta.dot] ?? [150, 150, 150]
        doc.setFillColor(...rgb)
        doc.circle(
          data.cell.x + data.cell.width / 2,
          data.cell.y + data.cell.height / 2,
          1.2,
          'F',
        )
      }
    },
  })

  doc.save(`steelies-${label.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}.pdf`)
}

export default function AssortimentTable({ products }: { products: Product[] }) {
  const [activeSegment, setActiveSegment] = useState<Segment | 'alle'>('alle')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortCol, setSortCol] = useState<SortCol>('artikelnummer')
  const [sortDir, setSortDir] = useState<SortDir>('asc')
  const [page, setPage] = useState(1)
  const [showEAN, setShowEAN] = useState(true)
  const [showVerpakking, setShowVerpakking] = useState(true)
  const [showOvv, setShowOvv] = useState(true)
  const [colMenuOpen, setColMenuOpen] = useState(false)
  const [exportWarning, setExportWarning] = useState('')
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const colMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (colMenuRef.current && !colMenuRef.current.contains(e.target as Node)) {
        setColMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const filteredProducts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim()
    return products.filter(p => {
      if (activeSegment !== 'alle' && p.segment !== activeSegment) return false
      if (!q) return true
      return p.artikelnummer.toLowerCase().includes(q) || p.omschrijving.toLowerCase().includes(q)
    })
  }, [products, activeSegment, searchQuery])

  useEffect(() => { setPage(1) }, [activeSegment, searchQuery, sortCol, sortDir])

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      const av = a[sortCol] ?? ''
      const bv = b[sortCol] ?? ''
      const cmp = String(av).localeCompare(String(bv), 'nl', { numeric: true })
      return sortDir === 'asc' ? cmp : -cmp
    })
  }, [filteredProducts, sortCol, sortDir])

  const totalPages = Math.max(1, Math.ceil(sortedProducts.length / PAGE_SIZE))
  const pagedProducts = sortedProducts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const favoriteProducts = useMemo(
    () => products.filter(p => favorites.has(p.artikelnummer)),
    [products, favorites],
  )

  function toggleFavorite(artikelnummer: string) {
    setFavorites(prev => {
      const next = new Set(prev)
      next.has(artikelnummer) ? next.delete(artikelnummer) : next.add(artikelnummer)
      return next
    })
  }

  // Select / deselect all visible on current page
  const pageKeys = pagedProducts.map(p => p.artikelnummer)
  const allPageSelected = pageKeys.length > 0 && pageKeys.every(k => favorites.has(k))
  function togglePageAll() {
    setFavorites(prev => {
      const next = new Set(prev)
      if (allPageSelected) pageKeys.forEach(k => next.delete(k))
      else pageKeys.forEach(k => next.add(k))
      return next
    })
  }

  function toggleSort(col: SortCol) {
    if (sortCol === col) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortCol(col); setSortDir('asc') }
  }

  function SortIcon({ col }: { col: SortCol }) {
    if (sortCol !== col) return <ChevronsUpDown className="inline w-3 h-3 ml-1 opacity-40" />
    return sortDir === 'asc'
      ? <ChevronUp className="inline w-3 h-3 ml-1" />
      : <ChevronDown className="inline w-3 h-3 ml-1" />
  }

  async function exportAllToPDF() {
    if (sortedProducts.length > 500) {
      setExportWarning(`Dit genereert een groot bestand (${sortedProducts.length} artikelen). Gebruik een filter of zoekterm.`)
      return
    }
    setExportWarning('')
    await buildPDF(sortedProducts, showVerpakking, showOvv, showEAN, 'Assortiment')
  }

  async function exportAllToExcel() {
    setExportWarning('')
    const XLSX = await import('xlsx')
    const headers = ['Segment', 'Artikelnummer', 'Omschrijving']
    if (showVerpakking) headers.push('Verpakking')
    if (showOvv) headers.push('Overdoos')
    if (showEAN) headers.push('EAN')
    const data = [headers, ...sortedProducts.map(p => {
      const row = [segmentMeta[p.segment]?.label ?? p.segment, p.artikelnummer, p.omschrijving]
      if (showVerpakking) row.push(String(p.verpakking > 0 ? p.verpakking : ''))
      if (showOvv) row.push(String(p.oververpakking > 0 ? p.oververpakking : ''))
      if (showEAN) row.push(p.ean)
      return row
    })]
    const ws = XLSX.utils.aoa_to_sheet(data)
    ws['!cols'] = [{ wch: 28 }, { wch: 16 }, { wch: 80 }, { wch: 12 }, { wch: 10 }, { wch: 16 }]
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Assortiment')
    XLSX.writeFile(wb, `steelies-assortiment-${Date.now()}.xlsx`)
  }

  async function exportFavToPDF() {
    await buildPDF(favoriteProducts, showVerpakking, showOvv, showEAN, 'Favorieten')
  }

  async function exportFavToExcel() {
    const XLSX = await import('xlsx')
    const headers = ['Segment', 'Artikelnummer', 'Omschrijving']
    if (showVerpakking) headers.push('Verpakking')
    if (showOvv) headers.push('Overdoos')
    if (showEAN) headers.push('EAN')
    const data = [headers, ...favoriteProducts.map(p => {
      const row = [segmentMeta[p.segment]?.label ?? p.segment, p.artikelnummer, p.omschrijving]
      if (showVerpakking) row.push(String(p.verpakking > 0 ? p.verpakking : ''))
      if (showOvv) row.push(String(p.oververpakking > 0 ? p.oververpakking : ''))
      if (showEAN) row.push(p.ean)
      return row
    })]
    const ws = XLSX.utils.aoa_to_sheet(data)
    ws['!cols'] = [{ wch: 28 }, { wch: 16 }, { wch: 80 }, { wch: 12 }, { wch: 10 }, { wch: 16 }]
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Favorieten')
    XLSX.writeFile(wb, `steelies-favorieten-${Date.now()}.xlsx`)
  }

  const totalCols = 2 + 1 + 1 + (showVerpakking ? 1 : 0) + (showOvv ? 1 : 0) + (showEAN ? 1 : 0)

  return (
    <section className="bg-white">

      {/* ── Sticky controls bar ── */}
      <div className="sticky top-[97px] z-40 bg-white/95 supports-[backdrop-filter]:bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm px-4 sm:px-6 py-3">
        <div className="max-w-5xl mx-auto space-y-3">

          {/* Search + export */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="search"
                placeholder="Zoek op artikelnummer of omschrijving…"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C8E8] focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 flex-shrink-0 flex-wrap">
              <button onClick={exportAllToExcel} className="flex items-center gap-1.5 px-4 py-2 bg-[#00C8E8] text-steelies-navy font-semibold text-sm rounded-lg hover:bg-[#00aecb] transition-colors duration-200">
                <TableIcon className="w-4 h-4" /> Excel
              </button>
              <a
                href="/Assortiment Steelies Ultimate.xlsx"
                download
                className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 text-white font-semibold text-sm rounded-lg hover:bg-emerald-700 transition-colors duration-200"
              >
                <Download className="w-4 h-4" /> Download assortiment
              </a>
              <button onClick={exportAllToPDF} className="flex items-center gap-1.5 px-4 py-2 bg-steelies-navy text-white font-semibold text-sm rounded-lg hover:bg-[#1A2F5A] transition-colors duration-200">
                <FileDown className="w-4 h-4" /> PDF
              </button>
            </div>
          </div>

          {/* Segment tabs */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveSegment('alle')}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200 ${activeSegment === 'alle' ? 'bg-steelies-navy text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              Alle
            </button>
            {segments.map(s => (
              <button
                key={s.id}
                onClick={() => setActiveSegment(s.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200 ${activeSegment === s.id ? s.active : s.inactive}`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Meta row */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>
              <span className="font-semibold text-steelies-dark">{sortedProducts.length.toLocaleString('nl-NL')}</span> artikelen gevonden
            </span>
            <div className="relative" ref={colMenuRef}>
              <button onClick={() => setColMenuOpen(o => !o)} className="flex items-center gap-1 px-3 py-1 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors">
                Kolommen <ChevronDown className="w-3 h-3" />
              </button>
              {colMenuOpen && (
                <div className="absolute right-0 mt-1 w-44 bg-white border border-gray-100 rounded-xl shadow-lg z-10 p-2">
                  <label className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-50 cursor-pointer text-sm">
                    <input type="checkbox" checked={showVerpakking} onChange={e => setShowVerpakking(e.target.checked)} className="accent-steelies-navy" />
                    Verpakking
                  </label>
                  <label className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-50 cursor-pointer text-sm">
                    <input type="checkbox" checked={showOvv} onChange={e => setShowOvv(e.target.checked)} className="accent-steelies-navy" />
                    Overdoos
                  </label>
                  <label className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-50 cursor-pointer text-sm">
                    <input type="checkbox" checked={showEAN} onChange={e => setShowEAN(e.target.checked)} className="accent-steelies-navy" />
                    EAN
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* Favourites bar */}
          {favorites.size > 0 && (
            <div className="px-4 py-2.5 bg-steelies-navy rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <span className="flex items-center gap-2 text-white text-sm font-semibold">
                <Star className="w-4 h-4 fill-[#00C8E8] text-[#00C8E8]" />
                {favorites.size} artikel{favorites.size !== 1 ? 'en' : ''} geselecteerd
              </span>
              <div className="flex gap-2 ml-0 sm:ml-auto flex-wrap">
                <button onClick={exportFavToExcel} className="flex items-center gap-1.5 px-3 py-1.5 bg-[#00C8E8] text-steelies-navy font-semibold text-xs rounded-lg hover:bg-[#00aecb] transition-colors">
                  <TableIcon className="w-3.5 h-3.5" /> Selectie Excel
                </button>
                <button onClick={exportFavToPDF} className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 text-white font-semibold text-xs rounded-lg hover:bg-white/20 transition-colors border border-white/20">
                  <FileDown className="w-3.5 h-3.5" /> Selectie PDF
                </button>
                <button onClick={() => setFavorites(new Set())} className="flex items-center gap-1.5 px-3 py-1.5 text-white/60 hover:text-white text-xs transition-colors">
                  <Trash2 className="w-3.5 h-3.5" /> Wis selectie
                </button>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* ── Table + pagination ── */}
      <div className="px-4 sm:px-6 py-6">
        <div className="max-w-5xl mx-auto">

        {/* Export warning */}
        {exportWarning && (
          <div className="mb-3 px-4 py-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800 flex items-start gap-2">
            <span className="font-semibold shrink-0">Let op:</span>
            <span>{exportWarning}</span>
            <button onClick={() => setExportWarning('')} className="ml-auto shrink-0 text-amber-600 hover:text-amber-900">✕</button>
          </div>
        )}

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                {/* Select-all checkbox */}
                <th className="pl-4 pr-2 py-3 w-8">
                  <input
                    type="checkbox"
                    checked={allPageSelected}
                    onChange={togglePageAll}
                    title="Selecteer alles op deze pagina"
                    className="accent-steelies-navy cursor-pointer"
                  />
                </th>
                <th onClick={() => toggleSort('segment')} className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide cursor-pointer select-none w-8">
                  <ChevronsUpDown className="inline w-3 h-3 opacity-40" />
                </th>
                <th onClick={() => toggleSort('artikelnummer')} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide cursor-pointer select-none whitespace-nowrap">
                  Artikelnummer <SortIcon col="artikelnummer" />
                </th>
                <th onClick={() => toggleSort('omschrijving')} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide cursor-pointer select-none">
                  Omschrijving <SortIcon col="omschrijving" />
                </th>
                {showVerpakking && (
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide whitespace-nowrap">Verpakking</th>
                )}
                {showOvv && (
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide whitespace-nowrap">Overdoos</th>
                )}
                {showEAN && (
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">EAN</th>
                )}
              </tr>
            </thead>
            <tbody>
              {pagedProducts.length === 0 ? (
                <tr>
                  <td colSpan={totalCols} className="px-4 py-12 text-center text-gray-400">
                    Geen artikelen gevonden. Pas je zoekopdracht aan.
                  </td>
                </tr>
              ) : (
                pagedProducts.map((p, i) => {
                  const meta = segmentMeta[p.segment]
                  const isFav = favorites.has(p.artikelnummer)
                  return (
                    <tr
                      key={`${p.artikelnummer}-${i}`}
                      className={`border-b border-gray-50 transition-colors ${isFav ? 'bg-[#00C8E8]/5' : 'hover:bg-gray-50'}`}
                    >
                      <td className="pl-4 pr-2 py-2.5">
                        <input
                          type="checkbox"
                          checked={isFav}
                          onChange={() => toggleFavorite(p.artikelnummer)}
                          className="accent-steelies-navy cursor-pointer"
                        />
                      </td>
                      <td className="px-3 py-2.5 whitespace-nowrap">
                        <span className={`inline-block w-3 h-3 rounded-full ${meta?.dot ?? 'bg-gray-300'}`} />
                      </td>
                      <td className="px-4 py-2.5 font-mono text-xs text-steelies-dark whitespace-nowrap">
                        {p.artikelnummer}
                      </td>
                      <td className="px-4 py-2.5">
                        <span className="text-gray-700">{p.omschrijving}</span>
                      </td>
                      {showVerpakking && (
                        <td className="px-4 py-2.5 text-gray-600 whitespace-nowrap">
                          {p.verpakking > 0 ? p.verpakking : '—'}
                        </td>
                      )}
                      {showOvv && (
                        <td className="px-4 py-2.5 text-gray-600 whitespace-nowrap">
                          {p.oververpakking > 0 ? p.oververpakking : '—'}
                        </td>
                      )}
                      {showEAN && (
                        <td className="px-4 py-2.5 font-mono text-xs text-gray-500">
                          {p.ean || '—'}
                        </td>
                      )}
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
          <span>Pagina {page} van {totalPages}</span>
          <div className="flex gap-2">
            <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="px-4 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
              Vorige
            </button>
            <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="px-4 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
              Volgende
            </button>
          </div>
        </div>

        </div>
      </div>
    </section>
  )
}
