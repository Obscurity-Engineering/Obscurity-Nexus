import type { Meta, StoryObj } from '@storybook/react';
import { NavLinks } from '../../library/NavLinks';

import { Navigator } from './Navigator';

const meta = {
    title: 'Navigator',
    component: Navigator,
    tags: ['autodocs'],
} satisfies Meta<typeof Navigator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
    args: {
        navItems: NavLinks,
    }
} satisfies Story;

