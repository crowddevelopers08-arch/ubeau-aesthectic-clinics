import { SectionLabel } from "./section-label"
import { FAQItem } from "./faq-item"

const faqs = [
  {
    q: "Is this personalized?",
    a: "Yes. Every Skin Blueprint is individually reviewed and customized based on your skin concerns, goals, lifestyle, and budget.",
  },
  {
    q: "Will I receive product recommendations?",
    a: "Absolutely. You'll receive product recommendations based on your selected monthly skincare investment level.",
  },
  {
    q: "How quickly will I receive my plan?",
    a: "Within 24 hours of completing your assessment questionnaire.",
  },
  {
    q: "Are the products available in India?",
    a: "Yes. All recommendations are based on products that can be sourced within India.",
  },
  {
    q: "Is this a consultation?",
    a: "This is a personalized skincare roadmap and recommendation service. It is designed to provide skincare guidance and routine recommendations based on the information you provide.",
  },
]

export function FAQSection() {
  return (
    <section className="py-10 px-5 bg-[#0e1118]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-7">
          <SectionLabel>Got Questions?</SectionLabel>
          <h2 className="text-2xl md:text-4xl font-bold text-[#f2f0eb]">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
