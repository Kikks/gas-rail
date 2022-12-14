import type { FC } from 'react';

import { convertKgToLitre } from '../../../../utils/misc';
import StatCard from '../../../lib/StatCard';
import type StatsProps from './Stats.props';

const Stats: FC<StatsProps> = ({ device, loading }) => {
  return (
    <div className="grid grid-cols-2 gap-7">
      <StatCard
        title="Estimated Total Orders"
        value={
          loading
            ? '...'
            : String((device?.estimated_total_orders || 0).toFixed(2))
        }
        className="col-span-1 min-w-[200px] flex-1"
      />

      <StatCard
        title="Total Gas Consumed"
        value={
          loading
            ? '...'
            : `${Number(device?.total_accumulated_flow_rate || 0).toFixed(2)}kg`
        }
        subtitle={
          loading
            ? '...'
            : `${convertKgToLitre(
                Number(device?.total_accumulated_flow_rate || 0)
              )}L`
        }
        className="col-span-1 min-w-[200px] flex-1"
      />
    </div>
  );
};

export default Stats;
