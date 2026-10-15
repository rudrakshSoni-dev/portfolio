export type SocialKey = "github" | "linkedin" | "x" | "email" | "resume";

export type SocialLink = {
  key: SocialKey;
  label: string;
  href: string;
};

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://rudrakshh.live";

export const resumeHref = "/resume.pdf";
export const email = "mrrssoni12@gmail.com";

export const linkedinLink: SocialLink = {
  key: "linkedin",
  label: "LinkedIn",
  href: "https://www.linkedin.com/in/rudraksh-soni-7674ab2aa/",
};

export const socialLinks: SocialLink[] = [
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/rudrakshSoni-dev",
  },
  linkedinLink,
  { key: "x", label: "X", href: "https://x.com/soni_rudra81979" },
  { key: "email", label: "Email", href: `mailto:${email}` },
  { key: "resume", label: "Resume", href: resumeHref },
];

export const bookingLink = {
  label: "Book a call",
  href: process.env.NEXT_PUBLIC_CAL_URL || `mailto:${email}`,
};
