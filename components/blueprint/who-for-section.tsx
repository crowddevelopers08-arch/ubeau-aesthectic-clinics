import { HiCheckCircle, HiXCircle } from "react-icons/hi2"
import { SectionLabel } from "./section-label"

export function WhoForSection() {
  return (
    <section className="py-10 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <SectionLabel>Perfect Fit</SectionLabel>
          <h2 className="text-2xl md:text-4xl font-bold text-[#f2f0eb]">Is This Right For You?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#0e1118] border border-[#be852d]/20 rounded-2xl p-7">
            <h3 className="text-[#be852d] font-bold text-lg mb-6 flex items-center gap-2">
              <HiCheckCircle className="w-5 h-5" /> This Is Perfect For
            </h3>
            <ul className="space-y-3">
              {[
                "Acne-Prone Skin",
                "Oily Skin",
                "Dry Skin",
                "Combination Skin",
                "Sensitive Skin",
                "Pigmentation Concerns",
                "Uneven Skin Tone",
                "Dull Skin",
                "Early Signs of Aging",
                "Anyone Confused About What Products To Use",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#f2f0eb] text-sm">
                  <HiCheckCircle className="w-4 h-4 text-[#be852d] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0e1118] border border-red-500/15 rounded-2xl p-7">
            <h3 className="text-red-400 font-bold text-lg mb-6 flex items-center gap-2">
              <HiXCircle className="w-5 h-5" /> This Is NOT For
            </h3>
            <ul className="space-y-3">
              {[
                "People looking for overnight miracles",
                "People unwilling to follow a skincare routine",
                "People seeking emergency or urgent medical treatment",
                "Individuals requiring diagnosis or treatment of serious medical skin conditions",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#8a8a8a] text-sm">
                  <HiXCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
