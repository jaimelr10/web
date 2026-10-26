import type React from "react"
import Image, { type StaticImageData } from "next/image"
import { Manrope } from "next/font/google"
import Section from "@/components/section"
import LiferayLogo from "../public/LiferayLogo.png"
import MarcadorDeChapas from "../public/MarcadorDeChapas.png"
import NantiaIcon from "../public/nantia-icon.svg"
import LiveEarningsIcon from "../public/LiveEarningsIcon.png"

// Nantia's own brand font, used only for its wordmark below.
const manrope = Manrope({ subsets: ["latin"], weight: ["700"] })

const NantiaLogo = (
  <div className="flex h-full items-center justify-center gap-3">
    <Image src={NantiaIcon} alt="" width={56} height={56} />
    <span className={`${manrope.className} text-5xl tracking-tight text-[#0e1726]`}>
      nantia
      <span className="ml-1 inline-block h-[0.32em] w-[0.32em] rounded-full bg-[#2448d8]" />
    </span>
  </div>
)

// Same layout as the other app covers: icon next to the app name.
const LiveEarningsLogo = (
  <div className="flex h-full items-center justify-center gap-4">
    <Image src={LiveEarningsIcon} alt="" width={64} height={64} className="rounded-xl" />
    <span className="text-2xl font-semibold tracking-tight">Live Earnings</span>
  </div>
)

interface ProjectLink {
  label: string
  href: string
}

interface Project {
  title: string
  description: string
  image?: StaticImageData
  cover?: React.ReactNode
  tags: string[]
  links: ProjectLink[]
}

const projects: Project[] = [
  {
    title: "Nantia - Financial Calculator",
    description:
      "Personal finance calculators for Spain: net salary by region, mortgage, rent vs. buy, compound interest, FIRE and retirement. Inputs live in the URL, so a shared link opens with the same values. Every page is prerendered for SEO. Built with Claude Code as an AI pair programmer.",
    cover: NantiaLogo,
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts", "Vitest", "Playwright", "Cloudflare", "Claude Code"],
    links: [{ label: "Website", href: "https://nantia.jaimeleonro.workers.dev/" }],
  },
  {
    title: "Liferay DXP",
    description:
      "240+ public pull requests to the open-source Liferay DXP platform since 2023, mostly on the Export/Import revamp, API Builder and the migration of tests to Playwright.",
    image: LiferayLogo,
    tags: ["Java", "REST / OpenAPI", "React", "JSP", "Playwright"],
    links: [
      {
        label: "Pull requests",
        href: "https://github.com/search?q=author%3Ajaimelr10+org%3Aliferay-headless+org%3Aliferay&type=pullrequests",
      },
      { label: "Website", href: "https://www.liferay.com/" },
    ],
  },
  {
    title: "Live Earnings",
    description: "Android app to track your daily earnings in real time. Built with AI-assisted development.",
    cover: LiveEarningsLogo,
    tags: ["Android", "React Native"],
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.jaimeleon.liveearningsapp" },
    ],
  },
  {
    title: "Marcador de Fútbol Chapas",
    description: "Scoreboard app for bottlecap football. More than 975 downloads on Google Play.",
    image: MarcadorDeChapas,
    tags: ["Android", "React Native"],
    links: [{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.marcadorchapas&hl=es" }],
  },
]

export default function Projects() {
  return (
    <Section id="projects" label="Projects">
      <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.title}>
            <div className="relative aspect-[2/1] overflow-hidden rounded-sm border bg-white">
              {/* Images are wide wordmarks, so fit them whole instead of cropping */}
              {project.cover ??
                (project.image && (
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 400px, 100vw"
                    className="object-contain p-6"
                  />
                ))}
            </div>
            <h3 className="mt-4 font-semibold">{project.title}</h3>
            <p className="mt-1 leading-relaxed text-muted-foreground">{project.description}</p>
            <p className="mt-2 text-sm text-muted-foreground">{project.tags.join(" · ")}</p>
            {project.links.length > 0 && (
              <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                {project.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="link">
                    {link.label}
                  </a>
                ))}
              </p>
            )}
          </li>
        ))}
      </ul>
    </Section>
  )
}
