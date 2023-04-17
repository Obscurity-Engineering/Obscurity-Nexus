import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { TestButton, ButtonProps }from './TestButton';

export default {
  title: 'TestButton',
  component: TestButton,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <TestButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Click me!',
  onClick: () => {
    console.log('Button clicked!');
  },
};
