import { HiStar, HiCheckCircle, HiClock } from "react-icons/hi2"
import { SectionLabel } from "./section-label"
import { CTAButton } from "./cta-button"

const inclusions = [
  { label: "Personalized Skin Assessment Review", bonus: false },
  { label: "Customized Skin Blueprint PDF", bonus: false },
  { label: "Product Recommendation Sheet", bonus: false },
  { label: "WhatsApp Implementation Support", bonus: false },
  { label: "BONUS: Skin Type Assessment Toolkit", bonus: true },
  { label: "BONUS: Top 10 Expert-Approved Products", bonus: true },
  { label: "BONUS: Common Skincare Mistakes Guide", bonus: true },
]

interface PricingSectionProps {
  onCTAClick: () => void
}

export function PricingSection({ onCTAClick }: PricingSectionProps) {
  return (
    <section className="py-10 px-5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#be852d]/6 rounded-full blur-[120px]" />
      </div>
      <div className="relative max-w-lg mx-auto">
        <div className="bg-[#0e1118] border border-[#be852d]/30 rounded-3xl p-7 text-center shadow-[0_0_80px_rgba(245,194,0,0.1)]">
          <SectionLabel>Founding Client Offer</SectionLabel>

          <div className="flex items-center justify-center gap-2 mb-1">
            {[...Array(5)].map((_, i) => (
              <HiStar key={i} className="w-4 h-4 text-[#be852d]" />
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#f2f0eb] mb-2">
            24-Hour Skin Blueprint™
          </h2>
          <p className="text-[#8a8a8a] text-sm mb-4">Personally crafted by Dr. Sampada Sethia</p>

          <div className="mb-4">
            <span className="text-sm text-[#8a8a8a] line-through block">Regular Value: ₹1,999</span>
            <div className="flex items-center justify-center gap-1 mt-2">
              <span className="text-5xl font-bold text-[#be852d]">₹999</span>
            </div>
            <span className="text-xs text-[#8a8a8a] mt-1 block">One-time payment · No subscription</span>
          </div>

          <div className="border-t border-[#be852d]/15 pt-4 mb-5 space-y-2 text-left">
            {inclusions.map(({ label, bonus }) => (
              <div key={label} className="flex items-center gap-2 text-sm">
                <HiCheckCircle className={`w-4 h-4 flex-shrink-0 ${bonus ? "text-[#be852d]" : "text-[#be852d]"}`} />
                <span className={bonus ? "text-[#be852d] font-medium" : "text-[#f2f0eb]"}>{label}</span>
              </div>
            ))}
          </div>

          <CTAButton onClick={onCTAClick}>
            Yes, I Want My Personalized Skin Blueprint
          </CTAButton>

          <p className="text-xs text-[#8a8a8a] mt-4 flex items-center justify-center gap-1.5">
            <HiClock className="w-4 h-4 text-[#be852d]" />
            Limited Founding Client Spots — Pricing Increases Once Filled
          </p>
        </div>
      </div>
    </section>
  )
}
