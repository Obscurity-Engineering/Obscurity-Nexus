import type { Meta, StoryObj } from '@storybook/react';

import Logo from './Logo';

const meta = {
    title: 'Logo',
    component: Logo,
    tags: ['autodocs'],
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Icon = {
    args: {
        width: 50,
        height: 50,
    }
} satisfies Story;

export const Navigation = {
    args: {
        width: 100,
        height: 100,
    }
} satisfies Story;