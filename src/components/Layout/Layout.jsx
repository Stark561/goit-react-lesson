import HeaderUserInfo from 'components/HeaderUserInfo/HeaderUserInfo';
import Navigate from 'components/Navigate/Navigate';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

function Layout() {
  const { islogIn } = useSelector(state => state.auth);
  return (
    <>
      <header>
        <Navigate />
        {islogIn && <HeaderUserInfo />}
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
