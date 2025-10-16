"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          EasyCustomized
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/post-ads" className="hover:text-blue-600 transition">
            Post Ads
          </Link>
          <Link href="/browse-ads" className="hover:text-blue-600 transition">
            Browse Ads
          </Link>
          <Link href="/classifieds" className="hover:text-blue-600 transition">
            Classifieds
          </Link>

          {/* Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-gray-700 hover:text-blue-600 transition">
              Accounts
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="mt-2 w-40">
              <DropdownMenuItem asChild>
                <Link href="/vendor">Vendor</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/admin">Admin</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/customer">Customer</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Login Button */}
          <Link href="/login">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
              Login
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-md"
          >
            <div className="flex flex-col p-4 space-y-4">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600"
              >
                Home
              </Link>
              <Link
                href="/post-ads"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600"
              >
                Post Ads
              </Link>
              <Link
                href="/browse-ads"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600"
              >
                Browse Ads
              </Link>
              <Link
                href="/classifieds"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600"
              >
                Classifieds
              </Link>

              <div className="border-t border-gray-200 pt-3">
                <p className="text-gray-500 mb-2">Accounts</p>
                <Link
                  href="/vendor"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-blue-600"
                >
                  Vendor
                </Link>
                <Link
                  href="/admin"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-blue-600"
                >
                  Admin
                </Link>
                <Link
                  href="/customer"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-blue-600"
                >
                  Customer
                </Link>
              </div>

              <Link href="/login" onClick={() => setMenuOpen(false)}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
                  Login
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
