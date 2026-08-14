/**
 * Per-route static <head> generator. Runs as npm `postbuild`.
 *
 * WHY THIS EXISTS
 * The app is client-rendered, so Cloudflare serves the same dist/index.html
 * for every URL. Google executes JavaScript and sees the react-helmet-async
 * output; WhatsApp, LinkedIn, Facebook and Twitter do not. Before this script
 * every shared link previewed as the same generic card, and six language-
 * prefixed URLs all returned byte-identical HTML to anything that cannot run
 * JS — a duplicate-content problem on top of a bad preview.
 *
 * Prerender packages were rejected on purpose: react-snap and
 * vite-plugin-prerender were last released in 2022, and vite-react-ssg
 * conflicts with react-router-dom v7 + react-helmet-async v3 as pinned here.
 * So: zero new dependencies, plain Node ESM, string surgery on the built
 * shell. The <body> is untouched, so each copy still hydrates as the same app.
 *
 * TITLES HAVE ONE SOURCE OF TRUTH
 * translations.js is imported directly. ProjectContent.jsx cannot be imported
 * by Node (ERR_UNKNOWN_FILE_EXTENSION on ".jsx"), so it is read as text and
 * evaluated as a data: URL module — the file is pure data with no JSX, so this
 * keeps the project list single-sourced instead of duplicating it here. If
 * someone ever puts real JSX in that file this throws with an explicit
 * message rather than silently shipping stale copy.
 *
 * OUTPUT
 *   dist/en/index.html                 dist/id/index.html
 *   dist/en/about-me/index.html        dist/id/about-me/index.html
 *   dist/en/project/<id>/index.html    dist/id/project/<id>/index.html
 *
 * dist/index.html is left in place: it is the x-default shell that bare "/"
 * serves before the client redirect. Cloudflare Pages matches static files
 * before applying _redirects, so these files win over the SPA splat without
 * any rule change.
 */

import { mkdirSync, readFileSync, writeFileSync, existsSync } from "fs";
import { dirname, join, resolve } from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const BASE = "https://jalupradipta.pages.dev";
const LANGS = ["en", "id"];
const FALLBACK_IMAGE = `${BASE}/images/profile-jalu.jpg`;
const SITE_NAME = "Jalu Pradipta";

// `--dist=<path>` lets this be tested against a synthetic shell without
// running a real build.
const distArg = process.argv.find((a) => a.startsWith("--dist="));
const DIST = distArg ? resolve(distArg.slice("--dist=".length)) : join(ROOT, "dist");

const ogLocale = (lang) => (lang === "id" ? "id_ID" : "en_US");
const bcp47 = (lang) => (lang === "id" ? "id-ID" : "en-US");

/** Escapes a string for use inside a double-quoted HTML attribute. */
const attr = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** Escapes text content so a stray `<` cannot close the surrounding tag. */
const text = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

/**
 * JSON-LD lives inside <script>, where the HTML parser only looks for
 * `</script`. Escaping `<` breaks the JSON, so break the sequence instead.
 */
const jsonLd = (data) =>
  JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");

// --- inputs -----------------------------------------------------------------

async function loadTranslations() {
  const mod = await import(
    pathToFileURL(join(ROOT, "src", "context", "translations.js")).href
  );
  if (!mod.en || !mod.id) {
    throw new Error("translations.js did not export both `en` and `id`");
  }
  return { en: mod.en, id: mod.id };
}

async function loadProjects() {
  const file = join(ROOT, "src", "assets", "components", "portofolio", "ProjectContent.jsx");
  const src = readFileSync(file, "utf8");
  let mod;
  try {
    mod = await import(
      `data:text/javascript;charset=utf-8,${encodeURIComponent(src)}`
    );
  } catch (err) {
    throw new Error(
      `Could not evaluate ProjectContent.jsx as a plain module (${err.message}). ` +
        "It must stay pure data — no JSX, no imports of .jsx/.css files — or this " +
        "script has to fall back to duplicating per-project titles.",
    );
  }
  if (!Array.isArray(mod.portfolioItems) || typeof mod.resolveProject !== "function") {
    throw new Error(
      "ProjectContent.jsx must export `portfolioItems` and `resolveProject`",
    );
  }
  return { portfolioItems: mod.portfolioItems, resolveProject: mod.resolveProject };
}

// --- schemas ----------------------------------------------------------------
// Deliberately narrower than the runtime Helmet output. Only crawlers that
// cannot run JS read these files, and those crawlers read Open Graph, not
// Schema.org. The Event timeline ItemList stays in AboutSEO.jsx alone rather
// than being copied here, where it would drift out of sync with the page.

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  givenName: "Jalu",
  familyName: "Pradipta",
  email: "jluppradipta@gmail.com",
  url: BASE,
  image: FALLBACK_IMAGE,
  jobTitle: "Backend Developer",
  sameAs: [
    "https://github.com/supramegod",
    "https://www.linkedin.com/in/jalupradipta/",
    "https://www.instagram.com/jluppradipta_728/",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Politeknik Elektronika Negeri Surabaya (PENS)",
  },
};

const websiteSchema = (lang, description) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: `${BASE}/${lang}`,
  inLanguage: bcp47(lang),
  description,
  about: personSchema,
});

const projectJsonLd = (project, lang, url) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: project.title,
  description: project.desc,
  url,
  inLanguage: bcp47(lang),
  image: project.thumbnailUrl ? `${BASE}${project.thumbnailUrl}` : FALLBACK_IMAGE,
  genre: project.category,
  keywords: (project.techStack ?? []).join(", "),
  programmingLanguage: project.techStack ?? [],
  ...(project.githubUrl && project.githubUrl !== "#"
    ? { codeRepository: project.githubUrl }
    : {}),
  author: { "@type": "Person", name: SITE_NAME, url: BASE },
});

// --- route table ------------------------------------------------------------

/**
 * One entry per file to write. `path` is the language-agnostic tail, so the
 * alternate set for a route is derived rather than repeated.
 */
function buildRoutes({ dicts, portfolioItems, resolveProject }) {
  const routes = [];

  for (const lang of LANGS) {
    const t = (key) => dicts[lang][key] ?? dicts.en[key] ?? key;

    routes.push({
      lang,
      path: "",
      out: join(lang, "index.html"),
      title: t("seo.home.title"),
      description: t("seo.home.description"),
      ogType: "website",
      image: FALLBACK_IMAGE,
      imageAlt: SITE_NAME,
      schema: [websiteSchema(lang, t("seo.home.description")), personSchema],
    });

    routes.push({
      lang,
      path: "/about-me",
      out: join(lang, "about-me", "index.html"),
      title: t("seo.about.title"),
      description: t("seo.about.description"),
      ogType: "profile",
      image: FALLBACK_IMAGE,
      imageAlt: SITE_NAME,
      schema: [personSchema],
    });

    for (const item of portfolioItems) {
      const project = resolveProject(item, lang);
      const path = `/project/${project.id}`;
      const url = `${BASE}/${lang}${path}`;
      routes.push({
        lang,
        path,
        out: join(lang, "project", String(project.id), "index.html"),
        title: `${project.title} — ${t("seo.project.titleSuffix")}`,
        description: project.desc ?? t("seo.home.description"),
        ogType: "article",
        image: project.thumbnailUrl
          ? `${BASE}${project.thumbnailUrl}`
          : FALLBACK_IMAGE,
        imageAlt: project.title,
        schema: [projectJsonLd(project, lang, url)],
      });
    }
  }

  return routes;
}

// --- head surgery -----------------------------------------------------------

/**
 * Removes the shell's default set before inserting the route's own, so a
 * crawler never sees two of anything. Every pattern here has a matching tag
 * in index.html — keep them in step when that file changes.
 */
function stripDefaults(html) {
  // Patterns must not assume the key attribute comes first: index.html carries
  // data-rh="true" ahead of name/rel/property, and anchoring on `<meta\s+name=`
  // silently matched nothing, leaving the shell's tags in place next to the
  // freshly inserted ones (six hreflang links instead of three).
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/gi, "")
    .replace(/<meta\s[^>]*\bname="description"[^>]*>\s*/gi, "")
    .replace(/<meta\s[^>]*\bname="author"[^>]*>\s*/gi, "")
    .replace(/<meta\s[^>]*\bname="keywords"[^>]*>\s*/gi, "")
    .replace(/<meta\s[^>]*\bname="robots"[^>]*>\s*/gi, "")
    .replace(/<meta\s[^>]*\bproperty="og:[^"]*"[^>]*>\s*/gi, "")
    .replace(/<meta\s[^>]*\bname="twitter:[^"]*"[^>]*>\s*/gi, "")
    .replace(/<link\s[^>]*\brel="canonical"[^>]*>\s*/gi, "")
    .replace(/<link\s[^>]*\bhreflang=[^>]*>\s*/gi, "")
    .replace(
      /<script\s+type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>\s*/gi,
      "",
    );
}

function headBlock(route) {
  const canonical = `${BASE}/${route.lang}${route.path}`;
  const alternates = [
    ...LANGS.map(
      (l) =>
        `    <link rel="alternate" hreflang="${l}" href="${BASE}/${l}${route.path}" />`,
    ),
    `    <link rel="alternate" hreflang="x-default" href="${BASE}/" />`,
  ].join("\n");

  // Every meta/link below is stamped with data-rh="true" by claimForHelmet().
  // react-helmet-async only manages tags carrying that attribute: without it
  // Helmet appends its own copies on hydration instead of replacing these,
  // leaving two robots tags, two canonicals and six hreflang links per page.
  return claimForHelmet(`    <title>${text(route.title)}</title>
    <meta name="description" content="${attr(route.description)}" />
    <meta name="author" content="${attr(SITE_NAME)}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${attr(canonical)}" />
${alternates}
    <meta property="og:title" content="${attr(route.title)}" />
    <meta property="og:description" content="${attr(route.description)}" />
    <meta property="og:type" content="${attr(route.ogType)}" />
    <meta property="og:url" content="${attr(canonical)}" />
    <meta property="og:image" content="${attr(route.image)}" />
    <meta property="og:image:alt" content="${attr(route.imageAlt)}" />
    <meta property="og:locale" content="${ogLocale(route.lang)}" />
    <meta property="og:site_name" content="${attr(SITE_NAME)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${attr(route.title)}" />
    <meta name="twitter:description" content="${attr(route.description)}" />
    <meta name="twitter:image" content="${attr(route.image)}" />
    <meta name="twitter:image:alt" content="${attr(route.imageAlt)}" />
    <script type="application/ld+json">${jsonLd(
      route.schema.length === 1 ? route.schema[0] : route.schema,
    )}</script>
`);
}

/**
 * Stamps `data-rh="true"` on every <meta> and <link> in a head fragment.
 *
 * react-helmet-async claims ownership of tags marked with `data-rh` and
 * replaces them on mount. Unmarked tags are invisible to it, so it adds a
 * second copy of each one — harmless when the values happen to match, but on
 * a route the prerenderer does not cover (a 404, say) the stale shell keeps
 * saying `robots: index, follow` next to Helmet's `noindex`.
 *
 * <title> is left alone: Helmet replaces the document title outright.
 */
function claimForHelmet(head) {
  return head.replace(/<(meta|link)\s/g, '<$1 data-rh="true" ');
}

function renderRoute(shell, route) {
  let html = stripDefaults(shell);

  // <html lang> — the shell ships one value; each copy needs its own.
  // Detect the tag separately: for whichever language the shell already
  // carries, the rewrite is a no-op, so "output unchanged" is not an error.
  if (!/<html[^>]*>/i.test(html)) {
    throw new Error("No <html> tag found in the built shell");
  }
  html = html.replace(/<html([^>]*)>/i, (_match, rest) => {
    const cleaned = rest.replace(/\s+lang="[^"]*"/i, "");
    return `<html lang="${route.lang}"${cleaned}>`;
  });

  if (!/<\/head>/i.test(html)) {
    throw new Error("No </head> found in the built shell");
  }
  return html.replace(/<\/head>/i, `${headBlock(route)}  </head>`);
}

// --- main -------------------------------------------------------------------

async function main() {
  const shellPath = join(DIST, "index.html");
  if (!existsSync(shellPath)) {
    console.log(
      `[static-head] Skipped: ${shellPath} not found. Run \`vite build\` first ` +
        "(or pass --dist=<dir>).",
    );
    return;
  }

  const shell = readFileSync(shellPath, "utf8");
  const [dicts, projects] = await Promise.all([loadTranslations(), loadProjects()]);
  const routes = buildRoutes({ dicts, ...projects });

  for (const route of routes) {
    const outPath = join(DIST, route.out);
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, renderRoute(shell, route), "utf8");
    console.log(`[static-head] ${route.out} · ${route.title}`);
  }

  console.log(
    `[static-head] ${routes.length} files written · x-default shell left at index.html`,
  );
}

main().catch((err) => {
  // Non-zero exit: a silently skipped prerender means every shared link
  // regresses to the generic preview card, and nothing else would notice.
  console.error(`[static-head] FAILED: ${err.message}`);
  process.exitCode = 1;
});
