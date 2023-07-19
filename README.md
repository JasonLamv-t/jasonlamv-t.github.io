# Tailwind Next Blog

[![Repo stars](https://img.shields.io/github/stars/jasonlamv-t/tailwind-next-blog?style=social)](https://GitHub.com/jasonlamv-t/tailwind-next-blog/stargazers/) ![Commit activity](https://img.shields.io/github/commit-activity/m/jasonlamv-t/tailwind-next-blog?logo=github&style=social) ![Last commit](https://img.shields.io/github/last-commit/jasonlamv-t/tailwind-next-blog?logo=github&style=social)

This is a personal blog project template modeled after [Tailwind-Nextjs-Starter-Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) based on [NextJS](https://nextjs.org/) and [TailwindCSS](https://tailwindcss.com), which can be used out of the box and has a high degree of custom freedom. You can check the demo: [Brachistochrone](https://jasonlam.cc)

If you have any questions in use, please ask the issue, and I will reply and deal with it as soon as possible.

## Features

![NextJS version](https://img.shields.io/badge/NextJS-13-yellow) ![TailwindCSS version](https://img.shields.io/badge/TailwindCSS-3-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-blue) ![pnpm](https://img.shields.io/badge/pnpm-red)

- GFM support
- Preconfigured security headers, which is SEO friendly, supports RSS and Sitemap
- Support search everything in the blog via [Algolia](https://algolia.com/).[Docsearch](https://docsearch.algolia.com/)
- Mobile-friendly view
- Light and dark theme
- Math display supported via [KaTeX](https://katex.org/) & [remark-math](https://github.com/remarkjs/remark-math)
- Syntax & line highlighting in VSCode style, and display line numbers in code blocks via [rehype-prism-plus](https://github.com/timlrx/rehype-prism-plus)
- MDX support via [mdx-bundler](https://github.com/kentcdodds/mdx-bundler)
- Support for nested routing of blog posts
- List of projects&resources in waterfall flow view
- Additional build-in markdown syntax support via mdx, can also customize
- Pinned Article

## Quick Start

1. Initialize via `npx degit https://github.com/JasonLamv-t/tailwind-next-blog`
2. Personalize
   - `data/meta/site.ts`: site basic information and configuration.
   - `data/meta/author.ts`: author information.
   - `data/author.md`: custom content which will be displayed in the about page.
   - `data/projects.ts`: projects information.
   - `data/resources.ts`: resources information.
   - `data/meta/config.ts`: configuration of environment, will be remove soon.
   - `data/blogs`: position to store the blogs files in md/mdx format, support nested structure. Recommended generating new post via `pnpm newpost`, or you can touch the file manually.
   - `data/resources`: this directory will be copied under the public directory automatically when building.
   - `env.local`: environment, refer `env.example` & `data/meta/config.ts` for now.
3. Installation via `pnpm i`, or you can use your preferred package manager.
4. Run `pnpm newpost` and answer some questions then the new post will be created in the `data/blogs` directory, edit it.
5. Development:
   - for dev: run `pnpm dev` and check the `package.json` for more details
   - for node/pm2 and so on: run `pnpm serve`
   - for docker:
     - refer to `Dockerfile.example` to edit Dockerfile
     - run `docker built --file Dockerfile -t tailwind-next-blog .` to build the image with the tag - 'tailwind-next-blog'
     - then run `docker run -d -p 3000:3000 tailwin-next-blog` and open the localhost:3000 in your browser
