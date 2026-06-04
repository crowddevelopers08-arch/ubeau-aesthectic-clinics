'use client'

import { useState } from 'react'
import Image from 'next/image'
import FadeUp from './FadeUp'

const doctors = [
  {
    name: 'Dr. Sampada',
    title: 'Founder & Medical Director',
    qualification: 'MBBS',
    bio: 'Practicing Aesthetician with over 10 years of experience.',
    image: 'https://static.wixstatic.com/media/67c604_3d38d616e1de405087dc36bee50ebcaf~mv2.jpeg/v1/fill/w_433,h_567,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1657096053591.jpeg',
  },
  {
    name: 'Dr. Khushnuma',
    title: 'Aesthetician',
    qualification: '',
    bio: 'Practicing Aesthetician with over 10 years of experience.',
    image: 'https://static.wixstatic.com/media/3b7dd9_3d319584dd4f49c9b4741a6465fcaaf4~mv2.jpg/v1/fill/w_433,h_567,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-12-02%20at%201_23_edited.jpg',
  },
  {
    name: 'Dr. Rosalin',
    title: 'Aesthetician',
    qualification: '',
    bio: 'Practicing Aesthetician with over 05 years of experience.',
    image: 'https://static.wixstatic.com/media/3b7dd9_62540d8af27b405886efceab283c132f~mv2.jpg/v1/fill/w_433,h_567,fp_0.50_0.25,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_7041_JPG.jpg',
  },
]

function DoctorCard({
  name,
  title,
  qualification,
  bio,
  image,
}: (typeof doctors)[number]) {
  return (
    <div className="group bg-white overflow-hidden flex flex-col border border-brand-green/30 hover:border-brand-pink/30 transition-colors duration-300 h-full">
      <div className="relative w-full h-96 sm:h-72 lg:h-96 overflow-hidden shrink-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-[center_top] transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-brand-pink/15 to-transparent" />
      </div>

      <div className="flex flex-col p-5 flex-1">
        <span className="w-8 h-px bg-brand-pink block mb-4" />

        <h3 className="font-outfit text-[1.1rem] sm:text-[1.2rem] font-semibold text-brand-black leading-[1.2] mb-1">
          {name}
        </h3>
        <p className="font-outfit text-[0.62rem] tracking-[0.18em] uppercase text-brand-pink font-medium mb-1">
          {title}
        </p>
        {qualification && (
          <p className="font-outfit text-[0.72rem] text-brand-black font-normal mb-3">
            {qualification}
          </p>
        )}
        <p className="font-outfit text-[0.8rem] font-normal leading-[1.85] text-brand-black mt-2">
          {bio}
        </p>
      </div>
    </div>
  )
}

export default function WhyChoose() {
  const [current, setCurrent] = useState(0)
  const total = doctors.length

  const next = () => setCurrent(i => (i + 1) % total)
  const prev = () => setCurrent(i => (i - 1 + total) % total)

  return (
    <section id="doctors" className="bg-brand-off-white px-4 sm:px-8 lg:px-20 py-7 sm:py-14 lg:py-20">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-6 sm:w-6.5 h-px bg-brand-pink shrink-0" />
        <span className="font-outfit text-[0.65rem] tracking-[0.28em] uppercase text-brand-pink font-medium">
          Our Medical Team
        </span>
      </div>
      <h2 className="font-outfit text-[clamp(1.5rem,3vw,3.2rem)] font-normal leading-[1.15] text-brand-black mb-8 sm:mb-14">
        Expert Care by <em className="italic text-brand-pink">Qualified Doctors</em>
      </h2>

      <div className="md:hidden">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {doctors.map((doc) => (
              <div key={doc.name} className="w-full shrink-0">
                <DoctorCard {...doc} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-1.5">
            {doctors.map((doc, i) => (
              <button
                key={doc.name}
                onClick={() => setCurrent(i)}
                aria-label={`Go to doctor ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-5 h-1.5 bg-brand-pink'
                    : 'w-1.5 h-1.5 bg-brand-black/35 hover:bg-brand-pink'
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2 shrink-0">
            <button
              onClick={prev}
              aria-label="Previous doctor"
              className="w-10 h-10 border border-brand-black/40 flex items-center justify-center text-brand-black hover:border-brand-pink hover:text-brand-pink transition-all duration-300"
            >
              {'<'}
            </button>
            <button
              onClick={next}
              aria-label="Next doctor"
              className="w-10 h-10 border border-brand-black/40 flex items-center justify-center text-brand-black hover:border-brand-pink hover:text-brand-pink transition-all duration-300"
            >
              {'>'}
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
        {doctors.map((doc, i) => (
          <FadeUp key={doc.name} delay={i * 150}>
            <DoctorCard {...doc} />
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
