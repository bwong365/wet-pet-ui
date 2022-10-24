import { ActionIcon, Group, Title } from '@mantine/core';
import { IconMenu2 } from '@tabler/icons';
import Link from 'next/link';
import { ColorModeSwitch } from '@components/atoms/ColorModeSwitch/ColorModeSwitch';

type Props = {
  toggleSidebar?: () => void | undefined;
  showSidebarToggle: boolean;
};

export const PetLayoutHeader = ({ toggleSidebar, showSidebarToggle }: Props) => {
  return (
    <Group px={showSidebarToggle ? 'sm' : undefined} sx={{ justifyContent: 'space-between', width: '100%' }}>
      {showSidebarToggle && (
        <ActionIcon onClick={toggleSidebar}>
          <IconMenu2 />
        </ActionIcon>
      )}

      <Title order={2}>
        <Link href={'/pets'}>Wet Pet</Link>
      </Title>

      <ColorModeSwitch />
    </Group>
  );
};
