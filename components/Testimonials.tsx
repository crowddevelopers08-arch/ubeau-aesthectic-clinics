import FadeUp from './FadeUp'

const testimonials = [
  {
    quote: '"I recently got a Hydrafacial done at Ubeau Clinic, and I absolutely loved the experience! The staff was super professional and made me feel really comfortable throughout the session. The facial left my skin glowing, clean, and hydrated. The clinic is well-maintained, and the overall vibe is very relaxing. Definitely recommend it for anyone looking to pamper their skin!"',
    name: 'Deepsikha Mishra',
    meta: 'Hydrafacial · UBÊAU Clinic',
  },
  {
    quote: '"Ubeau — the name itself reflects uniqueness and expertise in skin care. I truly enjoyed the warm atmosphere and the exceptional treatment I received. Dr. Sampada is highly skilled and offers the best advice tailored to my skin\'s needs. I underwent the SkinPen treatment here, and it was completely painless, with every step of the procedure followed meticulously."',
    name: 'Srujani Nayak',
    meta: 'SkinPen Treatment · UBÊAU Clinic',
  },
  {
    quote: '"Wow! I visited the clinic today and it was so soothing. I got a very positive vibe from there. The hospitality was top notch! The ambience, the counselling was splendid and up to the mark! People of Odisha will now be getting hands on the world class products and treatments. Do pay a visit and you won\'t regret."',
    name: 'Mahadev Mohapatra',
    meta: 'UBÊAU Clinic · Bhubaneswar',
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
