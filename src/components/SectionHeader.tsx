import type { ReactNode } from "react";
import { FadeIn } from "./motion/FadeIn";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  return (
    <FadeIn
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-3xl text-left"
      }
    >
      {eyebrow && (
        <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
          <span className="inline-block h-px w-6 bg-[var(--color-accent)]/60" />
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.05] tracking-tight text-[var(--color-fg)]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-balance text-base text-[var(--color-muted)] sm:text-lg">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
