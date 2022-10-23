import { IncomingMessage, ServerResponse } from 'http';
import axios from 'axios';
import { Client, ApiException as ClientApiException } from './_genClient';
import { getToken } from './getToken';

export const apiClient = new Client('/api');
axios.interceptors.request.use((config) => {
  return config;
});
export * from './_genClient';

export const createPrefetchClient = async (req: IncomingMessage, res: ServerResponse) => {
  const token = await getToken({ req, res });
  const instance = axios.create();
  if (token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token?.accessToken}`;
  }
  return new Client(process.env.API_BASE_URL, instance);
};

export type ApiException = ClientApiException & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response: string | any;
};
