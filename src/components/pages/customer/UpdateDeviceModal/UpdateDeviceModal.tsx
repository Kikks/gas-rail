import { Icon } from '@iconify/react';
import type { FC, FormEvent } from 'react';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import { updateDevice } from '../../../../services/devices';
import { fetchTankStorages } from '../../../../services/utils';
import type ITankStorage from '../../../../types/TankStorage.type';
import queryKeys from '../../../../utils/api/queryKeys';
import { validateUpdateDevicePayload } from '../../../../utils/validators/device.validator';
import { isEmpty } from '../../../../utils/validators/helpers';
import Button from '../../../lib/Button';
import Heading from '../../../lib/Heading';
import Input from '../../../lib/Input';
import Select from '../../../lib/Select';
import Text from '../../../lib/Text';
import type UpdateDeviceModalProps from './UpdateDeviceModal.props';

const initialState = {
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
  address: '',
  threshold: '',
  tank_storage: '',
};

const UpdateDeviceModal: FC<UpdateDeviceModalProps> = ({
  device,
  isOpen,
  toggleOpen,
}) => {
  const [payload, setPayload] = useState({
    ...initialState,
    tank_storage: device?.tank_storage?.code || '',
  });
  const [errors, setErrors] = useState(initialState);
  const [storages, setStorages] = useState<ITankStorage[]>([]);
  const queryClient = useQueryClient();

  useEffect(() => {
    setPayload({
      first_name: device?.first_name || '',
      last_name: device?.last_name || '',
      email: device?.email || '',
      phone_number: device?.phone_number || '',
      address: device?.address || '',
      threshold: device?.threshold || '',
      tank_storage: device?.tank_storage?.code || '',
    });
  }, [device]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isOpen]);

  useQuery([queryKeys.fetchTankStorages], fetchTankStorages, {
    onSuccess(response) {
      if (response?.data) {
        setStorages(response?.data);
      }
    },
  });

  const { mutate, isLoading: mutateLoading } = useMutation(updateDevice, {
    onSuccess() {
      toast.success('Device updated successfully.');
      queryClient.invalidateQueries([queryKeys.fetchDevice, device?.id]);
      toggleOpen();
    },
  });

  const handleChange = (
    event: FormEvent<HTMLInputElement> | FormEvent<HTMLSelectElement>
  ) => {
    setPayload({
      ...payload,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = () => {
    setErrors(initialState);

    const { valid, errors: validationErrors } =
      validateUpdateDevicePayload(payload);

    if (valid) {
      mutate({
        id: device?.id as string,
        data: payload,
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return isOpen ? (
    <div className="fixed top-0 left-0 z-[500] grid h-screen w-screen place-items-center bg-black/70">
      <div
        className="absolute top-0 left-0 z-10 h-full w-full"
        onClick={toggleOpen}
      />

      <div className="scale-up-center z-20 flex h-[80vh] max-h-[600px] w-[90%] max-w-xl flex-col items-center gap-5 overflow-y-auto rounded-md bg-white px-5 py-10 lg:p-7">
        <div className="flex w-full justify-end">
          <button className="flex items-center gap-2" onClick={toggleOpen}>
            <Icon icon="carbon:close" className="text-2xl text-primary-main" />

            <Text variant="caption" className="font-medium text-primary-main">
              Close
            </Text>
          </button>
        </div>

        <Heading variant="h3">Edit Device</Heading>

        <Input
          label="First Name"
          placeholder="Enter First Name"
          name="first_name"
          value={payload.first_name}
          onChange={handleChange}
          error={!isEmpty(errors.first_name)}
          helperText={errors.first_name}
          variant="outline"
          disabled={mutateLoading}
        />

        <Input
          label="Last Name"
          placeholder="Enter Last Name"
          name="last_name"
          value={payload.last_name}
          onChange={handleChange}
          error={!isEmpty(errors.last_name)}
          helperText={errors.last_name}
          variant="outline"
          disabled={mutateLoading}
        />

        <Input
          label="Email Address"
          placeholder="Enter Email Address"
          name="email"
          value={payload.email}
          onChange={handleChange}
          error={!isEmpty(errors.email)}
          helperText={errors.email}
          variant="outline"
          disabled={mutateLoading}
          type="email"
        />

        <Input
          label="Address"
          placeholder="Enter Address"
          name="address"
          value={payload.address}
          onChange={handleChange}
          error={!isEmpty(errors.address)}
          helperText={errors.address}
          variant="outline"
          disabled={mutateLoading}
        />

        <Input
          label="Phone Number"
          placeholder="Enter Phone Number"
          name="phone_number"
          value={payload.phone_number}
          onChange={handleChange}
          error={!isEmpty(errors.phone_number)}
          helperText={errors.phone_number}
          variant="outline"
          disabled={mutateLoading}
        />

        <Input
          label="Threshold (kg)"
          placeholder="Enter Threshold in kg"
          name="threshold"
          value={payload.threshold}
          onChange={handleChange}
          error={!isEmpty(errors.threshold)}
          helperText={errors.threshold}
          variant="outline"
          disabled={mutateLoading}
          type="number"
          min={0}
        />

        <Select
          label="Tank Storage"
          placeholder="Enter Tank Storage"
          name="tank_storage"
          value={payload.tank_storage}
          onChange={handleChange}
          error={!isEmpty(errors.tank_storage)}
          helperText={errors.tank_storage}
          variant="outline"
          disabled={mutateLoading}
          options={[
            { label: 'Select Storage', value: '' },
            ...storages.map((storage) => ({
              label: storage.name,
              value: storage.code,
            })),
          ]}
        />

        <Button
          variant="black"
          className="mt-5 min-w-[250px] rounded-none bg-[#333]"
          loading={mutateLoading}
          onClick={handleSubmit}
        >
          Update
        </Button>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default UpdateDeviceModal;
