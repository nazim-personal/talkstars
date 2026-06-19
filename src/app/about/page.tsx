import type { Metadata } from 'next'
import { AboutClient } from './AboutClient'

export const metadata: Metadata = {
  title: 'About TalkStars',
  description:
    "Learn about TalkStars — India's most trusted online spoken English platform. Founded in West Bengal, serving 10,000+ students across India with ISO-certified courses.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
  },
}

export default function AboutPage() {
  return <AboutClient />
}
