import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "center", className }: Props) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <span className="eyebrow">
        <span className="h-px w-6 bg-primary/60" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
      ) : null}
    </Reveal>
  );
}
