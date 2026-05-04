import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Mail, Phone, MapPin } from "lucide-react";
import { CookieSettingsButton } from './CookieConsent';
import { Logo } from './Logo';
import { Logo2 } from './Logo2';
import logoImg from '../assets/logo.jpg';

const footLink = "text-[#C2C2CC] hover:text-[#00D0FF] transition-colors";
const footLinkMuted = "text-[#C2C2CC]/80 hover:text-[#00D0FF] transition-colors";

export function Footer() {
  return (
    <footer className="bg-[#14141A] text-[#C2C2CC] border-t border-[#00D0FF]/20 relative overflow-hidden w-full">
      <div className="container mx-auto px-4 py-12 relative z-10 max-w-7xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4 flex items-center space-x-4">
              <Logo variant="icon" className="w-32 h-auto" />
              <img src={logoImg} alt="Quantum Edge Solutions" className="w-32 h-auto" width={128} height={128} loading="lazy" decoding="async" />
            </div>

            <p className="text-[#C2C2CC]/80 mb-4 text-sm">
              Hive Tech Solution is a DBA of Quantum Edge Solutions LLC. <br /><br />
              Quantum Edge Solutions LLC is a multi-brand digital agency. Our specialized SEO, GMB Optimization, and Web Development services are operated under our consumer brand, Hive Tech Solutions (www.hivetechsol.com). All billing and contractual obligations for Hive Tech Solutions are fulfilled by Quantum Edge Solutions LLC.
            </p>
            <div className="flex space-x-4" aria-label="Social media">
              <a
                href="https://www.linkedin.com/company/quantumedge"
                className={footLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Quantum Edge on LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/quantumedge"
                className={footLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Quantum Edge on X (Twitter)"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://github.com/quantumedge"
                className={footLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Quantum Edge on GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-white mb-4 font-semibold">Navigation</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className={footLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/platform" className={footLink}>
                  Platform
                </Link>
              </li>
              <li>
                <Link to="/services" className={footLink}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className={footLink}>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className={footLink}>
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className={footLink}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-white mb-4 font-semibold">Services</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/seo-services" className={footLinkMuted}>
                  SEO Services
                </Link>
              </li>
              <li>
                <Link to="/web-design" className={footLinkMuted}>
                  Web Design
                </Link>
              </li>
              <li>
                <Link to="/marketing-services" className={footLinkMuted}>
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services" className={footLinkMuted}>
                  Marketing Automation
                </Link>
              </li>
              <li>
                <Link to="/platform" className={footLinkMuted}>
                  SaaS Platform
                </Link>
              </li>
              <li>
                <Link to="/bussiness-communication-solution/austin" className={footLinkMuted}>
                  Business Communication Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-white mb-4 font-semibold">Contact</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin
                  size={16}
                  className="flex-shrink-0 mt-1 text-[#00D0FF]"
                  aria-hidden
                />
                <span className="text-[#C2C2CC]/80">
                  7838 Malton Lane, Apt 22, Worthington, Ohio 43085
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="flex-shrink-0 text-[#00D0FF]" aria-hidden />
                <a
                  href="tel:+16144055814"
                  className="text-[#C2C2CC]/80 hover:text-[#00D0FF] transition-colors"
                >
                  +1 (614) 405-5814
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="flex-shrink-0 text-[#00D0FF]" aria-hidden />
                <a
                  href="tel:8178866699"
                  className="text-[#C2C2CC]/80 hover:text-[#00D0FF] transition-colors"
                >
                  +1 (817) 886-6699
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="flex-shrink-0 text-[#00D0FF]" aria-hidden />
                <a
                  href="mailto:support@quantumedgesolution.org"
                  className="text-[#C2C2CC]/80 hover:text-[#00D0FF] transition-colors"
                >
                  support@quantumedgesolution.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#00D0FF]/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-[#C2C2CC]/60 mb-4 md:mb-0">
            &copy; 2026-27 Quantum Edge Solution LLC.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-[#C2C2CC]/60">
            <Link to="/privacy-policy" className="hover:text-[#00D0FF] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-[#00D0FF] transition-colors">
              Terms of Service
            </Link>
            <Link to="/refund-policy" className="hover:text-[#00D0FF] transition-colors">
              Refund Policy
            </Link>
            <CookieSettingsButton />
            <Link
              to="/admin"
              className="hover:text-[#00D0FF] transition-colors opacity-50 hover:opacity-100"
              title="Admin Access"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
