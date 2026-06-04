'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const navLinks = [
  ['#approach', 'Approach'],
  ['#protocols', 'Protocols'],
  ['#why', 'Why UBÊAU'],
  ['#journey', 'Process'],
  ['#faq', 'FAQ'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Top accent stripe */}
      <div className="fixed top-0 left-0 right-0 z-[300] h-[3px] bg-brand-pink" />

      <nav
        className={`fixed top-[3px] left-0 right-0 z-[200] transition-all duration-300 ${
          scrolled
            ? 'bg-brand-off-white shadow-[0_2px_24px_rgba(134,88,33,0.10)] py-3'
            : 'bg-brand-off-white/97 backdrop-blur-xl border-b border-brand-pink/12 py-5'
        }`}
        style={{ animation: 'nav-slide-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s both' }}
      >
        <div className="flex items-center justify-between px-4 sm:px-8 lg:px-20">
          {/* Logo */}
          <Link href="#" className="shrink-0 no-underline">
            <Image
              src="/Screenshot.png"
              alt="UBÊAU Advanced Aesthetics"
              width={180}
              height={90}
              className="h-14 sm:h-16 w-auto mix-blend-multiply"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
            {navLinks.map(([href, label]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="relative font-outfit text-[0.7rem] tracking-[0.14em] uppercase text-brand-black no-underline font-normal px-4 py-2 transition-colors duration-300 hover:text-brand-pink group block"
                >
                  {label}
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-brand-pink scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* CTA */}
            <Link
              href="#consultation-form"
              className="shrink-0 bg-brand-pink text-white font-outfit tracking-[0.12em] uppercase no-underline font-medium transition-all duration-300 hover:bg-brand-pink-dark text-[0.65rem] px-5 py-2.5 sm:text-[0.7rem] sm:px-7 sm:py-3"
            >
              <span className="hidden sm:inline">Book Consultation</span>
              <span className="sm:hidden">Book Now</span>
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] bg-transparent border-0 cursor-pointer shrink-0"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-px bg-brand-black transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
              <span className={`block w-5 h-px bg-brand-black transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-px bg-brand-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-80 border-t border-brand-pink/10' : 'max-h-0'
          }`}
        >
          <ul className="list-none m-0 p-0 px-4 sm:px-8 py-4 flex flex-col gap-1 bg-brand-off-white">
            {navLinks.map(([href, label]) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block font-outfit text-[0.72rem] tracking-[0.14em] uppercase text-brand-black no-underline py-3 border-b border-brand-pink/10 transition-colors duration-200 hover:text-brand-pink font-normal"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}
