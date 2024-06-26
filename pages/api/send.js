import { EmailTemplate } from '@/app/components/Email/contact-form'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async (req, res) => {
  try {
    const { name, email, message } = JSON.parse(req.body)

    const data = await resend.sendEmail({
      from: `${process.env.FROM_EMAIL}`,
      to: `${process.env.TO_EMAIL}`,
      subject: '🎉Máte novou zprávu z vašeho webu!',
      html: '',
      react: EmailTemplate({ name, email, message }),
    })

    res.status(200).json(data)
  } catch (error) {
    res.status(400).json(error)
  }
}
