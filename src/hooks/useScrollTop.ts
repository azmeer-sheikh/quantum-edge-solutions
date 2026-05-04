import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Scroll to top on client-side navigation (preserves hash-only changes). */
export function useScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
}
