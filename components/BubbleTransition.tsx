const BUBBLES = [
  { size: 52,  left: '4%',  delay: '0s',    dur: '7s'   },
  { size: 28,  left: '13%', delay: '2.2s',  dur: '9.5s' },
  { size: 76,  left: '24%', delay: '0.5s',  dur: '6.5s' },
  { size: 40,  left: '36%', delay: '3.1s',  dur: '8s'   },
  { size: 64,  left: '48%', delay: '1.0s',  dur: '7.5s' },
  { size: 34,  left: '59%', delay: '1.7s',  dur: '10s'  },
  { size: 88,  left: '70%', delay: '0.3s',  dur: '8.5s' },
  { size: 46,  left: '81%', delay: '2.6s',  dur: '6s'   },
  { size: 30,  left: '91%', delay: '1.3s',  dur: '9s'   },
]

export default function BubbleTransition() {
  return (
    <div className="relative h-40 bg-gradient-to-t from-[#E8F4FD] to-white overflow-hidden">
      {BUBBLES.map((b, i) => (
        <div
          key={i}
          className="absolute bottom-0 rounded-full"
          style={{
            width:  b.size,
            height: b.size,
            left:   b.left,
            animation: `rise ${b.dur} ${b.delay} ease-in-out infinite`,
            background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.7) 0%, rgba(190,220,245,0.25) 50%, rgba(160,210,240,0.15) 100%)',
            border: '1.5px solid rgba(150, 200, 235, 0.6)',
            boxShadow: 'inset 2px 2px 6px rgba(255,255,255,0.6), inset -1px -1px 4px rgba(100,180,230,0.3)',
          }}
        />
      ))}
    </div>
  )
}
