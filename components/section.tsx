import { cn } from "@/lib/utils";
import { CommandLabel } from "@/components/command-label";
import { Reveal } from "@/components/reveal";

type SectionProps = {
  id: string;
  label: string;
  command: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({
  id,
  label,
  command,
  title,
  className,
  children,
}: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      aria-label={title ? undefined : label}
      className={cn("scroll-mt-24 pt-12 pb-6 md:pt-16 md:pb-8", className)}
    >
      <Reveal>
        <CommandLabel command={command} />
        {title && (
          <h2
            id={headingId}
            className="mb-6 text-3xl font-bold tracking-tight md:text-4xl"
          >
            {title}
          </h2>
        )}
        {children}
      </Reveal>
    </section>
  );
}
