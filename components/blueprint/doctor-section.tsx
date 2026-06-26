import { HiCheckCircle } from "react-icons/hi2"
import { SectionLabel } from "./section-label"

const credentials = [
  "MBBS",
  "International Fellowship in Facial Aesthetic & Anti-Ageing Medicine (Germany)",
  "Fellow, International Academy of Advanced Aesthetics Training (Sweden)",
  "Member, Indian Society of Aesthetic Medicine",
  "Advanced International Training in Regenerative Medicine",
  "10+ Years Clinical Experience · 4,000+ Patients Treated",
]

export function DoctorSection() {
  return (
    <section className="py-10 px-5 bg-[#0e1118]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-7">
          <SectionLabel>Your Skin Expert</SectionLabel>
          <h2 className="text-2xl md:text-4xl font-bold text-[#f2f0eb]">Meet Dr. Sampada Sethia</h2>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex-1">
            <p className="text-[#8a8a8a] text-sm md:text-base leading-relaxed mb-4">
              Dr. Sampada Sethia is an aesthetic physician, entrepreneur, educator, and
              internationally trained skincare expert with more than{" "}
              <strong className="text-[#f2f0eb]">10 years of experience</strong> in aesthetic
              medicine, anti-ageing medicine, wellness, and regenerative therapies.
            </p>
            <p className="text-[#8a8a8a] text-sm md:text-base leading-relaxed mb-4">
              As the founder of UBÊAU Advanced Aesthetics,{" "}
              <strong className="text-[#f2f0eb]">
                Odisha&apos;s first and leading luxury skincare, aesthetics, and wellness clinic
              </strong>
              , she has personally treated over{" "}
              <strong className="text-[#be852d]">4,000 patients</strong> and helped thousands
              achieve healthier, more confident skin through personalized treatment protocols.
            </p>

            <div className="grid sm:grid-cols-2 gap-2 mb-5">
              {credentials.map((cred) => (
                <div key={cred} className="flex items-start gap-2.5">
                  <HiCheckCircle className="w-4 h-4 text-[#be852d] flex-shrink-0 mt-0.5" />
                  <span className="text-[#f2f0eb] text-xs leading-snug">{cred}</span>
                </div>
              ))}
            </div>

            <blockquote className="border-l-2 border-[#be852d] pl-5 italic text-[#f2f0eb] text-sm md:text-base">
              &ldquo;Most people don&apos;t need more skincare products. They need a
              personalized skincare strategy. That&apos;s exactly what The 24-Hour Skin
              Blueprint™ delivers.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
