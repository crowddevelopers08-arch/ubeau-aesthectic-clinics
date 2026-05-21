import Image from 'next/image'

export default function Approach() {
  return (
    <div id="approach" className="grid grid-cols-1 lg:grid-cols-2 items-stretch bg-[#fdf8f0]">
      <div className="flex flex-col justify-center px-4 sm:px-8 lg:px-20 py-14 sm:py-20 lg:py-32">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-6 sm:w-[26px] h-px bg-brand-pink shrink-0" />
          <span className="font-outfit text-[0.65rem] tracking-[0.28em] uppercase text-brand-pink font-medium">
            The UBÊAU Approach to Skin Health
          </span>
        </div>
        <h2 className="font-outfit text-[clamp(1.8rem,3.5vw,3.6rem)] font-light leading-[1.15] text-brand-black mb-6 sm:mb-8">
          The UBÊAU Approach to <em className="italic text-brand-pink">Skin Health</em>
        </h2>

        <p className="font-outfit text-sm sm:text-[0.95rem] font-light leading-[1.85] sm:leading-[1.95] text-brand-black/80">
          Your skin is more than appearance. It&apos;s a sign of your health,
          lifestyle, stress and ageing.
        </p>
        <p className="font-outfit text-sm sm:text-[0.95rem] font-light leading-[1.85] sm:leading-[1.95] text-brand-black/80 mt-4">
          At UBÊAU, we focus on corrective and restorative skin treatments that
          address the root cause instead of temporary fixes. Each protocol is
          tailored based on detailed skin analysis to support skin quality,
          texture, tone, hydration and long-term skin resilience.
        </p>
        <p className="font-outfit text-sm sm:text-[0.95rem] font-light leading-[1.85] sm:leading-[1.95] text-brand-black/80 mt-4">
          From pigmentation to acne, dullness to sensitivity, early signs of
          ageing to uneven texture, our protocols are formulated to provide
          reliable and lasting results.
        </p>
      </div>

      <div className="group relative min-h-75 sm:min-h-105 lg:min-h-155 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1000&q=90&auto=format&fit=crop&crop=faces,center"
          alt="UBÊAU skin care specialist treatment"
          fill
          className="object-cover object-[center_top] transition-transform duration-7000 group-hover:scale-[1.04]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div
          className="absolute inset-0 hidden lg:block"
          style={{ background: 'linear-gradient(to right, #fdf8f0 0%, transparent 25%)' }}
        />
        {/* UBÊAU Aesthetic Clinic badge */}
        <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-white/95 backdrop-blur-sm px-5 py-3">
          <p className="font-outfit text-[0.62rem] tracking-[0.22em] uppercase text-brand-pink font-medium">
            UBÊAU Aesthetic Clinic
          </p>
        </div>
      </div>
    </div>
  )
}
