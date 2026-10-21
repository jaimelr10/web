import Section from "@/components/section"

export default function Contact() {
  return (
    <Section id="contact" label="Contact">
      <p className="max-w-xl leading-relaxed">
        I'm open to talking about new projects and opportunities. The best way to reach me is by email.
      </p>
      <a href="mailto:jaimeleonro@gmail.com" className="link mt-6 inline-block font-serif text-2xl md:text-3xl">
        jaimeleonro@gmail.com
      </a>
      <dl className="mt-8 grid max-w-md grid-cols-[100px_1fr] gap-y-2 text-sm">
        <dt className="text-muted-foreground">LinkedIn</dt>
        <dd>
          <a href="https://www.linkedin.com/in/jaime-leon-rosado/" target="_blank" rel="noopener noreferrer" className="link">
            jaime-leon-rosado
          </a>
        </dd>
        <dt className="text-muted-foreground">GitHub</dt>
        <dd>
          <a href="https://github.com/jaimelr10" target="_blank" rel="noopener noreferrer" className="link">
            jaimelr10
          </a>
        </dd>
      </dl>
    </Section>
  )
}
