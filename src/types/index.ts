export type ExperienceKind = "education" | "work";

export type ExperienceEntry = {
  kind: ExperienceKind;
  title: string;
  org: string;
  location?: string;
  start: string; // human-readable, e.g. "Aug 2022"
  end: string; // "Present" or e.g. "May 2026"
  bullets: string[];
};

export type ProjectLinkKind = "appstore" | "github" | "web";

export type Project = {
  slug: string;
  name: string;
  image: string;
  blurb: string;
  skills: string[];
  primaryLink: { kind: ProjectLinkKind; url: string };
  legal?: { tosSlug: string; privacySlug: string };
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ResearchFigure = {
  src: string;
  caption: string;
  alt: string;
};

export type ResearchPaper = {
  slug: string;
  title: string;
  subtitle?: string;
  venue: string;
  year: number;
  status: "draft" | "published" | "course";
  authors: string[];
  abstract: string;
  tldr: string[];
  methodology: { name: string; description: string }[];
  figures: ResearchFigure[];
  highlights: string[];
  pdfUrl: string;
  codeUrl?: string;
  keywords: string[];
  citation: string;
};
