import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { BCSCityData } from '../../data/bcsData';
import { BCSNavbar } from './BCSNavbar';
import { BCSHeroNew } from './BCSHeroNew';
import { BCSServices } from './BCSServices';
import { BCSBenefits } from './BCSBenefits';
import { BCSPortfolio } from './BCSPortfolio';
import { BCSTestimonials } from './BCSTestimonials';
import { BCSLocalSEO } from './BCSLocalSEO';
import { BCSBusinessInfo } from './BCSBusinessInfo';
import { BCSContact } from './BCSContact';
import { BCSFooter } from './BCSFooter';

interface BCSLandingPageProps {
  data: BCSCityData;
}

export function BCSLandingPage({ data }: BCSLandingPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data.slug]);

  return (
    <>
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://quantumedgesolutions.com/bussiness-communication-solution/${data.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.metaTitle} />
        <meta name="twitter:description" content={data.metaDescription} />
        <link rel="canonical" href={`https://quantumedgesolutions.com/bussiness-communication-solution/${data.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(data.structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-white overflow-x-hidden w-full">
        <BCSNavbar cityName={data.name} citySlug={data.slug} />
        
        <BCSHeroNew 
          headline={data.heroHeadline}
          subheading={data.heroSubheading}
          cityName={data.name}
        />
        
        <BCSServices cityName={data.name} />
        
        <BCSBenefits cityName={data.name} />
        
        <BCSPortfolio cityName={data.name} />
        
        <BCSTestimonials cityName={data.name} />
        
        <BCSLocalSEO 
          heading={data.localSEOContent.heading}
          paragraphs={data.localSEOContent.paragraphs}
          cityName={data.name}
        />
        
        <BCSBusinessInfo cityName={data.name} />
        
        <BCSContact cityName={data.name} />
        
        <BCSFooter />
      </div>
    </>
  );
}