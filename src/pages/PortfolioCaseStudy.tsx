import { useParams } from 'react-router-dom';
import { PortfolioCaseStudyPage } from '@/components/PortfolioCaseStudyPage';
import NotFound from '@/pages/NotFound';
import { PageSEO } from '@/components/seo/PageSEO';
import { useAppNavigate } from '@/hooks/useAppNavigate';
import { portfolioCaseStudies } from '@/data/portfolioCaseStudies';
import { absoluteUrl } from '@/config/site';
import { breadcrumbListSchema, organizationSchema } from '@/utils/jsonLd';

export default function PortfolioCaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useAppNavigate();
  const study = portfolioCaseStudies.find((s) => s.slug === slug);

  if (!slug || !study) {
    return <NotFound />;
  }

  const path = `/portfolio/${study.slug}`;

  const caseStudySchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: study.title,
    description: study.summary,
    image: study.image,
    about: { '@type': 'Organization', name: study.client },
    url: absoluteUrl(path),
    articleSection: 'Case Study',
  };

  return (
    <>
      <PageSEO
        title={`${study.title} | Case Study`}
        description={study.summary}
        keywords={`${study.category}, case study, ${study.industry}, digital marketing`}
        path={path}
        ogType="article"
        ogImage={study.image}
        jsonLd={[
          organizationSchema(),
          caseStudySchema,
          breadcrumbListSchema([
            { name: 'Home', path: '/' },
            { name: 'Case Studies', path: '/portfolio' },
            { name: study.title, path },
          ]),
        ]}
      />
      <PortfolioCaseStudyPage slug={study.slug} onNavigate={navigate} />
    </>
  );
}
