import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";

type Props = { project: Project };

export function ProjectCard({ project }: Props) {
  return (
    <Link
      to={`/project/${project.slug}`}
      className="group surface relative isolate overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/40 hover:shadow-[var(--shadow-glow)]"
    >
      <div className="aspect-[16/10] w-full overflow-hidden bg-[var(--color-surface-2)]">
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex items-center justify-between gap-4 p-5">
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold tracking-tight text-[var(--color-fg)]">
            {project.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-[var(--color-muted)]">
            {project.blurb}
          </p>
        </div>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-muted)] transition-all duration-300 group-hover:border-[var(--color-accent)]/40 group-hover:text-[var(--color-accent)]">
          <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
        </span>
      </div>
    </Link>
  );
}
