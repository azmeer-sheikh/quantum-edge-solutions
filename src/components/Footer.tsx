import { Linkedin, Twitter, Github, Mail, Phone, MapPin, Cookie } from "lucide-react";
import { CookieSettingsButton } from './CookieConsent';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#14141A] text-[#C2C2CC] border-t border-[#00D0FF]/20 relative overflow-hidden w-full">
      <div className="container mx-auto px-4 py-12 relative z-10 max-w-7xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Logo variant="icon" className="w-48 h-auto" />
            </div>
            <p className="text-[#C2C2CC]/80 mb-4 text-sm">
              Full-stack digital marketing, automation, and SaaS solutions for
              B2B enterprises.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[#C2C2CC] hover:text-[#00D0FF] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-[#C2C2CC] hover:text-[#00D0FF] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-[#C2C2CC] hover:text-[#00D0FF] transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4 font-semibold">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate("home")}
                  className="text-[#C2C2CC] hover:text-[#00D0FF] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="text-[#C2C2CC] hover:text-[#00D0FF] transition-colors"
                >
                  Platform
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("services")}
                  className="text-[#C2C2CC] hover:text-[#00D0FF] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("portfolio")}
                  className="text-[#C2C2CC] hover:text-[#00D0FF] transition-colors"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("blog")}
                  className="text-[#C2C2CC] hover:text-[#00D0FF] transition-colors"
                >
                  Insights
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4 font-semibold">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate("seo-services")}
                  className="text-[#C2C2CC]/80 hover:text-[#00D0FF] transition-colors"
                >
                  SEO Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("web-design")}
                  className="text-[#C2C2CC]/80 hover:text-[#00D0FF] transition-colors"
                >
                  Web Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("marketing-services")}
                  className="text-[#C2C2CC]/80 hover:text-[#00D0FF] transition-colors"
                >
                  Digital Marketing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("services")}
                  className="text-[#C2C2CC]/80 hover:text-[#00D0FF] transition-colors"
                >
                  Marketing Automation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="text-[#C2C2CC]/80 hover:text-[#00D0FF] transition-colors"
                >
                  SaaS Platform
                </button>
              </li>
              <li>
                <a
                  href="/bussiness-communication-solution/austin"
                  className="text-[#C2C2CC]/80 hover:text-[#00D0FF] transition-colors"
                >
                  Business Communication Solutions
                </a>
              </li>
            </ul>
          </div>


          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-4 font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin
                  size={16}
                  className="flex-shrink-0 mt-1 text-[#00D0FF]"
                />
                <span className="text-[#C2C2CC]/80">
                  7838 Malton Lane, Appt 22
                  <br />
                  Worthington, Columbus, Ohio 43085
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="flex-shrink-0 text-[#00D0FF]" />
                <a
                  href="tel:+16144055814"
                  className="text-[#C2C2CC]/80 hover:text-[#00D0FF] transition-colors"
                >
                  +1 (614) 405-5814
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="flex-shrink-0 text-[#00D0FF]" />
                <a
                  href="mailto:contact@quantumedgesolution.org"
                  className="text-[#C2C2CC]/80 hover:text-[#00D0FF] transition-colors"
                >
                  contact@quantumedgesolution.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#00D0FF]/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-[#C2C2CC]/60 mb-4 md:mb-0">
            &copy; 2025 Quantum Edge Solution LLC. 
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-[#C2C2CC]/60">
            <button
              onClick={() => onNavigate("privacy-policy")}
              className="hover:text-[#00D0FF] transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate("terms-of-service")}
              className="hover:text-[#00D0FF] transition-colors"
            >
              Terms of Service
            </button>
            <button
              onClick={() => onNavigate("refund-policy")}
              className="hover:text-[#00D0FF] transition-colors"
            >
              Refund Policy
            </button>
            <CookieSettingsButton />
            <button
              onClick={() => onNavigate("admin")}
              className="hover:text-[#00D0FF] transition-colors opacity-50 hover:opacity-100"
              title="Admin Access"
            >
              Admin
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
