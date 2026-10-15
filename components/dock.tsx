"use client";

import { m, useReducedMotion } from "framer-motion";
import { FileText, Mail, type LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { socialLinks, type SocialKey } from "@/lib/data/links";

const icons: Record<SocialKey, IconType | LucideIcon> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaXTwitter,
  email: Mail,
  resume: FileText,
};

export function Dock() {
  const reduceMotion = useReducedMotion();

  return (
    <nav
      aria-label="Social links"
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-border bg-card/90 p-1.5 shadow-[0_0_0_1px_var(--border)] backdrop-blur-sm"
    >
      <ul className="flex items-center gap-2">
        {socialLinks.map((link) => {
          const Icon = icons[link.key];
          const external = !link.href.startsWith("mailto:");
          return (
            <li key={link.key}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <m.a
                    href={link.href}
                    aria-label={link.label}
                    {...(external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    whileHover={reduceMotion ? undefined : { scale: 1.1 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      duration: 0.15,
                    }}
                    className="flex size-10 items-center justify-center rounded-full text-muted-foreground transition-colors duration-150 outline-none hover:bg-border hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring md:size-12"
                  >
                    <Icon aria-hidden="true" className="size-5" />
                  </m.a>
                </TooltipTrigger>
                <TooltipContent side="top" sideOffset={8}>
                  {link.label}
                </TooltipContent>
              </Tooltip>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
