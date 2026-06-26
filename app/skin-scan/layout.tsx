import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "UBÊAU Advanced Aesthetics – Free Skin Scan",
  description: "Advanced AI skin analysis for Indian skin. Scan your skin and get a personalised blueprint.",
}

export default function SkinScanLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        ["--background" as string]: "#080b12",
        ["--foreground" as string]: "#f2f0eb",
        ["--card" as string]: "#0e1118",
        ["--card-foreground" as string]: "#f2f0eb",
        ["--popover" as string]: "#0a0d15",
        ["--popover-foreground" as string]: "#f2f0eb",
        ["--primary" as string]: "#be852d",
        ["--primary-foreground" as string]: "#080b12",
        ["--secondary" as string]: "#161b26",
        ["--secondary-foreground" as string]: "#f2f0eb",
        ["--muted" as string]: "#1a2030",
        ["--muted-foreground" as string]: "#8a8a8a",
        ["--accent" as string]: "#be852d",
        ["--accent-foreground" as string]: "#080b12",
        ["--destructive" as string]: "oklch(0.577 0.245 27.325)",
        ["--destructive-foreground" as string]: "#f2f0eb",
        ["--border" as string]: "#2A1F00",
        ["--input" as string]: "#161b26",
        ["--ring" as string]: "#be852d",
        background: "#080b12",
        color: "#f2f0eb",
        minHeight: "100vh",
        fontFamily: '"Playfair Display", serif',
      }}
    >
      {children}
    </div>
  )
}
