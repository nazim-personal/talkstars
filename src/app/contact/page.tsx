import type { Metadata } from 'next'
import { ContactForm } from './ContactForm'
import { Phone, Mail, MapPin, Users, Award, Clock } from 'lucide-react'
import { SITE } from '@/lib/constants'

import { PageBanner } from '@/components/shared/PageBanner'

export const metadata: Metadata = {
  title: 'Contact Us & Free Counselling',
  description:
    'Book a free spoken English counselling session with TalkStars. Talk to an expert and find the right course for your level and goals.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
  },
}

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 0C5.385 0 0 5.388 0 12.035c0 2.12.552 4.195 1.6 6.02L.032 24l6.096-1.597A11.961 11.961 0 0 0 12.031 24c6.645 0 12.034-5.389 12.034-12.035C24.065 5.388 18.676 0 12.031 0zm0 22.012c-1.802 0-3.565-.483-5.112-1.4l-.367-.218-3.805.998.997-3.71-.24-.381a9.98 9.98 0 0 1-1.528-5.267c0-5.508 4.484-9.994 9.993-9.994 5.508 0 9.992 4.486 9.992 9.994 0 5.509-4.484 9.993-9.992 9.993zm5.485-7.494c-.301-.151-1.782-.88-2.059-.98-.276-.1-.478-.151-.678.151-.202.302-.78 1.006-.957 1.208-.176.201-.352.226-.653.075-2.02-.958-3.32-1.956-4.226-3.488-.176-.302.05-.453.251-.754.2-.302.403-.604.604-.905.201-.302.276-.503.402-.805.126-.302.05-.553-.025-.704-.075-.15-.653-1.635-.879-2.238-.226-.603-.452-.528-.653-.528-.176 0-.402-.025-.628-.025-.226 0-.578.075-.879.402-.302.327-1.155 1.132-1.155 2.766s1.18 3.218 1.33 3.419c.151.202 2.311 3.593 5.676 5.05.803.352 1.431.553 1.933.704.828.251 1.582.201 2.159.125.653-.101 1.782-.73 2.034-1.434.251-.704.251-1.307.176-1.434-.076-.126-.277-.202-.578-.352z" />
    </svg>
  )
}

function UserIconExpert({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  )
}

export default function ContactPage() {
  return (
    <>
      <PageBanner 
        title="Contact Us" 
        subtitle="Have questions? Book a free counselling session or reach out to us directly. We're here to help you start your English learning journey."
      />
      <div className="pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-start mb-20">
            {/* Info Cards */}
            <div>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-xl shadow-ts-indigo/5">
                  <div className="w-12 h-12 rounded-xl border border-blue-100 bg-blue-50 flex items-center justify-center mb-6">
                    <Phone className="w-6 h-6 text-[#0038b8]" />
                  </div>
                  <h3 className="font-bold text-ts-navy text-lg mb-4">Phone</h3>
                  <a href={`tel:${SITE.phoneRaw}`} className="block text-sm text-gray-600 hover:text-[#0038b8] transition-colors mb-2">
                    {SITE.phone}
                  </a>
                  <p className="text-sm text-gray-500">
                    Customer Care: {SITE.customerCare}
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-xl shadow-ts-indigo/5">
                  <div className="w-12 h-12 rounded-xl border border-blue-100 bg-blue-50 flex items-center justify-center mb-6">
                    <Mail className="w-6 h-6 text-[#0038b8]" />
                  </div>
                  <h3 className="font-bold text-ts-navy text-lg mb-4">Email</h3>
                  <a href={`mailto:${SITE.email}`} className="block text-sm text-gray-600 hover:text-[#0038b8] transition-colors mb-2">
                    {SITE.email}
                  </a>
                  <p className="text-sm text-gray-500">
                    We'll reply as soon as possible
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-xl shadow-ts-indigo/5 sm:col-span-2">
                  <h3 className="font-bold text-ts-navy text-xl mb-8">Our Locations</h3>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="font-bold text-ts-navy mb-3 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#0038b8]"></span>
                        Head Office
                      </h4>
                      <div className="pl-5 text-sm text-gray-600 leading-relaxed">
                        <p>TalkStars Building, 1st floor</p>
                        <p>1 No. Gobinda Nagar, Madanpur</p>
                        <p>Nadia, West Bengal &ndash; 741245</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-ts-navy mb-4 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#0038b8]"></span>
                        Our Branches
                      </h4>
                      <div className="pl-5 space-y-4">
                        <div className="flex items-start gap-2.5">
                          <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-[#0038b8]" />
                          <p className="text-sm text-gray-600 leading-relaxed">
                            Fakir para, Kankinara,<br />
                            West Bengal &ndash; 743126
                          </p>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-[#0038b8]" />
                          <p className="text-sm text-gray-600 leading-relaxed">
                            Pookkadasseril, Muvattupuzha<br />
                            Kerala &ndash; 686673
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:sticky lg:top-28">
              <ContactForm />
            </div>
          </div>

          {/* Why Choose TalkStars Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-extrabold text-ts-navy text-center mb-12">Why Choose TalkStars?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl border border-blue-100 bg-blue-50 flex items-center justify-center shrink-0">
                  <Users className="w-7 h-7 text-[#0038b8]" />
                </div>
                <div>
                  <h4 className="font-bold text-ts-navy text-sm mb-1">Live Interactive Classes</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Learn in real-time with expert trainers.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl border border-blue-100 bg-blue-50 flex items-center justify-center shrink-0">
                  <UserIconExpert className="w-7 h-7 text-[#0038b8]" />
                </div>
                <div>
                  <h4 className="font-bold text-ts-navy text-sm mb-1">Expert Trainers</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Certified & experienced English language experts.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl border border-blue-100 bg-blue-50 flex items-center justify-center shrink-0">
                  <Award className="w-7 h-7 text-[#0038b8]" />
                </div>
                <div>
                  <h4 className="font-bold text-ts-navy text-sm mb-1">ISO Certified</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">We follow international standards of education.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl border border-blue-100 bg-blue-50 flex items-center justify-center shrink-0">
                  <Clock className="w-7 h-7 text-[#0038b8]" />
                </div>
                <div>
                  <h4 className="font-bold text-ts-navy text-sm mb-1">Flexible Schedule</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Choose timings that suit your lifestyle.</p>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Banner */}
          <div className="rounded-[2rem] bg-ts-offwhite border border-gray-100 shadow-xl shadow-black/5 p-8 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-[#25D366]/30">
                <WhatsappIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-ts-navy mb-1">Prefer WhatsApp?</h3>
                <p className="text-gray-500 text-sm">Chat with our counsellor instantly on WhatsApp.</p>
              </div>
            </div>
            <a 
              href="https://wa.me/919153506542" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white border border-[#25D366] text-[#25D366] font-bold px-8 py-3.5 rounded-full hover:bg-[#25D366] hover:text-white transition-colors whitespace-nowrap"
            >
              <WhatsappIcon className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>

        </div>
      </div>
    </>
  )
}
