import axios, { Method } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from '@http/getToken';

const baseURL = process.env.API_BASE_URL;
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = await getToken({ req, res });
  const method = req.method as Method;
  const url = `${baseURL}${req.url?.replace(/^\/api/, '')}`;
  const body = method === 'POST' || method === 'PUT' ? req.body : undefined;
  const headers = token ? { Authorization: `Bearer ${token?.accessToken}` } : undefined;

  try {
    const apiResponse = await axios.request({
      data: body,
      headers,
      method,
      url,
    });
    return res.status(apiResponse.status).json(apiResponse.data);
  } catch (error) {
    if (!axios.isAxiosError(error)) {
      console.log(error);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return res.status(500).json((error as any)?.message ?? 'Something went wrong');
    }
    return res.status(error.response?.status ?? 502).json(error.response?.data);
  }
};

export default handler;
