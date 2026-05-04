import { MarketingServicesPage } from '@/components/MarketingServicesPage';
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { useAppNavigate } from '@/hooks/useAppNavigate';
import { SEO_COPY } from '@/data/seoMeta';
import { breadcrumbListSchema, organizationSchema } from '@/utils/jsonLd';

export default function MarketingServices() {
  const navigate = useAppNavigate();
  const s = SEO_COPY.marketingServices;

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
            { name: 'Services', path: '/services' },
            { name: 'Digital Marketing', path: '/marketing-services' },
          ]),
        ]}
      />
      <div className="border-b border-[#00D0FF]/10 bg-[#14141A]">
        <div className="container mx-auto max-w-7xl px-4 py-4">
          <BreadcrumbNav
            items={[
              { name: 'Services', path: '/services' },
              { name: 'Digital Marketing', path: '/marketing-services' },
            ]}
          />
        </div>
      </div>
      <MarketingServicesPage onNavigate={navigate} />
    </>
  );
}
