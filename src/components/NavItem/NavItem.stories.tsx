import type { Meta, StoryObj } from '@storybook/react';

import NavItem from './NavItem';

const meta = {
    title: 'NavItem',
    component: NavItem,
    tags: ['autodocs'],
} satisfies Meta<typeof NavItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
    args: {
        text: 'Link',
        href: 'http://localhost:3000/',
    }
} satisfies Story;

