"use client"

import { useState } from "react"
import { HiUser, HiPhone, HiSparkles, HiArrowRight } from "react-icons/hi2"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { SkinFormData, SkinProblem } from "@/components/skin/skin-types"

interface LeadFormModalProps {
  open: boolean
  onClose: () => void
  onSubmit: (data: SkinFormData) => void
}

export function LeadFormModal({ open, onClose, onSubmit }: LeadFormModalProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [problem, setProblem] = useState<SkinProblem>("")
  const [errors, setErrors] = useState<{ name?: string; phone?: string; problem?: string }>({})

  const validate = () => {
    const e: typeof errors = {}
    if (!name.trim()) e.name = "Please enter your name"
    if (!phone.trim() || phone.length < 10) e.phone = "Please enter a valid phone number"
    if (!problem) e.problem = "Please select a skin concern"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validate()) return
    onSubmit({ name: name.trim(), phone: phone.trim(), problem })
  }

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="border-[#be852d]/20 bg-[#0e1118]/95 backdrop-blur-xl sm:max-w-md">
        <DialogTitle className="text-center text-xl font-bold text-[#f2f0eb]">
          Start Your Skin Analysis
        </DialogTitle>
        <DialogDescription className="text-center text-sm text-[#8a8a8a]">
          Tell us about your skin so Dr. Sampada can create your personalized blueprint
        </DialogDescription>

        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Label htmlFor="lead-name" className="text-[#f2f0eb] flex items-center gap-2">
              <HiUser className="w-4 h-4 text-[#be852d]" /> Full Name
            </Label>
            <Input
              id="lead-name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: undefined })) }}
              className="border-[#be852d]/20 bg-[#080b12] text-[#f2f0eb] placeholder:text-[#8a8a8a] focus:border-[#be852d] focus:ring-[#be852d]"
            />
            {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="lead-phone" className="text-[#f2f0eb] flex items-center gap-2">
              <HiPhone className="w-4 h-4 text-[#be852d]" /> Phone Number
            </Label>
            <Input
              id="lead-phone"
              type="tel"
              placeholder="Enter your mobile number"
              value={phone}
              onChange={(e) => { setPhone(e.target.value); setErrors((p) => ({ ...p, phone: undefined })) }}
              className="border-[#be852d]/20 bg-[#080b12] text-[#f2f0eb] placeholder:text-[#8a8a8a] focus:border-[#be852d] focus:ring-[#be852d]"
            />
            {errors.phone && <p className="text-xs text-red-400">{errors.phone}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="lead-concern" className="text-[#f2f0eb] flex items-center gap-2">
              <HiSparkles className="w-4 h-4 text-[#be852d]" /> Primary Skin Concern
            </Label>
            <Select
              value={problem}
              onValueChange={(v: SkinProblem) => { setProblem(v); setErrors((p) => ({ ...p, problem: undefined })) }}
            >
              <SelectTrigger
                id="lead-concern"
                className="border-[#be852d]/20 bg-[#080b12] text-[#f2f0eb] focus:border-[#be852d] focus:ring-[#be852d]"
              >
                <SelectValue placeholder="Select your main concern" />
              </SelectTrigger>
              <SelectContent className="border-[#be852d]/20 bg-[#0e1118] text-[#f2f0eb]">
                <SelectItem value="acne">Acne / Breakouts</SelectItem>
                <SelectItem value="pigmentation">Pigmentation / Melasma</SelectItem>
                <SelectItem value="dullness">Dull / Tired Skin</SelectItem>
                <SelectItem value="tanning">Tanning / Uneven Tone</SelectItem>
                <SelectItem value="uneven-skin-tone">Uneven Skin Tone</SelectItem>
                <SelectItem value="open-pores">Open Pores</SelectItem>
              </SelectContent>
            </Select>
            {errors.problem && <p className="text-xs text-red-400">{errors.problem}</p>}
          </div>

          <Button
            type="submit"
            className="mt-2 w-full bg-[#be852d] text-[#080b12] font-bold hover:bg-[#be852d] hover:shadow-[0_0_20px_rgba(245,194,0,0.4)] py-6 text-base"
          >
            Continue to Skin Scan
            <HiArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
