import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

type Props = {
  title: string;
  children: ReactNode;
  backTo?: string;
  backLabel?: string;
};

export function LegalShell({
  title,
  children,
  backTo = "/projects",
  backLabel = "Back to projects",
}: Props) {
  return (
    <article className="pb-24 pt-32 sm:pb-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          to={backTo}
          className="inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
        >
          <ArrowLeft className="h-4 w-4" />
          {backLabel}
        </Link>
        <h1 className="mt-6 text-balance text-[clamp(2rem,5vw,3rem)] font-semibold tracking-tight">
          {title}
        </h1>
        <div className="legal-prose mt-8">{children}</div>
      </div>
    </article>
  );
}
