import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { useDeletePet } from '@hooks/useDeletePet';
import { render } from '@utils/testUtils';
import { DeletePetModal } from './DeletePetModal';

jest.mock('@hooks/useDeletePet', () => ({
  useDeletePet: jest.fn(),
}));
const mockDeletePet = jest.mocked(useDeletePet);

describe('DeletePetModal', () => {
  it('deletes a pet', async () => {
    const user = userEvent.setup();
    const deletePet = jest.fn();
    mockDeletePet.mockImplementation(() => ({
      deletePet: (pet) => deletePet(pet),
      isDeletingPet: false,
      petDeletionError: null,
      resetPetDeletion: jest.fn(),
    }));

    render(<DeletePetModal id="pet-id" name="Pikachu" />);

    await user.click(screen.getByRole('button', { name: 'Release Pikachu' }));
    await user.click(screen.getByRole('button', { name: 'Yes' }));

    expect(deletePet).toHaveBeenCalledWith('pet-id');
  });
});
