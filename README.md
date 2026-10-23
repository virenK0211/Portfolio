# Virendra Prajapati — Portfolio

A responsive single-page portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The build runs TypeScript checks, generates the optimized Vite site in `dist/`, and writes a sitemap. Set `VITE_SITE_URL` to the canonical production origin when building outside Vercel; otherwise the sitemap generator uses Vercel's production URL or the configured project domain.

## Update portfolio details

- Edit `src/data.ts` to update the profile, skills, projects, links, experience, education, and achievements.
- Replace `public/resume.pdf` with the latest PDF, keeping the same filename so the résumé links continue to work.
- Project cards link only to the GitHub repositories currently present on the profile. Add a `liveDemo` URL to the project data and card when a real demo is available; no demo links are shown until then.
- The experience and skills are based on the supplied résumé. Update them as your experience changes.

## Deploy to Vercel

1. Push this project to a GitHub repository (see the GitHub setup below).
2. Sign in to [Vercel](https://vercel.com/) and choose **Add New → Project**.
3. Import the repository. Vercel detects Vite; the included `vercel.json` sets `npm run build` and `dist`.
4. Deploy. Subsequent pushes to the production branch trigger new deployments.
5. Set `VITE_SITE_URL` to the final production origin in Vercel project settings if using a custom domain, then redeploy so the generated sitemap uses that canonical URL.

There are no environment variables or third-party form services: contact uses `mailto:` and telephone links, so no credentials or secret keys are required.

## GitHub setup

If the project has not yet been pushed to a repository:

```bash
git init
git add .
git commit -m "Build Virendra Prajapati portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/virendra-prajapati-portfolio.git
git push -u origin main
```

Create an empty repository with that name on GitHub first. If you already have a remote, verify it with `git remote -v` before adding another one.

## Personal details and assets

The current content uses the name, email, GitHub/LinkedIn URLs, phone number, location, education, project summaries, achievements, experience, and Forage certification supplied in the résumé and follow-up. The supplied résumé PDF is in `public/resume.pdf`. The abstract project illustrations are generated in CSS; they are visual treatments, not claimed product screenshots.

Before sharing the public site, review the phone number, location, education/CGPA, and all contact details. Add real screenshots or live demo URLs only when you have them. The projects do not currently have live-demo links.
