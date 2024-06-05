"use server"

import { render } from "@react-email/components"

import { EmailTemplateType } from "@/lib/types"

import EmailTemplate from "@/components/email-template"

const emailComponents = {
  email: EmailTemplate,
}

type EmailRendererProps = {
  template?: EmailTemplateType
  data: {}
}

export const emailRenderer = async ({
  template,
  data = {},
}: EmailRendererProps) => {
  const EmailComponents =
    emailComponents[template as keyof typeof emailComponents]
  return render(<EmailComponents data={data} />)
}
