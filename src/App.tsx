import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';

import ScrollToTop from './components/containers/ScrollToTop';
import ApplicationRoutes from './routes';
import { queryClientConfig } from './utils/config/queryClient.config';
import { toastOptions } from './utils/config/toaster.config';

const client = new QueryClient(queryClientConfig);

const App = () => (
  <QueryClientProvider client={client}>
    <ApplicationRoutes />
    <ScrollToTop />
    <Toaster position="top-right" toastOptions={toastOptions} />
  </QueryClientProvider>
);

export default App;
