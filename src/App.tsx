import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ServicesPage } from './components/ServicesPage';
import { SEOServicesPage } from './components/SEOServicesPage';
import { WebDesignPage } from './components/WebDesignPage';
import { MarketingServicesPage } from './components/MarketingServicesPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsOfServicePage } from './components/TermsOfServicePage';
import { RefundPolicyPage } from './components/RefundPolicyPage';
import { AboutPage } from './components/AboutPage';
import { PortfolioPage } from './components/PortfolioPage';
import { BlogPage } from './components/BlogPage';
import { ContactPage } from './components/ContactPage';
import { AdminPage } from './components/AdminPage';
import { AdminSetup } from './components/AdminSetup';
import { NotFoundPage } from './components/NotFoundPage';
import { SEOHead } from './components/SEOHead';
import { BCSLandingPage } from './components/bcs/BCSLandingPage';
import { BCSLoader } from './components/bcs/BCSLoader';
import { CookieConsent } from './components/CookieConsent';
import { bcsData } from './data/bcsData';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(false);

  // Check URL for routes on mount
  useEffect(() => {
    const path = window.location.pathname;
    const hash = window.location.hash.replace('#', '');
    
    // Page slug mapping
    const pageMap: Record<string, string> = {
      '/': 'home',
      '/home': 'home',
      '/services': 'services',
      '/seo-services': 'seo-services',
      '/web-design': 'web-design',
      '/marketing-services': 'marketing-services',
      '/about': 'about',
      '/portfolio': 'portfolio',
      '/blog': 'blog',
      '/contact': 'contact',
      '/privacy-policy': 'privacy-policy',
      '/terms-of-service': 'terms-of-service',
      '/refund-policy': 'refund-policy',
    };

    // Handle clean URL paths
    if (path.startsWith('/bussiness-communication-solution/')) {
      const citySlug = path.replace('/bussiness-communication-solution/', '');
      if (citySlug) {
        setCurrentPage(`bussiness-communication-solution/${citySlug}`);
      } else {
        // Default to Austin if no city specified
        window.history.replaceState(null, '', '/bussiness-communication-solution/austin');
        setCurrentPage('bussiness-communication-solution/austin');
      }
    }
    // Admin routes still use hash
    else if (hash === 'admin' || hash === 'admin-setup') {
      setCurrentPage(hash);
    }
    // Handle regular pages with slug-based routing
    else if (pageMap[path]) {
      setCurrentPage(pageMap[path]);
    }
    // Legacy hash support - redirect to clean URLs
    else if (hash && pageMap[`/${hash}`]) {
      window.history.replaceState(null, '', `/${hash}`);
      setCurrentPage(hash);
    }
    // Default to home for root path
    else if (path === '/' || path === '') {
      setCurrentPage('home');
    }
    // 404 for unknown routes
    else {
      setCurrentPage('404');
    }

    // Log admin access info to console
    console.log('%c🎯 quantum Edge Solutions - Admin Panel Access', 'color: #00D0FF; font-size: 16px; font-weight: bold;');
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #75FF00;');
    console.log('%c📍 Admin Login:', 'color: #00D0FF; font-weight: bold;', 'window.location.hash = "admin"');
    console.log('%c📍 Admin Setup:', 'color: #00D0FF; font-weight: bold;', 'window.location.hash = "admin-setup"');
    console.log('%c📍 Contact Form:', 'color: #00D0FF; font-weight: bold;', '/contact');
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #75FF00;');
    console.log('%c💡 Tip:', 'color: #75FF00; font-weight: bold;', 'Click "Admin" in footer for quick access');
    console.log('%c📖 Docs:', 'color: #75FF00; font-weight: bold;', 'See ADMIN_CREDENTIALS.md for full guide');
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #75FF00;');

    // Listen for URL changes
    const handlePopState = () => {
      const newPath = window.location.pathname;
      const newHash = window.location.hash.replace('#', '');
      
      if (newPath.startsWith('/bussiness-communication-solution/')) {
        const citySlug = newPath.replace('/bussiness-communication-solution/', '');
        setCurrentPage(`bussiness-communication-solution/${citySlug || 'austin'}`);
      } else if (newHash === 'admin' || newHash === 'admin-setup') {
        setCurrentPage(newHash);
      } else if (pageMap[newPath]) {
        setCurrentPage(pageMap[newPath]);
      } else if (newPath === '/' || newPath === '') {
        setCurrentPage('home');
      } else {
        setCurrentPage('404');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handleNavigate = (page: string) => {
    // Show loader for BCS page transitions
    if (page.startsWith('bussiness-communication-solution/')) {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentPage(page);
        const path = `/${page}`;
        window.history.pushState(null, '', path);
        window.scrollTo({ top: 0, behavior: 'instant' });
        setIsLoading(false);
      }, 300);
    }
    // Admin pages use hash routing
    else if (page === 'admin' || page === 'admin-setup') {
      setCurrentPage(page);
      window.location.hash = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // All other pages use clean slug URLs
    else {
      setCurrentPage(page);
      const path = page === 'home' ? '/' : `/${page}`;
      window.history.pushState(null, '', path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderPage = () => {
    // Handle BCS landing pages
    if (currentPage.startsWith('bussiness-communication-solution/')) {
      const citySlug = currentPage.replace('bussiness-communication-solution/', '');
      
      // Map slugs to data keys
      const cityMap: Record<string, string> = {
        'austin': 'austin',
        'round-rock': 'roundRock',
        'cedar-park': 'cedarPark',
        'leander': 'leander',
        'pflugerville': 'pflugerville'
      };
      
      const dataKey = cityMap[citySlug];
      if (dataKey && bcsData[dataKey]) {
        return <BCSLandingPage data={bcsData[dataKey]} onNavigate={handleNavigate} />;
      }
      // Invalid BCS city - show 404
      return <NotFoundPage onNavigate={handleNavigate} />;
    }
    
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'seo-services':
        return <SEOServicesPage onNavigate={handleNavigate} />;
      case 'web-design':
        return <WebDesignPage onNavigate={handleNavigate} />;
      case 'marketing-services':
        return <MarketingServicesPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'portfolio':
        return <PortfolioPage onNavigate={handleNavigate} />;
      case 'blog':
        return <BlogPage />;
      case 'contact':
        return <ContactPage />;
      case 'admin':
        return <AdminPage />;
      case 'admin-setup':
        return <AdminSetup />;
      case 'privacy-policy':
        return <PrivacyPolicyPage onNavigate={handleNavigate} />;
      case 'terms-of-service':
        return <TermsOfServicePage onNavigate={handleNavigate} />;
      case 'refund-policy':
        return <RefundPolicyPage onNavigate={handleNavigate} />;
      case '404':
        return <NotFoundPage onNavigate={handleNavigate} />;
      default:
        // Check if it's an unknown route
        const validPages = ['home', 'services', 'seo-services', 'web-design', 'marketing-services', 'about', 'portfolio', 'blog', 'contact', 'admin', 'admin-setup', 'privacy-policy', 'terms-of-service', 'refund-policy'];
        if (currentPage && !validPages.includes(currentPage)) {
          return <NotFoundPage onNavigate={handleNavigate} />;
        }
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  const validMainPages = ['home', 'services', 'seo-services', 'web-design', 'marketing-services', 'about', 'portfolio', 'blog', 'contact', 'privacy-policy', 'terms-of-service', 'refund-policy'];

  return (
    <>
      <SEOHead currentPage={currentPage} />
      {isLoading && <BCSLoader />}
      <div className="min-h-screen flex flex-col overflow-x-hidden w-full">
        {currentPage !== 'admin' && 
         currentPage !== 'admin-setup' && 
         currentPage !== '404' &&
         !currentPage.startsWith('bussiness-communication-solution/') && validMainPages.includes(currentPage) && (
          <Header currentPage={currentPage} onNavigate={handleNavigate} />
        )}
        <main className="flex-grow overflow-x-hidden w-full">
          {renderPage()}
        </main>
        {currentPage !== 'admin' && 
         currentPage !== 'admin-setup' && 
         currentPage !== '404' &&
         !currentPage.startsWith('bussiness-communication-solution/') && validMainPages.includes(currentPage) && (
          <Footer onNavigate={handleNavigate} />
        )}
      </div>
      <CookieConsent />
    </>
  );
}