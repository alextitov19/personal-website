import { useSEO } from "@/lib/seo";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { SectionHeader } from "@/components/SectionHeader";

export default function Projects() {
  useSEO({
    title: "Projects",
    description:
      "Selected projects by Alex Titov — mobile apps, AI assistants, marketplaces, and infrastructure.",
  });

  return (
    <section className="pb-24 pt-32 sm:pb-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Selected work"
          title="Projects, shipped."
          description="A handful of things I've built — most are still running in production."
        />
        <Stagger
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          step={0.06}
        >
          {projects.map((p) => (
            <StaggerItem key={p.slug}>
              <ProjectCard project={p} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
