import { Link } from "react-router-dom";
import { ArrowRight, Download, FileText, Github } from "lucide-react";
import { useSEO } from "@/lib/seo";
import { skillGroups } from "@/data/skills";
import { FadeIn } from "@/components/motion/FadeIn";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { SectionHeader } from "@/components/SectionHeader";

export default function Home() {
  useSEO({
    title: "Software Engineer",
    description:
      "Alex Titov — Software engineer building AI, full-stack, and cloud systems.",
  });

  return (
    <>
      <Hero />
      <SkillsSection />
      <FocusStrip />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden className="mesh-bg absolute inset-0 -z-10" />
      <div aria-hidden className="grid-bg absolute inset-0 -z-10 opacity-50" />

      <div className="mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <p className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)] backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            </span>
            Available for new opportunities
          </p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1 className="mt-8 max-w-4xl text-balance text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.96] tracking-tight">
            Software engineer building{" "}
            <span className="gradient-text">AI, full-stack, and cloud</span>{" "}
            systems.
          </h1>
        </FadeIn>

        <FadeIn delay={0.12}>
          <p className="mt-6 max-w-2xl text-balance text-base text-[var(--color-muted)] sm:text-lg">
            I'm Alex — a CS &amp; engineering student at UC Merced, currently
            shipping production systems across mobile, backend, and ML. I care
            about elegance under load, taste in detail, and getting research out
            of notebooks and into something useful.
          </p>
        </FadeIn>

        <FadeIn delay={0.18}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/research"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-fg)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)] transition-transform hover:-translate-y-0.5"
            >
              <FileText className="h-4 w-4" strokeWidth={2.25} />
              Read my research
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.25} />
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-2.5 text-sm font-medium text-[var(--color-fg)] transition-colors hover:border-[var(--color-accent)]/40"
            >
              <Download className="h-4 w-4" strokeWidth={2.25} />
              Download résumé
            </a>
            <a
              href="https://github.com/alextitov19"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-2.5 text-sm font-medium text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)]/40 hover:text-[var(--color-fg)]"
            >
              <Github className="h-4 w-4" strokeWidth={2.25} />
              GitHub
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-20">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-[var(--color-border)] pt-10 sm:grid-cols-4">
            <Stat label="Years shipping" value="6+" />
            <Stat label="Projects in production" value="12" />
            <Stat label="Languages I write" value="10+" />
            <Stat label="Coffees / week" value="∞" />
          </dl>
        </FadeIn>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
        {label}
      </dt>
      <dd className="mt-1 text-2xl font-semibold tracking-tight text-[var(--color-fg)]">
        {value}
      </dd>
    </div>
  );
}

function SkillsSection() {
  return (
    <section className="border-t border-[var(--color-border)] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Stack"
          title="Tools I reach for"
          description="A working surface area, not a checklist — what I've shipped recently and feel fluent in."
        />
        <Stagger
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          step={0.05}
        >
          {skillGroups.map((group) => (
            <StaggerItem
              key={group.title}
              className="surface group p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)]/30"
            >
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2.5 py-1 text-xs text-[var(--color-fg)]/85"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function FocusStrip() {
  return (
    <section className="border-t border-[var(--color-border)]">
      <div className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-none border-y-0 border-[var(--color-border)] sm:grid-cols-3">
        {[
          {
            label: "Now",
            body: "Forward Deployed Engineer at Benmore — embedding with clients to ship Django + Next.js + Expo systems end-to-end.",
          },
          {
            label: "Recently",
            body: "Wrapped CSE 188 research on test-time compute allocation across Claude Haiku 4.5 and Sonnet 4.6.",
          },
          {
            label: "Looking for",
            body: "Hard problems where shipping fast and obsessing over the last 5% both matter.",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-10 sm:border-l sm:first:border-l-0"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
              {item.label}
            </p>
            <p className="mt-3 text-pretty text-sm text-[var(--color-fg)]/85">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
