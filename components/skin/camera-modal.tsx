"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Camera, RotateCcw, FlipHorizontal } from "lucide-react"

interface SkinCameraModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onCapture: (imageData: string) => void
}

export function SkinCameraModal({ open, onOpenChange, onCapture }: SkinCameraModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const [isStreaming, setIsStreaming] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [facingMode, setFacingMode] = useState<"user" | "environment">("user")
  const [capturedImage, setCapturedImage] = useState<string | null>(null)

  const startCamera = useCallback(async (mode: "user" | "environment") => {
    try {
      setError(null)
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop())
        streamRef.current = null
      }
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: mode, width: 640, height: 480 },
      })
      streamRef.current = stream
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        videoRef.current.onloadedmetadata = () => {
          videoRef.current?.play()
          setIsStreaming(true)
        }
      }
    } catch {
      setError("Unable to access camera. Please allow camera permissions.")
    }
  }, [])

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }
    setIsStreaming(false)
  }, [])

  useEffect(() => {
    if (open) {
      setCapturedImage(null)
      startCamera(facingMode)
    } else {
      stopCamera()
      setCapturedImage(null)
    }
    return () => stopCamera()
  }, [open, facingMode, startCamera, stopCamera])

  const handleCapture = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current
      const canvas = canvasRef.current
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      const ctx = canvas.getContext("2d")
      if (ctx) {
        ctx.drawImage(video, 0, 0)
        const imageData = canvas.toDataURL("image/jpeg", 0.8)
        stopCamera()
        setCapturedImage(imageData)
      }
    }
  }

  const handleRetake = () => {
    setCapturedImage(null)
    startCamera(facingMode)
  }

  const handleFlipCamera = () => {
    const newMode = facingMode === "user" ? "environment" : "user"
    setFacingMode(newMode)
    startCamera(newMode)
  }

  const handleConfirm = () => {
    if (capturedImage) onCapture(capturedImage)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="p-0 sm:max-w-lg"
        style={{ border: "1px solid rgba(190,133,45,0.2)", background: "rgba(14,17,24,0.97)", backdropFilter: "blur(20px)" }}
      >
        <div className="relative flex flex-col items-center p-6">
          <DialogTitle className="mb-4 text-xl font-bold" style={{ color: "#f2f0eb" }}>
            Position Your Face
          </DialogTitle>
          <DialogDescription className="mb-4 text-center text-sm" style={{ color: "#8a8a8a" }}>
            {capturedImage ? "Happy with the photo? Confirm or retake." : "Align your face within the circle for optimal scanning"}
          </DialogDescription>

          <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl" style={{ background: "#080b12" }}>
            {error ? (
              <div className="flex h-full items-center justify-center p-4 text-center" style={{ color: "#f87171" }}>{error}</div>
            ) : capturedImage ? (
              <img src={capturedImage} alt="Captured" className="h-full w-full object-cover" />
            ) : (
              <>
                <video ref={videoRef} autoPlay playsInline muted className="h-full w-full object-cover" />

                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div
                    className="relative h-64 w-64 rounded-full"
                    style={{ border: "4px solid rgba(190,133,45,0.6)", boxShadow: "0 0 30px rgba(190,133,45,0.3),inset 0 0 30px rgba(190,133,45,0.1)" }}
                  >
                    <div className="absolute -left-1 -top-1 h-6 w-6 rounded-tl-full" style={{ borderLeft: "4px solid #be852d", borderTop: "4px solid #be852d" }} />
                    <div className="absolute -right-1 -top-1 h-6 w-6 rounded-tr-full" style={{ borderRight: "4px solid #be852d", borderTop: "4px solid #be852d" }} />
                    <div className="absolute -bottom-1 -left-1 h-6 w-6 rounded-bl-full" style={{ borderBottom: "4px solid #be852d", borderLeft: "4px solid #be852d" }} />
                    <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-br-full" style={{ borderBottom: "4px solid #be852d", borderRight: "4px solid #be852d" }} />
                  </div>
                </div>

                {isStreaming && (
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-full overflow-hidden">
                    <div className="animate-scan absolute left-1/2 h-1 w-64 -translate-x-1/2 opacity-80" style={{ background: "linear-gradient(to right, transparent, #be852d, transparent)", boxShadow: "0 0 20px rgba(190,133,45,0.8)" }} />
                  </div>
                )}

                <button
                  onClick={handleFlipCamera}
                  className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full transition-all"
                  style={{ border: "1px solid rgba(190,133,45,0.3)", background: "rgba(8,11,18,0.7)", color: "#be852d", backdropFilter: "blur(4px)" }}
                >
                  <FlipHorizontal className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          <canvas ref={canvasRef} className="hidden" />

          {capturedImage ? (
            <div className="mt-6 flex w-full gap-3">
              <Button
                onClick={handleRetake}
                variant="outline"
                className="flex-1 flex items-center gap-2 py-6 text-base font-semibold"
                style={{ border: "1px solid rgba(190,133,45,0.4)", color: "#be852d", background: "transparent" }}
              >
                <RotateCcw className="h-5 w-5" />
                Retake
              </Button>
              <Button
                onClick={handleConfirm}
                className="flex-1 flex items-center gap-2 py-6 text-base font-semibold"
                style={{ background: "#be852d", color: "#080b12" }}
              >
                <Camera className="h-5 w-5" />
                Confirm
              </Button>
            </div>
          ) : (
            <Button
              onClick={handleCapture}
              disabled={!isStreaming}
              className="mt-6 flex items-center gap-2 px-8 py-6 text-lg font-semibold disabled:opacity-50"
              style={{ background: "#be852d", color: "#080b12" }}
            >
              <Camera className="h-5 w-5" />
              Capture
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
