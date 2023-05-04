import type { Meta, StoryObj } from '@storybook/react';

import { NavButton } from './NavButton';

const meta = {
    title: 'NavItem',
    component: NavButton,
    tags: ['autodocs'],
} satisfies Meta<typeof NavButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
    args: {
        text: 'Link',
        href: 'http://localhost:3000/',
    }
} satisfies Story;

