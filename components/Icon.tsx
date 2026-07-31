import { icons, type LucideProps } from "lucide-react";

type IconProps = LucideProps & { name: string };

/**
 * Renders a Lucide icon by its PascalCase name (used by data-driven
 * feature lists). Falls back to a neutral dot icon if the name is unknown.
 */
export function Icon({ name, ...props }: IconProps) {
  const LucideIcon = icons[name as keyof typeof icons] ?? icons.Circle;
  return <LucideIcon {...props} />;
}
