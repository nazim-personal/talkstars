import type { Metadata } from 'next'
import { CourseCard } from '@/components/shared/CourseCard'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { COURSES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'All Spoken English Courses',
  description:
    'Browse all TalkStars courses: Basic, Advanced, 1-on-1, Teachers Training, Communication Skills and more. Starting at ₹299/month.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/courses`,
  },
  openGraph: {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/courses`,
  },
}

export default function CoursesPage() {
  const categories = [
    { key: 'spoken-english', label: 'Spoken English' },
    { key: 'communication', label: 'Communication & Personality' },
    { key: 'training', label: 'Professional Training' },
  ] as const

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="All Courses"
          title="Choose Your Learning Path"
          subtitle="We offer a range of courses designed for every level — from complete beginners to working professionals."
        />

        {categories.map((cat) => {
          const filtered = COURSES.filter((c) => c.category === cat.key)
          if (filtered.length === 0) return null

          return (
            <div key={cat.key} className="mb-16 last:mb-0">
              <h3 className="text-xl font-bold text-ts-navy mb-6 flex items-center gap-3">
                <span className="w-1.5 h-8 rounded-full bg-ts-indigo" />
                {cat.label}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((course, i) => (
                  <CourseCard key={course.id} course={course} index={i} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
