import FadeUp from './FadeUp'

const testimonials = [
  {
    quote:
      '"My pigmentation has reduced dramatically after just three sessions. The team at UBÊAU is incredibly professional — I\'ve never felt more confident in my skin."',
    name: 'Priya M.',
    meta: 'Bright Skin & Pigmentation Protocol · Bhubaneswar',
  },
  {
    quote:
      '"After years of struggling with acne scars, the UBÊAU Acne Control Protocol gave me results I genuinely didn\'t think were possible. Absolutely transformed."',
    name: 'Rohan D.',
    meta: 'Acne Control & Skin Repair Protocol · Cuttack',
  },
  {
    quote:
      '"The luxury experience combined with genuinely effective treatments sets UBÊAU apart. My skin has never felt so hydrated and healthy. This is real skincare."',
    name: 'Sneha R.',
    meta: 'Repair & Heal Protocol · Bhubaneswar',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-brand-black px-20 py-32 max-lg:px-6 max-lg:py-20">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-[26px] h-px bg-brand-pink shrink-0" />
        <span className="font-outfit text-[0.65rem] tracking-[0.34em] uppercase text-brand-pink font-medium">
          What Our Clients Say
        </span>
      </div>
      <h2 className="font-cormorant text-[clamp(2.2rem,3.5vw,3.6rem)] font-light leading-[1.15] text-white mb-16">
        Stories of <em className="italic text-brand-pink-light">Transformation</em>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[4px]">
        {testimonials.map((t, i) => (
          <FadeUp key={i} delay={i * 120}>
            <div className="group bg-white/[0.03] border border-brand-green/10 p-[2.6rem] transition-all duration-350 hover:border-brand-pink/28 hover:bg-brand-pink/4 h-full max-lg:p-8">
              <div className="text-brand-pink text-[0.88rem] tracking-[0.1em] mb-[1.4rem]">
                ★★★★★
              </div>
              <p className="font-cormorant text-[1.1rem] font-light italic leading-[1.78] text-white/76 mb-[1.6rem]">
                {t.quote}
              </p>
              <div className="w-[22px] h-px bg-brand-pink/50 mb-[1.2rem]" />
              <p className="font-outfit text-[0.72rem] tracking-[0.18em] uppercase text-brand-pink font-medium mb-[0.3rem]">
                {t.name}
              </p>
              <p className="font-outfit text-[0.68rem] text-white/30 font-light">
                {t.meta}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
