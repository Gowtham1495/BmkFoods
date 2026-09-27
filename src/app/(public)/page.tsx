import { getBrand, getHomeHero, getFeaturedProducts } from "@/lib/site-data";
import { withBasePath } from "@/lib/base-path";

export default async function HomePage() {
  const [brand, hero, featuredProducts] = await Promise.all([getBrand(), getHomeHero(), getFeaturedProducts()]);

  const stats = [
    { value: brand.yearsInBusiness, label: "Years of Trust" },
    { value: brand.farmPartners, label: "Farm Partners" },
    { value: "FSSAI", label: "Certified" },
    { value: "Coimbatore", label: "Based In" },
  ];

  const features = [
    { icon: "🐔", title: "Farm Fresh Daily", desc: "Never frozen. Processed and delivered the same day." },
    { icon: "🌿", title: "Clean Feed & Care", desc: "Natural farming practices with no shortcuts on quality." },
    { icon: "❄️", title: "Unbroken Cold Chain", desc: "Temperature maintained from farm to your doorstep." },
    { icon: "✅", title: "FSSAI Certified", desc: "Every standard and safety checkpoint is built in." },
  ];

  return (
    <div>
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-[#f2d9b3]">
        {hero.heroImage ? (
          <img src={hero.heroImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-75 saturate-125 brightness-110" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center border border-dashed border-white/20 bg-[radial-gradient(circle_at_center,_rgba(255,207,128,0.65),_rgba(106,50,34,0.88)_68%)]">
            <div className="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
              Upload Cloudinary hero image in Keystatic
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2c180f]/70 via-[#4a2a1b]/45 to-[#f7d9a2]/15" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_55%,rgba(255,210,130,0.26),transparent_24%),radial-gradient(circle_at_72%_22%,rgba(255,165,0,0.18),transparent_18%)]" />
        <div className="absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full bg-[#F5A623]/15 blur-3xl" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-1 lg:px-8 lg:py-24">
          <div className="max-w-full sm:max-w-xl lg:max-w-3xl">
            <div className="gold-accent" />
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F5A623] sm:text-sm">Farm Fresh · Coimbatore</p>
            <h1 className="display-xl mb-4 max-w-[12ch] font-bold text-white sm:mb-6 sm:max-w-none">{hero.headline}</h1>
            <p className="mb-8 max-w-[28rem] text-sm leading-relaxed text-white/70 sm:mb-10 sm:text-lg">{hero.subheadline}</p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href={withBasePath("/products")}
                className="inline-flex min-w-[150px] flex-1 items-center justify-center rounded-full bg-[#D42B2B] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B01F1F] hover:shadow-xl hover:shadow-red-600/30 sm:min-w-0 sm:flex-none sm:px-8 sm:py-4"
              >
                {hero.primaryCtaLabel}
              </a>
              <a
                href={withBasePath("/contact")}
                className="inline-flex min-w-[150px] flex-1 items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20 sm:min-w-0 sm:flex-none sm:px-8 sm:py-4"
              >
                {hero.secondaryCtaLabel}
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/40">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="h-8 w-px bg-white/20 animate-pulse" />
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="card-soft p-6 text-center">
                <div className="mb-1 text-3xl font-bold text-[#D42B2B]">{s.value}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#6B6B6B]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-gradient py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="gold-accent" />
              <h2 className="display-lg mb-6 font-bold text-[#2C2C2C]">The BMK Difference</h2>
              <p className="mb-8 max-w-xl text-[#6B6B6B] leading-relaxed">
                We believe fresh chicken should taste the way it was meant to — naturally raised, never frozen, and delivered with the care it deserves.
              </p>
              <a href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-[#D42B2B] transition-all duration-300 hover:gap-3">
                Our story <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="flex flex-col gap-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)]">
                  <span className="mt-0.5 text-2xl">{feature.icon}</span>
                  <div>
                    <h3 className="mb-1 font-semibold text-[#2C2C2C]">{feature.title}</h3>
                    <p className="text-sm leading-6 text-[#6B6B6B]">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <div className="gold-accent" />
              <h2 className="display-md font-bold text-[#2C2C2C]">Fresh Cuts Daily</h2>
            </div>
            <a href="/products" className="text-sm font-semibold text-[#D42B2B] transition-colors duration-300 hover:underline">
              View all →
            </a>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-4 md:overflow-visible">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group min-w-[220px] flex-shrink-0 overflow-hidden rounded-2xl bg-[#FFF8F0] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:min-w-0">
                <div className="aspect-square overflow-hidden bg-[#FFE8D6]">
                  {product.imageUrl ? (
                    <img src={product.imageUrl} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="flex h-full items-center justify-center text-5xl">🍗</div>
                  )}
                </div>
                <div className="p-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D42B2B]">{product.category}</span>
                  <h3 className="mt-2 font-bold text-[#2C2C2C]">{product.name}</h3>
                  {product.weightOptions ? <p className="mt-1 text-xs text-[#6B6B6B]">{product.weightOptions}</p> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1C1C1C] py-20 text-white">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#D42B2B]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <div className="gold-accent mx-auto" />
            <h2 className="display-md font-bold text-white">Farm to Plate</h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-white/50">Every step controlled. Every standard met.</p>
          </div>

          <div className="relative">
            <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-[#F5A623]/40 to-transparent md:block" />
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              {[
                { step: "01", icon: "🌾", title: "Our Farms", desc: "Hygienic, ventilated farms with natural feed only." },
                { step: "02", icon: "🏭", title: "Processing", desc: "FSSAI certified facility and disciplined handling." },
                { step: "03", icon: "❄️", title: "Cold Chain", desc: "Temperature maintained from farm to van to your door." },
                { step: "04", icon: "🏠", title: "Your Plate", desc: "Fresh, nutritious protein ready for home or business." },
              ].map((item) => (
                <div key={item.step} className="relative text-center">
                  <div className="relative z-10 mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-3xl">
                    {item.icon}
                  </div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623]">{item.step}</p>
                  <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-white/40">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-gradient py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="relative overflow-hidden rounded-[32px] bg-red-gradient p-12 shadow-2xl shadow-red-900/20 lg:p-16">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5" />
            <div className="absolute -bottom-12 -left-10 h-48 w-48 rounded-full bg-white/5" />
            <div className="relative">
              <div className="gold-accent mx-auto" />
              <h2 className="display-md mb-4 font-bold text-white">Fresh chicken for your home or restaurant?</h2>
              <p className="mx-auto mb-10 max-w-md text-white/70">
                We supply to homes, hotels, restaurants and catering businesses across Coimbatore.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={brand.whatsappUrl || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1EA855] hover:shadow-xl hover:shadow-green-600/30"
                >
                  <span>💬</span> WhatsApp Us
                </a>
                <a
                  href={`tel:${brand.phone}`}
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-[#D42B2B] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFF8F0]"
                >
                  📞 Call Us
                </a>
              </div>
              {brand.phone ? <p className="mt-6 text-xs text-white/40">{brand.phone} · {brand.operatingHours}</p> : null}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
