import { Globe, Monitor, Smartphone, Zap, Palette, Code, CheckCircle, ArrowRight, Layers, Shield, Gauge, Users, Server, RefreshCw } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { CircuitBackground } from './CircuitBackground';

interface WebDesignPageProps {
  onNavigate: (page: string) => void;
}

export function WebDesignPage({ onNavigate }: WebDesignPageProps) {
  const webServices = [
    {
      icon: <Monitor className="w-10 h-10" />,
      title: 'Custom Website Design',
      description: 'Bespoke website designs that capture your brand identity and convert visitors into customers.',
      features: ['Brand-Aligned Design', 'Custom UI/UX', 'Conversion Focused', 'Competitor Analysis', 'Mood Boards & Mockups'],
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: 'Responsive Development',
      description: 'Mobile-first websites that look stunning and function perfectly on every device.',
      features: ['Mobile-First Approach', 'Cross-Browser Testing', 'Touch Optimization', 'Adaptive Layouts', 'Retina Ready'],
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Speed Optimization',
      description: 'Lightning-fast websites optimized for Core Web Vitals and user experience.',
      features: ['PageSpeed 95+', 'Image Optimization', 'Code Minification', 'CDN Integration', 'Lazy Loading'],
    },
    {
      icon: <Layers className="w-10 h-10" />,
      title: 'CMS Development',
      description: 'Easy-to-manage content management systems that give you full control.',
      features: ['WordPress', 'Headless CMS', 'Custom Admin Panels', 'Content Scheduling', 'Multi-User Access'],
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: 'Web Applications',
      description: 'Custom web applications built with modern frameworks and best practices.',
      features: ['React/Next.js', 'Node.js Backend', 'API Development', 'Database Design', 'Cloud Deployment'],
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Maintenance & Support',
      description: 'Ongoing website maintenance to keep your site secure and up-to-date.',
      features: ['Security Updates', 'Regular Backups', 'Uptime Monitoring', 'Performance Audits', 'Priority Support'],
    },
  ];

  const results = [
    { metric: '<2s', label: 'Load Time' },
    { metric: '95+', label: 'PageSpeed Score' },
    { metric: '+200%', label: 'Conversion Rate' },
    { metric: '99.9%', label: 'Uptime' },
  ];

  // Managed Services Packages (One-time projects)
  const managedPackages = [
    {
      name: 'Starter',
      price: '$799',
      period: 'one-time',
      type: 'project',
      description: 'Perfect for small businesses and startups',
      features: [
        '5-Page Custom Website',
        'Mobile Responsive Design',
        'Basic SEO Setup',
        'Contact Form Integration',
        'SSL Certificate',
        '30-Day Support',
      ],
    },
    {
      name: 'Business',
      price: '$1599',
      period: 'one-time',
      type: 'project',
      description: 'For growing businesses needing more features',
      features: [
        '10-Page Custom Website',
        'Advanced UI/UX Design',
        'CMS Integration',
        'Blog Setup',
        'Google Analytics',
        'Speed Optimization',
        '90-Day Support',
      ],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom Pricing',
      period: '',
      type: 'project',
      description: 'Full-scale web solutions for large organizations',
      features: [
        'Unlimited Pages',
        'Custom Web Application',
        'E-commerce Integration',
        'API Development',
        'Multi-Language Support',
        'Advanced Security',
        '1-Year Support',
      ],
    },
  ];

  // Software Subscription Packages (Website Builder / Hosting)
  const softwarePackages = [
    {
      name: 'Website Starter',
      price: '$49',
      period: '/month',
      type: 'license',
      description: 'DIY website builder for entrepreneurs',
      features: [
        'Drag & Drop Builder',
        'Mobile Responsive Templates',
        'SSL Certificate Included',
        'Basic Analytics',
        'Email Support',
      ],
    },
    {
      name: 'Website Pro',
      price: '$129',
      period: '/month',
      type: 'license',
      description: 'Advanced tools for growing businesses',
      features: [
        'Everything in Starter',
        'Custom Code Injection',
        'A/B Testing Tools',
        'Advanced SEO Tools',
        'Priority Support',
        'White-label Option',
      ],
      featured: true,
    },
    {
      name: 'Website Enterprise',
      price: '$299',
      period: '/month',
      type: 'license',
      description: 'Complete platform for agencies',
      features: [
        'Unlimited Client Sites',
        'Multi-user Access',
        'API Access',
        'Custom Integrations',
        'Dedicated Support',
        'SLA Guarantee',
      ],
    },
  ];

  const process = [
    { step: 1, title: 'Discovery', description: 'We learn about your business, goals, and target audience.' },
    { step: 2, title: 'Design', description: 'Create wireframes and mockups for your approval.' },
    { step: 3, title: 'Development', description: 'Build your website with clean, optimized code.' },
    { step: 4, title: 'Testing', description: 'Rigorous testing across devices and browsers.' },
    { step: 5, title: 'Launch', description: 'Deploy your site and provide training.' },
    { step: 6, title: 'Support', description: 'Ongoing maintenance and optimization.' },
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
                <span className="text-[#00D0FF] text-sm font-mono">WEB DESIGN & DEVELOPMENT</span>
              </div>
              <h1 className="text-white mb-6 text-4xl lg:text-5xl font-bold">Stunning Websites That Convert</h1>
              <p className="text-[#C2C2CC] text-xl max-w-xl mb-8">
                Custom web design and development that combines beautiful aesthetics with high-performance functionality to drive real business results.
              </p>
              <Button
                onClick={() => onNavigate('contact')}
                className="bg-[#75FF00] text-[#14141A] hover:bg-[#00D0FF] font-semibold px-8 py-3 rounded-md transition-colors"
              >
                Start Your Project <ArrowRight className="ml-2 w-5 h-5 inline" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop" 
                alt="Modern Web Design"
                className="rounded-lg shadow-2xl border border-[#00D0FF]/20"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#1A1A22] border border-[#00D0FF]/30 rounded-lg p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#00D0FF]/20 rounded-full flex items-center justify-center">
                    <Gauge className="w-6 h-6 text-[#00D0FF]" />
                  </div>
                  <div>
                    <div className="text-[#00D0FF] font-bold text-xl">95+</div>
                    <div className="text-[#C2C2CC] text-sm">PageSpeed Score</div>
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
            <h2 className="text-white text-4xl mb-4">Web Design Services</h2>
            <p className="text-[#C2C2CC] text-lg max-w-2xl mx-auto">
              End-to-end web solutions from concept to launch
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webServices.map((service, index) => (
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

      {/* Process Section */}
      <section className="py-20 bg-[#1A1A22]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-[#75FF00]/10 border border-[#75FF00]/30 rounded-md">
              <span className="text-[#75FF00] text-sm font-mono">OUR PROCESS</span>
            </div>
            <h2 className="text-white text-4xl mb-4">How We Build Your Website</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {process.map((item) => (
              <div key={item.step} className="bg-[#14141A] border border-[#00D0FF]/20 rounded-lg p-6 hover:border-[#75FF00] transition-all">
                <div className="w-10 h-10 bg-[#75FF00] text-[#14141A] rounded-full flex items-center justify-center font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-white text-xl mb-2">{item.title}</h3>
                <p className="text-[#C2C2CC] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Managed Services */}
      <section className="py-20 bg-[#14141A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md">
              <span className="text-[#00D0FF] text-sm font-mono flex items-center gap-2 justify-center">
                <RefreshCw className="w-4 h-4" /> MANAGED SERVICES
              </span>
            </div>
            <h2 className="text-white text-4xl mb-4">Custom Web Projects</h2>
            <p className="text-[#C2C2CC] text-lg max-w-2xl mx-auto">
              Full-service web design with dedicated project management and ongoing support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {managedPackages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`bg-[#1A1A22] border-[#00D0FF]/20 relative ${pkg.featured ? 'border-[#75FF00] ring-2 ring-[#75FF00]/20' : 'hover:border-[#00D0FF]'} transition-all`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-[#75FF00] text-[#14141A] text-xs font-bold rounded-full">
                    BEST VALUE
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <div className="text-xs text-[#00D0FF] font-mono mb-2 uppercase">One-Time Project</div>
                  <CardTitle className="text-white text-2xl">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-[#75FF00] text-4xl font-bold">{pkg.price}</span>
                    <span className="text-[#C2C2CC] text-sm ml-1">{pkg.period}</span>
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
      <section className="py-20 bg-[#1A1A22]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-[#75FF00]/10 border border-[#75FF00]/30 rounded-md">
              <span className="text-[#75FF00] text-sm font-mono flex items-center gap-2 justify-center">
                <Server className="w-4 h-4" /> SOFTWARE SUBSCRIPTION
              </span>
            </div>
            <h2 className="text-white text-4xl mb-4">Website Builder Platform</h2>
            <p className="text-[#C2C2CC] text-lg max-w-2xl mx-auto">
              DIY tools to build and manage your website with our powerful platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {softwarePackages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`bg-[#14141A] border-[#75FF00]/20 relative ${pkg.featured ? 'border-[#00D0FF] ring-2 ring-[#00D0FF]/20' : 'hover:border-[#75FF00]'} transition-all`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-[#00D0FF] text-[#14141A] text-xs font-bold rounded-full">
                    MOST POPULAR
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
          <h2 className="text-white text-4xl mb-4">Ready for a Website That Works?</h2>
          <p className="text-[#C2C2CC] text-lg mb-8 max-w-2xl mx-auto">
            Let's create a stunning website that turns visitors into customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onNavigate('contact')}
              className="bg-[#75FF00] text-[#14141A] hover:bg-[#00D0FF] font-semibold px-8 py-3"
            >
              Get Free Consultation
            </Button>
            <Button
              onClick={() => onNavigate('portfolio')}
              variant="outline"
              className="border-[#00D0FF] text-[#00D0FF] hover:bg-[#00D0FF]/10 px-8 py-3"
            >
              View Our Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
