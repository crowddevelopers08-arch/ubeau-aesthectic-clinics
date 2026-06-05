'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import FadeUp from './FadeUp'

const videos = [
  'https://video.wixstatic.com/video/67c604_f36a8bbe043c4a1ca2db54803b2b6dc4/480p/mp4/file.mp4',
  'https://video.wixstatic.com/video/67c604_21886c979d71499581025eb76b26efc2/480p/mp4/file.mp4',
  'https://video.wixstatic.com/video/67c604_8368cdac5ad54627a48dec421a30f390/480p/mp4/file.mp4',
  'https://video.wixstatic.com/video/67c604_be90cfc9bca345228f8a211d73abfa40/480p/mp4/file.mp4',
  'https://video.wixstatic.com/video/67c604_1c89dd69b0b74adab918141d44ff2bfe/480p/mp4/file.mp4',
  'https://video.wixstatic.com/video/67c604_5a7ea63c8aa148719fab8cd93a30007b/480p/mp4/file.mp4',
  'https://video.wixstatic.com/video/67c604_58d3a171fcf441efbe5886309170d38c/480p/mp4/file.mp4',
]

const EASE = 'cubic-bezier(0.16,1,0.3,1)'
const PER_VIEW_LG = 3
const PER_VIEW_SM = 1

/** Inline scroll-reveal hook — avoids wrapping complex JSX in <FadeUp> */
function useFadeIn(delay = 0) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'scale(0.96) translateY(20px)'
    el.style.transition = `opacity 1000ms ${EASE} ${delay}ms, transform 1000ms ${EASE} ${delay}ms`
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = '1'
        el.style.transform = 'scale(1) translateY(0px)'
        io.unobserve(el)
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [delay])
  return ref
}

export default function VideoCarousel() {
  const [current, setCurrent] = useState(0)
  const [isLg, setIsLg] = useState(false)
  const [playing, setPlaying] = useState<number | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const carouselRef = useFadeIn(150)
  const controlsRef = useFadeIn(280)

  /* ── Breakpoint detection ── */
  useEffect(() => {
    const check = () => setIsLg(window.innerWidth >= 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const perView = isLg ? PER_VIEW_LG : PER_VIEW_SM
  const maxIndex = videos.length - perView

  /* Clamp current when viewport changes */
  useEffect(() => {
    setCurrent(c => Math.min(c, maxIndex))
  }, [maxIndex])

  const next = useCallback(() => {
    setCurrent(c => Math.min(c + 1, maxIndex))
  }, [maxIndex])

  const prev = () => setCurrent(c => Math.max(c - 1, 0))

  /* ── Play / pause individual video ── */
  function togglePlay(idx: number) {
    const vid = videoRefs.current[idx]
    if (!vid) return
    if (vid.paused) {
      videoRefs.current.forEach((v, i) => { if (v && i !== idx) v.pause() })
      vid.play()
      setPlaying(idx)
    } else {
      vid.pause()
      setPlaying(null)
    }
  }

  /* Pause videos that scroll out of the visible window */
  useEffect(() => {
    const visible = Array.from({ length: perView }, (_, i) => current + i)
    videoRefs.current.forEach((v, i) => {
      if (v && !visible.includes(i)) {
        v.pause()
        if (playing === i) setPlaying(null)
      }
    })
  }, [current, perView, playing])

  const itemWidthPct = 100 / perView
  const translateX = -current * itemWidthPct
  const dotCount = maxIndex + 1

  return (
    <section className="bg-brand-off-white px-4 sm:px-8 lg:px-20 py-6 sm:py-10 lg:py-14">

      {/* ── Section label + heading ── */}
      <FadeUp className="mb-5 sm:mb-7">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-6 sm:w-6.5 h-px bg-brand-pink shrink-0" />
          <span className="font-outfit text-[0.65rem] tracking-[0.28em] uppercase text-brand-pink font-medium">
            Client Stories
          </span>
        </div>
        <h2 className="font-outfit text-[clamp(1.5rem,3vw,3.2rem)] font-normal leading-[1.15] text-brand-black">
          See Real{' '}
          <em className="italic text-brand-pink">Transformations</em>
        </h2>
      </FadeUp>

      {/* ── Carousel track ── */}
      <div ref={carouselRef} className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(${translateX}%)`, transitionTimingFunction: EASE }}
        >
          {videos.map((src, i) => (
            <div key={i} className="shrink-0 px-1.5 lg:px-2" style={{ width: `${itemWidthPct}%` }}>
              <div className="relative overflow-hidden bg-brand-green aspect-3/4 group">

                <video
                  ref={el => { videoRefs.current[i] = el }}
                  src={src}
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  onPlay={() => setPlaying(i)}
                  onPause={() => setPlaying(p => (p === i ? null : p))}
                />

                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Play / Pause button */}
                <button
                  onClick={() => togglePlay(i)}
                  aria-label={playing === i ? 'Pause video' : 'Play video'}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {playing === i ? (
                    <span className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-brand-off-white/30 border border-brand-off-white/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="6" y="4" width="4" height="16" rx="1" />
                        <rect x="14" y="4" width="4" height="16" rx="1" />
                      </svg>
                    </span>
                  ) : (
                    <span className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-brand-pink/85 border border-brand-pink text-white transition-all duration-300 group-hover:bg-brand-pink group-hover:scale-110">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
                        <path d="M5 3l14 9-14 9V3z" />
                      </svg>
                    </span>
                  )}
                </button>

                {/* Badge */}
                <span className="absolute bottom-3 left-3 font-outfit text-[0.6rem] tracking-[0.18em] uppercase text-white/80 pointer-events-none">
                  {String(i + 1).padStart(2, '0')} / {String(videos.length).padStart(2, '0')}
                </span>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Controls: arrows + dots ── */}
      <div ref={controlsRef} className="flex items-center justify-between mt-4 sm:mt-6">

        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Previous videos"
            className="w-9 h-9 flex items-center justify-center border border-brand-black/30 text-brand-black text-sm hover:border-brand-pink hover:text-brand-pink disabled:opacity-25 disabled:cursor-not-allowed transition-colors duration-200"
          >
            ←
          </button>
          <button
            onClick={next}
            disabled={current >= maxIndex}
            aria-label="Next videos"
            className="w-9 h-9 flex items-center justify-center border border-brand-black/30 text-brand-black text-sm hover:border-brand-pink hover:text-brand-pink disabled:opacity-25 disabled:cursor-not-allowed transition-colors duration-200"
          >
            →
          </button>
        </div>

        <div className="flex items-center gap-1.5">
          {Array.from({ length: dotCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to video set ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-5 h-1.5 bg-brand-pink'
                  : 'w-1.5 h-1.5 bg-brand-black/25 hover:bg-brand-pink/70'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
