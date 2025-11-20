'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldError,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export default function GetInTouch() {
  const [errors, setErrors] = useState<Record<string, string[] | undefined>>({})

  const clearError = (field: string) => {
    setErrors(prev => {
      if (!prev[field]) return prev
      const newErrors = { ...prev }
      delete newErrors[field]
      return newErrors
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    const result = contactSchema.safeParse(data)

    if (!result.success) {
      const fieldErrors: Record<string, string[]> = {}
      result.error.issues.forEach(issue => {
        const path = issue.path[0] as string
        if (path) {
          if (!fieldErrors[path]) {
            fieldErrors[path] = []
          }
          fieldErrors[path]?.push(issue.message)
        }
      })
      setErrors(fieldErrors)
      return
    }

    try {
      await fetch('/api/mail', {
        method: 'POST',
        body: JSON.stringify(data),
      })
    } catch (error) {
      console.error(error)
      toast.error('Failed to send message')
    } finally {
      setErrors({})
      toast.success('Message sent successfully!')
      e.currentTarget.reset()
    }
  }

  return (
    <div className="flex flex-col gap-10 w-full max-w-lg mx-auto">
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col items-center w-full gap-2">
          <h1 className="text-2xl font-medium select-none">Get in Touch</h1>
          <p className="text-lg select-none">
            Let&apos;s build something together
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                onChange={() => clearError('name')}
              />
              <FieldError
                errors={errors.name?.map(msg => ({ message: msg }))}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                onChange={() => clearError('email')}
              />
              <FieldError
                errors={errors.email?.map(msg => ({ message: msg }))}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="company">Company</FieldLabel>
              <Input
                id="company"
                name="company"
                placeholder="Your company"
                onChange={() => clearError('company')}
              />
              <FieldError
                errors={errors.company?.map(msg => ({ message: msg }))}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="message">Message</FieldLabel>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                className="min-h-[120px]"
                onChange={() => clearError('message')}
              />
              <FieldError
                errors={errors.message?.map(msg => ({ message: msg }))}
              />
            </Field>
            <div className="flex w-full items-center justify-end">
              <Button type="submit" className="w-fit mt-2">
                Send Message
              </Button>
            </div>
          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  )
}
