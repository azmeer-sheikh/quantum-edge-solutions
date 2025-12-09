import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logoImage from 'figma:asset/70690aa715d52af9bf6d9022a99b37b0525aecde.png';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'Services', path: 'services' },
    { name: 'Solutions', path: 'about' },
    { name: 'Case Studies', path: 'portfolio' },
    { name: 'Insights', path: 'blog' },
    { name: 'Contact', path: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#14141A]/95 backdrop-blur-md border-b border-[#2A2A33] transition-all w-full overflow-hidden">
      <div className="container mx-auto px-4 py-3 sm:py-4 max-w-7xl w-full">
        <nav className="flex items-center justify-between w-full">
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
          <ul className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <button
                  onClick={() => onNavigate(item.path)}
                  className={`px-3 xl:px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                    ${
                      currentPage === item.path
                        ? 'text-[#00D0FF] bg-[#00D0FF]/10 '
                        : 'text-[#C2C2CC] hover:text-[#00D0FF] hover:bg-[#1F1F24]'
                    }`}
                >
                  {item.name}
                </button>
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
              <button
                key={item.path}
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