import dynamic from 'next/dynamic'
import { HeroSection } from '@/components/home/HeroSection'
import { TrustBar } from '@/components/home/TrustBar'
import { CoursesSection } from '@/components/home/CoursesSection'
import { JsonLd } from '@/components/seo/JsonLd'

const WhyUsSection = dynamic(() => import('@/components/home/WhyUsSection').then(m => ({ default: m.WhyUsSection })))
const HowItWorksSection = dynamic(() => import('@/components/home/HowItWorksSection').then(m => ({ default: m.HowItWorksSection })))
const TestimonialsSection = dynamic(() => import('@/components/home/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })))
const FounderSection = dynamic(() => import('@/components/home/FounderSection').then(m => ({ default: m.FounderSection })))
const FaqSection = dynamic(() => import('@/components/home/FaqSection').then(m => ({ default: m.FaqSection })))
const CtaSection = dynamic(() => import('@/components/home/CtaSection').then(m => ({ default: m.CtaSection })))


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
