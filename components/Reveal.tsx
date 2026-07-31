"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Delay in ms before the transition starts once in view. */
  delay?: number;
  as?: React.ElementType;
};

/**
 * Lightweight scroll-reveal wrapper.
 * Uses a single IntersectionObserver, respects prefers-reduced-motion
 * (handled in CSS), and reveals once — no layout thrash, no heavy JS.
 */
export function Reveal({ children, className, delay = 0, as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return React.createElement(
    Tag,
    {
      ref,
      className: cn("reveal", visible && "is-visible", className),
      style: { ["--reveal-delay" as string]: `${delay}ms` },
    },
    children
  );
}
