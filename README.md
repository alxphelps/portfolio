# Portfolio — Alex Phelps

Premium cloud / DevOps consultant landing page built with **Next.js 15**, **Tailwind CSS**, and **shadcn/ui** (Radix + CVA).

## Getting started

If you ever see errors about missing `pages` or very old Next behavior, delete `node_modules` and `package-lock.json`, then reinstall — the lockfile must match `next` 15+ for this App Router project.

```bash
cd portfolio
rm -rf node_modules
npm install
npm run dev
```

On Windows PowerShell:

```powershell
cd portfolio
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize (single source of truth)

Most contact and social links live in **`src/lib/site.ts`**:

- Name, title, location, email, phone
- [LinkedIn](https://www.linkedin.com/in/alxphelps/) and [GitHub](https://github.com/alxphelps/)

**Headshot:** add a square image at **`public/headshot.png`**. Until then, the About section shows an **AP** initials placeholder (the browser requests `/headshot.png` once, then falls back).

Page copy is in **`src/components/landing/*.tsx`** and SEO metadata in **`src/app/layout.tsx`**.

## Stack

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) patterns (`components/ui/*`, `components.json`)
