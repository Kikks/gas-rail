import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import ScrollToTop from './components/containers/ScrollToTop';
import ApplicationRoutes from './routes';
import { store } from './store';
import { queryClientConfig } from './utils/config/queryClient.config';
import { toastOptions } from './utils/config/toaster.config';

const client = new QueryClient(queryClientConfig);

const App = () => (
  <Provider store={store}>
    <QueryClientProvider client={client}>
      <ApplicationRoutes />
      <ScrollToTop />
      <Toaster position="top-right" toastOptions={toastOptions} />
    </QueryClientProvider>
  </Provider>
);

export default App;
