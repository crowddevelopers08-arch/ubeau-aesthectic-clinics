import FadeUp from './FadeUp'

const steps = [
  {
    num: '1',
    title: 'Detailed Skin Consultation',
    desc: 'A thorough one-on-one consultation to understand your skin history, concerns, lifestyle, and long-term transformation goals.',
  },
  {
    num: '2',
    title: 'Advanced Skin Analysis',
    desc: 'State-of-the-art analysis to assess your skin at a cellular level and accurately identify underlying conditions.',
  },
  {
    num: '3',
    title: 'Customised Protocol Planning',
    desc: 'A fully personalised protocol designed around your unique skin type, condition, and transformation goals.',
  },
  {
    num: '4',
    title: 'Targeted Treatments & Guided Aftercare',
    desc: 'Expert-delivered treatments with comprehensive guided aftercare to maximise and sustain your results.',
  },
]

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden px-20 py-32 max-lg:px-6 max-lg:py-20"
      style={{
        background: 'linear-gradient(135deg, #fff0f7 0%, #f0f7ee 100%)',
      }}
    >
      {/* Decorative circles */}
      <div className="absolute top-[-180px] right-[-180px] w-[520px] h-[520px] rounded-full border border-brand-pink/7 pointer-events-none" />
      <div className="absolute bottom-[-160px] left-[-160px] w-[400px] h-[400px] rounded-full border border-brand-green/12 pointer-events-none" />

      {/* Header */}
      <div className="text-center relative z-[1]">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-[26px] h-px bg-brand-pink shrink-0" />
          <span className="font-outfit text-[0.65rem] tracking-[0.34em] uppercase text-brand-pink font-medium">
            Consultation Process
          </span>
          <span className="w-[26px] h-px bg-brand-pink shrink-0" />
        </div>
        <h2 className="font-cormorant text-[clamp(2.2rem,3.5vw,3.6rem)] font-light leading-[1.15] text-brand-black">
          Your Skin Journey at{' '}
          <em className="italic text-brand-pink">UBÊAU</em>
        </h2>
      </div>

      {/* Steps */}
      <div className="relative z-[1] mt-20 max-lg:mt-12">
        {/* Connecting line — desktop only */}
        <div className="hidden lg:block absolute top-[1.35rem] left-[12.5%] right-[12.5%] h-px bg-brand-pink/20 z-0" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 max-lg:gap-10">
          {steps.map((step, i) => (
            <FadeUp key={i} delay={i * 120} className="relative z-[1]">
              <div className="text-center px-8 max-lg:px-0">
                <div className="w-[46px] h-[46px] rounded-full border-[1.5px] border-brand-pink flex items-center justify-center mx-auto mb-7 bg-white relative z-[2]">
                  <span className="font-cormorant text-[1.15rem] font-normal text-brand-pink">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-cormorant text-[1.18rem] font-normal text-brand-black leading-[1.3] mb-3">
                  {step.title}
                </h3>
                <p className="font-outfit text-[0.82rem] font-light leading-[1.78] text-brand-black/52">
                  {step.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
