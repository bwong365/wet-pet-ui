import { Button } from '@mantine/core';
import { useRouter } from 'next/router';

export const LogoutButton = () => {
  const router = useRouter();
  return (
    <Button color="gray" fullWidth onClick={() => router.push('/api/auth/logout')}>
      Log out
    </Button>
  );
};
