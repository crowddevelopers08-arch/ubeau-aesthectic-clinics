import Image from "next/image"

export function FooterSection() {
  return (
    <footer className="border-t border-[#be852d]/10 bg-[#080b12] py-7 px-5 text-center">
      <div className="flex justify-center mb-3">
        <div className="rounded-xl px-4 py-2 inline-block">
          <Image
            src="/Screenshot.png"
            alt="UBÊAU Advanced Aesthetics"
            width={110}
            height={50}
            className="h-14 w-auto object-contain"
          />
        </div>
      </div>
      <p className="text-[#8a8a8a] text-xs mb-2">Where science, luxury, and personalized care meet.</p>
      <p className="text-[#8a8a8a] text-xs max-w-xl mx-auto leading-relaxed">
        The 24-Hour Skin Blueprint™ is a personalized skincare recommendation and educational
        service. It does not diagnose, treat, cure, or replace professional medical consultation.
        Results may vary depending on individual skin conditions and adherence to recommendations.
      </p>
      <p className="text-[#8a8a8a]/40 text-xs mt-4">
        © {new Date().getFullYear()} UBÊAU Advanced Aesthetics · Dr. Sampada Sethia
      </p>
    </footer>
  )
}
