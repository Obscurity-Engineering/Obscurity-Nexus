import type { Meta, StoryObj } from '@storybook/react';
import Landing from '..';

// Import Stories Present on Page

const meta = {
    title: 'Landing',
    component: Landing,
} satisfies Meta<typeof Landing>;

export default meta;
type Story = StoryObj<typeof Landing>;

export const Default = {
    args: {
        // Work in progress, will need to build additional components and determine the props needed for the landing page to finish this story.
    }
} satisfies Story;