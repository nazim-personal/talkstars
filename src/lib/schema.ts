import { z } from 'zod'

export const leadFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be under 50 characters'),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  type: z.enum(['student', 'working', 'homemaker', 'teacher', 'other'], {
    message: 'Please select your profile type',
  }),
  course: z.string().optional(),
  city: z.string().optional(),
})

export type LeadFormData = z.infer<typeof leadFormSchema>

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be under 50 characters'),
  email: z
    .string()
    .email('Enter a valid email address'),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must be under 500 characters'),
  course: z.string().optional(),
  city: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
