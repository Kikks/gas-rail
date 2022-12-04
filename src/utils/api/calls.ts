import baseAxiosMethod from './baseAxiosMethod';

export const postRequest = async ({
  url,
  data,
}: {
  url: string;
  data: any;
}) => {
  const response = await baseAxiosMethod.post(url, data);

  return response?.data || response;
};

export const putRequest = async ({ url, data }: { url: string; data: any }) => {
  const response = await baseAxiosMethod.put(url, data);
  return response?.data || response;
};

export const patchRequest = async ({
  url,
  data,
}: {
  url: string;
  data: any;
}) => {
  const response = await baseAxiosMethod.patch(url, data);
  return response?.data || response;
};

export const getRequest = async (
  { url }: { url: string },
  formatResponse?: any
) => {
  const response = await baseAxiosMethod.get(url);
  if (formatResponse) {
    return formatResponse(response?.data);
  }
  return response?.data || response;
};

export const deleteRequest = async ({
  url,
  data,
}: {
  url: string;
  data: any;
}) => {
  const response = await baseAxiosMethod.delete(url, { data });
  return response?.data || response;
};
