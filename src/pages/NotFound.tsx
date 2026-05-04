import { NotFoundPage } from '@/components/NotFoundPage';
import { PageSEO } from '@/components/seo/PageSEO';
import { useAppNavigate } from '@/hooks/useAppNavigate';
import { SEO_COPY } from '@/data/seoMeta';

export default function NotFound() {
  const navigate = useAppNavigate();
  const s = SEO_COPY.notFound;

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
      <NotFoundPage onNavigate={navigate} />
    </>
  );
}
