import { ReactElement } from 'react';
import { Box } from '@mantine/core';
import { dehydrate } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import { prefetchAllPets } from '@hooks/useFetchAllPets';
import { PetLayout } from '@layouts/PetLayout';

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const queryClient = await prefetchAllPets({ req, res });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Pets = () => {
  return <Box>Welcome!</Box>;
};

Pets.getLayout = (page: ReactElement) => {
  return <PetLayout>{page}</PetLayout>;
};

export default Pets;
