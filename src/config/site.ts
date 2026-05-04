/** Canonical site origin (no trailing slash). Override with VITE_SITE_URL. */
export function getSiteUrl(): string {
  const raw = import.meta.env.VITE_SITE_URL || 'https://quantumedgesolution.org';
  return raw.replace(/\/$/, '');
}

export const SITE_NAME = 'Quantum Edge Solution LLC';

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  if (!path || path === '/') return base;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}

export function getDefaultOgImage(): string {
  return import.meta.env.VITE_OG_IMAGE || `${getSiteUrl()}/og-default.png`;
}
