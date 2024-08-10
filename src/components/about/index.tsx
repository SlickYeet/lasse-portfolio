"use client"

import { useState, useTransition } from "react"

import { BorderBeam } from "@/components/magicui/border-beam"
import Ripple from "@/components/magicui/ripple"
import TextRevealByWord from "@/components/magicui/text-reveal"
import { TAB_DATA } from "@/constants"

import { TabButton } from "./tab-button"

type Tabs = "skills" | "education" | "certifications"

export const About = () => {
  const [tab, setTab] = useState<Tabs>("skills")
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id: Tabs) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section id="about" className="mb-8">
      <h3 className="mb-8 pt-16 text-center text-4xl font-semibold md:pt-32 md:text-6xl md:font-bold">
        About me
      </h3>

      <TextRevealByWord
        text="I'm Lasse, a BCIT CISA alumni with a strong focus on
        networking. My true passion lies in system administration and system
        integration, where I enjoy tackling complex challenges and
        optimizing IT environments. In my spare time, I indulge in web
        development and work on my homelab, constantly experimenting and
        learning new technologies. My unique combination of programming and
        networking skills, coupled with hands-on experience in managing home
        servers, makes me a versatile and resourceful IT professional."
        className="z-[-99]"
      />

      <div className="gap-8 md:grid md:grid-cols-2">
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-foreground to-secondary bg-clip-text text-center text-4xl font-semibold leading-none text-transparent md:text-6xl">
            My background
          </span>
          <Ripple />
          <BorderBeam size={250} duration={12} delay={9} />
        </div>

        <div className="mt-8 flex h-full flex-col text-left md:mt-0">
          <div className="flex flex-row justify-start">
            <TabButton
              disabled={isPending}
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton
              disabled={isPending}
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}>
              Education
            </TabButton>
            <TabButton
              disabled={isPending}
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}>
              Certifications
            </TabButton>
          </div>

          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  )
}
