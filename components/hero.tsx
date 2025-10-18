import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-12 lg:py-16 grid gap-6 md:gap-8 md:grid-cols-2 items-center">
        <div className="space-y-4 md:space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-balance">EasyCustomized</h1>
          <p className="text-sm md:text-base text-muted-foreground text-pretty">{"Your idea, their craft."}</p>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground/90">
            The marketplace connecting custom product seekers with talented makers across every category.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 pt-2">
            <Link href="/post-ad" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto">Post an Ad</Button>
            </Link>
            <Link href="/ads" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                Browse Requests
              </Button>
            </Link>
          </div>
        </div>
        <div aria-hidden="true" className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          <div className="rounded-lg border bg-muted overflow-hidden aspect-[4/3]">
            <Image
              src="/handcrafted-furniture-workshop.jpg"
              alt="Handcrafted furniture workshop"
              width={640}
              height={480}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="rounded-lg border bg-muted overflow-hidden aspect-[4/3]">
            <Image
              src="/artisan-jewelry-making.jpg"
              alt="Artisan jewelry making"
              width={640}
              height={480}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="rounded-lg border bg-muted overflow-hidden aspect-[4/3] sm:col-span-2">
            <Image
              src="/custom-automotive-upholstery.jpg"
              alt="Custom automotive upholstery"
              width={1280}
              height={480}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
