import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Sparkles } from "lucide-react";
import { site } from "@/data/site";

const heroTech = ["React", "TypeScript", "Next.js", "Node.js", "C# / .NET", "PostgreSQL", "Supabase", "Python", "AWS"];

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: copy */}
        <div>
          <span
            className="eyebrow opacity-0 animate-fade-up"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for work · {site.location}
          </span>

          <h1
            className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight opacity-0 animate-fade-up sm:text-5xl md:text-6xl"
            style={{ animationDelay: "0.15s" }}
          >
            I build software that turns{" "}
            <span className="text-gradient">manual operations</span> into reliable products.
          </h1>

          <p
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground opacity-0 animate-fade-up"
            style={{ animationDelay: "0.28s" }}
          >
            I&apos;m <span className="font-medium text-foreground">Cristian Solano</span>, a full-stack
            engineer with 2+ years building scalable platforms and business automation across{" "}
            <span className="text-foreground">retail, healthcare, and telecom</span> — grounded in SOLID
            principles, Clean Architecture, and automated testing.
          </p>

          <div
            className="mt-9 flex flex-wrap items-center gap-3 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Link href="/#work" className="btn-primary">
              View projects <ArrowRight size={17} />
            </Link>
            <Link href="/#contact" className="btn-ghost">
              Contact me
            </Link>
            <div className="ml-1 flex items-center gap-1.5">
              <a
                href={site.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-strong/70 text-foreground/80 transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Github size={18} />
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-strong/70 text-foreground/80 transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Stats */}
          <dl
            className="mt-12 grid max-w-lg grid-cols-2 gap-x-8 gap-y-6 opacity-0 animate-fade-up sm:grid-cols-4"
            style={{ animationDelay: "0.52s" }}
          >
            {site.stats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-semibold text-gradient sm:text-3xl">{s.value}</dt>
                <dd className="mt-1 text-xs leading-tight text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: brand visual */}
        <div className="relative opacity-0 animate-fade-up lg:justify-self-end" style={{ animationDelay: "0.35s" }}>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-6 rounded-[2rem] bg-primary/20 blur-3xl" aria-hidden />
            <div className="surface relative overflow-hidden p-2 animate-float">
              <div className="rounded-[1.15rem] bg-gradient-to-br from-white to-[#eef2fb] p-8">
                <Image
                  src={site.logo}
                  alt="Cristian Solano — CJS logo"
                  width={400}
                  height={400}
                  priority
                  className="mx-auto h-auto w-full"
                />
              </div>
            </div>      
          </div>
        </div>
      </div>

      {/* Tech strip */}
      <div className="container-page mt-16">
        <div
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.66s" }}
        >
          <span className="mr-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground/70">
            Core stack
          </span>
          {heroTech.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
