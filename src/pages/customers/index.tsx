import { Icon } from '@iconify/react';

import Breadcrumb from '../../components/lib/Breadcrumb';
import { IconButton } from '../../components/lib/Button';
import Heading from '../../components/lib/Heading';
import Input from '../../components/lib/Input';
import Text from '../../components/lib/Text';
import CustomersTable from '../../components/pages/customers/CustomersTable';
import AuthLayout from '../../layouts/AuthLayout';

const Customers = () => {
  return (
    <AuthLayout>
      <div className="grid w-full max-w-[1200px] gap-7">
        <Heading variant="h3">Filter View</Heading>

        <div className="flex items-center gap-10">
          <Breadcrumb title="State: Lagos" />
          <Breadcrumb title="Region: Maryland" />
          <Breadcrumb title="Outlet: Total Energies Maryland" open />
        </div>

        <div className="flex items-center gap-7 rounded-xl bg-white p-3">
          <Text variant="caption" className="font-semibold text-primary-main">
            Outlets name:
          </Text>
          <Text variant="caption" className="font-semibold">
            TOTAL Energies Maryland
          </Text>
          <div className="flex items-center gap-1">
            <Icon icon="ph:address-book" className="text-2xl" />
            <Text variant="caption" className="font-semibold">
              Customers
            </Text>
          </div>
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

export default Customers;
