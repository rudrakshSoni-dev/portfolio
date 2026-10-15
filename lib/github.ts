import "server-only";
import { cacheLife } from "next/cache";
import { fetchPublicContributions } from "@/lib/github-public";

export type ContributionLevel = 0 | 1 | 2 | 3 | 4;

export type ContributionDay = {
  date: string;
  count: number;
  level: ContributionLevel;
};

export type Contributions = {
  total: number;
  weeks: ContributionDay[][];
};

type GraphQLResponse = {
  data?: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: {
            contributionDays: {
              date: string;
              contributionCount: number;
              contributionLevel: string;
            }[];
          }[];
        };
      };
    } | null;
  };
};

const QUERY = `query($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks { contributionDays { date contributionCount contributionLevel } }
      }
    }
  }
}`;

const LEVELS: Record<string, ContributionLevel> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

export async function getContributions(
  username: string,
): Promise<Contributions | null> {
  "use cache";
  cacheLife({ revalidate: 3600, expire: 86400 });

  const token = process.env.GITHUB_TOKEN;
  try {
    if (!token) return await fetchPublicContributions(username);

    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: QUERY, variables: { login: username } }),
    });
    if (!res.ok) return null;

    const json = (await res.json()) as GraphQLResponse;
    const calendar =
      json.data?.user?.contributionsCollection.contributionCalendar;
    if (!calendar) return null;

    return {
      total: calendar.totalContributions,
      weeks: calendar.weeks.map((week) =>
        week.contributionDays.map((day) => ({
          date: day.date,
          count: day.contributionCount,
          level: LEVELS[day.contributionLevel] ?? 0,
        })),
      ),
    };
  } catch {
    return null;
  }
}
