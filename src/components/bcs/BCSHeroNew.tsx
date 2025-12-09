import { Phone, Mail, CheckCircle2, Play, ArrowRight } from 'lucide-react';

interface BCSHeroNewProps {
  headline: string;
  subheading: string;
  cityName: string;
}

export function BCSHeroNew({ headline, subheading, cityName }: BCSHeroNewProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-28 bg-gradient-to-br from-white via-[#01BAEF]/5 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230B4F6C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-[#01BAEF]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 w-64 h-64 sm:w-96 sm:h-96 bg-[#20A4F3]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#01BAEF]/10 border border-[#01BAEF]/30 text-[#0B4F6C] rounded-full text-xs sm:text-sm">
              <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-[#01BAEF] flex-shrink-0" />
              <span>Trusted IT Solutions in {cityName}</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="mb-4 sm:mb-6 text-[#0B4F6C] leading-tight px-2 sm:px-0">
              Professional IT Infrastructure & Network Solutions
            </h1>
            
            {/* Subheadline */}
            <p className="mb-6 sm:mb-8 text-[#5A6C7D] text-base sm:text-lg lg:text-xl leading-relaxed px-2 sm:px-0">
              Expert data cabling, fiber installation, security systems, and managed IT services for {cityName} businesses. Fast, reliable, and certified.
            </p>

            {/* Trust Indicators */}
            <div className="mb-6 sm:mb-8 flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#01BAEF]/10 border border-[#01BAEF]/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#01BAEF]" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm text-[#5A6C7D]">BBB Accredited</div>
                  <div className="text-sm sm:text-base text-[#0B4F6C]">A+ Rating</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#20A4F3]/10 border border-[#20A4F3]/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#20A4F3]" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm text-[#5A6C7D]">Licensed</div>
                  <div className="text-sm sm:text-base text-[#0B4F6C]">& Insured</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#01BAEF]/10 border border-[#01BAEF]/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#01BAEF]" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm text-[#5A6C7D]">Fast Response</div>
                  <div className="text-sm sm:text-base text-[#0B4F6C]">24/7 Support</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-2 sm:px-0">
              <a 
                href="tel:+15122571433"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#01BAEF] text-white rounded-lg transition-all hover:bg-[#0B4F6C] shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>(512) 257-1433</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </a>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-[#01BAEF] text-[#0B4F6C] rounded-lg transition-all hover:bg-[#01BAEF]/5 shadow-md hover:shadow-lg text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>Request a Quote</span>
              </button>
            </div>

            {/* Quick Stats */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 grid grid-cols-3 gap-3 sm:gap-4">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl text-[#01BAEF] mb-1">20+</div>
                <div className="text-xs sm:text-sm text-[#5A6C7D]">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl text-[#01BAEF] mb-1">500+</div>
                <div className="text-xs sm:text-sm text-[#5A6C7D]">Projects Done</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl text-[#01BAEF] mb-1">100%</div>
                <div className="text-xs sm:text-sm text-[#5A6C7D]">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Gallery */}
          <div className="relative mt-8 lg:mt-0">
            {/* Main Image */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1599949104055-2d04026aee1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMG5ldHdvcmtpbmclMjB0ZWNobm9sb2d5JTIwc2VydmVyfGVufDF8fHx8MTc2NTIyMDYwMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="IT Network Infrastructure" 
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B4F6C]/30 to-transparent"></div>
            </div>

            {/* Floating Card 1 - Top Right */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white border border-gray-200 rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl p-3 sm:p-4 hidden md:block">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#01BAEF]/10 border border-[#01BAEF]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#01BAEF]" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-[#5A6C7D]">Certified</div>
                  <div className="text-sm sm:text-base text-[#0B4F6C]">Technicians</div>
                </div>
              </div>
            </div>

            {/* Floating Card 2 - Bottom Left */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white border border-gray-200 rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl p-3 sm:p-4 hidden md:block">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#20A4F3]/10 border border-[#20A4F3]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#20A4F3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-[#5A6C7D]">Enterprise</div>
                  <div className="text-sm sm:text-base text-[#0B4F6C]">Security</div>
                </div>
              </div>
            </div>

            {/* Small Images Grid */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 grid grid-cols-2 gap-1.5 sm:gap-2 hidden sm:grid">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-md sm:rounded-lg overflow-hidden border-2 border-white shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1761507321147-c21f673f9f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWJlciUyMG9wdGljJTIwY2FibGVzJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjUxNjY0NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Fiber Optic Cables" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-md sm:rounded-lg overflow-hidden border-2 border-white shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1665848383782-1ea74efde68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNhbWVyYSUyMHN1cnZlaWxsYW5jZXxlbnwxfHx8fDE3NjUyMjA2MDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Security Camera" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}