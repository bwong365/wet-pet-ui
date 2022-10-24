import { PetStatus } from '@http/_genClient';

type Params = {
  statuses: PetStatus[];
  name: string;
};

export const getPetStatusText = ({ statuses, name }: Params) =>
  statuses.map((status, idx) => `${idx === 0 ? name : 'They'} ${translateStatusToText(status, idx === 0)}`).join(' ') ||
  `${name} appears to be hiding somewhere! We'll keep looking for them.`;

const translateStatusToText = (status: PetStatus, isSingular: boolean) => {
  return {
    [PetStatus.Cold]: 'could use a sweater.',
    [PetStatus.Content]: `${isSingular ? 'looks' : 'look'} pretty happy!`,
    [PetStatus.Dry]: `${isSingular ? 'wants' : 'want'} to go for a swim!`,
    [PetStatus.Hot]: 'could use some shade.',
    [PetStatus.Scared]: `really, really ${isSingular ? 'wants' : 'want'} to come inside now.`,
    [PetStatus.Snowman]: `${isSingular ? 'is' : 'are'} building a snowman!`,
    [PetStatus.Wet]: 'could use an umbrella.',
  }[status];
};
