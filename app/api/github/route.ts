import { getContributions } from "@/lib/github";
import { profile } from "@/lib/data/profile";

export async function GET() {
  const username = process.env.GITHUB_USERNAME ?? profile.githubUsername;
  const contributions = await getContributions(username);

  if (!contributions) {
    return Response.json(
      { error: "Contributions unavailable" },
      { status: 503 },
    );
  }

  return Response.json(contributions, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
