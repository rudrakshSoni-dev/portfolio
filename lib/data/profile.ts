export type Credential = {
  title: string;
  org: string;
  icon: "briefcase" | "git-pull-request" | "graduation-cap";
};

export type Profile = {
  name: string;
  fullName: string;
  title: string;
  description: string;
  location: string;
  avatar: string;
  githubUsername: string;
  about: {
    intro: { text: string; bold?: boolean }[];
    credentials: Credential[];
    blog: { label: string; href: string } | null;
  };
  contactLine: string;
};

export const profile: Profile = {
  name: "Rudraksh",
  fullName: "Rudraksh Soni",
  title: "Rudraksh Soni | Backend and AI engineer",
  description:
    "Backend and AI engineering student at BIT Mesra. I build Node.js and FastAPI services, multi-agent LangGraph systems, and contribute to Meshery.",
  location: "Kota, Rajasthan, India",
  avatar: "/avatar.jpg",
  githubUsername: "rudrakshSoni-dev",
  about: {
    intro: [
      { text: "I'm a " },
      { text: "backend and AI engineering", bold: true },
      { text: " student at BIT Mesra. I build " },
      { text: "Node.js and FastAPI services", bold: true },
      { text: ", " },
      { text: "multi-agent systems with LangGraph and RAG", bold: true },
      {
        text: ", and ship them with Docker to the cloud. I'm looking for a 6-month remote internship.",
      },
    ],
    credentials: [
      { title: "SDE Intern", org: "AnugatAI", icon: "briefcase" },
      {
        title: "Open Source Contributor",
        org: "Meshery",
        icon: "git-pull-request",
      },
      { title: "B.Tech ECE", org: "BIT Mesra", icon: "graduation-cap" },
    ],
    // TODO: add blog link ({ label, href }) once the blog exists. The line is hidden while null.
    blog: null,
  },
  contactLine: "Got a project, idea, or just want to chat? Let's connect.",
};
