import Navigate from 'components/Navigate/Navigate';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header>
        <Navigate />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
