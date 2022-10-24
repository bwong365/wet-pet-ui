import { ComponentProps } from 'react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { render } from '@utils/testUtils';
import { DestructiveConfirmationModal } from './DestructiveConfirmationModal';

const defaultProps: ComponentProps<typeof DestructiveConfirmationModal> = {
  cancelButtonText: 'Cancel',
  confirmButtonText: 'Confirm',
  isOpen: true,
  onClose: () => {
    //noop
  },
};

describe('DestructiveConfirmationModal', () => {
  it('is hidden when not open', () => {
    render(<DestructiveConfirmationModal {...defaultProps} isOpen={false} />);

    expect(screen.queryByText('Test-Title')).not.toBeInTheDocument();
  });

  it('it invokes onConfirm and closes when clicking confirm', async () => {
    const user = userEvent.setup();
    const mockConfirm = jest.fn();
    const mockClose = jest.fn();
    render(<DestructiveConfirmationModal {...defaultProps} onClose={mockClose} onConfirm={mockConfirm} />);

    await user.click(screen.getByRole('button', { name: 'Confirm' }));
    expect(mockConfirm).toHaveBeenCalled();
    expect(mockClose).toHaveBeenCalled();
  });

  it('it closes but does not invoke onConfirm when clicking cancel', async () => {
    const user = userEvent.setup();
    const mockConfirm = jest.fn();
    const mockClose = jest.fn();
    render(<DestructiveConfirmationModal {...defaultProps} onClose={mockClose} onConfirm={mockConfirm} />);

    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(mockConfirm).not.toHaveBeenCalled();
    expect(mockClose).toHaveBeenCalled();
  });
});
