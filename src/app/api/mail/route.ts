import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { name, email, company, message } = await request.json()

  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'lucas@kraustechconsult.com.br',
    subject: 'New message from portfolio',
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Company: ${company}</p><p>Message: ${message}</p>`,
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ data })
}
