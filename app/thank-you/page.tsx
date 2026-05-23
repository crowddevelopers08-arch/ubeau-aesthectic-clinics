import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Thank You – UBÊAU Advanced Aesthetics',
  description: 'Your consultation request has been received. Our team will contact you shortly.',
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-brand-black flex flex-col">
      {/* Top nav */}
      <header className="px-4 sm:px-8 lg:px-20 py-5 flex items-center justify-between border-b border-white/8">
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
          className="font-outfit text-[0.68rem] tracking-[0.18em] uppercase text-white/50 hover:text-brand-pink transition-colors duration-200 no-underline font-normal"
        >
          ← Home
        </Link>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-8 py-16 sm:py-20">
        <div className="w-full max-w-[560px] text-center">

          {/* Icon */}
          <div
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-8"
            style={{ background: 'rgba(220,130,160,0.12)', border: '1.5px solid rgba(220,130,160,0.3)' }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 sm:w-9 sm:h-9 text-brand-pink-light"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          {/* Heading */}
          <p className="font-outfit text-[0.6rem] tracking-[0.28em] uppercase text-brand-pink font-medium mb-3">
            Request Received
          </p>
          <h1 className="font-outfit text-[clamp(1.8rem,5vw,2.8rem)] font-light text-white leading-[1.15] mb-5">
            Thank You for{' '}
            <em className="italic text-brand-pink-light">Reaching Out</em>
          </h1>
          <p className="font-outfit text-[0.9rem] sm:text-[0.95rem] font-light leading-[1.95] text-white/65 mb-10 max-w-[440px] mx-auto">
            Your consultation request has been received. One of our skin specialists will call you within <strong className="text-white/85 font-normal">24 hours</strong> to discuss your skin journey and schedule your appointment.
          </p>

          {/* What's next */}
          <div
            className="text-left rounded-none border border-white/10 p-6 sm:p-8 mb-10"
            style={{ background: 'rgba(255,255,255,0.04)' }}
          >
            <p className="font-outfit text-[0.6rem] tracking-[0.24em] uppercase text-brand-pink font-medium mb-5">
              What Happens Next
            </p>
            <ol className="flex flex-col gap-5">
              {[
                { step: '01', text: 'Our team reviews your request and assigns a skin specialist.' },
                { step: '02', text: 'We call you to understand your concerns and recommend the right protocol.' },
                { step: '03', text: 'Your personalised consultation is confirmed at a time that suits you.' },
              ].map(({ step, text }) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="font-outfit text-[0.65rem] tracking-[0.14em] text-brand-pink font-medium mt-0.5 shrink-0">
                    {step}
                  </span>
                  <span className="font-outfit text-[0.85rem] font-light text-white/65 leading-[1.75]">
                    {text}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-block text-center bg-brand-pink text-white font-outfit text-[0.72rem] tracking-[0.16em] uppercase px-8 py-4 border-2 border-brand-pink no-underline font-medium transition-all duration-300 hover:bg-brand-pink-dark hover:border-brand-pink-dark"
            >
              Back to Home
            </Link>
            <Link
              href="https://instagram.com/ubeauclinic"
              target="_blank"
              className="inline-block text-center bg-transparent text-white font-outfit text-[0.72rem] tracking-[0.16em] uppercase px-8 py-4 border-2 border-white/25 no-underline font-medium transition-all duration-300 hover:border-brand-pink hover:text-brand-pink-light"
            >
              Follow @ubeauclinic
            </Link>
          </div>

          {/* Contact fallback */}
          <p className="font-outfit text-[0.75rem] font-light text-white/35 mt-8 leading-[1.8]">
            Need to reach us sooner?{' '}
            <Link
              href="tel:7340020073"
              className="text-brand-pink no-underline hover:text-brand-pink-light transition-colors duration-200"
            >
              73-400-200-73
            </Link>
          </p>
        </div>
      </main>

      {/* Footer strip */}
      <footer className="px-4 sm:px-8 lg:px-20 py-5 border-t border-white/8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <p className="font-outfit text-[0.68rem] text-white/30 font-light">
          © 2026 UBÊAU Advanced Aesthetics. All rights reserved.
        </p>
        <Link
          href="/privacy-policy"
          className="font-outfit text-[0.65rem] tracking-[0.16em] uppercase text-white/30 no-underline hover:text-brand-pink transition-colors duration-200 font-normal"
        >
          Privacy Policy
        </Link>
      </footer>
    </div>
  )
}
