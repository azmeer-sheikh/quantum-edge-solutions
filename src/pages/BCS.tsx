import { useParams } from 'react-router-dom';
import { BCSLandingPage } from '@/components/bcs/BCSLandingPage';
import NotFound from '@/pages/NotFound';
import { PageSEO } from '@/components/seo/PageSEO';
import { useAppNavigate } from '@/hooks/useAppNavigate';
import { bcsData } from '@/data/bcsData';
import { breadcrumbListSchema } from '@/utils/jsonLd';

const CITY_MAP: Record<string, keyof typeof bcsData> = {
  austin: 'austin',
  'round-rock': 'roundRock',
  'cedar-park': 'cedarPark',
  leander: 'leander',
  pflugerville: 'pflugerville',
};

export default function BCS() {
  const { city } = useParams<{ city: string }>();
  const navigate = useAppNavigate();
  const key = city ? CITY_MAP[city] : undefined;
  const data = key ? bcsData[key] : undefined;

  if (!city || !data) {
    return <NotFound />;
  }

  const path = `/bussiness-communication-solution/${data.slug}`;

  return (
    <>
      <PageSEO
        title={data.metaTitle}
        description={data.metaDescription}
        keywords={`business communication solutions, IT services, structured cabling, ${data.name}, Texas`}
        path={path}
        jsonLd={[
          data.structuredData as Record<string, unknown>,
          breadcrumbListSchema([
            { name: 'Home', path: '/' },
            { name: 'Business Communication Solutions', path: '/bussiness-communication-solution/austin' },
            { name: data.name, path },
          ]),
        ]}
      />
      <BCSLandingPage data={data} onNavigate={navigate} />
    </>
  );
}
