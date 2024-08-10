import Link from "next/link"

import NumberTicker from "@/components/magicui/number-ticker"

export const Achievements = () => {
  const ACHIEVEMENT_LIST = [
    {
      metric: "Projects",
      value: 5,
      postfix: "+",
      href: "#projects",
    },
    {
      prefix: "~",
      metric: "Users",
      value: 15,
    },
    {
      metric: "Certifications",
      value: 3,
      href: "#about",
    },
    {
      metric: "Years",
      value: 2,
      postfix: "+",
      href: "https://www.famlam.ca/about/me",
      target: "_blank",
    },
  ]

  return (
    <div className="mt-32">
      <div className="z-10 flex flex-col items-center justify-between rounded-md px-16 py-8 sm:flex-row sm:border sm:border-border">
        {ACHIEVEMENT_LIST.map((achievement, i) => (
          <Link
            key={i}
            href={achievement.href ?? ""}
            target={achievement.target}
            className="mx-4 my-4 flex flex-col items-center justify-center sm:my-0">
            <h2 className="text-4xl font-bold">
              {achievement.prefix}
              <NumberTicker value={achievement.value} />
              {achievement.postfix}
            </h2>
            <p className="text-base text-muted-foreground">
              {achievement.metric}
            </p>
          </Link>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[-10] h-32 bg-gradient-to-t from-background" />
    </div>
  )
}
