import XLSX from 'xlsx'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const wb = XLSX.readFile(join(root, 'public', 'Steelies_assortiment.xlsx'))
const ws = wb.Sheets[wb.SheetNames[0]]
const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' })

let shown = 0
for (const row of rows) {
  const c0 = String(row[0] ?? '').trim()
  if (c0.startsWith('Productgroep:')) {
    console.log('\nSEGMENT:', c0)
    shown = 0
  }
  if (shown < 3 && c0.length >= 5 && !/^[A-Za-z\s]+$/.test(c0) && c0 !== 'Art.Nr') {
    console.log(JSON.stringify(row.slice(0, 10)))
    shown++
  }
}
