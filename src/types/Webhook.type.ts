type IWebhook = {
  id: string;
  status: string;
  created_on: string;
  url: string;
  type: 'test' | 'live';
};

export default IWebhook;
