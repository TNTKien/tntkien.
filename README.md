# tntkien. — Portfolio & Notes

Personal portfolio and Markdown blog based directly on [astro-erudite v2](https://github.com/jktrn/astro-erudite).

The original astro-erudite layouts, multi-author content system, series, callouts, tags, search-engine metadata, table of contents, expressive code, RSS, and math support are retained. Customizations are intentionally small: a green-tinted brand palette, the `tntkien.` wordmark, a homepage with interactive Topography, and a filterable project list.

## Stack

- Astro 7 static site + Sätteri Markdown + Expressive Code
- React 19 islands for [Animate UI Topography](https://animate-ui.com/docs/backgrounds/topography) and Animate UI [Base UI Tabs](https://animate-ui.com/docs/primitives/base-ui/tabs)
- Native CSS (no Tailwind required)
- Cloudflare Workers **Static Assets**: no Astro Cloudflare adapter, Cloudflare Images, KV, or database

## Develop

Requires Bun 1.3+ or Node.js 22.12+.

```bash
bun install
bun run dev
bun run build
```

## Cloudflare Workers Git deployment

This is a static site. The `wrangler.jsonc` file serves `dist/` as Worker Static Assets.

Use the following settings in **Workers & Pages → Worker → Settings → Builds**:

| Setting | Value |
| --- | --- |
| Build command | `bun run build` |
| Deploy command | `bunx wrangler deploy` |
| Root directory | `/` |

Alternatively, leave the Build command empty and use `bun run deploy` as Deploy command. **Don't build twice.**

Set the non-secret build environment variable `SITE_URL` to the final origin, e.g. `https://your-subdomain.example.workers.dev` (or your custom domain). Astro uses this for canonical links, RSS and sitemap. The fallback in `astro.config.ts` is a placeholder, not a production domain recommendation.

For manual deployment:

```bash
bun run deploy
```

**Why no Cloudflare Images?** This website is completely prerendered at build time. Standard Astro image optimizations, if any, run at build time on the build machine—not through Cloudflare Images. No `@astrojs/cloudflare` adapter is installed.

## Writing posts in GitHub

Create `src/content/blog/my-post.md` with:

```md
---
title: "My Post"
description: "A short description"
date: 2026-10-19
tags: ["Dev"]
authors: ["kien"]
draft: false
---

Your **Markdown** content.
```

Commit changes to `main` to trigger the connected Cloudflare Git build.

- Drafts: `draft: true`
- Single posts and article series: follow the upstream astro-erudite content convention
- All projects: `src/content/projects/*.md`; `featured: true` shows projects on the homepage
- Authors: `src/content/authors/*.md`
- RSS: `/rss.xml`, sitemap: `/sitemap-index.xml`

## Credits

- [astro-erudite](https://github.com/jktrn/astro-erudite), copyright its authors, MIT (see `LICENSE`)
- [Animate UI](https://animate-ui.com/), copyright its authors, MIT + Commons Clause (see `ANIMATE_UI_LICENSE.md`)

The vector wordmark was adapted from the logo reference provided by the repository owner.
