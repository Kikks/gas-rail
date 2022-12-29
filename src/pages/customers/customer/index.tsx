import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

import FullPageLoader from '../../../components/lib/FullPageLoader';
import Activities from '../../../components/pages/customer/Activities';
import CustomerProfile from '../../../components/pages/customer/CustomerProfile';
import GasConsumptionLevel from '../../../components/pages/customer/GasConsumptionLevel';
import Stats from '../../../components/pages/customer/Stats';
import UpdateDeviceModal from '../../../components/pages/customer/UpdateDeviceModal';
import useToggle from '../../../hooks/useToggle';
// import SupplyOutlet from '../../../components/pages/outlets/supply/SupplyOutlet';
import AuthLayout from '../../../layouts/AuthLayout';
import { fetchDevice, fetchDeviceStreams } from '../../../services/devices';
import type IDevice from '../../../types/Device.type';
import type IDeviceStream from '../../../types/DeviceStream.type';
import queryKeys from '../../../utils/api/queryKeys';
import { isEmpty } from '../../../utils/validators/helpers';

const Customer = () => {
  const navigate = useNavigate();
  const [device, setDevice] = useState<IDevice | null>(null);
  const [deviceStreams, setDeviceStreams] = useState<IDeviceStream[]>([]);
  const params = useParams();
  const [showModal, toggleShowModal] = useToggle(false);

  const { isLoading } = useQuery(
    [queryKeys.fetchDevice, params?.id],
    () => fetchDevice(params?.id || ''),
    {
      onSuccess(response) {
        if (response?.data) {
          setDevice(response?.data);
        }
      },
      enabled: !isEmpty(params?.id),
    }
  );

  const { isLoading: streamsLoading } = useQuery(
    [queryKeys.fetchDeviceStream, params?.id],
    () => fetchDeviceStreams(params?.id || ''),
    {
      onSuccess(response) {
        if (response?.data) {
          setDeviceStreams(response?.data);
        }
      },
      enabled: !isEmpty(params?.id),
    }
  );

  return (
    <AuthLayout>
      <div className="grid w-full max-w-[1200px] grid-cols-2 gap-7">
        <div className="col-span-2 mb-5 w-full content-start items-start">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 hover:text-primary-main"
          >
            <Icon
              icon="material-symbols:arrow-back-rounded"
              className="text-xl"
            />
            Back
          </button>
        </div>

        <div className="col-span-1 grid gap-7">
          <CustomerProfile device={device} toggleShowModal={toggleShowModal} />
          <Stats device={device} loading={isLoading} />
          <Activities deviceStreams={deviceStreams} />
        </div>

        <div className="col-span-1 grid content-start items-start gap-7">
          <GasConsumptionLevel device={device} />
        </div>
      </div>

      <UpdateDeviceModal
        device={device}
        isOpen={showModal}
        toggleOpen={toggleShowModal}
      />

      {(isLoading || streamsLoading) && <FullPageLoader />}
    </AuthLayout>
  );
};

export default Customer;
