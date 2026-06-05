'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import FadeUp from './FadeUp'

const images = [
  { src: 'https://static.wixstatic.com/media/3b7dd9_2aabffc6788e4c16a55c50693c908f3a~mv2.png/v1/fill/w_371,h_371,q_90,enc_avif,quality_auto/3b7dd9_2aabffc6788e4c16a55c50693c908f3a~mv2.png', alt: 'Skin transformation result 1' },
  { src: 'https://static.wixstatic.com/media/3b7dd9_deecd7a862d448948e85089ae6cec37c~mv2.png/v1/fill/w_371,h_371,q_90,enc_avif,quality_auto/3b7dd9_deecd7a862d448948e85089ae6cec37c~mv2.png', alt: 'Skin transformation result 2' },
  { src: 'https://static.wixstatic.com/media/0e4137_9bba143482f94704a3c8b6fad51c0b8d~mv2.jpg/v1/fill/w_371,h_371,q_90,enc_avif,quality_auto/0e4137_9bba143482f94704a3c8b6fad51c0b8d~mv2.jpg', alt: 'Skin transformation result 3' },
  { src: 'https://static.wixstatic.com/media/0e4137_36f71856069c433d86f8ecd6c2e28a2b~mv2.jpg/v1/fill/w_370,h_371,q_90,enc_avif,quality_auto/0e4137_36f71856069c433d86f8ecd6c2e28a2b~mv2.jpg', alt: 'Skin transformation result 4' },
  { src: 'https://static.wixstatic.com/media/0e4137_9fdbbc5b0308416b82bc970fc50a4a28~mv2.jpg/v1/fill/w_371,h_371,q_90,enc_avif,quality_auto/0e4137_9fdbbc5b0308416b82bc970fc50a4a28~mv2.jpg', alt: 'Skin transformation result 5' },
  { src: 'https://static.wixstatic.com/media/0e4137_bf92e5d77d5847029ab1fbe813e5e94f~mv2.jpg/v1/fill/w_370,h_371,q_90,enc_avif,quality_auto/0e4137_bf92e5d77d5847029ab1fbe813e5e94f~mv2.jpg', alt: 'Skin transformation result 6' },
]

export default function Results() {
  const [current, setCurrent] = useState(0)
  const [failedSrcs, setFailedSrcs] = useState<Set<string>>(new Set())

  const validImages = images.filter(img => !failedSrcs.has(img.src))
  const total = validImages.length

  const next = useCallback(() => {
    setCurrent(c => (c + 1) % total)
  }, [total])

  const prev = () => setCurrent(c => (c - 1 + total) % total)

  useEffect(() => {
    if (total === 0) return
    const timer = setInterval(next, 3500)
    return () => clearInterval(timer)
  }, [next, total])

  const hasImages = total > 0

  const carousel = hasImages ? (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {[0, 1].map(offset => {
          const img = validImages[(current + offset) % total]
          return (
            <div
              key={`${current}-${offset}`}
              className="relative overflow-hidden aspect-square"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-center brightness-95 transition-[filter] duration-300 hover:brightness-100"
                sizes="(max-width: 1024px) 50vw, 30vw"
                onError={() =>
                  setFailedSrcs(prev => new Set(prev).add(img.src))
                }
              />
            </div>
          )
        })}
      </div>

      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            aria-label="Previous images"
            className="w-9 h-9 flex items-center justify-center border border-brand-black/40 text-brand-black text-sm hover:border-brand-pink hover:text-brand-pink transition-colors duration-200"
          >
            ←
          </button>
          <button
            onClick={next}
            aria-label="Next images"
            className="w-9 h-9 flex items-center justify-center border border-brand-black/40 text-brand-black text-sm hover:border-brand-pink hover:text-brand-pink transition-colors duration-200"
          >
            →
          </button>
        </div>

        <div className="flex items-center gap-1.5">
          {validImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-5 h-1.5 bg-brand-pink'
                  : 'w-1.5 h-1.5 bg-brand-black/35 hover:bg-brand-pink'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  ) : null

  return (
    <section className="bg-brand-off-white px-4 sm:px-8 lg:px-20 py-7 sm:py-14 lg:py-20">
      <div className={`grid grid-cols-1 gap-6 sm:gap-10 lg:gap-16 items-center ${hasImages ? 'lg:grid-cols-[2fr_3fr]' : ''}`}>

        {/* Left: Text */}
        <div>
          <FadeUp variant="left">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 sm:w-6.5 h-px bg-brand-pink shrink-0" />
              <span className="font-outfit text-[0.65rem] tracking-[0.28em] uppercase text-brand-pink font-medium">
                Results &amp; Transformations
              </span>
            </div>
            <h2 className="font-outfit text-[clamp(1.5rem,3vw,3.2rem)] font-normal leading-[1.15] text-brand-black mb-5 sm:mb-6">
              Real Skin <em className="italic text-brand-pink">Transformations</em>
            </h2>
          </FadeUp>

          {hasImages && <div className="mb-5 lg:hidden">{carousel}</div>}

          <div>
            <FadeUp variant="fade" delay={200}>
              <p className="font-outfit text-sm sm:text-[0.95rem] font-normal leading-[1.85] sm:leading-[1.95] text-brand-black">
                Visible improvements in skin clarity, acne reduction, texture
                refinement, hydration, and radiance through customised UBÊAU
                protocols.
              </p>
            </FadeUp>
            <FadeUp variant="fade" delay={350}>
              <p className="font-outfit text-[0.78rem] sm:text-[0.82rem] font-normal italic text-brand-black mt-5 border-l-2 border-brand-pink pl-4 leading-[1.75]">
                Before &amp; after photos, patient stories and testimonials reflect
                real client experiences with UBÊAU protocols. Individual results may
                vary based on skin condition and protocol.
              </p>
            </FadeUp>
          </div>
        </div>

        {/* Right: Carousel */}
        {hasImages && (
          <FadeUp variant="scale" delay={200} className="hidden lg:flex lg:flex-col">
            {carousel}
          </FadeUp>
        )}
      </div>
    </section>
  )
}
