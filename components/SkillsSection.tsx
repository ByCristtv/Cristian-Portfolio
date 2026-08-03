"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type Skill = { name: string; category: string; icon: string };

const skills: Skill[] = [
  { name: "JavaScript", category: "Frontend", icon: "devicon:javascript" },
  { name: "TypeScript", category: "Frontend", icon: "devicon:typescript" },
  { name: "React", category: "Frontend", icon: "devicon:react" },
  { name: "Next.js", category: "Frontend", icon: "devicon:nextjs" },
  { name: "React Native", category: "Frontend", icon: "devicon:react" },
  { name: "Tailwind CSS", category: "Frontend", icon: "logos:tailwindcss-icon" },
  { name: "TanStack Query", category: "Frontend", icon: "logos:react-query-icon" },

  { name: "Node.js", category: "Backend", icon: "devicon:nodejs" },
  { name: "Express", category: "Backend", icon: "simple-icons:express" },
  { name: "C#", category: "Backend", icon: "devicon:csharp" },
  { name: ".NET", category: "Backend", icon: "devicon:dotnetcore" },
  { name: "Python", category: "Backend", icon: "devicon:python" },
  { name: "FastAPI", category: "Backend", icon: "simple-icons:fastapi" },

  { name: "PostgreSQL", category: "Databases", icon: "devicon:postgresql" },
  { name: "SQL Server", category: "Databases", icon: "devicon:microsoftsqlserver" },
  { name: "Supabase", category: "Databases", icon: "logos:supabase-icon" },
  { name: "Firebase", category: "Databases", icon: "logos:firebase" },

  { name: "LLM Integration", category: "AI", icon: "simple-icons:openai" },
  { name: "Ollama · Llama 3", category: "AI", icon: "simple-icons:ollama" },
  { name: "AI-assisted Dev", category: "AI", icon: "mdi:robot-outline" },

  { name: "AWS", category: "Cloud & DevOps", icon: "logos:aws" },
  { name: "Vercel", category: "Cloud & DevOps", icon: "logos:vercel-icon" },
  { name: "Docker", category: "Cloud & DevOps", icon: "devicon:docker" },
  { name: "CI/CD", category: "Cloud & DevOps", icon: "logos:github-actions" },
  { name: "Git & GitHub", category: "Cloud & DevOps", icon: "devicon:git" },

  { name: "Vitest", category: "Testing", icon: "logos:vitest" },
  { name: "Jest", category: "Testing", icon: "logos:jest" },
  { name: "Playwright", category: "Testing", icon: "logos:playwright" },
];

const categories = ["All", "Frontend", "Backend", "Databases", "AI", "Cloud & DevOps", "Testing"];

export function SkillsSection() {
  const [active, setActive] = useState("All");
  const filtered = skills.filter((s) => active === "All" || s.category === active);

  return (
    <section id="skills" className="scroll-mt-24 border-y border-border/60 bg-card/30 py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills & Tools"
          title={
            <>
              My main <span className="text-gradient">technologies</span>
            </>
          }
          description="Chosen for reliability and long-term maintainability, from typed frontends to relational data, cloud delivery, and automated testing."
        />

        <Reveal className="mt-12 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                active === c
                  ? "bg-primary text-primary-foreground shadow-[0_8px_24px_-12px_hsl(var(--primary))]"
                  : "border border-border bg-background/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
              )}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {filtered.map((skill) => (
            <div
              key={skill.name}
              className="group surface surface-hover flex items-center gap-3.5 p-4 hover:[transform:translateY(-4px)] hover:border-primary/50"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-background/70 ring-1 ring-border transition-transform duration-300 group-hover:scale-110">
                <Icon icon={skill.icon} className="text-2xl" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{skill.name}</p>
                <p className="truncate text-xs text-muted-foreground">{skill.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
