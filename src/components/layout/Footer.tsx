import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'
import { SITE, FOOTER_LINKS } from '@/lib/constants'

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-ts-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center bg-white/90 p-2 rounded-xl mb-2">
              <Image 
                src="/logo.png" 
                alt="TalkStars Logo" 
                width={200} 
                height={50} 
                className="h-10 w-auto"
                sizes="200px"
                loading="lazy"
              />
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              India&apos;s most trusted online spoken English platform. Build confidence with live classes &amp; expert trainers.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="flex items-center gap-3 text-white/70 hover:text-ts-gold transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-white/70 hover:text-ts-gold transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                {SITE.email}
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{SITE.address}</span>
              </div>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-5">
              Courses
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.courses.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-ts-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-ts-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-5">
              Support
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-ts-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-4">
                Follow Us
              </h3>
              <div className="flex gap-3">
                <a
                  href={SITE.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-ts-indigo transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={SITE.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors"
                  aria-label="Subscribe on YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} TalkStars. All rights reserved. ISO 9001:2015 Certified.
          </p>
          <p className="text-xs text-white/40">
            Customer Care: {SITE.customerCare}
          </p>
        </div>
      </div>
    </footer>
  )
}
