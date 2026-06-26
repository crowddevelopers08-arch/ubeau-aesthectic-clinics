import { HiSparkles } from "react-icons/hi2"
import { CTAButton } from "./cta-button"

interface FinalCTASectionProps {
  onCTAClick: () => void
}

export function FinalCTASection({ onCTAClick }: FinalCTASectionProps) {
  return (
    <section className="py-12 px-5 relative overflow-hidden text-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#be852d]/6 rounded-full blur-[120px]" />
      </div>
      <div className="relative max-w-2xl mx-auto">
        <HiSparkles className="w-8 h-8 text-[#be852d] mx-auto mb-4 opacity-80" />
        <h2 className="text-2xl md:text-4xl font-bold text-[#f2f0eb] mb-3">
          Imagine Knowing Exactly<br />
          <span className="text-[#be852d]">What Your Skin Needs.</span>
        </h2>
        <p className="text-[#8a8a8a] text-sm md:text-base leading-relaxed mb-2">
          No more confusion. No more trial and error. No more wasting money.
        </p>
        <p className="text-[#f2f0eb] text-sm md:text-base mb-6">
          Just a personalized skincare roadmap created by one of Eastern India&apos;s most
          trusted aesthetic medicine experts.
        </p>

        <div className="flex flex-col items-center gap-2">
          <div className="text-sm text-[#8a8a8a] line-through">Regular Value: ₹1,999</div>
          <div className="text-3xl font-bold text-[#be852d]">
            ₹999{" "}
            <span className="text-base font-normal text-[#8a8a8a]">Founding Client Offer</span>
          </div>
          <CTAButton onClick={onCTAClick}>Get Started Now</CTAButton>
        </div>
      </div>
    </section>
  )
}
