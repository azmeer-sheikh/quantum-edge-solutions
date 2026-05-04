declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackPageView(path: string, title?: string): void {
  if (typeof window === 'undefined' || !window.gtag) return;
  const id = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!id) return;
  window.gtag('config', id, {
    page_path: path,
    page_title: title,
  });
}

export function trackEvent(action: string, params: Record<string, string | number | boolean> = {}): void {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', action, params);
}

export function trackUiClick(elementName: string, destination?: string): void {
  trackEvent('click', {
    event_category: 'ui',
    element: elementName,
    ...(destination ? { link_url: destination } : {}),
  });
}
