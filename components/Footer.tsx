import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { navItems, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-card/40">
      <div className="container-page py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} — home`}>
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
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Full-stack software engineer building scalable platforms and business automation across
              retail, healthcare, and telecom.
            </p>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
            <nav aria-label="Footer">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Navigate</p>
              <ul className="mt-4 space-y-2.5">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Connect</p>
              <div className="mt-4 flex gap-2.5">
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-strong/70 text-foreground/80 transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Github size={18} />
                </a>
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-strong/70 text-foreground/80 transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={`mailto:${site.email}`}
                  aria-label="Email"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-strong/70 text-foreground/80 transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <a
            href="#hero"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong/70 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            Back to top <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
