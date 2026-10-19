
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { withBasePath } from "@/lib/base-path";
import type { BrandSetting } from "@/lib/site-data";

const DEFAULT_LOGO_URL =
  "https://res.cloudinary.com/ccgttwby/image/upload/f_auto,q_auto/BMK_FOODS_2";

const INTRO_STORAGE_KEY = "bmk-logo-intro-shown";

type LogoBounds = {
  left: number;
  top: number;
  width: number;
  height: number;
};

export default function SiteHeader({
  brand,
}: {
  brand: BrandSetting;
}) {
  const pathname = usePathname();

  const logoRef = useRef<HTMLImageElement>(null);
  const introLogoRef = useRef<HTMLImageElement>(null);
  const introBackdropRef = useRef<HTMLDivElement>(null);

  const [introBounds, setIntroBounds] =
    useState<LogoBounds | null>(null);

  const logoMap: Record<string, string> = {
    "/homes/poultry-farm": withBasePath("/final-bmk-logo.png"),
    "/homes/oil-mill": withBasePath("/oil-mill-logo.png"),
    "/homes/organic-fruits": withBasePath("/organic-fruits-logo.png"),
  };

  const logoUrl = logoMap[pathname] || DEFAULT_LOGO_URL;

  useEffect(() => {
    const logo = logoRef.current;

    if (
      !logo ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let cancelled = false;
    let frame = 0;
    let timeout = 0;
    let logoAnimation: Animation | null = null;
    let backdropAnimation: Animation | null = null;

    const startIntro = async () => {
      try {
        if (sessionStorage.getItem(INTRO_STORAGE_KEY)) {
          return;
        }
      } catch {
        return;
      }

      // Wait until the actual logo image is ready.
      if (!logo.complete || !logo.naturalWidth) {
        await new Promise<void>((resolve) => {
          const handleLoad = () => resolve();

          logo.addEventListener("load", handleLoad, { once: true });
          logo.addEventListener("error", handleLoad, { once: true });
        });
      }

      await logo.decode().catch(() => undefined);

      if (cancelled || !logo.isConnected || !logo.naturalWidth) {
        return;
      }

      try {
        sessionStorage.setItem(INTRO_STORAGE_KEY, "true");
      } catch {
        return;
      }

      // Exact destination: where the logo is actually displayed.
      const rect = logo.getBoundingClientRect();

      const end: LogoBounds = {
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
      };

      // Starting logo size, preserving its natural aspect ratio.
      const aspectRatio = logo.naturalWidth / logo.naturalHeight;
      const startWidth = Math.min(window.innerWidth * 0.78, 360);
      const startHeight = startWidth / aspectRatio;

      const start: LogoBounds = {
        left: (window.innerWidth - startWidth) / 2,
        top: (window.innerHeight - startHeight) / 2,
        width: startWidth,
        height: startHeight,
      };

      setIntroBounds(start);

      frame = requestAnimationFrame(() => {
        if (cancelled) return;

        const introLogo = introLogoRef.current;
        const backdrop = introBackdropRef.current;

        if (!introLogo || !backdrop) {
          setIntroBounds(null);
          return;
        }

        // Ensure the overlay starts at the center position.
        Object.assign(introLogo.style, {
          left: `${start.left}px`,
          top: `${start.top}px`,
          width: `${start.width}px`,
          height: `${start.height}px`,
        });

        logoAnimation = introLogo.animate(
          [
            {
              left: `${start.left}px`,
              top: `${start.top}px`,
              width: `${start.width}px`,
              height: `${start.height}px`,
              offset: 0,
            },
            {
              left: `${start.left}px`,
              top: `${start.top}px`,
              width: `${start.width}px`,
              height: `${start.height}px`,
              offset: 0.25,
            },
            {
              left: `${end.left}px`,
              top: `${end.top}px`,
              width: `${end.width}px`,
              height: `${end.height}px`,
              offset: 1,
            },
          ],
          {
            duration: 1500,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            fill: "forwards",
          }
        );

        backdropAnimation = backdrop.animate(
          [
            { opacity: 1, offset: 0 },
            { opacity: 1, offset: 0.65 },
            { opacity: 0, offset: 1 },
          ],
          {
            duration: 1650,
            easing: "ease-out",
            fill: "forwards",
          }
        );

        logoAnimation.onfinish = () => {
          if (cancelled) return;

          timeout = window.setTimeout(() => {
            setIntroBounds(null);
          }, 100);
        };

        logoAnimation.oncancel = () => {
          if (!cancelled) setIntroBounds(null);
        };

        // Fallback cleanup in case an animation event is interrupted.
        timeout = window.setTimeout(() => {
          if (!cancelled) setIntroBounds(null);
        }, 1900);
      });
    };

    void startIntro();

    return () => {
      cancelled = true;

      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);

      logoAnimation?.cancel();
      backdropAnimation?.cancel();
    };
  }, []);

  return (
    <>
      {/* Main header */}
      <header className="sticky top-0 z-50 overflow-hidden bg-white/95 shadow-[0_1px_0_0_rgba(0,0,0,0.06)] backdrop-blur-md">
        <div className="relative mx-auto flex h-[72px] max-w-7xl items-center justify-center overflow-hidden px-3 sm:px-6 md:h-[78px] md:justify-between md:px-8">
          {/* Logo */}
          <Link
            href={withBasePath("/")}
            className="mobile-header-logo pointer-events-auto relative z-30 flex items-center justify-center md:absolute md:left-3 md:top-0 md:justify-start lg:left-6"
          >
            <img
              ref={logoRef}
              src={logoUrl}
              alt={brand.brandName}
              className={`h-[52px] w-auto max-w-[200px] object-contain transition-opacity duration-200 sm:h-[56px] md:h-[62px] md:max-w-[240px] lg:h-[68px] lg:max-w-[270px] ${
                introBounds ? "opacity-0" : "opacity-100"
              }`}
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="desktop-header-nav ml-[150px] hidden items-center gap-7 md:flex lg:ml-[220px]">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/products", label: "Products" },
              { href: "/contact", label: "Contact Us" },
            ].map((link) => (
              <Link
                key={link.href}
                href={withBasePath(link.href)}
                className={`border-b-2 pb-0.5 text-[15px] font-semibold transition-colors duration-300 ${
                  pathname === link.href
                    ? "border-[#114b33] text-[#114b33]"
                    : "border-transparent text-[#114b33] hover:border-[#114b33]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Center-to-header logo animation */}
      {introBounds && (
        <div
          className="pointer-events-none fixed inset-0 z-[100]"
          aria-hidden="true"
        >
          <div
            ref={introBackdropRef}
            className="absolute inset-0 bg-white"
          />

          <img
            ref={introLogoRef}
            src={logoUrl}
            alt=""
            className="fixed z-[101] object-contain"
            style={{
              left: introBounds.left,
              top: introBounds.top,
              width: introBounds.width,
              height: introBounds.height,
            }}
          />
        </div>
      )}

      {/* Mobile bottom navigation */}
      <nav className="mobile-bottom-nav md:hidden">
        <div className="mx-auto grid h-full max-w-md grid-cols-4 items-center px-4 text-center">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/products", label: "Products" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={withBasePath(item.href)}
              className={`relative flex h-full items-center justify-center text-[10px] font-semibold uppercase tracking-[0.12em] ${
                pathname === item.href
                  ? "text-[#114b33]"
                  : "text-[#1F2937]"
              }`}
            >
              {pathname === item.href && (
                <span className="absolute -top-2 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#114b33]" />
              )}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* WhatsApp chat */}
      <a
        href={brand.whatsappUrl || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50 hidden items-center gap-2 rounded-full bg-[#114b33] px-4 py-3 text-sm font-semibold text-white shadow-lg md:flex"
      >
        <span aria-hidden="true">💬</span>
        Chat
      </a>
    </>
  );
}
