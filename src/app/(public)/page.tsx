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
      <section className="relative overflow-hidden pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-28 lg:pb-12">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[34px] border border-[#F0E8E0] bg-[linear-gradient(135deg,#FFFDFB_0%,#F7F0E9_100%)] p-5 shadow-[0_30px_80px_rgba(44,44,44,0.08)] sm:p-7 lg:p-8">
            <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="min-w-0">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F3D8B2] bg-[#FFF9F2] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#114b33]">
                  BMK Foods • Coimbatore
                </div>

                <h1 className="max-w-[14ch] text-4xl font-black leading-[0.96] tracking-[-0.06em] text-[#2C2C2C] sm:text-5xl lg:text-[4.2rem]">
                  Fresh food, grown with care.
                </h1>

                <p className="mt-5 max-w-xl text-base leading-8 text-[#1F2937] sm:text-lg">
                  From farm to family table, we bring trusted sourcing, quality checks, and dependable daily essentials for homes, kitchens, and hospitality businesses.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={withBasePath("/products")}
                    className="inline-flex items-center justify-center rounded-full bg-[#114b33] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0c3826] hover:shadow-xl hover:shadow-green-900/20"
                  >
                    Explore products
                  </a>
                  <a
                    href={withBasePath("/contact")}
                    className="inline-flex items-center justify-center rounded-full border border-[#114b33]/20 bg-white px-6 py-3 text-sm font-semibold text-[#114b33] transition-all duration-300 hover:bg-[#eff5f1]"
                  >
                    Talk to us
                  </a>
                </div>
              </div>

              <div className="min-w-0">
                <div className="rounded-[30px] bg-[#114b33] p-4 shadow-[0_30px_80px_rgba(43,27,20,0.22)] sm:p-5">
                  <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,#1a6647_0%,#114b33_55%,#0b3323_100%)] p-5 sm:p-6">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#E3A857]">Our promise</p>
                        <h2 className="mt-2 text-2xl font-bold text-white">Quality in every step</h2>
                      </div>
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E3A857] text-lg font-bold text-[#2B1B14]">★</div>
                    </div>

                    <div className="space-y-3">
                      {[
                        "Responsible sourcing from trusted farms and partners.",
                        "Clean processing and quality checks at every stage.",
                        "Fresh delivery for homes, restaurants and everyday kitchens.",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/5 p-3">
                          <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E3A857]/20 text-sm font-bold text-[#E3A857]">✓</div>
                          <p className="text-sm leading-6 text-[#F5F0EA]">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
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

