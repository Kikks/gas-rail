import { getRequest, patchRequest } from '../../utils/api/calls';
import { convertQueryToString } from '../../utils/misc';
import type {
  FetchAPIKeysQuery,
  UpdateBusinessPayload,
  UpdateUserPasswordPayload,
  UpdateUserPayload,
  UpdateWebhookURLPayload,
} from './settings.payload';

export const updateUser = (data: UpdateUserPayload) => {
  return patchRequest({
    url: '/settings/profile',
    data,
  });
};

export const fetchUserProfile = () => {
  return getRequest({
    url: '/settings/profile',
  });
};

export const updateUserPassword = (data: UpdateUserPasswordPayload) => {
  return patchRequest({
    url: '/settings/profile/change-password',
    data,
  });
};

export const updateBusiness = (data: UpdateBusinessPayload) => {
  return patchRequest({
    url: '/settings/business',
    data,
  });
};

export const fetchBusiness = () => {
  return getRequest({
    url: '/settings/business',
  });
};

export const updateWebhookURL = (data: UpdateWebhookURLPayload) => {
  return patchRequest({
    url: '/settings/webhook',
    data,
  });
};

export const fetchWebhookURL = () => {
  return getRequest({
    url: '/settings/webhook',
  });
};

export const fetchAPIKeys = (query: FetchAPIKeysQuery) => {
  return getRequest({
    url: `/settings/keys?${convertQueryToString(query)}`,
  });
};
