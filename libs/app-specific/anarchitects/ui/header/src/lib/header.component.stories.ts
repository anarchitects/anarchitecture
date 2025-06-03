import type { Meta, StoryObj } from '@storybook/angular';
import { AnarchitectsUiHeaderComponent } from './header.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AnarchitectsUiHeaderComponent> = {
  component: AnarchitectsUiHeaderComponent,
  title: 'AnarchitectsUiHeaderComponent',
};
export default meta;
type Story = StoryObj<AnarchitectsUiHeaderComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/header works!/gi)).toBeTruthy();
  },
};
