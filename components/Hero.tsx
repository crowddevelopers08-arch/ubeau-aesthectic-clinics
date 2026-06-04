'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const E = 'cubic-bezier(0.16,1,0.3,1)'
const heroIn = (delay: number) => ({ animation: `hero-in 1.2s ${E} ${delay}s both` })

const treatments = [
  'Bright Skin & Pigmentation Control',
  'Acne Control & Skin Repair',
  'Repair & Heal Protocol',
]

export default function Hero() {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', phone: '', location: '', treatment: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, pageUrl: window.location.href }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error || 'Something went wrong. Please try again.'); return }
      router.push('/thank-you')
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=90&auto=format&fit=crop"
        alt="UBÊAU Advanced Aesthetics luxury skin clinic"
        fill
        priority
        className="object-cover object-[center_30%]"
        sizes="100vw"
        style={{ animation: `hero-zoom 3.5s ${E} both` }}
      />

      {/* Warm brown overlay — replaces the old black overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(110deg, rgba(134,88,33,0.92) 0%, rgba(134,88,33,0.85) 40%, rgba(134,88,33,0.45) 100%)',
          animation: `hero-overlay-in 2s ease both`,
        }}
      />

      {/* Full-height grid — left text | right form */}
      <div className="relative z-[2] min-h-screen grid grid-cols-1 lg:grid-cols-[3fr_2fr]">

          {/* Left — text, vertically centred */}
          <div className="flex flex-col justify-center px-4 sm:px-8 lg:px-20 pt-28 pb-10 max-[470px]:pt-20 max-[470px]:pb-8">
            <h1
              className="font-outfit text-[clamp(1.4rem,2.8vw,2.8rem)] font-semibold leading-[1.2] text-white mb-5 sm:mb-6"
              style={{ ...heroIn(0.35), textShadow: '0 2px 16px rgba(0,0,0,0.35)' }}
            >
              Advanced Skin Treatments Designed for{' '}
              <em className="text-[#ffefe1] italic">Real, Long-Term</em>{' '}
              Skin Transformation
            </h1>

            <p
              className="font-outfit text-[0.85rem] sm:text-[0.95rem] font-normal leading-[1.8] text-white mb-6 sm:mb-8"
              style={{ ...heroIn(0.7), textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}
            >
              At{' '}
              <strong className="text-white font-semibold">
                UBÊAU Advanced Aesthetics
              </strong>
              , each treatment protocol is carefully crafted to function at a
              cellular level with science-backed technology, advanced dermatology,
              and personalised care.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-5"
              style={heroIn(1.0)}
            >
              <Link
                href="#consultation-form"
                className="inline-block text-center bg-[#ffefe1] text-brand-black font-outfit text-[0.75rem] tracking-[0.14em] uppercase px-8 sm:px-[2.6rem] py-4 border-2 border-[#ffefe1] no-underline font-medium transition-all duration-300 hover:bg-white hover:border-white"
              >
                Book Consultation
              </Link>
              <Link
                href="#protocols"
                className="inline-block text-center bg-transparent text-white font-outfit text-[0.75rem] tracking-[0.14em] uppercase px-8 sm:px-[2.6rem] py-4 border-2 border-white/55 no-underline font-medium transition-all duration-300 hover:border-[#ffefe1] hover:text-[#ffefe1]"
              >
                Explore Skin Protocols
              </Link>
            </div>
          </div>

          {/* Right — full-height form panel */}
          <div
            id="consultation-form"
            className="flex flex-col px-8 sm:px-10 lg:px-12"
            style={{ minHeight: '100vh', background: 'rgba(255,239,225,0.96)', backdropFilter: 'blur(18px)', ...heroIn(0.6) }}
          >
          <div className="flex-1 flex flex-col justify-center pt-36 pb-16 lg:pt-40 lg:pb-20 w-full">
              <p className="font-outfit text-[0.6rem] tracking-[0.28em] uppercase text-brand-pink font-medium mb-1">
                Book a Consultation
              </p>
              <h2 className="font-outfit text-[1.4rem] sm:text-[1.65rem] font-normal text-brand-black leading-[1.2] mb-7">
                Start Your Skin <em className="italic text-brand-pink">Journey</em>
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-outfit text-[0.65rem] tracking-[0.18em] uppercase text-brand-black font-normal">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="bg-white border border-brand-black/15 text-brand-black font-outfit text-[0.88rem] font-normal px-4 py-3 outline-none placeholder:text-brand-gray focus:border-brand-pink transition-colors duration-200"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-outfit text-[0.65rem] tracking-[0.18em] uppercase text-brand-black font-normal">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      className="bg-white border border-brand-black/15 text-brand-black font-outfit text-[0.88rem] font-normal px-4 py-3 outline-none placeholder:text-brand-gray focus:border-brand-pink transition-colors duration-200"
                    />
                  </div>

                  {/* Location */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-outfit text-[0.65rem] tracking-[0.18em] uppercase text-brand-black font-normal">
                      Your Location
                    </label>
                    <input
                      type="text"
                      placeholder="City / Area (optional)"
                      value={form.location}
                      onChange={e => setForm(f => ({ ...f, location: e.target.value }))}
                      className="bg-white border border-brand-black/15 text-brand-black font-outfit text-[0.88rem] font-normal px-4 py-3 outline-none placeholder:text-brand-gray focus:border-brand-pink transition-colors duration-200"
                    />
                  </div>

                  {/* Treatment */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-outfit text-[0.65rem] tracking-[0.18em] uppercase text-brand-black font-normal">
                      Treatment of Interest
                    </label>
                    <select
                      value={form.treatment}
                      onChange={e => setForm(f => ({ ...f, treatment: e.target.value }))}
                      className="bg-[#ffefe1] border border-brand-black/15 text-brand-black font-outfit text-[0.88rem] font-normal px-4 py-3 outline-none focus:border-brand-pink transition-colors duration-200 cursor-pointer appearance-none"
                    >
                      <option value="">Select a treatment (optional)</option>
                      {treatments.map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  {error && (
                    <p className="font-outfit text-[0.75rem] text-red-600 font-normal text-center">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 bg-brand-pink text-white font-outfit text-[0.72rem] tracking-[0.16em] uppercase py-4 font-medium transition-all duration-300 hover:bg-brand-pink-dark disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Submitting…' : 'Request Consultation'}
                  </button>

                  <p className="font-outfit text-[0.7rem] text-brand-black font-normal text-center leading-[1.7]">
                    No commitment. We&apos;ll contact you within 24 hours.
                  </p>
                </form>
          </div>{/* end my-auto wrapper */}
          </div>{/* end form panel */}

        </div>
    </section>
  )
}
