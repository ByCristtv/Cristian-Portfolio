import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import type { Project } from "@/data/projects";

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <Reveal delay={delay} className="group surface surface-hover overflow-hidden hover:border-primary/50 hover:shadow-[0_28px_70px_-40px_hsl(var(--primary))]">
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
          <span className="chip absolute left-4 top-4 bg-background/70 backdrop-blur">{project.category}</span>
        </div>
      </Link>

      <div className="p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <Link href={`/projects/${project.slug}`}>
            <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
              {project.title}
            </h3>
          </Link>
          <span className="mt-1 shrink-0 font-mono text-xs text-muted-foreground">{project.year}</span>
        </div>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {project.subtitle}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 5).map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className="chip">+{project.tags.length - 5}</span>
          )}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-border/70 pt-5">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
          >
            View case study <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <div className="flex items-center gap-1">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} — live demo`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowUpRight size={18} />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} — source`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-primary"
              >
                <Github size={17} />
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function ProjectSection() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Selected Work"
          title={
            <>
              Case studies, not just <span className="text-gradient">screenshots</span>
            </>
          }
          description="Each project has a dedicated case study covering both the business problem it solved and the engineering decisions behind it."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} delay={i * 80} />
          ))}
        </div>

        {others.length > 0 && (
          <>
            <Reveal className="mt-16 mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Also on the workbench
              </h3>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {others.map((p, i) => (
                <ProjectCard key={p.slug} project={p} delay={i * 80} />
              ))}
            </div>
          </>
        )}

        <Reveal className="mt-14 text-center">
          <a href={site.socials.github} target="_blank" rel="noreferrer" className="btn-ghost">
            <Github size={17} /> See more on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
}
