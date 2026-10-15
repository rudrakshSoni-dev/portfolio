import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { StaggerItem } from "@/components/stagger";
import type { Experience } from "@/lib/data/experience";

function OrgLogo({ org, logo }: { org: string; logo: string | null }) {
  const className =
    "size-12 shrink-0 rounded-full border-2 border-foreground bg-card";

  if (!logo) {
    return (
      <div
        aria-hidden="true"
        className={cn(
          className,
          "flex items-center justify-center font-mono text-sm font-semibold",
        )}
      >
        {org.slice(0, 2)}
      </div>
    );
  }

  return (
    <div className={cn(className, "overflow-hidden p-1")}>
      <Image
        src={logo}
        alt={`${org} logo`}
        width={48}
        height={48}
        className="size-full rounded-full object-contain"
      />
    </div>
  );
}

function FeaturedDialog({ item }: { item: Experience }) {
  if (!item.featured?.length) return null;

  return (
    <Dialog>
      <DialogTrigger className="group mt-3 inline-flex items-center gap-1 rounded-sm text-sm text-muted-foreground transition-colors duration-150 outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring">
        Click to view featured contributions
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-150 group-hover:translate-x-0.5"
        />
      </DialogTrigger>
      <DialogContent className="rounded-md border border-border bg-card sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-lg">{item.org}</DialogTitle>
          <DialogDescription>Featured contributions</DialogDescription>
        </DialogHeader>
        <ul className="flex flex-col divide-y divide-border">
          {item.featured.map((pr) => (
            <li
              key={pr.href}
              className="flex items-start justify-between gap-3 py-3"
            >
              <div className="min-w-0">
                <a
                  href={pr.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground underline-offset-4 hover:underline hover:decoration-accent"
                >
                  {pr.title}
                </a>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {pr.repo}
                </p>
              </div>
              {pr.status && (
                <Badge variant="outline" className="font-mono capitalize">
                  {pr.status}
                </Badge>
              )}
            </li>
          ))}
        </ul>
        {item.featuredHref && (
          <a
            href={item.featuredHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
          >
            All pull requests on GitHub
            <ExternalLink aria-hidden="true" className="size-3.5" />
          </a>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function TimelineItem({ item }: { item: Experience }) {
  return (
    <StaggerItem className="flex gap-4 py-6 first:pt-0 last:pb-0">
      <OrgLogo org={item.org} logo={item.logo} />
      <div className="min-w-0 flex-1">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <h3 className="text-xl font-semibold">{item.org}</h3>
          <p className="shrink-0 font-mono text-sm text-muted-foreground">
            {item.start} - {item.end}
          </p>
        </div>
        <p className="mt-1 text-base text-muted-foreground">{item.role}</p>
        <p className="mt-3 text-base leading-7 text-muted-foreground">
          {item.summary}
        </p>
        <FeaturedDialog item={item} />
      </div>
    </StaggerItem>
  );
}
