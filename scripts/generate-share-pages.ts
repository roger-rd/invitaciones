import { mkdir, readFile, writeFile } from "node:fs/promises";
import { SITE_URL } from "../src/config/site";
import { events } from "../src/data/events";
import { isReservedSlug } from "../src/data/reservedSlugs";

const dist = new URL("../dist/", import.meta.url);
const template = await readFile(new URL("index.html", dist), "utf8");

function escapeHtml(value: string): string {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

for (const { slug, share } of events) {
  if (!share || isReservedSlug(slug)) continue;
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new Error(`Invalid share page slug: ${slug}`);
  }

  const url = new URL(share.url ?? `/${slug}`, SITE_URL).href;
  const image = new URL(share.image, `${SITE_URL}/`).href;
  const metadata = [
    `<title>${escapeHtml(share.title)}</title>`,
    ...[
      ["name", "description", share.description],
      ["property", "og:title", share.title],
      ["property", "og:description", share.description],
      ["property", "og:image", image],
      ["property", "og:url", url],
      ["property", "og:type", "website"],
      ["property", "og:site_name", "RDRP Te Invito"],
      ["property", "og:locale", "es_CL"],
      ["name", "twitter:card", "summary_large_image"],
      ["name", "twitter:title", share.title],
      ["name", "twitter:description", share.description],
      ["name", "twitter:image", image],
    ].map(([attribute, key, value]) =>
      `<meta ${attribute}="${key}" content="${escapeHtml(value)}" />`),
    `<link rel="canonical" href="${escapeHtml(url)}" />`,
  ].join("\n    ");

  // Only edit the head: preserve the SPA body and all asset tags verbatim.
  const html = template.replace(/<head\b[^>]*>[\s\S]*?<\/head>/i, (head) => {
    const cleaned = head
      .replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, "")
      .replace(/<meta\b[^>]*>/gi, (tag) =>
        /\b(?:name|property)\s*=\s*["'](?:description|og:[^"']*|twitter:[^"']*)["']/i.test(tag) ? "" : tag)
      .replace(/<link\b[^>]*>/gi, (tag) =>
        /\brel\s*=\s*["']canonical["']/i.test(tag) ? "" : tag);
    return cleaned.replace(/<\/head>/i, `${metadata}\n  </head>`);
  });

  const directory = new URL(`${slug}/`, dist);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL("index.html", directory), html);
  console.log(`Generated dist/${slug}/index.html`);
}
