import { getBrand, getHomeHero, getFeaturedProducts } from "@/lib/site-data";
import { withBasePath } from "@/lib/base-path";
import FeatureReveal from "@/components/public/feature-reveal";
import HomeSpotlightSection from "@/components/public/home-spotlight";
import { AnimatedStatValue } from "@/components/public/animated-stat-card";

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
    <div className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F4F9F4_38%,#E4F0E4_72%,#FFFFFF_100%)]">
<section className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24">
  {/* Pepper plantation background */}
  <div
    className="absolute inset-0 -z-20 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://res.cloudinary.com/ccgttwby/image/upload/f_auto,q_auto/Sunlit_Pepper_Plantation_Vista')",
    }}
  />

  {/* Blend the image with the content area */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#092b1d]/80 via-[#f8f4ec]/85 to-[#f8f4ec]/65" />

  {/* Soft overlay for a polished look */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/10 via-transparent to-[#f8f4ec]/35" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
    <div className="overflow-hidden rounded-[34px] border border-white/60 bg-[#fffdfb]/85 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.16)] backdrop-blur-sm sm:p-8 lg:p-12">
      <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="min-w-0">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#114b33]/15 bg-[#114b33]/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#114b33]">
            <span className="h-2 w-2 rounded-full bg-[#114b33]" />
            BMK Foods • Coimbatore
          </div>

          <h1 className="max-w-[14ch] text-4xl font-black leading-[0.98] tracking-[-0.06em] text-[#173b2b] sm:text-5xl lg:text-[4.2rem]">
            Fresh food, grown with care.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-8 text-[#35483d] sm:text-lg">
            From farm to family table, we bring trusted sourcing, quality
            checks, and dependable daily essentials for homes, kitchens,
            and hospitality businesses.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={withBasePath("/products")}
              className="inline-flex items-center justify-center rounded-full bg-[#114b33] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-950/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0c3826] hover:shadow-xl"
            >
              Explore products
              <span className="ml-2" aria-hidden="true">→</span>
            </a>

            <a
              href={withBasePath("/contact")}
              className="inline-flex items-center justify-center rounded-full border border-[#114b33]/20 bg-white/90 px-6 py-3.5 text-sm font-semibold text-[#114b33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Talk to us
            </a>
          </div>
        </div>

        {/* Decorative side panel */}
        <div className="relative hidden min-h-[280px] items-center justify-center lg:flex">
          <div className="absolute inset-4 rounded-[28px] border border-[#114b33]/10 bg-gradient-to-br from-white/50 to-[#dce8dc]/30" />

          <div className="relative max-w-xs px-8 text-center">
            <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#114b33]/15 bg-white/75 text-3xl shadow-sm">
              🌿
            </span>
            <p className="text-2xl font-bold leading-snug tracking-tight text-[#173b2b]">
              From nature,
              <br />
              with care.
            </p>
            <p className="mt-3 text-sm leading-6 text-[#35483d]">
              Thoughtfully sourced essentials for everyday living.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="pb-6 pt-4 pb-25 sm:pt-6">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="stat-card card-soft flex min-h-[130px] w-full min-w-0 flex-col items-center justify-center rounded-[24px] border border-[#F2E7DE] bg-white p-4 text-center shadow-[0_18px_35px_rgba(30,22,18,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(30,22,18,0.08)] md:min-h-[140px] md:p-6"
              >
                <div className="stat-card-value mb-2 font-black tracking-[-0.05em] text-[#114b33] tabular-nums">
                  <AnimatedStatValue
                    value={s.value}
                    suffix={typeof s.value === "number" ? "+" : ""}
                    className="text-3xl sm:text-[2.1rem]"
                  />
                </div>
                <div className="stat-card-label max-w-[15ch] text-[10px] font-bold uppercase tracking-[0.18em] text-[#1F2937] sm:max-w-none sm:text-[11px]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 pt-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="gold-accent" />
              <h2 className="display-lg mb-6 font-bold text-[#2C2C2C]">The BMK Difference</h2>
              <p className="mb-8 max-w-xl text-[#1F2937] leading-relaxed">
                We believe fresh chicken should taste the way it was meant to — naturally raised, never frozen, and delivered with the care it deserves.
              </p>
              <a href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-[#114b33] transition-all duration-300 hover:gap-3">
                Our story <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="flex flex-col gap-4">
             {features.map((feature, index) => (
              <FeatureReveal key={feature.title} delay={index * 180}>
                  <span className="mt-0.5 text-2xl">{feature.icon}</span>
                  <div>
                    <h3 className="mb-1 font-semibold text-[#2C2C2C]">{feature.title}</h3>
                    <p className="text-sm leading-6 text-[#1F2937]">{feature.desc}</p>
                  </div>
              </FeatureReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HomeSpotlightSection />

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="relative overflow-hidden rounded-[32px] bg-[#114b33] p-12 shadow-2xl shadow-red-900/20 lg:p-16">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5" />
            <div className="absolute -bottom-12 -left-10 h-48 w-48 rounded-full bg-white/5" />
            <div className="relative">
              <div className="gold-accent mx-auto" />
              <h2 className="display-md mb-4 font-bold text-white">Fresh chicken for your home or restaurant?</h2>
              <p className="mx-auto mb-10 max-w-md text-white/85">
                We supply to homes, hotels, restaurants and catering businesses across Coimbatore.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={brand.whatsappUrl || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#E3A857] px-8 py-4 text-sm font-bold text-[#114b33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EBC17C] hover:shadow-xl hover:shadow-black/20"
                >
                  <span>💬</span> WhatsApp Us
                </a>
                <a
                  href={`tel:${brand.phone}`}
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-[#114b33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#eff5f1]"
                >
                  📞 Call Us
                </a>
              </div>
              {brand.phone ? <p className="mt-6 text-xs text-white/80">{brand.phone} · {brand.operatingHours}</p> : null}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

