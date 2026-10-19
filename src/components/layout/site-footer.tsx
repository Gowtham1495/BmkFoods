import React from "react";
import Link from "next/link";
import { getBrand } from "@/lib/site-data";

export default async function SiteFooter() {
  const brand = await getBrand();

  return (
    <footer className="bg-[linear-gradient(135deg,#0B3323_0%,#114B33_55%,#0B3323_100%)] text-white">
      <div className="mx-auto grid max-w-7xl justify-items-center gap-8 px-6 py-12 text-center sm:grid-cols-2 md:justify-items-stretch md:text-left lg:grid-cols-4 lg:px-8">
        <div className="text-center">
  <div className="flex items-center justify-center gap-3">
    <div className="flex h-9 items-center justify-center rounded-full bg-white p-2">
      <img
        src="https://res.cloudinary.com/ccgttwby/image/upload/f_auto,q_auto/BMK_FOODS_2"
        alt="BMK Foods"
        className="h-6 w-auto"
      />
    </div>
  </div>

  <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-white/90">
    {brand.tagline}
  </p>
</div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#ACC5A6]">Quick Links</h4>
          <ul className="space-y-3 text-sm text-white/90">
            <li><Link href="/" className="transition-colors duration-300 hover:text-white">Home</Link></li>
            <li><Link href="/about" className="transition-colors duration-300 hover:text-white">About Us</Link></li>
            <li><Link href="/products" className="transition-colors duration-300 hover:text-white">Products</Link></li>
            <li><Link href="/contact" className="transition-colors duration-300 hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#ACC5A6]">Contact</h4>
          <ul className="space-y-3 text-sm text-white/90">
            <li>{brand.phone || "-"}</li>
            <li>{brand.email || "-"}</li>
          </ul>
        </div>

        <div className="justify-self-center md:justify-self-stretch lg:justify-self-end">
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#ACC5A6]">Follow Us</h4>
          <div className="flex justify-center gap-3 md:justify-start">
            {[
              {
                label: "Instagram",
                href: brand.instagramUrl,
                icon: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" /></>,
              },
              {
                label: "YouTube",
                href: brand.youtubeUrl,
                icon: <><path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.4-4.8Z" /><path d="m10 15 5-3-5-3v6Z" fill="currentColor" stroke="none" /></>,
              },
              {
                label: "LinkedIn",
                href: brand.linkedinUrl,
                icon: <><path d="M5 9v10M5 5v.01M9 19v-6a4 4 0 0 1 8 0v6M9 9v10" strokeLinecap="round" strokeLinejoin="round" /></>,
              },
            ].map((social) => {
              const icon = (
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
                  {social.icon}
                </svg>
              );

              return social.href ? (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-[#ACC5A6] hover:bg-white/10 hover:text-[#ACC5A6]"
                >
                  {icon}
                </a>
              ) : (
                <span
                  key={social.label}
                  aria-label={`${social.label} URL not set`}
                  title={`${social.label} URL not set`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white"
                >
                  {icon}
                </span>
              );
            })}
          </div>
        </div>
      </div>

     <div className="border-t border-white/10 bg-black/20">
  <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-6 pb-[calc(5rem+env(safe-area-inset-bottom)+1rem)] pt-4 text-center text-xs text-white/80 md:py-4 lg:px-8">
    <span>© 2026 BMK Chicken. All rights reserved.</span>
  </div>
</div>
    </footer>
  );
}
