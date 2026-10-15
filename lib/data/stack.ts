import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import {
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGit,
  SiGo,
  SiGooglecloud,
  SiJavascript,
  SiLangchain,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export type StackItem = {
  name: string;
  icon: IconType;
  // Brand color. Omitted for marks that are black, which render in the foreground color instead.
  color?: string;
  href?: string;
};

export const stack: StackItem[] = [
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    href: "https://www.typescriptlang.org",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    href: "https://developer.mozilla.org/docs/Web/JavaScript",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
    href: "https://www.python.org",
  },
  { name: "Go", icon: SiGo, color: "#00ADD8", href: "https://go.dev" },
  {
    name: "C++",
    icon: SiCplusplus,
    color: "#00599C",
    href: "https://isocpp.org",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#5FA04E",
    href: "https://nodejs.org",
  },
  { name: "Express", icon: SiExpress, href: "https://expressjs.com" },
  {
    name: "FastAPI",
    icon: SiFastapi,
    color: "#009688",
    href: "https://fastapi.tiangolo.com",
  },
  { name: "React", icon: SiReact, color: "#61DAFB", href: "https://react.dev" },
  { name: "Next.js", icon: SiNextdotjs, href: "https://nextjs.org" },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    href: "https://tailwindcss.com",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
    href: "https://www.postgresql.org",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    href: "https://www.mongodb.com",
  },
  { name: "Redis", icon: SiRedis, color: "#FF4438", href: "https://redis.io" },
  {
    name: "LangGraph",
    icon: SiLangchain,
    href: "https://www.langchain.com/langgraph",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
    href: "https://www.docker.com",
  },
  {
    name: "AWS",
    icon: FaAws,
    color: "#FF9900",
    href: "https://aws.amazon.com",
  },
  {
    name: "Google Cloud",
    icon: SiGooglecloud,
    color: "#4285F4",
    href: "https://cloud.google.com",
  },
  {
    name: "Linux",
    icon: SiLinux,
    color: "#FCC624",
    href: "https://kernel.org",
  },
  { name: "Git", icon: SiGit, color: "#F05032", href: "https://git-scm.com" },
];
