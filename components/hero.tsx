import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold text-balance">EasyCustomized</h1>
          <p className="mt-3 text-muted-foreground text-pretty">{"Your idea, their craft."}</p>
          <p className="mt-2 text-sm md:text-base text-muted-foreground/90">
            The marketplace connecting custom product seekers with talented makers across every category.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Link href="/post-ad">
              <Button>Post an Ad</Button>
            </Link>
            <Link href="/ads">
              <Button variant="outline">Browse Requests</Button>
            </Link>
          </div>
        </div>
        <div aria-hidden="true" className="grid grid-cols-2 gap-3">
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
          <div className="rounded-lg border bg-muted overflow-hidden aspect-[4/3] col-span-2">
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
