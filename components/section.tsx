import type React from "react"

interface SectionProps {
  id: string
  label: string
  children: React.ReactNode
}

// Two-column CV-style row: small label on the left, content on the right.
export default function Section({ id, label, children }: SectionProps) {
  return (
    <section id={id} className="reveal scroll-mt-20 border-t py-14 md:py-20">
      <div className="grid gap-6 md:grid-cols-[160px_1fr] md:gap-12">
        <h2 className="text-sm font-medium text-muted-foreground">{label}</h2>
        <div>{children}</div>
      </div>
    </section>
  )
}
