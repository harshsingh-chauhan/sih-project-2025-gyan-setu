import type { Meta, StoryObj } from '@storybook/react-vite';

import { DigitalLiteracy } from './DigitalLiteracy';

const meta = {
  component: DigitalLiteracy,
} satisfies Meta<typeof DigitalLiteracy>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};