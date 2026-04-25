import type { ExperienceEntry } from "@/types";
import { Briefcase, GraduationCap } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";

type Props = { entries: ExperienceEntry[] };

export function Timeline({ entries }: Props) {
  return (
    <ol className="relative mx-auto max-w-3xl">
      <span
        aria-hidden
        className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent md:left-1/2 md:-translate-x-1/2"
      />
      {entries.map((entry, i) => (
        <TimelineEntry key={`${entry.org}-${entry.title}`} entry={entry} index={i} />
      ))}
    </ol>
  );
}

function TimelineEntry({
  entry,
  index,
}: {
  entry: ExperienceEntry;
  index: number;
}) {
  const Icon = entry.kind === "education" ? GraduationCap : Briefcase;
  const prefersReducedMotion = useReducedMotion();
  const isLeft = index % 2 === 0;

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: {
          duration: 0.6,
          delay: index * 0.05,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        },
      };

  return (
    <motion.li
      {...motionProps}
      className={clsx(
        "relative mb-10 grid items-start pl-12 md:mb-14 md:grid-cols-2 md:gap-x-12 md:pl-0",
      )}
    >
      <span
        aria-hidden
        className="absolute left-4 top-2 -translate-x-1/2 grid h-9 w-9 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-accent)] shadow-sm md:left-1/2"
      >
        <Icon className="h-4 w-4" strokeWidth={2} />
      </span>

      <article
        className={clsx(
          "surface relative p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)]/30",
          "md:p-7",
          isLeft ? "md:col-start-1 md:mr-8" : "md:col-start-2 md:ml-8",
        )}
      >
        <span
          aria-hidden
          className={clsx(
            "absolute top-6 hidden h-px w-8 bg-[var(--color-border)] md:block",
            isLeft ? "-right-8" : "-left-8",
          )}
        />
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
          {entry.start} — {entry.end}
        </p>
        <h3 className="mt-2 text-lg font-semibold tracking-tight text-[var(--color-fg)] md:text-xl">
          {entry.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-[var(--color-accent)]">
          {entry.org}
        </p>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--color-muted)]">
          {entry.bullets.map((b, j) => (
            <li key={j} className="flex gap-2">
              <span
                aria-hidden
                className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]"
              />
              <span className="text-[var(--color-fg)]/85">{b}</span>
            </li>
          ))}
        </ul>
      </article>
    </motion.li>
  );
}
