import Image from 'next/image'
import FadeUp from './FadeUp'

const steps = [
  {
    title: 'Detailed Skin Consultation',
    image: '/jone.jpg',
    alt: 'Detailed skin consultation',
  },
  {
    title: 'Advanced Skin Analysis',
    image: '/jtwo.jpg',
    alt: 'Advanced skin analysis',
  },
  {
    title: 'Customised Protocol Planning',
    image: '/jthree.jpg',
    alt: 'Customised protocol planning',
  },
  {
    title: 'Targeted Treatments & Guided Aftercare',
    image: '/jfour.jpg',
    alt: 'Targeted skin treatment',
  },
]

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden px-4 sm:px-8 lg:px-20 py-10 sm:py-14 lg:py-20"
      style={{ background: 'linear-gradient(135deg, #ffefe1 0%, #f5dfc8 100%)' }}
    >
      {/* Section header */}
      <div className="text-center relative z-[1]">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-6 sm:w-6.5 h-px bg-brand-pink shrink-0" />
          <span className="font-outfit text-[0.65rem] tracking-[0.28em] uppercase text-brand-pink font-medium">
            Consultation Process
          </span>
          <span className="w-6 sm:w-6.5 h-px bg-brand-pink shrink-0" />
        </div>
        <h2 className="font-outfit text-[clamp(1.8rem,3.5vw,3.6rem)] font-normal leading-[1.15] text-brand-black">
          Your Skin Journey at <em className="italic text-brand-pink">UBÊAU</em>
        </h2>
      </div>

      <div className="relative z-[1] mt-8 sm:mt-10 lg:mt-12">

        {/* ── Animated passing line — desktop only ── */}
        {/* top-20 = 80px = centre of the 160px image circles */}
        <div className="hidden lg:block absolute top-20 left-[12.5%] right-[12.5%] h-px bg-brand-black/12 z-0 overflow-hidden">
          <div
            className="absolute inset-y-0 w-[28%] animate-line-travel"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #865821 50%, transparent 100%)',
            }}
          />
        </div>

        {/* Step cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-0">
          {steps.map((step, i) => (
            <FadeUp key={i} delay={i * 150} className="relative z-[1]">
              <div className="flex flex-col items-center text-center sm:px-4 lg:px-6">

                {/* Image circle — 160 × 160 px */}
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-brand-pink/35 mb-5 shrink-0 bg-brand-off-white shadow-sm">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    className="object-cover object-center"
                    sizes="160px"
                  />
                </div>

                <h3 className="font-outfit text-base sm:text-[1.1rem] font-semibold text-brand-black leading-[1.3]">
                  {step.title}
                </h3>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
