import type { Metadata } from "next"
import { Noto_Sans } from "next/font/google"

import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"

import "./globals.css"

const font = Noto_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lasse | Portfolio",
  description:
    "Hi, I'm a BCIT Computer Information Systems Administration (CISA) alumni with a passion for IT and web development.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(`min-h-screen antialiased ${font.className}`)}>
        <main className="h-[calc(100vh-4rem)]">{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
