// https://testing-library.com/docs/react-testing-library/setup

import React, { FC, ReactElement } from 'react';
import { MantineProvider } from '@mantine/core';
import { render, RenderOptions } from '@testing-library/react';

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <MantineProvider>{children}</MantineProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
