import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@http/apiClient';

export const useDeletePet = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, error, reset, isLoading } = useMutation((id: string) => apiClient.releasePet(id), {
    onSuccess: async (_, id) => {
      await queryClient.invalidateQueries(['pets']);
      return queryClient.removeQueries(['petReport', id]);
    },
  });

  return { deletePet: mutateAsync, isDeletingPet: isLoading, petDeletionError: error, resetPetDeletion: reset };
};
