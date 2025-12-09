import { ExternalLink, CheckCircle2 } from 'lucide-react';

interface BCSPortfolioProps {
  cityName: string;
}

export function BCSPortfolio({ cityName }: BCSPortfolioProps) {
  const projects = [
    {
      title: 'Corporate Office Network Upgrade',
      category: 'Network Infrastructure',
      description: 'Complete network overhaul for 200-employee office including CAT6A cabling, enterprise switches, and WiFi 6 deployment.',
      image: 'https://images.unsplash.com/photo-1674981208693-de5a9c4c4f44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGJ1c2luZXNzfGVufDF8fHx8MTc2NTIxNTg1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      highlights: ['CAT6A Infrastructure', '20,000 sq ft Coverage', 'Zero Downtime Migration']
    },
    {
      title: 'Multi-Location Security System',
      category: 'Security Solutions',
      description: 'Integrated security camera system across 5 retail locations with centralized monitoring and cloud storage.',
      image: 'https://images.unsplash.com/photo-1665848383782-1ea74efde68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNhbWVyYSUyMHN1cnZlaWxsYW5jZXxlbnwxfHx8fDE3NjUyMjA2MDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      highlights: ['120+ 4K Cameras', 'AI Analytics', '30-Day Cloud Storage']
    },
    {
      title: 'Data Center Fiber Installation',
      category: 'Fiber Optic',
      description: 'High-speed fiber optic backbone installation connecting multiple buildings in enterprise campus.',
      image: 'https://images.unsplash.com/photo-1761507321147-c21f673f9f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWJlciUyMG9wdGljJTIwY2FibGVzJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjUxNjY0NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      highlights: ['10Gbps Connectivity', 'Redundant Pathways', 'OTDR Certified']
    },
    {
      title: 'Managed IT Transformation',
      category: 'Managed Services',
      description: 'Full IT management takeover including network monitoring, security, backups, and help desk for growing business.',
      image: 'https://images.unsplash.com/photo-1599949104055-2d04026aee1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMG5ldHdvcmtpbmclMjB0ZWNobm9sb2d5JTIwc2VydmVyfGVufDF8fHx8MTc2NTIyMDYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      highlights: ['24/7 Monitoring', '99.9% Uptime', 'Proactive Support']
    },
    {
      title: 'Enterprise Cybersecurity Deployment',
      category: 'Cybersecurity',
      description: 'Multi-layered security implementation including firewall, IDS/IPS, endpoint protection, and security training.',
      image: 'https://images.unsplash.com/photo-1662638600476-d563fffbb072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwcHJvZmVzc2lvbmFsJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NTIyMDYwMXww&ixlib=rb-4.1.0&q=80&w=1080',
      highlights: ['SOC 2 Compliance', 'Threat Detection', 'Employee Training']
    },
    {
      title: 'Cloud VOIP Migration',
      category: 'VOIP Systems',
      description: 'Seamless migration from legacy PBX to cloud-based VOIP system with enhanced features and cost savings.',
      image: 'https://images.unsplash.com/photo-1580983553600-c49a1d083f54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NTIyMDYwMnww&ixlib=rb-4.1.0&q=80&w=1080',
      highlights: ['150+ Extensions', 'Mobile Integration', '40% Cost Reduction']
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white" id="portfolio">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#01BAEF]/10 border border-[#01BAEF]/30 text-[#0B4F6C] rounded-full text-xs sm:text-sm">
              Our Work
            </span>
          </div>
          <h2 className="mb-3 sm:mb-4 text-[#0B4F6C] px-2 sm:px-0">
            Recent Projects in {cityName}
          </h2>
          <p className="text-[#5A6C7D] max-w-3xl mx-auto text-base sm:text-lg px-2 sm:px-0">
            Explore our portfolio of successful IT infrastructure projects delivered across Central Texas
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B4F6C]/80 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="px-2.5 py-1 sm:px-3 sm:py-1 bg-white/90 backdrop-blur-sm text-[#0B4F6C] rounded-full text-xs sm:text-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="mb-2 sm:mb-3 text-[#0B4F6C] text-base sm:text-lg">
                  {project.title}
                </h3>
                
                <p className="mb-3 sm:mb-4 text-[#5A6C7D] text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#01BAEF] flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-[#5A6C7D]">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* View More Link */}
                <button className="flex items-center gap-2 text-[#01BAEF] hover:text-[#0B4F6C] transition-colors text-xs sm:text-sm group/link">
                  <span>View Details</span>
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="text-center p-4 sm:p-6 bg-white border border-gray-200 rounded-xl">
            <div className="text-3xl sm:text-4xl text-[#01BAEF] mb-1 sm:mb-2">500+</div>
            <div className="text-xs sm:text-sm text-[#5A6C7D]">Projects Completed</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white border border-gray-200 rounded-xl">
            <div className="text-3xl sm:text-4xl text-[#01BAEF] mb-1 sm:mb-2">98%</div>
            <div className="text-xs sm:text-sm text-[#5A6C7D]">Client Satisfaction</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white border border-gray-200 rounded-xl">
            <div className="text-3xl sm:text-4xl text-[#01BAEF] mb-1 sm:mb-2">20+</div>
            <div className="text-xs sm:text-sm text-[#5A6C7D]">Years Experience</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white border border-gray-200 rounded-xl">
            <div className="text-3xl sm:text-4xl text-[#01BAEF] mb-1 sm:mb-2">24/7</div>
            <div className="text-xs sm:text-sm text-[#5A6C7D]">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}