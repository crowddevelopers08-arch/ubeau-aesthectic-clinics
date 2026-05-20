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
    <section id="why" className="bg-white px-20 py-32 max-lg:px-6 max-lg:py-20">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-[26px] h-px bg-brand-pink shrink-0" />
        <span className="font-outfit text-[0.65rem] tracking-[0.34em] uppercase text-brand-pink font-medium">
          Why Choose UBÊAU
        </span>
      </div>
      <h2 className="font-cormorant text-[clamp(2.2rem,3.5vw,3.6rem)] font-light leading-[1.15] text-brand-black mb-16">
        Where <em className="italic text-brand-pink">Science</em> Meets Luxury
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[4px]">
        {cards.map((card, i) => (
          <FadeUp key={i} delay={i * 120}>
            <div className="group relative overflow-hidden bg-white p-[3.2rem] border border-brand-green/40 transition-all duration-400 hover:bg-[#fdf4f9] hover:border-brand-pink/18 cursor-default max-lg:p-8">
              {/* Animated top border */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-pink scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
              <p className="font-outfit text-[0.58rem] tracking-[0.3em] uppercase text-brand-pink font-medium mb-[1.3rem]">
                {card.cat}
              </p>
              <h3 className="font-cormorant text-[1.6rem] font-normal text-brand-black leading-[1.28] mb-[0.9rem]">
                {card.title}
              </h3>
              <p className="font-outfit text-[0.88rem] font-light leading-[1.95] text-brand-black/58">
                {card.desc}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
