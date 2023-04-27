import type { Meta, StoryObj } from '@storybook/react';
import nav_links from '../Header/nav_links.json';

import Navigator from './Navigator';

const meta = {
    title: 'Navigator',
    component: Navigator,
    tags: ['autodocs'],
} satisfies Meta<typeof Navigator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
    args: {
        navItems: nav_links,
    }
} satisfies Story;

