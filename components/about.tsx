import Section from "@/components/section"

// Source: LinkedIn "About" section and CV (2026).
export default function About() {
  return (
    <Section id="about" label="About">
      <div className="max-w-2xl space-y-5 leading-relaxed">
        <p>
          I'm a software engineer at Liferay on the Headless team, which owns the platform's API infrastructure:
          Export/Import, Staging, Batch Engine, API Builder and the MCP Server. I work end to end with Java,
          REST/OpenAPI, React, JSP and Playwright.
        </p>
        <p>
          On the finance side, I hold an MSc in Financial Sector Technologies from Universidad Carlos III de Madrid:
          derivatives pricing in C++ and Java, risk (VaR, Expected Shortfall, Greeks), payments, clearing and
          settlement, and a thesis on cross-border payments between central-bank DLT networks. I also build{" "}
          <a href="https://nantia.jaimeleonro.workers.dev/" target="_blank" rel="noopener noreferrer" className="link">
            Nantia
          </a>
          , a set of personal finance calculators.
        </p>
        <p>I'm interested in how AI changes the software development lifecycle.</p>
      </div>

      <dl className="mt-10 grid max-w-2xl gap-x-6 gap-y-4 text-sm sm:grid-cols-[100px_1fr]">
        <dt className="text-muted-foreground">Finance</dt>
        <dd className="leading-relaxed">
          Derivatives pricing (Monte Carlo, Black-Scholes), fixed income and yield curves, risk management (VaR,
          Expected Shortfall, Greeks, backtesting), electronic trading, payments, clearing and settlement, DLT and
          CBDCs.
        </dd>
        <dt className="text-muted-foreground">Skills</dt>
        <dd className="leading-relaxed">
          Java, Spring Boot, React, TypeScript, JSP, Playwright, OpenAPI, SQL, PostgreSQL, MongoDB, MariaDB, AWS (S3,
          Glue, Athena), Git, Linux, DLT and smart contracts. Basic C++.
        </dd>
        <dt className="text-muted-foreground">Languages</dt>
        <dd>Spanish (native), English (full professional), French (basic)</dd>
        <dt className="text-muted-foreground">Interests</dt>
        <dd>Gym, football, handball, golf, cooking and music</dd>
      </dl>
    </Section>
  )
}
