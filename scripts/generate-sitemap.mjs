import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const today = new Date().toISOString().split("T")[0];
const BASE = "https://jalupradipta.pages.dev";

const pages = [
  { loc: "/", priority: "1.0", changefreq: "weekly" },
  { loc: "/about-me", priority: "0.8", changefreq: "monthly" },
  { loc: "/project/1", priority: "0.7", changefreq: "monthly" },
];

const urlset = pages
  .map(
    (p) => `  <url>
    <loc>${BASE}${p.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>
`;

const outPath = resolve(__dirname, "..", "public", "sitemap.xml");
writeFileSync(outPath, sitemap, "utf-8");
console.log(`[sitemap] Generated → ${outPath}`);
console.log(`[sitemap] ${pages.length} URLs · ${today}`);
