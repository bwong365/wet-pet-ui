import { useCallback } from 'react';
import { Box, Stack } from '@mantine/core';
import { useRouter } from 'next/router';
import { Button } from '@components/atoms/Button/Button';
import { DestructiveConfirmationModal } from '@components/molecules/DestructiveConfirmationModal/DestructiveConfirmationModal';
import { useDestructiveConfirmationModal } from '@components/molecules/DestructiveConfirmationModal/useDestructiveConfirmationModal';
import { useDeletePet } from '@hooks/useDeletePet';
import { IPetReportResponse } from '@http/apiClient';
import { PetInfo } from './helpers/PetInfo';

type Props = {
  pet: IPetReportResponse;
};

export const PetDisplay = ({ pet }: Props) => {
  const { name, id } = pet;

  const { deletePet, isDeletingPet } = useDeletePet();
  const { open: openDelete, ...modal } = useDestructiveConfirmationModal();
  const router = useRouter();
  const openDeleteModal = useCallback(() => {
    openDelete({
      message: `Are you sure you want to release ${name}?`,
      onConfirm: () => deletePet(id, { onSuccess: () => router.push('/pets') }),
      title: `Release ${name}?`,
    });
  }, [deletePet, id, name, openDelete, router]);

  return (
    <Stack spacing={50}>
      <DestructiveConfirmationModal {...modal} />
      <PetInfo pet={pet} />

      <Box>
        <Button color="red.6" isLoading={isDeletingPet} onClick={openDeleteModal} variant="outline">
          Release {name}
        </Button>
      </Box>
    </Stack>
  );
};
