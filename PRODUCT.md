# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Developers come first: mobile engineers (native Android, iOS, Flutter) and Rust developers who want to use the projects, read and learn from the code, or contribute. A real secondary audience is people judging Andrew's work through those projects, such as recruiters, companies and potential clients or collaborators.

## Product Purpose

yh.Labs is the home of Andrew Do's open-source work. The site presents the projects, links straight to the code on GitHub, and introduces the person behind them.

Success means:
- visitors click through to the repositories and star or follow them;
- developers become contributors and open issues or pull requests;
- inbound contact: job offers, freelance work or collaboration requests.

## Positioning

Range across mobile and Rust from one engineer. The same person ships native Android and iOS apps, Flutter apps, and small, fast Rust tools, and all of it is built in the open.

## Operating Context

- Projects live in the `yhvn` GitHub organization (https://github.com/yhvn). The Projects section pulls the org's public, non-fork, non-archived repos that have a description, sorted by stars, and refreshes every few hours. Built-in fallback data covers the case where the GitHub API is unavailable.
- Andrew's personal channels: blog at https://tungdevpro.github.io, GitHub `tungdevpro`, LinkedIn `tungdevpro`, and email.
- Visitors usually arrive from GitHub, the blog, LinkedIn or a shared link, and then leave for a repository or a contact channel.

## Capabilities and Constraints

- Single-page site built with Next.js (App Router), React and Tailwind CSS, with component caching enabled. An optional `GITHUB_TOKEN` raises the GitHub API rate limit.
- Project data comes from the GitHub API. Star counts and descriptions shown on the site must stay accurate to GitHub.
- Undecided: deploy target and production domain.

## Brand Commitments

- Name: **yh.Labs**, a solo open-source label run by Andrew Do (Tung). It is not a company or a team.
- Voice: first person singular ("I build…") throughout. Do not use "we".
- Existing wordmark: `app/components/logo.tsx`.
- The headline "Open source, crafted with care." is the current tagline.

## Evidence on Hand

- Real projects:
  - **e-learning**: a Flutter online-course app (Dart, about 23 stars when the fallback data was recorded).
  - **oxdrop**: sends files from a Mac or PC to an Android phone over local Wi-Fi. The phone scans a QR code and downloads the files in its browser (Rust).
- Portrait: `public/andrew-do.jpg`, a 460px GitHub avatar.
- Three blog posts (Rust ownership, Flutter BLoC, Android app structure), linked from the About section.
- The hero's device mockups are illustrations, not screenshots.
- Absent, and never to be invented: testimonials, client names, employer names, download or user counts, press coverage, and app-store listings.

## Product Principles

1. **Code is the proof.** Every claim should lead to a repository someone can open, read and run.
2. **Developers first, evaluators served too.** Optimize for someone deciding whether to use or contribute, while keeping the path to contacting Andrew one step away.
3. **Show the range honestly.** Present native mobile, Flutter and Rust as one engineer's practice, with no inflated scale.
4. **One person's voice.** Write in the first person and keep it specific, with no studio-speak.
