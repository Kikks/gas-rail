import { TransparentSelect } from '../../components/lib/Select';
import SaleByRegion from '../../components/pages/dashboard/SaleByRegion';
import SaleByState from '../../components/pages/dashboard/SaleByState';
import SalesByOutlet from '../../components/pages/dashboard/SalesByOutlet';
import Stats from '../../components/pages/dashboard/Stats';
import TotalSales from '../../components/pages/dashboard/TotalSales';
import AuthLayout from '../../layouts/AuthLayout';
import { timeFilters } from '../../utils/constants';

const Dashboard = () => {
  return (
    <AuthLayout>
      <div className="grid w-full max-w-[1200px] grid-cols-4 gap-7">
        <div className="col-span-4 gap-7">
          <div className="max-w-[120px]">
            <TransparentSelect options={timeFilters} />
          </div>
        </div>

        <Stats />

        <TotalSales />
        <SalesByOutlet />
        <SaleByRegion />
        <SaleByState />
      </div>
    </AuthLayout>
  );
};

export default Dashboard;
