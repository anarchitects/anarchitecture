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
