import { isEmpty, isValid } from './helpers';

export const validateUpdateUserPayload = ({
  first_name,
  last_name,
  role,
}: {
  first_name: string;
  last_name: string;
  role: string;
}) => {
  const errors = {
    first_name: '',
    last_name: '',
    role: '',
  };

  if (isEmpty(first_name)) errors.first_name = 'First Name cannot be empty';
  if (isEmpty(last_name)) errors.last_name = 'Last Name cannot be empty';
  if (isEmpty(role)) errors.role = 'Role cannot be empty';

  return {
    valid: isValid(errors),
    errors,
  };
};

export const validateUpdateUserPasswordPayload = ({
  old_password,
  new_password,
  confirm_new_password,
}: {
  old_password: string;
  new_password: string;
  confirm_new_password: string;
}) => {
  const errors = {
    old_password: '',
    new_password: '',
    confirm_new_password: '',
  };

  if (isEmpty(old_password))
    errors.old_password = 'Old Password cannot be empty';

  if (isEmpty(new_password)) {
    errors.new_password = 'New Password cannot be empty';
  } else if (new_password !== confirm_new_password) {
    errors.confirm_new_password = 'Password must match';
  }

  if (old_password === new_password) {
    errors.new_password = 'You  must use a different password';
  }

  return {
    valid: isValid(errors),
    errors,
  };
};

export const validateUpdateBusinessPayload = ({
  business_name,
  business_address,
}: {
  business_name: string;
  business_address: string;
}) => {
  const errors = {
    business_name: '',
    business_address: '',
  };

  if (isEmpty(business_address))
    errors.business_address = 'Business Address cannot be empty';

  if (isEmpty(business_name)) {
    errors.business_name = 'Business Name cannot be empty';
  }

  return {
    valid: isValid(errors),
    errors,
  };
};
