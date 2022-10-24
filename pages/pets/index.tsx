import { ReactElement } from 'react';
import { Box, Text, Title } from '@mantine/core';
import { dehydrate } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
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
  return (
    <Box>
      <Title mb="xl" order={1}>
        Welcome!
      </Title>
      <Text>Wet Pet helps you monitor the environment and relative comfort of your pets.</Text>
      <Text> Different species will have different preferences in climate; feel free to play around with it!</Text>
      <Text mt="sm" size="sm">
        *Powered by the
        <Text span variant="link">
          <Link href="https://openweathermap.org/api"> Open Weather Api </Link>
        </Text>
        for location validation and weather reporting
      </Text>
    </Box>
  );
};

Pets.getLayout = (page: ReactElement) => {
  return <PetLayout>{page}</PetLayout>;
};

export default Pets;
