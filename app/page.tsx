import { Hero } from "@/components/hero"
import { AdList } from "@/components/ad-list"

export default function Page() {
  return (
    <main>
      <Hero />
      <section className="mx-auto max-w-6xl px-4 py-8 space-y-4">
        <h2 className="text-xl font-semibold">Recent ads</h2>
        <AdList />
      </section>
    </main>
  )
}
