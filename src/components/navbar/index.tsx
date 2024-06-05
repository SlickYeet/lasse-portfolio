"use client"

import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { MenuOverlay } from "@/components/navbar/menu-overlay"

import { NavItem } from "./nav-item"

const navRoutes = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <nav className="fixed left-0 right-0 top-0 z-10 mx-auto border-b border-border bg-background/75 backdrop-blur-lg">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-2 lg:py-4">
        <Link href="/" className="text-2xl font-semibold md:text-5xl">
          LA<span className="text-primary">SSE</span>
        </Link>

        <div className="mobile-menu block md:hidden">
          {!isOpen ? (
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center rounded border border-muted px-3 py-2 text-muted hover:border-text hover:text-text">
              <Menu className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center rounded border border-muted px-3 py-2 text-muted hover:border-text hover:text-text">
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="mt-0 flex p-4 md:flex-row md:space-x-8 md:p-0">
            {navRoutes.map((route, i) => (
              <NavItem key={i} href={route.href} label={route.label} />
            ))}
          </ul>
        </div>
      </div>
      {isOpen ? <MenuOverlay routes={navRoutes} /> : null}
    </nav>
  )
}
