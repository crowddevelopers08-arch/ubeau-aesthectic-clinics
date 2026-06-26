import { HiCheckCircle } from "react-icons/hi2"
import { SectionLabel } from "./section-label"

export function IntroducingSection() {
  return (
    <section className="py-10 px-5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#be852d]/4 rounded-full blur-[100px]" />
      </div>
      <div className="relative max-w-3xl mx-auto text-center">
        <SectionLabel>The Solution</SectionLabel>
        <h2 className="text-2xl md:text-4xl font-bold text-[#f2f0eb] mb-3">
          Introducing Dr. Sampada&apos;s<br />
          <span className="text-[#be852d]">24-Hour Skin Blueprint™</span>
        </h2>
        <p className="text-[#8a8a8a] text-sm md:text-base leading-relaxed mb-6 max-w-2xl mx-auto">
          A personalized skincare roadmap designed specifically for <em>your</em> skin. Using a
          clinic-inspired assessment process developed through treating thousands of patients,
          Dr. Sampada personally reviews your skin concerns and creates a customized skincare
          plan tailored to your unique needs.
        </p>

        <div className="bg-[#0e1118] border border-[#be852d]/20 rounded-2xl px-8 py-8 text-left">
          <p className="text-[#be852d] font-bold text-center mb-6 text-sm tracking-widest uppercase">
            Within 24 Hours You&apos;ll Know:
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Which products are right for your skin",
              "Which products you should stop using",
              "The correct order to apply products",
              "Your ideal morning skincare routine",
              "Your ideal night skincare routine",
              "Which ingredients to prioritize",
              "Which ingredients to avoid",
              "How to stop wasting money on unnecessary products",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <HiCheckCircle className="w-5 h-5 text-[#be852d] flex-shrink-0 mt-0.5" />
                <span className="text-[#f2f0eb] text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
