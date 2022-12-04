import toast from 'react-hot-toast';
import type { QueryClientConfig } from 'react-query';

export const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    mutations: {
      onError: (error: any) => {
        toast.error(
          error?.response?.data?.message ||
            'Something went wrong, try again later.'
        );
      },
    },
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
      onError: (error: any) => {
        toast.error(
          error?.response?.data?.message ||
            'Something went wrong, try again later.'
        );
      },
    },
  },
};
