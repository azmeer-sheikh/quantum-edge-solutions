import { Cable, Zap, Camera, Network, Server, Shield, Lock, Phone } from 'lucide-react';
import { bcsServices } from '../../data/bcsServices';

interface BCSServicesProps {
  cityName: string;
}

const iconMap: Record<string, any> = {
  Cable,
  Zap,
  Camera,
  Network,
  Server,
  Shield,
  Lock,
  Phone
};

export function BCSServices({ cityName }: BCSServicesProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden" id="services">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230B4F6C' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#01BAEF]/10 border border-[#01BAEF]/30 text-[#0B4F6C] rounded-full text-xs sm:text-sm">
              Our Services
            </span>
          </div>
          <h2 className="mb-3 sm:mb-4 text-[#0B4F6C] px-2 sm:px-0">
            Comprehensive IT Solutions for {cityName}
          </h2>
          <p className="text-[#5A6C7D] max-w-3xl mx-auto text-base sm:text-lg px-2 sm:px-0">
            From network infrastructure to cybersecurity, we provide end-to-end technology solutions that power your business
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {bcsServices.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group relative bg-white border-2 border-gray-200 rounded-xl p-5 sm:p-6 transition-all duration-300 hover:border-[#01BAEF] hover:shadow-2xl hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#01BAEF]/5 to-[#20A4F3]/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div className="mb-3 sm:mb-4 inline-flex p-3 sm:p-4 bg-gradient-to-br from-[#01BAEF] to-[#20A4F3] rounded-xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>

                  <h3 className="mb-2 sm:mb-3 text-[#0B4F6C] text-base sm:text-lg leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#5A6C7D] text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Indicator */}
                  <div className="mt-3 sm:mt-4 flex items-center gap-2 text-[#01BAEF] opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs sm:text-sm">
                    <span>Learn more</span>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#01BAEF]/10 to-transparent rounded-tr-xl rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-12 text-center px-2 sm:px-0">
          <a 
            href="tel:+15122571433"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#01BAEF] to-[#20A4F3] text-white rounded-lg hover:shadow-xl transition-all transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="text-center">Get a Free Consultation - (512) 257-1433</span>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}