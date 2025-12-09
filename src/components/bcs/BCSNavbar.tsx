import { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, ChevronDown } from 'lucide-react';
import bcsLogo from 'figma:asset/3b549fef51db7f331d7ed9cb4dff8ea3198a7458.png';

interface BCSNavbarProps {
  cityName: string;
  citySlug: string;
  onNavigate: (page: string) => void;
}

export function BCSNavbar({ cityName, citySlug, onNavigate }: BCSNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const cities = [
    { name: 'Austin', slug: 'austin' },
    { name: 'Round Rock', slug: 'round-rock' },
    { name: 'Cedar Park', slug: 'cedar-park' },
    { name: 'Leander', slug: 'leander' },
    { name: 'Pflugerville', slug: 'pflugerville' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-white/95 backdrop-blur-sm py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Clickable */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img 
              src={bcsLogo} 
              alt="Business Communication Solutions" 
              className="h-[120px] w-[120px] object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-[#0B4F6C] hover:text-[#01BAEF] transition-colors text-sm xl:text-base whitespace-nowrap"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-[#0B4F6C] hover:text-[#01BAEF] transition-colors text-sm xl:text-base whitespace-nowrap"
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-[#0B4F6C] hover:text-[#01BAEF] transition-colors text-sm xl:text-base whitespace-nowrap"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-[#0B4F6C] hover:text-[#01BAEF] transition-colors text-sm xl:text-base whitespace-nowrap"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-[#0B4F6C] hover:text-[#01BAEF] transition-colors text-sm xl:text-base whitespace-nowrap"
            >
              About
            </button>

            {/* Service Areas Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 text-[#0B4F6C] hover:text-[#01BAEF] transition-colors text-sm xl:text-base whitespace-nowrap"
              >
                <span>Areas</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl py-2 z-50">
                  {cities.map((city) => (
                    <button
                      key={city.slug}
                      onClick={() => {
                        setIsServicesOpen(false);
                        onNavigate(`bussiness-communication-solution/${city.slug}`);
                      }}
                      className={`block w-full text-left px-4 py-2 hover:bg-[#01BAEF]/10 transition-colors text-sm ${
                        city.slug === citySlug ? 'bg-[#01BAEF]/5 text-[#01BAEF]' : 'text-[#0B4F6C]'
                      }`}
                    >
                      {city.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden xl:flex items-center gap-3 2xl:gap-4">
            <a 
              href="tel:+15122571433"
              className="flex items-center gap-2 text-[#0B4F6C] hover:text-[#01BAEF] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">(512) 257-1433</span>
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-4 2xl:px-6 py-2 2xl:py-2.5 bg-[#01BAEF] text-white rounded-lg hover:bg-[#0B4F6C] transition-all shadow-md hover:shadow-lg text-sm whitespace-nowrap"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#0B4F6C] hover:text-[#01BAEF] transition-colors -mr-2"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 py-4 space-y-2">
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-3 text-[#0B4F6C] hover:bg-[#01BAEF]/10 rounded-lg transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="block w-full text-left px-4 py-3 text-[#0B4F6C] hover:bg-[#01BAEF]/10 rounded-lg transition-colors"
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="block w-full text-left px-4 py-3 text-[#0B4F6C] hover:bg-[#01BAEF]/10 rounded-lg transition-colors"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left px-4 py-3 text-[#0B4F6C] hover:bg-[#01BAEF]/10 rounded-lg transition-colors"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-3 text-[#0B4F6C] hover:bg-[#01BAEF]/10 rounded-lg transition-colors"
            >
              About
            </button>

            {/* Service Areas */}
            <div className="pt-3 border-t border-gray-200">
              <p className="px-4 py-2 text-sm text-[#5A6C7D]">Service Areas</p>
              {cities.map((city) => (
                <button
                  key={city.slug}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onNavigate(`bussiness-communication-solution/${city.slug}`);
                  }}
                  className={`block w-full text-left px-4 py-2 hover:bg-[#01BAEF]/10 rounded-lg transition-colors ${
                    city.slug === citySlug ? 'bg-[#01BAEF]/5 text-[#01BAEF]' : 'text-[#0B4F6C]'
                  }`}
                >
                  {city.name}
                </button>
              ))}
            </div>

            {/* Mobile Contact */}
            <div className="pt-3 border-t border-gray-200 space-y-2">
              <a 
                href="tel:+15122571433"
                className="flex items-center gap-2 px-4 py-3 text-[#0B4F6C] hover:bg-[#01BAEF]/10 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(512) 257-1433</span>
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full px-6 py-3 bg-[#01BAEF] text-white rounded-lg hover:bg-[#0B4F6C] transition-all shadow-md"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}