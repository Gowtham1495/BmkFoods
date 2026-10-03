"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ReviewCardProps = {
  children: ReactNode;
  delay: number;
};

export default function ReviewCard({ children, delay }: ReviewCardProps) {
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const revealWhenInView = () => {
      const bounds = card.getBoundingClientRect();
      const revealLine = window.innerHeight * 0.82;

      if (bounds.top < revealLine && bounds.bottom > 0) {
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
    <figure
      ref={cardRef}
      className="review-card flex h-full flex-col rounded-2xl border border-[#F0E8E0] bg-white p-6 shadow-[0_8px_24px_rgba(44,44,44,0.04)] hover:-translate-y-1 hover:shadow-xl"
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </figure>
  );
}