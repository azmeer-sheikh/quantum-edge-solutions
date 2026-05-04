import { PrivacyPolicyPage } from '@/components/PrivacyPolicyPage';
import { PageSEO } from '@/components/seo/PageSEO';
import { useAppNavigate } from '@/hooks/useAppNavigate';
import { SEO_COPY } from '@/data/seoMeta';
import { breadcrumbListSchema, organizationSchema } from '@/utils/jsonLd';

export default function Privacy() {
  const navigate = useAppNavigate();
  const s = SEO_COPY.privacy;

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
            { name: 'Privacy Policy', path: '/privacy-policy' },
          ]),
        ]}
      />
      <PrivacyPolicyPage onNavigate={navigate} />
    </>
  );
}
