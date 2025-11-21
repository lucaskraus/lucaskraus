import { z } from 'zod'

export const formContactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(40, 'Name must be less than 40 characters'),
  email: z.email('Please enter a valid email address'),
  company: z
    .string()
    .max(40, 'Company must be less than 50 characters')
    .optional(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(200, 'Message must be less than 500 characters'),
})
