import React from "react";
import { getBrand } from "@/lib/site-data";

export default async function AboutPage() {
  const brand = await getBrand();

  const pillars = [
    { title: "Mission", accent: "border-t-[#114b33]", body: "To bring clean, fresh chicken to homes and businesses with honesty, consistency and care." },
    { title: "Vision", accent: "border-t-[#E3A857]", body: "To become Coimbatore's most trusted poultry brand built on transparency and quality." },
    { title: "Promise", accent: "border-t-[#2C2C2C]", body: "No shortcuts, no frozen compromises, and a cold chain you can rely on every day." },
  ];

  const journey = [
    "Started with a clear goal: healthier birds and better quality for Coimbatore families.",
    "Built direct relationships with farm partners who share our values and standards.",
    "Invested in cold-chain logistics to maintain freshness from farm to final delivery.",
    "Now serving homes, restaurants and bulk buyers who care about taste and trust."
  ];

  return (
    <div className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F4F9F4_38%,#E4F0E4_72%,#FFFFFF_100%)]">
      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#114b33]">Our Story</p>
          <h1 className="display-lg mb-4 font-bold text-[#2C2C2C]">The Story of BMK Chicken</h1>
          <p className="max-w-2xl text-base leading-7 text-[#1F2937] sm:text-lg">From farm partners to your plate — quality, traceability, and trust in every cut.</p>
        </div>
      </section>

      <section className="py-12 sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
          <img
            src="https://res.cloudinary.com/ccgttwby/image/upload/f_auto,q_auto/handsome-businessman-his-office"
            alt="BMK Foods team member at work"
            className="block h-[300px] w-full rounded-2xl border border-[rgba(172,197,166,0.5)] object-cover shadow-[0_12px_32px_rgba(17,75,51,0.12)] sm:h-[380px] lg:h-[440px]"
          />

          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-3xl font-bold text-[#2C2C2C] sm:text-4xl">Built on trust, not shortcuts.</h2>
            <p className="text-base leading-7 text-[#1F2937]">
              BMK Chicken started as a family-led commitment to raise healthier birds, reduce waste, and keep delivery reliable for Coimbatore homes and businesses. Every step of the journey is designed around freshness, cleanliness and traceability.
            </p>
            <p className="mt-4 text-base leading-7 text-[#1F2937]">
              From choosing dependable farm partners to carefully handling every order, our team works to make quality a consistent part of everyday meals. This is placeholder copy for the About page and can be replaced with BMK Foods’ final story.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-[#2C2C2C] sm:text-4xl">Our Mission, Vision & Promise</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className={`card-soft border border-[rgba(172,197,166,0.4)] border-t-4 ${pillar.accent} p-7`}>
                <h3 className="mb-3 text-xl font-bold text-[#2C2C2C]">{pillar.title}</h3>
                <p className="text-base leading-7 text-[#1F2937]">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8 text-center">
            <div className="gold-accent mx-auto" />
            <h2 className="text-3xl font-bold text-[#2C2C2C] sm:text-4xl">How we grew</h2>
          </div>

          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-[21px] top-0 h-full w-[3px] bg-[#E3A857] md:left-1/2 md:-translate-x-1/2" />
            <div className="space-y-6">
              {journey.map((item, index) => (
                <div key={item} className="relative flex items-center md:justify-between">
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12 md:text-left"}`}>
                    <div className="card-soft p-5">
                      <div className="mb-2 inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-[#E3A857] px-2 text-xs font-bold text-[#114b33]">{index + 1}</div>
                      <p className="text-base leading-7 text-[#1F2937]">{item}</p>
                    </div>
                  </div>
                  <div className="absolute left-[13px] h-4 w-4 rounded-full border-4 border-white bg-[#E3A857] md:left-1/2 md:-translate-x-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <div className="rounded-[28px] bg-[#114b33] px-6 py-12 text-white sm:px-10">
          <div className="gold-accent mx-auto" />
          <div className="display-lg font-bold text-[#ACC5A6]">{brand.yearsInBusiness}</div>
          <p className="mt-3 text-sm uppercase tracking-[0.2em] text-white">Years of trust</p>
          </div>
        </div>
      </section>
    </div>
  );
}
