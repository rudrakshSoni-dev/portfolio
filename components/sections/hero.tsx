import Image from "next/image";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Prompt } from "@/components/prompt";
import { sectionCommands } from "@/lib/data/terminal";
import { profile } from "@/lib/data/profile";
import { resumeHref } from "@/lib/data/links";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="flex flex-col-reverse gap-8 pb-6 sm:flex-row sm:items-center sm:justify-between md:pb-8"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <Prompt
            command={sectionCommands.hero}
            className="animate-in fade-in fill-mode-backwards duration-300 ease-out motion-reduce:animate-none"
          />
          <h1
            id="hero-heading"
            className="text-5xl font-bold tracking-tight animate-in fade-in slide-in-from-bottom-2 fill-mode-backwards delay-75 duration-300 ease-out motion-reduce:animate-none md:text-6xl"
          >
            Hi, I&apos;m {profile.name}
          </h1>
        </div>
        <div className="flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-2 fill-mode-backwards duration-300 ease-out motion-reduce:animate-none delay-150">
          <Button
            asChild
            variant="secondary"
            className="h-10 rounded-md border-border px-4 text-sm"
          >
            <a href={resumeHref} target="_blank" rel="noopener noreferrer">
              <FileText aria-hidden="true" />
              Resume / CV
            </a>
          </Button>
          <Button asChild className="h-10 rounded-md px-4 text-sm">
            <a href="#contact">Get in touch</a>
          </Button>
        </div>
      </div>
      <Image
        src={profile.avatar}
        alt={`Portrait of ${profile.fullName}`}
        width={176}
        height={176}
        sizes="(min-width: 768px) 176px, 112px"
        preload
        className="size-28 shrink-0 animate-in rounded-full border border-border bg-card ring-4 ring-card duration-500 ease-out fade-in zoom-in-95 fill-mode-backwards motion-reduce:animate-none md:size-44"
      />
    </section>
  );
}
