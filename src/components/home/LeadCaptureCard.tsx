'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send, Loader2, CheckCircle } from 'lucide-react'
import { leadFormSchema, type LeadFormData } from '@/lib/schema'
import { PROFILE_TYPES } from '@/lib/constants'
import { getUserCity } from '@/lib/geo'

export function LeadCaptureCard() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      type: undefined,
      course: '',
      city: '',
    },
  })

  useEffect(() => {
    getUserCity().then((city) => {
      if (city) setValue('city', city)
    })
  }, [setValue])

  const onSubmit = async (data: LeadFormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
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
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center">
        <CheckCircle className="w-16 h-16 text-ts-lime mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600">{message}</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 px-6 py-2.5 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors"
        >
          Submit Another
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-[24px] shadow-2xl p-6 md:p-8 border border-gray-100">
      <h3 className="text-[22px] font-bold text-gray-900 mb-1 tracking-tight">
        Get a Free Counselling Session
      </h3>
      <p className="text-[15px] text-gray-500 mb-8">
        Talk to an expert — find the right course for you.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-1.5">
            Your name
          </label>
          <input
            {...register('name')}
            placeholder="e.g. Priya Sharma"
            className="w-full h-12 px-4 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 text-[15px] focus:outline-none focus:border-[#2952CC] focus:ring-1 focus:ring-[#2952CC] transition-colors"
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-1.5">
            WhatsApp number
          </label>
          <input
            {...register('phone')}
            placeholder="+91 98765 43210"
            type="tel"
            maxLength={10}
            className="w-full h-12 px-4 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 text-[15px] focus:outline-none focus:border-[#2952CC] focus:ring-1 focus:ring-[#2952CC] transition-colors"
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-1.5">
            I am a...
          </label>
          <select
            {...register('type')}
            className="w-full h-12 px-4 rounded-xl bg-white border border-gray-200 text-gray-900 text-[15px] focus:outline-none focus:border-[#2952CC] focus:ring-1 focus:ring-[#2952CC] transition-colors appearance-none cursor-pointer"
            defaultValue=""
          >
            <option value="" disabled className="text-gray-400">
              Select your profile
            </option>
            {PROFILE_TYPES.map((p) => (
              <option key={p.value} value={p.value} className="text-gray-900">
                {p.label}
              </option>
            ))}
          </select>
          {errors.type && (
            <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.type.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-1.5">
            Course interested in
          </label>
          <select
            {...register('course')}
            className="w-full h-12 px-4 rounded-xl bg-white border border-gray-200 text-gray-900 text-[15px] focus:outline-none focus:border-[#2952CC] focus:ring-1 focus:ring-[#2952CC] transition-colors appearance-none cursor-pointer"
            defaultValue=""
          >
            <option value="" disabled className="text-gray-400">
              Choose a course
            </option>
            <option value="spoken-english">Basic Spoken English</option>
            <option value="individual-classes">1-on-1 Individual Classes</option>
            <option value="advanced-english">Advanced English</option>
            <option value="other">Not Sure Yet</option>
          </select>
        </div>

        <input type="hidden" {...register('city')} />

        {status === 'error' && (
          <p className="text-sm font-medium text-red-500 text-center">{message}</p>
        )}

        <div className="pt-2">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full h-12 rounded-xl bg-[#2952CC] text-white font-bold text-[15px] flex items-center justify-center gap-2 hover:bg-[#1A3A8F] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              'Get Free Counselling'
            )}
          </button>
        </div>

        <p className="text-[13px] text-gray-500 font-medium text-center pt-2">
          100% free. Your details stay private.
        </p>
      </form>
    </div>
  )
}
