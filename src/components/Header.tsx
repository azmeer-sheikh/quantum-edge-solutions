import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, Globe, Megaphone } from 'lucide-react';
import { Button } from './ui/button';
import logoImage from 'figma:asset/70690aa715d52af9bf6d9022a99b37b0525aecde.png';

const SERVICE_PATHS = ['/services', '/seo-services', '/web-design', '/marketing-services'];

function isServiceSection(pathname: string) {
  return SERVICE_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

function isNavActive(pathname: string, key: string): boolean {
  if (key === 'home') return pathname === '/' || pathname === '/home';
  if (key === 'platform') return pathname === '/platform' || pathname === '/about';
  if (key === 'services') return isServiceSection(pathname);
  if (key === 'pricing') return pathname === '/pricing';
  if (key === 'portfolio') return pathname === '/portfolio' || pathname.startsWith('/portfolio/');
  if (key === 'blog') return pathname === '/blog' || pathname.startsWith('/blog/');
  if (key === 'contact') return pathname === '/contact';
  return false;
}

export function Header() {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const serviceItems = [
    { name: 'SEO Services', to: '/seo-services', icon: <Search className="w-5 h-5" />, description: 'Dominate search rankings' },
    { name: 'Web Design', to: '/web-design', icon: <Globe className="w-5 h-5" />, description: 'Stunning websites that convert' },
    { name: 'Marketing', to: '/marketing-services', icon: <Megaphone className="w-5 h-5" />, description: 'Data-driven campaigns' },
  ];

  const navItems = [
    { name: 'Home', to: '/', key: 'home' as const },
    { name: 'Platform', to: '/platform', key: 'platform' as const },
    { name: 'Services', to: '/services', key: 'services' as const, hasDropdown: true },
    { name: 'Pricing', to: '/pricing', key: 'pricing' as const },
    { name: 'Case Studies', to: '/portfolio', key: 'portfolio' as const },
    { name: 'Insights', to: '/blog', key: 'blog' as const },
    { name: 'Contact', to: '/contact', key: 'contact' as const },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isServicePage = isServiceSection(pathname);

  const linkClass = (key: string) =>
    `inline-flex items-center justify-center px-3 xl:px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap ${
      isNavActive(pathname, key) ? 'text-[#00D0FF] bg-[#00D0FF]/10' : 'text-[#C2C2CC] hover:text-[#00D0FF] hover:bg-[#1F1F24]'
    }`;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 bg-[#14141A] backdrop-blur-md border-b border-[#2A2A33] transition-all w-full overflow-visible"
        style={{ zIndex: 50000, isolation: 'isolate' }}
      >
        <div className="container mx-auto px-4 py-3 sm:py-4 max-w-7xl w-full">
          <nav className="flex items-center justify-between gap-3 w-full relative" aria-label="Primary">
            <Link
              to="/"
              className="flex items-center shrink-0 space-x-3 group transition-all hover:opacity-90"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="w-48 h-16 sm:w-56 sm:h-18 md:w-64 md:h-20 lg:w-72 lg:h-24 flex items-center justify-center flex-shrink-0">
                <img src={logoImage} alt="Quantum Edge Solutions Logo" className="w-full h-full object-contain" width={288} height={96} loading="eager" decoding="async" />
              </div>
            </Link>

            <ul className="hidden lg:flex items-center gap-0.5 xl:gap-1 2xl:gap-2" style={{ position: 'relative', zIndex: 50001 }}>
              {navItems.map((item) => (
                <li key={item.key} className="relative flex items-center shrink-0" style={{ position: 'relative' }}>
                  {item.hasDropdown ? (
                    <div ref={servicesRef} className="relative flex items-center" style={{ position: 'relative' }}>
                      <button
                        type="button"
                        onClick={() => setServicesOpen(!servicesOpen)}
                        aria-expanded={servicesOpen}
                        aria-haspopup="true"
                        className={`inline-flex items-center justify-center gap-1 px-3 xl:px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap
                          ${isServicePage
                            ? 'text-[#00D0FF] bg-[#00D0FF]/10'
                            : 'text-[#C2C2CC] hover:text-[#00D0FF] hover:bg-[#1F1F24]'
                          }`}
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {servicesOpen && (
                        <div
                          className="absolute top-full left-0 mt-2 bg-[#14141A] border-2 border-[#00D0FF]/40 rounded-lg shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2"
                          style={{
                            zIndex: 50002,
                            position: 'absolute',
                            width: '16vw',
                            minWidth: '280px',
                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 208, 255, 0.2)',
                          }}
                          role="menu"
                        >
                          <div className="p-3 bg-[#14141A]">
                            <div className="text-xs font-mono text-[#75FF00] mb-2 uppercase tracking-wider">Agency Services</div>
                            {serviceItems.map((service) => (
                              <Link
                                key={service.to}
                                to={service.to}
                                role="menuitem"
                                onClick={() => setServicesOpen(false)}
                                className="w-full flex items-start gap-3 p-2 rounded-lg hover:bg-[#00D0FF]/10 transition-all group text-left"
                              >
                                <div className="text-[#00D0FF] group-hover:text-[#75FF00] transition-colors mt-0.5 flex-shrink-0">
                                  {service.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-white font-medium text-sm">{service.name}</div>
                                  <div className="text-[#C2C2CC] text-xs">{service.description}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="border-t border-[#00D0FF]/10 p-3 bg-[#14141A]">
                            <Link
                              to="/services"
                              className="block w-full text-center text-sm text-[#00D0FF] hover:text-[#75FF00] transition-colors"
                              onClick={() => setServicesOpen(false)}
                            >
                              View All Services →
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link to={item.to} className={linkClass(item.key)}>
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="hidden lg:flex items-center shrink-0 gap-3">
              <Button asChild className="bg-[#75FF00] text-[#14141A] hover:bg-[#00B8E0] font-semibold px-4 xl:px-6 py-2 rounded-md transition-colors text-sm whitespace-nowrap">
                <Link to="/contact">Start Project</Link>
              </Button>
              <Button
                asChild
                className="bg-transparent border border-[#00D0FF] text-[#00D0FF] hover:bg-[#00D0FF]/10 font-semibold px-4 xl:px-6 py-2 rounded-md transition-colors text-sm whitespace-nowrap"
              >
                <a href="https://portal.hivetechsol.com" target="_blank" rel="noopener noreferrer">
                  Login
                </a>
              </Button>
            </div>

            <button
              type="button"
              className="lg:hidden text-[#00D0FF] p-2 -mr-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 space-y-2 border-t border-[#2A2A33] pt-4 animate-in slide-in-from-top max-h-[80vh] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.key}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className={`flex items-center justify-between w-full text-left py-3 px-4 rounded-md text-sm font-medium transition-all
                          ${isServicePage
                            ? 'text-[#00D0FF] bg-[#1F1F24] border-l-2 border-[#00D0FF]'
                            : 'text-[#C2C2CC] hover:text-[#00D0FF] hover:bg-[#1A1A1F]'
                          }`}
                        aria-expanded={mobileServicesOpen}
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileServicesOpen && (
                        <div className="ml-4 mt-2 space-y-1 border-l border-[#00D0FF]/20 pl-4">
                          {serviceItems.map((service) => (
                            <Link
                              key={service.to}
                              to={service.to}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileServicesOpen(false);
                              }}
                              className="flex items-center gap-2 w-full text-left py-2 px-3 rounded-md text-sm text-[#C2C2CC] hover:text-[#00D0FF] hover:bg-[#1A1A1F] transition-all"
                            >
                              <span className="text-[#00D0FF]">{service.icon}</span>
                              {service.name}
                            </Link>
                          ))}
                          <Link
                            to="/services"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className="block w-full text-left py-2 px-3 text-sm text-[#75FF00] hover:bg-[#1A1A1F] rounded-md transition-all"
                          >
                            View All Services →
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block w-full text-left py-3 px-4 rounded-md text-sm font-medium transition-all
                        ${isNavActive(pathname, item.key)
                          ? 'text-[#00D0FF] bg-[#1F1F24] border-l-2 border-[#00D0FF]'
                          : 'text-[#C2C2CC] hover:text-[#00D0FF] hover:bg-[#1A1A1F]'
                        }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Button asChild className="w-full bg-[#75FF00] text-[#14141A] hover:bg-[#00B8E0] mt-4 font-semibold rounded-md">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Start Project
                </Link>
              </Button>
              <Button
                asChild
                className="w-full bg-transparent border border-[#00D0FF] text-[#00D0FF] hover:bg-[#00D0FF]/10 mt-4 font-semibold rounded-md"
              >
                <a href="https://portal.hivetechsol.com" target="_blank" rel="noopener noreferrer">
                  Login
                </a>
              </Button>
            </div>
          )}
        </div>
      </header>

      <div className="w-full invisible pointer-events-none" aria-hidden="true">
        <div className="container mx-auto px-4 py-3 sm:py-4 max-w-7xl w-full">
          <div className="h-16 sm:h-18 md:h-20 lg:h-24" />
        </div>
        <div className="h-[1px]" />
      </div>
    </>
  );
}
