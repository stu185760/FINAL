import Link from "next/link"
import Image from "next/image" // add image preview
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getCategories, getUser, type Ad } from "@/lib/local-db"
import { formatDateTime } from "@/lib/utils"

export function AdCard({ ad }: { ad: Ad }) {
  const cat = getCategories().find((c) => c.slug === ad.category)
  const owner = ad.owner_id ? getUser(ad.owner_id) : undefined

  const cover = ad.images?.[0] || "/custom-project-preview.jpg"

  const priceLabel =
    typeof ad.price_from === "number" && typeof ad.price_to === "number"
      ? `₹${ad.price_from} – ₹${ad.price_to}`
      : typeof ad.price_from === "number"
        ? `From ₹${ad.price_from}`
        : typeof ad.price_to === "number"
          ? `Up to ₹${ad.price_to}`
          : undefined

  return (
    <Card className="overflow-hidden">
      <div className="aspect-[16/9] bg-muted relative">
        <Image
          src={cover || "/placeholder.svg"}
          alt={ad.title || "Ad cover image"}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="text-base">{ad.title}</CardTitle>
        <Badge variant="secondary">{cat?.name ?? ad.category}</Badge>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="line-clamp-3 text-sm text-muted-foreground">{ad.description}</p>

        <div className="flex flex-wrap items-center gap-2">
          {ad.location ? <Badge variant="outline">{ad.location}</Badge> : null}
          {priceLabel ? <Badge variant="outline">{priceLabel}</Badge> : null}
        </div>

        <div className="text-xs text-muted-foreground">
          {owner?.name} • {formatDateTime(ad.created_at)}
        </div>

        <Link href={`/ads/${ad.id}`} className="text-sm underline underline-offset-4">
          View details
        </Link>
      </CardContent>
    </Card>
  )
}
