export function CommandLabel({ command }: { command: string }) {
  return (
    <p aria-hidden="true" className="mb-2 font-mono text-sm">
      <span className="text-accent">$</span>{" "}
      <span className="text-muted-foreground">{command}</span>
    </p>
  );
}
