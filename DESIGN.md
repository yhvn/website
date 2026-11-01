---
name: yh.Labs
description: Open source, crafted with care. One engineer's mobile and Rust work, lit by a single lamp.
colors:
  lamp-copper: "#e8793a"
  copper-soft: "#f4a36f"
  workshop-night: "#07080b"
  night-raised: "#0e1015"
  night-lifted: "#161920"
  ink: "#eceef1"
  ink-muted: "#a2a7b0"
  logo-blue: "#8db8ff"
  logo-copper: "#db8149"
  tone-flutter: "#4fb8e8"
  tone-kotlin: "#a77bf3"
  tone-swift: "#f05138"
  signal-green: "#5fd08a"
typography:
  display:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(3rem, 5.6vw, 5.5rem)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5.5vw, 4.75rem)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title-sm:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  body-lg:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
  code:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.78em"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  sm: "12px"
  lg: "20px"
  full: "9999px"
spacing:
  gutter-mobile: "16px"
  gutter: "32px"
  card-gap: "16px"
  card-pad-mobile: "28px"
  card-pad: "36px"
  section-mobile: "112px"
  section: "160px"
  container: "1400px"
components:
  button-primary:
    backgroundColor: "{colors.lamp-copper}"
    textColor: "{colors.workshop-night}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    padding: "0 28px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.copper-soft}"
  button-ghost:
    backgroundColor: "rgba(255, 255, 255, 0.04)"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    padding: "0 28px"
    height: "52px"
  button-ghost-hover:
    backgroundColor: "rgba(255, 255, 255, 0.07)"
  card-project:
    backgroundColor: "{colors.night-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card-pad}"
  card-project-hover:
    backgroundColor: "{colors.night-lifted}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  nav-link-hover:
    textColor: "{colors.copper-soft}"
  list-row:
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "16px 12px"
  list-row-hover:
    backgroundColor: "{colors.night-raised}"
    textColor: "{colors.copper-soft}"
---

# Design System: yh.Labs

## Overview

**Creative North Star: "The Night Workshop"**

The page is a workshop after dark: a near-black room, one warm lamp, and the work itself laid out on the bench. Everything at rest is calm and nocturnal. The ground is a faintly blue-black night, text is a soft cool white, and the only warmth comes from a single copper accent and the lit windows of a skyline at the foot of the hero. Nothing shouts. Attention goes where the lamp points.

The work is shown, not described. Phones, a terminal and a code window float in the hero as the proof of what gets built here. They are the only objects in the system with real shadows and motion. Below the hero the page goes flat and quiet: big tightly tracked headings, generous vertical space, tonal cards a step lighter than the night, and copper that only wakes up when the visitor touches something.

Density is low and the measure is controlled. A section holds one heading, one short paragraph and the content it introduces. The system is dark by design and has no light theme.

**Key Characteristics:**
- One near-black ground with two tonal steps above it; no gradients on surfaces.
- A single warm accent, Lamp Copper, used for the primary action, focus, selection and hover states.
- Large Geist headings at 600 weight with tight negative tracking (-0.04em to -0.045em).
- Flat page, lifted props: only the hero's device mockups cast shadows and move.
- A quiet, pixel-lit night skyline anchors the hero; warm windows echo the accent.

## Colors

A calm blue-black night, cool white ink, and one warm copper lamp.

### Primary
- **Lamp Copper** (#e8793a): the one warm light. Used for the primary call to action, the logo's dot, warm skyline windows, progress fills in mockups, text selection, link underlines (at 60% opacity) and hover borders on cards (at 50%). Night text on Lamp Copper passes AA (about 6.9:1).
- **Copper Soft** (#f4a36f): Lamp Copper's lighter hover state. Used for the primary button on hover, link and nav hover text, and the focus outline.

### Neutral
- **Workshop Night** (#07080b): the page ground. Every section, the header and the footer sit on it. It is also the text color on copper.
- **Night Raised** (#0e1015): the first tonal step. Project cards and list-row hover backgrounds.
- **Night Lifted** (#161920): the second step. Card hover, and inner rows inside device mockups.
- **Ink** (#eceef1): primary text, including body copy. It is deliberately not pure white.
- **Ink Muted** (#a2a7b0): metadata only: star counts, languages, blog topics and the tech stack row. It reaches about 8:1 on the night ground.
- **Hairlines** (white at 8–15% alpha): card borders (8%), the ghost button border (15%) and window chrome dividers (7%). These are alpha overlays rather than fixed tokens.

### Identity and data colors
- **Logo Blue** (#8db8ff) and **Logo Copper** (#db8149): appear only inside the yh.Labs wordmark. Never use them as interface colors.
- **Language tones**: Flutter/Dart (#4fb8e8), Kotlin (#a77bf3), Swift (#f05138), with Rust sharing Lamp Copper. Each appears only as a small square or dot next to its language name, and an unknown language falls back to Ink Muted.
- **Signal Green** (#5fd08a): "connected" and "sent" states inside the oxdrop mockup only.

### Named Rules
**The One Lamp Rule.** Lamp Copper is the only warm interface color, and it covers well under 10% of any viewport. It is solid on exactly one element per screen, the primary button. Everywhere else it appears as a hairline, an underline, a dot or a hover state.

**The No Pure Extremes Rule.** Never use #000 or #fff. The ground is Workshop Night and the brightest text is Ink.

## Typography

**Display and body font:** Geist (with system-ui, sans-serif)
**Code font:** Geist Mono (with ui-monospace, monospace)

**Character:** one neo-grotesque family does all the work. Hierarchy comes from size and tracking rather than from a second display face. Headings are set tight and heavy enough to feel engineered, and body copy relaxes into generous leading.

### Hierarchy
- **Display** (600, clamp(3rem, 5.6vw, 5.5rem) on desktop and clamp(2.25rem, 9vw, 4.5rem) on mobile, line-height 0.95, tracking -0.045em, balanced wrapping): the hero headline only, once per page.
- **Headline** (600, clamp(2.5rem, 5.5vw, 4.75rem), line-height 0.95, tracking -0.04em): section titles ("Projects", "Made by Andrew Do").
- **Title** (600, 1.5rem rising to 1.875rem, tracking -0.02em): project names on cards.
- **Title Small** (600, 1.25rem, tracking -0.01em): sub-headings inside a section ("From the blog").
- **Body Large** (400, 1.125rem rising to 1.25rem, line-height 1.625): intros and the bio. Capped at 34rem (about 60 characters).
- **Body** (400, 1rem, line-height 1.625): card descriptions and button labels (500–600 on buttons).
- **Label** (400, 0.875rem): metadata and the footer line, always in Ink Muted.
- **Code** (Geist Mono, about 0.76–0.78em, line-height 1.65–1.7): only inside terminal and code mockups.

### Named Rules
**The Tight Display Rule.** Headings at 2.5rem and above use line-height 0.95 and tracking between -0.04em and -0.045em. Below that size tracking eases to -0.02em or less, and body text is never tracked.

**The Mono Means Code Rule.** Geist Mono appears only where the content is literally code or terminal output. It is never used for labels or decoration.

## Layout

The page is a single column of full-bleed sections on Workshop Night, inside a centered 1400px container. Side gutters are 16px on mobile and 32px from the `sm` breakpoint (640px). From `lg` (1024px) content sits on a 12-column grid with a 32px gap:
- **Hero:** copy spans 7 columns. The device scene spans 5 and bleeds 22% leftward under the copy.
- **Projects:** the heading takes 7 columns and the intro 5, right-aligned. The cards below form a 2-column grid from `md` (768px), with a 16px gap.
- **About:** the portrait takes 4 columns and the text block 7, starting at column 6, which leaves a deliberate empty column.

The rhythm is generous. Sections have 112px of vertical padding on mobile and 160px from `sm`. The hero fills at least the full small viewport height (100svh). Anchor targets carry an 80px scroll margin so the absolute header never covers a heading. On mobile everything stacks: hero buttons go full width and the device scene drops below the copy.

The device scene scales as one drawing. All of its internal sizes are in em, and its font size comes from its own container width (1.5625cqw), so the composition never reflows.

## Elevation & Depth

The page is flat and its props are lifted. Sections, cards, buttons and lists have no shadows. Depth comes from the two tonal steps above the night ground and from 8% white hairlines. Real shadows, 3D perspective, parallax and floating motion belong only to the hero's device mockups. These are the objects on the workbench, and they are the only things that leave the surface.

### Shadow Vocabulary
- **Prop drop** (`0 3em 6em -1.5em rgba(0,0,0,0.85)`, plus a 0.1em white ring at 9% and an inset ring at 6%): phone frames in the hero.
- **Glass window** (`0 2.5em 5em -1.5em rgba(0,0,0,0.8)`, with an 11px backdrop blur over 75% #0f1116): the terminal and code windows. The blur is functional: the windows overlap the glow and the other devices.
- **Lamp glow**: two radial copper gradients (22% and 12% alpha) behind the devices and along the horizon. This is light in the room, not a surface effect.

### Named Rules
**The Flat Page Rule.** Outside the hero scene, nothing casts a shadow. Card hover lifts by 4px, steps the background one tone lighter and warms the border, with no shadow.

## Shapes

The shapes are soft and confident. Interactive pills are fully round (9999px): both hero buttons and the scan-and-download pill inside mockups. Content containers use one generous radius (20px) for project cards and the portrait. List rows use a smaller one (12px). Device mockups use radii proportional to their own drawing (3em phone shells, 2.5em screens, 1.1em windows). Borders are always 1px alpha hairlines. The wordmark is drawn with round caps and joins at a heavy stroke, and the interface's drawn icons follow the same round-capped geometry.

## Components

Every component is quiet until touched. At rest it is tonal and calm. Copper, lift and movement appear only on hover, focus or press.

### Buttons
- **Shape:** full pill (9999px), 52px tall, 28px horizontal padding.
- **Primary:** Lamp Copper fill, Workshop Night label at 600 weight, and a trailing down-arrow icon that nudges 2px down on hover. Hover changes the fill to Copper Soft. Press scales to 0.98. Transitions run at 200ms.
- **Ghost:** 4% white fill, 15% white hairline, Ink label at 500 weight, a leading GitHub mark, a small backdrop blur, and a trailing outbound arrow that nudges up and to the right on hover. Hover warms the border to 60% copper and the fill to 7%.
- **Focus:** a 2px Copper Soft outline at a 3px offset, set globally on every focusable element.

### Tech stack list
- **Style:** a row of plain labels in Label type and Ink Muted, each led by an 8px square in its language tone. These are not chips: they have no background and no border.

### Cards / Containers
- **Project card:** 20px radius, Night Raised background, 8% white hairline, 28px padding rising to 36px. The whole card is the link. Hover lifts it 4px, changes the background to Night Lifted, warms the border to 50% copper and moves the outbound arrow up and to the right in copper, over 300ms. A metadata row with tabular numerals is pinned to the bottom, so cards in a row align. The cards sit in a 2-column grid; when the count is odd, the first (most-starred) card spans both columns so the grid never ends on an orphan.
- **Shadows:** none (see the Flat Page Rule).

### Navigation
- **Header:** absolutely positioned over the hero, 80px tall, with the wordmark on the left (28–32px high) and three text links on the right at 0.95rem in Ink with a 24px gap. Hover turns a link Copper Soft. The header has no background or blur, and the mobile layout keeps the same three links.
- **Footer:** the wordmark set very large (up to 56rem wide) as a signature, above a Label row in Ink Muted.

### Text links
- **Inline and standalone links:** Ink text with a 60% copper underline at a 6px offset. Hover turns the text Copper Soft.
- **List rows (blog posts):** a full-width link with the title on the left and the topic in Ink Muted on the right, with a 12px radius. Hover fills the row with Night Raised and warms the title to Copper Soft.

### Device scene (signature)
Two phone shells (an iOS variant with a pill cut-out and an Android variant with a punch-hole), plus terminal and code windows with three-dot chrome. All of them show truthful miniatures of the real projects (e-learning, oxdrop). Each layer has its own parallax depth (8–30px from the pointer, plus scroll offsets) and a slow float of 6–10s with an independent period, so the layers never move in sync. Everything is still when the visitor prefers reduced motion. The QR code is decorative and seeded, so the server and browser render the same pattern.

### Night skyline (signature)
Three seeded SVG building layers in stepped night tones (#11141b, #0c0e13, #07080b), each with a few lit windows that are mostly warm copper and some cool white. Red beacons on the spires blink in hard 2.4s steps. The layers parallax at increasing depth, and the front layer dissolves into the page ground.

### Motion
- **Easing:** soft ease-out, `cubic-bezier(0.2, 0.7, 0.2, 1)`.
- **Entrance:** only the hero copy has one. It rises 24px and fades in over 0.7s, staggered 80ms per element, in pure CSS so the text is never hidden without JavaScript.
- **Hover and press:** transitions run 200–300ms.
- **Reduced motion:** all animation, parallax and smooth scrolling are disabled when the visitor prefers reduced motion.

## Do's and Don'ts

### Do:
- **Do** keep Lamp Copper rare: one solid copper element per viewport (the primary button), and hairlines, dots and hover states everywhere else.
- **Do** build depth below the hero from tone: Workshop Night, then Night Raised, then Night Lifted, plus 8% white hairlines.
- **Do** set section headings in Geist 600 with line-height 0.95 and tracking of -0.04em, and let them stand alone.
- **Do** keep intro and body copy at or under 34rem and in Ink. Use Ink Muted only for metadata.
- **Do** make every interactive element answer hover and focus: copper warmth plus a small movement of 2–4px or a 0.98 press, within 300ms.
- **Do** draw icons as inline SVG on a 16px grid with round caps at a 1.8 stroke, matching the wordmark. Reuse the shared outbound arrow (`app/components/icons.tsx`) for every external link.
- **Do** disable motion when the visitor prefers reduced motion, and render seeded art identically on the server and in the browser.

### Don't:
- **Don't** add shadows, glass or floating motion outside the hero's device scene.
- **Don't** use pure black or pure white, or the wordmark's blue, anywhere in the interface.
- **Don't** introduce a second accent color or gradient fills on surfaces or text. Language tones stay tiny markers next to their names.
- **Don't** put small labels, badges or numbers above any heading, including the hero headline. Headings stand alone.
- **Don't** use text glyphs (↗, →) or emoji as icons.
- **Don't** use Geist Mono for anything except code and terminal output.
- **Don't** add a light theme. The night is the system.
