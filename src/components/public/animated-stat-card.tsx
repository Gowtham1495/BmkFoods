"use client";

import { useEffect, useState } from "react";

type AnimatedStatValueProps = {
  value: number | string;
  suffix?: string;
  className?: string;
};

export function AnimatedStatValue({ value, suffix = "", className = "" }: AnimatedStatValueProps) {
  const numericValue = typeof value === "number" ? value : Number.parseFloat(String(value).replace(/[^\d.-]/g, ""));
  const shouldAnimate = Number.isFinite(numericValue);
  const [displayValue, setDisplayValue] = useState(shouldAnimate ? 0 : value);

  useEffect(() => {
    if (!shouldAnimate) {
      setDisplayValue(value);
      return;
    }

    let animationFrame = 0;
    const duration = 1400;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(numericValue * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    animationFrame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animationFrame);
  }, [numericValue, shouldAnimate, value]);

  if (!shouldAnimate) {
    return <span className={className}>{String(value)}</span>;
  }

  return (
    <span className={className}>
      {displayValue}
      {suffix}
    </span>
  );
}
