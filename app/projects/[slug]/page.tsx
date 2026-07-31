import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Building2,
  CalendarClock,
  CheckCircle2,
  Github,
  Layers3,
  Lightbulb,
  Target,
  TriangleAlert,
} from "lucide-react";
import { getAdjacentProjects, getProject, projects } from "@/data/projects";
import { site } from "@/data/site";
import { BackgroundGlow } from "@/components/BackgroundGlow";
import { Navbar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };

  const title = `${project.title} — Case Study`;
  return {
    title,
    description: project.subtitle,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title,
      description: project.subtitle,
      type: "article",
      url: `${site.url}/projects/${project.slug}`,
      images: [{ url: project.image, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.subtitle,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  const facts = [
    { icon: Briefcase, label: "Role", value: project.role },
    { icon: Building2, label: "Industry", value: project.category },
    { icon: CalendarClock, label: "Timeline", value: project.timeline ?? project.year },
    { icon: Layers3, label: "Stack", value: `${project.tags.length} technologies` },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.subtitle,
    creator: { "@type": "Person", name: site.name, url: site.url },
    image: `${site.url}${project.image}`,
    keywords: project.tags.join(", "),
    url: `${site.url}/projects/${project.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BackgroundGlow />
      <Navbar />

      <main className="pt-28 pb-24 md:pt-32">
        {/* Header */}
        <header className="container-page">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} /> Back to work
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="chip bg-primary/12 text-primary ring-1 ring-primary/20">{project.category}</span>
            <span className="chip">{project.type}</span>
            <span className="chip">{project.year}</span>
          </div>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{project.subtitle}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary">
                Live demo <ArrowUpRight size={16} />
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn-ghost">
                <Github size={16} /> Source code
              </a>
            )}
          </div>
        </header>

        {/* Hero image */}
        <section className="container-page mt-12">
          <Reveal className="surface overflow-hidden p-2">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[1.15rem] bg-muted">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1136px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </section>

        {/* Fact bar */}
        <section className="container-page mt-6">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="surface flex items-start gap-3 p-4">
                <f.icon size={18} className="mt-0.5 shrink-0 text-primary" />
                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{f.label}</p>
                  <p className="truncate text-sm font-medium" title={f.value}>
                    {f.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Overview */}
        <Section id="overview" eyebrow="Overview" title="What this project is">
          <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
            <p className="text-lg leading-relaxed text-muted-foreground">{project.overview}</p>
            <div className="surface space-y-5 p-6">
              <FactLine icon={Building2} label="Context" value={project.context} />
              <FactLine icon={Target} label="Main goal" value={project.goal} />
            </div>
          </div>
        </Section>

        {/* Business perspective */}
        <Section
          id="business"
          eyebrow="For business"
          title="The problem — and the value delivered"
          subtitle="Written for owners and stakeholders: what was broken, why it mattered, and what changed."
        >
          <div className="grid gap-5 md:grid-cols-3">
            <PerspectiveCard icon={TriangleAlert} title="The problem" body={project.business.problem} />
            <PerspectiveCard icon={Target} title="Why it mattered" body={project.business.stakes} />
            <PerspectiveCard icon={Lightbulb} title="The solution" body={project.business.solution} accent />
          </div>

          <div className="surface mt-6 p-7 md:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Benefits delivered
            </h3>
            <ul className="mt-5 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {project.business.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.metrics && (
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {project.metrics.map((m) => (
                <div key={m.label} className="surface p-6 text-center">
                  <p className="text-2xl font-semibold text-gradient">{m.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </div>
          )}
        </Section>

        {/* Technical perspective */}
        <Section
          id="technical"
          eyebrow="For engineers"
          title="Architecture & implementation"
          subtitle="Written for developers and recruiters: the technical decisions, tradeoffs, and lessons."
        >
          <div className="surface p-7 md:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Architecture</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{project.technical.architecture}</p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.technical.stack.map((group) => (
              <div key={group.label} className="surface p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{group.label}</p>
                <ul className="mt-3 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="mt-12 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Implementation highlights
          </h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {project.technical.highlights.map((h) => (
              <div key={h.title} className="surface surface-hover p-6 hover:border-primary/40">
                <h4 className="font-semibold">{h.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="surface p-7">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                <TriangleAlert size={16} className="text-primary" /> Challenges
              </h3>
              <ul className="mt-5 space-y-5">
                {project.technical.challenges.map((c) => (
                  <li key={c.title}>
                    <p className="font-medium">{c.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="surface p-7">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                <Lightbulb size={16} className="text-primary" /> Lessons learned
              </h3>
              <ul className="mt-5 space-y-3">
                {project.technical.lessons.map((l) => (
                  <li key={l} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Features */}
        <Section id="features" eyebrow="Features" title="What it does">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((f) => (
              <div key={f.title} className="surface surface-hover p-6 hover:border-primary/40">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20">
                  <Icon name={f.icon} size={20} />
                </span>
                <h4 className="mt-4 font-semibold">{f.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Tech badges */}
        <Section id="stack" eyebrow="Technologies" title="Full technology stack">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="chip text-sm">
                {t}
              </span>
            ))}
          </div>
        </Section>

        {/* Prev / Next */}
        <section className="container-page mt-20">
          <div className="grid gap-4 sm:grid-cols-2">
            {prev && <AdjacentCard direction="prev" slug={prev.slug} title={prev.title} category={prev.category} />}
            {next && <AdjacentCard direction="next" slug={next.slug} title={next.title} category={next.category} />}
          </div>

          <div className="surface mt-10 flex flex-col items-center gap-5 p-10 text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Want something like this <span className="text-gradient">for your business</span>?
            </h2>
            <p className="max-w-xl text-muted-foreground">
              I turn manual, error-prone workflows into reliable software. Let&apos;s talk about what you need.
            </p>
            <Link href="/#contact" className="btn-primary">
              Start a conversation <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* --------------------------- local components --------------------------- */

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="container-page mt-20 scroll-mt-24 md:mt-24">
      <Reveal className="mb-8">
        <span className="eyebrow">
          <span className="h-px w-6 bg-primary/60" />
          {eyebrow}
        </span>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        {subtitle ? <p className="mt-3 max-w-2xl text-muted-foreground">{subtitle}</p> : null}
      </Reveal>
      <Reveal delay={60}>{children}</Reveal>
    </section>
  );
}

function PerspectiveCard({
  icon: IconCmp,
  title,
  body,
  accent,
}: {
  icon: typeof Target;
  title: string;
  body: string;
  accent?: boolean;
}) {
  return (
    <div
      className={
        "surface p-6 " + (accent ? "border-primary/40 bg-primary/[0.06]" : "")
      }
    >
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20">
        <IconCmp size={18} />
      </span>
      <h4 className="mt-4 font-semibold">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

function FactLine({ icon: IconCmp, label, value }: { icon: typeof Target; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <IconCmp size={18} className="mt-0.5 shrink-0 text-primary" />
      <div>
        <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-0.5 text-sm leading-relaxed">{value}</p>
      </div>
    </div>
  );
}

function AdjacentCard({
  direction,
  slug,
  title,
  category,
}: {
  direction: "prev" | "next";
  slug: string;
  title: string;
  category: string;
}) {
  const isNext = direction === "next";
  return (
    <Link
      href={`/projects/${slug}`}
      className={
        "surface surface-hover group flex items-center gap-4 p-6 hover:border-primary/40 " +
        (isNext ? "sm:col-start-2 sm:text-right sm:flex-row-reverse" : "")
      }
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border-strong/70 text-muted-foreground transition-colors group-hover:text-primary">
        {isNext ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
      </span>
      <span className="min-w-0">
        <span className="text-xs uppercase tracking-wider text-muted-foreground">
          {isNext ? "Next project" : "Previous project"}
        </span>
        <span className="mt-0.5 block truncate font-semibold transition-colors group-hover:text-primary">
          {title}
        </span>
        <span className="text-xs text-muted-foreground">{category}</span>
      </span>
    </Link>
  );
}
