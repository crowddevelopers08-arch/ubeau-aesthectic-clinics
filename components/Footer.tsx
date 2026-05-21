import Link from 'next/link'
import Image from 'next/image'

const protocols = [
  'Bright Skin & Pigmentation Control',
  'Acne Control & Skin Repair',
  'Repair & Heal Protocol',
]

export default function Footer() {
  return (
    <footer className="bg-brand-black">
      {/* Main content */}
      <div className="px-4 sm:px-8 lg:px-20 pt-10 sm:pt-12 lg:pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.2fr] gap-8 lg:gap-10 pb-8 border-b border-white/10">

          {/* Brand column — full width on sm */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/Screenshot.png"
              alt="UBÊAU Advanced Aesthetics"
              width={150}
              height={75}
              className="h-20 sm:h-24 w-auto mb-4 mix-blend-screen"
            />
            <p className="font-outfit text-[0.84rem] font-light leading-[1.9] text-white/65 max-w-[340px]">
              UBÊAU Advanced Aesthetics Clinic — Odisha&apos;s first luxury skincare
              &amp; wellness clinic. Science-backed protocols for real, lasting skin
              transformation.
            </p>
          </div>

          {/* Protocols */}
          <div>
            <p className="font-outfit text-[0.6rem] tracking-[0.28em] uppercase text-brand-pink font-semibold mb-6">
              Protocols
            </p>
            <ul className="list-none flex flex-col gap-4">
              {protocols.map((p) => (
                <li key={p}>
                  <Link
                    href="#protocols"
                    className="font-outfit text-[0.83rem] font-light text-white/60 no-underline transition-colors duration-300 hover:text-brand-pink leading-[1.5]"
                  >
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-outfit text-[0.6rem] tracking-[0.28em] uppercase text-brand-pink font-semibold mb-6">
              Contact
            </p>
            <address className="not-italic flex flex-col gap-3">
              <span className="font-outfit text-[0.83rem] font-light leading-[1.85] text-white/60">
                Shop No. 203, 2nd Floor,<br />
                Anuj Time Square, Saheed Nagar,<br />
                Bhubaneswar, Odisha
              </span>
              <div className="flex flex-col gap-1.5">
                <Link
                  href="tel:7340020073"
                  className="font-outfit text-[0.83rem] font-normal text-brand-pink no-underline transition-colors duration-300 hover:text-brand-pink-light"
                >
                  73-400-200-73
                </Link>
                <Link
                  href="https://ubeauclinic.com"
                  target="_blank"
                  className="font-outfit text-[0.83rem] font-normal text-brand-pink no-underline transition-colors duration-300 hover:text-brand-pink-light"
                >
                  ubeauclinic.com
                </Link>
                <Link
                  href="https://instagram.com/ubeauclinic"
                  target="_blank"
                  className="font-outfit text-[0.83rem] font-light text-white/55 no-underline transition-colors duration-300 hover:text-brand-pink"
                >
                  @ubeauclinic
                </Link>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="font-outfit text-[0.7rem] text-white/45 font-light">
            © 2025 UBÊAU Advanced Aesthetics. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="https://instagram.com/ubeauclinic"
              target="_blank"
              className="font-outfit text-[0.65rem] tracking-[0.16em] uppercase text-white/50 no-underline transition-colors duration-300 hover:text-brand-pink font-normal"
            >
              Instagram
            </Link>
            <span className="w-px h-3 bg-white/20" />
            <Link
              href="tel:7340020073"
              className="font-outfit text-[0.65rem] tracking-[0.16em] uppercase text-white/50 no-underline transition-colors duration-300 hover:text-brand-pink font-normal"
            >
              73-400-200-73
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
