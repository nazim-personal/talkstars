import { HeroSection } from '@/components/home/HeroSection'
import { TrustBar } from '@/components/home/TrustBar'
import { WhyUsSection } from '@/components/home/WhyUsSection'
import { CoursesSection } from '@/components/home/CoursesSection'
import { HowItWorksSection } from '@/components/home/HowItWorksSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { FounderSection } from '@/components/home/FounderSection'
import { FaqSection } from '@/components/home/FaqSection'
import { CtaSection } from '@/components/home/CtaSection'
import { JsonLd } from '@/components/seo/JsonLd'

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'TalkStars',
  url: 'https://talkstars.in',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://talkstars.in/courses?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteSchema} />
      <HeroSection />
      <TrustBar />
      <WhyUsSection />
      <CoursesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FounderSection />
      <FaqSection />
      <CtaSection />
    </>
  )
}
