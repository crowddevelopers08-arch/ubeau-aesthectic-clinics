export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-dashboard=""
      style={{
        ["--background" as string]: "#09090b",
        ["--foreground" as string]: "#fafafa",
        ["--card" as string]: "#18181b",
        ["--card-foreground" as string]: "#fafafa",
        ["--popover" as string]: "#18181b",
        ["--popover-foreground" as string]: "#fafafa",
        ["--primary" as string]: "#be852d",
        ["--primary-foreground" as string]: "#ffffff",
        ["--secondary" as string]: "#27272a",
        ["--secondary-foreground" as string]: "#fafafa",
        ["--muted" as string]: "#27272a",
        ["--muted-foreground" as string]: "#a1a1aa",
        ["--accent" as string]: "#27272a",
        ["--accent-foreground" as string]: "#fafafa",
        ["--destructive" as string]: "#ef4444",
        ["--destructive-foreground" as string]: "#ffffff",
        ["--border" as string]: "#27272a",
        ["--input" as string]: "#27272a",
        ["--ring" as string]: "#be852d",
        background: "#09090b",
        color: "#fafafa",
        minHeight: "100vh",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {children}
    </div>
  )
}
