import { getRequest, patchRequest } from '../../utils/api/calls';
import { convertQueryToString } from '../../utils/misc';
import type { FetchDevicesQuery, UpdateDevicePayload } from './devices.payload';

export const updateDevice = ({
  id,
  data,
}: {
  id: string;
  data: UpdateDevicePayload;
}) => {
  return patchRequest({
    url: `/devices/${id}`,
    data,
  });
};

export const fetchDevices = (query: FetchDevicesQuery) => {
  return getRequest({
    url: `/devices?${convertQueryToString(query)}`,
  });
};

export const fetchDevice = (id: string) => {
  return getRequest({
    url: `/devices/${id}`,
  });
};

export const fetchDeviceStreams = (id: string) => {
  return getRequest({
    url: `/devices/${id}/streams`,
  });
};
