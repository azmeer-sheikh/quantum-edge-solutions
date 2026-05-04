import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Scroll to top on client-side navigation (preserves hash-only changes). */
export function useScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Synchronous jump — fastest perceived route change (no smooth scroll delay).
    window.scrollTo(0, 0);
  }, [pathname]);
}
