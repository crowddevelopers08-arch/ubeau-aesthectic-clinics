'use client'
import { useEffect, useRef, useState } from 'react'
import FadeUp from './FadeUp'

const stats = [
  { display: '1st',   end: null,  suffix: '',  label: "Odisha's 1st Luxury Skincare & Wellness Clinic" },
  { display: '3000+', end: 3000,  suffix: '+', label: 'Happy Transformations' },
  { display: '60+',   end: 60,    suffix: '+', label: 'Global Award-Winning Treatments' },
  { display: '98%',   end: 98,    suffix: '%', label: 'Client Satisfaction' },
]

function StatNum({ display, end, suffix }: { display: string; end: number | null; suffix: string }) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    if (end === null) return
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || started.current) return
        started.current = true
        io.disconnect()
        let t0: number | undefined
        const run = (t: number) => {
          if (t0 === undefined) t0 = t
          const p = Math.min((t - t0) / 1800, 1)
          setVal(Math.round((1 - Math.pow(1 - p, 4)) * end))
          if (p < 1) requestAnimationFrame(run)
        }
        requestAnimationFrame(run)
      },
      { threshold: 0.5 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [end])

  return (
    <div ref={ref} className="font-outfit text-[1.8rem] sm:text-[2.2rem] font-semibold text-brand-pink leading-none mb-2">
      {end !== null ? `${val}${suffix}` : display}
    </div>
  )
}

export default function TrustStrip() {
  return (
    <div className="bg-brand-black grid grid-cols-2 lg:grid-cols-4 items-stretch">
      {stats.map((stat, i) => (
        <FadeUp key={i} delay={i * 100} variant="fade" className="h-full">
          <div
            className={[
              'h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 py-8 sm:py-10',
              i === 0 ? 'border-r border-white/10' : '',
              i === 1 ? 'lg:border-r lg:border-white/10' : '',
              i === 2 ? 'border-r border-white/10' : '',
              i === 0 || i === 1 ? 'border-b lg:border-b-0 border-white/10' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <StatNum display={stat.display} end={stat.end} suffix={stat.suffix} />
            <div className="font-outfit text-[0.62rem] sm:text-[0.68rem] tracking-widest uppercase text-white/70 leading-[1.6] font-normal">
              {stat.label}
            </div>
          </div>
        </FadeUp>
      ))}
    </div>
  )
}
