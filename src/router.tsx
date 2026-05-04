import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import { LegacyHashRedirect } from '@/components/LegacyHashRedirect';

const Home = lazy(() => import('@/pages/Home'));
const Services = lazy(() => import('@/pages/Services'));
const SeoServices = lazy(() => import('@/pages/SeoServices'));
const WebDesign = lazy(() => import('@/pages/WebDesign'));
const MarketingServices = lazy(() => import('@/pages/MarketingServices'));
const Pricing = lazy(() => import('@/pages/Pricing'));
const About = lazy(() => import('@/pages/About'));
const Portfolio = lazy(() => import('@/pages/Portfolio'));
const Blog = lazy(() => import('@/pages/Blog'));
const Contact = lazy(() => import('@/pages/Contact'));
const Privacy = lazy(() => import('@/pages/Privacy'));
const Terms = lazy(() => import('@/pages/Terms'));
const Refund = lazy(() => import('@/pages/Refund'));
const BlogArticle = lazy(() => import('@/pages/BlogArticle'));
const PortfolioCaseStudy = lazy(() => import('@/pages/PortfolioCaseStudy'));
const BCS = lazy(() => import('@/pages/BCS'));
const Admin = lazy(() => import('@/pages/Admin'));
const AdminSetupPage = lazy(() => import('@/pages/AdminSetup'));
const NotFound = lazy(() => import('@/pages/NotFound'));

function ShellFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#14141A] text-[#00D0FF] font-mono text-sm" role="status">
      Loading…
    </div>
  );
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <LegacyHashRedirect />
      <GoogleAnalytics />
      <Suspense fallback={<ShellFallback />}>
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
      </Suspense>
    </BrowserRouter>
  );
}
