import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ServicesPage } from './components/ServicesPage';
import { AboutPage } from './components/AboutPage';
import { PortfolioPage } from './components/PortfolioPage';
import { BlogPage } from './components/BlogPage';
import { ContactPage } from './components/ContactPage';
import { AdminPage } from './components/AdminPage';
import { AdminSetup } from './components/AdminSetup';
import { NotFoundPage } from './components/NotFoundPage';
import { SEOHead } from './components/SEOHead';
import { BCSLandingPage } from './components/bcs/BCSLandingPage';
import { bcsData } from './data/bcsData';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Check URL for routes on mount
  useEffect(() => {
    const path = window.location.pathname;
    const hash = window.location.hash.replace('#', '');
    
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
    // Support hash routing for backward compatibility and admin
    else if (hash === 'admin' || hash === 'admin-setup') {
      setCurrentPage(hash);
    }
    else if (hash.startsWith('bussiness-communication-solution/')) {
      const citySlug = hash.replace('bussiness-communication-solution/', '');
      if (citySlug) {
        // Redirect hash to clean URL
        window.history.replaceState(null, '', `/bussiness-communication-solution/${citySlug}`);
        setCurrentPage(`bussiness-communication-solution/${citySlug}`);
      } else {
        // Default to Austin
        window.history.replaceState(null, '', '/bussiness-communication-solution/austin');
        setCurrentPage('bussiness-communication-solution/austin');
      }
    }
    else if (hash === 'bussiness-communication-solution' || path === '/bussiness-communication-solution') {
      // Default to Austin when only base path is provided
      window.history.replaceState(null, '', '/bussiness-communication-solution/austin');
      setCurrentPage('bussiness-communication-solution/austin');
    }
    else if (hash) {
      setCurrentPage(hash);
    }

    // Log admin access info to console
    console.log('%c🎯 quantum Edge Solutions - Admin Panel Access', 'color: #00D0FF; font-size: 16px; font-weight: bold;');
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #75FF00;');
    console.log('%c📍 Admin Login:', 'color: #00D0FF; font-weight: bold;', 'window.location.hash = "admin"');
    console.log('%c📍 Admin Setup:', 'color: #00D0FF; font-weight: bold;', 'window.location.hash = "admin-setup"');
    console.log('%c📍 Contact Form:', 'color: #00D0FF; font-weight: bold;', 'window.location.hash = "contact"');
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
      } else if (newHash === 'admin' || newHash === 'admin-setup' ||
          newHash.startsWith('bussiness-communication-solution/')) {
        setCurrentPage(newHash);
      } else if (newHash) {
        setCurrentPage(newHash);
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    
    // Use clean URLs for BCS pages, hash for others
    if (page.startsWith('bussiness-communication-solution/')) {
      const path = `/${page}`;
      window.history.pushState(null, '', path);
    } else {
      window.location.hash = page;
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        return <BCSLandingPage data={bcsData[dataKey]} />;
      }
      // Invalid BCS city - show 404
      return <NotFoundPage onNavigate={handleNavigate} />;
    }
    
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
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
      case '404':
        return <NotFoundPage onNavigate={handleNavigate} />;
      default:
        // Check if it's an unknown route
        const validPages = ['home', 'services', 'about', 'portfolio', 'blog', 'contact', 'admin', 'admin-setup'];
        if (currentPage && !validPages.includes(currentPage)) {
          return <NotFoundPage onNavigate={handleNavigate} />;
        }
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <>
      <SEOHead currentPage={currentPage} />
      <div className="min-h-screen flex flex-col overflow-x-hidden w-full">
        {currentPage !== 'admin' && 
         currentPage !== 'admin-setup' && 
         currentPage !== '404' &&
         !currentPage.startsWith('bussiness-communication-solution/') && (currentPage === 'home' || currentPage === 'services' || currentPage === 'about' || currentPage === 'portfolio' || currentPage === 'blog' || currentPage === 'contact') && (
          <Header currentPage={currentPage} onNavigate={handleNavigate} />
        )}
        <main className="flex-grow overflow-x-hidden w-full">
          {renderPage()}
        </main>
        {currentPage !== 'admin' && 
         currentPage !== 'admin-setup' && 
         currentPage !== '404' &&
         !currentPage.startsWith('bussiness-communication-solution/') && (currentPage === 'home' || currentPage === 'services' || currentPage === 'about' || currentPage === 'portfolio' || currentPage === 'blog' || currentPage === 'contact') && (
          <Footer onNavigate={handleNavigate} />
        )}
      </div>
    </>
  );
}