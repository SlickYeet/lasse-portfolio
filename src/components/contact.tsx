"use client"

import { motion } from "framer-motion"
import { Globe, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { sendEmail } from "@/lib/email-service"

import GitHubIcon from "../../public/github-icon.svg"
import LinkedInIcon from "../../public/linkedin-icon.svg"

export const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const data = {
      from: e.target.email.value,
      message: e.target.message.value,
    }

    const res = await sendEmail({
      subject: e.target.subject.value,
      template: "email",
      data,
    })
    if (res.success === true) {
      setEmailSubmitted(true)
    }
  }

  return (
    <section
      id="contact"
      className="relative my-12 grid gap-4 py-24 md:my-12 md:grid-cols-2">
      <div className="absolute -left-4 top-3/4 z-0 h-80 w-80 -translate-x-1/2 transform rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary to-transparent blur-lg" />

      <div className="z-10">
        <h5 className="my-2 text-xl font-bold">Let&apos;s Connect</h5>
        <p className="mb-4 max-w-md text-muted-foreground">
          {" "}
          I&apos;m always open to new opportunities, so if you have a project
          you want to work on, or just want to chat, feel free to reach out to
          me!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/SlickYeet" target="_blank">
            <Image src={GitHubIcon} alt="GitHub" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/lasse-lammers-90a050234"
            target="_blank">
            <Image src={LinkedInIcon} alt="LinkedIn" />
          </Link>
          <Link href="https://www.famlam.ca/contact" target="_blank">
            <Globe className="h-12 w-12" />
          </Link>
          <Link href="mailto:lasse@famlam.ca">
            <Mail className="h-12 w-12" />
          </Link>
        </div>
      </div>

      <div>
        {emailSubmitted ? (
          <p className="mt-2 text-sm text-success">
            Email sent successfully! I&apos;ll get back to you as soon as
            possible.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="mb-6">
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                placeholder="joe@famlam.ca"
                className="block w-full rounded-lg border border-border bg-foreground p-2.5 text-sm text-text placeholder-muted-foreground"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                placeholder="Just saying hi!"
                className="block w-full rounded-lg border border-border bg-foreground p-2.5 text-sm text-text placeholder-muted-foreground"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Let's talk about..."
                className="block w-full resize-none rounded-lg border border-border bg-foreground p-2.5 text-sm text-text placeholder-muted-foreground"
              />
            </div>

            <motion.button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-primary to-primary-foreground px-5 py-2.5 font-medium"
              initial={{ backgroundPosition: "0% 50%" }}
              whileHover={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              style={{
                backgroundSize: "200% 200%",
                backgroundImage:
                  "linear-gradient(to right, #primary, #primary-foreground)",
              }}>
              Send Message
            </motion.button>
          </form>
        )}
      </div>
    </section>
  )
}
