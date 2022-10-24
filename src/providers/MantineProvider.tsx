import { ReactNode, useState } from 'react';
import { MantineProvider as BaseMantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import { NotificationsProvider } from '@mantine/notifications';
import { setCookie } from 'cookies-next';

type Props = {
  children: ReactNode;
  savedColorScheme?: ColorScheme;
};

export const MantineProvider = ({ children, savedColorScheme }: Props) => {
  const { colorScheme, toggleColorScheme } = useMantineColorMode(savedColorScheme);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <BaseMantineProvider
        theme={{
          colorScheme,
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <NotificationsProvider position="top-right">{children}</NotificationsProvider>
      </BaseMantineProvider>
    </ColorSchemeProvider>
  );
};

export const COLOR_THEME_COOKIE_KEY = 'mantine-color-scheme';
const THIRTY_DAYS_IN_SECONDS = 60 * 60 * 24 * 30;

const useMantineColorMode = (savedColorScheme: ColorScheme | undefined) => {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(savedColorScheme ?? preferredColorScheme);
  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value ?? (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie(COLOR_THEME_COOKIE_KEY, nextColorScheme, { maxAge: THIRTY_DAYS_IN_SECONDS });
  };
  return { colorScheme, toggleColorScheme };
};
