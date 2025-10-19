export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Idea, Their Craft</h1>
          <p className="text-xl text-slate-300 mb-8">
            Connect with talented artisans and makers to bring your custom product vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/post-ad"
              className="inline-block px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg"
            >
              Post Your Request
            </a>
            <a
              href="/ads"
              className="inline-block px-8 py-3 border border-white text-white hover:bg-white/10 rounded-lg"
            >
              Browse Makers
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Jewelry", desc: "Custom designs and artisan pieces" },
              { name: "Footwear", desc: "Handcrafted shoes and boots" },
              { name: "Clothing", desc: "Embroidered and custom garments" },
              { name: "Automobiles", desc: "Custom car modifications" },
              { name: "Gifting", desc: "Personalized gift items" },
              { name: "Furniture", desc: "Bespoke furniture pieces" },
            ].map((cat) => (
              <a
                key={cat.name}
                href={`/post-ad?category=${cat.name.toLowerCase()}`}
                className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2">{cat.name}</h3>
                <p className="text-slate-600">{cat.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
