import type { Meta, StoryObj } from '@storybook/react-vite';

import { AdminDashboard } from './AdminDashboard';

const meta = {
  component: AdminDashboard,
} satisfies Meta<typeof AdminDashboard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};