export const shell = {
  user: "rudraksh",
  host: "rudrakshh.live",
};

export const sectionCommands = {
  hero: "whoami",
  about: "cat about.md",
  github: "git log --since=1.year",
  experience: "ls ~/experience",
  stack: "ls ~/stack",
  contact: "./connect.sh",
} as const;
