import { NextResponse } from 'next/server'
import { sendEmailToSender, sendEmailToMe } from '@/services/contact-service'

export async function POST(request: Request) {
  const { name, email, company, message } = await request.json()

  try {
    await sendEmailToSender(name, email)
  } catch (error) {
    console.error('Failed to send confirmation email:', error)
    return NextResponse.json(
      { error: 'Unable to send confirmation email' },
      { status: 500 }
    )
  }

  await sendEmailToMe(name, email, company, message)
  return NextResponse.json({ message: 'Email sent successfully' })
}
