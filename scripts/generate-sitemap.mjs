import { writeFile } from 'node:fs/promises'

const rawSiteUrl =
  process.env.VITE_SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.URL ||
  process.env.VERCEL_URL ||
  'https://virendra-prajapati-portfolio.vercel.app'

const siteUrl = new URL(
  rawSiteUrl.startsWith('http') ? rawSiteUrl : `https://${rawSiteUrl}`,
).origin
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`

await writeFile(new URL('../dist/sitemap.xml', import.meta.url), sitemap)
await writeFile(
  new URL('../dist/robots.txt', import.meta.url),
  `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`,
)
