import { cacheLife } from "next/cache";

export const GITHUB_ORG = "yhvn";
export const GITHUB_URL = `https://github.com/${GITHUB_ORG}`;

export type Repo = {
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  url: string;
  updatedAt: string;
};

type ApiRepo = {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  html_url: string;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
};

// Shown when the GitHub API is unreachable or rate limited during a build.
const FALLBACK: Repo[] = [
  {
    name: "e-learning",
    description:
      "Online Course App - A modern e-learning mobile application built with Flutter.",
    language: "Dart",
    stars: 23,
    url: `${GITHUB_URL}/e-learning`,
    updatedAt: "2026-10-01T00:00:00Z",
  },
  {
    name: "oxdrop",
    description:
      "Send files from your Mac or PC to an Android phone over local Wi-Fi: scan a QR code and download in the browser",
    language: "Rust",
    stars: 2,
    url: `${GITHUB_URL}/oxdrop`,
    updatedAt: "2026-10-01T00:00:00Z",
  },
];

export async function getRepos(): Promise<Repo[]> {
  "use cache";
  cacheLife("hours");

  const headers: HeadersInit = { Accept: "application/vnd.github+json" };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const res = await fetch(
      `https://api.github.com/orgs/${GITHUB_ORG}/repos?per_page=100&sort=pushed`,
      { headers },
    );
    if (!res.ok) return FALLBACK;
    const data = (await res.json()) as ApiRepo[];
    const repos = data
      .filter((r) => !r.fork && !r.archived && r.description)
      .map((r) => ({
        name: r.name,
        description: r.description,
        language: r.language,
        stars: r.stargazers_count,
        url: r.html_url,
        updatedAt: r.pushed_at,
      }))
      .sort((a, b) => b.stars - a.stars);
    return repos.length > 0 ? repos : FALLBACK;
  } catch {
    return FALLBACK;
  }
}
