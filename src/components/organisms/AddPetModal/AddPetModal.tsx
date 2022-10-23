import { useCallback, useMemo } from 'react';
import { Group, Modal, SelectItem, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/router';
import { z } from 'zod';
import { Button } from '@components/atoms/Button/Button';
import { FormSelect } from '@components/molecules/FormSelect/FormSelect';
import { FormTextInput } from '@components/molecules/FormTextInput/FormTextInput';
import { Form } from '@components/templates/Form/Form';
import { useCreatePet } from '@hooks/useCreatePet';
import { IPetAdditionRequest, PetSpecies } from '@http/apiClient';
import { getPetSpeciesText } from '@utils/getPetSpeciesText';

const schema: z.ZodType<IPetAdditionRequest> = z.object({
  city: z.string().trim().min(2, 'City must be at least two characters long'),
  country: z.string().trim().min(2, 'Country must be at least two characters long'),
  name: z.string().trim().min(2, 'Name must be at least two characters long'),
  species: z.nativeEnum(PetSpecies),
  state: z.string().trim().optional(),
});

const defaultFormValues: IPetAdditionRequest = {
  city: '',
  country: '',
  name: '',
  species: PetSpecies.Dog,
  state: '',
};

const selectValues: SelectItem[] = Object.keys(PetSpecies).map((key) => ({
  label: getPetSpeciesText(key as PetSpecies),
  value: key,
}));

export const AddPetModal = () => {
  const router = useRouter();
  const { createPet, petCreationError, resetPetCreation, isCreatingPet } = useCreatePet();
  const [opened, { close, open }] = useDisclosure(false);

  const onSubmit = useCallback(
    (pet: IPetAdditionRequest) => {
      createPet(pet, {
        onSuccess: (createdPet) => {
          close();
          router.push(`/pets/${createdPet.id}`);
        },
      });
    },
    [close, createPet, router]
  );

  const serverError = useMemo(() => {
    if (!petCreationError?.errors) {
      return undefined;
    }

    return Object.values(petCreationError.errors).flatMap((error) => error)[0];
  }, [petCreationError]);

  return (
    <>
      <Button fullWidth onClick={open} radius={0}>
        Add Pet
      </Button>
      <Modal closeOnClickOutside={false} onClose={close} opened={opened} overlayBlur={2} title="Add a Pet">
        <Form defaultValues={defaultFormValues} onSubmit={onSubmit} schema={schema}>
          {({ watch }) => {
            watch(() => {
              resetPetCreation();
            });

            return (
              <Stack spacing="lg">
                <FormTextInput disabled={isCreatingPet} label="Name" name="name" withAsterisk />
                <FormSelect data={selectValues} disabled={isCreatingPet} label="Species" name="species" />

                <FormTextInput disabled={isCreatingPet} label="City" name="city" withAsterisk />
                <FormTextInput disabled={isCreatingPet} label="State/Province" name="state" />
                <FormTextInput disabled={isCreatingPet} label="Country" name="country" withAsterisk />
                <Group spacing="sm">
                  <Button isLoading={isCreatingPet} type="submit">
                    Submit
                  </Button>
                  <Button color="red.5" disabled={isCreatingPet} onClick={close} variant="subtle">
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
