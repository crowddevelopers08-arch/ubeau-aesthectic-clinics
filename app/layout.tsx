import type { Metadata } from "next"
import { Aboreto } from "next/font/google"
import "./globals.css"

/* ── Aboreto — maps to the same CSS variable so every
   font-outfit utility class now renders in Aboreto ── */
const aboreto = Aboreto({
  variable: "--font-outfit-var",
  subsets: ["latin"],
  weight: "400",
})

export const metadata: Metadata = {
  title: "UBÊAU Advanced Aesthetics – Bhubaneswar",
  description: "Odisha's 1st Luxury Skincare & Wellness Clinic",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={aboreto.variable}>
      <body className="font-outfit bg-brand-off-white text-brand-black overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  )
}
