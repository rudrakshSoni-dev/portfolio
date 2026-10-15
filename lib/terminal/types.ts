export type TerminalData = {
  fullName: string;
  description: string;
  about: string;
  location: string;
  experience: { org: string; role: string; dates: string }[];
  stack: string[];
  links: { label: string; href: string }[];
  email: string;
  booking: { label: string; href: string };
  resumeHref: string;
  githubHref: string;
};

export type OutputLine = {
  label?: string;
  text: string;
  tone?: "muted" | "accent" | "error";
  href?: string;
};

export type CommandResult = {
  lines: OutputLine[];
  clear?: boolean;
  scrollTo?: string;
  open?: string;
};
