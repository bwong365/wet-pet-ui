import { Box, Button } from '@mantine/core';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DestructiveConfirmationModal } from './DestructiveConfirmationModal';
import { useDestructiveConfirmationModal } from './useDestructiveConfirmationModal';

export default {
  argTypes: {},
  component: DestructiveConfirmationModal,
  title: 'Molecules/DestructiveConfirmationModal',
} as ComponentMeta<typeof DestructiveConfirmationModal>;

export const Base: ComponentStory<typeof DestructiveConfirmationModal> = ({ onConfirm }) => {
  const { open, ...modal } = useDestructiveConfirmationModal();
  return (
    <Box>
      <Button
        onClick={() =>
          open({
            cancelButtonText: 'Cancel',
            confirmButtonText: 'Confirm',
            message: 'Do you want to release Mittens?',
            onConfirm: () => onConfirm?.(),
            title: 'Delete Pet?',
          })
        }
      >
        Open Modal
      </Button>
      <DestructiveConfirmationModal {...modal} />
    </Box>
  );
};

Base.storyName = 'DestructiveConfirmationModal';

Base.args = {};
