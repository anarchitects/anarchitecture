import type { Meta, StoryObj } from '@storybook/angular';
import { AnarchitectsUiHeroComponent } from './hero.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AnarchitectsUiHeroComponent> = {
  component: AnarchitectsUiHeroComponent,
  title: 'AnarchitectsUiHeroComponent',
};
export default meta;
type Story = StoryObj<AnarchitectsUiHeroComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/hero works!/gi)).toBeTruthy();
  },
};
