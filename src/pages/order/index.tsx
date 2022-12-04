import { Icon } from '@iconify/react';

import Breadcrumb from '../../components/lib/Breadcrumb';
import { IconButton } from '../../components/lib/Button';
import Heading from '../../components/lib/Heading';
import Input from '../../components/lib/Input';
import { TransparentSelect } from '../../components/lib/Select';
import Text from '../../components/lib/Text';
import OrderTable from '../../components/pages/order/OrderTable';
import Stats from '../../components/pages/order/Stats';
import AuthLayout from '../../layouts/AuthLayout';
import { timeFilters } from '../../utils/constants';

const Order = () => {
  return (
    <AuthLayout>
      <div className="grid w-full max-w-[1200px] gap-7">
        <Heading variant="h3">Filter View</Heading>

        <div className="flex items-center gap-10">
          <Breadcrumb title="State: Lagos" />
          <Breadcrumb title="Region: Maryland" />
          <Breadcrumb title="Outlet: Total Energies Maryland" open />
        </div>

        <div className="flex items-center gap-7 rounded-xl bg-white px-3 py-2">
          <Text variant="caption" className="font-semibold text-primary-main">
            Outlets name:
          </Text>
          <Text variant="caption" className="font-semibold">
            TOTAL Energies Maryland
          </Text>
          <div className="flex items-center gap-1">
            <Icon icon="ph:shopping-bag-open-duotone" className="text-2xl" />
            <Text variant="caption" className="font-semibold">
              Orders
            </Text>
          </div>

          <div className="ml-auto">
            <TransparentSelect options={timeFilters} />
          </div>
        </div>

        <div className="flex flex-wrap gap-7">
          <Stats />
        </div>

        <div className="grid w-full gap-3">
          <div className="flex w-full items-center justify-between">
            <Text className="font-semibold">Orders List</Text>

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

          <OrderTable />
        </div>
      </div>
    </AuthLayout>
  );
};

export default Order;
