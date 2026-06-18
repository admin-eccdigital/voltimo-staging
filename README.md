# Voltimo — Staging

Staging environment for client preview of Voltimo landing pages.

## Live URL

https://admin-eccdigital.github.io/voltimo-staging/

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000/voltimo-staging/](http://localhost:3000/voltimo-staging/)

## Build & export

```bash
npm run build
```

Static export goes to `out/`. GitHub Actions auto-deploys on push to `main`.

## Stack

- Next.js 15 (App Router, static export)
- TypeScript
- Tailwind CSS v4
- Lucide React icons
- Source Sans 3 (self-hosted woff2)
