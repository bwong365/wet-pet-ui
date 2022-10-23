import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';

export default {
  argTypes: {},
  component: Button,
  title: 'Atoms/Button',
} as ComponentMeta<typeof Button>;

export const Base: ComponentStory<typeof Button> = () => <Button>Test</Button>;
export const Loading: ComponentStory<typeof Button> = () => <Button isLoading>Test</Button>;

Base.storyName = 'Button';

Base.args = {};
