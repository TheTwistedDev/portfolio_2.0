// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

const appmail = process.env.EMAIL
const pass = process.env.EMAIL_PASS

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: appmail,
    pass,
  },
})

type Data = {
  success: boolean
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'POST') {
    const {name, phone, email, subject, message}: {name: string, phone: string, email: string, subject: string, message: string} = req.body
    const msg = {
      to: appmail,
      from: appmail,
      subject: `${name.toUpperCase()} sent you a message from the portfolio site about ${subject}`,
      text: `Email => ${email} phone#: ${phone}`,
      html: `<strong>${message} from ${email} with phone #: ${phone}</strong>`,
    }
    console.log(msg)
    try {
      await transporter.sendMail({
        to: msg.to,
        from: msg.from,
        subject: msg.subject,
        text: msg.text,
        html: msg.html,
      })
      return res.status(200).json({ success: true })
    } catch (error) {
      console.log(error)
      return res.status(400).json({ success: false })
    }
  }
}
