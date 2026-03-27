export interface PortfolioMetric {
  metric: string;
  value: string;
  icon: 'trending' | 'dollar' | 'clock' | 'users';
}

export interface PortfolioCaseStudy {
  slug: string;
  category: 'saas' | 'automation' | 'marketing';
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
  {
    slug: 'enterprise-crm-platform-migration',
    category: 'saas',
    title: 'Enterprise CRM Platform Migration',
    client: 'TechCorp Global',
    industry: 'Technology',
    challenge: 'Legacy CRM system unable to scale with 10x growth',
    solution: 'Built microservices-based SaaS platform with real-time analytics',
    results: [
      { metric: 'System Performance', value: '+85%', icon: 'trending' },
      { metric: 'Cost Reduction', value: '45%', icon: 'dollar' },
      { metric: 'Deploy Time', value: '3x Faster', icon: 'clock' }
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    image:
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    summary:
      'TechCorp modernized its CRM stack to support rapid expansion and improve operations visibility across teams.',
    content: [
      'TechCorp Global reached a point where its legacy CRM architecture became a growth bottleneck. Core workflows were tightly coupled, reporting pipelines were delayed, and every new customer segment required custom engineering effort.',
      'Our team designed a phased migration strategy around business capabilities, not just technical layers. We extracted customer lifecycle, pipeline operations, and analytics into independent services with clear ownership boundaries.',
      'A real-time event stream replaced daily batch jobs for key metrics, allowing sales and operations teams to make decisions from up-to-date performance data. We also introduced deployment automation with environment-level safeguards to reduce release risk.',
      'Within the first quarter post-migration, TechCorp saw an 85% increase in system responsiveness during peak traffic and reduced infrastructure plus maintenance costs by 45%. Release throughput also improved significantly, cutting deployment time by roughly 3x.'
    ]
  },
  {
    slug: 'marketing-automation-suite',
    category: 'automation',
    title: 'Marketing Automation Suite',
    client: 'FinanceFlow Inc',
    industry: 'Financial Services',
    challenge: 'Manual lead nurturing consuming 40+ hours weekly',
    solution: 'AI-powered automation with predictive lead scoring',
    results: [
      { metric: 'Time Saved', value: '35hrs/wk', icon: 'clock' },
      { metric: 'Conversion Rate', value: '+127%', icon: 'trending' },
      { metric: 'Lead Quality', value: '+89%', icon: 'users' }
    ],
    technologies: ['Python', 'TensorFlow', 'Redis', 'GraphQL', 'Kafka'],
    image:
      'https://images.pexels.com/photos/5473958/pexels-photo-5473958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    summary:
      'FinanceFlow automated lead lifecycle operations with AI scoring and behavior-driven outreach orchestration.',
    content: [
      'FinanceFlow relied on manual handoffs between marketing and sales operations, creating delays and inconsistent follow-up quality. High-value opportunities were often buried in large lead queues.',
      'We implemented a unified automation framework that combined lead ingestion, behavior scoring, and channel orchestration. Predictive scoring models prioritized leads based on likelihood to convert and recommended next-best actions.',
      'Campaign logic was redesigned as reusable workflow templates, allowing growth teams to launch and test journeys quickly while preserving governance. Real-time notifications ensured sales reps engaged priority leads at the right moment.',
      'The result was a measurable operational shift: 35 hours of manual effort removed each week, conversion rates up 127%, and a strong lift in lead quality that improved sales team efficiency.'
    ]
  },
  {
    slug: 'multi-channel-attribution-system',
    category: 'marketing',
    title: 'Multi-Channel Attribution System',
    client: 'RetailMax',
    industry: 'E-commerce',
    challenge: 'Unable to track customer journey across 12+ channels',
    solution: 'Custom attribution platform with ML-powered insights',
    results: [
      { metric: 'ROI Visibility', value: '+420%', icon: 'dollar' },
      { metric: 'Ad Spend Efficiency', value: '+156%', icon: 'trending' },
      { metric: 'Revenue Growth', value: '+$2.4M', icon: 'dollar' }
    ],
    technologies: ['Python', 'BigQuery', 'React', 'D3.js', 'FastAPI'],
    image:
      'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    summary:
      'RetailMax gained full-funnel measurement clarity to optimize budget allocation across digital channels.',
    content: [
      'RetailMax had substantial marketing activity but limited confidence in channel-level impact. Last-click reporting masked the contribution of awareness and retargeting efforts.',
      'We built a custom attribution platform with unified event modeling and identity stitching across web, paid, email, and social channels. The system delivered journey-level analysis and campaign contribution scoring.',
      'Machine learning models surfaced interaction patterns that correlated with conversion outcomes, giving the team actionable guidance for budget shifts and sequence improvements.',
      'With better visibility and optimization controls, RetailMax improved ad spend efficiency by 156% and unlocked over $2.4M in attributable revenue growth within the rollout period.'
    ]
  },
  {
    slug: 'real-time-analytics-dashboard',
    category: 'saas',
    title: 'Real-Time Analytics Dashboard',
    client: 'DataDrive Analytics',
    industry: 'SaaS',
    challenge: 'Batch processing causing 24hr data delays',
    solution: 'Real-time streaming analytics with sub-second latency',
    results: [
      { metric: 'Data Latency', value: '<100ms', icon: 'clock' },
      { metric: 'Query Performance', value: '+890%', icon: 'trending' },
      { metric: 'User Adoption', value: '+215%', icon: 'users' }
    ],
    technologies: ['Apache Kafka', 'ClickHouse', 'WebSocket', 'React', 'Grafana'],
    image:
      'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    summary:
      'DataDrive transitioned from delayed reporting to live analytics across product and operations teams.',
    content: [
      'DataDrive needed to support enterprise clients demanding up-to-the-minute insights. Existing batch processes introduced a full day of delay, limiting product value for operational decision-making.',
      'We architected a streaming pipeline with Kafka ingestion, real-time transformation layers, and low-latency analytical storage optimized for dashboard workloads.',
      'The frontend dashboard stack was rebuilt with WebSocket updates and modular visualizations that handled high-frequency refresh cycles without sacrificing usability.',
      'The platform now delivers sub-100ms data freshness for critical metrics, dramatically improved query performance, and significantly increased adoption among customer teams.'
    ]
  },
  {
    slug: 'enterprise-email-orchestration',
    category: 'automation',
    title: 'Enterprise Email Orchestration',
    client: 'GlobalReach Marketing',
    industry: 'Marketing Agency',
    challenge: 'Managing 100K+ contacts across fragmented systems',
    solution: 'Unified email automation with AI personalization',
    results: [
      { metric: 'Email Volume', value: '10M+/mo', icon: 'trending' },
      { metric: 'Open Rate', value: '+68%', icon: 'users' },
      { metric: 'Deliverability', value: '99.4%', icon: 'trending' }
    ],
    technologies: ['SendGrid API', 'Redis', 'PostgreSQL', 'Python', 'Celery'],
    image:
      'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    summary:
      'GlobalReach consolidated fragmented campaign systems into a high-volume personalized delivery engine.',
    content: [
      'GlobalReach managed campaigns across disconnected tools, which caused inconsistent segmentation and delivery bottlenecks as contact volume grew.',
      'We implemented a centralized orchestration layer that standardized segmentation rules, campaign triggers, and send schedules across business units.',
      'AI-driven personalization models selected message variants and send windows based on engagement history, while deliverability guardrails protected sender reputation.',
      'The new platform scaled to over 10 million monthly emails with strong quality metrics, including a 68% increase in open rate and 99.4% deliverability.'
    ]
  },
  {
    slug: 'predictive-lead-scoring-model',
    category: 'marketing',
    title: 'Predictive Lead Scoring Model',
    client: 'SaaSify Platform',
    industry: 'B2B SaaS',
    challenge: 'Sales team unable to prioritize 10K+ monthly leads',
    solution: 'ML-based lead scoring with behavioral analysis',
    results: [
      { metric: 'Sales Efficiency', value: '+310%', icon: 'trending' },
      { metric: 'Close Rate', value: '+145%', icon: 'dollar' },
      { metric: 'Sales Cycle', value: '-40%', icon: 'clock' }
    ],
    technologies: ['Python', 'scikit-learn', 'XGBoost', 'PostgreSQL', 'FastAPI'],
    image:
      'https://images.pexels.com/photos/3184613/pexels-photo-3184613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    summary:
      'SaaSify introduced data-driven lead prioritization to increase conversion speed and pipeline quality.',
    content: [
      'SaaSify generated a large lead volume each month, but qualification workflows were mostly manual and based on static rules. As a result, high-intent prospects were not always prioritized quickly.',
      'Our team built a predictive scoring framework combining behavioral signals, account attributes, and engagement recency features. The model output was integrated directly into sales workflows and CRM views.',
      'To ensure trust and actionability, we included explanation insights for major score drivers and established a regular retraining and validation cadence tied to conversion outcomes.',
      'The organization saw significant gains in sales efficiency and close rates, while shortening the average sales cycle by 40% through better prioritization and timing.'
    ]
  }
];
