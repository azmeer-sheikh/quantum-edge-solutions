import { Search, MapPin, TrendingUp, Target, BarChart, Globe, CheckCircle, ArrowRight, Zap, FileText, Link, Settings, Server, RefreshCw } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { CircuitBackground } from './CircuitBackground';

interface SEOServicesPageProps {
  onNavigate: (page: string) => void;
}

export function SEOServicesPage({ onNavigate }: SEOServicesPageProps) {
  const seoServices = [
    {
      icon: <Search className="w-10 h-10" />,
      title: 'Technical SEO',
      description: 'Complete technical audits and optimization for search engine crawlability and indexation.',
      features: ['Site Speed Optimization', 'Core Web Vitals', 'Schema Markup', 'XML Sitemaps', 'Crawl Error Fixes'],
    },
    {
      icon: <MapPin className="w-10 h-10" />,
      title: 'Local SEO',
      description: 'Dominate local search results and Google Maps for your service areas.',
      features: ['Google Business Profile', 'Local Citations', 'Review Management', 'NAP Consistency', 'Local Link Building'],
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'Content SEO',
      description: 'Strategic content creation and optimization to rank for high-value keywords.',
      features: ['Keyword Research', 'Content Strategy', 'Blog Optimization', 'Content Refresh', 'Semantic SEO'],
    },
    {
      icon: <Link className="w-10 h-10" />,
      title: 'Link Building',
      description: 'White-hat link building strategies to boost domain authority and rankings.',
      features: ['Guest Posting', 'Digital PR', 'Broken Link Building', 'Resource Link Building', 'Competitor Analysis'],
    },
    {
      icon: <Settings className="w-10 h-10" />,
      title: 'On-Page SEO',
      description: 'Comprehensive on-page optimization for every page on your website.',
      features: ['Meta Tags Optimization', 'Header Structure', 'Internal Linking', 'Image Optimization', 'URL Structure'],
    },
    {
      icon: <BarChart className="w-10 h-10" />,
      title: 'SEO Analytics',
      description: 'Data-driven insights and reporting to track your SEO performance.',
      features: ['Rank Tracking', 'Traffic Analysis', 'Conversion Tracking', 'Competitor Monitoring', 'Custom Reports'],
    },
  ];

  const results = [
    { metric: '+287%', label: 'Organic Traffic Growth' },
    { metric: '1st Page', label: 'Google Rankings' },
    { metric: '+150%', label: 'Lead Generation' },
    { metric: '45%', label: 'Lower Cost Per Lead' },
  ];

  // Managed Services Packages (Labor/Retainers)
  const managedPackages = [
    {
      name: 'Starter',
      price: '$799',
      period: '/month',
      type: 'retainer',
      description: 'Perfect for local businesses targeting specific service areas',
      features: [
        'Google Business Profile Optimization',
        'Local Citation Building (50+)',
        'Review Management Strategy',
        'Local Keyword Targeting',
        'Monthly Reporting',
        'NAP Consistency Audit',
      ],
    },
    {
      name: 'Business',
      price: '$1,599',
      period: '/month',
      type: 'retainer',
      description: 'For growing businesses ready to scale organic traffic',
      features: [
        'Everything in Starter',
        'Technical SEO Audit & Fixes',
        'Content Strategy (4 posts/mo)',
        'Link Building (10 links/mo)',
        'Competitor Analysis',
        'Bi-weekly Strategy Calls',
      ],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom Pricing',
      period: '',
      type: 'retainer',
      description: 'Full-scale SEO for maximum organic visibility - Pricing based on your specific needs',
      features: [
        'Everything in Business',
        'Advanced Technical Optimization',
        'Content Strategy (8+ posts/mo)',
        'Premium Link Building (25+ links/mo)',
        'International SEO Support',
        'Dedicated SEO Strategist',
      ],
    },
  ];

  // Software Subscription Packages (SaaS Tools)
  const softwarePackages = [
    {
      name: 'SEO Toolkit Basic',
      price: '$99',
      period: '/month',
      type: 'license',
      description: 'Essential SEO tools for small teams',
      features: [
        'Rank Tracking (100 keywords)',
        'Technical Audit Reports',
        'Competitor Monitoring (3)',
        'Basic Analytics Dashboard',
        'Email Support',
      ],
    },
    {
      name: 'SEO Toolkit Pro',
      price: '$249',
      period: '/month',
      type: 'license',
      description: 'Advanced tools for growing agencies',
      features: [
        'Rank Tracking (500 keywords)',
        'Advanced Technical Audits',
        'Competitor Monitoring (10)',
        'White-label Reports',
        'API Access',
        'Priority Support',
      ],
      featured: true,
    },
    {
      name: 'SEO Toolkit Enterprise',
      price: '$499',
      period: '/month',
      type: 'license',
      description: 'Unlimited access for large organizations',
      features: [
        'Unlimited Rank Tracking',
        'Custom Integrations',
        'Multi-site Management',
        'Dedicated Success Manager',
        'Custom Training',
        'SLA Guarantee',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#14141A]">
      {/* Hero Section with Image */}
      <section className="relative py-20 overflow-hidden hex-pattern">
        <CircuitBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block mb-6 px-4 py-2 bg-[#75FF00]/10 border border-[#75FF00]/30 rounded-md">
                <span className="text-[#75FF00] text-sm font-mono">SEO SERVICES</span>
              </div>
              <h1 className="text-white mb-6 text-4xl lg:text-5xl font-bold">Search Engine Optimization</h1>
              <p className="text-[#C2C2CC] text-xl max-w-xl mb-8">
                Data-driven SEO strategies that drive organic traffic, improve rankings, and generate qualified leads for your business.
              </p>
              <Button
                onClick={() => onNavigate('contact')}
                className="bg-[#75FF00] text-[#14141A] hover:bg-[#00D0FF] font-semibold px-8 py-3 rounded-md transition-colors"
              >
                Get Free SEO Audit <ArrowRight className="ml-2 w-5 h-5 inline" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" 
                alt="SEO Analytics Dashboard"
                className="rounded-lg shadow-2xl border border-[#00D0FF]/20"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#1A1A22] border border-[#75FF00]/30 rounded-lg p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#75FF00]/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[#75FF00]" />
                  </div>
                  <div>
                    <div className="text-[#75FF00] font-bold text-xl">+287%</div>
                    <div className="text-[#C2C2CC] text-sm">Organic Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 bg-[#1A1A22] border-y border-[#00D0FF]/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {results.map((result, index) => (
              <div key={index}>
                <div className="text-[#75FF00] font-mono text-4xl mb-2">{result.metric}</div>
                <div className="text-[#C2C2CC] text-sm">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#14141A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl mb-4">Our SEO Services</h2>
            <p className="text-[#C2C2CC] text-lg max-w-2xl mx-auto">
              Comprehensive SEO solutions tailored to your business goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoServices.map((service, index) => (
              <Card key={index} className="bg-[#1A1A22] border-[#00D0FF]/20 hover:border-[#75FF00] transition-all group">
                <CardHeader>
                  <div className="text-[#00D0FF] group-hover:text-[#75FF00] transition-colors mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#C2C2CC] mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-[#C2C2CC]">
                        <CheckCircle className="w-4 h-4 text-[#75FF00] mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Managed Services */}
      <section className="py-20 bg-[#1A1A22]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md">
              <span className="text-[#00D0FF] text-sm font-mono flex items-center gap-2">
                <RefreshCw className="w-4 h-4" /> MANAGED SERVICES
              </span>
            </div>
            <h2 className="text-white text-4xl mb-4">Agency SEO Retainers</h2>
            <p className="text-[#C2C2CC] text-lg max-w-2xl mx-auto">
              Full-service SEO management with dedicated strategists and proven results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {managedPackages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`bg-[#14141A] border-[#00D0FF]/20 relative ${pkg.featured ? 'border-[#75FF00] ring-2 ring-[#75FF00]/20' : 'hover:border-[#00D0FF]'} transition-all`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-[#75FF00] text-[#14141A] text-xs font-bold rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <div className="text-xs text-[#00D0FF] font-mono mb-2 uppercase">Monthly Retainer</div>
                  <CardTitle className="text-white text-2xl">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-[#75FF00] text-4xl font-bold">{pkg.price}</span>
                    <span className="text-[#C2C2CC]">{pkg.period}</span>
                  </div>
                  <p className="text-[#C2C2CC] text-sm mt-2">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-[#C2C2CC]">
                        <CheckCircle className="w-4 h-4 text-[#75FF00] mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => onNavigate('contact')}
                    className={`w-full ${pkg.featured ? 'bg-[#75FF00] text-[#14141A] hover:bg-[#00D0FF]' : 'bg-[#00D0FF]/10 text-[#00D0FF] hover:bg-[#00D0FF]/20 border border-[#00D0FF]/30'}`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Software Subscription */}
      <section className="py-20 bg-[#14141A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-[#75FF00]/10 border border-[#75FF00]/30 rounded-md">
              <span className="text-[#75FF00] text-sm font-mono flex items-center gap-2">
                <Server className="w-4 h-4" /> SOFTWARE SUBSCRIPTION
              </span>
            </div>
            <h2 className="text-white text-4xl mb-4">SEO Software Platform</h2>
            <p className="text-[#C2C2CC] text-lg max-w-2xl mx-auto">
              Powerful DIY tools for teams who want to manage SEO in-house
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {softwarePackages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`bg-[#1A1A22] border-[#75FF00]/20 relative ${pkg.featured ? 'border-[#00D0FF] ring-2 ring-[#00D0FF]/20' : 'hover:border-[#75FF00]'} transition-all`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-[#00D0FF] text-[#14141A] text-xs font-bold rounded-full">
                    BEST VALUE
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <div className="text-xs text-[#75FF00] font-mono mb-2 uppercase">Software License</div>
                  <CardTitle className="text-white text-2xl">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-[#00D0FF] text-4xl font-bold">{pkg.price}</span>
                    <span className="text-[#C2C2CC]">{pkg.period}</span>
                  </div>
                  <p className="text-[#C2C2CC] text-sm mt-2">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-[#C2C2CC]">
                        <CheckCircle className="w-4 h-4 text-[#00D0FF] mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => onNavigate('contact')}
                    className={`w-full ${pkg.featured ? 'bg-[#00D0FF] text-[#14141A] hover:bg-[#75FF00]' : 'bg-[#75FF00]/10 text-[#75FF00] hover:bg-[#75FF00]/20 border border-[#75FF00]/30'}`}
                  >
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#00D0FF]/10 to-[#75FF00]/10 border-y border-[#00D0FF]/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white text-4xl mb-4">Ready to Dominate Search Results?</h2>
          <p className="text-[#C2C2CC] text-lg mb-8 max-w-2xl mx-auto">
            Get a free SEO audit and discover how we can help you outrank your competitors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onNavigate('contact')}
              className="bg-[#75FF00] text-[#14141A] hover:bg-[#00D0FF] font-semibold px-8 py-3"
            >
              Get Free SEO Audit
            </Button>
            <Button
              onClick={() => onNavigate('portfolio')}
              variant="outline"
              className="border-[#00D0FF] text-[#00D0FF] hover:bg-[#00D0FF]/10 px-8 py-3"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
