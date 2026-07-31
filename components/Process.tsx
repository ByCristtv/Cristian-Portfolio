import { Search, Boxes, Hammer, TestTube2, Rocket } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    body: "I start with the business, not the code — understanding the real workflow, the people using it, and where time and money leak today.",
  },
  {
    icon: Boxes,
    title: "Domain & Architecture",
    body: "I model the domain first and design clean boundaries (SOLID, Clean Architecture) so features compose instead of collide as the product grows.",
  },
  {
    icon: Hammer,
    title: "Build",
    body: "Typed, incremental delivery in React/TypeScript and modern backends — reviewing tradeoffs with AI assistants while I own every decision.",
  },
  {
    icon: TestTube2,
    title: "Test & Harden",
    body: "Automated tests with Vitest, Jest, and Playwright, plus repeated refactoring passes until the code is polished and dependable.",
  },
  {
    icon: Rocket,
    title: "Ship & Iterate",
    body: "Continuous deployment to Vercel, then iterating with real feedback — because software earns its value after launch, not before.",
  },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 border-y border-border/60 bg-card/30 py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="How I Work"
          title={
            <>
              A process built for <span className="text-gradient">maintainable</span> software
            </>
          }
          description="The same disciplined path from problem to production, whether it's a paid SaaS or a pro-bono community build."
        />

        <ol className="relative mt-16 grid gap-6 md:grid-cols-5">
          <span
            aria-hidden
            className="absolute left-0 right-0 top-[27px] hidden h-px bg-gradient-to-r from-transparent via-border-strong to-transparent md:block"
          />
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 90} className="relative">
              <div className="flex flex-col items-start md:items-center md:text-center">
                <span className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-background text-primary ring-1 ring-border shadow-[0_10px_30px_-16px_hsl(var(--primary))]">
                  <s.icon size={22} />
                  <span className="absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-5 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
