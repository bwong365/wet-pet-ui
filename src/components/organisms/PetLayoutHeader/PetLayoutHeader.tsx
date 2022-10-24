import { ActionIcon, Grid, Title } from '@mantine/core';
import { IconMenu2 } from '@tabler/icons';
import Link from 'next/link';
import { ColorModeSwitch } from '@components/atoms/ColorModeSwitch/ColorModeSwitch';

type Props = {
  openSidebar?: () => void | undefined;
  showSidebarToggle: boolean;
};

export const PetLayoutHeader = ({ openSidebar, showSidebarToggle }: Props) => {
  return (
    <Grid
      columns={showSidebarToggle ? 3 : 2}
      mx={0}
      px={showSidebarToggle ? 'sm' : 0}
      sx={{ alignItems: 'center', width: '100%' }}
    >
      {showSidebarToggle && (
        <Grid.Col span={1}>
          <ActionIcon onClick={openSidebar}>
            <IconMenu2 />
          </ActionIcon>
        </Grid.Col>
      )}

      <Grid.Col span={1} sx={showSidebarToggle ? { display: 'flex', justifyContent: 'center' } : undefined}>
        <Title order={2}>
          <Link href={'/pets'}>Wet Pet</Link>
        </Title>
      </Grid.Col>

      <Grid.Col span={1} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ColorModeSwitch />
      </Grid.Col>
    </Grid>
  );
};
