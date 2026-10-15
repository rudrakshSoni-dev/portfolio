import { cn } from "@/lib/utils";
import type { ContributionLevel } from "@/lib/github";

export const levelClasses: Record<ContributionLevel, string> = {
  0: "bg-heat-0",
  1: "bg-heat-1",
  2: "bg-heat-2",
  3: "bg-heat-3",
  4: "bg-heat-4",
};

const levels: ContributionLevel[] = [0, 1, 2, 3, 4];

export function ContributionLegend() {
  return (
    <div
      aria-hidden="true"
      className="flex items-center justify-end gap-1 font-mono text-xs text-muted-foreground"
    >
      <span className="mr-1">less</span>
      {levels.map((level) => (
        <span
          key={level}
          className={cn("size-3 rounded-[1px]", levelClasses[level])}
        />
      ))}
      <span className="ml-1">more</span>
    </div>
  );
}
