import { createContext, useContext } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ValidationProblemDetails } from '@http/_genClient';
import { apiClient, IPetAdditionRequest, IPetResponse, PetAdditionRequest } from '@http/apiClient';

const _useCreatePet = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, error, reset, isLoading } = useMutation<
    IPetResponse,
    ValidationProblemDetails,
    IPetAdditionRequest
  >((pet) => apiClient.addPet(PetAdditionRequest.fromJS(pet)), {
    onSuccess: () => queryClient.invalidateQueries(['pets']),
  });

  return { createPet: mutateAsync, isCreatingPet: isLoading, petCreationError: error, resetPetCreation: reset };
};

export const UseCreatePetContext = createContext(_useCreatePet);
export const useCreatePet = () => useContext(UseCreatePetContext)();
