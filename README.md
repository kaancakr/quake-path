# QuakePath – Project Website

The landing and documentation site for **QuakePath**, an earthquake emergency app with Mapbox maps and an offline Bluetooth mesh. It is a statically exported Next.js site hosted on GitHub Pages.

- **Live site:** https://kaancakr.github.io/quake-path/
- **App repository:** https://github.com/kaancakr/QuakePath

## Features

- **Animated landing page.** A hero section, a feature highlights section and a demo section, animated with Framer Motion.
- **Project pages.** Features, Architecture, Technology, API Docs, Security, Testing and Backlog. The Backlog page shows sprint items with story points and a completion summary.
- **Documents page.** Links to the project reports, including the proposal, analysis, design and final reports.
- **About, Contact and Download pages.** About introduces the team. Contact has a form built with React Hook Form. Download has iOS/Android cards that are marked "Coming Soon".
- **Responsive navbar and footer.** The footer links to the app repository.

The contact form runs only in the browser. It logs the submission to the console and stores nothing yet.

## Tech stack

- Next.js 15 (App Router) with static export (`output: "export"`)
- React 19, TypeScript
- Tailwind CSS 3
- Framer Motion
- Heroicons, React Icons
- React Hook Form
- ESLint (`next/core-web-vitals`, `next/typescript`)

## Project structure

```
src/
  app/            One folder per route (about, api-docs, architecture, backlog,
                  contact, docs, download, features, security, technology, testing)
  components/     layout/ (Navbar, Footer), features/ (Hero, Features, Demo), common/
  constants/      Document links shown on the Documents page
  lib/            Nav links and feature data, animation presets, path helpers
public/assets/    Images (logo, Turkey map, team photos)
scripts/          generate-404.js - copies index.html to 404.html for GitHub Pages
```

## Getting started

```bash
npm install
npm run dev     # dev server with Turbopack at http://localhost:3000
npm run lint    # ESLint
npm run build   # static export to out/, then generates out/404.html
```

In production builds (`NODE_ENV=production`), `next.config.ts` sets the base path and asset prefix to `/quake-path` to match the GitHub Pages URL. In development the site is served from `/`.

### Environment variables

You don't need any environment variables to run the site locally.

The deploy workflow passes these Firebase values to the build from GitHub Secrets:

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`, read from the secret `NEXT_PUBLIC_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

They are meant for a Firestore-backed contact form, but no current source file reads them. `src/lib/paths.ts` also reads an optional `NEXT_PUBLIC_BASE_PATH`.

## Deployment

The site deploys to GitHub Pages through GitHub Actions:

- **`.github/workflows/deploy.yml`** runs on every push to `main` and can also be started by hand. It:
  1. installs dependencies with `npm ci` on Node 20
  2. runs `npm run build` with the Firebase secrets
  3. generates `404.html` so that client-side routes still resolve on GitHub Pages
  4. uploads `out/` and deploys it with `actions/deploy-pages`
- **`.github/workflows/nextjs.yml`** is GitHub's starter Next.js workflow. It also builds and deploys to Pages on pushes to `main`.
- **`.github/workflows/apyguard.yml`** runs an ApyGuard security scan on every push.

For one-time repository setup (Pages source and secrets) and Firebase notes, see [GITHUB_PAGES_SETUP.md](GITHUB_PAGES_SETUP.md) and [FIREBASE_SETUP.md](FIREBASE_SETUP.md).

## Links

- Live site: https://kaancakr.github.io/quake-path/
- QuakePath app (Expo / React Native): https://github.com/kaancakr/QuakePath
