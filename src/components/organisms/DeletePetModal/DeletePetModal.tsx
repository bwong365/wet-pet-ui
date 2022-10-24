import { useCallback } from 'react';
import { Box } from '@mantine/core';
import { useRouter } from 'next/router';
import { Button } from '@components/atoms/Button/Button';
import { DestructiveConfirmationModal } from '@components/molecules/DestructiveConfirmationModal/DestructiveConfirmationModal';
import { useDestructiveConfirmationModal } from '@components/molecules/DestructiveConfirmationModal/useDestructiveConfirmationModal';
import { useDeletePet } from '@hooks/useDeletePet';

type Props = {
  id: string;
  name: string;
};

export const DeletePetModal = ({ id, name }: Props) => {
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
    <Box>
      <Button color="red.6" isLoading={isDeletingPet} onClick={openDeleteModal} variant="outline">
        Release {name}
      </Button>
      <DestructiveConfirmationModal {...modal} />
    </Box>
  );
};
