import { TermsOfServicePage } from '@/components/TermsOfServicePage';
import { PageSEO } from '@/components/seo/PageSEO';
import { useAppNavigate } from '@/hooks/useAppNavigate';
import { SEO_COPY } from '@/data/seoMeta';
import { breadcrumbListSchema, organizationSchema } from '@/utils/jsonLd';

export default function Terms() {
  const navigate = useAppNavigate();
  const s = SEO_COPY.terms;

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
            { name: 'Terms of Service', path: '/terms-of-service' },
          ]),
        ]}
      />
      <TermsOfServicePage onNavigate={navigate} />
    </>
  );
}
