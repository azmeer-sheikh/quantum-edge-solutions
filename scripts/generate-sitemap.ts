/**
 * Writes dist/sitemap.xml and dist/robots.txt after production build.
 * Run: npm run generate:sitemap (or via post-build hook).
 */
import { mkdirSync, writeFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { blogArticles } from '../src/data/blogArticles';
import { portfolioCaseStudies } from '../src/data/portfolioCaseStudies';
import { STATIC_SITEMAP_PATHS } from '../src/config/sitemapRoutes';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const distDir = join(root, 'dist');

const SITE = (process.env.VITE_SITE_URL || 'https://quantumedgesolution.org').replace(/\/$/, '');

function url(loc: string, changefreq: string, priority: string) {
  const full = loc.startsWith('http') ? loc : `${SITE}${loc.startsWith('/') ? loc : `/${loc}`}`;
  return `  <url>
    <loc>${full}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function main() {
  if (!existsSync(distDir)) {
    console.warn('dist/ not found; run `vite build` first. Skipping sitemap generation.');
    return;
  }

  const entries: string[] = [];

  for (const p of STATIC_SITEMAP_PATHS) {
    const pri = p === '/' ? '1.0' : '0.8';
    const cf = p.startsWith('/blog') || p.startsWith('/portfolio') ? 'weekly' : 'monthly';
    entries.push(url(p, cf, pri));
  }

  for (const a of blogArticles) {
    entries.push(url(`/blog/${a.slug}`, 'monthly', '0.7'));
  }

  for (const s of portfolioCaseStudies) {
    entries.push(url(`/portfolio/${s.slug}`, 'monthly', '0.7'));
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;

  writeFileSync(join(distDir, 'sitemap.xml'), xml, 'utf8');

  const robots = `User-agent: *
Allow: /

# Admin areas — do not index (also marked noindex in HTML)
Disallow: /admin
Disallow: /admin-setup

Sitemap: ${SITE}/sitemap.xml
`;

  writeFileSync(join(distDir, 'robots.txt'), robots, 'utf8');
  console.log(`Wrote ${join(distDir, 'sitemap.xml')} and robots.txt (${entries.length} URLs)`);
}

main();
