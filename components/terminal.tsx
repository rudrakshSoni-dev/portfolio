"use client";

import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { PromptPrefix } from "@/components/prompt";
import { complete, runCommand } from "@/lib/terminal/commands";
import type { OutputLine, TerminalData } from "@/lib/terminal/types";

type Entry = { id: number; command: string; lines: OutputLine[] };

const toneClasses: Record<NonNullable<OutputLine["tone"]>, string> = {
  muted: "text-muted-foreground",
  accent: "text-accent",
  error: "text-destructive",
};

function Line({ line }: { line: OutputLine }) {
  const className = cn(
    "min-w-0 break-words whitespace-pre-wrap",
    line.tone ? toneClasses[line.tone] : "text-foreground",
  );
  const external =
    line.href && !line.href.startsWith("mailto:") && !line.href.startsWith("/");
  const text = line.href ? (
    <a
      href={line.href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className="underline decoration-border underline-offset-4 transition-colors duration-150 hover:decoration-accent"
    >
      {line.text}
    </a>
  ) : (
    line.text
  );

  if (!line.label) return <p className={className}>{text}</p>;
  return (
    <p className="flex gap-3">
      <span className="w-24 shrink-0 text-accent sm:w-28">{line.label}</span>
      <span className={className}>{text}</span>
    </p>
  );
}

export function Terminal({ data }: { data: TerminalData }) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(0);
  const [entries, setEntries] = useState<Entry[]>([]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [cursor, setCursor] = useState(-1);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [entries]);

  function submit() {
    const command = value.trim();
    setValue("");
    setCursor(-1);
    if (command) setHistory((prev) => [...prev, command]);

    const result = runCommand(command, data);
    if (result.clear) return setEntries([]);
    setEntries((prev) => [
      ...prev,
      { id: nextId.current++, command, lines: result.lines },
    ]);

    if (result.open) window.open(result.open, "_blank", "noopener,noreferrer");
    if (result.scrollTo === "top") window.scrollTo({ top: 0 });
    else if (result.scrollTo)
      document.getElementById(result.scrollTo)?.scrollIntoView();
  }

  function recall(step: 1 | -1) {
    if (!history.length) return;
    const next =
      cursor === -1 ? (step === -1 ? history.length - 1 : -1) : cursor + step;
    if (next < 0 || next >= history.length) {
      setCursor(-1);
      setValue("");
      return;
    }
    setCursor(next);
    setValue(history[next]);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") submit();
    else if (event.key === "ArrowUp") recall(-1);
    else if (event.key === "ArrowDown") recall(1);
    else if (event.key === "Tab" && value.trim()) setValue(complete(value));
    else if (event.key === "l" && event.ctrlKey) setEntries([]);
    else return;
    event.preventDefault();
  }

  return (
    <div
      className="rounded-md border border-border bg-card font-mono text-sm"
      onClick={() => {
        if (!window.getSelection()?.toString())
          inputRef.current?.focus({ preventScroll: true });
      }}
    >
      <div
        ref={scrollRef}
        aria-live="polite"
        className="max-h-72 overflow-y-auto px-4 pt-4"
      >
        <p className="text-muted-foreground">
          Type &apos;help&apos; to see available commands.
        </p>
        {entries.map((entry) => (
          <div key={entry.id} className="mt-2">
            <p>
              <PromptPrefix />{" "}
              <span className="text-foreground">{entry.command}</span>
            </p>
            {entry.lines.map((line, index) => (
              <Line key={index} line={line} />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 px-4 pt-2 pb-4">
        <label htmlFor={inputId} className="shrink-0">
          <PromptPrefix />
          <span className="sr-only">Run a command</span>
        </label>
        <input
          id={inputId}
          ref={inputRef}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          enterKeyHint="go"
          className="min-w-0 flex-1 bg-transparent text-base text-foreground caret-accent outline-none md:text-sm"
        />
      </div>
    </div>
  );
}
