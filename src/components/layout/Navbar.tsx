'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { NAV_LINKS, SITE, COURSES } from '@/lib/constants'

const courseCategories = [
  { id: 'spoken-english', title: 'Spoken English' },
  { id: 'communication', title: 'Communication Skills' },
  { id: 'training', title: 'Teacher Training' },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const isHomePage = pathname === '/'
  const showSolidNav = scrolled || !isHomePage

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolidNav
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-ts-indigo to-ts-sky flex items-center justify-center">
              <span className="text-white font-extrabold text-lg">T</span>
            </div>
            <span
              className={`text-xl font-extrabold transition-colors ${
                showSolidNav ? 'text-ts-navy' : 'text-white'
              }`}
            >
              Talk<span className="text-ts-gold">Stars</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              if (link.label === 'Courses') {
                return (
                  <div key={link.href} className="relative group">
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                        pathname.startsWith('/courses')
                          ? showSolidNav
                            ? 'text-ts-indigo bg-ts-indigo/5'
                            : 'text-ts-gold'
                          : showSolidNav
                            ? 'text-gray-600 hover:text-ts-indigo hover:bg-gray-50'
                            : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </Link>
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="w-[600px] bg-white rounded-xl shadow-xl border border-gray-100 p-6 grid grid-cols-3 gap-6">
                        {courseCategories.map((category) => (
                          <div key={category.id}>
                            <h3 className="text-sm font-bold text-ts-navy mb-4 pb-2 border-b border-gray-100">
                              {category.title}
                            </h3>
                            <ul className="space-y-2">
                              {COURSES.filter((c) => c.category === category.id).map((course) => (
                                <li key={course.slug}>
                                  <Link
                                    href={`/courses/${course.slug}`}
                                    className="block px-3 py-2 -mx-3 text-sm text-gray-600 hover:text-ts-indigo hover:bg-gray-50 rounded-lg transition-colors leading-snug"
                                  >
                                    {course.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    pathname === link.href
                      ? showSolidNav
                        ? 'text-ts-indigo bg-ts-indigo/5'
                        : 'text-ts-gold'
                      : showSolidNav
                        ? 'text-gray-600 hover:text-ts-indigo hover:bg-gray-50'
                        : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href={`https://wa.me/${SITE.phoneRaw.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ts-indigo text-white font-bold text-sm hover:bg-ts-navy transition-all shadow-lg shadow-ts-indigo/25 hover:shadow-xl hover:shadow-ts-indigo/30"
            >
              <Phone className="w-4 h-4" />
              Free Counselling
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                showSolidNav ? 'text-ts-navy hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-16 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 z-50 lg:hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {NAV_LINKS.map((link) => {
                  if (link.label === 'Courses') {
                    return (
                      <div key={link.href}>
                        <button
                          onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                          className={`flex items-center justify-between w-full h-14 px-4 rounded-xl text-base font-semibold transition-colors ${
                            pathname.startsWith('/courses')
                              ? 'text-ts-indigo bg-ts-indigo/5'
                              : 'text-gray-700 hover:text-ts-indigo hover:bg-gray-50'
                          }`}
                        >
                          {link.label}
                          <ChevronDown className={`w-5 h-5 transition-transform ${mobileCoursesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {mobileCoursesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-8 pr-4 py-2 space-y-5">
                                {courseCategories.map((category) => (
                                  <div key={category.id}>
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 border-b border-gray-100 pb-2">
                                      {category.title}
                                    </h4>
                                    <ul className="space-y-1">
                                      {COURSES.filter((c) => c.category === category.id).map((course) => (
                                        <li key={course.slug}>
                                          <Link
                                            href={`/courses/${course.slug}`}
                                            className="block py-2 text-sm text-gray-600 hover:text-ts-indigo"
                                            onClick={() => setIsOpen(false)}
                                          >
                                            {course.title}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center h-14 px-4 rounded-xl text-base font-semibold transition-colors ${
                        pathname === link.href
                          ? 'text-ts-indigo bg-ts-indigo/5'
                          : 'text-gray-700 hover:text-ts-indigo hover:bg-gray-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                })}
                <div className="pt-3 border-t border-gray-100">
                  <Link
                    href={`https://wa.me/${SITE.phoneRaw.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 h-14 rounded-xl bg-ts-indigo text-white font-bold text-base hover:bg-ts-navy transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Free Counselling
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
