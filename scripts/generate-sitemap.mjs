/**
 * Writes public/sitemap.xml. Runs as npm `prebuild`.
 *
 * Routing is language-prefixed, so every page exists twice: /en/... and
 * /id/... . Each <url> therefore declares the full alternate set (en, id,
 * x-default) — without it Google treats the two prefixes as duplicates and
 * picks one for you.
 *
 * Bare "/" is NOT listed as its own <url>: it only client-redirects to a
 * prefix. It is the x-default target instead.
 *
 * The path list is hardcoded on purpose — placeholder or unfinished projects
 * must stay out of the sitemap. Adding a real project means adding its path
 * here by hand.
 */

import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const today = new Date().toISOString().split("T")[0];

const BASE = "https://jalupradipta.pages.dev";
const LANGS = ["en", "id"];

const paths = [
  { path: "", priority: "1.0", changefreq: "weekly" },
  { path: "/about-me", priority: "0.8", changefreq: "monthly" },
  { path: "/project/1", priority: "0.7", changefreq: "monthly" },
  { path: "/project/2", priority: "0.7", changefreq: "monthly" },
  { path: "/project/3", priority: "0.6", changefreq: "monthly" },
  { path: "/project/4", priority: "0.6", changefreq: "monthly" },
];

const alternates = (path) =>
  [
    ...LANGS.map(
      (l) =>
        `    <xhtml:link rel="alternate" hreflang="${l}" href="${BASE}/${l}${path}/" />`,
    ),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE}/" />`,
  ].join("\n");

const urls = paths.flatMap(({ path, priority, changefreq }) =>
  LANGS.map(
    // Element order is not cosmetic. sitemap.xsd declares <url> as a strict
    // sequence — loc, lastmod, changefreq, priority — with <xsd:any
    // namespace="##other"> LAST. xhtml:link is a foreign namespace, so putting
    // the alternates before <lastmod> breaks the sequence and a strict
    // validator rejects the whole file ("couldn't read sitemap"), even though
    // the XML itself parses fine.
    (lang) => `  <url>
    <loc>${BASE}/${lang}${path}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${alternates(path)}
  </url>`,
  ),
);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;

const outPath = resolve(__dirname, "..", "public", "sitemap.xml");
writeFileSync(outPath, sitemap, "utf-8");
console.log(`[sitemap] Generated → ${outPath}`);
console.log(`[sitemap] ${urls.length} URLs · ${today}`);
