import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  let body: Record<string, string>

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Ongeldig verzoek' }, { status: 400 })
  }

  const { bedrijfsnaam, voornaam, achternaam, email, telefoon, opmerking } = body

  if (!bedrijfsnaam || !voornaam || !achternaam || !email || !telefoon) {
    return NextResponse.json({ error: 'Verplichte velden ontbreken' }, { status: 400 })
  }

  // Server-side e-mailvalidatie
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Ongeldig e-mailadres' }, { status: 400 })
  }

  // TODO: koppel hier een e-mail service (Resend, SendGrid) of CRM
  void opmerking

  return NextResponse.json({ ok: true })
}
