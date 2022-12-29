import { useState } from 'react';
import { useQuery } from 'react-query';

import FullPageLoader from '../../../components/lib/FullPageLoader';
import Config from '../../../components/pages/settings/keys/Config';
import AuthLayout from '../../../layouts/AuthLayout';
import SettingsLayout from '../../../layouts/SettingsLayout';
import { fetchWebhookURL } from '../../../services/settings';
import type IWebhook from '../../../types/Webhook.type';
import queryKeys from '../../../utils/api/queryKeys';

const APIKeys = () => {
  const [webhooks, setWebhooks] = useState<IWebhook[]>([]);

  const { isLoading } = useQuery([queryKeys.fetchWebhookUrl], fetchWebhookURL, {
    onSuccess(response) {
      setWebhooks(response?.data || []);
    },
  });

  return (
    <AuthLayout>
      <SettingsLayout baseUrl="/settings" title="Settings">
        <div className="flex w-full flex-col items-start gap-5 bg-[#FCCEB8] p-10">
          <Config type="test" webhookUrls={webhooks} />
          <hr className="my-10 w-full border-[#999]" />
          <Config type="live" webhookUrls={webhooks} />
        </div>
      </SettingsLayout>

      {isLoading && <FullPageLoader />}
    </AuthLayout>
  );
};

export default APIKeys;
