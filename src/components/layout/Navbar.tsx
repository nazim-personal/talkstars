'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full border border-ts-indigo/20 flex items-center justify-center bg-gray-50 text-ts-indigo mr-1 overflow-hidden shrink-0">
                   <div className="text-xs font-bold -skew-x-12">TS</div>
                </div>
                <span className="text-2xl font-serif text-[#0052cc] tracking-tight flex items-baseline">
                  TALK<span className="text-ts-indigo font-light">STARS</span>
                </span>
              </div>
              <span className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wide italic ml-9 -mt-1">
                Where Confidence is Built
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[15px] font-medium flex items-center gap-2 transition-colors duration-200 ${
                  pathname === link.href ? 'text-ts-indigo font-semibold' : 'text-gray-600 hover:text-ts-indigo'
                }`}
              >
                {link.label}
                {'badge' in link && link.badge && (
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-50 text-ts-indigo text-xs font-bold">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/#pricing"
              className="hidden md:inline-flex px-6 py-2.5 rounded-full bg-[#2952CC] text-white font-semibold text-sm hover:bg-[#1A3A8F] transition-all"
            >
              Start Free Trial
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-ts-navy hover:bg-gray-100 transition-colors"
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
              className="fixed inset-0 top-20 bg-black/50 z-40 lg:hidden"
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
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between h-14 px-4 rounded-xl text-base font-medium transition-colors ${
                      pathname === link.href
                        ? 'text-ts-indigo bg-blue-50/50'
                        : 'text-gray-700 hover:text-ts-indigo hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                    {'badge' in link && link.badge && (
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 text-ts-indigo text-xs font-bold">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-100 pb-2">
                  <Link
                    href="/#pricing"
                    className="flex items-center justify-center w-full h-12 rounded-xl bg-[#2952CC] text-white font-semibold text-base hover:bg-[#1A3A8F] transition-colors"
                  >
                    Start Free Trial
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
