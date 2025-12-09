import { Building2, User, Phone, Mail, Globe, ExternalLink, Award } from 'lucide-react';

interface BCSBusinessInfoProps {
  cityName: string;
}

export function BCSBusinessInfo({ cityName }: BCSBusinessInfoProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="mb-3 sm:mb-4 text-[#0B4F6C] px-2 sm:px-0">
            About Business Communication Solutions
          </h2>
          <p className="text-[#5A6C7D] max-w-3xl mx-auto text-sm sm:text-base px-2 sm:px-0">
            Your trusted technology partner serving {cityName} and Central Texas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Business Details */}
          <div className="lg:col-span-2 bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#01BAEF]/10 border border-[#01BAEF]/20 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#01BAEF]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm text-[#5A6C7D] mb-1">Company</div>
                  <div className="text-sm sm:text-base text-[#0B4F6C]">Business Communication Solutions</div>
                  <div className="text-xs sm:text-sm text-[#5A6C7D] mt-1">IT Infrastructure Specialists</div>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#20A4F3]/10 border border-[#20A4F3]/20 rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5 sm:w-6 sm:h-6 text-[#20A4F3]" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-[#5A6C7D] mb-1">Owner</div>
                  <div className="text-sm sm:text-base text-[#0B4F6C]">Khang</div>
                  <div className="text-xs sm:text-sm text-[#5A6C7D] mt-1">Principal</div>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#01BAEF]/10 border border-[#01BAEF]/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#01BAEF]" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-[#5A6C7D] mb-1">Phone</div>
                  <a href="tel:+15122571433" className="text-sm sm:text-base text-[#0B4F6C] hover:text-[#01BAEF] transition-colors">
                    (512) 257-1433
                  </a>
                  <div className="text-xs sm:text-sm text-[#5A6C7D] mt-1">Call for immediate service</div>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#20A4F3]/10 border border-[#20A4F3]/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#20A4F3]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm text-[#5A6C7D] mb-1">Email</div>
                  <a href="mailto:austin@bcs-ip.com" className="text-sm sm:text-base text-[#0B4F6C] hover:text-[#01BAEF] transition-colors break-all">
                    austin@bcs-ip.com
                  </a>
                  <div className="text-xs sm:text-sm text-[#5A6C7D] mt-1">Fast email response</div>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 sm:col-span-2">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#01BAEF]/10 border border-[#01BAEF]/20 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-[#01BAEF]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm text-[#5A6C7D] mb-1">Website</div>
                  <a 
                    href="https://www.bcs-ip.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm sm:text-base text-[#0B4F6C] hover:text-[#01BAEF] transition-colors"
                  >
                    <span>www.bcs-ip.com</span>
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  </a>
                  <div className="text-xs sm:text-sm text-[#5A6C7D] mt-1">Visit our main website for more information</div>
                </div>
              </div>
            </div>
          </div>

          {/* BBB Badge */}
          <div className="bg-gradient-to-br from-[#0B4F6C] to-[#01BAEF] border border-[#01BAEF]/30 rounded-xl p-6 sm:p-8 flex flex-col items-center justify-center text-center text-white">
            <div className="mb-3 sm:mb-4 w-20 h-20 sm:w-24 sm:h-24 bg-white/10 border-2 border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Award className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </div>
            
            <h3 className="text-white mb-2 text-lg sm:text-xl">
              BBB Accredited
            </h3>
            
            <div className="text-3xl sm:text-4xl mb-1 sm:mb-2">A+</div>
            
            <div className="text-xs sm:text-sm text-white/80 mb-3 sm:mb-4">
              Better Business Bureau
            </div>
            
            <a 
              href="https://www.bbb.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white text-[#0B4F6C] rounded-lg hover:bg-white/90 transition-all text-xs sm:text-sm"
            >
              <span>View Profile</span>
              <ExternalLink className="w-3 h-3 flex-shrink-0" />
            </a>

            <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-white/20 w-full">
              <div className="text-xs sm:text-sm text-white/90 space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <span>Certified Technicians</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <span>Quality Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}