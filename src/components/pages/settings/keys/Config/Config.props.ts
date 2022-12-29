import type IEnv from '../../../../../types/Env.type';
import type IWebhook from '../../../../../types/Webhook.type';

export default interface ConfigProps {
  type: IEnv;
  webhookUrls: IWebhook[];
}
