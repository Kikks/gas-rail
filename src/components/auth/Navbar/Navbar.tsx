// import { Icon } from '@iconify/react';
import type { FC } from 'react';
import { useQuery } from 'react-query';

import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import { fetchBusiness } from '../../../services/settings';
import { setBusinessData } from '../../../store/slices/businessSlice';
import queryKeys from '../../../utils/api/queryKeys';
import Avatar from '../../lib/Avatar';
import Chip from '../../lib/Chip';
// import Input from '../../lib/Input';
import Text from '../../lib/Text';
import type NavbarProps from './Navbar.props';

const Navbar: FC<NavbarProps> = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const { business } = useAppSelector((state) => state.business);

  useQuery([queryKeys.fetchBusiness], fetchBusiness, {
    onSuccess(response) {
      if (response?.data) {
        dispatch(setBusinessData(response?.data || null));
      }
    },
    staleTime: Infinity,
  });

  return (
    <nav className="flex w-full items-center justify-between">
      {/* <div className="w-[400px]">
        <Input
          startIcon={
            <Icon icon="ri:search-line" className="text-2xl text-black/20" />
          }
          placeholder="Search for orders, outlets, customers, etc"
        />
      </div> */}

      <div />

      <div className="flex items-center gap-3">
        <Avatar
          name={`${user?.first_name} ${user?.last_name}`}
          className="h-12 w-12"
        />

        <div className="flex flex-col items-start">
          <Text className="font-semibold">
            {user?.first_name} {user?.last_name}
          </Text>
          <Chip>{business?.name}</Chip>
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
