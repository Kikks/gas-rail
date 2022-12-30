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
import Heading from '../../../../lib/Heading';
import Input from '../../../../lib/Input';
import Text from '../../../../lib/Text';
import type ConfigProps from './Config.props';

const Config: FC<ConfigProps> = ({ type, webhookUrls }) => {
  const [url, setUrl] = useState('');
  const [key, setKey] = useState('');
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [password, setPassword] = useState('');
  const [runQuery, setRunQuery] = useState(type === 'test');
  const [showPassword, toggleShowPassword] = useToggle(false);
  const [showModal, toggleShowModal] = useToggle(false);
  const [showKey, toggleShowKey] = useToggle(false);
  const [showLiveKey, toggleShowLiveKey] = useToggle(false);
  const queryClient = useQueryClient();

  useEffect(() => {
    setUrl(webhookUrls.find((webhook) => webhook.type === type)?.url || '');
  }, [type, webhookUrls]);

  const properType = useMemo(() => {
    return type === 'live' ? 'Live' : 'Test';
  }, [type]);

  const { isLoading, isFetching } = useQuery(
    [queryKeys.fetchAPIKey, type],
    () => fetchAPIKeys({ type, password }),
    {
      onSuccess(response) {
        setKey(response?.data?.key || '');
        if (type === 'live') {
          toggleShowLiveKey();
          toggleShowModal();
        }
      },
      onError(err: any) {
        toast.error(
          err?.response?.data?.message ||
            'Something went wrong, try again later.'
        );
        setRunQuery(false);
      },
      enabled: runQuery,
      retry: 1,
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

  const handleRevealKey = () => {
    setPasswordError('');

    if (!isEmpty(password)) {
      setRunQuery(true);
    } else {
      setPasswordError('Password cannot be empty.');
    }
  };

  const renderAPIKey = () => (
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
  );

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

      {type === 'test' && renderAPIKey()}

      {type === 'live' && (
        <>
          {showLiveKey ? (
            renderAPIKey()
          ) : (
            <Button
              onClick={toggleShowModal}
              variant="black"
              className="rounded-none"
            >
              Show Live Key
            </Button>
          )}
        </>
      )}

      {showModal && (
        <div className="fixed top-0 left-0 z-[500] grid h-screen w-screen place-items-center bg-black/70">
          <div
            className="absolute top-0 left-0 z-10 h-full w-full"
            onClick={toggleShowModal}
          />

          <div className="scale-up-center z-20 flex h-[60vh] max-h-[600px] w-[90%] max-w-xl flex-col items-center gap-5 overflow-y-auto rounded-md bg-white px-5 py-10 lg:p-7">
            <div className="mb-5 flex w-full justify-end">
              <button
                className="flex items-center gap-2"
                onClick={toggleShowModal}
              >
                <Icon
                  icon="carbon:close"
                  className="text-2xl text-primary-main"
                />

                <Text
                  variant="caption"
                  className="font-medium text-primary-main"
                >
                  Close
                </Text>
              </button>
            </div>

            <Heading variant="h3">Reveal API Key</Heading>

            <Text className="max-w-[35ch] text-center">
              Enter password to reveal your API Key.
            </Text>

            <Input
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              variant="outline"
              onChange={(event) => setPassword(event.currentTarget.value)}
              error={!isEmpty(passwordError)}
              helperText={passwordError}
              endIcon={
                <Icon
                  icon={
                    showPassword
                      ? 'material-symbols:visibility-off-outline'
                      : 'material-symbols:visibility-outline'
                  }
                  className="cursor-pointer text-xl text-black/20"
                  onClick={toggleShowPassword}
                />
              }
            />

            <Button
              variant="black"
              className="mt-5 min-w-[250px] rounded-none bg-[#333]"
              loading={isLoading || isFetching}
              onClick={handleRevealKey}
            >
              Reveal Key
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Config;
