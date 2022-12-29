export type UpdateUserPayload = {
  first_name: string;
  last_name: string;
  role: string;
};

export type UpdateUserPasswordPayload = {
  old_password: string;
  new_password: string;
};

export type UpdateBusinessPayload = {
  business_name: string;
  business_address: string;
};

export type UpdateWebhookURLPayload = {
  type: string;
  url: string;
};

export type FetchAPIKeysQuery = {
  type?: string;
  password?: string;
};
