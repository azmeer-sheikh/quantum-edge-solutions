import { Phone, Mail, CheckCircle2 } from 'lucide-react';
import bcsLogo from 'figma:asset/d205985ebf033d2aa6e063a8932ffce74004d4a0.png';

interface BCSHeroProps {
  headline: string;
  subheading: string;
  cityName: string;
}

export function BCSHero({ headline, subheading, cityName }: BCSHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#0B4F6C] via-[#01BAEF] to-[#20A4F3] text-white overflow-hidden">
      {/* Abstract Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%),
                           radial-gradient(circle at 80% 80%, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)`
        }}></div>
      </div>

      {/* Diagonal Lines */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="50" height="50">
              <path d="M0,50 L50,0" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>
      </div>

      {/* Logo Header */}
      <div className="relative border-b border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <img 
            src={bcsLogo} 
            alt="Business Communication Solutions" 
            className="h-12 sm:h-16 w-auto"
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm">
              Serving {cityName} & Surrounding Areas
            </div>
            
            <h1 className="mb-6 text-white leading-tight">
              {headline}
            </h1>
            
            <p className="mb-8 text-white/90 text-lg lg:text-xl leading-relaxed">
              {subheading}
            </p>

            {/* Trust Indicators */}
            <div className="mb-8 flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FBFBFF]" />
                <span>BBB Accredited</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FBFBFF]" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FBFBFF]" />
                <span>Fast Response Time</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+15122571433"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FBFBFF] text-[#0B4F6C] rounded-lg transition-all hover:bg-white hover:shadow-xl hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span>(512) 257-1433</span>
              </a>
              
              <a 
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg transition-all hover:bg-white/10 hover:shadow-xl"
              >
                <Mail className="w-5 h-5" />
                <span>Request a Quote</span>
              </a>
            </div>
          </div>

          {/* Right Content - Stats/Features */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
              <div className="text-4xl mb-2">20+</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
              <div className="text-4xl mb-2">500+</div>
              <div className="text-sm text-white/80">Projects Completed</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
              <div className="text-4xl mb-2">24/7</div>
              <div className="text-sm text-white/80">Support Available</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
              <div className="text-4xl mb-2">A+</div>
              <div className="text-sm text-white/80">BBB Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 50C240 20 480 0 720 10C960 20 1200 50 1440 50V100H0V50Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}