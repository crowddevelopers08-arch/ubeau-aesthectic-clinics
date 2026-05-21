import FadeUp from './FadeUp'

const steps = [
  { num: '1', title: 'Detailed Skin Consultation' },
  { num: '2', title: 'Advanced Skin Analysis' },
  { num: '3', title: 'Customised Protocol Planning' },
  { num: '4', title: 'Targeted Treatments & Guided Aftercare' },
]

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden px-4 sm:px-8 lg:px-20 py-14 sm:py-20 lg:py-32"
      style={{ background: 'linear-gradient(135deg, #fdf8f0 0%, #f5ede0 100%)' }}
    >
      <div className="absolute top-[-180px] right-[-180px] w-[520px] h-[520px] rounded-full border border-brand-pink/7 pointer-events-none" />
      <div className="absolute bottom-[-160px] left-[-160px] w-[400px] h-[400px] rounded-full border border-brand-green/12 pointer-events-none" />

      <div className="text-center relative z-[1]">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-6 sm:w-[26px] h-px bg-brand-pink shrink-0" />
          <span className="font-outfit text-[0.65rem] tracking-[0.28em] uppercase text-brand-pink font-medium">
            Consultation Process
          </span>
          <span className="w-6 sm:w-[26px] h-px bg-brand-pink shrink-0" />
        </div>
        <h2 className="font-outfit text-[clamp(1.8rem,3.5vw,3.6rem)] font-light leading-[1.15] text-brand-black">
          Your Skin Journey at <em className="italic text-brand-pink">UBÊAU</em>
        </h2>
      </div>

      <div className="relative z-[1] mt-12 sm:mt-16 lg:mt-20">
        {/* Connecting line — desktop only */}
        <div className="hidden lg:block absolute top-[1.35rem] left-[12.5%] right-[12.5%] h-px bg-brand-pink/25 z-0" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-0">
          {steps.map((step, i) => (
            <FadeUp key={i} delay={i * 120} className="relative z-[1]">
              <div className="flex flex-col items-center text-center sm:px-4 lg:px-8">
                <div className="w-[46px] h-[46px] rounded-full border-[1.5px] border-brand-pink flex items-center justify-center mb-5 sm:mb-7 bg-white relative z-[2] shrink-0">
                  <span className="font-outfit text-[1.1rem] font-semibold text-brand-pink">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-outfit text-base sm:text-[1.18rem] font-semibold text-brand-black leading-[1.3]">
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
