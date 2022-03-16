# 11ty personal blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/930a7acf-5cfd-41a7-a38d-d5b80da959c2/deploy-status)](https://app.netlify.com/sites/raphaelferrand/deploys)

This is intended to be for a personal blog, simple, performant, focusing on content, a static site as it gets.
It's also a way to play around, experimenting with new cool stuff away from production codebase ; -)

## How to start 🔧

- clone the repo
- type "npm run start" to run it locally
- check at [http://localhost/3000](http://localhost:3000/)
- type "eleventy" to build the static site

## How to contribute 💪

We'll see later, what if I open this theme as 11ty starter ... ?

## Roadmap 🚀

- [x] initiate 11ty blog with components
- [x] enable Netlify deploy (package.json & ... )
- [x] use CSS
- [x] add Tailwind CSS
- [x] add PostCSS
- [x] rename Git "master" branch to "main"
- [x] Deploy to netlify
- [x] improve default style aesthetics (logo + colors)
- [x] add new design (fonts + colours + details gradients & animations)
- [ ] add Lighthouse CI
- [x] Purge CSS on build PROD (not dev)
- [x] improve mobile view
- [ ] fix issue reload on change
- [x] fix horizontal dividers on blog startpage (on hover still see the upper divider)
- [x] improve logo (not transparent yet, will cause issue later e.g. in dark mode)
- [ ] update postcss-preset-env to v7+ (but breaking changes) & rethink what has to be imported as postcss plugins (nested?, imports?, ...)
- [ ] add image comparison test (PlaywrightJS?) to avoid regressions
- [ ] add E2E tests PlaywrightJS
- [ ] think eventual change of stack (Astro?) to ake it easier, or use template perf-google
- [ ] upgrade Tailwind to v2+ (and adapt PurgeCSS, since throws warn in build logging: "warn - The `conservative` purge mode will be removed in Tailwind 2.0."
- [x] customize CSS via PostCSS (e.g. nested-CSS)
- [ ] add purgeCSS
- [ ] fix the (postcss-clean?) issue removing the so-it-say "not supported" `cx` from css sun-and-moon.css file
- [ ] track speed perf via [Speedlify](https://github.com/zachleat/speedlify/#deploy-to-netlify)
- [ ] fix SEO & A11y issues
- [ ] improve Lighthouse CI by using Lighthouse CLI commands (i.e. run mutiple runs & pick median, etc)
- [ ] add CI check for A11y
- [x] style blog posts basic
- [ ] edit nav
- [ ] add RSS
- [x] edit footer
- [x] first blog posts
- [ ] add Web Mentions ?
- [x] improve way to import svg (e.g. in footer GitHub link code icon)
- [ ] improve way to use images (plugin to export static images on different dimensions + type (mobile dimensions, avif, ...) + use picture element)
- [x] add light-dark theme
- [ ] add additional themes (wordart-clipart, funky, red, ...)
- [ ] add sound on hover (like Josh W Comeau's blog)

## Credits 😍

Thank you to the creators and mainteners of those amazing tools:

- [11ty](https://www.11ty.dev/)
- mostly .md & .liquidJs
- [tailwind-css](https://tailwindcss.com/)
- [postcss](https://postcss.org/)
- [purgecss](https://purgecss.com/)
- [netlify](https://www.netlify.com/)
- [lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
