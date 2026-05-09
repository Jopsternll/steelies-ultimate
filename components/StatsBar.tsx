'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 80, suffix: '+ jaar', label: 'Ervaring', raw: false },
  { value: 8043, suffix: '', label: 'Artikelen', raw: false },
  { value: 5, suffix: '', label: 'Segmenten', raw: false },
  { value: 1945, suffix: '', label: 'Opgericht', raw: true },
]

function useCountUp(target: number, inView: boolean, duration = 1200) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target, duration])
  return count
}

function StatItem({ value, suffix, label, raw, inView }: typeof stats[0] & { inView: boolean }) {
  const count = useCountUp(value, inView)
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-3xl sm:text-4xl font-black text-steelies-dark tabular-nums">
        {raw ? count : count.toLocaleString('nl-NL')}{suffix}
      </span>
      <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">{label}</span>
    </div>
  )
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="bg-white border-b border-gray-100 py-8 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} inView={inView} />
        ))}
      </div>
    </div>
  )
}
