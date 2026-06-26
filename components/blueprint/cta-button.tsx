import { HiArrowRight } from "react-icons/hi2"

interface CTAButtonProps {
  onClick: () => void
  children: React.ReactNode
}

export function CTAButton({ onClick, children }: CTAButtonProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 bg-[#be852d] text-[#080b12] font-bold text-base md:text-lg px-8 py-4 rounded-full hover:bg-[#be852d] transition-all duration-300 shadow-[0_0_30px_rgba(245,194,0,0.4)] hover:shadow-[0_0_45px_rgba(245,194,0,0.6)] hover:scale-105 active:scale-95 cursor-pointer"
    >
      {children}
      <HiArrowRight className="w-5 h-5" />
    </button>
  )
}
