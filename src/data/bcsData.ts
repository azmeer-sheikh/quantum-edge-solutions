export interface BCSCityData {
  name: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheading: string;
  localSEOContent: {
    heading: string;
    paragraphs: string[];
  };
  structuredData: {
    '@context': string;
    '@type': string;
    name: string;
    description: string;
    areaServed: {
      '@type': string;
      name: string;
      '@id': string;
    };
    serviceType: string[];
    telephone: string;
    email: string;
    url: string;
  };
}

export const bcsData: Record<string, BCSCityData> = {
  austin: {
    name: 'Austin',
    slug: 'austin',
    metaTitle: 'Austin Business Communication Solutions | IT Services & Cabling',
    metaDescription: 'Professional IT services, structured cabling, security cameras, and network solutions in Austin, TX. Expert managed IT and cybersecurity. Call (512) 257-1433.',
    heroHeadline: 'Austin Business Communication Solutions',
    heroSubheading: 'Professional IT Infrastructure & Network Solutions for Austin Businesses',
    localSEOContent: {
      heading: 'Trusted IT Services in Austin, Texas',
      paragraphs: [
        'Business Communication Solutions provides comprehensive IT infrastructure services to Austin businesses. Our expert team delivers cutting-edge network solutions, structured cabling, and security systems tailored to your needs.',
        'Serving Austin and surrounding areas with rapid response times and personalized service. From small businesses to large enterprises, we provide scalable solutions that grow with your company.',
        'Our Austin-based technicians understand local business challenges and deliver reliable technology solutions that keep your operations running smoothly.'
      ]
    },
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Business Communication Solutions - Austin',
      description: 'IT Services, Data Cabling, and Network Solutions in Austin, TX',
      areaServed: {
        '@type': 'City',
        name: 'Austin, Texas',
        '@id': 'https://en.wikipedia.org/wiki/Austin,_Texas'
      },
      serviceType: [
        'Data Installation Cabling Services',
        'Fiber Cabling Installation',
        'Security Camera Installation',
        'Computer Network Installation',
        'Managed IT Services',
        'Cybersecurity Services',
        'Access Control Installation Services',
        'VOIP Phone System Services'
      ],
      telephone: '+15122571433',
      email: 'austin@bcs-ip.com',
      url: 'https://www.bcs-ip.com'
    }
  },
  roundRock: {
    name: 'Round Rock',
    slug: 'round-rock',
    metaTitle: 'Round Rock IT Services | Business Communication Solutions',
    metaDescription: 'Expert IT services, fiber cabling, and security systems for Round Rock, TX businesses. Professional network installation and managed IT. Call (512) 257-1433.',
    heroHeadline: 'Round Rock Business Communication Solutions',
    heroSubheading: 'Advanced IT Infrastructure & Security Systems for Round Rock Enterprises',
    localSEOContent: {
      heading: 'Professional IT Solutions for Round Rock Businesses',
      paragraphs: [
        'Business Communication Solutions delivers enterprise-grade IT services to Round Rock\'s growing business community. We specialize in network infrastructure, security systems, and managed IT solutions.',
        'Our Round Rock clients benefit from local expertise and rapid service response. We provide comprehensive technology solutions for businesses of all sizes throughout the Round Rock area.',
        'From structured cabling to advanced cybersecurity, we help Round Rock businesses build reliable technology foundations that support growth and efficiency.'
      ]
    },
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Business Communication Solutions - Round Rock',
      description: 'IT Services, Network Cabling, and Security Solutions in Round Rock, TX',
      areaServed: {
        '@type': 'City',
        name: 'Round Rock, Texas',
        '@id': 'https://en.wikipedia.org/wiki/Round_Rock,_Texas'
      },
      serviceType: [
        'Data Installation Cabling Services',
        'Fiber Cabling Installation',
        'Security Camera Installation',
        'Computer Network Installation',
        'Managed IT Services',
        'Cybersecurity Services',
        'Access Control Installation Services',
        'VOIP Phone System Services'
      ],
      telephone: '+15122571433',
      email: 'austin@bcs-ip.com',
      url: 'https://www.bcs-ip.com'
    }
  },
  cedarPark: {
    name: 'Cedar Park',
    slug: 'cedar-park',
    metaTitle: 'Cedar Park IT & Cabling Services | Business Communication Solutions',
    metaDescription: 'Top-rated IT services, data cabling, and security solutions in Cedar Park, TX. Managed IT, network installation, and VOIP systems. Call (512) 257-1433.',
    heroHeadline: 'Cedar Park Business Communication Solutions',
    heroSubheading: 'Comprehensive Network Infrastructure & IT Services for Cedar Park',
    localSEOContent: {
      heading: 'Expert IT Infrastructure in Cedar Park, Texas',
      paragraphs: [
        'Business Communication Solutions is Cedar Park\'s trusted provider of professional IT and network infrastructure services. We deliver enterprise-level solutions designed for reliability and performance.',
        'Our Cedar Park team provides fast, professional service with a focus on minimizing downtime and maximizing your technology ROI. We serve businesses throughout Cedar Park and surrounding communities.',
        'Whether you need network cabling, security systems, or managed IT services, our certified technicians deliver solutions that meet Cedar Park\'s business standards.'
      ]
    },
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Business Communication Solutions - Cedar Park',
      description: 'IT Services, Cabling, and Network Solutions in Cedar Park, TX',
      areaServed: {
        '@type': 'City',
        name: 'Cedar Park, Texas',
        '@id': 'https://en.wikipedia.org/wiki/Cedar_Park,_Texas'
      },
      serviceType: [
        'Data Installation Cabling Services',
        'Fiber Cabling Installation',
        'Security Camera Installation',
        'Computer Network Installation',
        'Managed IT Services',
        'Cybersecurity Services',
        'Access Control Installation Services',
        'VOIP Phone System Services'
      ],
      telephone: '+15122571433',
      email: 'austin@bcs-ip.com',
      url: 'https://www.bcs-ip.com'
    }
  },
  leander: {
    name: 'Leander',
    slug: 'leander',
    metaTitle: 'Leander IT Services & Security | Business Communication Solutions',
    metaDescription: 'Professional IT services, network cabling, and security systems in Leander, TX. Expert managed IT, fiber installation, and VOIP. Call (512) 257-1433.',
    heroHeadline: 'Leander Business Communication Solutions',
    heroSubheading: 'Reliable IT Services & Network Solutions for Leander Businesses',
    localSEOContent: {
      heading: 'IT Services and Network Infrastructure in Leander, TX',
      paragraphs: [
        'Business Communication Solutions serves Leander businesses with comprehensive IT infrastructure and communication technology services. We help local companies stay competitive with cutting-edge solutions.',
        'Our Leander clients appreciate our commitment to responsive, personalized service. We provide enterprise-grade solutions scaled appropriately for businesses throughout the Leander area.',
        'With expertise in structured cabling, cybersecurity, and managed IT, we\'re the technology partner Leander businesses trust for reliable, future-proof solutions.'
      ]
    },
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Business Communication Solutions - Leander',
      description: 'IT Services, Security Systems, and Network Solutions in Leander, TX',
      areaServed: {
        '@type': 'City',
        name: 'Leander, Texas',
        '@id': 'https://en.wikipedia.org/wiki/Leander,_Texas'
      },
      serviceType: [
        'Data Installation Cabling Services',
        'Fiber Cabling Installation',
        'Security Camera Installation',
        'Computer Network Installation',
        'Managed IT Services',
        'Cybersecurity Services',
        'Access Control Installation Services',
        'VOIP Phone System Services'
      ],
      telephone: '+15122571433',
      email: 'austin@bcs-ip.com',
      url: 'https://www.bcs-ip.com'
    }
  },
  pflugerville: {
    name: 'Pflugerville',
    slug: 'pflugerville',
    metaTitle: 'Pflugerville IT & Network Solutions | Business Communication Solutions',
    metaDescription: 'Expert IT services, data cabling, and security systems in Pflugerville, TX. Managed IT, network infrastructure, and VOIP solutions. Call (512) 257-1433.',
    heroHeadline: 'Pflugerville Business Communication Solutions',
    heroSubheading: 'Professional IT Infrastructure & Security for Pflugerville Enterprises',
    localSEOContent: {
      heading: 'Network Solutions and IT Services in Pflugerville, Texas',
      paragraphs: [
        'Business Communication Solutions brings enterprise-level IT services to Pflugerville\'s dynamic business community. We specialize in robust network infrastructure and security solutions.',
        'We understand the needs of Pflugerville\'s diverse business landscape. Our local presence ensures rapid response times and personalized attention to your technology needs.',
        'From consultation to ongoing support, we provide Pflugerville businesses with reliable IT infrastructure, security systems, and communication solutions for today\'s digital marketplace.'
      ]
    },
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Business Communication Solutions - Pflugerville',
      description: 'IT Services, Network Cabling, and Security Solutions in Pflugerville, TX',
      areaServed: {
        '@type': 'City',
        name: 'Pflugerville, Texas',
        '@id': 'https://en.wikipedia.org/wiki/Pflugerville,_Texas'
      },
      serviceType: [
        'Data Installation Cabling Services',
        'Fiber Cabling Installation',
        'Security Camera Installation',
        'Computer Network Installation',
        'Managed IT Services',
        'Cybersecurity Services',
        'Access Control Installation Services',
        'VOIP Phone System Services'
      ],
      telephone: '+15122571433',
      email: 'austin@bcs-ip.com',
      url: 'https://www.bcs-ip.com'
    }
  }
};
