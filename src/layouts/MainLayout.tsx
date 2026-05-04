import { Outlet } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useScrollTop } from '@/hooks/useScrollTop';

export function MainLayout() {
  useScrollTop();

  return (
    <>
      <Header />
      <main id="main-content" className="flex-grow overflow-x-hidden w-full" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
