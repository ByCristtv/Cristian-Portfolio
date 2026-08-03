import Link from "next/link";
import { Download, ArrowRight, Boxes, HeartPulse, RadioTower, Code2, ShieldCheck, TestTube2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { site } from "@/data/site";

const industries = [
  { icon: Boxes, name: "Retail", note: "POS & e-commerce platforms" },
  { icon: HeartPulse, name: "Healthcare", note: "Care-management systems" },
  { icon: RadioTower, name: "Telecom", note: "Field reporting apps" },
];

const principles = [
  { icon: Code2, title: "Clean Architecture", note: "Business rules isolated from UI and data." },
  { icon: ShieldCheck, title: "SOLID Principles", note: "Maintainable, well-structured code by design." },
  { icon: TestTube2, title: "Automated Testing", note: "Vitest, Jest & Playwright across the stack." },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          align="left"
          eyebrow="About"
          title={
            <>
              Who Am I and <span className="text-gradient">What do I do?</span>
            </>
          }
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Bio card */}
          <Reveal className="surface flex flex-col justify-between gap-8 p-8 md:p-10">
            <div className="space-y-5 text-muted-foreground">
              <p className="text-lg leading-relaxed text-foreground">
                I&apos;m a Computer Engineering graduate who loves turning tangled, manual workflows into
                software people can trust.
              </p>
              <p className="leading-relaxed">
                Over 2+ years I&apos;ve shipped scalable platforms and automation across retail, healthcare,
                and telecommunications, from a multi-branch point-of-sale SaaS to a hybrid e-commerce
                platform with a self-hosted AI assistant. I care deeply about modeling complex business
                domains and keeping code maintainable long after launch.
              </p>
              <p className="leading-relaxed">
                I also use AI assistants as a serious engineering tool — pressure-testing design decisions
                and hunting for weak points, while always staying the one making the call.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/#contact" className="btn-primary">
                Get in touch <ArrowRight size={16} />
              </Link>
              <a href={site.cv} download target="_blank" rel="noreferrer" className="btn-ghost">
                <Download size={16} /> Download CV
              </a>
            </div>
          </Reveal>

          {/* Right column */}
          <div className="grid gap-6">
            <Reveal delay={80} className="surface p-7">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                How I build
              </h3>
              <ul className="mt-5 space-y-4">
                {principles.map((p) => (
                  <li key={p.title} className="flex items-start gap-4">
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary ring-1 ring-primary/20">
                      <p.icon size={18} />
                    </span>
                    <div>
                      <p className="font-medium">{p.title}</p>
                      <p className="text-sm text-muted-foreground">{p.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={160} className="surface p-7">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Industries served
              </h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {industries.map((i) => (
                  <div key={i.name} className="rounded-xl border border-border bg-background/40 p-4">
                    <i.icon className="text-primary" size={20} />
                    <p className="mt-3 font-medium">{i.name}</p>
                    <p className="text-xs text-muted-foreground">{i.note}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
