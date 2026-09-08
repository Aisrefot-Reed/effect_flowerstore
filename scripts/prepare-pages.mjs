#!/usr/bin/env node
/**
 * Post-process the static Pages export produced by `build:pages`.
 *
 * Vite + TanStack prerender write a fully-static site into `dist/client/`
 * (prerendered `index.html` + `assets/` + copied `public/`). This script adds
 * the two GitHub Pages conventions that make the single-page site robust:
 *
 *   - `404.html` — GitHub Pages serves this for any unknown path, so e.g. deep
 *     links / direct asset misses fall back to the page.
 *   - `.nojekyll` — stops Pages from running Jekyll over the artifacts (Jekyll
 *     can silently drop/rewrite files and paths, incl. underscore-prefixed).
 */
import { copyFileSync, existsSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const siteRoot = join(root, "dist", "client");

function main() {
  if (!existsSync(siteRoot)) {
    console.error(`[prepare-pages] missing client build output: ${siteRoot}`);
    process.exit(1);
  }

  const indexHtml = join(siteRoot, "index.html");
  if (!existsSync(indexHtml)) {
    console.error(
      `[prepare-pages] no prerendered index.html found in ${siteRoot}. ` +
        "Run `npm run build:pages` (prerender must produce dist/client/index.html) first.",
    );
    process.exit(1);
  }

  copyFileSync(indexHtml, join(siteRoot, "404.html"));
  writeFileSync(join(siteRoot, ".nojekyll"), "");

  const entries = readdirSync(siteRoot).sort();
  console.log("[prepare-pages] GitHub Pages bundle ready in dist/client:");
  console.log(`  - index.html, 404.html, .nojekyll`);
  console.log(`  - ${entries.length} top-level entry(ies)`);
}

main();