export type ServiceCategory =
    | 'SEO Services'
    | 'Web Design'
    | 'Digital Marketing'
    | 'Google Ads'
    | 'Website Development'
    | 'WordPress Development'
    | 'Content Marketing';

export interface BlogArticle {
    slug: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    category: ServiceCategory;
    image: string;
    icon: 'code' | 'trending' | 'zap';
    featured?: boolean;
    content: string[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
    'SEO Services',
    'Web Design',
    'Digital Marketing',
    'Google Ads',
    'Website Development',
    'WordPress Development',
    'Content Marketing',
];

export const blogArticles: BlogArticle[] = [
    // ── SEO Services ──────────────────────────────────────────────────────────
    {
        slug: 'local-seo-domination-guide-2025',
        title: 'Local SEO Domination: How to Rank #1 in Your City in 2025',
        excerpt:
            'A proven framework for small and medium businesses to capture top local search rankings and drive foot traffic using modern SEO techniques.',
        author: 'Marcus Webb',
        date: 'March 18, 2026',
        readTime: '9 min read',
        category: 'SEO Services',
        image:
            'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        icon: 'trending',
        featured: true,
        content: [
            'Local SEO in 2025 is fundamentally about trust signals and relevance proximity. Google now cross-references your Google Business Profile, on-site schema, citation consistency, and review velocity before granting ranked visibility in any local map pack.',
            'The first priority is a fully optimized Google Business Profile. Every field must be complete: services, hours, photos, questions and answers, and regular posts. Businesses that post at least weekly see measurably higher impression rates than dormant profiles.',
            'On-page local relevance is the second pillar. City-specific landing pages with genuine content — not templated text — signal topical authority. Each page needs proper LocalBusiness schema, an embedded map, and a NAP (Name, Address, Phone) that matches every directory listing exactly.',
            'Citation building remains important but quality now outweighs quantity. Focus on authoritative directories: Google, Yelp, BBB, industry associations, and local chamber of commerce pages. Inconsistent NAP data across sources creates conflicting signals that suppress rankings.',
            'Finally, review strategy is a multiplier. Businesses with a steady stream of recent reviews in their target city rank higher and convert better. Build a post-service review request process and respond professionally to all reviews — both positive and negative — as engagement is factored into ranking signals.',
            'Execute this framework consistently for 90 days and most local markets will show clear ranking movement. Local SEO compounds over time; the businesses that stay disciplined with these fundamentals consistently outrank those chasing shortcuts.'
        ]
    },
    {
        slug: 'technical-seo-core-web-vitals-optimization',
        title: 'Technical SEO: Passing Core Web Vitals and Winning Organic Traffic',
        excerpt:
            'How to audit and fix the technical signals Google uses to evaluate page experience — and turn those improvements into ranking gains.',
        author: 'Priya Nair',
        date: 'March 10, 2026',
        readTime: '11 min read',
        category: 'SEO Services',
        image:
            'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        icon: 'code',
        content: [
            'Core Web Vitals — Largest Contentful Paint, Cumulative Layout Shift, and Interaction to Next Paint — are now permanent ranking signals. Sites that fail these thresholds see suppressed organic visibility even when their on-page content is strong.',
            'LCP is the most commonly failed metric. The primary causes are unoptimized hero images, render-blocking resources, and slow server response. Serving images in WebP format, implementing lazy loading for off-screen assets, and using a CDN typically resolves the majority of LCP issues.',
            'CLS failures often come from images without defined dimensions, ads injected into the page after load, and late-loading web fonts. Reserving space for dynamic elements and preloading critical fonts eliminates most shift events.',
            'INP replaced FID as the interactivity metric in 2024. It measures the latency of all user interactions, not just the first. Heavy JavaScript execution on the main thread is the primary cause. Deferring non-critical scripts and using web workers for computation-heavy tasks addresses this.',
            'Beyond Core Web Vitals, a technical audit should cover crawl budget efficiency, canonical tag accuracy, hreflang implementation for multilingual sites, and structured data correctness. A clean technical foundation amplifies every content investment you make.',
            'Run audits monthly. Technical debt accumulates quickly through CMS updates, new third-party scripts, and image additions. Teams that treat technical SEO as a continuous process maintain their rankings; those that audit once and move on gradually erode their position.'
        ]
    },
    // ── Web Design ────────────────────────────────────────────────────────────
    {
        slug: 'conversion-focused-web-design-principles',
        title: 'Conversion-Focused Web Design: Turning Visitors into Customers',
        excerpt:
            'The design decisions that separate high-converting business websites from beautiful-but-ineffective ones — with real data behind every principle.',
        author: 'Sophie Laurent',
        date: 'March 14, 2026',
        readTime: '10 min read',
        category: 'Web Design',
        image:
            'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        icon: 'zap',
        content: [
            'Most business websites fail not because they are poorly designed aesthetically, but because design decisions are made without conversion intent. Every layout choice, color selection, and copy block should answer one question: does this move the visitor toward the desired action?',
            'Above-the-fold clarity is the highest-leverage improvement for most sites. Visitors decide within seconds whether they are in the right place. A clear headline stating who you help and how, supported by a single visible call-to-action, consistently outperforms cluttered hero sections with multiple competing messages.',
            'Trust architecture is the second most impactful element. Logotypes of known clients, review counts, certifications, and case study results positioned near conversion points reduce friction at the moment of decision. Trust signals work best when they are specific — a named client testimonial outperforms a generic five-star quote.',
            'Mobile-first design is no longer optional. Over 60 percent of B2B site visits now begin on mobile. Navigation that requires pinching, buttons sized below 44px tap targets, and forms with non-native input types create drop-off before the conversion moment ever arrives.',
            'Page speed is a design responsibility. A visually impressive site that loads slowly converts poorly. Designers and developers must collaborate on image compression, animation performance, and third-party script weight from the earliest stages of a project.',
            'Finally, test relentlessly. A/B testing headlines, CTA copy, button color, and form length generates the evidence needed to move from opinion-driven design to data-driven design. Small, consistent improvements compound into significant conversion gains over six to twelve months.'
        ]
    },
    // ── Digital Marketing ─────────────────────────────────────────────────────
    {
        slug: 'digital-marketing-funnel-strategy-2026',
        title: 'Full-Funnel Digital Marketing Strategy: From Awareness to Retention',
        excerpt:
            'How to build a digital marketing system that generates leads at the top, converts them in the middle, and retains customers at the bottom — aligned to real business revenue.',
        author: 'Dr. Alex Chen',
        date: 'March 8, 2026',
        readTime: '12 min read',
        category: 'Digital Marketing',
        image:
            'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        icon: 'trending',
        content: [
            'Most businesses market to the bottom of the funnel exclusively — running ads and campaigns targeting purchase-ready audiences only. This creates a constant cost problem: you are always buying intent you did not build, at prices set by competitors bidding for the same audience.',
            'A full-funnel strategy inverts this economics over time. Awareness content and brand channels build audiences that later convert at lower cost because they already know and trust you. The companies that dominate their markets today invest in all three funnel stages simultaneously.',
            'At the awareness stage, the goal is reach and relevance — getting in front of the right people before they are searching for solutions. Video content, thought leadership articles, social proof campaigns, and organic SEO all operate here. Success is measured in reach, engagement, and brand search volume growth.',
            'In the consideration stage, you are nurturing interest into evaluation. Email sequences, retargeting campaigns, comparison content, and live webinars all serve this stage. The metric that matters is qualified prospect growth — people who match your ICP and are actively comparing options.',
            'The conversion stage is where most companies already invest heavily. Landing pages, conversion rate optimization, sales enablement content, and offer structure determine what percentage of your pipeline moves forward. Small improvements here have outsized revenue impact.',
            'Retention — often ignored as a marketing function — is where compounding growth happens. Onboarding email sequences, loyalty content, referral programs, and customer success touchpoints increase LTV, reduce churn, and generate word-of-mouth that feeds the top of your funnel at no cost.',
            'Map your current marketing activity to these four stages. Most teams will find concentration in conversion and neglect in awareness and retention. Redistributing budget toward those neglected stages is the highest-return strategic move most businesses can make.'
        ]
    },
    // ── Google Ads ────────────────────────────────────────────────────────────
    {
        slug: 'google-ads-quality-score-and-roas-optimization',
        title: 'Google Ads ROAS Optimization: Cutting Wasted Spend and Scaling Winners',
        excerpt:
            'A practical guide to auditing Google Ads accounts, improving Quality Score, and building campaigns that consistently return positive ROAS.',
        author: 'James Okafor',
        date: 'March 5, 2026',
        readTime: '10 min read',
        category: 'Google Ads',
        image:
            'https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        icon: 'zap',
        content: [
            'Most Google Ads accounts accumulate wasted spend silently. Search term reports reveal queries that triggered your ads but have no business relevance. Negative keyword lists are often the first and fastest ROAS improvement available — spending an hour building them commonly recovers 15 to 25 percent of monthly budget.',
            'Quality Score is Google\'s assessment of your ad relevance, expected clickthrough rate, and landing page experience. It directly affects your ad auction position and the cost per click you pay. A Quality Score of 8 to 10 can mean paying 30 to 50 percent less per click than a competitor with the same bid.',
            'Ad group structure is the foundation of Quality Score. Each ad group should contain tightly themed keywords — ideally 5 to 15 per group — with ads that directly reference those keywords and a landing page whose headline and content mirror the ad message. This tight alignment is what Google rewards.',
            'Bidding strategy selection depends on your conversion data volume. Smart bidding algorithms like Target ROAS and Target CPA require at least 30 to 50 conversions per month to optimize effectively. Accounts below this threshold often perform better with manual CPC bidding while volume builds.',
            'Performance Max campaigns are now the default push from Google, but they require strong creative assets and clear conversion signals to work. Feed them with high-quality image and video assets, specific audience signals, and a conversion setup that only counts genuine business outcomes — not page views or micro-conversions.',
            'Review account performance weekly, not monthly. Underperforming keywords should be paused within two weeks of sustained poor performance rather than left running. Budget reallocation from weak campaigns to proven winners is the primary lever for sustained ROAS growth.'
        ]
    },
    // ── Website Development ───────────────────────────────────────────────────
    {
        slug: 'modern-business-website-development-stack',
        title: 'Modern Business Website Development: Stack Choices That Drive Performance',
        excerpt:
            'How the technology stack behind your business website directly affects speed, SEO rankings, and long-term maintenance costs — and what we recommend in 2026.',
        author: 'Sarah Martinez',
        date: 'February 28, 2026',
        readTime: '11 min read',
        category: 'Website Development',
        image:
            'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        icon: 'code',
        content: [
            'The technology stack of a business website is a long-term decision. Frameworks, CMS choices, and hosting infrastructure determine how quickly the site loads, how well it ranks in search, how much it costs to maintain, and how fast your team can publish new content. These tradeoffs deserve more strategic attention than most businesses give them.',
            'For performance-critical business sites — landing pages, service pages, portfolio sites — static-first or server-rendered frameworks like Next.js, Astro, or SvelteKit consistently outperform traditional PHP-rendered CMS setups on Core Web Vitals. Pre-rendered HTML eliminates server processing time entirely for the initial page load.',
            'Content management needs vary widely by team. Marketing teams that need frequent content updates do best with headless CMS solutions like Sanity, Contentful, or Directus paired with a modern frontend, giving them a clean editorial interface without sacrificing rendering performance.',
            'Hosting decisions have more SEO and performance impact than most teams realize. Edge networks with CDN distribution reduce time-to-first-byte globally. Platforms like Vercel, Netlify, and Cloudflare Pages have made enterprise-grade distribution accessible at low cost for most business sites.',
            'Database-driven sites — membership platforms, booking systems, e-commerce — require more architectural care. PostgreSQL on managed infrastructure like Supabase or PlanetScale provides the reliability and query power needed, with connection pooling and read replicas available as traffic grows.',
            'Security baseline is non-negotiable regardless of stack. HTTPS enforcement, Content Security Policy headers, proper cookie flags, input sanitization, and dependency auditing should be standard on every production deployment. A well-performing site that exposes user data is not a successful project.'
        ]
    },
    // ── WordPress Development ─────────────────────────────────────────────────
    {
        slug: 'wordpress-performance-optimization-guide',
        title: 'WordPress Performance Optimization: Speed Up Your Site to Win SEO Rankings',
        excerpt:
            'Practical, tested techniques to transform a slow WordPress site into a fast, technically sound platform that search engines and users reward.',
        author: 'Marcus Webb',
        date: 'February 20, 2026',
        readTime: '10 min read',
        category: 'WordPress Development',
        image:
            'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        icon: 'code',
        content: [
            'WordPress powers over 40 percent of the web, but default WordPress configurations are not optimized for speed. Out of the box, a WordPress site with a standard theme and a few plugins will typically score poorly on Core Web Vitals — and those scores now directly influence organic rankings.',
            'Hosting is the single largest performance variable for WordPress. Shared hosting with resource contention causes inconsistent response times that no plugin can fully overcome. Managed WordPress hosting on platforms like Kinsta, WP Engine, or Cloudways provides server-level optimizations, PHP 8.x support, and isolated resources that form the foundation for fast performance.',
            'Image optimization is where most sites recover the most time. Uncompressed JPEG and PNG files are a common culprit behind high LCP scores. Converting images to WebP format, serving them at the correct display dimensions, and using native lazy loading brings the most impactful LCP improvements without code changes.',
            'Caching at multiple layers dramatically reduces server processing time. Page caching with LiteSpeed Cache, W3 Total Cache, or WP Rocket serves pre-built HTML to returning visitors. Object caching with Redis or Memcached speeds up database-driven queries. Browser cache headers ensure repeat visits load from local storage.',
            'Plugin audits are essential maintenance. Each active plugin adds PHP execution, database queries, and potentially external HTTP requests on every page load. Remove plugins that duplicate functionality, replace heavy plugins with lightweight code alternatives where possible, and test site speed after every significant plugin change.',
            'Database optimization is frequently overlooked. WordPress accumulates post revisions, expired transients, and orphaned metadata over time. Regular database cleanup using WP-Optimize or equivalent tools, combined with indexing on custom query columns, keeps query performance stable as content volume grows.'
        ]
    },
    // ── Content Marketing ─────────────────────────────────────────────────────
    {
        slug: 'content-marketing-strategy-that-drives-seo-and-leads',
        title: 'Content Marketing Strategy That Simultaneously Drives SEO and Qualified Leads',
        excerpt:
            'How to create a content program where every article ranks in search, builds authority, and moves readers toward becoming customers — not just traffic.',
        author: 'Dr. Emily Roberts',
        date: 'February 15, 2026',
        readTime: '9 min read',
        category: 'Content Marketing',
        image:
            'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        icon: 'trending',
        content: [
            'Most content marketing programs fail to generate leads because they target informational keywords without considering buyer intent. Traffic without intent correlation produces readers who learn from your content but never consider your service. Strategic content targets keywords at every funnel stage and maps them to conversion paths.',
            'Keyword research for content marketing should begin with your service pages. What terms do your ideal clients search before they search for your exact service? Those adjacent informational queries — how-to guides, comparison articles, symptom-problem searches — are the content opportunities that capture audiences earlier in the buying journey.',
            'Topic clusters are the architecture that makes content compound over time. A pillar page on your core service, surrounded by cluster articles on related subtopics, creates internal linking density and topical authority signals that lift the entire cluster in rankings. Sites using this structure consistently outrank sites with disconnected article libraries.',
            'Content quality thresholds have risen significantly. Google\'s Helpful Content standards require that articles genuinely answer questions better than competing results. Thin content rephrasing existing material, articles without original perspective, and posts that leave readers still searching rank poorly and drag site-wide authority down.',
            'Distribution is as important as creation. An article that ranks on page two and sits dormant in your blog generates limited impact. Repurposing content into email newsletters, LinkedIn posts, and short-form video extends reach without proportional effort. Amplification channels also generate backlinks that improve search ranking.',
            'Measure content by business impact, not just traffic. Track which articles generate email signups, contact form completions, and ultimately closed revenue. This measurement gives you the data to double down on content types and topics that produce commercial outcomes rather than just impressions.'
        ]
    },
];

export const featuredBlogArticle = blogArticles.find((article) => article.featured) ?? blogArticles[0];
