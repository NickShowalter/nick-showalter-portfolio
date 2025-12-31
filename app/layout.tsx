import "./globals.css"
import { Inter, Roboto_Mono } from "next/font/google"
import { ThemeProvider } from "./components/ThemeProvider"
import type React from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
})

export const metadata = {
  title: "Nick Showalter - Data & Full-Stack Wizard",
  description:
    "Portfolio of Nick Showalter, a Technical Data Analyst, Full-Stack Engineer, and AI Engineering enthusiast with over 6 years of industry experience.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`} suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

