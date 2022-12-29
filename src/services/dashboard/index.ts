import { getRequest } from '../../utils/api/calls';

export const fetchDashboardStats = () => {
  return getRequest({
    url: '/dashboard/stat',
  });
};
