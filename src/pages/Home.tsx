import { HomePage } from '@/components/HomePage';
import { PageSEO } from '@/components/seo/PageSEO';
import { useAppNavigate } from '@/hooks/useAppNavigate';
import { SEO_COPY } from '@/data/seoMeta';
import { organizationSchema, webSiteWithSearchActionSchema } from '@/utils/jsonLd';

export default function Home() {
  const navigate = useAppNavigate();
  const s = SEO_COPY.home;

  return (
    <>
      <PageSEO
        title={s.title}
        description={s.description}
        keywords={s.keywords}
        path={s.path}
        jsonLd={[organizationSchema(), webSiteWithSearchActionSchema()]}
      />
      <HomePage onNavigate={navigate} />
    </>
  );
}
