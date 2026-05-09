const BUBBLES = [
  { size: 55,  left: '5%',  delay: '0s',    dur: '7s'   },
  { size: 30,  left: '14%', delay: '1.8s',  dur: '9s'   },
  { size: 80,  left: '25%', delay: '0.4s',  dur: '6.5s' },
  { size: 45,  left: '38%', delay: '2.5s',  dur: '8.5s' },
  { size: 70,  left: '50%', delay: '0.9s',  dur: '7.5s' },
  { size: 38,  left: '62%', delay: '1.4s',  dur: '10s'  },
  { size: 95,  left: '73%', delay: '0.2s',  dur: '8s'   },
  { size: 50,  left: '83%', delay: '2.1s',  dur: '6s'   },
  { size: 35,  left: '92%', delay: '1.1s',  dur: '9.5s' },
]

export default function BubbleTransition() {
  return (
    <div className="relative h-36 bg-gradient-to-t from-[#E8F4FD] to-white overflow-hidden">
      {BUBBLES.map((b, i) => (
        <div
          key={i}
          className="absolute bottom-0 rounded-full bg-[#bddcf0]"
          style={{
            width:  b.size,
            height: b.size,
            left:   b.left,
            animation: `rise ${b.dur} ${b.delay} ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  )
}
