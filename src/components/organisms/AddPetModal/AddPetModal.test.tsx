import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { useCreatePet } from '@hooks/useCreatePet';
import { render } from '@utils/testUtils';
import { AddPetModal } from './AddPetModal';

jest.mock('@hooks/useCreatePet', () => ({
  useCreatePet: jest.fn(),
}));
const mockCreatePet = jest.mocked(useCreatePet);

describe('AddPetModal', () => {
  it('creates a pet', async () => {
    const user = userEvent.setup();
    const createPet = jest.fn();
    mockCreatePet.mockImplementation(() => ({
      createPet: (pet) => createPet(pet),
      isCreatingPet: false,
      petCreationError: null,
      resetPetCreation: jest.fn(),
    }));

    render(<AddPetModal />);

    await user.click(screen.getByRole('button', { name: 'Add Pet' }));
    await user.type(screen.getByRole('textbox', { name: 'Name' }), 'Test Pet');
    await user.type(screen.getByRole('textbox', { name: 'City' }), 'Test City');
    await user.type(screen.getByRole('textbox', { name: 'Country' }), 'Test Country');
    await user.click(screen.getByRole('button', { name: 'Submit' }));

    expect(createPet).toHaveBeenCalledWith(
      expect.objectContaining({
        city: 'Test City',
        country: 'Test Country',
        name: 'Test Pet',
      })
    );
  });

  it('validates the input', async () => {
    const user = userEvent.setup();
    const createPet = jest.fn();
    mockCreatePet.mockImplementation(() => ({
      createPet: (pet) => createPet(pet),
      isCreatingPet: false,
      petCreationError: null,
      resetPetCreation: jest.fn(),
    }));

    render(<AddPetModal />);

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Add Pet' }));
    await user.type(screen.getByRole('textbox', { name: 'City' }), 'Test City');
    await user.type(screen.getByRole('textbox', { name: 'Country' }), 'Test Country');
    await user.click(screen.getByRole('button', { name: 'Submit' }));

    expect(await screen.findByRole('alert')).toHaveTextContent(/Name must be \w+/);
    expect(createPet).not.toHaveBeenCalled();
  });
});
