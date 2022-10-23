import { useCallback } from 'react';
import { Box, Center, Container, Grid, Group, Stack, Text, Title } from '@mantine/core';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button } from '@components/atoms/Button/Button';
import { ColorModeSwitch } from '@components/atoms/ColorModeSwitch/ColorModeSwitch';

export const Home = () => {
  const router = useRouter();
  const signIn = useCallback(() => {
    router.push('/api/auth/login?returnTo=/pets');
  }, [router]);

  return (
    <Container p="xl" sx={{ width: '100%' }}>
      <Stack spacing="xl">
        <Box>
          <Group sx={{ justifyContent: 'space-between' }}>
            <Title order={1}>Welcome to Wet Pet</Title>
            <ColorModeSwitch />
          </Group>
          <Title order={3}>Does your dog need an umbrella?</Title>
        </Box>

        <Grid>
          <Grid.Col md={6} orderMd={2} span={12}>
            <Box sx={{ height: '100%' }}>
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
              >
                <Stack spacing="xl">
                  <Text align="center" size="lg" weight="bold">
                    Never let your pet get caught out in the rain again!
                  </Text>
                  <Button fullWidth onClick={signIn}>
                    Sign In
                  </Button>
                </Stack>
              </motion.div>
            </Box>
          </Grid.Col>
          <Grid.Col md={6} orderMd={1} span={12}>
            <Center>
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: '-250' }}
                transition={{ duration: 1, ease: 'easeInOut', opacity: { duration: 1.5, ease: 'easeIn' } }}
              >
                <Image alt="A dog with an umbrella" height="600" priority src="/assets/umbrella-dog.jpg" width="670" />
              </motion.div>
            </Center>
          </Grid.Col>
        </Grid>

        <Box>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <Text align="center" mt={20} size="lg">
              *Now hiring: a real designer!
            </Text>
          </motion.div>
        </Box>
      </Stack>
    </Container>
  );
};
