import type { FC } from 'react';
import { useEffect, useState } from 'react';

import Navbar from '../../components/auth/Navbar';
import SideNav from '../../components/auth/SideNav';
import useMediaQuery from '../../hooks/useMediaQuery';

const AuthLayout: FC = ({ children }) => {
  const [sideNavIsOpen, setSideNavIsOpen] = useState(false);
  const largeScreen = useMediaQuery('(min-width: 1200px)');

  useEffect(() => {
    setSideNavIsOpen(false);
  }, [largeScreen]);

  const toggleSideNav = () => {
    setSideNavIsOpen((prevState) => !prevState);
  };

  return (
    <div className="relative flex h-screen w-screen">
      <SideNav isOpen={sideNavIsOpen} onClose={toggleSideNav} />

      <main className="relative flex h-full w-full flex-1 flex-col overflow-y-auto overflow-x-hidden bg-rails-bg-light p-5 lg:p-10">
        <Navbar openSideNav={toggleSideNav} />

        <div className="mt-7 w-full flex-1">{children}</div>
      </main>
    </div>
  );
};

export default AuthLayout;
