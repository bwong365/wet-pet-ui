import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Loading } from './Loading';

export default {
  argTypes: {},
  component: Loading,
  title: 'Atoms/Loading',
} as ComponentMeta<typeof Loading>;

export const Base: ComponentStory<typeof Loading> = () => <Loading />;

Base.storyName = 'Loading';

Base.args = {};
