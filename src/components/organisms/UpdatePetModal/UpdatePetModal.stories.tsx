import { ComponentMeta, Story } from '@storybook/react';
import { UseUpdatePetContext } from '@hooks/useUpdatePet';
import { UpdatePetModal } from './UpdatePetModal';

export default {
  argTypes: {
    onSubmit: { action: 'onSubmit' },
  },
  component: UpdatePetModal,
  title: 'Organisms/UpdatePetModal',
} as ComponentMeta<typeof UpdatePetModal>;

export const Base: Story = ({ onSubmit }) => (
  <UseUpdatePetContext.Provider
    value={() => ({
      isUpdatingPet: false,
      petUpdateError: null,
      resetPetUpdate: () => {
        // noop
      },
      updatePet: (pet) => {
        onSubmit(pet);
        return new Promise((res) => res);
      },
    })}
  >
    <UpdatePetModal pet={{ city: 'Springfield', country: 'USA', id: '5', state: 'Illinois' }} />
  </UseUpdatePetContext.Provider>
);

Base.storyName = 'UpdatePetModal';

Base.args = {};
