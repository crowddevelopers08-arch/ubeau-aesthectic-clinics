'use client'
import { useState } from 'react'

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
    <section id="faq" className="bg-[#fdf9fb] px-20 py-32 max-lg:px-6 max-lg:py-20">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-[26px] h-px bg-brand-pink shrink-0" />
        <span className="font-outfit text-[0.65rem] tracking-[0.34em] uppercase text-brand-pink font-medium">
          FAQs
        </span>
      </div>
      <h2 className="font-cormorant text-[clamp(2.2rem,3.5vw,3.6rem)] font-light leading-[1.15] text-brand-black mb-16">
        Frequently Asked <em className="italic text-brand-pink">Questions</em>
      </h2>

      <div className="max-w-[840px]">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-brand-pink/10">
            <button
              onClick={() => toggle(i)}
              className={`w-full text-left py-7 font-cormorant text-[1.22rem] font-normal leading-[1.4] flex justify-between items-center gap-6 transition-colors duration-300 cursor-pointer ${
                open === i ? 'text-brand-pink' : 'text-brand-black hover:text-brand-pink'
              }`}
            >
              {faq.q}
              <span
                className={`w-7 h-7 shrink-0 rounded-full border-[1.5px] border-brand-pink/38 flex items-center justify-center text-brand-pink font-outfit font-light text-[1.1rem] leading-none transition-all duration-300 ${
                  open === i
                    ? 'bg-brand-pink text-white border-brand-pink rotate-45'
                    : ''
                }`}
              >
                +
              </span>
            </button>
            <div
              className="overflow-hidden transition-all duration-[420ms] ease-in-out"
              style={{ maxHeight: open === i ? '300px' : '0' }}
            >
              <p className="font-outfit text-[0.9rem] font-light leading-[1.95] text-brand-black/58 pb-7">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
