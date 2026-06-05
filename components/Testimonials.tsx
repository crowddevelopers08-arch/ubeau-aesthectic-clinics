'use client'
import { useState, useEffect, useCallback } from 'react'
import FadeUp from './FadeUp'

const testimonials = [
  {
    quote: 'I must say this place is the heaven for you if you love to take care of your skin. Here the staffs are so friendly specially Tina, sushree. And beauticians also so dedicated to their work, they take care of your skin so gentle way. And Doc. Rosalin she is so pure hearted person. She listens our concerns very carefully and according to our concern she always gives her best output. All the staffs including doctor are so humble and talented. Ambience is aesthetics. A must try place in Odisha. happy to be part here.',
    name: 'Swati Jena',
  },
  {
    quote: 'I had a wonderful experience at Ubeau. I had never done any skin related treatment or procedure before and was little nervous about the procedure. I did a Spectra procedure for my under eye dark circles. And the way the doctor and the therapist handled every aspect, right from the consultations to the last stage of the procedure, was very smooth and very professionally sound. I was very content with the results of the procedure and am very thankful to the doctor and the concerned staff for taking extra care and efforts to make me comfortable during the procedures.',
    name: 'Shaswat Kumar Parida',
  },
  {
    quote: 'I recently visited UBÊAU for their Hydrafacial treatment and Lip Spectra, and I couldn\'t be more impressed! The Hydrafacial left my skin feeling deeply cleansed, hydrated, and glowing. It was gentle yet effective, perfect for rejuvenating dull skin. The Lip Spectra was a game changer for my lips which is soft, plump, and noticeably smoother. The team was professional, attentive, and made sure I was comfortable throughout. If you\'re looking for THE BEST skincare treatments with visible results, UBÊAU is the place to go.',
    name: 'Soumya Nayak',
  },
  {
    quote: 'As a busy professional, I usually don\'t have any time for skin care, but I was recommended to visit this clinic by a celebrity friend who is skincare aficionado. And to my surprise, I felt like I\'m in London, what a beautiful clinic Ubêau is and what an incredibly well behaved, well trained staff. I was so happy to get my consultation with Dr. Sampada and she helped me with a skin care plan. I love how my skin has improved over the time. I now use sunscreen religiously and I absolutely can\'t thank the entire team of Ubêau for always being there for me.',
    name: 'Devi Mukharjee',
  },
  {
    quote: 'I recently got a Hydrafacial done at Ubeau Clinic, and I absolutely loved the experience! The staff was super professional and made me feel really comfortable throughout the session. The facial left my skin glowing, clean, and hydrated. The clinic is well-maintained, and the overall vibe is very relaxing. Definitely recommend it for anyone looking to pamper their skin!',
    name: 'Deepsikha Mishra',
  },
  {
    quote: 'Ubeau — the name itself reflects uniqueness and expertise in skin care. I truly enjoyed the warm atmosphere and the exceptional treatment I received. Dr. Sampada is highly skilled and offers the best advice tailored to my skin\'s needs. I underwent the SkinPen treatment here, and it was completely painless, with every step of the procedure followed meticulously.',
    name: 'Srujani Nayak',
  },
  {
    quote: 'Wow! I visited the clinic today and it was so soothing. I got a very positive vibe from there. The hospitality was top notch! The ambience, the counselling was splendid and up to the mark! People of Odisha will now be getting hands on the world class products and treatments. Do pay a visit and you won\'t regret.',
    name: 'Mahadev Mohapatra',
  },
]

function GoogleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className="w-5 h-5 shrink-0"
      aria-label="Google Review"
    >
      <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.93 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  )
}

function TestimonialCard({ quote, name }: { quote: string; name: string }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white border border-brand-black/10 p-5 sm:p-8 lg:p-10 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <span className="text-brand-pink text-base tracking-wider">★★★★★</span>
        <div className="flex items-center gap-1.5">
          <GoogleIcon />
          <span className="font-outfit text-[0.6rem] tracking-widest uppercase text-brand-black">
            Google Review
          </span>
        </div>
      </div>

      <div className="flex-1 mb-4">
        <p className={`font-outfit text-[0.92rem] font-normal leading-[1.8] text-brand-black ${!expanded ? 'line-clamp-3' : ''}`}>
          &ldquo;{quote}&rdquo;
        </p>
        <button
          onClick={() => setExpanded(e => !e)}
          className="mt-2 font-outfit text-[0.68rem] tracking-[0.14em] uppercase text-brand-pink font-medium hover:text-brand-pink-dark transition-colors duration-200"
        >
          {expanded ? 'Read Less ↑' : 'Read More ↓'}
        </button>
      </div>

      <div className="w-5 h-px bg-brand-pink/60 mb-3" />
      <p className="font-outfit text-[0.72rem] tracking-[0.18em] uppercase text-brand-pink font-semibold">
        {name}
      </p>
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const total = testimonials.length
  const marqueeTestimonials = [...testimonials, ...testimonials]

  const next = useCallback(() => {
    setCurrent(i => (i + 1) % total)
  }, [total])

  const prev = () => setCurrent(i => (i - 1 + total) % total)

  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="bg-brand-off-white px-4 sm:px-8 lg:px-20 py-7 sm:py-14 lg:py-20">

      {/* ── Section header ── */}
      <FadeUp>
        <div className="flex items-center gap-3 mb-4">
          <span className="w-6 sm:w-6.5 h-px bg-brand-pink shrink-0" />
          <span className="font-outfit text-[0.65rem] tracking-[0.28em] uppercase text-brand-pink font-medium">
            What Our Clients Say
          </span>
        </div>
        <h2 className="font-outfit text-[clamp(1.5rem,3vw,3.2rem)] font-normal leading-[1.15] text-brand-black mb-4 sm:mb-8">
          Stories of <em className="italic text-brand-pink">Transformation</em>
        </h2>
      </FadeUp>

      {/* ── Mobile carousel ── */}
      <FadeUp variant="fade" delay={150} className="lg:hidden">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="w-full shrink-0">
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
        </div>
      </FadeUp>

      {/* ── Desktop marquee ── */}
      <FadeUp variant="fade" delay={150} className="hidden lg:block">
        <div
          className="overflow-hidden"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 7%, black 93%, transparent)' }}
        >
          <div className="flex flex-nowrap w-max animate-marquee-left hover:[animation-play-state:paused]">
            {marqueeTestimonials.map((t, i) => (
              <div key={`${t.name}-${i}`} className="w-136 shrink-0 px-2">
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
        </div>
      </FadeUp>

      {/* ── Mobile controls ── */}
      <div className="flex items-center justify-between mt-5 lg:hidden">
        <div className="flex items-center gap-1.5 flex-wrap">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-5 h-1.5 bg-brand-pink'
                  : 'w-1.5 h-1.5 bg-brand-black/35 hover:bg-brand-pink'
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2 shrink-0">
          <button
            onClick={prev}
            aria-label="Previous review"
            className="w-10 h-10 border border-brand-black/40 flex items-center justify-center text-brand-black hover:border-brand-pink hover:text-brand-pink transition-all duration-300"
          >
            ←
          </button>
          <button
            onClick={next}
            aria-label="Next review"
            className="w-10 h-10 border border-brand-black/40 flex items-center justify-center text-brand-black hover:border-brand-pink hover:text-brand-pink transition-all duration-300"
          >
            →
          </button>
        </div>
      </div>

    </section>
  )
}
