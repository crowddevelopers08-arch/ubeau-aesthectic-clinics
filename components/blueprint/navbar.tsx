import Image from "next/image"

interface NavbarProps {
  onCTAClick: () => void
}

export function Navbar({ onCTAClick }: NavbarProps) {
  return (
    <nav className="border-b border-[#be852d]/10 bg-[#080b12]/95 backdrop-blur sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-5 h-20 flex items-center justify-between">
        <div className="rounded-lg px-3 py-1.5">
          <Image
            src="/Screenshot.png"
            alt="UBÊAU Advanced Aesthetics"
            width={110}
            height={60}
            className="h-15 w-auto object-contain"
            priority
          />
        </div>
        <button
          onClick={onCTAClick}
          className="inline-flex items-center gap-1.5 bg-[#be852d] text-[#080b12] text-xs font-bold px-4 py-2.5 rounded-full hover:bg-[#be852d] transition-all cursor-pointer"
        >
          <span className="sm:hidden">Get Blueprint — ₹999</span>
          <span className="hidden sm:inline">Get Your Blueprint — ₹999</span>
        </button>
      </div>
    </nav>
  )
}
