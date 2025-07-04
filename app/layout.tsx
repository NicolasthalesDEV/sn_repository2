import type React from "react"
import type { Metadata } from "next"
import { Barlow_Condensed, Roboto_Flex } from "next/font/google"
import { AuthProvider } from "@/contexts/auth-context"
import "./globals.css"

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "SN Network",
  description: "Gaming network platform",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${barlowCondensed.variable} ${robotoFlex.variable} antialiased font-barlow-condensed`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
