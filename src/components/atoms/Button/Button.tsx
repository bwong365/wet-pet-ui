import { ReactNode } from 'react';
import { Box, ButtonProps, Center, Button as MantineButton } from '@mantine/core';
import { Oval } from 'react-loader-spinner';

type Props = ButtonProps & {
  children: ReactNode;
  isLoading?: boolean;
  onClick?: () => void;
};

export const Button = ({ children, isLoading, ...props }: Props) => {
  return (
    <MantineButton {...props}>
      <Center>
        <Box sx={{ opacity: isLoading ? 0 : 1 }}>{children}</Box>

        {isLoading && (
          <Center sx={{ position: 'absolute' }}>
            <Oval color="white" height={25} secondaryColor="white" strokeWidth={4} />
          </Center>
        )}
      </Center>
    </MantineButton>
  );
};
