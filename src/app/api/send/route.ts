import { ContactEmail } from "@/components/emails/contact"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { from, subject, message } = await req.json()

  try {
    const { data, error } = await resend.emails.send({
      from: `Portfolio <lasse@famlam.ca>`,
      to: "lasse@famlam.ca",
      subject: `Portfolio Contact: ${subject}`,
      react: ContactEmail({ from, subject, message }),
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
