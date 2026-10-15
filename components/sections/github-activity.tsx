import { Suspense } from "react";
import { CalendarDays } from "lucide-react";
import { CommandLabel } from "@/components/command-label";
import { Reveal } from "@/components/reveal";
import { sectionCommands } from "@/lib/data/terminal";
import { ContributionGrid } from "@/components/contribution-grid";
import { Skeleton } from "@/components/ui/skeleton";
import { getContributions } from "@/lib/github";
import { profile } from "@/lib/data/profile";

const username = process.env.GITHUB_USERNAME ?? profile.githubUsername;

function Header({ total }: { total: number | null }) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
      <div className="flex items-start gap-3">
        <CalendarDays aria-hidden="true" className="mt-1 size-5 shrink-0" />
        <div>
          <h2
            id="github-heading"
            className="text-3xl font-bold tracking-tight md:text-4xl"
          >
            GitHub Activity
          </h2>
          {total !== null && (
            <p className="mt-1 text-base text-muted-foreground">
              {total.toLocaleString("en-US")} contributions in the last year
            </p>
          )}
        </div>
      </div>
      <a
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-8 self-start rounded-full border border-border bg-card px-3 py-1 font-mono text-sm text-muted-foreground transition-colors duration-150 outline-none hover:border-muted-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring sm:mt-2 sm:ml-0 sm:shrink-0"
      >
        @{username}
      </a>
    </div>
  );
}

function GridSkeleton() {
  return (
    <>
      <Header total={null} />
      <Skeleton className="h-[156px] w-full rounded-md bg-card md:h-[146px]" />
    </>
  );
}

async function Activity() {
  const data = await getContributions(username);

  if (!data) return <Header total={null} />;

  return (
    <>
      <Header total={data.total} />
      <ContributionGrid weeks={data.weeks} />
    </>
  );
}

export function GithubActivity() {
  return (
    <section
      id="github"
      aria-labelledby="github-heading"
      className="scroll-mt-24 pt-12 pb-6 md:pt-16 md:pb-8"
    >
      <Reveal>
        <CommandLabel command={sectionCommands.github} />
        <Suspense fallback={<GridSkeleton />}>
          <Activity />
        </Suspense>
      </Reveal>
    </section>
  );
}
