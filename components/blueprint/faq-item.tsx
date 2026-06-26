"use client"

import { useState } from "react"
import { HiChevronDown } from "react-icons/hi2"

interface FAQItemProps {
  q: string
  a: string
}

export function FAQItem({ q, a }: FAQItemProps) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#be852d]/20 rounded-xl overflow-hidden bg-[#0e1118] hover:border-[#be852d]/40 transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
      >
        <span className="font-semibold text-[#f2f0eb] text-sm md:text-base">{q}</span>
        <HiChevronDown
          className={`w-5 h-5 text-[#be852d] flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 text-[#8a8a8a] text-sm md:text-base leading-relaxed border-t border-[#be852d]/10 pt-4">
          {a}
        </div>
      )}
    </div>
  )
}
