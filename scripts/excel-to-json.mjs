import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import XLSX from 'xlsx'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const segmentMap = {
  '301': 'parkers',
  '302': 'metrisch',
  '303': 'houtdraad',
  '304': 'verankeringen',
  '305': 'nagels',
}

const wb = XLSX.readFile(join(root, 'public', 'Assortiment Steelies Ultimate.xlsx'))
const ws = wb.Sheets[wb.SheetNames[0]]
const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' })

const products = []
let currentSegment = null
const counts = {}

for (const row of rows) {
  const cell0 = String(row[0] ?? '').trim()

  // Detect segment header
  if (cell0.startsWith('Productgroep:')) {
    const code = cell0.match(/\d+/)?.[0]
    if (code && segmentMap[code]) {
      currentSegment = segmentMap[code]
    }
    continue
  }

  // Skip non-data rows
  if (!currentSegment) continue
  if (!cell0) continue
  if (cell0 === 'Art.Nr' || cell0.startsWith('Klant:') || cell0.startsWith('Productgroep:')) continue
  // Skip pure-text rows (column headers, labels) — must be at least 5 chars alphanumeric
  if (cell0.length < 5 || /^[A-Za-z\s]+$/.test(cell0)) continue

  const artikelnummer = cell0
  const ean = String(row[2] ?? '').trim()
  const omschrijving = String(row[3] ?? '')
    .replace(/Â/g, '')
    .replace(/\s+/g, ' ')
    .trim()
  const verpakking = Number(row[4]) || 0
  const oververpakking = Number(row[5]) || 0

  if (!artikelnummer || !omschrijving) continue

  products.push({ artikelnummer, ean, omschrijving, verpakking, oververpakking, segment: currentSegment })
  counts[currentSegment] = (counts[currentSegment] || 0) + 1
}

mkdirSync(join(root, 'data'), { recursive: true })
writeFileSync(join(root, 'data', 'assortiment.json'), JSON.stringify(products))

console.log(`✓ ${products.length} producten geschreven naar data/assortiment.json`)
console.log('  Per segment:')
for (const [seg, count] of Object.entries(counts)) {
  console.log(`  - ${seg}: ${count}`)
}
