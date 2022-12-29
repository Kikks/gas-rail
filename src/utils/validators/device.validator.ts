import { isEmail, isEmpty, isPhoneNumber, isValid } from './helpers';

export const validateUpdateDevicePayload = ({
  first_name,
  last_name,
  email,
  phone_number,
  address,
  threshold,
  tank_storage,
}: {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  address: string;
  threshold: string;
  tank_storage: string;
}) => {
  const errors = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    address: '',
    threshold: '',
    tank_storage: '',
  };

  if (isEmpty(first_name)) errors.first_name = 'First Name cannot be empty';
  if (isEmpty(last_name)) errors.last_name = 'Last Name cannot be empty';

  if (isEmpty(email)) errors.email = 'Email cannot be empty';
  else if (!isEmail(email)) errors.email = 'Invalid Email';

  if (isEmpty(phone_number))
    errors.phone_number = 'Phone Number cannot be empty';
  else if (!isPhoneNumber(phone_number))
    errors.phone_number = 'Invalid phone number';

  if (isEmpty(address)) errors.address = 'Address cannot be empty';

  if (isEmpty(threshold)) errors.threshold = 'Threshold cannot be empty';

  if (isEmpty(tank_storage))
    errors.tank_storage = 'Tank Storage cannot be empty';

  return {
    valid: isValid(errors),
    errors,
  };
};
