import { ServicesPage } from '@/components/ServicesPage';
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { useAppNavigate } from '@/hooks/useAppNavigate';
import { SEO_COPY } from '@/data/seoMeta';
import {
  breadcrumbListSchema,
  itemListServicesSchema,
  organizationSchema,
  professionalServiceSchema,
} from '@/utils/jsonLd';

const SERVICE_ENTRIES = [
  {
    name: 'SEO Services',
    description: 'Technical, local, and content SEO to grow organic visibility and qualified traffic.',
    path: '/seo-services',
  },
  {
    name: 'Web Design & Development',
    description: 'High-converting, fast, and accessible websites built for your brand and goals.',
    path: '/web-design',
  },
  {
    name: 'Digital Marketing',
    description: 'Performance marketing across paid, social, and lifecycle channels with clear ROI.',
    path: '/marketing-services',
  },
];

export default function Services() {
  const navigate = useAppNavigate();
  const s = SEO_COPY.services;

  return (
    <>
      <PageSEO
        title={s.title}
        description={s.description}
        keywords={s.keywords}
        path={s.path}
        jsonLd={[
          organizationSchema(),
          professionalServiceSchema(),
          itemListServicesSchema(SERVICE_ENTRIES),
          breadcrumbListSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
          ]),
        ]}
      />
      <div className="border-b border-[#00D0FF]/10 bg-[#14141A]">
        <div className="container mx-auto max-w-7xl px-4 py-4">
          <BreadcrumbNav items={[{ name: 'Services', path: '/services' }]} />
        </div>
      </div>
      <ServicesPage onNavigate={navigate} />
    </>
  );
}
