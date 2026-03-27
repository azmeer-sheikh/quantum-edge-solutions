import { useState } from 'react';
import { TrendingUp, DollarSign, Clock, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { CircuitBackground } from './CircuitBackground';
import { LogoDecorative } from './Logo';
import { portfolioCaseStudies, type PortfolioMetric } from '../data/portfolioCaseStudies';
import { SERVICE_CATEGORIES } from '../data/blogArticles';

interface PortfolioPageProps {
  onNavigate: (page: string) => void;
}

export function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getMetricIcon = (icon: PortfolioMetric['icon']) => {
    switch (icon) {
      case 'dollar':
        return <DollarSign size={16} />;
      case 'clock':
        return <Clock size={16} />;
      case 'users':
        return <Users size={16} />;
      case 'trending':
      default:
        return <TrendingUp size={16} />;
    }
  };

  const categories = [
    { id: 'all', label: 'All Cases' },
    ...SERVICE_CATEGORIES.map((s) => ({ id: s, label: s })),
  ];

  const filteredCases = selectedCategory === 'all'
    ? portfolioCaseStudies
    : portfolioCaseStudies.filter((cs) => cs.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#14141A]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden hex-pattern">
        <CircuitBackground />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md">
            <span className="text-[#00D0FF] text-sm font-mono">CASE STUDIES</span>
          </div>
          <h1 className="text-white mb-6 text-5xl font-bold">Client Results</h1>
          <p className="text-[#C2C2CC] text-xl max-w-3xl mx-auto">
            Real projects across SEO, web design, digital marketing, and development — with measurable outcomes
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#1A1A22] border-y border-[#00D0FF]/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-12 md:gap-16 lg:gap-24 text-center">
            <div>
              <div className="text-[#75FF00] font-mono text-4xl mb-2 metric-glow">150+</div>
              <div className="text-[#C2C2CC] text-sm">Projects Completed</div>
            </div>
            {/* <div>
              <div className="text-[#75FF00] font-mono text-4xl mb-2 metric-glow">$2M+</div>
              <div className="text-[#C2C2CC] text-sm">Revenue Generated</div>
            </div> */}
            <div>
              <div className="text-[#75FF00] font-mono text-4xl mb-2 metric-glow">90%</div>
              <div className="text-[#C2C2CC] text-sm">Client Retention</div>
            </div>
            <div>
              <div className="text-[#75FF00] font-mono text-4xl mb-2 metric-glow">24/7</div>
              <div className="text-[#C2C2CC] text-sm">Support Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Case Studies */}
      <section className="py-20 bg-[#14141A] relative">
        <LogoDecorative position="top-left" className="w-48 h-48 opacity-20" />
        <LogoDecorative position="bottom-right" className="w-56 h-56 opacity-20" />
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className={
                  selectedCategory === category.id
                    ? 'bg-[#75FF00] text-[#14141A] hover:bg-[#75FF00]/90 font-medium'
                    : 'border-[#00D0FF]/30 text-[#00D0FF] hover:bg-[#00D0FF]/10'
                }
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((study) => (
              <Card
                key={study.slug}
                className="bg-[#1A1A22] border-[#00D0FF]/20 hover:border-[#00D0FF] transition-all overflow-hidden group shadow-lg hover:shadow-2xl hover:glow-cyan"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A22] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 text-[#00D0FF] opacity-30 group-hover:opacity-60 transition-opacity">
                    <TrendingUp size={48} />
                  </div>
                </div>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge className="bg-[#00D0FF]/10 text-[#00D0FF] border-[#00D0FF]/30 text-xs">
                      {study.industry}
                    </Badge>
                  </div>
                  <h3 className="text-white mb-2 text-lg font-semibold group-hover:text-[#00D0FF] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-[#C2C2CC] text-sm mb-1 font-mono">{study.client}</p>

                  <div className="my-4 pt-4 border-t border-[#00D0FF]/10">
                    <p className="text-[#C2C2CC] text-xs mb-2 font-semibold">CHALLENGE</p>
                    <p className="text-[#C2C2CC] text-sm mb-4 line-clamp-2">{study.challenge}</p>
                    <p className="text-[#C2C2CC] text-xs mb-2 font-semibold">SOLUTION</p>
                    <p className="text-[#C2C2CC] text-sm line-clamp-2">{study.solution}</p>
                  </div>

                  <div className="space-y-3 mb-6 pt-4 border-t border-[#00D0FF]/10">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="text-[#00D0FF]">{getMetricIcon(result.icon)}</div>
                          <span className="text-[#C2C2CC] text-xs">{result.metric}</span>
                        </div>
                        <span className="text-[#75FF00] font-mono text-sm font-bold">{result.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[#00D0FF] text-xs font-mono bg-[#00D0FF]/5 px-2 py-1 rounded border border-[#00D0FF]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    onClick={() => onNavigate(`portfolio/${study.slug}`)}
                    className="w-full text-[#00D0FF] hover:bg-[#00D0FF]/10 hover:text-white border border-[#00D0FF]/20 font-medium text-sm"
                  >
                    View Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
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
          <h2 className="text-white mb-4 text-4xl font-bold">Ready to Scale Your Operations?</h2>
          <p className="text-[#C2C2CC] text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can deliver similar results for your organization
          </p>
          <Button
            size="lg"
            className="bg-[#75FF00] text-[#14141A] hover:bg-[#75FF00]/90 glow-lime font-semibold px-8"
            onClick={() => onNavigate('contact')}
          >
            Start Your Project
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
}