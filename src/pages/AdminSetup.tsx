import { AdminSetup } from '@/components/AdminSetup';
import { PageSEO } from '@/components/seo/PageSEO';
import { SEO_COPY } from '@/data/seoMeta';

export default function AdminSetupPage() {
  const s = SEO_COPY.adminSetup;

  return (
    <>
      <PageSEO
        title={s.title}
        description={s.description}
        keywords={s.keywords}
        path={s.path}
        noindex
        jsonLd={[]}
      />
      <AdminSetup />
    </>
  );
}
