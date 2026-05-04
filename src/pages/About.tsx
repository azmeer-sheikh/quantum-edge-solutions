import { AboutPage } from '@/components/AboutPage';
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { SEO_COPY } from '@/data/seoMeta';
import { absoluteUrl } from '@/config/site';
import { breadcrumbListSchema, organizationSchema } from '@/utils/jsonLd';

export default function About() {
  const s = SEO_COPY.about;

  return (
    <>
      <PageSEO
        title={s.title}
        description={s.description}
        keywords={s.keywords}
        path={s.path}
        jsonLd={[
          organizationSchema(),
          breadcrumbListSchema([
            { name: 'Home', path: '/' },
            { name: 'Platform', path: '/platform' },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: s.title,
            description: s.description,
            url: absoluteUrl('/platform'),
            isPartOf: { '@type': 'WebSite', url: absoluteUrl('/') },
            mainEntity: { '@type': 'Organization', url: absoluteUrl('/') },
          },
        ]}
      />
      <div className="border-b border-[#00D0FF]/10 bg-[#14141A]">
        <div className="container mx-auto max-w-7xl px-4 py-4">
          <BreadcrumbNav items={[{ name: 'Platform', path: '/platform' }]} />
        </div>
      </div>
      <AboutPage />
    </>
  );
}
