import { Group, Switch, ThemeIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconMoonOff, IconSun, IconSunOff } from '@tabler/icons';

export const ColorModeSwitch = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Group spacing={6}>
      <ThemeIcon
        color={isDark ? 'dark.3' : 'blue.4'}
        onClick={() => toggleColorScheme('light')}
        size="sm"
        sx={{ border: 'none' }}
        variant="outline"
      >
        {isDark ? <IconSunOff /> : <IconSun />}
      </ThemeIcon>
      <Switch checked={isDark} color="gray" onChange={() => toggleColorScheme()} />
      <ThemeIcon
        color={isDark ? 'blue.4' : 'gray.4'}
        onClick={() => toggleColorScheme('dark')}
        size="sm"
        sx={{ border: 'none' }}
        variant="outline"
      >
        {isDark ? <IconMoon /> : <IconMoonOff />}
      </ThemeIcon>
    </Group>
  );
};
