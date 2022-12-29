import jwtDecode from 'jwt-decode';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../../components/auth/Navbar';
import SideNav from '../../components/auth/SideNav';
import useAppDispatch from '../../hooks/useAppDispatch';
import useMediaQuery from '../../hooks/useMediaQuery';
import { logout, setUserData } from '../../store/slices/userSlice';

const AuthLayout: FC = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [sideNavIsOpen, setSideNavIsOpen] = useState(false);
  const largeScreen = useMediaQuery('(min-width: 1200px)');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (!token) {
      navigate('/login');
    } else {
      const userData: any = jwtDecode(token);

      if (!userData) {
        dispatch(logout());
        navigate('/login');

        return;
      }

      if (userData?.exp && userData.exp * 1000 < Date.now()) {
        dispatch(logout());
        navigate('/login');

        return;
      }

      if (user && JSON.parse(user)) {
        dispatch(setUserData(JSON.parse(user)));
      }
    }
  }, []);

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
