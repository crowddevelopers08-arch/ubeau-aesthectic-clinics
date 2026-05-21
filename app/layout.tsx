import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"

const outfit = Outfit({
  variable: "--font-outfit-var",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
})

export const metadata: Metadata = {
  title: "UBÊAU Advanced Aesthetics – Bhubaneswar",
  description: "Odisha's 1st Luxury Skincare & Wellness Clinic",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-outfit bg-white text-brand-black overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  )
}
