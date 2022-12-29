import { Icon } from '@iconify/react';
import type { FC, FormEvent } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import useToggle from '../../../../../hooks/useToggle';
import {
  fetchAPIKeys,
  updateWebhookURL,
} from '../../../../../services/settings';
import queryKeys from '../../../../../utils/api/queryKeys';
import { isEmpty } from '../../../../../utils/validators/helpers';
import Button from '../../../../lib/Button';
import Input from '../../../../lib/Input';
import Text from '../../../../lib/Text';
import type ConfigProps from './Config.props';

const Config: FC<ConfigProps> = ({ type, webhookUrls }) => {
  const [url, setUrl] = useState('');
  const [key, setKey] = useState('');
  const [error, setError] = useState('');
  const [showKey, toggleShowKey] = useToggle(false);
  const queryClient = useQueryClient();

  useEffect(() => {
    setUrl(webhookUrls.find((webhook) => webhook.type === type)?.url || '');
  }, [type, webhookUrls]);

  const properType = useMemo(() => {
    return type === 'live' ? 'Live' : 'Test';
  }, [type]);

  const { isLoading } = useQuery(
    [queryKeys.fetchAPIKey, type],
    () => fetchAPIKeys({ type }),
    {
      onSuccess(response) {
        setKey(response?.data?.key || '');
      },
    }
  );

  const { mutate, isLoading: mutateLoading } = useMutation(updateWebhookURL, {
    onSuccess() {
      queryClient.invalidateQueries(queryKeys.fetchWebhookUrl);
      toast.success('Webhook updated successfully.');
    },
  });

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setUrl(event.currentTarget.value);
  };

  const handleCopyKey = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(key);
      toast.success('Copied to clipboard!');
    }
  };

  const handleUpdate = () => {
    setError('');

    if (!isEmpty(url)) {
      mutate({
        type,
        url,
      });
    } else {
      setError('Webhook URL cannot be empty');
    }
  };

  return (
    <>
      <Text variant="body2" className="font-bold capitalize">
        {type} Environment
      </Text>

      <div className="flex w-full items-end gap-10">
        <div className="w-9/12">
          <Input
            label={`${properType} Webhook URL`}
            placeholder={`Enter ${properType} Webhook URL`}
            variant="outline"
            onChange={handleChange}
            value={url}
            error={!isEmpty(error)}
            helperText={error}
          />
        </div>

        <Button
          variant="black"
          className="w-3/12 rounded-none bg-[#EBE4E4] text-[#333]"
          loading={mutateLoading}
          onClick={handleUpdate}
        >
          Update
        </Button>
      </div>

      <div className="flex w-full items-end gap-10">
        <div className="w-9/12">
          <Input
            disabled
            label={`${properType} API Key`}
            type={showKey ? 'text' : 'password'}
            value={key}
            variant="outline"
            endIcon={
              <Icon
                icon={
                  showKey
                    ? 'material-symbols:visibility-off-outline'
                    : 'material-symbols:visibility-outline'
                }
                className="cursor-pointer text-xl text-black/20"
                onClick={toggleShowKey}
              />
            }
          />
        </div>

        <Button
          variant="black"
          className="w-3/12 rounded-none bg-[#EBE4E4] text-[#333]"
          disabled={isLoading}
          onClick={handleCopyKey}
        >
          Copy
        </Button>
      </div>
    </>
  );
};

export default Config;
