export default function ProductsPage() {
  return (
    <div className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F4F9F4_38%,#E4F0E4_72%,#FFFFFF_100%)]">
      <section className="border-b border-[#F0E8E0]/60 py-5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="display-lg mb-3 font-bold text-[#2C2C2C]">Our Products</h1>
          <p className="max-w-xl text-lg text-[#1F2937]">Farm fresh cuts processed daily. Never frozen, always fresh.</p>
        </div>
      </section>

      <section className="pb-16 pt-6 sm:pb-20 sm:pt-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-5">
            {[
              {
                title: "Poultry farm",
                description: "Fresh, carefully raised poultry for healthy meals and everyday cooking.",
                icon: "🐔",
                href: "/homes/poultry-farm",
              },
              {
                title: "Oil Mill",
                description: "Pure and reliable oils prepared with attention to quality and taste.",
                icon: "🌾",
                href: "/homes/oil-mill",
              },
              {
                title: "Organic fruits",
                description: "Seasonal fruits selected for freshness, flavour, and natural goodness.",
                icon: "🍎",
                href: "/homes/organic-fruits",
              },
            ].map((home) => (
              <article
                key={home.title}
                className="card-soft group flex min-h-[176px] overflow-hidden border border-[rgba(172,197,166,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex aspect-square w-44 shrink-0 items-center justify-center bg-[#D1EDD3] text-6xl transition-transform duration-500 group-hover:scale-105 sm:w-56 lg:w-64">
                  {home.icon}
                </div>

                <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-[#2C2C2C] sm:text-2xl">{home.title}</h3>
                  <p className="mt-3 line-clamp-2 text-ellipsis text-sm leading-6 text-[#2D3748] sm:text-base">
                    {home.description}
                  </p>
                  <a
                    href={home.href}
                    className="mt-5 inline-flex items-center gap-2 self-start text-sm font-semibold text-[#114b33] transition-colors duration-300 hover:text-[#0b3323]"
                  >
                    <span>Read more</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
