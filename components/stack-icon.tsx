import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { StaggerItem } from "@/components/stagger";
import type { StackItem } from "@/lib/data/stack";

const tileClass =
  "flex aspect-square w-full items-center justify-center rounded-md border border-border bg-card transition-[transform,border-color] duration-150 outline-none hover:-translate-y-0.5 hover:border-muted-foreground focus-visible:ring-2 focus-visible:ring-ring";

export function StackIcon({ item }: { item: StackItem }) {
  const Icon = item.icon;
  const icon = (
    <Icon
      aria-hidden="true"
      className="size-6 md:size-7"
      style={item.color ? { color: item.color } : undefined}
    />
  );

  return (
    <StaggerItem>
      <Tooltip>
        <TooltipTrigger asChild>
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className={tileClass}
            >
              {icon}
            </a>
          ) : (
            <span
              role="img"
              aria-label={item.name}
              tabIndex={0}
              className={tileClass}
            >
              {icon}
            </span>
          )}
        </TooltipTrigger>
        <TooltipContent side="top" sideOffset={6}>
          {item.name}
        </TooltipContent>
      </Tooltip>
    </StaggerItem>
  );
}
