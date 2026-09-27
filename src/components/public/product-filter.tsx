"use client";
import React, { useMemo, useState } from "react";

type Product = {
  id: string;
  name: string;
  category: string;
  weightOptions?: string | null;
  imageUrl?: string | null;
  isAvailable?: boolean;
};

export default function ProductFilter({ products, whatsappUrl }: { products: Product[]; whatsappUrl?: string | null }) {
  const [filter, setFilter] = useState<string>("ALL");

  const filtered = useMemo(() => {
    if (filter === "ALL") return products;
    return products.filter((p) => p.category === filter);
  }, [products, filter]);

  const categories = [
    { key: "ALL", label: "All" },
    { key: "WHOLE", label: "Whole Bird" },
    { key: "CURRY", label: "Curry Cut" },
    { key: "BONELESS", label: "Boneless" },
    { key: "SPECIAL", label: "Special Cuts" },
    { key: "OFFALS", label: "Offals" },
  ];

  return (
    <div>
      <div className="sticky top-[65px] z-40 border-b border-[#F0E8E0] bg-white/95 py-4 backdrop-blur md:static">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setFilter(c.key)}
              className={`flex-shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                filter === c.key ? "bg-[#D42B2B] text-white shadow-lg shadow-red-500/20" : "bg-[#F5F5F5] text-[#6B6B6B] hover:bg-[#F0E8E0]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((p) => (
          <div
            key={p.id}
            className={`card-soft group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${p.isAvailable === false ? "opacity-60" : ""}`}
          >
            <div className="aspect-square overflow-hidden bg-[#FFF0E8]">
              {p.imageUrl ? (
                <img src={p.imageUrl} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              ) : (
                <div className="flex h-full items-center justify-center text-6xl">🍗</div>
              )}
            </div>

            <div className="p-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#D42B2B]">{p.category}</span>
              <h3 className="mt-2 text-lg font-bold text-[#2C2C2C]">{p.name}</h3>
              {p.weightOptions ? <p className="mt-2 text-sm text-[#6B6B6B]">Available: {p.weightOptions}</p> : null}
              <a
                href={whatsappUrl || "#"}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D42B2B] px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#B01F1F] hover:shadow-lg hover:shadow-red-500/20"
              >
                <span>💬</span> Enquire on WhatsApp
              </a>
              {p.isAvailable === false ? <div className="mt-3 text-xs uppercase tracking-[0.15em] text-[#6B6B6B]">Currently Unavailable</div> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
