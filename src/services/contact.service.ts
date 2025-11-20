import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmailToMe(
  name: string,
  email: string,
  company: string,
  message: string
) {
  try {
    await resend.emails.send({
      from: 'messages@kraustechconsult.com.br',
      to: 'lucas@kraustechconsult.com.br',
      subject: 'New message from portfolio',
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Company: ${company}</p><p>Message: ${message}</p>`,
    })
  } catch (error) {
    console.error('Failed to send email to admin:', error)
  }
}

export async function sendEmailToSender(name: string, email: string) {
  try {
    await resend.emails.send({
      from: 'no-reply@kraustechconsult.com.br',
      to: email,
      subject: 'Thank you for your message',
      html: `<p>Thank you for your message, ${name}. I will get back to you soon.</p>`,
    })
  } catch (error) {
    console.error('Failed to send confirmation email:', error)
    throw new Error('CONFIRMATION_EMAIL_FAILED')
  }
}
