import { useEffect } from 'react';
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
  onNavigate: (page: string) => void;
}

export function BCSLandingPage({ data, onNavigate }: BCSLandingPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data.slug]);

  return (
    <>
      <div className="min-h-screen bg-white overflow-x-hidden w-full">
        <BCSNavbar cityName={data.name} citySlug={data.slug} onNavigate={onNavigate} />
        
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