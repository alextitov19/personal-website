import { Link } from "react-router-dom";
import { ArrowUpRight, FileText } from "lucide-react";
import { research } from "@/data/research";
import { useSEO } from "@/lib/seo";
import { SectionHeader } from "@/components/SectionHeader";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export default function Research() {
  useSEO({
    title: "Research",
    description:
      "Research papers and writeups by Alex Titov, including LLM test-time compute allocation.",
  });

  return (
    <section className="pb-24 pt-32 sm:pb-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Writing"
          title="Research"
          description="Notes from work I've done that I think other people might want to read. Code, data, and PDFs included."
        />
        <Stagger
          className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2"
          step={0.08}
        >
          {research.map((p) => (
            <StaggerItem key={p.slug}>
              <Link
                to={`/research/${p.slug}`}
                className="group surface relative flex h-full flex-col gap-6 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/40 hover:shadow-[var(--shadow-glow)] sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                    <FileText className="h-3 w-3" strokeWidth={2.25} />
                    {p.status === "course" ? "Course paper" : p.status}
                  </span>
                  <span className="font-mono text-xs text-[var(--color-muted)]">
                    {p.year}
                  </span>
                </div>

                <div>
                  <h3 className="text-balance text-xl font-semibold leading-snug tracking-tight text-[var(--color-fg)] sm:text-2xl">
                    {p.title}
                  </h3>
                  {p.subtitle && (
                    <p className="mt-3 text-pretty text-sm text-[var(--color-muted)]">
                      {p.subtitle}
                    </p>
                  )}
                </div>

                <ul className="space-y-1.5 text-sm text-[var(--color-fg)]/80">
                  {p.tldr.slice(0, 2).map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span
                        aria-hidden
                        className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-between gap-4">
                  <span className="text-xs text-[var(--color-muted)]">
                    {p.venue}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-fg)] transition-colors group-hover:text-[var(--color-accent)]">
                    Read paper
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2.25}
                    />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
