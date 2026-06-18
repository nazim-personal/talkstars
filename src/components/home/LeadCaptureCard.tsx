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
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center">
        <CheckCircle className="w-16 h-16 text-ts-lime mx-auto mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-white/70">{message}</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 px-6 py-2.5 rounded-full bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-colors"
        >
          Submit Another
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20">
      <h3 className="text-lg font-bold text-white mb-1">
        Book Free Counselling
      </h3>
      <p className="text-sm text-white/60 mb-6">
        Get expert guidance to choose the right course
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register('name')}
            placeholder="Your Name"
            className="w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-ts-gold focus:ring-1 focus:ring-ts-gold transition-colors"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            {...register('phone')}
            placeholder="Mobile Number (10 digits)"
            type="tel"
            maxLength={10}
            className="w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-ts-gold focus:ring-1 focus:ring-ts-gold transition-colors"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <select
            {...register('type')}
            className="w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:border-ts-gold focus:ring-1 focus:ring-ts-gold transition-colors appearance-none cursor-pointer"
            defaultValue=""
          >
            <option value="" disabled className="text-gray-900">
              I am a...
            </option>
            {PROFILE_TYPES.map((p) => (
              <option key={p.value} value={p.value} className="text-gray-900">
                {p.label}
              </option>
            ))}
          </select>
          {errors.type && (
            <p className="mt-1 text-xs text-red-400">{errors.type.message}</p>
          )}
        </div>

        <input type="hidden" {...register('city')} />
        <input type="hidden" {...register('course')} />

        {status === 'error' && (
          <p className="text-xs text-red-400 text-center">{message}</p>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full h-12 rounded-xl bg-ts-gold text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-ts-gold/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-ts-gold/25"
        >
          {status === 'loading' ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <Send className="w-4 h-4" />
              Get Free Counselling
            </>
          )}
        </button>

        <p className="text-[11px] text-white/40 text-center leading-relaxed">
          By submitting, you agree to receive updates via WhatsApp &amp; SMS
        </p>
      </form>
    </div>
  )
}
