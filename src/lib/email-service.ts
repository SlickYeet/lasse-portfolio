"use server"

import { emailRenderer } from "@/components/email-renderer"
import { transporter } from "@/lib/email-transporter"
import { EmailTemplateType } from "@/lib/types"

type SendEmailType = {
  subject: string
  template: EmailTemplateType
  data: {}
}

export const sendEmail = async ({ subject, template, data }: SendEmailType) => {
  const body = await emailRenderer({ template, data })
  if (!body) {
    return {
      success: false,
    }
  }

  transporter.sendMail({
    from: `"Lasse | Portfolio" <${process.env.EMAIL_USER}>`,
    to: "fglp.cm@gmail.com",
    subject,
    html: body,
  })

  return {
    success: true,
  }
}
