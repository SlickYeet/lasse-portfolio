import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Row,
  Section,
  Text,
} from "@react-email/components"

interface ContactEmailProps {
  from: string
  subject: string
  message: string
}

export const ContactEmail = ({ from, subject, message }: ContactEmailProps) => {
  const year = new Date().getFullYear()
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://lasse.famlam.ca"

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={section}>
            <Img
              src={`${baseUrl}/assets/projects/boilerplate.png`}
              alt="hhn"
              width="100"
              height="100"
              style={{ margin: "auto" }}
            />
            <Heading style={global.heading}>{subject}</Heading>
            <Text style={global.text}>New message from: {from}</Text>
            <Text style={{ ...global.text, marginTop: 24 }}>{message}</Text>
          </Section>

          <Hr style={global.hr} />

          <Section style={paddingY}>
            <Row>
              <Text style={footer.text}>
                &copy; {year} HHN, All rights reserved.
              </Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const paddingY = {
  paddingTop: "22px",
  paddingBottom: "22px",
}

const paragraph = {
  margin: "0",
  lineHeight: "2",
}

const global = {
  heading: {
    fontSize: "32px",
    lineHeight: "1.3",
    fontWeight: "700",
    letterSpacing: "-1px",
  } as React.CSSProperties,
  text: {
    ...paragraph,
    color: "#747474",
    fontWeight: "500",
  },
  hr: {
    borderColor: "#E5E5E5",
    margin: "0",
  },
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: "10px auto",
  width: "600px",
  maxWidth: "100%",
  border: "1px solid #E5E5E5",
}

const section = {
  padding: "40px 74px",
} as React.CSSProperties

const footer = {
  text: {
    margin: "0",
    color: "#AFAFAF",
    fontSize: "13px",
    textAlign: "center",
  } as React.CSSProperties,
}
