import type { Metadata } from 'next'
import { PageBanner } from '@/components/shared/PageBanner'
import { StudentVerification } from './StudentVerification'

export const metadata: Metadata = {
  title: 'Student Verification | TalkStars',
  description: 'Verify your TalkStars student certificate and details.',
}

export default function StudentPage() {
  return (
    <>
      <PageBanner
        title="Student Verification"
        subtitle="Verify your student ID to view course details and download your certificate."
      />
      <div className="pt-16 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <StudentVerification />
        </div>
      </div>
    </>
  )
}
