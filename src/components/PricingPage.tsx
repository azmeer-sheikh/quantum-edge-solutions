import { useState, useRef, useEffect } from 'react';
import { Check, X, MessageCircle, Award, Users, TrendingUp, Star, HelpCircle, ArrowRight } from 'lucide-react';
import { useInView } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

type ServiceType = 'local-seo' | 'web-dev' | 'social-media' | 'ppc';

interface Feature {
  name: string;
  starter: string | boolean;
  growth: string | boolean;
  enterprise: string | boolean;
}

const localSEOFeatures: Feature[] = [
  { name: 'Keyword Targeting', starter: '10–20 Keywords', growth: '30–40 Keywords', enterprise: '50+ Keywords' },
  { name: 'Landing Pages', starter: '5 Pages', growth: '10 Pages', enterprise: 'Unlimited' },
  { name: 'GMB & Local', starter: 'Setup & Citations', growth: 'Weekly Management', enterprise: 'Full Voice Search SEO' },
  { name: 'Backlink Authority', starter: '100 Links', growth: '150+ Links', enterprise: '250+ Authority Links' },
  { name: 'Reporting', starter: 'Monthly PDF', growth: 'Live Dashboard', enterprise: 'Predictive ROI Dashboard' },
  { name: 'Support Level', starter: 'Email Support', growth: 'Priority Support', enterprise: 'Dedicated Team' },
];

const webDevFeatures: Feature[] = [
  { name: 'Custom Design', starter: 'Template-Based', growth: 'Semi-Custom', enterprise: 'Fully Custom' },
  { name: 'Pages Included', starter: 'Up to 5', growth: 'Up to 15', enterprise: 'Unlimited' },
  { name: 'CMS Integration', starter: false, growth: 'Basic CMS', enterprise: 'Advanced CMS' },
  { name: 'E-Commerce', starter: false, growth: '50 Products', enterprise: 'Unlimited' },
  { name: 'SEO & Performance', starter: 'Basic', growth: 'Advanced', enterprise: 'Maximum Speed' },
  { name: 'Support', starter: 'Email', growth: 'Priority', enterprise: '24/7 Dedicated' },
];

const socialMediaFeatures: Feature[] = [
  { name: 'Platforms Managed', starter: '2 Platforms', growth: '4 Platforms', enterprise: 'All Platforms' },
  { name: 'Posts Per Month', starter: '12 Posts', growth: '24 Posts', enterprise: '40+ Posts' },
  { name: 'Content Creation', starter: 'Stock Images', growth: 'Custom Graphics', enterprise: 'Pro Photography' },
  { name: 'Stories & Reels', starter: false, growth: '8/Month', enterprise: '20+/Month' },
  { name: 'Ad Management', starter: false, growth: '$2K Spend', enterprise: 'Unlimited' },
  { name: 'Support', starter: 'Email', growth: 'Priority', enterprise: 'Account Manager' },
];

const ppcFeatures: Feature[] = [
  { name: 'Ad Platforms', starter: 'Google Ads', growth: 'Google + Bing', enterprise: 'All Platforms' },
  { name: 'Monthly Ad Spend', starter: '$2,500', growth: '$10,000', enterprise: 'Unlimited' },
  { name: 'Campaigns', starter: '1 Campaign', growth: '3 Campaigns', enterprise: 'Unlimited' },
  { name: 'Landing Pages', starter: false, growth: '2 Pages', enterprise: 'Unlimited' },
  { name: 'A/B Testing', starter: 'Basic', growth: 'Advanced', enterprise: 'AI-Powered' },
  { name: 'Support', starter: 'Email', growth: 'Priority', enterprise: 'Dedicated Specialist' },
];

const services = {
  'local-seo': {
    name: 'Local SEO',
    features: localSEOFeatures,
    tiers: {
      starter: { name: 'SEO Foundation', price: 299, description: 'Perfect for businesses starting their SEO journey' },
      growth: { name: 'Growth Accelerator', price: 449, description: 'For businesses ready to dominate their market' },
      enterprise: { name: 'Market Authority', price: 699, description: 'Industry-leading SEO for market dominance' },
    }
  },
  'web-dev': {
    name: 'Web Development',
    features: webDevFeatures,
    tiers: {
      starter: { name: 'Starter Website', price: 799, description: 'Essential web presence for small businesses', isOneTime: true },
      growth: { name: 'Professional Site', price: 2499, description: 'Advanced features for growing companies', isOneTime: true },
      enterprise: { name: 'Enterprise Solution', price: 4999, description: 'Custom enterprise-grade web solutions', isOneTime: true },
    }
  },
  'social-media': {
    name: 'Social Media Management',
    features: socialMediaFeatures,
    tiers: {
      starter: { name: 'Social Starter', price: 127, description: 'Build your social media presence' },
      growth: { name: 'Social Growth', price: 424, description: 'Accelerate your social engagement' },
      enterprise: { name: 'Social Authority', price: 594, description: 'Complete social media dominance' },
    }
  },
  'ppc': {
    name: 'PPC & Paid Advertising',
    features: ppcFeatures,
    tiers: {
      starter: { name: 'PPC Starter', price: 250, monthlyRetainer: 500, description: 'Get started with paid advertising', isSetupFee: true },
      growth: { name: 'PPC Growth', price: 499, monthlyRetainer: 1200, description: 'Scale your paid campaigns', isSetupFee: true },
      enterprise: { name: 'PPC Enterprise', price: 999, monthlyRetainer: 2500, description: 'Maximum ROI from paid ads', isSetupFee: true },
    }
  },
};

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'Urban Fitness Studio',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    content: 'HiveTech transformed our online presence. We saw a 340% increase in local search visibility!',
    rating: 5,
    result: '+340% Traffic'
  },
  {
    name: 'Michael Chen',
    company: 'TechStart Solutions',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    content: 'The web development team delivered beyond expectations. Our conversion rate doubled.',
    rating: 5,
    result: '+200% Conversions'
  },
];

const stats = [
  { label: 'Happy Clients', value: 500, suffix: '+' },
  { label: 'Projects Completed', value: 1200, suffix: '+' },
  { label: 'Average ROI', value: 285, suffix: '%' },
  { label: 'Team Members', value: 45, suffix: '+' }
];

const faqs = [
  {
    question: 'Can I change or cancel my plan at any time?',
    answer: 'Yes! You can upgrade, downgrade, or cancel anytime. We offer a 30-day money-back guarantee.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers. Enterprise clients can arrange custom invoicing.'
  },
  {
    question: 'Do you offer custom packages?',
    answer: 'Absolutely! Contact our sales team to create a custom solution tailored to your needs.'
  },
  {
    question: 'How long does it take to see results?',
    answer: 'SEO shows improvements in 3-6 months, PPC generates leads within days, and web projects complete in 4-12 weeks.'
  },
];

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {isInView ? count : 0}{suffix}
    </span>
  );
}

function FadeInSection({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function PricingPage() {
  const [selectedService, setSelectedService] = useState<ServiceType>('social-media');
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('annual');
  const [showChat, setShowChat] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const currentService = services[selectedService];

  const getPrice = (basePrice: number) => {
    if (billingPeriod === 'annual') {
      return Math.round(basePrice * 0.85);
    }
    return basePrice;
  };

  const getPriceLabel = (tier: 'starter' | 'growth' | 'enterprise') => {
    const tierData = currentService.tiers[tier];
    if ('isSetupFee' in tierData && tierData.isSetupFee) {
      return 'setup fee';
    }
    if ('isOneTime' in tierData && tierData.isOneTime) {
      return 'one-time';
    }
    return billingPeriod === 'monthly' ? 'month' : 'year';
  };

  const shouldApplyDiscount = (tier: 'starter' | 'growth' | 'enterprise') => {
    const tierData = currentService.tiers[tier];
    return !('isSetupFee' in tierData) && !('isOneTime' in tierData);
  };

  return (
    <div className="min-h-screen bg-[#14141A] text-white overflow-x-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28 w-full">
        {/* Header */}
        <FadeInSection>
          <div className="text-center mb-16 lg:mb-24 pt-8 lg:pt-12">
            <span className="inline-block text-[#00D0FF] text-sm font-semibold tracking-widest uppercase mb-6 bg-[#00D0FF]/10 px-4 py-2 rounded-full border border-[#00D0FF]/30">
              Transparent Pricing
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight px-2">
              Simple, flexible <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D0FF] via-[#75FF00] to-[#00D0FF]">pricing plans</span>
            </h1>
            <p className="text-lg text-[#C2C2CC] max-w-3xl mx-auto mb-10 font-light leading-relaxed px-4">
              Choose the perfect plan for your business. All plans include essential features with 24/7 support and flexible scaling.
            </p>

            {/* Billing Toggle */}
            <div className="flex justify-center mt-8 lg:mt-10 mb-8 lg:mb-6 px-4">
              <div className="inline-flex items-center bg-gradient-to-r from-[#14141A] to-[#1F1F24] backdrop-blur-xl rounded-full p-1.5 border border-[#00D0FF]/20 shadow-2xl shadow-[#00D0FF]/10">
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-6 sm:px-8 py-3 rounded-full transition-all duration-300 font-semibold text-sm ${
                    billingPeriod === 'monthly'
                      ? 'bg-[#00D0FF]/15 text-[#00D0FF] border border-[#00D0FF]/40 shadow-lg shadow-[#00D0FF]/20'
                      : 'text-[#A0A0B0] hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod('annual')}
                  className={`px-6 sm:px-8 py-3 rounded-full transition-all duration-300 font-semibold text-sm flex items-center gap-2 ${
                    billingPeriod === 'annual'
                      ? 'bg-gradient-to-r from-[#00D0FF]/15 to-[#75FF00]/15 text-[#00D0FF] border border-[#00D0FF]/40 shadow-lg shadow-[#00D0FF]/20'
                      : 'text-[#A0A0B0] hover:text-white'
                  }`}
                >
                  Annual
                  {billingPeriod === 'annual' && (
                    <span className="text-xs bg-gradient-to-r from-[#75FF00]/30 to-[#00D0FF]/30 text-[#75FF00] px-2 py-1 rounded-full font-bold border border-[#75FF00]/40 ml-1">
                      Save 15%
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Animated Stats */}
        <FadeInSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16 lg:mb-24 mt-8 lg:mt-16 px-2">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-[#1F1F24] to-[#14141A] backdrop-blur-xl border border-[#2A2A33] hover:border-[#00D0FF]/40 rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 hover:shadow-xl hover:shadow-[#00D0FF]/15 group"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00D0FF] mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-[#A0A0B0] font-semibold tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Trust Badges */}
        <FadeInSection>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-16 lg:mb-24 mt-8 lg:mt-20 pt-8 lg:pt-16 pb-12 lg:pb-20 border-t border-b border-[#2A2A33]/50 px-4">
            <div className="flex items-center gap-2 sm:gap-3 text-[#C2C2CC] text-xs sm:text-sm px-2 sm:px-3 hover:text-[#00D0FF] transition-colors">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#00D0FF] flex-shrink-0" />
              <span className="font-medium">Google Partner</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 text-[#C2C2CC] text-xs sm:text-sm px-2 sm:px-3 hover:text-[#00D0FF] transition-colors">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#00D0FF] flex-shrink-0" />
              <span className="font-medium">Meta Business Partner</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 text-[#C2C2CC] text-xs sm:text-sm px-2 sm:px-3 hover:text-[#00D0FF] transition-colors">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#00D0FF] flex-shrink-0" />
              <span className="font-medium">HubSpot Certified</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 text-[#C2C2CC] text-xs sm:text-sm px-2 sm:px-3 hover:text-[#75FF00] transition-colors">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#75FF00] flex-shrink-0" />
              <span className="font-medium">500+ Clients</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 text-[#C2C2CC] text-xs sm:text-sm px-2 sm:px-3 hover:text-[#75FF00] transition-colors">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-[#75FF00] flex-shrink-0" />
              <span className="font-medium">4.9/5 Rating</span>
            </div>
          </div>
        </FadeInSection>

        {/* Service Tabs */}
        <FadeInSection>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 lg:mb-20 mt-8 lg:mt-16 pt-8 lg:pt-12 px-2">
            {(Object.keys(services) as ServiceType[]).map((serviceKey) => (
              <button
                key={serviceKey}
                onClick={() => setSelectedService(serviceKey)}
                className={`px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm border ${
                  selectedService === serviceKey
                    ? 'bg-gradient-to-r from-[#00D0FF]/20 to-[#75FF00]/10 text-[#00D0FF] border-[#00D0FF]/50 shadow-lg shadow-[#00D0FF]/25'
                    : 'bg-[#1F1F24] text-[#A0A0B0] hover:text-white hover:border-[#00D0FF]/30 border-[#2A2A33] hover:bg-[#252530]'
                }`}
              >
                {services[serviceKey].name}
              </button>
            ))}
          </div>
        </FadeInSection>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 lg:mb-28 mt-8 lg:mt-20 pt-6 lg:pt-8 px-2 sm:px-4">
          {/* Starter Tier */}
          <FadeInSection>
            <div
              className="bg-gradient-to-br from-[#1F1F24] to-[#14141A] backdrop-blur-xl border border-[#2A2A33] rounded-3xl p-6 sm:p-8 lg:p-12 hover:border-[#00D0FF]/30 transition-all duration-300 flex flex-col h-full shadow-lg hover:shadow-2xl hover:shadow-[#00D0FF]/10 group"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-[#00D0FF] transition-colors">{currentService.tiers.starter.name}</h3>
              <p className="text-[#A0A0B0] mb-6 sm:mb-8 text-sm leading-relaxed">{currentService.tiers.starter.description}</p>
              <div className="mb-8 sm:mb-12 flex-grow">
                {'monthlyRetainer' in currentService.tiers.starter ? (
                  <div>
                    <div className="mb-3">
                      <span className="text-3xl sm:text-4xl font-bold text-[#00D0FF]">${currentService.tiers.starter.price}</span>
                      <span className="text-[#A0A0B0] ml-2 text-sm">setup</span>
                    </div>
                    <div className="text-[#A0A0B0] text-xs mb-2 font-medium">+</div>
                    <div>
                      <span className="text-4xl sm:text-5xl font-bold text-white">
                        ${shouldApplyDiscount('starter') ? getPrice(currentService.tiers.starter.monthlyRetainer) : currentService.tiers.starter.monthlyRetainer}
                      </span>
                      <span className="text-[#A0A0B0] ml-2 text-sm">/{billingPeriod === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                  </div>
                ) : (
                  <div>
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#00D0FF]">
                      ${shouldApplyDiscount('starter') ? getPrice(currentService.tiers.starter.price) : currentService.tiers.starter.price}
                    </span>
                    <span className="text-[#A0A0B0] ml-2 text-sm">/{getPriceLabel('starter')}</span>
                  </div>
                )}
              </div>
              <Button className="w-full bg-[#00D0FF]/10 hover:bg-[#00D0FF]/20 text-[#00D0FF] border border-[#00D0FF]/30 rounded-xl font-bold transition-all py-3 sm:py-4 px-4 sm:px-6 group-hover:border-[#00D0FF]/60 group-hover:shadow-lg group-hover:shadow-[#00D0FF]/20 text-sm sm:text-base">
                Get Started <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </FadeInSection>

          {/* Growth Tier - Popular */}
          <FadeInSection>
            <div
              className="bg-gradient-to-br from-[#00D0FF]/20 via-[#1F1F24] to-[#14141A] backdrop-blur-xl border-2 border-[#00D0FF]/50 rounded-3xl p-6 sm:p-8 lg:p-12 relative transform lg:scale-105 shadow-2xl shadow-[#00D0FF]/20 flex flex-col h-full group hover:shadow-3xl hover:shadow-[#00D0FF]/30 transition-all duration-300"
            >
              {/* Most Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-[#00D0FF] to-[#75FF00] text-[#14141A] px-6 py-2 rounded-full font-bold text-sm shadow-lg shadow-[#00D0FF]/50 flex items-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  MOST POPULAR
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white mt-2 sm:mt-4 group-hover:text-[#00D0FF] transition-colors">{currentService.tiers.growth.name}</h3>
              <p className="text-[#C2C2CC] mb-6 sm:mb-8 text-sm leading-relaxed">{currentService.tiers.growth.description}</p>
              <div className="mb-8 sm:mb-12 flex-grow">
                {'monthlyRetainer' in currentService.tiers.growth ? (
                  <div>
                    <div className="mb-3">
                      <span className="text-3xl sm:text-4xl font-bold text-[#00D0FF]">${currentService.tiers.growth.price}</span>
                      <span className="text-[#C2C2CC] ml-2 text-sm">setup</span>
                    </div>
                    <div className="text-[#C2C2CC] text-xs mb-2 font-medium">+</div>
                    <div>
                      <span className="text-4xl sm:text-5xl font-bold text-[#75FF00]">
                        ${shouldApplyDiscount('growth') ? getPrice(currentService.tiers.growth.monthlyRetainer) : currentService.tiers.growth.monthlyRetainer}
                      </span>
                      <span className="text-[#C2C2CC] ml-2 text-sm">/{billingPeriod === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                  </div>
                ) : (
                  <div>
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#75FF00]">
                      ${shouldApplyDiscount('growth') ? getPrice(currentService.tiers.growth.price) : currentService.tiers.growth.price}
                    </span>
                    <span className="text-[#A0A0B0] ml-2 text-sm">/{getPriceLabel('growth')}</span>
                  </div>
                )}
              </div>
              <Button className="w-full bg-gradient-to-r from-[#00D0FF] to-[#75FF00] hover:from-[#00D0FF]/80 hover:to-[#75FF00]/80 text-[#14141A] font-bold transition-all py-3 sm:py-4 px-4 sm:px-6 rounded-xl shadow-lg shadow-[#00D0FF]/30 group-hover:shadow-xl group-hover:shadow-[#00D0FF]/40 text-sm sm:text-base">
                Start Now <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </FadeInSection>

          {/* Enterprise Tier */}
          <FadeInSection>
            <div
              className="bg-gradient-to-br from-[#1F1F24] to-[#14141A] backdrop-blur-xl border border-[#2A2A33] rounded-3xl p-6 sm:p-8 lg:p-12 hover:border-[#75FF00]/30 transition-all duration-300 flex flex-col h-full shadow-lg hover:shadow-2xl hover:shadow-[#75FF00]/10 group"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-[#75FF00] transition-colors">{currentService.tiers.enterprise.name}</h3>
              <p className="text-[#A0A0B0] mb-6 sm:mb-8 text-sm leading-relaxed">{currentService.tiers.enterprise.description}</p>
              <div className="mb-8 sm:mb-12 flex-grow">
                {'monthlyRetainer' in currentService.tiers.enterprise ? (
                  <div>
                    <div className="mb-3">
                      <span className="text-3xl sm:text-4xl font-bold text-[#75FF00]">${currentService.tiers.enterprise.price}</span>
                      <span className="text-[#A0A0B0] ml-2 text-sm">setup</span>
                    </div>
                    <div className="text-[#A0A0B0] text-xs mb-2 font-medium">+</div>
                    <div>
                      <span className="text-4xl sm:text-5xl font-bold text-white">
                        ${shouldApplyDiscount('enterprise') ? getPrice(currentService.tiers.enterprise.monthlyRetainer) : currentService.tiers.enterprise.monthlyRetainer}
                      </span>
                      <span className="text-[#A0A0B0] ml-2 text-sm">/{billingPeriod === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                  </div>
                ) : (
                  <div>
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#75FF00]">
                      ${shouldApplyDiscount('enterprise') ? getPrice(currentService.tiers.enterprise.price) : currentService.tiers.enterprise.price}
                    </span>
                    <span className="text-[#A0A0B0] ml-2 text-sm">/{getPriceLabel('enterprise')}</span>
                  </div>
                )}
              </div>
              <Button className="w-full bg-[#75FF00]/10 hover:bg-[#75FF00]/20 text-[#75FF00] border border-[#75FF00]/30 rounded-xl font-bold transition-all py-3 sm:py-4 px-4 sm:px-6 group-hover:border-[#75FF00]/60 group-hover:shadow-lg group-hover:shadow-[#75FF00]/20 text-sm sm:text-base">
                Contact Sales <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </FadeInSection>
        </div>

        {/* Detailed Feature Comparison Table */}
        <FadeInSection>
          <div className="bg-[#1F1F24] backdrop-blur-sm border border-[#2A2A33] rounded-2xl p-4 sm:p-6 lg:p-10 overflow-x-auto mb-16 lg:mb-24 mt-8 lg:mt-16 pt-6 lg:pt-8 mx-2 sm:mx-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-white">Compare Features</h2>
            
            {/* Mobile: Card View */}
            <div className="block lg:hidden space-y-6">
              {['starter', 'growth', 'enterprise'].map((tier) => (
                <div key={tier} className="bg-[#14141A] rounded-xl p-4 sm:p-6 border border-[#2A2A33]">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 capitalize text-[#00D0FF]">
                    {currentService.tiers[tier as 'starter' | 'growth' | 'enterprise'].name}
                  </h3>
                  <div className="space-y-3">
                    {currentService.features.map((feature, index) => (
                      <div key={index} className="flex justify-between items-start">
                        <span className="text-[#A0A0B0] text-xs sm:text-sm flex-1">{feature.name}</span>
                        <div className="ml-2 sm:ml-4">
                          {typeof feature[tier as 'starter' | 'growth' | 'enterprise'] === 'boolean' ? (
                            feature[tier as 'starter' | 'growth' | 'enterprise'] ? (
                              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#75FF00]" />
                            ) : (
                              <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#2A2A33]" />
                            )
                          ) : (
                            <span className="text-[#C2C2CC] text-xs sm:text-sm text-right">
                              {feature[tier as 'starter' | 'growth' | 'enterprise'] as string}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Table View */}
            <div className="hidden lg:block">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#2A2A33]">
                    <th className="text-left py-4 px-4 text-[#A0A0B0] font-semibold text-sm">Feature</th>
                    <th className="text-left py-4 px-4 text-[#A0A0B0] font-semibold text-sm">{currentService.tiers.starter.name}</th>
                    <th className="text-left py-4 px-4 text-[#00D0FF] font-semibold text-sm">{currentService.tiers.growth.name}</th>
                    <th className="text-left py-4 px-4 text-[#A0A0B0] font-semibold text-sm">{currentService.tiers.enterprise.name}</th>
                  </tr>
                </thead>
                <tbody>
                  {currentService.features.map((feature, index) => (
                    <tr key={index} className="border-b border-[#2A2A33]/50 hover:bg-[#14141A] transition-colors">
                      <td className="py-4 px-4 font-medium text-[#A0A0B0] text-sm relative">
                        <div className="flex items-center gap-2">
                          {feature.name}
                          {hoveredFeature && <HelpCircle className="w-4 h-4 text-[#A0A0B0]" />}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        {typeof feature.starter === 'boolean' ? (
                          feature.starter ? <Check className="w-5 h-5 text-[#75FF00]" /> : <X className="w-5 h-5 text-[#2A2A33]" />
                        ) : (
                          <span className="text-[#A0A0B0] text-sm">{feature.starter}</span>
                        )}
                      </td>
                      <td className="py-4 px-4">
                        {typeof feature.growth === 'boolean' ? (
                          feature.growth ? <Check className="w-5 h-5 text-[#75FF00]" /> : <X className="w-5 h-5 text-[#2A2A33]" />
                        ) : (
                          <span className="text-[#C2C2CC] text-sm">{feature.growth}</span>
                        )}
                      </td>
                      <td className="py-4 px-4">
                        {typeof feature.enterprise === 'boolean' ? (
                          feature.enterprise ? <Check className="w-5 h-5 text-[#75FF00]" /> : <X className="w-5 h-5 text-[#2A2A33]" />
                        ) : (
                          <span className="text-[#A0A0B0] text-sm">{feature.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeInSection>

        {/* Testimonials Section */}
        <FadeInSection>
          <div className="mt-16 lg:mt-24 mb-16 lg:mb-24 pt-8 lg:pt-16 px-2 sm:px-4">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">
                Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D0FF] to-[#75FF00]">industry leaders</span>
              </h2>
              <p className="text-center text-[#A0A0B0] mb-8 text-base sm:text-lg">See what our clients have to say about working with us</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-[#1F1F24] to-[#14141A] backdrop-blur-xl border border-[#2A2A33] rounded-2xl p-6 sm:p-8 hover:border-[#00D0FF]/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#00D0FF]/10 group"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-[#00D0FF]/30 group-hover:border-[#00D0FF] transition-colors" />
                    <div>
                      <h4 className="font-semibold text-white text-base sm:text-lg">{testimonial.name}</h4>
                      <p className="text-xs sm:text-sm text-[#A0A0B0]">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4 sm:mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#75FF00] text-[#75FF00]" />
                    ))}
                  </div>
                  <p className="text-[#A0A0B0] mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm">{testimonial.content}</p>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#75FF00]/20 to-[#00D0FF]/20 text-[#75FF00] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm border border-[#75FF00]/40 font-medium">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                    {testimonial.result}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* FAQ Section */}
        <FadeInSection>
          <div className="mt-16 lg:mt-28 mb-16 lg:mb-24 pt-8 lg:pt-12 px-2 sm:px-4">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">Questions? We Have Answers</h2>
              <p className="text-center text-[#A0A0B0] text-base sm:text-lg max-w-2xl mx-auto">
                Everything you need to know about our pricing and services
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gradient-to-r from-[#1F1F24] to-[#14141A] backdrop-blur-xl border border-[#2A2A33] rounded-2xl overflow-hidden hover:border-[#00D0FF]/40 transition-all duration-300">
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full text-left p-4 sm:p-7 flex justify-between items-center gap-4 hover:bg-[#1F1F24]/80 transition-colors group">
                    <h3 className="font-semibold text-base sm:text-lg text-white group-hover:text-[#00D0FF] transition-colors pr-4">{faq.question}</h3>
                    <div className="flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#00D0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {openFaq === index && (
                    <div className="overflow-hidden border-t border-[#2A2A33]">
                      <p className="px-4 sm:px-7 py-4 sm:py-6 text-[#A0A0B0] leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* CTA Section */}
        <FadeInSection>
          <div className="mt-16 lg:mt-28 text-center mb-16 lg:mb-20 px-2 sm:px-4">
            <div className="bg-gradient-to-br from-[#00D0FF]/10 via-[#1F1F24] to-[#14141A] backdrop-blur-xl border border-[#00D0FF]/30 rounded-3xl p-8 sm:p-12 lg:p-16 hover:border-[#00D0FF]/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#00D0FF]/20">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white leading-tight">
                Ready to scale your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D0FF] to-[#75FF00]">digital presence?</span>
              </h2>
              <p className="text-base sm:text-lg text-[#C2C2CC] mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                Join hundreds of businesses transforming their digital strategy with our proven solutions. Start your journey today.
              </p>
              <button className="bg-gradient-to-r from-[#00D0FF] to-[#75FF00] hover:from-[#00D0FF]/90 hover:to-[#75FF00]/90 text-[#14141A] font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-xl transition-all duration-300 shadow-xl shadow-[#00D0FF]/30 inline-flex items-center gap-2 sm:gap-3 text-base sm:text-lg group">
                Schedule Your Strategy Call
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </FadeInSection>
      </div>

      {/* Live Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {showChat ? (
          <div className="bg-[#1F1F24] border border-[#2A2A33] rounded-2xl shadow-2xl w-80 sm:w-96 overflow-hidden">
            <div className="bg-[#00D0FF] p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#14141A] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#00D0FF]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#14141A]">Chat with us</h3>
                  <p className="text-xs text-[#14141A]/80">We typically reply in minutes</p>
                </div>
              </div>
              <button onClick={() => setShowChat(false)} className="text-[#14141A] hover:bg-[#14141A]/20 rounded-full p-1 transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 h-64 bg-[#14141A] flex items-center justify-center">
              <p className="text-[#A0A0B0] text-center">Chat functionality would be integrated here.<br />Connect your preferred chat service.</p>
            </div>
            <div className="p-4 bg-[#1F1F24] border-t border-[#2A2A33]">
              <input type="text" placeholder="Type your message..." className="w-full bg-[#14141A] border border-[#2A2A33] rounded-lg px-4 py-2 text-white placeholder-[#A0A0B0] focus:outline-none focus:border-[#00D0FF]" />
            </div>
          </div>
        ) : (
          <button onClick={() => setShowChat(true)} className="bg-[#00D0FF] text-[#14141A] rounded-full p-4 shadow-2xl shadow-[#00D0FF]/50 hover:shadow-[#00D0FF]/70 transition-all duration-300">
            <MessageCircle className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
}