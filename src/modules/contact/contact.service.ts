import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmailToMe(
  name: string,
  email: string,
  company: string | undefined,
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
      template: {
        id: 'get-in-touch',
        variables: {
          name,
        },
      },
    })
  } catch (error) {
    console.error('Failed to send confirmation email:', error)
    throw new Error('CONFIRMATION_EMAIL_FAILED')
  }
}
