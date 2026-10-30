import Image from "next/image";

const BLOG_URL = "https://tungdevpro.github.io";

const links = [
  { label: "Blog", href: BLOG_URL },
  { label: "GitHub", href: "https://github.com/tungdevpro" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tungdevpro" },
  { label: "Email", href: "mailto:tungdm.work@gmail.com" },
];

const posts = [
  {
    title: "Ownership: the heart of Rust programming",
    topic: "Rust",
    href: `${BLOG_URL}/posts/onwership-the-heart-of-rust-programming/`,
  },
  {
    title: "Mastering state management in Flutter: a BLoC pattern guide",
    topic: "Flutter",
    href: `${BLOG_URL}/posts/mastering-state-management-in-flutter-a-bloc-pattern-guide/`,
  },
  {
    title: "Android app structure: an overview",
    topic: "Android",
    href: `${BLOG_URL}/posts/android-app-structure-overview/`,
  },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-20 bg-night pb-28 sm:pb-40">
      <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-4 sm:px-8 lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-4">
          {/* The source is a 460px GitHub avatar: shown uncropped, near its
              own size, and unoptimized so it isn't recompressed. */}
          <Image
            src="/andrew-do.jpg"
            alt="Andrew Do standing in front of a yellow wall"
            width={460}
            height={460}
            unoptimized
            className="aspect-square w-full max-w-[460px] rounded-[1.25rem] object-cover"
          />
        </div>

        <div className="flex flex-col lg:col-span-7 lg:col-start-6 lg:pt-2">
          <h2
            id="about-title"
            className="text-[clamp(2.5rem,5.5vw,4.75rem)] font-semibold leading-[0.95] tracking-[-0.04em] [text-wrap:balance]"
          >
            Made by Andrew Do
          </h2>
          <p className="mt-8 max-w-[34rem] text-lg leading-relaxed text-ink sm:text-xl">
            I&apos;m Tung, though Andrew is easier to remember. I&apos;m a mobile
            engineer working in native Android and iOS and in Flutter, and I
            reach for Rust when a tool needs to be fast and small. yh.Labs is
            where I build in the open, so other developers can use the work,
            learn from it, and make it better.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-base font-medium">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  {...(l.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                  className="underline decoration-copper/60 underline-offset-[6px] transition-colors hover:text-copper-soft"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <h3 className="mt-16 text-xl font-semibold tracking-[-0.01em]">From the blog</h3>
          <ul className="mt-4">
            {posts.map((p) => (
              <li key={p.href}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-6 rounded-[0.75rem] px-3 py-4 -mx-3 transition-colors hover:bg-night-2"
                >
                  <span className="text-lg leading-snug text-ink group-hover:text-copper-soft">
                    {p.title}
                  </span>
                  <span className="shrink-0 text-sm text-ink-muted">{p.topic}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
