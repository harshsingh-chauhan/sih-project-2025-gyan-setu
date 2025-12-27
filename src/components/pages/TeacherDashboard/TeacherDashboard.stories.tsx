import type { Meta, StoryObj } from '@storybook/react-vite';

import { TeacherDashboard } from './TeacherDashboard';

const meta = {
  component: TeacherDashboard,
} satisfies Meta<typeof TeacherDashboard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};