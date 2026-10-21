"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { CV_URL } from "@/lib/paths"

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur-sm transition-[border-color] ${
        scrolled || isMenuOpen ? "border-b" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a href="#" className="font-serif text-lg font-semibold">
          Jaime León
        </a>

        <ul className="hidden gap-7 text-sm text-muted-foreground md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={CV_URL} download className="font-medium text-foreground link">
              CV
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="-mr-2 p-2 md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isMenuOpen && (
        <ul className="mx-auto max-w-5xl px-6 pb-4 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="block py-2" onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={CV_URL} download className="block py-2 font-medium">
              Download CV
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
