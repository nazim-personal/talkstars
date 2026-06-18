'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send, Loader2, CheckCircle } from 'lucide-react'
import { contactFormSchema, type ContactFormData } from '@/lib/schema'
import { getUserCity } from '@/lib/geo'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  useEffect(() => {
    getUserCity().then((city) => {
      if (city) setValue('city', city)
    })
  }, [setValue])

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, type: 'contact' }),
      })
      const result = await res.json()
      if (res.ok) {
        setStatus('success')
        setMessage(result.message)
        reset()
      } else {
        setStatus('error')
        setMessage(result.error || 'Something went wrong')
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 text-center">
        <CheckCircle className="w-16 h-16 text-ts-lime mx-auto mb-4" />
        <h3 className="text-xl font-bold text-ts-navy mb-2">Message Sent!</h3>
        <p className="text-gray-500">{message}</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 px-6 py-2.5 rounded-full bg-ts-offwhite text-ts-navy text-sm font-semibold hover:bg-ts-lightgray transition-colors"
        >
          Send Another
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 md:p-8">
      <h2 className="text-xl font-bold text-ts-navy mb-1">Send a Message</h2>
      <p className="text-sm text-gray-400 mb-6">
        We&apos;ll get back to you within 24 hours
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register('name')}
            placeholder="Your Name"
            className="w-full h-12 px-4 rounded-xl bg-ts-offwhite border border-ts-lightgray text-ts-navy placeholder:text-gray-400 text-sm focus:outline-none focus:border-ts-indigo focus:ring-1 focus:ring-ts-indigo transition-colors"
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <input
            {...register('email')}
            placeholder="Email Address"
            type="email"
            className="w-full h-12 px-4 rounded-xl bg-ts-offwhite border border-ts-lightgray text-ts-navy placeholder:text-gray-400 text-sm focus:outline-none focus:border-ts-indigo focus:ring-1 focus:ring-ts-indigo transition-colors"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <input
            {...register('phone')}
            placeholder="Mobile Number (10 digits)"
            type="tel"
            maxLength={10}
            className="w-full h-12 px-4 rounded-xl bg-ts-offwhite border border-ts-lightgray text-ts-navy placeholder:text-gray-400 text-sm focus:outline-none focus:border-ts-indigo focus:ring-1 focus:ring-ts-indigo transition-colors"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
        </div>

        <div>
          <textarea
            {...register('message')}
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-ts-offwhite border border-ts-lightgray text-ts-navy placeholder:text-gray-400 text-sm focus:outline-none focus:border-ts-indigo focus:ring-1 focus:ring-ts-indigo transition-colors resize-none"
          />
          {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
        </div>

        <input type="hidden" {...register('city')} />

        {status === 'error' && (
          <p className="text-xs text-red-500 text-center">{message}</p>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full h-12 rounded-xl bg-ts-indigo text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-ts-navy transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-ts-indigo/25"
        >
          {status === 'loading' ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  )
}
