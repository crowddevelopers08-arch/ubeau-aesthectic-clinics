import Image from 'next/image'

const pills = [
  'Pigmentation',
  'Acne Control',
  'Skin Repair',
  'Anti-Ageing',
  'Sensitivity',
  'Resurfacing',
]

export default function Approach() {
  return (
    <div
      id="approach"
      className="grid grid-cols-1 lg:grid-cols-2 items-stretch bg-[#fdf4f9]"
    >
      {/* Text column */}
      <div className="flex flex-col justify-center px-20 py-32 max-lg:px-6 max-lg:py-20">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-[26px] h-px bg-brand-pink shrink-0" />
          <span className="font-outfit text-[0.65rem] tracking-[0.34em] uppercase text-brand-pink font-medium">
            The UBÊAU Approach to Skin Health
          </span>
        </div>

        <h2 className="font-cormorant text-[clamp(2.2rem,3.5vw,3.6rem)] font-light leading-[1.15] text-brand-black mb-6">
          Your Skin is More Than <em className="italic text-brand-pink">Appearance</em>
        </h2>

        <p className="font-outfit text-[0.95rem] font-light leading-[1.95] text-brand-black/60">
          Your skin is more than appearance. It&apos;s a sign of your health, lifestyle,
          stress and ageing.
        </p>
        <p className="font-outfit text-[0.95rem] font-light leading-[1.95] text-brand-black/60 mt-4">
          At UBÊAU, we focus on corrective and restorative skin treatments that
          address the root cause instead of temporary fixes. Each protocol is
          tailored based on detailed skin analysis to support skin quality,
          texture, tone, hydration and long-term skin resilience.
        </p>
        <p className="font-outfit text-[0.95rem] font-light leading-[1.95] text-brand-black/60 mt-4">
          From pigmentation to acne, dullness to sensitivity, early signs of
          ageing to uneven texture, our protocols are formulated to provide
          reliable and lasting results.
        </p>

        <div className="flex flex-wrap gap-[0.6rem] mt-10">
          {pills.map((pill) => (
            <span
              key={pill}
              className="font-outfit text-[0.65rem] tracking-[0.12em] uppercase px-5 py-2 border border-brand-pink/38 text-brand-pink bg-transparent transition-all duration-300 hover:bg-brand-pink hover:text-white cursor-default font-medium"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>

      {/* Image column */}
      <div className="group relative min-h-[620px] overflow-hidden max-lg:min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1000&q=90&auto=format&fit=crop&crop=faces,center"
          alt="UBÊAU skin care specialist treatment"
          fill
          className="object-cover object-[center_top] transition-transform duration-[7000ms] group-hover:scale-[1.04]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* Left blend gradient */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background: 'linear-gradient(to right, #fdf4f9 0%, transparent 25%)',
          }}
        />
      </div>
    </div>
  )
}
