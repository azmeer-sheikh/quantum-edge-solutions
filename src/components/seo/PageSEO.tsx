import { Helmet } from 'react-helmet-async';
import { absoluteUrl, getDefaultOgImage, getSiteUrl } from '@/config/site';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface PageSEOProps {
  title: string;
  description: string;
  keywords: string;
  path: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  noindex?: boolean;
  jsonLd?: Record<string, unknown>[];
  /** Optional Search Console HTML tag content (omit if empty). */
  gscVerification?: string;
}

export function PageSEO({
  title,
  description,
  keywords,
  path,
  ogImage,
  ogType = 'website',
  noindex = false,
  jsonLd = [],
  gscVerification,
}: PageSEOProps) {
  const site = getSiteUrl();
  const canonical = absoluteUrl(path);
  const image = ogImage || getDefaultOgImage();
  const fullTitle = title.includes('Quantum Edge') ? title : `${title} | Quantum Edge Solutions`;

  const gsc = gscVerification ?? import.meta.env.VITE_GSC_VERIFICATION;

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large'} />
      {gsc ? <meta name="google-site-verification" content={gsc} /> : null}

      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Quantum Edge Solution LLC" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
