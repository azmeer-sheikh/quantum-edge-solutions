import { ArrowLeft, ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { CircuitBackground } from './CircuitBackground';
import { blogArticles } from '../data/blogArticles';

interface BlogArticlePageProps {
    slug: string;
    onNavigate: (page: string) => void;
}

export function BlogArticlePage({ slug, onNavigate }: BlogArticlePageProps) {
    const article = blogArticles.find((item) => item.slug === slug);

    if (!article) {
        return (
            <div className="min-h-screen bg-[#14141A] flex items-center justify-center px-4">
                <Card className="w-full max-w-xl bg-[#1A1A22] border border-[#00D0FF]/20 rounded-xl p-8">
                    <CardContent className="text-center space-y-5">
                        <h1 className="text-white text-2xl font-bold">Article Not Found</h1>
                        <p className="text-[#C2C2CC]">
                            The article you are looking for does not exist or may have been moved.
                        </p>
                        <Button
                            onClick={() => onNavigate('blog')}
                            className="bg-[#75FF00] text-[#14141A] hover:bg-[#75FF00]/90 font-medium"
                        >
                            Back to Blog
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
                        onClick={() => onNavigate('blog')}
                        className="mb-8 text-[#00D0FF] hover:bg-[#00D0FF]/10 hover:text-white border border-[#00D0FF]/20"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Blog
                    </Button>

                    <div className="max-w-4xl">
                        <Badge className="mb-5 bg-[#00D0FF]/10 text-[#00D0FF] border border-[#00D0FF]/20 text-xs font-medium">
                            {article.category}
                        </Badge>
                        <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-6">
                            {article.title}
                        </h1>
                        <p className="text-[#C2C2CC] text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
                            {article.excerpt}
                        </p>

                        <div className="flex flex-wrap items-center gap-5 text-sm text-[#C2C2CC] font-mono">
                            <div className="flex items-center gap-2">
                                <User size={14} className="text-[#00D0FF]" />
                                <span>{article.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={14} className="text-[#00D0FF]" />
                                <span>{article.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={14} className="text-[#00D0FF]" />
                                <span>{article.readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="rounded-xl overflow-hidden border border-[#00D0FF]/20 bg-[#1A1A22]">
                            <img src={article.image} alt={article.title} className="w-full h-[260px] md:h-[420px] object-cover" />
                        </div>

                        <article className="space-y-6">
                            {article.content.map((paragraph, index) => (
                                <p
                                    key={`${article.slug}-paragraph-${index}`}
                                    className="text-[#C2C2CC] leading-relaxed text-base md:text-lg"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </article>

                        {/* Prev / Next Article Navigation */}
                        {(() => {
                            const allArticles = blogArticles;
                            const idx = allArticles.findIndex(a => a.slug === article.slug);
                            const prev = idx > 0 ? allArticles[idx - 1] : null;
                            const next = idx < allArticles.length - 1 ? allArticles[idx + 1] : null;
                            if (!prev && !next) return null;
                            return (
                                <div className="pt-8 border-t border-[#00D0FF]/10">
                                    <div className={`grid gap-4 ${prev && next ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2'
                                        }`}>
                                        {/* Previous */}
                                        {prev ? (
                                            <button
                                                onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); onNavigate(`blog/${prev.slug}`); }}
                                                className="group flex items-center gap-4 bg-[#1A1A22] border border-[#00D0FF]/20 rounded-xl p-5 text-left hover:border-[#00D0FF]/60 hover:bg-[#00D0FF]/5 transition-all duration-300 cursor-pointer w-full"
                                            >
                                                <ArrowLeft size={22} className="text-[#00D0FF] shrink-0 group-hover:-translate-x-1 transition-transform duration-300" />
                                                <img
                                                    src={prev.image}
                                                    alt={prev.title}
                                                    className="w-16 h-16 object-cover rounded-lg shrink-0 border border-[#00D0FF]/10"
                                                />
                                                <div className="min-w-0">
                                                    <span className="block text-[#00D0FF] text-xs font-mono uppercase tracking-wider mb-1">Previous</span>
                                                    <span className="block text-white text-sm font-semibold leading-snug group-hover:text-[#00D0FF] transition-colors line-clamp-2">{prev.title}</span>
                                                    <span className="block text-[#C2C2CC] text-xs mt-1">{prev.category}</span>
                                                </div>
                                            </button>
                                        ) : <div />}

                                        {/* Next */}
                                        {next ? (
                                            <button
                                                onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); onNavigate(`blog/${next.slug}`); }}
                                                className="group flex items-center gap-4 bg-[#1A1A22] border border-[#75FF00]/20 rounded-xl p-5 text-right justify-end hover:border-[#75FF00]/60 hover:bg-[#75FF00]/5 transition-all duration-300 cursor-pointer w-full"
                                            >
                                                <div className="min-w-0">
                                                    <span className="block text-[#75FF00] text-xs font-mono uppercase tracking-wider mb-1 text-right">Next</span>
                                                    <span className="block text-white text-sm font-semibold leading-snug group-hover:text-[#75FF00] transition-colors line-clamp-2 text-right">{next.title}</span>
                                                    <span className="block text-[#C2C2CC] text-xs mt-1 text-right">{next.category}</span>
                                                </div>
                                                <img
                                                    src={next.image}
                                                    alt={next.title}
                                                    className="w-16 h-16 object-cover rounded-lg shrink-0 border border-[#75FF00]/10"
                                                />
                                                <ArrowRight size={22} className="text-[#75FF00] shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                                            </button>
                                        ) : <div />}
                                    </div>
                                </div>
                            );
                        })()}
                    </div>
                </div>
            </section>
        </div>
    );
}
