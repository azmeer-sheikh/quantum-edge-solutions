import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, Globe, Megaphone, Server, Zap, LogIn } from 'lucide-react';
import { Button } from './ui/button';
import logoImage from 'figma:asset/70690aa715d52af9bf6d9022a99b37b0525aecde.png';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const serviceItems = [
    { name: 'SEO Services', path: 'seo-services', icon: <Search className="w-5 h-5" />, description: 'Dominate search rankings' },
    { name: 'Web Design', path: 'web-design', icon: <Globe className="w-5 h-5" />, description: 'Stunning websites that convert' },
    { name: 'Marketing', path: 'marketing-services', icon: <Megaphone className="w-5 h-5" />, description: 'Data-driven campaigns' },
  ];

  const platformItems = [
    { name: 'SaaS Platform', path: 'about', icon: <Server className="w-5 h-5" />, description: 'Our software solutions' },
    { name: 'Automation Tools', path: 'services', icon: <Zap className="w-5 h-5" />, description: 'Marketing automation' },
  ];

  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'Platform', path: 'about', hasDropdown: false },
    { name: 'Services', path: 'services', hasDropdown: true },
    { name: 'Case Studies', path: 'portfolio' },
    { name: 'Insights', path: 'blog' },
    { name: 'Contact', path: 'contact' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isServicePage = ['seo-services', 'web-design', 'marketing-services', 'services'].includes(currentPage);

  return (
    <header 
      className="sticky top-0 bg-[#14141A] backdrop-blur-md border-b border-[#2A2A33] transition-all w-full overflow-visible" 
      style={{ zIndex: 50000, isolation: 'isolate', position: 'sticky' }}
    >
      <div className="container mx-auto px-4 py-3 sm:py-4 max-w-7xl w-full">
        <nav className="flex items-center justify-between w-full relative">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-3 group transition-all hover:opacity-90"
          >
            <div className="w-48 h-16 sm:w-56 sm:h-18 md:w-64 md:h-20 lg:w-72 lg:h-24 flex items-center justify-center flex-shrink-0">
              <img src={logoImage} alt="Quantum Edge Solutions Logo" className="w-full h-full object-contain" />
            </div>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center space-x-1 xl:space-x-2" style={{ position: 'relative', zIndex: 50001 }}>
            {navItems.map((item) => (
              <li key={item.path} className="relative" style={{ position: 'relative' }}>
                {item.hasDropdown ? (
                  <div ref={servicesRef} className="relative" style={{ position: 'relative' }}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={`px-3 xl:px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-1
                        ${
                          isServicePage
                            ? 'text-[#00D0FF] bg-[#00D0FF]/10'
                            : 'text-[#C2C2CC] hover:text-[#00D0FF] hover:bg-[#1F1F24]'
                        }`}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Mega Menu Dropdown */}
                    {servicesOpen && (
                      <div 
                        className="absolute top-full left-0 mt-2 bg-[#14141A] border-2 border-[#00D0FF]/40 rounded-lg shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2" 
                        style={{ 
                          zIndex: 50002, 
                          position: 'absolute',
                          width: '16vw',
                          minWidth: '280px',
                          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 208, 255, 0.2)'
                        }}
                      >
                        <div className="p-3 bg-[#14141A]">
                          <div className="text-xs font-mono text-[#75FF00] mb-2 uppercase tracking-wider">Agency Services</div>
                          {serviceItems.map((service) => (
                            <button
                              key={service.path}
                              onClick={() => {
                                onNavigate(service.path);
                                setServicesOpen(false);
                              }}
                              className="w-full flex items-start gap-3 p-2 rounded-lg hover:bg-[#00D0FF]/10 transition-all group text-left"
                            >
                              <div className="text-[#00D0FF] group-hover:text-[#75FF00] transition-colors mt-0.5 flex-shrink-0">
                                {service.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-white font-medium text-sm">{service.name}</div>
                                <div className="text-[#C2C2CC] text-xs">{service.description}</div>
                              </div>
                            </button>
                          ))}
                        </div>
                        <div className="border-t border-[#00D0FF]/10 p-3 bg-[#14141A]">
                          <button
                            onClick={() => {
                              onNavigate('services');
                              setServicesOpen(false);
                            }}
                            className="w-full text-center text-sm text-[#00D0FF] hover:text-[#75FF00] transition-colors"
                          >
                            View All Services →
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => onNavigate(item.path)}
                    className={`px-3 xl:px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                      ${
                        currentPage === item.path
                          ? 'text-[#00D0FF] bg-[#00D0FF]/10'
                          : 'text-[#C2C2CC] hover:text-[#00D0FF] hover:bg-[#1F1F24]'
                      }`}
                  >
                    {item.name}
                  </button>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button
              onClick={() => onNavigate('contact')}
              className="bg-[#75FF00] text-[#14141A] hover:bg-[#00B8E0] font-semibold px-4 xl:px-6 py-2 rounded-md transition-colors text-sm whitespace-nowrap"
            >
              Start Project
            </Button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="lg:hidden text-[#00D0FF] p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2 border-t border-[#2A2A33] pt-4 animate-in slide-in-from-top">
            {navItems.map((item) => (
              <div key={item.path}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`flex items-center justify-between w-full text-left py-3 px-4 rounded-md text-sm font-medium transition-all
                        ${
                          isServicePage
                            ? 'text-[#00D0FF] bg-[#1F1F24] border-l-2 border-[#00D0FF]'
                            : 'text-[#C2C2CC] hover:text-[#00D0FF] hover:bg-[#1A1A1F]'
                        }`}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileServicesOpen && (
                      <div className="ml-4 mt-2 space-y-1 border-l border-[#00D0FF]/20 pl-4">
                        {serviceItems.map((service) => (
                          <button
                            key={service.path}
                            onClick={() => {
                              onNavigate(service.path);
                              setMobileMenuOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className="flex items-center gap-2 w-full text-left py-2 px-3 rounded-md text-sm text-[#C2C2CC] hover:text-[#00D0FF] hover:bg-[#1A1A1F] transition-all"
                          >
                            <span className="text-[#00D0FF]">{service.icon}</span>
                            {service.name}
                          </button>
                        ))}
                        <button
                          onClick={() => {
                            onNavigate('services');
                            setMobileMenuOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          className="w-full text-left py-2 px-3 text-sm text-[#75FF00] hover:bg-[#1A1A1F] rounded-md transition-all"
                        >
                          View All Services →
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      onNavigate(item.path);
                      setMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left py-3 px-4 rounded-md text-sm font-medium transition-all
                      ${
                        currentPage === item.path
                          ? 'text-[#00D0FF] bg-[#1F1F24] border-l-2 border-[#00D0FF]'
                          : 'text-[#C2C2CC] hover:text-[#00D0FF] hover:bg-[#1A1A1F]'
                      }`}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
            <Button
              className="w-full bg-[#75FF00] text-[#14141A] hover:bg-[#75FF00] mt-4 font-semibold rounded-md"
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
            >
              Start Project
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}