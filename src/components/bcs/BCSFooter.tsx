import { Facebook, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';

export function BCSFooter() {
  const cities = [
    { name: 'Austin', slug: 'austin' },
    { name: 'Round Rock', slug: 'round-rock' },
    { name: 'Cedar Park', slug: 'cedar-park' },
    { name: 'Leander', slug: 'leander' },
    { name: 'Pflugerville', slug: 'pflugerville' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B4F6C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white mb-3">
              Business Communication Solutions
            </h3>
            <p className="text-sm text-white/70 mb-4">
              Professional IT infrastructure and network solutions for businesses across Central Texas.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">
                  Data Cabling
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">
                  Fiber Installation
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">
                  Security Cameras
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">
                  Network Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">
                  Managed IT
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">
                  Cybersecurity
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white mb-4">
              Service Areas
            </h4>
            <ul className="space-y-2 text-sm">
              {cities.map(city => (
                <li key={city.slug}>
                  <a href={`/bussiness-communication-solution/${city.slug}`} className="text-white/70 hover:text-white transition-colors">
                    {city.name}, TX
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm">
              <a 
                href="tel:+15122571433" 
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(512) 257-1433</span>
              </a>
              <a 
                href="mailto:austin@bcs-ip.com" 
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors break-all"
              >
                <Mail className="w-4 h-4" />
                <span>austin@bcs-ip.com</span>
              </a>
              <div className="pt-3">
                <a 
                  href="https://www.bcs-ip.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#01BAEF] text-white rounded-lg hover:bg-[#20A4F3] transition-all text-sm"
                >
                  <span>Visit Main Website</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/70 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Business Communication Solutions. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all text-sm"
            aria-label="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}