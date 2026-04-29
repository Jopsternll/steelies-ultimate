import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { bedrijfsnaam, voornaam, achternaam, email, telefoon, opmerking } = body

  if (!bedrijfsnaam || !voornaam || !achternaam || !email || !telefoon) {
    return NextResponse.json({ error: 'Verplichte velden ontbreken' }, { status: 400 })
  }

  // Log the submission server-side (connect to email/CRM here later)
  console.log('Contactformulier ontvangen:', {
    bedrijfsnaam, voornaam, achternaam, email, telefoon, opmerking,
    timestamp: new Date().toISOString(),
  })

  return NextResponse.json({ ok: true })
}
