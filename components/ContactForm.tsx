'use client'

import { useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

interface FormData {
  bedrijfsnaam: string
  voornaam: string
  achternaam: string
  email: string
  telefoon: string
  opmerking: string
}

const empty: FormData = {
  bedrijfsnaam: '',
  voornaam: '',
  achternaam: '',
  email: '',
  telefoon: '',
  opmerking: '',
}

export default function ContactForm() {
  const [data, setData] = useState<FormData>(empty)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [state, setState] = useState<FormState>('idle')

  function set(field: keyof FormData, value: string) {
    setData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }))
  }

  function validate(): boolean {
    const e: Partial<FormData> = {}
    if (!data.bedrijfsnaam.trim()) e.bedrijfsnaam = 'Verplicht veld'
    if (!data.voornaam.trim())    e.voornaam    = 'Verplicht veld'
    if (!data.achternaam.trim())  e.achternaam  = 'Verplicht veld'
    if (!data.email.trim())       e.email       = 'Verplicht veld'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Ongeldig e-mailadres'
    if (!data.telefoon.trim())    e.telefoon    = 'Verplicht veld'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setState('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setState('success')
        setData(empty)
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="max-w-2xl mx-auto text-center py-12 px-6">
        <div className="w-16 h-16 bg-[#00C8E8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-[#00C8E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-black text-steelies-dark uppercase tracking-wide mb-2">
          Bericht ontvangen
        </h3>
        <p className="text-gray-500 mb-6">
          Bedankt voor uw bericht. Ons team neemt zo spoedig mogelijk contact met u op.
        </p>
        <button
          onClick={() => setState('idle')}
          className="px-6 py-2 bg-steelies-navy text-white font-semibold rounded-full hover:bg-[#1A2F5A] transition-colors text-sm"
        >
          Nieuw bericht
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-2xl mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* Bedrijfsnaam — full width */}
        <div className="sm:col-span-2">
          <Field
            label="Bedrijfsnaam"
            required
            value={data.bedrijfsnaam}
            onChange={v => set('bedrijfsnaam', v)}
            error={errors.bedrijfsnaam}
            placeholder="Uw bedrijfsnaam"
          />
        </div>

        <Field
          label="Voornaam"
          required
          value={data.voornaam}
          onChange={v => set('voornaam', v)}
          error={errors.voornaam}
          placeholder="Voornaam"
        />

        <Field
          label="Achternaam"
          required
          value={data.achternaam}
          onChange={v => set('achternaam', v)}
          error={errors.achternaam}
          placeholder="Achternaam"
        />

        <Field
          label="E-mailadres"
          type="email"
          required
          value={data.email}
          onChange={v => set('email', v)}
          error={errors.email}
          placeholder="uw@bedrijf.nl"
        />

        <Field
          label="Telefoonnummer"
          type="tel"
          required
          value={data.telefoon}
          onChange={v => set('telefoon', v)}
          error={errors.telefoon}
          placeholder="+31 6 00 00 00 00"
        />

        {/* Opmerking — full width, optional */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold text-steelies-dark mb-1">
            Opmerking
            <span className="ml-1 text-xs font-normal text-gray-400">(optioneel)</span>
          </label>
          <textarea
            value={data.opmerking}
            onChange={e => set('opmerking', e.target.value)}
            rows={4}
            placeholder="Stel uw vraag of laat een opmerking achter…"
            className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C8E8] focus:border-transparent resize-none"
          />
        </div>
      </div>

      {state === 'error' && (
        <p className="mt-3 text-sm text-red-600">
          Er is iets misgegaan. Probeer het later opnieuw.
        </p>
      )}

      <div className="mt-5">
        <button
          type="submit"
          disabled={state === 'submitting'}
          className="w-full sm:w-auto px-8 py-3 bg-[#00C8E8] text-steelies-navy font-bold rounded-full hover:bg-[#00aecb] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {state === 'submitting' ? 'Versturen…' : 'Verstuur bericht'}
        </button>
      </div>
    </form>
  )
}

function Field({
  label, required, type = 'text', value, onChange, error, placeholder,
}: {
  label: string
  required?: boolean
  type?: string
  value: string
  onChange: (v: string) => void
  error?: string
  placeholder?: string
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-steelies-dark mb-1">
        {label}
        {required && <span className="ml-0.5 text-[#00C8E8]">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C8E8] focus:border-transparent transition-colors ${
          error ? 'border-red-400 bg-red-50' : 'border-gray-200'
        }`}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  )
}
