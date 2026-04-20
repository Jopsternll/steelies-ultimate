interface SegmentCardProps {
  colorLabel: string
  name: string
  description: string
  products: string[]
  headerBg: string
  badgeBg: string
  badgeText: string
  borderColor: string
}

export default function SegmentCard({
  colorLabel,
  name,
  description,
  products,
  headerBg,
  badgeBg,
  badgeText,
  borderColor,
}: SegmentCardProps) {
  return (
    <article
      className={`flex flex-col rounded-xl overflow-hidden shadow-sm border-t-4 border-solid ${borderColor} bg-white hover:shadow-lg transition-shadow duration-200`}
    >
      {/* Colored header */}
      <div className={`${headerBg} px-5 py-4`}>
        <span
          className={`inline-block text-xs font-bold uppercase tracking-widest px-2 py-1 rounded ${badgeBg} ${badgeText} mb-2`}
        >
          {colorLabel}
        </span>
        <h3 className="text-white font-black text-lg uppercase tracking-wide leading-tight">
          {name}
        </h3>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-5 py-5">
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>

        <ul className="mt-auto space-y-1" aria-label={`Producten in ${name}`}>
          {products.map((p) => (
            <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="mt-1 text-xs text-gray-400" aria-hidden="true">▶</span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
