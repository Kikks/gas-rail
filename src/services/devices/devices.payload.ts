export type UpdateDevicePayload = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  address: string;
  threshold: string;
  tank_storage: string;
};

export type FetchDevicesQuery = {
  search?: string;
};
