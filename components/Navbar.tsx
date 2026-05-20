import Link from 'next/link'

const navLinks = [
  ['#approach', 'Approach'],
  ['#protocols', 'Protocols'],
  ['#why', 'Why UBÊAU'],
  ['#journey', 'Process'],
  ['#faq', 'FAQ'],
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-20 py-[1.2rem] bg-white/[0.97] backdrop-blur-xl border-b border-brand-pink/10 max-lg:px-6">
      <Link
        href="#"
        className="font-cormorant text-[2rem] font-light tracking-[0.32em] text-brand-pink no-underline"
      >
        UB<em>Ê</em>AU
      </Link>

      <ul className="hidden lg:flex gap-10 list-none m-0 p-0">
        {navLinks.map(([href, label]) => (
          <li key={href}>
            <Link
              href={href}
              className="font-outfit text-[0.72rem] tracking-[0.14em] uppercase text-brand-black opacity-55 no-underline transition-all duration-300 hover:opacity-100 hover:text-brand-pink font-normal"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="tel:7340020073"
        className="bg-brand-pink text-white font-outfit text-[0.72rem] tracking-[0.14em] uppercase px-8 py-3 no-underline font-medium transition-all duration-300 hover:bg-brand-pink-dark"
      >
        Book Consultation
      </Link>
    </nav>
  )
}
