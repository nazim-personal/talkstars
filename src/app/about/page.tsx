import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle, Users, Award, Globe, Heart } from 'lucide-react'
import { IMAGES } from '@/lib/images'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About TalkStars',
  description:
    "Learn about TalkStars — India's most trusted online spoken English platform. Founded in West Bengal, serving 10,000+ students across India with ISO-certified courses.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
  },
}

const milestones = [
  { year: '2019', title: 'TalkStars Founded', description: 'Started as a small English coaching center in Nadia, West Bengal.' },
  { year: '2020', title: 'Went Online', description: 'Launched online classes during the pandemic, reaching students across India.' },
  { year: '2022', title: 'ISO Certification', description: 'Became ISO 9001:2015 certified, ensuring quality education standards.' },
  { year: '2024', title: '10,000+ Students', description: 'Crossed the milestone of training over 10,000 students nationwide.' },
]

const values = [
  { icon: <Users className="w-6 h-6" />, title: 'Student First', description: 'Every decision we make starts with one question: How does this help our students learn better?' },
  { icon: <Award className="w-6 h-6" />, title: 'Quality Education', description: 'ISO certified processes ensure consistent, high-quality learning experiences for every student.' },
  { icon: <Globe className="w-6 h-6" />, title: 'Accessible to All', description: 'Affordable pricing and smartphone-friendly classes so that geography and budget are never barriers.' },
  { icon: <Heart className="w-6 h-6" />, title: 'Empowerment', description: 'We believe English fluency is a tool for empowerment — opening doors to careers, education, and confidence.' },
]

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold bg-ts-gold/10 text-ts-gold">
              Our Story
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-ts-navy mb-6 leading-tight">
              Empowering India to Speak English with Confidence
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              TalkStars was born from a simple observation: millions of talented Indians miss opportunities because they lack confidence in English. Founded in Nadia, West Bengal, we set out to change that — one student at a time.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Today, we&apos;re an ISO 9001:2015 certified organization with over 10,000 students trained across India. Our live, interactive classes are designed to make English learning practical, affordable, and most importantly — effective.
            </p>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute -inset-4 bg-gradient-to-br from-ts-indigo/20 to-ts-gold/20 rounded-3xl blur-xl" />
            <Image
              src={IMAGES.about}
              alt="TalkStars classroom"
              width={800}
              height={500}
              className="relative rounded-2xl object-cover shadow-xl w-full max-w-lg"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ts-offwhite py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-ts-navy">Our Values</h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">The principles that guide everything we do at TalkStars.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-ts-indigo/10 text-ts-indigo flex items-center justify-center mb-4">
                  {v.icon}
                </div>
                <h3 className="font-bold text-ts-navy mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-ts-navy">Our Journey</h2>
            <p className="mt-4 text-gray-500">From a small classroom to India&apos;s trusted English learning platform.</p>
          </div>
          <div className="relative pl-8 border-l-2 border-ts-indigo/20 space-y-10">
            {milestones.map((m) => (
              <div key={m.year} className="relative">
                <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-ts-indigo border-4 border-white" />
                <span className="text-sm font-bold text-ts-gold">{m.year}</span>
                <h3 className="text-lg font-bold text-ts-navy mt-1">{m.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-gradient-to-br from-ts-navy via-ts-blue to-ts-indigo py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Our Mission</h2>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            To make quality English education accessible and affordable for every Indian, empowering them to speak confidently and unlock limitless opportunities in their personal and professional lives.
          </p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10,000+', label: 'Students' },
              { value: '50+', label: 'Trainers' },
              { value: '28+', label: 'States Served' },
              { value: '4.8★', label: 'Rating' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold text-ts-gold">{s.value}</div>
                <div className="text-sm text-white/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-ts-navy mb-4">Visit Us</h2>
          <p className="text-gray-500 mb-2">{SITE.address}</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href={`tel:${SITE.phoneRaw}`} className="text-ts-indigo font-semibold hover:text-ts-navy transition-colors">
              {SITE.phone}
            </a>
            <span className="text-gray-300">|</span>
            <a href={`mailto:${SITE.email}`} className="text-ts-indigo font-semibold hover:text-ts-navy transition-colors">
              {SITE.email}
            </a>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {[
              { label: 'ISO 9001:2015 Certified', icon: <CheckCircle className="w-4 h-4" /> },
              { label: 'Govt. Registered', icon: <Award className="w-4 h-4" /> },
            ].map((b) => (
              <span key={b.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-ts-offwhite text-ts-navy text-xs font-semibold border border-ts-lightgray">
                {b.icon}
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
