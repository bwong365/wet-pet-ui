import { QueryClient, useQuery } from '@tanstack/react-query';
import { apiClient, createPrefetchClient } from '@http/apiClient';
import { adaptResponseForPrefetch } from '@utils/adaptResponseForPrefetch';
import { PrefetchParams } from '../types/prefetchParams';

export const useFetchAllPets = () => {
  const { data } = useQuery(['pets'], () => apiClient.getPets(), {
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  return { pets: data };
};

export const prefetchAllPets = async ({ req, res }: PrefetchParams) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['pets'], async () => {
    const client = await createPrefetchClient(req, res);
    const response = await client.getPets();
    return adaptResponseForPrefetch(response);
  });

  return queryClient;
};
