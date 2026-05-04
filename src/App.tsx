import { HelmetProvider } from 'react-helmet-async';
import { AppRouter } from './router';
import { CookieConsent } from './components/CookieConsent';

export default function App() {
  return (
    <HelmetProvider>
      <AppRouter />
      <CookieConsent />
    </HelmetProvider>
  );
}
