const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.13ostoncard.com';
const ROOT = path.resolve(__dirname, '..');

const OUTPUTS = [
  path.join(ROOT, 'sitemap.xml'),
];

const ROBOTS_OUTPUTS = [
  path.join(ROOT, 'robots.txt'),
];

const SKIP_DIRS = new Set(['.git', 'node_modules', 'scripts']);

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return SKIP_DIRS.has(entry.name) ? [] : walk(fullPath);
    }
    return entry.name.endsWith('.html') ? [fullPath] : [];
  });
}

function toUrl(filePath) {
  const relativePath = path.relative(ROOT, filePath).replace(/\\/g, '/');
  if (relativePath === 'index.html') return `${BASE_URL}/`;
  return `${BASE_URL}/${relativePath}`;
}

function priorityFor(url) {
  if (url === `${BASE_URL}/`) return '1.0';
  if (url.endsWith('/articles/meta/tier-list.html')) return '0.9';
  if (url.includes('/articles/')) return '0.8';
  return '0.5';
}

function changefreqFor(url) {
  if (url === `${BASE_URL}/` || url.endsWith('/articles/meta/tier-list.html')) return 'daily';
  if (url.includes('/articles/')) return 'weekly';
  return 'monthly';
}

const urls = walk(ROOT)
  .map((filePath) => {
    const stats = fs.statSync(filePath);
    const loc = toUrl(filePath);
    return {
      loc,
      lastmod: stats.mtime.toISOString().slice(0, 10),
      changefreq: changefreqFor(loc),
      priority: priorityFor(loc),
    };
  })
  .sort((a, b) => {
    if (a.loc === `${BASE_URL}/`) return -1;
    if (b.loc === `${BASE_URL}/`) return 1;
    return a.loc.localeCompare(b.loc);
  });

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map((url) => [
    '  <url>',
    `    <loc>${url.loc}</loc>`,
    `    <lastmod>${url.lastmod}</lastmod>`,
    `    <changefreq>${url.changefreq}</changefreq>`,
    `    <priority>${url.priority}</priority>`,
    '  </url>',
  ].join('\n')),
  '</urlset>',
  '',
].join('\n');

const robots = [
  'User-agent: *',
  'Allow: /',
  '',
  `${'Sitemap'}: ${BASE_URL}/sitemap.xml`,
  '',
].join('\n');

for (const output of OUTPUTS) {
  fs.writeFileSync(output, sitemap, 'utf8');
  console.log(`Generated ${path.relative(ROOT, output)}`);
}

for (const output of ROBOTS_OUTPUTS) {
  fs.writeFileSync(output, robots, 'utf8');
  console.log(`Generated ${path.relative(ROOT, output)}`);
}
