import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { Suspense } from "react"

// Google fonts (optional — keeps your original config)
import {
  Inter as V0_Font_Inter,
  Geist_Mono as V0_Font_Geist_Mono,
  Source_Serif_4 as V0_Font_Source_Serif_4,
} from "next/font/google"

const _inter = V0_Font_Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})
const _geistMono = V0_Font_Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})
const _sourceSerif_4 = V0_Font_Source_Serif_4({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "EasyCustomized",
  description: "Your idea, their craft.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`min-h-screen flex flex-col bg-white text-gray-900 ${GeistSans.variable} ${GeistMono.variable}`}
      >
        <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
          {/* Header */}
          <SiteHeader />

          {/* Main content area — responsive padding and max width */}
          <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6">
            {children}
          </main>

          {/* Footer placeholder (optional) */}
          <footer className="w-full border-t border-gray-200 text-center text-sm text-gray-500 py-6">
            © {new Date().getFullYear()} EasyCustomized. All rights reserved.
          </footer>

          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
