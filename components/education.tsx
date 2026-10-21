import Section from "@/components/section"

interface Degree {
  title: string
  institution: string
  location: string
  period: string
  points: string[]
}

interface Course {
  name: string
  issuer: string
  date: string
}

// Source: CV (2026) and LinkedIn profile.
const degrees: Degree[] = [
  {
    title: "MSc in Financial Sector Technologies (Fintech)",
    institution: "Universidad Carlos III de Madrid",
    location: "Madrid, Spain",
    period: "Sep 2025 – Jul 2026",
    points: [
      "Quantitative finance: derivatives pricing (Monte Carlo, Black-Scholes), fixed income and yield curves, in modern C++ and Java.",
      "Risk management: sensitivity analysis (Greeks), Value-at-Risk, Expected Shortfall and model backtesting.",
      "Market infrastructure: electronic trading, clearing and settlement, payment systems and digital assets.",
      "Data, ML and blockchain: Big Data (Hadoop, MapReduce), machine learning in finance and smart contracts (eIDAS).",
      "Thesis: an interoperability model for wholesale CBDCs across heterogeneous central-bank DLT networks, for cross-border payments.",
    ],
  },
  {
    title: "BSc in Computer Science (Software Engineering)",
    institution: "University of Castilla-La Mancha",
    location: "Ciudad Real, Spain",
    period: "Sep 2017 – Jul 2022",
    points: [
      "Bilingual (English) degree focused on software quality and engineering. Graduated with distinction; final thesis graded 9.0/10.",
    ],
  },
]

const courses: Course[] = [
  { name: "React: De cero a experto (Hooks y MERN)", issuer: "Udemy", date: "Dec 2024" },
  { name: "M103 · Basic Cluster Administration", issuer: "MongoDB", date: "Apr 2022" },
  { name: "M001 · MongoDB Basics", issuer: "MongoDB", date: "Apr 2022" },
  { name: "Curso de Desarrollo de Apps Móviles", issuer: "Google España", date: "Jan 2018" },
]

export default function Education() {
  return (
    <Section id="education" label="Education">
      <div className="space-y-10">
        {degrees.map((degree) => (
          <div key={degree.title}>
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="font-semibold">{degree.title}</h3>
              <p className="shrink-0 text-sm tabular-nums text-muted-foreground">{degree.period}</p>
            </div>
            <p className="text-sm text-muted-foreground">
              {degree.institution} · {degree.location}
            </p>
            <ul className="mt-3 max-w-2xl list-disc space-y-1.5 pl-5 leading-relaxed marker:text-muted-foreground">
              {degree.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h3 className="mb-2 mt-12 text-sm font-medium text-muted-foreground">Courses</h3>
      <ul className="divide-y border-y">
        {courses.map((course) => (
          <li key={course.name} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:gap-6">
            <span className="flex-1">{course.name}</span>
            <span className="text-sm text-muted-foreground sm:w-40">{course.issuer}</span>
            <span className="text-sm tabular-nums text-muted-foreground sm:w-24 sm:whitespace-nowrap sm:text-right">
              {course.date}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
