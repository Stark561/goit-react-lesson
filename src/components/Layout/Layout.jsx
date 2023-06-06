import Navigate from 'components/Navigate/Navigate';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header>
        <Navigate />
      </header>

      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default Layout;
