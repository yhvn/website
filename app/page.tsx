import { About } from "./components/about";
import { Hero } from "./components/hero";
import { Logo } from "./components/logo";
import { Projects } from "./components/projects";
import { GITHUB_URL } from "./lib/github";

export default function Home() {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Main"
          className="mx-auto flex h-20 w-full max-w-[1400px] items-center justify-between px-4 sm:px-8"
        >
          <a href="#" className="block transition-opacity hover:opacity-80">
            <Logo className="h-7 w-auto sm:h-8" />
          </a>
          <ul className="flex items-center gap-6 text-[0.95rem] text-ink">
            <li>
              <a href="#projects" className="transition-colors hover:text-copper-soft">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="transition-colors hover:text-copper-soft">
                About
              </a>
            </li>
            <li>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-copper-soft"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-1">
        <Hero />
        <Projects />
        <About />
      </main>

      <footer className="bg-night px-4 pb-10 pt-16 sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          <Logo className="h-auto w-full max-w-[56rem]" />
          <div className="mt-8 flex flex-col justify-between gap-2 text-sm text-ink-muted sm:flex-row">
            <p>Free and open source. Built in the open on GitHub.</p>
            <p>
              <a href={GITHUB_URL} className="text-ink hover:text-copper-soft">
                github.com/yhvn
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
