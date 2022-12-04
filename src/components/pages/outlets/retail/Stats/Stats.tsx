import StatCard from '../../../../lib/StatCard';
import { stats } from './data';

const Stats = () => {
  return (
    <div className="col-span-2 grid grid-cols-2 gap-7">
      {stats.map((stat, index) => (
        // @ts-ignore
        <StatCard
          key={index}
          {...stat}
          className="col-span-1 min-w-[200px] flex-1"
        />
      ))}
    </div>
  );
};

export default Stats;
