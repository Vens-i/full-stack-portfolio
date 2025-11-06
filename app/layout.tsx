import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type { ReactNode } from "react"

import SiteLayout from "@/components/SiteLayout"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Kervens Auguste — Full Stack Web Developer",
  description:
    "Kervens Auguste partners with teams and small businesses to build dependable, people-first digital tools and experiences.",
  keywords: [
    "Kervens Auguste",
    "Full Stack Web Developer",
    "New York",
    "web development",
    "software developer",
    "people-first design",
    "healthcare technology",
    "small business digital tools",
  ],
  authors: [{ name: "Kervens Auguste" }],
  openGraph: {
    title: "Kervens Auguste — Full Stack Web Developer",
    description:
      "A calm, trustworthy, and human introduction to Kervens Auguste, focused on clear communication and dependable digital products.",
    url: "https://kervens-auguste.com",
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable}`}>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  )
}
