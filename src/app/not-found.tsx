'use client'

import Link from 'next/link'
import { Home, Compass, BookOpen } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 md:px-12">
      <div className="max-w-2xl w-full text-center">
        {/* Animated 404 Text */}
        <div className="relative inline-block mb-6">
          <h1 className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-ts-indigo to-ts-sky drop-shadow-sm">
            404
          </h1>
          <div className="absolute -top-4 -right-8 text-ts-gold animate-bounce">
            <Compass className="w-12 h-12 md:w-16 md:h-16" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-ts-navy mb-4">
          Oops! You've lost your way.
        </h2>
        
        <p className="text-lg text-gray-500 mb-10 max-w-lg mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/" 
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-ts-indigo text-white font-bold hover:bg-ts-navy transition-colors flex items-center justify-center gap-2 shadow-lg shadow-ts-indigo/20"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          
          <Link 
            href="/courses" 
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-ts-indigo font-bold border-2 border-ts-indigo/20 hover:bg-gray-50 hover:border-ts-indigo transition-all flex items-center justify-center gap-2"
          >
            <BookOpen className="w-5 h-5" />
            Browse Courses
          </Link>
        </div>
      </div>
    </div>
  )
}
