import React from 'react';
import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useDarkMode, UPDATE_DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import '../styles/globals.css';
import addons from '@storybook/addons';

const channel = addons.getChannel();

const ThemeWrapper = ({ children }) => {
  const colorScheme = useDarkMode() ? 'dark' : 'light';

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={() => channel.emit(UPDATE_DARK_MODE_EVENT_NAME)}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [(renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];
