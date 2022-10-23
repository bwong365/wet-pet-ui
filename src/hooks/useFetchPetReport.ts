import { QueryClient, useQuery } from '@tanstack/react-query';
import { apiClient, createPrefetchClient } from '@http/apiClient';
import { adaptResponseForPrefetch } from '@utils/adaptResponseForPrefetch';
import { PrefetchParams } from './PrefetchParams';

type Params = {
  petId?: string;
};

export const useFetchPetReport = ({ petId }: Params) => {
  const { data } = useQuery(
    ['petReport', petId],
    () => {
      if (!petId) {
        throw new Error('query should be disabled when there is no petId');
      }
      return apiClient.getPetReport(petId);
    },
    {
      enabled: !!petId,
    }
  );
  return { pet: data };
};

type PrefetchPetReportParams = PrefetchParams & {
  petId: string;
};

export const prefetchPetReport = async ({ petId, req, res }: PrefetchPetReportParams) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['petReport', petId], async () => {
    const client = await createPrefetchClient(req, res);
    const response = await client.getPetReport(petId);
    return adaptResponseForPrefetch(response);
  });
  return queryClient;
};
