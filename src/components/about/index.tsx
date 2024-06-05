"use client"

import Image from "next/image"
import { useState, useTransition } from "react"

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
    <section className="min-h-[calc(100vh-4rem)]" id="about">
      <div className="gap-8 px-4 py-2 sm:py-16 md:grid md:grid-cols-2 xl:gap-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="about"
          width={512}
          height={512}
          className="rounded-xl"
        />
        <div className="mt-4 flex h-full flex-col text-left md:mt-0">
          <h2 className="mb-4 text-4xl font-bold">About Me</h2>
          <p className="prose lg:prose-lg bg-gradient-to-br from-muted-foreground to-muted bg-clip-text text-transparent">
            I&apos;m Lasse, a BCIT CISA alumni with a strong focus on
            networking. My true passion lies in system administration and system
            integration, where I enjoy tackling complex challenges and
            optimizing IT environments. In my spare time, I indulge in web
            development and work on my homelab, constantly experimenting and
            learning new technologies. My unique combination of programming and
            networking skills, coupled with hands-on experience in managing home
            servers, makes me a versatile and resourceful IT professional.
          </p>

          <div className="mt-8 flex flex-row justify-start">
            <TabButton
              disabled={isPending}
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}>
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              disabled={isPending}
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}>
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              disabled={isPending}
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}>
              {" "}
              Certifications{" "}
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
