import type { Metadata } from "next"
import { Aboreto, Playfair_Display } from "next/font/google"
import "./globals.css"

/* ── Aboreto — headings (h1, h2) ── */
const aboreto = Aboreto({
  variable: "--font-aboreto-var",
  subsets: ["latin"],
  weight: "400",
})

/* ── Playfair Display — subheadings (h3–h6) and body ── */
const playfair = Playfair_Display({
  variable: "--font-playfair-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "UBÊAU Advanced Aesthetics – Bhubaneswar",
  description: "Odisha's 1st Luxury Skincare & Wellness Clinic",
  icons: {
    icon: '/logofav.png',
    shortcut: '/logofav.png',
    apple: '/logofav.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${aboreto.variable} ${playfair.variable}`}>
      <body className="font-outfit bg-brand-off-white text-brand-black overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  )
}
