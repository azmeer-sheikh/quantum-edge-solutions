import { BarChart, TrendingUp, Users, Mail, Target, Megaphone, CheckCircle, ArrowRight, Zap, PieChart, Share2, Video, Server, RefreshCw } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { CircuitBackground } from './CircuitBackground';

interface MarketingServicesPageProps {
  onNavigate: (page: string) => void;
}

export function MarketingServicesPage({ onNavigate }: MarketingServicesPageProps) {
  const marketingServices = [
    {
      icon: <Target className="w-10 h-10" />,
      title: 'PPC Advertising',
      description: 'Precision-targeted paid campaigns on Google, Facebook, LinkedIn, and more.',
      features: ['Google Ads Management', 'Facebook & Instagram Ads', 'LinkedIn Advertising', 'Retargeting Campaigns', 'A/B Testing'],
    },
    {
      icon: <Share2 className="w-10 h-10" />,
      title: 'Social Media Marketing',
      description: 'Strategic social media presence that builds brand awareness and engagement.',
      features: ['Content Strategy', 'Community Management', 'Influencer Partnerships', 'Paid Social Campaigns', 'Analytics & Reporting'],
    },
    {
      icon: <Mail className="w-10 h-10" />,
      title: 'Email Marketing',
      description: 'Automated email campaigns that nurture leads and drive conversions.',
      features: ['Campaign Design', 'Automation Workflows', 'List Segmentation', 'A/B Testing', 'Performance Analytics'],
    },
    {
      icon: <Video className="w-10 h-10" />,
      title: 'Content Marketing',
      description: 'Engaging content that attracts, educates, and converts your target audience.',
      features: ['Blog Writing', 'Video Production', 'Infographics', 'Whitepapers', 'Case Studies'],
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Marketing Automation',
      description: 'Intelligent automation systems that scale your marketing efforts.',
      features: ['Lead Scoring', 'Workflow Automation', 'CRM Integration', 'Multi-Channel Campaigns', 'ROI Tracking'],
    },
    {
      icon: <PieChart className="w-10 h-10" />,
      title: 'Analytics & Reporting',
      description: 'Data-driven insights to optimize your marketing performance.',
      features: ['Custom Dashboards', 'Attribution Modeling', 'Conversion Tracking', 'Competitor Analysis', 'Monthly Reports'],
    },
  ];

  const results = [
    { metric: '+320%', label: 'Engagement Rate' },
    { metric: '5x', label: 'ROAS Average' },
    { metric: '+127%', label: 'Conversion Rate' },
    { metric: '-35%', label: 'Cost Per Lead' },
  ];

  // Managed Services Packages (Labor/Retainers)
  const managedPackages = [
    {
      name: 'Starter',
      price: '$2,500',
      period: '/month',
      type: 'retainer',
      description: 'Essential marketing for small businesses',
      features: [
        'Social Media Management (2 platforms)',
        'Email Marketing (2 campaigns/mo)',
        'Basic PPC Management',
        'Monthly Performance Report',
        'Dedicated Account Manager',
      ],
    },
    {
      name: 'Growth',
      price: '$5,000',
      period: '/month',
      type: 'retainer',
      description: 'Comprehensive marketing for scaling businesses',
      features: [
        'Social Media Management (4 platforms)',
        'Email Marketing (4 campaigns/mo)',
        'Advanced PPC Management',
        'Content Creation (4 pieces/mo)',
        'Marketing Automation Setup',
        'Bi-Weekly Strategy Calls',
      ],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: '$10,000+',
      period: '/month',
      type: 'retainer',
      description: 'Full-service marketing for maximum growth',
      features: [
        'All Social Platforms',
        'Unlimited Email Campaigns',
        'Full PPC Management',
        'Content Creation (8+ pieces/mo)',
        'Advanced Automation',
        'Dedicated Marketing Team',
        'Weekly Strategy Sessions',
      ],
    },
  ];

  // Software Subscription Packages (Marketing Tools)
  const softwarePackages = [
    {
      name: 'Marketing Hub Basic',
      price: '$79',
      period: '/month',
      type: 'license',
      description: 'Essential marketing tools for startups',
      features: [
        'Email Marketing (5,000 contacts)',
        'Landing Page Builder',
        'Basic Analytics',
        'Social Scheduling',
        'Email Support',
      ],
    },
    {
      name: 'Marketing Hub Pro',
      price: '$199',
      period: '/month',
      type: 'license',
      description: 'Advanced automation for growing teams',
      features: [
        'Email Marketing (25,000 contacts)',
        'Marketing Automation',
        'A/B Testing',
        'CRM Integration',
        'Advanced Analytics',
        'Priority Support',
      ],
      featured: true,
    },
    {
      name: 'Marketing Hub Enterprise',
      price: '$399',
      period: '/month',
      type: 'license',
      description: 'Complete platform for large organizations',
      features: [
        'Unlimited Contacts',
        'Custom Workflows',
        'Multi-Brand Support',
        'API Access',
        'Dedicated Success Manager',
        'SLA Guarantee',
      ],
    },
  ];

  const channels = [
    { name: 'Google Ads', icon: '🔍' },
    { name: 'Facebook', icon: '📘' },
    { name: 'Instagram', icon: '📸' },
    { name: 'LinkedIn', icon: '💼' },
    { name: 'Twitter/X', icon: '🐦' },
    { name: 'YouTube', icon: '▶️' },
    { name: 'TikTok', icon: '🎵' },
    { name: 'Email', icon: '📧' },
  ];

  return (
    <div className="min-h-screen bg-[#14141A]">
      {/* Hero Section with Image */}
      <section className="relative py-20 overflow-hidden hex-pattern">
        <CircuitBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block mb-6 px-4 py-2 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md">
                <span className="text-[#00D0FF] text-sm font-mono">DIGITAL MARKETING</span>
              </div>
              <h1 className="text-white mb-6 text-4xl lg:text-5xl font-bold">Marketing That Drives Results</h1>
              <p className="text-[#C2C2CC] text-xl max-w-xl mb-8">
                Data-driven digital marketing strategies that increase brand awareness, generate qualified leads, and maximize your ROI.
              </p>
              <Button
                onClick={() => onNavigate('contact')}
                className="bg-[#75FF00] text-[#14141A] hover:bg-[#00D0FF] font-semibold px-8 py-3 rounded-md transition-colors"
              >
                Get Marketing Audit <ArrowRight className="ml-2 w-5 h-5 inline" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=400&fit=crop" 
                alt="Digital Marketing Strategy"
                className="rounded-lg shadow-2xl border border-[#00D0FF]/20"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#1A1A22] border border-[#75FF00]/30 rounded-lg p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#75FF00]/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[#75FF00]" />
                  </div>
                  <div>
                    <div className="text-[#75FF00] font-bold text-xl">5x ROAS</div>
                    <div className="text-[#C2C2CC] text-sm">Avg. Return</div>
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

      {/* Channels Section */}
      <section className="py-12 bg-[#14141A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-white text-xl mb-4">Channels We Master</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {channels.map((channel, index) => (
              <div key={index} className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg px-6 py-3 flex items-center space-x-2 hover:border-[#75FF00] transition-all">
                <span className="text-2xl">{channel.icon}</span>
                <span className="text-[#C2C2CC] text-sm">{channel.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#14141A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl mb-4">Marketing Services</h2>
            <p className="text-[#C2C2CC] text-lg max-w-2xl mx-auto">
              Full-funnel marketing solutions to grow your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => (
              <Card key={index} className="bg-[#1A1A22] border-[#00D0FF]/20 hover:border-[#00D0FF] transition-all group">
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
              <span className="text-[#00D0FF] text-sm font-mono flex items-center gap-2 justify-center">
                <RefreshCw className="w-4 h-4" /> MANAGED SERVICES
              </span>
            </div>
            <h2 className="text-white text-4xl mb-4">Marketing Retainers</h2>
            <p className="text-[#C2C2CC] text-lg max-w-2xl mx-auto">
              Full-service marketing management with dedicated strategists and proven ROI
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
              <span className="text-[#75FF00] text-sm font-mono flex items-center gap-2 justify-center">
                <Server className="w-4 h-4" /> SOFTWARE SUBSCRIPTION
              </span>
            </div>
            <h2 className="text-white text-4xl mb-4">Marketing Automation Platform</h2>
            <p className="text-[#C2C2CC] text-lg max-w-2xl mx-auto">
              Powerful DIY marketing tools for teams who want to manage campaigns in-house
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
          <h2 className="text-white text-4xl mb-4">Ready to Accelerate Your Growth?</h2>
          <p className="text-[#C2C2CC] text-lg mb-8 max-w-2xl mx-auto">
            Get a free marketing audit and discover opportunities to scale your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onNavigate('contact')}
              className="bg-[#75FF00] text-[#14141A] hover:bg-[#00D0FF] font-semibold px-8 py-3"
            >
              Get Free Marketing Audit
            </Button>
            <Button
              onClick={() => onNavigate('portfolio')}
              variant="outline"
              className="border-[#00D0FF] text-[#00D0FF] hover:bg-[#00D0FF]/10 px-8 py-3"
            >
              View Success Stories
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
