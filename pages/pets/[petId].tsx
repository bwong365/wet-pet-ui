import { ReactElement } from 'react';
import { dehydrate } from '@tanstack/react-query';
import { GetServerSidePropsContext } from 'next';
import { Loading } from '@components/atoms/Loading/Loading';
import { PetDisplay } from '@components/pages/PetDisplay/PetDisplay';
import { prefetchPetReport, useFetchPetReport } from '@hooks/useFetchPetReport';
import { PetLayout } from '@layouts/PetLayout';

type RouteParams = {
  petId: string;
};

export const getServerSideProps = async ({ params, req, res }: GetServerSidePropsContext<RouteParams>) => {
  if (!params) {
    return { props: {} };
  }

  const petId = params.petId;

  const queryClient = await prefetchPetReport({ petId, req, res });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      petId,
    },
  };
};

type Props = Partial<RouteParams>;

const PetPage = ({ petId }: Props) => {
  const { pet } = useFetchPetReport({ petId });

  if (!pet) {
    return <Loading />;
  }

  return <PetDisplay pet={pet} />;
};

PetPage.getLayout = (page: ReactElement) => {
  return <PetLayout>{page}</PetLayout>;
};

export default PetPage;
