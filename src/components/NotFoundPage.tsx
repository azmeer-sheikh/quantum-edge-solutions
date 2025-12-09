import { useEffect } from 'react';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Button } from './ui/button';

interface NotFoundPageProps {
  onNavigate: (page: string) => void;
}

export function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  useEffect(() => {
    // Log 404 for analytics
    console.log('404 Page Not Found:', window.location.href);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#14141A] via-[#1A1A24] to-[#14141A] flex items-center justify-center px-4 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D0FF]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#75FF00]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-[150px] md:text-[200px] font-bold leading-none">
            <span className="bg-gradient-to-r from-[#00D0FF] via-[#75FF00] to-[#00D0FF] bg-clip-text text-transparent animate-gradient">
              404
            </span>
          </h1>
        </div>

        {/* Error Icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-[#00D0FF]/10 border-2 border-[#00D0FF]/30 flex items-center justify-center">
            <Search className="w-12 h-12 text-[#00D0FF]" />
          </div>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-[#C2C2CC] text-lg mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => onNavigate('home')}
            className="bg-[#00D0FF] hover:bg-[#00B8E0] text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Button>
          
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            className="border-[#00D0FF] text-[#00D0FF] hover:bg-[#00D0FF]/10 px-8 py-6 text-lg rounded-lg flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </Button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-[#2A2A33]">
          <p className="text-[#C2C2CC]/60 text-sm mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => onNavigate('services')}
              className="text-[#00D0FF] hover:text-[#75FF00] transition-colors text-sm"
            >
              Services
            </button>
            <span className="text-[#2A2A33]">•</span>
            <button
              onClick={() => onNavigate('about')}
              className="text-[#00D0FF] hover:text-[#75FF00] transition-colors text-sm"
            >
              Solutions
            </button>
            <span className="text-[#2A2A33]">•</span>
            <button
              onClick={() => onNavigate('portfolio')}
              className="text-[#00D0FF] hover:text-[#75FF00] transition-colors text-sm"
            >
              Case Studies
            </button>
            <span className="text-[#2A2A33]">•</span>
            <button
              onClick={() => onNavigate('contact')}
              className="text-[#00D0FF] hover:text-[#75FF00] transition-colors text-sm"
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
      `}</style>
    </div>
  );
}
