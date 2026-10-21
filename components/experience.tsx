import Image, { type StaticImageData } from "next/image"
import Section from "@/components/section"
import LiferayRound from "../public/LiferayRound.jpeg"
import GlobalsuiteRound from "../public/GlobalsuiteRound.jpeg"
import UCLMRound from "../public/UCLMRound.png"

interface Role {
  title: string
  period: string
  summary?: string
  points: string[]
}

interface Company {
  name: string
  location: string
  logo: StaticImageData
  roles: Role[]
  skills: string[]
}

// Source: CV (2026) and LinkedIn profile.
const companies: Company[] = [
  {
    name: "Liferay",
    location: "Madrid, Spain · Hybrid",
    logo: LiferayRound,
    roles: [
      {
        title: "Software Engineer, Headless team",
        period: "Dec 2025 – Present",
        summary:
          "The team owns the platform's API infrastructure: Export/Import, Staging, Batch Engine, Data Migration Center, API Builder and MCP Server.",
        points: [
          "Architected the Export/Import headless API revamp: a new REST layer and a UI component library built from scratch, shipped incrementally behind feature flags.",
          "Own features end to end, from technical design to implementation, testing and release.",
          "Onboarded three engineers to the team's codebase; new hires were resolving tickets on their own within ten days.",
          "Drove the team's adoption of AI-assisted development (Claude Code, Gemini CLI), sharing workflows for design, testing and code review.",
          "Review teammates' pull requests across the team's modules.",
          "Investigate customer issues escalated by Support, decide the fix strategy and deliver hotfixes backported across supported versions.",
        ],
      },
      {
        title: "Associate Software Engineer",
        period: "Oct 2022 – Dec 2025",
        summary: "Joined through the Graduate Program in the Content Management team, then moved to the Headless team in 2023.",
        points: [
          "Built full-stack features, bug fixes and enhancements with Java, JSP and React across Wiki, Knowledge Base, Web Content, Documents & Media, Export/Import, Staging, Batch Planner and API Builder.",
          "Rolled out Playwright end-to-end test infrastructure across 6+ modules, moving a 15-engineer team off the legacy Poshi framework.",
          "Handled customer tickets escalated by Support from 2024 onward: root-cause analysis, fixes and backports.",
        ],
      },
    ],
    skills: ["Java", "REST / OpenAPI", "React", "TypeScript", "JSP", "Playwright", "Liferay DXP", "Gradle", "Git"],
  },
  {
    name: "GlobalSuite Solutions",
    location: "Remote",
    logo: GlobalsuiteRound,
    roles: [
      {
        title: "Junior Data Engineer",
        period: "Feb 2022 – Sep 2022",
        points: [
          "Built an AWS data lake (S3, Glue, Athena) and ETL workflows over previously siloed data sources.",
          "Developed the backend REST API in PHP that exposed the aggregated data to consumers.",
          "Built React dashboards for reporting and data visualization.",
          "Designed and populated the MongoDB collections backing the platform.",
        ],
      },
    ],
    skills: ["AWS S3", "AWS Glue", "AWS Athena", "PHP", "React", "MongoDB"],
  },
  {
    name: "University of Castilla-La Mancha",
    location: "Ciudad Real, Spain",
    logo: UCLMRound,
    roles: [
      {
        title: "Research Assistant",
        period: "Feb 2021 – Mar 2021",
        points: [
          "Researched decentralized security and how to implement role-based access control (RBAC) with Ethereum smart contracts.",
          "Set up the team's DApps framework for its research infrastructure.",
        ],
      },
    ],
    skills: ["Ethereum", "Solidity"],
  },
]

export default function Experience() {
  return (
    <Section id="experience" label="Experience">
      <ol className="space-y-14">
        {companies.map((company) => (
          <li key={company.name} className="grid gap-x-6 gap-y-3 sm:grid-cols-[40px_1fr]">
            <Image
              src={company.logo}
              alt=""
              width={40}
              height={40}
              className="hidden h-10 w-10 rounded-sm border object-contain sm:block"
            />
            <div>
              <h3 className="font-semibold">{company.name}</h3>
              <p className="text-sm text-muted-foreground">{company.location}</p>

              <div className="mt-5 space-y-8">
                {company.roles.map((role) => (
                  <div key={role.title}>
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                      <h4 className="font-medium">{role.title}</h4>
                      <p className="shrink-0 text-sm tabular-nums text-muted-foreground">{role.period}</p>
                    </div>
                    {role.summary && <p className="mt-2 max-w-2xl text-muted-foreground">{role.summary}</p>}
                    <ul className="mt-3 max-w-2xl list-disc space-y-1.5 pl-5 leading-relaxed marker:text-muted-foreground">
                      {role.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm text-muted-foreground">{company.skills.join(" · ")}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
