import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/alextitov19",
    Icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alex-titov-b072451a9/",
    Icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:alextitov203@gmail.com",
    Icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 text-sm text-[var(--color-muted)] sm:flex-row sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} Alex Titov. Built with React, TypeScript,
          and Tailwind.
        </p>
        <ul className="flex items-center gap-1">
          {links.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)] transition-all hover:-translate-y-0.5 hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)]"
              >
                <Icon className="h-4 w-4" strokeWidth={2} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
