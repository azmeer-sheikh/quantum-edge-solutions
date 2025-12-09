import { Shield, Clock, Award, DollarSign, Users, Wrench, TrendingUp, HeadphonesIcon } from 'lucide-react';

interface BCSBenefitsProps {
  cityName: string;
}

export function BCSBenefits({ cityName }: BCSBenefitsProps) {
  const benefits = [
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Advanced cybersecurity solutions protecting your business data and infrastructure 24/7.',
      color: 'from-[#01BAEF] to-[#20A4F3]'
    },
    {
      icon: Clock,
      title: 'Rapid Response Time',
      description: 'Same-day service available throughout ' + cityName + ' with emergency support when you need it.',
      color: 'from-[#20A4F3] to-[#01BAEF]'
    },
    {
      icon: Award,
      title: 'Certified Experts',
      description: 'Industry-certified technicians with extensive experience in enterprise IT infrastructure.',
      color: 'from-[#01BAEF] to-[#0B4F6C]'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'Competitive rates with detailed quotes and no hidden fees. Get the best value for your investment.',
      color: 'from-[#0B4F6C] to-[#01BAEF]'
    },
    {
      icon: Users,
      title: 'Local Expertise',
      description: 'Deep understanding of ' + cityName + ' business needs with personalized, hands-on service.',
      color: 'from-[#01BAEF] to-[#20A4F3]'
    },
    {
      icon: Wrench,
      title: 'Comprehensive Solutions',
      description: 'Full-service IT provider handling everything from design to installation and ongoing support.',
      color: 'from-[#20A4F3] to-[#01BAEF]'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Infrastructure',
      description: 'Future-proof solutions designed to grow with your business and adapt to changing needs.',
      color: 'from-[#01BAEF] to-[#0B4F6C]'
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and support ensuring your systems stay operational.',
      color: 'from-[#0B4F6C] to-[#01BAEF]'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white" id="benefits">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#01BAEF]/10 border border-[#01BAEF]/30 text-[#0B4F6C] rounded-full text-xs sm:text-sm">
              Why Choose Us
            </span>
          </div>
          <h2 className="mb-3 sm:mb-4 text-[#0B4F6C] px-2 sm:px-0">
            Your Trusted IT Partner in {cityName}
          </h2>
          <p className="text-[#5A6C7D] max-w-3xl mx-auto text-base sm:text-lg px-2 sm:px-0">
            We deliver exceptional IT solutions backed by experience, expertise, and a commitment to your success
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-xl p-5 sm:p-6 transition-all duration-300 hover:border-[#01BAEF] hover:shadow-xl hover:-translate-y-2"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div className={`mb-3 sm:mb-4 inline-flex p-2.5 sm:p-3 bg-gradient-to-br ${benefit.color} rounded-lg shadow-md`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>

                  <h3 className="mb-2 sm:mb-3 text-[#0B4F6C] text-base sm:text-lg">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-[#5A6C7D] text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#01BAEF]/5 to-transparent rounded-tr-xl rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-12 lg:mt-16 text-center px-2 sm:px-0">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 sm:p-8 bg-gradient-to-br from-[#0B4F6C] to-[#01BAEF] rounded-xl sm:rounded-2xl text-white shadow-xl w-full max-w-4xl">
            <div className="text-center sm:text-left">
              <h3 className="text-white mb-2 text-lg sm:text-xl lg:text-2xl">
                Ready to Upgrade Your IT Infrastructure?
              </h3>
              <p className="text-white/90 text-sm sm:text-base">
                Contact us today for a free consultation and discover how we can help your business thrive.
              </p>
            </div>
            <a 
              href="tel:+15122571433"
              className="flex-shrink-0 px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#0B4F6C] rounded-lg hover:bg-[#FBFBFF] transition-all shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base whitespace-nowrap"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}