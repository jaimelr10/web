import Image from "next/image"
import me from "../assets/me.jpg"
import { CV_URL } from "@/lib/paths"

export default function Hero() {
  return (
    <section id="home" className="pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="flex flex-col-reverse gap-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h1 className="font-serif text-5xl font-semibold tracking-tight md:text-6xl">Jaime León</h1>
          <p className="mt-3 text-lg text-muted-foreground">Software Engineer @ Liferay · MSc Fintech (UC3M)</p>
          <p className="mt-8 text-lg leading-relaxed">
            I build the API infrastructure of the Liferay platform, end to end in Java, REST/OpenAPI and React.
            I also hold an MSc in Financial Sector Technologies, covering quantitative finance, risk and payments
            infrastructure, with a thesis on cross-border payments between central-bank DLT networks.
          </p>
          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <li>
              <a
                href={CV_URL}
                download
                className="inline-flex items-center rounded-sm bg-foreground px-4 py-2 font-medium text-background transition-opacity hover:opacity-85"
              >
                Download CV
              </a>
            </li>
            <li>
              <a href="mailto:jaimeleonro@gmail.com" className="link">
                jaimeleonro@gmail.com
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jaime-leon-rosado/" target="_blank" rel="noopener noreferrer" className="link">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/jaimelr10" target="_blank" rel="noopener noreferrer" className="link">
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <Image
          src={me}
          alt="Jaime León"
          width={176}
          height={176}
          priority
          className="h-32 w-32 shrink-0 rounded object-cover md:h-44 md:w-44"
        />
      </div>
    </section>
  )
}
