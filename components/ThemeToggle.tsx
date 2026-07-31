"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Light/dark toggle. Dark is the default (premium look); the choice is
 * persisted to localStorage. The no-flash init script lives in layout.tsx.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsLight(document.documentElement.classList.contains("light"));
  }, []);

  const toggle = () => {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {
      /* ignore storage errors */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-strong/70 bg-card/50 text-foreground/80 transition-colors hover:text-primary hover:border-primary/50",
        className
      )}
    >
      {mounted && isLight ? <Moon className="h-[18px] w-[18px]" /> : <Sun className="h-[18px] w-[18px]" />}
    </button>
  );
}
