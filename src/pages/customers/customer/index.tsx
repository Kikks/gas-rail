import Activities from '../../../components/pages/customer/Activities';
import CustomerProfile from '../../../components/pages/customer/CustomerProfile';
import GasConsumptionLevel from '../../../components/pages/customer/GasConsumptionLevel';
import Stats from '../../../components/pages/customer/Stats';
import SupplyOutlet from '../../../components/pages/outlets/supply/SupplyOutlet';
import AuthLayout from '../../../layouts/AuthLayout';

const Customer = () => {
  return (
    <AuthLayout>
      <div className="grid w-full max-w-[1200px] grid-cols-2 gap-7">
        <div className="col-span-1 grid gap-7">
          <CustomerProfile />
          <Stats />
          <Activities />
        </div>

        <div className="col-span-1 grid gap-7">
          <GasConsumptionLevel />
          <SupplyOutlet />
        </div>
      </div>
    </AuthLayout>
  );
};

export default Customer;
