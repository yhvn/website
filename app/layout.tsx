import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "yh.Labs — Open source mobile apps and Rust software",
  description:
    "yh.Labs builds free, open source Flutter, Android, iOS and Rust projects that anyone can use, learn from, and contribute to.",
  openGraph: {
    title: "yh.Labs — Open source, crafted with care",
    description:
      "Free Flutter, Android, iOS and Rust projects, built in the open.",
    url: "https://github.com/yhvn",
    siteName: "yh.Labs",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07080b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      // Browser extensions (e.g. ColorZilla) add attributes to <html>/<body>
      // before hydration. This only silences mismatches on these two tags.
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
