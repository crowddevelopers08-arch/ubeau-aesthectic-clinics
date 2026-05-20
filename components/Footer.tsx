import Link from 'next/link'

const protocols = [
  'Bright Skin & Pigmentation Control',
  'Acne Control & Skin Repair',
  'Repair & Heal Protocol',
]

export default function Footer() {
  return (
    <footer className="bg-brand-black px-20 pt-22 pb-12 max-lg:px-6 max-lg:pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-[4.5rem] mb-16 max-lg:gap-10">
        {/* Brand */}
        <div>
          <div className="font-cormorant text-[2rem] font-light tracking-[0.28em] text-brand-pink mb-[1.1rem]">
            UBÊAU
          </div>
          <p className="font-outfit text-[0.82rem] font-light leading-[1.88] text-white/38 max-w-[320px]">
            UBÊAU Advanced Aesthetics Clinic — Odisha&apos;s first luxury skincare
            &amp; wellness clinic. Science-backed protocols for real, lasting skin
            transformation.
          </p>
        </div>

        {/* Protocols */}
        <div>
          <p className="font-outfit text-[0.62rem] tracking-[0.26em] uppercase text-brand-pink font-medium mb-6">
            Protocols
          </p>
          <ul className="list-none flex flex-col gap-[0.85rem]">
            {protocols.map((p) => (
              <li key={p}>
                <Link
                  href="#protocols"
                  className="font-outfit text-[0.84rem] font-light text-white/40 no-underline transition-colors duration-300 hover:text-brand-pink"
                >
                  {p}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="font-outfit text-[0.62rem] tracking-[0.26em] uppercase text-brand-pink font-medium mb-6">
            Contact
          </p>
          <address className="not-italic">
            <span className="font-outfit text-[0.84rem] font-light leading-[1.9] text-white/40 block">
              Shop No. 203, 2nd Floor,
              <br />
              Anuj Time Square, Saheed Nagar,
              <br />
              Bhubaneswar, Odisha
            </span>
            <Link
              href="tel:7340020073"
              className="block font-outfit text-[0.84rem] font-normal text-brand-pink no-underline mt-[0.6rem] transition-colors duration-300 hover:text-brand-pink-light"
            >
              73-400-200-73
            </Link>
            <Link
              href="https://ubeauclinic.com"
              target="_blank"
              className="block font-outfit text-[0.84rem] font-normal text-brand-pink no-underline mt-1 transition-colors duration-300 hover:text-brand-pink-light"
            >
              ubeauclinic.com
            </Link>
            <Link
              href="https://instagram.com/ubeauclinic"
              target="_blank"
              className="block font-outfit text-[0.8rem] font-light text-white/36 no-underline mt-[0.35rem] transition-colors duration-300 hover:text-brand-pink"
            >
              @ubeauclinic
            </Link>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.07] pt-8 flex justify-between items-center flex-wrap gap-4">
        <p className="font-outfit text-[0.7rem] text-white/20 font-light">
          © 2025 UBÊAU Advanced Aesthetics. All rights reserved.
        </p>
        <div className="flex gap-8">
          <Link
            href="https://instagram.com/ubeauclinic"
            target="_blank"
            className="font-outfit text-[0.65rem] tracking-[0.16em] uppercase text-white/30 no-underline transition-colors duration-300 hover:text-brand-pink font-normal"
          >
            Instagram
          </Link>
          <Link
            href="tel:7340020073"
            className="font-outfit text-[0.65rem] tracking-[0.16em] uppercase text-white/30 no-underline transition-colors duration-300 hover:text-brand-pink font-normal"
          >
            73-400-200-73
          </Link>
        </div>
      </div>
    </footer>
  )
}
