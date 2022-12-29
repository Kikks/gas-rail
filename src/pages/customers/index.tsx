import { Icon } from '@iconify/react';
import type { FormEvent } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';

import Breadcrumb from '../../components/lib/Breadcrumb';
import Button, { IconButton } from '../../components/lib/Button';
import FullPageLoader from '../../components/lib/FullPageLoader';
import Heading from '../../components/lib/Heading';
import Input from '../../components/lib/Input';
import Text from '../../components/lib/Text';
import CustomersTable from '../../components/pages/customers/CustomersTable';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import useDebounce from '../../hooks/useDebounce';
import AuthLayout from '../../layouts/AuthLayout';
import { fetchDevices } from '../../services/devices';
import { setDevices } from '../../store/slices/devicesSlice';
import queryKeys from '../../utils/api/queryKeys';

const Customers = () => {
  const dispatch = useAppDispatch();
  const { business } = useAppSelector((state) => state.business);
  const { devices } = useAppSelector((state) => state.devices);
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };

  const { isLoading } = useQuery(
    [queryKeys.fetchDevices, debouncedSearch],
    () => fetchDevices({ search: debouncedSearch }),
    {
      onSuccess(response) {
        if (response?.data) {
          dispatch(setDevices(response.data));
        }
      },
    }
  );

  return (
    <AuthLayout>
      <div className="grid w-full max-w-[1200px] gap-7">
        <Heading variant="h3">Filter View</Heading>

        <div className="flex items-center gap-10">
          <Breadcrumb title="State: Lagos" />
          <Breadcrumb title="Region: Maryland" />
          <Breadcrumb title={`Outlet: ${business?.name}`} open />
        </div>

        <div className="flex items-center gap-7 rounded-xl bg-white p-3">
          <Text variant="caption" className="font-semibold text-primary-main">
            Outlets name:
          </Text>
          <Text variant="caption" className="font-semibold">
            {business?.name}
          </Text>
          <div className="flex items-center gap-1">
            <Icon icon="ph:address-book" className="text-2xl" />
            <Text variant="caption" className="font-semibold">
              Devices
            </Text>
          </div>
        </div>

        <div className="grid w-full gap-5">
          <div className="flex w-full items-center justify-between">
            <Text className="font-semibold">Device List</Text>

            <div className="flex items-center gap-1">
              <Icon icon="clarity:grid-chart-line" className="text-xl" />
              <Text variant="caption">Switch to cards view</Text>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-[#F7F9FB] px-3 py-2">
            <Button>Request for devices</Button>

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
                value={search}
                onChange={handleChange}
              />
            </div>
          </div>

          <CustomersTable data={devices} />
        </div>
      </div>

      {isLoading && <FullPageLoader />}
    </AuthLayout>
  );
};

export default Customers;
