import "server-only";
import type {
  ContributionDay,
  ContributionLevel,
  Contributions,
} from "@/lib/github";

const CELL =
  /<td[^>]*data-date="(\d{4}-\d{2}-\d{2})"[^>]*id="contribution-day-component-(\d+)-(\d+)"[^>]*data-level="(\d)"/g;
const TOOLTIP =
  /<tool-tip[^>]*for="(contribution-day-component-\d+-\d+)"[^>]*>([^<]*)<\/tool-tip>/g;
const TOTAL =
  /id="js-contribution-activity-description"[^>]*>\s*([\d,]+)\s+contribution/;

function toLevel(value: string): ContributionLevel {
  const level = Number(value);
  return level >= 0 && level <= 4 ? (level as ContributionLevel) : 0;
}

// Parses the public contributions calendar (no token needed). Used when GITHUB_TOKEN is unset.
export function parseContributionsHtml(html: string): Contributions | null {
  const counts = new Map<string, number>();
  for (const [, id, label] of html.matchAll(TOOLTIP)) {
    const count = Number(label.match(/^(\d+)/)?.[1] ?? 0);
    counts.set(id, count);
  }

  const weeks: ContributionDay[][] = [];
  for (const [, date, row, col, level] of html.matchAll(CELL)) {
    const week = (weeks[Number(col)] ??= []);
    week[Number(row)] = {
      date,
      count: counts.get(`contribution-day-component-${row}-${col}`) ?? 0,
      level: toLevel(level),
    };
  }

  const cleaned = weeks
    .map((week) => week.filter(Boolean))
    .filter((week) => week.length);
  if (!cleaned.length) return null;

  const total =
    Number(html.match(TOTAL)?.[1]?.replace(/,/g, "")) ||
    cleaned.flat().reduce((sum, day) => sum + day.count, 0);

  return { total, weeks: cleaned };
}

export async function fetchPublicContributions(username: string) {
  const res = await fetch(
    `https://github.com/users/${username}/contributions`,
    {
      headers: { Accept: "text/html" },
    },
  );
  if (!res.ok) return null;
  return parseContributionsHtml(await res.text());
}
