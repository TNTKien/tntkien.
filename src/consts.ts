import type { SvgComponent } from "astro/types"
import GitHub from "@/assets/icons/github.svg"
import RSS from "@/assets/icons/rss.svg"

export const SITE = {
  title: "tntkien.",
  description: "Kien's portfolio and notes on frontend, backend, APIs, and building for the web.",
  locale: "en-US",
  dir: "ltr",
  defaultPageImage: "/static/og-image.svg",
  defaultPostImage: "/static/og-image.svg",
} as const

export const NAVIGATION = [
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/authors", label: "About" },
]

export const SOCIALS: { href: string; label: string; icon: SvgComponent }[] = [
  { href: "https://github.com/TNTKien", label: "GitHub", icon: GitHub },
  { href: "/rss.xml", label: "RSS", icon: RSS },
]
