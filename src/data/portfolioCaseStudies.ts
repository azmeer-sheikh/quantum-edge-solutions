import type { ServiceCategory } from './blogArticles';

export interface PortfolioMetric {
    metric: string;
    value: string;
    icon: 'trending' | 'dollar' | 'clock' | 'users';
}

export interface PortfolioCaseStudy {
    slug: string;
    category: ServiceCategory;
    title: string;
    client: string;
    industry: string;
    challenge: string;
    solution: string;
    results: PortfolioMetric[];
    technologies: string[];
    image: string;
    summary: string;
    content: string[];
}

export const portfolioCaseStudies: PortfolioCaseStudy[] = [
    // ── SEO Services ──────────────────────────────────────────────────────────
    {
        slug: 'local-seo-ranking-dental-clinic',
        category: 'SEO Services',
        title: 'Local SEO: #1 Google Rankings for Multi-Location Dental Clinic',
        client: 'BrightSmile Dental Group',
        industry: 'Healthcare',
        challenge: 'Zero visibility in local search across 5 clinic locations',
        solution: 'Full local SEO audit, GBP optimization, citation building, and content strategy',
        results: [
            { metric: 'Organic Calls / Month', value: '+340%', icon: 'trending' },
            { metric: 'Map Pack Rankings', value: '#1 in 4/5 Cities', icon: 'users' },
            { metric: 'New Patient Bookings', value: '+190%', icon: 'dollar' }
        ],
        technologies: ['Google Business Profile', 'Schema Markup', 'BrightLocal', 'Ahrefs', 'GA4'],
        image:
            'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        summary:
            'BrightSmile went from invisible in local search to dominating map packs in four cities within six months.',
        content: [
            'BrightSmile Dental Group operated five clinics across the region but appeared nowhere in local search results. Competitors with inferior services were capturing all organic appointment bookings simply by having optimized digital presences.',
            'We began with a full technical and local SEO audit. Each location had inconsistent NAP data spread across dozens of directories, no structured data on the website, and Google Business Profiles that were incomplete or unverified.',
            'Phase one was foundational cleanup: NAP standardization across all major citation sources, complete GBP optimization for each location including services, photos, Q&A, and weekly post cadence, and LocalBusiness schema deployed on every location page.',
            'Phase two was content — we built individual location landing pages with genuine, city-specific content rather than templated text. Each page included embedded maps, patient testimonials from that location, and comprehensive FAQ sections addressing local patient concerns.',
            'Within six months, BrightSmile ranked in the map pack for primary keywords in four of five target cities. Organic patient calls increased by 340% and new patient bookings from search grew by 190%, providing a clear return that exceeded campaign costs within the first quarter of rankings.'
        ]
    },
    {
        slug: 'technical-seo-ecommerce-platform',
        category: 'SEO Services',
        title: 'Technical SEO Overhaul: E-Commerce Platform Recovers 65% Lost Traffic',
        client: 'StyleForward Retail',
        industry: 'E-Commerce',
        challenge: 'Core Web Vitals failure and crawl issues suppressing 65% of organic traffic',
        solution: 'Technical SEO audit, Core Web Vitals remediation, and crawl architecture fix',
        results: [
            { metric: 'Organic Traffic Recovery', value: '+65%', icon: 'trending' },
            { metric: 'LCP Score', value: 'Good (1.8s)', icon: 'clock' },
            { metric: 'Revenue from SEO', value: '+$180K/mo', icon: 'dollar' }
        ],
        technologies: ['Next.js', 'WebP/AVIF', 'Cloudflare CDN', 'Google Search Console', 'Screaming Frog'],
        image:
            'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        summary:
            'StyleForward recovered 65% of suppressed organic traffic and $180K in monthly SEO revenue through technical remediation.',
        content: [
            'StyleForward had seen organic traffic decline steadily for 18 months following a platform migration. Search Console showed a large volume of URLs with Core Web Vitals failures and crawl errors that had never been addressed post-launch.',
            'Our audit identified three critical problem areas: LCP failures caused by unoptimized hero images and render-blocking scripts, thousands of faceted navigation URLs consuming crawl budget without providing indexable value, and canonicalization issues from the migration creating duplicate content across hundreds of product pages.',
            'We prioritized by impact. First, we converted all product images to WebP format, implemented CDN delivery, and deferred non-critical JavaScript — bringing LCP from 4.8 seconds to 1.8 seconds across the entire category and product page templates.',
            'Second, we deployed robots.txt and canonical tag fixes to eliminate the crawl budget drain from faceted navigation, freeing Googlebot to index the priority product catalog more efficiently.',
            'Third, we resolved the duplicate content signals from the migration using proper canonicals and 301 redirects where appropriate. Within four months, suppressed product pages began reclaiming their pre-migration rankings and organic revenue recovered by the equivalent of $180,000 per month.'
        ]
    },
    // ── Web Design ────────────────────────────────────────────────────────────
    {
        slug: 'law-firm-website-redesign-conversion',
        category: 'Web Design',
        title: 'Law Firm Website Redesign: 3x More Consultation Bookings',
        client: 'Harrington & Associates',
        industry: 'Legal Services',
        challenge: 'Outdated website generating near-zero qualified leads',
        solution: 'Full conversion-focused redesign with trust architecture and lead funnels',
        results: [
            { metric: 'Consultation Bookings', value: '+220%', icon: 'users' },
            { metric: 'Avg. Session Duration', value: '+85%', icon: 'clock' },
            { metric: 'Bounce Rate', value: '-42%', icon: 'trending' }
        ],
        technologies: ['React', 'Tailwind CSS', 'Calendly Integration', 'HubSpot CRM', 'Cloudflare'],
        image:
            'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        summary:
            'Harrington & Associates tripled consultation bookings within 60 days of launching the redesigned website.',
        content: [
            'Harrington & Associates had a website built ten years prior that loaded slowly, had no mobile optimization, and buried the consultation booking option three pages deep. Most visitors left without contacting the firm.',
            'Our design audit identified the core conversion failures: unclear hero messaging, no visible trust signals, a contact form that asked too many questions upfront, and a site that was unusable on mobile screens.',
            'The redesign started with the value proposition. The new homepage hero communicated the firm\'s specialty, experience, and a clear primary CTA — "Book a Free Consultation" — visible without scrolling on every device.',
            'We built a trust architecture layer using attorney bar certifications, notable case outcomes, and a featured client testimonial section with named, photographed reviews positioned immediately above the conversion form — reducing decision friction at the most critical moment.',
            'The booking process was streamlined to a two-step flow: a short qualification form followed by a Calendly integration for instant scheduling. Within 60 days of launch, consultation bookings had increased by 220%, session duration was up 85%, and the bounce rate dropped by 42%.'
        ]
    },
    // ── Digital Marketing ─────────────────────────────────────────────────────
    {
        slug: 'digital-marketing-saas-lead-generation',
        category: 'Digital Marketing',
        title: 'Full-Funnel Digital Marketing: 400% Lead Growth for B2B SaaS',
        client: 'VaultOps Platform',
        industry: 'B2B SaaS',
        challenge: 'High CAC and inconsistent lead volume from single-channel approach',
        solution: 'Full-funnel strategy across SEO, LinkedIn, email nurture, and retargeting',
        results: [
            { metric: 'Qualified Leads / Month', value: '+400%', icon: 'trending' },
            { metric: 'CAC Reduction', value: '-52%', icon: 'dollar' },
            { metric: 'Pipeline Value', value: '+$1.2M', icon: 'dollar' }
        ],
        technologies: ['HubSpot', 'LinkedIn Ads', 'Mailchimp', 'Google Analytics 4', 'Hotjar'],
        image:
            'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        summary:
            'VaultOps moved from unpredictable lead acquisition to a compounding full-funnel system delivering 4x the qualified opportunities.',
        content: [
            'VaultOps had 90% of its marketing budget in Google Ads and was seeing rising CPCs with declining lead quality. Brand awareness was low, sales cycles were long, and the pipeline was volatile month to month.',
            'We diagnosed the core problem as bottom-of-funnel concentration: money was spent buying intent from audiences with no prior brand exposure, competing on price against established players.',
            'The strategy we implemented started at the awareness layer — a LinkedIn organic and paid program targeting ICP job titles with educational content about the operational problems VaultOps solves. This built a retargetable audience that arrived at conversion with existing brand familiarity.',
            'A content-driven SEO program created demand capture for informational searches in VaultOps\'s problem space. These articles ranked, drove traffic, and fed an email nurture sequence that moved cold readers toward demo requests over an 8-week journey.',
            'Google Ads spend was restructured around branded and high-intent queries only, dramatically reducing waste. Within six months, qualified leads grew by 400%, customer acquisition cost dropped by 52%, and the pipeline value attributable to marketing reached $1.2M.'
        ]
    },
    // ── Google Ads ────────────────────────────────────────────────────────────
    {
        slug: 'google-ads-roas-home-services',
        category: 'Google Ads',
        title: 'Google Ads Turnaround: 8x ROAS for Home Services Company',
        client: 'PrimeHome Services',
        industry: 'Home Services',
        challenge: 'Google Ads spending $18K/month with 1.2x ROAS and declining returns',
        solution: 'Full account restructure, quality score optimization, and smart bidding implementation',
        results: [
            { metric: 'ROAS', value: '8.4x', icon: 'dollar' },
            { metric: 'Cost Per Lead', value: '-67%', icon: 'trending' },
            { metric: 'Monthly Revenue from Ads', value: '+$95K', icon: 'dollar' }
        ],
        technologies: ['Google Ads', 'Google Analytics 4', 'CallRail', 'Looker Studio', 'Zapier'],
        image:
            'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        summary:
            'PrimeHome recovered from near-breaking-even Google Ads to an 8.4x ROAS through systematic account restructuring.',
        content: [
            'PrimeHome was spending $18,000 per month on Google Ads with a return that barely covered costs. The account had grown organically over years without strategic oversight — hundreds of keywords across a few broad ad groups, minimal negative keyword lists, and ad copy that had not been updated in two years.',
            'Our audit found the immediate problems: over 60% of matched search queries were irrelevant to the services offered, Quality Scores across primary ad groups averaged 4 out of 10, and landing pages were sending all ad traffic to the generic homepage rather than service-specific pages.',
            'We rebuilt the account from scratch. Services were mapped to dedicated campaigns with tightly themed ad groups of 8 to 12 closely related keywords each. Ad copy was rewritten to directly reflect the search query for each group, immediately improving expected CTR and Quality Score.',
            'Negative keyword libraries were built exhaustively — blocking irrelevant industries, DIY queries, and competitor brand terms. Budget was reallocated from campaigns with consistently poor historical conversion rates to the top-performing service areas.',
            'New landing pages for each service category featured above-the-fold trust signals, clear pricing anchors, and simplified contact forms. Within nine weeks, ROAS moved from 1.2x to 8.4x and cost per lead dropped by 67%, creating an additional $95,000 in monthly attributable revenue.'
        ]
    },
    // ── Website Development ───────────────────────────────────────────────────
    {
        slug: 'business-website-development-restaurant-chain',
        category: 'Website Development',
        title: 'Custom Website Development: Restaurant Chain Increases Online Orders 280%',
        client: 'FreshTable Restaurant Group',
        industry: 'Food & Beverage',
        challenge: 'Third-party ordering platform fees consuming 30% of online revenue',
        solution: 'Custom website with integrated ordering, loyalty program, and location management',
        results: [
            { metric: 'Online Order Revenue', value: '+280%', icon: 'dollar' },
            { metric: 'Platform Fees Eliminated', value: '$42K/yr', icon: 'dollar' },
            { metric: 'Page Load Speed', value: '1.2s', icon: 'clock' }
        ],
        technologies: ['Next.js', 'Supabase', 'Stripe', 'Tailwind CSS', 'Cloudflare'],
        image:
            'https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        summary:
            'FreshTable replaced costly third-party ordering with a custom platform, boosting online revenue and eliminating $42K in annual fees.',
        content: [
            'FreshTable operated through industry aggregator platforms for all online ordering. While this provided initial convenience, platform commissions were consuming 28 to 32 percent of every online transaction — a cost that was eroding margin as digital ordering volumes grew.',
            'We designed and built a fully custom website with first-party ordering capability, loyalty point tracking, and a location management system their team could operate without developer assistance.',
            'The frontend was built with Next.js for fast server-rendered performance. Static pages for marketing content and menus delivered sub-1.5-second load times, while the ordering workflow used optimistic UI patterns to feel instantaneous during cart operations.',
            'Stripe handled payment processing with a direct integration — no middleware — keeping transaction fees to standard rates and all customer payment data under FreshTable\'s PCI-compliant infrastructure.',
            'We implemented a loyalty program that tracked spend across locations and issued rewards automatically. This created a direct retention incentive for customers to order through the FreshTable website instead of aggregators. Within the first year, FreshTable eliminated $42,000 in platform fees and online order revenue grew by 280%.'
        ]
    },
    // ── WordPress Development ─────────────────────────────────────────────────
    {
        slug: 'wordpress-redesign-financial-services',
        category: 'WordPress Development',
        title: 'WordPress Overhaul: Financial Advisory Firm Doubles Organic Leads',
        client: 'ClearPath Financial Advisors',
        industry: 'Financial Services',
        challenge: 'Slow, outdated WordPress site losing rankings and generating minimal leads',
        solution: 'Performance-optimized WordPress rebuild with SEO architecture and conversion design',
        results: [
            { metric: 'Organic Leads', value: '+210%', icon: 'trending' },
            { metric: 'Page Speed Score', value: '94/100', icon: 'clock' },
            { metric: 'Keyword Rankings', value: '+68 Top-10', icon: 'users' }
        ],
        technologies: ['WordPress', 'Elementor Pro', 'WP Rocket', 'Ahrefs', 'Yoast SEO', 'Cloudflare'],
        image:
            'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        summary:
            'ClearPath\'s WordPress rebuild achieved a 94/100 performance score and doubled organic lead generation within five months.',
        content: [
            'ClearPath Financial had a WordPress site that scored 28 on Google PageSpeed Insights. The site had accumulated years of plugin bloat, unoptimized images, and a heavyweight theme that made every page slow to render. Rankings had been declining for 14 months.',
            'We performed a complete rebuild rather than attempting to patch the existing installation. The new architecture used a lightweight custom theme built on Elementor Pro with all unnecessary plugin dependencies stripped out.',
            'Image optimization alone — converting the entire media library to WebP and serving at correct display dimensions — brought LCP scores from over 5 seconds down under 2 seconds across all page types.',
            'WP Rocket was configured for full-page caching, CSS/JS minification, and database optimization. With Cloudflare CDN handling global distribution, the site consistently scored 94 to 96 on PageSpeed Insights on both mobile and desktop.',
            'The SEO architecture was rebuilt from scratch: a topic cluster structure around ClearPath\'s core service areas, proper internal linking, schema markup on every page, and location landing pages for the markets they served. Within five months, 68 additional keywords entered the top ten and organic lead inquiries doubled compared to the same period the prior year.'
        ]
    },
    // ── Content Marketing ─────────────────────────────────────────────────────
    {
        slug: 'content-marketing-b2b-saas-organic-growth',
        category: 'Content Marketing',
        title: 'Content Marketing Program Grows B2B SaaS to 85K Monthly Organic Visitors',
        client: 'Operata HR Platform',
        industry: 'HR Technology',
        challenge: 'Zero content presence and 100% paid-traffic dependency',
        solution: 'Topic cluster content strategy with SEO-led editorial program and distribution system',
        results: [
            { metric: 'Organic Monthly Visitors', value: '85,000', icon: 'users' },
            { metric: 'Demo Requests from SEO', value: '+310%', icon: 'trending' },
            { metric: 'CAC Reduction', value: '-44%', icon: 'dollar' }
        ],
        technologies: ['WordPress', 'Ahrefs', 'HubSpot', 'Clearscope', 'Zapier', 'Canva'],
        image:
            'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        summary:
            'Operata grew from zero organic presence to 85,000 monthly visitors in 14 months through a research-led content program.',
        content: [
            'Operata was spending heavily on paid search and LinkedIn Ads to drive every demo request. There was no organic content presence, no brand search volume, and no mechanism for compounding traffic growth. Every month the same budget was required to produce the same number of leads.',
            'We built a content strategy from keyword research anchored in Operata\'s ICP: HR managers, People Operations leaders, and CHROs at mid-market companies. The research identified 340 addressable search opportunities across informational, comparison, and evaluation intent.',
            'Content was organized into topic clusters: a pillar page for each core capability area surrounded by cluster articles addressing specific related questions. This architecture created dense internal linking that signaled topical authority to Google across each cluster.',
            'Editorial quality standards were enforced throughout. Every article was required to offer a genuine perspective, cite original data where possible, and be validated with subject matter experts from Operata\'s product team. Thin or generic content was never published.',
            'Distribution extended content reach beyond organic — each article was repurposed into a LinkedIn newsletter post, included in a monthly email digest, and pitched to relevant HR publications for syndication and backlinks. Within 14 months, monthly organic traffic reached 85,000 visitors, demo requests from organic search grew by 310%, and reliance on paid acquisition dropped enough to reduce customer acquisition cost by 44%.'
        ]
    }
];
