import { SectionLabel } from "./section-label"

const steps = [
  { step: "01", title: "Purchase Your 24-Hour Skin Blueprint™", desc: "Secure your Founding Client spot at ₹999." },
  { step: "02", title: "Complete The Detailed Skin Assessment Questionnaire", desc: "Answer questions about your skin type, concerns, lifestyle, budget, and goals." },
  { step: "03", title: "Dr. Sampada Personally Reviews Your Responses", desc: "Using her clinic-inspired assessment process developed through treating 4,000+ patients." },
  { step: "04", title: "Receive Your Personalized Skin Blueprint Within 24 Hours", desc: "Delivered straight to your inbox as a comprehensive PDF roadmap." },
  { step: "05", title: "Implement Your New Routine With Confidence", desc: "Follow your personalized plan with WhatsApp support available for guidance." },
]

export function HowItWorksSection() {
  return (
    <section className="py-10 px-5 bg-[#0e1118]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <SectionLabel>Simple Process</SectionLabel>
          <h2 className="text-2xl md:text-4xl font-bold text-[#f2f0eb]">How It Works</h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-10 bottom-10 w-px bg-[#be852d]/20 hidden md:block" />
          <div className="space-y-5">
            {steps.map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#be852d] text-[#080b12] font-bold text-sm flex items-center justify-center shadow-[0_0_20px_rgba(245,194,0,0.3)] z-10">
                  {item.step}
                </div>
                <div className="pt-2 pb-4">
                  <h3 className="text-[#f2f0eb] font-bold text-base md:text-lg mb-1">{item.title}</h3>
                  <p className="text-[#8a8a8a] text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
