import { Box, CloseButton, Grid, Group, Modal, Stack, Title } from '@mantine/core';
import { Button } from '@components/atoms/Button/Button';

type Props = {
  onConfirm?: () => void | Promise<unknown>;
  title?: string;
  message?: string;
  isOpen: boolean;
  onClose: () => void;
  cancelButtonText?: string;
  confirmButtonText?: string;
};

export const DestructiveConfirmationModal = ({
  onConfirm,
  title,
  message,
  isOpen,
  onClose,
  cancelButtonText = 'Cancel',
  confirmButtonText = 'Yes',
}: Props) => {
  return (
    <Modal onClose={onClose} opened={isOpen} overlayBlur={2} withCloseButton={false}>
      <Stack spacing="lg">
        <Grid>
          <Grid.Col span={11}>
            <Title order={3}>{title}</Title>
          </Grid.Col>
          <Grid.Col span={1}>
            <CloseButton iconSize={16} onClick={onClose} />
          </Grid.Col>
        </Grid>
        <Box>{message}</Box>
        <Group>
          <Button
            onClick={() => {
              onConfirm?.();
              onClose();
            }}
          >
            {confirmButtonText}
          </Button>
          <Button color="red.6" onClick={onClose} p="sm" variant="subtle">
            {cancelButtonText}
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};
