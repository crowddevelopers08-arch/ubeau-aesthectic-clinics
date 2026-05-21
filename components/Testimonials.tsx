import FadeUp from './FadeUp'

const testimonials = [
  {
    quote: '"My pigmentation has reduced dramatically after just three sessions. The team at UBÊAU is incredibly professional — I\'ve never felt more confident in my skin."',
    name: 'Priya M.',
    meta: 'Bright Skin & Pigmentation Protocol · Bhubaneswar',
  },
  {
    quote: '"After years of struggling with acne scars, the UBÊAU Acne Control Protocol gave me results I genuinely didn\'t think were possible. Absolutely transformed."',
    name: 'Rohan D.',
    meta: 'Acne Control & Skin Repair Protocol · Cuttack',
  },
  {
    quote: '"The luxury experience combined with genuinely effective treatments sets UBÊAU apart. My skin has never felt so hydrated and healthy. This is real skincare."',
    name: 'Sneha R.',
    meta: 'Repair & Heal Protocol · Bhubaneswar',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-brand-black px-4 sm:px-8 lg:px-20 py-14 sm:py-20 lg:py-32">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-6 sm:w-[26px] h-px bg-brand-pink shrink-0" />
        <span className="font-outfit text-[0.65rem] tracking-[0.28em] uppercase text-brand-pink font-medium">
          What Our Clients Say
        </span>
      </div>
      <h2 className="font-outfit text-[clamp(1.8rem,3.5vw,3.6rem)] font-light leading-[1.15] text-white mb-10 sm:mb-16">
        Stories of <em className="italic text-brand-pink-light">Transformation</em>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-[4px]">
        {testimonials.map((t, i) => (
          <FadeUp key={i} delay={i * 120}>
            <div className="group bg-white/5 border border-white/10 p-6 sm:p-8 lg:p-[2.6rem] transition-all duration-300 hover:border-brand-pink/35 hover:bg-brand-pink/5 h-full">
              <div className="text-brand-pink text-base tracking-wider mb-5">
                ★★★★★
              </div>
              <p className="font-outfit text-[0.95rem] sm:text-[1.05rem] font-light italic leading-[1.78] text-white/88 mb-6">
                {t.quote}
              </p>
              <div className="w-5 h-px bg-brand-pink/60 mb-4" />
              <p className="font-outfit text-[0.72rem] tracking-[0.18em] uppercase text-brand-pink font-semibold mb-1">
                {t.name}
              </p>
              <p className="font-outfit text-[0.72rem] text-white/60 font-light">
                {t.meta}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
