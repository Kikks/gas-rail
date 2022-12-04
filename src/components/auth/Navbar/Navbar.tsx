import { Icon } from '@iconify/react';
import type { FC } from 'react';

import Chip from '../../lib/Chip';
import Input from '../../lib/Input';
import Text from '../../lib/Text';
import type NavbarProps from './Navbar.props';

const Navbar: FC<NavbarProps> = () => {
  return (
    <nav className="flex w-full items-center justify-between">
      <div className="w-[400px]">
        <Input
          startIcon={
            <Icon icon="ri:search-line" className="text-2xl text-black/20" />
          }
          placeholder="Search for orders, outlets, customers, etc"
        />
      </div>

      <div className="flex items-center gap-3">
        <figure className="aspect-square h-[45px] w-[45px] overflow-hidden rounded-md">
          <img
            src="/assets/images/avatar.png"
            alt="Avatar"
            className="h-full w-full object-cover"
          />
        </figure>

        <div className="flex flex-col items-start">
          <Text className="font-semibold">Ajoke Cooke</Text>
          <Chip>TOTAL Energies</Chip>
        </div>

        <figure className="ml-5 aspect-square h-[30px] w-[30px] overflow-hidden rounded-md">
          <img
            src="/assets/icons/notification.svg"
            alt="Notification"
            className="h-full w-full object-cover"
          />
        </figure>
      </div>
    </nav>
  );
};

export default Navbar;
