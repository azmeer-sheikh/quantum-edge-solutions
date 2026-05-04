import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/** Maps legacy `#admin` / `#admin-setup` links to real routes. */
export function LegacyHashRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const raw = window.location.hash.replace(/^#/, '');
    if (raw === 'admin') {
      navigate('/admin', { replace: true });
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    } else if (raw === 'admin-setup') {
      navigate('/admin-setup', { replace: true });
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, [navigate]);

  return null;
}
