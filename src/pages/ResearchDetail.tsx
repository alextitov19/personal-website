import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Copy,
  Download,
  ExternalLink,
  Github,
  X,
} from "lucide-react";
import { findResearch } from "@/data/research";
import { useSEO } from "@/lib/seo";
import { FadeIn } from "@/components/motion/FadeIn";

export default function ResearchDetail() {
  const { slug } = useParams();
  const paper = slug ? findResearch(slug) : undefined;

  useSEO({
    title: paper?.title ?? "Research",
    description: paper?.subtitle ?? paper?.abstract.slice(0, 160),
  });

  if (!paper) {
    return (
      <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center px-4 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
          404
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          Paper not found
        </h1>
        <Link
          to="/research"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm hover:border-[var(--color-accent)]/40"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to research
        </Link>
      </section>
    );
  }

  return (
    <article className="pb-24 pt-32 sm:pb-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <Link
            to="/research"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
          >
            <ArrowLeft className="h-4 w-4" />
            All research
          </Link>
        </FadeIn>

        <FadeIn delay={0.05}>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
            {paper.venue} · {paper.year}
          </p>
          <h1 className="mt-3 text-balance text-[clamp(1.875rem,4.5vw,3rem)] font-semibold leading-[1.05] tracking-tight">
            {paper.title}
          </h1>
          {paper.subtitle && (
            <p className="mt-4 text-pretty text-base text-[var(--color-muted)] sm:text-lg">
              {paper.subtitle}
            </p>
          )}
          <p className="mt-4 text-sm text-[var(--color-muted)]">
            By {paper.authors.join(", ")}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={paper.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-fg)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)] transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" strokeWidth={2.25} />
              Download PDF
            </a>
            {paper.codeUrl && (
              <a
                href={paper.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-2.5 text-sm font-medium text-[var(--color-fg)] transition-colors hover:border-[var(--color-accent)]/40"
              >
                <Github className="h-4 w-4" strokeWidth={2.25} />
                Code
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
              </a>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <ul className="mt-8 flex flex-wrap gap-1.5">
            {paper.keywords.map((k) => (
              <li
                key={k}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3 py-1 text-xs text-[var(--color-fg)]/85"
              >
                {k}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>

      <div className="mx-auto mt-16 max-w-3xl px-4 sm:px-6 lg:px-8">
        <Section eyebrow="TL;DR" title="What we found">
          <ul className="space-y-3">
            {paper.tldr.map((b) => (
              <li key={b} className="flex gap-3 text-[var(--color-fg)]/90">
                <span
                  aria-hidden
                  className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section eyebrow="Abstract" title="Why this paper exists">
          <p className="text-pretty text-base leading-relaxed text-[var(--color-fg)]/85">
            {paper.abstract}
          </p>
        </Section>

        <Section eyebrow="Methodology" title="Four strategies, matched budgets">
          <ul className="grid gap-4 sm:grid-cols-2">
            {paper.methodology.map((m) => (
              <li
                key={m.name}
                className="surface p-5"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  {m.name}
                </p>
                <p className="mt-2 text-sm text-[var(--color-fg)]/85">
                  {m.description}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section eyebrow="Results" title="Highlights">
          <ul className="space-y-2.5 text-[var(--color-fg)]/85">
            {paper.highlights.map((h) => (
              <li key={h} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-2)]"
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <FiguresGallery figures={paper.figures} />

      <div className="mx-auto mt-16 max-w-3xl px-4 sm:px-6 lg:px-8">
        <CitationBlock citation={paper.citation} />

        <div className="mt-16 surface hidden overflow-hidden lg:block">
          <p className="border-b border-[var(--color-border)] bg-[var(--color-surface-2)] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
            Inline preview
          </p>
          <iframe
            src={paper.pdfUrl}
            title={`${paper.title} PDF preview`}
            className="block h-[80vh] w-full"
          />
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-[var(--color-border)] pt-8">
          <a
            href={paper.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-fg)] hover:text-[var(--color-accent)]"
          >
            <ExternalLink className="h-4 w-4" strokeWidth={2.25} />
            Open PDF in new tab
          </a>
        </div>
      </div>
    </article>
  );
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <FadeIn className="mt-12 first:mt-0">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </FadeIn>
  );
}

function FiguresGallery({
  figures,
}: {
  figures: { src: string; caption: string; alt: string }[];
}) {
  const [active, setActive] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="mt-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
          Figures
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          Selected results
        </h2>
      </div>

      <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {figures.map((fig, i) => (
          <motion.button
            key={fig.src}
            type="button"
            onClick={() => setActive(i)}
            layoutId={prefersReducedMotion ? undefined : `figure-${i}`}
            className="group surface flex flex-col overflow-hidden text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)]/40"
          >
            <div className="aspect-[4/3] overflow-hidden bg-white">
              <img
                src={fig.src}
                alt={fig.alt}
                loading="lazy"
                className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <p className="border-t border-[var(--color-border)] bg-[var(--color-surface-2)] px-4 py-3 text-xs text-[var(--color-muted)]">
              {fig.caption}
            </p>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && figures[active] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <motion.div
              layoutId={prefersReducedMotion ? undefined : `figure-${active}`}
              className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close figure"
                onClick={() => setActive(null)}
                className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/80 text-[var(--color-fg)] backdrop-blur-sm hover:text-[var(--color-accent)]"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="bg-white">
                <img
                  src={figures[active].src}
                  alt={figures[active].alt}
                  className="mx-auto max-h-[75vh] w-full object-contain"
                />
              </div>
              <p className="border-t border-[var(--color-border)] px-5 py-4 text-sm text-[var(--color-muted)]">
                {figures[active].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function CitationBlock({ citation }: { citation: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(citation);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard not available */
    }
  };

  return (
    <FadeIn className="mt-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
        Citation
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
        How to cite
      </h2>
      <div className="mt-6 surface relative overflow-hidden">
        <pre className="overflow-x-auto p-5 pr-16 text-sm leading-relaxed text-[var(--color-fg)]/85">
          <code className="font-mono">{citation}</code>
        </pre>
        <button
          type="button"
          onClick={onCopy}
          aria-label={copied ? "Copied" : "Copy citation"}
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)]"
        >
          {copied ? (
            <Check className="h-4 w-4" strokeWidth={2.25} />
          ) : (
            <Copy className="h-4 w-4" strokeWidth={2} />
          )}
        </button>
      </div>
    </FadeIn>
  );
}
