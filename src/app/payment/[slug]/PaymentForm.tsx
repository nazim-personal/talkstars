'use client'

import { useState, useEffect } from 'react'
import { QrCode, Building2, Lock, CheckCircle2, Download } from 'lucide-react'
import Image from 'next/image'
import { IMAGES } from '@/lib/images'
import jsPDF from 'jspdf'
import Link from 'next/link'

export default function PaymentForm({ course }: { course: any }) {
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'bank'>('upi')
  const [showQR, setShowQR] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success'>('idle')

  const basePrice = typeof course.price === 'number' ? course.price : 0
  const gstAmount = basePrice * 0.18
  const totalPrice = basePrice + gstAmount

  const generatePDF = () => {
    const doc = new jsPDF()
    doc.setFontSize(22)
    doc.setTextColor(30, 58, 138) // ts-navy
    doc.text('TalkStars - Invoice & Receipt', 20, 20)
    
    doc.setFontSize(12)
    doc.setTextColor(50, 50, 50)
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 35)
    doc.text(`Status: PAID`, 20, 42)
    
    doc.setLineWidth(0.5)
    doc.line(20, 48, 190, 48)

    doc.setFontSize(14)
    doc.text('Order Details', 20, 60)
    doc.setFontSize(12)
    doc.text(`Course: ${course.title}`, 20, 70)
    doc.text(`Duration: ${course.duration}`, 20, 78)
    
    doc.line(20, 85, 190, 85)
    
    doc.text(`Original Price: Rs. ${basePrice.toFixed(2)}`, 20, 95)
    doc.text(`GST (18%): Rs. ${gstAmount.toFixed(2)}`, 20, 103)
    
    doc.setFontSize(14)
    doc.setTextColor(0, 0, 0)
    doc.text(`Total Amount Paid: Rs. ${totalPrice.toFixed(2)}`, 20, 115)
    
    doc.setFontSize(10)
    doc.setTextColor(100, 100, 100)
    doc.text('Thank you for learning with TalkStars!', 20, 140)

    doc.save(`talkstars_invoice_${course.slug}.pdf`)
  }

  const handleProceed = () => {
    if (paymentMethod === 'upi') {
      setShowQR(true)
      setPaymentStatus('processing')
      // Simulate successful payment after 5 seconds
      setTimeout(() => {
        setPaymentStatus('success')
      }, 5000)
    } else {
      setPaymentStatus('processing')
      // Simulate successful bank payment after 3 seconds
      setTimeout(() => {
        setPaymentStatus('success')
      }, 3000)
    }
  }

  // We no longer automatically download the PDF on success
  // User will click the button manually

  if (paymentStatus === 'success') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-lg w-full text-center border border-gray-100">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Payment Successful!</h1>
          <p className="text-gray-500 mb-8">
            Thank you for enrolling in <span className="font-bold text-gray-800">{course.title}</span>. You can download your receipt below.
          </p>
          
          <div className="flex flex-col gap-3">
            <button 
              onClick={generatePDF}
              className="w-full py-3 rounded-xl bg-ts-indigo text-white font-bold hover:bg-ts-navy transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Receipt
            </button>
            <Link 
              href="/"
              className="w-full py-3 rounded-xl bg-gray-100 text-gray-700 font-bold hover:bg-gray-200 transition-colors block text-center"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header like Udemy */}
      <header className="border-b border-gray-200 py-4 px-6 md:px-12 flex items-center justify-between shadow-sm sticky top-0 bg-white z-50">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ts-indigo to-ts-sky flex items-center justify-center">
              <span className="text-white font-extrabold text-sm">T</span>
            </div>
            <span className="text-xl font-extrabold text-ts-navy">
              Talk<span className="text-ts-gold">Stars</span>
            </span>
        </div>
        <Link href={`/courses/${course.slug}`} className="text-ts-indigo font-bold hover:text-ts-navy transition-colors">
          Cancel
        </Link>
      </header>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row min-h-[calc(100vh-73px)]">
        
        {/* Left Column - Main Checkout Area */}
        <div className="flex-1 px-6 md:px-12 py-10 lg:pr-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

          <h2 className="text-xl font-bold text-gray-900 mb-4">Payment method</h2>
          <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
            <span>Select a payment method</span>
            <span className="flex items-center gap-1"><Lock className="w-3 h-3"/> Secure and encrypted</span>
          </div>

          <div className="border border-gray-300 rounded-lg overflow-hidden mb-8">
            {/* UPI Option */}
            <div className="border-b border-gray-300">
              <label 
                className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-50 transition-colors ${paymentMethod === 'upi' ? 'bg-gray-50' : ''}`}
                onClick={() => setPaymentMethod('upi')}
              >
                <input 
                  type="radio" 
                  name="paymentMethod" 
                  checked={paymentMethod === 'upi'} 
                  onChange={() => setPaymentMethod('upi')}
                  className="w-4 h-4 text-ts-indigo focus:ring-ts-indigo"
                />
                <span className="font-bold text-gray-900 flex items-center gap-2">
                    <span className="italic font-extrabold text-gray-600">UPI</span>
                    UPI
                </span>
              </label>

              {/* UPI Content */}
              {paymentMethod === 'upi' && (
                <div className="px-10 pb-6 bg-gray-50">
                  {!showQR ? (
                    <div className="py-4 text-center">
                      <p className="text-gray-600 text-sm mb-4">
                        After generating the QR code you can use your preferred UPI app to complete the payment.
                      </p>
                      <p className="text-gray-500 text-xs italic">
                        Click the "Proceed" button to generate a QR code for UPI payment.
                      </p>
                    </div>
                  ) : (
                    <div className="animate-in fade-in zoom-in duration-300">
                      <p className="text-gray-600 text-sm mb-6 text-center">
                        Scan the QR code using your preferred UPI app (GPay, PhonePe, Paytm, etc.) to complete the payment.
                      </p>
                      
                      <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-6 border border-ts-indigo/20 rounded-lg shadow-sm">
                        <div className="bg-white p-2 rounded-xl border border-gray-200 flex flex-col items-center justify-center w-40 h-40 relative">
                            {/* In a real app, generate actual QR. For now, show icon */}
                            <QrCode className="w-24 h-24 text-ts-indigo" />
                            <span className="text-xs text-ts-indigo mt-2 font-bold">Scan QR Code</span>
                        </div>

                        <div className="text-center md:text-left flex-1">
                          <h3 className="text-xl font-extrabold text-gray-900 mb-1">Talkstars</h3>
                          <p className="text-sm font-semibold text-gray-500 mb-4">Phone: 9153506542</p>
                          
                          <div className="bg-ts-indigo/5 px-4 py-2 rounded border border-ts-indigo/20 inline-block">
                            <p className="text-sm font-bold text-ts-indigo">9153506542@okbizaxis</p>
                          </div>

                          <div className="mt-6 flex items-center justify-center md:justify-start gap-2 text-sm font-medium text-amber-600 bg-amber-50 py-2 px-3 rounded-lg">
                            <div className="w-4 h-4 rounded-full border-2 border-amber-600 border-t-transparent animate-spin shrink-0"></div>
                            Awaiting payment... Do not refresh.
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Bank Transfer Option */}
            <div>
              <label 
                className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-50 transition-colors ${paymentMethod === 'bank' ? 'bg-gray-50' : ''}`}
                onClick={() => setPaymentMethod('bank')}
              >
                <input 
                  type="radio" 
                  name="paymentMethod" 
                  checked={paymentMethod === 'bank'} 
                  onChange={() => setPaymentMethod('bank')}
                  className="w-4 h-4 text-ts-indigo focus:ring-ts-indigo"
                />
                <span className="font-bold text-gray-900 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-gray-600" />
                    Direct Bank Transfer / NEFT
                </span>
              </label>

              {/* Bank Transfer Content */}
              {paymentMethod === 'bank' && (
                <div className="px-10 pb-6 bg-gray-50">
                  <p className="text-gray-600 text-sm mb-6">
                    Transfer the total amount directly to our bank account. Please click "Proceed" to finalize and notify us.
                  </p>

                  <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-3 shadow-sm">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-500 text-sm font-medium">Account Name:</span>
                        <span className="font-bold text-gray-900">BISHNU SARKAR</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-500 text-sm font-medium">A/C No:</span>
                        <span className="font-bold text-gray-900">32288742094</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-500 text-sm font-medium">IFSC:</span>
                        <span className="font-bold text-gray-900">SBIN0010539</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-500 text-sm font-medium">Bank:</span>
                        <span className="font-bold text-gray-900">State Bank of India</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                        <span className="text-gray-500 text-sm font-medium">Branch:</span>
                        <span className="font-bold text-gray-900">Madanpur Branch</span>
                    </div>
                  </div>
                  
                  {paymentStatus === 'processing' && (
                    <div className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-amber-600 bg-amber-50 py-3 px-4 rounded-lg border border-amber-200">
                      <div className="w-4 h-4 rounded-full border-2 border-amber-600 border-t-transparent animate-spin shrink-0"></div>
                      Processing your request... Please wait.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-4">Order details <span className="font-normal text-gray-500 text-base">(1 course)</span></h2>
          <div className="flex gap-4 items-start py-4">
             <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-100 overflow-hidden relative shrink-0">
                 <Image 
                   src={IMAGES.courses[course.imageKey as keyof typeof IMAGES.courses]} 
                   alt={course.title}
                   fill
                   className="object-cover"
                 />
             </div>
             <div className="flex-1 pr-4">
                 <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight mt-0.5">{course.title}</h3>
                 <p className="text-xs text-gray-500 mt-1">Duration: {course.duration}</p>
             </div>
             <div className="text-right">
                 <div className="font-bold text-gray-900">
                     {typeof course.price === 'number' ? `₹${basePrice.toFixed(2)}` : course.price}
                 </div>
                 {typeof course.price === 'number' && (
                     <div className="text-xs text-gray-500 line-through mt-0.5">
                         ₹{(basePrice * 1.5).toFixed(2)}
                     </div>
                 )}
             </div>
          </div>

        </div>

        {/* Right Column - Order Summary Sidebar */}
        <div className="w-full lg:w-[400px] bg-gray-50 border-l border-gray-200 p-6 md:p-8 shrink-0">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Order summary</h2>
          <div className="mb-6">
            {typeof course.price === 'number' ? (
              <>
                <div className="flex items-end gap-2 flex-wrap">
                  <span className="text-4xl font-extrabold text-gray-900 tracking-tight leading-none">
                    ₹{totalPrice.toFixed(2)}
                  </span>
                  <span className="text-lg text-gray-500 line-through mb-0.5">
                    ₹{(totalPrice * 6).toFixed(2)}
                  </span>
                  <span className="text-lg text-gray-600 mb-0.5">84% off</span>
                </div>
                <div className="flex items-center gap-1.5 text-red-600 text-sm font-medium mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <span>4 hours left at this price!</span>
                </div>
              </>
            ) : (
              <span className="text-4xl font-extrabold text-gray-900 tracking-tight leading-none">{course.price}</span>
            )}
          </div>
          
          <div className="space-y-3 mb-4 text-gray-600">
            <div className="flex justify-between items-center">
              <span>Course Price:</span>
              <span>{typeof course.price === 'number' ? `₹${basePrice.toFixed(2)}` : course.price}</span>
            </div>
            {typeof course.price === 'number' && (
              <div className="flex justify-between items-center">
                <span>GST (18%):</span>
                <span>₹{gstAmount.toFixed(2)}</span>
              </div>
            )}
          </div>
          
          <div className="flex justify-between items-center pt-4 border-t border-gray-300 mb-6">
            <span className="font-bold text-gray-900 text-lg">Total:</span>
            <span className="text-2xl font-bold text-gray-900">
              {typeof course.price === 'number' ? `₹${totalPrice.toFixed(2)}` : course.price}
            </span>
          </div>

          <p className="text-xs text-gray-500 mb-4 text-center">
            By completing your purchase, you agree to these <a href="#" className="text-ts-indigo hover:underline">Terms of Use</a>.
          </p>

          <button 
            onClick={handleProceed}
            disabled={paymentStatus === 'processing'}
            className="w-full py-4 rounded-xl bg-ts-indigo hover:bg-ts-navy text-white font-bold text-lg transition-colors flex items-center justify-center gap-2 mb-8 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-ts-indigo/25"
          >
            <Lock className="w-5 h-5" />
            {paymentStatus === 'processing' ? 'Processing...' : 'Proceed'}
          </button>

          <div className="text-center">
            <h3 className="font-bold text-gray-900 mb-2">30-Day Money-Back Guarantee</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
                Not satisfied? Get a full refund within 30 days. Simple and straightforward!
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
