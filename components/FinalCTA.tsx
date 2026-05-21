import Image from 'next/image'
import Link from 'next/link'

export default function FinalCTA() {
  return (
    <div className="relative overflow-hidden px-4 sm:px-8 lg:px-20 py-20 sm:py-32 lg:py-44 text-center">
      <Image
        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=90&auto=format&fit=crop&crop=center"
        alt="UBÊAU Aesthetics clinic luxury interior"
        fill
        className="object-cover object-[center_40%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-brand-black/82" />

      <div className="relative z-[2] max-w-[720px] mx-auto">
        <h2 className="font-outfit text-[clamp(2.5rem,4.5vw,4rem)] font-light text-white leading-[1.12] mb-[1.1rem]">
          The Best Skin of Your{' '}
          <em className="italic text-brand-pink-light">Life</em> Starts Here
        </h2>

        <p className="font-outfit text-sm sm:text-[0.95rem] font-light text-white/80 mb-10 sm:mb-12 leading-[1.95]">
          Enjoy customised skin transformation with advanced protocols for lasting
          results.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5">
          <Link
            href="tel:7340020073"
            className="inline-block bg-brand-pink text-white font-outfit text-[0.75rem] tracking-[0.14em] uppercase px-[2.6rem] py-4 border-2 border-brand-pink no-underline font-medium transition-all duration-300 hover:bg-brand-pink-dark hover:border-brand-pink-dark"
          >
            Book Your Consultation
          </Link>
          <Link
            href="https://maps.google.com/?q=Anuj+Time+Square+Saheed+Nagar+Bhubaneswar"
            target="_blank"
            className="inline-block bg-transparent text-white font-outfit text-[0.75rem] tracking-[0.14em] uppercase px-[2.6rem] py-4 border-2 border-white/42 no-underline font-medium transition-all duration-300 hover:border-brand-pink hover:text-brand-pink-light"
          >
            Visit UBÊAU Clinic
          </Link>
        </div>
      </div>
    </div>
  )
}
