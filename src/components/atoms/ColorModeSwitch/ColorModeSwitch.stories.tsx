import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ColorModeSwitch } from './ColorModeSwitch';

export default {
  argTypes: {},
  component: ColorModeSwitch,
  title: 'Atoms/ColorModeSwitch',
} as ComponentMeta<typeof ColorModeSwitch>;

export const Base: ComponentStory<typeof ColorModeSwitch> = () => <ColorModeSwitch />;

Base.storyName = 'ColorModeSwitch';

Base.args = {};
