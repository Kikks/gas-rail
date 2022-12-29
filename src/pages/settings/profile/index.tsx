import type { FormEvent } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useMutation, useQuery } from 'react-query';

import Button from '../../../components/lib/Button';
import FullPageLoader from '../../../components/lib/FullPageLoader';
import Input from '../../../components/lib/Input';
import Text from '../../../components/lib/Text';
import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import AuthLayout from '../../../layouts/AuthLayout';
import SettingsLayout from '../../../layouts/SettingsLayout';
import { fetchUserProfile, updateUser } from '../../../services/settings';
import { setUserData } from '../../../store/slices/userSlice';
import type IUser from '../../../types/User.type';
import queryKeys from '../../../utils/api/queryKeys';
import { isEmpty } from '../../../utils/validators/helpers';
import { validateUpdateUserPayload } from '../../../utils/validators/settings.validators';

const initialState = {
  first_name: '',
  last_name: '',
  role: '',
};

const Profile = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const [payload, setPayload] = useState({
    first_name: user?.first_name || '',
    last_name: user?.last_name || '',
    role: user?.role || '',
  });
  const [errors, setErrors] = useState(initialState);

  const { isLoading } = useQuery(
    [queryKeys.fetchUserProfile],
    fetchUserProfile,
    {
      onSuccess(response) {
        if (response?.data) {
          setPayload(response?.data);
          dispatch(setUserData(response?.data));
        }
      },
      staleTime: Infinity,
    }
  );

  const { mutate, isLoading: mutateLoading } = useMutation(updateUser, {
    onSuccess() {
      toast.success('Profile updated successfully.');
      dispatch(
        setUserData({
          ...(user as IUser),
          first_name: payload.first_name,
          last_name: payload.last_name,
          role: payload.role,
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
      validateUpdateUserPayload(payload);

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
          <Text variant="body2" className="font-bold">
            Profile Details
          </Text>

          <Input
            label="Email Address"
            value={user?.email}
            variant="outline"
            disabled
          />

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
            label="Role"
            placeholder="Enter Role"
            name="role"
            value={payload.role}
            onChange={handleChange}
            error={!isEmpty(errors.role)}
            helperText={errors.role}
            variant="outline"
            disabled={mutateLoading}
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

        {isLoading && <FullPageLoader />}
      </SettingsLayout>
    </AuthLayout>
  );
};

export default Profile;
