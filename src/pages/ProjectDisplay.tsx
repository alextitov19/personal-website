import { Link, useParams } from "react-router-dom";
import { Apple, ArrowLeft, ArrowUpRight, Github, Globe } from "lucide-react";
import { findProject } from "@/data/projects";
import { useSEO } from "@/lib/seo";
import { FadeIn } from "@/components/motion/FadeIn";

export default function ProjectDisplay() {
  const { id } = useParams();
  const project = id ? findProject(id) : undefined;

  useSEO({
    title: project ? project.name : "Project",
    description: project?.blurb,
  });

  if (!project) {
    return (
      <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center px-4 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
          404
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          Project not found
        </h1>
        <Link
          to="/projects"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm hover:border-[var(--color-accent)]/40"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>
      </section>
    );
  }

  const { kind, url } = project.primaryLink;
  const PrimaryIcon =
    kind === "appstore" ? Apple : kind === "github" ? Github : Globe;
  const primaryLabel =
    kind === "appstore"
      ? "View on App Store"
      : kind === "github"
        ? "View on GitHub"
        : "Visit site";

  return (
    <article className="pb-24 pt-32 sm:pb-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
          >
            <ArrowLeft className="h-4 w-4" />
            All projects
          </Link>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1 className="mt-6 text-balance text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight">
            {project.name}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base text-[var(--color-muted)] sm:text-lg">
            {project.blurb}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-fg)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)] transition-transform hover:-translate-y-0.5"
            >
              <PrimaryIcon className="h-4 w-4" strokeWidth={2.25} />
              {primaryLabel}
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2.25}
              />
            </a>
            {project.legal && (
              <>
                <Link
                  to={`/tos/${project.legal.tosSlug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-muted)] hover:border-[var(--color-accent)]/40 hover:text-[var(--color-fg)]"
                >
                  Terms of Service
                </Link>
                <Link
                  to={`/privacy/${project.legal.privacySlug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-muted)] hover:border-[var(--color-accent)]/40 hover:text-[var(--color-fg)]"
                >
                  Privacy Policy
                </Link>
              </>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-12 surface overflow-hidden">
            <img
              src={project.image}
              alt={`${project.name} hero`}
              loading="eager"
              className="w-full"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-12">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Stack
          </h2>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3 py-1.5 text-xs text-[var(--color-fg)]/85"
              >
                {skill}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </article>
  );
}
