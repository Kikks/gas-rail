import type { FormEvent } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useMutation } from 'react-query';

import Button from '../../../components/lib/Button';
import Input from '../../../components/lib/Input';
import Text from '../../../components/lib/Text';
import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import AuthLayout from '../../../layouts/AuthLayout';
import SettingsLayout from '../../../layouts/SettingsLayout';
import { updateBusiness } from '../../../services/settings';
import { setBusinessData } from '../../../store/slices/businessSlice';
import type IBusiness from '../../../types/Business.type';
import { isEmpty } from '../../../utils/validators/helpers';
import { validateUpdateBusinessPayload } from '../../../utils/validators/settings.validators';

const initialState = {
  business_name: '',
  business_address: '',
};

const Business = () => {
  const dispatch = useAppDispatch();
  const { business } = useAppSelector((state) => state.business);
  const [payload, setPayload] = useState({
    business_name: business?.name || '',
    business_address: business?.address || '',
  });
  const [errors, setErrors] = useState(initialState);

  const { mutate, isLoading: mutateLoading } = useMutation(updateBusiness, {
    onSuccess() {
      toast.success('Business details updated successfully.');
      dispatch(
        setBusinessData({
          ...(business as IBusiness),
          name: payload.business_name,
          address: payload.business_address,
        })
      );
    },
  });

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setPayload({
      ...payload,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = () => {
    setErrors(initialState);

    const { valid, errors: validationErrors } =
      validateUpdateBusinessPayload(payload);

    if (valid) {
      mutate(payload);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <AuthLayout>
      <SettingsLayout baseUrl="/settings" title="Settings">
        <div className="flex w-full flex-col items-start gap-5 bg-[#FCCEB8] p-10">
          <Text variant="body2" className="mb-5 font-bold">
            Business Details
          </Text>
          <Input
            label="Business Name"
            placeholder="Enter Business Name"
            name="business_name"
            value={payload.business_name}
            onChange={handleChange}
            error={!isEmpty(errors.business_name)}
            helperText={errors.business_name}
            variant="outline"
            disabled={mutateLoading}
          />
          <Input
            label="Business Address"
            placeholder="Enter Business Address"
            name="business_address"
            value={payload.business_address}
            onChange={handleChange}
            error={!isEmpty(errors.business_address)}
            helperText={errors.business_address}
            variant="outline"
            disabled={mutateLoading}
          />
          <Input
            label="Business RC Number"
            value={business?.rc_number}
            variant="outline"
            disabled
          />

          <Button
            variant="black"
            className="mt-5 rounded-none bg-[#333]"
            loading={mutateLoading}
            onClick={handleSubmit}
          >
            Save Changes
          </Button>
        </div>
      </SettingsLayout>
    </AuthLayout>
  );
};

export default Business;
