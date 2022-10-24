import { Box, Divider, Drawer, Navbar, ScrollArea, Stack } from '@mantine/core';
import { PetLayoutHeader } from '@components/organisms/PetLayoutHeader/PetLayoutHeader';
import { PetList } from '@components/organisms/PetList/PetList';
import { AddPetModal } from '../AddPetModal/AddPetModal';
import { LogoutButton } from '../LogoutButton/LogoutButton';

type Props = {
  shouldShowDrawer: boolean;
  isFullSize: boolean;
  onCloseDrawer: () => void;
};

export const Sidebar = ({ shouldShowDrawer, isFullSize: showExpanded, onCloseDrawer }: Props) => {
  if (!showExpanded) {
    return (
      <Drawer onClose={onCloseDrawer} opened={shouldShowDrawer}>
        <Stack
          spacing={0}
          sx={{
            height: 'calc(100% - 44px)',
          }}
        >
          <Box>
            <AddPetModal />
            <Divider />
          </Box>

          <ScrollArea scrollbarSize={5} sx={{ flexGrow: 1 }} type="auto">
            <PetList />
          </ScrollArea>

          <Divider />
          <Box p="xs">
            <LogoutButton />
          </Box>
        </Stack>
      </Drawer>
    );
  }

  return (
    <Navbar hiddenBreakpoint="sm" width={{ base: '100%', sm: 300 }}>
      {showExpanded && (
        <Navbar.Section p="md">
          <PetLayoutHeader showSidebarToggle={false} />
        </Navbar.Section>
      )}

      <Divider />
      <AddPetModal />

      <Navbar.Section component={ScrollArea} grow scrollbarSize={5} type="auto">
        <PetList />
      </Navbar.Section>

      <Divider />

      <Navbar.Section p="xs">
        <LogoutButton />
      </Navbar.Section>
    </Navbar>
  );
};
