"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems, site } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2.5" : "py-4"
      )}
    >
      <nav
        className={cn(
          "container-page flex items-center justify-between rounded-full transition-all duration-300",
          scrolled && "glass !px-4 py-2 shadow-[0_10px_40px_-24px_rgba(0,0,0,0.6)] md:!px-6"
        )}
      >
        <Link href="/" className="group flex items-center gap-2.5" aria-label={`${site.name} — home`}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary" fill="none" aria-hidden>
              <path
                d="M18 6H9.5L5 10.5v3L9.5 18H18v-5h-6l3-3"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-[15px] font-semibold tracking-tight">
            Cristian <span className="text-primary">Solano</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          <Link href="/#contact" className="btn-primary hidden text-sm md:inline-flex">
            Let&apos;s talk
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-strong/70 bg-card/50 text-foreground md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-0 z-40 flex flex-col justify-center gap-2 bg-background/95 px-8 backdrop-blur-xl transition-all duration-300 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setOpen(false)}
            className="border-b border-border/60 py-4 text-2xl font-medium tracking-tight text-foreground/90 transition-colors hover:text-primary"
          >
            {item.name}
          </Link>
        ))}
        <div className="mt-6 flex items-center gap-3">
          <Link href="/#contact" onClick={() => setOpen(false)} className="btn-primary flex-1">
            Let&apos;s talk
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
