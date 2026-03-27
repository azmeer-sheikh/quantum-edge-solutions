import { useState } from 'react';
import { Calendar, Clock, ArrowRight, Code, Zap, TrendingUp, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { CircuitBackground } from './CircuitBackground';
import { LogoDecorative } from './Logo';
import { blogArticles, featuredBlogArticle, SERVICE_CATEGORIES } from '../data/blogArticles';

interface BlogPageProps {
  onNavigate: (page: string) => void;
}

export function BlogPage({ onNavigate }: BlogPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('All Posts');

  const blogPosts = blogArticles.filter((post) => !post.featured);
  const categories = ['All Posts', ...SERVICE_CATEGORIES];

  const getIcon = (icon: 'code' | 'trending' | 'zap') => {
    switch (icon) {
      case 'trending':
        return <TrendingUp className="w-12 h-12" />;
      case 'zap':
        return <Zap className="w-12 h-12" />;
      case 'code':
      default:
        return <Code className="w-12 h-12" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#14141A]">
      {/* === HERO SECTION - UNCHANGED === */}
      <section className="relative py-20 overflow-hidden hex-pattern">
        <CircuitBackground />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md">
            <span className="text-[#00D0FF] text-sm font-mono">INSIGHTS & RESEARCH</span>
          </div>
          <h1 className="text-white mb-6 text-5xl">Expert Insights</h1>
          <p className="text-[#C2C2CC] text-xl max-w-3xl mx-auto">
            Guides, strategies, and deep dives across SEO, web design, digital marketing, and more
          </p>
        </div>
      </section>

      {/* === FEATURED POST - Clean & Professional === */}
      <section className="py-16 bg-[#14141A]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="bg-[#1A1A22] border border-[#00D0FF]/20 overflow-hidden rounded-xl shadow-xl">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-full overflow-hidden">
                  <img
                    src={featuredBlogArticle.image}
                    alt={featuredBlogArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14141A]/80 via-[#14141A]/20 to-transparent" />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-[#75FF00] text-[#14141A] font-medium text-xs">
                    FEATURED ARTICLE
                  </Badge>
                  <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 leading-tight">
                    {featuredBlogArticle.title}
                  </h2>
                  <p className="text-[#C2C2CC] text-base mb-6 leading-relaxed">
                    {featuredBlogArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-[#C2C2CC] mb-6 font-mono">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="text-[#00D0FF]" />
                      <span>{featuredBlogArticle.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} className="text-[#00D0FF]" />
                      <span>{featuredBlogArticle.readTime}</span>
                    </div>
                  </div>
                  <Button
                    className="w-fit bg-[#75FF00] text-[#14141A] hover:bg-[#75FF00]/90 font-medium px-6"
                    onClick={() => onNavigate(`blog/${featuredBlogArticle.slug}`)}
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* === CATEGORY FILTER - Subtle & Clean === */}
      <section className="py-8 bg-[#1A1A22] border-y border-[#00D0FF]/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? 'bg-[#00D0FF] text-[#14141A] hover:bg-[#00D0FF]/90 font-medium text-xs'
                    : 'text-[#00D0FF] hover:bg-[#00D0FF]/10 hover:text-white border border-[#00D0FF]/20 font-medium text-xs'
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* === BLOG GRID - Professional Cards === */}
      <section className="py-20 bg-[#14141A] relative">
        <LogoDecorative position="top-right" className="absolute top-10 right-10 w-40 h-40 opacity-10 pointer-events-none" />
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter((post) => selectedCategory === 'All Posts' || post.category === selectedCategory)
              .map((post) => (
                <Card
                  key={post.slug}
                  className="bg-[#1A1A22] border border-[#00D0FF]/10 rounded-xl overflow-hidden hover:border-[#00D0FF]/30 transition-all duration-300 hover:shadow-xl group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A22]/90 via-[#1A1A22]/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-[#75FF00] opacity-90 group-hover:opacity-100 transition-opacity">
                      {getIcon(post.icon)}
                    </div>
                  </div>

                  <CardHeader className="pt-5 pb-3">
                    <Badge className="w-fit mb-2 bg-[#00D0FF]/10 text-[#00D0FF] border border-[#00D0FF]/20 text-xs font-medium">
                      {post.category}
                    </Badge>
                    <h3 className="text-white text-lg font-semibold leading-tight line-clamp-2 group-hover:text-[#00D0FF] transition-colors">
                      {post.title}
                    </h3>
                  </CardHeader>

                  <CardContent className="pb-6">
                    <p className="text-[#C2C2CC] text-sm mb-4 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-3 text-xs text-[#C2C2CC] mb-4 font-mono">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} className="text-[#00D0FF]" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={12} className="text-[#00D0FF]" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <p className="text-[#C2C2CC]/70 text-xs font-mono mb-4">
                      By {post.author}
                    </p>

                    <Button
                      variant="ghost"
                      onClick={() => onNavigate(`blog/${post.slug}`)}
                      className="w-full text-[#00D0FF] hover:bg-[#00D0FF]/10 hover:text-white border border-[#00D0FF]/20 font-medium text-sm"
                    >
                      Read Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>

        </div>
      </section>

      {/* === NEWSLETTER - Clean & Focused === */}
      <section className="py-20 bg-[#1A1A22]">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto bg-[#14141A] border border-[#00D0FF]/20 rounded-xl p-8 md:p-10">
            <CardContent className="text-center space-y-6">
              <Mail className="w-12 h-12 mx-auto text-[#00D0FF]" />
              <div>
                <h2 className="text-white text-2xl md:text-3xl font-bold mb-3">
                  Technical Newsletter
                </h2>
                <p className="text-[#C2C2CC] text-base max-w-md mx-auto leading-relaxed">
                  Weekly insights on engineering, data science, and digital marketing — delivered straight to your inbox.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-grow px-5 py-3 rounded-lg bg-[#1A1A22] border border-[#00D0FF]/20 text-white placeholder-[#C2C2CC]/50 focus:outline-none focus:border-[#00D0FF] transition-colors text-sm"
                />
                <Button className="bg-[#75FF00] text-[#14141A] hover:bg-[#75FF00]/90 font-medium px-6">
                  Subscribe
                </Button>
              </div>
              <p className="text-[#C2C2CC]/70 text-sm font-mono">
                Join 10,000+ engineering leaders and data professionals
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* === POPULAR TOPICS - Pill Style === */}
      <section className="py-20 bg-[#14141A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-[#00D0FF]/10 border border-[#00D0FF]/20 rounded-md mb-4">
              <span className="text-[#00D0FF] text-xs font-mono">OUR SERVICES</span>
            </div>
            <h2 className="text-white text-3xl md:text-4xl font-bold">
              Browse by Service
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {SERVICE_CATEGORIES.map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedCategory(topic)}
                className="px-4 py-2 bg-[#1A1A22] border border-[#00D0FF]/10 rounded-full hover:border-[#00D0FF]/30 hover:bg-[#00D0FF]/5 transition-all cursor-pointer"
              >
                <span className="text-[#C2C2CC] font-mono text-xs">{topic}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}