import { Box, NavLink, Stack } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Loading } from '@components/atoms/Loading/Loading';
import { useFetchAllPets } from '@hooks/useFetchAllPets';
import { PetSpecies } from '@http/_genClient';
import { getPetSpeciesText } from '@utils/getPetSpeciesText';

export const PetList = () => {
  const { pets } = useFetchAllPets();
  const { query } = useRouter();

  if (!pets) {
    return <Loading />;
  }

  return (
    <Stack spacing={0}>
      {pets.map((pet) => (
        <Link href={`/pets/${pet.id}`} key={pet.id} passHref>
          <Box sx={{ display: 'flex' }}>
            <NavLink
              active={query.petId === pet.id}
              component="a"
              icon={
                <Image
                  alt={`A ${getPetSpeciesText(pet.species)}`}
                  height={40}
                  objectFit="contain"
                  priority
                  src={petIconMap[pet.species]}
                  width={40}
                />
              }
              label={pet.name}
            />
          </Box>
        </Link>
      ))}
    </Stack>
  );
};

const petIconMap = {
  [PetSpecies.Camel]: '/assets/camel.png',
  [PetSpecies.Dog]: '/assets/dog.png',
  [PetSpecies.PolarBear]: '/assets/polarbear.png',
  [PetSpecies.Swordfish]: '/assets/swordfish.png',
};
