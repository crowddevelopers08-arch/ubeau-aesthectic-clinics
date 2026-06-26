import { HiXCircle } from "react-icons/hi2"
import { SectionLabel } from "./section-label"

export function PainPointsSection() {
  return (
    <section className="py-8 px-5 bg-[#0e1118]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-7">
          <SectionLabel>Sound Familiar?</SectionLabel>
          <h2 className="text-2xl md:text-4xl font-bold text-[#f2f0eb]">Are You Tired Of...</h2>
        </div>

        <div className="grid gap-4">
          {[
            "Buying skincare products that don't work?",
            "Following influencer recommendations and seeing no results?",
            "Feeling confused by conflicting skincare advice?",
            "Spending thousands on products without knowing what's right for your skin?",
            "Looking at your skincare shelf and wondering what you should actually be using?",
            "Wanting clear, healthy skin but not knowing where to start?",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-4 bg-[#080b12] border border-red-500/15 rounded-xl px-5 py-4"
            >
              <HiXCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <span className="text-[#f2f0eb] text-sm md:text-base">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-7 text-center bg-[#080b12] border border-[#be852d]/20 rounded-2xl px-8 py-8">
          <p className="text-[#8a8a8a] mb-2 text-sm md:text-base">
            If you answered YES to any of these, you&apos;re not alone.
          </p>
          <p className="text-[#f2f0eb] font-semibold text-base md:text-lg mb-1">
            The biggest mistake most people make is buying products before understanding what
            their skin actually needs.
          </p>
          <p className="text-[#be852d] font-bold text-lg md:text-xl mt-4">
            You don&apos;t need more products.<br />
            <span className="text-[#f2f0eb]">You need the right plan.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
