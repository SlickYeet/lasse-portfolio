"use client"

import dynamic from "next/dynamic"
import Link from "next/link"

import { ACHIEVEMENT_LIST } from "@/constants"

const AnimatedNums = dynamic(
  () => {
    return import("react-animated-numbers")
  },
  { ssr: false },
)

export const Achievements = () => {
  return (
    <div className="py-8 sm:py-16 xl:gap-16">
      <div className="flex flex-col items-center justify-between rounded-md px-16 py-8 sm:flex-row sm:border sm:border-border">
        {ACHIEVEMENT_LIST.map((achievement, i) => {
          return (
            <Link
              key={i}
              href={achievement.href || ""}
              target={
                achievement.href && !achievement.href.startsWith("#")
                  ? "_blank"
                  : "_self"
              }
              className="mx-4 my-4 flex flex-col items-center justify-center sm:my-0">
              <h2 className="flex flex-row text-4xl font-bold">
                {achievement.prefix}
                <AnimatedNums
                  includeComma
                  animateToNumber={parseInt(String(achievement.value))}
                  locale="en-US"
                  className="text-4xl font-bold"
                />
                {achievement.postfix}
              </h2>
              <p className="text-base text-muted-foreground">
                {achievement.metric}
              </p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
