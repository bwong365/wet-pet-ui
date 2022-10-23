import { IncomingMessage } from 'http';
import { ServerResponse } from 'http';

export type PrefetchParams = {
  req: IncomingMessage;
  res: ServerResponse;
};
