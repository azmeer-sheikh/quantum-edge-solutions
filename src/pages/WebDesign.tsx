import { WebDesignPage } from '@/components/WebDesignPage';
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { useAppNavigate } from '@/hooks/useAppNavigate';
import { SEO_COPY } from '@/data/seoMeta';
import { breadcrumbListSchema, organizationSchema } from '@/utils/jsonLd';

export default function WebDesign() {
  const navigate = useAppNavigate();
  const s = SEO_COPY.webDesign;

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
            { name: 'Web Design', path: '/web-design' },
          ]),
        ]}
      />
      <div className="border-b border-[#00D0FF]/10 bg-[#14141A]">
        <div className="container mx-auto max-w-7xl px-4 py-4">
          <BreadcrumbNav
            items={[
              { name: 'Services', path: '/services' },
              { name: 'Web Design', path: '/web-design' },
            ]}
          />
        </div>
      </div>
      <WebDesignPage onNavigate={navigate} />
    </>
  );
}
