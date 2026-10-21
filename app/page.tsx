"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Education from "@/components/education"
import Experience from "@/components/experience"

export default function Home() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    gsap.registerPlugin(ScrollTrigger)

    // One quiet fade per section, played once.
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 16,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-6">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
