import FadeUp from './FadeUp'

const cards = [
  {
    cat: '◈ Personalised',
    title: 'Personalised Skin Protocols',
    desc: 'All skin types are unique. The treatments are tailored to your skin condition, lifestyle, concerns, and long-term goals.',
  },
  {
    cat: '◈ Technology',
    title: 'Advanced Technology',
    desc: 'We use world-renowned skincare technologies and clinically proven treatments for visible results.',
  },
  {
    cat: '◈ Cellular',
    title: 'Cellular-Level Treatment Approach',
    desc: 'Our protocols are aimed not just at surface-level, temporary improvements but at correcting and restoring skin health at a deeper level.',
  },
  {
    cat: '◈ Experience',
    title: 'Luxury Clinical Experience',
    desc: 'Enjoy top-tier healthcare in a luxurious, serene, and patient-centric setting.',
  },
]

export default function WhyChoose() {
  return (
    <section id="why" className="bg-white px-4 sm:px-8 lg:px-20 py-14 sm:py-20 lg:py-32">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-6 sm:w-[26px] h-px bg-brand-pink shrink-0" />
        <span className="font-outfit text-[0.65rem] tracking-[0.28em] uppercase text-brand-pink font-medium">
          Why Choose UBÊAU
        </span>
      </div>
      <h2 className="font-outfit text-[clamp(1.8rem,3.5vw,3.6rem)] font-light leading-[1.15] text-brand-black mb-10 sm:mb-16">
        Why Choose <em className="italic text-brand-pink">UBÊAU</em>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-1">
        {cards.map((card, i) => (
          <FadeUp key={i} delay={i * 120}>
            <div className="group relative overflow-hidden bg-white p-7 sm:p-10 lg:p-[3.2rem] border border-brand-green/40 transition-all duration-300 hover:bg-[#fdf6e8] hover:border-brand-pink/20 cursor-default h-full">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-pink scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
              <p className="font-outfit text-[0.62rem] tracking-[0.26em] uppercase text-brand-pink font-semibold mb-4">
                {card.cat}
              </p>
              <h3 className="font-outfit text-[1.25rem] sm:text-[1.45rem] lg:text-[1.6rem] font-semibold text-brand-black leading-[1.28] mb-3 sm:mb-4">
                {card.title}
              </h3>
              <p className="font-outfit text-sm sm:text-[0.92rem] font-light leading-[1.85] text-brand-black/75">
                {card.desc}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
