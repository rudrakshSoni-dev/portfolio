import type {
  CommandResult,
  OutputLine,
  TerminalData,
} from "@/lib/terminal/types";

type Command = {
  description: string;
  run: (args: string[], data: TerminalData) => CommandResult;
};

const SECTIONS: Record<string, string> = {
  "about.md": "about",
  "github/": "github",
  "experience/": "experience",
  "stack/": "stack",
  "connect.sh": "contact",
};

const out = (...lines: (string | OutputLine)[]): CommandResult => ({
  lines: lines.map((line) =>
    typeof line === "string" ? { text: line } : line,
  ),
});

const normalize = (path = "") => path.replace(/^~\//, "").replace(/^\.\//, "");

function findSection(path: string) {
  const name = normalize(path);
  return Object.keys(SECTIONS).find(
    (entry) => entry === name || entry === `${name}/`,
  );
}

function contact(data: TerminalData) {
  return out(
    { label: "email", text: data.email, href: `mailto:${data.email}` },
    {
      label: "call",
      text: data.booking.label.toLowerCase(),
      href: data.booking.href,
    },
  );
}

export const commands: Record<string, Command> = {
  help: {
    description: "list available commands",
    run: () =>
      out(
        ...Object.entries(commands).map(([name, cmd]) => ({
          label: name,
          text: cmd.description,
        })),
        {
          text: "tip: use tab to complete and up/down for history",
          tone: "muted",
        },
      ),
  },
  whoami: {
    description: "who is this",
    run: (_, data) =>
      out({ text: data.fullName, tone: "accent" }, data.description),
  },
  ls: {
    description: "list sections (ls experience, ls stack)",
    run: (args, data) => {
      const target = normalize(args[0]).replace(/\/$/, "");
      if (!target) return out(Object.keys(SECTIONS).join("  "));
      if (target === "experience")
        return out(...data.experience.map((item) => item.org));
      if (target === "stack") return out(data.stack.join("  "));
      if (findSection(target)) return out(target);
      return out({
        text: `ls: cannot access '${args[0]}': No such file or directory`,
        tone: "error",
      });
    },
  },
  cd: {
    description: "jump to a section (cd stack)",
    run: (args) => {
      const target = args[0];
      if (!target || ["~", "/", ".."].includes(target))
        return { lines: [], scrollTo: "top" };
      const section = findSection(target);
      if (!section || !section.endsWith("/")) {
        return out({ text: `cd: no such directory: ${target}`, tone: "error" });
      }
      return { lines: [], scrollTo: SECTIONS[section] };
    },
  },
  cat: {
    description: "print a file (cat about.md)",
    run: (args, data) => {
      const section = args[0] ? findSection(args[0]) : undefined;
      if (section === "about.md") return out(data.about);
      if (section?.endsWith("/"))
        return out({ text: `cat: ${args[0]}: Is a directory`, tone: "error" });
      if (section === "connect.sh") return contact(data);
      return out({
        text: `cat: ${args[0] ?? ""}: No such file or directory`,
        tone: "error",
      });
    },
  },
  experience: {
    description: "where I've worked",
    run: (_, data) =>
      out(
        ...data.experience.flatMap((item) => [
          { text: item.org, tone: "accent" as const },
          `${item.role} · ${item.dates}`,
        ]),
      ),
  },
  stack: {
    description: "tools I use",
    run: (_, data) => out(data.stack.join(", ")),
  },
  socials: {
    description: "where to find me",
    run: (_, data) =>
      out(
        ...data.links.map((link) => ({
          label: link.label.toLowerCase(),
          text: link.href.replace(/^(mailto:|https:\/\/(www\.)?)/, ""),
          href: link.href,
        })),
      ),
  },
  contact: {
    description: "get in touch",
    run: (_, data) => contact(data),
  },
  "./connect.sh": {
    description: "same as contact",
    run: (_, data) => contact(data),
  },
  resume: {
    description: "open my resume",
    run: (_, data) => ({
      ...out({ text: "opening resume.pdf", tone: "muted" }),
      open: data.resumeHref,
    }),
  },
  github: {
    description: "open my GitHub",
    run: (_, data) => out({ text: data.githubHref, href: data.githubHref }),
  },
  echo: {
    description: "print text",
    run: (args) => out(args.join(" ")),
  },
  date: {
    description: "print the date",
    run: () => out(new Date().toString()),
  },
  sudo: {
    description: "try it",
    run: () =>
      out({
        text: "rudraksh is not in the sudoers file. This incident will be reported.",
        tone: "error",
      }),
  },
  clear: {
    description: "clear the screen (ctrl+l)",
    run: () => ({ lines: [], clear: true }),
  },
};

export function runCommand(input: string, data: TerminalData): CommandResult {
  const [name, ...args] = input.trim().split(/\s+/);
  if (!name) return { lines: [] };
  const command = commands[name.toLowerCase()];
  if (!command) {
    return out({
      text: `command not found: ${name}. Type 'help' to see available commands.`,
      tone: "error",
    });
  }
  return command.run(args, data);
}

export function complete(input: string): string {
  const [name, ...rest] = input.split(" ");
  if (rest.length === 0) {
    const matches = Object.keys(commands).filter((cmd) => cmd.startsWith(name));
    return matches.length === 1 ? `${matches[0]} ` : input;
  }
  const partial = rest.at(-1) ?? "";
  const matches = Object.keys(SECTIONS).filter((entry) =>
    entry.startsWith(normalize(partial)),
  );
  return matches.length === 1
    ? [name, ...rest.slice(0, -1), matches[0]].join(" ")
    : input;
}
