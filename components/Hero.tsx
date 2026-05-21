import Image from 'next/image'
import Link from 'next/link'

const E = 'cubic-bezier(0.16,1,0.3,1)'
const heroIn = (delay: number) => ({ animation: `hero-in 1.2s ${E} ${delay}s both` })

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] flex items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=90&auto=format&fit=crop"
        alt="UBÊAU Advanced Aesthetics luxury skin clinic"
        fill
        priority
        className="object-cover object-[center_30%]"
        sizes="100vw"
        style={{ animation: `hero-zoom 3.5s ${E} both` }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(110deg, rgba(10,10,10,0.93) 0%, rgba(10,10,10,0.88) 45%, rgba(10,10,10,0.50) 100%)',
          animation: `hero-overlay-in 2s ease both`,
        }}
      />

      {/* pt-24 clears fixed nav (3px stripe + ~56px nav) on mobile */}
      <div className="relative z-[2] w-full px-4 sm:px-8 lg:px-20 pt-24 lg:pt-12">
        <div className="max-w-[820px]">
          <h1
            className="font-outfit text-[clamp(1.9rem,5.5vw,4.8rem)] font-light leading-[1.12] text-white mb-5 sm:mb-7"
            style={heroIn(0.35)}
          >
            Advanced Skin Treatments Designed for{' '}
            <em className="text-brand-pink-light italic">Real, Long-Term</em>{' '}
            Skin Transformation
          </h1>

          <p
            className="font-outfit text-sm sm:text-[1rem] font-light leading-[1.85] text-white/85 max-w-[560px] mb-8 sm:mb-12"
            style={heroIn(0.7)}
          >
            At{' '}
            <strong className="text-white font-semibold">
              UBÊAU Advanced Aesthetics
            </strong>
            , each treatment protocol is carefully crafted to function at a
            cellular level with science-backed technology, advanced dermatology,
            and personalised care.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-5"
            style={heroIn(1.0)}
          >
            <Link
              href="tel:7340020073"
              className="inline-block text-center bg-brand-pink text-white font-outfit text-[0.75rem] tracking-[0.14em] uppercase px-8 sm:px-[2.6rem] py-4 border-2 border-brand-pink no-underline font-medium transition-all duration-300 hover:bg-brand-pink-dark hover:border-brand-pink-dark"
            >
              Book Consultation
            </Link>
            <Link
              href="#protocols"
              className="inline-block text-center bg-transparent text-white font-outfit text-[0.75rem] tracking-[0.14em] uppercase px-8 sm:px-[2.6rem] py-4 border-2 border-white/65 no-underline font-medium transition-all duration-300 hover:border-brand-pink hover:text-brand-pink-light"
            >
              Explore Skin Protocols
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
