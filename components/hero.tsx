import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-16 lg:py-20 grid gap-8 md:gap-12 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              Your Idea, Their Craft
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mt-4">
              Connect with talented artisans and makers to bring your custom product vision to life.
            </p>
          </div>
          <p className="text-sm md:text-base text-slate-400">
            From jewelry and clothing to automobiles and furniture—find the perfect craftsperson for your unique
            project.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-4">
            <Link
              href="/post-ad"
              className="inline-block px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg"
            >
              Post Your Request
            </Link>
            <Link
              href="/ads"
              className="inline-block px-6 py-3 border border-white text-white hover:bg-white/10 rounded-lg"
            >
              Browse Makers
            </Link>
          </div>
        </div>
        <div aria-hidden="true" className="grid grid-cols-2 gap-3 md:gap-4">
          <div className="rounded-xl border border-slate-700 bg-slate-800 overflow-hidden aspect-[4/3] shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src="/jewelry-embroidery.avif"
              alt="Ornate jewelry embroidery"
              width={400}
              height={300}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-800 overflow-hidden aspect-[4/3] shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src="/shoemaker-craft.jpg"
              alt="Shoemaker craftsmanship"
              width={400}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-800 overflow-hidden aspect-[4/3] shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src="/bridal-jewelry.jpg"
              alt="Bridal jewelry design"
              width={400}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-800 overflow-hidden aspect-[4/3] shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src="/red-automobile.jpg"
              alt="Custom automobile"
              width={400}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
