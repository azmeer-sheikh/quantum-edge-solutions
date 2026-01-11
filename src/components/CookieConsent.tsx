import { useState, useEffect } from 'react';
import { Cookie, Shield, BarChart3, Megaphone, X, Settings, Check } from 'lucide-react';
import { Button } from './ui/button';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

const COOKIE_CONSENT_KEY = 'qes_cookie_consent';
const CONSENT_EXPIRY_DAYS = 1;

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
    timestamp: 0,
  });

  useEffect(() => {
    // Check if user has already given consent
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as CookiePreferences;
        const expiryTime = parsed.timestamp + (CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000);
        if (Date.now() < expiryTime) {
          setPreferences(parsed);
          applyPreferences(parsed);
          return;
        }
      } catch {
        // Invalid stored data, show banner
      }
    }
    // Show banner after a short delay for better UX
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const applyPreferences = (prefs: CookiePreferences) => {
    // Apply cookie preferences to analytics/marketing scripts
    if (typeof window !== 'undefined') {
      (window as any).cookieConsent = prefs;
      
      // Dispatch custom event for other scripts to listen to
      window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { detail: prefs }));
      
      // If analytics is enabled, you could initialize Google Analytics here
      if (prefs.analytics) {
        console.log('Analytics cookies enabled');
        // Example: window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
      }
      
      // If marketing is enabled, you could initialize marketing pixels here
      if (prefs.marketing) {
        console.log('Marketing cookies enabled');
        // Example: window.fbq?.('consent', 'grant');
      }
    }
  };

  const savePreferences = (prefs: CookiePreferences) => {
    const prefsWithTimestamp = { ...prefs, timestamp: Date.now() };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefsWithTimestamp));
    setPreferences(prefsWithTimestamp);
    applyPreferences(prefsWithTimestamp);
    setIsVisible(false);
    setShowPreferences(false);
  };

  const acceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now(),
    });
  };

  const rejectAll = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now(),
    });
  };

  const saveCustomPreferences = () => {
    savePreferences(preferences);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop - blocks all interaction */}
      <div 
        className="fixed inset-0 bg-black/70 animate-in fade-in duration-300"
        style={{ zIndex: 999998 }}
        onClick={() => setShowPreferences(false)}
      />
      
      {/* Cookie Banner - solid background, always on top */}
      <div 
        className="fixed bottom-0 left-0 right-0 p-4 animate-in slide-in-from-bottom duration-500"
        style={{ zIndex: 999999, isolation: 'isolate' }}
      >
        <div className="max-w-4xl mx-auto bg-[#14141A] border-2 border-[#00D0FF]/50 rounded-xl shadow-2xl overflow-hidden" style={{ boxShadow: '0 -10px 60px rgba(0, 208, 255, 0.3)' }}>
          {!showPreferences ? (
            /* Main Banner */
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#00D0FF]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-[#00D0FF]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-lg font-semibold mb-2"> We Value Your Privacy</h3>
                  <p className="text-[#C2C2CC] text-sm leading-relaxed mb-4">
                    We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                    By clicking "Accept All", you consent to our use of cookies. You can customize your preferences 
                    or reject non-essential cookies.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      onClick={acceptAll}
                      className="bg-[#75FF00] text-[#14141A] hover:bg-[#00D0FF] font-semibold px-6 py-2 rounded-md transition-colors"
                    >
                      Accept All
                    </Button>
                    <Button
                      onClick={rejectAll}
                      variant="outline"
                      className="border-[#00D0FF]/50 text-[#00D0FF] hover:bg-[#00D0FF]/10 px-6 py-2 rounded-md"
                    >
                      Reject All
                    </Button>
                    <Button
                      onClick={() => setShowPreferences(true)}
                      variant="ghost"
                      className="text-[#C2C2CC] hover:text-white hover:bg-white/10 px-6 py-2 rounded-md flex items-center gap-2"
                    >
                      <Settings className="w-4 h-4" />
                      Customize
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Preferences Panel */
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white text-lg font-semibold flex items-center gap-2">
                  <Settings className="w-5 h-5 text-[#00D0FF]" />
                  Cookie Preferences
                </h3>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="text-[#C2C2CC] hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="bg-[#14141A] border border-[#2A2A33] rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#75FF00]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-[#75FF00]" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Strictly Necessary</h4>
                        <p className="text-[#C2C2CC] text-sm">
                          Essential for the website to function properly. Cannot be disabled.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-6 bg-[#75FF00] rounded-full flex items-center justify-end px-1 cursor-not-allowed opacity-70">
                        <div className="w-4 h-4 bg-white rounded-full shadow-md flex items-center justify-center">
                          <Check className="w-3 h-3 text-[#75FF00]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-[#14141A] border border-[#2A2A33] rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#00D0FF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <BarChart3 className="w-5 h-5 text-[#00D0FF]" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Analytics Cookies</h4>
                        <p className="text-[#C2C2CC] text-sm">
                          Help us understand how visitors interact with our website by collecting anonymous data.
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-all duration-200 ${
                        preferences.analytics ? 'bg-[#00D0FF] justify-end' : 'bg-[#2A2A33] justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full shadow-md" />
                    </button>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="bg-[#14141A] border border-[#2A2A33] rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#FF6B00]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Megaphone className="w-5 h-5 text-[#FF6B00]" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Marketing Cookies</h4>
                        <p className="text-[#C2C2CC] text-sm">
                          Used to track visitors across websites to display relevant advertisements.
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-all duration-200 ${
                        preferences.marketing ? 'bg-[#FF6B00] justify-end' : 'bg-[#2A2A33] justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full shadow-md" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-[#2A2A33]">
                <Button
                  onClick={saveCustomPreferences}
                  className="bg-[#75FF00] text-[#14141A] hover:bg-[#00D0FF] font-semibold px-6 py-2 rounded-md transition-colors"
                >
                  Save Preferences
                </Button>
                <Button
                  onClick={acceptAll}
                  variant="outline"
                  className="border-[#00D0FF]/50 text-[#00D0FF] hover:bg-[#00D0FF]/10 px-6 py-2 rounded-md"
                >
                  Accept All
                </Button>
                <Button
                  onClick={rejectAll}
                  variant="ghost"
                  className="text-[#C2C2CC] hover:text-white hover:bg-white/10 px-6 py-2 rounded-md"
                >
                  Reject All
                </Button>
              </div>

              <p className="text-[#666] text-xs mt-4">
                For more information, please read our{' '}
                <a href="#privacy-policy" className="text-[#00D0FF] hover:underline">Privacy Policy</a>
                {' '}and{' '}
                <a href="#terms-of-service" className="text-[#00D0FF] hover:underline">Terms of Service</a>.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// Hook to check cookie consent status
export function useCookieConsent() {
  const [consent, setConsent] = useState<CookiePreferences | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (stored) {
      try {
        setConsent(JSON.parse(stored));
      } catch {
        setConsent(null);
      }
    }

    const handleUpdate = (e: CustomEvent<CookiePreferences>) => {
      setConsent(e.detail);
    };

    window.addEventListener('cookieConsentUpdated', handleUpdate as EventListener);
    return () => window.removeEventListener('cookieConsentUpdated', handleUpdate as EventListener);
  }, []);

  return consent;
}

// Component to manage cookies from footer/settings
export function CookieSettingsButton({ className = '' }: { className?: string }) {
  const openCookieSettings = () => {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    window.location.reload();
  };

  return (
    <button
      onClick={openCookieSettings}
      className={`text-[#C2C2CC] hover:text-[#00D0FF] transition-colors text-sm flex items-center gap-1 ${className}`}
    >
      
    </button>
  );
}
