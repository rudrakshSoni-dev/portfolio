import { Section } from "@/components/section";
import { sectionCommands } from "@/lib/data/terminal";
import { StaggerList } from "@/components/stagger";
import { StackIcon } from "@/components/stack-icon";
import { stack } from "@/lib/data/stack";

export function StackSection() {
  return (
    <Section
      id="stack"
      label="stack"
      command={sectionCommands.stack}
      title="Stack"
    >
      <StaggerList
        delay={0.025}
        className="grid grid-cols-5 gap-3 sm:grid-cols-10"
      >
        {stack.map((item) => (
          <StackIcon key={item.name} item={item} />
        ))}
      </StaggerList>
    </Section>
  );
}
