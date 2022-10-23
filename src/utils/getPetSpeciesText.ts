import { PetSpecies } from '@http/apiClient';

const speciesTranslation: Record<PetSpecies, string> = {
  [PetSpecies.Camel]: 'Camel',
  [PetSpecies.Dog]: 'Dog',
  [PetSpecies.PolarBear]: 'Polar Bear',
  [PetSpecies.Swordfish]: 'Swordfish',
};

export const getPetSpeciesText = (species: PetSpecies) => speciesTranslation[species];
