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
import { SEOHead } from './components/SEOHead';
import { BCSLandingPage } from './components/bcs/BCSLandingPage';
import { bcsData } from './data/bcsData';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Check URL hash for admin routes on mount
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'admin' || hash === 'admin-setup' || 
        hash.startsWith('bussiness-communication-solution/')) {
      setCurrentPage(hash);
    }

    // Log admin access info to console
    console.log('%c🎯 Quantom Edge Solutions - Admin Panel Access', 'color: #00D0FF; font-size: 16px; font-weight: bold;');
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #75FF00;');
    console.log('%c📍 Admin Login:', 'color: #00D0FF; font-weight: bold;', 'window.location.hash = "admin"');
    console.log('%c📍 Admin Setup:', 'color: #00D0FF; font-weight: bold;', 'window.location.hash = "admin-setup"');
    console.log('%c📍 Contact Form:', 'color: #00D0FF; font-weight: bold;', 'window.location.hash = "contact"');
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #75FF00;');
    console.log('%c💡 Tip:', 'color: #75FF00; font-weight: bold;', 'Click "Admin" in footer for quick access');
    console.log('%c📖 Docs:', 'color: #75FF00; font-weight: bold;', 'See ADMIN_CREDENTIALS.md for full guide');
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #75FF00;');

    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.replace('#', '');
      if (newHash === 'admin' || newHash === 'admin-setup' ||
          newHash.startsWith('bussiness-communication-solution/')) {
        setCurrentPage(newHash);
      } else if (newHash) {
        setCurrentPage(newHash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
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
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <>
      <SEOHead currentPage={currentPage} />
      <div className="min-h-screen flex flex-col overflow-x-hidden w-full">
        {currentPage !== 'admin' && 
         currentPage !== 'admin-setup' && 
         !currentPage.startsWith('bussiness-communication-solution/') && (
          <Header currentPage={currentPage} onNavigate={handleNavigate} />
        )}
        <main className="flex-grow overflow-x-hidden w-full">
          {renderPage()}
        </main>
        {currentPage !== 'admin' && 
         currentPage !== 'admin-setup' && 
         !currentPage.startsWith('bussiness-communication-solution/') && (
          <Footer onNavigate={handleNavigate} />
        )}
      </div>
    </>
  );
}