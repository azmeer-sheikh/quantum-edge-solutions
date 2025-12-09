import { MapPin, Clock, Award, Users } from 'lucide-react';

interface BCSLocalSEOProps {
  heading: string;
  paragraphs: string[];
  cityName: string;
}

export function BCSLocalSEO({ heading, paragraphs, cityName }: BCSLocalSEOProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="mb-4 sm:mb-6 text-[#0B4F6C] px-2 sm:px-0">
              {heading}
            </h2>
            
            <div className="space-y-3 sm:space-y-4 px-2 sm:px-0">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-[#5A6C7D] leading-relaxed text-sm sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-[#01BAEF]/10 rounded-lg">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#01BAEF]" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-[#5A6C7D]">Service Area</div>
                  <div className="text-sm sm:text-base text-[#0B4F6C]">{cityName} Metro</div>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-[#20A4F3]/10 rounded-lg">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#20A4F3]" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-[#5A6C7D]">Response</div>
                  <div className="text-sm sm:text-base text-[#0B4F6C]">Same Day</div>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-[#01BAEF]/10 rounded-lg">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#01BAEF]" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-[#5A6C7D]">Certified</div>
                  <div className="text-sm sm:text-base text-[#0B4F6C]">Technicians</div>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-[#20A4F3]/10 rounded-lg">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#20A4F3]" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-[#5A6C7D]">Support</div>
                  <div className="text-sm sm:text-base text-[#0B4F6C]">24/7 Available</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Placeholder / Benefits */}
          <div className="relative mt-6 lg:mt-0">
            <div className="bg-gradient-to-br from-[#0B4F6C] to-[#01BAEF] rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="mb-4 sm:mb-6 text-white text-lg sm:text-xl">
                Why Choose Us?
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-white/20 rounded-full mt-0.5">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm">Expert local technicians with deep knowledge of {cityName} business needs</div>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-white/20 rounded-full mt-0.5">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm">Competitive pricing with transparent quotes and no hidden fees</div>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-white/20 rounded-full mt-0.5">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm">Cutting-edge technology solutions that scale with your business</div>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-white/20 rounded-full mt-0.5">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm">Comprehensive warranties and ongoing support for peace of mind</div>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-white/20 rounded-full mt-0.5">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm">Industry certifications and compliance with all local regulations</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-20 h-20 sm:w-24 sm:h-24 bg-[#20A4F3]/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-24 h-24 sm:w-32 sm:h-32 bg-[#01BAEF]/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}