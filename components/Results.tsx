'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import FadeUp from './FadeUp'

const images = [
  { src: '/InShot_20240418_121336237.jpg', alt: 'Skin transformation result 1' },
  { src: '/InShot_20240813_170553101.jpg', alt: 'Skin transformation result 2' },
  { src: '/InShot_20260319_144009025.jpg', alt: 'Skin transformation result 3' },
  { src: '/InShot_20240813_194320078.jpg', alt: 'Skin transformation result 4' },
  { src: '/InShot_20240813_195717084.jpg', alt: 'Skin transformation result 5' },
  { src: '/InShot_20260317_143459622.jpg', alt: 'Skin transformation result 6' },
  { src: '/InShot_20260317_144547705.jpg', alt: 'Skin transformation result 7' },
  { src: '/InShot_20260317_151247298.jpg', alt: 'Skin transformation result 8' },
  { src: '/InShot_20260318_113549154.jpg', alt: 'Skin transformation result 9' },
]

export default function Results() {
  const [slotIndices, setSlotIndices] = useState([0, 1, 2, 3])
  const [failedSrcs, setFailedSrcs] = useState<Set<string>>(new Set())
  const nextImageRef = useRef(4)
  const nextSlotRef = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSlotIndices(prev => {
        const updated = [...prev]
        updated[nextSlotRef.current] = nextImageRef.current % images.length
        nextImageRef.current++
        nextSlotRef.current = (nextSlotRef.current + 1) % 4
        return updated
      })
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const visibleSlots = slotIndices.filter(idx => !failedSrcs.has(images[idx].src))
  const hasImages = visibleSlots.length > 0

  return (
    <section className="bg-white px-4 sm:px-8 lg:px-20 py-14 sm:py-20 lg:py-32">
      <div className={`grid grid-cols-1 gap-12 sm:gap-16 lg:gap-28 items-center ${hasImages ? 'lg:grid-cols-2' : ''}`}>
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 sm:w-[26px] h-px bg-brand-pink shrink-0" />
            <span className="font-outfit text-[0.65rem] tracking-[0.28em] uppercase text-brand-pink font-medium">
              Results &amp; Transformations
            </span>
          </div>
          <h2 className="font-outfit text-[clamp(1.8rem,3.5vw,3.6rem)] font-light leading-[1.15] text-brand-black mb-5 sm:mb-6">
            Real Skin <em className="italic text-brand-pink">Transformations</em>
          </h2>
          <p className="font-outfit text-sm sm:text-[0.95rem] font-light leading-[1.85] sm:leading-[1.95] text-brand-black/78">
            Visible improvements in skin clarity, acne reduction, texture
            refinement, hydration, and radiance through customised UBÊAU
            protocols.
          </p>
          <p className="font-outfit text-[0.78rem] sm:text-[0.82rem] font-light italic text-brand-black/60 mt-6 border-l-2 border-brand-pink pl-4 leading-[1.75]">
            Before &amp; after photos, patient stories and testimonials reflect
            real client experiences with UBÊAU protocols. Individual results may
            vary based on skin condition and protocol.
          </p>
        </div>

        {hasImages && (
          <div className="grid grid-cols-2 gap-2 sm:gap-1.5">
            {visibleSlots.map((imgIdx, slotI) => (
              <FadeUp key={slotI} delay={slotI * 120}>
                <div className="group overflow-hidden h-52 sm:h-64 lg:h-75 relative">
                  <Image
                    key={imgIdx}
                    src={images[imgIdx].src}
                    alt={images[imgIdx].alt}
                    fill
                    className="object-cover object-center brightness-95 group-hover:brightness-100 animate-img-fade"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    onError={() => setFailedSrcs(prev => new Set(prev).add(images[imgIdx].src))}
                  />
                </div>
              </FadeUp>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
