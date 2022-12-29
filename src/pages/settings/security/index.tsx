import { Icon } from '@iconify/react';
import type { FormEvent } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useMutation } from 'react-query';

import Button from '../../../components/lib/Button';
import Input from '../../../components/lib/Input';
import Text from '../../../components/lib/Text';
import useToggle from '../../../hooks/useToggle';
import AuthLayout from '../../../layouts/AuthLayout';
import SettingsLayout from '../../../layouts/SettingsLayout';
import { updateUserPassword } from '../../../services/settings';
import { isEmpty } from '../../../utils/validators/helpers';
import { validateUpdateUserPasswordPayload } from '../../../utils/validators/settings.validators';

const initialState = {
  old_password: '',
  new_password: '',
  confirm_new_password: '',
};

const Security = () => {
  const [payload, setPayload] = useState(initialState);
  const [errors, setErrors] = useState(initialState);
  const [showOldPassword, toggleShowOldPassword] = useToggle(false);
  const [showNewPassword, toggleShowNewPassword] = useToggle(false);
  const [showConfirmPassword, toggleShowConfirmPassword] = useToggle(false);

  const { mutate, isLoading: mutateLoading } = useMutation(updateUserPassword, {
    onSuccess() {
      toast.success('Password updated successfully.');
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
      validateUpdateUserPasswordPayload(payload);

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
            Change Password
          </Text>

          <Input
            label="Current Password"
            placeholder="Enter Current Password"
            type={showOldPassword ? 'text' : 'password'}
            name="old_password"
            value={payload.old_password}
            onChange={handleChange}
            error={!isEmpty(errors.old_password)}
            helperText={errors.old_password}
            variant="outline"
            disabled={mutateLoading}
            endIcon={
              <Icon
                icon={
                  showOldPassword
                    ? 'material-symbols:visibility-off-outline'
                    : 'material-symbols:visibility-outline'
                }
                className="cursor-pointer text-xl text-black"
                onClick={toggleShowOldPassword}
              />
            }
          />

          <Input
            label="New Password"
            placeholder="Enter New Password"
            type={showNewPassword ? 'text' : 'password'}
            name="new_password"
            value={payload.new_password}
            onChange={handleChange}
            error={!isEmpty(errors.new_password)}
            helperText={errors.new_password}
            variant="outline"
            disabled={mutateLoading}
            endIcon={
              <Icon
                icon={
                  showNewPassword
                    ? 'material-symbols:visibility-off-outline'
                    : 'material-symbols:visibility-outline'
                }
                className="cursor-pointer text-xl text-black"
                onClick={toggleShowNewPassword}
              />
            }
          />

          <Input
            label="Confirm New Password"
            placeholder="Confirm New Password"
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirm_new_password"
            value={payload.confirm_new_password}
            onChange={handleChange}
            error={!isEmpty(errors.confirm_new_password)}
            helperText={errors.confirm_new_password}
            variant="outline"
            disabled={mutateLoading}
            endIcon={
              <Icon
                icon={
                  showConfirmPassword
                    ? 'material-symbols:visibility-off-outline'
                    : 'material-symbols:visibility-outline'
                }
                className="cursor-pointer text-xl text-black"
                onClick={toggleShowConfirmPassword}
              />
            }
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

export default Security;
