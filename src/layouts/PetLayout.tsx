import type { ReactNode } from 'react';
import { AppShell } from '@mantine/core';
import { Sidebar } from '@components/organisms/Sidebar/Sidebar';

type Props = {
  children: ReactNode;
};

export const PetLayout = ({ children }: Props) => {
  return (
    <AppShell navbar={<Sidebar />} padding="md">
      {children}
    </AppShell>
  );
};
