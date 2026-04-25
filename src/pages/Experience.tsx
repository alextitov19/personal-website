import { experience } from "@/data/experience";
import { Timeline } from "@/components/Timeline";
import { SectionHeader } from "@/components/SectionHeader";
import { useSEO } from "@/lib/seo";

export default function Experience() {
  useSEO({
    title: "Experience",
    description:
      "Alex Titov's professional journey across AI, full-stack, and cloud roles.",
  });

  return (
    <section className="pb-24 pt-32 sm:pb-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Journey"
          title="Professional experience"
          description="Roles, companies, and the systems I've shipped — newest first."
          align="center"
        />
        <div className="mt-16">
          <Timeline entries={experience} />
        </div>
      </div>
    </section>
  );
}
