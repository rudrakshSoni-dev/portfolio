export type FeaturedContribution = {
  title: string;
  repo: string;
  href: string;
  // TODO: set "merged" | "open" | "closed" once confirmed on GitHub.
  status?: "merged" | "open" | "closed";
};

export type Experience = {
  org: string;
  role: string;
  logo: string | null;
  start: string;
  end: string | "Present";
  summary: string;
  featuredHref?: string;
  featured?: FeaturedContribution[];
};

export const experience: Experience[] = [
  {
    org: "Layer5 / Meshery",
    role: "Open Source Contributor",
    logo: "/logos/meshery.png",
    start: "May 2026",
    end: "Present",
    summary:
      "Found a main-thread bottleneck in binary-to-JSON parsing and replaced it with a memory-efficient Base64/FormData Blob pipeline. Built reusable, type-safe components for the Sistent design system in React, TypeScript and Go.",
    featuredHref:
      "https://github.com/pulls?q=is%3Apr+author%3ArudrakshSoni-dev+org%3Ameshery+org%3Alayer5io",
    featured: [
      {
        // TODO: replace with the exact PR title from GitHub.
        title: "Memory-efficient Blob pipeline for binary-to-JSON parsing",
        repo: "meshery/meshery",
        href: "https://github.com/meshery/meshery/pull/19535",
      },
      {
        // TODO: replace with the exact PR title from GitHub.
        title: "Reusable, type-safe components for Sistent",
        repo: "layer5io/sistent",
        href: "https://github.com/layer5io/sistent/pull/1525",
      },
    ],
  },
  {
    org: "AnugatAI",
    role: "SDE Intern",
    logo: "/logos/anugatai.png",
    start: "Oct 2025",
    end: "Mar 2026",
    summary:
      "Designed the relational data models behind production APIs serving 11K+ users at 99.9% uptime. Owned the company's public website end to end in Next.js, React and TypeScript, from architecture to deployment.",
  },
];
