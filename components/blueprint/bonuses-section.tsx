import { HiGift } from "react-icons/hi2"
import { SectionLabel } from "./section-label"

const bonuses = [
  {
    num: "01",
    title: "Skin Type Assessment Toolkit",
    desc: "Understand your skin better and learn what may be affecting your results.",
  },
  {
    num: "02",
    title: "Top 10 Expert-Approved Skincare Products in India",
    desc: "A curated list of trusted skincare products selected based on effectiveness, quality, and clinical experience.",
  },
  {
    num: "03",
    title: "Common Skincare Mistakes Guide",
    desc: "Discover the hidden mistakes preventing most people from achieving healthy skin.",
  },
]

export function BonusesSection() {
  return (
    <section className="py-10 px-5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#be852d]/5 rounded-full blur-[100px]" />
      </div>
      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <SectionLabel>Free Bonuses</SectionLabel>
          <h2 className="text-2xl md:text-4xl font-bold text-[#f2f0eb]">
            Exclusive Bonuses Worth{" "}
            <span className="text-[#be852d]">₹2,000+</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {bonuses.map((bonus) => (
            <div
              key={bonus.num}
              className="relative bg-[#0e1118] border border-[#be852d]/20 rounded-2xl p-7 hover:border-[#be852d]/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <HiGift className="w-6 h-6 text-[#be852d]" />
                <span className="text-[#be852d]/30 font-bold text-4xl absolute top-5 right-6 select-none">
                  {bonus.num}
                </span>
              </div>
              <h3 className="text-[#f2f0eb] font-bold text-base mb-3">{bonus.title}</h3>
              <p className="text-[#8a8a8a] text-sm leading-relaxed">{bonus.desc}</p>
              <div className="mt-4 inline-block text-xs font-bold text-[#be852d] bg-[#be852d]/10 px-3 py-1 rounded-full">
                Free Bonus
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
