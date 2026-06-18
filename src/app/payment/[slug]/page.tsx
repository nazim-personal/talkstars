import { COURSES } from '@/lib/constants'
import { notFound } from 'next/navigation'
import { QrCode, CreditCard, Building2, User, Landmark, HelpCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

type Props = {
  params: Promise<{ slug: string }>
}

export default async function PaymentPage({ params }: Props) {
  const { slug } = await params
  const course = COURSES.find((c) => c.slug === slug)
  if (!course) notFound()

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={`/courses/${slug}`}
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-ts-indigo transition-colors mb-6 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Course
        </Link>
        
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-[#4285F4] mb-2">
            Dear User, Please use one of the below option to pay.
          </h1>
          <p className="text-gray-500 text-sm">
            Complete your payment to enroll in the course.
          </p>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8 max-w-2xl mx-auto">
          <h2 className="text-lg font-bold text-ts-navy mb-4 pb-3 border-b border-gray-100">
            Order Summary
          </h2>
          <div className="space-y-3 mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-800">{course.title}</h3>
                <p className="text-sm text-gray-500">Duration: {course.duration}</p>
              </div>
              <span className="font-medium text-gray-800">
                {typeof course.price === 'number' ? `₹${(course.price / 1.18).toFixed(2)}` : course.price}
              </span>
            </div>
            {typeof course.price === 'number' && (
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>GST (18%)</span>
                <span>₹{(course.price - course.price / 1.18).toFixed(2)}</span>
              </div>
            )}
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-gray-100">
            <span className="font-bold text-gray-800">Total Amount</span>
            <span className="text-xl font-extrabold text-[#4285F4]">
              {typeof course.price === 'number' ? `₹${course.price.toFixed(2)}` : course.price}
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column: UPI */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col items-center relative overflow-hidden">
            <div className="text-center mb-6 z-10">
              <h2 className="text-2xl font-bold text-[#4285F4] mb-2">Scan to Pay with</h2>
              <div className="flex justify-center items-center gap-2 mb-4">
                <span className="text-4xl font-extrabold italic text-gray-800 tracking-tighter">UPI</span>
                <span className="text-[10px] text-gray-500 max-w-[80px] leading-tight text-left font-semibold">UNIFIED PAYMENTS INTERFACE</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border-2 border-dashed border-gray-200 mb-6 flex flex-col items-center justify-center w-48 h-48 relative z-10">
                <QrCode className="w-24 h-24 text-gray-300" />
                <span className="text-xs text-gray-400 mt-2 font-medium">Scan QR Code</span>
            </div>

            <div className="text-center z-10">
              <h3 className="text-2xl font-bold text-ts-navy mb-1">Talkstars</h3>
              <p className="text-lg font-semibold text-ts-indigo mb-6">9153506542</p>
              
              <div className="bg-gray-50 px-6 py-3 rounded-xl border border-gray-200 inline-block">
                 <p className="text-base font-bold text-ts-navy">9153506542@okbizaxis</p>
              </div>
            </div>
          </div>

          {/* Right Column: Bank Details & Card */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-[#4285F4] py-4 px-6 text-center">
                <h2 className="text-white font-bold text-lg">Our Bank Account Details</h2>
              </div>
              <div className="p-6 md:p-8">
                <div className="space-y-5">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-100">
                    <span className="text-gray-500 text-sm flex items-center gap-2 font-medium">
                        Account Holder Name:
                    </span>
                    <span className="font-bold text-ts-navy text-right mt-1 sm:mt-0">BISHNU SARKAR</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-100">
                    <span className="text-gray-500 text-sm flex items-center gap-2 font-medium">
                        A/C No:
                    </span>
                    <span className="font-bold text-ts-navy text-right mt-1 sm:mt-0">32288742094</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-100">
                    <span className="text-gray-500 text-sm flex items-center gap-2 font-medium">
                        IFSC:
                    </span>
                    <span className="font-bold text-ts-navy text-right mt-1 sm:mt-0">SBIN0010539</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-100">
                    <span className="text-gray-500 text-sm flex items-center gap-2 font-medium">
                        Bank:
                    </span>
                    <span className="font-bold text-ts-navy text-right mt-1 sm:mt-0">State Bank of India</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2">
                    <span className="text-gray-500 text-sm flex items-center gap-2 font-medium">
                        Branch:
                    </span>
                    <span className="font-bold text-ts-navy text-right mt-1 sm:mt-0">Madanpur Branch</span>
                  </div>
                </div>
              </div>
            </div>

            <Link
                href="#"
                className="w-full py-4 rounded-xl bg-[#4285F4] text-white font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
            >
                Pay Using Credit & Debit Card / Netbanking
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
