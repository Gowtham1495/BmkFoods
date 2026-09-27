import React from "react";
import Link from "next/link";
import { getBrand } from "@/lib/site-data";
import { withBasePath } from "@/lib/base-path";

export default async function SiteFooter() {
  const brand = await getBrand();

  return (
    <footer className="bg-[#1C1C1C] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-9 items-center justify-center rounded-full bg-[#2B1A1A] p-2">
              <img src={withBasePath("/logo.png")} alt="BMK Chicken" className="h-6 w-auto" />
            </div>
            <div>
              <div className="text-lg font-black tracking-tight text-[#D42B2B]">BMK</div>
              <div className="text-[10px] font-semibold tracking-[0.28em] text-white/80">CHICKEN</div>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/60">{brand.tagline}</p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#F5A623]">Quick Links</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li><Link href="/" className="transition-colors duration-300 hover:text-white">Home</Link></li>
            <li><Link href="/about" className="transition-colors duration-300 hover:text-white">About Us</Link></li>
            <li><Link href="/products" className="transition-colors duration-300 hover:text-white">Products</Link></li>
            <li><Link href="/contact" className="transition-colors duration-300 hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#F5A623]">Contact</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li>{brand.phone || "-"}</li>
            <li>{brand.email || "-"}</li>
            <li>{brand.operatingHours || "-"}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4 text-xs text-white/45 md:flex-row md:items-center md:justify-between lg:px-8">
          <span>FSSAI: {brand.fssaiNumber || "-"}</span>
          <span>© 2026 BMK Chicken. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
