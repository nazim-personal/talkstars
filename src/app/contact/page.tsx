import type { Metadata } from 'next'
import { ContactForm } from './ContactForm'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
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

export default function ContactPage() {
  return (
    <>
      <PageBanner 
        title="Contact Us" 
        subtitle="Have questions? Book a free counselling session or reach out to us directly. We're here to help you start your English learning journey."
      />
      <div className="pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-start">
          {/* Info Cards + Map */}
          <div>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="p-6 rounded-2xl bg-ts-offwhite border border-ts-lightgray">
                <Phone className="w-8 h-8 text-ts-indigo mb-3" />
                <h3 className="font-bold text-ts-navy mb-1">Phone</h3>
                <a href={`tel:${SITE.phoneRaw}`} className="text-sm text-gray-500 hover:text-ts-indigo transition-colors">
                  {SITE.phone}
                </a>
                <br />
                <span className="text-sm text-gray-400">Customer Care: {SITE.customerCare}</span>
              </div>

              <div className="p-6 rounded-2xl bg-ts-offwhite border border-ts-lightgray">
                <Mail className="w-8 h-8 text-ts-indigo mb-3" />
                <h3 className="font-bold text-ts-navy mb-1">Email</h3>
                <a href={`mailto:${SITE.email}`} className="text-sm text-gray-500 hover:text-ts-indigo transition-colors">
                  {SITE.email}
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-ts-offwhite border border-ts-lightgray sm:col-span-2">
                <MapPin className="w-8 h-8 text-ts-indigo mb-3" />
                <h3 className="font-bold text-ts-navy mb-4">Our Locations</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-ts-navy mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-ts-gold"></span>
                      Head Office
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      TalkStars Building, 1st floor<br />
                      1 No. Gobinda Nagar, Madanpur<br />
                      Nadia, West Bengal<br />
                      PIN &ndash; 741245
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ts-navy mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-ts-indigo"></span>
                      Our Branches
                    </h4>
                    <div className="space-y-3">
                      <p className="text-sm text-gray-500 leading-relaxed flex items-start gap-2">
                        <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-ts-indigo/50" />
                        <span>Fakir para, Kankinara<br />West Bengal &ndash; 743126</span>
                      </p>
                      <p className="text-sm text-gray-500 leading-relaxed flex items-start gap-2">
                        <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-ts-indigo/50" />
                        <span>Pookkadasseril, Muvattupuzha<br />Kerala &ndash; 686673</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-ts-offwhite border border-ts-lightgray sm:col-span-2">
                <Clock className="w-8 h-8 text-ts-indigo mb-3" />
                <h3 className="font-bold text-ts-navy mb-3">Hours</h3>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <p className="text-sm text-gray-500"><strong className="text-gray-700">Mon-Fri:</strong> 8AM &ndash; 9PM</p>
                  <p className="text-sm text-gray-500"><strong className="text-gray-700">Sat-Sun:</strong> 9AM &ndash; 6PM</p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1880287.5153986253!2d88.492639!3d23.007738!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8c14e1b09eccb%3A0x4df9f839f8cf18ed!2sSpoken%20English%20Course%20Online%20-%20TALKSTARS!5e0!3m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TalkStars Location on Google Maps"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:sticky lg:top-28">
            <ContactForm />
          </div>
        </div>
        </div>
      </div>
    </>
  )
}
