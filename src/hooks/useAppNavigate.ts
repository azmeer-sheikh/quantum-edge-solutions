import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Maps legacy string routes used across page components to React Router paths.
 */
export function useAppNavigate() {
  const navigate = useNavigate();

  return useCallback(
    (page: string) => {
      if (page.startsWith('bussiness-communication-solution/')) {
        navigate(`/${page}`, { preventScrollReset: false });
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (page.startsWith('blog/')) {
        navigate(`/${page}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (page.startsWith('portfolio/')) {
        navigate(`/${page}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const map: Record<string, string> = {
        home: '/',
        services: '/services',
        'seo-services': '/seo-services',
        'web-design': '/web-design',
        'marketing-services': '/marketing-services',
        pricing: '/pricing',
        platform: '/platform',
        portfolio: '/portfolio',
        blog: '/blog',
        contact: '/contact',
        'privacy-policy': '/privacy-policy',
        'terms-of-service': '/terms-of-service',
        'refund-policy': '/refund-policy',
        admin: '/admin',
        'admin-setup': '/admin-setup',
      };

      const path = map[page] ?? `/${page}`;
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [navigate],
  );
}
