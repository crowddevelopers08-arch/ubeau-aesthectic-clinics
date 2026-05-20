import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=90&auto=format&fit=crop"
        alt="UBÊAU Advanced Aesthetics luxury skin clinic"
        fill
        priority
        className="object-cover object-[center_30%]"
        sizes="100vw"
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(110deg, rgba(10,10,10,0.88) 42%, rgba(10,10,10,0.35) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-[2] px-20 max-w-[820px] max-lg:px-6">
        <div className="flex items-center gap-4 mb-7">
          <span className="w-[38px] h-px bg-brand-pink shrink-0" />
          <span className="font-outfit text-[0.68rem] tracking-[0.36em] uppercase text-brand-pink font-medium">
            Odisha&apos;s 1st Luxury Skincare &amp; Wellness Clinic
          </span>
        </div>

        <h1 className="font-cormorant text-[clamp(2.8rem,4.8vw,4.8rem)] font-light leading-[1.1] text-white mb-7">
          Advanced Skin Treatments Designed for{' '}
          <em className="text-brand-pink-light italic">Real, Long-Term</em>{' '}
          Skin Transformation
        </h1>

        <p className="font-outfit text-[1rem] font-light leading-[1.9] text-white/70 max-w-[560px] mb-12">
          At{' '}
          <strong className="text-white font-medium">
            UBÊAU Advanced Aesthetics
          </strong>
          , each treatment protocol is carefully crafted to function at a
          cellular level with science-backed technology, advanced dermatology,
          and personalised care.
        </p>

        <div className="flex gap-5 flex-wrap">
          <Link
            href="tel:7340020073"
            className="inline-block bg-brand-pink text-white font-outfit text-[0.75rem] tracking-[0.14em] uppercase px-[2.6rem] py-4 border-2 border-brand-pink no-underline font-medium transition-all duration-300 hover:bg-brand-pink-dark hover:border-brand-pink-dark"
          >
            Book Consultation
          </Link>
          <Link
            href="#protocols"
            className="inline-block bg-transparent text-white font-outfit text-[0.75rem] tracking-[0.14em] uppercase px-[2.6rem] py-4 border-2 border-white/45 no-underline font-medium transition-all duration-300 hover:border-brand-pink hover:text-brand-pink-light"
          >
            Explore Skin Protocols
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-11 left-20 z-[2] flex items-center gap-[0.9rem] font-outfit text-[0.62rem] tracking-[0.22em] uppercase text-white/40 font-light max-lg:left-6">
        <span className="w-[52px] h-px bg-white/30 shrink-0" />
        <span>Scroll to Explore</span>
      </div>
    </section>
  )
}
