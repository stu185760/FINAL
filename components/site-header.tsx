"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const nav = [
  { href: "/", label: "Home" },
  { href: "/ads", label: "Browse Ads" },
  { href: "/classifieds", label: "Classifieds" },
  { href: "/post-ad", label: "Post Ad" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg md:text-xl">
          <Image src="/logo.png" alt="EasyCustomized Logo" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10" />
          <span className="text-sm sm:text-base md:text-lg">EasyCustomized</span>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`px-3 py-2 rounded-md text-sm hover:bg-gray-100 ${
                pathname === n.href ? "bg-gray-100 font-medium" : ""
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Link href="/auth/login" className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-50">
            Login
          </Link>
          <Link href="/auth/sign-up" className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Sign Up
          </Link>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-md"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-md text-sm hover:bg-gray-100 ${
                  pathname === n.href ? "bg-gray-100 font-medium" : ""
                }`}
              >
                {n.label}
              </Link>
            ))}
            <Link href="/auth/login" className="px-3 py-2 text-sm border rounded-lg hover:bg-gray-50">
              Login
            </Link>
            <Link
              href="/auth/sign-up"
              className="px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
