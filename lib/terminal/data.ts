import "server-only";
import { experience } from "@/lib/data/experience";
import { bookingLink, email, resumeHref, socialLinks } from "@/lib/data/links";
import { profile } from "@/lib/data/profile";
import { stack } from "@/lib/data/stack";
import type { TerminalData } from "@/lib/terminal/types";

// Plain, serializable view of the site data for the client-side terminal.
export function buildTerminalData(): TerminalData {
  return {
    fullName: profile.fullName,
    description: profile.description,
    about: profile.about.intro.map((part) => part.text).join(""),
    location: profile.location,
    experience: experience.map((item) => ({
      org: item.org,
      role: item.role,
      dates: `${item.start} - ${item.end}`,
    })),
    stack: stack.map((item) => item.name),
    links: socialLinks
      .filter((link) => link.key !== "resume")
      .map(({ label, href }) => ({ label, href })),
    email,
    booking: bookingLink,
    resumeHref,
    githubHref: `https://github.com/${profile.githubUsername}`,
  };
}
