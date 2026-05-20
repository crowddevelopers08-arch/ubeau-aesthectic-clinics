import Image from 'next/image'
import Link from 'next/link'

const protocols = [
  {
    num: '01',
    category: 'Pigmentation Control',
    name: 'UBÊAU Bright Skin & Pigmentation Control Protocol',
    tagline: 'Heal the skin. Restore confidence.',
    image:
      'https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&q=90&auto=format&fit=crop&crop=faces,top',
    alt: 'Bright Skin and Pigmentation Control Protocol',
    desc: 'This advanced pigmentation correction protocol treats uneven skin tone, tanning, dark spots, dullness and melanin imbalance. The treatment works by resurfacing damaged layers, improving skin clarity, and restoring radiance for brighter and healthier-looking skin.',
    idealFor: [
      'Pigmentation and dark spots',
      'Sun damage and tanning',
      'Dull and uneven complexion',
    ],
    benefits: [
      'Improves skin brightness',
      'Targets stubborn pigmentation',
      'Refreshes the skin tone',
      'Restores a healthy glow',
    ],
    cta: 'Schedule Your Pigmentation Consultation →',
  },
  {
    num: '02',
    category: 'Acne & Repair',
    name: 'UBÊAU Acne Control & Skin Repair Protocol',
    tagline: 'Clearer skin starts with deeper repair.',
    image:
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=90&auto=format&fit=crop&crop=faces,center',
    alt: 'Acne Control and Skin Repair Protocol',
    desc: 'The main treatment emphasis of this protocol is active acne treatment, scar correction, and skin resurfacing. Over time, the treatment benefits skin by reducing inflammation, regulating sebum production, clearing blocked pores, and promoting skin turnover, resulting in better skin condition.',
    idealFor: [
      'Acne-prone skin',
      'Post-acne scars and marks',
      'Oily and congested skin',
      'Uneven texture',
    ],
    benefits: [
      'Controls active acne breakouts',
      'Reduces post-acne pigmentation',
      'Improves skin texture',
      'Supports a healthier skin barrier',
    ],
    cta: 'Begin Your Acne Recovery Journey →',
  },
  {
    num: '03',
    category: 'Heal & Restore',
    name: 'UBÊAU Repair & Heal Protocol',
    tagline: 'If your skin is in need of a break, give it one.',
    image:
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=90&auto=format&fit=crop&crop=faces,center',
    alt: 'Repair and Heal Protocol',
    desc: 'The UBÊAU Repair & Heal Protocol is designed for inflamed, sensitive, dehydrated, or compromised skin. The treatment uses medicated facials and barrier-repair therapies to soothe irritation, replenish skin moisture, and fortify waning skin strength.',
    idealFor: [
      'Sensitive skin',
      'Redness and irritation',
      'Damaged skin barrier',
      'Stressed and dehydrated skin',
    ],
    benefits: [
      'Calms inflammation',
      'Restores skin barrier function',
      'Deeply hydrates skin',
      'Improves skin resilience',
    ],
    cta: 'Repair Your Skin Barrier →',
  },
]

export default function Protocols() {
  return (
    <div id="protocols" className="bg-brand-black px-20 py-32 max-lg:px-6 max-lg:py-20">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-[26px] h-px bg-brand-pink shrink-0" />
        <span className="font-outfit text-[0.65rem] tracking-[0.34em] uppercase text-brand-pink font-medium">
          Our Signature Skin Protocols
        </span>
      </div>
      <h2 className="font-cormorant text-[clamp(2.2rem,3.5vw,3.6rem)] font-light leading-[1.15] text-white mb-0">
        Treatments Crafted for{' '}
        <em className="italic text-brand-pink-light">Lasting Results</em>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[4px] mt-16">
        {protocols.map((p) => (
          <div
            key={p.num}
            className="group relative overflow-hidden min-h-[580px] cursor-pointer"
          >
            {/* Background image */}
            <Image
              src={p.image}
              alt={p.alt}
              fill
              className="object-cover object-center brightness-[.6] group-hover:brightness-[.45] transition-transform duration-[8000ms] ease-in-out group-hover:scale-[1.07]"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/[0.98] via-[#0a0a0a]/10 to-transparent transition-all duration-500 group-hover:from-[#0a0a0a]" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-10">
              <div className="font-cormorant text-[4.5rem] font-light leading-none mb-[-0.2rem]" style={{ color: 'rgba(236,72,153,0.12)' }}>
                {p.num}
              </div>
              <p className="font-outfit text-[0.58rem] tracking-[0.26em] uppercase text-brand-pink font-medium mb-[0.65rem]">
                {p.category}
              </p>
              <h3 className="font-cormorant text-[1.55rem] font-normal text-white leading-[1.22] mb-[0.45rem]">
                {p.name}
              </h3>
              <p className="font-cormorant text-[0.82rem] italic text-brand-pink-light font-light opacity-85">
                {p.tagline}
              </p>

              {/* Expandable on hover */}
              <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <p className="font-outfit text-[0.8rem] font-light leading-[1.85] text-white/65 mt-[1.1rem] mb-[0.9rem]">
                  {p.desc}
                </p>

                <p className="font-outfit text-[0.58rem] tracking-[0.22em] uppercase text-brand-pink font-medium mb-[0.45rem] mt-[0.85rem]">
                  Ideal For
                </p>
                <ul className="list-none flex flex-col gap-[0.3rem]">
                  {p.idealFor.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-[0.55rem] font-outfit text-[0.74rem] text-white/52 font-light"
                    >
                      <span className="w-1 h-1 bg-brand-pink rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="font-outfit text-[0.58rem] tracking-[0.22em] uppercase text-brand-pink font-medium mb-[0.45rem] mt-[0.85rem]">
                  Benefits
                </p>
                <ul className="list-none flex flex-col gap-[0.3rem]">
                  {p.benefits.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-[0.55rem] font-outfit text-[0.74rem] text-white/52 font-light"
                    >
                      <span className="w-1 h-1 bg-brand-pink rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="tel:7340020073"
                  className="inline-block mt-[1.4rem] font-outfit text-[0.65rem] tracking-[0.18em] uppercase text-brand-pink border-b border-brand-pink pb-[2px] no-underline font-medium transition-colors duration-300 hover:text-brand-pink-light hover:border-brand-pink-light"
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
