import { Icon } from '@iconify/react';
import type { FC } from 'react';

import useAppDispatch from '../../../hooks/useAppDispatch';
import { logout } from '../../../store/slices/userSlice';
import { links } from './data';
import type SideNavProps from './SideNav.props';
import SideNavLink from './SideNavLink';

const SideNav: FC<SideNavProps> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed z-10 h-screen w-screen bg-black/40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 z-10 flex h-full w-[300px] flex-col gap-5 overflow-y-auto overflow-x-hidden bg-white px-5 py-7  duration-300 lg:static 2xl:w-[20vw] 2xl:max-w-none ${
          isOpen
            ? 'right-0 translate-x-0 lg:right-0'
            : 'right-[-100%] translate-x-[100%] lg:right-0 lg:translate-x-[0]'
        }`}
      >
        <div className="px-7 pt-5 lg:hidden">
          <button onClick={onClose}>
            <Icon
              className="text-2xl text-rails-dark-gray"
              icon="codicon:chrome-close"
            />
          </button>
        </div>

        <div className="grid w-full px-4">
          <figure className="relative flex aspect-[2/1] w-[120px] p-0 lg:w-[150px]">
            <img
              className="h-full w-full object-contain"
              src="/assets/icons/logo.svg"
              alt="Gas Rail Logo"
            />
          </figure>
        </div>

        <div className="w-full">
          {links.map((link, index) => (
            <SideNavLink key={index} {...link} />
          ))}
        </div>

        <hr className="mt-20 w-full border-rails-dark-gray/20" />

        <SideNavLink
          url="/settings"
          icon="material-symbols:settings-outline"
          title="Settings"
        />

        <SideNavLink
          url="/login"
          icon="ant-design:logout-outlined"
          title="Logout"
          onClick={handleLogout}
        />
      </aside>
    </>
  );
};

export default SideNav;
