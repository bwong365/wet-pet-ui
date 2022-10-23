import { getAccessToken, GetAccessTokenResult } from '@auth0/nextjs-auth0';

type Params = {
  req: Parameters<typeof getAccessToken>[0];
  res: Parameters<typeof getAccessToken>[1];
};

export const getToken = async ({ req, res }: Params) => {
  let token: GetAccessTokenResult | undefined = undefined;
  try {
    token = await getAccessToken(req, res);
  } catch {
    // ignore
  }
  return token;
};
