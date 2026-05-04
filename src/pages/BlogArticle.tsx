import { useParams } from 'react-router-dom';
import { BlogArticlePage } from '@/components/BlogArticlePage';
import NotFound from '@/pages/NotFound';
import { PageSEO } from '@/components/seo/PageSEO';
import { useAppNavigate } from '@/hooks/useAppNavigate';
import { blogArticles } from '@/data/blogArticles';
import { absoluteUrl } from '@/config/site';
import { breadcrumbListSchema, organizationSchema } from '@/utils/jsonLd';

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useAppNavigate();
  const article = blogArticles.find((a) => a.slug === slug);

  if (!slug || !article) {
    return <NotFound />;
  }

  const path = `/blog/${article.slug}`;

  const blogPosting = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.date,
    author: { '@type': 'Person', name: article.author },
    publisher: { '@type': 'Organization', name: 'Quantum Edge Solution LLC', url: absoluteUrl('/') },
    mainEntityOfPage: absoluteUrl(path),
  };

  return (
    <>
      <PageSEO
        title={`${article.title} | Quantum Edge Insights`}
        description={article.excerpt}
        keywords={`${article.category}, digital marketing, SEO, ${article.title}`}
        path={path}
        ogType="article"
        ogImage={article.image}
        jsonLd={[
          organizationSchema(),
          blogPosting,
          breadcrumbListSchema([
            { name: 'Home', path: '/' },
            { name: 'Insights', path: '/blog' },
            { name: article.title, path },
          ]),
        ]}
      />
      <BlogArticlePage slug={article.slug} onNavigate={navigate} />
    </>
  );
}
