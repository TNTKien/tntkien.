---
title: "Hello World"
description: "A quick tour of this blog: Markdown, code snippets, navigation, themes, and publishing straight from GitHub."
date: 2026-10-19
tags: ["Announcements", "Blog"]
authors: ["tntkien"]
draft: false
---

Every project needs a `Hello World`. This one is no exception.

This website is part portfolio, part development notebook. Rather than just saying hello, I thought the first post should show **what this blog can do**, how it's put together, and what you can expect to find here.

## Introduction

The idea is simple: keep the interface out of the way and let the content do the talking.

I wanted somewhere to write about the projects I'm working on, document solutions to problems I run into, and keep useful notes that are easy to revisit. No complicated publishing workflow, no unnecessary decoration.

The foundation is [astro-erudite](https://github.com/jktrn/astro-erudite), with a few additions of my own.

## Writing in Markdown

Posts are written in plain Markdown. That covers the everyday essentials: **bold text**, *emphasis*, [links](https://astro.build/), headings, lists, images, quotes, tables, and code.

For example, here's a short list of things I'll probably write about:

- Building interfaces with React and TypeScript
- Designing APIs and working with databases
- Deploying and maintaining services on Cloudflare
- Experiments, side projects, and lessons learned

### Code blocks

Code is a big part of a developer blog, so fenced code blocks get syntax highlighting. Here's a tiny TypeScript example:

~~~ts
type BlogPost = {
  title: string;
  tags: string[];
  draft: boolean;
};

const isPublished = (post: BlogPost) => !post.draft;
~~~

Inline snippets work too, whether it's a command like `bun run build` or a path like `src/content/blog/`.

### Tables and quotes

Markdown also makes it easy to structure information without custom components.

| Content | How it works |
| --- | --- |
| Articles | Markdown files |
| Code | Syntax-highlighted blocks |
| Images | Standard Markdown image syntax |
| Publishing | Git commit and rebuild |

And sometimes a simple quote is enough:

> The best interface is the one that stays out of your way.

These aren't screenshots of features—they're examples rendered by the blog itself.

## A more comfortable reading experience

### Table of contents

Notice the **“On this page”** section above the article? It's generated from the headings in the post, so longer technical write-ups are easier to navigate.

### Light and dark themes

Use the theme toggle in the navigation bar to switch between light and dark mode. The selection is remembered in your browser, and the default follows your system preference.

### Less noise

The homepage has an interactive [Topography background](https://animate-ui.com/docs/backgrounds/topography) from Animate UI. Article pages intentionally don't. They keep a plain background, readable typography, and enough room for code and diagrams.

The layout also adapts to smaller screens.

## Finding your way around

The site has two main sections beyond the homepage:

- [Projects](/projects/) — a curated collection of applications, APIs, and tools I've built. Categories can be filtered using animated tabs powered by Animate UI and Base UI.
- [Blog](/blog/) — notes arranged by publication date, with tags for related topics.

You can follow new posts via [RSS](/rss.xml). There's also a generated sitemap to help search engines discover the pages.

## GitHub as the CMS

There is no database of posts and no separate admin dashboard.

Each article is a Markdown file in the repository. Its metadata lives at the top of the file:

~~~yaml
---
title: "Hello World"
description: "A quick tour of this blog"
date: 2026-10-19
tags: ["Announcements", "Blog"]
draft: false
---
~~~

Astro reads these files during the build and generates static pages. A new post is published simply by adding a Markdown file and pushing a commit; Cloudflare Workers serves the resulting website.

Setting `draft: true` keeps unfinished posts out of the published site. Everything else—from post lists to tag pages and RSS—is generated from the same content.

## Under the hood

The stack is deliberately straightforward:

- **Astro** for static pages and Markdown content collections.
- **React** only where a component needs browser interactivity.
- **Animate UI + Base UI** for the project filters and the homepage effect.
- **Cloudflare Workers Static Assets** for hosting the generated site—without Cloudflare Images or a server adapter.
- **GitHub** for versioning and managing the content.

The blog uses astro-erudite’s original content and reading experience, alongside a customized homepage and project list.

## What's next?

I'll use this space for development notes, breakdowns of my projects, and write-ups of interesting problems as they come up.

For now, consider this post both an introduction **and** a small demonstration of the blog.

Hello, world.
