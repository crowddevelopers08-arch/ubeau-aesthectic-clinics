import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Privacy Policy – UBÊAU Advanced Aesthetics',
  description: 'How UBÊAU Advanced Aesthetics collects, uses, and protects your personal information.',
}

const sections = [
  {
    title: '1. Informations We Collect',
    body: `When you submit a consultation request or contact us through our website, we collect the following information:

• Full name
• Mobile phone number
• City or area (optional)
• Treatment or skin concern of interest (optional)
• Page URL from which the form was submitted

We do not collect payment information, government-issued IDs, or any sensitive personal data through this website.`,
  },
  {
    title: '2. How We Use Your Information',
    body: `The information you provide is used solely to:

• Contact you to schedule or confirm a consultation appointment
• Understand your skin concern so our specialists can prepare appropriately
• Follow up if we are unable to reach you on the first attempt
• Improve our services based on aggregated, anonymised trends

We will never use your information to send unsolicited marketing messages without your consent.`,
  },
  {
    title: '3. Data Storage & Third-Party Services',
    body: `Your submitted details are securely stored in:

• Google Sheets (via a private Google Workspace account) — used internally by our team to manage consultation requests
• TeleCRM — our customer relationship management platform, used to assign leads to our consultants and track follow-ups

Both services are governed by their own privacy and security policies. We ensure data is shared with these platforms only through encrypted HTTPS connections.`,
  },
  {
    title: '4. Data Retention',
    body: `We retain your contact information for as long as necessary to fulfil the purpose for which it was collected — typically the duration of your relationship with UBÊAU Advanced Aesthetics.

If you request deletion of your data, we will remove it from our active records within 7 business days and request deletion from our third-party processors.`,
  },
  {
    title: '5. Sharing of Information',
    body: `We do not sell, rent, or trade your personal information to any third party.

Your data may be shared only with:

• Our internal clinic team (doctors, skin specialists, coordinators)
• The third-party platforms listed in Section 3, under confidentiality obligations
• Law enforcement or regulatory bodies when required by applicable Indian law`,
  },
  {
    title: '6. Cookies & Tracking',
    body: `Our website does not currently use tracking cookies or analytics scripts that collect personally identifiable information. We may use basic browser-level session functionality to support the consultation form.

If we introduce analytics tools in the future, this policy will be updated and a cookie notice will be displayed.`,
  },
  {
    title: '7. Your Rights',
    body: `You have the right to:

• Access the personal information we hold about you
• Request correction of inaccurate information
• Request deletion of your data at any time
• Withdraw consent for us to contact you

To exercise any of these rights, please contact us directly using the details in Section 9.`,
  },
  {
    title: '8. Children\'s Privacy',
    body: `Our services are intended for adults. We do not knowingly collect personal information from individuals under the age of 18 without verifiable parental or guardian consent. If you believe we have inadvertently collected such information, please contact us immediately.`,
  },
  {
    title: '9. Contact Us',
    body: `If you have questions about this Privacy Policy or wish to exercise your data rights, please reach out:

UBÊAU Advanced Aesthetics
Shop No. 203, 2nd Floor, Anuj Time Square,
Saheed Nagar, Bhubaneswar, Odisha

Phone: 73-400-200-73
Website: ubeauclinic.com
Instagram: @ubeauclinic`,
  },
  {
    title: '10. Changes to This Policy',
    body: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated version will be posted on this page with the revised date shown below. We encourage you to review this page periodically.`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-brand-black px-4 sm:px-8 lg:px-20 py-5 flex items-center justify-between">
        <Link href="/" className="block">
          <Image
            src="/Screenshot.png"
            alt="UBÊAU Advanced Aesthetics"
            width={120}
            height={60}
            className="h-14 sm:h-16 w-auto mix-blend-screen"
          />
        </Link>
        <Link
          href="/"
          className="font-outfit text-[0.7rem] tracking-[0.18em] uppercase text-white/60 hover:text-brand-pink transition-colors duration-200 no-underline font-normal"
        >
          ← Back to Home
        </Link>
      </header>

      {/* Hero banner */}
      <div className="bg-brand-black px-4 sm:px-8 lg:px-20 pt-12 pb-14 sm:pt-16 sm:pb-18">
        <p className="font-outfit text-[0.6rem] tracking-[0.28em] uppercase text-brand-pink font-medium mb-3">
          Legal
        </p>
        <h1 className="font-outfit text-[clamp(1.8rem,4vw,3rem)] font-light text-white leading-[1.15] mb-4">
          Privacy <em className="italic text-brand-pink-light">Policy</em>
        </h1>
        <p className="font-outfit text-[0.85rem] font-light text-white/55 leading-[1.8] max-w-[560px]">
          Last updated: May 2026 &nbsp;·&nbsp; UBÊAU Advanced Aesthetics, Bhubaneswar, Odisha
        </p>
      </div>

      {/* Intro */}
      <div className="px-4 sm:px-8 lg:px-20 py-10 sm:py-14 border-b border-zinc-100">
        <p className="font-outfit text-[0.92rem] sm:text-[1rem] font-light leading-[2] text-zinc-600 max-w-[720px]">
          At <strong className="text-brand-black font-medium">UBÊAU Advanced Aesthetics</strong>, your trust matters as much as your skin. This Privacy Policy explains what personal information we collect when you visit our website or submit a consultation request, how we use it, and the choices you have. Please read it carefully.
        </p>
      </div>

      {/* Sections */}
      <div className="px-4 sm:px-8 lg:px-20 py-12 sm:py-16">
        <div className="max-w-[820px] flex flex-col gap-12 sm:gap-14">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-outfit text-[1rem] sm:text-[1.1rem] font-medium text-brand-black mb-4 leading-[1.4]">
                {s.title}
              </h2>
              <div className="font-outfit text-[0.88rem] sm:text-[0.92rem] font-light leading-[2] text-zinc-600 whitespace-pre-line">
                {s.body}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer strip */}
      <div className="bg-zinc-50 border-t border-zinc-100 px-4 sm:px-8 lg:px-20 py-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <p className="font-outfit text-[0.75rem] text-zinc-400 font-light">
          © 2026 UBÊAU Advanced Aesthetics. All rights reserved.
        </p>
        <Link
          href="/"
          className="font-outfit text-[0.72rem] tracking-[0.16em] uppercase text-zinc-400 no-underline hover:text-brand-pink transition-colors duration-200 font-normal"
        >
          Return to Website
        </Link>
      </div>
    </div>
  )
}
