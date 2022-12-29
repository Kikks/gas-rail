import { useQuery } from 'react-query';

import useAppDispatch from '../../../../hooks/useAppDispatch';
import useAppSelector from '../../../../hooks/useAppSelector';
import { fetchDashboardStats } from '../../../../services/dashboard';
import { setDashboardStats } from '../../../../store/slices/dashboardStatsSlice';
import queryKeys from '../../../../utils/api/queryKeys';
import FullPageLoader from '../../../lib/FullPageLoader';
import StatCard from '../../../lib/StatCard';

const Stats = () => {
  const dispatch = useAppDispatch();
  const { stats } = useAppSelector((state) => state.dashboardStats);

  const { isLoading } = useQuery(
    [queryKeys.fetchDashboardStats],
    fetchDashboardStats,
    {
      onSuccess(response) {
        if (response?.data) {
          dispatch(setDashboardStats(response?.data || {}));
        }
      },
    }
  );

  return (
    <>
      <StatCard
        className="col-span-1"
        title="Total Devices"
        value={isLoading ? '...' : String(stats?.devices || 0)}
      />

      <StatCard
        className="col-span-1"
        title="Total Streams"
        value={isLoading ? '...' : String(stats?.streams || 0)}
      />

      {isLoading && <FullPageLoader />}
    </>
  );
};

export default Stats;
