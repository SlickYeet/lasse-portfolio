import type { Metadata } from "next"
import { Noto_Sans } from "next/font/google"

import "./globals.css"

const font = Noto_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lasse | Portfolio",
  description: "Lasse's portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={font.className}>{children}</body>
    </html>
  )
}
