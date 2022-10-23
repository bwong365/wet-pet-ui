import { ComponentMeta, Story } from '@storybook/react';
import { UseCreatePetContext } from '@hooks/useCreatePet';
import { AddPetModal } from './AddPetModal';

export default {
  argTypes: {
    onSubmit: { action: 'onSubmit' },
  },
  component: AddPetModal,
  title: 'Organisms/AddPetModal',
} as ComponentMeta<typeof AddPetModal>;

export const Base: Story = ({ onSubmit }) => (
  <UseCreatePetContext.Provider
    value={() => ({
      createPet: (pet) => {
        onSubmit(pet);
        return new Promise((res) => res);
      },
      isCreatingPet: false,
      petCreationError: null,
      resetPetCreation: () => {
        // noop
      },
    })}
  >
    <AddPetModal />
  </UseCreatePetContext.Provider>
);

Base.storyName = 'AddPetModal';

Base.args = {};
