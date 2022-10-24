import { PetStatus } from '@http/apiClient';
import { getPetStatusText } from './getPetStatusText';

describe('getPetStatusText', () => {
  it('returns pet statuses', () => {
    const result = getPetStatusText({ name: 'Fido', statuses: [PetStatus.Cold, PetStatus.Content, PetStatus.Dry] });

    expect(result).toEqual('Fido could use a sweater. They look pretty happy! They want to go for a swim!');
  });

  it('handles an empty status array', () => {
    const result = getPetStatusText({ name: 'Fido', statuses: [] });

    expect(result).toMatch(/Fido .* hiding/);
  });
});
