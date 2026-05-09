const BUBBLES = [
  { size: 70,  left: '3%',  delay: '0s',    dur: '7s'   },
  { size: 42,  left: '12%', delay: '2.0s',  dur: '9s'   },
  { size: 95,  left: '23%', delay: '0.6s',  dur: '6.5s' },
  { size: 55,  left: '35%', delay: '3.0s',  dur: '8s'   },
  { size: 80,  left: '47%', delay: '1.1s',  dur: '7.5s' },
  { size: 48,  left: '58%', delay: '1.8s',  dur: '10s'  },
  { size: 105, left: '69%', delay: '0.3s',  dur: '8.5s' },
  { size: 60,  left: '80%', delay: '2.5s',  dur: '6s'   },
  { size: 38,  left: '91%', delay: '1.4s',  dur: '9.5s' },
]

export default function BubbleTransition() {
  return (
    <div className="relative h-44 bg-white overflow-hidden">
      {BUBBLES.map((b, i) => (
        <div
          key={i}
          className="absolute bottom-[-20px] rounded-full"
          style={{
            width:  b.size,
            height: b.size,
            left:   b.left,
            animation: `rise ${b.dur} ${b.delay} ease-in-out infinite`,
            background: 'radial-gradient(circle at 32% 30%, rgba(255,255,255,0.85) 0%, rgba(170,215,245,0.55) 45%, rgba(120,185,230,0.35) 100%)',
            border: '2px solid rgba(100, 180, 230, 0.75)',
            boxShadow: 'inset 3px 3px 8px rgba(255,255,255,0.8), inset -2px -2px 6px rgba(80,160,220,0.4), 0 2px 8px rgba(100,180,230,0.2)',
          }}
        />
      ))}
    </div>
  )
}
