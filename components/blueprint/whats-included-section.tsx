import { HiDocumentText, HiSparkles, HiCheck } from "react-icons/hi2"
import { RiWhatsappFill } from "react-icons/ri"
import { FaIndianRupeeSign } from "react-icons/fa6"
import { SectionLabel } from "./section-label"

export function WhatsIncludedSection() {
  return (
    <section className="py-10 px-5 bg-[#0e1118]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <SectionLabel>What You Receive</SectionLabel>
          <h2 className="text-2xl md:text-4xl font-bold text-[#f2f0eb]">What&apos;s Included</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#080b12] border border-[#be852d]/20 rounded-2xl p-7 hover:border-[#be852d]/50 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-[#be852d]/10 flex items-center justify-center mb-5 group-hover:bg-[#be852d]/20 transition-colors">
              <HiDocumentText className="w-6 h-6 text-[#be852d]" />
            </div>
            <h3 className="text-[#f2f0eb] font-bold text-lg mb-2">Personalized Skin Assessment</h3>
            <p className="text-[#8a8a8a] text-sm mb-4">Complete a detailed Skin Blueprint Questionnaire covering:</p>
            <ul className="space-y-2">
              {["Skin type & concerns", "Current skincare routine", "Lifestyle factors", "Previous product usage", "Skin goals", "Monthly skincare budget"].map((i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-[#f2f0eb]">
                  <HiCheck className="w-4 h-4 text-[#be852d] flex-shrink-0" /> {i}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#080b12] border border-[#be852d]/20 rounded-2xl p-7 hover:border-[#be852d]/50 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-[#be852d]/10 flex items-center justify-center mb-5 group-hover:bg-[#be852d]/20 transition-colors">
              <HiSparkles className="w-6 h-6 text-[#be852d]" />
            </div>
            <h3 className="text-[#f2f0eb] font-bold text-lg mb-2">Customized Skin Blueprint PDF</h3>
            <p className="text-[#8a8a8a] text-sm mb-4">A clinic-inspired skincare roadmap created specifically for you:</p>
            <ul className="space-y-2">
              {["Morning Routine Protocol", "Evening Routine Protocol", "Product Layering Guide", "Ingredient Recommendations", "Lifestyle Recommendations", "Long-Term Skin Health Strategy"].map((i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-[#f2f0eb]">
                  <HiCheck className="w-4 h-4 text-[#be852d] flex-shrink-0" /> {i}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#080b12] border border-[#be852d]/20 rounded-2xl p-7 hover:border-[#be852d]/50 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-[#be852d]/10 flex items-center justify-center mb-5 group-hover:bg-[#be852d]/20 transition-colors">
              <FaIndianRupeeSign className="w-6 h-6 text-[#be852d]" />
            </div>
            <h3 className="text-[#f2f0eb] font-bold text-lg mb-2">Personalized Product Recommendation Sheet</h3>
            <p className="text-[#8a8a8a] text-sm mb-4">Recommendations based on your monthly budget:</p>
            <ul className="space-y-2">
              {["Under ₹2,000/month", "₹2,000–₹5,000/month", "₹5,000–₹10,000/month", "₹10,000+/month"].map((i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-[#f2f0eb]">
                  <HiCheck className="w-4 h-4 text-[#be852d] flex-shrink-0" /> {i}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-[#be852d] font-semibold">No sponsored recommendations. No influencer hype.</p>
          </div>

          <div className="bg-[#080b12] border border-[#be852d]/20 rounded-2xl p-7 hover:border-[#be852d]/50 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-[#be852d]/10 flex items-center justify-center mb-5 group-hover:bg-[#be852d]/20 transition-colors">
              <RiWhatsappFill className="w-6 h-6 text-[#be852d]" />
            </div>
            <h3 className="text-[#f2f0eb] font-bold text-lg mb-2">WhatsApp Support</h3>
            <p className="text-[#8a8a8a] text-sm leading-relaxed">
              Need help understanding your plan? Get WhatsApp support for implementation
              guidance and routine clarification after you receive your Blueprint.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
