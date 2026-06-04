import Image from 'next/image'
import Link from 'next/link'

export default function FinalCTA() {
  return (
    <div className="relative overflow-hidden px-4 sm:px-8 lg:px-20 py-10 sm:py-20 lg:py-28 text-center">
      <Image
        src="/foo.avif"
        alt="UBÊAU Aesthetics clinic luxury interior"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Reduced overlay so the image shows through */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(134,88,33,0.45)' }} />

      <div className="relative z-2 max-w-180 mx-auto">
        <h2 className="font-outfit text-[clamp(2.5rem,4.5vw,4rem)] font-normal text-white leading-[1.12] mb-[1.1rem]">
          The Best Skin of Your{' '}
          <em className="italic text-[#ffefe1]">Life</em> Starts Here
        </h2>

        <p className="font-outfit text-sm sm:text-[0.95rem] font-normal text-white mb-7 sm:mb-12 leading-[1.95]">
          Enjoy customised skin transformation with advanced protocols for lasting
          results.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5">
          <Link
            href="#consultation-form"
            className="inline-block bg-[#ffefe1] text-brand-black font-outfit text-[0.75rem] tracking-[0.14em] uppercase px-[2.6rem] py-4 border-2 border-[#ffefe1] no-underline font-medium transition-all duration-300 hover:bg-white hover:border-white"
          >
            Book Your Consultation
          </Link>
          <Link
            href="https://maps.app.goo.gl/Uwm2WB3WKumA9dHp7"
            target="_blank"
            className="inline-block bg-transparent text-white font-outfit text-[0.75rem] tracking-[0.14em] uppercase px-[2.6rem] py-4 border-2 border-white/50 no-underline font-medium transition-all duration-300 hover:border-[#ffefe1] hover:text-[#ffefe1]"
          >
            Visit UBÊAU Clinic
          </Link>
        </div>
      </div>
    </div>
  )
}
