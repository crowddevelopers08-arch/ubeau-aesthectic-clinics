import Image from "next/image"
import { HiCheckCircle, HiSparkles, HiShieldCheck } from "react-icons/hi2"
import { FaIndianRupeeSign } from "react-icons/fa6"
import { SectionLabel } from "./section-label"
import { CTAButton } from "./cta-button"

interface HeroSectionProps {
  onCTAClick: () => void
}

export function HeroSection({ onCTAClick }: HeroSectionProps) {
  return (
    <section className="relative px-5 pt-4 pb-7 text-center overflow-hidden md:pt-5 md:pb-8">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#be852d]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <SectionLabel>Dr. Sampada&apos;s 24-Hour Skin Blueprint™</SectionLabel>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[#f2f0eb]">
          Stop Guessing<br />
          <span className="text-[#be852d]">What Your Skin Needs.</span>
        </h1>

        <p className="text-base md:text-xl text-[#8a8a8a] leading-relaxed mb-5 max-w-5xl mx-auto">
          Get a Personalized Skin Blueprint Created by{" "}
          <strong className="text-[#f2f0eb]">Dr. Sampada Sethia</strong> in Just{" "}
          <strong className="text-[#be852d]">24 Hours.</strong> Discover exactly what products
          to use, what to avoid, and how to build a simple skincare routine tailored to your
          skin concerns, goals, and budget.
        </p>

        {/* <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto mb-5 rounded-full overflow-hidden border-4 border-[#be852d]/40 shadow-[0_0_60px_rgba(245,194,0,0.25)]">
          <Image
            src="/placeholder-user.jpg"
            alt="Dr. Sampada Sethia — Founder & Medical Director, UBÊAU Advanced Aesthetics"
            fill
            className="object-cover"
            priority
          />
        </div> */}

        {/* <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-5 text-xs md:text-sm text-[#8a8a8a]">
          {[
            "4,000+ Patients Treated",
            "10+ Years Experience",
            "Internationally Trained",
            "Founder, UBÊAU Advanced Aesthetics",
          ].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <HiCheckCircle className="w-4 h-4 text-[#be852d] flex-shrink-0" />
              {item}
            </span>
          ))}
        </div> */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-md md:max-w-3xl mx-auto mb-5">
          {[
            "Personally Reviewed by Dr. Sampada",
            "Customized for Your Skin Type",
            "Products Available in India",
            "Delivered Within 24 Hours",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 bg-[#0e1118] border border-[#be852d]/15 rounded-lg px-3 py-2.5 text-left"
            >
              <HiSparkles className="w-4 h-4 text-[#be852d] flex-shrink-0" />
              <span className="text-[#f2f0eb] text-xs leading-snug">{item}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="text-sm text-[#8a8a8a] line-through">Regular Value: ₹1,999</div>
          <div className="text-3xl font-bold text-[#be852d] flex items-center gap-1">
            <FaIndianRupeeSign className="w-6 h-6" />
            999
            <span className="text-base text-[#8a8a8a] font-normal ml-2">Founding Client Offer</span>
          </div>
          <CTAButton onClick={onCTAClick}>Get My Personalized Skin Blueprint</CTAButton>
        </div>
      </div>
    </section>
  )
}
