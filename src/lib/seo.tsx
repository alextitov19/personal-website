import { useEffect } from "react";

const DEFAULT_DESCRIPTION =
  "Alex Titov — Software Engineer. AI, full-stack, and cloud systems. Selected projects, professional journey, and research.";

export function useSEO({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  useEffect(() => {
    const fullTitle = title ? `${title} · Alex Titov` : "Alex Titov";
    document.title = fullTitle;

    const desc = description ?? DEFAULT_DESCRIPTION;
    setMeta("name", "description", desc);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", desc);
  }, [title, description]);
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}
