import { getRequest } from '../../utils/api/calls';

export const fetchTankStorages = () => {
  return getRequest({
    url: '/utils/tank-storages',
  });
};
