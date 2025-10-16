"use client"

import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Browse Ads", href: "/browse-ads" },
    { name: "Vendor Browse", href: "/vendor-browse" },
    { name: "Classifieds", href: "/classifieds" },
    { name: "Post Ad", href: "/post-ad" },
    { name: "Post Classified", href: "/post-classified" }
  ]

  const rightMenu = [
    { name: "Customer", href: "/customer" },
    { name: "Messages", href: "/messages" },
    { name: "Login", href: "/login" }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
          EasyCustomized
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-black transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Menu (Desktop) */}
        <nav className="hidden md:flex space-x-4 items-center">
          {rightMenu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-black transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t shadow-inner"
          >
            <div className="flex flex-col space-y-3 p-4">
              {[...navItems, ...rightMenu].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
