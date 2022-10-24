import { Stack } from '@mantine/core';
import { DeletePetModal } from '@components/organisms/DeletePetModal/DeletePetModal';
import { IPetReportResponse } from '@http/apiClient';
import { PetInfo } from './helpers/PetInfo';

type Props = {
  pet: IPetReportResponse;
};

export const PetDisplay = ({ pet }: Props) => {
  return (
    <Stack spacing={50}>
      <PetInfo pet={pet} />
      <DeletePetModal {...pet} />
    </Stack>
  );
};
