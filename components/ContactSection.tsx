"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { site } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const contactRows = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phoneHref}` },
  { icon: MapPin, label: "Location", value: site.location },
];

export function ContactSection() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;

    toast({
      title: "Opening your email client…",
      description: "Your message is ready to send. Thanks for reaching out!",
    });
    setSubmitting(false);
    form.reset();
  };

  return (
    <section id="contact" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build something <span className="text-gradient">worth shipping</span>
            </>
          }
          description="Have a business problem that needs reliable software, or a role you think I'd fit? I'd love to hear about it."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info */}
          <Reveal className="surface flex flex-col justify-between gap-8 p-8">
            <div>
              <h3 className="text-lg font-semibold">Contact information</h3>
              <ul className="mt-6 space-y-5">
                {contactRows.map((row) => (
                  <li key={row.label} className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20">
                      <row.icon size={18} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">{row.label}</p>
                      {row.href ? (
                        <a href={row.href} className="font-medium transition-colors hover:text-primary">
                          {row.value}
                        </a>
                      ) : (
                        <p className="font-medium">{row.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Find me online</p>
              <div className="mt-3 flex gap-3">
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border-strong/70 text-foreground/80 transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Github size={19} />
                </a>
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border-strong/70 text-foreground/80 transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Linkedin size={19} />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={90} className="surface p-8">
            <h3 className="text-lg font-semibold">Send a message</h3>
            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Your name" placeholder="Jane Doe" />
                <Field id="email" label="Your email" type="email" placeholder="jane@company.com" />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or role…"
                  className="w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </div>
              <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-60">
                {submitting ? "Preparing…" : "Send message"}
                <Send size={16} />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
      />
    </div>
  );
}
