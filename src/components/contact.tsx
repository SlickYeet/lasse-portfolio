"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { NeonGradientCard } from "@/components/magicui/neon-gradient-card"
import Particles from "@/components/magicui/particles"
import { toast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"

import GithubIcon from "../../public/github-icon.svg"
import LinkedInIcon from "../../public/linkedin-icon.svg"

export const Contact = () => {
  const [clicked, setClicked] = useState<boolean>(false)
  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false)

  const handleCopy = async (text: string) => {
    if (navigator.userAgent.toLowerCase().includes("firefox")) return
    const permission = await navigator.permissions.query({
      name: "clipboard-write" as PermissionName,
    })
    if (permission.state === "granted") {
      setClicked(true)
      await navigator.clipboard.writeText(text)
      toast({
        title: "Email copied to clipboard!",
        description: text,
      })
      await new Promise((f) => setTimeout(f, 1000))
      setClicked(false)
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const data = {
      from: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    }

    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    if (!res.ok) {
      toast({
        title: "Error sending email!",
        description: res.statusText,
        variant: "destructive",
      })
    } else {
      setEmailSubmitted(true)
    }

    e.target.reset()
  }

  return (
    <section
      id="contact"
      className="relative flex min-h-screen w-full flex-col items-center justify-center gap-16 pt-16 md:flex-row md:pt-32">
      <Particles
        className="pointer-events-none absolute inset-0 -z-50 select-none"
        quantity={100}
        ease={80}
        refresh
      />

      <div className="flex-2 z-10">
        <h5 className="my-2 text-center text-xl font-bold md:text-left">
          Let&apos;s Connect
        </h5>
        <p className="prose mb-4 text-center text-muted-foreground lg:prose-lg md:text-left">
          I&apos;m always open to new opportunities, so if you have a project
          you want to work on, or just want to chat, feel free to reach out to
          me!
        </p>

        <div className="flex flex-row items-center justify-center gap-2 md:justify-start">
          <Link href="https://github.com/SlickYeet" target="_blank">
            <Image src={GithubIcon} alt="Github" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/lasse-lammers-90a050234"
            target="_blank">
            <Image src={LinkedInIcon} alt="Github" />
          </Link>
          <button
            disabled={clicked}
            onClick={() => handleCopy("lasse@famlam.ca")}
            className={cn(
              clicked ? "text-muted-foreground" : "text-foreground",
            )}>
            <Mail className="size-12" />
          </button>
        </div>
      </div>

      <div className="flex-1">
        <NeonGradientCard
          neonColors={{
            firstColor: "hsl(var(--secondary))",
            secondColor: "hsl(var(--primary))",
          }}>
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
                className="block w-full rounded-lg border border-border bg-secondary p-2.5 text-sm text-foreground placeholder-muted-foreground"
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
                className="block w-full rounded-lg border border-border bg-secondary p-2.5 text-sm text-foreground placeholder-muted-foreground"
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
                className="block w-full resize-none rounded-lg border border-border bg-secondary p-2.5 text-sm text-foreground placeholder-muted-foreground"
              />
            </div>

            {emailSubmitted ? (
              <p className="text-balance text-center text-base text-green-600">
                Email sent successfully! I&apos;ll get back to your as soon as
                possible.
              </p>
            ) : (
              <motion.button
                type="submit"
                disabled={emailSubmitted}
                className="w-full rounded-lg bg-gradient-to-r from-muted-foreground to-secondary px-5 py-2.5 font-medium"
                initial={{ backgroundPosition: "0% 50%" }}
                whileHover={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                style={{
                  backgroundSize: "200% 200%",
                }}>
                Send Message
              </motion.button>
            )}
          </form>
        </NeonGradientCard>
      </div>

      <div className="pointer-events-none absolute inset-0 -left-4 top-3/4 -z-50 h-80 w-80 -translate-x-1/2 transform select-none rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary blur-lg" />
    </section>
  )
}
