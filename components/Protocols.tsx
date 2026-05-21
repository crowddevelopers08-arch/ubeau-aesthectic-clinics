import Image from 'next/image'
import Link from 'next/link'

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
    <div id="protocols" className="bg-brand-black px-4 sm:px-8 lg:px-20 py-14 sm:py-20 lg:py-32">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-6 sm:w-[26px] h-px bg-brand-pink shrink-0" />
        <span className="font-outfit text-[0.65rem] tracking-[0.28em] uppercase text-brand-pink font-medium">
          Our Signature Skin Protocols
        </span>
      </div>
      <h2 className="font-outfit text-[clamp(1.8rem,3.5vw,3.6rem)] font-light leading-[1.15] text-white mb-10 sm:mb-16">
        Treatments Crafted for{' '}
        <em className="italic text-brand-pink-light">Lasting Results</em>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-[4px]">
        {protocols.map((p) => (
          <div
            key={p.num}
            className="group relative flex flex-col lg:block overflow-hidden lg:min-h-[600px] cursor-pointer"
          >
            {/* ── Image (desktop: fades out on hover) ── */}
            <div className="relative h-56 sm:h-64 lg:h-full lg:absolute lg:inset-0 overflow-hidden shrink-0">
              <Image
                src={p.image}
                alt={p.alt}
                fill
                className="object-cover object-center brightness-75 transition-all duration-700 ease-in-out lg:group-hover:opacity-0 lg:group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            {/* ── Permanent gradient so text is always readable ── */}
            <div className="hidden lg:block absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent pointer-events-none transition-opacity duration-700 group-hover:opacity-0" />

            {/* ── Solid bg that appears on desktop hover ── */}
            <div className="hidden lg:block absolute inset-0 bg-brand-black opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none" />

            {/* ── Pink accent top border on hover ── */}
            <div className="hidden lg:block absolute top-0 left-0 right-0 h-[3px] bg-brand-pink scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />

            {/* ── Content ── */}
            <div className="flex-1 bg-brand-black p-5 sm:p-7 lg:bg-transparent lg:absolute lg:inset-0 lg:p-10 lg:flex lg:flex-col lg:justify-end relative z-[1]">

              {/* Always-visible header */}
              <div>
                <div
                  className="font-outfit text-[2.8rem] lg:text-[4rem] font-light leading-none mb-1 transition-all duration-500 lg:group-hover:text-[2.5rem] lg:group-hover:mb-3"
                  style={{ color: 'rgba(236,72,153,0.22)' }}
                >
                  {p.num}
                </div>
                <p className="font-outfit text-[0.62rem] tracking-[0.24em] uppercase text-brand-pink font-medium mb-2">
                  {p.category}
                </p>
                <h3 className="font-outfit text-[1.1rem] sm:text-[1.25rem] lg:text-[1.4rem] font-semibold text-white leading-[1.25] mb-2">
                  {p.name}
                </h3>
                <p className="font-outfit text-sm italic text-brand-pink-light font-light">
                  {p.tagline}
                </p>
              </div>

              {/* Expanded detail — always visible on mobile, revealed on desktop hover */}
              <div className="overflow-hidden transition-all duration-500 ease-in-out mt-4 lg:mt-0 lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-[700px] lg:group-hover:opacity-100 lg:group-hover:mt-5">
                <p className="font-outfit text-[0.84rem] font-light leading-[1.85] text-white/90 mb-4">
                  {p.desc}
                </p>

                <p className="font-outfit text-[0.6rem] tracking-[0.22em] uppercase text-brand-pink font-semibold mb-2">
                  Ideal For
                </p>
                <ul className="list-none flex flex-col gap-1.5 mb-4">
                  {p.idealFor.map((item) => (
                    <li key={item} className="flex items-center gap-2 font-outfit text-[0.8rem] text-white/88 font-light">
                      <span className="w-1.5 h-1.5 bg-brand-pink rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="font-outfit text-[0.6rem] tracking-[0.22em] uppercase text-brand-pink font-semibold mb-2">
                  Benefits
                </p>
                <ul className="list-none flex flex-col gap-1.5 mb-5">
                  {p.benefits.map((item) => (
                    <li key={item} className="flex items-center gap-2 font-outfit text-[0.8rem] text-white/88 font-light">
                      <span className="w-1.5 h-1.5 bg-brand-pink rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#consultation-form"
                  className="inline-block font-outfit text-[0.68rem] tracking-[0.18em] uppercase text-brand-pink border-b border-brand-pink pb-[2px] no-underline font-medium transition-colors duration-300 hover:text-brand-pink-light hover:border-brand-pink-light"
                >
                  {p.cta}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
