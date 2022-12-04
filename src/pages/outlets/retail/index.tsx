import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

import { IconButton } from '../../../components/lib/Button';
import Input from '../../../components/lib/Input';
import { TransparentSelect } from '../../../components/lib/Select';
import Text from '../../../components/lib/Text';
import CustomersTable from '../../../components/pages/customers/CustomersTable';
import ProjectionsVsActuals from '../../../components/pages/outlets/retail/ProjectionsVsActuals';
import Stats from '../../../components/pages/outlets/retail/Stats';
import AuthLayout from '../../../layouts/AuthLayout';
import { timeFilters } from '../../../utils/constants';

const Retail = () => {
  return (
    <AuthLayout>
      <div className="grid w-full max-w-[1200px] gap-7">
        <div className="flex items-center gap-7 rounded-xl bg-white px-3 py-2">
          <Text variant="caption" className="font-semibold text-primary-main">
            Outlets name:
          </Text>
          <Text variant="caption" className="font-semibold">
            TOTAL Energies Maryland
          </Text>
          <div className="flex items-center gap-2">
            <Icon icon="ph:star-duotone" className="text-2xl" />
            <Link to="/outlets/supply">
              <Text variant="caption">Supply</Text>
            </Link>
            <Text variant="caption">/</Text>
            <Link to="/outlets/retail">
              <Text variant="caption" className="font-semibold">
                Retail
              </Text>
            </Link>
          </div>

          <div className="ml-auto">
            <TransparentSelect options={timeFilters} />
          </div>
        </div>

        <div className="grid w-full grid-cols-4 gap-7">
          <Stats />

          <ProjectionsVsActuals />
        </div>

        <div className="grid w-full gap-5">
          <div className="flex w-full items-center justify-between">
            <Text className="font-semibold">Customers List</Text>

            <div className="flex items-center gap-1">
              <Icon icon="clarity:grid-chart-line" className="text-xl" />
              <Text variant="caption">Switch to cards view</Text>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-[#F7F9FB] px-3 py-2">
            <IconButton icon="carbon:add" />
            <IconButton icon="material-symbols:filter-list-rounded" />
            <IconButton icon="fluent:arrow-sort-24-regular" />
            <IconButton icon="carbon:overflow-menu-horizontal" />

            <div className="ml-auto w-[250px]">
              <Input
                startIcon={
                  <Icon
                    icon="ri:search-line"
                    className="text-2xl text-black/20"
                  />
                }
                placeholder="Search"
              />
            </div>
          </div>

          <CustomersTable />
        </div>
      </div>
    </AuthLayout>
  );
};

export default Retail;
