"use client";

import { useEffect, useRef, type ReactNode } from "react";

type FeatureRevealProps = {
  children: ReactNode;
  delay: number;
};

export default function FeatureReveal({ children, delay }: FeatureRevealProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const revealWhenInView = () => {
      const bounds = card.getBoundingClientRect();
      if (bounds.top < window.innerHeight * 0.82) {
        card.classList.add("is-visible");
        window.removeEventListener("scroll", revealWhenInView);
        window.removeEventListener("resize", revealWhenInView);
      }
    };

    window.addEventListener("scroll", revealWhenInView, { passive: true });
    window.addEventListener("resize", revealWhenInView);
    revealWhenInView();

    return () => {
      window.removeEventListener("scroll", revealWhenInView);
      window.removeEventListener("resize", revealWhenInView);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="animate-feature-flip flex items-start gap-4 rounded-2xl bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)]"
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}