import { absoluteUrl } from '@/config/site';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Quantum Edge Solution LLC',
    url: absoluteUrl('/'),
    logo: absoluteUrl('/og-default.png'),
    email: 'support@quantumedgesolution.org',
    telephone: '+1-614-405-5814',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Fort Worth',
      addressLocality: 'Fort Worth',
      addressRegion: 'TX',
      postalCode: '76102',
      addressCountry: 'US',
    },
    sameAs: [
      'https://www.linkedin.com/company/quantumedge',
      'https://twitter.com/quantumedge',
      'https://www.facebook.com/quantumedge',
    ],
  };
}

export function professionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Quantum Edge Solution LLC',
    image: absoluteUrl('/og-default.png'),
    url: absoluteUrl('/'),
    telephone: '+1-614-405-5814',
    email: 'support@quantumedgesolution.org',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Fort Worth',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '50',
    },
  };
}

export function webSiteWithSearchActionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Quantum Edge Solution LLC',
    url: absoluteUrl('/'),
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${absoluteUrl('/blog')}?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function breadcrumbListSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function itemListServicesSchema(
  services: { name: string; description: string; path: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: s.name,
        description: s.description,
        url: absoluteUrl(s.path),
        provider: { '@id': absoluteUrl('/') },
      },
    })),
  };
}
