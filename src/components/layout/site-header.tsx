import React from "react";
import Link from "next/link";
import { getBrand } from "@/lib/site-data";
import { withBasePath } from "@/lib/base-path";

export default async function SiteHeader() {
  const brand = await getBrand();

  return (
    <header className="sticky top-0 z-50 overflow-visible bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]">
      <div className="relative mx-auto flex h-[54px] max-w-7xl items-center justify-between gap-4 px-6 lg:px-8">
        <Link href="/" className="pointer-events-auto absolute left-[-180px] top-0 z-20 flex items-center overflow-visible sm:left-[-210px]">
          <img
            src={withBasePath("/final-bmk-logo.png")}
            alt={brand.brandName}
            className="h-[110px] w-auto max-w-[360px] object-contain object-left sm:h-[125px] sm:max-w-[390px]"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:ml-[390px] md:flex lg:ml-[430px]">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About Us" },
            { href: "/products", label: "Products" },
            { href: "/contact", label: "Contact Us" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b-2 border-transparent pb-0.5 text-sm font-medium text-[#2C2C2C] transition-colors duration-300 hover:border-[#D42B2B] hover:text-[#D42B2B]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center md:flex">
          <a
            href={brand.whatsappUrl || "#"}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#D42B2B] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B01F1F] hover:shadow-lg hover:shadow-red-500/25"
          >
            Order Now
          </a>
        </div>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-50 h-20 border-t border-[#F0E8E0] bg-white/95 pb-[max(env(safe-area-inset-bottom),0.75rem)] shadow-[0_-1px_10px_rgba(0,0,0,0.04)] md:hidden">
        <div className="mx-auto grid h-full max-w-md grid-cols-4 items-center px-4 text-center">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/products", label: "Products" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative flex h-full items-center justify-center text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6B6B6B]"
            >
              {item.href === "/" ? (
                <span className="absolute -top-2 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#D42B2B]" />
              ) : null}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      <a
        href={brand.whatsappUrl || "#"}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-24 right-6 z-50 hidden items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg md:flex"
      >
        <span>💬</span> Chat
      </a>
    </header>
  );
}
