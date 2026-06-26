"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

interface SkinScanLoaderProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  capturedImage: string | null
  onComplete: () => void
}

export function SkinScanLoader({ open, onOpenChange, capturedImage, onComplete }: SkinScanLoaderProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [analysisText, setAnalysisText] = useState("Initializing scan...")

  useEffect(() => {
    if (!open) {
      setProgress(0)
      setIsComplete(false)
      setAnalysisText("Initializing scan...")
      return
    }

    const texts = [
      "Initializing AI skin scan...",
      "Detecting skin tone & texture...",
      "Identifying skin concerns...",
      "Mapping personalized blueprint factors...",
      "Preparing your skin report...",
    ]

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 2 + 0.5
        if (newProgress >= 100) {
          clearInterval(interval)
          setIsComplete(true)
          setAnalysisText("Analysis complete!")
          return 100
        }

        const textIndex = Math.min(Math.floor(newProgress / 25), texts.length - 1)
        setAnalysisText(texts[textIndex])
        return newProgress
      })
    }, 150)

    return () => clearInterval(interval)
  }, [open])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-md"
        style={{ border: "1px solid rgba(190,133,45,0.2)", background: "rgba(14,17,24,0.97)", backdropFilter: "blur(20px)" }}
      >
        <div className="flex flex-col items-center p-6">
          <DialogTitle className="mb-6 text-2xl font-bold text-center" style={{ color: "#f2f0eb" }}>
            AI Skin Analysis
            <span className="block text-sm font-normal mt-1" style={{ color: "#8a8a8a" }}>
              Powered by UBÊAU Blueprint Engine
            </span>
          </DialogTitle>
          <DialogDescription className="sr-only">
            AI is analyzing your skin. Please wait while we process your image.
          </DialogDescription>

          <div
            className="relative mb-6 h-48 w-48 overflow-hidden rounded-full"
            style={{ border: "4px solid rgba(190,133,45,0.4)", boxShadow: "0 0 40px rgba(190,133,45,0.3)" }}
          >
            {capturedImage && <img src={capturedImage} alt="Captured face" className="h-full w-full object-cover" />}

            {!isComplete && (
              <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(8,11,18,0.3)" }}>
                <div className="h-full w-full animate-pulse" style={{ background: "linear-gradient(to bottom, rgba(190,133,45,0.2), transparent, rgba(190,133,45,0.2))" }} />
                <div className="absolute inset-x-0 top-0 h-full overflow-hidden">
                  <div
                    className="animate-scan-slow absolute left-0 h-1 w-full"
                    style={{ background: "linear-gradient(to right, transparent, #be852d, transparent)", boxShadow: "0 0 15px rgba(190,133,45,0.8)" }}
                  />
                </div>
              </div>
            )}

            {isComplete && (
              <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(8,11,18,0.5)" }}>
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ background: "#be852d", boxShadow: "0 0 30px rgba(190,133,45,0.6)" }}
                >
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#080b12" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            )}
          </div>

          <div className="w-full space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span style={{ color: "#8a8a8a" }}>{analysisText}</span>
              <span className="font-mono" style={{ color: "#be852d" }}>{Math.round(progress)}%</span>
            </div>
            <Progress
              value={progress}
              className="h-3"
              style={{ background: "#1a2030" }}
              indicatorStyle={{ background: "#be852d" }}
            />
          </div>

          {isComplete && (
            <Button
              onClick={onComplete}
              className="mt-8 px-8 py-6 text-lg font-semibold"
              style={{ background: "#be852d", color: "#080b12" }}
            >
              See Your Results
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
