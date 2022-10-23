import { useCallback, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';

type ModalConfig = {
  title: string;
  message: string;
  cancelButtonText?: string;
  confirmButtonText?: string;
  onConfirm: () => unknown;
};

export const useDestructiveConfirmationModal = () => {
  const [isOpen, { close, open: openModal }] = useDisclosure(false);
  const [config, setConfig] = useState<ModalConfig>();

  const open = useCallback(
    (modalConfig: ModalConfig) => {
      setConfig(modalConfig);
      openModal();
    },
    [openModal]
  );

  const onConfirm = useCallback(() => {
    config?.onConfirm();
    close();
    setConfig(undefined);
  }, [close, config]);

  return { ...config, isOpen, onClose: close, onConfirm, open };
};
