import { RefundPolicyPage } from '@/components/RefundPolicyPage';
import { PageSEO } from '@/components/seo/PageSEO';
import { useAppNavigate } from '@/hooks/useAppNavigate';
import { SEO_COPY } from '@/data/seoMeta';
import { breadcrumbListSchema, organizationSchema } from '@/utils/jsonLd';

export default function Refund() {
  const navigate = useAppNavigate();
  const s = SEO_COPY.refund;

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
            { name: 'Refund Policy', path: '/refund-policy' },
          ]),
        ]}
      />
      <RefundPolicyPage onNavigate={navigate} />
    </>
  );
}
