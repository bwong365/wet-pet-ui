import { createContext, useContext } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IPetUpdateRequest, PetUpdateRequest, ValidationProblemDetails } from '@http/_genClient';
import { apiClient, IPetResponse } from '@http/apiClient';

type UpdateParams = { id: string; pet: IPetUpdateRequest };

export const _useUpdatePet = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, error, reset, isLoading } = useMutation<IPetResponse, ValidationProblemDetails, UpdateParams>(
    ({ id, pet }) => apiClient.updatePet(id, PetUpdateRequest.fromJS(pet)),
    {
      onSuccess: (_, { id }) =>
        Promise.all([queryClient.invalidateQueries(['petReport', id]), queryClient.invalidateQueries(['pets'])]),
    }
  );

  return { isUpdatingPet: isLoading, petUpdateError: error, resetPetUpdate: reset, updatePet: mutateAsync };
};

export const UseUpdatePetContext = createContext(_useUpdatePet);
export const useUpdatePet = () => useContext(UseUpdatePetContext)();
