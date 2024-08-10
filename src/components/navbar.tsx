import Link from "next/link"

import { Hint } from "@/components/hint"
import { Icons } from "@/components/icons"
import { Dock, DockIcon } from "@/components/magicui/dock"
import { cn } from "@/lib/utils"

export const Navbar = () => {
  const ROUTES = [
    {
      label: "Home",
      href: "/",
      icon: <Icons.home className="size-6" />,
    },
    {
      label: "HHN",
      href: "https://www.famlam.ca",
      target: "_blank",
      icon: <Icons.logo className="size-8" />,
    },
    {
      label: "seperator",
    },
    {
      label: "About",
      href: "#about",
      icon: <Icons.about className="size-6" />,
      hidden: true,
    },
    {
      label: "Projects",
      href: "#projects",
      icon: <Icons.projects className="size-6" />,
      hidden: true,
    },
    {
      label: "Contact",
      href: "#contact",
      icon: <Icons.contact className="size-6" />,
      hidden: true,
    },
    {
      label: "seperator",
      hidden: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/lasse-lammers-90a050234",
      target: "_blank",
      icon: <Icons.linkedin className="size-6" />,
    },
    {
      label: "GitHub",
      href: "https://github.com/SlickYeet",
      target: "_blank",
      icon: <Icons.gitHub className="size-6" />,
    },
  ]

  return (
    <Dock direction="middle" className="sticky bottom-8 z-[9999] md:top-8">
      {ROUTES.map((route, i) => (
        <>
          {route.label === "seperator" ? (
            <div
              key={i}
              className={cn("mx-1 h-full w-px bg-secondary", {
                "max-sm:hidden": route.hidden,
              })}
            />
          ) : (
            <DockIcon
              key={i}
              className={cn("group scale-100", {
                "max-sm:hidden": route.hidden,
              })}>
              <Hint label={route.label} delay={100} asChild>
                <Link
                  href={route.href ?? ""}
                  target={route.target}
                  className="flex h-full w-full items-center justify-center transition-all group-hover:scale-125">
                  {route.icon}
                </Link>
              </Hint>
            </DockIcon>
          )}
        </>
      ))}
    </Dock>
  )
}
