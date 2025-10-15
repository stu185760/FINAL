"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCurrentUser, refreshCurrentUser } from "@/hooks/use-local"
import { switchRole } from "@/lib/local-db"
import { cn } from "@/lib/utils"

const nav = [
  { href: "/", label: "Home" },
  { href: "/ads", label: "Browse Ads" },
  { href: "/vendor/browse", label: "Vendor Browse" },
  { href: "/classifieds", label: "Classifieds" },
  { href: "/post-ad", label: "Post Ad" },
  { href: "/classifieds/post", label: "Post Classified" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const { data: user } = useCurrentUser()

  return (
    <header className="border-b bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60 sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          EasyCustomized
        </Link>
        <nav className="flex items-center gap-2">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={cn(
                "px-3 py-2 rounded-md text-sm hover:bg-muted",
                pathname === n.href && "bg-muted font-medium",
              )}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Select
            value={user?.role ?? "customer"}
            onValueChange={(val: "customer" | "vendor" | "admin") => {
              switchRole(val)
              refreshCurrentUser()
            }}
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="customer">Customer</SelectItem>
              <SelectItem value="vendor">Vendor</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
            </SelectContent>
          </Select>
          <Link href="/messages">
            <Button variant="outline" size="sm">
              Messages
            </Button>
          </Link>
          <Link href="/login">
            <Button size="sm">Login</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
