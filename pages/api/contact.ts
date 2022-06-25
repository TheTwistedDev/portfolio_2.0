// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

type Data = {
  success: boolean
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'POST') {
    const {name, phone, email, subject, message}: {name: string, phone: string, email: string, subject: string, message: string} = req.body
    const msg = {
      to: 'TheTwistedDev@gmail.com',
      from: 'contact@abdullah-al-suwaidi.com',
      subject: `${name.toUpperCase()} sent you a message from the portfolio site about ${subject}`,
      text: `Email => ${email} phone#: ${phone}`,
      html: `<strong>${message}</strong>`,
    }
    try {
      await sgMail.send(msg)
      res.status(200).json({success: true })
    } catch (err) {
      res.status(500).json({ success: false })
    } 
  }
}
