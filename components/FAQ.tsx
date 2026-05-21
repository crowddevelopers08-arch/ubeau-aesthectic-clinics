'use client'
import { useState } from 'react'
import Image from 'next/image'

const faqs = [
  {
    q: 'Which skin concerns can UBÊAU treat?',
    a: 'We offer customised protocols for pigmentation, acne, acne scars, dull skin, tanning, sensitivity, dehydration, skin texture issues, and early signs of ageing.',
  },
  {
    q: 'Will the treatments help sensitive skin?',
    a: 'Yes. Our Repair & Heal Protocol is specially formulated for sensitive and compromised skin.',
  },
  {
    q: 'How many sessions are required?',
    a: 'The number of sessions depends on your skin condition, treatment plan, and goals. Your dermatologist will guide you during the consultation.',
  },
  {
    q: 'Are the treatments safe?',
    a: 'All protocols are developed with medically approved technologies and individual treatment planning in order to be safe and effective.',
  },
  {
    q: 'Will there be a downtime following treatment?',
    a: 'Depending on the protocol chosen, some treatments may have very little downtime. This will be discussed during your consultation.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <section id="faq" className="bg-[#fdf9fb] px-4 sm:px-8 lg:px-20 py-14 sm:py-20 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left — FAQ accordion */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 sm:w-[26px] h-px bg-brand-pink shrink-0" />
            <span className="font-outfit text-[0.65rem] tracking-[0.28em] uppercase text-brand-pink font-medium">
              FAQs
            </span>
          </div>
          <h2 className="font-outfit text-[clamp(1.8rem,3.5vw,3.6rem)] font-light leading-[1.15] text-brand-black mb-10 sm:mb-12">
            Frequently Asked <em className="italic text-brand-pink">Questions</em>
          </h2>

          <div>
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-brand-pink/12">
                <button
                  onClick={() => toggle(i)}
                  className={`w-full text-left py-5 sm:py-6 font-outfit text-base sm:text-[1.08rem] font-normal leading-[1.4] flex justify-between items-center gap-4 transition-colors duration-300 cursor-pointer bg-transparent border-0 outline-none ${
                    open === i ? 'text-brand-pink' : 'text-brand-black hover:text-brand-pink'
                  }`}
                >
                  <span>{faq.q}</span>
                  <span
                    className={`w-7 h-7 shrink-0 rounded-full border-[1.5px] flex items-center justify-center font-outfit font-light text-[1.2rem] leading-none transition-all duration-300 ${
                      open === i
                        ? 'bg-brand-pink text-white border-brand-pink rotate-45'
                        : 'border-brand-pink/50 text-brand-pink'
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-400 ease-in-out"
                  style={{ maxHeight: open === i ? '300px' : '0' }}
                >
                  <p className="font-outfit text-sm sm:text-[0.92rem] font-light leading-[1.95] text-brand-black/72 pb-5 sm:pb-6">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <div className="relative hidden lg:block h-[560px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=90&auto=format&fit=crop&crop=center"
            alt="Skincare consultation at UBÊAU clinic"
            fill
            className="object-cover object-center"
            sizes="50vw"
          />
          {/* subtle pink tint overlay */}
          <div className="absolute inset-0 bg-brand-pink/8" />
          {/* floating badge */}
          <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm px-6 py-4 max-w-[220px]">
            <p className="font-outfit text-[0.65rem] tracking-[0.2em] uppercase text-brand-pink font-medium mb-1">
              Expert Care
            </p>
            <p className="font-outfit text-[0.82rem] font-light text-brand-black/80 leading-[1.6]">
              Personalised skin solutions by qualified dermatologists
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
