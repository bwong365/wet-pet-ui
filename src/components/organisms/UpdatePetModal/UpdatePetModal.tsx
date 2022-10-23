import { useCallback, useMemo } from 'react';
import { ActionIcon, Group, Modal, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconEdit } from '@tabler/icons';
import { z } from 'zod';
import { Button } from '@components/atoms/Button/Button';
import { FormTextInput } from '@components/molecules/FormTextInput/FormTextInput';
import { Form } from '@components/templates/Form/Form';
import { useUpdatePet } from '@hooks/useUpdatePet';
import { IPetUpdateRequest } from '@http/apiClient';

const schema: z.ZodType<IPetUpdateRequest> = z.object({
  city: z.string().trim().min(2, 'City must be at least two characters long'),
  country: z.string().trim().min(2, 'Country must be at least two characters long'),
  name: z.string().trim().min(2, 'Name must be at least two characters long'),
  state: z.string().trim().optional(),
});

type Props = {
  pet: IPetUpdateRequest & { id: string };
};

export const UpdatePetModal = ({ pet: { id, ...pet } }: Props) => {
  const { updatePet, petUpdateError, resetPetUpdate, isUpdatingPet } = useUpdatePet();
  const [opened, { close, open }] = useDisclosure(false);

  const onSubmit = useCallback(
    (pet: IPetUpdateRequest) => {
      updatePet({ id, pet }, { onSuccess: close });
    },
    [id, close, updatePet]
  );

  const serverError = useMemo(() => {
    if (!petUpdateError?.errors) {
      return undefined;
    }

    return Object.values(petUpdateError.errors).flatMap((error) => error)[0];
  }, [petUpdateError]);

  return (
    <>
      <ActionIcon color="blue.3" onClick={open} size="sm">
        <IconEdit />
      </ActionIcon>

      <Modal closeOnClickOutside={false} onClose={close} opened={opened} overlayBlur={2} title={`Update ${pet.name}`}>
        <Form defaultValues={pet} onSubmit={onSubmit} schema={schema}>
          {({ watch }) => {
            watch(() => {
              resetPetUpdate();
            });

            return (
              <Stack spacing="lg">
                <FormTextInput disabled={isUpdatingPet} label="Name" name="name" withAsterisk />
                <FormTextInput disabled={isUpdatingPet} label="City" name="city" withAsterisk />
                <FormTextInput disabled={isUpdatingPet} label="State/Province" name="state" />
                <FormTextInput disabled={isUpdatingPet} label="Country" name="country" withAsterisk />
                <Group spacing="sm">
                  <Button isLoading={isUpdatingPet} type="submit">
                    Submit
                  </Button>
                  <Button color="red.5" disabled={isUpdatingPet} onClick={close} variant="subtle">
                    Cancel
                  </Button>
                </Group>
                {serverError && <Text color="red.7">{serverError}</Text>}
              </Stack>
            );
          }}
        </Form>
      </Modal>
    </>
  );
};
