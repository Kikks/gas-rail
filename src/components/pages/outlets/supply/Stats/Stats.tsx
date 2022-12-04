import StatCard from '../../../../lib/StatCard';
import { stats } from './data';

const Stats = () => {
  return (
    <>
      {stats.map((stat, index) => (
        // @ts-ignore
        <StatCard
          key={index}
          {...stat}
          className="col-span-1 min-w-[200px] flex-1"
        />
      ))}
    </>
  );
};

export default Stats;
