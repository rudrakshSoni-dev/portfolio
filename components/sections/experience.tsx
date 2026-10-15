import { Section } from "@/components/section";
import { sectionCommands } from "@/lib/data/terminal";
import { StaggerList } from "@/components/stagger";
import { TimelineItem } from "@/components/timeline-item";
import { experience } from "@/lib/data/experience";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      label="experience"
      command={sectionCommands.experience}
      title="Experience"
      className="pt-4 md:pt-6"
    >
      <StaggerList
        as="ol"
        delay={0.08}
        className="flex flex-col divide-y divide-border"
      >
        {experience.map((item) => (
          <TimelineItem key={item.org} item={item} />
        ))}
      </StaggerList>
    </Section>
  );
}
