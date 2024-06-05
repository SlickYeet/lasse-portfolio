import { Html, Text } from "@react-email/components"

interface EmailTemplateProps {
  data: {
    from?: string
    message?: string
  }
}

export const EmailTemplate = ({
  data: { from, message },
}: EmailTemplateProps) => {
  return (
    <Html>
      <Text>New message from: {from}</Text>
      <Text>{message}</Text>
    </Html>
  )
}

EmailTemplate.PreviewProps = {
  data: {
    email: "lasse@famlam.ca",
    subject: "Test Email",
    message: "This is a test email message.",
  },
} as EmailTemplateProps

export default EmailTemplate
