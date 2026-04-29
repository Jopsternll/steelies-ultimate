import XLSX from 'xlsx'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const wb = XLSX.readFile(join(root, 'public', 'Steelies_assortiment.xlsx'))
const ws = wb.Sheets[wb.SheetNames[0]]
const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' })

console.log('Total rows:', rows.length)
console.log('\nAll Productgroep / segment marker rows:')
rows.forEach((row, i) => {
  const c = String(row[0] ?? '').trim()
  if (c.toLowerCase().includes('productgroep') || c.includes('304') || c.includes('305')) {
    console.log(`Row ${i}: ${JSON.stringify(c)} | col1: ${JSON.stringify(String(row[1]??'').trim())}`)
  }
})

console.log('\nLast 20 rows (to see end of file):')
rows.slice(-20).forEach((row, i) => {
  console.log(`Row ${rows.length - 20 + i}: ${JSON.stringify(row.slice(0, 4))}`)
})
