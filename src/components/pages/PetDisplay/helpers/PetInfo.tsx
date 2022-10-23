import { useMemo } from 'react';
import { Box, Group, Text, Title } from '@mantine/core';
import { UpdatePetModal } from '@components/organisms/UpdatePetModal/UpdatePetModal';
import { IPetReportResponse } from '@http/apiClient';
import { getPetSpeciesText } from '@utils/getPetSpeciesText';
import { getPetStatusText } from '@utils/getPetStatusText';

type Props = {
  pet: IPetReportResponse;
};

export const PetInfo = ({ pet }: Props) => {
  const { name, species, city, state, country, tempC, statuses } = pet;

  const statusMessages = useMemo(() => {
    return getPetStatusText({ name, statuses });
  }, [name, statuses]);

  return (
    <Box>
      <Group>
        <Title order={3}>
          {name} the {getPetSpeciesText(species)}
        </Title>

        <UpdatePetModal pet={pet} />
      </Group>
      <Text>Located in {formatLocation(city, state, country)}.</Text>
      <Text>Current temperature: {tempC}&deg;C.</Text>
      <Text>{statusMessages}</Text>
    </Box>
  );
};

function formatLocation(city: string, state: string | undefined, country: string) {
  return [city, state, country].filter(Boolean).join(', ');
}
