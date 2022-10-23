import { ReactNode, useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { FetchIndicator } from '@components/molecules/FetchIndicator/FetchIndicator';

type Props = {
  children: ReactNode;
  dehydratedState?: unknown;
};

export const ReactQueryProvider = ({ children, dehydratedState }: Props) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        {children}
        <FetchIndicator />
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
};
