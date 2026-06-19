'use client'

import Image from 'next/image'
import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { IMAGES } from '@/lib/images'
import { SITE } from '@/lib/constants'

// Dummy Data
const stats = [
  { value: '500+', label: 'Happy Students' },
  { value: '10+', label: 'Years Experience' },
  { value: '2,000+', label: 'Classes Taught' },
  { value: '20+', label: 'Cities Reached' },
  { value: '15', label: 'Global Partners' },
]

const values = [
  { title: 'Student First', description: 'Everything we do is guided by what helps our students.' },
  { title: 'Quality Education', description: 'ISO certified processes ensure high-quality learning.' },
  { title: 'Accessible to All', description: 'Affordable pricing and smartphone-friendly classes.' },
  { title: 'Empowerment', description: 'Fluency is a tool for careers and confidence.' },
  { title: 'Continuous Growth', description: 'We keep evolving our methods to serve you better.' },
  { title: 'Community', description: 'Building a supportive network of English learners.' },
]

const team = [
  { name: 'Bishnu Sarkar', role: 'Founder & CEO', image: IMAGES.founder },
  { name: 'Riya Sen', role: 'Head of Curriculum', image: 'https://picsum.photos/seed/ts-team1/200/200' },
  { name: 'Amit Sharma', role: 'Lead Trainer', image: 'https://picsum.photos/seed/ts-team2/200/200' },
  { name: 'Priya Das', role: 'Student Success Manager', image: 'https://picsum.photos/seed/ts-team3/200/200' },
  { name: 'Vikram Singh', role: 'Operations Head', image: 'https://picsum.photos/seed/ts-team4/200/200' },
  { name: 'Sneha Roy', role: 'Senior Trainer', image: 'https://picsum.photos/seed/ts-team5/200/200' },
  { name: 'Rahul Bose', role: 'Tech Lead', image: 'https://picsum.photos/seed/ts-team6/200/200' },
  { name: 'Anjali Verma', role: 'Marketing Manager', image: 'https://picsum.photos/seed/ts-team7/200/200' },
]

import { PageBanner } from '@/components/shared/PageBanner'


const mapUrls = {
  headOffice: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14681.423719859296!2d88.487002!3d23.010705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8ea7d6f51f4d1%3A0x6e2c36b856a9a7a9!2sMadanpur%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  branch1: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14704.991275997237!2d88.3898165!3d22.8672535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89a9f24cb562b%3A0xc3d56b054b48698c!2sKankinara%2C%20Bhatpara%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  branch2: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.351052601265!2d76.5779035!3d9.9878205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e59c0f38b1d9%3A0x868cb267ab332ff0!2sMuvattupuzha%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
}

export function AboutClient() {
  const [activeLocation, setActiveLocation] = useState<'headOffice' | 'branch1' | 'branch2'>('headOffice')

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <PageBanner 
        title="About Us"
        subtitle="Empowering India to Speak English with Confidence"
        imageSrc="https://picsum.photos/seed/ts-courses/1920/1080"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-24">
        {/* 2. Our Story */}
        <section className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-ts-navy mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              TalkStars was born from a simple observation: millions of talented Indians miss opportunities because they lack confidence in English. Founded in Nadia, West Bengal, we set out to change that — one student at a time.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we&apos;re an ISO 9001:2015 certified organization with over 10,000 students trained across India. Our live, interactive classes are designed to make English learning practical, affordable, and most importantly — effective.
            </p>
          </div>
          <div className="relative w-full aspect-square md:aspect-[4/3] rounded-tl-[4rem] rounded-br-[4rem] overflow-hidden shadow-2xl">
            <Image
              src={IMAGES.about}
              alt="Our Story"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* 3. Our Vision */}
        <section className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative w-full aspect-square md:aspect-[4/3] rounded-tr-[4rem] rounded-bl-[4rem] overflow-hidden shadow-2xl md:order-1">
            <Image
              src={IMAGES.classroom}
              alt="Our Vision"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:order-2">
            <h2 className="text-3xl font-extrabold text-ts-navy mb-6">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To make quality English education accessible and affordable for every Indian, empowering them to speak confidently and unlock limitless opportunities in their personal and professional lives.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We envision a future where language is no longer a barrier to success, but a bridge to global opportunities and personal growth.
            </p>
          </div>
        </section>

        {/* 4. Stats */}
        <section className="py-12 border-y border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-extrabold text-ts-indigo mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. We believe in */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-ts-navy">We believe in</h2>
          </div>
          <div className="bg-[#f4f9ff] rounded-[3rem] p-8 md:p-16">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-ts-indigo" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ts-navy mb-1">{v.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. What keeps us going */}
        <section className="pb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-ts-navy">What keeps us going</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="space-y-6">
              <div className="bg-ts-gold/10 p-6 rounded-3xl text-center">
                <p className="font-bold text-ts-navy">Seeing our students achieve their dreams.</p>
              </div>
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-lg">
                <Image src="https://picsum.photos/seed/ts-keep1/600/400" alt="Students" fill className="object-cover" />
              </div>
            </div>
            <div className="space-y-6 md:-mt-12">
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-lg">
                <Image src="https://picsum.photos/seed/ts-keep2/600/600" alt="Team" fill className="object-cover" />
              </div>
              <div className="bg-ts-indigo/10 p-6 rounded-3xl text-center">
                <p className="font-bold text-ts-navy">Building a community of learners.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white border border-gray-100 p-6 rounded-3xl text-center shadow-sm">
                <p className="font-bold text-ts-navy">Continuous innovation in education.</p>
              </div>
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-lg">
                <Image src="https://picsum.photos/seed/ts-keep3/600/400" alt="Class" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* 7. Meet the team */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-ts-navy">Meet the team</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
            {team.map((member) => (
              <div key={member.name} className="text-center flex flex-col items-center">
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 shadow-md border-4 border-white">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="font-bold text-ts-navy text-lg">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Find us here */}
        <section className="bg-ts-indigo rounded-[3rem] overflow-hidden shadow-xl text-white">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-extrabold mb-8">Find us here</h2>
              <div className="space-y-8">
                <div 
                  className={`cursor-pointer transition-opacity ${activeLocation === 'headOffice' ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                  onClick={() => setActiveLocation('headOffice')}
                >
                  <h3 className="font-bold text-ts-gold mb-2 flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${activeLocation === 'headOffice' ? 'bg-ts-gold' : 'bg-ts-gold/50'}`}></span>
                    Head Office
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm pointer-events-none">
                    <strong className="text-white">TalkStars Building, 1st floor</strong><br />
                    1 No. Gobinda Nagar, Madanpur<br />
                    Nadia, West Bengal<br />
                    PIN – 741245
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-ts-gold mb-4 flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${activeLocation !== 'headOffice' ? 'bg-ts-gold' : 'bg-ts-gold/50'}`}></span>
                    Our Branches
                  </h3>
                  <div className="space-y-6">
                    <div 
                      className={`cursor-pointer transition-opacity ${activeLocation === 'branch1' ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                      onClick={() => setActiveLocation('branch1')}
                    >
                      <p className="text-white/80 leading-relaxed text-sm pointer-events-none">
                        <strong className="text-white">Fakir para, Kankinara</strong><br />
                        West Bengal – 743126
                      </p>
                    </div>
                    <div 
                      className={`cursor-pointer transition-opacity ${activeLocation === 'branch2' ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                      onClick={() => setActiveLocation('branch2')}
                    >
                      <p className="text-white/80 leading-relaxed text-sm pointer-events-none">
                        <strong className="text-white">Pookkadasseril, Muvattupuzha</strong><br />
                        Kerala – 686673
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full h-64 md:h-auto min-h-[300px]">
              <iframe
                src={mapUrls[activeLocation]}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TalkStars Location on Google Maps"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
