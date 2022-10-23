import { Divider, Group, Navbar, Title } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '@components/atoms/Button/Button';
import { ColorModeSwitch } from '@components/atoms/ColorModeSwitch/ColorModeSwitch';
import { PetList } from '@components/organisms/PetList/PetList';

export const Sidebar = () => {
  const router = useRouter();

  return (
    <Navbar width={{ base: 300 }}>
      <Navbar.Section p="md">
        <Group sx={{ justifyContent: 'space-between' }}>
          <Title order={2}>
            <Link href={'/pets'}>Wet Pet</Link>
          </Title>
          <ColorModeSwitch />
        </Group>
      </Navbar.Section>

      <Divider />

      <Navbar.Section grow>
        <PetList />
      </Navbar.Section>

      <Divider />

      <Navbar.Section p="xs">
        <Button color="gray" fullWidth onClick={() => router.push('/api/auth/logout')}>
          Log out
        </Button>
      </Navbar.Section>
    </Navbar>
  );
};
