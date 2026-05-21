'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const E = 'cubic-bezier(0.16,1,0.3,1)'
const heroIn = (delay: number) => ({ animation: `hero-in 1.2s ${E} ${delay}s both` })

const treatments = [
  'Bright Skin & Pigmentation Control',
  'Acne Control & Skin Repair',
  'Repair & Heal Protocol',
]

export default function Hero() {
  const [form, setForm] = useState({ name: '', email: '', treatment: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
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

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(110deg, rgba(10,10,10,0.93) 0%, rgba(10,10,10,0.88) 45%, rgba(10,10,10,0.55) 100%)',
          animation: `hero-overlay-in 2s ease both`,
        }}
      />

      <div className="relative z-[2] w-full px-4 sm:px-8 lg:px-20 pt-36 max-[470px]:pb-10 max-[470px]:pt-24 pb-16 lg:pt-24 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <div>
            <h1
              className="font-outfit text-[clamp(1.9rem,4.5vw,4.2rem)] font-light leading-[1.12] text-white mb-5 sm:mb-7"
              style={heroIn(0.35)}
            >
              Advanced Skin Treatments Designed for{' '}
              <em className="text-brand-pink-light italic">Real, Long-Term</em>{' '}
              Skin Transformation
            </h1>

            <p
              className="font-outfit text-sm sm:text-[1rem] font-light leading-[1.85] text-white/85 mb-8 sm:mb-12"
              style={heroIn(0.7)}
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
                href="tel:7340020073"
                className="inline-block text-center bg-brand-pink text-white font-outfit text-[0.75rem] tracking-[0.14em] uppercase px-8 sm:px-[2.6rem] py-4 border-2 border-brand-pink no-underline font-medium transition-all duration-300 hover:bg-brand-pink-dark hover:border-brand-pink-dark"
              >
                Book Consultation
              </Link>
              <Link
                href="#protocols"
                className="inline-block text-center bg-transparent text-white font-outfit text-[0.75rem] tracking-[0.14em] uppercase px-8 sm:px-[2.6rem] py-4 border-2 border-white/65 no-underline font-medium transition-all duration-300 hover:border-brand-pink hover:text-brand-pink-light"
              >
                Explore Skin Protocols
              </Link>
            </div>
          </div>

          {/* Right — booking form */}
          <div style={heroIn(0.6)}>
            <div
              className="border border-white/15 p-7 sm:p-9"
              style={{ background: 'rgba(10,8,5,0.55)', backdropFilter: 'blur(18px)' }}
            >
              <p className="font-outfit text-[0.6rem] tracking-[0.28em] uppercase text-brand-pink font-medium mb-1">
                Book a Consultation
              </p>
              <h2 className="font-outfit text-[1.4rem] sm:text-[1.65rem] font-light text-white leading-[1.2] mb-7">
                Start Your Skin <em className="italic text-brand-pink-light">Journey</em>
              </h2>

              {submitted ? (
                <div className="py-8 text-center">
                  <p className="font-outfit text-white text-[1rem] font-light leading-[1.8]">
                    Thank you, <span className="text-brand-pink-light font-medium">{form.name}</span>!<br />
                    We&apos;ll be in touch at <span className="text-brand-pink-light">{form.email}</span> shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-outfit text-[0.65rem] tracking-[0.18em] uppercase text-white/55 font-normal">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="bg-white/8 border border-white/15 text-white font-outfit text-[0.88rem] font-light px-4 py-3 outline-none placeholder:text-white/30 focus:border-brand-pink transition-colors duration-200"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-outfit text-[0.65rem] tracking-[0.18em] uppercase text-white/55 font-normal">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="bg-white/8 border border-white/15 text-white font-outfit text-[0.88rem] font-light px-4 py-3 outline-none placeholder:text-white/30 focus:border-brand-pink transition-colors duration-200"
                    />
                  </div>

                  {/* Treatment */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-outfit text-[0.65rem] tracking-[0.18em] uppercase text-white/55 font-normal">
                      Treatment of Interest
                    </label>
                    <select
                      required
                      value={form.treatment}
                      onChange={e => setForm(f => ({ ...f, treatment: e.target.value }))}
                      className="bg-brand-black border border-white/15 text-white font-outfit text-[0.88rem] font-light px-4 py-3 outline-none focus:border-brand-pink transition-colors duration-200 cursor-pointer appearance-none"
                    >
                      <option value="" disabled className="text-white/40">Select a treatment</option>
                      {treatments.map(t => (
                        <option key={t} value={t} className="text-white bg-brand-black">{t}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 bg-brand-pink text-white font-outfit text-[0.72rem] tracking-[0.16em] uppercase py-4 font-medium transition-all duration-300 hover:bg-brand-pink-dark"
                  >
                    Request Consultation
                  </button>

                  <p className="font-outfit text-[0.7rem] text-white/35 font-light text-center leading-[1.7]">
                    No commitment. We&apos;ll contact you within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
