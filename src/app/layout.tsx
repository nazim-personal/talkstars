import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { IMAGES } from '@/lib/images'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'
import { JsonLd } from '@/components/seo/JsonLd'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
})

const isProd = process.env.NEXT_PUBLIC_ENV === 'production';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Best Online Spoken English Course | TalkStars',
    template: '%s | TalkStars',
  },
  description:
    "Join India's most trusted online spoken English platform. Build confidence with live classes, expert trainers & ISO-certified courses from ₹299/month. Speak fluently in 90 days.",
  keywords: [
    'spoken english online',
    'learn english india',
    'spoken english course',
    'online english classes',
    'english speaking practice',
    'spoken english west bengal',
    'talkstars',
  ],
  authors: [{ name: 'TalkStars', url: 'https://talkstars.in' }],
  creator: 'TalkStars',
  publisher: 'TalkStars',
  robots: {
    index: isProd,
    follow: isProd,
    googleBot: { index: isProd, follow: isProd, 'max-image-preview': 'large' as const },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'TalkStars',
    title: 'Best Online Spoken English Course | TalkStars',
    description:
      "India's most trusted spoken English platform. Live classes, ISO-certified, from ₹299/month.",
    images: [
      {
        url: IMAGES.og,
        width: 1200,
        height: 630,
        alt: 'TalkStars Online Spoken English',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Online Spoken English Course | TalkStars',
    description: 'Live spoken English classes. ISO certified. From ₹299/month.',
    images: [IMAGES.og],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
    languages: {
      'en-IN': process.env.NEXT_PUBLIC_SITE_URL || 'https://talkstars.in',
      en: process.env.NEXT_PUBLIC_SITE_URL || 'https://talkstars.in',
      'x-default': process.env.NEXT_PUBLIC_SITE_URL || 'https://talkstars.in',
    },
  },
  verification: {
    google: 'REPLACE_WITH_GOOGLE_VERIFICATION_CODE',
  },
  other: {
    'geo.region': 'IN-WB',
    'geo.placename': 'Nadia, West Bengal, India',
    'geo.position': '23.007738;88.492639',
    ICBM: '23.007738, 88.492639',
    language: 'en-IN',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TalkStars',
  url: 'https://talkstars.in',
  logo: 'https://talkstars.in/images/Logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9153506542',
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: ['English', 'Bengali', 'Hindi'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1st Floor, 1 No. Gobinda Nagar, Madanpur',
    addressLocality: 'Nadia',
    addressRegion: 'West Bengal',
    postalCode: '741245',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.facebook.com/talkstars.official',
    'https://www.youtube.com/@talkstars7522',
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'TalkStars Spoken English',
  image: 'https://talkstars.in/images/Logo.png',
  '@id': 'https://talkstars.in',
  url: 'https://talkstars.in',
  telephone: '+91-9153506542',
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress:
      'TalkStars Building, 1st Floor, 1 No. Gobinda Nagar, Madanpur',
    addressLocality: 'Nadia',
    addressRegion: 'West Bengal',
    postalCode: '741245',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 23.007738,
    longitude: 88.492639,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/talkstars.official',
    'https://www.youtube.com/@talkstars7522',
  ],
  hasMap: 'https://maps.google.com/?q=23.007738,88.492639',
  areaServed: [
    { '@type': 'State', name: 'West Bengal' },
    { '@type': 'Country', name: 'India' },
  ],
  serviceArea: { '@type': 'Country', name: 'India' },
  knowsLanguage: ['en', 'bn', 'hi'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN" className={`h-full antialiased ${plusJakartaSans.variable}`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-white text-ts-navy" suppressHydrationWarning>
        <JsonLd data={organizationSchema} />
        <JsonLd data={localBusinessSchema} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
