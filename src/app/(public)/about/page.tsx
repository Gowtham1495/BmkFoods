import React from "react";
import { getBrand } from "@/lib/site-data";

export default async function AboutPage() {
  const brand = await getBrand();

  const pillars = [
    { title: "Mission", accent: "border-t-[#D42B2B]", body: "To bring clean, fresh chicken to homes and businesses with honesty, consistency and care." },
    { title: "Vision", accent: "border-t-[#F5A623]", body: "To become Coimbatore's most trusted poultry brand built on transparency and quality." },
    { title: "Promise", accent: "border-t-[#2C2C2C]", body: "No shortcuts, no frozen compromises, and a cold chain you can rely on every day." },
  ];

  const journey = [
    "Started with a clear goal: healthier birds and better quality for Coimbatore families.",
    "Built direct relationships with farm partners who share our values and standards.",
    "Invested in cold-chain logistics to maintain freshness from farm to final delivery.",
    "Now serving homes, restaurants and bulk buyers who care about taste and trust."
  ];

  return (
    <div>
      <section className="bg-cream-gradient py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="gold-accent" />
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#D42B2B]">Our Story</p>
          <h1 className="display-lg mb-4 font-bold text-[#2C2C2C]">The Story of BMK Chicken</h1>
          <p className="max-w-2xl text-lg text-[#6B6B6B]">From farm partners to your plate — quality, traceability, and trust in every cut.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
          <div className="card-soft flex min-h-[320px] items-center justify-center bg-[#FFF8F0] p-8">
            <div className="flex h-44 w-44 items-center justify-center rounded-[28px] bg-white text-6xl shadow-[0_18px_50px_rgba(0,0,0,0.08)]">🐔</div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="gold-accent" />
            <h2 className="display-md mb-4 font-bold text-[#2C2C2C]">Built on trust, not shortcuts.</h2>
            <p className="leading-relaxed text-[#6B6B6B]">
              BMK Chicken started as a family-led commitment to raise healthier birds, reduce waste, and keep delivery reliable for Coimbatore homes and businesses. Every step of the journey is designed around freshness, cleanliness and traceability.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F9F9F9] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="gold-accent mx-auto" />
            <h2 className="display-md font-bold text-[#2C2C2C]">Our Mission, Vision & Promise</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className={`card-soft border-t-4 ${pillar.accent} p-7`}>
                <h3 className="mb-3 text-xl font-bold text-[#2C2C2C]">{pillar.title}</h3>
                <p className="text-sm leading-7 text-[#6B6B6B]">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="gold-accent mx-auto" />
            <h2 className="display-md font-bold text-[#2C2C2C]">How we grew</h2>
          </div>

          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-5 top-0 h-full w-0.5 bg-[#F5A623] md:left-1/2" />
            <div className="space-y-8">
              {journey.map((item, index) => (
                <div key={item} className="relative flex items-center md:justify-between">
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12 md:text-left"}`}>
                    <div className="card-soft p-5">
                      <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D42B2B]">{index + 1}</div>
                      <p className="text-sm leading-7 text-[#6B6B6B]">{item}</p>
                    </div>
                  </div>
                  <div className="absolute left-3.5 h-4 w-4 rounded-full border-4 border-white bg-[#D42B2B] md:left-1/2 md:-translate-x-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1C1C1C] py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <div className="gold-accent mx-auto" />
          <div className="display-lg font-bold text-[#D42B2B]">{brand.yearsInBusiness}</div>
          <p className="mt-3 text-sm uppercase tracking-[0.2em] text-white/60">Years of trust</p>
        </div>
      </section>
    </div>
  );
}
