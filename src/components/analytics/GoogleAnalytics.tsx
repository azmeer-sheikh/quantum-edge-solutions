import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '@/utils/analytics';

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

export function GoogleAnalytics() {
  const location = useLocation();
  const scriptsLoaded = useRef(false);

  useEffect(() => {
    if (!GA_ID || scriptsLoaded.current) return;

    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(gtagScript);

    const inline = document.createElement('script');
    inline.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}', { send_page_view: false });
    `;
    document.head.appendChild(inline);
    scriptsLoaded.current = true;
  }, []);

  useEffect(() => {
    if (!GA_ID) return;
    trackPageView(location.pathname + location.search, document.title);
  }, [location]);

  return null;
}
