/**
 * Generates dist/sitemap.xml and dist/robots.txt after the SSG build.
 * Uses Netlify's `URL` env var on deploy so the domain is always correct;
 * falls back to the placeholder used in src/config/site.ts for local builds.
 */
import { writeFileSync } from "node:fs"
import { resolve } from "node:path"

const BASE = (
  process.env.URL ||
  process.env.SITE_URL ||
  "https://carpetscare.netlify.app"
).replace(/\/$/, "")

const routes = ["/", "/services", "/commercial", "/residential", "/about", "/contact"]
const lastmod = new Date().toISOString().split("T")[0]

const urls = routes
  .map(
    (path) => `  <url>
    <loc>${BASE}${path === "/" ? "" : path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${path === "/" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("\n")

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

const robots = `User-agent: *
Allow: /

Sitemap: ${BASE}/sitemap.xml
`

const dist = resolve(process.cwd(), "dist")
writeFileSync(resolve(dist, "sitemap.xml"), sitemap)
writeFileSync(resolve(dist, "robots.txt"), robots)
console.log(`[postbuild] Wrote sitemap.xml + robots.txt (base: ${BASE})`)
