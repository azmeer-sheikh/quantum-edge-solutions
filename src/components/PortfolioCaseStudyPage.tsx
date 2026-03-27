import { ArrowLeft, Clock, DollarSign, TrendingUp, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { CircuitBackground } from './CircuitBackground';
import { portfolioCaseStudies, type PortfolioMetric } from '../data/portfolioCaseStudies';

interface PortfolioCaseStudyPageProps {
  slug: string;
  onNavigate: (page: string) => void;
}

export function PortfolioCaseStudyPage({ slug, onNavigate }: PortfolioCaseStudyPageProps) {
  const caseStudy = portfolioCaseStudies.find((item) => item.slug === slug);

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

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-[#14141A] flex items-center justify-center px-4">
        <Card className="w-full max-w-xl bg-[#1A1A22] border border-[#00D0FF]/20 rounded-xl p-8">
          <CardContent className="text-center space-y-5">
            <h1 className="text-white text-2xl font-bold">Case Study Not Found</h1>
            <p className="text-[#C2C2CC]">
              The case study you are looking for does not exist or may have been moved.
            </p>
            <Button
              onClick={() => onNavigate('portfolio')}
              className="bg-[#75FF00] text-[#14141A] hover:bg-[#75FF00]/90 font-medium"
            >
              Back to Portfolio
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#14141A]">
      <section className="relative py-16 overflow-hidden hex-pattern border-b border-[#00D0FF]/10">
        <CircuitBackground />
        <div className="container mx-auto px-4 relative z-10">
          <Button
            variant="ghost"
            onClick={() => onNavigate('portfolio')}
            className="mb-8 text-[#00D0FF] hover:bg-[#00D0FF]/10 hover:text-white border border-[#00D0FF]/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>

          <div className="max-w-4xl">
            <Badge className="mb-5 bg-[#00D0FF]/10 text-[#00D0FF] border border-[#00D0FF]/20 text-xs font-medium">
              {caseStudy.industry}
            </Badge>
            <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-6">
              {caseStudy.title}
            </h1>
            <p className="text-[#C2C2CC] text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
              {caseStudy.summary}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-sm text-[#C2C2CC] font-mono">
              <span className="px-3 py-1 rounded border border-[#00D0FF]/20 bg-[#00D0FF]/5">{caseStudy.client}</span>
              <span className="px-3 py-1 rounded border border-[#75FF00]/20 bg-[#75FF00]/5 text-[#75FF00]">{caseStudy.category.toUpperCase()}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="rounded-xl overflow-hidden border border-[#00D0FF]/20 bg-[#1A1A22]">
              <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-[260px] md:h-[420px] object-cover" />
            </div>

            <Card className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-xl">
              <CardContent className="p-6 md:p-8 space-y-6">
                <div>
                  <h2 className="text-white text-xl font-semibold mb-2">Challenge</h2>
                  <p className="text-[#C2C2CC] leading-relaxed">{caseStudy.challenge}</p>
                </div>
                <div>
                  <h2 className="text-white text-xl font-semibold mb-2">Solution</h2>
                  <p className="text-[#C2C2CC] leading-relaxed">{caseStudy.solution}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-xl">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-white text-xl font-semibold mb-4">Key Results</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {caseStudy.results.map((result, index) => (
                    <div key={`${caseStudy.slug}-result-${index}`} className="p-4 rounded-lg border border-[#00D0FF]/20 bg-[#14141A]">
                      <div className="flex items-center gap-2 mb-2 text-[#00D0FF]">
                        {getMetricIcon(result.icon)}
                        <span className="text-sm text-[#C2C2CC]">{result.metric}</span>
                      </div>
                      <div className="text-[#75FF00] font-mono text-xl font-bold">{result.value}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <article className="space-y-5">
              {caseStudy.content.map((paragraph, index) => (
                <p key={`${caseStudy.slug}-paragraph-${index}`} className="text-[#C2C2CC] leading-relaxed text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
            </article>

            <div className="pt-6 border-t border-[#00D0FF]/10 flex flex-wrap gap-3">
              {caseStudy.technologies.map((technology) => (
                <span
                  key={`${caseStudy.slug}-${technology}`}
                  className="text-[#00D0FF] text-xs font-mono bg-[#00D0FF]/5 px-3 py-1 rounded border border-[#00D0FF]/20"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="pt-4">
              <Button
                onClick={() => onNavigate('portfolio')}
                className="bg-[#75FF00] text-[#14141A] hover:bg-[#75FF00]/90 font-medium"
              >
                View More Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
