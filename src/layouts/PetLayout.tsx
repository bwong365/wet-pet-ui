import { ReactNode, useEffect } from 'react';
import { AppShell, Header, useMantineTheme } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Router } from 'next/router';
import { PetLayoutHeader } from '@components/organisms/PetLayoutHeader/PetLayoutHeader';
import { Sidebar } from '@components/organisms/Sidebar/Sidebar';

type Props = {
  children: ReactNode;
};

export const PetLayout = ({ children }: Props) => {
  const theme = useMantineTheme();
  const isFullSize = useMediaQuery(`(min-width: ${theme.breakpoints.sm}px)`, false);

  const [opened, { open, close }] = useDisclosure(false);
  useEffect(() => {
    Router.events.on('routeChangeComplete', close);
    return () => {
      Router.events.off('routeChangeComplete', close);
    };
  }, [close]);

  return (
    <AppShell
      header={
        !isFullSize ? (
          <Header height={50} sx={{ display: 'flex' }} withBorder>
            <PetLayoutHeader openSidebar={open} showSidebarToggle />
          </Header>
        ) : undefined
      }
      navbar={<Sidebar isFullSize={isFullSize} onCloseDrawer={close} shouldShowDrawer={opened} />}
      padding="md"
    >
      {children}
    </AppShell>
  );
};
