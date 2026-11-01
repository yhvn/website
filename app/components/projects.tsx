import { GITHUB_URL, getRepos } from "../lib/github";
import { ArrowUpRight } from "./icons";

const languageTone: Record<string, string> = {
  Dart: "#4fb8e8",
  Kotlin: "#a77bf3",
  Swift: "#f05138",
  Rust: "#e8793a",
};

export async function Projects() {
  const repos = await getRepos();

  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-20 bg-night py-28 sm:py-40">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2
            id="projects-title"
            className="text-[clamp(2.5rem,5.5vw,4.75rem)] font-semibold leading-[0.95] tracking-[-0.04em] lg:col-span-7"
          >
            Projects
          </h2>
          <p className="max-w-[30rem] text-lg leading-relaxed text-ink lg:col-span-5 lg:justify-self-end">
            Everything I make is on GitHub. Read the code, open an issue, or
            send a pull request.
          </p>
        </div>

        <ul className="mt-14 grid gap-4 md:grid-cols-2">
          {repos.map((repo, i) => (
            // With an odd count the most-starred repo spans both columns,
            // so the grid never ends on an orphan card.
            <li key={repo.name} className={i === 0 && repos.length % 2 === 1 ? "md:col-span-2" : undefined}>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-[1.25rem] border border-white/[0.08] bg-night-2 p-7 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-1 hover:border-copper/50 hover:bg-night-3 sm:p-9"
              >
                <span className="flex items-start justify-between gap-4">
                  <span className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                    {repo.name}
                  </span>
                  <ArrowUpRight className="mt-2 size-5 shrink-0 text-ink-muted transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper" />
                </span>
                <span className="mt-4 block max-w-[38rem] text-base leading-relaxed text-ink">
                  {repo.description}
                </span>
                <span className="mt-auto flex items-center gap-5 pt-8 text-sm text-ink-muted tabular-nums">
                  {repo.language && (
                    <span className="flex items-center gap-2">
                      <span
                        className="size-2.5 rounded-full"
                        style={{ background: languageTone[repo.language] ?? "#a2a7b0" }}
                        aria-hidden="true"
                      />
                      {repo.language}
                    </span>
                  )}
                  <span>
                    {repo.stars} {repo.stars === 1 ? "star" : "stars"}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex items-center gap-2 text-base font-medium text-ink underline decoration-copper/60 underline-offset-[6px] transition-colors hover:text-copper-soft"
        >
          All repositories on GitHub
          <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}
