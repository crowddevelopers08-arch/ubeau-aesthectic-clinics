"use client"

import { useState } from "react"
import { ArrowLeft, Download, CheckCircle2, Loader2, Sparkles, ClipboardList, FileText, MessageCircle, Star } from "lucide-react"
import type { SkinFormData } from "./skin-types"

interface SkinResultsViewProps {
  formData: SkinFormData
  capturedImage: string | null
  onBack: () => void
}

const resultsData = {
  acne: {
    title: "Acne & Breakout Blueprint",
    scanBadge: "Active Acne Concern Detected",
    finding: "Your scan indicates signs of acne activity and potential breakout triggers.",
    description:
      "Dr. Sampada's 24-Hour Skin Blueprint™ will map a targeted routine — covering the right actives, ingredient combinations to avoid, and product picks calibrated to your budget — so you can finally get clear skin without the guesswork.",
    docTitle: "Acne Blueprint Preview Guide",
    docDescription: "A teaser guide on acne-prone skin principles. Your full personalized blueprint is crafted by Dr. Sampada within 24 hours.",
  },
  pigmentation: {
    title: "Pigmentation Blueprint",
    scanBadge: "Uneven Pigmentation Detected",
    finding: "Your scan suggests visible pigmentation concerns and uneven skin tone.",
    description:
      "Your 24-Hour Skin Blueprint™ will outline a science-backed brightening and correction protocol — with the right Vitamin C, AHA/BHA, and SPF recommendations chosen specifically for your skin profile and budget.",
    docTitle: "Pigmentation Blueprint Preview Guide",
    docDescription: "A teaser guide on pigmentation correction principles. Your complete blueprint is personally crafted by Dr. Sampada.",
  },
  dullness: {
    title: "Glow & Radiance Blueprint",
    scanBadge: "Dullness & Low Radiance Detected",
    finding: "Your scan indicates a lack of radiance and signs of dull, fatigued skin.",
    description:
      "Dr. Sampada's 24-Hour Skin Blueprint™ will build a hydration-first, glow-restoring routine tailored to your skin — with the actives and lifestyle tweaks that actually revive luminosity, not just mask it.",
    docTitle: "Radiance Blueprint Preview Guide",
    docDescription: "A teaser guide on glow-boosting skin strategies. Your complete blueprint is personally delivered within 24 hours.",
  },
  tanning: {
    title: "De-Tan & Clarity Blueprint",
    scanBadge: "Sun Tanning & Tone Shift Detected",
    finding: "Your scan shows visible tanning and a shift in skin clarity and tone.",
    description:
      "Your 24-Hour Skin Blueprint™ will lay out a de-tan and recovery plan — combining the right exfoliants, antioxidants, and barrier-supportive products so your natural tone is restored efficiently and without irritation.",
    docTitle: "De-Tan Blueprint Preview Guide",
    docDescription: "A teaser guide on tanning recovery and skin clarity. Your full personalized blueprint follows within 24 hours.",
  },
  "uneven-skin-tone": {
    title: "Even Tone Blueprint",
    scanBadge: "Uneven Skin Tone Concern Detected",
    finding: "Your scan indicates uneven distribution of pigment and tone irregularity.",
    description:
      "Dr. Sampada's 24-Hour Skin Blueprint™ will deliver a precision tone-correction plan — identifying the right combination of brightening actives, targeted serums, and SPF habits to bring your skin back to balance.",
    docTitle: "Even Tone Blueprint Preview Guide",
    docDescription: "A teaser guide on skin tone correction principles. Your complete personalized blueprint is ready within 24 hours.",
  },
  "open-pores": {
    title: "Pore & Texture Blueprint",
    scanBadge: "Enlarged Pores Detected",
    finding: "Your scan suggests visibly enlarged pores and skin texture concerns.",
    description:
      "Your 24-Hour Skin Blueprint™ will prescribe the right niacinamide, retinol, and exfoliant strategy to visibly tighten pores and refine skin texture — calibrated to your skin type and monthly budget.",
    docTitle: "Pore & Texture Blueprint Preview Guide",
    docDescription: "A teaser guide on pore care and texture refinement. Your full blueprint is personally crafted by Dr. Sampada.",
  },
} as const

type SkinProblemKey = keyof typeof resultsData

async function downloadSkinGuide(problem: SkinProblemKey, name: string, fileName: string) {
  const params = new URLSearchParams({ problem, name })
  const response = await fetch(`/api/skin-guide?${params.toString()}`)
  if (!response.ok) throw new Error("Failed to generate PDF")
  const blob = await response.blob()
  const blobUrl = window.URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = blobUrl
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  window.URL.revokeObjectURL(blobUrl)
}

const blueprintInclusions = [
  "Personalized Skin Assessment Review",
  "Customized Skin Blueprint PDF",
  "Product Recommendation Sheet",
  "WhatsApp Implementation Support",
]

const bonusInclusions = [
  "BONUS: Skin Type Assessment Toolkit",
  "BONUS: Top 10 Expert-Approved Products",
  "BONUS: Common Skincare Mistakes Guide",
]

export function SkinResultsView({ formData, capturedImage, onBack }: SkinResultsViewProps) {
  const [pdfGenerating, setPdfGenerating] = useState(false)

  const problem = (formData.problem || "acne") as SkinProblemKey
  const data = resultsData[problem]

  const handleDownload = async () => {
    if (pdfGenerating) return
    setPdfGenerating(true)
    try {
      const saveRes = await fetch("/api/save-scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          problem,
          imageData: capturedImage ?? "",
          pageUrl: window.location.href,
        }),
      })
      // 409 means this phone was already saved (e.g. saved on scan complete) — treat as success
      if (!saveRes.ok && saveRes.status !== 409) {
        const payload = await saveRes.json().catch(() => ({ error: "Failed to save scan" }))
        throw new Error(payload?.error || "Failed to save scan")
      }
      await downloadSkinGuide(problem, formData.name.trim(), `${data.docTitle.replace(/\s+/g, "_")}.pdf`)
      window.location.assign("/skin-scan-thank-you")
    } catch (err) {
      console.error("Download failed:", err)
    } finally {
      setPdfGenerating(false)
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: "#080b12", color: "#f2f0eb", padding: "0" }}>
      <style>{`
        .pdf-card-inner { display: flex; align-items: center; gap: 18px; flex-wrap: wrap; }
        .pdf-dl-btn { display: flex; flex-shrink: 0; }
        .mobile-dl-btn { display: none; }
        @media (max-width: 480px) {
          .pdf-card-inner { flex-direction: column; align-items: stretch; }
          .pdf-dl-btn { display: none; }
          .mobile-dl-btn { display: flex; }
        }
      `}</style>

      <div style={{ position: "fixed", inset: 0, background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(245,194,0,0.07), transparent)", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "680px", margin: "0 auto", padding: "28px 16px 60px" }}>

        {/* Back button */}
        <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: "8px", background: "none", border: "none", color: "#8a8a8a", fontSize: "0.88rem", fontWeight: 600, cursor: "pointer", marginBottom: "28px", padding: "0" }}>
          <ArrowLeft style={{ width: 15, height: 15 }} />
          Back to Home
        </button>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <div style={{ width: 60, height: 60, borderRadius: "50%", margin: "0 auto 14px", border: "1px solid rgba(245,194,0,0.4)", background: "rgba(245,194,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 30px rgba(245,194,0,0.25)" }}>
            <CheckCircle2 style={{ width: 28, height: 28, color: "#be852d" }} />
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(245,194,0,0.12)", border: "1px solid rgba(245,194,0,0.3)", borderRadius: "999px", padding: "4px 14px", marginBottom: "12px" }}>
            <Sparkles style={{ width: 12, height: 12, color: "#be852d" }} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#be852d" }}>Scan Complete</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 800, marginBottom: "6px", letterSpacing: "-0.02em" }}>{data.title}</h1>
          {formData.name && (
            <p style={{ color: "#8a8a8a", fontSize: "0.92rem" }}>
              Personalized for <span style={{ color: "#be852d", fontWeight: 600 }}>{formData.name}</span>
            </p>
          )}
          <div style={{ margin: "16px auto 0", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
            <div style={{ height: "1px", width: 36, background: "linear-gradient(90deg, transparent, rgba(245,194,0,0.5))" }} />
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#be852d", boxShadow: "0 0 6px rgba(245,194,0,0.8)" }} />
            <div style={{ height: "1px", width: 36, background: "linear-gradient(270deg, transparent, rgba(245,194,0,0.5))" }} />
          </div>
        </div>

        {/* Scan Finding Card */}
        <div style={{ background: "linear-gradient(145deg, #0e1118, #0a0d15)", border: "1px solid rgba(245,194,0,0.2)", borderRadius: "16px", padding: "22px 24px", marginBottom: "16px", position: "relative", overflow: "hidden", boxShadow: "0 4px 30px rgba(0,0,0,0.4), inset 0 1px 0 rgba(245,194,0,0.07)" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #be852d, transparent)" }} />
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(245,194,0,0.1)", borderRadius: "6px", padding: "3px 10px", marginBottom: "10px" }}>
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#be852d" }}>{data.scanBadge}</span>
          </div>
          <p style={{ fontWeight: 600, color: "#f2f0eb", fontSize: "0.95rem", marginBottom: "8px" }}>{data.finding}</p>
          <p style={{ lineHeight: 1.75, color: "#8a8a8a", fontSize: "0.88rem" }}>{data.description}</p>
        </div>

        {/* Blueprint Inclusions */}
        <div style={{ background: "linear-gradient(145deg, #0e1118, #0a0d15)", border: "1px solid rgba(245,194,0,0.15)", borderRadius: "16px", padding: "22px 24px", marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
            <ClipboardList style={{ width: 16, height: 16, color: "#be852d", flexShrink: 0 }} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#be852d" }}>Your Blueprint Includes</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {blueprintInclusions.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <CheckCircle2 style={{ width: 15, height: 15, color: "#be852d", flexShrink: 0 }} />
                <span style={{ fontSize: "0.88rem", color: "#f2f0eb" }}>{item}</span>
              </div>
            ))}
            {bonusInclusions.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Star style={{ width: 15, height: 15, color: "#be852d", flexShrink: 0 }} />
                <span style={{ fontSize: "0.88rem", color: "#be852d", fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile download button */}
        <button onClick={handleDownload} disabled={pdfGenerating} className="mobile-dl-btn" style={{ alignItems: "center", justifyContent: "center", gap: "8px", width: "100%", marginBottom: "14px", background: "rgba(245,194,0,0.1)", color: "#be852d", border: "1px solid rgba(245,194,0,0.3)", borderRadius: "12px", padding: "12px", fontSize: "0.9rem", fontWeight: 700, cursor: pdfGenerating ? "not-allowed" : "pointer", opacity: pdfGenerating ? 0.7 : 1 }}>
          {pdfGenerating ? <Loader2 style={{ width: 16, height: 16, animation: "spin 1s linear infinite" }} /> : <Download style={{ width: 16, height: 16 }} />}
          {pdfGenerating ? "Generating..." : "Download Preview Guide"}
        </button>

        {/* Preview PDF card */}
        <div style={{ background: "linear-gradient(135deg, rgba(245,194,0,0.1), rgba(245,194,0,0.04))", border: "1px solid rgba(245,194,0,0.3)", borderRadius: "16px", padding: "20px 24px", marginBottom: "16px", position: "relative", overflow: "hidden", boxShadow: "0 4px 24px rgba(245,194,0,0.07)" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #be852d, transparent)" }} />
          <div className="pdf-card-inner">
            <div style={{ width: 48, height: 48, borderRadius: "12px", flexShrink: 0, border: "1px solid rgba(245,194,0,0.4)", background: "rgba(245,194,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FileText style={{ width: 22, height: 22, color: "#be852d" }} />
            </div>
            <div style={{ flex: 1, minWidth: "140px" }}>
              <p style={{ fontWeight: 700, fontSize: "0.93rem", color: "#f2f0eb", marginBottom: "3px" }}>{data.docTitle}</p>
              <p style={{ fontSize: "0.79rem", color: "#8a8a8a", lineHeight: 1.5 }}>{data.docDescription}</p>
            </div>
            <button onClick={handleDownload} disabled={pdfGenerating} className="pdf-dl-btn" style={{ alignItems: "center", gap: "7px", background: "rgba(245,194,0,0.12)", color: "#be852d", border: "1px solid rgba(245,194,0,0.35)", borderRadius: "10px", padding: "10px 18px", fontSize: "0.85rem", fontWeight: 700, cursor: pdfGenerating ? "not-allowed" : "pointer", opacity: pdfGenerating ? 0.7 : 1, transition: "all 0.2s" }}>
              {pdfGenerating ? <Loader2 style={{ width: 15, height: 15, animation: "spin 1s linear infinite" }} /> : <Download style={{ width: 15, height: 15 }} />}
              {pdfGenerating ? "Generating..." : "Download Free Preview"}
            </button>
          </div>
        </div>

        {/* Main Blueprint CTA */}
        <div style={{ background: "linear-gradient(145deg, #0e1118, #0a0d15)", border: "1px solid rgba(245,194,0,0.25)", borderRadius: "16px", padding: "24px", textAlign: "center", boxShadow: "0 0 60px rgba(245,194,0,0.08)" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#be852d", marginBottom: "8px" }}>Founding Client Offer</p>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#f2f0eb", marginBottom: "4px", letterSpacing: "-0.01em" }}>Get Your Complete 24-Hour Skin Blueprint™</h2>
          <p style={{ fontSize: "0.85rem", color: "#8a8a8a", marginBottom: "16px", lineHeight: 1.6 }}>
            Personally crafted by Dr. Sampada Sethia · Delivered within 24 hours
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "16px" }}>
            <span style={{ fontSize: "0.85rem", color: "#8a8a8a", textDecoration: "line-through" }}>₹1,999</span>
            <span style={{ fontSize: "2rem", fontWeight: 800, color: "#be852d", lineHeight: 1 }}>₹999</span>
            <span style={{ fontSize: "0.78rem", color: "#8a8a8a", background: "rgba(245,194,0,0.1)", border: "1px solid rgba(245,194,0,0.2)", borderRadius: "6px", padding: "2px 8px" }}>Founding Client</span>
          </div>
          <a
            href="https://wa.me/917340020073?text=Hi%20Dr.%20Sampada%2C%20I%20just%20completed%20my%20skin%20scan%20and%20I%27d%20like%20to%20get%20my%2024-Hour%20Skin%20Blueprint%E2%84%A2"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#be852d", color: "#080b12", borderRadius: "12px", padding: "14px 32px", fontSize: "0.97rem", fontWeight: 800, textDecoration: "none", boxShadow: "0 0 28px rgba(245,194,0,0.35)", transition: "all 0.2s", marginBottom: "14px", width: "100%", justifyContent: "center" }}
          >
            <MessageCircle style={{ width: 18, height: 18 }} />
            Get My Blueprint — ₹999
          </a>
          <p style={{ fontSize: "0.78rem", color: "#8a8a8a" }}>
            Limited Founding Client Spots · Price increases once filled
          </p>
        </div>
      </div>

    </div>
  )
}
