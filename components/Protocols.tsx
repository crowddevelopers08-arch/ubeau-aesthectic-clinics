import Image from 'next/image'
import Link from 'next/link'
import FadeUp from './FadeUp'

const protocols = [
  {
    num: '01',
    category: 'Pigmentation Control',
    name: 'UBÊAU Bright Skin & Pigmentation Control Protocol',
    tagline: 'Heal the skin. Restore confidence.',
    image: '/pigmentation.jpg',
    alt: 'Bright Skin and Pigmentation Control Protocol',
    desc: 'This advanced pigmentation correction protocol treats uneven skin tone, tanning, dark spots, dullness and melanin imbalance. The treatment works by resurfacing damaged layers, improving skin clarity, and restoring radiance for brighter and healthier-looking skin.',
    idealFor: ['Pigmentation and dark spots', 'Sun damage and tanning', 'Dull and uneven complexion'],
    benefits: ['Improves skin brightness', 'Targets stubborn pigmentation', 'Refreshes the skin tone', 'Restores a healthy glow'],
    cta: 'Schedule Your Pigmentation Consultation →',
  },
  {
    num: '02',
    category: 'Acne & Repair',
    name: 'UBÊAU Acne Control & Skin Repair Protocol',
    tagline: 'Clearer skin starts with deeper repair.',
    image: '/acnep.webp',
    alt: 'Acne Control and Skin Repair Protocol',
    desc: 'The main treatment emphasis of this protocol is active acne treatment, scar correction, and skin resurfacing. Over time, the treatment benefits skin by reducing inflammation, regulating sebum production, clearing blocked pores, and promoting skin turnover, resulting in better skin condition.',
    idealFor: ['Acne-prone skin', 'Post-acne scars and marks', 'Oily and congested skin', 'Uneven texture'],
    benefits: ['Controls active acne breakouts', 'Reduces post-acne pigmentation', 'Improves skin texture', 'Supports a healthier skin barrier'],
    cta: 'Begin Your Acne Recovery Journey →',
  },
  {
    num: '03',
    category: 'Heal & Restore',
    name: 'UBÊAU Repair & Heal Protocol',
    tagline: 'If your skin is in need of a break, give it one.',
    image: '/heal.avif',
    alt: 'Repair and Heal Protocol',
    desc: 'The UBÊAU Repair & Heal Protocol is designed for inflamed, sensitive, dehydrated, or compromised skin. The treatment uses medicated facials and barrier-repair therapies to soothe irritation, replenish skin moisture, and fortify waning skin strength.',
    idealFor: ['Sensitive skin', 'Redness and irritation', 'Damaged skin barrier', 'Stressed and dehydrated skin'],
    benefits: ['Calms inflammation', 'Restores skin barrier function', 'Deeply hydrates skin', 'Improves skin resilience'],
    cta: 'Repair Your Skin Barrier →',
  },
]

export default function Protocols() {
  return (
    <div id="protocols" className="bg-brand-off-white py-7 sm:py-14 lg:py-20">

      {/* ── Section Header ── */}
      <FadeUp className="px-4 sm:px-8 lg:px-20 mb-5 sm:mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-6 sm:w-6.5 h-px bg-brand-pink shrink-0" />
          <span className="font-outfit text-[0.65rem] tracking-[0.28em] uppercase text-brand-pink font-medium">
            Our Signature Skin Protocols
          </span>
        </div>
        <h2 className="font-outfit text-[clamp(1.5rem,3vw,3.2rem)] font-normal leading-[1.15] text-brand-black">
          Treatments Crafted for{' '}
          <em className="italic text-brand-pink">Lasting Results</em>
        </h2>
      </FadeUp>

      {/* ── Protocol Rows ── */}
      <div className="flex flex-col">
        {protocols.map((p, i) => (
          <div
            key={p.num}
            className={`flex flex-col border-t border-brand-black/10 ${
              i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            }`}
          >

            {/* ── Content Side ── */}
            <div className="w-full lg:w-1/2 px-4 sm:px-8 lg:px-20 py-5 sm:py-8 lg:py-10 flex flex-col justify-center">
              <FadeUp variant={i % 2 === 0 ? 'left' : 'right'} delay={0}>

                <p className="font-outfit text-[0.62rem] tracking-[0.24em] uppercase text-brand-pink font-medium mb-2">
                  {p.category}
                </p>
                <h3 className="font-subheading text-[1.3rem] sm:text-[1.55rem] lg:text-[1.75rem] font-semibold text-brand-black leading-tight mb-3">
                  {p.name}
                </h3>
                <p className="font-outfit text-sm italic text-brand-pink font-normal mb-5">
                  {p.tagline}
                </p>

                <span className="w-10 h-px bg-brand-pink mb-5 block" />

                <p className="font-outfit text-[0.84rem] font-normal leading-[1.9] text-brand-black mb-4">
                  {p.desc}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div>
                    <p className="font-outfit text-[0.6rem] tracking-[0.22em] uppercase text-brand-pink font-semibold mb-3">
                      Ideal For
                    </p>
                    <ul className="list-none flex flex-col gap-2">
                      {p.idealFor.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2.5 font-outfit text-[0.8rem] text-brand-black font-normal"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-pink shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-outfit text-[0.6rem] tracking-[0.22em] uppercase text-brand-pink font-semibold mb-3">
                      Benefits
                    </p>
                    <ul className="list-none flex flex-col gap-2">
                      {p.benefits.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2.5 font-outfit text-[0.8rem] text-brand-black font-normal"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-pink shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  href="#consultation-form"
                  className="inline-block font-outfit text-[0.68rem] tracking-[0.18em] uppercase text-brand-pink border-b border-brand-pink pb-0.5 no-underline font-medium transition-colors duration-300 hover:text-brand-pink-dark hover:border-brand-pink-dark w-fit"
                >
                  {p.cta}
                </Link>

              </FadeUp>
            </div>

            {/* ── Image Side ── */}
            <FadeUp
              variant="scale"
              delay={200}
              className="w-full lg:w-1/2 order-first lg:order-0"
            >
              <div className="relative min-h-64 sm:min-h-52 lg:min-h-72 h-full overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  className="object-cover object-center brightness-[0.88] transition-transform duration-700 ease-in-out hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className={`absolute inset-0 ${
                    i % 2 === 0
                      ? 'bg-linear-to-l from-transparent via-transparent to-brand-off-white/50'
                      : 'bg-linear-to-r from-transparent via-transparent to-brand-off-white/50'
                  }`}
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-brand-off-white to-transparent lg:hidden" />
              </div>
            </FadeUp>

          </div>
        ))}

        <div className="border-t border-brand-black/10" />
      </div>
    </div>
  )
}
