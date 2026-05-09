'use client'

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <p className="text-[#00C8E8] font-semibold uppercase tracking-widest text-sm mb-3">Fout</p>
      <h1 className="text-3xl font-black text-steelies-dark uppercase tracking-wide mb-4">
        Er is iets misgegaan
      </h1>
      <div className="h-1 w-16 bg-[#00C8E8] mx-auto mb-6" />
      <p className="text-gray-500 max-w-md mb-8">
        Er is een onverwachte fout opgetreden. Probeer de pagina te vernieuwen.
      </p>
      <button
        onClick={reset}
        className="px-8 py-3 bg-[#00C8E8] text-steelies-navy font-bold rounded-lg hover:bg-[#00aecb] transition-colors duration-200"
      >
        Probeer opnieuw
      </button>
    </main>
  )
}
