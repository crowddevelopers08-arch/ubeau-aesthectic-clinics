import { HiSparkles } from "react-icons/hi2"

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#be852d] bg-[#be852d]/10 border border-[#be852d]/20 px-4 py-2 rounded-full mb-6">
      <HiSparkles className="w-3.5 h-3.5 hidden md:block" />
      {children}
    </span>
  )
}
