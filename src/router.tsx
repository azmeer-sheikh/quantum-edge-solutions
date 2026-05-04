import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import { LegacyHashRedirect } from '@/components/LegacyHashRedirect';
// Eager imports: instant client-side navigation (no lazy chunk fetch on each click).
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import SeoServices from '@/pages/SeoServices';
import WebDesign from '@/pages/WebDesign';
import MarketingServices from '@/pages/MarketingServices';
import Pricing from '@/pages/Pricing';
import About from '@/pages/About';
import Portfolio from '@/pages/Portfolio';
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import Refund from '@/pages/Refund';
import BlogArticle from '@/pages/BlogArticle';
import PortfolioCaseStudy from '@/pages/PortfolioCaseStudy';
import BCS from '@/pages/BCS';
import Admin from '@/pages/Admin';
import AdminSetupPage from '@/pages/AdminSetup';
import NotFound from '@/pages/NotFound';

export function AppRouter() {
  return (
    <BrowserRouter>
      <LegacyHashRedirect />
      <GoogleAnalytics />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="platform" element={<About />} />
          <Route path="about" element={<Navigate to="/platform" replace />} />
          <Route path="services" element={<Services />} />
          <Route path="seo-services" element={<SeoServices />} />
          <Route path="web-design" element={<WebDesign />} />
          <Route path="marketing-services" element={<MarketingServices />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/:slug" element={<PortfolioCaseStudy />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogArticle />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<Privacy />} />
          <Route path="terms-of-service" element={<Terms />} />
          <Route path="refund-policy" element={<Refund />} />
        </Route>

        <Route path="/bussiness-communication-solution/:city" element={<BCS />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-setup" element={<AdminSetupPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
