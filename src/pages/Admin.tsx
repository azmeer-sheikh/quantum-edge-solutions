import { AdminPage } from '@/components/AdminPage';
import { PageSEO } from '@/components/seo/PageSEO';
import { SEO_COPY } from '@/data/seoMeta';

export default function Admin() {
  const s = SEO_COPY.admin;

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
      <AdminPage />
    </>
  );
}
