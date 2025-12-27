import type { Meta, StoryObj } from '@storybook/react-vite';

import { TeacherClassOverview } from './TeacherClassOverview';

const meta = {
  component: TeacherClassOverview,
} satisfies Meta<typeof TeacherClassOverview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};