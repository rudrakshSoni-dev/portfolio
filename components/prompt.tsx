import { cn } from "@/lib/utils";
import { shell } from "@/lib/data/terminal";

export function PromptPrefix() {
  return (
    <span aria-hidden="true" className="text-muted-foreground">
      <span className="text-accent">
        {shell.user}@{shell.host}
      </span>
      :<span className="text-foreground">~</span>$
    </span>
  );
}

export function Prompt({
  command,
  className,
}: {
  command?: string;
  className?: string;
}) {
  return (
    <p aria-hidden="true" className={cn("font-mono text-sm", className)}>
      <PromptPrefix />
      {command && <span className="text-foreground"> {command}</span>}
    </p>
  );
}
