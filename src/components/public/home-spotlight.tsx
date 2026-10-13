"use client";

import { useState } from "react";

import { withBasePath } from "@/lib/base-path";

const items = [
  {
    id: "poultry-farm",
    title: "Poultry farm",
    description:
      "Healthy, well-managed poultry raised with care and delivered fresh to your table for everyday cooking and family meals.",
    image:
      "https://res.cloudinary.com/y9jkfk2e/image/upload/v1790502442/Gemini_Generated_Image_42zdh042zdh042zd_skasxl.png",
  },
  {
    id: "oil-mill",
    title: "Oil Mill",
    description:
      "Pure, carefully processed oils selected for consistent taste, quality, and daily kitchen use.",
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "organic-fruits",
    title: "Organic fruits",
    description:
      "Fresh, seasonal fruits sourced with attention to natural flavour, nutrition, and quality from farm to home.",
    image:
      "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function HomeSpotlightSection() {
  const [selected, setSelected] = useState(items[0].id);
  const activeItem = items.find((item) => item.id === selected) ?? items[0];

  return (
    <section className="overflow-hidden pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[32px] border border-[#F0E8E0] bg-white shadow-[0_20px_60px_rgba(44,44,44,0.06)]">
          <div className="grid items-stretch gap-0 lg:grid-cols-[1.15fr_1.05fr]">
            <div className="relative min-h-[460px] overflow-hidden bg-[#F2E0CE]">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="h-full w-full object-cover transition-all duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b120d]/75 via-[#1b120d]/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#E3A857]">BMK</p>
                <h3 className="text-3xl font-bold">{activeItem.title}</h3>
              </div>
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <div className="gold-accent" />
                  <h2 className="display-md font-bold text-[#2C2C2C]">Industries we deal with</h2>
                </div>
                <a
                  href={withBasePath("/products")}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#114b33] transition-colors duration-300 hover:text-[#0b3323]"
                >
                  View all <span aria-hidden="true">→</span>
                </a>
              </div>

              <div className="space-y-3">
                {items.map((item) => {
                  const isActive = item.id === selected;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelected(item.id)}
                      className={`w-full rounded-[22px] border p-4 text-left transition-all duration-300 ${
                        isActive
                          ? "border-[#114b33] bg-[#E3ECE1] shadow-md shadow-green-900/10"
                          : "border-[#F0E8E0] bg-[#FFFDFB] hover:border-[#ACC5A6] hover:bg-[#F4F8F3]"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-[#2C2C2C]">{item.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-[#1F2937]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
