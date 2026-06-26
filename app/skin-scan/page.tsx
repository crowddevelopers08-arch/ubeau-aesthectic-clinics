"use client"
import { useState } from "react"
import { SkinCameraModal } from "@/components/skin/camera-modal"
import { SkinScanLoader } from "@/components/skin/scan-loader"
import { SkinResultsView } from "@/components/skin/results-view"
import type { SkinFormData } from "@/components/skin/skin-types"
import { TopBanner } from "@/components/blueprint/top-banner"
import { Navbar } from "@/components/blueprint/navbar"
import { LeadFormModal } from "@/components/blueprint/lead-form-modal"
import { HeroSection } from "@/components/blueprint/hero-section"
import { PainPointsSection } from "@/components/blueprint/pain-points-section"
import { IntroducingSection } from "@/components/blueprint/introducing-section"
import { WhatsIncludedSection } from "@/components/blueprint/whats-included-section"
import { BonusesSection } from "@/components/blueprint/bonuses-section"
import { DoctorSection } from "@/components/blueprint/doctor-section"
import { WhoForSection } from "@/components/blueprint/who-for-section"
import { HowItWorksSection } from "@/components/blueprint/how-it-works-section"
import { PricingSection } from "@/components/blueprint/pricing-section"
import { FAQSection } from "@/components/blueprint/faq-section"
import { FinalCTASection } from "@/components/blueprint/final-cta-section"
import { FooterSection } from "@/components/blueprint/footer-section"

type AppState = "landing" | "form" | "camera" | "scanning" | "results"

export default function SkinBlueprintLP() {
  const [appState, setAppState] = useState<AppState>("landing")
  const [formData, setFormData] = useState<SkinFormData>({ name: "", phone: "", problem: "" })
  const [capturedImage, setCapturedImage] = useState<string | null>(null)

  const openForm = () => setAppState("form")
  const handleFormSubmit = (data: SkinFormData) => { setFormData(data); setAppState("camera") }
  const handleCapture = (imageData: string) => { setCapturedImage(imageData); setAppState("scanning") }
  const handleScanComplete = () => {
    fetch("/api/save-scan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        phone: formData.phone,
        problem: formData.problem || "acne",
        imageData: capturedImage ?? "",
        pageUrl: typeof window !== "undefined" ? window.location.href : "",
      }),
    }).catch((err) => console.error("Failed to save scan:", err))
    setAppState("results")
  }
  const handleBackToHome = () => {
    setAppState("landing")
    setFormData({ name: "", phone: "", problem: "" })
    setCapturedImage(null)
  }

  if (appState === "results")
    return <SkinResultsView formData={formData} capturedImage={capturedImage} onBack={handleBackToHome} />

  return (
    <main className="min-h-screen bg-[#080b12] text-[#f2f0eb] overflow-x-hidden">
      <LeadFormModal open={appState === "form"} onClose={() => setAppState("landing")} onSubmit={handleFormSubmit} />
      <SkinCameraModal open={appState === "camera"} onOpenChange={(open) => !open && setAppState("landing")} onCapture={handleCapture} />
      <SkinScanLoader open={appState === "scanning"} onOpenChange={() => {}} capturedImage={capturedImage} onComplete={handleScanComplete} />
      <TopBanner />
      <Navbar onCTAClick={openForm} />
      <HeroSection onCTAClick={openForm} />
      <PainPointsSection />
      <IntroducingSection />
      <WhatsIncludedSection />
      <BonusesSection />
      <DoctorSection />
      <WhoForSection />
      <HowItWorksSection />
      <PricingSection onCTAClick={openForm} />
      <FAQSection />
      <FinalCTASection onCTAClick={openForm} />
      <FooterSection />
    </main>
  )
}
