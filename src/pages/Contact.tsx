import { ContactPage } from '@/components/ContactPage';
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { SEO_COPY } from '@/data/seoMeta';
import { absoluteUrl } from '@/config/site';
import { breadcrumbListSchema, organizationSchema } from '@/utils/jsonLd';

export default function Contact() {
  const s = SEO_COPY.contact;

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
            { name: 'Contact', path: '/contact' },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: s.title,
            url: absoluteUrl('/contact'),
            mainEntity: {
              '@type': 'Organization',
              name: 'Quantum Edge Solution LLC',
              url: absoluteUrl('/'),
              email: 'support@quantumedgesolution.org',
              telephone: '+1-614-405-5814',
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  contactType: 'customer support',
                  email: 'support@quantumedgesolution.org',
                  telephone: '+1-614-405-5814',
                  areaServed: 'US',
                  availableLanguage: ['English'],
                },
              ],
            },
          },
        ]}
      />
      <div className="border-b border-[#00D0FF]/10 bg-[#14141A]">
        <div className="container mx-auto max-w-7xl px-4 py-4">
          <BreadcrumbNav items={[{ name: 'Contact', path: '/contact' }]} />
        </div>
      </div>
      <ContactPage />
    </>
  );
}
