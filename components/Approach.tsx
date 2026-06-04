import Image from 'next/image'

export default function Approach() {
  const imageSection = (
    <div className="group relative min-h-56 sm:min-h-72 lg:min-h-96 overflow-hidden">
      <Image
        src="/abbbc.jpg"
        alt="UBÊAU skin care specialist treatment"
        fill
        className="object-cover object-[center_top] transition-transform duration-7000 group-hover:scale-[1.04]"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div
        className="absolute inset-0 hidden lg:block"
        style={{ background: 'linear-gradient(to right, #ffefe1 0%, transparent 25%)' }}
      />
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-white/95 backdrop-blur-sm px-5 py-3">
        <p className="font-outfit text-[0.62rem] tracking-[0.22em] uppercase text-brand-pink font-medium">
          UBÊAU Aesthetic Clinic
        </p>
      </div>
    </div>
  )

  return (
    <div id="approach" className="grid grid-cols-1 lg:grid-cols-2 items-stretch bg-brand-off-white">
      <div className="flex flex-col justify-center px-4 sm:px-8 lg:px-20 py-6 sm:py-10 lg:py-14">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 sm:w-6.5 h-px bg-brand-pink shrink-0" />
            <span className="font-outfit text-[0.65rem] tracking-[0.28em] uppercase text-brand-pink font-medium">
              The UBÊAU Approach to Skin Health
            </span>
          </div>
          <h2 className="font-outfit text-[clamp(1.6rem,3vw,3.2rem)] font-normal leading-[1.15] text-brand-black mb-4 sm:mb-7">
            The UBÊAU Approach to <em className="italic text-brand-pink">Skin Health</em>
          </h2>
        </div>

        <div className="mb-5 lg:hidden">
          {imageSection}
        </div>

        <div>
          <p className="font-outfit text-sm sm:text-[0.95rem] font-normal leading-[1.85] sm:leading-[1.95] text-brand-black">
            Your skin is more than appearance. It&apos;s a sign of your health,
            lifestyle, stress and ageing.
          </p>
          <p className="font-outfit text-sm sm:text-[0.95rem] font-normal leading-[1.85] sm:leading-[1.95] text-brand-black mt-4">
            At UBÊAU, we focus on corrective and restorative skin treatments that
            address the root cause instead of temporary fixes. Each protocol is
            tailored based on detailed skin analysis to support skin quality,
            texture, tone, hydration and long-term skin resilience.
          </p>
          <p className="font-outfit text-sm sm:text-[0.95rem] font-normal leading-[1.85] sm:leading-[1.95] text-brand-black mt-4">
            From pigmentation to acne, dullness to sensitivity, early signs of
            ageing to uneven texture, our protocols are formulated to provide
            reliable and lasting results.
          </p>
        </div>
      </div>

      <div className="hidden lg:block">
        {imageSection}
      </div>
    </div>
  )
}
