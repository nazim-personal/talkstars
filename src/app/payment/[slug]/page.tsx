import { COURSES } from '@/lib/constants'
import { notFound } from 'next/navigation'
import PaymentForm from './PaymentForm'

type Props = {
  params: Promise<{ slug: string }>
}

export default async function PaymentPage({ params }: Props) {
  const { slug } = await params
  const course = COURSES.find((c) => c.slug === slug)
  if (!course) notFound()

  return <PaymentForm course={course} />
}
