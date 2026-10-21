import type { Metadata } from 'next'
import { IBM_Plex_Sans, Source_Serif_4 } from 'next/font/google'
import './globals.css'

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
})

const serif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Jaime León · Software Engineer',
  description: 'Jaime León, software engineer at Liferay. API infrastructure in Java, REST/OpenAPI and React. MSc Fintech (UC3M).',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  )
}
